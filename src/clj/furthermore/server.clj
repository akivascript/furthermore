(ns furthermore.server
  (:require [environ.core :refer [env]]
            [clojure.java.io :as io]
            [compojure.core :refer [GET defroutes context]]
            [compojure.handler :refer [site]]
            [compojure.response :refer [render]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [furthermore.logging :refer [get-weblog]]
            [furthermore.models.posts :refer [get-post get-posts get-post-references]]
            [furthermore.models.static-pages :refer [get-static-page]]
            [furthermore.models.topics :refer [get-topic get-topics get-topic-references]]
            [furthermore.newsfeed :refer [get-feed]]
            [furthermore.repository :refer [initialize-db-connection]]))

(defn generate-response
  [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defroutes app-routes
  ;; API calls
  (context "/get" []
           (GET "/page/:url" [url] (-> {:url url} get-static-page generate-response))
           (GET "/post/id/:id" [id] (-> {:_id id} get-post generate-response))
           (GET "/post/:id/refs" [id] (-> id get-post-references generate-response))
           (GET "/post/url/:url" [url] (-> {:url url} get-post generate-response))
           (GET "/posts" [] (generate-response (get-posts)))
           (GET "/topic/:id" [id] (-> {:_id id} get-topic generate-response))
           (GET "/topic/:id/refs" [id] (-> id get-topic-references generate-response))
           (GET "/topics" [] (generate-response (get-topics)))
           (GET "/weblog" [] (generate-response (get-weblog))))
  ;; Static resources
  (route/resources "/react" {:root "react"})
  (route/resources "/")
  ;; Site requests. This is placed last to serve as a pass-through to secretary
  (GET "/rss.xml" [] (get-feed))
  (GET "*" [uri] (render (io/resource "assets/html/shell.html") uri)))

(def app
  (do (initialize-db-connection)
      (wrap-defaults app-routes site-defaults)))

(defn -main
  [& port]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))
