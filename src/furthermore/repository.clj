(ns furthermore.repository
  (:require [environ.core :refer [env]]
            [monger.collection :refer [upsert remove]]
            [monger.core :refer [connect-via-uri]]
            [monger.joda-time :refer :all]))

(def ^:private db (atom nil))
(def ^:private db-queue (atom {}))

(defn add-db-queue
  [entity]
  (swap! db-queue assoc (:_id entity) entity))

(defn update-db-queue
  [entity]
  (swap! db-queue update (:_id entity) entity))

(defn get-db-queue
  [id]
  (val (find @db-queue id)))

(defn list-db-queue
  []
  @db-queue)

(defn clear-db-queue
  []
  (reset! db-queue {}))

(defmulti save-entity :type)

(defmethod save-entity :post [entity]
  (upsert @db "posts" {:_id (:_id entity)} entity))

(defmethod save-entity :topic [entity]
  (upsert @db "topics" {:_id (:_id entity)} entity))

(defn process-db-queue
  []
  (doseq [entity (vals @db-queue)]
    (save-entity entity)))

(defn initialize-db-connection
  []
  (reset! db (:db (connect-via-uri (env :database-uri)))))
