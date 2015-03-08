(ns furthermore.models.topics
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]
            [furthermore.models.posts :refer :all]
            [furthermore.repository :refer :all]))

(defn create-topic
  [title & tags]
  (let [topic (as-> (if-not (nil? tags)
                      (create-page tags)
                      (create-page)) t
                (assoc t :type :topic)
                (assoc t :title title)
                (assoc t :log true))]
    (add-db-queue! topic)
    topic))

(defn prepare-topic
  [topic]
  (-> topic
      (update :title smarten-text)
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
         (sort-by #(:title %))
         vec
         (assoc topic :references))))

(defn get-topics
  [& prepare]
  (let [topics (read-entities :topic)]
    (if-not (or prepare
                (= prepare :false))
      (->> topics
           (map prepare-topic)
           (sort-by #(:title %))
           vec)
      topics)))
