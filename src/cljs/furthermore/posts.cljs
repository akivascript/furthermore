(ns furthermore.posts
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [typographer.core :refer [smarten]]

            [furthermore.routing :refer [change-view]]
            [furthermore.state :refer [initialize-state]]
            [furthermore.utils :refer [format-timestamp]]))

(.setOptions js/marked (clj->js {:smartypants true}))

(defn follow-up-arrow
  [data]
  (om/component
  (println "Hello")
   (d/div {:class "glyphicon glyphicon-triangle-bottom arrow"})))

(defn follow-up-view
  [follow-up owner]
  (om/component
   (let [{:keys [date time]} (format-timestamp (:created-on follow-up))]
     (d/div {:class "follow-up"}
            (comment
              (when (:tags follow-up)
                (d/div {:class "tags text-right"}
                       (om/build-all tags (:tags follow-up)))))
            (d/div {:class "body"
                    :dangerouslySetInnerHTML
                    {:__html (js/marked (:body follow-up))}})
            (d/div {:class "footer"}
                   (d/div {:class "row"}
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (d/div {:class "small text-left stuff"}
                                        (str date " @ " time)))
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (d/div {:class "small text-right date"}))))))))

(defn reference-dispatch
  [ref owner data]
  (case (:type ref)
    :follow-up (follow-up-view ref owner)))

(defn post-view
  [data owner {:keys [url]}]
  (om/component
   (when-let [posts (apply merge (map #(hash-map (:url (val %)) (val %)) (:posts data)))]
     (let [post (val (find posts url))
           topic (val (find (:topics data) (get-in post [:topic :_id])))
           {:keys [date time]} (format-timestamp (:created-on post))]
       (d/div {:id "post"
               :class "container"}
              (d/div {:class "row"}
                     (d/div {:class "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"}
                            (d/div {:class "content"}
                                   (d/div {:class "post-topic"}
                                          (smarten (:title topic)))
                                   (d/div {:class "post"}
                                          (d/div
                                             (d/div {:class "title"} (smarten (:title post))))
                                            (when-not (nil? (:subtitle post))
                                              (d/div
                                               (d/div {:class "subtitle"}
                                                      (smarten (:subtitle post)))))
                                            (comment
                                              (when (:tags post)
                                                (d/div
                                                 (d/div {:class "tags text-right"}
                                                        (om/build-all tags (:tags post))))))
                                            (d/div {:class "body"
                                                    :dangerouslySetInnerHTML
                                                    {:__html (js/marked (:body post))}})
                                            (d/div {:class "footer"}
                                                   (d/div {:class "row"}
                                                          (d/div {:class "col-xs-12 col-sm-6"}
                                                                 (d/div {:class "small text-left stuff"}))
                                                          (d/div {:class "col-xs-12 col-sm-6"}
                                                                 (d/div {:class "small text-right date"}
                                                                        (str date " @ " time))))))
                                     (d/div {:class "glyphicon glyphicon-triangle-bottom arrow"})
                                     (when-let [refs (:references post)]
                                       (let [refs (vals (map #(find (:posts data) (:_id %)) refs))]
                                         (om/build-all reference-dispatch refs
                                                       {:opts {:posts (:posts data)
                                                               :topics (:topics data)}})))))))))))

(defroute post-path "/post/:url" [url]
  (change-view post-view :post-view :data {:url url}))
