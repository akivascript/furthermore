(ns furthermore.utils
  (:require [clojure.string :refer [replace]]

            [cljs-time.format :refer [unparse formatter]]))

(defn format-timestamp
  [timestamp]
  (let [ts (-> timestamp js/Date. goog.date.DateTime.)]
    {:date (unparse (formatter "MMMM d, yyyy") ts)
     :time (unparse (formatter "hh:mm a") ts)}))

(defn get-text-excerpt
  [text ct]
  (if (< (count text) ct)
    text
    (let [ct (dec (or ct 140))
          text (subs text 0 ct)
          text (replace text #"\W+$" "")]
      (str text "..."))))
