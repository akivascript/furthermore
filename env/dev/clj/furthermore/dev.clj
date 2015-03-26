(ns furthermore.dev
  (:require [environ.core :refer [env]]
            [leiningen.core.main :as lein]))

(def is-dev? (env :is-dev))

(defn start-figwheel []
  (future
    (print "Starting figwheel.\n")
    (lein/-main ["figwheel"])))
