(ns furthermore.update
  (:require [ajax.core :as ajax]
            [clojure.string :refer [lower-case replace split]]
            [cljs-time.local :refer [format-local-time local-now]]
            [cljs-time.coerce :refer [to-date]]
            [cljs-time.core :refer [plus hours]]
            [cljs-uuid.core :refer [make-random]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :refer [dispatch!] :refer-macros [defroute]]

            [furthermore.home :refer [home-path]]
            [furthermore.routing :refer [change-view]]
            [furthermore.state :refer [initialize-state]]
            [furthermore.utils :refer [format-timestamp]]))

(enable-console-print!)

(def ^:private *parent-path* [:pages :update :parent])
(def ^:private *post-parts* [:title :subtitle :author :topic :parent :tweet :body :excerpt])

(defn create-url-name
  [entity]
  (-> (or (:title entity)
          "Untitled")
      (replace #"[\.,\-\/#!\?$%\^&\*\'\";:{}=\-_`~()]" "")
      (replace #" " "-")
      lower-case))

(defn create-url-date
  [entity]
  (let [title (create-url-name entity)
        date (format-local-time (:created-on entity) :date)]
   (str date "-" title)))

(defn get-value
  [ref owner]
  (condp = ref
    :tweet (.-checked (om/get-node owner (name ref)))
    (.-value (om/get-node owner (name ref)))))

(defn create-link-to
  [target link-type]
  {:_id (or (:_id target) target)
   :type (keyword link-type)})

(defn process-post
  [data owner]
  (let [post (apply merge (map
                           #(when-let [value (get-value % owner)]
                              (when-not (empty? value)
                                (case %
                                  (:parent :topic) (let [[id type] (split value "|")]
                                                     (hash-map % {:_id id
                                                                  :type (keyword type)}))
                                  (hash-map % value))))
                           *post-parts*))
        post (assoc post :_id (make-random))
        post (assoc post :type :post)
        post (assoc post :log true)
        post (assoc post :created-on (to-date (plus (local-now) (hours 5))))
        post (assoc post :url (create-url-date post))]
    (om/transact! data :posts #(conj % {(:_id post) post}))
    (om/transact! data [:topics (get-in post [:parent :_id])]
                  #(update % :references conj (create-link-to post :post)))
    (ajax/POST "/api/update/post"
               {:params post
                :handler #(.log js/console (str %))
                :format :edn
                :error-handler #(.error js/console %)})))

(defn render-options
  [data owner]
  (om/component
   (let [{:keys [date time]} (format-timestamp (:created-on data))]
     (d/option {:value (str (:_id data) "|" (name (:type data)))}
      (str (:title data) " (" date " @ " time ")")))))

(defn filter-parent
  [data owner]
  (let [id (-> (get-value "topic" owner)
               (split "|")
               first)]
    (if (= id "")
      (om/update! data *parent-path* (:posts data))
      (do
        (om/update! data *parent-path*
                    (filter #(= id (get-in % [:topic :_id])) (vals (:posts data))))
        (om/transact! data *parent-path*
                      (fn [m] (conj m (first (filter #(= id (:_id %)) (vals (:topics data)))))))
        (om/transact! data *parent-path*
                      #(reverse (sort-by :last-updated %)))))))

(defn update-view
  [data owner]
  (om/component
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
                                                           :onChange #(filter-parent data owner)}
                                                          (d/option "Select topic...")
                                                          (om/build-all render-options
                                                                        (vals (:topics data)))))
                                               (d/div
                                                (d/label {:for "parent"} "Parent")
                                                (d/select {:ref "parent"
                                                           :class "form-control"}
                                                          (d/option "Select parent...")
                                                          (om/build-all render-options
                                                                        (get-in data *parent-path*))))
                                               (d/div
                                                (d/div {:ref "tweet"
                                                        :class "checkbox float-left"}
                                                       (d/label
                                                        (d/input {:type "checkbox"
                                                                  :ref "tweet"})
                                                        "Tweet this?")))
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
                                                  "Post"))))))))

(defroute update-path "/update" [] (change-view update-view :update-view))
