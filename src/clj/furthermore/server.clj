(ns furthermore.server
  (:require [environ.core :refer [env]]
            [clojure.java.io :as io]
            [compojure.core :refer [GET defroutes context]]
            [compojure.response :refer [render]]
            [compojure.route :as route]
            [compojure.handler :refer [api]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.edn :as edn]
            [ring.middleware.reload :as reload]
            [ring.adapter.jetty :refer [run-jetty]]
            [furthermore.dev :refer [is-dev? start-figwheel]]
            [furthermore.models.posts :refer :all]
            [furthermore.models.topics :refer :all]
            [furthermore.repository :refer :all]))

(defn generate-response
  [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defroutes routes
  (context "/get" []
           (GET "/post/:id" [id] (-> id get-post generate-response))
           (GET "/topic/:id" [id] (-> id get-topic generate-response))
           (GET "/topics" [] (generate-response (get-topics))))
  (route/resources "/")
  (route/resources "/react" {:root "react"})
  (GET "*" [uri] (render (io/resource "public/index.html") uri)))

(def http-handler
  (if is-dev?
    (-> (reload/wrap-reload (wrap-defaults #'routes api-defaults))
        (edn/wrap-edn-params))
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
