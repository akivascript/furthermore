(ns ^:figwheel-no-load furthermore.app
  (:require [devtools.core :as devtools]
            [figwheel.client :as figwheel :include-macros true]
            [furthermore.core :as core]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :on-jsload core/mount-components)

(devtools/install!)

(core/init!)
