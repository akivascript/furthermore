(ns furthermore.pages
  (:require [clojure.string :as str]
            [clj-time.local :as l]
            [markdown.core :refer :all]
            [selmer.parser :as slr]
            [typographer.core :as t]))

(slr/set-resource-path! "/Users/akiva/Code/projects/furthermore/src/furthermore/views/")

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
