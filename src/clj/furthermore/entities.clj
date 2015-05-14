(ns furthermore.entities
  (:require [clojure.string :as str :refer [split]]

            [clj-time.local :refer [local-now]]
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
;; General Entity Stuff
;;
(defn create-entity
  "Returns an empty default entity."
  [& tags]
  (let [entity {:_id (random-uuid)
                :authors ["John Doe"]
                :created-on (local-now)
                :last-updated (local-now)
                :log true}]
    (if-not (nil? tags)
      (apply (fn [x] (reduce #(update %1 :tags conj %2) entity x)) tags)
      entity)))

(defn create-link-to
  "Returns a 'link map' of a particular type to a target's ID."
  [target link-type]
  {:_id (or (:_id target) target)
   :type (keyword link-type)})

(defn link-type
  [link]
  (second (str/split link #"\|")))

(defn link-id
  [link]
  (first (str/split link #"\|")))

;;
;; Post-Specific Stuff
;;
(declare get-topic)

(defn create-post
  "Returns a post entity."
  [params]
  (let [{:keys [authors body excerpt parent subtitle tags title topic]} params
        post (-> (create-entity tags)
                 (assoc :type :post)
                 (assoc :title title)
                 (assoc :subtitle subtitle)
                 (assoc :body (or body "Somebody forgot to actually write the post."))
                 (assoc :excerpt excerpt)
                 (assoc :authors (or authors ["John Doe"]))
                 (assoc :parent (create-link-to (link-id parent) (link-type parent)))
                 (assoc :topic (create-link-to (link-id topic) (link-type topic))))]
    (assoc post :url (create-entity-url post))))

(defn create-follow-up
  "Returns a follow-up entity."
  [params]
  (let [{:keys [authors body excerpt parent tags]} params]
    (-> (create-entity tags)
        (assoc :type :follow-up)
        (assoc :authors (or authors ["John Doe"]))
        (assoc :body (or body "Somebody forgot to actually write the follow-up."))
        (assoc :parent (create-link-to (link-id parent) (link-type parent))))))

(defn prepare-post
  "Converts the required keys so that the post may be converted
  to an EDN to be set back to the browser."
  [post]
  (-> post
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)
      (update :type keyword)
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
        parent (case (:type parent)
                 :topic (get-topic {:_id (:_id parent)} :prepare false)
                 (get-post {:_id (:_id parent)} :prepare false))
        parent (update parent :references conj (create-link-to entity (:type entity)))
        entity (if (= :follow-up (:type entity))
                 (assoc entity :topic (create-link-to
                                       (get-in parent [:topic :_id])
                                       :topic))
                 entity)]
    (clear-db-queue!)
    (add-db-queue! entity)
    (add-db-queue! parent)
    (process-db-queue)
    (clear-db-queue!)))

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

(defn get-post-references
  "Returns all of the posts referenced by a given post's ID."
  [id]
  (let [post (get-post {:_id id})]
    (->> (get-posts (:references post))
         (sort-by :created-on)
         vec)))

;;
;; Topics Specific Stuff
;;
(defn create-topic
  "Returns a topic entity along with its parent."
  [title & {:keys [description authors tags]}]
  (let [topic (as-> (if-not (nil? tags)
                      (create-entity tags)
                      (create-entity)) t
                (assoc t :type :topic)
                (assoc t :title title)
                (assoc t :description description)
                (assoc t :authors (or authors ["John Doe"]))
                (assoc t :log true))]
    topic))

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

(defn get-topic-references
  "Returns a topic with its actual reference objects associated."
  [id]
  (let [topic (get-topic id)]
    (->> (get-posts (:references topic))
         (sort-by :title)
         vec
         (assoc topic :references))))

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
