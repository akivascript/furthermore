(ns furthermore.home
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [typographer.core :refer [smarten]]

            [furthermore.routing :refer [change-view]]
            [furthermore.posts :refer [post-path]]
            [furthermore.utils :refer [format-timestamp]]))

(enable-console-print!)
(.setOptions js/marked (clj->js {:smartypants true}))

(defn post-view
  [post owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/api/topic/" (get-in post [:topic :_id]))
                {:handler #(om/transact! post :topic (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (let [{:keys [date time]} (format-timestamp (:created-on post))
            body (js/marked (:body post))
            excerpt (when-let [e (:excerpt post)] (js/marked e))
            topic-title (when-let [t (get-in post [:topic :title])]
                          (smarten t))]
        (d/div {:class "post"}
               (d/div {:class "title"}
                      (d/a {:href (post-path {:url (:url post)})}
                           (smarten (:title post))))
               (when-not (nil? (:subtitle post))
                 (d/div {:class "subtitle"}
                        (smarten (:subtitle post))))
               (comment
                 (when (:tags post)
                   (d/div {:class "tags text-right"}
                          (om/build-all tags (:tags post)))))
               (if (nil? (:excerpt post))
                 (d/div {:class "body"
                         :dangerouslySetInnerHTML
                         {:__html body}})
                 (d/div {:class "body"
                         :dangerouslySetInnerHTML
                         {:__html excerpt}}))
               (d/div {:class "footer"}
                      (d/div {:class "row"}
                             (d/div {:class "col-xs-12 col-sm-6"}
                                    (when-not (nil? (:excerpt post))
                                      (d/div {:class "continue"}
                                             (d/a {:href (post-path {:url (:url post)})
                                                   :dangerouslySetInnerHTML
                                                   {:__html "Continue &raquo;"}}))))
                             (d/div {:class "col-xs-12 col-sm-6"}
                                    (d/div {:class "small text-right date"}
                                           "Filed under "
                                           (d/span {:class "topic"
                                                    :href (post-path {:url (:url post)})}
                                                   topic-title)
                                           (d/br)
                                           (str date " @ " time)
                                           (d/br)
                                           (when-let [url (get-in post [:twitter :url])]
                                             (d/a {:href url} "Tweeted!")))))))))))

(defn follow-up-view
  [post owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/api/post/id/" (get-in post [:parent :_id]))
                {:handler #(om/transact! post :parent (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (let [{:keys [date time]} (format-timestamp (:created-on post))
            body (js/marked (:body post))
            parent-title (when-let [t (get-in post [:parent :title])]
                           (smarten t))
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
                                                 :href (post-path
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
      (ajax/GET "/api/posts"
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

(defroute home-path "/" [] (change-view home-view :home-view))
