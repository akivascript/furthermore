(ns furthermore.views.common
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.authors :as authors]
            [furthermore.entities.common :as common]
            [furthermore.entities.follows :as follows]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]
            [furthermore.views.util :as vutil]))

(defmulti footer (fn [_ entry] (:kind entry)))

(defmethod footer :page
  [_ page]
  (let [created-date (util/timestamp (:created-on page) :long)
        updated-date (util/timestamp (:last-updated page) :long)]
    [:div.footer
     [:div.col-sx-12
      [:div.small.text-right.date
       [:div (str (:date updated-date) " @ " (:time updated-date))]
       [:div (vutil/authors page)]]]]))

(defmethod footer :post
  [page post]
  (let [topic (posts/topic post)
        {:keys [date time]} (util/timestamp (:created-on post) :long)]
    [:div.footer
     [:div.row
      [:div.col-xs-12.col-sm-6
       (when-not (= page :post) (vutil/continue post))]
      [:div.col-sx-12.col-sm-6
       [:div.small.text-right.author (vutil/authors post)]
       [:div.small.text-right.date
        (when-not (= page :post)
          (html
           "Filed under "
           [:span.topic
            (link-to (str (util/url-path topic) (:url topic))
                     (smarten (:title topic)))]
           [:br]))
        (str date " @ " time)
        (vutil/tags post)
        (vutil/twitter post)]]]]))

(defmethod footer :follow
  [page follow]
  (let [parent (follows/parent follow)
        {:keys [date time]} (util/timestamp (:created-on follow) :long)]
    [:div.footer
     [:div.row
      [:div.col-xs-12.col-sm-6
       (when-not (= page :post) (vutil/continue follow))]
      [:div.col-sx-12.col-sm-6
       [:div.small.text-right.author (vutil/authors follow)]
       [:div.small.text-right.date
        (when-not (= page :post)
          (html
           "A follow-up to "
           [:span.parent
            (link-to (str (util/url-path parent) (:url parent))
                     (smarten (:title parent)))]
           [:br]))
        (str date " @ " time)
        (vutil/tags follow)
        (vutil/twitter follow)]]]]))

(defmulti entry (fn [_ entry] (:kind entry)))

(defmethod entry :follow
  [page follow]
  (if (= page :post)
    [:div.row
     [:div.col-xs-12.col-sm-10.col-sm-offset-1.col-md-8.col-md-offset-2
      [:div.entry.follow.narrow
       [:div.body (vutil/mmd->html (:body follow))]
       (footer page follow)]]]
    [:div.row
     [:div.col-xs-12.col-sm-10.col-sm-offset-1.col-md-8.col-md-offset-2
      [:div.entry.follow
       (vutil/text follow)]
      (footer page follow)]]))

(defmethod entry :post
  [page post]
  (let [topic (posts/topic post)]
    [:div.row
     [:div.col-xs-12.col-sm-10.col-sm-offset-1.col-md-8.col-md-offset-2
      (when (= page :post)
        [:div.post
         [:div.page-title
          (link-to (str (util/url-path topic) (:url topic))
                   (smarten (:title topic)))]])
      [:div.entry.post
       (if (= page :post)
         (for [p [(html [:div.title (smarten (:title post))])
                  (vutil/subtitle post)
                  (html [:div.body (vutil/mmd->html (:body post))])]] p)
         (for [p (vutil/content post)] p))]
      (footer page post)]]))
