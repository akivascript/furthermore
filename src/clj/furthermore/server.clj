(ns furthermore.server
  (:require [environ.core :refer [env]]
            [clojure.java.io :as io]
            [compojure.core :refer [GET defroutes context]]
            [compojure.response :refer [render]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [furthermore.models.posts :refer :all]
            [furthermore.models.topics :refer :all]
            [furthermore.repository :refer :all]))

(defn generate-response
  [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defroutes app-routes
  (context "/get" []
           (GET "/post/:id" [id] (-> id get-post generate-response))
           (GET "/posts" [] (generate-response (get-posts)))
           (GET "/topic/:id" [id] (-> id get-topic generate-response))
           (GET "/topics" [] (generate-response (get-topics))))
  (GET "/" [uri] (render (io/resource "assets/html/shell.html") uri))
  (route/resources "/react" {:root "react"})
  (route/resources "/"))


(def app
  (do (initialize-db-connection)
      (wrap-defaults app-routes site-defaults)))
