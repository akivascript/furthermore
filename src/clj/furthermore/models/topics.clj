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

(defn get-topics
  []
  (read-all "topics"))
