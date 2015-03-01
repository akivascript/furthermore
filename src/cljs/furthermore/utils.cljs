(ns furthermore.utils
  (:require [cljs-time.format :as timef]))

(defn format-timestamp
  [timestamp]
  (let [ts (-> timestamp js/Date. goog.date.DateTime.)]
    (timef/unparse (timef/formatter "MMMM d, yyyy") ts)))
