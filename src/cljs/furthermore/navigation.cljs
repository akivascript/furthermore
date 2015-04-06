(ns furthermore.navigation
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]

            [furthermore.home :refer [home-path]]
            [furthermore.topics :refer [contents-path]]
            [furthermore.weblog :refer [updates-path]]))

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
                 (d/a {:href (home-path)} "WhateveR"))
          (d/div {:id "navbar-main"
                  :class "navbar-collapse collapse"}
                 (d/ul {:class "nav navbar-nav"}
                       (d/li
                        (d/a {:href (contents-path)} "Table of Contents"))
                       (d/li
                        (d/a {:href (updates-path)} "Web Log")))))))
