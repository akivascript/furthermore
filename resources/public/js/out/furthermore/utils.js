// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.utils');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('cljs_time.format');
goog.require('clojure.string');
furthermore.utils.format_timestamp = (function furthermore$utils$format_timestamp(timestamp){
var ts = (new goog.date.DateTime((new Date(timestamp))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"MMMM d, yyyy"),ts),new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"hh:mm a"),ts)], null);
});
furthermore.utils.get_text_excerpt = (function furthermore$utils$get_text_excerpt(text,ct){
if((cljs.core.count.call(null,text) < ct)){
return text;
} else {
var ct__$1 = ((function (){var or__4122__auto__ = ct;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return (140);
}
})() - (1));
var text__$1 = cljs.core.subs.call(null,text,(0),ct__$1);
var text__$2 = clojure.string.replace.call(null,text__$1,/\W+$/,"");
return [cljs.core.str(text__$2),cljs.core.str("...")].join('');
}
});
