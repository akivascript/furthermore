(ns furthermore.views.history
  "This is for the display of the History page which lists
  in chronological order all updates (events) to the blog."
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.events :as events]))

(defn content
  []
  [:div#history
   [:div#banner.page-header
    [:div.row
     [:div.col-xs-12.col-sm-10.col-sm-offset-1
      [:div.page-title "History"]
      [:div.history]]]]])
