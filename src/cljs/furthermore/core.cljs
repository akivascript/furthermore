(ns ^:figwheel-always furthermore.core
    (:require [goog.events :as events]
              [goog.history.EventType :as EventType]
              [om.core :as om :include-macros true]
              [secretary.core :as secretary :refer-macros [defroute]]
              [furthermore.error :as error]
              [furthermore.home :as home]
              [furthermore.navigation :as nav]
              [furthermore.posts :as posts]
              [furthermore.topics :as topics])
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

(defroute "/" []
  (let [cursor (om/ref-cursor (om/root-cursor app-state))]
    (om/update! cursor [:page] :home)))

(defroute "/contents" []
  (let [cursor (om/ref-cursor (om/root-cursor app-state))]
    (om/update! cursor [:page] :contents)))

(defroute "/post/:id" [id]
  (let [cursor (om/ref-cursor (om/root-cursor app-state))]
    (om/update! cursor [:page] :post)
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

(secretary/dispatch! window.location.pathname)
