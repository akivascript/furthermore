(ns furthermore.view.topic
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :as entities]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :as utils :refer [create-url-name
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
                                      (sort tags))))])))

(defn display-post
  [post]
  (let [{:keys [date time]} (utils/format-timestamp (:created-on post))]
    (html
     [:div.post
      [:div.col-xs-7.title (link-to (str utils/site-url
                                         (utils/create-url-path post)
                                         (:url post))
                                    (smarten (:title post)))]
      [:div.col-xs-5.date (str date " @ " time)]])))

(defn display-topic
  [topic]
  (let [{:keys [date time]} (utils/format-timestamp (:created-on topic))]
    (html
     [:div {:class "title"} (smarten (:title topic))]
     [:div {:class "body"} (:body topic)]
      [:div {:class "footer"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-left stuff"}]]
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-right date"}
          (str "Started on " date " @ " time)
          [:br]
          (display-tags (:tags topic))]]]]
      (when-let [posts (sort-by :title (filter #(= :post (:kind %))
                                              (map entities/get-post (:refs topic))))]
        (map display-post posts)))))

(defn display-topic-page
  [url]
  (let [topic (entities/get-topic url)]
    (display-page
     :topic
     (:title topic)
     (html
      [:div {:id "topic"
             :class "container"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2"}
         (display-topic topic)]]]))))
