(ns furthermore.views.error
  (:require [hiccup.core :refer :all]
            [hiccup.page :refer [html5 include-css include-js]]))

(defn head
  [title]
  (html5
   [:head
    [:title title]
    [:meta {:http-equiv "content-type" :content "text/html; charset=utf-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
    [:link {:rel "icon" :type "image/png" :href "/favicon.png"}]
    (include-css "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")
    (include-css "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css")
    [:style {:type "text/css"}
     "html {
           height: 100%;
           min-height: 100%;
           min-width: 100%;
           overflow: hidden;
           width: 100%;
           }
     html body {
                height: 100%;
                margin: 0;
                padding: 0;
                width: 100%;
                }
     html .container-fluid {
                            display: table;
                            height: 100%;
                            padding: 0;
                            width: 100%;
                            }
     html .row-fluid {
                      display: table-cell;
                      height: 100%;
                      vertical-align: middle;
                      }"]]))

(defn content
  [details]
  (html5
   [:body
    [:div.container-fluid
     [:div.row-fluid
      [:div.col-lg-12
       [:div.centering.text-center
        [:div.text-center
         [:h1
          [:span.text-danger "Error: " (:status details)]]
         [:hr]
         (when-let [title (:title details)]
           [:h2.without-margin title])
         (when-let [message (:message details)]
           [:h4.text-danger message])]]]]]]))

(defn render
  "Renders an error page featuring a :status error code and optional error :title
  and detailed :error message."
  [details]
  {:status (:status details)
   :body (str (head (or (:title details)
                        "Something bad happened"))
              (content details))})
