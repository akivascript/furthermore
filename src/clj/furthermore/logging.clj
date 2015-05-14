(ns furthermore.logging
  (:require [furthermore.repository :refer [read-entities]]
            [furthermore.utils :refer [convert-to-java-date]]))

(defn prepare-entry
  "Ensures an entry is ready to be converted to a EDN object
  for being included in a web response."
  [entry]
  (-> entry
      (update :date convert-to-java-date)
      (update :kind keyword)
      (dissoc :_id)))

(defn get-updates
  "Grabs the weblog entries from the database."
  [& {:keys [prepare] :or {prepare true}}]
  (let [entries (read-entities :update)]
    (if prepare
      (->> entries
           (map prepare-entry)
           (sort-by :date)
           reverse
           vec)
      entries)))
