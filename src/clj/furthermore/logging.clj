(ns furthermore.logging
  (:require [clj-time.local :as l]
            [furthermore.utils :as utils]))

(defn create-log-entry
  [kind entity]
  (let [text (or (:title entity)
                 (utils/get-excerpt (:body entity) 50))]
    {:kind kind
     :type (:type entity)
     :date (:last-updated entity)
     :title text
     :ref (:_id entity)
     :url (or (:url entity)
              (:_id entity))}))

(defn loggable?
  [entity]
  (and (case (:type entity)
         (:post :topic) true?
         false)
       (contains? entity :log)
       (:log entity)))
