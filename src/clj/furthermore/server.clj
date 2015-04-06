(ns furthermore.server
  (:require [clojure.java.io :as io]

            [compojure.core :refer [GET defroutes context]]
            [compojure.handler :refer [site]]
            [compojure.response :refer [render]]
            [compojure.route :refer [resources]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]

            [furthermore.logging :refer [get-weblog]]
            [furthermore.posts :refer [get-post get-posts get-post-references]]
            [furthermore.static-pages :refer [get-static-page]]
            [furthermore.topics :refer [get-topic get-topics get-topic-references]]
            [furthermore.newsfeed :refer [get-feed]]
            [furthermore.repository :refer [initialize-db-connection]])
  (:gen-class))

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
  ;;(GET "/rss.xml" [] (get-feed))
  (GET "/" [uri] (render (io/resource "public/shell.html") uri))
  (resources "/"))

(def app
  (do (initialize-db-connection)
      (wrap-defaults app-routes site-defaults)))

(defn -main
  [& port]
  (let [port (Integer. (or port (env :port) 5000))]
    (run-jetty (site #'app) {:port port :join? false})))
