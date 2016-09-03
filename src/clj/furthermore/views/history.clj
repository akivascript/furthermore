(ns furthermore.views.history
  "This is for the display of the History page which lists
  in chronological order all updates (events) to the blog."
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.authors :as authors]
            [furthermore.entities.events :as events]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]))

(defn- action
  "Returns the action type for the event."
  [event]
  ({:delete "Deleted"
    :new "Added"
    :update "Updated"} (:action event)))

(defn- target
  [event]
  "Returns the event entity's kind."
  ({:author "author"
    :follow "follow-up"
    :image "image"
    :link "link"
    :page "page"
    :post "post"
    :tag "tag"
    :topic "topic"} (get-in event [:entity :kind])))

(defn- describe
  "Returns a string describing the event's action and entity's kind."
  [event]
  (apply str (interpose " " ((juxt action target) event))))

(defn- events
  "Return a list of all events sorted by date descending."
  []
  (->> (events/get-all)
       (sort-by :date)
       reverse))

(defn- event-type
  "Returns the type of entity the event update represents."
  [event]
  (get-in event [:entity :kind]))


;; -->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--> LAYOUT -->
(declare render)

(defn content
  []
  [:div#history
   [:div#banner.page-header
    [:div.container
     [:div.row
      [:div.col-xs-12.col-sm-10.col-sm-offset-1
       [:div.page-title "History"]
       [:div.history
        (for [event (events)] (render event))]]]]]])

(defmulti render event-type)

(defmethod render :author
  [event]
  (let [{:keys [date time]} (util/timestamp (:date event) :terse)
        author (authors/get :_id (get-in event [:entity :_id]))]
    [:div.container-fluid
     [:div.row.event
      [:div.col-sm-2.action.small (describe event)]
      [:div.col-sm-7.title.small (smarten (:name author))]
      [:div.col-sm-3.date.small.text-right (str date " @ " time)]]]))

(defmethod render :default
  [event]
  (let [{:keys [date time]} (util/timestamp (:date event) :terse)]
    [:div.container-fluid
     [:div.row.event
      [:div.col-sm-2.action.small (describe event)]
      [:div.col-sm-7.title.small (link-to (str (util/url-path (:entity event))
                                               (:url event))
                                          (smarten (:title event)))]
      [:div.col-sm-3.date.small.text-right (str date " @ " time)]]]))
