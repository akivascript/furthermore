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

(defn follow-up
  [content owner]
  (om/component
   (let [{:keys [date time]} (utils/format-timestamp (:last-updated content))
         body (-> (:body content) t/smarten md->html)]
     (d/div {:class "follow-up"}
            (comment
              (when (:tags post)
                (d/div {:class "tags text-right"}
                       (om/build-all tags (:tags f)))))
            (d/div {:class "body"
                    :dangerouslySetInnerHTML
                    {:__html body}})
            (d/div {:class "footer"}
                   (d/div {:class "row"}
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (d/div {:class "small text-left stuff"}
                                        (str date " @ " time)))
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (d/div {:class "small text-right date"}))))))))

(defn follow-up-view
  [content owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/post/" (:_id content) "/refs")
                {:handler #(om/set-state! owner :opts {:refs %})
                 :error-handler #(.error js/console %)}))
    om/IRenderState
    (render-state [_ {:keys [opts]}]
      (when (:refs opts)
        (let [follow-ups (filter #(= :follow-up (:type %))
                                 (:refs opts))]
          (d/div
           (d/div {:class "glyphicon glyphicon-triangle-bottom arrow"})
           (om/build-all follow-up follow-ups)))))))

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
            topic-title (when-let [t (get-in opts [:topic :title])]
                          (t/smarten t))]
        (d/div {:class "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"}
               (d/div {:class "content"}
                      (d/div {:class "post-topic"}
                             topic-title)
                      (d/div {:class "post"}
                             (d/div
                              (d/div {:class "title"}
                                     (t/smarten (:title content))))
                             (d/div
                              (d/div {:class "subtitle"}
                                     (t/smarten (:subtitle content))))
                             (comment
                               (when (:tags content)
                                 (d/div
                                  (d/div {:class "tags text-right"}
                                         (om/build-all tags (:tags content))))))
                             (d/div {:class "body"
                                     :dangerouslySetInnerHTML
                                     {:__html body}})
                             (d/div {:class "footer"}
                                    (d/div {:class "row"}
                                           (d/div {:class "col-xs-12 col-sm-6"}
                                                  (d/div {:class "small text-left stuff"}))
                                           (d/div {:class "col-xs-12 col-sm-6"}
                                                  (d/div {:class "small text-right date"}
                                                         (str date " @ " time))))))
                      (om/build follow-up-view content)))))))

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
