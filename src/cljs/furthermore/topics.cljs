(ns furthermore.topics
  (:require [ajax.core :as ajax]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]

            [furthermore.posts :refer [post-path]]
            [furthermore.routing :refer [change-view]]
            [furthermore.utils :refer [get-text-excerpt format-timestamp]]))

(enable-console-print!)

(defn make-outline-selector
  [post owner {:keys [opened]}]
  (let [refcount (count (:references post))
        class (if opened
                "glyphicon glyphicon-triangle-bottom small outline-widget"
                "glyphicon glyphicon-triangle-right small outline-widget")]
    (if (pos? refcount)
      (d/span {:class class
               :onClick #(do (om/update-state! owner :opened not)
                             (om/transact! post :opened not))
               :ariaHidden "true"})
      (d/span {:class class
               :style {:visibility "hidden"}
               :ariaHidden "true"}))))

(defn posts
  [post owner data]
  (reify
    om/IInitState
    (init-state [_]
      {:opened (:opened post)})
    om/IRenderState
    (render-state [_ state]
      (let [url (str "/post/" (:url post))
            {:keys [date time]} (format-timestamp (:created-on post))]
        (d/div {:class "col-xs-12 post"}
               (if (= :post (:type post))
                 (d/div
                  (d/div {:class "title" :id (:_id post)}
                         (make-outline-selector post owner state)
                         (d/a {:href (post-path {:url (:url post)})} (:title post)))
                  (d/div {:class "small date"} date))
                 (d/div
                  (d/div {:class "follow-up-title" :id (:_id post)}
                         (make-outline-selector post owner state)
                         (get-text-excerpt (:body post) 50))
                  (d/div {:class "small date"} (str date " @ " time))))
               (when (:opened state)
                 (when-let [refs (:references post)]
                   (let [refs (vals (map #(find (:posts data) (:_id %)) refs))]
                     (d/div {:style {:marginLeft 15}}
                            (om/build-all posts (sort-by :created-on refs)))))))))))

(defn topics
  [topic owner data]
  (om/component
   (d/div {:class "row"}
          (d/div {:class "col-xs-12"}
                 (d/span {:class "topic"}
                         (:title topic))
                 (when-let [refs (:references topic)]
                   (let [refs (vals (map #(find (:posts data) (:_id %)) refs))]
                     (om/build-all posts refs {:opts data})))))))

(defn contents-view
  [data owner]
  (om/component
   (d/div {:id "topics"
           :class "container"}
          (om/build-all topics (vals (:topics data)) {:opts {:posts (:posts data)}}))))

(defroute contents-path "/contents" [] (change-view contents-view :contents-view))
