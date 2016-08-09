(ns user
  (:require [mount.core :as mount]
            [furthermore.figwheel :refer [start-fw stop-fw cljs]]
            furthermore.core))

(defn start []
  (mount/start-without #'furthermore.core/repl-server))

(defn stop []
  (mount/stop-except #'furthermore.core/repl-server))

(defn restart []
  (stop)
  (start))


