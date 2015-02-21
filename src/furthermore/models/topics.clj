(ns furthermore.models.topics
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]))

(defn create-topic
  []
  {:title "New Topic"
   :author "John Doe"
   :created-on (l/local-now)
   :last-updated (l/local-now)
   :tags []
   :references '()})
