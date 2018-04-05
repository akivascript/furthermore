(ns furthermore.entities.handler
  (:require [furthermore.entities.authors :as authors]
            [furthermore.entities.follows :as follows]
;            [furthermore.entities.images :as images]
;            [furthermore.entities.links :as links]
            [furthermore.entities.pages :as pages]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.tags :as tags]
            [furthermore.entities.topics :as topics]))

;; TODO: Oh, this is begging for a macro.
(defn get
  "Provided with a Reference, returns an entity of that
  kind."
  [ref]
  (condp = :kind
    :author (authors/get ref)
    :follow (follows/get ref)
;    :image (images/get ref)
;    :link (links/get ref)
;    :page (pages/get ref)
    :post (posts/get ref)
    :tag (tags/get ref)
    :topic (topics/get ref)))
