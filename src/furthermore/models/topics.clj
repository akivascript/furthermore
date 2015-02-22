(ns furthermore.models.topics
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]))

(defn create-topic
  [title]
  (-> (create-page)
      (assoc :type :topic)
      (assoc :title title)))
