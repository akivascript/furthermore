(ns furthermore.entities
  (:require [clojure.string :as str :refer [split]]

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

(defn reference?
  "Returns true if x is a Reference."
  [x]
  (instance? Reference x))

(defn link-kind
  [link]
  (second (str/split link #"\|")))

(defn link-id
  [link]
  (first (str/split link #"\|")))

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
              title "New Post"
              url (create-entity-url date title)}} params]
    (map->Post {:_id _id
                :authors (mapv create-author authors)
                :body body
                :created-on created-on
                :excerpt excerpt
                :kind :post
                :log? log?
                :parent (cond
                          (reference? parent) parent
                          (string? parent) (apply create-reference
                                                  ((juxt link-id link-kind) parent))
                          :else
                          (create-reference parent))
                :refs refs
                :subtitle subtitle
                :tags (into #{} tags)
                :title title
                :topic (cond
                          (reference? topic) topic
                          (string? topic) (apply create-reference
                                                 ((juxt link-id link-kind) topic))
                          :else
                          (create-reference topic))
                :url url})))

(defn post?
  "Returns true if x is a post."
  [x]
  (instance? Post x))

(defn add-post
  "Adds a post entity and its updated parent to the repository."
  [entity]
  (let [parent (:parent entity)
        parent (case (:kind parent)
                 :topic (get-entity {:_id (:_id parent)} :topic)
                 (get-entity {:_id (:_id parent)} :post))
        parent (update parent :refs conj (create-reference entity))
        parent (assoc parent :log? false)
        entity (if (= :follow-up (:kind entity))
                 (assoc entity :topic (create-reference
                                       (get-in parent [:topic :_id])
                                       :topic))
                 entity)]
    (clear-db-queue!)
    (add-db-queue! entity)
    (add-db-queue! parent)
    (process-db-queue)
    (clear-db-queue!)))

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
              log? true}} params]
    (map->Follow-Up {:_id _id
                     :authors authors
                     :body body
                     :created-on created-on
                     :excerpt excerpt
                     :kind :follow-up
                     :last-updated last-updated
                     :log? log?
                     :parent (cond

                               (string? parent) (apply create-reference
                                                       ((juxt link-id link-kind) parent))
                               :else
                               (create-reference parent))
                     :refs refs
                     :tags (into #{} tags)
                     :url url})))

(defn get-follow-up
  "Returns a follow-up from id."
  [id]
  (get-entity {:_id id} :follow-up))

(defn add-entity
  "Adds an entity to the repository."
  [entity]
  (add-db-queue! entity)
  (process-db-queue)
  (clear-db-queue!))

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
                :tags (into #{} tags)
                :title title
                :url url})))

(defn get-page
  "Returns a static page by id."
  [id]
  (get-entity {:_id id} :static))

;;
;; Topics
;;
(defrecord Topic
    [_id authors created-on kind last-updated log? tags title refs url])

(defn create-topic
  "Returns a topic entity along with its parent."
  [params]
  (let [{:keys [_id authors created-on last-updated log? tags title refs url]
         :or {authors ["John Doe"]
              _id (random-uuid)
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
                 :tags (into #{} tags)
                 :title title
                 :refs (into #{} refs)
                 :url url})))

(defn get-topic
  "Returns a topic by id or from a post."
  [x]
  (condp x
      (string? x) (get-entity {:_id x} :topic)
      :else
      (get-entity (get-in x [:topic :_id] :topic))))

;;
;; General Entity Functions
;;
(defn- get-entity*
  [fn criterion kind]
  (fn (read-entity kind criterion)))

(defmulti get-entity (fn [criterion kind] kind))

(defmethod get-entity :follow-up
  [criterion kind]
  (get-entity* create-follow-up criterion kind))

(defmethod get-entity :post
  [criterion kind]
  (get-entity* create-post criterion kind))

(defmethod get-entity :static
  [criterion kind]
  (get-entity* create-page criterion kind))

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
