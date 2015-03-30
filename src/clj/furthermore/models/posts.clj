(ns furthermore.models.posts
  (:require [clj-time.local :as l]
            [clojure.string :as str]
            [furthermore.logging :refer :all]
            [furthermore.pages :refer :all]
            [furthermore.repository :refer :all]
            [furthermore.utils :refer :all]))

(defn create-post
  [& {:keys [authors body excerpt parent subtitle tags title topic]}]
  (let [post (-> (create-page tags)
                 (assoc :type :post)
                 (assoc :title title)
                 (assoc :subtitle subtitle)
                 (assoc :body (or body "Somebody forgot to actually write the post."))
                 (assoc :excerpt excerpt)
                 (assoc :authors (or authors ["John Doe"]))
                 (assoc :parent (create-link-to parent (:type parent)))
                 (assoc :topic (create-link-to topic (:type topic))))
        parent (update parent :references conj (create-link-to post :post))]
    (if-not (= (:_id parent) (:_id topic))
      {:post post :parent parent :topic topic}
      {:post post :parent parent})))

(defn create-follow-up
  [parent & {:keys [authors body tags]}]
  (let [follow-up (-> (create-page tags)
                      (assoc :type :follow-up)
                      (assoc :authors (or authors ["John Doe"]))
                      (assoc :body (or body "Somebody forgot to actually write the follow-up."))
                      (assoc :parent (create-link-to parent (:type parent)))
                      (assoc :topic (:topic parent)))
        parent (update parent :references conj (create-link-to follow-up :follow-up))]
    {:post follow-up :parent parent}))

(defn prepare-post
  [post]
  (-> post
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)
      (update :type keyword)
      (assoc :opened false)))

(defn get-post
  [criterion & {:keys [prepare] :or {prepare true}}]
  (let [post (read-entity :post criterion)]
    (if prepare
      (prepare-post post)
      post)))

(defn get-posts
  ([]
   (let [posts (read-entities :post
                              (array-map :created-on -1)
                              10)]
      (->> posts
           (map prepare-post)
           vec)))
  ([posts & {:keys [prepare] :or {prepare true}}]
   (let [posts (map #(get-post {:_id (:_id %)}) posts)]
     (if prepare
       (->> posts
            (sort-by #(:last-updated %))
            reverse
            vec)
       posts))))

(defn get-post-references
  [id]
  (let [post (get-post {:_id id})]
    (->> (get-posts (:references post))
         (sort-by #(:created-on %))
         vec)))
