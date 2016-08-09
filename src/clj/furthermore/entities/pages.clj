(ns furthermore.entities.pages
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.authors :as authors]
            [furthermore.entities.tags :as tags :refer [->tags]]
            [furthermore.util :as util]))

(defrecord Page
    [_id authors body created-on last-updated
     log? tags title tweet? url])

(defn- page
  [params]
  (let [{:keys [_id authors body created-on last-updated
                log? tags title tweet? url]
         :or {_id (mutil/random-uuid)
              authors ["John Doe"]
              created-on (ltime/local-now)
              log? true
              tags #{}
              title "New Page"
              tweet? false
              url (util/url-name title)}} params]
    (map->Page {:_id _id
                :authors (into [] (map authors/create authors))
                :body body
                :created-on created-on
                :kind :page
                :last-updated last-updated
                :log? log?
                :tags (->tags tags)
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
