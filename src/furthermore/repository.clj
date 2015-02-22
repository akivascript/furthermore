(ns furthermore.repository
  (:require [environ.core :refer [env]]
            [monger.collection :refer [insert insert-batch remove]]
            [monger.core :refer [connect-via-uri]]
            [monger.joda-time :refer :all]))

(def db (atom nil))

(defmulti save-post :type)

(defmethod save-post :post [entity]
  (insert @db "blog" entity))

(defn initialize-db-connection
  []
  (reset! db (:db (connect-via-uri (env :database-uri)))))
