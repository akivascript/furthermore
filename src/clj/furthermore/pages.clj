(ns furthermore.pages
  (:require [clojure.string :as str]
            [clj-time.coerce :as c]
            [clj-time.local :as l]
            [monger.util :refer [random-uuid]]
            [typographer.core :as t]
            [furthermore.repository :refer :all]))

(defn create-page
  "Returns an empty default page."
  [& tags]
  (let [page {:_id (random-uuid)
              :title "New Page"
              :authors ["John Doe"]
              :created-on (l/local-now)
              :last-updated (l/local-now)
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

(defn get-template
  [page]
  (str (name (:type page)) ".html"))

(defn smarten-text
  "Returns a string in which is replaced all relevant punctuation with
  typographic punction (i.e., curly quotes, proper ellipses, et al.)."
  [text]
  (t/smarten text))

(comment
  (defn render-page
    ([page] (let [data {:page page
                        :site site-config}]
              (slr/render-file (get-template page) data)))
    ([page template] (let [data {:page page
                                 :site site-config}]
                       (slr/render-file (str template ".html") data)))))
