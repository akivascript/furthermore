(ns furthermore.static-page
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [typographer.core :as t]
            [furthermore.routing :as route]))

(.setOptions js/marked (clj->js {:smartypants true}))

(defn static-view
  [app owner {:keys [url] :as opts}]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/page/" url)
                {:handler #(om/set-state! owner :opts {:content %})
                 :error-handler #(.error js/console %)}))
    om/IRenderState
    (render-state [_ {:keys [opts]}]
      (when-not (nil? opts)
        (let [content (:content opts)]
          (d/div {:id "static"
                  :class "container"}
                 (d/div {:class "col-xs-12 col-sm-10 col-sm-offset-1"}
                        (d/div {:class "title"}
                               (t/smarten (:title content)))
                        (d/div {:class "body"
                                :dangerouslySetInnerHTML
                                {:__html (js/marked (:body content))}}))))))))

(defroute static-path "/page/:url" [url] (route/change-view static-view :static-view :data {:url url}))
