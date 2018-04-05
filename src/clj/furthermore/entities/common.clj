(ns furthermore.entities.common
  (:require [furthermore.db.core :as db]
            [furthermore.entities.references :as refs]))

(defn refs-of
  "Returns a lazy sequence of refs filtered by kind from an entity."
  [kind entity]
  (filter #(= (:kind %) kind) (:refs entity)))

(defn sorted-by
  "Returns sequence of all entries sorted by sort-key from a coll."
  [sort-key coll]
  (sort-by sort-key coll))

(defn get
  [entity]
  (db/entity entity))
