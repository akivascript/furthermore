(ns furthermore.static-pages
  (:require [furthermore.entities :refer [create-entity]]
            [furthermore.repository :refer [read-entity]]
            [furthermore.utils :refer [convert-to-java-date
                                       create-url-name]]))

(defn create-static-page
  [{:keys [authors body tags title]}]
  (let [page (-> (create-entity tags)
                 (assoc :type :static)
                 (assoc :title (or title "New Static Page"))
                 (assoc :body (or body "What's all this then?"))
                 (dissoc :topic)
                 (dissoc :parent)
                 (dissoc :references))]
    (assoc page :url (create-url-name page))))

(defn prepare-page
  [page]
  (-> page
      (update :created-on convert-to-java-date)
      (update :last-updated convert-to-java-date)))

(defn get-static-page
  [criterion & {:keys [prepare] :or {prepare true}}]
  (let [page (read-entity :static criterion)]
    (if prepare
      (prepare-page page)
      page)))
