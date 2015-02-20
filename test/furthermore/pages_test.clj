(ns furthermore.pages-test
  (:require [expectations :refer :all]
            [furthermore.pages :refer :all]))

(expect "post.html" (get-template {:type :post}))
(expect "page.html" (get-template {:type "page"}))
(expect NullPointerException (get-template {:something-else 3}))
(expect NullPointerException (get-template {}))
