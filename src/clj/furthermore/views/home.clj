(ns furthermore.views.home
  (:require [furthermore.pages :refer :all]
            [furthermore.models.posts :refer :all]
            [furthermore.models.topics :refer :all]))

(defn render-home
  []
  (let [posts (->> (get-posts)
                   (map prepare-post)
                   (sort-by #(:last-updated %))
                   reverse)]
    (render-page posts "index")))
