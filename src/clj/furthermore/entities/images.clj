(ns furthermore.entities.images
  (:require [clojure.java.io :as io]

            [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.references :as refs :refer [->refs]]
            [furthermore.util :as util])
  (:import (java.io ByteArrayOutputStream)))

(defrecord Image
    [_id alt-text authors created-on filename image-source
     kind last-updated log? refs tags title tweet?])

(defn- image
  [params]
  (let [{:keys [_id alt-text authors created-on filename image-source
                kind last-updated log? refs tags title tweet?]
         :or {_id (mutil/random-uuid)
              alt-text "Image"
              created-on (ltime/local-now)
              log? false
              refs #{}
              tags #{}
              title "New Image"
              tweet? false}} params]
    (map->Image {:_id _id
                 :alt-text alt-text
                 :authors (->refs authors)
                 :created-on created-on
                 :filename filename
                 :image-source image-source
                 :kind :image
                 :last-updated last-updated
                 :log? log?
                 :refs (->refs refs)
                 :tags (->refs tags)
                 :title title
                 :tweet? tweet?})))

(defn image?
  "Returns true if img is an Image."
  [img]
  (instance? Image img))

(defn- load
  "Loads an image binary from filename into Image entity img."
  [img filename]
  (let [output (ByteArrayOutputStream.)
        input (io/input-stream filename)]
    (io/copy input output)
    (-> img
        (assoc :image-source (.toByteArray output))
        (assoc :filename (util/filename filename)))))

(defn create
  "Returns an image entity."
  [img filename]
  (cond
    (and (map? img)
         (string? filename)) (load (image img) filename)
    :else nil))

(defn save
  "Commits an image entity to the datastore."
  [img]
  (db/save img))

(def get (comp image (partial db/entity :image)))
(def get-all (comp (partial map image) (partial db/entities :image)))
