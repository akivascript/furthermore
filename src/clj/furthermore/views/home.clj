(ns furthermore.views.home
  (:require [hiccup.core :refer :all]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.posts :as posts]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]))

(defn- merge-entries
  []
  (flatten (merge
            (posts/get-all)
            (follows/get-all))))

(defn- entries
  []
  (map (partial common/entry :home) (->> (merge-entries)
                                         (sort-by :created-on)
                                         reverse
                                         (take 10))))

(defn content
  []
  [:div#home.container
   [:div#banner.page-header
    (html (for [e (entries)] e))]])
