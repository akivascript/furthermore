(ns furthermore.entities.events
  "This is a companion namespace to furthermore.db.entities.events. This
  namespace is for the reading of events to be displayed on the History page."
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.db.core :as db]
            [furthermore.entities.references :as refs :refer [->ref]]
            [furthermore.util :as util]))

(defrecord Event
    [_id action date entity kind parent title topic url])

(defn- event
  "Creates an event entry for a newly added or updated entity."
  [params]
  (let [{:keys [_id action date entity kind parent title topic url]} params]
    (map->Event {:_id _id
                 :action (keyword action)
                 :date date
                 :entity (->ref entity)
                 :kind (keyword kind)
                 :parent (when-not (nil? parent) (->ref parent))
                 :title title
                 :topic (when-not (nil? topic) (->ref topic))
                 :url url})))

(def get (comp event (partial db/entity :event)))
(def get-all (comp (partial map event) (partial db/entities :event)))
