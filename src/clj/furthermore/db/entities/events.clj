(ns furthermore.db.entities.events
  "This is a companion namespace to furthermore.entities.events. This version
  is for use only by the database to create new events."
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.util :as util]))

(defrecord Event
    [_id action date entity kind parent title topic url])

(defn- event
  "Creates an event entry for a newly added or updated entity."
  [params]
  (let [{:keys [_id action date entity kind parent title topic url]
         :or {_id (mutil/random-uuid)
              action :new
              date (ltime/local-now)
              parent (:parent entity)
              title (or (:title entity)
                        (util/excerpt (:body entity) 50))
              topic (:topic entity)
              url (:url entity)}} params]
    (map->Event {:_id _id
                 :action (keyword action)
                 :date date
                 :kind :update
                 :parent parent
                 :title title
                 :topic topic
                 :url url})))

(defn create
  "Creates a new event entity."
  [entity action]
  (event {:action action :entity entity}))
