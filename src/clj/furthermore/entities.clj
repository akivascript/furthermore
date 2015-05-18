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

(defn link-kind
  [link]
  (if (map? link)
    (:kind link)
    (second (str/split link #"\|"))))

(defn link-id
  [link]
  (if (map? link)
    (:_id link)
    (first (str/split link #"\|"))))

;;
;; Authors
;;
(defrecord Author
    [name works])

(defn create-author
  [params]
  (let [{:keys [name works]
         :or {name "John Doe"
              works #{}}} params]
    (map->Author {:name name
                  :works works})))

;;
;; Posts
;;
(declare get-topic)

(defrecord Post
    [_id authors body created-on excerpt kind last-updated
     parent refs subtitle tags title topic url])

(defrecord Follow-Up
    [_id authors body created-on excerpt kind parent refs tags url])

(defn create-post
  "Takes a map as input and requires both parent and topic records. Produces
  a Post record."
  [params]
  (let [date (local-now)
        {:keys [_id authors body created-on excerpt last-updated
                parent subtitle refs tags title topic url]
         :or {authors [(create-author {})]
              body "Somebody forgot to actually write the post."
              created-on date
              _id (random-uuid)
              title "New Post"
              url (create-entity-url date title)}} params]
    (map->Post {:_id _id
                :authors authors
                :body body
                :created-on created-on
                :excerpt excerpt
                :kind :post
                :parent (or parent
                            (create-reference (link-id (:parent params))
                                              (link-kind (:parent params))))
                :refs refs
                :subtitle subtitle
                :tags (into #{} tags)
                :title title
                :topic (or topic
                           (create-reference (link-id (:topic params))
                                             (link-kind (:topic params))))
                :url url})))

(defn create-follow-up
  "Takes a map as input and requires a parent record. Produces a Follow-up record."
  [params]
  (let [{:keys [_id authors created-on body excerpt last-updated parent refs tags url]
         :or {authors [(create-author {})]
              body "Somebody forgot to actually write the follow-up."
              created-on (local-now)
              _id (random-uuid)}} params]
    (map->Follow-Up {:_id (random-uuid)
                     :authors authors
                     :body body
                     :created-on created-on
                     :excerpt excerpt
                     :kind :follow-up
                     :last-updated last-updated
                     :parent (create-reference (link-id parent) (link-kind parent))
                     :refs refs
                     :tags (into #{} tags)
                     :url url})))

(defn add-post
  "Adds a post entity and its updated parent to the repository."
  [entity]
  (let [parent (:parent entity)
        parent (case (:kind parent)
                 :topic (get-topic {:_id (:_id parent)} :prepare false)
                 (get-post {:_id (:_id parent)} :prepare false))
        parent (update parent :refs conj (create-reference entity (:kind entity)))
        entity (if (= :follow-up (:kind entity))
                 (assoc entity :topic (create-reference
                                       (get-in parent [:topic :_id])
                                       :topic))
                 entity)]
    (add-db-queue! entity)
    (add-db-queue! parent)
    (process-db-queue)
    (clear-db-queue!)))

(defn add-entity
  "Adds an entity to the repository."
  [entity]
  (add-db-queue! entity)
  (process-db-queue)
  (clear-db-queue!))

(defn get-post-refs
  "Returns all of the posts referenced by a given post's ID."
  [id]
  (let [post (get-post {:_id id})]
    (->> (get-posts (:refs post))
         (sort-by :created-on)
         vec)))

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

;;
;; Topics
;;
(defrecord Topic
    [_id authors created-on kind last-updated tags title refs url])

(defn create-topic
  "Returns a topic entity along with its parent."
  [params]
  (let [{:keys [_id authors created-on last-updated tags title refs url]
         :or {authors [(create-author {})]
              _id (random-uuid)
              created-on (local-now)
              title "New Topic"}} params]
    (map->Topic {:_id _id
                 :authors authors
                 :created-on created-on
                 :kind :topic
                 :last-updated last-updated
                 :tags (into #{} tags)
                 :title title
                 :refs refs
                 :url url})))

(defn get-topic-refs
  "Returns a topic with its actual reference objects associated."
  [id]
  (let [topic (get-topic id)]
    (->> (get-posts (:refs topic))
         (sort-by :title)
         vec
         (assoc topic :refs))))

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
