(ns furthermore.dev
  (:require [clojure.string :refer :all]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]

            [furthermore.entities :refer :all]
            [furthermore.formatters :refer :all]
            [furthermore.logging :refer :all]
            [furthermore.repository :refer :all]
            [furthermore.server :refer :all]
            [furthermore.twitter :refer :all]
            [furthermore.utils :refer :all]))

(def is-dev? (env :dev))

(defonce server (run-jetty #'app {:port 3000 :join? false}))

(defn start-server [] (.start server))
(defn stop-server [] (.stop server))

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
