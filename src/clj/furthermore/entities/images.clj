(ns furthermore.entities.images
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.references :as refs :refer [->refs]]
            [furthermore.util :as util]))

(defrecord Image
    [_id alt-text authors created-on filename image-source
     kind last-updated log? refs tags title tweet? url])

(defn- image
  [params]
  (let [date (ltime/local-now)
        {:keys [_id alt-text authors created-on filename image-source
                kind last-updated log? refs tags title tweet? url]
         :or {_id (mutil/random-uuid)
              alt-text "image"
              created-on date
              log? false
              refs #{}
              tags #{}
              title "New Image"
              tweet? false
              url (util/entity-url title)}} params]
    (map->Image {:_id _id
                 :alt-text alt-text
                 :authors (->refs authors)
                 :filename filename
                 :image-source image-source
                 :kind :image
                 :log? log?
                 :refs (->refs refs)
                 :tags (->refs tags)
                 :title title
                 :tweet? tweet?
                 :url url})))

(defn image?
  "Returns true if img is an Image."
  [img]
  (instance? Image img))

(defn create
  "Returns an image entity."
  [img]
  (cond
    (nil? img) nil
    (map? img) (image img)))

(defn save
  "Commits an image entity to the datastore."
  [img]
  (db/save img))

(def get (comp image (partial db/entity :image)))
(def get-all (comp (partial map image) (partial db/entities :image)))
