(ns furthermore.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [compojure.route :as route]
            [mount.core :as mount]

            [furthermore.env :refer [defaults]]
            [furthermore.middleware :as middleware]
            [furthermore.routes.contents :as contents]
            [furthermore.routes.home :as home]
            [furthermore.routes.post :as post]
            [furthermore.routes.tags :as tags]
            [furthermore.routes.topic :as topic]
            [furthermore.views.error :as error]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(defn wrap-route
  [route]
  (-> route
      (wrap-routes middleware/wrap-csrf)
      (wrap-routes middleware/wrap-formats)))

(def app-routes
  (routes
   (wrap-route #'contents/routes)
   (wrap-route #'home/routes)
   (wrap-route #'post/routes)
   (wrap-route #'tags/routes)
   (wrap-route #'topic/routes)
   (route/not-found
    (:body
     (error/render {:status 404
                    :title "page not found"})))))

(defn app [] (middleware/wrap-base #'app-routes))
