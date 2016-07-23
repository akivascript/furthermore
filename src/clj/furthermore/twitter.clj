(ns furthermore.twitter
  (:require [clojure.string :as cstr]

            [environ.core :refer [env]]
            [twitter.api.restful :as twitter]
            [twitter.oauth :as oauth])
  (:import (twitter.callbacks.protocols
            SyncSingleCallback)))

(def ^:private credentials
  (oauth/make-oauth-creds
   (env :blog-twitter-consumer-key)
   (env :blog-twitter-consumer-secret)
   (env :blog-twitter-access-token)
   (env :blog-twitter-access-token-secret)))

(defn- create-tweet-url
  "Constructs a link to a successfully posted tweet from that
  tweet's response map returned from Twitter."
  [tweet]
  (str "https://twitter.com/"
       (get-in tweet [:user :screen_name])
       "/status/"
       (:id tweet)))

(defn- create-tweet-text
  "Returns a string concatencating some text that, if necessary, is
  shortened (to keep the total character count 140 or less); some dividing
  material; and a URL which will be shortened upon submission to Twitter's API."
  [text url]
  (let [text (cstr/replace text #"\s+$" "")]
    (if (< (count text) 115)
      (str text " • " url)
      (str (subs (cstr/replace text #"\W+$" "") 0 114) "… • " url))))

(defn update-twitter-status
  "Submits a tweet to Twitter for posting returning Twitter's
  response map."
  [text url]
  (let [{:keys [body status]} (twitter/statuses-update :oauth-creds credentials
                                                  :params {:status (create-tweet-text text url)})]
    [status {:twitter {:id (:id body)
                       :url (create-tweet-url body)}}]))
