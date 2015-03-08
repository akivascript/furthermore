(ns furthermore.models.static-pages
  (:require [furthermore.pages :refer :all]
            [furthermore.repository :refer :all]))

(defn create-static-page
  [{:keys [title tags] :or {title "New Static Page"}}]
  (-> (create-page tags)
      (assoc :type :static)
      (assoc :title title)
      (assoc :body "What's all this then?")
      (dissoc :references)))

(defn get-static-page
  [name]
  (read-entity :page {:title name}))
