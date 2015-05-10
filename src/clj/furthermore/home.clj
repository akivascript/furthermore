(ns furthermore.home
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-posts
                                          get-topic]]
            [furthermore.page :refer [display-page]]
            [furthermore.utils :refer [format-timestamp]]))

(defn display-post
  [post]
  (let [topic (get-topic {:_id (get-in post [:topic :_id])})
        {:keys [date time]} (format-timestamp (:created-on post))
        excerpt? (contains? post :excerpt)]
    (html
     [:div {:class "post"}
      [:div {:class "title"}
       [:a {:href (str "/post/" (:url post))}
        (smarten (:title post))]]
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
                 :target "_blank"} "Tweeted!"])]]]]])))

(defn display-home-page
  []
  (display-page
   (html
    [:div {:id "index"
           :class "container"}
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
       (map display-post (filter #(= :post (:type %)) (get-posts)))]]])))
