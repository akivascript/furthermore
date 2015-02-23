(ns furthermore.models.topics
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]
            [furthermore.models.posts :refer :all]
            [furthermore.repository :refer :all]))

(defn create-topic
  [title & tags]
  (let [topic (as-> (if-not (nil? tags)
                      (create-page tags)
                      (create-page)) t
                (assoc t :type :topic)
                (assoc t :title title))]
    (add-db-queue topic)
    topic))

(defn get-topics
  []
  (read-all "topics"))

(defn prepare-topic
  "Typogrifies and processes Markdown for all values in a post
  in preparation for publication as HTML.

  This must happen each time a post is displayed; posts are stored
  in the database in their original Markdown formats."
  [post]
  (-> post
      (update :title smarten-text)))

(defn render-topic
  "Takes a post and passes it through a template determined by
  post :type. This HTML string is saved to disk in a directory
  determined by the post's date and title as part of the site
  compile."
  [topic]
  (let [topic (-> topic prepare-topic)
        topic (->> (get-posts (:references topic))
                   (map prepare-post)
                   (assoc topic :references))]
    (render-page topic)))
