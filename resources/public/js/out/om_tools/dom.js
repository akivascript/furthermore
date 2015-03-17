// Compiled by ClojureScript 0.0-3119 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__4122__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__4122__auto__){
return or__4122__auto__;
} else {
var G__16952 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__16952) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__16955 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__16955) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16959){
var vec__16960 = p__16959;
var k = cljs.core.nth.call(null,vec__16960,(0),null);
var v = cljs.core.nth.call(null,vec__16960,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__4122__auto__ = React.isValidElement;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__16962 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__16962,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__16962,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
/**
 * @param {...*} var_args
 */
om_tools.dom.a = (function() {
var om_tools$dom$a = null;
var om_tools$dom$a__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});
var om_tools$dom$a__2 = (function() { 
var G__16963__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__7559__auto__,children__7560__auto__);
};
var G__16963 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16964__i = 0, G__16964__a = new Array(arguments.length -  1);
while (G__16964__i < G__16964__a.length) {G__16964__a[G__16964__i] = arguments[G__16964__i + 1]; ++G__16964__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16964__a,0);
} 
return G__16963__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16963.cljs$lang$maxFixedArity = 1;
G__16963.cljs$lang$applyTo = (function (arglist__16965){
var opts__7559__auto__ = cljs.core.first(arglist__16965);
var children__7560__auto__ = cljs.core.rest(arglist__16965);
return G__16963__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16963.cljs$core$IFn$_invoke$arity$variadic = G__16963__delegate;
return G__16963;
})()
;
om_tools$dom$a = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$a__0.call(this);
default:
var G__16966 = null;
if (arguments.length > 1) {
var G__16967__i = 0, G__16967__a = new Array(arguments.length -  1);
while (G__16967__i < G__16967__a.length) {G__16967__a[G__16967__i] = arguments[G__16967__i + 1]; ++G__16967__i;}
G__16966 = new cljs.core.IndexedSeq(G__16967__a,0);
}
return om_tools$dom$a__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__16966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$a.cljs$lang$maxFixedArity = 1;
om_tools$dom$a.cljs$lang$applyTo = om_tools$dom$a__2.cljs$lang$applyTo;
om_tools$dom$a.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$a__0;
om_tools$dom$a.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$a__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$a;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.abbr = (function() {
var om_tools$dom$abbr = null;
var om_tools$dom$abbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});
var om_tools$dom$abbr__2 = (function() { 
var G__16968__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__7559__auto__,children__7560__auto__);
};
var G__16968 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16969__i = 0, G__16969__a = new Array(arguments.length -  1);
while (G__16969__i < G__16969__a.length) {G__16969__a[G__16969__i] = arguments[G__16969__i + 1]; ++G__16969__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16969__a,0);
} 
return G__16968__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16968.cljs$lang$maxFixedArity = 1;
G__16968.cljs$lang$applyTo = (function (arglist__16970){
var opts__7559__auto__ = cljs.core.first(arglist__16970);
var children__7560__auto__ = cljs.core.rest(arglist__16970);
return G__16968__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16968.cljs$core$IFn$_invoke$arity$variadic = G__16968__delegate;
return G__16968;
})()
;
om_tools$dom$abbr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$abbr__0.call(this);
default:
var G__16971 = null;
if (arguments.length > 1) {
var G__16972__i = 0, G__16972__a = new Array(arguments.length -  1);
while (G__16972__i < G__16972__a.length) {G__16972__a[G__16972__i] = arguments[G__16972__i + 1]; ++G__16972__i;}
G__16971 = new cljs.core.IndexedSeq(G__16972__a,0);
}
return om_tools$dom$abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__16971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$abbr.cljs$lang$maxFixedArity = 1;
om_tools$dom$abbr.cljs$lang$applyTo = om_tools$dom$abbr__2.cljs$lang$applyTo;
om_tools$dom$abbr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$abbr__0;
om_tools$dom$abbr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$abbr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$abbr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.address = (function() {
var om_tools$dom$address = null;
var om_tools$dom$address__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});
var om_tools$dom$address__2 = (function() { 
var G__16973__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__7559__auto__,children__7560__auto__);
};
var G__16973 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16974__i = 0, G__16974__a = new Array(arguments.length -  1);
while (G__16974__i < G__16974__a.length) {G__16974__a[G__16974__i] = arguments[G__16974__i + 1]; ++G__16974__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16974__a,0);
} 
return G__16973__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16973.cljs$lang$maxFixedArity = 1;
G__16973.cljs$lang$applyTo = (function (arglist__16975){
var opts__7559__auto__ = cljs.core.first(arglist__16975);
var children__7560__auto__ = cljs.core.rest(arglist__16975);
return G__16973__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16973.cljs$core$IFn$_invoke$arity$variadic = G__16973__delegate;
return G__16973;
})()
;
om_tools$dom$address = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$address__0.call(this);
default:
var G__16976 = null;
if (arguments.length > 1) {
var G__16977__i = 0, G__16977__a = new Array(arguments.length -  1);
while (G__16977__i < G__16977__a.length) {G__16977__a[G__16977__i] = arguments[G__16977__i + 1]; ++G__16977__i;}
G__16976 = new cljs.core.IndexedSeq(G__16977__a,0);
}
return om_tools$dom$address__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__16976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$address.cljs$lang$maxFixedArity = 1;
om_tools$dom$address.cljs$lang$applyTo = om_tools$dom$address__2.cljs$lang$applyTo;
om_tools$dom$address.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$address__0;
om_tools$dom$address.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$address__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$address;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.area = (function() {
var om_tools$dom$area = null;
var om_tools$dom$area__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});
var om_tools$dom$area__2 = (function() { 
var G__16978__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__7559__auto__,children__7560__auto__);
};
var G__16978 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16979__i = 0, G__16979__a = new Array(arguments.length -  1);
while (G__16979__i < G__16979__a.length) {G__16979__a[G__16979__i] = arguments[G__16979__i + 1]; ++G__16979__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16979__a,0);
} 
return G__16978__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16978.cljs$lang$maxFixedArity = 1;
G__16978.cljs$lang$applyTo = (function (arglist__16980){
var opts__7559__auto__ = cljs.core.first(arglist__16980);
var children__7560__auto__ = cljs.core.rest(arglist__16980);
return G__16978__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16978.cljs$core$IFn$_invoke$arity$variadic = G__16978__delegate;
return G__16978;
})()
;
om_tools$dom$area = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$area__0.call(this);
default:
var G__16981 = null;
if (arguments.length > 1) {
var G__16982__i = 0, G__16982__a = new Array(arguments.length -  1);
while (G__16982__i < G__16982__a.length) {G__16982__a[G__16982__i] = arguments[G__16982__i + 1]; ++G__16982__i;}
G__16981 = new cljs.core.IndexedSeq(G__16982__a,0);
}
return om_tools$dom$area__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__16981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$area.cljs$lang$maxFixedArity = 1;
om_tools$dom$area.cljs$lang$applyTo = om_tools$dom$area__2.cljs$lang$applyTo;
om_tools$dom$area.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$area__0;
om_tools$dom$area.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$area__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$area;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.article = (function() {
var om_tools$dom$article = null;
var om_tools$dom$article__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});
var om_tools$dom$article__2 = (function() { 
var G__16983__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__7559__auto__,children__7560__auto__);
};
var G__16983 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16984__i = 0, G__16984__a = new Array(arguments.length -  1);
while (G__16984__i < G__16984__a.length) {G__16984__a[G__16984__i] = arguments[G__16984__i + 1]; ++G__16984__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16984__a,0);
} 
return G__16983__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16983.cljs$lang$maxFixedArity = 1;
G__16983.cljs$lang$applyTo = (function (arglist__16985){
var opts__7559__auto__ = cljs.core.first(arglist__16985);
var children__7560__auto__ = cljs.core.rest(arglist__16985);
return G__16983__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16983.cljs$core$IFn$_invoke$arity$variadic = G__16983__delegate;
return G__16983;
})()
;
om_tools$dom$article = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$article__0.call(this);
default:
var G__16986 = null;
if (arguments.length > 1) {
var G__16987__i = 0, G__16987__a = new Array(arguments.length -  1);
while (G__16987__i < G__16987__a.length) {G__16987__a[G__16987__i] = arguments[G__16987__i + 1]; ++G__16987__i;}
G__16986 = new cljs.core.IndexedSeq(G__16987__a,0);
}
return om_tools$dom$article__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__16986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$article.cljs$lang$maxFixedArity = 1;
om_tools$dom$article.cljs$lang$applyTo = om_tools$dom$article__2.cljs$lang$applyTo;
om_tools$dom$article.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$article__0;
om_tools$dom$article.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$article__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$article;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.aside = (function() {
var om_tools$dom$aside = null;
var om_tools$dom$aside__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});
var om_tools$dom$aside__2 = (function() { 
var G__16988__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__7559__auto__,children__7560__auto__);
};
var G__16988 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16989__i = 0, G__16989__a = new Array(arguments.length -  1);
while (G__16989__i < G__16989__a.length) {G__16989__a[G__16989__i] = arguments[G__16989__i + 1]; ++G__16989__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16989__a,0);
} 
return G__16988__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16988.cljs$lang$maxFixedArity = 1;
G__16988.cljs$lang$applyTo = (function (arglist__16990){
var opts__7559__auto__ = cljs.core.first(arglist__16990);
var children__7560__auto__ = cljs.core.rest(arglist__16990);
return G__16988__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16988.cljs$core$IFn$_invoke$arity$variadic = G__16988__delegate;
return G__16988;
})()
;
om_tools$dom$aside = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$aside__0.call(this);
default:
var G__16991 = null;
if (arguments.length > 1) {
var G__16992__i = 0, G__16992__a = new Array(arguments.length -  1);
while (G__16992__i < G__16992__a.length) {G__16992__a[G__16992__i] = arguments[G__16992__i + 1]; ++G__16992__i;}
G__16991 = new cljs.core.IndexedSeq(G__16992__a,0);
}
return om_tools$dom$aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__16991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$aside.cljs$lang$maxFixedArity = 1;
om_tools$dom$aside.cljs$lang$applyTo = om_tools$dom$aside__2.cljs$lang$applyTo;
om_tools$dom$aside.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$aside__0;
om_tools$dom$aside.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$aside__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$aside;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.audio = (function() {
var om_tools$dom$audio = null;
var om_tools$dom$audio__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});
var om_tools$dom$audio__2 = (function() { 
var G__16993__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__7559__auto__,children__7560__auto__);
};
var G__16993 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16994__i = 0, G__16994__a = new Array(arguments.length -  1);
while (G__16994__i < G__16994__a.length) {G__16994__a[G__16994__i] = arguments[G__16994__i + 1]; ++G__16994__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16994__a,0);
} 
return G__16993__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16993.cljs$lang$maxFixedArity = 1;
G__16993.cljs$lang$applyTo = (function (arglist__16995){
var opts__7559__auto__ = cljs.core.first(arglist__16995);
var children__7560__auto__ = cljs.core.rest(arglist__16995);
return G__16993__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16993.cljs$core$IFn$_invoke$arity$variadic = G__16993__delegate;
return G__16993;
})()
;
om_tools$dom$audio = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$audio__0.call(this);
default:
var G__16996 = null;
if (arguments.length > 1) {
var G__16997__i = 0, G__16997__a = new Array(arguments.length -  1);
while (G__16997__i < G__16997__a.length) {G__16997__a[G__16997__i] = arguments[G__16997__i + 1]; ++G__16997__i;}
G__16996 = new cljs.core.IndexedSeq(G__16997__a,0);
}
return om_tools$dom$audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__16996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$audio.cljs$lang$maxFixedArity = 1;
om_tools$dom$audio.cljs$lang$applyTo = om_tools$dom$audio__2.cljs$lang$applyTo;
om_tools$dom$audio.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$audio__0;
om_tools$dom$audio.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$audio__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$audio;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.b = (function() {
var om_tools$dom$b = null;
var om_tools$dom$b__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});
var om_tools$dom$b__2 = (function() { 
var G__16998__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__7559__auto__,children__7560__auto__);
};
var G__16998 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__16999__i = 0, G__16999__a = new Array(arguments.length -  1);
while (G__16999__i < G__16999__a.length) {G__16999__a[G__16999__i] = arguments[G__16999__i + 1]; ++G__16999__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__16999__a,0);
} 
return G__16998__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__16998.cljs$lang$maxFixedArity = 1;
G__16998.cljs$lang$applyTo = (function (arglist__17000){
var opts__7559__auto__ = cljs.core.first(arglist__17000);
var children__7560__auto__ = cljs.core.rest(arglist__17000);
return G__16998__delegate(opts__7559__auto__,children__7560__auto__);
});
G__16998.cljs$core$IFn$_invoke$arity$variadic = G__16998__delegate;
return G__16998;
})()
;
om_tools$dom$b = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$b__0.call(this);
default:
var G__17001 = null;
if (arguments.length > 1) {
var G__17002__i = 0, G__17002__a = new Array(arguments.length -  1);
while (G__17002__i < G__17002__a.length) {G__17002__a[G__17002__i] = arguments[G__17002__i + 1]; ++G__17002__i;}
G__17001 = new cljs.core.IndexedSeq(G__17002__a,0);
}
return om_tools$dom$b__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$b.cljs$lang$maxFixedArity = 1;
om_tools$dom$b.cljs$lang$applyTo = om_tools$dom$b__2.cljs$lang$applyTo;
om_tools$dom$b.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$b__0;
om_tools$dom$b.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$b__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$b;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.base = (function() {
var om_tools$dom$base = null;
var om_tools$dom$base__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});
var om_tools$dom$base__2 = (function() { 
var G__17003__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__7559__auto__,children__7560__auto__);
};
var G__17003 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17004__i = 0, G__17004__a = new Array(arguments.length -  1);
while (G__17004__i < G__17004__a.length) {G__17004__a[G__17004__i] = arguments[G__17004__i + 1]; ++G__17004__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17004__a,0);
} 
return G__17003__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17003.cljs$lang$maxFixedArity = 1;
G__17003.cljs$lang$applyTo = (function (arglist__17005){
var opts__7559__auto__ = cljs.core.first(arglist__17005);
var children__7560__auto__ = cljs.core.rest(arglist__17005);
return G__17003__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17003.cljs$core$IFn$_invoke$arity$variadic = G__17003__delegate;
return G__17003;
})()
;
om_tools$dom$base = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$base__0.call(this);
default:
var G__17006 = null;
if (arguments.length > 1) {
var G__17007__i = 0, G__17007__a = new Array(arguments.length -  1);
while (G__17007__i < G__17007__a.length) {G__17007__a[G__17007__i] = arguments[G__17007__i + 1]; ++G__17007__i;}
G__17006 = new cljs.core.IndexedSeq(G__17007__a,0);
}
return om_tools$dom$base__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$base.cljs$lang$maxFixedArity = 1;
om_tools$dom$base.cljs$lang$applyTo = om_tools$dom$base__2.cljs$lang$applyTo;
om_tools$dom$base.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$base__0;
om_tools$dom$base.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$base__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$base;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.bdi = (function() {
var om_tools$dom$bdi = null;
var om_tools$dom$bdi__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});
var om_tools$dom$bdi__2 = (function() { 
var G__17008__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__7559__auto__,children__7560__auto__);
};
var G__17008 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17009__i = 0, G__17009__a = new Array(arguments.length -  1);
while (G__17009__i < G__17009__a.length) {G__17009__a[G__17009__i] = arguments[G__17009__i + 1]; ++G__17009__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17009__a,0);
} 
return G__17008__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17008.cljs$lang$maxFixedArity = 1;
G__17008.cljs$lang$applyTo = (function (arglist__17010){
var opts__7559__auto__ = cljs.core.first(arglist__17010);
var children__7560__auto__ = cljs.core.rest(arglist__17010);
return G__17008__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17008.cljs$core$IFn$_invoke$arity$variadic = G__17008__delegate;
return G__17008;
})()
;
om_tools$dom$bdi = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$bdi__0.call(this);
default:
var G__17011 = null;
if (arguments.length > 1) {
var G__17012__i = 0, G__17012__a = new Array(arguments.length -  1);
while (G__17012__i < G__17012__a.length) {G__17012__a[G__17012__i] = arguments[G__17012__i + 1]; ++G__17012__i;}
G__17011 = new cljs.core.IndexedSeq(G__17012__a,0);
}
return om_tools$dom$bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$bdi.cljs$lang$maxFixedArity = 1;
om_tools$dom$bdi.cljs$lang$applyTo = om_tools$dom$bdi__2.cljs$lang$applyTo;
om_tools$dom$bdi.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$bdi__0;
om_tools$dom$bdi.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$bdi__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$bdi;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.bdo = (function() {
var om_tools$dom$bdo = null;
var om_tools$dom$bdo__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});
var om_tools$dom$bdo__2 = (function() { 
var G__17013__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__7559__auto__,children__7560__auto__);
};
var G__17013 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17014__i = 0, G__17014__a = new Array(arguments.length -  1);
while (G__17014__i < G__17014__a.length) {G__17014__a[G__17014__i] = arguments[G__17014__i + 1]; ++G__17014__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17014__a,0);
} 
return G__17013__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17013.cljs$lang$maxFixedArity = 1;
G__17013.cljs$lang$applyTo = (function (arglist__17015){
var opts__7559__auto__ = cljs.core.first(arglist__17015);
var children__7560__auto__ = cljs.core.rest(arglist__17015);
return G__17013__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17013.cljs$core$IFn$_invoke$arity$variadic = G__17013__delegate;
return G__17013;
})()
;
om_tools$dom$bdo = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$bdo__0.call(this);
default:
var G__17016 = null;
if (arguments.length > 1) {
var G__17017__i = 0, G__17017__a = new Array(arguments.length -  1);
while (G__17017__i < G__17017__a.length) {G__17017__a[G__17017__i] = arguments[G__17017__i + 1]; ++G__17017__i;}
G__17016 = new cljs.core.IndexedSeq(G__17017__a,0);
}
return om_tools$dom$bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$bdo.cljs$lang$maxFixedArity = 1;
om_tools$dom$bdo.cljs$lang$applyTo = om_tools$dom$bdo__2.cljs$lang$applyTo;
om_tools$dom$bdo.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$bdo__0;
om_tools$dom$bdo.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$bdo__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$bdo;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.big = (function() {
var om_tools$dom$big = null;
var om_tools$dom$big__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});
var om_tools$dom$big__2 = (function() { 
var G__17018__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__7559__auto__,children__7560__auto__);
};
var G__17018 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17019__i = 0, G__17019__a = new Array(arguments.length -  1);
while (G__17019__i < G__17019__a.length) {G__17019__a[G__17019__i] = arguments[G__17019__i + 1]; ++G__17019__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17019__a,0);
} 
return G__17018__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17018.cljs$lang$maxFixedArity = 1;
G__17018.cljs$lang$applyTo = (function (arglist__17020){
var opts__7559__auto__ = cljs.core.first(arglist__17020);
var children__7560__auto__ = cljs.core.rest(arglist__17020);
return G__17018__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17018.cljs$core$IFn$_invoke$arity$variadic = G__17018__delegate;
return G__17018;
})()
;
om_tools$dom$big = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$big__0.call(this);
default:
var G__17021 = null;
if (arguments.length > 1) {
var G__17022__i = 0, G__17022__a = new Array(arguments.length -  1);
while (G__17022__i < G__17022__a.length) {G__17022__a[G__17022__i] = arguments[G__17022__i + 1]; ++G__17022__i;}
G__17021 = new cljs.core.IndexedSeq(G__17022__a,0);
}
return om_tools$dom$big__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$big.cljs$lang$maxFixedArity = 1;
om_tools$dom$big.cljs$lang$applyTo = om_tools$dom$big__2.cljs$lang$applyTo;
om_tools$dom$big.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$big__0;
om_tools$dom$big.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$big__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$big;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.blockquote = (function() {
var om_tools$dom$blockquote = null;
var om_tools$dom$blockquote__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});
var om_tools$dom$blockquote__2 = (function() { 
var G__17023__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__7559__auto__,children__7560__auto__);
};
var G__17023 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17024__i = 0, G__17024__a = new Array(arguments.length -  1);
while (G__17024__i < G__17024__a.length) {G__17024__a[G__17024__i] = arguments[G__17024__i + 1]; ++G__17024__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17024__a,0);
} 
return G__17023__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17023.cljs$lang$maxFixedArity = 1;
G__17023.cljs$lang$applyTo = (function (arglist__17025){
var opts__7559__auto__ = cljs.core.first(arglist__17025);
var children__7560__auto__ = cljs.core.rest(arglist__17025);
return G__17023__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17023.cljs$core$IFn$_invoke$arity$variadic = G__17023__delegate;
return G__17023;
})()
;
om_tools$dom$blockquote = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$blockquote__0.call(this);
default:
var G__17026 = null;
if (arguments.length > 1) {
var G__17027__i = 0, G__17027__a = new Array(arguments.length -  1);
while (G__17027__i < G__17027__a.length) {G__17027__a[G__17027__i] = arguments[G__17027__i + 1]; ++G__17027__i;}
G__17026 = new cljs.core.IndexedSeq(G__17027__a,0);
}
return om_tools$dom$blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$blockquote.cljs$lang$maxFixedArity = 1;
om_tools$dom$blockquote.cljs$lang$applyTo = om_tools$dom$blockquote__2.cljs$lang$applyTo;
om_tools$dom$blockquote.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$blockquote__0;
om_tools$dom$blockquote.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$blockquote__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$blockquote;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.body = (function() {
var om_tools$dom$body = null;
var om_tools$dom$body__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});
var om_tools$dom$body__2 = (function() { 
var G__17028__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__7559__auto__,children__7560__auto__);
};
var G__17028 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17029__i = 0, G__17029__a = new Array(arguments.length -  1);
while (G__17029__i < G__17029__a.length) {G__17029__a[G__17029__i] = arguments[G__17029__i + 1]; ++G__17029__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17029__a,0);
} 
return G__17028__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17028.cljs$lang$maxFixedArity = 1;
G__17028.cljs$lang$applyTo = (function (arglist__17030){
var opts__7559__auto__ = cljs.core.first(arglist__17030);
var children__7560__auto__ = cljs.core.rest(arglist__17030);
return G__17028__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17028.cljs$core$IFn$_invoke$arity$variadic = G__17028__delegate;
return G__17028;
})()
;
om_tools$dom$body = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$body__0.call(this);
default:
var G__17031 = null;
if (arguments.length > 1) {
var G__17032__i = 0, G__17032__a = new Array(arguments.length -  1);
while (G__17032__i < G__17032__a.length) {G__17032__a[G__17032__i] = arguments[G__17032__i + 1]; ++G__17032__i;}
G__17031 = new cljs.core.IndexedSeq(G__17032__a,0);
}
return om_tools$dom$body__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$body.cljs$lang$maxFixedArity = 1;
om_tools$dom$body.cljs$lang$applyTo = om_tools$dom$body__2.cljs$lang$applyTo;
om_tools$dom$body.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$body__0;
om_tools$dom$body.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$body__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$body;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.br = (function() {
var om_tools$dom$br = null;
var om_tools$dom$br__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});
var om_tools$dom$br__2 = (function() { 
var G__17033__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__7559__auto__,children__7560__auto__);
};
var G__17033 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17034__i = 0, G__17034__a = new Array(arguments.length -  1);
while (G__17034__i < G__17034__a.length) {G__17034__a[G__17034__i] = arguments[G__17034__i + 1]; ++G__17034__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17034__a,0);
} 
return G__17033__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17033.cljs$lang$maxFixedArity = 1;
G__17033.cljs$lang$applyTo = (function (arglist__17035){
var opts__7559__auto__ = cljs.core.first(arglist__17035);
var children__7560__auto__ = cljs.core.rest(arglist__17035);
return G__17033__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17033.cljs$core$IFn$_invoke$arity$variadic = G__17033__delegate;
return G__17033;
})()
;
om_tools$dom$br = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$br__0.call(this);
default:
var G__17036 = null;
if (arguments.length > 1) {
var G__17037__i = 0, G__17037__a = new Array(arguments.length -  1);
while (G__17037__i < G__17037__a.length) {G__17037__a[G__17037__i] = arguments[G__17037__i + 1]; ++G__17037__i;}
G__17036 = new cljs.core.IndexedSeq(G__17037__a,0);
}
return om_tools$dom$br__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$br.cljs$lang$maxFixedArity = 1;
om_tools$dom$br.cljs$lang$applyTo = om_tools$dom$br__2.cljs$lang$applyTo;
om_tools$dom$br.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$br__0;
om_tools$dom$br.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$br__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$br;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.button = (function() {
var om_tools$dom$button = null;
var om_tools$dom$button__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});
var om_tools$dom$button__2 = (function() { 
var G__17038__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__7559__auto__,children__7560__auto__);
};
var G__17038 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17039__i = 0, G__17039__a = new Array(arguments.length -  1);
while (G__17039__i < G__17039__a.length) {G__17039__a[G__17039__i] = arguments[G__17039__i + 1]; ++G__17039__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17039__a,0);
} 
return G__17038__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17038.cljs$lang$maxFixedArity = 1;
G__17038.cljs$lang$applyTo = (function (arglist__17040){
var opts__7559__auto__ = cljs.core.first(arglist__17040);
var children__7560__auto__ = cljs.core.rest(arglist__17040);
return G__17038__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17038.cljs$core$IFn$_invoke$arity$variadic = G__17038__delegate;
return G__17038;
})()
;
om_tools$dom$button = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$button__0.call(this);
default:
var G__17041 = null;
if (arguments.length > 1) {
var G__17042__i = 0, G__17042__a = new Array(arguments.length -  1);
while (G__17042__i < G__17042__a.length) {G__17042__a[G__17042__i] = arguments[G__17042__i + 1]; ++G__17042__i;}
G__17041 = new cljs.core.IndexedSeq(G__17042__a,0);
}
return om_tools$dom$button__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$button.cljs$lang$maxFixedArity = 1;
om_tools$dom$button.cljs$lang$applyTo = om_tools$dom$button__2.cljs$lang$applyTo;
om_tools$dom$button.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$button__0;
om_tools$dom$button.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$button__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$button;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.canvas = (function() {
var om_tools$dom$canvas = null;
var om_tools$dom$canvas__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});
var om_tools$dom$canvas__2 = (function() { 
var G__17043__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__7559__auto__,children__7560__auto__);
};
var G__17043 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17044__i = 0, G__17044__a = new Array(arguments.length -  1);
while (G__17044__i < G__17044__a.length) {G__17044__a[G__17044__i] = arguments[G__17044__i + 1]; ++G__17044__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17044__a,0);
} 
return G__17043__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17043.cljs$lang$maxFixedArity = 1;
G__17043.cljs$lang$applyTo = (function (arglist__17045){
var opts__7559__auto__ = cljs.core.first(arglist__17045);
var children__7560__auto__ = cljs.core.rest(arglist__17045);
return G__17043__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17043.cljs$core$IFn$_invoke$arity$variadic = G__17043__delegate;
return G__17043;
})()
;
om_tools$dom$canvas = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$canvas__0.call(this);
default:
var G__17046 = null;
if (arguments.length > 1) {
var G__17047__i = 0, G__17047__a = new Array(arguments.length -  1);
while (G__17047__i < G__17047__a.length) {G__17047__a[G__17047__i] = arguments[G__17047__i + 1]; ++G__17047__i;}
G__17046 = new cljs.core.IndexedSeq(G__17047__a,0);
}
return om_tools$dom$canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$canvas.cljs$lang$maxFixedArity = 1;
om_tools$dom$canvas.cljs$lang$applyTo = om_tools$dom$canvas__2.cljs$lang$applyTo;
om_tools$dom$canvas.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$canvas__0;
om_tools$dom$canvas.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$canvas__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$canvas;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.caption = (function() {
var om_tools$dom$caption = null;
var om_tools$dom$caption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});
var om_tools$dom$caption__2 = (function() { 
var G__17048__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__7559__auto__,children__7560__auto__);
};
var G__17048 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17049__i = 0, G__17049__a = new Array(arguments.length -  1);
while (G__17049__i < G__17049__a.length) {G__17049__a[G__17049__i] = arguments[G__17049__i + 1]; ++G__17049__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17049__a,0);
} 
return G__17048__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17048.cljs$lang$maxFixedArity = 1;
G__17048.cljs$lang$applyTo = (function (arglist__17050){
var opts__7559__auto__ = cljs.core.first(arglist__17050);
var children__7560__auto__ = cljs.core.rest(arglist__17050);
return G__17048__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17048.cljs$core$IFn$_invoke$arity$variadic = G__17048__delegate;
return G__17048;
})()
;
om_tools$dom$caption = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$caption__0.call(this);
default:
var G__17051 = null;
if (arguments.length > 1) {
var G__17052__i = 0, G__17052__a = new Array(arguments.length -  1);
while (G__17052__i < G__17052__a.length) {G__17052__a[G__17052__i] = arguments[G__17052__i + 1]; ++G__17052__i;}
G__17051 = new cljs.core.IndexedSeq(G__17052__a,0);
}
return om_tools$dom$caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$caption.cljs$lang$maxFixedArity = 1;
om_tools$dom$caption.cljs$lang$applyTo = om_tools$dom$caption__2.cljs$lang$applyTo;
om_tools$dom$caption.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$caption__0;
om_tools$dom$caption.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$caption__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$caption;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.cite = (function() {
var om_tools$dom$cite = null;
var om_tools$dom$cite__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});
var om_tools$dom$cite__2 = (function() { 
var G__17053__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__7559__auto__,children__7560__auto__);
};
var G__17053 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17054__i = 0, G__17054__a = new Array(arguments.length -  1);
while (G__17054__i < G__17054__a.length) {G__17054__a[G__17054__i] = arguments[G__17054__i + 1]; ++G__17054__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17054__a,0);
} 
return G__17053__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17053.cljs$lang$maxFixedArity = 1;
G__17053.cljs$lang$applyTo = (function (arglist__17055){
var opts__7559__auto__ = cljs.core.first(arglist__17055);
var children__7560__auto__ = cljs.core.rest(arglist__17055);
return G__17053__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17053.cljs$core$IFn$_invoke$arity$variadic = G__17053__delegate;
return G__17053;
})()
;
om_tools$dom$cite = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$cite__0.call(this);
default:
var G__17056 = null;
if (arguments.length > 1) {
var G__17057__i = 0, G__17057__a = new Array(arguments.length -  1);
while (G__17057__i < G__17057__a.length) {G__17057__a[G__17057__i] = arguments[G__17057__i + 1]; ++G__17057__i;}
G__17056 = new cljs.core.IndexedSeq(G__17057__a,0);
}
return om_tools$dom$cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$cite.cljs$lang$maxFixedArity = 1;
om_tools$dom$cite.cljs$lang$applyTo = om_tools$dom$cite__2.cljs$lang$applyTo;
om_tools$dom$cite.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$cite__0;
om_tools$dom$cite.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$cite__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$cite;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.code = (function() {
var om_tools$dom$code = null;
var om_tools$dom$code__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});
var om_tools$dom$code__2 = (function() { 
var G__17058__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__7559__auto__,children__7560__auto__);
};
var G__17058 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17059__i = 0, G__17059__a = new Array(arguments.length -  1);
while (G__17059__i < G__17059__a.length) {G__17059__a[G__17059__i] = arguments[G__17059__i + 1]; ++G__17059__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17059__a,0);
} 
return G__17058__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17058.cljs$lang$maxFixedArity = 1;
G__17058.cljs$lang$applyTo = (function (arglist__17060){
var opts__7559__auto__ = cljs.core.first(arglist__17060);
var children__7560__auto__ = cljs.core.rest(arglist__17060);
return G__17058__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17058.cljs$core$IFn$_invoke$arity$variadic = G__17058__delegate;
return G__17058;
})()
;
om_tools$dom$code = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$code__0.call(this);
default:
var G__17061 = null;
if (arguments.length > 1) {
var G__17062__i = 0, G__17062__a = new Array(arguments.length -  1);
while (G__17062__i < G__17062__a.length) {G__17062__a[G__17062__i] = arguments[G__17062__i + 1]; ++G__17062__i;}
G__17061 = new cljs.core.IndexedSeq(G__17062__a,0);
}
return om_tools$dom$code__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$code.cljs$lang$maxFixedArity = 1;
om_tools$dom$code.cljs$lang$applyTo = om_tools$dom$code__2.cljs$lang$applyTo;
om_tools$dom$code.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$code__0;
om_tools$dom$code.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$code__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$code;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.col = (function() {
var om_tools$dom$col = null;
var om_tools$dom$col__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});
var om_tools$dom$col__2 = (function() { 
var G__17063__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__7559__auto__,children__7560__auto__);
};
var G__17063 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17064__i = 0, G__17064__a = new Array(arguments.length -  1);
while (G__17064__i < G__17064__a.length) {G__17064__a[G__17064__i] = arguments[G__17064__i + 1]; ++G__17064__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17064__a,0);
} 
return G__17063__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17063.cljs$lang$maxFixedArity = 1;
G__17063.cljs$lang$applyTo = (function (arglist__17065){
var opts__7559__auto__ = cljs.core.first(arglist__17065);
var children__7560__auto__ = cljs.core.rest(arglist__17065);
return G__17063__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17063.cljs$core$IFn$_invoke$arity$variadic = G__17063__delegate;
return G__17063;
})()
;
om_tools$dom$col = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$col__0.call(this);
default:
var G__17066 = null;
if (arguments.length > 1) {
var G__17067__i = 0, G__17067__a = new Array(arguments.length -  1);
while (G__17067__i < G__17067__a.length) {G__17067__a[G__17067__i] = arguments[G__17067__i + 1]; ++G__17067__i;}
G__17066 = new cljs.core.IndexedSeq(G__17067__a,0);
}
return om_tools$dom$col__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$col.cljs$lang$maxFixedArity = 1;
om_tools$dom$col.cljs$lang$applyTo = om_tools$dom$col__2.cljs$lang$applyTo;
om_tools$dom$col.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$col__0;
om_tools$dom$col.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$col__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$col;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.colgroup = (function() {
var om_tools$dom$colgroup = null;
var om_tools$dom$colgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});
var om_tools$dom$colgroup__2 = (function() { 
var G__17068__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__7559__auto__,children__7560__auto__);
};
var G__17068 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17069__i = 0, G__17069__a = new Array(arguments.length -  1);
while (G__17069__i < G__17069__a.length) {G__17069__a[G__17069__i] = arguments[G__17069__i + 1]; ++G__17069__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17069__a,0);
} 
return G__17068__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17068.cljs$lang$maxFixedArity = 1;
G__17068.cljs$lang$applyTo = (function (arglist__17070){
var opts__7559__auto__ = cljs.core.first(arglist__17070);
var children__7560__auto__ = cljs.core.rest(arglist__17070);
return G__17068__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17068.cljs$core$IFn$_invoke$arity$variadic = G__17068__delegate;
return G__17068;
})()
;
om_tools$dom$colgroup = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$colgroup__0.call(this);
default:
var G__17071 = null;
if (arguments.length > 1) {
var G__17072__i = 0, G__17072__a = new Array(arguments.length -  1);
while (G__17072__i < G__17072__a.length) {G__17072__a[G__17072__i] = arguments[G__17072__i + 1]; ++G__17072__i;}
G__17071 = new cljs.core.IndexedSeq(G__17072__a,0);
}
return om_tools$dom$colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$colgroup.cljs$lang$maxFixedArity = 1;
om_tools$dom$colgroup.cljs$lang$applyTo = om_tools$dom$colgroup__2.cljs$lang$applyTo;
om_tools$dom$colgroup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$colgroup__0;
om_tools$dom$colgroup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$colgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$colgroup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.data = (function() {
var om_tools$dom$data = null;
var om_tools$dom$data__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});
var om_tools$dom$data__2 = (function() { 
var G__17073__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__7559__auto__,children__7560__auto__);
};
var G__17073 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17074__i = 0, G__17074__a = new Array(arguments.length -  1);
while (G__17074__i < G__17074__a.length) {G__17074__a[G__17074__i] = arguments[G__17074__i + 1]; ++G__17074__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17074__a,0);
} 
return G__17073__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17073.cljs$lang$maxFixedArity = 1;
G__17073.cljs$lang$applyTo = (function (arglist__17075){
var opts__7559__auto__ = cljs.core.first(arglist__17075);
var children__7560__auto__ = cljs.core.rest(arglist__17075);
return G__17073__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17073.cljs$core$IFn$_invoke$arity$variadic = G__17073__delegate;
return G__17073;
})()
;
om_tools$dom$data = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$data__0.call(this);
default:
var G__17076 = null;
if (arguments.length > 1) {
var G__17077__i = 0, G__17077__a = new Array(arguments.length -  1);
while (G__17077__i < G__17077__a.length) {G__17077__a[G__17077__i] = arguments[G__17077__i + 1]; ++G__17077__i;}
G__17076 = new cljs.core.IndexedSeq(G__17077__a,0);
}
return om_tools$dom$data__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$data.cljs$lang$maxFixedArity = 1;
om_tools$dom$data.cljs$lang$applyTo = om_tools$dom$data__2.cljs$lang$applyTo;
om_tools$dom$data.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$data__0;
om_tools$dom$data.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$data__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$data;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.datalist = (function() {
var om_tools$dom$datalist = null;
var om_tools$dom$datalist__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});
var om_tools$dom$datalist__2 = (function() { 
var G__17078__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__7559__auto__,children__7560__auto__);
};
var G__17078 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17079__i = 0, G__17079__a = new Array(arguments.length -  1);
while (G__17079__i < G__17079__a.length) {G__17079__a[G__17079__i] = arguments[G__17079__i + 1]; ++G__17079__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17079__a,0);
} 
return G__17078__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17078.cljs$lang$maxFixedArity = 1;
G__17078.cljs$lang$applyTo = (function (arglist__17080){
var opts__7559__auto__ = cljs.core.first(arglist__17080);
var children__7560__auto__ = cljs.core.rest(arglist__17080);
return G__17078__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17078.cljs$core$IFn$_invoke$arity$variadic = G__17078__delegate;
return G__17078;
})()
;
om_tools$dom$datalist = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$datalist__0.call(this);
default:
var G__17081 = null;
if (arguments.length > 1) {
var G__17082__i = 0, G__17082__a = new Array(arguments.length -  1);
while (G__17082__i < G__17082__a.length) {G__17082__a[G__17082__i] = arguments[G__17082__i + 1]; ++G__17082__i;}
G__17081 = new cljs.core.IndexedSeq(G__17082__a,0);
}
return om_tools$dom$datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$datalist.cljs$lang$maxFixedArity = 1;
om_tools$dom$datalist.cljs$lang$applyTo = om_tools$dom$datalist__2.cljs$lang$applyTo;
om_tools$dom$datalist.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$datalist__0;
om_tools$dom$datalist.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$datalist__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$datalist;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dd = (function() {
var om_tools$dom$dd = null;
var om_tools$dom$dd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});
var om_tools$dom$dd__2 = (function() { 
var G__17083__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__7559__auto__,children__7560__auto__);
};
var G__17083 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17084__i = 0, G__17084__a = new Array(arguments.length -  1);
while (G__17084__i < G__17084__a.length) {G__17084__a[G__17084__i] = arguments[G__17084__i + 1]; ++G__17084__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17084__a,0);
} 
return G__17083__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17083.cljs$lang$maxFixedArity = 1;
G__17083.cljs$lang$applyTo = (function (arglist__17085){
var opts__7559__auto__ = cljs.core.first(arglist__17085);
var children__7560__auto__ = cljs.core.rest(arglist__17085);
return G__17083__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17083.cljs$core$IFn$_invoke$arity$variadic = G__17083__delegate;
return G__17083;
})()
;
om_tools$dom$dd = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dd__0.call(this);
default:
var G__17086 = null;
if (arguments.length > 1) {
var G__17087__i = 0, G__17087__a = new Array(arguments.length -  1);
while (G__17087__i < G__17087__a.length) {G__17087__a[G__17087__i] = arguments[G__17087__i + 1]; ++G__17087__i;}
G__17086 = new cljs.core.IndexedSeq(G__17087__a,0);
}
return om_tools$dom$dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dd.cljs$lang$maxFixedArity = 1;
om_tools$dom$dd.cljs$lang$applyTo = om_tools$dom$dd__2.cljs$lang$applyTo;
om_tools$dom$dd.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dd__0;
om_tools$dom$dd.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dd__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dd;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.del = (function() {
var om_tools$dom$del = null;
var om_tools$dom$del__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});
var om_tools$dom$del__2 = (function() { 
var G__17088__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__7559__auto__,children__7560__auto__);
};
var G__17088 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17089__i = 0, G__17089__a = new Array(arguments.length -  1);
while (G__17089__i < G__17089__a.length) {G__17089__a[G__17089__i] = arguments[G__17089__i + 1]; ++G__17089__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17089__a,0);
} 
return G__17088__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17088.cljs$lang$maxFixedArity = 1;
G__17088.cljs$lang$applyTo = (function (arglist__17090){
var opts__7559__auto__ = cljs.core.first(arglist__17090);
var children__7560__auto__ = cljs.core.rest(arglist__17090);
return G__17088__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17088.cljs$core$IFn$_invoke$arity$variadic = G__17088__delegate;
return G__17088;
})()
;
om_tools$dom$del = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$del__0.call(this);
default:
var G__17091 = null;
if (arguments.length > 1) {
var G__17092__i = 0, G__17092__a = new Array(arguments.length -  1);
while (G__17092__i < G__17092__a.length) {G__17092__a[G__17092__i] = arguments[G__17092__i + 1]; ++G__17092__i;}
G__17091 = new cljs.core.IndexedSeq(G__17092__a,0);
}
return om_tools$dom$del__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$del.cljs$lang$maxFixedArity = 1;
om_tools$dom$del.cljs$lang$applyTo = om_tools$dom$del__2.cljs$lang$applyTo;
om_tools$dom$del.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$del__0;
om_tools$dom$del.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$del__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$del;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dfn = (function() {
var om_tools$dom$dfn = null;
var om_tools$dom$dfn__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});
var om_tools$dom$dfn__2 = (function() { 
var G__17093__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__7559__auto__,children__7560__auto__);
};
var G__17093 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17094__i = 0, G__17094__a = new Array(arguments.length -  1);
while (G__17094__i < G__17094__a.length) {G__17094__a[G__17094__i] = arguments[G__17094__i + 1]; ++G__17094__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17094__a,0);
} 
return G__17093__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17093.cljs$lang$maxFixedArity = 1;
G__17093.cljs$lang$applyTo = (function (arglist__17095){
var opts__7559__auto__ = cljs.core.first(arglist__17095);
var children__7560__auto__ = cljs.core.rest(arglist__17095);
return G__17093__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17093.cljs$core$IFn$_invoke$arity$variadic = G__17093__delegate;
return G__17093;
})()
;
om_tools$dom$dfn = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dfn__0.call(this);
default:
var G__17096 = null;
if (arguments.length > 1) {
var G__17097__i = 0, G__17097__a = new Array(arguments.length -  1);
while (G__17097__i < G__17097__a.length) {G__17097__a[G__17097__i] = arguments[G__17097__i + 1]; ++G__17097__i;}
G__17096 = new cljs.core.IndexedSeq(G__17097__a,0);
}
return om_tools$dom$dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dfn.cljs$lang$maxFixedArity = 1;
om_tools$dom$dfn.cljs$lang$applyTo = om_tools$dom$dfn__2.cljs$lang$applyTo;
om_tools$dom$dfn.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dfn__0;
om_tools$dom$dfn.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dfn__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dfn;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.div = (function() {
var om_tools$dom$div = null;
var om_tools$dom$div__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});
var om_tools$dom$div__2 = (function() { 
var G__17098__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__7559__auto__,children__7560__auto__);
};
var G__17098 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17099__i = 0, G__17099__a = new Array(arguments.length -  1);
while (G__17099__i < G__17099__a.length) {G__17099__a[G__17099__i] = arguments[G__17099__i + 1]; ++G__17099__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17099__a,0);
} 
return G__17098__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17098.cljs$lang$maxFixedArity = 1;
G__17098.cljs$lang$applyTo = (function (arglist__17100){
var opts__7559__auto__ = cljs.core.first(arglist__17100);
var children__7560__auto__ = cljs.core.rest(arglist__17100);
return G__17098__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17098.cljs$core$IFn$_invoke$arity$variadic = G__17098__delegate;
return G__17098;
})()
;
om_tools$dom$div = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$div__0.call(this);
default:
var G__17101 = null;
if (arguments.length > 1) {
var G__17102__i = 0, G__17102__a = new Array(arguments.length -  1);
while (G__17102__i < G__17102__a.length) {G__17102__a[G__17102__i] = arguments[G__17102__i + 1]; ++G__17102__i;}
G__17101 = new cljs.core.IndexedSeq(G__17102__a,0);
}
return om_tools$dom$div__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$div.cljs$lang$maxFixedArity = 1;
om_tools$dom$div.cljs$lang$applyTo = om_tools$dom$div__2.cljs$lang$applyTo;
om_tools$dom$div.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$div__0;
om_tools$dom$div.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$div__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$div;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dl = (function() {
var om_tools$dom$dl = null;
var om_tools$dom$dl__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});
var om_tools$dom$dl__2 = (function() { 
var G__17103__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__7559__auto__,children__7560__auto__);
};
var G__17103 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17104__i = 0, G__17104__a = new Array(arguments.length -  1);
while (G__17104__i < G__17104__a.length) {G__17104__a[G__17104__i] = arguments[G__17104__i + 1]; ++G__17104__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17104__a,0);
} 
return G__17103__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17103.cljs$lang$maxFixedArity = 1;
G__17103.cljs$lang$applyTo = (function (arglist__17105){
var opts__7559__auto__ = cljs.core.first(arglist__17105);
var children__7560__auto__ = cljs.core.rest(arglist__17105);
return G__17103__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17103.cljs$core$IFn$_invoke$arity$variadic = G__17103__delegate;
return G__17103;
})()
;
om_tools$dom$dl = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dl__0.call(this);
default:
var G__17106 = null;
if (arguments.length > 1) {
var G__17107__i = 0, G__17107__a = new Array(arguments.length -  1);
while (G__17107__i < G__17107__a.length) {G__17107__a[G__17107__i] = arguments[G__17107__i + 1]; ++G__17107__i;}
G__17106 = new cljs.core.IndexedSeq(G__17107__a,0);
}
return om_tools$dom$dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dl.cljs$lang$maxFixedArity = 1;
om_tools$dom$dl.cljs$lang$applyTo = om_tools$dom$dl__2.cljs$lang$applyTo;
om_tools$dom$dl.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dl__0;
om_tools$dom$dl.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dl__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dl;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dt = (function() {
var om_tools$dom$dt = null;
var om_tools$dom$dt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});
var om_tools$dom$dt__2 = (function() { 
var G__17108__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__7559__auto__,children__7560__auto__);
};
var G__17108 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17109__i = 0, G__17109__a = new Array(arguments.length -  1);
while (G__17109__i < G__17109__a.length) {G__17109__a[G__17109__i] = arguments[G__17109__i + 1]; ++G__17109__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17109__a,0);
} 
return G__17108__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17108.cljs$lang$maxFixedArity = 1;
G__17108.cljs$lang$applyTo = (function (arglist__17110){
var opts__7559__auto__ = cljs.core.first(arglist__17110);
var children__7560__auto__ = cljs.core.rest(arglist__17110);
return G__17108__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17108.cljs$core$IFn$_invoke$arity$variadic = G__17108__delegate;
return G__17108;
})()
;
om_tools$dom$dt = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dt__0.call(this);
default:
var G__17111 = null;
if (arguments.length > 1) {
var G__17112__i = 0, G__17112__a = new Array(arguments.length -  1);
while (G__17112__i < G__17112__a.length) {G__17112__a[G__17112__i] = arguments[G__17112__i + 1]; ++G__17112__i;}
G__17111 = new cljs.core.IndexedSeq(G__17112__a,0);
}
return om_tools$dom$dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dt.cljs$lang$maxFixedArity = 1;
om_tools$dom$dt.cljs$lang$applyTo = om_tools$dom$dt__2.cljs$lang$applyTo;
om_tools$dom$dt.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dt__0;
om_tools$dom$dt.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dt__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dt;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.em = (function() {
var om_tools$dom$em = null;
var om_tools$dom$em__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});
var om_tools$dom$em__2 = (function() { 
var G__17113__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__7559__auto__,children__7560__auto__);
};
var G__17113 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17114__i = 0, G__17114__a = new Array(arguments.length -  1);
while (G__17114__i < G__17114__a.length) {G__17114__a[G__17114__i] = arguments[G__17114__i + 1]; ++G__17114__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17114__a,0);
} 
return G__17113__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17113.cljs$lang$maxFixedArity = 1;
G__17113.cljs$lang$applyTo = (function (arglist__17115){
var opts__7559__auto__ = cljs.core.first(arglist__17115);
var children__7560__auto__ = cljs.core.rest(arglist__17115);
return G__17113__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17113.cljs$core$IFn$_invoke$arity$variadic = G__17113__delegate;
return G__17113;
})()
;
om_tools$dom$em = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$em__0.call(this);
default:
var G__17116 = null;
if (arguments.length > 1) {
var G__17117__i = 0, G__17117__a = new Array(arguments.length -  1);
while (G__17117__i < G__17117__a.length) {G__17117__a[G__17117__i] = arguments[G__17117__i + 1]; ++G__17117__i;}
G__17116 = new cljs.core.IndexedSeq(G__17117__a,0);
}
return om_tools$dom$em__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$em.cljs$lang$maxFixedArity = 1;
om_tools$dom$em.cljs$lang$applyTo = om_tools$dom$em__2.cljs$lang$applyTo;
om_tools$dom$em.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$em__0;
om_tools$dom$em.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$em__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$em;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.embed = (function() {
var om_tools$dom$embed = null;
var om_tools$dom$embed__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});
var om_tools$dom$embed__2 = (function() { 
var G__17118__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__7559__auto__,children__7560__auto__);
};
var G__17118 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17119__i = 0, G__17119__a = new Array(arguments.length -  1);
while (G__17119__i < G__17119__a.length) {G__17119__a[G__17119__i] = arguments[G__17119__i + 1]; ++G__17119__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17119__a,0);
} 
return G__17118__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17118.cljs$lang$maxFixedArity = 1;
G__17118.cljs$lang$applyTo = (function (arglist__17120){
var opts__7559__auto__ = cljs.core.first(arglist__17120);
var children__7560__auto__ = cljs.core.rest(arglist__17120);
return G__17118__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17118.cljs$core$IFn$_invoke$arity$variadic = G__17118__delegate;
return G__17118;
})()
;
om_tools$dom$embed = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$embed__0.call(this);
default:
var G__17121 = null;
if (arguments.length > 1) {
var G__17122__i = 0, G__17122__a = new Array(arguments.length -  1);
while (G__17122__i < G__17122__a.length) {G__17122__a[G__17122__i] = arguments[G__17122__i + 1]; ++G__17122__i;}
G__17121 = new cljs.core.IndexedSeq(G__17122__a,0);
}
return om_tools$dom$embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$embed.cljs$lang$maxFixedArity = 1;
om_tools$dom$embed.cljs$lang$applyTo = om_tools$dom$embed__2.cljs$lang$applyTo;
om_tools$dom$embed.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$embed__0;
om_tools$dom$embed.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$embed__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$embed;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.fieldset = (function() {
var om_tools$dom$fieldset = null;
var om_tools$dom$fieldset__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});
var om_tools$dom$fieldset__2 = (function() { 
var G__17123__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__7559__auto__,children__7560__auto__);
};
var G__17123 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17124__i = 0, G__17124__a = new Array(arguments.length -  1);
while (G__17124__i < G__17124__a.length) {G__17124__a[G__17124__i] = arguments[G__17124__i + 1]; ++G__17124__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17124__a,0);
} 
return G__17123__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17123.cljs$lang$maxFixedArity = 1;
G__17123.cljs$lang$applyTo = (function (arglist__17125){
var opts__7559__auto__ = cljs.core.first(arglist__17125);
var children__7560__auto__ = cljs.core.rest(arglist__17125);
return G__17123__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17123.cljs$core$IFn$_invoke$arity$variadic = G__17123__delegate;
return G__17123;
})()
;
om_tools$dom$fieldset = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$fieldset__0.call(this);
default:
var G__17126 = null;
if (arguments.length > 1) {
var G__17127__i = 0, G__17127__a = new Array(arguments.length -  1);
while (G__17127__i < G__17127__a.length) {G__17127__a[G__17127__i] = arguments[G__17127__i + 1]; ++G__17127__i;}
G__17126 = new cljs.core.IndexedSeq(G__17127__a,0);
}
return om_tools$dom$fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$fieldset.cljs$lang$maxFixedArity = 1;
om_tools$dom$fieldset.cljs$lang$applyTo = om_tools$dom$fieldset__2.cljs$lang$applyTo;
om_tools$dom$fieldset.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$fieldset__0;
om_tools$dom$fieldset.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$fieldset__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$fieldset;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.figcaption = (function() {
var om_tools$dom$figcaption = null;
var om_tools$dom$figcaption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});
var om_tools$dom$figcaption__2 = (function() { 
var G__17128__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__7559__auto__,children__7560__auto__);
};
var G__17128 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17129__i = 0, G__17129__a = new Array(arguments.length -  1);
while (G__17129__i < G__17129__a.length) {G__17129__a[G__17129__i] = arguments[G__17129__i + 1]; ++G__17129__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17129__a,0);
} 
return G__17128__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17128.cljs$lang$maxFixedArity = 1;
G__17128.cljs$lang$applyTo = (function (arglist__17130){
var opts__7559__auto__ = cljs.core.first(arglist__17130);
var children__7560__auto__ = cljs.core.rest(arglist__17130);
return G__17128__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17128.cljs$core$IFn$_invoke$arity$variadic = G__17128__delegate;
return G__17128;
})()
;
om_tools$dom$figcaption = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$figcaption__0.call(this);
default:
var G__17131 = null;
if (arguments.length > 1) {
var G__17132__i = 0, G__17132__a = new Array(arguments.length -  1);
while (G__17132__i < G__17132__a.length) {G__17132__a[G__17132__i] = arguments[G__17132__i + 1]; ++G__17132__i;}
G__17131 = new cljs.core.IndexedSeq(G__17132__a,0);
}
return om_tools$dom$figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$figcaption.cljs$lang$maxFixedArity = 1;
om_tools$dom$figcaption.cljs$lang$applyTo = om_tools$dom$figcaption__2.cljs$lang$applyTo;
om_tools$dom$figcaption.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$figcaption__0;
om_tools$dom$figcaption.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$figcaption__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$figcaption;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.figure = (function() {
var om_tools$dom$figure = null;
var om_tools$dom$figure__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});
var om_tools$dom$figure__2 = (function() { 
var G__17133__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__7559__auto__,children__7560__auto__);
};
var G__17133 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17134__i = 0, G__17134__a = new Array(arguments.length -  1);
while (G__17134__i < G__17134__a.length) {G__17134__a[G__17134__i] = arguments[G__17134__i + 1]; ++G__17134__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17134__a,0);
} 
return G__17133__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17133.cljs$lang$maxFixedArity = 1;
G__17133.cljs$lang$applyTo = (function (arglist__17135){
var opts__7559__auto__ = cljs.core.first(arglist__17135);
var children__7560__auto__ = cljs.core.rest(arglist__17135);
return G__17133__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17133.cljs$core$IFn$_invoke$arity$variadic = G__17133__delegate;
return G__17133;
})()
;
om_tools$dom$figure = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$figure__0.call(this);
default:
var G__17136 = null;
if (arguments.length > 1) {
var G__17137__i = 0, G__17137__a = new Array(arguments.length -  1);
while (G__17137__i < G__17137__a.length) {G__17137__a[G__17137__i] = arguments[G__17137__i + 1]; ++G__17137__i;}
G__17136 = new cljs.core.IndexedSeq(G__17137__a,0);
}
return om_tools$dom$figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$figure.cljs$lang$maxFixedArity = 1;
om_tools$dom$figure.cljs$lang$applyTo = om_tools$dom$figure__2.cljs$lang$applyTo;
om_tools$dom$figure.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$figure__0;
om_tools$dom$figure.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$figure__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$figure;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.footer = (function() {
var om_tools$dom$footer = null;
var om_tools$dom$footer__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});
var om_tools$dom$footer__2 = (function() { 
var G__17138__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__7559__auto__,children__7560__auto__);
};
var G__17138 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17139__i = 0, G__17139__a = new Array(arguments.length -  1);
while (G__17139__i < G__17139__a.length) {G__17139__a[G__17139__i] = arguments[G__17139__i + 1]; ++G__17139__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17139__a,0);
} 
return G__17138__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17138.cljs$lang$maxFixedArity = 1;
G__17138.cljs$lang$applyTo = (function (arglist__17140){
var opts__7559__auto__ = cljs.core.first(arglist__17140);
var children__7560__auto__ = cljs.core.rest(arglist__17140);
return G__17138__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17138.cljs$core$IFn$_invoke$arity$variadic = G__17138__delegate;
return G__17138;
})()
;
om_tools$dom$footer = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$footer__0.call(this);
default:
var G__17141 = null;
if (arguments.length > 1) {
var G__17142__i = 0, G__17142__a = new Array(arguments.length -  1);
while (G__17142__i < G__17142__a.length) {G__17142__a[G__17142__i] = arguments[G__17142__i + 1]; ++G__17142__i;}
G__17141 = new cljs.core.IndexedSeq(G__17142__a,0);
}
return om_tools$dom$footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$footer.cljs$lang$maxFixedArity = 1;
om_tools$dom$footer.cljs$lang$applyTo = om_tools$dom$footer__2.cljs$lang$applyTo;
om_tools$dom$footer.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$footer__0;
om_tools$dom$footer.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$footer__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$footer;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.form = (function() {
var om_tools$dom$form = null;
var om_tools$dom$form__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});
var om_tools$dom$form__2 = (function() { 
var G__17143__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__7559__auto__,children__7560__auto__);
};
var G__17143 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17144__i = 0, G__17144__a = new Array(arguments.length -  1);
while (G__17144__i < G__17144__a.length) {G__17144__a[G__17144__i] = arguments[G__17144__i + 1]; ++G__17144__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17144__a,0);
} 
return G__17143__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17143.cljs$lang$maxFixedArity = 1;
G__17143.cljs$lang$applyTo = (function (arglist__17145){
var opts__7559__auto__ = cljs.core.first(arglist__17145);
var children__7560__auto__ = cljs.core.rest(arglist__17145);
return G__17143__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17143.cljs$core$IFn$_invoke$arity$variadic = G__17143__delegate;
return G__17143;
})()
;
om_tools$dom$form = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$form__0.call(this);
default:
var G__17146 = null;
if (arguments.length > 1) {
var G__17147__i = 0, G__17147__a = new Array(arguments.length -  1);
while (G__17147__i < G__17147__a.length) {G__17147__a[G__17147__i] = arguments[G__17147__i + 1]; ++G__17147__i;}
G__17146 = new cljs.core.IndexedSeq(G__17147__a,0);
}
return om_tools$dom$form__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$form.cljs$lang$maxFixedArity = 1;
om_tools$dom$form.cljs$lang$applyTo = om_tools$dom$form__2.cljs$lang$applyTo;
om_tools$dom$form.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$form__0;
om_tools$dom$form.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$form__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$form;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h1 = (function() {
var om_tools$dom$h1 = null;
var om_tools$dom$h1__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});
var om_tools$dom$h1__2 = (function() { 
var G__17148__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__7559__auto__,children__7560__auto__);
};
var G__17148 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17149__i = 0, G__17149__a = new Array(arguments.length -  1);
while (G__17149__i < G__17149__a.length) {G__17149__a[G__17149__i] = arguments[G__17149__i + 1]; ++G__17149__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17149__a,0);
} 
return G__17148__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17148.cljs$lang$maxFixedArity = 1;
G__17148.cljs$lang$applyTo = (function (arglist__17150){
var opts__7559__auto__ = cljs.core.first(arglist__17150);
var children__7560__auto__ = cljs.core.rest(arglist__17150);
return G__17148__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17148.cljs$core$IFn$_invoke$arity$variadic = G__17148__delegate;
return G__17148;
})()
;
om_tools$dom$h1 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h1__0.call(this);
default:
var G__17151 = null;
if (arguments.length > 1) {
var G__17152__i = 0, G__17152__a = new Array(arguments.length -  1);
while (G__17152__i < G__17152__a.length) {G__17152__a[G__17152__i] = arguments[G__17152__i + 1]; ++G__17152__i;}
G__17151 = new cljs.core.IndexedSeq(G__17152__a,0);
}
return om_tools$dom$h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h1.cljs$lang$maxFixedArity = 1;
om_tools$dom$h1.cljs$lang$applyTo = om_tools$dom$h1__2.cljs$lang$applyTo;
om_tools$dom$h1.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h1__0;
om_tools$dom$h1.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h1__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h1;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h2 = (function() {
var om_tools$dom$h2 = null;
var om_tools$dom$h2__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});
var om_tools$dom$h2__2 = (function() { 
var G__17153__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__7559__auto__,children__7560__auto__);
};
var G__17153 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17154__i = 0, G__17154__a = new Array(arguments.length -  1);
while (G__17154__i < G__17154__a.length) {G__17154__a[G__17154__i] = arguments[G__17154__i + 1]; ++G__17154__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17154__a,0);
} 
return G__17153__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17153.cljs$lang$maxFixedArity = 1;
G__17153.cljs$lang$applyTo = (function (arglist__17155){
var opts__7559__auto__ = cljs.core.first(arglist__17155);
var children__7560__auto__ = cljs.core.rest(arglist__17155);
return G__17153__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17153.cljs$core$IFn$_invoke$arity$variadic = G__17153__delegate;
return G__17153;
})()
;
om_tools$dom$h2 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h2__0.call(this);
default:
var G__17156 = null;
if (arguments.length > 1) {
var G__17157__i = 0, G__17157__a = new Array(arguments.length -  1);
while (G__17157__i < G__17157__a.length) {G__17157__a[G__17157__i] = arguments[G__17157__i + 1]; ++G__17157__i;}
G__17156 = new cljs.core.IndexedSeq(G__17157__a,0);
}
return om_tools$dom$h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h2.cljs$lang$maxFixedArity = 1;
om_tools$dom$h2.cljs$lang$applyTo = om_tools$dom$h2__2.cljs$lang$applyTo;
om_tools$dom$h2.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h2__0;
om_tools$dom$h2.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h2__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h2;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h3 = (function() {
var om_tools$dom$h3 = null;
var om_tools$dom$h3__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});
var om_tools$dom$h3__2 = (function() { 
var G__17158__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__7559__auto__,children__7560__auto__);
};
var G__17158 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17159__i = 0, G__17159__a = new Array(arguments.length -  1);
while (G__17159__i < G__17159__a.length) {G__17159__a[G__17159__i] = arguments[G__17159__i + 1]; ++G__17159__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17159__a,0);
} 
return G__17158__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17158.cljs$lang$maxFixedArity = 1;
G__17158.cljs$lang$applyTo = (function (arglist__17160){
var opts__7559__auto__ = cljs.core.first(arglist__17160);
var children__7560__auto__ = cljs.core.rest(arglist__17160);
return G__17158__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17158.cljs$core$IFn$_invoke$arity$variadic = G__17158__delegate;
return G__17158;
})()
;
om_tools$dom$h3 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h3__0.call(this);
default:
var G__17161 = null;
if (arguments.length > 1) {
var G__17162__i = 0, G__17162__a = new Array(arguments.length -  1);
while (G__17162__i < G__17162__a.length) {G__17162__a[G__17162__i] = arguments[G__17162__i + 1]; ++G__17162__i;}
G__17161 = new cljs.core.IndexedSeq(G__17162__a,0);
}
return om_tools$dom$h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h3.cljs$lang$maxFixedArity = 1;
om_tools$dom$h3.cljs$lang$applyTo = om_tools$dom$h3__2.cljs$lang$applyTo;
om_tools$dom$h3.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h3__0;
om_tools$dom$h3.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h3__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h3;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h4 = (function() {
var om_tools$dom$h4 = null;
var om_tools$dom$h4__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});
var om_tools$dom$h4__2 = (function() { 
var G__17163__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__7559__auto__,children__7560__auto__);
};
var G__17163 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17164__i = 0, G__17164__a = new Array(arguments.length -  1);
while (G__17164__i < G__17164__a.length) {G__17164__a[G__17164__i] = arguments[G__17164__i + 1]; ++G__17164__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17164__a,0);
} 
return G__17163__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17163.cljs$lang$maxFixedArity = 1;
G__17163.cljs$lang$applyTo = (function (arglist__17165){
var opts__7559__auto__ = cljs.core.first(arglist__17165);
var children__7560__auto__ = cljs.core.rest(arglist__17165);
return G__17163__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17163.cljs$core$IFn$_invoke$arity$variadic = G__17163__delegate;
return G__17163;
})()
;
om_tools$dom$h4 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h4__0.call(this);
default:
var G__17166 = null;
if (arguments.length > 1) {
var G__17167__i = 0, G__17167__a = new Array(arguments.length -  1);
while (G__17167__i < G__17167__a.length) {G__17167__a[G__17167__i] = arguments[G__17167__i + 1]; ++G__17167__i;}
G__17166 = new cljs.core.IndexedSeq(G__17167__a,0);
}
return om_tools$dom$h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h4.cljs$lang$maxFixedArity = 1;
om_tools$dom$h4.cljs$lang$applyTo = om_tools$dom$h4__2.cljs$lang$applyTo;
om_tools$dom$h4.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h4__0;
om_tools$dom$h4.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h4__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h4;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h5 = (function() {
var om_tools$dom$h5 = null;
var om_tools$dom$h5__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});
var om_tools$dom$h5__2 = (function() { 
var G__17168__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__7559__auto__,children__7560__auto__);
};
var G__17168 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17169__i = 0, G__17169__a = new Array(arguments.length -  1);
while (G__17169__i < G__17169__a.length) {G__17169__a[G__17169__i] = arguments[G__17169__i + 1]; ++G__17169__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17169__a,0);
} 
return G__17168__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17168.cljs$lang$maxFixedArity = 1;
G__17168.cljs$lang$applyTo = (function (arglist__17170){
var opts__7559__auto__ = cljs.core.first(arglist__17170);
var children__7560__auto__ = cljs.core.rest(arglist__17170);
return G__17168__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17168.cljs$core$IFn$_invoke$arity$variadic = G__17168__delegate;
return G__17168;
})()
;
om_tools$dom$h5 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h5__0.call(this);
default:
var G__17171 = null;
if (arguments.length > 1) {
var G__17172__i = 0, G__17172__a = new Array(arguments.length -  1);
while (G__17172__i < G__17172__a.length) {G__17172__a[G__17172__i] = arguments[G__17172__i + 1]; ++G__17172__i;}
G__17171 = new cljs.core.IndexedSeq(G__17172__a,0);
}
return om_tools$dom$h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h5.cljs$lang$maxFixedArity = 1;
om_tools$dom$h5.cljs$lang$applyTo = om_tools$dom$h5__2.cljs$lang$applyTo;
om_tools$dom$h5.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h5__0;
om_tools$dom$h5.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h5__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h5;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h6 = (function() {
var om_tools$dom$h6 = null;
var om_tools$dom$h6__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});
var om_tools$dom$h6__2 = (function() { 
var G__17173__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__7559__auto__,children__7560__auto__);
};
var G__17173 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17174__i = 0, G__17174__a = new Array(arguments.length -  1);
while (G__17174__i < G__17174__a.length) {G__17174__a[G__17174__i] = arguments[G__17174__i + 1]; ++G__17174__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17174__a,0);
} 
return G__17173__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17173.cljs$lang$maxFixedArity = 1;
G__17173.cljs$lang$applyTo = (function (arglist__17175){
var opts__7559__auto__ = cljs.core.first(arglist__17175);
var children__7560__auto__ = cljs.core.rest(arglist__17175);
return G__17173__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17173.cljs$core$IFn$_invoke$arity$variadic = G__17173__delegate;
return G__17173;
})()
;
om_tools$dom$h6 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h6__0.call(this);
default:
var G__17176 = null;
if (arguments.length > 1) {
var G__17177__i = 0, G__17177__a = new Array(arguments.length -  1);
while (G__17177__i < G__17177__a.length) {G__17177__a[G__17177__i] = arguments[G__17177__i + 1]; ++G__17177__i;}
G__17176 = new cljs.core.IndexedSeq(G__17177__a,0);
}
return om_tools$dom$h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h6.cljs$lang$maxFixedArity = 1;
om_tools$dom$h6.cljs$lang$applyTo = om_tools$dom$h6__2.cljs$lang$applyTo;
om_tools$dom$h6.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h6__0;
om_tools$dom$h6.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h6__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h6;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.head = (function() {
var om_tools$dom$head = null;
var om_tools$dom$head__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});
var om_tools$dom$head__2 = (function() { 
var G__17178__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__7559__auto__,children__7560__auto__);
};
var G__17178 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17179__i = 0, G__17179__a = new Array(arguments.length -  1);
while (G__17179__i < G__17179__a.length) {G__17179__a[G__17179__i] = arguments[G__17179__i + 1]; ++G__17179__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17179__a,0);
} 
return G__17178__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17178.cljs$lang$maxFixedArity = 1;
G__17178.cljs$lang$applyTo = (function (arglist__17180){
var opts__7559__auto__ = cljs.core.first(arglist__17180);
var children__7560__auto__ = cljs.core.rest(arglist__17180);
return G__17178__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17178.cljs$core$IFn$_invoke$arity$variadic = G__17178__delegate;
return G__17178;
})()
;
om_tools$dom$head = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$head__0.call(this);
default:
var G__17181 = null;
if (arguments.length > 1) {
var G__17182__i = 0, G__17182__a = new Array(arguments.length -  1);
while (G__17182__i < G__17182__a.length) {G__17182__a[G__17182__i] = arguments[G__17182__i + 1]; ++G__17182__i;}
G__17181 = new cljs.core.IndexedSeq(G__17182__a,0);
}
return om_tools$dom$head__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$head.cljs$lang$maxFixedArity = 1;
om_tools$dom$head.cljs$lang$applyTo = om_tools$dom$head__2.cljs$lang$applyTo;
om_tools$dom$head.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$head__0;
om_tools$dom$head.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$head__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$head;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.header = (function() {
var om_tools$dom$header = null;
var om_tools$dom$header__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});
var om_tools$dom$header__2 = (function() { 
var G__17183__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__7559__auto__,children__7560__auto__);
};
var G__17183 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17184__i = 0, G__17184__a = new Array(arguments.length -  1);
while (G__17184__i < G__17184__a.length) {G__17184__a[G__17184__i] = arguments[G__17184__i + 1]; ++G__17184__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17184__a,0);
} 
return G__17183__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17183.cljs$lang$maxFixedArity = 1;
G__17183.cljs$lang$applyTo = (function (arglist__17185){
var opts__7559__auto__ = cljs.core.first(arglist__17185);
var children__7560__auto__ = cljs.core.rest(arglist__17185);
return G__17183__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17183.cljs$core$IFn$_invoke$arity$variadic = G__17183__delegate;
return G__17183;
})()
;
om_tools$dom$header = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$header__0.call(this);
default:
var G__17186 = null;
if (arguments.length > 1) {
var G__17187__i = 0, G__17187__a = new Array(arguments.length -  1);
while (G__17187__i < G__17187__a.length) {G__17187__a[G__17187__i] = arguments[G__17187__i + 1]; ++G__17187__i;}
G__17186 = new cljs.core.IndexedSeq(G__17187__a,0);
}
return om_tools$dom$header__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$header.cljs$lang$maxFixedArity = 1;
om_tools$dom$header.cljs$lang$applyTo = om_tools$dom$header__2.cljs$lang$applyTo;
om_tools$dom$header.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$header__0;
om_tools$dom$header.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$header__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$header;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.hr = (function() {
var om_tools$dom$hr = null;
var om_tools$dom$hr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});
var om_tools$dom$hr__2 = (function() { 
var G__17188__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__7559__auto__,children__7560__auto__);
};
var G__17188 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17189__i = 0, G__17189__a = new Array(arguments.length -  1);
while (G__17189__i < G__17189__a.length) {G__17189__a[G__17189__i] = arguments[G__17189__i + 1]; ++G__17189__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17189__a,0);
} 
return G__17188__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17188.cljs$lang$maxFixedArity = 1;
G__17188.cljs$lang$applyTo = (function (arglist__17190){
var opts__7559__auto__ = cljs.core.first(arglist__17190);
var children__7560__auto__ = cljs.core.rest(arglist__17190);
return G__17188__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17188.cljs$core$IFn$_invoke$arity$variadic = G__17188__delegate;
return G__17188;
})()
;
om_tools$dom$hr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$hr__0.call(this);
default:
var G__17191 = null;
if (arguments.length > 1) {
var G__17192__i = 0, G__17192__a = new Array(arguments.length -  1);
while (G__17192__i < G__17192__a.length) {G__17192__a[G__17192__i] = arguments[G__17192__i + 1]; ++G__17192__i;}
G__17191 = new cljs.core.IndexedSeq(G__17192__a,0);
}
return om_tools$dom$hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$hr.cljs$lang$maxFixedArity = 1;
om_tools$dom$hr.cljs$lang$applyTo = om_tools$dom$hr__2.cljs$lang$applyTo;
om_tools$dom$hr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$hr__0;
om_tools$dom$hr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$hr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$hr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.html = (function() {
var om_tools$dom$html = null;
var om_tools$dom$html__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});
var om_tools$dom$html__2 = (function() { 
var G__17193__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__7559__auto__,children__7560__auto__);
};
var G__17193 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17194__i = 0, G__17194__a = new Array(arguments.length -  1);
while (G__17194__i < G__17194__a.length) {G__17194__a[G__17194__i] = arguments[G__17194__i + 1]; ++G__17194__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17194__a,0);
} 
return G__17193__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17193.cljs$lang$maxFixedArity = 1;
G__17193.cljs$lang$applyTo = (function (arglist__17195){
var opts__7559__auto__ = cljs.core.first(arglist__17195);
var children__7560__auto__ = cljs.core.rest(arglist__17195);
return G__17193__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17193.cljs$core$IFn$_invoke$arity$variadic = G__17193__delegate;
return G__17193;
})()
;
om_tools$dom$html = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$html__0.call(this);
default:
var G__17196 = null;
if (arguments.length > 1) {
var G__17197__i = 0, G__17197__a = new Array(arguments.length -  1);
while (G__17197__i < G__17197__a.length) {G__17197__a[G__17197__i] = arguments[G__17197__i + 1]; ++G__17197__i;}
G__17196 = new cljs.core.IndexedSeq(G__17197__a,0);
}
return om_tools$dom$html__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$html.cljs$lang$maxFixedArity = 1;
om_tools$dom$html.cljs$lang$applyTo = om_tools$dom$html__2.cljs$lang$applyTo;
om_tools$dom$html.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$html__0;
om_tools$dom$html.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$html__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$html;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.i = (function() {
var om_tools$dom$i = null;
var om_tools$dom$i__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});
var om_tools$dom$i__2 = (function() { 
var G__17198__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__7559__auto__,children__7560__auto__);
};
var G__17198 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17199__i = 0, G__17199__a = new Array(arguments.length -  1);
while (G__17199__i < G__17199__a.length) {G__17199__a[G__17199__i] = arguments[G__17199__i + 1]; ++G__17199__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17199__a,0);
} 
return G__17198__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17198.cljs$lang$maxFixedArity = 1;
G__17198.cljs$lang$applyTo = (function (arglist__17200){
var opts__7559__auto__ = cljs.core.first(arglist__17200);
var children__7560__auto__ = cljs.core.rest(arglist__17200);
return G__17198__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17198.cljs$core$IFn$_invoke$arity$variadic = G__17198__delegate;
return G__17198;
})()
;
om_tools$dom$i = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$i__0.call(this);
default:
var G__17201 = null;
if (arguments.length > 1) {
var G__17202__i = 0, G__17202__a = new Array(arguments.length -  1);
while (G__17202__i < G__17202__a.length) {G__17202__a[G__17202__i] = arguments[G__17202__i + 1]; ++G__17202__i;}
G__17201 = new cljs.core.IndexedSeq(G__17202__a,0);
}
return om_tools$dom$i__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$i.cljs$lang$maxFixedArity = 1;
om_tools$dom$i.cljs$lang$applyTo = om_tools$dom$i__2.cljs$lang$applyTo;
om_tools$dom$i.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$i__0;
om_tools$dom$i.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$i__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$i;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.iframe = (function() {
var om_tools$dom$iframe = null;
var om_tools$dom$iframe__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});
var om_tools$dom$iframe__2 = (function() { 
var G__17203__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__7559__auto__,children__7560__auto__);
};
var G__17203 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17204__i = 0, G__17204__a = new Array(arguments.length -  1);
while (G__17204__i < G__17204__a.length) {G__17204__a[G__17204__i] = arguments[G__17204__i + 1]; ++G__17204__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17204__a,0);
} 
return G__17203__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17203.cljs$lang$maxFixedArity = 1;
G__17203.cljs$lang$applyTo = (function (arglist__17205){
var opts__7559__auto__ = cljs.core.first(arglist__17205);
var children__7560__auto__ = cljs.core.rest(arglist__17205);
return G__17203__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17203.cljs$core$IFn$_invoke$arity$variadic = G__17203__delegate;
return G__17203;
})()
;
om_tools$dom$iframe = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$iframe__0.call(this);
default:
var G__17206 = null;
if (arguments.length > 1) {
var G__17207__i = 0, G__17207__a = new Array(arguments.length -  1);
while (G__17207__i < G__17207__a.length) {G__17207__a[G__17207__i] = arguments[G__17207__i + 1]; ++G__17207__i;}
G__17206 = new cljs.core.IndexedSeq(G__17207__a,0);
}
return om_tools$dom$iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$iframe.cljs$lang$maxFixedArity = 1;
om_tools$dom$iframe.cljs$lang$applyTo = om_tools$dom$iframe__2.cljs$lang$applyTo;
om_tools$dom$iframe.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$iframe__0;
om_tools$dom$iframe.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$iframe__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$iframe;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.img = (function() {
var om_tools$dom$img = null;
var om_tools$dom$img__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});
var om_tools$dom$img__2 = (function() { 
var G__17208__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__7559__auto__,children__7560__auto__);
};
var G__17208 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17209__i = 0, G__17209__a = new Array(arguments.length -  1);
while (G__17209__i < G__17209__a.length) {G__17209__a[G__17209__i] = arguments[G__17209__i + 1]; ++G__17209__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17209__a,0);
} 
return G__17208__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17208.cljs$lang$maxFixedArity = 1;
G__17208.cljs$lang$applyTo = (function (arglist__17210){
var opts__7559__auto__ = cljs.core.first(arglist__17210);
var children__7560__auto__ = cljs.core.rest(arglist__17210);
return G__17208__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17208.cljs$core$IFn$_invoke$arity$variadic = G__17208__delegate;
return G__17208;
})()
;
om_tools$dom$img = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$img__0.call(this);
default:
var G__17211 = null;
if (arguments.length > 1) {
var G__17212__i = 0, G__17212__a = new Array(arguments.length -  1);
while (G__17212__i < G__17212__a.length) {G__17212__a[G__17212__i] = arguments[G__17212__i + 1]; ++G__17212__i;}
G__17211 = new cljs.core.IndexedSeq(G__17212__a,0);
}
return om_tools$dom$img__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$img.cljs$lang$maxFixedArity = 1;
om_tools$dom$img.cljs$lang$applyTo = om_tools$dom$img__2.cljs$lang$applyTo;
om_tools$dom$img.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$img__0;
om_tools$dom$img.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$img__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$img;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ins = (function() {
var om_tools$dom$ins = null;
var om_tools$dom$ins__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});
var om_tools$dom$ins__2 = (function() { 
var G__17213__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__7559__auto__,children__7560__auto__);
};
var G__17213 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17214__i = 0, G__17214__a = new Array(arguments.length -  1);
while (G__17214__i < G__17214__a.length) {G__17214__a[G__17214__i] = arguments[G__17214__i + 1]; ++G__17214__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17214__a,0);
} 
return G__17213__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17213.cljs$lang$maxFixedArity = 1;
G__17213.cljs$lang$applyTo = (function (arglist__17215){
var opts__7559__auto__ = cljs.core.first(arglist__17215);
var children__7560__auto__ = cljs.core.rest(arglist__17215);
return G__17213__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17213.cljs$core$IFn$_invoke$arity$variadic = G__17213__delegate;
return G__17213;
})()
;
om_tools$dom$ins = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ins__0.call(this);
default:
var G__17216 = null;
if (arguments.length > 1) {
var G__17217__i = 0, G__17217__a = new Array(arguments.length -  1);
while (G__17217__i < G__17217__a.length) {G__17217__a[G__17217__i] = arguments[G__17217__i + 1]; ++G__17217__i;}
G__17216 = new cljs.core.IndexedSeq(G__17217__a,0);
}
return om_tools$dom$ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ins.cljs$lang$maxFixedArity = 1;
om_tools$dom$ins.cljs$lang$applyTo = om_tools$dom$ins__2.cljs$lang$applyTo;
om_tools$dom$ins.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ins__0;
om_tools$dom$ins.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ins__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ins;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.kbd = (function() {
var om_tools$dom$kbd = null;
var om_tools$dom$kbd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});
var om_tools$dom$kbd__2 = (function() { 
var G__17218__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__7559__auto__,children__7560__auto__);
};
var G__17218 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17219__i = 0, G__17219__a = new Array(arguments.length -  1);
while (G__17219__i < G__17219__a.length) {G__17219__a[G__17219__i] = arguments[G__17219__i + 1]; ++G__17219__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17219__a,0);
} 
return G__17218__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17218.cljs$lang$maxFixedArity = 1;
G__17218.cljs$lang$applyTo = (function (arglist__17220){
var opts__7559__auto__ = cljs.core.first(arglist__17220);
var children__7560__auto__ = cljs.core.rest(arglist__17220);
return G__17218__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17218.cljs$core$IFn$_invoke$arity$variadic = G__17218__delegate;
return G__17218;
})()
;
om_tools$dom$kbd = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$kbd__0.call(this);
default:
var G__17221 = null;
if (arguments.length > 1) {
var G__17222__i = 0, G__17222__a = new Array(arguments.length -  1);
while (G__17222__i < G__17222__a.length) {G__17222__a[G__17222__i] = arguments[G__17222__i + 1]; ++G__17222__i;}
G__17221 = new cljs.core.IndexedSeq(G__17222__a,0);
}
return om_tools$dom$kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$kbd.cljs$lang$maxFixedArity = 1;
om_tools$dom$kbd.cljs$lang$applyTo = om_tools$dom$kbd__2.cljs$lang$applyTo;
om_tools$dom$kbd.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$kbd__0;
om_tools$dom$kbd.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$kbd__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$kbd;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.keygen = (function() {
var om_tools$dom$keygen = null;
var om_tools$dom$keygen__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});
var om_tools$dom$keygen__2 = (function() { 
var G__17223__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__7559__auto__,children__7560__auto__);
};
var G__17223 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17224__i = 0, G__17224__a = new Array(arguments.length -  1);
while (G__17224__i < G__17224__a.length) {G__17224__a[G__17224__i] = arguments[G__17224__i + 1]; ++G__17224__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17224__a,0);
} 
return G__17223__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17223.cljs$lang$maxFixedArity = 1;
G__17223.cljs$lang$applyTo = (function (arglist__17225){
var opts__7559__auto__ = cljs.core.first(arglist__17225);
var children__7560__auto__ = cljs.core.rest(arglist__17225);
return G__17223__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17223.cljs$core$IFn$_invoke$arity$variadic = G__17223__delegate;
return G__17223;
})()
;
om_tools$dom$keygen = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$keygen__0.call(this);
default:
var G__17226 = null;
if (arguments.length > 1) {
var G__17227__i = 0, G__17227__a = new Array(arguments.length -  1);
while (G__17227__i < G__17227__a.length) {G__17227__a[G__17227__i] = arguments[G__17227__i + 1]; ++G__17227__i;}
G__17226 = new cljs.core.IndexedSeq(G__17227__a,0);
}
return om_tools$dom$keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$keygen.cljs$lang$maxFixedArity = 1;
om_tools$dom$keygen.cljs$lang$applyTo = om_tools$dom$keygen__2.cljs$lang$applyTo;
om_tools$dom$keygen.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$keygen__0;
om_tools$dom$keygen.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$keygen__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$keygen;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.label = (function() {
var om_tools$dom$label = null;
var om_tools$dom$label__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});
var om_tools$dom$label__2 = (function() { 
var G__17228__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__7559__auto__,children__7560__auto__);
};
var G__17228 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17229__i = 0, G__17229__a = new Array(arguments.length -  1);
while (G__17229__i < G__17229__a.length) {G__17229__a[G__17229__i] = arguments[G__17229__i + 1]; ++G__17229__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17229__a,0);
} 
return G__17228__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17228.cljs$lang$maxFixedArity = 1;
G__17228.cljs$lang$applyTo = (function (arglist__17230){
var opts__7559__auto__ = cljs.core.first(arglist__17230);
var children__7560__auto__ = cljs.core.rest(arglist__17230);
return G__17228__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17228.cljs$core$IFn$_invoke$arity$variadic = G__17228__delegate;
return G__17228;
})()
;
om_tools$dom$label = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$label__0.call(this);
default:
var G__17231 = null;
if (arguments.length > 1) {
var G__17232__i = 0, G__17232__a = new Array(arguments.length -  1);
while (G__17232__i < G__17232__a.length) {G__17232__a[G__17232__i] = arguments[G__17232__i + 1]; ++G__17232__i;}
G__17231 = new cljs.core.IndexedSeq(G__17232__a,0);
}
return om_tools$dom$label__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$label.cljs$lang$maxFixedArity = 1;
om_tools$dom$label.cljs$lang$applyTo = om_tools$dom$label__2.cljs$lang$applyTo;
om_tools$dom$label.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$label__0;
om_tools$dom$label.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$label__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$label;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.legend = (function() {
var om_tools$dom$legend = null;
var om_tools$dom$legend__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});
var om_tools$dom$legend__2 = (function() { 
var G__17233__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__7559__auto__,children__7560__auto__);
};
var G__17233 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17234__i = 0, G__17234__a = new Array(arguments.length -  1);
while (G__17234__i < G__17234__a.length) {G__17234__a[G__17234__i] = arguments[G__17234__i + 1]; ++G__17234__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17234__a,0);
} 
return G__17233__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17233.cljs$lang$maxFixedArity = 1;
G__17233.cljs$lang$applyTo = (function (arglist__17235){
var opts__7559__auto__ = cljs.core.first(arglist__17235);
var children__7560__auto__ = cljs.core.rest(arglist__17235);
return G__17233__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17233.cljs$core$IFn$_invoke$arity$variadic = G__17233__delegate;
return G__17233;
})()
;
om_tools$dom$legend = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$legend__0.call(this);
default:
var G__17236 = null;
if (arguments.length > 1) {
var G__17237__i = 0, G__17237__a = new Array(arguments.length -  1);
while (G__17237__i < G__17237__a.length) {G__17237__a[G__17237__i] = arguments[G__17237__i + 1]; ++G__17237__i;}
G__17236 = new cljs.core.IndexedSeq(G__17237__a,0);
}
return om_tools$dom$legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$legend.cljs$lang$maxFixedArity = 1;
om_tools$dom$legend.cljs$lang$applyTo = om_tools$dom$legend__2.cljs$lang$applyTo;
om_tools$dom$legend.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$legend__0;
om_tools$dom$legend.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$legend__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$legend;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.li = (function() {
var om_tools$dom$li = null;
var om_tools$dom$li__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});
var om_tools$dom$li__2 = (function() { 
var G__17238__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__7559__auto__,children__7560__auto__);
};
var G__17238 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17239__i = 0, G__17239__a = new Array(arguments.length -  1);
while (G__17239__i < G__17239__a.length) {G__17239__a[G__17239__i] = arguments[G__17239__i + 1]; ++G__17239__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17239__a,0);
} 
return G__17238__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17238.cljs$lang$maxFixedArity = 1;
G__17238.cljs$lang$applyTo = (function (arglist__17240){
var opts__7559__auto__ = cljs.core.first(arglist__17240);
var children__7560__auto__ = cljs.core.rest(arglist__17240);
return G__17238__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17238.cljs$core$IFn$_invoke$arity$variadic = G__17238__delegate;
return G__17238;
})()
;
om_tools$dom$li = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$li__0.call(this);
default:
var G__17241 = null;
if (arguments.length > 1) {
var G__17242__i = 0, G__17242__a = new Array(arguments.length -  1);
while (G__17242__i < G__17242__a.length) {G__17242__a[G__17242__i] = arguments[G__17242__i + 1]; ++G__17242__i;}
G__17241 = new cljs.core.IndexedSeq(G__17242__a,0);
}
return om_tools$dom$li__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$li.cljs$lang$maxFixedArity = 1;
om_tools$dom$li.cljs$lang$applyTo = om_tools$dom$li__2.cljs$lang$applyTo;
om_tools$dom$li.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$li__0;
om_tools$dom$li.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$li__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$li;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.link = (function() {
var om_tools$dom$link = null;
var om_tools$dom$link__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});
var om_tools$dom$link__2 = (function() { 
var G__17243__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__7559__auto__,children__7560__auto__);
};
var G__17243 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17244__i = 0, G__17244__a = new Array(arguments.length -  1);
while (G__17244__i < G__17244__a.length) {G__17244__a[G__17244__i] = arguments[G__17244__i + 1]; ++G__17244__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17244__a,0);
} 
return G__17243__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17243.cljs$lang$maxFixedArity = 1;
G__17243.cljs$lang$applyTo = (function (arglist__17245){
var opts__7559__auto__ = cljs.core.first(arglist__17245);
var children__7560__auto__ = cljs.core.rest(arglist__17245);
return G__17243__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17243.cljs$core$IFn$_invoke$arity$variadic = G__17243__delegate;
return G__17243;
})()
;
om_tools$dom$link = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$link__0.call(this);
default:
var G__17246 = null;
if (arguments.length > 1) {
var G__17247__i = 0, G__17247__a = new Array(arguments.length -  1);
while (G__17247__i < G__17247__a.length) {G__17247__a[G__17247__i] = arguments[G__17247__i + 1]; ++G__17247__i;}
G__17246 = new cljs.core.IndexedSeq(G__17247__a,0);
}
return om_tools$dom$link__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$link.cljs$lang$maxFixedArity = 1;
om_tools$dom$link.cljs$lang$applyTo = om_tools$dom$link__2.cljs$lang$applyTo;
om_tools$dom$link.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$link__0;
om_tools$dom$link.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$link__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$link;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.main = (function() {
var om_tools$dom$main = null;
var om_tools$dom$main__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});
var om_tools$dom$main__2 = (function() { 
var G__17248__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__7559__auto__,children__7560__auto__);
};
var G__17248 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17249__i = 0, G__17249__a = new Array(arguments.length -  1);
while (G__17249__i < G__17249__a.length) {G__17249__a[G__17249__i] = arguments[G__17249__i + 1]; ++G__17249__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17249__a,0);
} 
return G__17248__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17248.cljs$lang$maxFixedArity = 1;
G__17248.cljs$lang$applyTo = (function (arglist__17250){
var opts__7559__auto__ = cljs.core.first(arglist__17250);
var children__7560__auto__ = cljs.core.rest(arglist__17250);
return G__17248__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17248.cljs$core$IFn$_invoke$arity$variadic = G__17248__delegate;
return G__17248;
})()
;
om_tools$dom$main = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$main__0.call(this);
default:
var G__17251 = null;
if (arguments.length > 1) {
var G__17252__i = 0, G__17252__a = new Array(arguments.length -  1);
while (G__17252__i < G__17252__a.length) {G__17252__a[G__17252__i] = arguments[G__17252__i + 1]; ++G__17252__i;}
G__17251 = new cljs.core.IndexedSeq(G__17252__a,0);
}
return om_tools$dom$main__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$main.cljs$lang$maxFixedArity = 1;
om_tools$dom$main.cljs$lang$applyTo = om_tools$dom$main__2.cljs$lang$applyTo;
om_tools$dom$main.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$main__0;
om_tools$dom$main.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$main__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$main;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.map = (function() {
var om_tools$dom$map = null;
var om_tools$dom$map__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});
var om_tools$dom$map__2 = (function() { 
var G__17253__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__7559__auto__,children__7560__auto__);
};
var G__17253 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17254__i = 0, G__17254__a = new Array(arguments.length -  1);
while (G__17254__i < G__17254__a.length) {G__17254__a[G__17254__i] = arguments[G__17254__i + 1]; ++G__17254__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17254__a,0);
} 
return G__17253__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17253.cljs$lang$maxFixedArity = 1;
G__17253.cljs$lang$applyTo = (function (arglist__17255){
var opts__7559__auto__ = cljs.core.first(arglist__17255);
var children__7560__auto__ = cljs.core.rest(arglist__17255);
return G__17253__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17253.cljs$core$IFn$_invoke$arity$variadic = G__17253__delegate;
return G__17253;
})()
;
om_tools$dom$map = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$map__0.call(this);
default:
var G__17256 = null;
if (arguments.length > 1) {
var G__17257__i = 0, G__17257__a = new Array(arguments.length -  1);
while (G__17257__i < G__17257__a.length) {G__17257__a[G__17257__i] = arguments[G__17257__i + 1]; ++G__17257__i;}
G__17256 = new cljs.core.IndexedSeq(G__17257__a,0);
}
return om_tools$dom$map__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$map.cljs$lang$maxFixedArity = 1;
om_tools$dom$map.cljs$lang$applyTo = om_tools$dom$map__2.cljs$lang$applyTo;
om_tools$dom$map.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$map__0;
om_tools$dom$map.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$map__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$map;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.mark = (function() {
var om_tools$dom$mark = null;
var om_tools$dom$mark__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});
var om_tools$dom$mark__2 = (function() { 
var G__17258__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__7559__auto__,children__7560__auto__);
};
var G__17258 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17259__i = 0, G__17259__a = new Array(arguments.length -  1);
while (G__17259__i < G__17259__a.length) {G__17259__a[G__17259__i] = arguments[G__17259__i + 1]; ++G__17259__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17259__a,0);
} 
return G__17258__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17258.cljs$lang$maxFixedArity = 1;
G__17258.cljs$lang$applyTo = (function (arglist__17260){
var opts__7559__auto__ = cljs.core.first(arglist__17260);
var children__7560__auto__ = cljs.core.rest(arglist__17260);
return G__17258__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17258.cljs$core$IFn$_invoke$arity$variadic = G__17258__delegate;
return G__17258;
})()
;
om_tools$dom$mark = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$mark__0.call(this);
default:
var G__17261 = null;
if (arguments.length > 1) {
var G__17262__i = 0, G__17262__a = new Array(arguments.length -  1);
while (G__17262__i < G__17262__a.length) {G__17262__a[G__17262__i] = arguments[G__17262__i + 1]; ++G__17262__i;}
G__17261 = new cljs.core.IndexedSeq(G__17262__a,0);
}
return om_tools$dom$mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$mark.cljs$lang$maxFixedArity = 1;
om_tools$dom$mark.cljs$lang$applyTo = om_tools$dom$mark__2.cljs$lang$applyTo;
om_tools$dom$mark.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$mark__0;
om_tools$dom$mark.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$mark__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$mark;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.marquee = (function() {
var om_tools$dom$marquee = null;
var om_tools$dom$marquee__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});
var om_tools$dom$marquee__2 = (function() { 
var G__17263__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__7559__auto__,children__7560__auto__);
};
var G__17263 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17264__i = 0, G__17264__a = new Array(arguments.length -  1);
while (G__17264__i < G__17264__a.length) {G__17264__a[G__17264__i] = arguments[G__17264__i + 1]; ++G__17264__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17264__a,0);
} 
return G__17263__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17263.cljs$lang$maxFixedArity = 1;
G__17263.cljs$lang$applyTo = (function (arglist__17265){
var opts__7559__auto__ = cljs.core.first(arglist__17265);
var children__7560__auto__ = cljs.core.rest(arglist__17265);
return G__17263__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17263.cljs$core$IFn$_invoke$arity$variadic = G__17263__delegate;
return G__17263;
})()
;
om_tools$dom$marquee = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$marquee__0.call(this);
default:
var G__17266 = null;
if (arguments.length > 1) {
var G__17267__i = 0, G__17267__a = new Array(arguments.length -  1);
while (G__17267__i < G__17267__a.length) {G__17267__a[G__17267__i] = arguments[G__17267__i + 1]; ++G__17267__i;}
G__17266 = new cljs.core.IndexedSeq(G__17267__a,0);
}
return om_tools$dom$marquee__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$marquee.cljs$lang$maxFixedArity = 1;
om_tools$dom$marquee.cljs$lang$applyTo = om_tools$dom$marquee__2.cljs$lang$applyTo;
om_tools$dom$marquee.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$marquee__0;
om_tools$dom$marquee.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$marquee__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$marquee;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.menu = (function() {
var om_tools$dom$menu = null;
var om_tools$dom$menu__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});
var om_tools$dom$menu__2 = (function() { 
var G__17268__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__7559__auto__,children__7560__auto__);
};
var G__17268 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17269__i = 0, G__17269__a = new Array(arguments.length -  1);
while (G__17269__i < G__17269__a.length) {G__17269__a[G__17269__i] = arguments[G__17269__i + 1]; ++G__17269__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17269__a,0);
} 
return G__17268__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17268.cljs$lang$maxFixedArity = 1;
G__17268.cljs$lang$applyTo = (function (arglist__17270){
var opts__7559__auto__ = cljs.core.first(arglist__17270);
var children__7560__auto__ = cljs.core.rest(arglist__17270);
return G__17268__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17268.cljs$core$IFn$_invoke$arity$variadic = G__17268__delegate;
return G__17268;
})()
;
om_tools$dom$menu = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$menu__0.call(this);
default:
var G__17271 = null;
if (arguments.length > 1) {
var G__17272__i = 0, G__17272__a = new Array(arguments.length -  1);
while (G__17272__i < G__17272__a.length) {G__17272__a[G__17272__i] = arguments[G__17272__i + 1]; ++G__17272__i;}
G__17271 = new cljs.core.IndexedSeq(G__17272__a,0);
}
return om_tools$dom$menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$menu.cljs$lang$maxFixedArity = 1;
om_tools$dom$menu.cljs$lang$applyTo = om_tools$dom$menu__2.cljs$lang$applyTo;
om_tools$dom$menu.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$menu__0;
om_tools$dom$menu.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$menu__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$menu;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.menuitem = (function() {
var om_tools$dom$menuitem = null;
var om_tools$dom$menuitem__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});
var om_tools$dom$menuitem__2 = (function() { 
var G__17273__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__7559__auto__,children__7560__auto__);
};
var G__17273 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17274__i = 0, G__17274__a = new Array(arguments.length -  1);
while (G__17274__i < G__17274__a.length) {G__17274__a[G__17274__i] = arguments[G__17274__i + 1]; ++G__17274__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17274__a,0);
} 
return G__17273__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17273.cljs$lang$maxFixedArity = 1;
G__17273.cljs$lang$applyTo = (function (arglist__17275){
var opts__7559__auto__ = cljs.core.first(arglist__17275);
var children__7560__auto__ = cljs.core.rest(arglist__17275);
return G__17273__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17273.cljs$core$IFn$_invoke$arity$variadic = G__17273__delegate;
return G__17273;
})()
;
om_tools$dom$menuitem = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$menuitem__0.call(this);
default:
var G__17276 = null;
if (arguments.length > 1) {
var G__17277__i = 0, G__17277__a = new Array(arguments.length -  1);
while (G__17277__i < G__17277__a.length) {G__17277__a[G__17277__i] = arguments[G__17277__i + 1]; ++G__17277__i;}
G__17276 = new cljs.core.IndexedSeq(G__17277__a,0);
}
return om_tools$dom$menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$menuitem.cljs$lang$maxFixedArity = 1;
om_tools$dom$menuitem.cljs$lang$applyTo = om_tools$dom$menuitem__2.cljs$lang$applyTo;
om_tools$dom$menuitem.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$menuitem__0;
om_tools$dom$menuitem.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$menuitem__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$menuitem;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.meta = (function() {
var om_tools$dom$meta = null;
var om_tools$dom$meta__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});
var om_tools$dom$meta__2 = (function() { 
var G__17278__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__7559__auto__,children__7560__auto__);
};
var G__17278 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17279__i = 0, G__17279__a = new Array(arguments.length -  1);
while (G__17279__i < G__17279__a.length) {G__17279__a[G__17279__i] = arguments[G__17279__i + 1]; ++G__17279__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17279__a,0);
} 
return G__17278__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17278.cljs$lang$maxFixedArity = 1;
G__17278.cljs$lang$applyTo = (function (arglist__17280){
var opts__7559__auto__ = cljs.core.first(arglist__17280);
var children__7560__auto__ = cljs.core.rest(arglist__17280);
return G__17278__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17278.cljs$core$IFn$_invoke$arity$variadic = G__17278__delegate;
return G__17278;
})()
;
om_tools$dom$meta = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$meta__0.call(this);
default:
var G__17281 = null;
if (arguments.length > 1) {
var G__17282__i = 0, G__17282__a = new Array(arguments.length -  1);
while (G__17282__i < G__17282__a.length) {G__17282__a[G__17282__i] = arguments[G__17282__i + 1]; ++G__17282__i;}
G__17281 = new cljs.core.IndexedSeq(G__17282__a,0);
}
return om_tools$dom$meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$meta.cljs$lang$maxFixedArity = 1;
om_tools$dom$meta.cljs$lang$applyTo = om_tools$dom$meta__2.cljs$lang$applyTo;
om_tools$dom$meta.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$meta__0;
om_tools$dom$meta.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$meta__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$meta;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.meter = (function() {
var om_tools$dom$meter = null;
var om_tools$dom$meter__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});
var om_tools$dom$meter__2 = (function() { 
var G__17283__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__7559__auto__,children__7560__auto__);
};
var G__17283 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17284__i = 0, G__17284__a = new Array(arguments.length -  1);
while (G__17284__i < G__17284__a.length) {G__17284__a[G__17284__i] = arguments[G__17284__i + 1]; ++G__17284__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17284__a,0);
} 
return G__17283__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17283.cljs$lang$maxFixedArity = 1;
G__17283.cljs$lang$applyTo = (function (arglist__17285){
var opts__7559__auto__ = cljs.core.first(arglist__17285);
var children__7560__auto__ = cljs.core.rest(arglist__17285);
return G__17283__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17283.cljs$core$IFn$_invoke$arity$variadic = G__17283__delegate;
return G__17283;
})()
;
om_tools$dom$meter = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$meter__0.call(this);
default:
var G__17286 = null;
if (arguments.length > 1) {
var G__17287__i = 0, G__17287__a = new Array(arguments.length -  1);
while (G__17287__i < G__17287__a.length) {G__17287__a[G__17287__i] = arguments[G__17287__i + 1]; ++G__17287__i;}
G__17286 = new cljs.core.IndexedSeq(G__17287__a,0);
}
return om_tools$dom$meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$meter.cljs$lang$maxFixedArity = 1;
om_tools$dom$meter.cljs$lang$applyTo = om_tools$dom$meter__2.cljs$lang$applyTo;
om_tools$dom$meter.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$meter__0;
om_tools$dom$meter.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$meter__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$meter;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.nav = (function() {
var om_tools$dom$nav = null;
var om_tools$dom$nav__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});
var om_tools$dom$nav__2 = (function() { 
var G__17288__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__7559__auto__,children__7560__auto__);
};
var G__17288 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17289__i = 0, G__17289__a = new Array(arguments.length -  1);
while (G__17289__i < G__17289__a.length) {G__17289__a[G__17289__i] = arguments[G__17289__i + 1]; ++G__17289__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17289__a,0);
} 
return G__17288__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17288.cljs$lang$maxFixedArity = 1;
G__17288.cljs$lang$applyTo = (function (arglist__17290){
var opts__7559__auto__ = cljs.core.first(arglist__17290);
var children__7560__auto__ = cljs.core.rest(arglist__17290);
return G__17288__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17288.cljs$core$IFn$_invoke$arity$variadic = G__17288__delegate;
return G__17288;
})()
;
om_tools$dom$nav = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$nav__0.call(this);
default:
var G__17291 = null;
if (arguments.length > 1) {
var G__17292__i = 0, G__17292__a = new Array(arguments.length -  1);
while (G__17292__i < G__17292__a.length) {G__17292__a[G__17292__i] = arguments[G__17292__i + 1]; ++G__17292__i;}
G__17291 = new cljs.core.IndexedSeq(G__17292__a,0);
}
return om_tools$dom$nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$nav.cljs$lang$maxFixedArity = 1;
om_tools$dom$nav.cljs$lang$applyTo = om_tools$dom$nav__2.cljs$lang$applyTo;
om_tools$dom$nav.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$nav__0;
om_tools$dom$nav.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$nav__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$nav;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.noscript = (function() {
var om_tools$dom$noscript = null;
var om_tools$dom$noscript__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});
var om_tools$dom$noscript__2 = (function() { 
var G__17293__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__7559__auto__,children__7560__auto__);
};
var G__17293 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17294__i = 0, G__17294__a = new Array(arguments.length -  1);
while (G__17294__i < G__17294__a.length) {G__17294__a[G__17294__i] = arguments[G__17294__i + 1]; ++G__17294__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17294__a,0);
} 
return G__17293__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17293.cljs$lang$maxFixedArity = 1;
G__17293.cljs$lang$applyTo = (function (arglist__17295){
var opts__7559__auto__ = cljs.core.first(arglist__17295);
var children__7560__auto__ = cljs.core.rest(arglist__17295);
return G__17293__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17293.cljs$core$IFn$_invoke$arity$variadic = G__17293__delegate;
return G__17293;
})()
;
om_tools$dom$noscript = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$noscript__0.call(this);
default:
var G__17296 = null;
if (arguments.length > 1) {
var G__17297__i = 0, G__17297__a = new Array(arguments.length -  1);
while (G__17297__i < G__17297__a.length) {G__17297__a[G__17297__i] = arguments[G__17297__i + 1]; ++G__17297__i;}
G__17296 = new cljs.core.IndexedSeq(G__17297__a,0);
}
return om_tools$dom$noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$noscript.cljs$lang$maxFixedArity = 1;
om_tools$dom$noscript.cljs$lang$applyTo = om_tools$dom$noscript__2.cljs$lang$applyTo;
om_tools$dom$noscript.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$noscript__0;
om_tools$dom$noscript.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$noscript__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$noscript;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.object = (function() {
var om_tools$dom$object = null;
var om_tools$dom$object__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});
var om_tools$dom$object__2 = (function() { 
var G__17298__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__7559__auto__,children__7560__auto__);
};
var G__17298 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17299__i = 0, G__17299__a = new Array(arguments.length -  1);
while (G__17299__i < G__17299__a.length) {G__17299__a[G__17299__i] = arguments[G__17299__i + 1]; ++G__17299__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17299__a,0);
} 
return G__17298__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17298.cljs$lang$maxFixedArity = 1;
G__17298.cljs$lang$applyTo = (function (arglist__17300){
var opts__7559__auto__ = cljs.core.first(arglist__17300);
var children__7560__auto__ = cljs.core.rest(arglist__17300);
return G__17298__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17298.cljs$core$IFn$_invoke$arity$variadic = G__17298__delegate;
return G__17298;
})()
;
om_tools$dom$object = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$object__0.call(this);
default:
var G__17301 = null;
if (arguments.length > 1) {
var G__17302__i = 0, G__17302__a = new Array(arguments.length -  1);
while (G__17302__i < G__17302__a.length) {G__17302__a[G__17302__i] = arguments[G__17302__i + 1]; ++G__17302__i;}
G__17301 = new cljs.core.IndexedSeq(G__17302__a,0);
}
return om_tools$dom$object__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$object.cljs$lang$maxFixedArity = 1;
om_tools$dom$object.cljs$lang$applyTo = om_tools$dom$object__2.cljs$lang$applyTo;
om_tools$dom$object.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$object__0;
om_tools$dom$object.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$object__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$object;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ol = (function() {
var om_tools$dom$ol = null;
var om_tools$dom$ol__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});
var om_tools$dom$ol__2 = (function() { 
var G__17303__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__7559__auto__,children__7560__auto__);
};
var G__17303 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17304__i = 0, G__17304__a = new Array(arguments.length -  1);
while (G__17304__i < G__17304__a.length) {G__17304__a[G__17304__i] = arguments[G__17304__i + 1]; ++G__17304__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17304__a,0);
} 
return G__17303__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17303.cljs$lang$maxFixedArity = 1;
G__17303.cljs$lang$applyTo = (function (arglist__17305){
var opts__7559__auto__ = cljs.core.first(arglist__17305);
var children__7560__auto__ = cljs.core.rest(arglist__17305);
return G__17303__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17303.cljs$core$IFn$_invoke$arity$variadic = G__17303__delegate;
return G__17303;
})()
;
om_tools$dom$ol = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ol__0.call(this);
default:
var G__17306 = null;
if (arguments.length > 1) {
var G__17307__i = 0, G__17307__a = new Array(arguments.length -  1);
while (G__17307__i < G__17307__a.length) {G__17307__a[G__17307__i] = arguments[G__17307__i + 1]; ++G__17307__i;}
G__17306 = new cljs.core.IndexedSeq(G__17307__a,0);
}
return om_tools$dom$ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ol.cljs$lang$maxFixedArity = 1;
om_tools$dom$ol.cljs$lang$applyTo = om_tools$dom$ol__2.cljs$lang$applyTo;
om_tools$dom$ol.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ol__0;
om_tools$dom$ol.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ol__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ol;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.optgroup = (function() {
var om_tools$dom$optgroup = null;
var om_tools$dom$optgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});
var om_tools$dom$optgroup__2 = (function() { 
var G__17308__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__7559__auto__,children__7560__auto__);
};
var G__17308 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17309__i = 0, G__17309__a = new Array(arguments.length -  1);
while (G__17309__i < G__17309__a.length) {G__17309__a[G__17309__i] = arguments[G__17309__i + 1]; ++G__17309__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17309__a,0);
} 
return G__17308__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17308.cljs$lang$maxFixedArity = 1;
G__17308.cljs$lang$applyTo = (function (arglist__17310){
var opts__7559__auto__ = cljs.core.first(arglist__17310);
var children__7560__auto__ = cljs.core.rest(arglist__17310);
return G__17308__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17308.cljs$core$IFn$_invoke$arity$variadic = G__17308__delegate;
return G__17308;
})()
;
om_tools$dom$optgroup = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$optgroup__0.call(this);
default:
var G__17311 = null;
if (arguments.length > 1) {
var G__17312__i = 0, G__17312__a = new Array(arguments.length -  1);
while (G__17312__i < G__17312__a.length) {G__17312__a[G__17312__i] = arguments[G__17312__i + 1]; ++G__17312__i;}
G__17311 = new cljs.core.IndexedSeq(G__17312__a,0);
}
return om_tools$dom$optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$optgroup.cljs$lang$maxFixedArity = 1;
om_tools$dom$optgroup.cljs$lang$applyTo = om_tools$dom$optgroup__2.cljs$lang$applyTo;
om_tools$dom$optgroup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$optgroup__0;
om_tools$dom$optgroup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$optgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$optgroup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.output = (function() {
var om_tools$dom$output = null;
var om_tools$dom$output__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});
var om_tools$dom$output__2 = (function() { 
var G__17313__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__7559__auto__,children__7560__auto__);
};
var G__17313 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17314__i = 0, G__17314__a = new Array(arguments.length -  1);
while (G__17314__i < G__17314__a.length) {G__17314__a[G__17314__i] = arguments[G__17314__i + 1]; ++G__17314__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17314__a,0);
} 
return G__17313__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17313.cljs$lang$maxFixedArity = 1;
G__17313.cljs$lang$applyTo = (function (arglist__17315){
var opts__7559__auto__ = cljs.core.first(arglist__17315);
var children__7560__auto__ = cljs.core.rest(arglist__17315);
return G__17313__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17313.cljs$core$IFn$_invoke$arity$variadic = G__17313__delegate;
return G__17313;
})()
;
om_tools$dom$output = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$output__0.call(this);
default:
var G__17316 = null;
if (arguments.length > 1) {
var G__17317__i = 0, G__17317__a = new Array(arguments.length -  1);
while (G__17317__i < G__17317__a.length) {G__17317__a[G__17317__i] = arguments[G__17317__i + 1]; ++G__17317__i;}
G__17316 = new cljs.core.IndexedSeq(G__17317__a,0);
}
return om_tools$dom$output__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$output.cljs$lang$maxFixedArity = 1;
om_tools$dom$output.cljs$lang$applyTo = om_tools$dom$output__2.cljs$lang$applyTo;
om_tools$dom$output.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$output__0;
om_tools$dom$output.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$output__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$output;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.p = (function() {
var om_tools$dom$p = null;
var om_tools$dom$p__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});
var om_tools$dom$p__2 = (function() { 
var G__17318__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__7559__auto__,children__7560__auto__);
};
var G__17318 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17319__i = 0, G__17319__a = new Array(arguments.length -  1);
while (G__17319__i < G__17319__a.length) {G__17319__a[G__17319__i] = arguments[G__17319__i + 1]; ++G__17319__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17319__a,0);
} 
return G__17318__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17318.cljs$lang$maxFixedArity = 1;
G__17318.cljs$lang$applyTo = (function (arglist__17320){
var opts__7559__auto__ = cljs.core.first(arglist__17320);
var children__7560__auto__ = cljs.core.rest(arglist__17320);
return G__17318__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17318.cljs$core$IFn$_invoke$arity$variadic = G__17318__delegate;
return G__17318;
})()
;
om_tools$dom$p = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$p__0.call(this);
default:
var G__17321 = null;
if (arguments.length > 1) {
var G__17322__i = 0, G__17322__a = new Array(arguments.length -  1);
while (G__17322__i < G__17322__a.length) {G__17322__a[G__17322__i] = arguments[G__17322__i + 1]; ++G__17322__i;}
G__17321 = new cljs.core.IndexedSeq(G__17322__a,0);
}
return om_tools$dom$p__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$p.cljs$lang$maxFixedArity = 1;
om_tools$dom$p.cljs$lang$applyTo = om_tools$dom$p__2.cljs$lang$applyTo;
om_tools$dom$p.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$p__0;
om_tools$dom$p.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$p__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$p;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.param = (function() {
var om_tools$dom$param = null;
var om_tools$dom$param__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});
var om_tools$dom$param__2 = (function() { 
var G__17323__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__7559__auto__,children__7560__auto__);
};
var G__17323 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17324__i = 0, G__17324__a = new Array(arguments.length -  1);
while (G__17324__i < G__17324__a.length) {G__17324__a[G__17324__i] = arguments[G__17324__i + 1]; ++G__17324__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17324__a,0);
} 
return G__17323__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17323.cljs$lang$maxFixedArity = 1;
G__17323.cljs$lang$applyTo = (function (arglist__17325){
var opts__7559__auto__ = cljs.core.first(arglist__17325);
var children__7560__auto__ = cljs.core.rest(arglist__17325);
return G__17323__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17323.cljs$core$IFn$_invoke$arity$variadic = G__17323__delegate;
return G__17323;
})()
;
om_tools$dom$param = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$param__0.call(this);
default:
var G__17326 = null;
if (arguments.length > 1) {
var G__17327__i = 0, G__17327__a = new Array(arguments.length -  1);
while (G__17327__i < G__17327__a.length) {G__17327__a[G__17327__i] = arguments[G__17327__i + 1]; ++G__17327__i;}
G__17326 = new cljs.core.IndexedSeq(G__17327__a,0);
}
return om_tools$dom$param__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$param.cljs$lang$maxFixedArity = 1;
om_tools$dom$param.cljs$lang$applyTo = om_tools$dom$param__2.cljs$lang$applyTo;
om_tools$dom$param.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$param__0;
om_tools$dom$param.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$param__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$param;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.pre = (function() {
var om_tools$dom$pre = null;
var om_tools$dom$pre__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});
var om_tools$dom$pre__2 = (function() { 
var G__17328__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__7559__auto__,children__7560__auto__);
};
var G__17328 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17329__i = 0, G__17329__a = new Array(arguments.length -  1);
while (G__17329__i < G__17329__a.length) {G__17329__a[G__17329__i] = arguments[G__17329__i + 1]; ++G__17329__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17329__a,0);
} 
return G__17328__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17328.cljs$lang$maxFixedArity = 1;
G__17328.cljs$lang$applyTo = (function (arglist__17330){
var opts__7559__auto__ = cljs.core.first(arglist__17330);
var children__7560__auto__ = cljs.core.rest(arglist__17330);
return G__17328__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17328.cljs$core$IFn$_invoke$arity$variadic = G__17328__delegate;
return G__17328;
})()
;
om_tools$dom$pre = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$pre__0.call(this);
default:
var G__17331 = null;
if (arguments.length > 1) {
var G__17332__i = 0, G__17332__a = new Array(arguments.length -  1);
while (G__17332__i < G__17332__a.length) {G__17332__a[G__17332__i] = arguments[G__17332__i + 1]; ++G__17332__i;}
G__17331 = new cljs.core.IndexedSeq(G__17332__a,0);
}
return om_tools$dom$pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$pre.cljs$lang$maxFixedArity = 1;
om_tools$dom$pre.cljs$lang$applyTo = om_tools$dom$pre__2.cljs$lang$applyTo;
om_tools$dom$pre.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$pre__0;
om_tools$dom$pre.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$pre__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$pre;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.progress = (function() {
var om_tools$dom$progress = null;
var om_tools$dom$progress__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});
var om_tools$dom$progress__2 = (function() { 
var G__17333__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__7559__auto__,children__7560__auto__);
};
var G__17333 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17334__i = 0, G__17334__a = new Array(arguments.length -  1);
while (G__17334__i < G__17334__a.length) {G__17334__a[G__17334__i] = arguments[G__17334__i + 1]; ++G__17334__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17334__a,0);
} 
return G__17333__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17333.cljs$lang$maxFixedArity = 1;
G__17333.cljs$lang$applyTo = (function (arglist__17335){
var opts__7559__auto__ = cljs.core.first(arglist__17335);
var children__7560__auto__ = cljs.core.rest(arglist__17335);
return G__17333__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17333.cljs$core$IFn$_invoke$arity$variadic = G__17333__delegate;
return G__17333;
})()
;
om_tools$dom$progress = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$progress__0.call(this);
default:
var G__17336 = null;
if (arguments.length > 1) {
var G__17337__i = 0, G__17337__a = new Array(arguments.length -  1);
while (G__17337__i < G__17337__a.length) {G__17337__a[G__17337__i] = arguments[G__17337__i + 1]; ++G__17337__i;}
G__17336 = new cljs.core.IndexedSeq(G__17337__a,0);
}
return om_tools$dom$progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$progress.cljs$lang$maxFixedArity = 1;
om_tools$dom$progress.cljs$lang$applyTo = om_tools$dom$progress__2.cljs$lang$applyTo;
om_tools$dom$progress.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$progress__0;
om_tools$dom$progress.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$progress__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$progress;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.q = (function() {
var om_tools$dom$q = null;
var om_tools$dom$q__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});
var om_tools$dom$q__2 = (function() { 
var G__17338__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__7559__auto__,children__7560__auto__);
};
var G__17338 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17339__i = 0, G__17339__a = new Array(arguments.length -  1);
while (G__17339__i < G__17339__a.length) {G__17339__a[G__17339__i] = arguments[G__17339__i + 1]; ++G__17339__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17339__a,0);
} 
return G__17338__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17338.cljs$lang$maxFixedArity = 1;
G__17338.cljs$lang$applyTo = (function (arglist__17340){
var opts__7559__auto__ = cljs.core.first(arglist__17340);
var children__7560__auto__ = cljs.core.rest(arglist__17340);
return G__17338__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17338.cljs$core$IFn$_invoke$arity$variadic = G__17338__delegate;
return G__17338;
})()
;
om_tools$dom$q = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$q__0.call(this);
default:
var G__17341 = null;
if (arguments.length > 1) {
var G__17342__i = 0, G__17342__a = new Array(arguments.length -  1);
while (G__17342__i < G__17342__a.length) {G__17342__a[G__17342__i] = arguments[G__17342__i + 1]; ++G__17342__i;}
G__17341 = new cljs.core.IndexedSeq(G__17342__a,0);
}
return om_tools$dom$q__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$q.cljs$lang$maxFixedArity = 1;
om_tools$dom$q.cljs$lang$applyTo = om_tools$dom$q__2.cljs$lang$applyTo;
om_tools$dom$q.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$q__0;
om_tools$dom$q.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$q__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$q;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rp = (function() {
var om_tools$dom$rp = null;
var om_tools$dom$rp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});
var om_tools$dom$rp__2 = (function() { 
var G__17343__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__7559__auto__,children__7560__auto__);
};
var G__17343 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17344__i = 0, G__17344__a = new Array(arguments.length -  1);
while (G__17344__i < G__17344__a.length) {G__17344__a[G__17344__i] = arguments[G__17344__i + 1]; ++G__17344__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17344__a,0);
} 
return G__17343__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17343.cljs$lang$maxFixedArity = 1;
G__17343.cljs$lang$applyTo = (function (arglist__17345){
var opts__7559__auto__ = cljs.core.first(arglist__17345);
var children__7560__auto__ = cljs.core.rest(arglist__17345);
return G__17343__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17343.cljs$core$IFn$_invoke$arity$variadic = G__17343__delegate;
return G__17343;
})()
;
om_tools$dom$rp = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rp__0.call(this);
default:
var G__17346 = null;
if (arguments.length > 1) {
var G__17347__i = 0, G__17347__a = new Array(arguments.length -  1);
while (G__17347__i < G__17347__a.length) {G__17347__a[G__17347__i] = arguments[G__17347__i + 1]; ++G__17347__i;}
G__17346 = new cljs.core.IndexedSeq(G__17347__a,0);
}
return om_tools$dom$rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rp.cljs$lang$maxFixedArity = 1;
om_tools$dom$rp.cljs$lang$applyTo = om_tools$dom$rp__2.cljs$lang$applyTo;
om_tools$dom$rp.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rp__0;
om_tools$dom$rp.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rp__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rp;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rt = (function() {
var om_tools$dom$rt = null;
var om_tools$dom$rt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});
var om_tools$dom$rt__2 = (function() { 
var G__17348__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__7559__auto__,children__7560__auto__);
};
var G__17348 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17349__i = 0, G__17349__a = new Array(arguments.length -  1);
while (G__17349__i < G__17349__a.length) {G__17349__a[G__17349__i] = arguments[G__17349__i + 1]; ++G__17349__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17349__a,0);
} 
return G__17348__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17348.cljs$lang$maxFixedArity = 1;
G__17348.cljs$lang$applyTo = (function (arglist__17350){
var opts__7559__auto__ = cljs.core.first(arglist__17350);
var children__7560__auto__ = cljs.core.rest(arglist__17350);
return G__17348__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17348.cljs$core$IFn$_invoke$arity$variadic = G__17348__delegate;
return G__17348;
})()
;
om_tools$dom$rt = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rt__0.call(this);
default:
var G__17351 = null;
if (arguments.length > 1) {
var G__17352__i = 0, G__17352__a = new Array(arguments.length -  1);
while (G__17352__i < G__17352__a.length) {G__17352__a[G__17352__i] = arguments[G__17352__i + 1]; ++G__17352__i;}
G__17351 = new cljs.core.IndexedSeq(G__17352__a,0);
}
return om_tools$dom$rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rt.cljs$lang$maxFixedArity = 1;
om_tools$dom$rt.cljs$lang$applyTo = om_tools$dom$rt__2.cljs$lang$applyTo;
om_tools$dom$rt.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rt__0;
om_tools$dom$rt.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rt__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rt;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ruby = (function() {
var om_tools$dom$ruby = null;
var om_tools$dom$ruby__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});
var om_tools$dom$ruby__2 = (function() { 
var G__17353__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__7559__auto__,children__7560__auto__);
};
var G__17353 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17354__i = 0, G__17354__a = new Array(arguments.length -  1);
while (G__17354__i < G__17354__a.length) {G__17354__a[G__17354__i] = arguments[G__17354__i + 1]; ++G__17354__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17354__a,0);
} 
return G__17353__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17353.cljs$lang$maxFixedArity = 1;
G__17353.cljs$lang$applyTo = (function (arglist__17355){
var opts__7559__auto__ = cljs.core.first(arglist__17355);
var children__7560__auto__ = cljs.core.rest(arglist__17355);
return G__17353__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17353.cljs$core$IFn$_invoke$arity$variadic = G__17353__delegate;
return G__17353;
})()
;
om_tools$dom$ruby = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ruby__0.call(this);
default:
var G__17356 = null;
if (arguments.length > 1) {
var G__17357__i = 0, G__17357__a = new Array(arguments.length -  1);
while (G__17357__i < G__17357__a.length) {G__17357__a[G__17357__i] = arguments[G__17357__i + 1]; ++G__17357__i;}
G__17356 = new cljs.core.IndexedSeq(G__17357__a,0);
}
return om_tools$dom$ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ruby.cljs$lang$maxFixedArity = 1;
om_tools$dom$ruby.cljs$lang$applyTo = om_tools$dom$ruby__2.cljs$lang$applyTo;
om_tools$dom$ruby.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ruby__0;
om_tools$dom$ruby.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ruby__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ruby;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.s = (function() {
var om_tools$dom$s = null;
var om_tools$dom$s__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});
var om_tools$dom$s__2 = (function() { 
var G__17358__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__7559__auto__,children__7560__auto__);
};
var G__17358 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17359__i = 0, G__17359__a = new Array(arguments.length -  1);
while (G__17359__i < G__17359__a.length) {G__17359__a[G__17359__i] = arguments[G__17359__i + 1]; ++G__17359__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17359__a,0);
} 
return G__17358__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17358.cljs$lang$maxFixedArity = 1;
G__17358.cljs$lang$applyTo = (function (arglist__17360){
var opts__7559__auto__ = cljs.core.first(arglist__17360);
var children__7560__auto__ = cljs.core.rest(arglist__17360);
return G__17358__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17358.cljs$core$IFn$_invoke$arity$variadic = G__17358__delegate;
return G__17358;
})()
;
om_tools$dom$s = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$s__0.call(this);
default:
var G__17361 = null;
if (arguments.length > 1) {
var G__17362__i = 0, G__17362__a = new Array(arguments.length -  1);
while (G__17362__i < G__17362__a.length) {G__17362__a[G__17362__i] = arguments[G__17362__i + 1]; ++G__17362__i;}
G__17361 = new cljs.core.IndexedSeq(G__17362__a,0);
}
return om_tools$dom$s__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$s.cljs$lang$maxFixedArity = 1;
om_tools$dom$s.cljs$lang$applyTo = om_tools$dom$s__2.cljs$lang$applyTo;
om_tools$dom$s.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$s__0;
om_tools$dom$s.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$s__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$s;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.samp = (function() {
var om_tools$dom$samp = null;
var om_tools$dom$samp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});
var om_tools$dom$samp__2 = (function() { 
var G__17363__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__7559__auto__,children__7560__auto__);
};
var G__17363 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17364__i = 0, G__17364__a = new Array(arguments.length -  1);
while (G__17364__i < G__17364__a.length) {G__17364__a[G__17364__i] = arguments[G__17364__i + 1]; ++G__17364__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17364__a,0);
} 
return G__17363__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17363.cljs$lang$maxFixedArity = 1;
G__17363.cljs$lang$applyTo = (function (arglist__17365){
var opts__7559__auto__ = cljs.core.first(arglist__17365);
var children__7560__auto__ = cljs.core.rest(arglist__17365);
return G__17363__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17363.cljs$core$IFn$_invoke$arity$variadic = G__17363__delegate;
return G__17363;
})()
;
om_tools$dom$samp = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$samp__0.call(this);
default:
var G__17366 = null;
if (arguments.length > 1) {
var G__17367__i = 0, G__17367__a = new Array(arguments.length -  1);
while (G__17367__i < G__17367__a.length) {G__17367__a[G__17367__i] = arguments[G__17367__i + 1]; ++G__17367__i;}
G__17366 = new cljs.core.IndexedSeq(G__17367__a,0);
}
return om_tools$dom$samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$samp.cljs$lang$maxFixedArity = 1;
om_tools$dom$samp.cljs$lang$applyTo = om_tools$dom$samp__2.cljs$lang$applyTo;
om_tools$dom$samp.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$samp__0;
om_tools$dom$samp.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$samp__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$samp;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.script = (function() {
var om_tools$dom$script = null;
var om_tools$dom$script__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});
var om_tools$dom$script__2 = (function() { 
var G__17368__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__7559__auto__,children__7560__auto__);
};
var G__17368 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17369__i = 0, G__17369__a = new Array(arguments.length -  1);
while (G__17369__i < G__17369__a.length) {G__17369__a[G__17369__i] = arguments[G__17369__i + 1]; ++G__17369__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17369__a,0);
} 
return G__17368__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17368.cljs$lang$maxFixedArity = 1;
G__17368.cljs$lang$applyTo = (function (arglist__17370){
var opts__7559__auto__ = cljs.core.first(arglist__17370);
var children__7560__auto__ = cljs.core.rest(arglist__17370);
return G__17368__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17368.cljs$core$IFn$_invoke$arity$variadic = G__17368__delegate;
return G__17368;
})()
;
om_tools$dom$script = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$script__0.call(this);
default:
var G__17371 = null;
if (arguments.length > 1) {
var G__17372__i = 0, G__17372__a = new Array(arguments.length -  1);
while (G__17372__i < G__17372__a.length) {G__17372__a[G__17372__i] = arguments[G__17372__i + 1]; ++G__17372__i;}
G__17371 = new cljs.core.IndexedSeq(G__17372__a,0);
}
return om_tools$dom$script__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$script.cljs$lang$maxFixedArity = 1;
om_tools$dom$script.cljs$lang$applyTo = om_tools$dom$script__2.cljs$lang$applyTo;
om_tools$dom$script.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$script__0;
om_tools$dom$script.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$script__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$script;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.section = (function() {
var om_tools$dom$section = null;
var om_tools$dom$section__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});
var om_tools$dom$section__2 = (function() { 
var G__17373__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__7559__auto__,children__7560__auto__);
};
var G__17373 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17374__i = 0, G__17374__a = new Array(arguments.length -  1);
while (G__17374__i < G__17374__a.length) {G__17374__a[G__17374__i] = arguments[G__17374__i + 1]; ++G__17374__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17374__a,0);
} 
return G__17373__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17373.cljs$lang$maxFixedArity = 1;
G__17373.cljs$lang$applyTo = (function (arglist__17375){
var opts__7559__auto__ = cljs.core.first(arglist__17375);
var children__7560__auto__ = cljs.core.rest(arglist__17375);
return G__17373__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17373.cljs$core$IFn$_invoke$arity$variadic = G__17373__delegate;
return G__17373;
})()
;
om_tools$dom$section = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$section__0.call(this);
default:
var G__17376 = null;
if (arguments.length > 1) {
var G__17377__i = 0, G__17377__a = new Array(arguments.length -  1);
while (G__17377__i < G__17377__a.length) {G__17377__a[G__17377__i] = arguments[G__17377__i + 1]; ++G__17377__i;}
G__17376 = new cljs.core.IndexedSeq(G__17377__a,0);
}
return om_tools$dom$section__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$section.cljs$lang$maxFixedArity = 1;
om_tools$dom$section.cljs$lang$applyTo = om_tools$dom$section__2.cljs$lang$applyTo;
om_tools$dom$section.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$section__0;
om_tools$dom$section.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$section__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$section;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.select = (function() {
var om_tools$dom$select = null;
var om_tools$dom$select__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});
var om_tools$dom$select__2 = (function() { 
var G__17378__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__7559__auto__,children__7560__auto__);
};
var G__17378 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17379__i = 0, G__17379__a = new Array(arguments.length -  1);
while (G__17379__i < G__17379__a.length) {G__17379__a[G__17379__i] = arguments[G__17379__i + 1]; ++G__17379__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17379__a,0);
} 
return G__17378__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17378.cljs$lang$maxFixedArity = 1;
G__17378.cljs$lang$applyTo = (function (arglist__17380){
var opts__7559__auto__ = cljs.core.first(arglist__17380);
var children__7560__auto__ = cljs.core.rest(arglist__17380);
return G__17378__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17378.cljs$core$IFn$_invoke$arity$variadic = G__17378__delegate;
return G__17378;
})()
;
om_tools$dom$select = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$select__0.call(this);
default:
var G__17381 = null;
if (arguments.length > 1) {
var G__17382__i = 0, G__17382__a = new Array(arguments.length -  1);
while (G__17382__i < G__17382__a.length) {G__17382__a[G__17382__i] = arguments[G__17382__i + 1]; ++G__17382__i;}
G__17381 = new cljs.core.IndexedSeq(G__17382__a,0);
}
return om_tools$dom$select__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$select.cljs$lang$maxFixedArity = 1;
om_tools$dom$select.cljs$lang$applyTo = om_tools$dom$select__2.cljs$lang$applyTo;
om_tools$dom$select.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$select__0;
om_tools$dom$select.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$select__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$select;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.small = (function() {
var om_tools$dom$small = null;
var om_tools$dom$small__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});
var om_tools$dom$small__2 = (function() { 
var G__17383__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__7559__auto__,children__7560__auto__);
};
var G__17383 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17384__i = 0, G__17384__a = new Array(arguments.length -  1);
while (G__17384__i < G__17384__a.length) {G__17384__a[G__17384__i] = arguments[G__17384__i + 1]; ++G__17384__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17384__a,0);
} 
return G__17383__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17383.cljs$lang$maxFixedArity = 1;
G__17383.cljs$lang$applyTo = (function (arglist__17385){
var opts__7559__auto__ = cljs.core.first(arglist__17385);
var children__7560__auto__ = cljs.core.rest(arglist__17385);
return G__17383__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17383.cljs$core$IFn$_invoke$arity$variadic = G__17383__delegate;
return G__17383;
})()
;
om_tools$dom$small = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$small__0.call(this);
default:
var G__17386 = null;
if (arguments.length > 1) {
var G__17387__i = 0, G__17387__a = new Array(arguments.length -  1);
while (G__17387__i < G__17387__a.length) {G__17387__a[G__17387__i] = arguments[G__17387__i + 1]; ++G__17387__i;}
G__17386 = new cljs.core.IndexedSeq(G__17387__a,0);
}
return om_tools$dom$small__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$small.cljs$lang$maxFixedArity = 1;
om_tools$dom$small.cljs$lang$applyTo = om_tools$dom$small__2.cljs$lang$applyTo;
om_tools$dom$small.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$small__0;
om_tools$dom$small.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$small__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$small;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.source = (function() {
var om_tools$dom$source = null;
var om_tools$dom$source__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});
var om_tools$dom$source__2 = (function() { 
var G__17388__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__7559__auto__,children__7560__auto__);
};
var G__17388 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17389__i = 0, G__17389__a = new Array(arguments.length -  1);
while (G__17389__i < G__17389__a.length) {G__17389__a[G__17389__i] = arguments[G__17389__i + 1]; ++G__17389__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17389__a,0);
} 
return G__17388__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17388.cljs$lang$maxFixedArity = 1;
G__17388.cljs$lang$applyTo = (function (arglist__17390){
var opts__7559__auto__ = cljs.core.first(arglist__17390);
var children__7560__auto__ = cljs.core.rest(arglist__17390);
return G__17388__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17388.cljs$core$IFn$_invoke$arity$variadic = G__17388__delegate;
return G__17388;
})()
;
om_tools$dom$source = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$source__0.call(this);
default:
var G__17391 = null;
if (arguments.length > 1) {
var G__17392__i = 0, G__17392__a = new Array(arguments.length -  1);
while (G__17392__i < G__17392__a.length) {G__17392__a[G__17392__i] = arguments[G__17392__i + 1]; ++G__17392__i;}
G__17391 = new cljs.core.IndexedSeq(G__17392__a,0);
}
return om_tools$dom$source__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$source.cljs$lang$maxFixedArity = 1;
om_tools$dom$source.cljs$lang$applyTo = om_tools$dom$source__2.cljs$lang$applyTo;
om_tools$dom$source.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$source__0;
om_tools$dom$source.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$source__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$source;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.span = (function() {
var om_tools$dom$span = null;
var om_tools$dom$span__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});
var om_tools$dom$span__2 = (function() { 
var G__17393__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__7559__auto__,children__7560__auto__);
};
var G__17393 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17394__i = 0, G__17394__a = new Array(arguments.length -  1);
while (G__17394__i < G__17394__a.length) {G__17394__a[G__17394__i] = arguments[G__17394__i + 1]; ++G__17394__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17394__a,0);
} 
return G__17393__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17393.cljs$lang$maxFixedArity = 1;
G__17393.cljs$lang$applyTo = (function (arglist__17395){
var opts__7559__auto__ = cljs.core.first(arglist__17395);
var children__7560__auto__ = cljs.core.rest(arglist__17395);
return G__17393__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17393.cljs$core$IFn$_invoke$arity$variadic = G__17393__delegate;
return G__17393;
})()
;
om_tools$dom$span = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$span__0.call(this);
default:
var G__17396 = null;
if (arguments.length > 1) {
var G__17397__i = 0, G__17397__a = new Array(arguments.length -  1);
while (G__17397__i < G__17397__a.length) {G__17397__a[G__17397__i] = arguments[G__17397__i + 1]; ++G__17397__i;}
G__17396 = new cljs.core.IndexedSeq(G__17397__a,0);
}
return om_tools$dom$span__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$span.cljs$lang$maxFixedArity = 1;
om_tools$dom$span.cljs$lang$applyTo = om_tools$dom$span__2.cljs$lang$applyTo;
om_tools$dom$span.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$span__0;
om_tools$dom$span.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$span__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$span;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.strong = (function() {
var om_tools$dom$strong = null;
var om_tools$dom$strong__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});
var om_tools$dom$strong__2 = (function() { 
var G__17398__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__7559__auto__,children__7560__auto__);
};
var G__17398 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17399__i = 0, G__17399__a = new Array(arguments.length -  1);
while (G__17399__i < G__17399__a.length) {G__17399__a[G__17399__i] = arguments[G__17399__i + 1]; ++G__17399__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17399__a,0);
} 
return G__17398__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17398.cljs$lang$maxFixedArity = 1;
G__17398.cljs$lang$applyTo = (function (arglist__17400){
var opts__7559__auto__ = cljs.core.first(arglist__17400);
var children__7560__auto__ = cljs.core.rest(arglist__17400);
return G__17398__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17398.cljs$core$IFn$_invoke$arity$variadic = G__17398__delegate;
return G__17398;
})()
;
om_tools$dom$strong = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$strong__0.call(this);
default:
var G__17401 = null;
if (arguments.length > 1) {
var G__17402__i = 0, G__17402__a = new Array(arguments.length -  1);
while (G__17402__i < G__17402__a.length) {G__17402__a[G__17402__i] = arguments[G__17402__i + 1]; ++G__17402__i;}
G__17401 = new cljs.core.IndexedSeq(G__17402__a,0);
}
return om_tools$dom$strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$strong.cljs$lang$maxFixedArity = 1;
om_tools$dom$strong.cljs$lang$applyTo = om_tools$dom$strong__2.cljs$lang$applyTo;
om_tools$dom$strong.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$strong__0;
om_tools$dom$strong.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$strong__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$strong;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.style = (function() {
var om_tools$dom$style = null;
var om_tools$dom$style__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});
var om_tools$dom$style__2 = (function() { 
var G__17403__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__7559__auto__,children__7560__auto__);
};
var G__17403 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17404__i = 0, G__17404__a = new Array(arguments.length -  1);
while (G__17404__i < G__17404__a.length) {G__17404__a[G__17404__i] = arguments[G__17404__i + 1]; ++G__17404__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17404__a,0);
} 
return G__17403__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17403.cljs$lang$maxFixedArity = 1;
G__17403.cljs$lang$applyTo = (function (arglist__17405){
var opts__7559__auto__ = cljs.core.first(arglist__17405);
var children__7560__auto__ = cljs.core.rest(arglist__17405);
return G__17403__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17403.cljs$core$IFn$_invoke$arity$variadic = G__17403__delegate;
return G__17403;
})()
;
om_tools$dom$style = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$style__0.call(this);
default:
var G__17406 = null;
if (arguments.length > 1) {
var G__17407__i = 0, G__17407__a = new Array(arguments.length -  1);
while (G__17407__i < G__17407__a.length) {G__17407__a[G__17407__i] = arguments[G__17407__i + 1]; ++G__17407__i;}
G__17406 = new cljs.core.IndexedSeq(G__17407__a,0);
}
return om_tools$dom$style__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$style.cljs$lang$maxFixedArity = 1;
om_tools$dom$style.cljs$lang$applyTo = om_tools$dom$style__2.cljs$lang$applyTo;
om_tools$dom$style.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$style__0;
om_tools$dom$style.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$style__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$style;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.sub = (function() {
var om_tools$dom$sub = null;
var om_tools$dom$sub__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});
var om_tools$dom$sub__2 = (function() { 
var G__17408__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__7559__auto__,children__7560__auto__);
};
var G__17408 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17409__i = 0, G__17409__a = new Array(arguments.length -  1);
while (G__17409__i < G__17409__a.length) {G__17409__a[G__17409__i] = arguments[G__17409__i + 1]; ++G__17409__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17409__a,0);
} 
return G__17408__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17408.cljs$lang$maxFixedArity = 1;
G__17408.cljs$lang$applyTo = (function (arglist__17410){
var opts__7559__auto__ = cljs.core.first(arglist__17410);
var children__7560__auto__ = cljs.core.rest(arglist__17410);
return G__17408__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17408.cljs$core$IFn$_invoke$arity$variadic = G__17408__delegate;
return G__17408;
})()
;
om_tools$dom$sub = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$sub__0.call(this);
default:
var G__17411 = null;
if (arguments.length > 1) {
var G__17412__i = 0, G__17412__a = new Array(arguments.length -  1);
while (G__17412__i < G__17412__a.length) {G__17412__a[G__17412__i] = arguments[G__17412__i + 1]; ++G__17412__i;}
G__17411 = new cljs.core.IndexedSeq(G__17412__a,0);
}
return om_tools$dom$sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$sub.cljs$lang$maxFixedArity = 1;
om_tools$dom$sub.cljs$lang$applyTo = om_tools$dom$sub__2.cljs$lang$applyTo;
om_tools$dom$sub.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$sub__0;
om_tools$dom$sub.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$sub__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$sub;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.summary = (function() {
var om_tools$dom$summary = null;
var om_tools$dom$summary__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});
var om_tools$dom$summary__2 = (function() { 
var G__17413__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__7559__auto__,children__7560__auto__);
};
var G__17413 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17414__i = 0, G__17414__a = new Array(arguments.length -  1);
while (G__17414__i < G__17414__a.length) {G__17414__a[G__17414__i] = arguments[G__17414__i + 1]; ++G__17414__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17414__a,0);
} 
return G__17413__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17413.cljs$lang$maxFixedArity = 1;
G__17413.cljs$lang$applyTo = (function (arglist__17415){
var opts__7559__auto__ = cljs.core.first(arglist__17415);
var children__7560__auto__ = cljs.core.rest(arglist__17415);
return G__17413__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17413.cljs$core$IFn$_invoke$arity$variadic = G__17413__delegate;
return G__17413;
})()
;
om_tools$dom$summary = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$summary__0.call(this);
default:
var G__17416 = null;
if (arguments.length > 1) {
var G__17417__i = 0, G__17417__a = new Array(arguments.length -  1);
while (G__17417__i < G__17417__a.length) {G__17417__a[G__17417__i] = arguments[G__17417__i + 1]; ++G__17417__i;}
G__17416 = new cljs.core.IndexedSeq(G__17417__a,0);
}
return om_tools$dom$summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$summary.cljs$lang$maxFixedArity = 1;
om_tools$dom$summary.cljs$lang$applyTo = om_tools$dom$summary__2.cljs$lang$applyTo;
om_tools$dom$summary.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$summary__0;
om_tools$dom$summary.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$summary__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$summary;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.sup = (function() {
var om_tools$dom$sup = null;
var om_tools$dom$sup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});
var om_tools$dom$sup__2 = (function() { 
var G__17418__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__7559__auto__,children__7560__auto__);
};
var G__17418 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17419__i = 0, G__17419__a = new Array(arguments.length -  1);
while (G__17419__i < G__17419__a.length) {G__17419__a[G__17419__i] = arguments[G__17419__i + 1]; ++G__17419__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17419__a,0);
} 
return G__17418__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17418.cljs$lang$maxFixedArity = 1;
G__17418.cljs$lang$applyTo = (function (arglist__17420){
var opts__7559__auto__ = cljs.core.first(arglist__17420);
var children__7560__auto__ = cljs.core.rest(arglist__17420);
return G__17418__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17418.cljs$core$IFn$_invoke$arity$variadic = G__17418__delegate;
return G__17418;
})()
;
om_tools$dom$sup = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$sup__0.call(this);
default:
var G__17421 = null;
if (arguments.length > 1) {
var G__17422__i = 0, G__17422__a = new Array(arguments.length -  1);
while (G__17422__i < G__17422__a.length) {G__17422__a[G__17422__i] = arguments[G__17422__i + 1]; ++G__17422__i;}
G__17421 = new cljs.core.IndexedSeq(G__17422__a,0);
}
return om_tools$dom$sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$sup.cljs$lang$maxFixedArity = 1;
om_tools$dom$sup.cljs$lang$applyTo = om_tools$dom$sup__2.cljs$lang$applyTo;
om_tools$dom$sup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$sup__0;
om_tools$dom$sup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$sup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$sup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.table = (function() {
var om_tools$dom$table = null;
var om_tools$dom$table__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});
var om_tools$dom$table__2 = (function() { 
var G__17423__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__7559__auto__,children__7560__auto__);
};
var G__17423 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17424__i = 0, G__17424__a = new Array(arguments.length -  1);
while (G__17424__i < G__17424__a.length) {G__17424__a[G__17424__i] = arguments[G__17424__i + 1]; ++G__17424__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17424__a,0);
} 
return G__17423__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17423.cljs$lang$maxFixedArity = 1;
G__17423.cljs$lang$applyTo = (function (arglist__17425){
var opts__7559__auto__ = cljs.core.first(arglist__17425);
var children__7560__auto__ = cljs.core.rest(arglist__17425);
return G__17423__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17423.cljs$core$IFn$_invoke$arity$variadic = G__17423__delegate;
return G__17423;
})()
;
om_tools$dom$table = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$table__0.call(this);
default:
var G__17426 = null;
if (arguments.length > 1) {
var G__17427__i = 0, G__17427__a = new Array(arguments.length -  1);
while (G__17427__i < G__17427__a.length) {G__17427__a[G__17427__i] = arguments[G__17427__i + 1]; ++G__17427__i;}
G__17426 = new cljs.core.IndexedSeq(G__17427__a,0);
}
return om_tools$dom$table__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$table.cljs$lang$maxFixedArity = 1;
om_tools$dom$table.cljs$lang$applyTo = om_tools$dom$table__2.cljs$lang$applyTo;
om_tools$dom$table.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$table__0;
om_tools$dom$table.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$table__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$table;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tbody = (function() {
var om_tools$dom$tbody = null;
var om_tools$dom$tbody__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});
var om_tools$dom$tbody__2 = (function() { 
var G__17428__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__7559__auto__,children__7560__auto__);
};
var G__17428 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17429__i = 0, G__17429__a = new Array(arguments.length -  1);
while (G__17429__i < G__17429__a.length) {G__17429__a[G__17429__i] = arguments[G__17429__i + 1]; ++G__17429__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17429__a,0);
} 
return G__17428__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17428.cljs$lang$maxFixedArity = 1;
G__17428.cljs$lang$applyTo = (function (arglist__17430){
var opts__7559__auto__ = cljs.core.first(arglist__17430);
var children__7560__auto__ = cljs.core.rest(arglist__17430);
return G__17428__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17428.cljs$core$IFn$_invoke$arity$variadic = G__17428__delegate;
return G__17428;
})()
;
om_tools$dom$tbody = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tbody__0.call(this);
default:
var G__17431 = null;
if (arguments.length > 1) {
var G__17432__i = 0, G__17432__a = new Array(arguments.length -  1);
while (G__17432__i < G__17432__a.length) {G__17432__a[G__17432__i] = arguments[G__17432__i + 1]; ++G__17432__i;}
G__17431 = new cljs.core.IndexedSeq(G__17432__a,0);
}
return om_tools$dom$tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tbody.cljs$lang$maxFixedArity = 1;
om_tools$dom$tbody.cljs$lang$applyTo = om_tools$dom$tbody__2.cljs$lang$applyTo;
om_tools$dom$tbody.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tbody__0;
om_tools$dom$tbody.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tbody__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tbody;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.td = (function() {
var om_tools$dom$td = null;
var om_tools$dom$td__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});
var om_tools$dom$td__2 = (function() { 
var G__17433__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__7559__auto__,children__7560__auto__);
};
var G__17433 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17434__i = 0, G__17434__a = new Array(arguments.length -  1);
while (G__17434__i < G__17434__a.length) {G__17434__a[G__17434__i] = arguments[G__17434__i + 1]; ++G__17434__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17434__a,0);
} 
return G__17433__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17433.cljs$lang$maxFixedArity = 1;
G__17433.cljs$lang$applyTo = (function (arglist__17435){
var opts__7559__auto__ = cljs.core.first(arglist__17435);
var children__7560__auto__ = cljs.core.rest(arglist__17435);
return G__17433__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17433.cljs$core$IFn$_invoke$arity$variadic = G__17433__delegate;
return G__17433;
})()
;
om_tools$dom$td = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$td__0.call(this);
default:
var G__17436 = null;
if (arguments.length > 1) {
var G__17437__i = 0, G__17437__a = new Array(arguments.length -  1);
while (G__17437__i < G__17437__a.length) {G__17437__a[G__17437__i] = arguments[G__17437__i + 1]; ++G__17437__i;}
G__17436 = new cljs.core.IndexedSeq(G__17437__a,0);
}
return om_tools$dom$td__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$td.cljs$lang$maxFixedArity = 1;
om_tools$dom$td.cljs$lang$applyTo = om_tools$dom$td__2.cljs$lang$applyTo;
om_tools$dom$td.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$td__0;
om_tools$dom$td.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$td__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$td;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tfoot = (function() {
var om_tools$dom$tfoot = null;
var om_tools$dom$tfoot__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});
var om_tools$dom$tfoot__2 = (function() { 
var G__17438__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__7559__auto__,children__7560__auto__);
};
var G__17438 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17439__i = 0, G__17439__a = new Array(arguments.length -  1);
while (G__17439__i < G__17439__a.length) {G__17439__a[G__17439__i] = arguments[G__17439__i + 1]; ++G__17439__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17439__a,0);
} 
return G__17438__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17438.cljs$lang$maxFixedArity = 1;
G__17438.cljs$lang$applyTo = (function (arglist__17440){
var opts__7559__auto__ = cljs.core.first(arglist__17440);
var children__7560__auto__ = cljs.core.rest(arglist__17440);
return G__17438__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17438.cljs$core$IFn$_invoke$arity$variadic = G__17438__delegate;
return G__17438;
})()
;
om_tools$dom$tfoot = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tfoot__0.call(this);
default:
var G__17441 = null;
if (arguments.length > 1) {
var G__17442__i = 0, G__17442__a = new Array(arguments.length -  1);
while (G__17442__i < G__17442__a.length) {G__17442__a[G__17442__i] = arguments[G__17442__i + 1]; ++G__17442__i;}
G__17441 = new cljs.core.IndexedSeq(G__17442__a,0);
}
return om_tools$dom$tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tfoot.cljs$lang$maxFixedArity = 1;
om_tools$dom$tfoot.cljs$lang$applyTo = om_tools$dom$tfoot__2.cljs$lang$applyTo;
om_tools$dom$tfoot.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tfoot__0;
om_tools$dom$tfoot.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tfoot__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tfoot;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.th = (function() {
var om_tools$dom$th = null;
var om_tools$dom$th__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});
var om_tools$dom$th__2 = (function() { 
var G__17443__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__7559__auto__,children__7560__auto__);
};
var G__17443 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17444__i = 0, G__17444__a = new Array(arguments.length -  1);
while (G__17444__i < G__17444__a.length) {G__17444__a[G__17444__i] = arguments[G__17444__i + 1]; ++G__17444__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17444__a,0);
} 
return G__17443__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17443.cljs$lang$maxFixedArity = 1;
G__17443.cljs$lang$applyTo = (function (arglist__17445){
var opts__7559__auto__ = cljs.core.first(arglist__17445);
var children__7560__auto__ = cljs.core.rest(arglist__17445);
return G__17443__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17443.cljs$core$IFn$_invoke$arity$variadic = G__17443__delegate;
return G__17443;
})()
;
om_tools$dom$th = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$th__0.call(this);
default:
var G__17446 = null;
if (arguments.length > 1) {
var G__17447__i = 0, G__17447__a = new Array(arguments.length -  1);
while (G__17447__i < G__17447__a.length) {G__17447__a[G__17447__i] = arguments[G__17447__i + 1]; ++G__17447__i;}
G__17446 = new cljs.core.IndexedSeq(G__17447__a,0);
}
return om_tools$dom$th__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$th.cljs$lang$maxFixedArity = 1;
om_tools$dom$th.cljs$lang$applyTo = om_tools$dom$th__2.cljs$lang$applyTo;
om_tools$dom$th.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$th__0;
om_tools$dom$th.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$th__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$th;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.thead = (function() {
var om_tools$dom$thead = null;
var om_tools$dom$thead__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});
var om_tools$dom$thead__2 = (function() { 
var G__17448__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__7559__auto__,children__7560__auto__);
};
var G__17448 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17449__i = 0, G__17449__a = new Array(arguments.length -  1);
while (G__17449__i < G__17449__a.length) {G__17449__a[G__17449__i] = arguments[G__17449__i + 1]; ++G__17449__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17449__a,0);
} 
return G__17448__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17448.cljs$lang$maxFixedArity = 1;
G__17448.cljs$lang$applyTo = (function (arglist__17450){
var opts__7559__auto__ = cljs.core.first(arglist__17450);
var children__7560__auto__ = cljs.core.rest(arglist__17450);
return G__17448__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17448.cljs$core$IFn$_invoke$arity$variadic = G__17448__delegate;
return G__17448;
})()
;
om_tools$dom$thead = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$thead__0.call(this);
default:
var G__17451 = null;
if (arguments.length > 1) {
var G__17452__i = 0, G__17452__a = new Array(arguments.length -  1);
while (G__17452__i < G__17452__a.length) {G__17452__a[G__17452__i] = arguments[G__17452__i + 1]; ++G__17452__i;}
G__17451 = new cljs.core.IndexedSeq(G__17452__a,0);
}
return om_tools$dom$thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$thead.cljs$lang$maxFixedArity = 1;
om_tools$dom$thead.cljs$lang$applyTo = om_tools$dom$thead__2.cljs$lang$applyTo;
om_tools$dom$thead.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$thead__0;
om_tools$dom$thead.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$thead__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$thead;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.time = (function() {
var om_tools$dom$time = null;
var om_tools$dom$time__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});
var om_tools$dom$time__2 = (function() { 
var G__17453__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__7559__auto__,children__7560__auto__);
};
var G__17453 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17454__i = 0, G__17454__a = new Array(arguments.length -  1);
while (G__17454__i < G__17454__a.length) {G__17454__a[G__17454__i] = arguments[G__17454__i + 1]; ++G__17454__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17454__a,0);
} 
return G__17453__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17453.cljs$lang$maxFixedArity = 1;
G__17453.cljs$lang$applyTo = (function (arglist__17455){
var opts__7559__auto__ = cljs.core.first(arglist__17455);
var children__7560__auto__ = cljs.core.rest(arglist__17455);
return G__17453__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17453.cljs$core$IFn$_invoke$arity$variadic = G__17453__delegate;
return G__17453;
})()
;
om_tools$dom$time = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$time__0.call(this);
default:
var G__17456 = null;
if (arguments.length > 1) {
var G__17457__i = 0, G__17457__a = new Array(arguments.length -  1);
while (G__17457__i < G__17457__a.length) {G__17457__a[G__17457__i] = arguments[G__17457__i + 1]; ++G__17457__i;}
G__17456 = new cljs.core.IndexedSeq(G__17457__a,0);
}
return om_tools$dom$time__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$time.cljs$lang$maxFixedArity = 1;
om_tools$dom$time.cljs$lang$applyTo = om_tools$dom$time__2.cljs$lang$applyTo;
om_tools$dom$time.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$time__0;
om_tools$dom$time.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$time__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$time;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.title = (function() {
var om_tools$dom$title = null;
var om_tools$dom$title__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});
var om_tools$dom$title__2 = (function() { 
var G__17458__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__7559__auto__,children__7560__auto__);
};
var G__17458 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17459__i = 0, G__17459__a = new Array(arguments.length -  1);
while (G__17459__i < G__17459__a.length) {G__17459__a[G__17459__i] = arguments[G__17459__i + 1]; ++G__17459__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17459__a,0);
} 
return G__17458__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17458.cljs$lang$maxFixedArity = 1;
G__17458.cljs$lang$applyTo = (function (arglist__17460){
var opts__7559__auto__ = cljs.core.first(arglist__17460);
var children__7560__auto__ = cljs.core.rest(arglist__17460);
return G__17458__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17458.cljs$core$IFn$_invoke$arity$variadic = G__17458__delegate;
return G__17458;
})()
;
om_tools$dom$title = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$title__0.call(this);
default:
var G__17461 = null;
if (arguments.length > 1) {
var G__17462__i = 0, G__17462__a = new Array(arguments.length -  1);
while (G__17462__i < G__17462__a.length) {G__17462__a[G__17462__i] = arguments[G__17462__i + 1]; ++G__17462__i;}
G__17461 = new cljs.core.IndexedSeq(G__17462__a,0);
}
return om_tools$dom$title__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$title.cljs$lang$maxFixedArity = 1;
om_tools$dom$title.cljs$lang$applyTo = om_tools$dom$title__2.cljs$lang$applyTo;
om_tools$dom$title.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$title__0;
om_tools$dom$title.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$title__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$title;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tr = (function() {
var om_tools$dom$tr = null;
var om_tools$dom$tr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});
var om_tools$dom$tr__2 = (function() { 
var G__17463__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__7559__auto__,children__7560__auto__);
};
var G__17463 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17464__i = 0, G__17464__a = new Array(arguments.length -  1);
while (G__17464__i < G__17464__a.length) {G__17464__a[G__17464__i] = arguments[G__17464__i + 1]; ++G__17464__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17464__a,0);
} 
return G__17463__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17463.cljs$lang$maxFixedArity = 1;
G__17463.cljs$lang$applyTo = (function (arglist__17465){
var opts__7559__auto__ = cljs.core.first(arglist__17465);
var children__7560__auto__ = cljs.core.rest(arglist__17465);
return G__17463__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17463.cljs$core$IFn$_invoke$arity$variadic = G__17463__delegate;
return G__17463;
})()
;
om_tools$dom$tr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tr__0.call(this);
default:
var G__17466 = null;
if (arguments.length > 1) {
var G__17467__i = 0, G__17467__a = new Array(arguments.length -  1);
while (G__17467__i < G__17467__a.length) {G__17467__a[G__17467__i] = arguments[G__17467__i + 1]; ++G__17467__i;}
G__17466 = new cljs.core.IndexedSeq(G__17467__a,0);
}
return om_tools$dom$tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tr.cljs$lang$maxFixedArity = 1;
om_tools$dom$tr.cljs$lang$applyTo = om_tools$dom$tr__2.cljs$lang$applyTo;
om_tools$dom$tr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tr__0;
om_tools$dom$tr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.track = (function() {
var om_tools$dom$track = null;
var om_tools$dom$track__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});
var om_tools$dom$track__2 = (function() { 
var G__17468__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__7559__auto__,children__7560__auto__);
};
var G__17468 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17469__i = 0, G__17469__a = new Array(arguments.length -  1);
while (G__17469__i < G__17469__a.length) {G__17469__a[G__17469__i] = arguments[G__17469__i + 1]; ++G__17469__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17469__a,0);
} 
return G__17468__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17468.cljs$lang$maxFixedArity = 1;
G__17468.cljs$lang$applyTo = (function (arglist__17470){
var opts__7559__auto__ = cljs.core.first(arglist__17470);
var children__7560__auto__ = cljs.core.rest(arglist__17470);
return G__17468__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17468.cljs$core$IFn$_invoke$arity$variadic = G__17468__delegate;
return G__17468;
})()
;
om_tools$dom$track = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$track__0.call(this);
default:
var G__17471 = null;
if (arguments.length > 1) {
var G__17472__i = 0, G__17472__a = new Array(arguments.length -  1);
while (G__17472__i < G__17472__a.length) {G__17472__a[G__17472__i] = arguments[G__17472__i + 1]; ++G__17472__i;}
G__17471 = new cljs.core.IndexedSeq(G__17472__a,0);
}
return om_tools$dom$track__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$track.cljs$lang$maxFixedArity = 1;
om_tools$dom$track.cljs$lang$applyTo = om_tools$dom$track__2.cljs$lang$applyTo;
om_tools$dom$track.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$track__0;
om_tools$dom$track.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$track__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$track;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.u = (function() {
var om_tools$dom$u = null;
var om_tools$dom$u__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});
var om_tools$dom$u__2 = (function() { 
var G__17473__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__7559__auto__,children__7560__auto__);
};
var G__17473 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17474__i = 0, G__17474__a = new Array(arguments.length -  1);
while (G__17474__i < G__17474__a.length) {G__17474__a[G__17474__i] = arguments[G__17474__i + 1]; ++G__17474__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17474__a,0);
} 
return G__17473__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17473.cljs$lang$maxFixedArity = 1;
G__17473.cljs$lang$applyTo = (function (arglist__17475){
var opts__7559__auto__ = cljs.core.first(arglist__17475);
var children__7560__auto__ = cljs.core.rest(arglist__17475);
return G__17473__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17473.cljs$core$IFn$_invoke$arity$variadic = G__17473__delegate;
return G__17473;
})()
;
om_tools$dom$u = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$u__0.call(this);
default:
var G__17476 = null;
if (arguments.length > 1) {
var G__17477__i = 0, G__17477__a = new Array(arguments.length -  1);
while (G__17477__i < G__17477__a.length) {G__17477__a[G__17477__i] = arguments[G__17477__i + 1]; ++G__17477__i;}
G__17476 = new cljs.core.IndexedSeq(G__17477__a,0);
}
return om_tools$dom$u__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$u.cljs$lang$maxFixedArity = 1;
om_tools$dom$u.cljs$lang$applyTo = om_tools$dom$u__2.cljs$lang$applyTo;
om_tools$dom$u.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$u__0;
om_tools$dom$u.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$u__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$u;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ul = (function() {
var om_tools$dom$ul = null;
var om_tools$dom$ul__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});
var om_tools$dom$ul__2 = (function() { 
var G__17478__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__7559__auto__,children__7560__auto__);
};
var G__17478 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17479__i = 0, G__17479__a = new Array(arguments.length -  1);
while (G__17479__i < G__17479__a.length) {G__17479__a[G__17479__i] = arguments[G__17479__i + 1]; ++G__17479__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17479__a,0);
} 
return G__17478__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17478.cljs$lang$maxFixedArity = 1;
G__17478.cljs$lang$applyTo = (function (arglist__17480){
var opts__7559__auto__ = cljs.core.first(arglist__17480);
var children__7560__auto__ = cljs.core.rest(arglist__17480);
return G__17478__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17478.cljs$core$IFn$_invoke$arity$variadic = G__17478__delegate;
return G__17478;
})()
;
om_tools$dom$ul = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ul__0.call(this);
default:
var G__17481 = null;
if (arguments.length > 1) {
var G__17482__i = 0, G__17482__a = new Array(arguments.length -  1);
while (G__17482__i < G__17482__a.length) {G__17482__a[G__17482__i] = arguments[G__17482__i + 1]; ++G__17482__i;}
G__17481 = new cljs.core.IndexedSeq(G__17482__a,0);
}
return om_tools$dom$ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ul.cljs$lang$maxFixedArity = 1;
om_tools$dom$ul.cljs$lang$applyTo = om_tools$dom$ul__2.cljs$lang$applyTo;
om_tools$dom$ul.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ul__0;
om_tools$dom$ul.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ul__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ul;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.var$ = (function() {
var om_tools$dom$var = null;
var om_tools$dom$var__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});
var om_tools$dom$var__2 = (function() { 
var G__17483__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__7559__auto__,children__7560__auto__);
};
var G__17483 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17484__i = 0, G__17484__a = new Array(arguments.length -  1);
while (G__17484__i < G__17484__a.length) {G__17484__a[G__17484__i] = arguments[G__17484__i + 1]; ++G__17484__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17484__a,0);
} 
return G__17483__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17483.cljs$lang$maxFixedArity = 1;
G__17483.cljs$lang$applyTo = (function (arglist__17485){
var opts__7559__auto__ = cljs.core.first(arglist__17485);
var children__7560__auto__ = cljs.core.rest(arglist__17485);
return G__17483__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17483.cljs$core$IFn$_invoke$arity$variadic = G__17483__delegate;
return G__17483;
})()
;
om_tools$dom$var = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$var__0.call(this);
default:
var G__17486 = null;
if (arguments.length > 1) {
var G__17487__i = 0, G__17487__a = new Array(arguments.length -  1);
while (G__17487__i < G__17487__a.length) {G__17487__a[G__17487__i] = arguments[G__17487__i + 1]; ++G__17487__i;}
G__17486 = new cljs.core.IndexedSeq(G__17487__a,0);
}
return om_tools$dom$var__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$var.cljs$lang$maxFixedArity = 1;
om_tools$dom$var.cljs$lang$applyTo = om_tools$dom$var__2.cljs$lang$applyTo;
om_tools$dom$var.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$var__0;
om_tools$dom$var.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$var__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$var;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.video = (function() {
var om_tools$dom$video = null;
var om_tools$dom$video__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});
var om_tools$dom$video__2 = (function() { 
var G__17488__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__7559__auto__,children__7560__auto__);
};
var G__17488 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17489__i = 0, G__17489__a = new Array(arguments.length -  1);
while (G__17489__i < G__17489__a.length) {G__17489__a[G__17489__i] = arguments[G__17489__i + 1]; ++G__17489__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17489__a,0);
} 
return G__17488__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17488.cljs$lang$maxFixedArity = 1;
G__17488.cljs$lang$applyTo = (function (arglist__17490){
var opts__7559__auto__ = cljs.core.first(arglist__17490);
var children__7560__auto__ = cljs.core.rest(arglist__17490);
return G__17488__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17488.cljs$core$IFn$_invoke$arity$variadic = G__17488__delegate;
return G__17488;
})()
;
om_tools$dom$video = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$video__0.call(this);
default:
var G__17491 = null;
if (arguments.length > 1) {
var G__17492__i = 0, G__17492__a = new Array(arguments.length -  1);
while (G__17492__i < G__17492__a.length) {G__17492__a[G__17492__i] = arguments[G__17492__i + 1]; ++G__17492__i;}
G__17491 = new cljs.core.IndexedSeq(G__17492__a,0);
}
return om_tools$dom$video__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$video.cljs$lang$maxFixedArity = 1;
om_tools$dom$video.cljs$lang$applyTo = om_tools$dom$video__2.cljs$lang$applyTo;
om_tools$dom$video.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$video__0;
om_tools$dom$video.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$video__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$video;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.wbr = (function() {
var om_tools$dom$wbr = null;
var om_tools$dom$wbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});
var om_tools$dom$wbr__2 = (function() { 
var G__17493__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__7559__auto__,children__7560__auto__);
};
var G__17493 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17494__i = 0, G__17494__a = new Array(arguments.length -  1);
while (G__17494__i < G__17494__a.length) {G__17494__a[G__17494__i] = arguments[G__17494__i + 1]; ++G__17494__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17494__a,0);
} 
return G__17493__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17493.cljs$lang$maxFixedArity = 1;
G__17493.cljs$lang$applyTo = (function (arglist__17495){
var opts__7559__auto__ = cljs.core.first(arglist__17495);
var children__7560__auto__ = cljs.core.rest(arglist__17495);
return G__17493__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17493.cljs$core$IFn$_invoke$arity$variadic = G__17493__delegate;
return G__17493;
})()
;
om_tools$dom$wbr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$wbr__0.call(this);
default:
var G__17496 = null;
if (arguments.length > 1) {
var G__17497__i = 0, G__17497__a = new Array(arguments.length -  1);
while (G__17497__i < G__17497__a.length) {G__17497__a[G__17497__i] = arguments[G__17497__i + 1]; ++G__17497__i;}
G__17496 = new cljs.core.IndexedSeq(G__17497__a,0);
}
return om_tools$dom$wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$wbr.cljs$lang$maxFixedArity = 1;
om_tools$dom$wbr.cljs$lang$applyTo = om_tools$dom$wbr__2.cljs$lang$applyTo;
om_tools$dom$wbr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$wbr__0;
om_tools$dom$wbr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$wbr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$wbr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.circle = (function() {
var om_tools$dom$circle = null;
var om_tools$dom$circle__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});
var om_tools$dom$circle__2 = (function() { 
var G__17498__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__7559__auto__,children__7560__auto__);
};
var G__17498 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17499__i = 0, G__17499__a = new Array(arguments.length -  1);
while (G__17499__i < G__17499__a.length) {G__17499__a[G__17499__i] = arguments[G__17499__i + 1]; ++G__17499__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17499__a,0);
} 
return G__17498__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17498.cljs$lang$maxFixedArity = 1;
G__17498.cljs$lang$applyTo = (function (arglist__17500){
var opts__7559__auto__ = cljs.core.first(arglist__17500);
var children__7560__auto__ = cljs.core.rest(arglist__17500);
return G__17498__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17498.cljs$core$IFn$_invoke$arity$variadic = G__17498__delegate;
return G__17498;
})()
;
om_tools$dom$circle = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$circle__0.call(this);
default:
var G__17501 = null;
if (arguments.length > 1) {
var G__17502__i = 0, G__17502__a = new Array(arguments.length -  1);
while (G__17502__i < G__17502__a.length) {G__17502__a[G__17502__i] = arguments[G__17502__i + 1]; ++G__17502__i;}
G__17501 = new cljs.core.IndexedSeq(G__17502__a,0);
}
return om_tools$dom$circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$circle.cljs$lang$maxFixedArity = 1;
om_tools$dom$circle.cljs$lang$applyTo = om_tools$dom$circle__2.cljs$lang$applyTo;
om_tools$dom$circle.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$circle__0;
om_tools$dom$circle.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$circle__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$circle;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ellipse = (function() {
var om_tools$dom$ellipse = null;
var om_tools$dom$ellipse__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});
var om_tools$dom$ellipse__2 = (function() { 
var G__17503__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__7559__auto__,children__7560__auto__);
};
var G__17503 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17504__i = 0, G__17504__a = new Array(arguments.length -  1);
while (G__17504__i < G__17504__a.length) {G__17504__a[G__17504__i] = arguments[G__17504__i + 1]; ++G__17504__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17504__a,0);
} 
return G__17503__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17503.cljs$lang$maxFixedArity = 1;
G__17503.cljs$lang$applyTo = (function (arglist__17505){
var opts__7559__auto__ = cljs.core.first(arglist__17505);
var children__7560__auto__ = cljs.core.rest(arglist__17505);
return G__17503__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17503.cljs$core$IFn$_invoke$arity$variadic = G__17503__delegate;
return G__17503;
})()
;
om_tools$dom$ellipse = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ellipse__0.call(this);
default:
var G__17506 = null;
if (arguments.length > 1) {
var G__17507__i = 0, G__17507__a = new Array(arguments.length -  1);
while (G__17507__i < G__17507__a.length) {G__17507__a[G__17507__i] = arguments[G__17507__i + 1]; ++G__17507__i;}
G__17506 = new cljs.core.IndexedSeq(G__17507__a,0);
}
return om_tools$dom$ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ellipse.cljs$lang$maxFixedArity = 1;
om_tools$dom$ellipse.cljs$lang$applyTo = om_tools$dom$ellipse__2.cljs$lang$applyTo;
om_tools$dom$ellipse.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ellipse__0;
om_tools$dom$ellipse.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ellipse__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ellipse;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.g = (function() {
var om_tools$dom$g = null;
var om_tools$dom$g__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});
var om_tools$dom$g__2 = (function() { 
var G__17508__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__7559__auto__,children__7560__auto__);
};
var G__17508 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17509__i = 0, G__17509__a = new Array(arguments.length -  1);
while (G__17509__i < G__17509__a.length) {G__17509__a[G__17509__i] = arguments[G__17509__i + 1]; ++G__17509__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17509__a,0);
} 
return G__17508__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17508.cljs$lang$maxFixedArity = 1;
G__17508.cljs$lang$applyTo = (function (arglist__17510){
var opts__7559__auto__ = cljs.core.first(arglist__17510);
var children__7560__auto__ = cljs.core.rest(arglist__17510);
return G__17508__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17508.cljs$core$IFn$_invoke$arity$variadic = G__17508__delegate;
return G__17508;
})()
;
om_tools$dom$g = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$g__0.call(this);
default:
var G__17511 = null;
if (arguments.length > 1) {
var G__17512__i = 0, G__17512__a = new Array(arguments.length -  1);
while (G__17512__i < G__17512__a.length) {G__17512__a[G__17512__i] = arguments[G__17512__i + 1]; ++G__17512__i;}
G__17511 = new cljs.core.IndexedSeq(G__17512__a,0);
}
return om_tools$dom$g__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$g.cljs$lang$maxFixedArity = 1;
om_tools$dom$g.cljs$lang$applyTo = om_tools$dom$g__2.cljs$lang$applyTo;
om_tools$dom$g.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$g__0;
om_tools$dom$g.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$g__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$g;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.line = (function() {
var om_tools$dom$line = null;
var om_tools$dom$line__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});
var om_tools$dom$line__2 = (function() { 
var G__17513__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__7559__auto__,children__7560__auto__);
};
var G__17513 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17514__i = 0, G__17514__a = new Array(arguments.length -  1);
while (G__17514__i < G__17514__a.length) {G__17514__a[G__17514__i] = arguments[G__17514__i + 1]; ++G__17514__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17514__a,0);
} 
return G__17513__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17513.cljs$lang$maxFixedArity = 1;
G__17513.cljs$lang$applyTo = (function (arglist__17515){
var opts__7559__auto__ = cljs.core.first(arglist__17515);
var children__7560__auto__ = cljs.core.rest(arglist__17515);
return G__17513__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17513.cljs$core$IFn$_invoke$arity$variadic = G__17513__delegate;
return G__17513;
})()
;
om_tools$dom$line = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$line__0.call(this);
default:
var G__17516 = null;
if (arguments.length > 1) {
var G__17517__i = 0, G__17517__a = new Array(arguments.length -  1);
while (G__17517__i < G__17517__a.length) {G__17517__a[G__17517__i] = arguments[G__17517__i + 1]; ++G__17517__i;}
G__17516 = new cljs.core.IndexedSeq(G__17517__a,0);
}
return om_tools$dom$line__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$line.cljs$lang$maxFixedArity = 1;
om_tools$dom$line.cljs$lang$applyTo = om_tools$dom$line__2.cljs$lang$applyTo;
om_tools$dom$line.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$line__0;
om_tools$dom$line.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$line__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$line;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.path = (function() {
var om_tools$dom$path = null;
var om_tools$dom$path__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});
var om_tools$dom$path__2 = (function() { 
var G__17518__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__7559__auto__,children__7560__auto__);
};
var G__17518 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17519__i = 0, G__17519__a = new Array(arguments.length -  1);
while (G__17519__i < G__17519__a.length) {G__17519__a[G__17519__i] = arguments[G__17519__i + 1]; ++G__17519__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17519__a,0);
} 
return G__17518__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17518.cljs$lang$maxFixedArity = 1;
G__17518.cljs$lang$applyTo = (function (arglist__17520){
var opts__7559__auto__ = cljs.core.first(arglist__17520);
var children__7560__auto__ = cljs.core.rest(arglist__17520);
return G__17518__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17518.cljs$core$IFn$_invoke$arity$variadic = G__17518__delegate;
return G__17518;
})()
;
om_tools$dom$path = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$path__0.call(this);
default:
var G__17521 = null;
if (arguments.length > 1) {
var G__17522__i = 0, G__17522__a = new Array(arguments.length -  1);
while (G__17522__i < G__17522__a.length) {G__17522__a[G__17522__i] = arguments[G__17522__i + 1]; ++G__17522__i;}
G__17521 = new cljs.core.IndexedSeq(G__17522__a,0);
}
return om_tools$dom$path__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$path.cljs$lang$maxFixedArity = 1;
om_tools$dom$path.cljs$lang$applyTo = om_tools$dom$path__2.cljs$lang$applyTo;
om_tools$dom$path.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$path__0;
om_tools$dom$path.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$path__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$path;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.polyline = (function() {
var om_tools$dom$polyline = null;
var om_tools$dom$polyline__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});
var om_tools$dom$polyline__2 = (function() { 
var G__17523__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__7559__auto__,children__7560__auto__);
};
var G__17523 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17524__i = 0, G__17524__a = new Array(arguments.length -  1);
while (G__17524__i < G__17524__a.length) {G__17524__a[G__17524__i] = arguments[G__17524__i + 1]; ++G__17524__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17524__a,0);
} 
return G__17523__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17523.cljs$lang$maxFixedArity = 1;
G__17523.cljs$lang$applyTo = (function (arglist__17525){
var opts__7559__auto__ = cljs.core.first(arglist__17525);
var children__7560__auto__ = cljs.core.rest(arglist__17525);
return G__17523__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17523.cljs$core$IFn$_invoke$arity$variadic = G__17523__delegate;
return G__17523;
})()
;
om_tools$dom$polyline = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$polyline__0.call(this);
default:
var G__17526 = null;
if (arguments.length > 1) {
var G__17527__i = 0, G__17527__a = new Array(arguments.length -  1);
while (G__17527__i < G__17527__a.length) {G__17527__a[G__17527__i] = arguments[G__17527__i + 1]; ++G__17527__i;}
G__17526 = new cljs.core.IndexedSeq(G__17527__a,0);
}
return om_tools$dom$polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$polyline.cljs$lang$maxFixedArity = 1;
om_tools$dom$polyline.cljs$lang$applyTo = om_tools$dom$polyline__2.cljs$lang$applyTo;
om_tools$dom$polyline.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$polyline__0;
om_tools$dom$polyline.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$polyline__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$polyline;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rect = (function() {
var om_tools$dom$rect = null;
var om_tools$dom$rect__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});
var om_tools$dom$rect__2 = (function() { 
var G__17528__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__7559__auto__,children__7560__auto__);
};
var G__17528 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17529__i = 0, G__17529__a = new Array(arguments.length -  1);
while (G__17529__i < G__17529__a.length) {G__17529__a[G__17529__i] = arguments[G__17529__i + 1]; ++G__17529__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17529__a,0);
} 
return G__17528__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17528.cljs$lang$maxFixedArity = 1;
G__17528.cljs$lang$applyTo = (function (arglist__17530){
var opts__7559__auto__ = cljs.core.first(arglist__17530);
var children__7560__auto__ = cljs.core.rest(arglist__17530);
return G__17528__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17528.cljs$core$IFn$_invoke$arity$variadic = G__17528__delegate;
return G__17528;
})()
;
om_tools$dom$rect = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rect__0.call(this);
default:
var G__17531 = null;
if (arguments.length > 1) {
var G__17532__i = 0, G__17532__a = new Array(arguments.length -  1);
while (G__17532__i < G__17532__a.length) {G__17532__a[G__17532__i] = arguments[G__17532__i + 1]; ++G__17532__i;}
G__17531 = new cljs.core.IndexedSeq(G__17532__a,0);
}
return om_tools$dom$rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rect.cljs$lang$maxFixedArity = 1;
om_tools$dom$rect.cljs$lang$applyTo = om_tools$dom$rect__2.cljs$lang$applyTo;
om_tools$dom$rect.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rect__0;
om_tools$dom$rect.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rect__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rect;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.svg = (function() {
var om_tools$dom$svg = null;
var om_tools$dom$svg__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});
var om_tools$dom$svg__2 = (function() { 
var G__17533__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__7559__auto__,children__7560__auto__);
};
var G__17533 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17534__i = 0, G__17534__a = new Array(arguments.length -  1);
while (G__17534__i < G__17534__a.length) {G__17534__a[G__17534__i] = arguments[G__17534__i + 1]; ++G__17534__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17534__a,0);
} 
return G__17533__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17533.cljs$lang$maxFixedArity = 1;
G__17533.cljs$lang$applyTo = (function (arglist__17535){
var opts__7559__auto__ = cljs.core.first(arglist__17535);
var children__7560__auto__ = cljs.core.rest(arglist__17535);
return G__17533__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17533.cljs$core$IFn$_invoke$arity$variadic = G__17533__delegate;
return G__17533;
})()
;
om_tools$dom$svg = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$svg__0.call(this);
default:
var G__17536 = null;
if (arguments.length > 1) {
var G__17537__i = 0, G__17537__a = new Array(arguments.length -  1);
while (G__17537__i < G__17537__a.length) {G__17537__a[G__17537__i] = arguments[G__17537__i + 1]; ++G__17537__i;}
G__17536 = new cljs.core.IndexedSeq(G__17537__a,0);
}
return om_tools$dom$svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$svg.cljs$lang$maxFixedArity = 1;
om_tools$dom$svg.cljs$lang$applyTo = om_tools$dom$svg__2.cljs$lang$applyTo;
om_tools$dom$svg.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$svg__0;
om_tools$dom$svg.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$svg__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$svg;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.text = (function() {
var om_tools$dom$text = null;
var om_tools$dom$text__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});
var om_tools$dom$text__2 = (function() { 
var G__17538__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__7559__auto__,children__7560__auto__);
};
var G__17538 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17539__i = 0, G__17539__a = new Array(arguments.length -  1);
while (G__17539__i < G__17539__a.length) {G__17539__a[G__17539__i] = arguments[G__17539__i + 1]; ++G__17539__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17539__a,0);
} 
return G__17538__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17538.cljs$lang$maxFixedArity = 1;
G__17538.cljs$lang$applyTo = (function (arglist__17540){
var opts__7559__auto__ = cljs.core.first(arglist__17540);
var children__7560__auto__ = cljs.core.rest(arglist__17540);
return G__17538__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17538.cljs$core$IFn$_invoke$arity$variadic = G__17538__delegate;
return G__17538;
})()
;
om_tools$dom$text = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$text__0.call(this);
default:
var G__17541 = null;
if (arguments.length > 1) {
var G__17542__i = 0, G__17542__a = new Array(arguments.length -  1);
while (G__17542__i < G__17542__a.length) {G__17542__a[G__17542__i] = arguments[G__17542__i + 1]; ++G__17542__i;}
G__17541 = new cljs.core.IndexedSeq(G__17542__a,0);
}
return om_tools$dom$text__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$text.cljs$lang$maxFixedArity = 1;
om_tools$dom$text.cljs$lang$applyTo = om_tools$dom$text__2.cljs$lang$applyTo;
om_tools$dom$text.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$text__0;
om_tools$dom$text.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$text__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$text;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.defs = (function() {
var om_tools$dom$defs = null;
var om_tools$dom$defs__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});
var om_tools$dom$defs__2 = (function() { 
var G__17543__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__7559__auto__,children__7560__auto__);
};
var G__17543 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17544__i = 0, G__17544__a = new Array(arguments.length -  1);
while (G__17544__i < G__17544__a.length) {G__17544__a[G__17544__i] = arguments[G__17544__i + 1]; ++G__17544__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17544__a,0);
} 
return G__17543__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17543.cljs$lang$maxFixedArity = 1;
G__17543.cljs$lang$applyTo = (function (arglist__17545){
var opts__7559__auto__ = cljs.core.first(arglist__17545);
var children__7560__auto__ = cljs.core.rest(arglist__17545);
return G__17543__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17543.cljs$core$IFn$_invoke$arity$variadic = G__17543__delegate;
return G__17543;
})()
;
om_tools$dom$defs = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$defs__0.call(this);
default:
var G__17546 = null;
if (arguments.length > 1) {
var G__17547__i = 0, G__17547__a = new Array(arguments.length -  1);
while (G__17547__i < G__17547__a.length) {G__17547__a[G__17547__i] = arguments[G__17547__i + 1]; ++G__17547__i;}
G__17546 = new cljs.core.IndexedSeq(G__17547__a,0);
}
return om_tools$dom$defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$defs.cljs$lang$maxFixedArity = 1;
om_tools$dom$defs.cljs$lang$applyTo = om_tools$dom$defs__2.cljs$lang$applyTo;
om_tools$dom$defs.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$defs__0;
om_tools$dom$defs.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$defs__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$defs;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.linearGradient = (function() {
var om_tools$dom$linearGradient = null;
var om_tools$dom$linearGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});
var om_tools$dom$linearGradient__2 = (function() { 
var G__17548__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__7559__auto__,children__7560__auto__);
};
var G__17548 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17549__i = 0, G__17549__a = new Array(arguments.length -  1);
while (G__17549__i < G__17549__a.length) {G__17549__a[G__17549__i] = arguments[G__17549__i + 1]; ++G__17549__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17549__a,0);
} 
return G__17548__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17548.cljs$lang$maxFixedArity = 1;
G__17548.cljs$lang$applyTo = (function (arglist__17550){
var opts__7559__auto__ = cljs.core.first(arglist__17550);
var children__7560__auto__ = cljs.core.rest(arglist__17550);
return G__17548__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17548.cljs$core$IFn$_invoke$arity$variadic = G__17548__delegate;
return G__17548;
})()
;
om_tools$dom$linearGradient = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$linearGradient__0.call(this);
default:
var G__17551 = null;
if (arguments.length > 1) {
var G__17552__i = 0, G__17552__a = new Array(arguments.length -  1);
while (G__17552__i < G__17552__a.length) {G__17552__a[G__17552__i] = arguments[G__17552__i + 1]; ++G__17552__i;}
G__17551 = new cljs.core.IndexedSeq(G__17552__a,0);
}
return om_tools$dom$linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$linearGradient.cljs$lang$maxFixedArity = 1;
om_tools$dom$linearGradient.cljs$lang$applyTo = om_tools$dom$linearGradient__2.cljs$lang$applyTo;
om_tools$dom$linearGradient.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$linearGradient__0;
om_tools$dom$linearGradient.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$linearGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$linearGradient;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.polygon = (function() {
var om_tools$dom$polygon = null;
var om_tools$dom$polygon__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});
var om_tools$dom$polygon__2 = (function() { 
var G__17553__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__7559__auto__,children__7560__auto__);
};
var G__17553 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17554__i = 0, G__17554__a = new Array(arguments.length -  1);
while (G__17554__i < G__17554__a.length) {G__17554__a[G__17554__i] = arguments[G__17554__i + 1]; ++G__17554__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17554__a,0);
} 
return G__17553__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17553.cljs$lang$maxFixedArity = 1;
G__17553.cljs$lang$applyTo = (function (arglist__17555){
var opts__7559__auto__ = cljs.core.first(arglist__17555);
var children__7560__auto__ = cljs.core.rest(arglist__17555);
return G__17553__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17553.cljs$core$IFn$_invoke$arity$variadic = G__17553__delegate;
return G__17553;
})()
;
om_tools$dom$polygon = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$polygon__0.call(this);
default:
var G__17556 = null;
if (arguments.length > 1) {
var G__17557__i = 0, G__17557__a = new Array(arguments.length -  1);
while (G__17557__i < G__17557__a.length) {G__17557__a[G__17557__i] = arguments[G__17557__i + 1]; ++G__17557__i;}
G__17556 = new cljs.core.IndexedSeq(G__17557__a,0);
}
return om_tools$dom$polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$polygon.cljs$lang$maxFixedArity = 1;
om_tools$dom$polygon.cljs$lang$applyTo = om_tools$dom$polygon__2.cljs$lang$applyTo;
om_tools$dom$polygon.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$polygon__0;
om_tools$dom$polygon.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$polygon__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$polygon;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.radialGradient = (function() {
var om_tools$dom$radialGradient = null;
var om_tools$dom$radialGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});
var om_tools$dom$radialGradient__2 = (function() { 
var G__17558__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__7559__auto__,children__7560__auto__);
};
var G__17558 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17559__i = 0, G__17559__a = new Array(arguments.length -  1);
while (G__17559__i < G__17559__a.length) {G__17559__a[G__17559__i] = arguments[G__17559__i + 1]; ++G__17559__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17559__a,0);
} 
return G__17558__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17558.cljs$lang$maxFixedArity = 1;
G__17558.cljs$lang$applyTo = (function (arglist__17560){
var opts__7559__auto__ = cljs.core.first(arglist__17560);
var children__7560__auto__ = cljs.core.rest(arglist__17560);
return G__17558__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17558.cljs$core$IFn$_invoke$arity$variadic = G__17558__delegate;
return G__17558;
})()
;
om_tools$dom$radialGradient = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$radialGradient__0.call(this);
default:
var G__17561 = null;
if (arguments.length > 1) {
var G__17562__i = 0, G__17562__a = new Array(arguments.length -  1);
while (G__17562__i < G__17562__a.length) {G__17562__a[G__17562__i] = arguments[G__17562__i + 1]; ++G__17562__i;}
G__17561 = new cljs.core.IndexedSeq(G__17562__a,0);
}
return om_tools$dom$radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$radialGradient.cljs$lang$maxFixedArity = 1;
om_tools$dom$radialGradient.cljs$lang$applyTo = om_tools$dom$radialGradient__2.cljs$lang$applyTo;
om_tools$dom$radialGradient.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$radialGradient__0;
om_tools$dom$radialGradient.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$radialGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$radialGradient;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.stop = (function() {
var om_tools$dom$stop = null;
var om_tools$dom$stop__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});
var om_tools$dom$stop__2 = (function() { 
var G__17563__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__7559__auto__,children__7560__auto__);
};
var G__17563 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17564__i = 0, G__17564__a = new Array(arguments.length -  1);
while (G__17564__i < G__17564__a.length) {G__17564__a[G__17564__i] = arguments[G__17564__i + 1]; ++G__17564__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17564__a,0);
} 
return G__17563__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17563.cljs$lang$maxFixedArity = 1;
G__17563.cljs$lang$applyTo = (function (arglist__17565){
var opts__7559__auto__ = cljs.core.first(arglist__17565);
var children__7560__auto__ = cljs.core.rest(arglist__17565);
return G__17563__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17563.cljs$core$IFn$_invoke$arity$variadic = G__17563__delegate;
return G__17563;
})()
;
om_tools$dom$stop = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$stop__0.call(this);
default:
var G__17566 = null;
if (arguments.length > 1) {
var G__17567__i = 0, G__17567__a = new Array(arguments.length -  1);
while (G__17567__i < G__17567__a.length) {G__17567__a[G__17567__i] = arguments[G__17567__i + 1]; ++G__17567__i;}
G__17566 = new cljs.core.IndexedSeq(G__17567__a,0);
}
return om_tools$dom$stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$stop.cljs$lang$maxFixedArity = 1;
om_tools$dom$stop.cljs$lang$applyTo = om_tools$dom$stop__2.cljs$lang$applyTo;
om_tools$dom$stop.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$stop__0;
om_tools$dom$stop.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$stop__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$stop;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tspan = (function() {
var om_tools$dom$tspan = null;
var om_tools$dom$tspan__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});
var om_tools$dom$tspan__2 = (function() { 
var G__17568__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__7559__auto__,children__7560__auto__);
};
var G__17568 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17569__i = 0, G__17569__a = new Array(arguments.length -  1);
while (G__17569__i < G__17569__a.length) {G__17569__a[G__17569__i] = arguments[G__17569__i + 1]; ++G__17569__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17569__a,0);
} 
return G__17568__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17568.cljs$lang$maxFixedArity = 1;
G__17568.cljs$lang$applyTo = (function (arglist__17570){
var opts__7559__auto__ = cljs.core.first(arglist__17570);
var children__7560__auto__ = cljs.core.rest(arglist__17570);
return G__17568__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17568.cljs$core$IFn$_invoke$arity$variadic = G__17568__delegate;
return G__17568;
})()
;
om_tools$dom$tspan = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tspan__0.call(this);
default:
var G__17571 = null;
if (arguments.length > 1) {
var G__17572__i = 0, G__17572__a = new Array(arguments.length -  1);
while (G__17572__i < G__17572__a.length) {G__17572__a[G__17572__i] = arguments[G__17572__i + 1]; ++G__17572__i;}
G__17571 = new cljs.core.IndexedSeq(G__17572__a,0);
}
return om_tools$dom$tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tspan.cljs$lang$maxFixedArity = 1;
om_tools$dom$tspan.cljs$lang$applyTo = om_tools$dom$tspan__2.cljs$lang$applyTo;
om_tools$dom$tspan.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tspan__0;
om_tools$dom$tspan.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tspan__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tspan;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.input = (function() {
var om_tools$dom$input = null;
var om_tools$dom$input__0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});
var om_tools$dom$input__2 = (function() { 
var G__17573__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__7559__auto__,children__7560__auto__);
};
var G__17573 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17574__i = 0, G__17574__a = new Array(arguments.length -  1);
while (G__17574__i < G__17574__a.length) {G__17574__a[G__17574__i] = arguments[G__17574__i + 1]; ++G__17574__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17574__a,0);
} 
return G__17573__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17573.cljs$lang$maxFixedArity = 1;
G__17573.cljs$lang$applyTo = (function (arglist__17575){
var opts__7559__auto__ = cljs.core.first(arglist__17575);
var children__7560__auto__ = cljs.core.rest(arglist__17575);
return G__17573__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17573.cljs$core$IFn$_invoke$arity$variadic = G__17573__delegate;
return G__17573;
})()
;
om_tools$dom$input = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$input__0.call(this);
default:
var G__17576 = null;
if (arguments.length > 1) {
var G__17577__i = 0, G__17577__a = new Array(arguments.length -  1);
while (G__17577__i < G__17577__a.length) {G__17577__a[G__17577__i] = arguments[G__17577__i + 1]; ++G__17577__i;}
G__17576 = new cljs.core.IndexedSeq(G__17577__a,0);
}
return om_tools$dom$input__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$input.cljs$lang$maxFixedArity = 1;
om_tools$dom$input.cljs$lang$applyTo = om_tools$dom$input__2.cljs$lang$applyTo;
om_tools$dom$input.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$input__0;
om_tools$dom$input.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$input__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$input;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.textarea = (function() {
var om_tools$dom$textarea = null;
var om_tools$dom$textarea__0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});
var om_tools$dom$textarea__2 = (function() { 
var G__17578__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__7559__auto__,children__7560__auto__);
};
var G__17578 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17579__i = 0, G__17579__a = new Array(arguments.length -  1);
while (G__17579__i < G__17579__a.length) {G__17579__a[G__17579__i] = arguments[G__17579__i + 1]; ++G__17579__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17579__a,0);
} 
return G__17578__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17578.cljs$lang$maxFixedArity = 1;
G__17578.cljs$lang$applyTo = (function (arglist__17580){
var opts__7559__auto__ = cljs.core.first(arglist__17580);
var children__7560__auto__ = cljs.core.rest(arglist__17580);
return G__17578__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17578.cljs$core$IFn$_invoke$arity$variadic = G__17578__delegate;
return G__17578;
})()
;
om_tools$dom$textarea = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$textarea__0.call(this);
default:
var G__17581 = null;
if (arguments.length > 1) {
var G__17582__i = 0, G__17582__a = new Array(arguments.length -  1);
while (G__17582__i < G__17582__a.length) {G__17582__a[G__17582__i] = arguments[G__17582__i + 1]; ++G__17582__i;}
G__17581 = new cljs.core.IndexedSeq(G__17582__a,0);
}
return om_tools$dom$textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$textarea.cljs$lang$maxFixedArity = 1;
om_tools$dom$textarea.cljs$lang$applyTo = om_tools$dom$textarea__2.cljs$lang$applyTo;
om_tools$dom$textarea.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$textarea__0;
om_tools$dom$textarea.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$textarea__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$textarea;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.option = (function() {
var om_tools$dom$option = null;
var om_tools$dom$option__0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});
var om_tools$dom$option__2 = (function() { 
var G__17583__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__7559__auto__,children__7560__auto__);
};
var G__17583 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__17584__i = 0, G__17584__a = new Array(arguments.length -  1);
while (G__17584__i < G__17584__a.length) {G__17584__a[G__17584__i] = arguments[G__17584__i + 1]; ++G__17584__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__17584__a,0);
} 
return G__17583__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__17583.cljs$lang$maxFixedArity = 1;
G__17583.cljs$lang$applyTo = (function (arglist__17585){
var opts__7559__auto__ = cljs.core.first(arglist__17585);
var children__7560__auto__ = cljs.core.rest(arglist__17585);
return G__17583__delegate(opts__7559__auto__,children__7560__auto__);
});
G__17583.cljs$core$IFn$_invoke$arity$variadic = G__17583__delegate;
return G__17583;
})()
;
om_tools$dom$option = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$option__0.call(this);
default:
var G__17586 = null;
if (arguments.length > 1) {
var G__17587__i = 0, G__17587__a = new Array(arguments.length -  1);
while (G__17587__i < G__17587__a.length) {G__17587__a[G__17587__i] = arguments[G__17587__i + 1]; ++G__17587__i;}
G__17586 = new cljs.core.IndexedSeq(G__17587__a,0);
}
return om_tools$dom$option__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__17586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$option.cljs$lang$maxFixedArity = 1;
om_tools$dom$option.cljs$lang$applyTo = om_tools$dom$option__2.cljs$lang$applyTo;
om_tools$dom$option.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$option__0;
om_tools$dom$option.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$option__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$option;
})()
;
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4406__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4406__auto__){
var ks = temp__4406__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});
