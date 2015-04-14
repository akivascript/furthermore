(ns furthermore.utils
  (:require [clojure.string :as str]

           [clj-time.coerce :refer [to-date]]
           [clj-time.local :refer [format-local-time]]
           [environ.core :refer [env]]))

(def site-url (if (env :dev)
                "http://localhost:3000/#/"
                "http://furthermore-alpha.herokuapp.com/#/"))

(defn convert-to-java-date
  [joda-date]
  (to-date joda-date))

(defn create-url-name
  [entity]
  (-> (or (:title entity)
          "Untitled")
      (str/replace #"[\.,-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
      (str/replace #" " "-")
      str/lower-case))

(defn create-url-path
  [entity]
  (case (:type entity)
    :post "post/"
    :static "/"
    :topic "topic/"
    ""))

(defn create-url-date
  [entity]
  (let [title (create-url-name entity)
        date (format-local-time (:created-on entity) :date)]
   (str date "-" title)))

(defn get-excerpt
  [text length]
  (let [length (dec length)]
    (if (< (count text) length)
      text
      (str (subs text 0 length) "…"))))
