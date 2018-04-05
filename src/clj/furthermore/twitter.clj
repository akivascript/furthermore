(ns furthermore.twitter
  (:require [clojure.string :as cstr]

            [twitter.api.restful :as twitter]
            [twitter.oauth :as oauth])
  (:import (twitter.callbacks.protocols
            SyncSingleCallback)))

(def ^:private credentials nil)

(defn- url
  "Constructs a link to a successfully posted tweet."
  [tweet]
  (str "https://twitter.com/"
       (get-in tweet [:user :screen_name])
       "/status/"
       (:id tweet)))

(defn- tweet-text
  "Returns a string concatencatng text that is shortened
  to 140 characters or less followed by a divider and a
  URL."
  [text url]
  (let [text (cstr/replace text #"\s+$" "")]
    (if (< (count text) 115)
      (str text " • " url)
      (str (subs (cstr/replace text #"\W+$" "") 0 114) "… • " url))))

(defn update
  "Submits a tweet to Twitter, returning Twitter's response map."
  [text url]
  (let [{:keys [body status]} (twitter/statuses-update
                               :oauth-credts credentials
                               :params {:status (tweet-text text url)})]
    [status {:twitter {:id (:id body)
                       :url (url body)}}]))
