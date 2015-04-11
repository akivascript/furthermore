(ns furthermore.state
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]))

(defonce app-state (atom {:topics {}
                          :posts {}
                          :updates {}
                          :pages {}
                          :initialized false}))

(defn initialize-state
  []
  (let [root (om/root-cursor app-state)]
    (when-not (:initialized root)
      (letfn [(get-data [path url]
                (ajax/GET url
                          {:handler #(om/update! root
                                                 path
                                                 (apply merge (map (fn [x]
                                                                     (hash-map (:_id x) x)) %)))
                           :error-handler #(.error js/console %)}))]
        (get-data :posts "/api/posts")
        (get-data :topics "/api/topics")
        (get-data :updates "/api/weblog")))))
