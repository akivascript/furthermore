(ns furthermore.server
  (:require [compojure.core :refer [GET POST context defroutes routes wrap-routes]]
            [compojure.route :refer [resources]]
            [environ.core :refer [env]]
            [medley.core :refer [map-keys]]
            [liberator.core :refer [defresource]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.anti-forgery :refer :all]
            [ring.middleware.basic-authentication :refer [wrap-basic-authentication]]
            [ring.middleware.defaults :refer :all]

            [furthermore.entities :refer :all]
            [furthermore.utils :as utils :refer [create-entity-url
                                                 create-url-path
                                                 joda-date->java-date
                                                 site-url]]
            [furthermore.repository :refer [initialize-db-connection]]
            [furthermore.view.admin :refer [display-admin-page]]
            [furthermore.view.contents :refer [display-contents-page]]
            [furthermore.view.home :refer [display-home-page]]
            [furthermore.view.page :as page :refer [display-static-page]]
            [furthermore.view.post :refer [display-post-page]]
            [furthermore.view.tags :refer [display-tags-page]]
            [furthermore.view.topic :as topic :refer [display-topic-page]]
            [furthermore.view.update :refer [display-update-page]]
            [furthermore.view.updates :refer [display-updates-page]])
  (:gen-class))

;;
;; EDN Functions
;;
(defn- params->map
  [params]
  (let [m (map-keys keyword params)]
    (if (= clojure.lang.PersistentVector (type (:authors m)))
      m
      (update m :authors vector))))

(defn records->maps
  "Returns a map with values converted to EDN-friendly natives (e.g.,
  records become generic maps)."
  [result]
  (let [result (transient (into {} result))]
    (doseq [k [:created-on :last-updated]]
      (assoc! result k (utils/joda-date->java-date (k result))))
    (doseq [k [:parent :refs :topic]]
      (assoc! result k (into {} (k result))))
    (assoc! result :authors (map #(into {} %) (:authors result)))
    (persistent! result)))

;;
;; Blog Update Dispatch
;;
(defn- dispatch-update*
  [fn entity]
  (let [original (get-entity {:_id (:_id entity)} (keyword (:kind entity)))]
    ((comp add-entity fn) (merge original entity))))

(defmulti dispatch-update :kind)

(defmethod dispatch-update "follow-up"
  [entity]
  (dispatch-update* create-follow-up entity))

(defmethod dispatch-update "page"
  [entity]
  (dispatch-update* create-page entity))

(defmethod dispatch-update "post"
  [entity]
  (dispatch-update* create-post entity))

(defmethod dispatch-update "topic"
  [entity]
  (dispatch-update* create-topic entity))

;;
;; Routes & Resources
;;
(defmulti redirect :kind)

(defn- redirect*
  [entity]
  (str (utils/create-url-path entity) (utils/create-entity-url entity)))

(defmethod redirect "follow-up"
  [ctx]
  (let [post (get-follow-up (:_id ctx))]
    (redirect* (get-parent post))))

(defmethod redirect "page"
  [ctx]
  (let [page (get-entity {:title (:title ctx)} :page)]
    (str (utils/create-url-path page) (:url page))))

(defmethod redirect "post"
  [ctx]
  (let [post (get-post (:_id ctx))]
    (redirect* post)))

(defmethod redirect "topic"
  [_]
  "contents")

(defn authenticated?
  [name pass]
  (and (= name (env :admin-name))
       (= pass (env :admin-pass))))

(defresource admin-page
  [kind mode id]
  :allowed-methods [:get]
  :available-media-types ["text/html"]
  :authorized? (fn [{{auth :basic-authentication} :request}] auth)
  :handle-ok (display-update-page kind mode id)
  :handle-unauthorized "It's a secret to everybody.")

(defresource update-site
  [type]
  :allowed-methods [:post]
  :available-media-types ["application/x-www-form-urlencoded"]
  :post! (fn [ctx] (let [form-params (params->map (get-in ctx [:request :form-params]))]
                     (dispatch-update form-params)
                     {:_id (:_id form-params)
                      :title (:title form-params)
                      :kind (:kind form-params)}))
  :post-redirect? (fn [ctx]
                    {:location (str utils/site-url (redirect ctx))}))

(defresource return-result
  [task]
  :allowed-methods [:get]
  :available-media-types ["application/edn"]
  :handle-ok (pr-str task))

(defroutes public-routes
  (GET "/" [] (display-home-page))
  (GET "/contents" [] (display-contents-page))
  (GET "/page/:page" [page] (page/display-static-page page))
  (GET "/post/:title" [title] (display-post-page title))
  (GET "/tags" [] (display-tags-page))
  (GET "/tags/:tag" [tag] (display-tags-page tag))
  (GET "/topic/:topic" [topic] (topic/display-topic-page topic))
  (GET "/updates" [] (display-updates-page))
  ;; Disabled until RSS feed is fixed (ANY "/rss.xml" [] (get-feed))
  (resources "/"))

(defroutes api-routes
  (context "/api" []
           (GET "/post/:id" [id] (return-result (records->maps (get-post id))))
           (GET "/posts" [] (return-result (map records->maps (get-entities :posts))))
           (GET "/tag/:tag" [tag] (return-result (records->maps (get-tag tag))))
           (GET "/tags" [] (return-result (map records->maps (get-tags))))
           (GET "/topic/:id" [id] (return-result (map records->maps (get-topic id))))
           (GET "/topics" [] (return-result (map records->maps (get-entities :topics))))
           (POST "/update/:kind" [kind] (update-site kind))))

(defroutes admin-routes
  (context "/admin" []
           (GET "/" [] (display-admin-page))
           (context "/add" []
                    (GET "/follow-up" [] (admin-page :follow-up :new nil))
                    (GET "/page" [] (admin-page :page :new nil))
                    (GET "/post" [] (admin-page :post :new nil))
                    (GET "/topic" [] (admin-page :topic :new nil)))
           (context "/edit" []
                    (GET "/follow-up/:id" [id] (admin-page :follow-up :update id))
                    (GET "/page/:id" [id] (admin-page :page :update id))
                    (GET "/post/:id" [id] (admin-page :post :update id))
                    (GET "/topic/:id" [id] (admin-page :topic :update id)))))

(def app
  (do
    (initialize-db-connection)
    (routes
     (-> public-routes
         (wrap-routes wrap-defaults site-defaults))
     (-> api-routes
         (wrap-routes wrap-defaults api-defaults))
     (-> admin-routes
         (wrap-routes wrap-basic-authentication authenticated?)
         (wrap-routes wrap-defaults site-defaults)))))

;;
;; This Is Where It Will All Go Wrong for You
;;
(defn -main
  "Launches Furthermore."
  [& port]
  (let [port (Integer. (or (first port) (env :port) 5000))]
    (println "Furthermore up and running on port" port)
    (run-jetty #'app {:port port :join? false})))
