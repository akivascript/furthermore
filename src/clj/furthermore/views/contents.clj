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
         {:keys [date]} (util/timestamp (:created-on post))]
     [:div.post 
      [:div.title
       (drop-down post)
       (link-to (str (util/url-path post) (:url post)) (:title post))]
      [:div.date.small date]]))

(defmethod title :topic
  [topic]
  [:span (link-to (str (util/url-path topic) (:url topic)) (:title topic))])

(defmethod title :follow
  [follow]
  (let [parent (posts/get :_id (get-in follow [:parent :_id]))
        {:keys [date time]} (util/timestamp (:created-on follow))
        url (str (util/url-path parent)
                 (:url parent) (:url follow))]
    [:div.follow {:id (subs (:_id follow) 0 6)}
     [:div.title
      (drop-down follow)
      [:p (link-to url (util/excerpt (:body follow) 50))]]
     [:div.date.small (str date " @ " time)]]))

(defn content
  []
  [:div#contents.container
   [:div#banner.page-header
    [:div.row.contents
     [:div.col-xs-12.col-sm-10.col-sm-offset-1.col-md-8.col-md-offset-2
      (for [topic (topics/sorted-by :title)]
        [:div.topic
         (title topic)
         (when-let [post-ids (map :_id (topics/refs-of :post topic))]
           [:div.posts
            (for [post (->> post-ids
                            (posts/filtered-by :_id)
                            (posts/sorted-by :title))]
              (html
               (title post)
               (when-let [follow-ids (map :_id (posts/refs-of :follow post))]
                 [:div.follows {:style "display: none;"}
                  (for [follow-up (->> follow-ids
                                       (follows/filtered-by :_id)
                                       (follows/sorted-by :created-on))]
                    (title follow-up))])))])])]]]])

