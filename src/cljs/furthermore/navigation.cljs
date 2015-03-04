(ns furthermore.navigation
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
))

(enable-console-print!)

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
                 (d/a {:href "#"
                       :class "navbar-brand"
                       :style {:font-family "arimo"}
                       :onClick #(secretary/dispatch! "/")}
                      "AND FURTHERMORE"))
          (d/div {:class "navbar-collapse collapse"}
                 (d/ul {:class "nav navbar-nav"}
                       (d/li
                        (d/a {:href "#"
                              :onClick #(secretary/dispatch! "/contents")}
                             "Table of Contents")))))))
