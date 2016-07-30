(ns furthermore.server
  (:require [compojure.core :as cmp :refer [DELETE GET POST defroutes]]
            [compojure.route :as route]
            [environ.core :refer [env]]
            [medley.core :as med]
            [liberator.core :refer [defresource]]
            [liberator.dev :as ldev]
            [ring.adapter.jetty :as jet]
            [ring.middleware.anti-forgery :refer :all]
            [ring.middleware.basic-authentication :as auth]
            [ring.middleware.defaults :refer :all]

            [furthermore.entities :as ent]
            [furthermore.utils :as utils]
            [furthermore.repository :as repo]
            [furthermore.view.admin :as admin]
            [furthermore.view.contents :as contents]
            [furthermore.view.home :as home]
            [furthermore.view.page :as page]
            [furthermore.view.post :as post]
            [furthermore.view.tags :as tags]
            [furthermore.view.topic :as topic]
            [furthermore.view.update :as update]
            [furthermore.view.updates :as updates])
  (:gen-class))

;;
;; EDN Functions
;;
(defn- params->map
  [params]
  (let [m (med/map-keys keyword params)]
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
  (let [original (ent/get-entity {:_id (:_id entity)} (keyword (:kind entity)))]
    ((comp ent/add-entity fn) (merge original entity))))

(defmulti dispatch-update :kind)

(defmethod dispatch-update "follow-up"
  [entity]
  (dispatch-update* ent/create-follow-up entity))

(defmethod dispatch-update "page"
  [entity]
  (dispatch-update* ent/create-page entity))

(defmethod dispatch-update "post"
  [entity]
  (dispatch-update* ent/create-post entity))

(defmethod dispatch-update "topic"
  [entity]
  (dispatch-update* ent/create-topic entity))

;;
;; Routes & Resources
;;
(defmulti redirect :kind)

(defn- redirect*
  [entity]
  (str (utils/create-url-path entity) (utils/create-entity-url entity)))

(defmethod redirect "follow-up"
  [ctx]
  "admin"
  #_(let [post (get-follow-up (:_id ctx))]
    (redirect* (get-parent post))))

(defmethod redirect "page"
  [ctx]
  "admin"
  #_(let [page (get-entity {:title (:title ctx)} :page)]
    (str (utils/create-url-path page) (:url page))))

(defmethod redirect "post"
  [ctx]
  "admin"
  #_(let [post (get-post (:_id ctx))]
    (redirect* post)))

(defmethod redirect "topic"
  [_]
  "admin")

(defn authenticated?
  [name pass]
  (and (= name (env :admin-name))
       (= pass (env :admin-pass))))

(defresource admin-page
  [kind mode id]
  :allowed-methods [:get]
  :available-media-types ["text/html"]
  :authorized? (fn [{{auth :basic-authentication} :request}] auth)
  :handle-ok (update/display-update-page kind mode id)
  :handle-unauthorized "It's a secret to everybody.")

(defresource update-site
  [type]
  :allowed-methods [:post :delete]
  :available-media-types ["application/x-www-form-urlencoded"
                          "application/edn"]
  :post! (fn [ctx] (let [form-params (params->map (get-in ctx [:request :form-params]))]
                     (dispatch-update form-params)
                     {:_id (:_id form-params)
                      :title (:title form-params)
                      :kind (:kind form-params)}))
  :delete! (fn [ctx] (let [{:keys [id kind]} (get-in ctx [:request :params])]
                      (println id kind)
                      (ent/delete-entity id (keyword kind))))
  :post-redirect? (fn [ctx]
                    {:location (str utils/site-url (redirect ctx))}))

(defresource return-result
  [task]
  :allowed-methods [:get]
  :available-media-types ["application/edn"]
  :handle-ok (pr-str task))

(defroutes public-routes
  (GET "/" [] (home/display-home-page))
  (GET "/contents" [] (contents/display-contents-page))
  (GET "/page/:page" [page] (page/display-static-page page))
  (GET "/post/:title" [title] (post/display-post-page title))
  (GET "/tags" [] (tags/display-tags-page))
  (GET "/tags/:tag" [tag] (tags/display-tags-page tag))
  (GET "/topic/:topic" [topic] (topic/display-topic-page topic))
  (GET "/updates" [] (updates/display-updates-page))
  ;; Disabled until RSS feed is fixed (ANY "/rss.xml" [] (get-feed))
  (route/resources "/"))

(defroutes api-routes
  (cmp/context "/api" []
           (GET "/post/:id" [id] (return-result (records->maps (ent/get-post id))))
           (GET "/posts" [] (return-result (map records->maps (ent/get-entities :posts))))
           (GET "/tag/:tag" [tag] (return-result (records->maps (ent/get-tag tag))))
           (GET "/tags" [] (return-result (map records->maps (ent/get-tags))))
           (GET "/topic/:id" [id] (return-result (map records->maps (ent/get-topic id))))
           (GET "/topics" [] (return-result (map records->maps (ent/get-entities :topics))))
           (POST "/update/:kind" [kind] (update-site kind))
           (DELETE "/update/:kind/:id" [kind] (update-site kind))))

(defroutes admin-routes
  (cmp/context "/admin" []
           (GET "/" [] (admin/display-admin-page))
           (cmp/context "/add" []
                    (GET "/follow-up" [] (admin-page :follow-up :new nil))
                    (GET "/image" [] (admin-page :image :new nil))
                    (GET "/page" [] (admin-page :page :new nil))
                    (GET "/post" [] (admin-page :post :new nil))
                    (GET "/topic" [] (admin-page :topic :new nil)))
           (cmp/context "/edit" []
                    (GET "/follow-up/:id" [id] (admin-page :follow-up :update id))
                    (GET "/page/:id" [id] (admin-page :page :update id))
                    (GET "/post/:id" [id] (admin-page :post :update id))
                    (GET "/topic/:id" [id] (admin-page :topic :update id)))))

(def app
  (do
    (repo/initialize-db-connection)
    (cmp/routes
     (-> public-routes
         (cmp/wrap-routes wrap-defaults site-defaults))
     (-> api-routes
         (ldev/wrap-trace :header :ui)
         (cmp/wrap-routes wrap-defaults api-defaults))
     (-> admin-routes
         (cmp/wrap-routes auth/wrap-basic-authentication authenticated?)
         (cmp/wrap-routes wrap-defaults site-defaults)))))

;;
;; This Is Where It Will All Go Wrong for You
;;
(defn -main
  "Launches Furthermore."
  [& port]
  (let [port (Integer. (or (first port) (env :port) 5000))]
    (println "Furthermore up and running on port" port)
    (jet/run-jetty #'app {:port port :join? false})))
