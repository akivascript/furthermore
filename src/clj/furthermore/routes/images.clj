(ns furthermore.routes.images
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.layout :as layout]
            [furthermore.views.image :as image]))

(defn build
  [url]
  (layout/render :image (image/content url)))

(defroutes routes
  (GET "/images/:url" [image] (build image)))
