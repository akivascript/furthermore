(ns furthermore.utils)

(defn get-excerpt
  [text]
  (str (subs text 0 49) "…"))
