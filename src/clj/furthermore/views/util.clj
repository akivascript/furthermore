(ns furthermore.views.util
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [typographer.core :as typo]

            [furthermore.entities.posts :as posts]
            [furthermore.entities.tags :as tags]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]))

(defn- link
  [post content]
  [:a {:href (str "/posts/" (:url post))}
   content])

(defn continue
  [post]
  (when-not (nil? (:excerpt post))
    [:div.small
     (link post "Continue &raquo;")]))

(defn prepare-text
  [fn entity]
  (case (:kind entity)
    (:follow :post) (-> entity
                        (update :body fn)
                        (update :excerpt fn))
    (:page :topic) (update entity :body fn)
    entity))

(defn subtitle
  [post]
  (when-let [subtitle (:subtitle post)]
    [:div.subtitle
     (typo/smarten subtitle)]))

(defn tag-icon
  [c]
  (cond
    (= c 1) [:i.fa.fa-tag {:aria-hidden "true"}]
    (> c 1) [:i.fa.fa-tags {:aria-hidden "true"}]))

(defn list-tags
  [tags]
  (apply str (interpose ", " (map #(html
                                    (link-to
                                     (str "/tags/" (:url %))
                                     (:title %)))
                                  (sort (map tags/get tags))))))

(defn tags
  [post]
  (when-let [tags (:tags post)]
    [:div.tags
     (list-tags tags) [:span " "] (tag-icon (count tags))]))

(defn text
  [post]
  (if (nil? (:excerpt post))
    [:div.body (:body post)]
    [:div.body (:excerpt post)]))

(defn title
  [post]
  (when-let [title (:title post)]
    [:div.title
     (link post (typo/smarten title))]))

(defn twitter
  [post]
  (when-let [url (get-in post [:twitter :url])]
    [:span.twitter
     (link-to {:class "whatever-twitter"
               :target "_blank"} url)]))

(def content (comp (juxt title subtitle text)))
