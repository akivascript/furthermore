(ns furthermore.entities.pages
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.authors :as authors]
            [furthermore.entities.references :as refs :refer [->ref ->refs]]
            [furthermore.util :as util]))

(defrecord Page
    [_id authors body created-on last-updated
     log? refs tags title tweet? url])

(defn- page
  "Takes a map as input and returns a Page entity."
  [params]
  (let [{:keys [_id authors body created-on last-updated
                log? refs tags title tweet? url]
         :or {_id (mutil/random-uuid)
              authors #{}
              created-on (ltime/local-now)
              log? true
              refs #{}
              tags #{}
              title "Untitled Page"
              tweet? false
              url (util/url-name title)}} params]
    (map->Page {:_id _id
                :authors (->refs authors)
                :body body
                :created-on created-on
                :kind :page
                :last-updated last-updated
                :log? log?
                :refs (->refs refs)
                :tags (->refs tags)
                :title title
                :tweet? tweet?
                :url url})))

(defn page?
  "Returns true if x is a page."
  [x]
  (instance? Page x))

(defn create
  "Returns a page entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (page x)
    :else
    (page {:title x})))

(def get (comp page (partial db/entity :page)))
(def get-all (comp (partial map page) (partial db/entities :page)))

(defn save
  "Commits a page to the datastore."
  [x]
  (db/save x))
