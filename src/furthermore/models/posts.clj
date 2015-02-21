(ns furthermore.models.posts
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]))

(defn create-post
  "Returns an empty default post."
  []
  {:type :post
   :id 1
   :title "New Post"
   :authors ["John Doe"]
   :created-on (l/local-now)
   :last-updated (l/local-now)
   :tags []
   :references '()
   :body "What's up?"})

(defn prepare-post
  "Transforms and/or 'typogrifies' all relevant values in a post for
  publication as HTML."
  [post]
  (letfn [(typogrify [p ks]
            (if-not (nil? (get-in p ks))
               (update-in p ks smarten-text)
               p))]
    (let [xform-text (comp smarten-text convert-to-html)]
      post (-> post
               (update :body xform-text)
               (update :title smarten-text)
               (typogrify [:next :title])
               (typogrify [:previous :title])))))

(defn render-post
  "Takes a post and passes it through a template determined by
  post :type. This HTML string is saved to disk in a directory
  determined by the post's date and title as part of the site
  compile."
  [post]
  (let [html (-> post prepare-post render-page)]
     html))
