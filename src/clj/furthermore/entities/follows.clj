(ns furthermore.entities.follows
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.common :as common]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.references :as refs :refer [->ref ->refs]]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]))

(defrecord Follow
    [_id authors body created-on excerpt kind
     last-updated log? parent refs tags topic tweet? url])

(defn- follow
  "Takes a map as input and requires a parent record. Produces a Follow record."
  [params]
  (let [{:keys [_id authors body created-on excerpt last-updated
                log? parent refs tags topic tweet? url]
         :or {_id (mutil/random-uuid)
              created-on (ltime/local-now)
              log? true
              refs #{}
              tags #{}
              tweet? false}} params
        parent' (posts/get (->ref parent))]
    (println parent')
    (map->Follow {:_id _id
                  :authors (->refs authors)
                  :body body
                  :created-on created-on
                  :excerpt excerpt
                  :kind :follow
                  :last-updated last-updated
                  :log? log?
                  :parent (->ref parent)
                  :refs (->refs refs)
                  :tags (->refs tags)
                  :topic (->ref (:topic parent'))
                  :tweet? tweet?
                  :url (str (:url parent') "#" (util/url-name _id))})))

(defn follow?
  "Returns true if x is a follow."
  [x]
  (instance? Follow x))

(defn create
  "Returns a follow entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (follow x)))

(defn save
  "Saves a follow-up (with links to its authors, tags, topic and parent)."
  [x]
  (db/save x))

(def get (comp follow (partial db/entity :follow)))
(def get-all (comp (partial map follow) (partial db/entities :follow)))

(defn sorted-by
  "Returns sequence of all follows sorted by sort-key."
  ([sort-key]
   (sorted-by sort-key (get-all)))
  ([sort-key coll]
   (common/sorted-by sort-key coll)))

(defn filtered-by
  "Returns a lazy sequence of entries filtered on k by sequence s of
  appropriate values."
  [k s]
  (map (partial get k) s))
