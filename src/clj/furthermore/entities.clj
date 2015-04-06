(ns furthermore.entities
  (:require [clojure.string :as str]

            [clj-time.local :refer [local-now]]
            [monger.util :refer [random-uuid]]

            [furthermore.repository :refer [add-db-queue! read-entity]]))

(defn add-entities
  [entities]
  (doseq [entity entities] (add-db-queue! entity)))

(defn create-entity
  "Returns an empty default entity."
  [& tags]
  (let [entity {:_id (random-uuid)
              :title "New Entity"
              :authors ["John Doe"]
              :created-on (local-now)
              :last-updated (local-now)
              :log true
              :tags #{}
              :references #{}}]
    (if-not (nil? tags)
      (apply (fn [x] (reduce #(update %1 :tags conj %2) entity x)) tags)
      entity)))

(defn create-link-to
  [entity link-type]
  {:_id (:_id entity)
   :type (keyword link-type)})

(defn add-reference
  [referrer referee link-type]
  {:referrer (update referrer :references conj (create-link-to referee link-type))
   :referee (update referee :references conj (create-link-to referrer link-type))})

(defn get-references
  [entity]
  (mapv #(read-entity {:type (:type %) :_id (:_id %)}) (:references entity)))
