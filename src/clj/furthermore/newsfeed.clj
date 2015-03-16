(ns furthermore.newsfeed
  (:require [clj-rss.core :as rss]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :as t]
            [furthermore.logging :refer :all]
            [furthermore.models.posts :refer :all]
            [furthermore.utils :as utils]))

(def ^:private site-channel
  {:title "Whatever"
   :link "http://localhost:3000"
   :description "My stupid blog"
   :language "en-us"
   :pubDate (java.util.Date.)})

(defn- convert-to-rss-item
  [entry]
  (let [post (get-post {:_id (:ref entry)})
        url (str utils/site-url (utils/create-url-path entry) (:url entry))
        item {:title (t/smarten (:title entry))
              :link url
              :guid url
              :description (-> (str "<![CDATA[ " (:body post) " ]]>")
                               t/smarten
                               md-to-html-string)
              :author (:authors post)
              :pubDate (utils/convert-to-java-date (:date entry))}
        item (if (seq? (:tags post))
               (assoc item :category (:tags post))
               item)]
    item))

(defn- generate-feed
  [items]
  (rss/channel-xml site-channel items))

(defn get-feed
  []
  (->> (get-weblog)
       (filter #(not= :topic (:type %)))
       (take 30)
       (map convert-to-rss-item)
       generate-feed))