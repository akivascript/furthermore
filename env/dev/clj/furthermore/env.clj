(ns furthermore.env
  (:require [clojure.tools.logging :as log]
            [furthermore.dev-middleware :refer [wrap-dev]]
            [selmer.parser :as parser]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[furthermore started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[furthermore has shut down successfully]=-"))
   :middleware wrap-dev})
