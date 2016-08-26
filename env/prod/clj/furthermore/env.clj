(ns furthermore.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[furthermore started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[furthermore has shut down successfully]=-"))
   :middleware identity})
