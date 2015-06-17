(ns furthermore.t-utils
  (:require [midje.sweet :refer :all]
            [furthermore.utils :refer :all]))

(facts "about 'keywordize'"
       (fact "it returns the input map with a given key's value turned into a keyword"
             (keywordize {:my "value"} :my) => {:my :value}
             (keywordize {:my {:map "value"}} [:my :map]) => {:my {:map :value}}
             (keywordize {:my {:map "value"}} :my :map) => {:my {:map :value}})
       (fact "if the key isn't present, it returns the input map"
             (keywordize {:my {:map "value"}} [:unknown :key]) => {:my {:map "value"}}))

(fact "'uuid?' tests whether a string is a valid UUID"
      (uuid? "e61325b4-0a2f-441e-91d6-2ecb4b2d74f1") => true
      (uuid? 12) => false
      (uuid? "guch") => false
      (uuid? 'e61325b4-0a2f-441e-91d6-2ecb4b2d74f1) => false)

(fact "'create-url-path' returns a path header based on input"
      (create-url-path {:kind :post}) => "post/"
      (create-url-path {:kind :static}) => "page/"
      (create-url-path {:kind :topic}) => "topic/"
      (create-url-path {:kind :follow-up}) => "")

(facts "'create-url-name' returns a web-friendly url"
       (fact "when the input is a string"
             (create-url-name "This Is a Title") => "this-is-a-title"
             (create-url-name "This Is a \"Complex\" Title (Maybe?)") =>
             "this-is-a-complex-title-maybe")
       (fact "when the input is a uuid"
             (create-url-name "e61325b4-0a2f-441e-91d6-2ecb4b2d74f1") => "e613"))


