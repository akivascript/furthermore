(ns furthermore.formatters
  (:require [clojure.java.io :as io]
            [clojure.java.shell :as shell]))

(defn- tmp-file
  []
  (str (apply str (repeatedly 4 #(format "%1x" (rand-int 16)))) ".tmp.md"))

(defn- save-tmp-file
  [file content]
  (spit file content)
  file)

(defn- convert-file
  [file]
  (let [content (volatile! "")]
    (vreset! content (shell/sh "multimarkdown" file))
    @content))

(defn mmd->html
  [content]
  (if (empty? content)
    nil
    (let [file (save-tmp-file (tmp-file) content)
          html (convert-file file)]
      (io/delete-file file)
      (:out html))))
