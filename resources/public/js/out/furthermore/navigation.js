// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.navigation');
goog.require('cljs.core');
goog.require('furthermore.utils');
goog.require('furthermore.weblog');
goog.require('furthermore.topics');
goog.require('furthermore.home');
goog.require('om_tools.dom');
goog.require('om.core');
furthermore.navigation.render = (function furthermore$navigation$render(app,owner){
if(typeof furthermore.navigation.t16691 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.navigation.t16691 = (function (owner,app,render,meta16692){
this.owner = owner;
this.app = app;
this.render = render;
this.meta16692 = meta16692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.navigation.t16691.prototype.om$core$IRender$ = true;

furthermore.navigation.t16691.prototype.om$core$IRender$render$arity$1 = (function (this__10716__auto__){
var self__ = this;
var this__10716__auto____$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"data-target": "#navbar-main", "data-toggle": "collapse", "type": "button", "className": "navbar-toggle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),React.DOM.a({"href": om_tools.dom.format_opts.call(null,furthermore.home.home_path.call(null))},"WhateveR")],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-collapse collapse", "id": "navbar-main"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": om_tools.dom.format_opts.call(null,furthermore.topics.contents_path.call(null))},"Table of Contents"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": om_tools.dom.format_opts.call(null,furthermore.weblog.updates_path.call(null))},"Web Log"),cljs.core.PersistentVector.EMPTY)],null))))],null))))],null))));
});

furthermore.navigation.t16691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16693){
var self__ = this;
var _16693__$1 = this;
return self__.meta16692;
});

furthermore.navigation.t16691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16693,meta16692__$1){
var self__ = this;
var _16693__$1 = this;
return (new furthermore.navigation.t16691(self__.owner,self__.app,self__.render,meta16692__$1));
});

furthermore.navigation.t16691.cljs$lang$type = true;

furthermore.navigation.t16691.cljs$lang$ctorStr = "furthermore.navigation/t16691";

furthermore.navigation.t16691.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.navigation/t16691");
});

furthermore.navigation.__GT_t16691 = (function furthermore$navigation$render_$___GT_t16691(owner__$1,app__$1,render__$1,meta16692){
return (new furthermore.navigation.t16691(owner__$1,app__$1,render__$1,meta16692));
});

}

return (new furthermore.navigation.t16691(owner,app,furthermore$navigation$render,null));
});
