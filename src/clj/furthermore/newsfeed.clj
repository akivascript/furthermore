(ns furthermore.newsfeed
  (:require [clj-rss.core :refer [channel-xml]]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.logging :refer [get-weblog]]
            [furthermore.models.posts :refer [get-post]]
            [furthermore.utils :refer [site-url create-url-path convert-to-java-date]]))

(def ^:private site-channel
  {:title "Whatever"
   :link "http://localhost:3000"
   :description "My stupid blog"
   :language "en-us"
   :pubDate (java.util.Date.)})

(defn- convert-to-rss-item
  [entry]
  (let [post (get-post {:_id (:ref entry)})
        url (str site-url (create-url-path entry) (:url entry))
        item {:title (smarten (:title entry))
              :link url
              :guid url
              :description (-> (str "<![CDATA[ " (:body post) " ]]>")
                               smarten
                               md-to-html-string)
              :author (:authors post)
              :pubDate (convert-to-java-date (:date entry))}
        item (if (seq? (:tags post))
               (assoc item :category (:tags post))
               item)]
    item))

(defn- generate-feed
  [items]
  (channel-xml site-channel items))

(defn get-feed
  []
  (->> get-weblog
       (filter #(not= :topic (:type %)))
       (take 30)
       (map convert-to-rss-item)
       generate-feed))
