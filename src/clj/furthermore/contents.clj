(ns furthermore.contents
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-post
                                          get-topics]]
            [furthermore.page :refer [display-page]]
            [furthermore.utils :refer [get-excerpt format-timestamp]]))

(defn- make-outline-selector
  [post]
  (let [refcount (count (:references post))]
    (if (pos? refcount)
      (html
       [:span {:class "glyphicon glyphicon-triangle-bottom small outline-widget"
               :ariaHidden "true"}])
      (html
       [:span {:class "glyphicon glyphicon-triangle-right small outline-widget"
               :style "visibility: hidden"
               :ariaHidden "true"}]))))

(defn- display-posts
  [post]
  (let [post (get-post {:_id (:_id post)})
        url (str "/post/" (:url post))
        {:keys [date time]} (format-timestamp (:created-on post))]
    (html
     [:div {:class "col-xs-12 post"}
      (if (= :post (:type post))
        [:div
         [:div {:class "title" :id (:_id post)}
          (make-outline-selector post)
          [:a {:href url} (:title post)]]
         [:div {:class "small date"} date]]
        [:div
         [:div {:class "follow-up-title" :id (:_id post)}
          (make-outline-selector post)
          (get-excerpt (:body post) 50)]
         [:div {:class "small date"} (str date " @ " time)]])
      (when-let [refs (:references post)]
        [:div {:style "margin-left: 15"}
         (map display-posts (sort-by :created-on refs))])])))

(defn- display-topic
  [topic]
  (html
   [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
    [:span {:class "topic"} (:title topic)]
    (when-let [refs (:references topic)]
      (map display-posts refs))]))

(defn display-contents-page
  []
  (display-page
   (html
    [:div {:id "topics"
           :class "container"}
       (map display-topic (sort-by :title (get-topics)))])))
