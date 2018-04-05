(ns furthermore.entities.links
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.references :as refs :refer [->ref ->refs]]
            [furthermore.util :as util]))

(defrecord Link
    [_id authors body created-on link kind last-updated
     log? parent refs tags title topic tweet? url])

(defn- link
  [params]
  (let [date (ltime/local-now)
        {:keys [_id authors body created-on link kind last-updated
                log? parent refs tags title topic tweet? url]
         :or {_id (mutil/random-uuid)
              created-on date
              log? false
              refs #{}
              tags #{}
              title "New Link"
              tweet? false
              url (util/entity-url date title)}} params]
    (map->Link {:_id _id
                :authors (->refs authors)
                :body body
                :link link
                :kind :link
                :last-updated last-updated
                :log? log?
                :parent (->ref parent)
                :refs (->refs refs)
                :tags (->refs tags)
                :title title
                :topic (->ref topic)
                :tweet? tweet?
                :url url})))

(defn link?
  "Returns true if x is an Link."
  [x]
  (instance? Link x))

(defn create
  "Returns an link entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (link x)
    (string? x) (link {:link x})))

(def get (comp link (partial db/entity :link)))
(def get-all (comp (partial map link) (partial db/entities :link)))
