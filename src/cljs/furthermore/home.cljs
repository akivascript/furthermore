(ns furthermore.home
  (:require [ajax.core :as ajax]
            [cljs.reader :as reader]
            [goog.events :as events]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [furthermore.posts :as posts]
            [furthermore.utils :as utils])
    (:import [goog.net XhrIo]
             goog.net.EventType
             [goog.events EventType]))

(enable-console-print!)

(defn posts
  [post owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/topic/" (get-in post [:topic :_id]))
                {:handler #(om/transact! post :topic (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (let [{:keys [date time]} (utils/format-timestamp (:last-updated post))]
        (d/div {:class "col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2"}
               (d/div {:class "post"}
                      (d/div {:class "well content"}
                             (when (:title post)
                               (d/div {:class "title"}
                                      (:title post)))
                             (comment
                               (when (:tags post)
                                 (d/div {:class "tags text-right"}
                                        (om/build-all tags (:tags post)))))
                             (d/div {:class "body"
                                     :dangerouslySetInnerHTML
                                     {:__html (md->html (:body post))}})
                             (d/div {:class "footer"}
                                    (d/div {:class "row"}
                                           (d/div {:class "col-xs-12 col-sm-6"}
                                                  (d/div {:class "small text-left stuff"}))
                                           (d/div {:class "col-xs-12 col-sm-6"}
                                                  (d/div {:class "small text-right date"}
                                                         "Filed under "
                                                         (d/span {:class "topic"}
                                                                 (get-in post [:topic :title]))
                                                         (d/br)
                                                         (str date " @ " time))))))))))))

(defn construct-page
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/get/posts"
                {:handler #(om/transact! app :posts (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (d/div {:id "index"
              :class "container"}
             (d/div {:id "banner"
                     :class "page-header"}
                    (d/div {:class "row"}
                           (d/div {:class "col-xs-12 banner"}
                                  (d/img {:src "img/desks.png"
                                          :class "img-responsive"
                                          :alt "Office desks"}))))
             (apply d/div {:class "row"}
                    (om/build-all posts (:posts app)))))))
