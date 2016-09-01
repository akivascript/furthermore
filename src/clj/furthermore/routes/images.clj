(ns furthermore.routes.images
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.entities.images :as images]
            [furthermore.views.image :as image]))

(defn build
  [image]
  (let [img (images/get :filename image)]
    (image/content img)))

(defroutes routes
  (GET "/images/:image" [image] (build image)))
