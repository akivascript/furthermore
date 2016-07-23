(ns furthermore.view.topic
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [typographer.core :as typo]

            [furthermore.entities :as ent]
            [furthermore.view.layout :as layout]
            [furthermore.utils :as util]))

(defn- display-tags
  [tags]
  (when (seq tags)
    (html
     [:div {:class "tags"}
      (apply str (interpose ", " (map #(html
                                        (link-to
                                         (str "/tags/"
                                              (util/create-url-name %)) %))
                                      (sort tags))))])))

(defn display-post
  [post]
  (let [{:keys [date time]} (util/format-timestamp (:created-on post))]
    (html
     [:div.post
      [:div.col-xs-7.title (link-to (str util/site-url
                                         (util/create-url-path post)
                                         (:url post))
                                    (typo/smarten (:title post)))]
      [:div.col-xs-5.date (str date " @ " time)]])))

(defn display-topic
  [topic]
  (let [{:keys [date time]} (util/format-timestamp (:created-on topic))]
    (html
     [:div {:class "title"} (typo/smarten (:title topic))]
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
                                              (map ent/get-post (:refs topic))))]
        (map display-post posts)))))

(defn display-topic-page
  [url]
  (let [topic (ent/get-topic url)]
    (layout/display-page
     :topic
     (:title topic)
     (html
      [:div {:id "topic"
             :class "container"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2"}
         (display-topic topic)]]]))))
