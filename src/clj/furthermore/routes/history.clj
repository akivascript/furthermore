(ns furthermore.routes.history
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.layout :as layout]
            [furthermore.views.history :as history]))

(defn build
  []
  (layout/render :updates (history/content)))

(defroutes routes
  (GET "/history" [] (build)))
