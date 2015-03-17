(ns furthermore.utils
  (:require [cljs-time.format :as timef]
            [secretary.core :as secretary]))

(defn format-timestamp
  [timestamp]
  (let [ts (-> timestamp js/Date. goog.date.DateTime.)]
    {:date (timef/unparse (timef/formatter "MMMM d, yyyy") ts)
     :time (timef/unparse (timef/formatter "hh:mm a") ts)}))
