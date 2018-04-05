(ns furthermore.layout
  (:require [hiccup.core :refer :all]
            [hiccup.page :refer [html5 include-css include-js]]
            [ring.util.http-response :refer [content-type ok]]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]

            [furthermore.layout.navigation :as nav]))

(declare ^:dynamic *identity*)
(declare ^:dynamic *app-context*)

(defn head
  [title]
  (html5
   [:head
    [:title (str "Whatever"
                 (when-not (empty? title)
                   (str " &mdash; " title)))]
    #_[:meta {:http-equiv "content-type" :content "text/html;charset=utf-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    [:meta {:http-equiv "X-UA-Compatible" :content="IE=edge"}]
    [:link {:rel "icon" :type "image/png" :href "/favicon.png"}]
    (include-css "http://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css")
    [:link {:href "http://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i|Cinzel+Decorative|Cinzel|Crimson+Text:400,400i|Fira+Mono:400,700"
            :rel "stylesheet"
            :type "text/css"}]
    (include-css "/css/magula.css")
    (include-css "/css/screen.css")]))

(declare includes)

(defn body
  [page content]
  (html
   [:body
    [:div.navbar.navbar-default.navbar-fixed-top (nav/bar page)]

    content

    [:div.page-footer
     [:div.row
      [:div.hidden-xs.col-sm-6.text-left.small
       "RSS feed coming soon!"[:br]
       "Only slightly more colorful!"[:br]
       "Toast goes in the toaster!"]
      [:div.hidden-xs.col-sm-6.text-right.small
       "&copy; 2015-2016 Whatever, Akiva"[:br]
       "Powered by " [:a {:href "https://github.com/akivascript/furthermore"} "Furthermore"]
       [:span.small " (v0.8.5&beta;)"]
       [:br]
       "Clojure and ClojureScript are a-okay!"]
      [:div.visible-xs-block.hidden-sm.hidden-lg.text-center.small
       :style "padding-top: 10px;"
       "&copy; 2015-2016 Whatever, Akiva"[:br]
       "Powered by " [:a {:href "https://github.com/akivascript/furthermore"} "Furthermore"]
       [:span.small " (v0.8.5&beta;)"]
       [:br]
       "Clojure and ClojureScript are a-okay!"]
      [:div.visible-xs-block.hidden-sm.hidden-lg.text-center.small
       "RSS feed coming soon!"[:br]
       "Only slightly more colorful!"[:br]
       "Toast goes in the toaster!"]]]]))

(defn includes
  [page]
  (html
   (include-js
    "http://code.jquery.com/jquery-2.1.3.min.js"
    "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
    "/js/highlight.pack.js"
    "/js/furthermore.js"
    "https://use.fontawesome.com/50965d2ea2.js")

   [:script "hljs.initHighlightingOnLoad ()"]

   (case page
     :admin [:script "furthermore.core.initialize_contents ()"]
     :contents [:script "furthermore.core.initialize_contents ()"]
     :update [:script "furthermore.core.initialize_update ()"]
     "")))

(defn render
  ([page content]
   (render page nil content))
  ([page title content]
   (str (head title)
        (body page content)
        (includes page))))
