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
        type (type {:follow-up "follow-up"
                    :post "post"
                    :static "page"
                    :topic "topic"})]
    (str kind " " type)))

(def types
  {:topic :topics
   :post :posts})

(defn entries
  [entry owner data]
  (om/component
   (letfn [(get-title [key]
             (when-not (nil? key)
               (if-let [ref (find (get data ((:type key) types)) (:_id key))]
                 (:title (val ref))
                 "")))]
     (let [type (:type entry)
           topic-title (get-title (:topic entry))
           parent-title (get-title (:parent entry))
           {date :date time :time} (format-timestamp (:date entry))]
       (d/div {:class "row entry"}
              (d/div {:class "col-xs-3 date"}
                     (str date " @ " time))
              (d/div {:class "col-xs-2 status"
                      :style {:textAlign "left"}}
                     (set-status (:kind entry) type))
              (d/div {:class "col-xs-5 title"}
                     (let [path-fn (case type
                                     (:follow-up :post) (post-path {:url (:url entry)})
                                     :static (static-path {:url (:url entry)})
                                     "")]
                       (if (= type :topic)
                         (:title entry)
                         (let [title (if (= type :follow-up)
                                       (str parent-title ": " (:title entry))
                                       (:title entry))]
                           (d/a {:href path-fn} title)))))
              (when topic-title
                (d/div {:class "col-xs-2 topic"}
                       topic-title)))))))

(defn updates-view
  [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/api/weblog"
                {:handler #(om/update! data :updates (identity %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (d/div {:id "weblog"
              :class "container"}
             (d/div {:class "row"}
                    (apply d/div {:class "col-xs-12 col-md-10 col-md-offset-1 entries"}
                           (if (empty? (:updates data))
                             "No updates yet!"
                             (om/build-all entries (:updates data)
                                           {:opts {:posts (:posts data)
                                                   :topics (:topics data)}}))))))))

(defroute updates-path "/updates" [] (change-view updates-view :updates-view))
