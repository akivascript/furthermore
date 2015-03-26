(ns furthermore.dev
  (:require [figwheel.client :as fw]
            [furthermore.core]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws")
