(ns furthermore.updates
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-post
                                          get-topic]]
            [furthermore.logging :refer [get-updates]]
            [furthermore.page :refer [display-page]]
            [furthermore.utils :refer [get-excerpt format-timestamp]]))

(defn- set-status
  [kind type]
  (let [kind (kind {:new "Added"
                    :update "Updated"})
        type (type {:follow-up "follow-up"
                    :post "post"
                    :static "page"
                    :topic "topic"})]
    (str kind " " type)))

(defn- display-update
  [update]
  (let [type (:type update)
        topic (get-topic {:_id (get-in update [:topic :_id])})
        parent (get-post {:_id (get-in update [:parent :_id])})
        {:keys [date time]} (format-timestamp (:date update))]
    (html
     [:div {:class "row entry"}
      [:div {:class "col-xs-3 date"}
       (str date " @ " time)]
      [:div {:class "col-xs-2 text-left status"}
       (set-status (:kind update) type)]
      [:div {:class "col-xs-5 title"}
       (let [path-fn (case type
                       :follow-up (str "/post/" (:url parent))
                       :post (str "/post/" (:url update))
                       :static (:url update)
                       "")]
         (if (= :topic type)
           (:title update)
           (if (= :follow-up type)
             [:span
              [:a {:href path-fn} (:title parent)]
              [:br]
              (:title update)]
             [:a {:href path-fn} (:title update)])))]
      (when-let [topic-title (:title topic)]
        [:div {:class "col-xs-2 topic"} topic-title])])))

(defn display-updates-page
  []
  (display-page
   (html
    [:div {:id "updates"
           :class "container"}
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-md-10 col-md-offset-1 entries"}
      (map display-update (get-updates))]]])))
