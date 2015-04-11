(ns furthermore.state
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]))

(defonce app-state (atom {:topics {}
                          :posts {}
                          :updates {}
                          :pages {}
                          :initialized false}))
(let [root (om/root-cursor app-state)]
  (defn get-data
    [path url]
    (ajax/GET url
              {:handler
               (condp = path
                 :updates #(om/update! root path (identity %))
                 #(om/update! root
                              path
                              (apply merge (map (fn [x] (hash-map (:_id x) x)) %))))
               :error-handler #(.error js/console %)}))

  (defn initialize-state
    []
    (when-not (:initialized root)
      (get-data :posts "/api/posts")
      (get-data :topics "/api/topics")
      (get-data :updates "/api/weblog"))))
