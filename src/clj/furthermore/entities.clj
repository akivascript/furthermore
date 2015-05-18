(ns furthermore.entities
  (:require [clojure.string :as str :refer [split]]

            [clj-time.local :as l :refer [local-now]]
            [monger.util :refer [random-uuid]]

            [furthermore.repository :refer [add-db-queue!
                                            clear-db-queue!
                                            list-db-queue
                                            process-db-queue
                                            read-entities
                                            read-entity]]
            [furthermore.utils :refer [convert-to-java-date
                                       create-entity-url]]))

;;
;; References
;;
(defrecord Reference
    [_id kind])

(defn create-reference
  "Returns a Reference which links entities to each other."
  [params]
  (let [{:keys [_id kind]} params]
    (map->Reference {:_id _id
                     :kind (if (keyword? kind)
                             kind
                             (keyword kind))})))

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
;; Author Stuff
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
;; Post-Specific Stuff
;;
(declare get-topic)

(defrecord Post
    [authors body created-on excerpt _id kind parent refs subtitle tags title topic url])

(defrecord Follow-Up
    [authors body created-on excerpt _id kind parent refs tags url])

(defn create-post
  "Takes a map as input and requires both parent and topic records. Produces
  a Post record."
  [params]
  (let [{:keys [authors body excerpt _id parent subtitle refs tags title topic]
         :or {authors [(create-author {})]
              body "Somebody forgot to actually write the post."
              _id (random-uuid)
              title "New Post"}} params
              date (local-now)]
    (map->Post {:authors authors
                :body body
                :created-on date
                :excerpt excerpt
                :_id _id
                :kind :post
                :parent (create-link-to (link-id parent) (link-kind parent))
                :refs refs
                :subtitle subtitle
                :tags (into #{} tags)
                :title title
                :topic (create-link-to (link-id topic) (link-kind topic))
                :url (create-entity-url date title)})))

(defn create-follow-up
  "Takes a map as input and requires a parent record. Produces a Follow-up record."
  [params]
  (let [{:keys [authors body excerpt parent refs tags]
         :or {authors [(create-author {})]
              body "Somebody forgot to actually write the follow-up."}} params]
    (map->Follow-Up {:authors authors
                     :body body
                     :created-on (local-now)
                     :excerpt excerpt
                     :_id (random-uuid)
                     :kind :follow-up
                     :parent (create-link-to (link-id parent) (link-kind parent))
                     :refs refs
                     :tags (into #{} tags)})))

(defn prepare-post
  "Converts the required keys so that the post may be converted
  to an EDN to be set back to the browser."
  [post]
  (-> post
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)
      (update :kind keyword)
      (assoc :opened false)))

(defn get-post
  "Returns a single post from the repository. criterion is expected
  to be a map (e.g., {:title 'This Is My Post'})."
  [criterion & {:keys [prepare] :or {prepare true}}]
  (let [post (read-entity :post criterion)]
    (when-not (nil? post)
      (if (true? prepare)
        (prepare-post post)
        post))))

(defn add-post
  "Adds a post entity and its updated parent to the repository."
  [entity]
  (let [parent (:parent entity)
        parent (case (:kind parent)
                 :topic (get-topic {:_id (:_id parent)} :prepare false)
                 (get-post {:_id (:_id parent)} :prepare false))
        parent (update parent :refs conj (create-link-to entity (:kind entity)))
        entity (if (= :follow-up (:kind entity))
                 (assoc entity :topic (create-link-to
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

(defn get-posts
  "Returns posts from the database."
  ([]
   (let [posts (read-entities :post
                              (array-map :created-on -1)
                              10)]
      (->> posts
           (map prepare-post)
           vec)))
  ([posts & {:keys [prepare] :or {prepare true}}]
   (let [posts (map #(get-post {:_id (:_id %)}) posts)]
     (if prepare
       (->> posts
            (sort-by :last-updated)
            reverse
            vec)
       posts))))

(defn get-post-refs
  "Returns all of the posts referenced by a given post's ID."
  [id]
  (let [post (get-post {:_id id})]
    (->> (get-posts (:refs post))
         (sort-by :created-on)
         vec)))

;;
;; Topics Specific Stuff
;;
(defn create-topic
  "Returns a topic entity along with its parent."
  [params]
  (let [{:keys [authors tags title]} params]
    (-> (create-entity tags)
        (assoc :kind :topic)
        (assoc :title title)
        (assoc :authors (or authors ["John Doe"])))))

(defn prepare-topic
  "Converts the keys necessary for the topic to be converted
  to an EDN to be returned to the browser."
  [topic]
  (-> topic
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)))

(defn get-topic
  "Returns a topic from the repository. criterion is expected
  to be a map (e.g., {:title 'This Is My Topic'})."
  [criterion & {:keys [prepare] :or {prepare true}}]
  (let [topic (read-entity :topic criterion)]
    (if prepare
      (prepare-topic topic)
      topic)))

(defn get-topic-refs
  "Returns a topic with its actual reference objects associated."
  [id]
  (let [topic (get-topic id)]
    (->> (get-posts (:refs topic))
         (sort-by :title)
         vec
         (assoc topic :refs))))

(defn get-topics
  "Returns all of the topics currently in the repository."
  [& {:keys [prepare] :or {prepare true}}]
  (let [topics (read-entities :topic)]
    (if prepare
      (->> topics
           (map prepare-topic)
           (sort-by :title)
           vec)
      topics)))
