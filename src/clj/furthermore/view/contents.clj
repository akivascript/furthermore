(ns furthermore.view.contents
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-entities
                                          get-entity]]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :refer [get-excerpt format-timestamp]]))

(defn- make-outline-selector
  [post]
  (let [refcount (count (:refs post))]
    (if (pos? refcount)
      (html
       [:span {:id (:_id post)
               :class "glyphicon glyphicon-triangle-right small outline-widget"
               :ariaHidden "true"}])
      (html
       [:span {:id (:_id post)
               :class "glyphicon glyphicon-triangle-right small outline-widget"
               :style "visibility: hidden"
               :ariaHidden "true"}]))))

(defmulti display-title :kind)

(defmethod display-title :post
  [post]
  (let [url (str "/post/" (:url post))
        {:keys [date time]} (format-timestamp (:created-on post))]
    (html
     [:div
      [:div {:class "title"}
       (make-outline-selector post)
       [:a {:href url} (:title post)]]
      [:div {:class "small date"} date]])))

(defmethod display-title :follow-up
  [follow-up]
  (let [{:keys [date time]} (format-timestamp (:created-on follow-up))]
    (html
     [:div
      [:div {:class "follow-up-title"}
       (make-outline-selector follow-up)
       (get-excerpt (:body follow-up) 50)]
      [:div {:class "small date"} (str date " @ " time)]])))

(defn- display-posts
  [post]
  (let [post (get-entity {:_id (:_id post)} (keyword (:kind post)))]
    (html
     [:div {:class "col-xs-12 post"}
      (display-title post)
      (when-let [refs (:refs post)]
        [:div {:id (subs (:_id post) 0 6)
               :style "display: none; margin-left: 15"}
         (map display-posts (sort-by :created-on refs))])])))

(defn- display-topic
  [topic]
  (html
   [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1"}
    [:span {:class "topic"} (:title topic)]
    (when-let [refs (:refs topic)]
      (map display-posts refs))]))

(defn display-contents-page
  []
  (display-page
   :contents
   (html
    [:div {:id "topics"
           :class "container"}
     (map display-topic (sort-by :title (get-entities :topics)))])))
