(ns furthermore.views.tags
  "This namespace provides a view of posts and follow-ups grouped
  by their tags (or untagged if, uh, untagged)."
  (:require [hiccup.core :refer :all]
            [hiccup.element :refer [link-to]]
            [typographer.core :refer [smarten]]

            [furthermore.entities.follows :as follows]
            [furthermore.entities.posts :as posts]
            [furthermore.entities.tags :as tags]
            [furthermore.entities.topics :as topics]
            [furthermore.views.util :as vutil]
            [furthermore.util :as util]))

(defn- link
  "Return a list of HTML anchors. If a tag matches
  the tag-url, it is returned, too, but not as an anchor."
  [tag-url tag]
  (if (or (nil? tag-url)
          (not= tag-url (:url tag)))
    (html (link-to (str "/tags/" (:url tag)) (:title tag)))
    (smarten (:title tag))))

(defn- taglist
  "Returns a string of tag titles with 'Untagged' added to the end."
  [tags tag-url]
  (let [tags' (conj (into [] (sort-by :title tags)) (tags/create "Untagged"))]
    (apply str (interpose " &bull; " (map (partial link tag-url) tags')))))

(defn- refsmap
  "Given a tag's url name, return all of that tag's references."
  [tag-url]
  (group-by :kind (:refs (tags/get :url tag-url))))

(defn- entities
  "Return a list of entities from a coll of refs by calling function f."
  [f coll]
  (cond
    (seq coll) (map (comp (partial f :_id) :_id) coll)
    (nil? coll) '()
    :else
    coll))

(defn- entries
  "Given a tag's url name, return a list of that tag's relevant entities."
  [tag-url]
  (if (= tag-url "untagged")
    (sort-by :created-on
             (tags/untagged
              (flatten
               (merge
                (follows/get-all)
                (posts/get-all)
                (topics/get-all)))))
    (let [refs (refsmap tag-url)]
      (sort-by :created-on
               (flatten
                (merge
                 (entities posts/get (:post refs))
                 (entities follows/get (:follow refs))
                 (entities topics/get (:topic refs))))))))

(defmulti render :kind)

(defmethod render :follow
  [entity]
  (let [{:keys [date time]} (util/timestamp (:created-on entity))
        parent (posts/get :_id (get-in entity [:parent :_id]))]
    [:div.entry
     [:div.col-sm-8
      [:span.text
       [:i.fa.fa-paperclip {:aria-hidden "true"}]
       (link-to (str (util/url-path entity) (:url entity)) (:body entity))]]
     [:div.col-sm-4.date.small.text-right (str date " @ " time)]]))

(defmethod render :post
  [entity]
  (let [{:keys [date time]} (util/timestamp (:created-on entity))]
    [:div.entry
     [:div.col-sm-8
      [:span.text
       [:i.fa.fa-folder {:aria-hidden "true"}]
       (link-to (str (util/url-path entity) (:url entity))
                            (smarten (:title entity)))]]
     [:div.col-sm-4.date.small.text-right (str date " @ " time)]]))

(defmethod render :topic
  [entity]
  (let [{:keys [date time]} (util/timestamp (:created-on entity))]
    [:div.entry
     [:div.col-sm-8
      [:span.text
       [:i.fa.fa-archive {:aria-hidden "true"}]
       (link-to (str (util/url-path entity) (:url entity))
                            (smarten (:title entity)))]]
     [:div.col-sm-4.date.small.text-right (str date " @ " time)]]))

(defn content
  "Displays the contents of the tags page."
  ([]
   (content nil))
  ([tag-url]
   (let [tags (tags/get-all)]
     [:div#tags.container
      [:div#banner.page-header
       [:div.row
        [:div.col-xs-12.col-sm-10.col-sm-offset-1
         [:div.page-title "Tags"]
         [:div.tags (taglist tags tag-url)]]]
       (when-not (nil? tag-url)
         [:div.row
          [:div.col-xs-12.col-sm-10.col-sm-offset-1
           [:div.posts
            (for [entry (entries tag-url)] (render entry))]]])]])))
