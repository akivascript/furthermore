(ns furthermore.views.contents
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.topics :as topics]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]
            [furthermore.util :as util]))

(def build (comp (partial common/entry :post)
                 (partial vutil/prepare-text md-to-html-string)
                 (partial vutil/prepare-text smarten)))

(defn- follow-ups
  [post]
  (filter #(= (:kind %) :follow) (:refs post)))

(defn- selector
  [post]
  (let [fcount (count (follow-ups post))]
    (if (pos? fcount)
      (html
       [:span {:id (:_id post)
               :class "glyphicon glyphicon-triangle-right small outline-widget"
               :ariaHidden "true"}])
      (html
       [:span {:id (:_id post)
               :class "glyphicon glyphicon-triangle-right small outline-widget"
               :style "visibility: hidden"
               :ariaHidden "true"}]))))

(defn post
  [post]
  [:div.post
   (let [url (str "/post/" (:url post))
         {:keys [date time] (util/timestamp (:created-on post))}]
     [:div.title
      ()]
     )])

(defn topic-title
  [topic]
  [:span (:title topic)]
  [:span.permalink (link-to (str (util/url-path topic) (:url topic)))])

(defn content
  []
  [:div.container
   [:div#banner.page-header
    [:div.row.contents
     [:div.col-xs-12.col-sm-10.col-sm-offset-1.col-md-8.col-md-offset-2
      (for [topic (topics/sorted-by :title)]
        [:div.topic
         (topic-title topic)
         (when-let [post-ids (map :_id (topics/refs-of :post topic))]
           [:div.posts
            (for [post (-> post-ids
                           (partial posts/filtered-by :_id)
                           (partial posts/sorted-by :title))]

              )])])]]]])
