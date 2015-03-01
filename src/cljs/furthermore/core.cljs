(ns ^:figwheel-always furthermore.core
    (:require [om.core :as om :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [secretary.core :as secretary :refer-macros [defroute]]
              [furthermore.topics :as topics])
    (:import goog.History))

(enable-console-print!)

(defonce app-state (atom {:topics []}))

(def application {:target (. js/document (getElementById "page-content"))})

(defroute "/" []
  (js/console.log "Home page"))

(defroute "/contents" []
  (js/console.log "Contents")
  (om/root
   topics/load-content
   app-state
   application))

(defroute "/post/:id" [id]
  (js/console.log (str "Display post id " id)))

(defroute "*" []
  (js/console.log "Not found"))

(secretary/dispatch! window.location.pathname)
