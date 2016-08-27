(ns furthermore.routes.topic
  (:require [compojure.core :refer [defroutes GET]]

            [furthermore.layout :as layout]
            [furthermore.views.topic :as topic]))

(defn build
  [url]
  (let [topic (topics/get :url url)]
    (layout/render :topic (:url topic) (topic/content topic))))

(defroutes routes
  (GET "/topic/:url" [url] (build url)))
