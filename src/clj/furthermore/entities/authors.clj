(ns furthermore.entities.authors
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.references :as refs :refer [->refs]]))

(defrecord Author
    [_id created-on kind last-updated log? name refs url])

(defn- author
  [params]
  (let [{:keys [_id created-on kind last-updated log? name refs]
         :or {_id (mutil/random-uuid)
              created-on (ltime/local-now)
              log? true
              name "John Doe"
              refs #{}}} params]
    (map->Author {:_id _id
                  :created-on created-on
                  :kind :author
                  :last-updated last-updated
                  :log? log?
                  :name name
                  :refs (->refs refs)})))

(defn author?
  "Returns true if x is an Author."
  [x]
  (instance? Author x))

(defn create
  "Returns an author entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (author x)
    (string? x) (author {:name x})))

(def get (comp author (partial db/entity :author)))
(def get-all (comp (partial map author) (partial db/entities :author)))
