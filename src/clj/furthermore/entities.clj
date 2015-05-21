(ns furthermore.entities
  (:require [clojure.string :as string]

            [clj-time.local :as l :refer [local-now]]
            [monger.util :refer [random-uuid]]

            [furthermore.repository :refer [add-db-queue!
                                            clear-db-queue!
                                            create-update
                                            list-db-queue
                                            process-db-queue
                                            read-entities
                                            read-entity]]
            [furthermore.utils :refer [joda-date->java-date
                                       create-entity-url
                                       create-url-name]]))

(declare get-entities)
(declare get-entity)

;;
;; Authors
;;
(defrecord Author
    [name works])

(defn create-author
  ([params]
   (if (string? params)
     (map->Author {:name params
                   :works #{}})
     (let [{:keys [name works]
            :or {name "John Doe"
                 works #{}}} params]
       (map->Author {:name name
                     :works works})))))

(defn author?
  "Returns true if x is an Author."
  [x]
  (instance? Author x))

;;
;; References
;;
(defrecord Reference
    [_id kind])

(defprotocol References
  (->ref [ref]))

(extend-protocol References
  furthermore.entities.Reference
  (->ref [ref] ref)

  clojure.lang.PersistentArrayMap
  (->ref [ref] (create-reference ref))

  java.lang.String
  (->ref [ref]
    (create-reference (first (string/split ref #"\|"))
                      (second (string/split ref #"\|")))))

(defn create-reference
  "Returns a Reference which links entities to each other."
  ([params]
   (let [{:keys [_id kind]} params]
     (create-reference _id (keyword kind))))
  ([id kind]
   (map->Reference {:_id id
                    :kind (keyword kind)})))

(defn reference?
  "Returns true if x is a Reference."
  [x]
  (instance? Reference x))

;;
;; Tags
;;
(defrecord Tag
    [_id created-on kind last-updated log? name refs])

(defprotocol Tags
  (->tags [tags]))

(extend-protocol Tags
  furthermore.entities.Tag
  (->tags [tags] tags)

  clojure.lang.PersistentArrayMap
  (->tags [tags] tags)

  java.lang.String
  (->tags
    [tags]
    (set (map string/trim (string/split tags #";|,"))))

  clojure.lang.PersistentVector
  (->tags
    [tags]
    (into #{} tags)))

(defn create-tag
  "Returns a tag entity."
  [params]
  (let [{:keys [_id created-on last-updated log? name refs]
         :or {_id (random-uuid)
              created-on (local-now)
              log? true
              name "Miscellania"
              refs #{}}} params]
    (map->Tag {:_id _id
               :created-on created-on
               :kind :tag
               :last-updated last-updated
               :log? log?
               :name name
               :refs (into #{} refs)})))

(defn tag-by-name
  [name]
  (get-entity {:name name} :tags))

;;
;; Posts
;;
(declare get-topic)

(defrecord Post
    [_id authors body created-on excerpt kind last-updated
     log? parent refs subtitle tags title topic url])

(defn create-post
  "Takes a map as input and requires both parent and topic records. Produces
  a Post record."
  [params]
  (let [date (local-now)
        {:keys [_id authors body created-on excerpt last-updated
                log? parent subtitle refs tags title topic url]
         :or {authors ["John Doe"]
              body "Somebody forgot to actually write the post."
              created-on date
              _id (random-uuid)
              log? true
              refs #{}
              tags #{}
              title "New Post"
              url (create-entity-url date title)}} params]
    (map->Post {:_id _id
                :authors (mapv create-author authors)
                :body body
                :created-on created-on
                :excerpt excerpt
                :kind :post
                :log? log?
                :parent (->ref parent)
                :refs (set (map ->ref refs))
                :subtitle subtitle
                :tags (->tags tags)
                :title title
                :topic (->ref topic)
                :url url})))

(defn post?
  "Returns true if x is a post."
  [x]
  (instance? Post x))

(defn get-post
  "Returns a post from id."
  [id]
  (get-entity {:_id id} :post))

(defrecord Follow-Up
    [_id authors body created-on excerpt kind log? parent refs tags url])

(defn create-follow-up
  "Takes a map as input and requires a parent record. Produces a Follow-up record."
  [params]
  (let [{:keys [_id authors created-on body excerpt last-updated log? parent refs tags url]
         :or {authors [(create-author {})]
              body "Somebody forgot to actually write the follow-up."
              created-on (local-now)
              _id (random-uuid)
              log? true
              refs #{}
              tags #{}}} params]
    (map->Follow-Up {:_id _id
                     :authors authors
                     :body body
                     :created-on created-on
                     :excerpt excerpt
                     :kind :follow-up
                     :last-updated last-updated
                     :log? log?
                     :parent (->ref parent)
                     :refs (set (map ->ref refs))
                     :tags (->tags tags)
                     :url url})))

(defn get-follow-up
  "Returns a follow-up from id."
  [id]
  (get-entity {:_id id} :follow-up))

(defn get-parent
  "Returns the parent entity of an entity."
  [entity]
  (let [parent (:parent entity)]
    (get-entity {:_id (:_id parent)} (:kind parent))))

;;
;; Static Pages
;;
(defrecord Page
    [_id authors body created-on kind last-updated tags title url])

(defn create-page
  [params]
  (let [{:keys [_id authors body created-on last-updated tags title url]
         :or {_id (random-uuid)
              authors [(create-author {})]
              body "Somebody forgot to write the text for this page."
              created-on (local-now)
              tags #{}
              title "New Page"
              url (create-url-name title)}} params]
    (map->Page {:_id _id
                :authors authors
                :body body
                :created-on created-on
                :kind :static
                :last-updated last-updated
                :tags ()
                :title title
                :url url})))

(defn get-page
  "Returns a static page by url."
  [url]
  (get-entity url :static))

;;
;; Topics
;;
(defrecord Topic
    [_id authors created-on kind last-updated log? tags title refs url])

(defn create-topic
  "Returns a topic entity along with its parent."
  [params]
  (let [{:keys [_id authors created-on last-updated log? tags title refs url]
         :or {_id (random-uuid)
              authors ["John Doe"]
              created-on (local-now)
              log? true
              refs #{}
              tags #{}
              title "New Topic"}} params]
    (map->Topic {:_id _id
                 :authors (map create-author authors)
                 :created-on created-on
                 :kind :topic
                 :last-updated last-updated
                 :log? log?
                 :tags (->tags tags)
                 :title title
                 :refs (into #{} refs)
                 :url url})))

(defn get-topic
  "Returns a topic by id or from a post."
  [x]
  (cond
      (string? x) (get-entity {:_id x} :topic)
      (reference? x) (get-entity {:_id (:_id x)} :topic)
      :else
      (get-entity (get-in x [:topic :_id] :topic))))

;;
;; General Entity Functions
;;
; The Ministry of Information Retrieval
(defmulti get-entity (fn [criterion kind] kind))

(defn- get-entity*
  [fn criterion kind]
  (fn (read-entity kind criterion)))

(defmethod get-entity :follow-up
  [criterion kind]
  (get-entity* create-follow-up criterion kind))

(defmethod get-entity :post
  [criterion kind]
  (get-entity* create-post criterion kind))

(defmethod get-entity :static
  [criterion kind]
  (get-entity* create-page criterion kind))

#_(defmethod get-entity :tag
  [criterion kind]
  (when-let [tag (read-entity kind criterion)]
    (get-entity* create-topic criterion kind)))

(defmethod get-entity :topic
  [criterion kind]
  (get-entity* create-topic criterion kind))

(defmulti get-entities identity)

(defmethod get-entities :follow-ups
  [_]
  (->> (read-entities :post)
       (filter #(contains? #{:follow-up} (keyword (:kind %))))
       (map create-follow-up)
       vec))

(defmethod get-entities :posts
  [_]
  (->> (read-entities :post)
       (filter #(contains? #{:post} (keyword (:kind %))))
       (map create-post)
       vec))

(defmethod get-entities :topics
  [_]
  (->> (read-entities :topic)
       (map create-topic)
       (sort-by :title)
       vec))

(defmethod get-entities :updates
  [_]
  (->> (read-entities :update)
       (map create-update)
       (sort-by :date)
       reverse
       vec))

; The Ministry of Information Retention
(defprotocol AddEntity
  (add-entity [entity]))

(defn- commit-entities
  []
  (process-db-queue)
  (clear-db-queue!))

(extend-protocol AddEntity
  furthermore.entities.Post
  (add-entity
    [entity]
    (let [parent (:parent entity)
          parent (-> (get-entity {:_id (:_id parent)} (:kind parent))
                     (update :refs conj (create-reference entity))
                     (assoc :log? false))]
      (doseq [e [entity parent]] (add-db-queue! e))
      (println entity)
      (commit-entities)))

  furthermore.entities.Follow-Up
  (add-entity
    [entity]
    (let [parent (-> (get-post (get-in entity [:parent :_id]))
                     (update :refs conj (create-reference entity))
                     (assoc :log? false))
          entity (assoc entity :topic (:topic parent))]
      (println "Parent: " parent)
      (println "Entity: " entity)
      (doseq [e [entity parent]] (add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Tag
  (add-entity
    [entity]
    (add-db-queue! entity)
    (commit-entities))

  furthermore.entities.Topic
  (add-entity
    [entity]
    (add-db-queue! entity)
    (commit-entities)))
