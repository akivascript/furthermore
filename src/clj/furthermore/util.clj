(ns furthermore.util
  (:require [clojure.string :as cstr]

            [clj-time.coerce :as coerce]
            [clj-time.core :as ctime]
            [clj-time.format :as tformat]
            [clj-time.local :as local]))

(def site-url "http://localhost:3000")

(declare url-name uuid uuid?)

(defn excerpt
  "Returns an excerpt of a given text with an ellipses added."
  [text length]
  (if (< (count text) length)
    text
    (let [length (dec (or length 140))
          text (subs text 0 length)
          text (cstr/replace text #"\W+$" "")]
      (str text "…"))))

(defn joda-date->java-date
  "Returns a java.util.Date from a joda-date."
  [joda-date]
  (coerce/to-date joda-date))

(defn keywordize
  "Returns a map tranversed for specific keys and turning values into keywords."
  [m]
  (letfn [(kword [acc k] (assoc acc k (into [] (map #(update % :kind keyword) (k acc)))))]
    (reduce (fn [acc k]
              (case k
                (:authors :refs :tags) (kword acc k)
                (:parent :topic) (update-in acc [k :kind] keyword)
                :kind (update acc k keyword)
                acc))
            m
            (keys m))))

(defn parent?
  "Returns true if x is the parent of y."
  [x y]
  (= (:_id x) (get-in y [:parent :_id])))

(defn same?
  "Returns true if the two entities are the same by _id."
  [x y]
  (= (:_id x) (:_id y)))

(defn timestamp
  [timestamp]
  (let [ts (if (= (type timestamp) java.util.Date)
             timestamp
             (joda-date->java-date timestamp))
        ts' (ctime/from-time-zone (coerce/from-date ts) (ctime/time-zone-for-offset +7))]
    {:date (tformat/unparse (tformat/formatter "MMMM d, yyyy") ts')
     :time (tformat/unparse (tformat/formatter "hh:mm a") ts')}))

(defn url-date
  "Returns a string representation of an entity's date."
  [date]
  (local/format-local-time date :date))

(defn entity-url
  ([date title]
   (str (url-date date) "-" (url-name title)))
  ([entity]
   (str (url-date (:created-on entity)) "-" (url-name (:title entity)))))

(defn url-name
  "Returns a web-friendly url from an entity's title (or 'Untitled')
  if it does not."
  [x]
  (cond
    (uuid? (uuid x)) (url-name (apply str (take 4 x)))
    :else
    (-> (or x "untitled")
        (cstr/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
        (cstr/replace #" " "-")
        cstr/lower-case)))

(defn url-path
  "Generates a URL path part based on an entity's type."
  [entity]
  (case (:kind entity)
    :post "/post/"
    :page "/page/"
    :topic "/topic/"
    ""))

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

(defn uuid?
  "Return true if x is a java.util.UUID.

  (Backported from 1.9.0 until prone is fixed)"
  [x]
  (instance? java.util.UUID x))
