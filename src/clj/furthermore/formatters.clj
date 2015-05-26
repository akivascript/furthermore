(ns furthermore.formatters
  (:require [clojure.java.io :as io :refer [delete-file file]]
            [clojure.java.shell :as shell :refer [sh with-sh-dir]]))

(defonce ^:private tmp-dir "tmp/")

(defn- tmp-file
  []
  (str (apply str (repeatedly 4 #(format "%1x" (rand-int 16)))) ".tmp.md"))

(defn- delete-tmp-file
  [file]
  (delete-file (str tmp-dir file)))

(defn- save-tmp-file
  [file content]
  (spit (str tmp-dir file) content)
  file)

(defn- convert-file
  [file]
  (let [content (atom "")]
    (with-sh-dir "tmp"
      (reset! content (sh "multimarkdown" file))
      @content)))

(defn mmd->html
  [content]
  (if (empty? content)
    nil
    (let [file (save-tmp-file (tmp-file) content)
          html (convert-file file)]
      (delete-file (str tmp-dir file))
      (:out html))))
