(ns typographer.core
  (:require [clojure.string :as string]))

; These regexps are not mine. I found them many years ago but, unfortunately, have since lost 
; the original file which had the programmer's name in it.
(def patterns
  (list
    ; If the very first character is a quote followed by punctuation
    ; at a non-word break, close the quotes by brute force.
    {:pattern #"^'(?=[!\"#\$\%\'()*+,\-.\/:;<=>?\@\[\\\\\]\^_`{|}~]\B)"   :replace "’"}
    {:pattern #"^\"(?=[!\"#\$\%\'()*+,\-.\/:;<=>?\@\[\\\\\]\^_`{|}~]\B)"  :replace "”"}

    ; For handling double sets of quotes. For example:
    ;   He said, "'Quoted' words in a larger quote."
    {:pattern #"\"'(?=\w)"                                                :replace "“‘"}
    {:pattern #"'\"(?=\w)"                                                :replace "‘“"}

    ; For decade abbreviations such as 'the '80s'.
    {:pattern #"'(?=\d\ds)"                                               :replace "’"}

    ; Gets most opening single quotes
    {:pattern #"(\s|&nbsp;|--|&[mn]dash;|'–|—'|&#x201[34];)'(?=\w)"       :replace "$1‘"}
    
    ; Covers single closing quotes
    {:pattern #"([^\ \t\r\n\\\[\{\(\-])'"                                 :replace "$1’"}
    {:pattern #"'(\s|s\b|$)"                                              :replace "’$1"}

    ; Any remaining single quotes should be opening ones
    {:pattern #"'"                                                        :replace "‘"}

    ; Gets most opening double quotes
    {:pattern #"(\s|&nbsp;|--|&[mn]dash;|'–|—'|&#x201[34];)\"(?=\w)"      :replace "$1“"}
    {:pattern #"([^\ \t\r\n\\\[\{\(\-])\""                                :replace "$1”"}

    ; Covers double closing quotes
    {:pattern #"\"(\s|s\b|$)"                                             :replace "”$1"}

    ; Any remaining double quotes should be opening ones
    {:pattern #"\""                                                       :replace "“"}

    ; Some special cases not involving quotation marks
    {:pattern "..."                                                       :replace "…"}
    {:pattern "--"                                                        :replace "—"})) 

(defn smarten
  "Takes a string and replaces all relevant instances of standard ASCII punctuation with
  the typographer's fancy versions."
  [input]
  (loop [patterns patterns output input]
    (if-not (seq patterns)
      output
      (let [pattern (first patterns)]
        (recur (rest patterns)
               (string/replace output (:pattern pattern) (:replace pattern)))))))
