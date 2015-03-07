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
  ;; API calls
  (context "/get" []
           (GET "/post/id/:id" [id] (-> {:_id id} get-post generate-response))
           (GET "/post/url/:url" [url] (-> {:url url} get-post generate-response))
           (GET "/posts" [] (generate-response (get-posts)))
           (GET "/topic/:id" [id] (-> {:_id id} get-topic generate-response))
           (GET "/topic/:id/refs" [id] (-> id get-topic-references generate-response))
           (GET "/topics" [] (generate-response (get-topics))))
  ;; Static resources
  (route/resources "/react" {:root "react"})
  (route/resources "/")
  ;; Site requests. This is placed last to serve as a pass-through to secretary
  (GET "*" [uri] (render (io/resource "assets/html/shell.html") uri)))


(def app
  (do (initialize-db-connection)
      (wrap-defaults app-routes site-defaults)))
