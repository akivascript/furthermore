(ns ^:figwheel-always furthermore.core
    (:require [goog.events :as events]
              [goog.history.EventType :as EventType]
              [om.core :as om :include-macros true]
              [secretary.core :as secretary :refer-macros [defroute]]
              [furthermore.home :as home]
              [furthermore.topics :as topics])
    (:import goog.History))

(enable-console-print!)

(defonce app-state (atom {:topics [] :posts [] :page :home}))

(def application {:target (. js/document (getElementById "page-content"))})

(defroute "/" []
  (let [cursor (om/ref-cursor (om/root-cursor app-state))]
    (om/update! cursor :page :home)))

(defroute "/contents" []
  (let [cursor (om/ref-cursor (om/root-cursor app-state))]
    (om/update! cursor :page :contents)))

(comment
  (defroute "/post/:id" [id]
    (js/console.log (str "Display post id " id))))

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (let [target-page (condp = (:page app)
                               :home home/construct-page
                               :contents topics/construct-page)]
         (om/build target-page app)))))
 app-state
 application)

(secretary/dispatch! window.location.pathname)
