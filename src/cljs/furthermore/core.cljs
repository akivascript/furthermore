(ns furthermore.core
  (:require [clojure.string :refer [split]]
            [ajax.core :as ajax]
            [ajax.edn :as edn]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [goog.dom :as dom]

            [furthermore.utils :refer [format-timestamp]]))

(defonce posts (atom {}))

;;
;; Contents page
;;
(defn ^:export initialize-contents
  []
  (doseq [entry (sel :.glyphicon)]
    (let [target (-> entry dommy/parent dommy/parent
                     dom/getNextElementSibling)]
      (dommy/listen! entry :click
                     (fn [_]
                       (dommy/toggle-class! entry "glyphicon-triangle-right")
                       (dommy/toggle-class! entry "glyphicon-triangle-bottom")
                       (when-not (nil? target) (dommy/toggle! target)))))))

;;
;; Updates page
;;
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
    (when-not (nil? topic)
      (doseq [p ps]
        (dom/appendChild optgroup p)))))

(defn ^:export initialize-update
  []
  (let [topic (sel1 :#topics)
        parents (sel1 :#parents)]
    (ajax/GET "/api/posts" {:handler
                            (fn [xs] (reset! posts
                                             (filter #(contains? #{:post} (:kind %)) xs)))})
    (dommy/listen! topic :change
                   (fn [_]
                     (let [id (-> (dommy/value topic)
                                  (split "|")
                                  first)]
                       (filter-options id parents))))
    (dommy/listen! (sel1 :#delete) :click
                   (fn [_]
                       (ajax/ajax-request
                        {:uri (str "/api/update/" (dommy/value (sel1 :#kind)) "/"
                                   (dommy/value (sel1 :#_id)))
                         :method :delete
                         :handler (fn [[ok response]]
                                    (set! (-> js/window .-location .-href) "/admin"))
                         :format (edn/edn-request-format)
                         :response-format (edn/edn-request-format)})))))

(defn mount-components [] "Done")
(defn init! [])
