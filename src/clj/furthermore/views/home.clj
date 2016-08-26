(ns furthermore.views.home
  (:require [hiccup.core :refer :all]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.images :as images]
            [furthermore.entities.posts :as posts]
            [furthermore.views.common :as common]
            [furthermore.views.util :as vutil]))

(def prepare (comp (partial common/entry :home)
                   (partial vutil/prepare-text md-to-html-string)
                   (partial vutil/prepare-text smarten)))

(defn- merge-entries
  []
  (flatten (merge
            (posts/get-all)
            (follows/get-all)
            (images/get-all))))

(defn- entries
  []
  (map prepare (->> (merge-entries)
                    (sort-by :created-on)
                    reverse
                    (take 10))))

(defn content
  []
  [:div#home.container
   [:div#banner.page-header
    (html (for [e (entries)] e))]])
