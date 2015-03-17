// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.error');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om.core');
furthermore.error.get_page = (function furthermore$error$get_page(app,owner){
if(typeof furthermore.error.t16645 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.error.t16645 = (function (owner,app,get_page,meta16646){
this.owner = owner;
this.app = app;
this.get_page = get_page;
this.meta16646 = meta16646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.error.t16645.prototype.om$core$IRender$ = true;

furthermore.error.t16645.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "row"},"Not found.")],null))));
});

furthermore.error.t16645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16647){
var self__ = this;
var _16647__$1 = this;
return self__.meta16646;
});

furthermore.error.t16645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16647,meta16646__$1){
var self__ = this;
var _16647__$1 = this;
return (new furthermore.error.t16645(self__.owner,self__.app,self__.get_page,meta16646__$1));
});

furthermore.error.t16645.cljs$lang$type = true;

furthermore.error.t16645.cljs$lang$ctorStr = "furthermore.error/t16645";

furthermore.error.t16645.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.error/t16645");
});

furthermore.error.__GT_t16645 = (function furthermore$error$get_page_$___GT_t16645(owner__$1,app__$1,get_page__$1,meta16646){
return (new furthermore.error.t16645(owner__$1,app__$1,get_page__$1,meta16646));
});

}

return (new furthermore.error.t16645(owner,app,furthermore$error$get_page,cljs.core.PersistentArrayMap.EMPTY));
});
