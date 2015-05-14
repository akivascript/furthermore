(ns furthermore.post
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-post
                                          get-topic]]
            [furthermore.layout :refer [display-page]]
            [furthermore.utils :refer [format-timestamp]]))

(defn display-follow-up
  [follow-up]
  (let [follow-up (get-post {:_id (:_id follow-up)})
        {:keys [date time]} (format-timestamp (:created-on follow-up))]
    (html
     [:div {:class "follow-up"}
      (comment
        (when-let [tags (:tags follow-up)]
          [:div {:class "tags text-right"}
           (display-tags tags)]))
      [:div {:class "body"} (md-to-html-string (:body follow-up))]
      [:div {:class "footer"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-left date"}
          (str date " @ " time)]]
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-right date"}]]]]])))

(defn display-post
  [post]
  (let [topic (get-topic {:_id (get-in post [:topic :_id])})
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
       [:div {:class "body"} (md-to-html-string (:body post))]
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
      (when (:references post)
        [:div {:class "glyphicon glyphicon-triangle-bottom arrow"}])
      (when-let [refs (:references post)]
        (map display-follow-up refs))])))

(defn display-post-page
  [url]
  (display-page
   :post
   (html
    [:div {:id "post"
           :class "container"}
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
       (display-post (get-post {:url url}))]]])))
