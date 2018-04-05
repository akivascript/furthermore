(ns furthermore.routes.pages
  "This router handles all pages which includes full-page material
  which isn't expected to change very often (i.e., an about page)."
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.layout :as layout]
            [furthermore.views.page :as page]))

(defn build
  ([]
   (build nil))
  ([url]
   (layout/render :page (page/content url))))

(defroutes routes
  #_(GET "/pages" [] (build)) ;; TODO : ToC for static pages
  (GET "/page/:url" [url] (build url)))
