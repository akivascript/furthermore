(ns furthermore.entities.references
  (:require [clojure.string :as cstr]

            [monger.util :as mutil]))

(declare create)

(defrecord Reference
    [_id kind])

(defprotocol References
  (->ref [ref])
  (->refs [refs]))

(extend-protocol References
  furthermore.entities.references.Reference
  (->ref [ref] ref)

  clojure.lang.IPersistentMap
  (->ref [ref] (create ref))

  clojure.lang.PersistentHashSet
  (->refs [refs] (into #{} (map create refs)))

  clojure.lang.PersistentVector
  (->refs [refs] (into #{} (map create refs)))

  java.lang.String
  (->ref [ref]
    (let [parts (cstr/split ref #"\|")]
      (create (first parts) (second parts)))))

(defn- reference
  "Returns a Reference which links entities to each other."
  [params]
  (let [{:keys [_id kind]
         :or {_id (mutil/random-uuid)}} params]
    (map->Reference {:_id _id
                     :kind kind})))

(defn create
  "Returns a reference entity."
  ([x]
   (cond
     (nil? x) nil
     (map? x) (reference x)
     :else
     (reference {:kind x})))
  ([id kind]
   (reference {:_id id :kind kind})))

(defn reference?
  "Returns true if x is a Reference."
  [x]
  (instance? Reference x))

(defn link
  "Given a source entity, adds a ref link to the target's :refs key
  and returns target."
  [source target]
  (update target :refs conj (->ref source)))

(defn delete
  "Removes a given reference from an entity."
  [entity ref]
  (disj entity ref))
