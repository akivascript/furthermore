(ns furthermore.core
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [furthermore.home :as home]
            [furthermore.topics :as contents]
            [furthermore.posts :as posts]
            [furthermore.routing :as route]
            [furthermore.static-page :as page]
            [furthermore.weblog :as updates])
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
                 (d/a {:href (home/home-path)
                       :class "navbar-brand"} "WhaTEveR"))
          (d/div {:id "navbar-main"
                  :class "navbar-collapse collapse"}
                 (d/ul {:class "nav navbar-nav"}
                       (d/li
                        (d/a {:href (contents/contents-path)} "Table of Contents"))
                       (d/li
                        (d/a {:href (updates/updates-path)} "Updates"))
                       (d/li
                        (d/a {:href (page/static-path {:url "about"})} "About")))))))

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (om/build nav-view app))))
 app-state
 nav-bar)

(om/root
 (fn [app owner]
   (reify
     om/IInitState
     (init-state [_]
       {:view home/home-view})
     om/IDidMount
     (did-mount [_]
       (route/consume-events owner :change-view
                             (fn [{:keys [view view-init-state view-name data]}]
                               (om/set-state! owner :view view)
                               (om/set-state! owner :view-init-state view-init-state)
                               (om/set-state! owner :react-key view-name)
                               (om/set-state! owner :opts data))))
     om/IRenderState
     (render-state [_ {:keys [view view-init-state react-key opts]}]
       (om/build view app {:init-state view-init-state
                           :react-key react-key
                           :opts opts}))))
 app-state
 (assoc application :shared
        {:sub-chan route/sub-chan
         :pub-chan route/pub-chan}))
