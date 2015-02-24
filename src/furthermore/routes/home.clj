(ns furthermore.routes.home
  (:require [compojure.core :refer :all]
            [furthermore.views.home :refer :all]))

(defn home-page [] (index))

(defroutes home-routes
  (GET "/" [] (home-page)))
