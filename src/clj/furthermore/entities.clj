(ns furthermore.entities
  (:require [clojure.tools.reader.edn :refer [read-string]]

            [clj-time.coerce :refer [from-date]]
            [clj-time.core :refer [hours
                                   plus]]
            [clj-time.local :refer [local-now]]
            [monger.util :refer [random-uuid]]

            [furthermore.repository :refer [add-db-queue!
                                            clear-db-queue!
                                            list-db-queue
                                            process-db-queue
                                            read-entities
                                            read-entity]]
            [furthermore.utils :refer [convert-to-java-date]]))

;;
;; General Entity Stuff
;;
(defn create-entity
  "Returns an empty default entity."
  [& tags]
  (let [entity {:_id (random-uuid)
                :title "New Entity"
                :authors ["John Doe"]
                :created-on (local-now)
                :last-updated (local-now)
                :log true
                :tags #{}
                :references #{}}]
    (if-not (nil? tags)
      (apply (fn [x] (reduce #(update %1 :tags conj %2) entity x)) tags)
      entity)))

(defn create-link-to
  [target link-type]
  {:_id (or (:_id target) target)
   :type (keyword link-type)})

(defn add-reference
  [referrer referee link-type]
  {:referrer (update referrer :references conj (create-link-to referee link-type))
   :referee (update referee :references conj (create-link-to referrer link-type))})

(defn get-references
  [entity]
  (mapv #(read-entity {:type (:type %) :_id (:_id %)}) (:references entity)))

;;
;; Post-Specific Stuff
;;
(declare get-topic)

(defn create-post
  [& {:keys [authors body excerpt parent subtitle tags title topic]}]
  (let [post (-> (create-entity tags)
                 (assoc :type :post)
                 (assoc :title title)
                 (assoc :subtitle subtitle)
                 (assoc :body (or body "Somebody forgot to actually write the post."))
                 (assoc :excerpt excerpt)
                 (assoc :authors (or authors ["John Doe"]))
                 (assoc :parent (create-link-to parent (:type parent)))
                 (assoc :topic (create-link-to topic (:type topic))))
        parent (update parent :references conj (create-link-to post :post))]
    (if-not (= (:_id parent) (:_id topic))
      {:post post :parent parent :topic topic}
      {:post post :parent parent})))

(defn create-follow-up
  [parent & {:keys [authors body tags]}]
  (let [follow-up (-> (create-entity tags)
                      (assoc :type :follow-up)
                      (assoc :authors (or authors ["John Doe"]))
                      (assoc :body (or body "Somebody forgot to actually write the follow-up."))
                      (assoc :parent (create-link-to parent (:type parent)))
                      (assoc :topic (:topic parent))
                      (dissoc :title))
        parent (update parent :references conj (create-link-to follow-up :follow-up))]
    {:post follow-up :parent parent}))

(defn prepare-post
  [post]
  (-> post
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)
      (update :type keyword)
      (assoc :opened false)))

(defn get-post
  [criterion & {:keys [prepare] :or {prepare true}}]
  (let [post (read-entity :post criterion)]
    (if (nil? post)
      nil
      (if prepare
        (prepare-post post)
        post))))

(defn add-post
  [entity type]
  (let [entity (read-string entity)
        parent (let [parent (:parent entity)]
                 (case (:type parent)
                   :topic (get-topic {:_id (:_id parent)} :prepare false)
                   (get-post {:_id (:_id parent)} :prepare false)))
        parent (update parent :references conj (create-link-to entity :post))]
    (clear-db-queue!)
    (add-db-queue! entity)
    (add-db-queue! parent)
    (process-db-queue)
    (clear-db-queue!)))

(defn get-posts
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
  [id]
  (let [post (get-post {:_id id})]
    (->> (get-posts (:references post))
         (sort-by :created-on)
         vec)))

;;
;; Topics Specific Stuff
;;
(defn create-topic
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
  [topic]
  (-> topic
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)))

(defn get-topic
  [criterion & {:keys [prepare] :or {prepare true}}]
  (let [topic (read-entity :topic criterion)]
    (if prepare
      (prepare-topic topic)
      topic)))

(defn get-topic-references
  [id]
  (let [topic (get-topic id)]
    (->> (get-posts (:references topic))
         (sort-by :title)
         vec
         (assoc topic :references))))

(defn get-topics
  [& {:keys [prepare] :or {prepare true}}]
  (let [topics (read-entities :topic)]
    (if prepare
      (->> topics
           (map prepare-topic)
           (sort-by :title)
           vec)
      topics)))
