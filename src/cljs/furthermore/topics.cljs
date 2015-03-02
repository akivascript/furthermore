(ns furthermore.topics
  (:require [ajax.core :as ajax]
            [cljs.reader :as reader]
            [goog.events :as events]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
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
      (dom/span {:class class
                 :style {:marginRight 3 :color "#aaa"}
                 :ariaHidden "true"
                 :onClick #(om/transact! item :opened not)})
      (dom/span {:class class
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
      (dom/div {:class "col-xs-12 post"}
               (dom/div {:class "title" :id (:_id post)}
                        (make-outline-selector post)
                        (dom/a {:href (str "/get/post/" (:_id post))}
                               (:title post)))
               (dom/div {:class "small date"}
                        (:date  (utils/format-timestamp (:created-on post))))
               (when (:opened post)
                 (apply dom/div
                        {:style {:marginLeft 15}}
                        (om/build-all post-view (:references post))))))))

(defn topic-view
  [topic owner]
  (om/component
   (dom/div {:class "col-xs-12"}
    (dom/span {:style {:textDecoration "underline"}}
              (:title topic))
    (apply dom/div {:class "row"}
           (om/build-all post-view (:references topic))))))

(defn load-content
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/get/topics"
                {:handler #(om/transact! app :topics (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (dom/div {:id "topics"
                :class "container"}
               (apply dom/div {:class "row"}
                      (om/build-all topic-view (:topics app)))))))
