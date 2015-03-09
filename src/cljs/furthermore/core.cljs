(ns furthermore.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! pub sub]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [furthermore.topics :refer [contents-view]]
            [furthermore.home :refer [home-view]]
            [furthermore.weblog :refer [updates-view]])
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
(def pub-chan (chan))
(def sub-chan (pub pub-chan :topic))

(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))

(defn consume-events
  [owner topic fn]
  (let [sub-chan (om/get-shared owner :sub-chan)]
    (let [event-chan (sub sub-chan topic (chan))]
      (go-loop [event (<! event-chan)]
        (fn event)
        (recur (<! event-chan))))))

(defn change-view
  ([view view-name]
   (put! pub-chan {:topic :change-view
                   :view view
                   :view-name view-name}))
   ([view view-name init-state]
    (put! pub-chan {:topic :change-view
                    :view view
                    :view-name view-name
                    :view-init-state init-state})))

(defroute home-path "/" [] (change-view home-view :home-view))
(defroute contents-path "/contents" [] (change-view contents-view :contents-view))
(defroute updates-path "/updates" [] (change-view updates-view :updates-view))

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
     om/IInitState
     (init-state [_]
       {:view home-view})
     om/IDidMount
     (did-mount [_]
       (consume-events owner :change-view
                       (fn [{:keys [view view-init-state view-name]}]
                         (om/set-state! owner :view view)
                         (om/set-state! owner :view-init-state view-init-state)
                         (om/set-state! owner :react-key view-name))))
     om/IRenderState
     (render-state [_ {:keys [view view-init-state react-key]}]
       (om/build view app {:init-state view-init-state :react-key react-key}))))
 app-state
 (assoc application :shared
        {:sub-chan sub-chan
         :pub-chan pub-chan}))

(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (om/build nav-view app))))
 app-state
 nav-bar)
