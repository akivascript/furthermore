(ns furthermore.view.tags
  (:require [clojure.string :as string]
            [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [typographer.core :as typo :refer [smarten]]

            [furthermore.view.layout :as layout :refer [display-page]]
            [furthermore.entities :as entities :refer [get-entity
                                                       get-parent
                                                       get-tag
                                                       get-tag-by-url
                                                       get-topic]]
            [furthermore.utils :as utils :refer [create-url-name
                                                 format-timestamp
                                                 get-excerpt]]))

(defmulti display-title :kind)

(defmethod display-title :follow-up
  [follow-up]
  (let [parent (get-parent follow-up)
        {:keys [date time]} (format-timestamp (:created-on follow-up))]
    (html
      [:div.col-xs-5.title (link-to (str utils/site-url
                                        (utils/create-url-path parent)
                                        (:url parent))
                                    (smarten (get-excerpt (:body follow-up) 50)))])))

(defmethod display-title :static
  [page]
  (let [{:keys [date time]} (format-timestamp (:created-on page))]
    (html
     [:div.col-xs-5.title (link-to (str utils/site-url
                                        (utils/create-url-path page)
                                        (:url page))
                                   (smarten (:title page)))])))

(defmethod display-title :post
  [post]
  (let [{:keys [date time]} (format-timestamp (:created-on post))]
    (html
     [:div.col-xs-5.title (link-to (str utils/site-url
                                        (utils/create-url-path post)
                                        (:url post))
                                   (smarten (:title post)))])))

(defmethod display-title :topic
  [topic]
  (let [{:keys [date time]} (format-timestamp (:created-on topic))]
    (html
     [:div.col-xs-5.title (smarten (:title topic))])))

(defn- display-header
  [tag]
  (let [tags (entities/get-tags)]
    (html
     [:div.row
      [:div.col-xs-12.col-sm-10.col-sm-offset-1
       [:div.title "Tags"]
       [:div.tags (apply str (interpose " &bull; "
                                        (map #(html
                                               (if (= tag %)
                                                 (:title %)
                                                 (link-to
                                                  (str "/tags/"
                                                       (utils/create-url-name (:title %)))
                                                  (:title %))))
                                             tags)))]]])))

(defn display-post
  [post]
  (let [topic (entities/get-topic (get-in post [:topic :_id]))
        {:keys [date time]} (utils/format-timestamp (:created-on post))]
    (html
     [:div.post
      (display-title post)
      [:div.col-xs-3.topic (when-let [topic (:title topic)]
                             (smarten topic))]
      [:div.col-xs-4.date (str date " @ " time)]])))

(defn display-tags-page
  ([tag]
   (let [tag (get-tag-by-url tag)
         posts (map #(get-entity {:_id (:_id %)} (:kind %)) (:refs tag))]
     (layout/display-page
      :tags
      (str "Tags &mdash; " (:title tag))
      (html
       [:div#tags.container
        (display-header tag)
        [:div.row
         [:div.col-xs-12.col-sm-10.col-sm-offset-1
          [:div.posts
           (map display-post posts)]]]]))))
  ([]
   (layout/display-page
    :tags
    "Tags"
    (html
     [:div#tags.container
      (display-header nil)]))))
