(ns furthermore.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [furthermore.repository :refer :all]
            [furthermore.views.home :refer :all]))

(selmer.parser/cache-off!)

(defn init []
  (println "Furthermore is starting up...")
  (initialize-db-connection))

(defn destroy []
  (println "Furthermore is shutting down..."))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defroutes main-routes
  (GET "/" [] (index)))

(def app
  (-> (routes main-routes app-routes)
      (wrap-defaults site-defaults)))
