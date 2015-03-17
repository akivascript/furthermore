// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.static_page');
goog.require('cljs.core');
goog.require('typographer.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('om_tools.dom');
goog.require('furthermore.routing');
goog.require('om.core');
marked.setOptions(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"smartypants","smartypants",-1478496076),true], null)));
furthermore.static_page.static_view = (function furthermore$static_page$static_view(app,owner,p__16819){
var map__16826 = p__16819;
var map__16826__$1 = ((cljs.core.seq_QMARK_.call(null,map__16826))?cljs.core.apply.call(null,cljs.core.hash_map,map__16826):map__16826);
var opts = map__16826__$1;
var url = cljs.core.get.call(null,map__16826__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(typeof furthermore.static_page.t16827 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.static_page.t16827 = (function (url,opts,map__16826,p__16819,owner,app,static_view,meta16828){
this.url = url;
this.opts = opts;
this.map__16826 = map__16826;
this.p__16819 = p__16819;
this.owner = owner;
this.app = app;
this.static_view = static_view;
this.meta16828 = meta16828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.static_page.t16827.prototype.om$core$IRenderState$ = true;

furthermore.static_page.t16827.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16826,map__16826__$1,opts,url){
return (function (_,p__16830){
var self__ = this;
var map__16831 = p__16830;
var map__16831__$1 = ((cljs.core.seq_QMARK_.call(null,map__16831))?cljs.core.apply.call(null,cljs.core.hash_map,map__16831):map__16831);
var opts__$1 = cljs.core.get.call(null,map__16831__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var ___$1 = this;
if((opts__$1 == null)){
return null;
} else {
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(opts__$1);
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "id": "static"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-10 col-sm-offset-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[typographer.core.smarten.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(content))],null)))),React.DOM.div({"dangerouslySetInnerHTML": {"__html": om_tools.dom.format_opts.call(null,marked(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(content)))}, "className": "body"})],null))))],null))));
}
});})(map__16826,map__16826__$1,opts,url))
;

furthermore.static_page.t16827.prototype.om$core$IWillMount$ = true;

furthermore.static_page.t16827.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__16826,map__16826__$1,opts,url){
return (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,[cljs.core.str("/get/page/"),cljs.core.str(self__.url)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1,map__16826,map__16826__$1,opts,url){
return (function (p1__16817_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),p1__16817_SHARP_], null));
});})(___$1,map__16826,map__16826__$1,opts,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1,map__16826,map__16826__$1,opts,url){
return (function (p1__16818_SHARP_){
return console.error(p1__16818_SHARP_);
});})(___$1,map__16826,map__16826__$1,opts,url))
], null));
});})(map__16826,map__16826__$1,opts,url))
;

furthermore.static_page.t16827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16826,map__16826__$1,opts,url){
return (function (_16829){
var self__ = this;
var _16829__$1 = this;
return self__.meta16828;
});})(map__16826,map__16826__$1,opts,url))
;

furthermore.static_page.t16827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16826,map__16826__$1,opts,url){
return (function (_16829,meta16828__$1){
var self__ = this;
var _16829__$1 = this;
return (new furthermore.static_page.t16827(self__.url,self__.opts,self__.map__16826,self__.p__16819,self__.owner,self__.app,self__.static_view,meta16828__$1));
});})(map__16826,map__16826__$1,opts,url))
;

furthermore.static_page.t16827.cljs$lang$type = true;

furthermore.static_page.t16827.cljs$lang$ctorStr = "furthermore.static-page/t16827";

furthermore.static_page.t16827.cljs$lang$ctorPrWriter = ((function (map__16826,map__16826__$1,opts,url){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.static-page/t16827");
});})(map__16826,map__16826__$1,opts,url))
;

furthermore.static_page.__GT_t16827 = ((function (map__16826,map__16826__$1,opts,url){
return (function furthermore$static_page$static_view_$___GT_t16827(url__$1,opts__$1,map__16826__$2,p__16819__$1,owner__$1,app__$1,static_view__$1,meta16828){
return (new furthermore.static_page.t16827(url__$1,opts__$1,map__16826__$2,p__16819__$1,owner__$1,app__$1,static_view__$1,meta16828));
});})(map__16826,map__16826__$1,opts,url))
;

}

return (new furthermore.static_page.t16827(url,opts,map__16826__$1,p__16819,owner,app,furthermore$static_page$static_view,cljs.core.PersistentArrayMap.EMPTY));
});
var action__15886__auto___16834 = (function (params__15887__auto__){
if(cljs.core.map_QMARK_.call(null,params__15887__auto__)){
var map__16832 = params__15887__auto__;
var map__16832__$1 = ((cljs.core.seq_QMARK_.call(null,map__16832))?cljs.core.apply.call(null,cljs.core.hash_map,map__16832):map__16832);
var url = cljs.core.get.call(null,map__16832__$1,new cljs.core.Keyword(null,"url","url",276297046));
return furthermore.routing.change_view.call(null,furthermore.static_page.static_view,new cljs.core.Keyword(null,"static-view","static-view",-941180857),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15887__auto__)){
var vec__16833 = params__15887__auto__;
var url = cljs.core.nth.call(null,vec__16833,(0),null);
return furthermore.routing.change_view.call(null,furthermore.static_page.static_view,new cljs.core.Keyword(null,"static-view","static-view",-941180857),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/page/:url",action__15886__auto___16834);

/**
 * @param {...*} var_args
 */
furthermore.static_page.static_path = ((function (action__15886__auto___16834){
return (function() { 
var furthermore$static_page$static_path__delegate = function (args__15885__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/page/:url",args__15885__auto__);
};
var furthermore$static_page$static_path = function (var_args){
var args__15885__auto__ = null;
if (arguments.length > 0) {
var G__16835__i = 0, G__16835__a = new Array(arguments.length -  0);
while (G__16835__i < G__16835__a.length) {G__16835__a[G__16835__i] = arguments[G__16835__i + 0]; ++G__16835__i;}
  args__15885__auto__ = new cljs.core.IndexedSeq(G__16835__a,0);
} 
return furthermore$static_page$static_path__delegate.call(this,args__15885__auto__);};
furthermore$static_page$static_path.cljs$lang$maxFixedArity = 0;
furthermore$static_page$static_path.cljs$lang$applyTo = (function (arglist__16836){
var args__15885__auto__ = cljs.core.seq(arglist__16836);
return furthermore$static_page$static_path__delegate(args__15885__auto__);
});
furthermore$static_page$static_path.cljs$core$IFn$_invoke$arity$variadic = furthermore$static_page$static_path__delegate;
return furthermore$static_page$static_path;
})()
;})(action__15886__auto___16834))
;
