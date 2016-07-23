(ns furthermore.view.admin
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
       [:span.glyphicon.glyphicon-triangle-right.small.outline-widget
        {:id (:_id post) :ariaHidden "true"}])
      (html
       [:span.glyphicon.glyphicon-triangle-right.small.outline-widget
        {:id (:_id post) :style "visibility: hidden" :ariaHidden "true"}]))))

(defmulti display-title :kind)

(defmethod display-title :post
  [post]
  (let [{:keys [date time]} (util/format-timestamp (:created-on post))]
    (html
     [:div
      [:div.title
       (make-outline-selector post)
       (el/link-to (str "/admin/edit/post/" (:_id post)) (:title post))]
      [:div.small.date date]])))

(defmethod display-title :follow-up
  [follow-up]
  (let [{:keys [date time]} (util/format-timestamp (:created-on follow-up))]
    (html
     [:div
      [:div.follow-up-title
       (make-outline-selector follow-up)
       (el/link-to (str "/admin/edit/follow-up/" (:_id follow-up))
                        (util/get-excerpt (:body follow-up) 50))]
      [:div.small.date (str date " @ " time)]])))

(defn- display-post
  [post]
  (html
   [:div.col-xs-12.post
    (display-title post)
    (when-let [refs (:refs post)]
      [:div {:id (subs (:_id post) 0 6)
             :style "display: none; margin-left: 15px;"}
       (map display-post (sort-by :created-on
                                  (map #(ent/get-entity {:_id (:_id %)}
                                                    (keyword (:kind %))) refs)))])]))

(defn- display-topic
  [topic]
  [:div.topic.col-xs-12.col-sm-10.col-sm-offset-1
   [:div
    [:div.title (el/link-to (str "/admin/edit/topic/" (:_id topic))
                                  (:title topic))]]
   (when-let [refs (:refs topic)]
     (map display-post (sort-by :title
                                (map #(ent/get-post %)
                                     (filter #(= :post (:kind %)) refs)))))])

(defn display-admin-page
  []
  (layout/display-page
   :admin
   "Admin"
   (html
    [:div#admin.container
     (map display-topic (sort-by :title (ent/get-entities :topics)))])))
