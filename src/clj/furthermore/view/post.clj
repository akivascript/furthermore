(ns furthermore.view.post
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-entity]]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :as utils :refer [create-url-path
                                                 create-url-name
                                                 format-timestamp]]))

(defn- display-tags
  [tags]
  (when (seq tags)
    (html
     [:div {:class "tags"}
      (apply str (interpose ", " (map #(html
                                        (link-to
                                         (str "/tags/"
                                              (create-url-name %)) %))
                                      tags)))])))

(def format-body (comp smarten md-to-html-string))

(defn display-follow-up
  [follow-up]
  (let [follow-up (get-entity {:_id (:_id follow-up)} :follow-up)
        {:keys [date time]} (utils/format-timestamp (:created-on follow-up))]
    (html
     [:a {:name (:url follow-up)}]
     [:div {:class "follow-up"}
      [:div {:class "body"} (:body follow-up)]
      [:div {:class "footer"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-left date"}
          (str date " @ " time)
          (display-tags (:tags follow-up))
          (when-let [url (get-in follow-up [:twitter :url])]
            (link-to {:class "whatever-twitter"
                       :target "_blank"} url))]]
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-right date"}]]]]])))

(defn display-post
  [post]
  (let [topic (get-entity {:_id (get-in post [:topic :_id])} :topic)
        {:keys [date time]} (utils/format-timestamp (:created-on post))
        excerpt? (contains? post :excerpt)]
    (html
     [:div {:class "content"}
      [:div {:class "post-topic"}
       (link-to (str "/" (create-url-path topic) (:url topic))
                (smarten (:title topic)))]
      [:div {:class "post"}
       [:div {:class "title"} (smarten (:title post))]
       (when (contains? post :subtitle)
         [:div {:class "subtitle"}
          (smarten (:subtitle post))])
       [:div {:class "body"} (:body post)]
       [:div {:class "footer"}
        [:div {:class "row"}
         [:div {:class "col-xs-12 col-sm-6"}
          [:div {:class "small text-left stuff"}]]
         [:div {:class "col-xs-12 col-sm-6"}
          [:div {:class "small text-right date"}
           (str date " @ " time)
           [:br]
           (display-tags (:tags post))
           (when-let [url (get-in post [:twitter :url])]
             (link-to {:class "whatever-twitter"
                       :target "_blank"} url))]]]]]
      (when (seq (:refs post))
        [:div {:class "glyphicon glyphicon-triangle-bottom arrow"}])
      (when-let [refs (:refs post)]
        (map display-follow-up refs))])))

(defn display-post-page
  [url]
  (let [post (get-entity {:url url} :post)]
    (display-page
     :post
     (:title post)
     (html
      [:div {:id "post"
             :class "container"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2"}
         (display-post post)]]]))))
