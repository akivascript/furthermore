// Compiled by ClojureScript 0.0-3119 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.core');

cljs_time.coerce.ICoerce = (function (){var obj25851 = {};
return obj25851;
})();

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((function (){var and__4110__auto__ = obj;
if(and__4110__auto__){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else {
return and__4110__auto__;
}
})()){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4758__auto__ = (((obj == null))?null:obj);
return (function (){var or__4122__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 * number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__25853 = (new goog.date.UtcDateTime());
G__25853.setTime(millis);

return G__25853;
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 * returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
return cljs.core.first.call(null,(function (){var iter__4876__auto__ = (function cljs_time$coerce$from_string_$_iter__25862(s__25863){
return (new cljs.core.LazySeq(null,(function (){
var s__25863__$1 = s__25863;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__25863__$1);
if(temp__4406__auto__){
var s__25863__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25863__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__25863__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__25865 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__25864 = (0);
while(true){
if((i__25864 < size__4875__auto__)){
var f = cljs.core._nth.call(null,c__4874__auto__,i__25864);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e25868){if((e25868 instanceof Error)){
var _ = e25868;
return null;
} else {
throw e25868;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__25865,d);

var G__25870 = (i__25864 + (1));
i__25864 = G__25870;
continue;
} else {
var G__25871 = (i__25864 + (1));
i__25864 = G__25871;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25865),cljs_time$coerce$from_string_$_iter__25862.call(null,cljs.core.chunk_rest.call(null,s__25863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25865),null);
}
} else {
var f = cljs.core.first.call(null,s__25863__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e25869){if((e25869 instanceof Error)){
var _ = e25869;
return null;
} else {
throw e25869;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__25862.call(null,cljs.core.rest.call(null,s__25863__$2)));
} else {
var G__25872 = cljs.core.rest.call(null,s__25863__$2);
s__25863__$1 = G__25872;
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
return iter__4876__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 * js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
return cljs_time.coerce.from_long.call(null,date.getTime());
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var temp__4404__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4404__auto__)){
var dt = temp__4404__auto__;
return dt.getTime();
} else {
return null;
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__4110__auto__ = millis;
if(cljs.core.truth_(and__4110__auto__)){
return (millis / (1000));
} else {
return and__4110__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var temp__4404__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4404__auto__)){
var dt = temp__4404__auto__;
return (new Date(dt.getTime()));
} else {
return null;
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 * using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var temp__4404__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4404__auto__)){
var dt = temp__4404__auto__;
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
var temp__4404__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4404__auto__)){
var dt = temp__4404__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
var temp__4404__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4404__auto__)){
var dt = temp__4404__auto__;
var G__25874 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__25874.setHours(dt.getHours());

G__25874.setMinutes(dt.getMinutes());

G__25874.setSeconds(dt.getSeconds());

G__25874.setMilliseconds(dt.getMilliseconds());

return G__25874;
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
return cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,local_date_time__$1),cljs_time.core.month.call(null,local_date_time__$1),cljs_time.core.day.call(null,local_date_time__$1),cljs_time.core.hour.call(null,local_date_time__$1),cljs_time.core.minute.call(null,local_date_time__$1),cljs_time.core.second.call(null,local_date_time__$1),cljs_time.core.milli.call(null,local_date_time__$1));
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
return cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,local_date__$1),cljs_time.core.month.call(null,local_date__$1),cljs_time.core.day.call(null,local_date__$1));
});

Date.prototype.cljs_time$coerce$ICoerce$ = true;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));
