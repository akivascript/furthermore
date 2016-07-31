(ns user
  (:require [mount.core :as mount]
            [furthermore.figwheel :refer [start-fw stop-fw cljs]]
            [furthermore.core :refer :all]))

(defn start
  []
  (mount/start-without #'furthermore.core/repl-server))

(defn stop
  []
  (mount/stop-except #'furthermore.core/repl-server))

(defn restart
  []
  (stop)
  (start))

(defn rl-ent [] (require '[furthermore.entities :as ent] :reload))
(defn rl-fmt [] (require '[furthermore.formatters :as fmt] :reload))
(defn rl-log [] (require '[furthermore.logging :as log] :reload))
(defn rl-repo [] (require '[furthermore.repository :as repo] :reload))
(defn rl-svr [] (require '[furthermore.server :as svr] :reload))
(defn rl-twt [] (require '[furthermore.twitter :as twt] :reload))
(defn rl-util [] (require '[furthermore.utils :as util] :reload))

(defn init-repl
  []
  (rl-ent)
  (rl-fmt)
  (rl-log)
  (rl-repo)
  (rl-svr)
  (rl-twt)
  (rl-util))
