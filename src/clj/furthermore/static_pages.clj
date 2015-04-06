(ns furthermore.static-pages
  (:require [furthermore.pages :refer [create-page]]
            [furthermore.repository :refer [read-entity]]
            [furthermore.utils :refer [convert-to-java-date]]))

(defn create-static-page
  [{:keys [title tags] :or {title "New Static Page"}}]
  (-> (create-page tags)
      (assoc :type :static)
      (assoc :title title)
      (assoc :body "What's all this then?")
      (dissoc :references)))

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
