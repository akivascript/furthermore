(ns furthermore.posts
  (:require [ajax.core :as ajax]
            [cljs-time.local :as l]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [typographer.core :as t]
            [furthermore.routing :as route]
            [furthermore.utils :as utils]))

(enable-console-print!)

(defn post
  [post owner {:keys [content] :as opts}]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/topic/" (get-in content [:topic :_id]))
                {:handler #(om/set-state! owner :opts {:topic %})
                 :error-handler #(.error js/console %)}))
    om/IRenderState
    (render-state [_ {:keys [opts]}]
      (let [{:keys [date time]} (utils/format-timestamp (:last-updated content))
            body (-> (:body content) t/smarten md->html)
            title (when (:title content)
                    (t/smarten (:title content)))
            topic-title (get-in opts [:topic :title])]
        (d/div {:class "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"}
               (d/div {:class "content post"}
                      (d/div
                       (when title
                         (d/div {:class "title"}
                                title))
                       (comment
                         (when (:tags content)
                           (d/div {:class "tags text-right"}
                                  (om/build-all tags (:tags content)))))
                       (d/div {:class "body"
                               :dangerouslySetInnerHTML
                               {:__html body}})
                       (d/div {:class "footer"}
                              (d/div {:class "row"}
                                     (d/div {:class "col-xs-12 col-sm-6"}
                                            (d/div {:class "small text-left stuff"}))
                                     (d/div {:class "col-xs-12 col-sm-6"}
                                            (d/div {:class "small text-right date"}
                                                   "Filed under "
                                                   (d/span {:class "topic"}
                                                           topic-title)
                                                   (d/br)
                                                   (str date " @ " time))))))))))))

(defn post-view
  [app owner {:keys [url] :as opts}]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/post/url/" url)
                {:handler #(om/set-state! owner :opts {:content %})
                 :error-handler #(.error js/console %)}))
    om/IRenderState
    (render-state [_ {:keys [opts]}]
      (when-not (nil? opts)
        (d/div {:id "post"
                :class "container"}
               (d/div {:class "row"}
                      (om/build post app {:opts opts})))))))

(defroute post-path "/post/:url" [url] (route/change-view post-view :post-view :data {:url url}))
