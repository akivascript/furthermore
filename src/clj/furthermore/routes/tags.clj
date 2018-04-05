(ns furthermore.routes.tags
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.layout :as layout]
            [furthermore.views.tags :as tags]))

(defn build
  ([]
   (build nil))
  ([tag]
   (layout/render :tags (tags/content tag))))

(defroutes routes
  (GET "/tags" [] (build))
  (GET "/tags/:tag" [tag] (build tag)))
