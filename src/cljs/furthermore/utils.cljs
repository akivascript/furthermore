(ns furthermore.utils
  (:require [clojure.string :as str]
            [cljs-time.format :as timef]
            [secretary.core :as secretary]))

(defn format-timestamp
  [timestamp]
  (let [ts (-> timestamp js/Date. goog.date.DateTime.)]
    {:date (timef/unparse (timef/formatter "MMMM d, yyyy") ts)
     :time (timef/unparse (timef/formatter "hh:mm a") ts)}))

(defn get-text-excerpt
  [text ct]
  (if (< (count text) ct)
    text
    (let [ct (dec (or ct 140))
          text (subs text 0 ct)
          text (str/replace text #"\W+$" "")]
      (str text "..."))))
