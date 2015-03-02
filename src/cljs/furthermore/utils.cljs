(ns furthermore.utils
  (:require [cljs-time.format :as timef]))

(defn format-timestamp
  [timestamp]
  (let [ts (-> timestamp js/Date. goog.date.DateTime.)]
    {:date (timef/unparse (timef/formatter "MMMM d, yyyy") ts)
     :time (timef/unparse (timef/formatter "HH:MM") ts)}))
