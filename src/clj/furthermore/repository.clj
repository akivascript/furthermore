(ns furthermore.repository
  (:require [clj-time.local :as l]
            [environ.core :refer [env]]
            [monger.collection :as mc]
            [monger.core :refer [connect-via-uri]]
            [monger.joda-time :refer :all]
            [monger.operators :refer :all]
            [monger.query :as mq]))

(def ^:private db (atom nil))
(def ^:private db-queue (atom {}))
(def types
  {:post "posts"
   :topic "topics"})

(defn add-db-queue
  [entity]
  (swap! db-queue assoc (:_id entity) entity))

(defn update-db-queue
  [entity]
  (swap! db-queue update (:_id entity) entity))

(defn get-db-queue
  [id]
  (val (mq/find @db-queue id)))

(defn list-db-queue
  []
  @db-queue)

(defn clear-db-queue
  []
  (reset! db-queue {}))

(defn parse-entity
  [entity]
  (let [entity (as-> entity e
                   (update e :type keyword)
                   (if-not (nil? (:parent e))
                     (update-in e [:parent :type] keyword)
                     e))
        refs (:references entity)]
    (if-not (empty? refs)
      (reduce #(update-in %1 [:references (.indexOf refs %2) :type] keyword) entity refs)
      entity)))

(defn read-entities
  ([type]
   (map parse-entity (mc/find-maps @db type)))
  ([type criteria limit-by]
   (mq/with-collection @db type
     (mq/find {})
     (mq/sort criteria)
     (mq/limit limit-by))))

(defn read-entity
  [type request]
  (let [entity (mc/find-map-by-id @db (name type) (:_id request))]
    (parse-entity entity)))

(defn find-entities
  [type field criterion]
  (mc/find-maps @db (name type)
                {(keyword field) {$regex (name criterion) $options "i"}}))

(defn save-entity
  [type entity]
  (let [entity (assoc entity :last-updated (l/local-now))]
    (mc/upsert @db (type types) {:_id (:_id entity)} entity)))

(defn process-db-queue
  []
  (doseq [entity (vals @db-queue)]
    (save-entity (:type entity) entity)))

(defn initialize-db-connection
  []
  (reset! db (:db (connect-via-uri (env :database-uri)))))
