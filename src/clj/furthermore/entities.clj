(ns furthermore.entities
  (:require [clojure.string :as string]

            [clj-time.local :as l :refer [local-now]]
            [monger.util :refer [random-uuid]]

            [furthermore.formatters :as formatters :refer :all]
            [furthermore.repository :refer :all]
            [furthermore.utils :refer :all]))

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

(defn create-reference
  "Returns a Reference which links entities to each other."
  ([params]
   (let [{:keys [_id kind]} params]
     (create-reference _id (keyword kind))))
  ([id kind]
   (map->Reference {:_id id
                    :kind (keyword kind)})))

(defprotocol References
  (->ref [ref]))

(extend-protocol References
  furthermore.entities.Reference
  (->ref [ref] ref)

  clojure.lang.IPersistentMap
  (->ref [ref] (create-reference ref))

  java.lang.String
  (->ref [ref]
    (create-reference (first (string/split ref #"\|"))
                      (second (string/split ref #"\|")))))

(defn reference?
  "Returns true if x is a Reference."
  [x]
  (instance? Reference x))

;;
;; Tags
;;
(declare create-tag)

(defrecord Tag
    [_id created-on kind last-updated log? title refs url])

(defprotocol Tags
  (->tags [tags]))

(extend-protocol Tags
  clojure.lang.PersistentHashSet
  (->tags [tags] (map create-tag tags))

  furthermore.entities.Tag
  (->tags [tag] tag)

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

(defn- create-tag*
  [params]
  (let [{:keys [_id created-on last-updated log? title refs url]
         :or {_id (random-uuid)
              created-on (local-now)
              log? true
              title "Miscellania"
              refs #{}
              url (create-url-name title)}} params]
    (map->Tag {:_id _id
               :created-on created-on
               :kind :tag
               :last-updated last-updated
               :log? log?
               :title title
               :refs (set (map ->ref refs))
               :url url})))

(defn create-tag
  "Returns a tag entity."
  [x]
  (if (map? x)
    (create-tag* x)
    (create-tag* {:title x})))

(defn get-tag
  [title]
  (get-entity {:title title} :tag))

(defn get-tag-by-url
  [url]
  (get-entity {:url url} :tag))

(defn get-tags
  []
  (get-entities :tags))

;;
;; Posts
;;
(declare get-topic)

(defrecord Post
    [_id authors body created-on excerpt kind last-updated
     log? parent refs source-body source-excerpt subtitle tags title topic url])

(defn create-post
  "Takes a map as input and requires both parent and topic records. Produces
  a Post record."
  [params]
  (let [date (local-now)
        {:keys [_id authors body created-on excerpt last-updated
                log? parent source subtitle refs tags title topic url]
         :or {authors ["John Doe"]
              created-on date
              _id (random-uuid)
              log? true
              refs #{}
              source {:body "*Somebody* forgot to actually write the post."
                      :excerpt nil}
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
                :source source
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
  [x]
  (cond
    (uuid? x) (get-entity {:_id x} :post)
    :else
    (get-post (:_id x))))

(defn get-posts
  "Returns all posts."
  []
  (get-entities :posts))

(defrecord Follow-Up
    [_id authors body created-on excerpt kind last-updated
     log? parent refs source tags topic url])

(defn create-follow-up
  "Takes a map as input and requires a parent record. Produces a Follow-up record."
  [params]
  (let [{:keys [_id authors body created-on excerpt last-updated
                log? parent refs source tags topic url]
         :or {authors [(create-author {})]
              created-on (local-now)
              _id (random-uuid)
              log? true
              refs #{}
              source {:body "Somebody forgot to actually write the follow-up."
                      :excerpt nil}
              tags #{}
              topic (get-in parent [:topic :_id])
              url (create-url-name _id)}} params]
    (map->Follow-Up {:_id _id
                     :authors (mapv create-author authors)
                     :body body
                     :created-on created-on
                     :excerpt excerpt
                     :kind :follow-up
                     :last-updated last-updated
                     :log? log?
                     :parent (->ref parent)
                     :refs (set (map ->ref refs))
                     :source source
                     :tags (->tags tags)
                     :topic (->ref topic)
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
    [_id authors body created-on last-updated log? source tags title url])

(defn create-page
  [params]
  (let [{:keys [_id authors body created-on last-updated log? source tags title url]
         :or {_id (random-uuid)
              authors [(create-author {})]
              created-on (local-now)
              source "Somebody forgot to write the text for this page."
              log? true
              tags #{}
              title "New Page"
              url (create-url-name title)}} params]
    (map->Page {:_id _id
                :authors (mapv create-author authors)
                :body body
                :created-on created-on
                :kind :static
                :last-updated last-updated
                :log? log?
                :source source
                :tags (set (->tags tags))
                :title title
                :url url})))

(defn get-page
  "Returns a static page by url."
  [url]
  (get-entity {:url url} :static))

(defn get-pages
  "Returns all pages."
  []
  (get-entities :pages))

;;
;; Topics
;;
(defrecord Topic
    [_id authors body created-on kind
     last-updated log? source tags title refs url])

(defn- create-topic*
  [params]
  (let [{:keys [_id authors body created-on last-updated
                log? source tags title refs url]
         :or {_id (random-uuid)
              authors ["John Doe"]
              created-on (local-now)
              log? true
              refs #{}
              source "*Somebody* forgot to write a description."
              tags #{}
              title "New Topic"
              url (create-url-name title)}} params]
    (map->Topic {:_id _id
                 :authors (mapv create-author authors)
                 :created-on created-on
                 :body body
                 :kind :topic
                 :last-updated last-updated
                 :log? log?
                 :source source
                 :tags (->tags tags)
                 :title title
                 :refs (set (map ->ref refs))
                 :url url})))

(defn create-topic
  "Returns a topic entity."
  [x]
  (if (map? x)
    (create-topic* x)
    (create-topic* {:title x})))

(defn get-topic
  "Returns a topic by id or from a post."
  [x]
  (cond
    (uuid? x) (get-entity {:_id x} :topic)
    (string? x) (get-entity {:url x} :topic)
    (reference? x) (get-entity {:_id (:_id x)} :topic)
    :else
    (get-entity (get-in x [:topic :_id]) :topic)))

(defn get-topics
  "Returns all topics."
  []
  (get-entities :topics))

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

(defmethod get-entity :tag
  [criterion kind]
  (if-let [tag (read-entity kind criterion)]
    (create-tag tag)
    (create-tag criterion)))

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

(defmethod get-entities :pages
  [_]
  (->> (read-entities :static)
       (map create-page)
       (sort-by :title)
       vec))

(defmethod get-entities :posts
  [_]
  (->> (read-entities :post)
       (filter #(contains? #{:post} (keyword (:kind %))))
       (map create-post)
       vec))

(defmethod get-entities :tags
  [_]
  (->> (read-entities :tag)
       (map create-tag)
       (sort-by :title)
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
                     (assoc :log? false))
          source (:source entity)
          entity (-> entity
                     (assoc :body (formatters/mmd->html (:body source)))
                     (assoc :excerpt (formatters/mmd->html (:excerpt source))))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :post))
                    (:tags entity))]
      (doseq [e (apply merge [entity parent] tags)] (add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Follow-Up
  (add-entity
    [entity]
    (let [parent (-> (get-post (get-in entity [:parent :_id]))
                     (update :refs conj (create-reference entity))
                     (assoc :log? false))
          source (:source entity)
          entity (-> entity
                     (assoc :body (formatters/mmd->html (:body source)))
                     (assoc :excerpt (formatters/mmd->html (:excerpt source))))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :follow-up))
                    (:tags entity))]
      (doseq [e (apply merge [entity parent] tags)] (add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Page
  (add-entity
    [entity]
    (let [entity (assoc entity :body (formatters/mmd->html (:source entity)))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :static))
                    (:tags entity))]
      (doseq [e (apply merge [entity] tags)] (add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Tag
  (add-entity
    [tag]
    (add-db-queue! (assoc tag :log? true))
    (commit-entities))

  furthermore.entities.Topic
  (add-entity
    [entity]
    (let [entity (assoc entity :body (formatters/mmd->html (:source entity)))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :topic))
                    (:tags entity))]
      (doseq [e (apply merge [entity] tags)] (add-db-queue! e))
      (commit-entities))))
