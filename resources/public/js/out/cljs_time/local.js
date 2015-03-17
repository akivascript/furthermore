// Compiled by ClojureScript 0.0-3119 {}
goog.provide('cljs_time.local');
goog.require('cljs.core');
goog.require('goog.date.DateTime');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25825){
var vec__25826 = p__25825;
var k = cljs.core.nth.call(null,vec__25826,(0),null);
var f = cljs.core.nth.call(null,vec__25826,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",-483947944)))?cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),((function (vec__25826,k,f){
return (function (p1__25824_SHARP_){
return cljs_time.core.to_default_time_zone.call(null,p1__25824_SHARP_);
});})(vec__25826,k,f))
):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now.call(null);
});

cljs_time.local.ILocalCoerce = (function (){var obj25828 = {};
return obj25828;
})();

/**
 * convert `obj` to a local goog.date
 * DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((function (){var and__4110__auto__ = obj;
if(and__4110__auto__){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1;
} else {
return and__4110__auto__;
}
})()){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
var x__4758__auto__ = (((obj == null))?null:obj);
return (function (){var or__4122__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs_time.local.to_local_date_time["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ILocalCoerce.to-local-date-time",obj);
}
}
})().call(null,obj);
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Return local DateTime instance from string using
 * formatters in *local-formatters*, returning first
 * which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first.call(null,(function (){var iter__4876__auto__ = (function cljs_time$local$from_local_string_$_iter__25837(s__25838){
return (new cljs.core.LazySeq(null,(function (){
var s__25838__$1 = s__25838;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__25838__$1);
if(temp__4406__auto__){
var s__25838__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25838__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__25838__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__25840 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__25839 = (0);
while(true){
if((i__25839 < size__4875__auto__)){
var f = cljs.core._nth.call(null,c__4874__auto__,i__25839);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e25843){if((e25843 instanceof Error)){
var _ = e25843;
return null;
} else {
throw e25843;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__25840,d);

var G__25845 = (i__25839 + (1));
i__25839 = G__25845;
continue;
} else {
var G__25846 = (i__25839 + (1));
i__25839 = G__25846;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25840),cljs_time$local$from_local_string_$_iter__25837.call(null,cljs.core.chunk_rest.call(null,s__25838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25840),null);
}
} else {
var f = cljs.core.first.call(null,s__25838__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e25844){if((e25844 instanceof Error)){
var _ = e25844;
return null;
} else {
throw e25844;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$local$from_local_string_$_iter__25837.call(null,cljs.core.rest.call(null,s__25838__$2)));
} else {
var G__25847 = cljs.core.rest.call(null,s__25838__$2);
s__25838__$1 = G__25847;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4876__auto__.call(null,cljs.core.vals.call(null,cljs_time.local._STAR_local_formatters_STAR_));
})());
});
(cljs_time.local.ILocalCoerce["string"] = true);

(cljs_time.local.to_local_date_time["string"] = (function (string){
return cljs_time.local.from_local_string.call(null,string);
}));

(cljs_time.local.ILocalCoerce["number"] = true);

(cljs_time.local.to_local_date_time["number"] = (function (long$){
return cljs_time.local.as_local_date_time_from_time_zone.call(null,long$);
}));

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = true;

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,date_time__$1);
});

Date.prototype.cljs_time$local$ILocalCoerce$ = true;

Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,date__$1));
});

(cljs_time.local.ILocalCoerce["null"] = true);

(cljs_time.local.to_local_date_time["null"] = (function (_){
return null;
}));
/**
 * Format obj as local time using the local formatter corresponding
 * to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__4406__auto__ = cljs_time.local.to_local_date_time.call(null,obj);
if(cljs.core.truth_(temp__4406__auto__)){
var dt = temp__4406__auto__;
var temp__4406__auto____$1 = format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_);
if(cljs.core.truth_(temp__4406__auto____$1)){
var fmt = temp__4406__auto____$1;
return cljs_time.format.unparse.call(null,fmt,dt);
} else {
return null;
}
} else {
return null;
}
});
