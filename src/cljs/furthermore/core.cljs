(ns ^:figwheel-always furthermore.core
    (:require [goog.events :as events]
              [goog.history.EventType :as EventType]
              [om.core :as om :include-macros true]
              [secretary.core :as secretary :refer-macros [defroute]]
              [furthermore.error :as error]
              [furthermore.home :as home]
              [furthermore.navigation :as nav]
              [furthermore.posts :as posts]
              [furthermore.topics :as topics]
              [furthermore.utils :as utils])
    (:import goog.History))

(enable-console-print!)

(defonce app-state (atom {:topics []
                          :post {:id nil
                                 :post nil
                                 :topic nil}
                          :page nil}))

(def application {:target (. js/document (getElementById "page-content"))})
(def nav-bar {:target (. js/document (getElementById "nav-bar"))})


(defn- set-post
  [cursor id]
  (om/update! cursor [:post :id] id)
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

(defroute "/contents" []
  (route-to :contents "/contents"))

(defroute "/post/:id" [id]
  (let [cursor (route-to :post (str "/post/" id))]
    (set-post cursor id)))

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (let [target-page (case (:page app)
                           :home home/get-page
                           :contents topics/get-page
                           :post posts/get-page
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
