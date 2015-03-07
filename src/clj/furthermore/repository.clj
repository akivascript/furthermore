(ns furthermore.repository
  (:require [clojure.string :as str]
            [clj-time.local :as l]
            [environ.core :refer [env]]
            [monger.collection :as mc]
            [monger.core :refer [connect-via-uri]]
            [monger.joda-time :refer :all]
            [monger.operators :refer :all]
            [monger.query :as mq]))

(defonce ^:private db (atom nil))
(defonce ^:private db-queue (atom {}))
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
  (mq/find @db-queue id))

(defn list-db-queue
  []
  @db-queue)

(defn clear-db-queue
  []
  (reset! db-queue {}))

(defn create-url
  [post]
  (let [title (-> (or (:title post)
                      "Untitled")
                  (str/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
                  (str/replace #" " "-")
                  str/lower-case)
        date (l/format-local-time (:created-on post) :date)]
   (str date "-" title)))

(defn parse-entity
  [entity]
  (let [entity (as-> entity e
                 (update e :type keyword)
                 (if-not (nil? (:parent e))
                   (update-in e [:parent :type] keyword)
                   e)
                 (if-not (nil? (:topic e))
                   (update-in e [:topic :type] keyword)
                   e))
        refs (:references entity)]
    (if-not (empty? refs)
      (reduce #(update-in %1 [:references (.indexOf refs %2) :type] keyword) entity refs)
      entity)))

(defn read-entities
  ([type]
   (map parse-entity (mc/find-maps @db (type types))))
  ([type criteria limit-by]
   (mq/with-collection @db (type types)
     (mq/find {})
     (mq/sort criteria)
     (mq/limit limit-by))))

(defn read-entity
  [type criterion]
  (let [entity (mc/find-one-as-map @db (type types) criterion)]
    (parse-entity entity)))

(defn find-entities
  [type criterion]
  (let [entities (mc/find-maps @db (type types)
                               {(first (keys criterion))
                                {$regex (first (vals criterion)) $options "i"}})]
    (map parse-entity entities)))

(defn save-entity
  [entity]
  (let [type (:type entity)
        entity (assoc entity :last-updated (l/local-now))
        entity (if (= type :post)
                 (assoc entity :url (create-url entity))
                 entity)]
        (mc/upsert @db (type types) {:_id (:_id entity)} entity)))

(defn process-db-queue
  []
  (doseq [entity (vals @db-queue)]
    (save-entity entity)))

(defn initialize-db-connection
  []
  (reset! db (:db (connect-via-uri (env :database-uri)))))
