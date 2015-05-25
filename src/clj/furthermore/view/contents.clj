(ns furthermore.view.contents
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-entities
                                          get-entity]]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :refer [create-url-path
                                       get-excerpt
                                       format-timestamp]]))

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
       (link-to (str (create-url-path post) (:url post)) (:title post))]
      [:div {:class "small date"} date]])))

(defmethod display-title :follow-up
  [follow-up]
  (let [parent (get-parent follow-up)
        {:keys [date time]} (format-timestamp (:created-on follow-up))
        url (str (create-url-path parent)
                 (:url parent) "#" (:url follow-up))]
    (println parent)
    (html
     [:div
      [:div {:class "follow-up-title"}
       (make-outline-selector follow-up)
       (link-to url (get-excerpt (:body follow-up) 50))]
      [:div {:class "small date"} (str date " @ " time)]])))

(defn- display-posts
  [post]
    (html
     [:div {:class "col-xs-12 post"}
      (display-title post)
      (when-let [refs (:refs post)]
        [:div {:id (subs (:_id post) 0 6)
               :style "display: none; margin-left: 15"}
         (map display-posts
              (sort-by :created-on
                       (map #(get-entity {:_id (:_id %)} (keyword (:kind %))) refs)))])]))

(defn- display-topic
  [topic]
  (html
   [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1"
          :style "padding-bottom: 10px;"}
    [:div {:class "topic"} (:title topic)
     (link-to {:class "glyphicon glyphicon-link permalink"}
              (str (create-url-path topic) (:url topic)))]
    (when-let [refs (:refs topic)]
      (map display-posts
           (sort-by :title
                    (map #(get-entity {:_id (:_id %)} (keyword (:kind %))) refs))))]))

(defn display-contents-page
  []
  (display-page
   :contents
   "Contents"
   (html
    [:div {:id "topics"
           :class "container"}
     (map display-topic (sort-by :title (get-entities :topics)))])))
