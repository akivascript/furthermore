(ns furthermore.dev
  (:require [clojure.string :as str]
            [environ.core :refer [env]]
            [furthermore.logging :refer :all]
            [furthermore.models.log :refer :all]
            [furthermore.models.posts :refer :all]
            [furthermore.models.static-pages :refer :all]
            [furthermore.models.topics :refer :all]
            [furthermore.newsfeed :refer :all]
            [furthermore.pages :refer :all]
            [furthermore.repository :refer :all]
            [furthermore.server :refer :all]
            [furthermore.twitter :refer :all]
            [furthermore.utils :refer :all]))

(def is-dev? (env :dev))

(defn rl-log [] (require '[furthermore.models.log :refer :all] :reload))
(defn rl-pages [] (require '[furthermore.pages :refer :all] :reload))
(defn rl-posts [] (require '[furthermore.models.posts :refer :all] :reload))
(defn rl-repo [] (require '[furthermore.repository :refer :all] :reload))
(defn rl-server [] (require '[furthermore.server :refer :all] :reload))
(defn rl-static [] (require '[furthermore.models.static :refer :all] :reload))
(defn rl-topics [] (require '[furthermore.models.topics :refer :all] :reload))
(defn rl-twitter [] (require '[furthermore.twitter :refer :all] :reload))
(defn rl-utils [] (require '[furthermore.utils :refer :all] :reload))
