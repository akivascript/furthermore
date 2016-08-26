(ns furthermore.entities.images
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.references :as refs :refer [->refs]]
            [furthermore.util :as util]))

(defrecord Image
    [_id authors created-on image-source kind
     last-updated log? refs tags title tweet? url])

(defn- image
  [params]
  (let [date (ltime/local-now)
        {:keys [_id authors created-on image-source kind
                last-updated log? refs tags title tweet? url]
         :or {_id (mutil/random-uuid)
              created-on date
              log? false
              refs #{}
              tags #{}
              title "New Image"
              tweet? false
              url (util/entity-url date title)}} params]
    (map->Image {:_id _id
                 :authors (->refs authors)
                 :image-source image-source
                 :kind :image
                 :log? log?
                 :refs (->refs refs)
                 :tags (->refs tags)
                 :title title
                 :tweet? tweet?
                 :url url})))

(defn image?
  "Returns true if x is an Image."
  [x]
  (instance? Image x))

(defn create
  "Returns an image entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (image x)
    :else
    (image {:image-source x})))

(def get (comp image (partial db/entity :image)))
(def get-all (comp (partial map image) (partial db/entities :image)))
