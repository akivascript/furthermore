// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.weblog');
goog.require('cljs.core');
goog.require('typographer.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('om_tools.dom');
goog.require('furthermore.routing');
goog.require('om.core');
goog.require('furthermore.static_page');
goog.require('furthermore.utils');
goog.require('furthermore.posts');
cljs.core.enable_console_print_BANG_.call(null);
furthermore.weblog.set_status = (function furthermore$weblog$set_status(kind,type){
var kind__$1 = kind.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new","new",-2085437848),"Added",new cljs.core.Keyword(null,"update","update",1045576396),"Updated"], null));
var type__$1 = type.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"post","post",269697687),"post",new cljs.core.Keyword(null,"static","static",1214358571),"page",new cljs.core.Keyword(null,"topic","topic",-1960480691),"topic"], null));
return [cljs.core.str(kind__$1),cljs.core.str(" "),cljs.core.str(type__$1)].join('');
});
furthermore.weblog.entries = (function furthermore$weblog$entries(entry,owner){
if(typeof furthermore.weblog.t16928 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.weblog.t16928 = (function (owner,entry,entries,meta16929){
this.owner = owner;
this.entry = entry;
this.entries = entries;
this.meta16929 = meta16929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.weblog.t16928.prototype.om$core$IRender$ = true;

furthermore.weblog.t16928.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__16931 = furthermore.utils.format_timestamp.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(self__.entry));
var map__16931__$1 = ((cljs.core.seq_QMARK_.call(null,map__16931))?cljs.core.apply.call(null,cljs.core.hash_map,map__16931):map__16931);
var date = cljs.core.get.call(null,map__16931__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var time = cljs.core.get.call(null,map__16931__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return cljs.core.apply.call(null,React.DOM.div,{"className": "row entry"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-3 date"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(date),cljs.core.str(" @ "),cljs.core.str(time)].join('')],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"textAlign": "left"}, "className": "col-xs-2 status"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[furthermore.weblog.set_status.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(self__.entry),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.entry))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-5 title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var path_fn = (function (){var G__16932 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.entry) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.entry).fqn:null);
switch (G__16932) {
case "static":
return furthermore.static_page.static_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.entry)], null));

break;
case "post":
return furthermore.posts.post_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.entry)], null));

break;
default:
return "";

}
})();
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.entry)))){
return cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,path_fn)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry)],null))));
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry);
}
})()],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-2 topic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get_in.call(null,self__.entry,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"title","title",636505583)], null))],null))))],null))));
});

furthermore.weblog.t16928.prototype.om$core$IWillMount$ = true;

furthermore.weblog.t16928.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(self__.entry))){
return ajax.core.GET.call(null,[cljs.core.str("/get/topic/"),cljs.core.str(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(self__.entry))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (p1__16921_SHARP_){
return om.core.transact_BANG_.call(null,self__.entry,new cljs.core.Keyword(null,"topic","topic",-1960480691),((function (___$1){
return (function (___$2){
return p1__16921_SHARP_;
});})(___$1))
);
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (p1__16922_SHARP_){
return console.error(p1__16922_SHARP_);
});})(___$1))
], null));
} else {
return null;
}
});

furthermore.weblog.t16928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16930){
var self__ = this;
var _16930__$1 = this;
return self__.meta16929;
});

furthermore.weblog.t16928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16930,meta16929__$1){
var self__ = this;
var _16930__$1 = this;
return (new furthermore.weblog.t16928(self__.owner,self__.entry,self__.entries,meta16929__$1));
});

furthermore.weblog.t16928.cljs$lang$type = true;

furthermore.weblog.t16928.cljs$lang$ctorStr = "furthermore.weblog/t16928";

furthermore.weblog.t16928.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.weblog/t16928");
});

furthermore.weblog.__GT_t16928 = (function furthermore$weblog$entries_$___GT_t16928(owner__$1,entry__$1,entries__$1,meta16929){
return (new furthermore.weblog.t16928(owner__$1,entry__$1,entries__$1,meta16929));
});

}

return (new furthermore.weblog.t16928(owner,entry,furthermore$weblog$entries,cljs.core.PersistentArrayMap.EMPTY));
});
furthermore.weblog.updates_view = (function furthermore$weblog$updates_view(app,owner){
if(typeof furthermore.weblog.t16939 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.weblog.t16939 = (function (owner,app,updates_view,meta16940){
this.owner = owner;
this.app = app;
this.updates_view = updates_view;
this.meta16940 = meta16940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.weblog.t16939.prototype.om$core$IRender$ = true;

furthermore.weblog.t16939.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "id": "weblog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,om_tools.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-10 col-md-offset-1 entries"], null),om.core.build_all.call(null,furthermore.weblog.entries,new cljs.core.Keyword(null,"updates","updates",2013983452).cljs$core$IFn$_invoke$arity$1(self__.app)))],null))))],null))));
});

furthermore.weblog.t16939.prototype.om$core$IWillMount$ = true;

furthermore.weblog.t16939.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,"/get/weblog",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (p1__16934_SHARP_){
return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"updates","updates",2013983452),((function (___$1){
return (function (___$2){
return p1__16934_SHARP_;
});})(___$1))
);
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (p1__16935_SHARP_){
return console.error(p1__16935_SHARP_);
});})(___$1))
], null));
});

furthermore.weblog.t16939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16941){
var self__ = this;
var _16941__$1 = this;
return self__.meta16940;
});

furthermore.weblog.t16939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16941,meta16940__$1){
var self__ = this;
var _16941__$1 = this;
return (new furthermore.weblog.t16939(self__.owner,self__.app,self__.updates_view,meta16940__$1));
});

furthermore.weblog.t16939.cljs$lang$type = true;

furthermore.weblog.t16939.cljs$lang$ctorStr = "furthermore.weblog/t16939";

furthermore.weblog.t16939.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.weblog/t16939");
});

furthermore.weblog.__GT_t16939 = (function furthermore$weblog$updates_view_$___GT_t16939(owner__$1,app__$1,updates_view__$1,meta16940){
return (new furthermore.weblog.t16939(owner__$1,app__$1,updates_view__$1,meta16940));
});

}

return (new furthermore.weblog.t16939(owner,app,furthermore$weblog$updates_view,cljs.core.PersistentArrayMap.EMPTY));
});
var action__15886__auto___16944 = (function (params__15887__auto__){
if(cljs.core.map_QMARK_.call(null,params__15887__auto__)){
var map__16942 = params__15887__auto__;
var map__16942__$1 = ((cljs.core.seq_QMARK_.call(null,map__16942))?cljs.core.apply.call(null,cljs.core.hash_map,map__16942):map__16942);
return furthermore.routing.change_view.call(null,furthermore.weblog.updates_view,new cljs.core.Keyword(null,"updates-view","updates-view",-675747407));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15887__auto__)){
var vec__16943 = params__15887__auto__;
return furthermore.routing.change_view.call(null,furthermore.weblog.updates_view,new cljs.core.Keyword(null,"updates-view","updates-view",-675747407));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/updates",action__15886__auto___16944);

/**
 * @param {...*} var_args
 */
furthermore.weblog.updates_path = ((function (action__15886__auto___16944){
return (function() { 
var furthermore$weblog$updates_path__delegate = function (args__15885__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/updates",args__15885__auto__);
};
var furthermore$weblog$updates_path = function (var_args){
var args__15885__auto__ = null;
if (arguments.length > 0) {
var G__16945__i = 0, G__16945__a = new Array(arguments.length -  0);
while (G__16945__i < G__16945__a.length) {G__16945__a[G__16945__i] = arguments[G__16945__i + 0]; ++G__16945__i;}
  args__15885__auto__ = new cljs.core.IndexedSeq(G__16945__a,0);
} 
return furthermore$weblog$updates_path__delegate.call(this,args__15885__auto__);};
furthermore$weblog$updates_path.cljs$lang$maxFixedArity = 0;
furthermore$weblog$updates_path.cljs$lang$applyTo = (function (arglist__16946){
var args__15885__auto__ = cljs.core.seq(arglist__16946);
return furthermore$weblog$updates_path__delegate(args__15885__auto__);
});
furthermore$weblog$updates_path.cljs$core$IFn$_invoke$arity$variadic = furthermore$weblog$updates_path__delegate;
return furthermore$weblog$updates_path;
})()
;})(action__15886__auto___16944))
;
