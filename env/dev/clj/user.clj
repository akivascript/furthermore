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
(declare author
         follow
         post
         tag
         topic)

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
  (authors/save author)
  (topics/save topic)
  (tags/save tag)
  (posts/save post)
  (follows/save follow))

(defn setup
  "Creates all of the necessary collections for Furthermore.
  Note that if a collection already exists, it is skipped."
  []
  (doseq [c colls] (db/create c)))

(def reset (comp populate setup kill))


;; -->>---> Author -->>--->
(def author
  (authors/create
   {:_id "29806481-9d65-4a61-b831-eaac9d23ed4b"
    :name "Akiva"
    :refs #{#furthermore.entities.references.Reference
            {:_id "b2f28143-0d74-4cc4-ae48-f4f68dfb8ae4" :kind :post}
            #furthermore.entities.references.Reference
            {:_id "7c5e4b51-92f5-440b-9b8e-e4814d9075a1" :kind :topic}}}))

;; -->>---> Follow -->>--->
(def follow
  (follows/create
   {:_id "34a84d0a-1ecd-4090-9e23-5dee14a1d0f1"
    :authors #{#furthermore.entities.references.Reference
               {:_id "29806481-9d65-4a61-b831-eaac9d23ed4b" :kind :author}}
    :body "Zazen practice is the direct expression of our true nature. Strictly
speaking, for a human being, there is no other practice than this practice;
there is no other way of life than this way of life."
    :excerpt "Zazen practice is the direct expression of our true nature."
    :parent #furthermore.entities.references.Reference
    {:_id "b2f28143-0d74-4cc4-ae48-f4f68dfb8ae4", :kind :post}
    :tags #{#furthermore.entities.references.Reference
            {:_id "3a3358c5-b3a1-4b7b-83fd-e34b7eabf429", :kind :tag}}
    :topic #furthermore.entities.references.Reference
    {:_id "7c5e4b51-92f5-440b-9b8e-e4814d9075a1", :kind :topic}}))

;; -->>---> Post -->>--->
(def post
  (posts/create
   {:_id "b2f28143-0d74-4cc4-ae48-f4f68dfb8ae4"
    :authors #{#furthermore.entities.references.Reference
               {:_id "29806481-9d65-4a61-b831-eaac9d23ed4b", :kind :author}}
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
    :parent #furthermore.entities.references.Reference
    {:_id "7c5e4b51-92f5-440b-9b8e-e4814d9075a1", :kind :topic}
    :subtitle "A Look from the Beginner's Mind"
    :tags #{#furthermore.entities.references.Reference
            {:_id "3a3358c5-b3a1-4b7b-83fd-e34b7eabf429", :kind :tag}}
    :title "The Difficulty of Zen"
    :topic #furthermore.entities.references.Reference
    {:_id "7c5e4b51-92f5-440b-9b8e-e4814d9075a1", :kind :topic}}))

;; -->>---> Tag -->>--->
(def tag
  (tags/create
   {:_id "3a3358c5-b3a1-4b7b-83fd-e34b7eabf429"
    :refs
    #{#furthermore.entities.references.Reference
      {:_id "b2f28143-0d74-4cc4-ae48-f4f68dfb8ae4", :kind :post}
      #furthermore.entities.references.Reference
      {:_id "34a84d0a-1ecd-4090-9e23-5dee14a1d0f1", :kind :follow}}
    :title "Zen"}))

;; -->>---> Topic -->>--->
(def topic
  (topics/create
   {:_id "7c5e4b51-92f5-440b-9b8e-e4814d9075a1"
    :authors #{#furthermore.entities.references.Reference
               {:_id "29806481-9d65-4a61-b831-eaac9d23ed4b", :kind :author}}
    :body "This covers all manner of theist, atheist, and apatheist subjects."
    :refs #{#furthermore.entities.references.Reference
            {:_id "b2f28143-0d74-4cc4-ae48-f4f68dfb8ae4", :kind :post}}
    :title "Spirituality"}))
