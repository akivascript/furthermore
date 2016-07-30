(ns furthermore.entities
  (:require [clojure.string :as cstr]

            [clj-time.local :as ltime]
            [monger.util :as mutil]

            [furthermore.formatters :as fmt]
            [furthermore.repository :as repo]
            [furthermore.utils :as util]))

(declare get-entities get-entity)

;;
;; Authors
;;
(defrecord Author
    [name works])

(defn create-author
  [params]
  (if (string? params)
    (map->Author {:name params
                  :works #{}})
    (let [{:keys [name works]
           :or {name "John Doe"
                works #{}}} params]
      (map->Author {:name name
                    :works works}))))

(defn author?
  "Returns true if x is an Author."
  [x]
  (instance? Author x))

;;
;; References
;;
(defrecord Reference
    [_id kind])

(defn create-reference
  "Returns a Reference which links entities to each other."
  ([params]
   (if (nil? params)
     nil
     (let [{:keys [_id kind]} params]
       (create-reference _id (keyword kind)))))
  ([id kind]
   (map->Reference {:_id id
                    :kind (keyword kind)})))

(defn delete-reference
  "Removes a given reference from an entity."
  [entity ref]
  (disj entity ref))

(defprotocol References
  (->ref [ref]))

(extend-protocol References
  furthermore.entities.Reference
  (->ref [ref] ref)

  clojure.lang.IPersistentMap
  (->ref [ref] (create-reference ref))

  java.lang.String
  (->ref [ref]
    (create-reference (first (cstr/split ref #"\|"))
                      (second (cstr/split ref #"\|")))))

(defn reference?
  "Returns true if x is a Reference."
  [x]
  (instance? furthermore.entities.Reference x))

;;
;; Tags
;;
(declare create-tag)

(defrecord Tag
    [_id created-on kind last-updated log? title refs url])

(defprotocol Tags
  (->tags [tags]))

(extend-protocol Tags
  clojure.lang.PersistentHashSet
  (->tags [tags] (map create-tag tags))

  furthermore.entities.Tag
  (->tags [tag] tag)

  clojure.lang.PersistentArrayMap
  (->tags [tags] tags)

  java.lang.String
  (->tags
    [tags]
    (set (map cstr/trim (cstr/split tags #";|,"))))

  clojure.lang.PersistentVector
  (->tags
    [tags]
    (into #{} tags)))

(defn- create-tag*
  [params]
  (let [{:keys [_id created-on last-updated log? title refs url]
         :or {_id (mutil/random-uuid)
              created-on (ltime/local-now)
              log? true
              title "Miscellania"
              refs #{}
              url (util/create-url-name title)}} params]
    (map->Tag {:_id _id
               :created-on created-on
               :kind :tag
               :last-updated last-updated
               :log? log?
               :title title
               :refs (set (map ->ref refs))
               :url url})))

(defn create-tag
  "Returns a tag entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (create-tag* x)
    :else
    (create-tag* {:title x})))

(defn get-tag
  [title]
  (if (nil? title)
    nil
    (get-entity {:title title} :tag)))

(defn get-tag-by-url
  [url]
  (if (nil? url)
    nil
    (get-entity {:url url} :tag)))

(defn get-tags
  []
  (get-entities :tags))

;;
;; Images
;;
(defrecord Image
    [_id authors created-on file kind last-updated log? refs tags title url])

(defn create-image
  [params]
  (if (nil? params)
    nil
    (let [date (ltime/local-now)
          {:keys [_id authors created-on file kind last-updated log? refs tags title url]
           :or {_id (mutil/random-uuid)
                authors ["John Doe"]
                created-on date
                log? false
                refs (hash-set)
                tags (hash-set)
                title "New Image"
                url (util/create-entity-url date title)}} params]
      (map->Image {:_id _id
                   :authors (into [] create-author authors)
                   :file file
                   :kind :image
                   :log? log?
                   :refs (set (map ->ref refs))
                   :ags (-> tags tags)
                   :title title
                   :url url}))))

(defn image?
  "Returns true if x is an Image."
  [x]
  (instance? Image x))

(defn image
  "Returns an image from id."
  [x]
  (cond
    (nil? x) nil
    (uuid? (util/uuid x)) (get-entity {:_id x} :image)
    :else
    (image (:_id x))))

;;
;; Posts
;;
(declare get-topic)

(defrecord Post
    [_id authors body body-source created-on excerpt excerpt-source
     kind last-updated log? parent refs subtitle tags title topic url])

(defn create-post
  "Takes a map as input and requires both parent and topic records. Produces
  a Post record."
  [params]
  (if (nil? params)
    nil
    (let [date (ltime/local-now)
          {:keys [_id authors body body-source created-on excerpt excerpt-source
                  last-updated log? parent subtitle refs tags title topic url]
           :or {authors ["John Doe"]
                created-on date
                _id (mutil/random-uuid)
                log? true
                refs #{}
                tags #{}
                title "New Post"
                url (util/create-entity-url date title)}} params]
      (map->Post {:_id _id
                  :authors (mapv create-author authors)
                  :body body
                  :body-source body-source
                  :created-on created-on
                  :excerpt excerpt
                  :excerpt-source excerpt-source
                  :kind :post
                  :log? log?
                  :parent (->ref parent)
                  :refs (set (map ->ref refs))
                  :subtitle subtitle
                  :tags (->tags tags)
                  :title title
                  :topic (->ref topic)
                  :url url}))))

(defn post?
  "Returns true if x is a post."
  [x]
  (instance? Post x))

(defn get-post
  "Returns a post from id."
  [x]
  (cond
    (nil? x) nil
    (uuid? (util/uuid x)) (get-entity {:_id x} :post)
    :else
    (get-post (:_id x))))

(defn get-posts
  "Returns all posts."
  []
  (get-entities :posts))

(defrecord Follow-Up
    [_id authors body body-source created-on excerpt excerpt-source
     kind last-updated log? parent refs tags topic url])

(defn create-follow-up
  "Takes a map as input and requires a parent record. Produces a Follow-up record."
  [params]
  (if (nil? params)
    nil
    (let [{:keys [_id authors body body-source created-on excerpt excerpt-source
                  last-updated log? parent refs tags topic url]
           :or {authors [(create-author {})]
                created-on (ltime/local-now)
                _id (mutil/random-uuid)
                log? true
                refs #{}
                tags #{}
                topic (get-in parent [:topic :_id])
                url (util/create-url-name _id)}} params]
      (map->Follow-Up {:_id _id
                       :authors (mapv create-author authors)
                       :body body
                       :body-source body-source
                       :created-on created-on
                       :excerpt excerpt
                       :excerpt-source excerpt-source
                       :kind :follow-up
                       :last-updated last-updated
                       :log? log?
                       :parent (->ref parent)
                       :refs (set (map ->ref refs))
                       :tags (->tags tags)
                       :topic (->ref topic)
                       :url url}))))

(defn follow-up?
  "Returns true if x is a follow-up."
  [x]
  (instance? Follow-Up x))

(defn get-follow-up
  "Returns a follow-up from id."
  [id]
  (if (nil? id)
    nil
    (get-entity {:_id id} :follow-up)))

(defn get-parent
  "Returns the parent entity of an entity."
  [entity]
  (let [parent (:parent entity)]
    (get-entity {:_id (:_id parent)} (:kind parent))))

;;
;; Pages
;;
(defrecord Page
    [_id authors body body-source created-on last-updated log? tags title url])

(defn create-page
  [params]
  (if (nil? params)
    nil
    (let [{:keys [_id authors body body-source created-on last-updated log?
                  tags title url]
           :or {_id (mutil/random-uuid)
                authors [(create-author {})]
                created-on (ltime/local-now)
                log? true
                tags #{}
                title "New Page"
                url (util/create-url-name title)}} params]
      (map->Page {:_id _id
                  :authors (mapv create-author authors)
                  :body body
                  :body-source body-source
                  :created-on created-on
                  :kind :page
                  :last-updated last-updated
                  :log? log?
                  :tags (set (->tags tags))
                  :title title
                  :url url}))))

(defn get-page
  "Returns a static page."
  [x]
  (cond
    (nil? x) nil
    (uuid? (util/uuid x)) (get-entity {:_id x} :page)
    :else
    (get-entity {:url x} :page)))

(defn get-pages
  "Returns all pages."
  []
  (get-entities :pages))

;;
;; Topics
;;
(defrecord Topic
    [_id authors body body-source created-on kind
     last-updated log? tags title refs url])

(defn- create-topic*
  [params]
  (let [{:keys [_id authors body body-source created-on last-updated
                log? tags title refs url]
         :or {_id (mutil/random-uuid)
              authors ["John Doe"]
              created-on (ltime/local-now)
              log? true
              refs #{}
              tags #{}
              title "New Topic"
              url (util/create-url-name title)}} params]
    (map->Topic {:_id _id
                 :authors (mapv create-author authors)
                 :created-on created-on
                 :body body
                 :body-source body-source
                 :kind :topic
                 :last-updated last-updated
                 :log? log?
                 :tags (->tags tags)
                 :title title
                 :refs (set (map ->ref refs))
                 :url url})))

(defn topic?
  [x]
  (instance? Topic x))

(defn create-topic
  "Returns a topic entity."
  [x]
  (cond
    (nil? x) nil
    (map? x) (create-topic* x)
    :else
    (create-topic* {:title x})))

(defn get-topic
  "Returns a topic by id or from a post."
  [x]
  (cond
    (nil? x) x
    (uuid? (util/uuid x)) (get-entity {:_id x} :topic)
    (string? x) (get-entity {:url x} :topic)
    (reference? x) (get-entity {:_id (:_id x)} :topic)
    :else
    (let [topic (:topic x)]
      (get-entity {:_id (:_id topic)} (:kind topic)))))

(defn get-topics
  "Returns all topics."
  []
  (get-entities :topics))

;;
;; General Entity Functions
;;
;; The Ministry of Information Miscellanea
(defn same?
  "Returns true if the two entities are the same by _id."
  [x y]
  (= (:_id x) (:_id y)))

(defn parent?
  "Returns true if x is the parent of y."
  [x y]
  (= (:_id x) (get-in y [:parent :_id])))

;; The Ministry of Information Retrieval
(defmulti get-entity (fn [criterion kind] kind))

(defn- get-entity*
  [fn criterion kind]
  (fn (repo/read-entity kind criterion)))

(defmethod get-entity :follow-up
  [criterion kind]
  (get-entity* create-follow-up criterion kind))

(defmethod get-entity :post
  [criterion kind]
  (get-entity* create-post criterion kind))

(defmethod get-entity :page
  [criterion kind]
  (get-entity* create-page criterion kind))

(defmethod get-entity :tag
  [criterion kind]
  (if-let [tag (repo/read-entity kind criterion)]
    (create-tag tag)
    (create-tag criterion)))

(defmethod get-entity :topic
  [criterion kind]
  (get-entity* create-topic criterion kind))

(defmethod get-entity :image
  [criterion kind]
  (get-entity* create-image criterion kind))

(defmulti get-entities identity)

(defmethod get-entities :follow-ups
  [_]
  (->> (repo/read-entities :post)
       (filter #(contains? #{:follow-up} (keyword (:kind %))))
       (map create-follow-up)
       (into [])))

(defmethod get-entities :pages
  [_]
  (->> (repo/read-entities :page)
       (map create-page)
       (sort-by :title)
       (into [])))

(defmethod get-entities :posts
  [_]
  (->> (repo/read-entities :post)
       (filter #(contains? #{:post} (keyword (:kind %))))
       (map create-post)
       (into [])))

(defmethod get-entities :tags
  [_]
  (->> (repo/read-entities :tag)
       (map create-tag)
       (sort-by :title)
       (into [])))

(defmethod get-entities :topics
  [_]
  (->> (repo/read-entities :topic)
       (map create-topic)
       (sort-by :title)
       (into [])))

(defmethod get-entities :updates
  [_]
  (->> (repo/read-entities :update)
       (map repo/create-update)
       (sort-by :date)
       reverse
       (into [])))

(defmethod get-entities :images
  [_]
  (->> (repo/read-entities :image )
       (map repo/create-image)
       (sort-by :date)
       reverse
       (into [])))

;; The Ministry of Information Retention
(defprotocol AddEntity
  (add-entity [entity]))

(defn- commit-entities
  []
  (repo/process-db-queue)
  (repo/clear-db-queue!))

(extend-protocol AddEntity
  furthermore.entities.Post
  (add-entity
    [entity]
    (let [parent (:parent entity)
          parent (-> (get-entity {:_id (:_id parent)} (:kind parent))
                     (update :refs conj (create-reference entity))
                     (assoc :log? false))
          entity (-> entity
                     (assoc :body (fmt/mmd->html (:body-source entity)))
                     (assoc :excerpt (fmt/mmd->html (:excerpt-source entity))))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :post))
                    (:tags entity))]
      (doseq [e (apply merge [entity parent] tags)] (repo/add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Follow-Up
  (add-entity
    [entity]
    (let [parent (-> (get-post (get-in entity [:parent :_id]))
                     (update :refs conj (create-reference entity))
                     (assoc :log? false))
          entity (-> entity
                     (assoc :body (fmt/mmd->html (:body-source entity)))
                     (assoc :excerpt (fmt/mmd->html (:excerpt-source entity))))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :follow-up))
                    (:tags entity))]
      (doseq [e (apply merge [entity parent] tags)] (repo/add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Image
  (add-entity
    [entity]
    (let [tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :image))
                    (:tags entity))]
      (doseq [e (apply merge [entity] tags)] (repo/add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Page
  (add-entity
    [entity]
    (let [entity (assoc entity :body (fmt/mmd->html (:body-source entity)))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :page))
                    (:tags entity))]
      (doseq [e (apply merge [entity] tags)] (repo/add-db-queue! e))
      (commit-entities)))

  furthermore.entities.Tag
  (add-entity
    [tag]
    (repo/add-db-queue! (assoc tag :log? true))
    (commit-entities))

  furthermore.entities.Topic
  (add-entity
    [entity]
    (let [entity (assoc entity :body (fmt/mmd->html (:body-source entity)))
          tags (map #(update (get-tag %)
                             :refs conj
                             (create-reference (:_id entity)
                                               :topic))
                    (:tags entity))]
      (doseq [e (apply merge [entity] tags)] (repo/add-db-queue! e))
      (commit-entities))))

;; The Ministry of Information Absolution
(defn orphan
  [entity]
  (let [ref (create-reference (:_id entity) (:kind entity))
        parent (assoc (get-parent entity) :log? false)
        topic (assoc (get-topic (:topic entity)) :log? false)]
    (repo/add-db-queue! (update parent :refs delete-reference ref))
    (when-not (= topic parent)
      (repo/add-db-queue! (update topic :refs delete-reference ref)))
    (repo/process-db-queue)
    (repo/clear-db-queue!)))

(defn delete-entity
  ([entity]
   (let [source (create-reference (:_id entity) (:kind entity))]
     (loop [refs (:refs entity)]
       (when (seq refs)
         (let [ref (first refs)
               target (get-entity {:_id (:_id ref)} (:kind ref))]
           (if (and (or (follow-up? target)
                        (post? target))
                    (parent? entity target))
             (delete-entity target)
             (update target :refs delete-reference source)))
         (recur (rest refs))))
     (when-not (topic? entity)
       (orphan entity))
     (repo/remove-entity entity)))
  ([id kind]
   (delete-entity (get-entity {:_id id} kind))))
