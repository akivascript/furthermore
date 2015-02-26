(ns furthermore.server
  (:require [environ.core :refer [env]]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :as route]
            [compojure.handler :refer [api]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.reload :as reload]
            [ring.adapter.jetty :refer [run-jetty]]
            [furthermore.dev :refer [is-dev? start-figwheel]]
            [furthermore.repository :refer :all]
            [furthermore.views.home :refer :all]
            [furthermore.views.topics :refer :all]))

(defroutes routes
  (route/resources "/")
  (route/resources "/react" {:root "react"})
  (GET "/" [] (render-home))
  (GET "/topics" [] (render-topics)))
  (route/not-found "Not Found")

(def http-handler
  (if is-dev?
    (reload/wrap-reload (wrap-defaults #'routes api-defaults))
    (wrap-defaults routes api-defaults)))

(defn run [& [port]]
  (defonce ^:private server
    (do
      (initialize-db-connection)
      ;(if is-dev? (start-figwheel))
      (let [port (Integer. (or port (env :port) 10555))]
        (print "Starting web server on port" port ".\n")
        (run-jetty http-handler {:port port
                                 :join? false}))))
  server)

(defn -main [& [port]]
  (run port))
