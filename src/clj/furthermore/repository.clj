(ns furthermore.repository
  (:require [clj-time.local :refer [local-now]]
            [environ.core :refer [env]]
            [monger.collection :refer [find-maps find-one-as-map insert upsert]]
            [monger.core :refer [connect-via-uri]]
            [monger.joda-time :refer :all]
            [monger.operators :refer [$options $regex]]
            [monger.query :refer [find limit sort with-collection]]
            [monger.result :refer [updated-existing?]]

            [furthermore.utils :refer [create-url-date create-url-name get-excerpt]]))

(defonce ^:private db (atom nil))
(defonce ^:private db-queue (atom {}))
(def types
  {:log "log"
   :follow-up "posts"
   :post "posts"
   :static "pages"
   :topic "topics"})

(defn add-db-queue!
  [entity]
  (swap! db-queue assoc (:_id entity) entity))

(defn update-db-queue!
  [entity]
  (add-db-queue! entity))

(defn get-db-queue
  [id]
  (find @db-queue id))

(defn list-db-queue
  []
  @db-queue)

(defn clear-db-queue!
  []
  (reset! db-queue {}))

(defn create-log-entry
  [kind entity]
  (let [text (or (:title entity)
                 (get-excerpt (:body entity) 50))]
    {:kind kind
     :type (:type entity)
     :date (:last-updated entity)
     :title text
     :ref (:_id entity)
     :topic (get-in entity [:topic :_id])
     :url (or (:url entity)
              (:_id entity))}))

(defn loggable?
  [entity]
  (and (case (:type entity)
         (:post :topic :static) true?
         false)
       (contains? entity :log)
       (:log entity)))

(defn parse-entity
  [entity]
  (let [entity (as-> entity e
                 (update e :type keyword)
                 (if-not (nil? (get-in e [:parent :type]))
                   (update-in e [:parent :type] keyword)
                   e)
                 (if-not (nil? (get-in e [:topic :type]))
                   (update-in e [:topic :type] keyword)
                   e))
        refs (:references entity)]
    (if-not (empty? refs)
      (reduce #(update-in %1 [:references (.indexOf refs %2) :type] keyword) entity refs)
      entity)))

(defn read-entities
  ([type]
   (map parse-entity (find-maps @db (type types))))
  ([type criteria limit-by]
   (with-collection @db (type types)
     (find {})
     (sort criteria)
     (limit limit-by))))

(defn read-entity
  [type criterion]
  (let [entity (find-one-as-map @db (type types) criterion)]
    (parse-entity entity)))

(defn find-entities
  [type criterion]
  (let [entities (find-maps @db (type types)
                               {(first (keys criterion))
                                {$regex (first (vals criterion)) $options "i"}})]
    (map parse-entity entities)))

(defn save-entity
  [entity]
  (let [type (:type entity)
        entity (assoc entity :last-updated (local-now))
        entity (if (or (= type :topic)
                       (= type :static))
                 (assoc entity :url (create-url-name entity))
                 entity)
        entity (if (or (= type :post)
                       (= type :follow-up))
                 (assoc entity :url (create-url-date entity))
                 entity)
        result (upsert @db (type types) {:_id (:_id entity)} entity)]
    (when (loggable? entity)
      (let [kind (if (updated-existing? result)
                   :update
                   :new)]
        (insert @db "log" (create-log-entry kind entity))))))

(defn process-db-queue
  []
  (doseq [entity (vals @db-queue)]
    (save-entity entity)))

(defn initialize-db-connection
  [& {:keys [uri]}]
  (reset! db (:db (connect-via-uri (or uri (env :database-uri))))))
