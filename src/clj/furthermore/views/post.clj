(ns furthermore.views.post
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.images :as images]
            [furthermore.entities.posts :as posts]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]))

(def build (comp (partial common/entry :post)
                 (partial vutil/prepare-text md-to-html-string)
                 (partial vutil/prepare-text smarten)))

(defn follows
  [post]
  (when-let [refs (:refs post)]
    [:div.glyphicon.glyphicon-triangle-bottom.arrow]
    (map)))

(defn content
  [post]
  [:div.container
   [:div#banner.page-header
    (build post)
    (when-let [refs (filter #(= (:kind %) :follow) (:refs post))]
      [:div.glyphicon.glyphicon-triangle-bottom.arrow]
      (map (partial common/entry :follow) refs))]])

