(ns reframe_test-front.init
    (:require [reframe_test-front.core :as core]
              [reframe_test-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
