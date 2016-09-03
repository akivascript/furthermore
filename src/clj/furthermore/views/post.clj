(ns furthermore.views.post
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.posts :as posts]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]))

(defn content
  [post]
  [:div.container
   [:div#banner.page-header
    (common/entry :post post)
    (when-let [fs (filter #(= (:kind %) :follow) (:refs post))]
      (html
       [:div.glyphicon.glyphicon-triangle-bottom.arrow]
       [:div.follows
        (for [follow (sort-by :created-on (map #(follows/get :_id (:_id %)) fs))]
          (common/entry :post follow))]))]])
