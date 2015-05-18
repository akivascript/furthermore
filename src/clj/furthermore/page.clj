(ns furthermore.page
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.layout :refer [display-page]]
            [furthermore.entities :refer [get-page]]))

(defn display-static-page
  [page]
  (let [page (get-page {:url page})]
    (display-page
     :static
     (html
      [:div {:id "static"
             :class "container"}
       [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1"}
        [:div {:class "title"} (smarten (:title page))]
        [:div {:class "body"} (md-to-html-string (:body page))]]]))))

