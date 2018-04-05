(ns furthermore.routes.posts
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.entities.posts :as posts]
            [furthermore.layout :as layout]
            [furthermore.views.post :as post]))

(defn build
  [url]
  (let [post (posts/get :url url)]
    (layout/render :post (:title post) (post/content post))))

(defroutes routes
  (GET "/posts/:url" [url] (build url)))
