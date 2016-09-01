(ns furthermore.views.page
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.pages :as pages]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]))

(defn content
  "Displays the content of a static page."
  ([url]
   (let [page (pages/get :url url)]
     [:div#page.container
      [:div#banner.page-header
       [:div.row
        [:div.col-xs-12.col-sm-10.col-sm-offset-1
         [:div.page-title (smarten (:title page))]
         [:div.page (vutil/text page)]
         (common/footer :page page)]]]])))
