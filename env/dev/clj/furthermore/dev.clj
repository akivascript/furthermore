(ns furthermore.dev
  (:require [clojure.string :as str]
            [environ.core :refer [env]]

            [furthermore.entities :refer :all]
            [furthermore.formatters :refer :all]
            [furthermore.logging :refer :all]
            [furthermore.repository :refer :all]
            [furthermore.server :refer :all]
            [furthermore.twitter :refer :all]
            [furthermore.utils :refer :all]))

(def is-dev? (env :dev))

(defn- defreload*
  ([namespace] (defreload* namespace nil))
  ([namespace nickname]
   `(defn ~(symbol (str "rl-" (or nickname namespace)))
      []
      (require (quote ~(vector
                        (symbol
                         (str "furthermore." namespace)) :refer :all)) :reload))))

(defmacro defreload [& args] (apply defreload* args))

(defreload "entities")
(defreload "formatters" "fmt")
(defreload "logging" "log")
(defreload "repository" "repo")
(defreload "server" "server")
(defreload "twitter" "twitter")
(defreload "utils" "utils")
