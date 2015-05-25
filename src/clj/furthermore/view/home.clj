(ns furthermore.view.home
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [create-follow-up
                                          create-post
                                          get-entities
                                          get-entity]]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :refer [create-url-name
                                       create-url-path
                                       format-timestamp]]))

(defn- display-tags
  [tags]
  (when (seq tags)
    (html
     [:div {:class "tags text-right"}
      (apply str (interpose ", " (map #(html
                                        (link-to
                                         (str "/tags/"
                                              (create-url-name %)) %))
                                      tags)))])))

(defmulti display-post :kind)

(defmethod display-post :post
  [post]
  (let [topic (get-entity {:_id (get-in post [:topic :_id])} :topic)
        {:keys [date time]} (format-timestamp (:created-on post))
        excerpt? (seq (:excerpt post))]
    (html
     [:div {:class "post"}
      (if-let [title (:title post)]
        [:div {:class "title"}
         [:a {:href (str "/post/" (:url post))}
          (smarten title)]])
      (when-let [subtitle (:subtitle post)]
        [:div {:class "subtitle"}
         (smarten (:subtitle post))])
      (if excerpt?
        [:div {:class "body"} (:excerpt post)]
        [:div {:class "body"} (:body post)])
      [:div {:class "footer"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-6"}
         (when excerpt?
           [:div {:class "continue"}
            [:a {:href (str "/post/" (:url post))} "Continue &raquo;"]])]
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-right date"}
          "Filed under "
          [:span.topic
           (link-to (str (create-url-path topic) (:url topic)) (smarten (:title topic)))]
          [:br]
          (str date " @ " time)
          (display-tags (:tags post))
          (when-let [url (get-in post [:twitter :url])]
            (link-to {:class "fa fa-twitter"
                      :target "_blank"} url))]]]]])))

(defmethod display-post :follow-up
  [follow-up]
  (let [topic (get-entity {:_id (get-in follow-up [:topic :_id])} :topic)
        parent (get-entity {:_id (get-in follow-up [:parent :_id])} :post)
        {:keys [date time]} (format-timestamp (:created-on follow-up))
        excerpt? (seq (:excerpt follow-up))]
    (html
     [:div.follow-up
      (if excerpt?
        [:div {:class "body"} (:excerpt follow-up)]
        [:div {:class "body"} (:body follow-up)])
      [:div.footer
       [:div.row
        [:div.col-xs-12.col-sm-6
         (when excerpt?
           [:div {:class "continue"}
            [:a {:href (str "/post/" (:url parent))} "Continue &raquo;"]])]
        [:div.col-xs-12.col-sm-6
         [:div.small.text-right.date
          "A follow-up to "
          (link-to {:class "parent"}
                   (str "/post/" (:url parent) "#" (:url follow-up))
                   (smarten (:title parent)))
          [:br]
          (str date " @ " time)
          (display-tags (:tags follow-up))
          (when-let [url (get-in follow-up [:twitter :url])]
            (link-to {:class "fa fa-twitter"
                      :target "_blank"} url))]]]]])))

(defn display-home-page
  []
  (display-page
   :home
   (html
    [:div {:id "home"
           :class "container"}
     [:div {:class "row"}
      [:div {:class "content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2"}
       (map display-post (->> (apply merge (get-entities :posts) (get-entities :follow-ups))
                              (sort-by :created-on)
                              reverse
                              (take 10)))]]])))
