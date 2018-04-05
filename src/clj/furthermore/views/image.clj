(ns furthermore.views.image
  (:require [clojure.java.io :as io]
            [ring.util.response :as response]))

(defn content
  [img]
  (-> (response/response (clojure.java.io/input-stream (:image-source img)))
      (response/content-type "image/png")))
