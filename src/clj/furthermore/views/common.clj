(ns furthermore.views.common
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [typographer.core :as typo]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]
            [furthermore.views.util :as vutil]))

(defmulti footer (fn [_ entry] (:kind entry)))

(defmethod footer :post
  [page post]
  (let [topic (posts/topic post)
        {:keys [date time]} (util/timestamp (:created-on post))]
    [:div.footer
     [:div.row
      [:div.col-xs-12.col-sm-6
       (when-not (= page :post) (vutil/continue post))]
      [:div.col-sx-12.col-sm-6
       [:div.small.text-right.date
        (when-not (= page :post)
          (html
           "Filed under "
           [:span.topic
            (link-to (str (util/url-path topic) (:url topic))
                     (typo/smarten (:title topic)))]
           [:br]))
        (str date " @ " time)
        (vutil/tags post)
        (vutil/twitter post)]]]]))

(defmethod footer :follow
  [page follow]
  (let [parent (follows/parent follow)
        {:keys [date time]} (util/timestamp (:created-on follow))]
    [:div.footer
     [:div.row
      [:div.col-xs-12.col-sm-6 (vutil/continue follow)]
      [:div.col-sx-12.col-sm-6
       [:div.small.text-right.date
        (when-not (= page :post)
          (html
           "A follow-up to "
           [:span.parent
            (link-to (str (util/url-path parent) (:url parent))
                     (typo/smarten (:title parent)))]
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
       (vutil/text follow)
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
                   (typo/smarten (:title topic)))]])
      [:div.entry.post
       (if (= page :post)
         (for [p [(vutil/title post)
                  (vutil/subtitle post)
                  (html [:div.body (:body post)])]] p)
         (for [p (vutil/content post)] p))]
      (footer page post)]]))
