(ns furthermore.views.tags
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [markdown.core :refer [md-to-html-string]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.tags :as tags]
            [furthermore.entities.topics :as topics]
            [furthermore.views.util :as vutil]
            [furthermore.util :as util]))

(def prepare (comp (partial vutil/prepare-text md-to-html-string)
                   (partial vutil/prepare-text smarten)
                   :title))

(defn- link
  "Return a list of HTML anchors. If a tag matches
  the tag-url, it is returned, too, but not as an anchor."
  [tag-url tag]
  (let [tag-url' (util/url-name tag)]
    (if (or (nil? tag-url)
            (not= tag-url tag-url'))
      (html (link-to (str "/tags/" tag-url') tag))
      tag)))

(defn- taglist
  "Returns a string of tag titles, the one matching tag-url unactionable."
  [tags tag-url]
  (apply str (interpose " &bull; " (map
                                    (comp (partial link tag-url) prepare) tags))))

(defn- refsmap
  "Given a tag's url name, return all of that tag's references."
  [tag-url]
  (group-by :kind (:refs (tags/get :url tag-url))))

(defn- entities
  "Return a list of entities from a coll of refs by calling function f."
  [f coll]
  (if (empty? coll)
    '()
    (map (comp (partial f :_id) :_id) coll)))

(defn- entries
  "Given a tag's url name, return a list of that tag's relevant entities."
  [tag-url]
  (let [refs (refsmap tag-url)]
    (sort-by :created-on
             (flatten
              (merge
               (entities posts/get (:post refs))
               (entities follows/get (:follow refs))
               (entities topics/get (:topic refs)))))))

(defmulti render :kind)

(defmethod render :follow
  [entity]
  (let [{:keys [date time]} (util/timestamp (:created-on entity))
        parent (posts/get :_id (get-in entity [:parent :_id]))]
    [:div.follow
     [:i.fa.fa-paperclip {:aria-hidden "true"}]
     [:div.col-xs-5.title (link-to (str (util/url-path entity) (:url entity))
                                   (smarten (:title entity)))]
     [:div.col-xs-3.parent (link-to (str (util/url-path parent) (:url parent))
                                   (smarten (:title parent)))]
     [:div.col-xs-4.date.small (str date " @ " time)]]))

(defmethod render :post
  [entity]
  (let [{:keys [date time]} (util/timestamp (:created-on entity))
        topic (topics/get :_id (get-in entity [:topic :_id]))]
    [:div.post
     [:div.col-sm-8
      [:span.topic (link-to (str (util/url-path topic) (:url topic))
                           (smarten (str (:title topic) ":")))]
      [:span.title (link-to (str (util/url-path entity) (:url entity))
                           (smarten (:title entity)))]]
     [:div.col-sm-4.date.small.text-right (str date " @ " time)]]))

(defmethod render :topic
  [entity]
  (let [{:keys [date time]} (util/timestamp (:created-on entity))]
    [:div.topic
     [:i.fa.fa-archive {:aria-hidden "true"}]
     [:div.col-xs-5.title (link-to (str (util/url-path entity) (:url entity))
                                   (smarten (:title entity)))]
     [:div.col-xs-5.date.small (str date " @ " time)]]))

(defn content
  "Displays the contents of the tags page."
  ([]
   (content nil))
  ([tag-url]
   (let [tags (sort-by :title (tags/get-all))]
     [:div#tags.container
      [:div#banner.page-header
       [:div.row
        [:div.col-xs-12.col-sm-10.col-sm-offset-1
         [:div.title "Tags"]
         [:div.tags (taglist tags tag-url)]]]
       (when-not (nil? tag-url)
         [:div.row
          [:div.col-xs-12.col-sm-10.col-sm-offset-1
           [:div.posts
            (for [entry (entries tag-url)] (render entry))]
           ]])]])))
