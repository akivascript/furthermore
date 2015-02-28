(ns furthermore.models.posts
  (:require [clj-time.local :as l]
            [furthermore.pages :refer :all]
            [furthermore.repository :refer :all]))

(defn create-post
  [parent topic & {:keys [title tags] :or {title "New Post"}}]
  (let [post (-> (create-page tags)
                 (assoc :type :post)
                 (assoc :title title)
                 (assoc :body "What's up?")
                 (assoc :parent (create-link parent (:type parent)))
                 (assoc :topic (create-link topic (:type topic))))
        parent (-> (get-db-queue (:_id parent))
                   (update :references conj (create-link post :post)))]
    (add-db-queue post)
    (add-db-queue parent)
    {:post post :parent parent}))

(defn prepare-post
  [post]
  (-> post
      (update :body (comp smarten-text convert-to-html))
      (update :title smarten-text)
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)))

(defn get-post
  [id]
  (->> (read-entity {:type :post :_id id})
       prepare-post))

(defn get-posts
  [posts]
  (->> (map #(get-post (:_id %)) posts)
       (sort-by #(:last-updated %))
       reverse
       vec))
