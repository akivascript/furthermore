(ns furthermore.view.post
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [typographer.core :as typo]

            [furthermore.entities :as ent]
            [furthermore.view.layout :as layout]
            [furthermore.utils :as util]))

(defn tag-icon
  [c]
  (html
   (cond
     (= c 1) [:i {:class "fa fa-tag" :aria-hidden "true"}]
     (> c 1) [:i {:class "fa fa-tags" :aria-hidden "true"}])))

(defn- display-tags
  [tags]
  (apply str (interpose ", " (map #(html
                                    (link-to
                                     (str "/tags/"
                                          (util/create-url-name %)) %))
                                  (sort tags)))))

(defn display-follow-up
  [follow-up]
  (let [follow-up (ent/get-entity {:_id (:_id follow-up)} :follow-up)
        {:keys [date time]} (util/format-timestamp (:created-on follow-up))]
    (html
     [:a {:name (:url follow-up)}]
     [:div {:class "follow-up"}
      [:div {:class "body"} (:body follow-up)]
      [:div {:class "footer"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-left date"}
          (str date " @ " time)
          (when-not (empty? (:tags follow-up))
            (let [tags (:tags follow-up)]
              [:div {:class "tags"}
               (tag-icon (count tags)) [:span " "] (display-tags tags)]))
          (when-let [url (get-in follow-up [:twitter :url])]
            (link-to {:class "whatever-twitter"
                       :target "_blank"} url))]]
        [:div {:class "col-xs-12 col-sm-6"}
         [:div {:class "small text-right date"}]]]]])))

(defn display-post
  [post]
  (let [topic (ent/get-entity {:_id (get-in post [:topic :_id])} :topic)
        {:keys [date time]} (util/format-timestamp (:created-on post))
        excerpt? (contains? post :excerpt)]
    (html
     [:div {:class "content"}
      [:div {:class "post-topic"}
       (link-to (str "/" (util/create-url-path topic) (:url topic))
                (typo/smarten (:title topic)))]
      [:div {:class "post"}
       [:div {:class "title"} (typo/smarten (:title post))]
       (when (contains? post :subtitle)
         [:div {:class "subtitle"}
          (typo/smarten (:subtitle post))])
       [:div {:class "body"} (:body post)]
       [:div {:class "footer"}
        [:div {:class "row"}
         [:div {:class "col-xs-12 col-sm-6"}
          [:div {:class "small text-left stuff"}]]
         [:div {:class "col-xs-12 col-sm-6"}
          [:div {:class "small text-right date"}
           (str date " @ " time)
           [:br]
           (when-not (empty? (first (:tags post)))
             (let [tags (:tags post)]
               [:div {:class "tags"}
                (display-tags tags) [:span " "] (tag-icon (count tags))]))
           (when-let [url (get-in post [:twitter :url])]
             (link-to {:class "whatever-twitter"
                       :target "_blank"} url))]]]]]
      (when (seq (:refs post))
        [:div {:class "glyphicon glyphicon-triangle-bottom arrow"}])
      (when-let [refs (:refs post)]
        (map display-follow-up refs))])))

(defn display-post-page
  [url]
  (let [post (ent/get-entity {:url url} :post)]
    (layout/display-page
     :post
     (:title post)
     (html
      [:div {:id "post"
             :class "container"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2"}
         (display-post post)]]]))))
