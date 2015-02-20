(ns furthermore.views.layout
  (:require [hiccup.page :refer [html5 include-css]]))

(defn common [& body]
  (html5
    [:head
     [:title "Welcome to furthermore"]
     (include-css "/css/screen.css")]
    [:body body]))
