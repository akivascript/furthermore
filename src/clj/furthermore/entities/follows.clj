(ns furthermore.entities.follows
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.common :as common]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.references :as refs :refer [->ref ->refs]]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]))

(declare parent-url)

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
              topic (:topic parent)
              tweet? false
              url (str (parent-url parent) "#" (util/url-name _id))}} params]
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
                  :topic (->ref topic)
                  :tweet? tweet?
                  :url url})))

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

(defn parent
  [follow]
  (when (follow? follow)
    (posts/get :_id (get-in follow [:parent :_id]))))

(defn topic
  [follow]
  (when (follow? follow)
    (topics/get :_id (get-in follow [:topic :_id]))))

(defn parent-url
  [follow]
  (:url (parent follow)))

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
