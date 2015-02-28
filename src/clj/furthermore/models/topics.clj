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
                (assoc t :title title))]
    (add-db-queue topic)
    topic))

(defn prepare-topic
  [topic]
  (let [topic (-> topic
                  (update :title smarten-text)
                  (update :created-on convert-to-java-date)
                  (update :last-updated convert-to-java-date))]
    (->> (get-posts (:references topic))
         (assoc topic :references))))

(defn get-topic
  [id]
  (->> (read-entity {:type :topic :_id id})
       prepare-topic))

(defn get-topics
  []
  (->> (read-all "topics")
       (map prepare-topic)
       (sort-by #(:title %))
       vec))
