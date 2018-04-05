(ns furthermore.db.entities.events
  "This is a companion namespace to furthermore.entities.events. This version
  is for use only by the database to create new events."
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.util :as util]
            [furthermore.entities.references :as refs :refer [->ref]]))

(defrecord Event
    [_id action date entity kind parent title topic url])

(defn- event
  "Creates an event entry for a newly added or updated entity."
  [params]
  (let [{:keys [_id action date entity kind parent title topic url]} params]
    (map->Event {:_id (mutil/random-uuid)
                 :action (keyword action)
                 :date (ltime/local-now)
                 :entity (->ref entity)
                 :kind :event
                 :parent (when-let [parent (:parent entity)]
                           (->ref parent))
                 :title (or (:name entity)
                            (:title entity)
                            (:body entity)
                            "Untitled")
                 :topic (when-let [topic (:topic entity)]
                          (->ref topic))
                 :url (:url entity)})))

(defn create
  "Creates a new event entity."
  [action entity]
  (event {:action action :entity entity}))
