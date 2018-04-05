(ns furthermore.entities.topics
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.common :as common]
            [furthermore.entities.references :as refs :refer [->refs]]
            [furthermore.util :as util]))

(defrecord Topic
    [_id authors body created-on kind last-updated
     log? tags title tweet? refs url])

(defn- topic
  [params]
  (let [{:keys [_id authors body created-on last-updated
                log? tags title tweet? refs url]
         :or {_id (mutil/random-uuid)
              created-on (ltime/local-now)
              log? true
              refs #{}
              tags #{}
              title "New Topic"
              tweet? false
              url (util/url-name title)}} params]
    (map->Topic {:_id _id
                 :authors (->refs authors)
                 :created-on created-on
                 :body body
                 :kind :topic
                 :last-updated last-updated
                 :log? log?
                 :refs (->refs refs)
                 :tags (->refs tags)
                 :title title
                 :tweet? tweet?
                 :url url})))

(defn topic?
  [x]
  (instance? Topic x))

(defn create
  "Returns a topic entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (topic x)
    :else
    (topic {:title x})))

(defn save
  "Saves a topic (with links with its authors and tags)."
  [x]
  (db/save x))

(def get (comp topic (partial db/entity :topic)))
(def get-all (comp (partial map topic) (partial db/entities :topic)))

(defn refs-of
  "Returns a lazy sequence of a topic's refs filtered by kind."
  [kind topic]
  (common/refs-of kind topic))

(defn sorted-by
  "Returns sequence of all topics sorted by sort-key."
  ([sort-key]
   (sorted-by sort-key (get-all)))
  ([sort-key coll]
   (common/sorted-by sort-key coll)))
