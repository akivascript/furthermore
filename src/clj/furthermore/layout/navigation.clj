(ns furthermore.layout.navigation
  (:require [hiccup.core :refer :all]
            [hiccup.page :refer [html5 include-css include-js]]))

(def path
  {:about "/page/about"
   :contents "/contents"
   :home "/"
   :tags "/tags"
   :updates "/updates"})

(def ^:private default
  (html
   [:li
    [:a {:href (:contents path)} "Table of Contents"]]
   [:li
    [:a {:href (:tags path)} "Tags"]]
   [:li
    [:a {:href (:updates path)} "Updates"]]
   [:li
    [:a {:href (:about path)} "About"]]))

(def ^:private admin
  (html
   [:li
    [:a {:href "/admin"} "Admin Home"]]
   [:li.dropdown
    [:a.dropdown-toggle {:href "#" :data-toggle "dropdown" :role "button"
                         :aria-expanded false} "Add "
     [:span.caret]]
    [:ul.dropdown-menu {:role "menu"}
     [:li
      [:a {:href "/admin/add/post"} "Post"]]
     [:li
      [:a {:href "/admin/add/follow-up"} "Follow-Up"]]
     [:li
      [:a {:href "/admin/add/topic"} "Topic"]]
     [:li
      [:a {:href "/admin/add/page"} "Page"]]
     [:li
      [:a {:href "/admin/add/image"} "Image"]]]]))

(defn bar
  [page]
  (let [links (case page
                (:admin :update) admin
                default)]
    (html
     [:div.container
      [:div.navbar-header
       [:a.navbar-brand {:href (:home path)} "WhaTEveR"]
       [:button.navbar-toggle {:type "button"
                               :data-toggle "collapse"
                               :data-target "#navbar-main"}
        [:i.fa.fa-bars {:aria-hidden "true"}]]]
      [:div#navbar-main.navbar-collapse.collapse
       [:ul.nav.navbar-nav.navbar-right links]]])))
