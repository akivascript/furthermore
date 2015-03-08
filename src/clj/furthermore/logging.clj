(ns furthermore.logging
  (require [furthermore.repository :refer :all]
           [furthermore.utils :refer :all]))

(defn prepare-entry
  [entry]
  (-> entry
      (update :date convert-to-java-date)
      (update :kind keyword)
      (dissoc :_id)))

(defn get-weblog
  [& prepare]
  (let [entries (read-entities :log)]
    (if-not (or prepare
                (= prepare :false))
      (->> entries
           (map prepare-entry)
           (sort-by #(:date %))
           reverse
           vec))))
