(ns furthermore.repository
  (:require [clojure.string :as str]
            [clj-time.local :as l]
            [environ.core :refer [env]]
            [monger.collection :as mc]
            [monger.core :refer [connect-via-uri]]
            [monger.joda-time :refer :all]
            [monger.operators :refer :all]
            [monger.query :as mq]
            [furthermore.utils :refer :all]))

(defonce ^:private db (atom nil))
(defonce ^:private db-queue (atom {}))
(def types
  {:log "log"
   :post "posts"
   :topic "topics"})

(defn add-db-queue!
  [entity]
  (letfn [(put [e] (swap! db-queue assoc (:_id e) e))]
    (if (coll? entity)
      (doseq [e (vals entity)] (put e))
      (put entity))))

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

(defn process-name
  [entity]
  (-> (or (:title entity)
          "Untitled")
      (str/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
      (str/replace #" " "-")
      str/lower-case))

(defn create-log-entry
  [kind entity]
  (let [text (or (:title entity)
                 (get-excerpt (:body entity) 50))]
    {:kind kind
     :type (:type entity)
     :date (:last-updated entity)
     :title text
     :ref (:_id entity)
     :url (or (:url entity)
              (:_id entity))}))

(defn create-url
  [post]
  (let [title (process-name post)
        date (l/format-local-time (:created-on post) :date)]
   (str date "-" title)))

(defn loggable?
  [entity]
  (and (case (:type entity)
         (:post :topic) true?
         false)
       (contains? entity :log)
       (:log entity)))

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
        entity (if (= type :topic)
                 (do
                   (update-in entity [:last-updated] (l/local-now))
                   (assoc entity :url (process-name entity)))
                 entity)
        entity (if (= type :post)
                 (assoc entity :url (create-url entity))
                 entity)
        result (mc/upsert @db (type types) {:_id (:_id entity)} entity)]
    (when (loggable? entity)
      (let [kind (if (monger.result/updated-existing? result)
                   :update
                   :new)]
        (mc/insert @db "log" (create-log-entry kind entity))))))

(defn process-db-queue
  []
  (doseq [entity (vals @db-queue)]
    (save-entity entity)))

(defn initialize-db-connection
  []
  (reset! db (:db (connect-via-uri (env :database-uri)))))
