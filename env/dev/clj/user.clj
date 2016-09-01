(ns user
  "Dedicated to Furthermore's REPL and the horrific toomfoolery contained
  therein."
  (:require [mount.core :as mount]

            [furthermore.core :refer :all]
            [furthermore.figwheel :refer [start-fw stop-fw cljs]]
            [furthermore.db.core :as db]
            [furthermore.entities.authors :as authors]
            [furthermore.entities.events :as events]
            [furthermore.entities.follows :as follows]
            [furthermore.entities.images :as images]
            [furthermore.entities.pages :as pages]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.references :as refs :refer [->ref ->refs]]
            [furthermore.entities.tags :as tags]
            [furthermore.entities.topics :as topics]
            [furthermore.util :as util]))

;; -->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>- MOUNTAGE -->
(defn start []
  (mount/start-without #'furthermore.core/repl-server))

(defn stop []
  (mount/stop-except #'furthermore.core/repl-server))

(defn restart []
  (stop)
  (start))


;; -->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--> NAMESPACERY -->
(defn rl-db [] (require '[furthermore.db.core :as db] :reload))
(defn rl-dv [] (require '[furthermore.db.entities.events :as dvents] :reload))
(defn rl-au [] (require '[furthermore.entities.authors :as authors] :reload))
(defn rl-ev [] (require '[furthermore.entities.events :as events] :reload))
(defn rl-fo [] (require '[furthermore.entities.follows :as follows] :reload))
(defn rl-im [] (require '[furthermore.entities.images :as images] :reload))
(defn rl-ln [] (require '[furthermore.entities.links :as links] :reload))
(defn rl-pa [] (require '[furthermore.entities.pages :as pages] :reload))
(defn rl-po [] (require '[furthermore.entities.posts :as posts] :reload))
(defn rl-rf [] (require '[furthermore.entities.references :as refs
                          :refer [->ref ->refs]] :reload))
(defn rl-ta [] (require '[furthermore.entities.tags :as tags] :reload))
(defn rl-tp [] (require '[furthermore.entities.topics :as topics] :reload))
(defn rl-vt [] (require '[furthermore.views.util :as vutil] :reload))
(defn rl-ut [] (require '[furthermore.util :as util] :reload))


;; -->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>--->>- DATABASE -->

(def colls [:author
            :event
            :follow
            :image
            :link
            :page
            :post
            :tag
            :topic])

(defn kill
  "Drops any Furthermore-related collections from the database.
  THIS WILL CAUSE DATA LOSS."
  []
  (doseq [c colls] (db/kill c)))

(defn populate
  "Drops and recreates all Furthermore collections and fills them with
  some test data."
  []
  (let [author (authors/create {:name "Akiva"})
        topic (topics/create
               {:authors #{author}
                :title "Spirituality"
                :body "This covers all manner of theist, atheist, and apatheist subjects."})
        tag (tags/create {:title "Zen"})
        post (posts/create
              {:authors #{author}
               :parent topic
               :topic topic
               :tags #{tag}
               :body "People say that practicing Zen is difficult, but there is a
misunderstanding as to why. It is not difficult because it is hard to sit in
the cross-legged position, or to attain enlightenment. It is difficult because
it is hard to keep our mind pure and our practice pure in its fundamental
sense. The Zen school developed in many ways after it was established in China,
but at the same time, it became more and more impure. But I do not want to talk
about Chinese Zen or the history of Zen."
               :excerpt "People say that practicing Zen is difficult, but there is a
misunderstanding as to why. It is not difficult because it is hard to sit in
the cross-legged position, or to attain enlightenment. It is difficult because
it is hard to keep our mind pure and our practice pure in its fundamental sense."
               :title "The Difficulty of Zen"
               :subtitle "A Look from the Beginner's Mind"})
        follow (follows/create
                {:authors #{author}
                 :parent post
                 :topic (:parent post)
                 :tags #{tag}
                 :body "Zazen practice is the direct expression of our true nature. Strictly
speaking, for a human being, there is no other practice than this practice;
there is no other way of life than this way of life."
                 :excerpt "Zazen practice is the direct expression of our true nature."})]
    (authors/save author)
    (topics/save topic)
    (tags/save tag)
    (posts/save post)
    (Thread/sleep 1000) ; sleep to ensure a different timestamp
    (follows/save follow))) ; for the follow-up

(def reset (comp populate kill))
