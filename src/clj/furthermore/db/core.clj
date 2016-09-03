(ns furthermore.db.core
  "A facade for Monger with most functions customized for Furthermmore."
  (:require [clj-time.local :as ltime]
            [monger.core :as mg]
            [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :as mq]
            [monger.result :as mres]
            [mount.core :refer [defstate]]

            [furthermore.config :refer [env]]
            [furthermore.db.entities.events :as events]
            [furthermore.entities.references :as refs :refer [->ref ->refs]]
            [furthermore.twitter :as twitter]
            [furthermore.util :as util]))

(def kinds
  {:author "authors"
   :event "events"
   :follow "follows"
   :image "images"
   :link "links"
   :page "pages"
   :post "posts"
   :tag "tags"
   :topic "topics"})


;; -->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>- MOUNTAGE -->
(defstate db*
  :start (-> env :database-url mg/connect-via-uri)
  :stop (-> db* :conn mg/disconnect))

(defstate db
  :start (:db db*))


;; -->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--> COLLECTIONS -->
(defn create
  "Creates new collection name."
  [name]
  (let [name (name kinds)]
    (when-not (mc/exists? db name)
      (mc/create db name {:capped false}))))

(defn kill
  "Drops collection name as long as it is not empty."
  [name]
  (let [name (name kinds)]
    (when (and (mc/exists? db name)
               (not (mc/empty? db name)))
      (mc/drop db name))))

(defn clear
  "Removes all documents in a collection."
  [name]
  (let [name (name kinds)]
    (when (and (mc/exists? db name)
               (not (mc/empty? db name)))
      (mc/remove db name))))


;; -->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>- ENTITIES -->
(declare log tweet)

(defn entities
  "Returns entities from the database."
  ([kind]
   (map util/keywordize (mc/find-maps db (kind kinds))))
  ([kind criteria limit-by]
   (map util/keywordize (mq/with-collection db (kind kinds)
                         (mq/find {})
                         (mq/sort criteria)
                         (mq/limit limit-by)))))

(defn entity
  "Returns a single entity from the database. criterion is expected
  to be a map (e.g., {:_id 0de661a...})."
  ([kind criterion]
   (let [entity
         (if (contains? criterion :title)
           (mc/find-one-as-map db (kind kinds)
                               {:title
                                {$regex (:title criterion)
                                 $options "i"}})
           (mc/find-one-as-map db (kind kinds) criterion))]
     (when-not (nil? entity)
       (util/keywordize entity))))
  ([kind k v]
   (entity kind {k v}))
  ([ref]
   (entity (:kind ref) :_id (:_id ref))))

(defn search
  "Returns one or more entities from the database. criterion is
  expected to be a map (e.g., {:_id 0de661a...})."
  [kind criterion]
  (let [entities (mc/find-maps db (kind kinds)
                               {(first (keys criterion))
                                {$regex (first (vals criterion)) $options "i"}})]
    (when-not (nil? entities)
      (map util/keywordize entities))))

(defn delete
  "Deletes an entity from the database."
  [entity]
  (mc/remove-by-id db (kinds (:kind entity)) (:_id entity))
  (mc/insert db "events" (events/create :delete entity)))


;; -->>---> Saving -->>--->
(defn ancestor
  [e]
  (let [kind (:kind e)
        t (case kind
            :follow (entity :post :_id (get-in e [:parent :_id]))
            :post (entity :topic :_id (get-in e [:topic :_id])))]
    (refs/link e t)))

(defn authors
  [e]
  (map #(->> (entity :author :_id (:_id %))
             (refs/link e))
       (:authors e)))

(defn tags
  [e]
  (map #(->> (entity :tag :_id (:_id %))
             (refs/link e))
       (:tags e)))

(defn save*
  "Saves an entity to the database and returns the result."
  [entity]
  (let [log? (:log? entity)
        entity (-> entity
                   tweet
                   (update :created-on util/joda-date->java-date)
                   (assoc :last-updated (util/joda-date->java-date
                                         (ltime/local-now)))
                   (assoc :log? false)
                   (assoc :tweet? false))]
    (let [result (mc/upsert db ((:kind entity) kinds)
                            {:_id (:_id entity)} entity)]
      (when log? (log entity result))
      result)))

(defn save
  [entity]
  (let [kind (:kind entity)]
    (case kind
      (:author :page :tag) (save* entity)
      (:image :topic) (do (doseq [a (authors entity)] (save a))
                          (doseq [t (tags entity)] (save t))
                          (save* entity))
      (:post :follow) (do (doseq [a (authors entity)] (save a))
                          (doseq [t (tags entity)] (save t))
                          (save (ancestor entity))
                          (save* entity)))))


;; -->>---> Supplemental FNs -->>--->
(defn- log
  [entity result]
  (let [action (if (mres/updated-existing? result)
                 :update
                 :new)]
    (when-not (and (= :tag (:kind entity))
                   (= :update action))
      (let [entry (events/create action entity)]
        (mc/insert db "events"
                   (update entry :date util/joda-date->java-date))))))

(defn tweet
  [entity]
  (if (:tweet entity)
    (let [url (str "http://whatever.akiva.wtf/"
                   (util/url-path entity)
                   (util/url-date entity))
          resp (twitter/update (or (:title entity)
                                   (:body entity)) url)]
      (conj entity (second resp)))
    entity))
