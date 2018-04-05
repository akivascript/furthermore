(ns furthermore.views.util
  (:require [clojure.java.shell :as shell]

            [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.authors :as authors]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.tags :as tags]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]))

(defn authors
  [entity]
  (let [authors (map authors/get (:authors entity))]
    (apply str (interpose ", " (map #(html (link-to
                                            (str "https://twitter.com/"
                                                 (:twitter %))
                                            (:twitter %))) authors)))))

(defn- link
  [post content]
  [:a {:href (str "/posts/" (:url post))}
   content])

(defn continue
  [post]
  (when-not (nil? (:excerpt post))
    [:div.small
     (link post "Continue &raquo;")]))

(defn mmd->html
  [text]
  (if (empty? text)
    text
    (:out (shell/sh "kramdown" :in text))))

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
                                  (sort-by :title (map tags/get tags))))))

(defn subtitle
  [post]
  (when-let [subtitle (:subtitle post)]
    [:div.subtitle
     (smarten subtitle)]))

(defn tags
  [post]
  (when-let [tags (:tags post)]
    [:div.tags
     (list-tags tags) [:span " "] (tag-icon (count tags))]))

(defn text
  [post]
  (if (nil? (:excerpt post))
    [:div.body (mmd->html (:body post))]
    [:div.body (mmd->html (:excerpt post))]))

(defn title
  [post]
  (when-let [title (:title post)]
    [:div.title
     (link post (smarten title))]))

(defn twitter
  [post]
  (when-let [url (get-in post [:twitter :url])]
    [:span.twitter
     (link-to {:class "whatever-twitter"
               :target "_blank"} url)]))

(def content (comp (juxt title subtitle text)))
