(ns furthermore.view.update
  (:require [clojure.string :as cstr]
            [hiccup.core :refer :all]
            [hiccup.form :as form]
            [monger.util :as mutil :refer [random-uuid]]

            [furthermore.entities :as entities]
            [furthermore.view.layout :as layout]
            [furthermore.utils :as util]))

(def ^:private title
  {:page "Page"
   :post "Post"
   :follow-up "Follow-Up"
   :topic "Topic"})

(defn- create-option
  "Returns an <option> with a value that combines an entity's
  ID and its kind as a pipe-delimited single string."
  [option kind entity]
  (let [{:keys [date time]} (util/format-timestamp (:created-on option))
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
      (layout/display-page
       :update
       page-title
       (html
        [:div {:id "update"
               :class "container"}
         [:div {:class "row"}
          [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
           [:div {:class "content"}
            (form/form-to
             {:id "update-form"
              :enckind "application/x-www-form-urlencoded"}
             [:post (str "/api/update/" (name kind))]
             [:h2 page-title]
             [:div {:class "panel panel-default"}
              [:div {:class "panel-body"}
               (when (or (= :post kind)
                         (= :topic kind)
                         (= :page kind))
                 [:div
                  [:div
                   (form/label "title" "Title")
                   (form/text-field {:class "form-control"
                                :ref "title"}
                               "title"
                               (:title entity))]
                  (when (= :post kind)
                    [:div
                     (form/label "subtitle" "Subtitle")
                     (form/text-field {:class "form-control"
                                  :ref "subtitle"}
                                 "subtitle"
                                 (:subtitle entity))])])
               [:div
                (form/label "authors" "Authors")
                (form/text-field {:class "form-control"
                             :ref "authors"}
                            "authors"
                            (cstr/join "; " (map :name (:authors entity))))]
               [:div
                (form/label "tags" "Tags")
                (form/text-field {:class "form-control"
                             :ref "tags"}
                            "tags"
                            (when (seq? (:tags entity))
                              (cstr/join "; " (:tags entity))))]
               (when (or (= :post kind)
                         (= :follow-up kind))
                 (let [topics (entities/get-entities :topics)]
                   [:div
                    [:div
                     [:form/label {:for "topic"} "Topic"]
                     [:select {:id "topics"
                               :class "form-control"
                               :name "topic"
                               :ref "topic"}
                      [:option {:value ""} "Select topic..."]
                      (map #(create-option % "topic" entity) topics)]]
                    [:div
                     [:form/label {:for "parent"} "Parent"]
                     [:select {:id "parents"
                               :class "form-control"
                               :name "parent"
                               :ref "parent"}
                      [:option {:value ""} "Select parent..."]
                      (when (= :post kind)
                        [:optgroup {:form/label "Topics"}
                         (map #(create-option % "topic" entity) topics)])
                      [:optgroup {:id "posts"
                                  :form/label "Posts"}
                       (let [posts (entities/get-entities :posts)]
                         (map #(create-option % "parent" entity) posts))]]]
                    [:div
                     [:div {:class "checkbox float-left"}
                      [:form/label {:for "tweet"}
                       [:input {:type "checkbox"
                                :name "tweet"
                                :ref "tweet"}]
                       "Tweet this?"]]]]))
               [:div
                [:div
                 (if (= :topic kind)
                   (form/label "body-source" "Description")
                   (form/label "body-source" "Body"))
                 (let [rows (if (= :topic kind) 8 16)]
                   (form/text-area {:class "form-control"
                               :ref "body-source"
                               :rows rows}
                              "body-source"
                              (:body-source entity)))]
                (when-not (or (= :page kind)
                              (= :topic kind))
                  [:div
                   (form/label "excerpt" "Excerpt")
                   (form/text-area {:class "form-control"
                               :ref "excerpt-source"
                               :rows 4}
                              "excerpt-source"
                              (:excerpt-source entity))])]]]
             (form/hidden-field {:value kind} "kind")
             (let [id (if (= mode :new)
                        (mutil/random-uuid)
                        (:_id entity))]
               (form/hidden-field {:value id} "_id"))
             [:div.row
              [:div.col-xs-6
               (when update?
                 [:input.btn.btn-default.btn-delete {:id "delete-btn"
                                                     :form "update-form"
                                                     :type "button"
                                                     :value "Delete"}])]
              [:div.col-xs-6.text-right
               (form/submit-button {:class "btn btn-default"} page-title)]])]]]]))))
