(ns furthermore.utils
  (:require [clojure.string :as cstr]

            [clj-time.coerce :as coerce]
            [clj-time.core :as ctime]
            [clj-time.format :as tformat]
            [clj-time.local :as local]
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
  (coerce/to-date joda-date))

(defn create-url-path
  "Generates a URL path part based on an entity's type."
  [entity]
  (case (:kind entity)
    :post "post/"
    :page "page/"
    :topic "topic/"
    ""))

(declare uuid)

(defn create-url-name
  "Returns a web-friendly url from an entity's title (or 'Untitled')
  if it does not."
  [x]
  (cond
    (uuid? (uuid x)) (create-url-name (apply str (take 4 x)))
    :else
    (-> (or x "Untitled")
        (cstr/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
        (cstr/replace #" " "-")
        cstr/lower-case)))

(defn create-url-date
  "Returns a string representation of an entity's date."
  [date]
  (local/format-local-time date :date))

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
        ts (ctime/from-time-zone (coerce/from-date timestamp) (ctime/time-zone-for-offset +7))]
    {:date (tformat/unparse (tformat/formatter "MMMM d, yyyy") ts)
     :time (tformat/unparse (tformat/formatter "hh:mm a") ts)}))

(defn get-excerpt
  "Returns an excerpt of a given text with an ellipses added."
  [text length]
  (if (< (count text) length)
    text
    (let [length (dec (or length 140))
          text (subs text 0 length)
          text (cstr/replace text #"\W+$" "")]
      (str text "…"))))

(defn uuid
  "If given a string, produces a Java UUID object from it; otherwise
  randomly generates a Java UUID randomly."
  ([]
   (. java.util.UUID randomUUID))
  ([s]
   (when (string? s)
     (try
       (. java.util.UUID fromString s)
       (catch IllegalArgumentException e nil)))))
