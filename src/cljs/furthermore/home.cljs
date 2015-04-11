(ns furthermore.home
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [typographer.core :refer [smarten]]

            [furthermore.posts :refer [post-path]]
            [furthermore.routing :refer [change-view]]
            [furthermore.state :refer [app-state]]
            [furthermore.utils :refer [format-timestamp]]))

(.setOptions js/marked (clj->js {:smartypants true}))

(defn post-view
  [post owner data]
  (om/component
   (let [topic (val (find (:topics data) (get-in post [:topic :_id])))
         {:keys [date time]} (format-timestamp (:created-on post))]
     (d/div {:class "post"}
            (d/div {:class "title"}
                   (d/a {:href (post-path {:url (:url post)})}
                        (smarten (:title post))))
            (when-not (nil? (:subtitle post))
              (d/div {:class "subtitle"}
                     (smarten (:subtitle post))))
            (comment
              (when (:tags post)
                (d/div {:class "tags text-right"}
                       (om/build-all tags (:tags post)))))
            (if (nil? (:excerpt post))
              (d/div {:class "body"
                      :dangerouslySetInnerHTML
                      {:__html (js/marked (:body post))}})
              (d/div {:class "body"
                      :dangerouslySetInnerHTML
                      {:__html (js/marked (:excerpt post))}}))
            (d/div {:class "footer"}
                   (d/div {:class "row"}
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (when-not (nil? (:excerpt post))
                                   (d/div {:class "continue"}
                                          (d/a {:href (post-path {:url (:url post)})
                                                :dangerouslySetInnerHTML
                                                {:__html "Continue &raquo;"}}))))
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (d/div {:class "small text-right date"}
                                        "Filed under "
                                        (d/span {:class "topic"
                                                 :href (post-path {:url (:url topic)})}
                                                (smarten (:title topic)))
                                        (d/br)
                                        (str date " @ " time)
                                        (d/br)
                                        (when-let [url (get-in post [:twitter :url])]
                                          (d/a {:href url} "Tweeted!"))))))))))

(defn follow-up-view
  [data owner opts]
  (om/component
   (let [parent (val (find (:posts opts) (get-in data [:parent :_id])))
         topic (val (find (:topics opts) (get-in data [:topic :_id])))
         {:keys [date time]} (format-timestamp (:created-on data))]
     (d/div {:class "follow-up"}
            (comment
              (when (:tags data)
                (d/div {:class "tags text-right"}
                       (om/build-all tags (:tags data)))))
            (d/div {:class "body"
                    :dangerouslySetInnerHTML
                    {:__html (js/marked (:body data))}})
            (d/div {:class "footer"}
                   (d/div {:class "row"}
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (d/div {:class "small text-left stuff"}))
                          (d/div {:class "col-xs-12 col-sm-6"}
                                 (d/div {:class "small text-right date"}
                                        "A follow-up to "
                                        (d/a {:class "parent"
                                              :href (post-path
                                                     {:url (:url parent)})}
                                             (smarten (or (:title parent) "Untitled")))
                                        (d/br)
                                        (str date " @ " time)))))))))

(defn post-dispatch
  [data owner opts]
  (let [data (val data)]
    (case (:type data)
      :post (post-view data owner opts)
      :follow-up (follow-up-view data owner opts))))

(defn home-view
  [data owner]
  (om/component
   (d/div {:id "index"
           :class "container"}
          (d/div {:class "row"}
                 (d/div {:class "col-xs-12 col-sm-3 col-sm-offset-1 banner"}
                        (d/div {:id "banner"
                                :class "page-header"}
                               (d/img {:src "img/notes-narrow.png"
                                       :class "img-responsive"
                                       :alt "Notes"})))
                 (apply d/div {:class "col-xs-12 col-sm-7"}
                        (om/build-all post-dispatch (:posts data) {:opts {:posts (:posts data)
                                                                          :topics (:topics data)}}))))))

(defroute home-path "/"
  []
  (change-view home-view :home-view))
