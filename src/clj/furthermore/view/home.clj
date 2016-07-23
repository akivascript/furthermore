(ns furthermore.view.home
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
     [:div {:class "tags text-right"}
      (apply str (interpose ", " (map #(html
                                        (link-to
                                         (str "/tags/"
                                              (util/create-url-name %)) %))
                                      (sort tags))))])))

(defmulti display-post :kind)

(defmethod display-post :post
  [post]
  (let [topic (ent/get-entity {:_id (get-in post [:topic :_id])} :topic)
        {:keys [date time]} (util/format-timestamp (:created-on post))
        excerpt? (seq (:excerpt post))]
    (html
     [:div {:class "post"}
      (if-let [title (:title post)]
        [:div {:class "title"}
         [:a {:href (str "/post/" (:url post))}
          (typo/smarten title)]])
      (when-let [subtitle (:subtitle post)]
        [:div {:class "subtitle"}
         (typo/smarten (:subtitle post))])
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
           (link-to (str (util/create-url-path topic) (:url topic)) (typo/smarten (:title topic)))]
          [:br]
          (str date " @ " time)
          (display-tags (:tags post))
          (when-let [url (get-in post [:twitter :url])]
            [:span.twitter
             (link-to {:class "whatever-twitter"
                       :target "_blank"} url)])]]]]])))

(defmethod display-post :follow-up
  [follow-up]
  (let [topic (ent/get-entity {:_id (get-in follow-up [:topic :_id])} :topic)
        parent (ent/get-entity {:_id (get-in follow-up [:parent :_id])} :post)
        {:keys [date time]} (util/format-timestamp (:created-on follow-up))
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
                   (typo/smarten (:title parent)))
          [:br]
          (str date " @ " time)
          (display-tags (:tags follow-up))
          (when-let [url (get-in follow-up [:twitter :url])]
            [:span.twitter
             (link-to {:class "whatever-twitter"
                       :target "_blank"} url)])]]]]])))

(defn display-home-page
  []
  (layout/display-page
   :home
   (html
    [:div {:id "home"
           :class "container"}
     [:div {:class "row"}
      [:div {:class "content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2"}
       (map display-post (->> (apply merge (ent/get-entities :posts) (ent/get-entities :follow-ups))
                              (sort-by :created-on)
                              reverse
                              (take 10)))]]])))
