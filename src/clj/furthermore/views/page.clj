(ns furthermore.views.page
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.pages :as pages]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]))

(def build (comp (partial vutil/prepare-text smarten)
                 (partial vutil/prepare-text md-to-html-string)))

(defn content
  "Displays the content of a static page."
  ([url]
   (let [page (pages/get :url url)]
     [:div#page.container
      [:div#banner.page-header
       [:div.row
        [:div.col-xs-12.col-sm-10.col-sm-offset-1
         [:div.page-title (:title page)]
         [:div.page (md-to-html-string (smarten (:body page)))]
         (common/footer :page page)]]]])))
