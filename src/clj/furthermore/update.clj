(ns furthermore.update
  (:require [clojure.string :as str :refer [capitalize]]
            [hiccup.core :refer :all]
            [hiccup.form :refer :all]

            [furthermore.entities :refer [get-entities]]
            [furthermore.layout :refer [display-page]]
            [furthermore.utils :refer [format-timestamp]]))

(def title
  {:post "Post"
   :follow-up "Follow-Up"
   :topic "Topic"})

(defn- create-option
  [option type]
  (let [{:keys [date time]} (format-timestamp (:created-on option))]
    (html
     [:option {:value (str (:_id option) "|" (name (:kind option)))}
      (str (:title option) " (" date " @ " time ")")])))

(defn display-update-page
  [kind]
  (let [topics (get-entities :topics)]
    (display-page
     :update
     (html
      [:div {:id "update"
             :class "container"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
         [:div {:class "content"}
          (form-to
           {:enckind "application/x-www-form-urlencoded"}
           [:post (str "/api/update/" (name kind))]
           [:h2 (str "New " (kind title))]
           [:div {:class "panel panel-default"}
            [:div {:class "panel-body"}
             (when (or (= :post kind)
                       (= :topic kind))
               [:div
                [:div
                 [:label {:for "title"} "Title"]
                 [:input {:class "form-control"
                          :kind "text"
                          :name "title"
                          :ref "title"}]]
                (when (= :post kind)
                  [:div
                   [:label {:for "subtitle"} "Subtitle"]
                   [:input {:class "form-control"
                            :kind "text"
                            :name "subtitle"
                            :ref "subtitle"}]])])
             [:div
              [:label {:for "authors"} "Author"]
              [:input {:class "form-control"
                       :kind "text"
                       :name "authors"
                       :ref "authors"
                       :value "Akiva"}]]
             (when-not (= :topic kind)
               [:div
                [:div
                 [:label {:for "topic"} "Topic"]
                 [:select {:id "topics"
                           :class "form-control"
                           :name "topic"
                           :ref "topic"}
                  [:option {:value ""} "Select topic..."]
                  (map #(create-option % "topic") topics)]]
                [:div
                 [:label {:for "parent"} "Parent"]
                 [:select {:id "parents"
                           :class "form-control"
                           :name "parent"
                           :ref "parent"}
                  [:option {:value ""} "Select parent..."]
                  (when (= :post kind)
                    [:optgroup {:label "Topics"}
                     (map #(create-option % "topic") topics)])
                  [:optgroup {:id "posts"
                              :label "Posts"}]]]
                [:div
                 [:div {:class "checkbox float-left"}
                  [:label {:for "tweet"}
                   [:input {:type "checkbox"
                            :name "tweet"
                            :ref "tweet"}]
                   "Tweet this?"]]]
                [:div
                 [:label {:for "body"} "Body"]
                 [:textarea {:ref "body"
                             :class "form-control"
                             :name "body"
                             :rows 16}]]
                [:div
                 [:label {:for "excerpt"} "Excerpt"]
                 [:textarea {:ref "excerpt"
                             :class "form-control"
                             :name "excerpt"
                             :rows 4}]]])]]
           (hidden-field {:value kind} "kind")
           [:div {:class "text-right"}
            (submit-button {:class "btn btn-default"} (kind title))])]]]]))))
