(ns furthermore.pages
  (:require [clojure.string :as str]
            [clj-time.local :as l]
            [markdown.core :refer :all]
            [monger.util :refer [random-uuid]]
            [selmer.parser :as slr]
            [typographer.core :as t]
            [furthermore.repository :refer :all]))

(slr/set-resource-path! "/Users/akiva/Code/projects/furthermore/src/furthermore/views/")

(defn create-page
  "Returns an empty default page."
  [& tags]
  (let [page {:_id (random-uuid)
              :title "New Page"
              :authors ["John Doe"]
              :created-on (l/local-now)
              :last-updated (l/local-now)
              :tags #{}
              :references #{}}]
    (if-not (nil? tags)
      (apply (fn [x] (reduce #(update %1 :tags conj %2) page x)) tags)
      page)))

(defn create-link
  [entity link-type]
  {:_id (:_id entity)
   :type (keyword link-type)})

(defn add-reference
  [referrer referee link-type]
  {:referrer (update referrer :references conj (create-link referee link-type))
   :referee (update referee :references conj (create-link referrer link-type))})

(defn convert-to-html
  [text]
  (md-to-html-string text))

(defn get-references
  [page]
  (map #(read-entity {:type (:type %) :_id (:_id %)}) (:references page)))

(defn get-template
  [page]
  (str (name (:type page)) ".html"))
  
(defn render-page
  [page]
  (let [data {:page page}]
    (slr/render-file (get-template page) data)))

(defn smarten-text
  "Returns a string in which is replaced all relevant punctuation with
  typographic punction (i.e., curly quotes, proper ellipses, et al.)."
  [text]
  (t/smarten text))
