(ns furthermore.routes.home
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.layout :as layout]
            [furthermore.views.home :as home]))

(defn build
  []
  (layout/render :home (home/content)))

(defroutes routes
  (GET "/" [] (build)))

