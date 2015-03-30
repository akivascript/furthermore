(ns furthermore.twitter
  (:require [clojure.string :as str]
            [environ.core :refer [env]]
            [twitter.api.restful :refer [statuses-update]]
            [twitter.oauth :refer [make-oauth-creds]])
  (:import (twitter.callbacks.protocols
            SyncSingleCallback)))

(def ^:private credentials
  (make-oauth-creds
    (env :twitter-consumer-key)
    (env :twitter-consumer-secret)
    (env :twitter-access-token)
    (env :twitter-access-token-secret)))

(defn create-twitter-post
  [text url]
  (let [text (str/replace text #"\s+$" "")]
    (if (< (count text) 115)
      (str text " • " url)
      (str (subs (str/replace text #"\W+$" "") 0 114) "… • " url))))

(defn update-twitter-status
  [status-text]
  (statuses-update :oauth-creds credentials :params {:status status-text}))
