(ns furthermore.pages
  (:require [clojure.string :as str]
            [clj-time.local :as l]
            [markdown.core :refer :all]
            [monger.util :refer [random-uuid]]
            [selmer.parser :as slr]
            [typographer.core :as t]))

(slr/set-resource-path! "/Users/akiva/Code/projects/furthermore/src/furthermore/views/")

(defn create-page
  "Returns an empty default page."
  []
  {:id (random-uuid)
   :title "New Page"
   :authors ["John Doe"]
   :created-on (l/local-now)
   :last-updated (l/local-now)
   :tags []
   :references []})

(defn create-link
  [post link-type]
  {:id (:id post)
   :type link-type})

(defn add-reference
  [referrer referee link-type]
  {:referrer (update referrer :references conj (create-link referee link-type))
   :referee (update referee :references conj (create-link referrer link-type))})

(defn convert-to-html
  [text]
  (md-to-html-string text))

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
