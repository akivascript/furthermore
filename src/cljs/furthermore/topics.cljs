(ns furthermore.topics
  (:require [ajax.core :as ajax]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [typographer.core :as t]
            [furthermore.posts :refer [post-path]]
            [furthermore.routing :as route]
            [furthermore.utils :as utils]))

(enable-console-print!)

(defn make-outline-selector
  [item]
  (let [refcount (count (:references item))
        class (if (:opened item)
                "glyphicon glyphicon-triangle-bottom small outline-widget"
                "glyphicon glyphicon-triangle-right small outline-widget")]
    (if (pos? refcount)
      (d/span {:class class
               :ariaHidden "true"
               :onClick #(om/transact! item :opened not)})
      (d/span {:class class
               :style {:visibility "hidden"}
               :ariaHidden "true"}))))

(defn get-reference
  [ref]
  (ajax/GET (str "/get/post/id/" (:_id ref))
            {:handler #(om/update! ref %)
             :error-handler #(.error js/console %)}))

(defn posts
  [post owner]
  (reify
    om/IRender
    (render [_]
      (let [url (str "/post/" (:url post))
            {:keys [date time]} (utils/format-timestamp (:created-on post))]
        (d/div {:class "col-xs-12 post"}
               (if (= :post (:type post))
                 (d/div
                  (d/div {:class "title" :id (:_id post)}
                         (make-outline-selector post)
                         (d/a {:href (post-path {:url (:url post)})} (:title post)))
                  (d/div {:class "small date"} date))
                 (d/div
                  (d/div {:class "follow-up-title" :id (:_id post)}
                         (make-outline-selector post)
                         (utils/get-text-excerpt (:body post) 50))
                  (d/div {:class "small date"} (str date " @ " time))))
               (when (:opened post)
                 (doseq [ref (:references post)] (get-reference ref))
                 (apply d/div
                        {:style {:marginLeft 15}}
                        (om/build-all posts (sort-by #(:created-on %)
                                                     (:references post))))))))))

(defn topics
  [topic owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (doseq [ref (:references topic)] (get-reference ref)))
    om/IRender
    (render [_]
      (d/div {:class "col-xs-12"}
             (d/span {:class "topic"}
                     (:title topic))
             (apply d/div {:class "row"}
                    (om/build-all posts (:references topic)))))))

(defn contents-view
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/get/topics"
                {:handler #(om/transact! app :contents (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (d/div {:id "topics"
                :class "container"}
               (apply d/div {:class "row"}
                      (om/build-all topics (:contents app)))))))

(defroute contents-path "/contents" [] (route/change-view contents-view :contents-view))
