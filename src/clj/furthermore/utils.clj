(ns furthermore.utils
  (:require [clojure.string :as string]

           [clj-time.coerce :refer [from-date to-date]]
           [clj-time.core :refer [from-time-zone
                                  time-zone-for-offset
                                  to-time-zone]]
           [clj-time.format :refer [formatter unparse]]
           [clj-time.local :refer [format-local-time]]
           [environ.core :refer [env]]))

(def site-url (if (env :dev)
                "http://localhost:3000/#/"
                "http://furthermore-test.herokuapp.com/"))

(defn convert-to-java-date
  "Returns a java.util.Date from a Joda-Time."
  [joda-date]
  (to-date joda-date))

(defn create-url-name
  "Returns a web-friendly url from an entity's title (or 'Untitled')
  if it does not."
  [entity]
  (-> (or (:title entity) "Untitled")
      (string/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
      (string/replace #" " "-")
      string/lower-case))

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
  (format-local-time (:created-on entity) :date))

(defn create-entity-url
  [entity]
  (str (create-url-date entity) "-" (create-url-name entity)))

(defn format-timestamp
  [timestamp]
  (let [ts (from-time-zone (from-date timestamp) (time-zone-for-offset +7))]
    {:date (unparse (formatter "MMMM d, yyyy") ts)
     :time (unparse (formatter "hh:mm a") ts)}))

(defn get-excerpt
  "Returns an excerpt of a given text with an ellipses added."
  [text length]
  (if (< (count text) length)
    text
    (let [length (dec (or length 140))
          text (subs text 0 length)
          text (string/replace text #"\W+$" "")]
      (str text "…"))))
