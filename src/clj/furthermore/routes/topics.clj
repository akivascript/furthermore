(ns furthermore.routes.topics
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.entities.topics :as topics]
            [furthermore.layout :as layout]
            [furthermore.views.topic :as topic]))

(defn build
  [url]
  (let [topic (topics/get :url url)]
    (layout/render :topic (:url topic) (topic/content topic))))

(defroutes routes
  (GET "/topics/:url" [url] (build url)))
