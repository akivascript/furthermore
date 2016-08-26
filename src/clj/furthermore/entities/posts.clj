(ns furthermore.entities.posts
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.common :as common]
            [furthermore.entities.references :as refs :refer [->ref ->refs]]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]))

(defrecord Post
    [_id authors body created-on excerpt kind last-updated
     log? parent refs subtitle tags title topic tweet? url])

(defn- post
  "Takes a map as input and requires both parent and topic records. Produces
  a Post record."
  [params]
  (let [date (ltime/local-now)
        {:keys [_id authors body created-on excerpt last-updated
                log? parent subtitle refs tags title topic tweet? url]
         :or {_id (mutil/random-uuid)
              created-on date
              log? true
              refs #{}
              tags #{}
              title "New Post"
              topic parent
              tweet? false
              url (util/entity-url date title)}} params]
    (map->Post {:_id _id
                :authors (->refs authors)
                :body body
                :created-on created-on
                :excerpt excerpt
                :kind :post
                :last-updated last-updated
                :log? log?
                :parent (->ref parent)
                :refs (->refs refs)
                :subtitle subtitle
                :tags (->refs tags)
                :title title
                :topic (->ref topic)
                :tweet? tweet?
                :url url})))

(defn post?
  "Returns true if x is a post."
  [x]
  (instance? Post x))

(defn create
  "Returns a post entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (post x)
    :else
    (post {:title x})))

(defn save
  "Saves a post (with links with its parent/topic, authors, and tags)."
  [x]
  (db/save x))

(defn parent
  [post]
  (when (post? post)
    (let [[_id kind] (:parent post)]
      (condp = kind
        :topic (topics/get :_id _id)
        :post (get :_id _id)))))

(defn topic
  [post]
  (when (post? post)
    (topics/get :_id (get-in post [:topic :_id]))))

(def get (comp post (partial db/entity :post)))
(def get-all (comp (partial map post) (partial db/entities :post)))

(defn refs-of
  "Returns a lazy sequence of a post's refs filtered by kind."
  [kind post]
  (common/refs-of kind post))

(defn sorted-by
  "Returns sequence of all posts sorted by sort-key."
  ([sort-key]
   (sorted-by sort-key (get-all)))
  ([sort-key coll]
   (common/sorted-by sort-key coll)))

(defn filtered-by
  "Returns a lazy sequence of entries filtered on k by sequence s of
  appropriate values."
  [k s]
  (map (partial get k) s))
