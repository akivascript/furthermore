(ns furthermore.utils
  (:require [clojure.string :as str]

           [clj-time.coerce :refer [to-date]]
           [clj-time.local :refer [format-local-time]]
           [environ.core :refer [env]]))

(def site-url (if (env :dev)
                "http://localhost:3000/#/"
                "http://furthermore-alpha.herokuapp.com/#/"))

(defn convert-to-java-date
  "Returns a java.util.Date from a Joda-Time."
  [joda-date]
  (to-date joda-date))

(defn create-url-name
  "Returns a web-friendly url from an entity's title (or 'Untitled')
  if it does not."
  [entity]
  (-> (or (:title entity) "Untitled")
      (str/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
      (str/replace #" " "-")
      str/lower-case))

(defn create-url-path
  "Generates a URL path part based on an entity's type."
  [entity]
  (case (:type entity)
    :post "post/"
    :static "/"
    :topic "topic/"
    ""))

(defn create-url-date
  "Returns a string representation of an entity's date."
  [entity]
  (let [title (create-url-name entity)
        date (format-local-time (:created-on entity) :date)]
   (str date "-" title)))

(defn get-excerpt
  "Returns an excerpt of a given text with an ellipses added."
  [text length]
  (let [length (dec length)]
    (if (< (count text) length)
      text
      (str (subs text 0 length) "…"))))
