(ns furthermore.core
  (:require [clojure.string :refer [split]]
            [ajax.core :as ajax]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [goog.dom :as dom]

            [furthermore.utils :refer [format-timestamp]]))

;;
;; Contents page
;;
(defn ^:export initialize-contents
  []
  (doseq [entry (sel :.glyphicon)]
    (let [target (dom/getNextElementSibling (dommy/parent (dommy/parent entry)))]
      (dommy/listen! entry :click
                     (fn [_]
                       (dommy/toggle-class! entry "glyphicon-triangle-right")
                       (dommy/toggle-class! entry "glyphicon-triangle-bottom")
                       (dommy/toggle! target))))))

;;
;; Updates page
;;
(defonce posts (atom {}))

(defn- create-option
  [item]
  (let [{:keys [date time]} (format-timestamp (:created-on item))]
    (-> (dommy/create-element "option")
        (dommy/set-text! (str (:title item) " (" date " @ " time ")"))
        (dommy/set-value! (str (:_id item) "|" (name (:kind item)))))))

(defn- filter-options
  [topic target]
  (let [ps (map create-option (filter #(= topic (get-in % [:topic :_id])) @posts))
        optgroup (sel1 :#posts)]
    (dommy/clear! optgroup)
    (if-not (nil? topic)
      (doseq [p ps]
        (dom/appendChild optgroup p)))))

(defn ^:export initialize-update
  []
  (let [topic (sel1 :#topics)
        parents (sel1 :#parents)]
    (ajax/GET "/api/posts" {:handler
                            (fn [xs] (reset! posts
                                             (filter #(contains? #{:post} (:kind %)) xs)))
                            :error-handler
                            (fn [{:keys [status status-text]}]
                              (println status)
                              (println status-text))})
    (dommy/listen! topic :change
                   (fn [_]
                     (let [id (-> (dommy/value topic)
                                  (split "|")
                                  first)]
                       (filter-options id parents))))))
