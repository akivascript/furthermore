(ns ^:figwheel-always furthermore.core
    (:require [ajax.core :as ajax]
              [cljs.reader :as reader]
              [goog.events :as events]
              [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true])
    (:import [goog.net XhrIo]
             goog.net.EventType
             [goog.events EventType]))

(enable-console-print!)

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defonce app-state (atom {:text "Oh" :topics []}))

(defn display
  [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn topics-view
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/topics" {:handler #(om/transact! app :topics (fn [_] %))
                           :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (apply dom/div #js {:className "Topics"}
             (map (fn [text] (dom/div
                             #js {:style #js {:textDecoration "underline"}}
                             (:title text))) (:topics app))))))

(om/root
 topics-view
 app-state
 {:target (. js/document (getElementById "topics"))})

