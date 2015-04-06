(ns furthermore.topics
  (:require [furthermore.pages :refer [create-page]]
            [furthermore.posts :refer [get-posts]]
            [furthermore.repository :refer [read-entities read-entity]]
            [furthermore.utils :refer [convert-to-java-date]]))

(defn create-topic
  [title & {:keys [description authors tags]}]
  (let [topic (as-> (if-not (nil? tags)
                      (create-page tags)
                      (create-page)) t
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
