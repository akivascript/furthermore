(ns furthermore.core
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [furthermore.home :refer [home-view]])
  (:import goog.History))

(enable-console-print!)

(def application {:target (. js/document (getElementById "page-content"))})
(def nav-bar {:target (. js/document (getElementById "nav-bar"))})

(defonce app-state (atom {:topics []
                          :post {:id nil
                                 :post nil
                                 :topic nil}
                          :page nil
                          :weblog []}))

(secretary/set-config! :prefix "#")

(defroute home-path "/" [] (println "/"))
(defroute contents-path "/contents" [] (println "/contents"))
(defroute updates-path "/updates" [] (println "/updates"))

(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))

(defn nav-view
  [app owner]
  (om/component
   (d/div {:class "container"}
          (d/div {:class "navbar-header"}
                 (d/button {:class "navbar-toggle"
                            :type "button"
                            :data-toggle "collapse"
                            :data-target "#navbar-main"}
                           (d/span {:class "icon-bar"})
                           (d/span {:class "icon-bar"})
                           (d/span {:class "icon-bar"}))
                 (comment (d/a {:href "/"
                                :class "navbar-brand"
                                :onClick (fn [event]
                                           (utils/navigate-to "/")
                                           (.preventDefault event))}
                               "WhateveR"))
                 (d/a {:href (home-path)
                       :class "navbar-brand"}
                      "WhateveR"))
          (d/div {:id "navbar-main"
                  :class "navbar-collapse collapse"}
                 (d/ul {:class "nav navbar-nav"}
                       (d/li
                        (d/a {:href (contents-path)} "Table of Contents")
                        (comment (d/a {:href "/contents"
                                       :onClick (fn [event]
                                                  (utils/navigate-to "/contents")
                                                  (.preventDefault event))}
                                      "Table of Contents"))
                        (d/li
                         (d/a {:href (updates-path)} "Updates")
                         (comment (d/a {:href "/weblog"
                                        :onClick (fn [event]
                                                   (utils/navigate-to "/weblog")
                                                   (.preventDefault event))}
                                       "Web Log")))))))))

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (om/build home-view app))))
 app-state
 application)

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (om/build nav-view app))))
 app-state
 nav-bar)
