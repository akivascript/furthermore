(ns furthermore.entities.authors
  (:require [buddy.hashers :as hash]
            [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.references :as refs :refer [->refs]]
            [furthermore.util :as util]))

(defrecord Author
    [_id about created-on facebook kind last-updated
     log? name password refs twitter url user])

(defn- author
  [params]
  (let [{:keys [_id about created-on facebook kind last-updated
                log? name password refs twitter url user]
         :or {_id (mutil/random-uuid)
              created-on (ltime/local-now)
              log? true
              name "John Doe"
              refs #{}}} params]
    (map->Author {:_id _id
                  :about about
                  :created-on created-on
                  :facebook facebook
                  :kind :author
                  :last-updated last-updated
                  :log? log?
                  :name name
                  :password password
                  :refs (->refs refs)
                  :twitter twitter
                  :url url
                  :user user})))

(defn author?
  "Returns true if x is an Author."
  [x]
  (instance? Author x))

(defn create
  "Returns an author entity."
  ([x]
   (cond
     (nil? x) nil
     (map? x) (author x)))
  ([name password user]
   (create {:name name :password (hash/encrypt password) :user user})))

(defn save
  "Saves an author entity to the database."
  [x]
  (db/save x))

(def get (comp author (partial db/entity :author)))
(def get-all (comp (partial map author) (partial db/entities :author)))
