(ns furthermore.models.topics
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]
            [furthermore.repository :refer :all]))

(defn create-topic
  [title]
  (let [topic (-> (create-page)
                  (assoc :type :topic)
                  (assoc :title title))]
    (add-db-queue topic)
    topic))
