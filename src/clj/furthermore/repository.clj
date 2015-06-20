(ns furthermore.repository
  (:require [clojure.pprint :refer [pprint]]

            [clj-time.local :refer [local-now]]
            [environ.core :refer [env]]
            [monger.collection :as mc]
            [monger.core :refer [connect-via-uri]]
            [monger.joda-time :refer :all]
            [monger.operators :refer [$options $regex]]
            [monger.query :refer [find limit sort with-collection]]
            [monger.result :refer [updated-existing?]]
            [monger.util :refer [random-uuid]]

            [furthermore.utils :refer [create-url-date
                                       create-url-name
                                       create-url-path
                                       get-excerpt
                                       keywordize
                                       site-url]]
            [furthermore.twitter :refer [update-twitter-status]]))

(def kinds
  {:update "updates"
   :follow-up "posts"
   :post "posts"
   :page "pages"
   :tag "tags"
   :topic "topics"})

;;
;; Database stuff
;;
(defonce db (atom nil))

(defn initialize-db-connection
  "Establishes a connection to the database."
  [& {:keys [uri]}]
  (reset! db (:db (connect-via-uri (or uri (env :blog-database-uri))))))

;;
;; Entities stuff
;;
(defrecord Update
    [_id action date kind parent ref title topic url])

(defn create-update
  "Creates an update entry for a newly added or updated entity."
  [params]
  (let [{:keys [_id action date entity kind parent ref title topic url]
         :or {_id (random-uuid)
              date (:last-updated entity)
              kind (:kind entity)
              parent (:parent entity)
              ref (:_id entity)
              title (or (:title entity)
                        (get-excerpt (:body entity) 50))
              topic (:topic entity)
              url (:url entity)}} params]
    (map->Update {:_id _id
                  :action (keyword action)
                  :date date
                  :kind kind
                  :parent parent
                  :ref ref
                  :title title
                  :topic topic
                  :url url})))

(defn remove-entity
  "Removes an entity from the database."
  [entity]
  (mc/remove-by-id @db (kinds (:kind entity)) (:_id entity)))

(defn parse-entity
  "Keywordizes values in an entity loaded from the database."
  [entity]
  (let [entity (-> entity
                 (keywordize :kind)
                 (keywordize :parent :kind)
                 (keywordize :topic :kind))
        refs (:refs entity)]
    (if (and (map? refs)
             (seq refs))
      (reduce #(update-in %1 [:refs (.indexOf refs %2) :kind] keyword) entity refs)
      entity)))

(defn read-entities
  "Returns entities from the database."
  ([kind]
   (map parse-entity (mc/find-maps @db (kind kinds))))
  ([kind criteria limit-by]
   (with-collection @db (kind kinds)
     (find {})
     (sort criteria)
     (limit limit-by))))

(defn read-entity
  "Returns a single entity from the database. criterion is expected
  to be a map (e.g., {:_id 0de661a...})."
  [kind criterion]
  (let [entity (if (contains? criterion :title)
                 (mc/find-one-as-map @db (kind kinds) {:title
                                                    {$regex (:title criterion)
                                                     $options "i"}})
                 (mc/find-one-as-map @db (kind kinds) criterion))]
    (when-not (nil? entity)
      (parse-entity entity))))

(defn find-entities
  "Returns one or more entities from the database. criterion is
  expected to be a map (e.g., {:_id 0de661a...})."
  [kind criterion]
  (let [entities (mc/find-maps @db (kind kinds)
                               {(first (keys criterion))
                                {$regex (first (vals criterion)) $options "i"}})]
    (map parse-entity entities)))

(defn save-entity
  "Saves an entity to the database and returns the result."
  [entity]
  (let [kind (:kind entity)
        log? (:log? entity)
        entity (if (true? (:tweet entity))
                 (let [url (str site-url (create-url-path entity) (create-url-date entity))
                       resp (update-twitter-status (or (:title entity) (:body entity)) url)]
                   (conj entity (second resp)))
                 entity)
        entity (-> entity
                   (assoc :last-updated (local-now))
                   (dissoc :log?)
                   (dissoc :tweet))]
    (let [result (mc/upsert @db (kind kinds) {:_id (:_id entity)} entity)]
      (when log?
        (let [action (if (updated-existing? result)
                     :update
                     :new)]
          (when-not (and (= kind :tag)
                         (= action :update))
            (mc/insert @db "updates" (create-update {:action action :entity entity})))))
      result)))

;;
;; Database queue stuff
;;
(defonce ^:private db-queue (atom {}))

(defn process-db-queue
  "Adds or updates each entity currently in the database queue."
  []
  (doseq [entity (vals @db-queue)]
    (save-entity entity)))

(defn add-db-queue!
  "Adds an entity to the database queue."
  [entity]
  (swap! db-queue assoc (:_id entity) entity))

(defn update-db-queue!
  "Adds an entity to the database queue."
  [entity]
  (add-db-queue! entity))

(defn get-db-queue
  "Returns an entity from the database queue."
  [id]
  (find @db-queue id))

(defn list-db-queue
  "Returns a map of database queue."
  []
  @db-queue)

(defn clear-db-queue!
  "Removes all entities from the database queue."
  []
 (reset! db-queue {}))
