(ns furthermore.view.admin
  (:require [hiccup.core :as h :refer :all]
            [hiccup.element :as e :refer :all]

            [furthermore.view.layout :as layout :refer [display-page]]))

(defn display-admin-page
  []
  (layout/display-page
   :admin
   (h/html
    [:div#home.container
     [:div.row
      [:div.content.col-xs-12.col-sm-10.col-sm-offset-1.col-md-8.col-md-offset-2]]])))
