(ns furthermore.static
  (:require [ajax.core :as ajax]
            [markdown.core :refer [md->html]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as d :include-macros true]
            [typographer.core :as t]))

(defn- get-page-name
  []
  (let [url window.location.pathname]
    (subs url (+ 2 (.lastIndexOf url)))))

(defn get-page
  [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (ajax/GET (str "/get/static/" (get-page-name))
                {:handler #(om/update! app [:static] %)
                 :error-handler #(.error js/console %)}))
    om/IRender
    (render [_]
      (when-let [page (get app :static)]
        (d/div {:id "static"
                :class "container"}
               (d/div {:class "col-xs-12 col-sm-8 col-sm-offset-2"}
                      (d/div {:class "title"}
                             (t/smarten (:title page)))
                      (d/div {:class "body"
                              :dangerouslySetInnerHTML
                              {:__html (-> (:body page) t/smarten md->html)}})))))))
