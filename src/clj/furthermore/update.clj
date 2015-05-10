(ns furthermore.update
  (:require [hiccup.core :refer :all]
            [hiccup.form :refer :all]

            [furthermore.entities :refer [get-posts
                                          get-topics]]
            [furthermore.layout :refer [display-page]]
            [furthermore.utils :refer [format-timestamp]]))

(defn- create-option
  [option type]
  (let [{:keys [date time]} (format-timestamp (:created-on option))]
    (html
     [:option {:value (str (:_id option) "|" (name (:type option)))}
      (str (:title option) " (" date " @ " time ")"
           (when (and (= :topic (:type option))
                      (= "parent" type))
             " - Ⓣ"))])))

(defmulti display-update-page identity)

(defmethod display-update-page :post
  [type]
  (let [topics (get-topics)
        posts (get-posts)]
    (display-page
     (html
      [:div {:id "update"
             :class "container"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
         [:div {:class "content"}
          [:h2 "New Post"]
          [:div {:class "panel panel-default"}
           [:div {:class "panel-body"}
            [:div
             [:label {:for "title"} "Title"]
             [:input {:class "form-control"
                      :type "text"
                      :ref "title"}]]
            [:div
             [:label {:for "subtitle"} "Subtitle"]
             [:input {:class "form-control"
                      :type "text"
                      :ref "subtitle"}]]
            [:div
             [:label {:for "author"} "Author"]
             [:input {:class "form-control"
                      :type "text"
                      :ref "author"
                      :value "Akiva"}]]
            [:div
             [:label {:for "topic"} "Topic"]
             [:select {:class "form-control"
                       :ref "topic"}
              [:option {:value ""} "Select topic..."]
              (map #(create-option % "topic") topics)]]
            [:div
             [:label {:for "parent"} "Parent"]
             [:select {:class "form-control"
                       :ref "parent"}
              [:option {:value ""} "Select parent..."]
              (map #(create-option % "parent") posts)]]
            [:div
             [:div {:class "checkbox float-left"}
              [:label {:for "tweet"}
               [:input {:type "checkbox"
                        :ref "tweet"}]
               "Tweet this?"]]]
            [:div
             [:label {:for "body"} "Body"]
             [:textarea {:ref "body"
                         :class "form-control"
                         :rows 16}]]
            [:div
             [:label {:for "excerpt"} "Excerpt"]
             [:textarea {:ref "excerpt"
                         :class "form-control"
                         :rows 4}]]]]
          [:div {:class "text-right"}
           [:button {:type "button"
                     :class "btn btn-default"} "Post"]]]]]]))))

(defmethod display-update-page :follow-up
  [type]
  (let [topics (get-topics)
        posts (get-posts)]
    (display-page
     (html
      [:div {:id "update"
             :class "container"}
       [:div {:class "row"}
        [:div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
         [:div {:class "content"}
          [:h2 "New Follow-Up"]
          [:div {:class "panel panel-default"}
           [:div {:class "panel-body"}
            [:div
             [:label {:for "author"} "Author"]
             [:input {:class "form-control"
                      :type "text"
                      :ref "author"
                      :value "Akiva"}]]
            [:div
             [:label {:for "topic"} "Topic"]
             [:select {:class "form-control"
                       :ref "topic"}
              [:option {:value ""} "Select topic..."]
              (map #(create-option % "topic") topics)]]
            [:div
             [:label {:for "parent"} "Parent"]
             [:select {:class "form-control"
                       :ref "parent"}
              [:option {:value ""} "Select parent..."]
              (map #(create-option % "parent") posts)]]
            [:div
             [:div {:class "checkbox float-left"}
              [:label {:for "tweet"}
               [:input {:type "checkbox"
                        :ref "tweet"}]
               "Tweet this?"]]]
            [:div
             [:label {:for "body"} "Body"]
             [:textarea {:ref "body"
                         :class "form-control"
                         :rows 16}]]
            [:div
             [:label {:for "excerpt"} "Excerpt"]
             [:textarea {:ref "excerpt"
                         :class "form-control"
                         :rows 4}]]]]
          [:div {:class "text-right"}
           [:button {:type "button"
                     :class "btn btn-default"} "Post"]]]]]]))))
