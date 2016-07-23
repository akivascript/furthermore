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
                "http://localhost:5000/"
                "http://whatever.akiva.wtf/"))

(defn keywordize
  "Returns a map with a particular key's value as a
  keyword where ks is a sequence of keys. Returns an
  unaltered map if the key is not present."
  [m & ks]
  (let [ks (if (vector? (first ks)) (first ks) (vec ks))
        k (get-in m ks)]
    (if (or (nil? k)
            (map? k))
      m
      (update-in m ks keyword))))

(defn joda-date->java-date
  "Returns a java.util.Date from a Joda-Time."
  [joda-date]
  (to-date joda-date))

(defn create-url-path
  "Generates a URL path part based on an entity's type."
  [entity]
  (case (:kind entity)
    :post "post/"
    :page "page/"
    :topic "topic/"
    ""))

(defn create-url-name
  "Returns a web-friendly url from an entity's title (or 'Untitled')
  if it does not."
  [x]
  (cond
    (uuid? x) (create-url-name (apply str (take 4 x)))
    :else
    (-> (or x "Untitled")
        (string/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
        (string/replace #" " "-")
        string/lower-case)))

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
