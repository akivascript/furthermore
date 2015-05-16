(ns furthermore.layout
  (:require [hiccup.core :refer :all]
            [hiccup.page :refer [html5 include-css include-js]]))

(def about-path "/page/about")
(def contents-path "/contents")
(def home-path "/")
(def updates-path "/updates")

(def nav-bar
  (html
   [:div {:class "container"}
    [:div {:class "navbar-header"}
     [:button {:class "navbar-toggle"
               :type "button"
               :data-toggle "collapse"
               :data-target "#navbar-main"}
      [:span {:class "icon-bar"}]
      [:span {:class "icon-bar"}]
      [:span {:class "icon-bar"}]]
     [:a {:href home-path
          :class "navbar-brand"} "WhaTEveR"]]
    [:div {:id "navbar-main"
           :class "navbar-collapse collapse"}
     [:ul {:class "nav navbar-nav"}
      [:li
       [:a {:href contents-path} "Table of Contents"]]
      [:li
       [:a {:href updates-path} "Updates"]]
      [:li
       [:a {:href about-path} "About"]]]]]))

(defn display-page
  [page content]
  (html5
   [:head
    [:title "Whatever"]
    [:meta {:http-equiv "content-type" :content "text/html;charset=utf-8"}]
    [:link {:rel "icon" :type "image/png" :href "/favicon.png"}]
    (include-css "http://maxcdn.bootstrapcdn.com/bootswatch/3.3.2/yeti/bootstrap.min.css")
    [:link {:href "http://fonts.googleapis.com/css?family=Lato:400,300,700|Puritan:400,400italic|Cinzel+Decorative|Cinzel|Crimson+Text:400,400italic|VT323"
            :rel "stylesheet"
            :type "text/css"}]
    (include-css "/css/magula.css")
    (include-css "/css/screen.css")]

   [:body
    [:div {:id "navbar"
           :class "navbar navbar-default navbar-fixed-top"} nav-bar]

    [:div {:id "page-content"} content]

    [:div {:class "page-footer"}
     [:div {:class "row"}
      [:div {:class "hidden-xs col-sm-6 text-left small"}
       "RSS feed hidden until it works!"[:br]
       "Only slightly more colorful!"[:br]
       "Toast goes in the toaster!"]
      [:div {:class "hidden-xs col-sm-6 text-right small"}
       "&copy; 2015 Whatever, Akiva"[:br]
       "Powered by " [:a {:href "https://github.com/akivaschoen/furthermore"} "Furthermore"]
       [:span {:class "small"} " (v0.5&beta;)"]
       [:br]
       "Clojure and ClojureScript are a-okay!"]
      [:div {:class "visible-xs-block hidden-sm hidden-lg text-center small"
             :style "padding-top: 10px;"}
       "&copy; 2015 Whatever, Akiva"[:br]
       "Powered by " [:a {:href "https://github.com/akivaschoen/furthermore"} "Furthermore"][:br]
       "Clojure and ClojureScript are a-okay!"]
      [:div {:class "visible-xs-block hidden-sm hidden-lg text-center small"}
       "RSS feed hidden until it works!"[:br]
       "Only slightly more colorful!"[:br]
       "Toast goes in the toaster!"]]]

    (include-js
        "http://code.jquery.com/jquery-2.1.3.min.js"
        "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"
        "/js/marked.min.js"
        "/js/highlight.pack.js"
        "/js/compiled/furthermore.js")

    [:script "hljs.initHighlightingOnLoad ()"]

    (case page
      :contents [:script "furthermore.core.initialize_contents ()"]
      :update [:script "furthermore.core.initialize_update ()"]
      "")
    ]))
