(ns furthermore.navigation
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [furthermore.utils :as utils]))

(defn render
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
                 (d/a {:href "/"
                       :class "navbar-brand"
                       :onClick (fn [event]
                                  (utils/navigate-to "/")
                                  (.preventDefault event))}
                      "WhateveR"))
          (d/div {:id "navbar-main"
                  :class "navbar-collapse collapse"}
                 (d/ul {:class "nav navbar-nav"}
                       (d/li
                        (d/a {:href "/contents"
                              :onClick (fn [event]
                                         (utils/navigate-to "/contents")
                                         (.preventDefault event))}
                             "Table of Contents")
                        (d/li
                         (d/a {:href "/weblog"
                               :onClick (fn [event]
                                          (utils/navigate-to "/weblog")
                                          (.preventDefault event))}
                              "Web Log"))))))))
