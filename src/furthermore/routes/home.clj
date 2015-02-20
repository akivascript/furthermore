(ns furthermore.routes.home
  (:require [compojure.core :refer :all]))

(defn home []
  ([:h1 "Hello World!"]))

(defroutes home-routes
  (GET "/" [] (home)))
