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
                "http://localhost:3000/"
                "http://whatever.akiva.wtf/"))

(defn uuid?
  "Returns true if x is a valid UUID."
  [x]
  (if (string? x)
    (let [result (re-find
                  #"^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
                  x)]
      (if (nil? result) false true))
    false))

(defn joda-date->java-date
  "Returns a java.util.Date from a Joda-Time."
  [joda-date]
  (to-date joda-date))

(defn create-url-path
  "Generates a URL path part based on an entity's type."
  [entity]
  (case (:kind entity)
    :post "post/"
    :static "page/"
    :topic "topic/"
    ""))

(defn create-url-name
  "Returns a web-friendly url from an entity's title (or 'Untitled')
  if it does not."
  [title]
  (-> (or title "Untitled")
      (string/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
      (string/replace #" " "-")
      string/lower-case))

(defn create-url-date
  "Returns a string representation of an entity's date."
  [date]
  (format-local-time date :date))

(defn create-entity-url
  ([date title]
   (str (create-url-date date) "-" (create-url-name title)))
  ([entity]
   (str (create-url-date (:created-on entity)) "-" (create-url-name (:title entity)))))

(defn format-timestamp
  [timestamp]
  (let [timestamp (if-not (= java.util.Date (type timestamp))
                    (joda-date->java-date timestamp)
                    timestamp)
        ts (from-time-zone (from-date timestamp) (time-zone-for-offset +7))]
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
