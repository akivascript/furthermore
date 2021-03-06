(ns furthermore.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [compojure.route :as route]
            [mount.core :as mount]

            [furthermore.env :refer [defaults]]
            [furthermore.middleware :as middleware]
            [furthermore.routes.admin :as admin]
            [furthermore.routes.contents :as contents]
            [furthermore.routes.history :as history]
            [furthermore.routes.home :as home]
            [furthermore.routes.images :as images]
            [furthermore.routes.posts :as posts]
            [furthermore.routes.pages :as pages]
            [furthermore.routes.tags :as tags]
            [furthermore.routes.topics :as topics]
            [furthermore.views.error :as error]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(defn wrap-admin
  [route]
  (-> route
      (wrap-routes middleware/wrap-csrf)
      (wrap-routes middleware/wrap-restricted)))

(defn wrap-route
  [route]
  (-> route
      (wrap-routes middleware/wrap-csrf)
      (wrap-routes middleware/wrap-formats)))

(def app-routes
  (routes
   (wrap-admin #'admin/routes)
   (wrap-route #'contents/routes)
   (wrap-route #'history/routes)
   (wrap-route #'home/routes)
   (wrap-route #'images/routes)
   (wrap-route #'posts/routes)
   (wrap-route #'pages/routes)
   (wrap-route #'tags/routes)
   (wrap-route #'topics/routes)
   (route/not-found
    (:body
     (error/render {:status 404
                    :title "page not found"})))))

(defn app [] (middleware/wrap-base #'app-routes))
