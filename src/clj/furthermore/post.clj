(ns furthermore.post
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-entity]]
            [furthermore.layout :refer [display-page]]
            [furthermore.utils :refer [format-timestamp]]))

(def format-body (comp smarten md-to-html-string))

(defn display-follow-up
  [follow-up]
  (let [follow-up (get-entity {:_id (:_id follow-up)} :follow-up)
        {:keys [date time]} (format-timestamp (:created-on follow-up))]
    (html
     [:div {:class "follow-up"}
      (comment
        (when-let [tags (:tags follow-up)]
          [:div {:class "tags text-right"}
           (display-tags tags)]))
      [:div {:class "body"} (format-body (:body follow-up))]
      [:div {:class "footer"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-left date"}
          (str date " @ " time)]]
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-right date"}]]]]])))

(defn display-post
  [post]
  (let [topic (get-entity {:_id (get-in post [:topic :_id])} :topic)
        {:keys [date time]} (format-timestamp (:created-on post))
        excerpt? (contains? post :excerpt)]
    (html
     [:div {:class "content"}
      [:div {:class "post-topic"} (smarten (:title topic))]
      [:div {:class "post"}
       [:div {:class "title"} (smarten (:title post))]
       (when (contains? post :subtitle)
         [:div {:class "subtitle"}
          (smarten (:subtitle post))])
       (comment
         (when (:tags post)
           [:div {:class "tags text-right"}
            (display-tags (:tags post))]))
       [:div {:class "body"} (format-body (:body post))]
       [:div {:class "footer"}
        [:div {:class "row"}
         [:div {:class "col-xs-12 col-sm-6"}
          [:div {:class "small text-left stuff"}]]
         [:div {:class "col-xs-12 col-sm-6"}
          [:div {:class "small text-right date"}
           (str date " @ " time)
           [:br]
           (when-let [url (get-in post [:twitter :url])]
             [:a {:href url
                  :target "_blank"} "Tweeted!"])]]]]]
      (when (:refs post)
        [:div {:class "glyphicon glyphicon-triangle-bottom arrow"}])
      (when-let [refs (:refs post)]
        (map display-follow-up refs))])))

(defn display-post-page
  [url]
  (display-page
   :post
   (html
    [:div {:id "post"
           :class "container"}
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1"}
       (display-post (get-entity {:url url} :post))]]])))
