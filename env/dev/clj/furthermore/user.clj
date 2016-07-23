(ns user)

(defn- defreload*
  ([namespace] (defreload* namespace nil))
  ([namespace nickname]
   `(defn ~(symbol (str "rl-" (or nickname namespace)))
      []
      (require (quote ~(vector
                        (symbol
                         (str "furthermore." namespace)) :refer :all)) :reload))))

(defmacro defreload [& args] (apply defreload* args))

(defreload "entities" "en")
(defreload "formatters" "fmt")
(defreload "logging" "log")
(defreload "repository" "repo")
(defreload "server" "svr")
(defreload "twitter" "twr")
(defreload "utils" "utils")

(defn init-repl
  []
  (rl-en)
  (rl-fmt)
  (rl-log)
  (rl-repo)
  (rl-twr)
  (rl-utils))
