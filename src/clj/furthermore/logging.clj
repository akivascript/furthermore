(ns furthermore.logging
  (:require [furthermore.repository :refer [read-entities]]
            [furthermore.utils :refer [convert-to-java-date]]))

(defn prepare-entry
  [entry]
  (-> entry
      (update :date convert-to-java-date)
      (update :kind keyword)
      (dissoc :_id)))

(defn get-weblog
  [& {:keys [prepare] :or {prepare true}}]
  (let [entries (read-entities :log)]
    (if prepare
      (->> entries
           (map prepare-entry)
           (sort-by :date)
           reverse
           vec)
      entries)))
