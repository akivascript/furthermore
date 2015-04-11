(ns furthermore.update
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]

            [furthermore.routing :refer [change-view]]
            [furthermore.utils :refer [format-timestamp]]))

(enable-console-print!)

(def ^:private *parent-path* [:pages :updaate :parent])
(def ^:private *post-parts* [:title :subtitle :author :topic :parent :tweet :body :excerpt])

(defn get-value
  [ref owner]
  (condp = ref
    :tweet (.-checked (om/get-node owner (name ref)))
    (.-value (om/get-node owner (name ref)))))

(defn process-post
  [data owner]
  (let [post (apply merge (map #(hash-map % (get-value % owner)) *post-parts*))]
    (ajax/POST "/api/update"
               {:params post
                :handler #(.log js/console (str %))
                :format :edn
                :error-handler #(.error js/console %)})))

(defn render-options
  [data owner]
  (om/component
   (let [{:keys [date time]} (format-timestamp (:created-on data))]
     (d/option {:value (:_id data)}
      (str (:title data) " (" date " @ " time ")")))))

(defn filter-parent
  [data owner]
  (let [id (get-value "topic" owner)]
    (if (= id "")
      (om/update! data *parent-path* (:posts data))
      (do
        (om/update! data *parent-path*
                    (filter #(= id (get-in % [:topic :_id])) (:posts data)))
        (om/transact! data *parent-path*
                      (fn [m] (conj m (first (filter #(= id (:_id %)) (:topics data))))))
        (om/transact! data *parent-path*
                      #(reverse (sort-by :last-updated %)))))))

(defn update-view
  [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/api/topics"
                {:handler #(om/transact! data :topics (fn [_] %))
                 :error-handler #(.error js/console %)})
      (ajax/GET "/api/posts"
                {:handler #(om/transact! data *parent-path* (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (d/div {:id "update"
              :class "container"}
             (d/div {:class "row"}
                    (d/div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
                           (d/div {:class "content"}
                                  (d/h2 "New Post")
                                  (d/div {:class "panel panel-default"}
                                         (d/div {:class "panel-body"}
                                                (d/div
                                                 (d/label {:for "title"}
                                                          "Title")
                                                 (d/input {:class "form-control"
                                                           :type "text"
                                                           :ref "title"}))
                                                (d/div
                                                 (d/label {:for "subtitle"}
                                                          "Subtitle")
                                                 (d/input {:class "form-control"
                                                           :ref "subtitle"}))
                                                (d/div
                                                 (d/label {:for "author"}
                                                          "Author")
                                                 (d/input {:class "form-control"
                                                           :ref "author"
                                                           :value "Akiva"}))
                                                (d/div
                                                 (d/label {:for "topic"} "Topic")
                                                 (d/select {:ref "topic"
                                                            :class "form-control"
                                                            :defaultValue ""
                                                            :onChange #(filter-parent data owner)}
                                                           (d/option "Select topic...")
                                                           (om/build-all render-options
                                                                         (:topics data))))
                                                (d/div
                                                 (d/label {:for "parent"} "Parent")
                                                 (d/select {:ref "parent"
                                                            :class "form-control"}
                                                           (d/option "Select parent...")
                                                           (om/build-all render-options
                                                                         (get-in data *parent-path*))))
                                                (d/div {:ref "tweet"
                                                        :class "checkbox"}
                                                       (d/label
                                                        (d/input {:type "checkbox"
                                                                  :ref "tweet"})
                                                        "Tweet this?"))
                                                (d/div
                                                 (d/label {:for "body"}
                                                          "Body")
                                                 (d/textarea {:ref "body"
                                                              :class "form-control"
                                                              :rows 16}))
                                                (d/div
                                                 (d/label {:for "excerpt"}
                                                          "Excerpt")
                                                 (d/textarea {:ref "excerpt"
                                                              :class "form-control"
                                                              :rows 4}))))
                                  (d/div {:class "text-right"}
                                         (d/button {:type "button"
                                                    :class "btn btn-default"
                                                    :onClick #(process-post data owner)}
                                                   "Post")))))))))

(defroute update-path "/update" [] (change-view update-view :update-view))
