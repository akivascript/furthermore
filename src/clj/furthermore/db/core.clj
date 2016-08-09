(ns furthermore.db.core
  (:require [clj-time.local :as ltime]
            [monger.core :as mg]
            [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :as mq]
            [monger.result :as mres]
            [mount.core :refer [defstate]]

            [furthermore.config :refer [env]]
            [furthermore.db.entities.updates :as updates]
            [furthermore.db.queue :as queue]
            [furthermore.twitter :as twitter]
            [furthermore.util :as util]))

(defstate db*
  :start (-> env :database-url mg/connect-via-uri)
  :stop (-> db* :conn mg/disconnect))

(defstate db
  :start (:db db*))

(def kinds
  {:author "authors"
   :follow "follows"
   :image "images"
   :link "links"
   :page "pages"
   :post "posts"
   :tag "tags"
   :topic "topics"
   :update "updates"})

(declare log parse tweet)

(defn entities
  "Returns entities from the database."
  ([kind]
   (map parse (mc/find-maps db (kind kinds))))
  ([kind criteria limit-by]
   (mq/with-collection db (kind kinds)
     (mq/find {})
     (mq/sort criteria)
     (mq/limit limit-by))))

(defn entity
  "Returns a single entity from the database. criterion is expected
  to be a map (e.g., {:_id 0de661a...})."
  ([kind criterion]
   (let [entity (if (contains? criterion :title)
                  (mc/find-one-as-map db (kind kinds) {:title
                                                       {$regex (:title criterion)
                                                        $options "i"}})
                  (mc/find-one-as-map db (kind kinds) criterion))]
     (when-not (nil? entity)
       (parse entity))))
  ([kind k v]
   (entity kind {k v})))

(defn- log
  [entity result]
  (let [action (if (mres/updated-existing? result)
                 :update
                 :new)]
    (when-not (and (= :tag (:kind entity))
                   (= :update action))
      (let [entry (updates/create entity action)]
        (mc/insert db "updates" (update entry :date util/joda-date->java-date))))))

(defn parse
  "Keywordizes values in an entity."
  [entity]
  (let [entity (-> entity
                   (util/keywordize :kind)
                   (util/keywordize :parent :kind)
                   (util/keywordize :topic :kind))
        refs (:refs entity)]
    (if (and (map? refs)
             (seq refs))
      (reduce (fn [m ref] (update-in m [:refs (.indexOf refs ref) :kind] keyword))
              entity
              refs)
      entity)))

(defn delete
  "Deletes an entity from the database."
  [entity]
  (mc/remove-by-id db (kinds (:kind entity)) (:_id entity))
  (mc/insert db "updates" (updates/create entity :delete)))

(defn save
  "Saves an entity to the database and returns the result."
  [entity]
  (let [log? (:log? entity)
        entity (-> entity
                   tweet
                   (update :created-on util/joda-date->java-date)
                   (assoc :last-updated (util/joda-date->java-date (ltime/local-now)))
                   (assoc :log? false)
                   (assoc :tweet? false))]
    (let [result (mc/upsert db ((:kind entity) kinds) {:_id (:_id entity)} entity)]
      (when log? (log entity result))
      result)))

(defn search
  "Returns one or more entities from the database. criterion is
  expected to be a map (e.g., {:_id 0de661a...})."
  [kind criterion]
  (let [entities (mc/find-maps db (kind kinds)
                               {(first (keys criterion))
                                {$regex (first (vals criterion)) $options "i"}})]
    (when-not (nil? entities)
      (map parse entities))))

(defn tweet
  [entity]
  (if (:tweet entity)
    (let [url (str util/site-url
                   (util/url-path entity)
                   (util/url-date entity))
          resp (twitter/update (or (:title entity)
                                   (:body entity)) url)]
      (conj entity (second resp)))
    entity))
