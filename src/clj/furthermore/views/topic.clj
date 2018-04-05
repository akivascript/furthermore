(ns furthermore.views.topic
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.posts :as posts]
            [furthermore.entities.topics :as topics]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil :refer [mmd->html]]
            [furthermore.util :as util]))

(defn- entries
  "Return a list of posts, sorted by title, for the given topic."
  [topic]
  (sort-by :title (map posts/get (topics/refs-of :post topic))))

(defmulti render :kind)

(defmethod render :post
  [post]
  (let [{:keys [date time]} (util/timestamp (:created-on post))]
    [:div.post
     [:div.col-xs-7.title
      (link-to (str (util/url-path post) (:url post))
               (smarten (:title post)))]
     [:div.col-x-5.date (str date " @ " time)]]))

(defmethod render :topic
  [topic]
  (let [{:keys [date time]} (util/timestamp (:created-on topic) :long)]
    [:div.topic
     [:div.page-title (smarten (:title topic))]
     [:div.body (mmd->html (:body topic))]
     [:div.footer
      [:div.row
       [:div.col-xs-12.col-sm-6
        [:div.small.text-left.stuff]]
       [:div.col-xs-12.col-sm-6
        [:div.small.text-right.date
         (str "Started on " date " @ " time)
         [:br]
         #_(display-tags)]]]]]))

(defmethod render :empty
  []
  [:div.message "No posts for this topic yet."])

(defn content
  [topic]
  [:div#topic.container
   [:div#banner.page-header
    [:div.row.contents
     [:div.col-xs-12.col-sm-10.col-sm-offset-1.col-md-8.col-md-offset-2
      (render topic)
      (if-let [posts (entries topic)]
        (for [post posts] (render post))
        (render {:kind :empty}))]]]])
