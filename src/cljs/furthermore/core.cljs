(ns furthermore.core
    (:require [goog.events :as events]
              [goog.history.EventType :as EventType]
              [om.core :as om :include-macros true]
              [secretary.core :as secretary :refer-macros [defroute]]
              [furthermore.error :as error]
              [furthermore.home :as home]
              [furthermore.navigation :as nav]
              [furthermore.posts :as posts]
              [furthermore.static :as static]
              [furthermore.topics :as topics]
              [furthermore.utils :as utils]
              [furthermore.weblog :as weblog])
    (:import goog.History))

(enable-console-print!)

(defonce app-state (atom {:topics []
                          :post {:id nil
                                 :post nil
                                 :topic nil}
                          :page nil
                          :weblog []}))

(def application {:target (. js/document (getElementById "page-content"))})
(def nav-bar {:target (. js/document (getElementById "nav-bar"))})

(defn- set-post
  [cursor url]
  (om/update! cursor [:post :url] url)
  (om/update! cursor [:post :post] nil)
  (om/update! cursor [:post :topic] nil))

(defn route-to
  [dest url]
  (let [cursor (om/ref-cursor (om/root-cursor app-state))]
    (om/update! cursor [:page] dest)
    (utils/set-url url)
    cursor))

(secretary/set-config! :prefix "#")

(defroute "/" []
  (route-to :home "/"))

(defroute "/:url" [url]
  (let [url (str "/" url)]
    (case url
      "/contents" (route-to :contents url)
      "/weblog" (route-to :weblog url)
      (route-to :static url))))

(defroute "/post/:url" [url]
  (let [cursor (route-to :post (str "/post/" url))]
    (set-post cursor url)))

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (let [target-page (case (:page app)
                           :contents topics/get-page
                           :home home/get-page
                           :post posts/get-page
                           :static static/get-page
                           :weblog weblog/get-page
                           error/get-page)]
         (om/build target-page app)))))
 app-state
 application)

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (om/build nav/render app))))
 app-state
 nav-bar)

(.addEventListener js/window "popstate" #(secretary/dispatch! (.-state %)))

(secretary/dispatch! window.location.pathname)
