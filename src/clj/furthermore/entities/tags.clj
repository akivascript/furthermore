(ns furthermore.entities.tags
  (:require [clojure.string :as cstr]

            [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.common :as common]
            [furthermore.entities.references :as refs :refer [->refs]]
            [furthermore.util :as util]))

(declare create)

(defrecord Tag
    [_id created-on kind last-updated log? title refs url])

(defprotocol Tags
  (->tag [tag])
  (->tags [tags]))

(extend-protocol Tags
  furthermore.entities.tags.Tag
  (->tag [tag] tag)

  clojure.lang.PersistentArrayMap
  (->tags [tags] (into #{} (map create tags)))

  clojure.lang.PersistentHashSet
  (->tags [tags] (into #{} (map create tags)))

  clojure.lang.PersistentVector
  (->tags [tags] (into #{} (map create tags)))

  java.lang.String
  (->tag
    [tag]
    (into #{} (map cstr/trim (cstr/split tag #";|,")))))

(defn- tag
  [params]
  (let [{:keys [_id created-on last-updated log? title refs url]
         :or {_id (mutil/random-uuid)
              created-on (ltime/local-now)
              log? true
              title "Miscellania"
              refs #{}
              url (util/url-name title)}} params]
    (map->Tag {:_id _id
               :created-on created-on
               :kind :tag
               :last-updated last-updated
               :log? log?
               :title title
               :refs (->refs refs)
               :url url})))

(defn tag?
  "Returns true if x is a tag."
  [x]
  (instance? Tag x))

(defn create
  "Returns a tag entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (tag x)
    :else
    (tag {:title x})))

(defn save
  "Saves a tag to the the database."
  [x]
  (db/save x))

(def get (comp tag (partial db/entity :tag)))
(def get-all (comp (partial map tag) (partial db/entities :tag)))

(defn refs-of
  "Returns a lazy sequence of a tag's refs filtered by kind."
  [kind tag]
  (common/refs-of kind tag))
