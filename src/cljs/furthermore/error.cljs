(ns furthermore.error
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]))

(defn get-page
  [app owner]
  (reify
    om/IRender
    (render [_]
      (d/div {:class "container"}
             (d/div {:class "row"} "Not found.")))))
