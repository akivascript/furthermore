(ns furthermore.posts
  (:require [ajax.core :as ajax]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [typographer.core :as t]
            [furthermore.utils :as utils]))

(enable-console-print!)

(defn post-view
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/post/" (get-in app [:post :id]))
                {:handler #(om/update! app [:post :post] %)
                 :error-handler #(.error js/console %)})
      (ajax/GET (str "/get/topic/" (get-in app [:post :post :topic :_id]))
                {:handler #(om/update! app [:post :topic] %)
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (let [post (get-in app [:post :post])
            title (when (:title post) (t/smarten (:title post)))
            body (-> (:body post) t/smarten md->html)
            {:keys [date time]} (utils/format-timestamp (:last-updated post))
            topic-title (t/smarten (get-in app [:post :topic :title]))]
        (d/div {:class "col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3"}
               (d/div {:class "post"}
                      (d/div {:class "well content"}
                             (when title
                               (d/div {:class "title"}
                                      title))
                             (comment
                               (when (:tags post)
                                 (d/div {:class "tags text-right"}
                                        (om/build-all tags (:tags post)))))
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

(defn get-page
  [app owner]
  (reify
    om/IRender
    (render [_]
      (d/div {:id "posts"
              :class "container"}
             (d/div {:class "row"}
                    (om/build post-view app))))))
