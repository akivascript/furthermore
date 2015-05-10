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
            [furthermore.home :refer [display-home-page]]
            [furthermore.post :refer [display-post-page]]
            ;[furthermore.newsfeed :refer [get-feed]]
            [furthermore.repository :refer [initialize-db-connection]])
  (:gen-class))

(defroutes routes
  ;; API calls
  (GET "/" [] (display-home-page))
  (GET "/contents" [] (display-contents-page))
  (GET "/post/:title" [title] (display-post-page title))
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
