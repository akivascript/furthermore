(ns furthermore.view.contents
  (:require [hiccup.core :refer :all]
            [hiccup.element :as el]

            [furthermore.entities :as ent]
            [furthermore.view.layout :as layout]
            [furthermore.utils :as util]))

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
        {:keys [date time]} (util/format-timestamp (:created-on post))]
    (html
     [:div
      [:div {:class "title"}
       (make-outline-selector post)
       (el/link-to (str (util/create-url-path post) (:url post)) (:title post))]
      [:div {:class "date small"} date]])))

(defmethod display-title :follow-up
  [follow-up]
  (let [parent (ent/get-parent follow-up)
        {:keys [date time]} (util/format-timestamp (:created-on follow-up))
        url (str (util/create-url-path parent)
                 (:url parent) "#" (:url follow-up))]
    (html
     [:div
      [:div {:class "follow-up-title"}
       (make-outline-selector follow-up)
       (el/link-to url (util/get-excerpt (:body follow-up) 50))]
      [:div {:class "date small"} (str date " @ " time)]])))

(defn- display-posts
  [post]
    (html
     [:div.post
      (display-title post)
      (when-let [refs (:refs post)]
        [:div {:id (subs (:_id post) 0 6)
               :style "display: none; margin-left: 15"}
         (map display-posts
              (sort-by :created-on
                       (map #(ent/get-entity {:_id (:_id %)} (keyword (:kind %))) refs)))])]))

(defn- display-topic
  [topic]
  (html
   [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1"
          :style "padding-bottom: 10px;"}
    [:div.topic
     [:span (:title topic)]
     [:span.permalink
      (el/link-to {:class "whatever-link"}
               (str (util/create-url-path topic) (:url topic)))]
     (when-let [refs (:refs topic)]
       [:div.posts
        (map display-posts
             (sort-by :title
                      (map #(ent/get-entity {:_id (:_id %)} (keyword (:kind %))) refs)))])]]))

(defn display-contents-page
  []
  (layout/display-page
   :contents
   "Contents"
   (html
    [:div {:id "topics"
           :class "container"}
     (map display-topic (sort-by :title (ent/get-entities :topics)))])))
