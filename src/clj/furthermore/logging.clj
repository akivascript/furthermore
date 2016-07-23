(ns furthermore.logging
  (:require [furthermore.repository :as repo]
            [furthermore.utils :as util]))

(defn prepare-entry
  "Ensures an entry is ready to be converted to a EDN object
  for being included in a web response."
  [entry]
  (-> entry
      (update :date util/joda-date->java-date)
      (update :action keyword)
      (update :kind keyword)
      (dissoc :_id)))

(defn get-updates
  "Grabs the weblog entries from the database."
  [& {:keys [prepare] :or {prepare true}}]
  (let [entries (repo/read-entities :update)]
    (if prepare
      (->> entries
           (map prepare-entry)
           (sort-by :date)
           reverse
           vec)
      entries)))
