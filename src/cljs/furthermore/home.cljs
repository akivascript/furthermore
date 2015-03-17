(ns furthermore.home
  (:require [ajax.core :as ajax]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [typographer.core :as t]
            [furthermore.routing :as route]
            [furthermore.posts :as posts]
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
      (let [{:keys [date time]} (utils/format-timestamp (:created-on post))
            body (-> (:body post) md->html t/smarten)
            topic-title (when-let [t (get-in post [:topic :title])]
                          (t/smarten t))]
        (d/div {:class "post"}
               (d/div {:class "title"}
                      (d/a {:href (posts/post-path {:url (:url post)})}
                           (t/smarten (:title post))))
               (d/div {:class "subtitle"}
                      (t/smarten (:subtitle post)))
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
                                           (d/span {:class "topic"
                                                    :href (posts/post-path {:url (:url post)})}
                                                   topic-title)
                                           (d/br)
                                           (str date " @ " time))))))))))

(defn follow-up-view
  [post owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/post/id/" (get-in post [:parent :_id]))
                {:handler #(om/transact! post :parent (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (let [{:keys [date time]} (utils/format-timestamp (:created-on post))
            body (-> (:body post) md->html t/smarten)
            parent-title (when-let [t (get-in post [:parent :title])]
                           (t/smarten t))
            parent-url (get-in post [:parent :url])]
        (d/div {:class "follow-up"}
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
                                           "A follow-up to "
                                           (d/a {:class "parent"
                                                 :href (posts/post-path
                                                        {:url parent-url})}
                                                   parent-title)
                                           (d/br)
                                           (str date " @ " time))))))))))

(defn post-dispatch
  [post owner]
  (case (:type post)
    :post (post-view post owner)
    :follow-up (follow-up-view post owner)))

(defn home-view
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
             (d/div {:class "row"}
                    (d/div {:class "col-xs-12 col-sm-3 col-sm-offset-1 banner"}
                           (d/div {:id "banner"
                                   :class "page-header"}
                                  (d/img {:src "img/notes-narrow.png"
                                          :class "img-responsive"
                                          :alt "Notes"})))
                    (apply d/div {:class "col-xs-12 col-sm-7"}
                           (om/build-all post-dispatch (:posts app))))))))

(defroute home-path "/" [] (route/change-view home-view :home-view))
