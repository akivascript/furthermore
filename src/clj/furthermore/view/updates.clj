(ns furthermore.view.updates
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer :all]
            [typographer.core :refer [smarten]]

            [furthermore.entities :refer [get-entities
                                          get-entity]]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :refer [get-excerpt format-timestamp]]))

(defn- set-status
  [action kind]
  (let [action (action {:new "Added"
                        :delete "Deleted"
                        :update "Updated"})
        kind (kind {:follow-up "follow-up"
                    :post "post"
                    :page "page"
                    :tag "tag"
                    :topic "topic"})]
    (str action " " kind)))

(defn- display-update
  [update]
  (let [kind (:kind update)
        topic (when-let [topic (:topic update)]
                (get-entity {:_id (:_id topic)} :topic))
        parent (when-let [parent (:parent update)]
                 (get-entity {:_id (:_id parent)} (:kind parent)))
        {:keys [date time]} (format-timestamp (:date update))]
    (html
     [:div {:class "row entry"}
      [:div {:class "col-xs-3 date"}
       (str date " @ " time)]
      [:div {:class "col-xs-2 text-left status"}
       (set-status (:action update) kind)]
      [:div {:class "col-xs-5 title"}
       (let [path-fn (case kind
                       :follow-up (str "/post/" (:url parent) "#" (:url update))
                       :post (str "/post/" (:url update))
                       :page (str "/page/" (:url update))
                       :tag (str "/tags/" (:url update))
                       :topic (str "/topic/" (:url update))
                       "")]
         (if (= :follow-up kind)
           [:span
            (link-to path-fn (:title update))
            [:span.parent
             [:span.whatever-forward {:style "padding-right: 2px;"}]
             (:title parent)]]
           [:a {:href path-fn} (:title update)]))]
      (when-let [topic-title (:title topic)]
        [:div {:class "col-xs-2 topic"} topic-title])])))

(defn display-updates-page
  []
  (display-page
   :updates
   "Updates"
   (html
    [:div {:id "updates"
           :class "container"}
     [:div {:class "row"}
      [:div {:class "col-xs-12 col-md-10 col-md-offset-1 entries"}
      (map display-update (get-entities :updates))]]])))
