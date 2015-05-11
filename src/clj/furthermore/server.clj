(ns furthermore.server
  (:require [clojure.java.io :as io]

            [compojure.core :refer [ANY GET context defroutes]]
            [compojure.handler :refer [site]]
            [compojure.response :refer [render]]
            [compojure.route :refer [resources]]
            [environ.core :refer [env]]
            [liberator.core :refer [defresource resource]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.params :refer [wrap-params]]

            [furthermore.contents :refer [display-contents-page]]
            [furthermore.entities :refer [get-posts
                                          get-topics]]
            [furthermore.home :refer [display-home-page]]
            [furthermore.page :refer [display-static-page]]
            [furthermore.post :refer [display-post-page]]
            ;[furthermore.newsfeed :refer [get-feed]]
            [furthermore.repository :refer [initialize-db-connection]]
            [furthermore.update :refer [display-update-page]]
            [furthermore.updates :refer [display-updates-page]])
  (:gen-class))

(defresource return-result
  [task]
  :allowed-methods [:get]
  :available-media-types ["application/edn"]
  :handle-ok (pr-str task))

(defroutes routes
  ;; API calls
  (GET "/" [] (display-home-page))
  (GET "/contents" [] (display-contents-page))
  (GET "/updates" [] (display-updates-page))
  (GET "/post/:title" [title] (display-post-page title))
  (GET "/add-post" [] (display-update-page :post))
  (GET "/add-follow-up" [] (display-update-page :follow-up))
  (GET "/:page" [page] (display-static-page page))
  (GET "/api/posts" [] (return-result (get-posts)))
  (GET "/api/topics" [] (return-result (get-topics)))
  ;; Disabled until RSS feed is fixed (ANY "/rss.xml" [] (get-feed))
  ;; UI Calls
  (resources "/"))

(def app
  (do (initialize-db-connection)
      (wrap-params routes)))

(defn -main
  "Launches Furthermore."
  [& port]
  (let [port (Integer. (or port (env :port) 5000))]
    (run-jetty (site #'app) {:port port :join? false})
    (println "Furthermore up and running on port" port)))
