(ns furthermore.db.entities.updates
  (:require [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.util :as util]))

(defrecord Update
    [_id action date kind parent ref title topic url])

(defn- update
  "Creates an update entry for a newly added or updated entity."
  [params]
  (let [{:keys [_id action date entity kind parent ref title topic url]
         :or {_id (mutil/random-uuid)
              date (ltime/local-now)
              kind (:kind entity)
              parent (:parent entity)
              ref (:_id entity)
              title (or (:title entity)
                        (util/excerpt (:body entity) 50))
              topic (:topic entity)
              url (:url entity)}} params]
    (map->Update {:_id _id
                  :action (keyword action)
                  :date date
                  :kind kind
                  :parent parent
                  :ref ref
                  :title title
                  :topic topic
                  :url url})))

(defn create
  [entity action]
  (update {:action action :entity entity}))
