(ns furthermore.db.queue)

(defonce ^:private queue (atom {}))

(defn process
  [procfn]
  (doseq [entity (vals @queue)]
    (procfn entity)))

(defn add
  [entity]
  (swap! queue assoc (:_id entity) entity))

(defn clear
  []
  (reset! queue {}))

(defn entity
  [id]
  (find @queue id))

(defn list
  []
  @queue)

(defn remove
  [id]
  (swap! queue dissoc id))

(defn update
  [entity]
  (remove (:_id entity))
  (add entity))

