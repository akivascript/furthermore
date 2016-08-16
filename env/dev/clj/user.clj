(ns user
  (:require [mount.core :as mount]
            [furthermore.figwheel :refer [start-fw stop-fw cljs]]
            furthermore.core))

(defn start []
  (mount/start-without #'furthermore.core/repl-server))

(defn stop []
  (mount/stop-except #'furthermore.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn rl-au [] (require '[furthermore.entities.authors :as authors] :reload))
(defn rl-db [] (require '[furthermore.db.core :as db] :reload))
(defn rl-fo [] (require '[furthermore.entities.follows :as follows] :reload))
(defn rl-im [] (require '[furthermore.entities.images :as images] :reload))
(defn rl-ln [] (require '[furthermore.entities.links :as links] :reload))
(defn rl-pa [] (require '[furthermore.entities.pages :as pages] :reload))
(defn rl-po [] (require '[furthermore.entities.posts :as posts] :reload))
(defn rl-rf [] (require '[furthermore.entities.references :as refs :refer [->ref ->refs]] :reload))
(defn rl-ta [] (require '[furthermore.entities.tags :as tags] :reload))
(defn rl-tp [] (require '[furthermore.entities.topics :as topics] :reload))
(defn rl-ut [] (require '[furthermore.util :as util] :reload))
