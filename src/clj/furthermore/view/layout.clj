(ns furthermore.view.layout
  (:require [hiccup.core :refer :all]
            [hiccup.page :refer [html5 include-css include-js]]))

(def about-path "/page/about")
(def contents-path "/contents")
(def home-path "/")
(def tags-path "/tags")
(def updates-path "/updates")

(def standard-nav
  (html
   [:li
    [:a {:href contents-path} "Table of Contents"]]
   [:li
    [:a {:href tags-path} "Tags"]]
   [:li
    [:a {:href updates-path} "Updates"]]
   [:li
    [:a {:href about-path} "About"]]))

(def admin-nav
  (html
   [:li
    [:a {:href "/admin"} "Admin Home"]]
   [:li.dropdown
    [:a.dropdown-toggle {:href "#" :data-toggle "dropdown" :role "button"
                         :aria-expanded false} "Add "
     [:span.caret]]
    [:ul.dropdown-menu {:role "menu"}
     [:li
      [:a {:href "/admin/add/post"} "New Post"]]
     [:li
      [:a {:href "/admin/add/follow-up"} "New Follow-Up"]]
     [:li
      [:a {:href "/admin/add/topic"} "New Topic"]]
     [:li
      [:a {:href "/admin/add/static"} "New Page"]]]]))

(defn nav-bar
  [page]
  (let [links (case page
                (:admin :update) admin-nav
                standard-nav)]
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
        links
        ]]])))

(defn display-page
  ([page content]
   (display-page page "" content))
  ([page title content]
   (html5
    [:head
     [:title (str "Whatever"
                  (when-not (empty? title)
                    (str " &mdash; " title)))]
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
            :class "navbar navbar-default navbar-fixed-top"} (nav-bar page)]

     [:div {:id "page-content"} content]

     [:div {:class "page-footer"}
      [:div {:class "row"}
       [:div {:class "hidden-xs col-sm-6 text-left small"}
        "RSS feed coming soon!"[:br]
        "Only slightly more colorful!"[:br]
        "Toast goes in the toaster!"]
       [:div {:class "hidden-xs col-sm-6 text-right small"}
        "&copy; 2015 Whatever, Akiva"[:br]
        "Powered by " [:a {:href "https://github.com/akivaschoen/furthermore"} "Furthermore"]
        [:span {:class "small"} " (v0.6.5&beta;)"]
        [:br]
        "Clojure and ClojureScript are a-okay!"]
       [:div {:class "visible-xs-block hidden-sm hidden-lg text-center small"
              :style "padding-top: 10px;"}
        "&copy; 2015 Whatever, Akiva"[:br]
        "Powered by " [:a {:href "https://github.com/akivaschoen/furthermore"} "Furthermore"][:br]
        "Clojure and ClojureScript are a-okay!"]
       [:div {:class "visible-xs-block hidden-sm hidden-lg text-center small"}
        "RSS feed coming soon!"[:br]
        "Only slightly more colorful!"[:br]
        "Toast goes in the toaster!"]]]

     (include-js
      "http://code.jquery.com/jquery-2.1.3.min.js"
      "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"
      "/js/highlight.pack.js"
      "/js/compiled/furthermore.js")

     [:script "hljs.initHighlightingOnLoad ()"]

     (case page
       :admin [:script "furthermore.core.initialize_contents ()"]
       :contents [:script "furthermore.core.initialize_contents ()"]
       :update [:script "furthermore.core.initialize_update ()"]
       "")
     ])))
