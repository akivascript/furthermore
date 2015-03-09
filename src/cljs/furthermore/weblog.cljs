(ns furthermore.weblog
  (:require [ajax.core :as ajax]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [secretary.core :as seretary]
            [typographer.core :as t]
            [furthermore.utils :as utils]))

(enable-console-print!)

(defn set-status
  [kind type]
  (let [kind (kind {:new "Added"
                    :update "Updated"})
        type (type {:post "post"
                    :static "page"
                    :topic "topic"})]
    (str kind " " type)))

(defn entries
  [entry owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (when (:topic entry)
        (ajax/GET (str "/get/topic/" (:topic entry))
                  {:handler #(om/transact! entry :topic (fn [_] %))
                   :error-handler #(.error js/console %)})))
    om/IRender
    (render [_]
      (let [{date :date time :time} (utils/format-timestamp (:date entry))]
        (d/div {:class "row entry"}
               (d/div {:class "col-xs-3 date"}
                      (str date " @ " time))
               (d/div {:class "col-xs-2 status"
                       :style {:textAlign "left"}}
                      (set-status (:kind entry) (:type entry)))
               (d/div {:class "col-xs-5 title"}
                      (let [url (case (:type entry)
                                  :post (str "/post/" (:url entry))
                                  :static (str "/" (:url entry))
                                  "")]
                        (if-not (= :topic (:type entry))
                          (d/a {:href url
                                :onClick (fn [event]
                                           (utils/navigate-to url)
                                           (.preventDefault event))}
                               (:title entry))
                          (:title entry))))
               (d/div {:class "col-xs-2 topic"}
                      (get-in entry [:topic :title])))))))

(defn updates-view
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET "/get/weblog"
                {:handler #(om/transact! app :weblog (fn [_] %))
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (d/div {:id "weblog"
                :class "container"}
             (d/div {:class "row"}
                    (apply d/div {:class "col-xs-12 col-md-10 col-md-offset-1 entries"}
                           (om/build-all entries (:weblog app))))))))
