(ns furthermore.server
  (:require [clojure.java.io :as io]

            [compojure.core :refer [ANY context defroutes]]
            [compojure.handler :refer [site]]
            [compojure.response :refer [render]]
            [compojure.route :refer [resources]]
            [environ.core :refer [env]]
            [liberator.core :refer [defresource resource]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.params :refer [wrap-params]]

            [furthermore.entities :refer [add-entities]]
            [furthermore.logging :refer [get-weblog]]
            [furthermore.posts :refer [get-post get-posts get-post-references]]
            [furthermore.static-pages :refer [get-static-page]]
            [furthermore.topics :refer [get-topic get-topics get-topic-references]]
            ;[furthermore.newsfeed :refer [get-feed]]
            [furthermore.repository :refer [initialize-db-connection]])
  (:gen-class))

(defresource update-site
  [update]
  :allowed-methods [:post]
  :available-media-types ["application/edn"]
  :post! (fn [ctx] (add-entities (get-in ctx [:request :body]))))

(defresource return-result
  [task]
  :allowed-methods [:get]
  :available-media-types ["application/edn"]
  :handle-ok (-> task pr-str))

(defroutes routes
  ;; API calls
  (context "/get" []
           (ANY "/page/:url" [url] (return-result (get-static-page {:url url})))
           (ANY "/post/id/:id" [id] (return-result (get-post {:_id id})))
           (ANY "/post/:id/refs" [id] (return-result (get-post-references id)))
           (ANY "/post/url/:url" [url] (return-result (get-post {:url url})))
           (ANY "/posts" [] (return-result (get-posts)))
           (ANY "/topic/:id" [id] (return-result (get-topic {:_id id})))
           (ANY "/topic/:id/refs" [id] (return-result (get-topic-references id)))
           (ANY "/topics" [] (return-result (get-topics)))
           (ANY "/weblog" [] (return-result (get-weblog))))
  (ANY "/update" [] update-site)
  ;;(ANY "/rss.xml" [] (get-feed))
  (ANY "/" [uri] (render (io/resource "public/shell.html") uri))
  (resources "/"))

(def app
  (do (initialize-db-connection)
      (-> routes wrap-params)))

(defn -main
  [& port]
  (let [port (Integer. (or port (env :port) 5000))]
    (run-jetty (site #'app) {:port port :join? false})))
