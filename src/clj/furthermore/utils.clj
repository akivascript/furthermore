(ns furthermore.utils
  (require [clj-time.coerce :as c]))

(defn get-excerpt
  [text]
  (str (subs text 0 49) "…"))

(defn convert-to-java-date
  [joda-date]
  (c/to-date joda-date))
