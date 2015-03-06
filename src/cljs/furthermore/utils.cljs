(ns furthermore.utils
  (:require [cljs-time.format :as timef]
            [secretary.core :as secretary]))

(defn format-timestamp
  [timestamp]
  (let [ts (-> timestamp js/Date. goog.date.DateTime.)]
    {:date (timef/unparse (timef/formatter "MMMM d, yyyy") ts)
     :time (timef/unparse (timef/formatter "HH:MM") ts)}))

(defn set-url
  [dest]
  (let [url window.location.pathname]
    (.pushState js/history url dest dest)))

(defn change-page
  [dest]
  (secretary/dispatch! dest))

(defn navigate-to
  [dest]
  (do
    (set-url dest)
    (change-page dest)))
