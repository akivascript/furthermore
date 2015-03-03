(ns furthermore.topics
  (:require [ajax.core :as ajax]
            [cljs.reader :as reader]
            [goog.events :as events]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [typographer.core :as t]
            [furthermore.posts :as posts]
            [furthermore.utils :as utils])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn make-outline-selector
  [item]
  (let [refcount (count (:references item))
        class (if (:opened item)
                "glyphicon glyphicon-triangle-bottom small"
                "glyphicon glyphicon-triangle-right small")]
    (if (pos? refcount)
      (d/span {:class class
               :style {:marginRight 3 :color "#aaa"}
               :ariaHidden "true"
               :onClick #(om/transact! item :opened not)})
      (d/span {:class class
               :style {:marginRight 3 :visibility "hidden"}
               :ariaHidden "true"}))))

(defn get-reference
  [ref]
  (ajax/GET (str "/get/post/" (:_id ref))
            {:handler #(om/update! ref %)
             :error-handler #(.error js/console %)}))

(defn post-view
  [post owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (doseq [ref (:references post)] (get-reference ref)))
    om/IRender
    (render [_]
      (d/div {:class "col-xs-12 post"}
               (d/div {:class "title" :id (:_id post)}
                        (make-outline-selector post)
                        (d/a {:href (str "/get/post/" (:_id post))}
                               (:title post)))
               (d/div {:class "small date"}
                        (:date (utils/format-timestamp (:created-on post))))
               (when (:opened post)
                 (apply d/div
                        {:style {:marginLeft 15}}
                        (om/build-all post-view (:references post))))))))

(defn topic-view
  [topic owner]
  (om/component
   (d/div {:class "col-xs-12"}
    (d/span {:style {:textDecoration "underline"}}
              (:title topic))
    (apply d/div {:class "row"}
           (om/build-all post-view (:references topic))))))

(defn construct-page
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/get/topics"
                {:handler #(om/transact! app :topics (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (d/div {:id "topics"
                :class "container"}
               (apply d/div {:class "row"}
                      (om/build-all topic-view (:topics app)))))))
