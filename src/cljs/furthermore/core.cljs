(ns ^:figwheel-always furthermore.core
    (:require [ajax.core :as ajax]
              [cljs.reader :as reader]
              [cljs-time.format :as timef]
              [goog.events :as events]
              [om.core :as om :include-macros true]
              [om-tools.dom :as dom :include-macros true])
              ;[sablono.core :as html :refer-macros [html]])
    (:import [goog.net XhrIo]
             goog.net.EventType
             [goog.events EventType]))

(enable-console-print!)

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(def app-state (atom {:topics []}))

(defn format-timestamp
  [timestamp]
  (let [ts (-> timestamp js/Date. goog.date.DateTime.)]
    (timef/unparse (timef/formatter "MMMM d, yyyy") ts)))

(defn toggle-references
  [item]
  (print "Clicked"))

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
  (ajax/GET (str "/post/" (:_id ref))
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
      (dom/div {:class "post"}
               (dom/div {:class "title" :id (:_id post)}
                        (make-outline-selector post)
                        (dom/a {:href (str "/post/" (:_id post))}
                               (:title post)))
               (dom/div {:class "small date"}
                        (format-timestamp (:created-on post)))
               (when (:opened post)
                 (apply dom/div
                        {:style {:marginLeft 15}}
                        (om/build-all post-view (:references post))))))))

(defn topic-view
  [topic owner]
  (om/component
   (dom/div
    (dom/span {:style {:textDecoration "underline"}}
              (:title topic))
    (apply dom/div
           (om/build-all post-view (:references topic))))))

(defn topics-view
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/topics" {:handler #(om/transact! app :topics (fn [_] %))
                           :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (apply dom/div
             (om/build-all topic-view (:topics app))))))

(om/root
 topics-view
 app-state
 {:target (. js/document (getElementById "topics"))})
