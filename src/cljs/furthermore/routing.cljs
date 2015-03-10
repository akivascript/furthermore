(ns furthermore.routing
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]))

(def pub-chan (chan))
(def sub-chan (pub pub-chan :topic))

(defn consume-events
  [owner topic fn]
  (let [sub-chan (om/get-shared owner :sub-chan)]
    (let [event-chan (sub sub-chan topic (chan))]
      (go-loop [event (<! event-chan)]
        (fn event)
        (recur (<! event-chan))))))

(defn change-view
  [view view-name & {:keys [init-state data]}]
  (let [view-map (as-> {:topic :change-view
                        :view view
                        :view-name view-name} view-map
                   (if init-state
                     (assoc view-map :view-init-state init-state)
                     view-map)
                   (if data
                     (assoc view-map :data data)
                     view-map))]
    (put! pub-chan view-map)))
