(ns reframe_test-front.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [re-frame.core :as rf]))

(defonce state (atom {:message "Hello Reagent world"}))

;; events

(rf/reg-event-db
  :initialize
  (fn [db [_ _]]
    (assoc db :message "Re-frame")))

(rf/reg-event-db
  :click-button
  (fn [db [_ _]]
    ;(js/alert (.. js/window -location -href))
    (assoc db :message "Re-frame Clicked!")))

;; subs

(rf/reg-sub
  :message
  (fn [db _]
    (:message db)))

;; root component

(defn root-component []
  (let [message @(rf/subscribe [:message])]
    [:div.window
     ;;<header class="toolbar toolbar-header">
     ;;<h1 class="title">Header</h1>
     ;;</header>
     [:header.toolbar.toolbar-header {}
      [:h1.title "test"]]
     [:div.window-content
      [:div.pane-group
       [:div.pane-sm.sidebar]
       [:div.pane
        [:h1 message]
        [:p "with figwheel!"]
        [:img {:src "logo.png"}]
        [:p message]
        [:button {:on-click #(rf/dispatch [:click-button])} "BUTTON"]]]]
     [:div.toolbar.toolbar-footer
      [:div.title "Footer"]]
     ]))

(defn mount-root [setting]
  (rf/dispatch-sync [:initialize])
  (reagent/render [root-component]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (mount-root setting))
