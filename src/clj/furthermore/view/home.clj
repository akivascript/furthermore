(ns furthermore.view.home
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [create-follow-up
                                          create-post
                                          get-entities
                                          get-entity]]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :refer [create-url-name
                                       format-timestamp]]))

(defmulti display-post :kind)

(def format-body (comp smarten md-to-html-string))

(defmethod display-post :post
  [post]
  (let [topic (get-entity {:_id (get-in post [:topic :_id])} :topic)
        {:keys [date time]} (format-timestamp (:created-on post))
        excerpt? (seq (:excerpt post))]
    (html
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1"}
       [:div {:class "post"}
        (if-let [title (:title post)]
          [:div {:class "title"}
           [:a {:href (str "/post/" (:url post))}
            (smarten title)]])
        (when-let [subtitle (:subtitle post)]
          [:div {:class "subtitle"}
           (smarten (:subtitle post))])
        (if excerpt?
          [:div {:class "body"} (format-body (:excerpt post))]
          [:div {:class "body"} (format-body (:body post))])
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
            (when-let [tags (seq (:tags post))]
              [:div {:class "tags text-right"}
               (apply str (interpose ", " (map #(html
                                                 (link-to
                                                  (str "/tags/"
                                                       (create-url-name %)) %))
                                               tags)))
               [:br]])
            (str date " @ " time)
            [:br]
            (when-let [url (get-in post [:twitter :url])]
              [:a {:href url
                   :target "_blank"} "Tweeted!"])]]]]]]])))

(defmethod display-post :follow-up
  [follow-up]
  (let [topic (get-entity {:_id (get-in follow-up [:topic :_id])} :topic)
        parent (get-entity {:_id (get-in follow-up [:parent :_id])} :post)
        {:keys [date time]} (format-timestamp (:created-on follow-up))
        excerpt? (seq (:excerpt follow-up))]
    (html
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1"}
       [:div.follow-up
        (if excerpt?
          [:div {:class "body"} (format-body (:excerpt follow-up))]
          [:div {:class "body"} (format-body (:body follow-up))])
        [:div.footer
         [:div.row
          [:div.col-xs-12.col-sm-6
           (when excerpt?
             [:div {:class "continue"}
              [:a {:href (str "/post/" (:url parent))} "Continue &raquo;"]])]
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
     (map display-post (->> (apply merge (get-entities :posts) (get-entities :follow-ups))
                            (sort-by :created-on)
                            reverse
                            (take 10)))])))
