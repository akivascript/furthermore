(ns furthermore.dev
  (:require [clojure.string :as str]
            [environ.core :refer [env]]

            [furthermore.entities :refer :all]
            [furthermore.logging :refer :all]
            [furthermore.posts :refer :all]
            [furthermore.static-pages :refer :all]
            [furthermore.topics :refer :all]
            [furthermore.newsfeed :refer :all]
            [furthermore.repository :refer :all]
            [furthermore.server :refer :all]
            [furthermore.twitter :refer :all]
            [furthermore.utils :refer :all]))

(def is-dev? (env :dev))

(defn rl-entities [] (require '[furthermore.entities :refer :all] :reload))
(defn rl-posts [] (require '[furthermore.posts :refer :all] :reload))
(defn rl-repo [] (require '[furthermore.repository :refer :all] :reload))
(defn rl-server [] (require '[furthermore.server :refer :all] :reload))
(defn rl-static [] (require '[furthermore.static :refer :all] :reload))
(defn rl-topics [] (require '[furthermore.topics :refer :all] :reload))
(defn rl-twitter [] (require '[furthermore.twitter :refer :all] :reload))
(defn rl-utils [] (require '[furthermore.utils :refer :all] :reload))
