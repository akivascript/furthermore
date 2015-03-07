(ns furthermore.home
  (:require [ajax.core :as ajax]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary]
            [typographer.core :as t]
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
      (let [{:keys [date time]} (utils/format-timestamp (:last-updated post))
            body (-> (:body post) md->html t/smarten)
            title (when (:title post)
                    (t/smarten (:title post)))
            topic-title (when-let [topic-title (get-in post [:topic :title])]
                          (t/smarten (get-in post [:topic :title])))]
        (d/div {:class "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"}
               (d/div {:class "post"}
                      (d/div
                       (when title
                         (d/div {:class "title"}
                                (d/a {:href (str "/post/" (:url post))
                                      :onClick (fn [event]
                                                 (utils/navigate-to
                                                  (str "/post/" (:url post)))
                                                 (.preventDefault event))}
                                     title)))
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
                                  (d/img {:src "img/notes.png"
                                          :class "img-responsive"
                                          :alt "Notes"}))))
             (apply d/div {:class "row"}
                    (om/build-all post-view (:posts app)))))))
