(ns furthermore.routes.admin
  (:require [buddy.hashers :as hasher]
            [compojure.core :refer [context defroutes GET]]

            [furthermore.entities.authors :as authors]
            [furthermore.layout :as layout]
            [furthermore.views.admin :as admin]))

(defn- authenticate
  [user password]
  (when-let [user (authors/get :user user)]
    (when (hasher/check password (:password user))
      user)))

(defn- authenticated?
  [{user :user :as req}]
  (not (nil? user)))

(defn- login
  [{{user "user" password "password"} :form-params
    session :session :as req}]
  #_(if-let [user (authenticate user password)]
    (assoc (redirect "/")
           :session (assoc session :identity user))   ; enter admin session
    ())) ; return to login page

(defn- logout
  [{session :session}]
  #_(assoc (redirect "/admin")
         :session (dissoc session :identity)))

(defn build
  ([kind]
   (build kind :new nil))
  ([kind mode]
   (build kind mode nil))
  ([kind mode id]
   (layout/render :admin (admin/content kind mode id))))

(defroutes routes
  (context "/admin" []
           (GET "/" [] (build :home))
           (GET "/author" [] (build :author))
           (GET "/follow-up" [] (build :follow))
           (GET "/image" [] (build :image))
           (GET "/page" [] (build :page))
           (GET "/post" [] (build :post))
           (GET "/topic" [] (build :topic))
           (GET "/author/:id" [id] (build :author :update id))
           (GET "/follow-up/:id" [id] (build :follow :update id))
           (GET "/image:/id" [id] (build :image :update id))
           (GET "/page/:id" [id] (build :page :update id))
           (GET "/post/:id" [id] (build :post :update id))
           (GET "/topic/:id" [id] (build :topic :update id))))
