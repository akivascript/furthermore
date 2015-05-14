(ns furthermore.core
  (:require [ajax.core :as ajax]
            [cljs.reader :refer [read-string]]
            [clojure.string :refer [split]]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [goog.events :as events]
            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.dom.forms :as forms]
            [furthermore.utils :refer [format-timestamp]]))

(enable-console-print!)

;;
;; Contents page initialization
;;
(defn init-contents
  []
  (doseq [entry (sel :.glyphicon)]
    (let [target (dom/getNextElementSibling (dommy/parent (dommy/parent entry)))]
      (dommy/listen! entry :click
                     (fn [_]
                       (dommy/toggle-class! entry "glyphicon-triangle-right")
                       (dommy/toggle-class! entry "glyphicon-triangle-bottom")
                       (dommy/toggle! target))))))

;;
;; Update page initialization
;;
(defonce posts (atom {}))

(defn- create-option
  [item]
  (let [{:keys [date time]} (format-timestamp (:created-on item))]
    (-> (dommy/create-element "option")
        (dommy/set-text! (str (:title item) " (" date " @ " time ")"))
        (dommy/set-value! (str (:_id item) "|" (:type item))))))

(defn- filter-options
  [topic target]
  (let [ps (map create-option (filter #(= topic (get-in % [:topic :_id])) @posts))
        optgroup (sel1 :#posts)]
    (dommy/clear! optgroup)
    (if-not (nil? topic)
      (doseq [p ps]
        (dom/appendChild optgroup p)))))

(defn init-update
  []
  (let [topic (sel1 :#topics)
        parents (sel1 :#parents)]
    (ajax/GET "/api/posts" {:handler (fn [xs] (reset! posts
                                                    (filter #(= :post (:type %)) xs)))})

    (dommy/listen! topic :change
                   (fn [_]
                     (let [id (-> (dommy/value topic)
                                  (split "|")
                                  first)]
                       (filter-options id parents))))))
