(ns furthermore.weblog
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]

            [furthermore.posts :refer [post-path]]
            [furthermore.static-page :refer [static-path]]
            [furthermore.routing :refer [change-view]]
            [furthermore.utils :refer [format-timestamp]]))

(enable-console-print!)

(defn set-status
  [kind type]
  (let [kind (kind {:new "Added"
                    :update "Updated"})
        type (type {:post "post"
                    :static "page"
                    :topic "topic"})]
    (str kind " " type)))

(defn entries
  [entry owner data]
  (om/component
   (let [topic (when-let [topic-id (:topic entry)]
                 (val (find (:topics data) topic-id)))
         {date :date time :time} (format-timestamp (:date entry))]
     (d/div {:class "row entry"}
            (d/div {:class "col-xs-3 date"}
                   (str date " @ " time))
            (d/div {:class "col-xs-2 status"
                    :style {:textAlign "left"}}
                   (set-status (:kind entry) (:type entry)))
            (d/div {:class "col-xs-5 title"}
                   (let [path-fn (case (:type entry)
                                   :post (post-path {:url (:url entry)})
                                   :static (static-path {:url (:url entry)})
                                   "")]
                     (if-not (= :topic (:type entry))
                       (d/a {:href path-fn} (:title entry))
                       (:title entry))))
            (when topic
              (d/div {:class "col-xs-2 topic"}
                     (:title topic)))))))

(defn updates-view
  [data owner]
  (om/component
   (d/div {:id "weblog"
           :class "container"}
          (d/div {:class "row"}
                 (apply d/div {:class "col-xs-12 col-md-10 col-md-offset-1 entries"}
                        (om/build-all entries (:updates data) {:opts {:posts (:posts data)
                                                                      :topics (:topics data)}}))))))

(defroute updates-path "/updates" [] (change-view updates-view :updates-view))
