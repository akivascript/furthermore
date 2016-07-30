(ns furthermore.view.tags
  (:require [hiccup.core :refer :all]
            [hiccup.element :as el]
            [typographer.core :as typo]

            [furthermore.view.layout :as layout]
            [furthermore.entities :as ent]
            [furthermore.utils :as util]))

(defmulti display-title :kind)

(defmethod display-title :follow-up
  [follow-up]
  (let [parent (ent/get-parent follow-up)
        {:keys [date time]} (util/format-timestamp (:created-on follow-up))]
    (html
      [:div.col-xs-5.title (el/link-to (str util/site-url
                                        (util/create-url-path parent)
                                        (:url parent))
                                    (typo/smarten (util/get-excerpt (:body follow-up) 50)))])))

(defmethod display-title :static
  [page]
  (let [{:keys [date time]} (util/format-timestamp (:created-on page))]
    (html
     [:div.col-xs-5.title (el/link-to (str util/site-url
                                        (util/create-url-path page)
                                        (:url page))
                                   (typo/smarten (:title page)))])))

(defmethod display-title :post
  [post]
  (let [{:keys [date time]} (util/format-timestamp (:created-on post))]
    (html
     [:div.col-xs-5.title (el/link-to (str util/site-url
                                        (util/create-url-path post)
                                        (:url post))
                                   (typo/smarten (:title post)))])))

(defmethod display-title :topic
  [topic]
  (let [{:keys [date time]} (util/format-timestamp (:created-on topic))]
    (html
     [:div.col-xs-5.title (typo/smarten (:title topic))])))

(defn- display-header
  [tag]
  (let [tags (map #(if (= % tag)
                     (:title %)
                     (html (el/link-to
                            (str "/tags/" (util/create-url-name (:title %)))
                            (:title %))))
                  (remove #(empty? (:title %)) (ent/get-tags)))]
    (html
     [:div.row
      [:div.col-xs-12.col-sm-10.col-sm-offset-1
       [:div.title "Tags"]
       [:div.tags (apply str (interpose " &bull; " tags))]]])))

(defn display-post
  [post]
  (let [topic (ent/get-topic (get-in post [:topic :_id]))
        {:keys [date time]} (util/format-timestamp (:created-on post))]
    (html
     [:div.post
      (display-title post)
      [:div.col-xs-3.topic (when-let [topic (:title topic)]
                             (typo/smarten topic))]
      [:div.col-xs-4.date (str date " @ " time)]])))

(defn display-tags-page
  ([tag]
   (let [tag (ent/get-tag-by-url tag)
         posts (sort-by #(or (:title %) (get-in % [:source :body]))
                        (map #(ent/get-entity {:_id (:_id %)} (:kind %)) (:refs tag)))]
     (layout/display-page
      :tags
      (str "Tags &mdash; " (:title tag))
      (html
       [:div#tags.container
        (display-header tag)
        [:div.row
         [:div.col-xs-12.col-sm-10.col-sm-offset-1
          [:div.posts
           (map display-post posts)]]]]))))
  ([]
   (layout/display-page
    :tags
    "Tags"
    (html
     [:div#tags.container
      (display-header nil)]))))
