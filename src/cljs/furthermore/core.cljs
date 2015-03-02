(ns ^:figwheel-always furthermore.core
    (:require [goog.events :as events]
              [goog.history.EventType :as EventType]
              [om.core :as om :include-macros true]
              [secretary.core :as secretary :refer-macros [defroute]]
              [furthermore.home :as home]
              [furthermore.topics :as topics])
    (:import goog.History))

(enable-console-print!)

(defonce app-state (atom {:topics [] :posts []}))

(def application {:target (. js/document (getElementById "page-content"))})

(defroute "/" []
  (om/root
   home/construct-page
   app-state
   application))

(defroute "/contents" []
  (om/root
   topics/load-content
   app-state
   application))

(comment
  (defroute "/post/:id" [id]
    (js/console.log (str "Display post id " id))))

(secretary/dispatch! window.location.pathname)
