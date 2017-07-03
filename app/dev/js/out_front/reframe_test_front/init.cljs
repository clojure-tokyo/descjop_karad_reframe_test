(ns reframe_test-front.init
  (:require [figwheel.client :as fw :include-macros true]
            [reframe_test-front.core :as core]
            [reframe_test-front.conf :as conf]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
