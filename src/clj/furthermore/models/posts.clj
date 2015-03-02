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
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)
      (assoc :opened false)))

(defn get-post
  [id & prepare]
  (let [post (read-entity "posts" {:_id id})]
    (if-not (or prepare
                (= prepare :false))
      (prepare-post post)
      post)))

(defn get-posts
  ([]
   (let [posts (read-entities "posts"
                              (array-map :last-updated -1)
                              10)]
      (->> posts
           (map prepare-post)
           vec)))
  ([posts & prepare]
   (let [posts (map #(get-post (:_id %)) posts)]
     (if-not (or prepare
                 (= prepare :false))
       (->> posts
            (sort-by #(:last-updated %))
            reverse
            vec)
       posts))))
