(ns furthermore.home
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-post
                                          get-posts
                                          get-topic]]
            [furthermore.layout :refer [display-page]]
            [furthermore.utils :refer [format-timestamp]]))

(defmulti display-post #(:type %))

(defmethod display-post :post
  [post]
  (let [topic (get-topic {:_id (get-in post [:topic :_id])})
        {:keys [date time]} (format-timestamp (:created-on post))
        excerpt? (not (empty? (:excerpt post)))]
    (html
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
       [:div {:class "post"}
        (if-let [title (:title post)]
          [:div {:class "title"}
           [:a {:href (str "/post/" (:url post))}
            (smarten title)]])
        (when (contains? post :subtitle)
          [:div {:class "subtitle"}
           (smarten (:subtitle post))])
        (comment
          (when (:tags post)
            [:div {:class "tags text-right"}
             (display-tags (:tags post))]))
        (if excerpt?
          [:div {:class "body"} (md-to-html-string (:excerpt post))]
          [:div {:class "body"} (md-to-html-string (:body post))])
        [:div {:class "footer"}
         [:div {:class "row"}
          [:div {:class "col-xs-12 col-sm-6"}
           (when excerpt?
             [:div {:class "continue"}
              [:a {:href (str "/post/" (:url post))} "Continue &raquo;"]])]
          [:div {:class "col-xs-12 col-sm-6"}
           [:div {:class "small text-right date"}
            "Filed under "
            [:span {:class "topic"} (smarten (:title topic))]
            [:br]
            (str date " @ " time)
            [:br]
            (when-let [url (get-in post [:twitter :url])]
              [:a {:href url
                   :target "_blank"} "Tweeted!"])]]]]]]])))

(defmethod display-post :follow-up
  [follow-up]
  (let [topic (get-topic {:_id (get-in follow-up [:topic :_id])})
        parent (get-post {:_id (get-in follow-up [:parent :_id])})
        {:keys [date time]} (format-timestamp (:created-on follow-up))]
    (html
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
       [:div.follow-up
        [:div.body (md-to-html-string (:body follow-up))]
        [:div.footer
         [:div.row
          [:div.col-xs-12.col-sm-6
           [:div.small.text-left.stuff]]
          [:div.col-xs-12.col-sm-6
           [:div.small.text-right.date
            "A follow-up to "
            [:a.parent {:href (str "/post/" (:url parent))}
             (smarten (or (:title parent) "Untitled"))]
            [:br]
            (str date " @ " time)]]]]]]])))

(defn display-home-page
  []
  (display-page
   :home
   (html
    [:div {:id "index"
           :class "container"}
     (map display-post (filter #(contains? #{:post :follow-up} (:type %)) (get-posts)))])))
