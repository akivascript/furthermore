(ns furthermore.models.posts
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]
            [furthermore.repository :refer :all]))

(defn create-post
  "Returns an empty default post. All posts must have a reference;
  they cannot exist without context and thus cannot be orphaned. An
  orphaned post would never be displayed."
  [parent & {:keys [title] :or {title "New Post"}}]
  (let [post (-> (create-page)
                 (assoc :type :post)
                 (assoc :title title)
                 (assoc :body "What's up?")
                 (assoc :parent (create-link parent (:type parent))))
        parent (update parent :references conj (create-link post :post))]
    (add-db-queue post)
    (add-db-queue parent)
    {:post post :parent parent}))

(defn prepare-post
  "Typogrifies and processes Markdown for all values in a post
  in preparation for publication as HTML.

  This must happen each time a post is displayed; posts are stored
  in the database in their original Markdown formats."
  [post]
    (let [xform-text (comp smarten-text convert-to-html)]
      post (-> post
               (update :body xform-text)
               (update :title smarten-text))))

(defn render-post
  "Takes a post and passes it through a template determined by
  post :type. This HTML string is saved to disk in a directory
  determined by the post's date and title as part of the site
  compile."
  [post]
  (let [html (-> post prepare-post render-page)]
     html))
