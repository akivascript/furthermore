(ns furthermore.server
  (:require [clojure.edn :as edn :refer [read-string]]
            [clojure.java.io :as io]

            [compojure.core :refer [GET POST context defroutes]]
            [compojure.handler :refer [site]]
            [compojure.response :refer [render]]
            [compojure.route :refer [resources]]
            [environ.core :refer [env]]
            [medley.core :refer [map-keys]]
            [liberator.core :refer [defresource resource]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.params :refer [wrap-params]]

            [furthermore.contents :refer [display-contents-page]]
            [furthermore.entities :refer [create-follow-up
                                          create-post
                                          create-topic
                                          add-post
                                          add-entity
                                          get-posts
                                          get-topics]]
            [furthermore.home :refer [display-home-page]]
            [furthermore.page :refer [display-static-page]]
            [furthermore.post :refer [display-post-page]]
            ;[furthermore.newsfeed :refer [get-feed]]
            [furthermore.repository :refer [initialize-db-connection]]
            [furthermore.update :refer [display-update-page]]
            [furthermore.updates :refer [display-updates-page]])
  (:gen-class))

(defn- params->map
  [params]
  (let [m (map-keys keyword params)]
    (if (= clojure.lang.PersistentVector (type (:authors m)))
      m
      (update m :authors vector))))

(defn- dispatch-update*
  [fn entity]
  ((comp add-post fn) entity))

(defmulti dispatch-update :kind)

(defmethod dispatch-update "post"
  [entity]
  (dispatch-update* create-post entity))

(defmethod dispatch-update "follow-up"
  [entity]
  (dispatch-update* create-follow-up entity))

(defmethod dispatch-update "topic"
  [entity]
  ((comp add-entity create-topic) entity))

(defresource update-site
  [type]
  :allowed-methods [:post]
  :available-media-types ["text/html" "application/edn" "application/x-www-form-urlencoded"]
  :post! (fn [ctx] (let [m (params->map (get-in ctx [:request :form-params]))]
                     (println m)
                     (dispatch-update m))))

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
  (GET "/add-follow-up" [] (display-update-page :follow-up))
  (GET "/add-post" [] (display-update-page :post))
  (GET "/add-topic" [] (display-update-page :topic))
  (GET "/api/posts" [] (return-result (get-posts)))
  (GET "/api/topics" [] (return-result (get-topics)))
  (POST "/api/update/:kind" [kind] (update-site kind))
  (GET "/page/:page" [page] (display-static-page page))
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
