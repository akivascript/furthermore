// Compiled by ClojureScript 0.0-3119 {}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.date');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.internal.core');
goog.require('goog.string.format');
goog.require('clojure.string');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function cljs_time$format$abbreviate(n,s){
return cljs.core.subs.call(null,s,(0),n);
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 * The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 * time zone names cannot be parsed and a few more symbols are supported. All
 * ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 * Symbol  Meaning                      Presentation  Examples
 * ------  -------                      ------------  -------
 * G       era                          text          AD
 * C       century of era (>=0)         number        20
 * Y       year of era (>=0)            year          1996
 * 
 * x       weekyear                     year          1996
 * w       week of weekyear             number        27
 * e       day of week                  number        2
 * E       day of week                  text          Tuesday; Tue
 * 
 * y       year                         year          1996
 * D       day of year                  number        189
 * M       month of year                month         July; Jul; 07
 * d       day of month                 number        10
 * 
 * a       halfday of day               text          PM
 * K       hour of halfday (0~11)       number        0
 * h       clockhour of halfday (1~12)  number        12
 * 
 * H       hour of day (0~23)           number        0
 * k       clockhour of day (1~24)      number        24
 * m       minute of hour               number        30
 * s       second of minute             number        55
 * S       fraction of second           number        978
 * a       meridiem                     text          am; pm
 * A       meridiem                     text          AM; PM
 * 
 * z       time zone                    text          Pacific Standard Time; PST
 * Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 * '       escape for text              delimiter
 * ''      single quote                 literal       '
 * 
 * The count of pattern letters determine the format.
 * 
 * **Text:** If the number of pattern letters is 4 or more, the full form is used;
 * otherwise a short or abbreviated form is used if available.
 * 
 * **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 * amount.
 * 
 * **Year:** Numeric presentation for year and weekyear fields are handled
 * specially. For example, if the count of 'y' is 2, the year will be displayed
 * as the zero-based year of the century, which is two digits.
 * 
 * **Month:** 3 or over, use text, otherwise use number.
 * 
 * **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 * colon, 'ZZZ' or more outputs the zone id.
 * 
 * **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 * Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 * ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 * '.', ' ', '#' and '?' will appear in the resulting time text even they are
 * not embraced within single quotes.
 */
cljs_time.format.date_formatters = (function (){var d = (function (p1__28955_SHARP_){
return p1__28955_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__28956_SHARP_){
return (p1__28956_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__28957_SHARP_){
return p1__28957_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__28958_SHARP_){
var hr = cljs.core.mod.call(null,p1__28958_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__28959_SHARP_){
if((p1__28959_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__28960_SHARP_){
if((p1__28960_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__28961_SHARP_){
return p1__28961_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__28962_SHARP_){
return p1__28962_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__28963_SHARP_){
return p1__28963_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__28964_SHARP_){
return p1__28964_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__28965_SHARP_){
return p1__28965_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__28966_SHARP_){
return p1__28966_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__28967_SHARP_){
return p1__28967_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28979_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,H.call(null,p1__28979_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28983_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,Math.ceil.call(null,(doy.call(null,p1__28983_SHARP_) / (7))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28974_SHARP_){
return cljs_time.format.abbreviate.call(null,(3),cljs_time.format.months.call(null,(M.call(null,p1__28974_SHARP_) - (1))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28981_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,s.call(null,p1__28981_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28982_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,S.call(null,p1__28982_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28970_SHARP_){
return cljs_time.format.days.call(null,dow.call(null,p1__28970_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28977_SHARP_){
return cljs.core.mod.call(null,y.call(null,p1__28977_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28980_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,m.call(null,p1__28980_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28973_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,M.call(null,p1__28973_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28971_SHARP_){
return cljs_time.format.abbreviate.call(null,(3),cljs_time.format.days.call(null,dow.call(null,p1__28971_SHARP_)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28968_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,d.call(null,p1__28968_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28978_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,h.call(null,p1__28978_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28969_SHARP_){
var d__$1 = d.call(null,p1__28969_SHARP_);
return [cljs.core.str(d__$1),cljs.core.str((function (){var G__28984 = d__$1;
switch (G__28984) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28972_SHARP_){
return cljs_time.format.days.call(null,dow.call(null,p1__28972_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28976_SHARP_){
return cljs.core.mod.call(null,y.call(null,p1__28976_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__28975_SHARP_){
return cljs_time.format.months.call(null,(M.call(null,p1__28975_SHARP_) - (1)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function cljs_time$format$timezone_adjustment(d,timezone_string){
var vec__28989 = clojure.string.split.call(null,timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.call(null,vec__28989,(0),null);
var sign = cljs.core.nth.call(null,vec__28989,(1),null);
var hh = cljs.core.nth.call(null,vec__28989,(2),null);
var mm = cljs.core.nth.call(null,vec__28989,(3),null);
if(cljs.core.truth_((function (){var and__4110__auto__ = sign;
if(cljs.core.truth_(and__4110__auto__)){
var and__4110__auto____$1 = hh;
if(cljs.core.truth_(and__4110__auto____$1)){
return mm;
} else {
return and__4110__auto____$1;
}
} else {
return and__4110__auto__;
}
})())){
var sign_28991__$1 = ((cljs.core._EQ_.call(null,sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.call(null,sign,"+"))?cljs_time.core.minus:null));
var vec__28990_28992 = cljs.core.map.call(null,((function (sign_28991__$1,vec__28989,_,sign,hh,mm){
return (function (p1__28986_SHARP_){
return parseInt(p1__28986_SHARP_,(10));
});})(sign_28991__$1,vec__28989,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_28993__$1 = cljs.core.nth.call(null,vec__28990_28992,(0),null);
var mm_28994__$1 = cljs.core.nth.call(null,vec__28990_28992,(1),null);
var adjusted_28995 = sign_28991__$1.call(null,sign_28991__$1.call(null,d,cljs_time.core.hours.call(null,hh_28993__$1)),cljs_time.core.minutes.call(null,mm_28994__$1));
d.setTime(adjusted_28995.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__28996_SHARP_){
return parseInt(p1__28996_SHARP_,(10));
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__28997_SHARP_,p2__28998_SHARP_){
return cljs.core.assoc.call(null,p1__28997_SHARP_,kw,parse_int.call(null,p2__28998_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn.call(null,new cljs.core.Keyword(null,"years","years",-1298579689));
var d = assoc_fn.call(null,new cljs.core.Keyword(null,"days","days",-1394072564));
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__28999_SHARP_,p2__29000_SHARP_){
return cljs.core.assoc.call(null,p1__28999_SHARP_,new cljs.core.Keyword(null,"months","months",-45571637),(parse_int.call(null,p2__29000_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__29001_SHARP_,p2__29002_SHARP_){
return cljs.core.assoc.call(null,p1__29001_SHARP_,new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.mod.call(null,parse_int.call(null,p2__29002_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__29009,x){
var map__29010 = p__29009;
var map__29010__$1 = ((cljs.core.seq_QMARK_.call(null,map__29010))?cljs.core.apply.call(null,cljs.core.hash_map,map__29010):map__29010);
var date = map__29010__$1;
var hours = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case.call(null,x)))){
return cljs.core.assoc.call(null,date,new cljs.core.Keyword(null,"hours","hours",58380855),(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.call(null,hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn.call(null,new cljs.core.Keyword(null,"hours","hours",58380855));
var m = assoc_fn.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var s = assoc_fn.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var S = assoc_fn.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__29004_SHARP_,p2__29003_SHARP_){
var full = cljs.core.first.call(null,cljs.core.filter.call(null,((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(p2__29003_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M.call(null,p1__29004_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of.call(null,cljs_time.format.months,full) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__29005_SHARP_,p2__29006_SHARP_){
return M.call(null,p1__29005_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of.call(null,cljs_time.format.months,p2__29006_SHARP_) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__29011__delegate = function (x,args){
return x;
};
var G__29011 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__29012__i = 0, G__29012__a = new Array(arguments.length -  1);
while (G__29012__i < G__29012__a.length) {G__29012__a[G__29012__i] = arguments[G__29012__i + 1]; ++G__29012__i;}
  args = new cljs.core.IndexedSeq(G__29012__a,0);
} 
return G__29011__delegate.call(this,x,args);};
G__29011.cljs$lang$maxFixedArity = 1;
G__29011.cljs$lang$applyTo = (function (arglist__29013){
var x = cljs.core.first(arglist__29013);
var args = cljs.core.rest(arglist__29013);
return G__29011__delegate(x,args);
});
G__29011.cljs$core$IFn$_invoke$arity$variadic = G__29011__delegate;
return G__29011;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__29007_SHARP_,p2__29008_SHARP_){
return cljs.core.assoc.call(null,p1__29007_SHARP_,new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),p2__29008_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,cljs.core.partial.call(null,cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,cljs.core.partial.call(null,cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,cljs.core.partial.call(null,cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.months)),cljs.core.str(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"years","years",-1298579689),(function (p1__29014_SHARP_,p2__29015_SHARP_){
return p1__29014_SHARP_.setYear(p2__29015_SHARP_);
}),new cljs.core.Keyword(null,"months","months",-45571637),(function (p1__29016_SHARP_,p2__29017_SHARP_){
return p1__29016_SHARP_.setMonth(p2__29017_SHARP_);
}),new cljs.core.Keyword(null,"days","days",-1394072564),(function (p1__29018_SHARP_,p2__29019_SHARP_){
return p1__29018_SHARP_.setDate(p2__29019_SHARP_);
}),new cljs.core.Keyword(null,"hours","hours",58380855),(function (p1__29020_SHARP_,p2__29021_SHARP_){
return p1__29020_SHARP_.setHours(p2__29021_SHARP_);
}),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(function (p1__29022_SHARP_,p2__29023_SHARP_){
return p1__29022_SHARP_.setMinutes(p2__29023_SHARP_);
}),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(function (p1__29024_SHARP_,p2__29025_SHARP_){
return p1__29024_SHARP_.setSeconds(p2__29025_SHARP_);
}),new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (p1__29026_SHARP_,p2__29027_SHARP_){
return p1__29026_SHARP_.setMilliseconds(p2__29027_SHARP_);
}),new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function cljs_time$format$parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of.call(null,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern.call(null,[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,")|(",cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.count,cljs.core.keys.call(null,cljs_time.format.date_formatters))))),cljs.core.str(")")].join(''));
cljs_time.format.date_parse_pattern = (function cljs_time$format$date_parse_pattern(formatter){
return cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__29028_SHARP_){
return cljs.core.first.call(null,cljs_time.format.date_parsers.call(null,p1__29028_SHARP_));
})));
});
cljs_time.format.parser_fn = (function cljs_time$format$parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.nfirst.call(null,cljs.core.re_seq.call(null,cljs_time.format.date_parse_pattern.call(null,fmts),s)),cljs.core.map.call(null,cljs.core.first,cljs.core.re_seq.call(null,cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function cljs_time$format$formatter_fn(fmts,formatters){
return (function() { 
var G__29034__delegate = function (date,p__29032){
var vec__29033 = p__29032;
var formatter_overrides = cljs.core.nth.call(null,vec__29033,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,((function (vec__29033,formatter_overrides){
return (function (p1__29029_SHARP_){
return (function (){var or__4122__auto__ = formatter_overrides;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return formatters;
}
})().call(null,p1__29029_SHARP_).call(null,date);
});})(vec__29033,formatter_overrides))
], null);
};
var G__29034 = function (date,var_args){
var p__29032 = null;
if (arguments.length > 1) {
var G__29035__i = 0, G__29035__a = new Array(arguments.length -  1);
while (G__29035__i < G__29035__a.length) {G__29035__a[G__29035__i] = arguments[G__29035__i + 1]; ++G__29035__i;}
  p__29032 = new cljs.core.IndexedSeq(G__29035__a,0);
} 
return G__29034__delegate.call(this,date,p__29032);};
G__29034.cljs$lang$maxFixedArity = 1;
G__29034.cljs$lang$applyTo = (function (arglist__29036){
var date = cljs.core.first(arglist__29036);
var p__29032 = cljs.core.rest(arglist__29036);
return G__29034__delegate(date,p__29032);
});
G__29034.cljs$core$IFn$_invoke$arity$variadic = G__29034__delegate;
return G__29034;
})()
;
});
cljs_time.format.formatter = (function() {
var cljs_time$format$formatter = null;
var cljs_time$format$formatter__1 = (function (fmts){
return cljs_time$format$formatter.call(null,fmts,cljs_time.core.utc);
});
var cljs_time$format$formatter__2 = (function (fmts,dtz){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.format","formatter","cljs-time.format/formatter",1104417384)], null));
});
cljs_time$format$formatter = function(fmts,dtz){
switch(arguments.length){
case 1:
return cljs_time$format$formatter__1.call(this,fmts);
case 2:
return cljs_time$format$formatter__2.call(this,fmts,dtz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_time$format$formatter.cljs$core$IFn$_invoke$arity$1 = cljs_time$format$formatter__1;
cljs_time$format$formatter.cljs$core$IFn$_invoke$arity$2 = cljs_time$format$formatter__2;
return cljs_time$format$formatter;
})()
;
cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),cljs.core.assoc.call(null,cljs_time.format.date_formatters,"Z",cljs.core.constantly.call(null,""),"ZZ",cljs.core.constantly.call(null,""))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.format","formatter","cljs-time.format/formatter",1104417384)], null));
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714),new cljs.core.Keyword(null,"message","message",-406056002),cljs_time.internal.core.format.call(null,"%s not implemented yet",cljs.core.name.call(null,sym))], null));
});
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"default-year","default-year",1658037695),default_year);
});
/**
 * Map of ISO 8601 and a single RFC 822 formatters that can be used
 * for parsing and, in most cases, printing.
 * 
 * Note: due to current implementation limitations, timezone information
 * cannot be kept. Although the correct offset will be applied to UTC
 * time if supplied.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),new cljs.core.Keyword(null,"hour-minute","hour-minute",-1164421312),new cljs.core.Keyword(null,"t-time","t-time",-42016318),new cljs.core.Keyword(null,"basic-ordinal-date","basic-ordinal-date",243220162),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"time-no-ms","time-no-ms",870271683),new cljs.core.Keyword(null,"weekyear-week-day","weekyear-week-day",-740233533),new cljs.core.Keyword(null,"week-date-time","week-date-time",540228836),new cljs.core.Keyword(null,"date-hour-minute-second-fraction","date-hour-minute-second-fraction",1937143076),new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604),new cljs.core.Keyword(null,"date-time","date-time",177938180),new cljs.core.Keyword(null,"basic-time-no-ms","basic-time-no-ms",-1720654076),new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),new cljs.core.Keyword(null,"basic-week-date","basic-week-date",1775847845),new cljs.core.Keyword(null,"basic-t-time-no-ms","basic-t-time-no-ms",-424650106),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671),new cljs.core.Keyword(null,"year-month-day","year-month-day",-415594169),new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),new cljs.core.Keyword(null,"rfc822","rfc822",-404628697),new cljs.core.Keyword(null,"date-hour-minute-second-ms","date-hour-minute-second-ms",-425334775),new cljs.core.Keyword(null,"basic-ordinal-date-time","basic-ordinal-date-time",1054564521),new cljs.core.Keyword(null,"ordinal-date","ordinal-date",-77899447),new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",-1253038551),new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",1629918346),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"basic-week-date-time","basic-week-date-time",-502077622),new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),new cljs.core.Keyword(null,"basic-time","basic-time",-923134899),new cljs.core.Keyword(null,"hour-minute-second","hour-minute-second",-1906654770),new cljs.core.Keyword(null,"ordinal-date-time","ordinal-date-time",-1386753458),new cljs.core.Keyword(null,"ordinal-date-time-no-ms","ordinal-date-time-no-ms",-1539005490),new cljs.core.Keyword(null,"hour-minute-second-ms","hour-minute-second-ms",1209749775),new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"t-time-no-ms","t-time-no-ms",990689905),new cljs.core.Keyword(null,"basic-week-date-time-no-ms","basic-week-date-time-no-ms",-2043113679),new cljs.core.Keyword(null,"basic-date","basic-date",1566551506),new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),new cljs.core.Keyword(null,"local-date","local-date",1829761428),new cljs.core.Keyword(null,"basic-ordinal-date-time-no-ms","basic-ordinal-date-time-no-ms",-395135436),new cljs.core.Keyword(null,"year-month","year-month",735283381),new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),new cljs.core.Keyword(null,"week-date","week-date",-1176745129),new cljs.core.Keyword(null,"date-hour","date-hour",-344234471),new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),new cljs.core.Keyword(null,"date-hour-minute-second","date-hour-minute-second",-1565419364),new cljs.core.Keyword(null,"week-date-time-no-ms","week-date-time-no-ms",-1226853060),new cljs.core.Keyword(null,"basic-date-time-no-ms","basic-date-time-no-ms",-899402179),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.Keyword(null,"basic-t-time","basic-t-time",191791391)],[cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.call(null,"HH:mm"),cljs_time.format.formatter.call(null,"'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyyDDD"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.formatter.call(null,"HH"),cljs_time.format.formatter.call(null,"HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.call(null,"xxxx'W'wwe"),cljs_time.format.formatter.call(null,"'T'HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-DDD"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"xxxx"),cljs_time.format.formatter.call(null,"HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"HH:mm:ss"),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.call(null,"yyyy"),cljs_time.format.formatter.call(null,"'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyyMMdd"),cljs_time.format.formatter.call(null,"xxxx-'W'ww"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyy-MM"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.call(null,"'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),null,new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),null,new cljs.core.Keyword(null,"local-time","local-time",-1873195290),null,new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),null,new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),null,new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),null,new cljs.core.Keyword(null,"local-date","local-date",1829761428),null,new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),null,new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),null], null), null);
cljs_time.format.printers = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
cljs_time.format.date_map = (function (){var method_table__5017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5020__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5021__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-time.format","date-map"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5021__auto__,method_table__5017__auto__,prefer_table__5018__auto__,method_cache__5019__auto__,cached_hierarchy__5020__auto__));
})();
cljs.core._add_method.call(null,cljs_time.format.date_map,goog.date.Date,(function (d){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1)], null);
}));
cljs.core._add_method.call(null,cljs_time.format.date_map,goog.date.DateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1),new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"millis","millis",-1338288387),(0)], null);
}));
cljs.core._add_method.call(null,cljs_time.format.date_map,goog.date.UtcDateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1),new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"millis","millis",-1338288387),(0),new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),null], null);
}));
cljs_time.format.parse_STAR_ = (function cljs_time$format$parse_STAR_(constructor,p__29039,s){
var map__29045 = p__29039;
var map__29045__$1 = ((cljs.core.seq_QMARK_.call(null,map__29045))?cljs.core.apply.call(null,cljs.core.hash_map,map__29045):map__29045);
var fmt = map__29045__$1;
var default_year = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"default-year","default-year",1658037695));
var format_str = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
if(cljs.core.seq.call(null,s)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var min_parts = cljs.core.count.call(null,clojure.string.split.call(null,s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn.call(null,format_str);
var parse_seq = cljs.core.seq.call(null,cljs.core.map.call(null,((function (parse_fn,min_parts,map__29045,map__29045__$1,fmt,default_year,format_str){
return (function (p__29046){
var vec__29047 = p__29046;
var a = cljs.core.nth.call(null,vec__29047,(0),null);
var b = cljs.core.nth.call(null,vec__29047,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second.call(null,cljs_time.format.date_parsers.call(null,b))], null);
});})(parse_fn,min_parts,map__29045,map__29045__$1,fmt,default_year,format_str))
,parse_fn.call(null,s)));
if((cljs.core.count.call(null,parse_seq) >= min_parts)){
var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.call(null,cljs_time.format.date_map.call(null,d),new cljs.core.Keyword(null,"years","years",-1298579689),(function (){var or__4122__auto__ = default_year;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys.call(null,cljs_time.format.date_setters,cljs.core.keys.call(null,empty));
cljs.core.merge_with.call(null,((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__29045,map__29045__$1,fmt,default_year,format_str){
return (function (p1__29037_SHARP_,p2__29038_SHARP_){
return p1__29037_SHARP_.call(null,d,p2__29038_SHARP_);
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__29045,map__29045__$1,fmt,default_year,format_str))
,setters,cljs_time.internal.core.valid_date_QMARK_.call(null,cljs.core.reduce.call(null,((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__29045,map__29045__$1,fmt,default_year,format_str){
return (function (date,p__29048){
var vec__29049 = p__29048;
var part = cljs.core.nth.call(null,vec__29049,(0),null);
var do_parse = cljs.core.nth.call(null,vec__29049,(1),null);
return do_parse.call(null,date,part);
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__29045,map__29045__$1,fmt,default_year,format_str))
,empty,parse_seq)));

return d;
} else {
throw cljs.core.ex_info.call(null,"The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parser-no-match","parser-no-match",1748518307)], null));
}
});
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 * given string according to the given formatter.
 */
cljs_time.format.parse = (function() {
var cljs_time$format$parse = null;
var cljs_time$format$parse__1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__4876__auto__ = (function cljs_time$format$parse_$_iter__29058(s__29059){
return (new cljs.core.LazySeq(null,(function (){
var s__29059__$1 = s__29059;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__29059__$1);
if(temp__4406__auto__){
var s__29059__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29059__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__29059__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__29061 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__29060 = (0);
while(true){
if((i__29060 < size__4875__auto__)){
var f = cljs.core._nth.call(null,c__4874__auto__,i__29060);
var d = (function (){try{return cljs_time$format$parse.call(null,f,s);
}catch (e29064){if((e29064 instanceof Error)){
var _ = e29064;
return null;
} else {
throw e29064;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29061,d);

var G__29066 = (i__29060 + (1));
i__29060 = G__29066;
continue;
} else {
var G__29067 = (i__29060 + (1));
i__29060 = G__29067;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29061),cljs_time$format$parse_$_iter__29058.call(null,cljs.core.chunk_rest.call(null,s__29059__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29061),null);
}
} else {
var f = cljs.core.first.call(null,s__29059__$2);
var d = (function (){try{return cljs_time$format$parse.call(null,f,s);
}catch (e29065){if((e29065 instanceof Error)){
var _ = e29065;
return null;
} else {
throw e29065;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$parse_$_iter__29058.call(null,cljs.core.rest.call(null,s__29059__$2)));
} else {
var G__29068 = cljs.core.rest.call(null,s__29059__$2);
s__29059__$1 = G__29068;
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
var cljs_time$format$parse__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_.call(null,goog.date.UtcDateTime,fmt,s);
});
cljs_time$format$parse = function(fmt,s){
switch(arguments.length){
case 1:
return cljs_time$format$parse__1.call(this,fmt);
case 2:
return cljs_time$format$parse__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_time$format$parse.cljs$core$IFn$_invoke$arity$1 = cljs_time$format$parse__1;
cljs_time$format$parse.cljs$core$IFn$_invoke$arity$2 = cljs_time$format$parse__2;
return cljs_time$format$parse;
})()
;
/**
 * Returns a local DateTime instance obtained by parsing the
 * given string according to the given formatter.
 */
cljs_time.format.parse_local = (function() {
var cljs_time$format$parse_local = null;
var cljs_time$format$parse_local__1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__4876__auto__ = (function cljs_time$format$parse_local_$_iter__29077(s__29078){
return (new cljs.core.LazySeq(null,(function (){
var s__29078__$1 = s__29078;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__29078__$1);
if(temp__4406__auto__){
var s__29078__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29078__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__29078__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__29080 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__29079 = (0);
while(true){
if((i__29079 < size__4875__auto__)){
var f = cljs.core._nth.call(null,c__4874__auto__,i__29079);
var d = (function (){try{return cljs_time$format$parse_local.call(null,f,s);
}catch (e29083){if((e29083 instanceof Error)){
var _ = e29083;
return null;
} else {
throw e29083;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29080,d);

var G__29085 = (i__29079 + (1));
i__29079 = G__29085;
continue;
} else {
var G__29086 = (i__29079 + (1));
i__29079 = G__29086;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29080),cljs_time$format$parse_local_$_iter__29077.call(null,cljs.core.chunk_rest.call(null,s__29078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29080),null);
}
} else {
var f = cljs.core.first.call(null,s__29078__$2);
var d = (function (){try{return cljs_time$format$parse_local.call(null,f,s);
}catch (e29084){if((e29084 instanceof Error)){
var _ = e29084;
return null;
} else {
throw e29084;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$parse_local_$_iter__29077.call(null,cljs.core.rest.call(null,s__29078__$2)));
} else {
var G__29087 = cljs.core.rest.call(null,s__29078__$2);
s__29078__$1 = G__29087;
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
var cljs_time$format$parse_local__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_.call(null,goog.date.DateTime,fmt,s);
});
cljs_time$format$parse_local = function(fmt,s){
switch(arguments.length){
case 1:
return cljs_time$format$parse_local__1.call(this,fmt);
case 2:
return cljs_time$format$parse_local__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_time$format$parse_local.cljs$core$IFn$_invoke$arity$1 = cljs_time$format$parse_local__1;
cljs_time$format$parse_local.cljs$core$IFn$_invoke$arity$2 = cljs_time$format$parse_local__2;
return cljs_time$format$parse_local;
})()
;
/**
 * Returns a local Date instance obtained by parsing the
 * given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function() {
var cljs_time$format$parse_local_date = null;
var cljs_time$format$parse_local_date__1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__4876__auto__ = (function cljs_time$format$parse_local_date_$_iter__29096(s__29097){
return (new cljs.core.LazySeq(null,(function (){
var s__29097__$1 = s__29097;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__29097__$1);
if(temp__4406__auto__){
var s__29097__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29097__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__29097__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__29099 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__29098 = (0);
while(true){
if((i__29098 < size__4875__auto__)){
var f = cljs.core._nth.call(null,c__4874__auto__,i__29098);
var d = (function (){try{return cljs_time$format$parse_local_date.call(null,f,s);
}catch (e29102){if((e29102 instanceof Error)){
var _ = e29102;
return null;
} else {
throw e29102;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29099,d);

var G__29104 = (i__29098 + (1));
i__29098 = G__29104;
continue;
} else {
var G__29105 = (i__29098 + (1));
i__29098 = G__29105;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29099),cljs_time$format$parse_local_date_$_iter__29096.call(null,cljs.core.chunk_rest.call(null,s__29097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29099),null);
}
} else {
var f = cljs.core.first.call(null,s__29097__$2);
var d = (function (){try{return cljs_time$format$parse_local_date.call(null,f,s);
}catch (e29103){if((e29103 instanceof Error)){
var _ = e29103;
return null;
} else {
throw e29103;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$parse_local_date_$_iter__29096.call(null,cljs.core.rest.call(null,s__29097__$2)));
} else {
var G__29106 = cljs.core.rest.call(null,s__29097__$2);
s__29097__$1 = G__29106;
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
var cljs_time$format$parse_local_date__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_.call(null,goog.date.Date,fmt,s);
});
cljs_time$format$parse_local_date = function(fmt,s){
switch(arguments.length){
case 1:
return cljs_time$format$parse_local_date__1.call(this,fmt);
case 2:
return cljs_time$format$parse_local_date__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_time$format$parse_local_date.cljs$core$IFn$_invoke$arity$1 = cljs_time$format$parse_local_date__1;
cljs_time$format$parse_local_date.cljs$core$IFn$_invoke$arity$2 = cljs_time$format$parse_local_date__2;
return cljs_time$format$parse_local_date;
})()
;
/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__29107,dt){
var map__29109 = p__29107;
var map__29109__$1 = ((cljs.core.seq_QMARK_.call(null,map__29109))?cljs.core.apply.call(null,cljs.core.hash_map,map__29109):map__29109);
var formatters = cljs.core.get.call(null,map__29109__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
var format_str = cljs.core.get.call(null,map__29109__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))))].join('')));
}

return cljs.core.apply.call(null,clojure.string.replace,cljs_time.format.formatter_fn.call(null,format_str,formatters).call(null,dt));
});
/**
 * Returns a string representing the given local DateTime instance in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__29110,dt){
var map__29112 = p__29110;
var map__29112__$1 = ((cljs.core.seq_QMARK_.call(null,map__29112))?cljs.core.apply.call(null,cljs.core.hash_map,map__29112):map__29112);
var fmt = map__29112__$1;
var formatters = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
var format_str = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))))].join('')));
}

return cljs.core.apply.call(null,clojure.string.replace,cljs_time.format.formatter_fn.call(null,format_str,formatters).call(null,dt,cljs.core.assoc.call(null,cljs_time.format.date_formatters,"Z",cljs.core.constantly.call(null,""),"ZZ",cljs.core.constantly.call(null,""))));
});
/**
 * Returns a string representing the given local Date instance in the form
 * determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__29113,dt){
var map__29115 = p__29113;
var map__29115__$1 = ((cljs.core.seq_QMARK_.call(null,map__29115))?cljs.core.apply.call(null,cljs.core.hash_map,map__29115):map__29115);
var fmt = map__29115__$1;
var formatters = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
var format_str = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))))].join('')));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.Date","goog.date.Date",-1613361125,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))))].join('')));
}

return cljs.core.apply.call(null,clojure.string.replace,cljs_time.format.formatter_fn.call(null,format_str,formatters).call(null,dt,cljs.core.assoc.call(null,cljs_time.format.date_formatters,"Z",cljs.core.constantly.call(null,""),"ZZ",cljs.core.constantly.call(null,""))));
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function() {
var cljs_time$format$show_formatters = null;
var cljs_time$format$show_formatters__0 = (function (){
return cljs_time$format$show_formatters.call(null,cljs_time.core.now.call(null));
});
var cljs_time$format$show_formatters__1 = (function (dt){
var seq__29120 = cljs.core.seq.call(null,cljs.core.sort.call(null,cljs_time.format.printers));
var chunk__29121 = null;
var count__29122 = (0);
var i__29123 = (0);
while(true){
if((i__29123 < count__29122)){
var p = cljs.core._nth.call(null,chunk__29121,i__29123);
var fmt_29124 = cljs_time.format.formatters.call(null,p);
cljs.core.print.call(null,cljs_time.internal.core.format.call(null,"%-40s%s\n",p,cljs_time.format.unparse.call(null,fmt_29124,dt)));

var G__29125 = seq__29120;
var G__29126 = chunk__29121;
var G__29127 = count__29122;
var G__29128 = (i__29123 + (1));
seq__29120 = G__29125;
chunk__29121 = G__29126;
count__29122 = G__29127;
i__29123 = G__29128;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__29120);
if(temp__4406__auto__){
var seq__29120__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29120__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__29120__$1);
var G__29129 = cljs.core.chunk_rest.call(null,seq__29120__$1);
var G__29130 = c__4907__auto__;
var G__29131 = cljs.core.count.call(null,c__4907__auto__);
var G__29132 = (0);
seq__29120 = G__29129;
chunk__29121 = G__29130;
count__29122 = G__29131;
i__29123 = G__29132;
continue;
} else {
var p = cljs.core.first.call(null,seq__29120__$1);
var fmt_29133 = cljs_time.format.formatters.call(null,p);
cljs.core.print.call(null,cljs_time.internal.core.format.call(null,"%-40s%s\n",p,cljs_time.format.unparse.call(null,fmt_29133,dt)));

var G__29134 = cljs.core.next.call(null,seq__29120__$1);
var G__29135 = null;
var G__29136 = (0);
var G__29137 = (0);
seq__29120 = G__29134;
chunk__29121 = G__29135;
count__29122 = G__29136;
i__29123 = G__29137;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_time$format$show_formatters = function(dt){
switch(arguments.length){
case 0:
return cljs_time$format$show_formatters__0.call(this);
case 1:
return cljs_time$format$show_formatters__1.call(this,dt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_time$format$show_formatters.cljs$core$IFn$_invoke$arity$0 = cljs_time$format$show_formatters__0;
cljs_time$format$show_formatters.cljs$core$IFn$_invoke$arity$1 = cljs_time$format$show_formatters__1;
return cljs_time$format$show_formatters;
})()
;

cljs_time.format.Mappable = (function (){var obj29139 = {};
return obj29139;
})();

/**
 * Returns a map representation of the given instant.
 * It will contain the following keys: :years, :months,
 * :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((function (){var and__4110__auto__ = instant;
if(and__4110__auto__){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1;
} else {
return and__4110__auto__;
}
})()){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__4758__auto__ = (((instant == null))?null:instant);
return (function (){var or__4122__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mappable.instant->map",instant);
}
}
})().call(null,instant);
}
});

cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),millis], null);
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__29140 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)).fqn:null);
switch (G__29140) {
case "cljs-time.core/interval":
return cljs_time.core.__GT_period.call(null,m__$1);

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)))].join('')));

}
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period.call(null,m__$1);
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period.call(null,m__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map.call(null,dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});
