(ns furthermore.core
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]

            [furthermore.home :refer [home-path home-view]]
            [furthermore.posts :refer [post-path]]
            [furthermore.routing :refer [consume-events pub-chan sub-chan]]
            [furthermore.static-page :refer [static-path]]
            [furthermore.topics :refer [contents-path]]
            [furthermore.weblog :refer [updates-path]]
            [furthermore.update :refer [update-path]])
  (:import goog.History))

;;
;; General set-up
;;
(enable-console-print!)

(secretary/set-config! :prefix "#")

(defonce app-state (atom {:topics []
                          :post {:id nil
                                 :post nil
                                 :topic nil}
                          :page nil
                          :weblog []}))

(def application {:target (. js/document (getElementById "page-content"))})
(def nav-bar {:target (. js/document (getElementById "nav-bar"))})

;;
;; Routing stuff
;;
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))

;;
;; Layout
;;
(defn nav-view
  [data owner]
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
                 (d/a {:href (home-path)
                       :class "navbar-brand"} "WhaTEveR"))
          (d/div {:id "navbar-main"
                  :class "navbar-collapse collapse"}
                 (d/ul {:class "nav navbar-nav"}
                       (d/li
                        (d/a {:href (contents-path)} "Table of Contents"))
                       (d/li
                        (d/a {:href (updates-path)} "Updates"))
                       (d/li
                        (d/a {:href (static-path {:url "about"})} "About")))))))

(om/root
 (fn [data owner]
   (reify
     om/IRender
     (render [_]
       (om/build nav-view data))))
 app-state
 nav-bar)

(om/root
 (fn [data owner]
   (reify
     om/IInitState
     (init-state [_]
       {:view home-view})
     om/IDidMount
     (did-mount [_]
       (consume-events owner :change-view
                       (fn [{:keys [view view-init-state view-name data]}]
                         (om/set-state! owner :view view)
                         (om/set-state! owner :view-init-state view-init-state)
                         (om/set-state! owner :react-key view-name)
                         (om/set-state! owner :opts data))))
     om/IRenderState
     (render-state [_ {:keys [view view-init-state react-key opts]}]
       (om/build view data {:init-state view-init-state
                            :react-key react-key
                            :opts opts}))))
 app-state
 (assoc application :shared
        {:sub-chan sub-chan
         :pub-chan pub-chan}))
