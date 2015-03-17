// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.core');
goog.require('cljs.core');
goog.require('furthermore.topics');
goog.require('secretary.core');
goog.require('furthermore.posts');
goog.require('furthermore.weblog');
goog.require('goog.history.EventType');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('furthermore.home');
goog.require('goog.History');
goog.require('goog.events');
goog.require('furthermore.routing');
goog.require('furthermore.static_page');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
if(typeof furthermore.core.app_state !== 'undefined'){
} else {
furthermore.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"topics","topics",625768208),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null], null),new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"weblog","weblog",888390675),cljs.core.PersistentVector.EMPTY], null));
}
furthermore.core.application = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("page-content")], null);
furthermore.core.nav_bar = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("nav-bar")], null);
var h_16622 = (new goog.History());
goog.events.listen(h_16622,goog.history.EventType.NAVIGATE,((function (h_16622){
return (function (p1__16620_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__16620_SHARP_.token);
});})(h_16622))
);

var G__16621_16623 = h_16622;
G__16621_16623.setEnabled(true);

furthermore.core.nav_view = (function furthermore$core$nav_view(app,owner){
if(typeof furthermore.core.t16627 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.core.t16627 = (function (owner,app,nav_view,meta16628){
this.owner = owner;
this.app = app;
this.nav_view = nav_view;
this.meta16628 = meta16628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.core.t16627.prototype.om$core$IRender$ = true;

furthermore.core.t16627.prototype.om$core$IRender$render$arity$1 = (function (this__10716__auto__){
var self__ = this;
var this__10716__auto____$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"data-target": "#navbar-main", "data-toggle": "collapse", "type": "button", "className": "navbar-toggle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),React.DOM.a({"className": "navbar-brand", "href": om_tools.dom.format_opts.call(null,furthermore.home.home_path.call(null))},"WhaTEveR")],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-collapse collapse", "id": "navbar-main"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": om_tools.dom.format_opts.call(null,furthermore.topics.contents_path.call(null))},"Table of Contents"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": om_tools.dom.format_opts.call(null,furthermore.weblog.updates_path.call(null))},"Updates"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": om_tools.dom.format_opts.call(null,furthermore.static_page.static_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"about"], null)))},"About"),cljs.core.PersistentVector.EMPTY)],null))))],null))))],null))));
});

furthermore.core.t16627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16629){
var self__ = this;
var _16629__$1 = this;
return self__.meta16628;
});

furthermore.core.t16627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16629,meta16628__$1){
var self__ = this;
var _16629__$1 = this;
return (new furthermore.core.t16627(self__.owner,self__.app,self__.nav_view,meta16628__$1));
});

furthermore.core.t16627.cljs$lang$type = true;

furthermore.core.t16627.cljs$lang$ctorStr = "furthermore.core/t16627";

furthermore.core.t16627.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.core/t16627");
});

furthermore.core.__GT_t16627 = (function furthermore$core$nav_view_$___GT_t16627(owner__$1,app__$1,nav_view__$1,meta16628){
return (new furthermore.core.t16627(owner__$1,app__$1,nav_view__$1,meta16628));
});

}

return (new furthermore.core.t16627(owner,app,furthermore$core$nav_view,null));
});
om.core.root.call(null,(function (app,owner){
if(typeof furthermore.core.t16630 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.core.t16630 = (function (owner,app,meta16631){
this.owner = owner;
this.app = app;
this.meta16631 = meta16631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.core.t16630.prototype.om$core$IRender$ = true;

furthermore.core.t16630.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,furthermore.core.nav_view,self__.app);
});

furthermore.core.t16630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16632){
var self__ = this;
var _16632__$1 = this;
return self__.meta16631;
});

furthermore.core.t16630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16632,meta16631__$1){
var self__ = this;
var _16632__$1 = this;
return (new furthermore.core.t16630(self__.owner,self__.app,meta16631__$1));
});

furthermore.core.t16630.cljs$lang$type = true;

furthermore.core.t16630.cljs$lang$ctorStr = "furthermore.core/t16630";

furthermore.core.t16630.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.core/t16630");
});

furthermore.core.__GT_t16630 = (function furthermore$core$__GT_t16630(owner__$1,app__$1,meta16631){
return (new furthermore.core.t16630(owner__$1,app__$1,meta16631));
});

}

return (new furthermore.core.t16630(owner,app,cljs.core.PersistentArrayMap.EMPTY));
}),furthermore.core.app_state,furthermore.core.nav_bar);
om.core.root.call(null,(function (app,owner){
if(typeof furthermore.core.t16633 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.core.t16633 = (function (owner,app,meta16634){
this.owner = owner;
this.app = app;
this.meta16634 = meta16634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.core.t16633.prototype.om$core$IRenderState$ = true;

furthermore.core.t16633.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16636){
var self__ = this;
var map__16637 = p__16636;
var map__16637__$1 = ((cljs.core.seq_QMARK_.call(null,map__16637))?cljs.core.apply.call(null,cljs.core.hash_map,map__16637):map__16637);
var opts = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var react_key = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"react-key","react-key",1337881348));
var view_init_state = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"view-init-state","view-init-state",-1113096971));
var view = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$1 = this;
return om.core.build.call(null,view,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),view_init_state,new cljs.core.Keyword(null,"react-key","react-key",1337881348),react_key,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null));
});

furthermore.core.t16633.prototype.om$core$IDidMount$ = true;

furthermore.core.t16633.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return furthermore.routing.consume_events.call(null,self__.owner,new cljs.core.Keyword(null,"change-view","change-view",-1206699831),((function (___$1){
return (function (p__16638){
var map__16639 = p__16638;
var map__16639__$1 = ((cljs.core.seq_QMARK_.call(null,map__16639))?cljs.core.apply.call(null,cljs.core.hash_map,map__16639):map__16639);
var data = cljs.core.get.call(null,map__16639__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var view_name = cljs.core.get.call(null,map__16639__$1,new cljs.core.Keyword(null,"view-name","view-name",719214930));
var view_init_state = cljs.core.get.call(null,map__16639__$1,new cljs.core.Keyword(null,"view-init-state","view-init-state",-1113096971));
var view = cljs.core.get.call(null,map__16639__$1,new cljs.core.Keyword(null,"view","view",1247994814));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),view);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view-init-state","view-init-state",-1113096971),view_init_state);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"react-key","react-key",1337881348),view_name);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"opts","opts",155075701),data);
});})(___$1))
);
});

furthermore.core.t16633.prototype.om$core$IInitState$ = true;

furthermore.core.t16633.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),furthermore.home.home_view], null);
});

furthermore.core.t16633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16635){
var self__ = this;
var _16635__$1 = this;
return self__.meta16634;
});

furthermore.core.t16633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16635,meta16634__$1){
var self__ = this;
var _16635__$1 = this;
return (new furthermore.core.t16633(self__.owner,self__.app,meta16634__$1));
});

furthermore.core.t16633.cljs$lang$type = true;

furthermore.core.t16633.cljs$lang$ctorStr = "furthermore.core/t16633";

furthermore.core.t16633.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.core/t16633");
});

furthermore.core.__GT_t16633 = (function furthermore$core$__GT_t16633(owner__$1,app__$1,meta16634){
return (new furthermore.core.t16633(owner__$1,app__$1,meta16634));
});

}

return (new furthermore.core.t16633(owner,app,cljs.core.PersistentArrayMap.EMPTY));
}),furthermore.core.app_state,cljs.core.assoc.call(null,furthermore.core.application,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-chan","sub-chan",-2012438215),furthermore.routing.sub_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),furthermore.routing.pub_chan], null)));
