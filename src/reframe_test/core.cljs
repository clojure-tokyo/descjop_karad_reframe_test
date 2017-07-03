(ns reframe_test.core
    (:require [cljs.nodejs :as nodejs]))

(def path (nodejs/require "path"))

(def Electron (nodejs/require "electron"))

(def BrowserWindow (.-BrowserWindow Electron))

(def crash-reporter (.-crashReporter Electron))

(def Os (nodejs/require "os"))

(def *win* (atom nil))

(def app (.-app Electron))

;;

(def is-mac (= (.-platform nodejs/process) "darwin"))

(def Menu (.-Menu Electron))

(def Shell (.-shell Electron))

(def app-name (.getName app))

(def menu-template
  (if is-mac
    [{:label   app-name
      :submenu [{:label   "Quit."
                 :accelerator "Command+Q"
                 :click (fn [] (.quit app))}]}
     {:label   "Help"
      :role    "help"
      :submenu [{:label   "About this mac app"
                 :accelerator "Command+H"
                 :click (fn [] (.openExternal Shell "http://descjop.org/"))}]}]
    [{:label   "Help"
      :submenu [{:label   "About this windows/linux app"
                 :accelerator "Control+H"
                 :click (fn [] (.openExternal Shell "http://descjop.org/"))}]}]))

;;

(defn -main []
  (.start crash-reporter (clj->js {:companyName "Your Company Name"
                                   :submitURL   "http://example.com/"}))

  ;; error listener
  (.on nodejs/process "error"
       (fn [err] (.log js/console err)))

  ;; window all closed listener
  (.on app "window-all-closed"
       (fn [] (if (not= (.-platform nodejs/process) "darwin")
                (.quit app))))

  ;; ready listener
  (.on app "ready"
       (fn []
         (reset! *win* (BrowserWindow. (clj->js {:width 800 :height 600})))

         ;; menu build
         (.setApplicationMenu Menu
                              (.buildFromTemplate Menu (clj->js menu-template)))


         ;; when no optimize comment out
         (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../index.html")))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))

         (.on @*win* "closed" (fn [] (reset! *win* nil))))))

(nodejs/enable-util-print!)

;;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start descjop application on " (.type Os) "."))

(set! *main-cli-fn* -main)
