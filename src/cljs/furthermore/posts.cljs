(ns furthermore.posts
  (:require [ajax.core :as ajax]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary]
            [typographer.core :as t]
            [furthermore.utils :as utils]))

(enable-console-print!)

(defn post-view
  [post owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/topic/" (get-in post [:topic :_id]))
                {:handler #(om/transact! post :topic (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (let [{:keys [date time]} (utils/format-timestamp (:last-updated post))
            body (-> (:body post) t/smarten md->html)
            title (when (:title post)
                    (t/smarten (:title post)))
            topic-title (get-in post [:topic :title])]
        (d/div {:class "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"}
               (d/div {:class "post"}
                      (d/div
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
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/post/" (get-in app [:post :id]))
                {:handler #(om/update! app [:post :post] %)
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      ;; This is a total hack but the page is loading twice: first returning
      ;; nil, second returning the post. So we're skipping the nil. 
      (when-let [post (get-in app [:post :post])]
        (d/div {:id "posts"
                :class "container"}
               (d/div {:class "row"}
                      (om/build post-view post)))))))
