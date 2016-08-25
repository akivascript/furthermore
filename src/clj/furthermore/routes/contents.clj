(ns furthermore.routes.contents
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.layout :as layout]
            [furthermore.views.contents :as contents]))

(defn build
  []
  (layout/render :contents (contents/content)))

(defroutes routes
  (get "/contents" [] (build)))
