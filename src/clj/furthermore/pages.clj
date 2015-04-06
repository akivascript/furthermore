(ns furthermore.pages
  (:require [clojure.string :as str]

            [clj-time.local :refer [local-now]]
            [monger.util :refer [random-uuid]]

            [furthermore.repository :refer [read-entity]]))

(defn create-page
  "Returns an empty default page."
  [& tags]
  (let [page {:_id (random-uuid)
              :title "New Page"
              :authors ["John Doe"]
              :created-on (local-now)
              :last-updated (local-now)
              :log true
              :tags #{}
              :references #{}}]
    (if-not (nil? tags)
      (apply (fn [x] (reduce #(update %1 :tags conj %2) page x)) tags)
      page)))

(defn create-link-to
  [entity link-type]
  {:_id (:_id entity)
   :type (keyword link-type)})

(defn add-reference
  [referrer referee link-type]
  {:referrer (update referrer :references conj (create-link-to referee link-type))
   :referee (update referee :references conj (create-link-to referrer link-type))})

(defn get-references
  [page]
  (mapv #(read-entity {:type (:type %) :_id (:_id %)}) (:references page)))
