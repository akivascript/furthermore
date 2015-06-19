(ns furthermore.view.update
  (:require [clojure.string :as string]
            [hiccup.core :refer :all]
            [hiccup.form :refer :all]
            [monger.util :as mutil :refer [random-uuid]]

            [furthermore.entities :as entities]
            [furthermore.view.layout :refer [display-page]]
            [furthermore.utils :refer [format-timestamp]]))

(def ^:private title
  {:static "Page"
   :post "Post"
   :follow-up "Follow-Up"
   :topic "Topic"})

(defn- create-option
  "Returns an <option> with a value that combines an entity's
  ID and its kind as a pipe-delimited single string."
  [option kind entity]
  (let [{:keys [date time]} (format-timestamp (:created-on option))
        selected? (= (:_id option) (get-in entity [(keyword kind) :_id]))]
    (html
     [:option {:value (str (:_id option) "|" (name (:kind option)))
               :selected selected?}
      (str (:title option) " (" date " @ " time ")")])))

(defn display-update-page
  [kind mode id]
  (let [update? (= :update mode)
        page-title (if update?
                 (str "Update " (title kind))
                 (str "Add " (title kind)))
        entity (when update?
                 (entities/get-entity {:_id id} kind))]
      (display-page
       :update
       page-title
       (html
        [:div {:id "update"
               :class "container"}
         [:div {:class "row"}
          [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
           [:div {:class "content"}
            (form-to
             {:enckind "application/x-www-form-urlencoded"}
             [:post (str "/api/update/" (name kind))]
             [:h2 page-title]
             [:div {:class "panel panel-default"}
              [:div {:class "panel-body"}
               (when (or (= :post kind)
                         (= :topic kind)
                         (= :static kind))
                 [:div
                  [:div
                   (label "title" "Title")
                   (text-field {:class "form-control"
                                :ref "title"}
                               "title"
                               (:title entity))]
                  (when (= :post kind)
                    [:div
                     (label "subtitle" "Subtitle")
                     (text-field {:class "form-control"
                                  :ref "subtitle"}
                                 "subtitle"
                                 (:subtitle entity))])])
               [:div
                (label "authors" "Authors")
                (text-field {:class "form-control"
                             :ref "authors"}
                            "authors"
                            (string/join "; " (map :name (:authors entity))))]
               [:div
                (label "tags" "Tags")
                (text-field {:class "form-control"
                             :ref "tags"}
                            "tags"
                            (when (seq? (:tags entity))
                              (string/join "; " (:tags entity))))]
               (when (or (= :post kind)
                         (= :follow-up kind))
                 (let [topics (entities/get-entities :topics)]
                   [:div
                    [:div
                     [:label {:for "topic"} "Topic"]
                     [:select {:id "topics"
                               :class "form-control"
                               :name "topic"
                               :ref "topic"}
                      [:option {:value ""} "Select topic..."]
                      (map #(create-option % "topic" entity) topics)]]
                    [:div
                     [:label {:for "parent"} "Parent"]
                     [:select {:id "parents"
                               :class "form-control"
                               :name "parent"
                               :ref "parent"}
                      [:option {:value ""} "Select parent..."]
                      (when (= :post kind)
                        [:optgroup {:label "Topics"}
                         (map #(create-option % "topic" entity) topics)])
                      [:optgroup {:id "posts"
                                  :label "Posts"}
                       (let [posts (entities/get-entities :posts)]
                         (map #(create-option % "parent" entity) posts))]]]
                    [:div
                     [:div {:class "checkbox float-left"}
                      [:label {:for "tweet"}
                       [:input {:type "checkbox"
                                :name "tweet"
                                :ref "tweet"}]
                       "Tweet this?"]]]]))
               [:div
                [:div
                 (if (= :topic kind)
                   (label "body-source" "Description")
                   (label "body-source" "Body"))
                 (let [rows (if (= :topic kind) 8 16)]
                   (text-area {:class "form-control"
                               :ref "body-source"
                               :rows rows}
                              "body-source"
                              (:body-source entity)))]
                (when-not (or (= :static kind)
                              (= :topic kind))
                  [:div
                   (label "excerpt" "Excerpt")
                   (text-area {:class "form-control"
                               :ref "excerpt-source"
                               :rows 4}
                              "excerpt-source"
                              (:excerpt-source entity))])]]]
             (hidden-field {:value kind} "kind")
             (let [id (if (= mode :new)
                        (mutil/random-uuid)
                        (:_id entity))]
               (hidden-field {:value id} "_id"))
             [:div {:class "text-right"}
              (submit-button {:class "btn btn-default"} page-title)])]]]]))))
