(ns furthermore.views.topics
  (:require [furthermore.pages :refer :all]
            [furthermore.models.posts :refer :all]
            [furthermore.models.topics :refer :all]))

(defn typogrify-topic
  "Typogrifies and processes Markdown for all values in a post
  in preparation for publication as HTML.

  This must happen each time a post is displayed; posts are stored
  in the database in their original Markdown formats."
  [post]
  (-> post
      (update :title smarten-text)))

(defn prepare-topic
  "Takes a post and passes it through a template determined by
  post :type. This HTML string is saved to disk in a directory
  determined by the post's date and title as part of the site
  compile."
  [topic]
  (let [topic (-> topic typogrify-topic)]
    (->> (get-posts (:references topic))
         (map prepare-post)
         (assoc topic :references))))

(defn render-topic
  [topic]
  (->> topic
       (map prepare-topic)
       (sort-by #(:title %)))
    (render-page topic))

(defn render-topics
  []
  (let [topics (->> (get-topics)
                    (map prepare-topic)
                    (sort-by #(:title %)))]
    (render-page topics "topics")))
