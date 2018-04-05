(ns furthermore.views.admin
  (:require [hiccup.core :refer :all]

            [furthermore.entities.authors :as authors]
            [furthermore.entities.follows :as follows]
            [furthermore.entities.images :as images]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.pages :as pages]
            [furthermore.entities.topics :as topics]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]))

(defn content
  [kind mode id]
  [:div#admin.container
   [:div#banner.page-header
    "Admin page"]])
