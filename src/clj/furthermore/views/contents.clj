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
            [furthermore.util :as util]
            [clojure.string :as str]))

(defn drop-down
  [entity]
  (let [refcount (count (:refs entity))]
    (if (pos? refcount)
      (html
       [:span {:id (:_id entity)
               :class "glyphicon glyphicon-triangle-right small outline-widget"
               :ariaHidden "true"}])
      (html
       [:span {:id (:_id entity)
               :class "glyphicon glyphicon-triangle-right small outline-widget"
               :style "visibility: hidden"
               :ariaHidden "true"}]))))

(defmulti title :kind)

(defmethod title :post
  [post]
   (let [url (str "/post/" (:url post))
         {:keys [date time]} (util/timestamp (:created-on post))]
     [:div
      [:div.col-sm-8
       [:span.title
        (drop-down post)
        (link-to (str (util/url-path post) (:url post)) (:title post))]]
      [:div.col-sm-4.date.small.text-right (str date " @ " time)]]))

(defmethod title :topic
  [topic]
  (let [url (str "/topic/" (:url topic))
        {:keys [date time]} (util/timestamp (:created-on topic))]
    [:div
     [:div.col-sm-8
      [:span.title
       (drop-down topic)
       (link-to (str (util/url-path topic) (:url topic)) (:title topic))]]
     [:div.col-sm-4.date.small.text-right (str date " @ " time)]]))

(defmethod title :follow
  [follow]
  (let [parent (posts/get :_id (get-in follow [:parent :_id]))
        {:keys [date time]} (util/timestamp (:created-on follow))
        url (str (util/url-path parent)
                 (:url parent) (:url follow))]
    [:div
     [:div.col-sm-8
      [:span.title
       (drop-down follow)
       (link-to url (util/excerpt (:body follow) 50))]]
     [:div.col-sm-4.date.small.text-right (str date " @ " time)]]))

(defn content
  []
  [:div#contents.container
   [:div#banner.page-header
    [:div.row
     [:div.col-xs-12.col-sm-10.col-sm-offset-1
      [:div.page-title "Table of Contents"]
      [:div.topics
       (for [topic (topics/sorted-by :title)]
         [:div.topic
          (title topic)
          (when-let [post-ids (map :_id (topics/refs-of :post topic))]
            [:div.posts {:style "display: none;"}
             (for [post (->> post-ids
                             (posts/filtered-by :_id)
                             (posts/sorted-by :title))]
               [:div.post
                (title post)
                (when-let [follow-ids (map :_id (posts/refs-of :follow post))]
                  [:div.follows {:style "display: none;"}
                   (for [follow-up (->> follow-ids
                                        (follows/filtered-by :_id)
                                        (follows/sorted-by :created-on))]
                     [:div.follow {:id (subs (:_id follow-up) 0 6)}
                      (title follow-up)])])])])])]]]]])

