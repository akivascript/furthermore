(ns furthermore.view.tags
  (:require [clojure.string :as string]
            [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [typographer.core :as typo :refer [smarten]]

            [furthermore.view.layout :as layout :refer [display-page]]
            [furthermore.entities :as entities :refer [get-post
                                                       get-posts
                                                       get-tag
                                                       get-topic]]
            [furthermore.utils :as utils :refer [create-url-path
                                                 format-timestamp]]))

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
                                                       (string/lower-case (:title %)))
                                                  (:title %))))
                                             tags)))]]])))

(defn display-post
  [post]
  (let [topic (entities/get-topic (get-in post [:topic :_id]))
        {:keys [date time]} (utils/format-timestamp (:created-on post))]
    (html
     [:div.post
      [:div.col-xs-5.title (link-to (str utils/site-url
                                         (utils/create-url-path post)
                                         (:url post))
                                    (smarten (:title post)))]
      [:div.col-xs-3.topic (smarten (:title topic))]
      [:div.col-xs-4.date (str date " @ " time)]])))

(defn display-tags-page
  ([tag]
   (let [posts (map get-post (:refs (get-tag tag)))
         tag (get-tag tag)]
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
