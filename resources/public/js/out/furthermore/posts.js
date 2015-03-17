// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.posts');
goog.require('cljs.core');
goog.require('typographer.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('om_tools.dom');
goog.require('furthermore.routing');
goog.require('cljs_time.local');
goog.require('om.core');
goog.require('furthermore.utils');
cljs.core.enable_console_print_BANG_.call(null);
marked.setOptions(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"smartypants","smartypants",-1478496076),true], null)));
furthermore.posts.follow_up = (function furthermore$posts$follow_up(content,owner){
if(typeof furthermore.posts.t16700 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.posts.t16700 = (function (owner,content,follow_up,meta16701){
this.owner = owner;
this.content = content;
this.follow_up = follow_up;
this.meta16701 = meta16701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.posts.t16700.prototype.om$core$IRender$ = true;

furthermore.posts.t16700.prototype.om$core$IRender$render$arity$1 = (function (this__10716__auto__){
var self__ = this;
var this__10716__auto____$1 = this;
var map__16703 = furthermore.utils.format_timestamp.call(null,new cljs.core.Keyword(null,"last-updated","last-updated",1881380161).cljs$core$IFn$_invoke$arity$1(self__.content));
var map__16703__$1 = ((cljs.core.seq_QMARK_.call(null,map__16703))?cljs.core.apply.call(null,cljs.core.hash_map,map__16703):map__16703);
var time = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var body = marked(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.content));
return cljs.core.apply.call(null,React.DOM.div,{"className": "follow-up"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[null,React.DOM.div({"dangerouslySetInnerHTML": {"__html": om_tools.dom.format_opts.call(null,body)}, "className": "body"}),cljs.core.apply.call(null,React.DOM.div,{"className": "footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small text-left stuff"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(date),cljs.core.str(" @ "),cljs.core.str(time)].join('')],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "small text-right date"})],null))))],null))))],null))))],null))));
});

furthermore.posts.t16700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16702){
var self__ = this;
var _16702__$1 = this;
return self__.meta16701;
});

furthermore.posts.t16700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16702,meta16701__$1){
var self__ = this;
var _16702__$1 = this;
return (new furthermore.posts.t16700(self__.owner,self__.content,self__.follow_up,meta16701__$1));
});

furthermore.posts.t16700.cljs$lang$type = true;

furthermore.posts.t16700.cljs$lang$ctorStr = "furthermore.posts/t16700";

furthermore.posts.t16700.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.posts/t16700");
});

furthermore.posts.__GT_t16700 = (function furthermore$posts$follow_up_$___GT_t16700(owner__$1,content__$1,follow_up__$1,meta16701){
return (new furthermore.posts.t16700(owner__$1,content__$1,follow_up__$1,meta16701));
});

}

return (new furthermore.posts.t16700(owner,content,furthermore$posts$follow_up,null));
});
furthermore.posts.follow_up_view = (function furthermore$posts$follow_up_view(content,owner){
if(typeof furthermore.posts.t16712 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.posts.t16712 = (function (owner,content,follow_up_view,meta16713){
this.owner = owner;
this.content = content;
this.follow_up_view = follow_up_view;
this.meta16713 = meta16713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.posts.t16712.prototype.om$core$IRenderState$ = true;

furthermore.posts.t16712.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16715){
var self__ = this;
var map__16716 = p__16715;
var map__16716__$1 = ((cljs.core.seq_QMARK_.call(null,map__16716))?cljs.core.apply.call(null,cljs.core.hash_map,map__16716):map__16716);
var opts = cljs.core.get.call(null,map__16716__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(opts))){
var follow_ups = cljs.core.filter.call(null,((function (___$1,map__16716,map__16716__$1,opts){
return (function (p1__16706_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"follow-up","follow-up",-533605152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__16706_SHARP_));
});})(___$1,map__16716,map__16716__$1,opts))
,new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(opts));
return om_tools.dom.element.call(null,React.DOM.div,React.DOM.div({"className": "glyphicon glyphicon-triangle-bottom arrow"}),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,furthermore.posts.follow_up,follow_ups)],null)));
} else {
return null;
}
});

furthermore.posts.t16712.prototype.om$core$IWillMount$ = true;

furthermore.posts.t16712.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,[cljs.core.str("/get/post/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(self__.content)),cljs.core.str("/refs")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (p1__16704_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refs","refs",-1560051448),p1__16704_SHARP_], null));
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (p1__16705_SHARP_){
return console.error(p1__16705_SHARP_);
});})(___$1))
], null));
});

furthermore.posts.t16712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16714){
var self__ = this;
var _16714__$1 = this;
return self__.meta16713;
});

furthermore.posts.t16712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16714,meta16713__$1){
var self__ = this;
var _16714__$1 = this;
return (new furthermore.posts.t16712(self__.owner,self__.content,self__.follow_up_view,meta16713__$1));
});

furthermore.posts.t16712.cljs$lang$type = true;

furthermore.posts.t16712.cljs$lang$ctorStr = "furthermore.posts/t16712";

furthermore.posts.t16712.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.posts/t16712");
});

furthermore.posts.__GT_t16712 = (function furthermore$posts$follow_up_view_$___GT_t16712(owner__$1,content__$1,follow_up_view__$1,meta16713){
return (new furthermore.posts.t16712(owner__$1,content__$1,follow_up_view__$1,meta16713));
});

}

return (new furthermore.posts.t16712(owner,content,furthermore$posts$follow_up_view,cljs.core.PersistentArrayMap.EMPTY));
});
furthermore.posts.post = (function furthermore$posts$post(post__$1,owner,p__16719){
var map__16727 = p__16719;
var map__16727__$1 = ((cljs.core.seq_QMARK_.call(null,map__16727))?cljs.core.apply.call(null,cljs.core.hash_map,map__16727):map__16727);
var opts = map__16727__$1;
var content = cljs.core.get.call(null,map__16727__$1,new cljs.core.Keyword(null,"content","content",15833224));
if(typeof furthermore.posts.t16728 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.posts.t16728 = (function (content,opts,map__16727,p__16719,owner,post,meta16729){
this.content = content;
this.opts = opts;
this.map__16727 = map__16727;
this.p__16719 = p__16719;
this.owner = owner;
this.post = post;
this.meta16729 = meta16729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.posts.t16728.prototype.om$core$IRenderState$ = true;

furthermore.posts.t16728.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16727,map__16727__$1,opts,content){
return (function (_,p__16731){
var self__ = this;
var map__16732 = p__16731;
var map__16732__$1 = ((cljs.core.seq_QMARK_.call(null,map__16732))?cljs.core.apply.call(null,cljs.core.hash_map,map__16732):map__16732);
var opts__$1 = cljs.core.get.call(null,map__16732__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var ___$1 = this;
var map__16733 = furthermore.utils.format_timestamp.call(null,new cljs.core.Keyword(null,"last-updated","last-updated",1881380161).cljs$core$IFn$_invoke$arity$1(self__.content));
var map__16733__$1 = ((cljs.core.seq_QMARK_.call(null,map__16733))?cljs.core.apply.call(null,cljs.core.hash_map,map__16733):map__16733);
var time = cljs.core.get.call(null,map__16733__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.call(null,map__16733__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var body = marked(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.content));
var topic_title = (function (){var temp__4406__auto__ = cljs.core.get_in.call(null,opts__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__4406__auto__)){
var t = temp__4406__auto__;
return typographer.core.smarten.call(null,t);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "post-topic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[topic_title],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "post"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.div,{"className": "title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[typographer.core.smarten.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.content))],null)))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.div,{"className": "subtitle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[typographer.core.smarten.call(null,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363).cljs$core$IFn$_invoke$arity$1(self__.content))],null)))),cljs.core.PersistentVector.EMPTY),null,React.DOM.div({"dangerouslySetInnerHTML": {"__html": om_tools.dom.format_opts.call(null,body)}, "className": "body"}),cljs.core.apply.call(null,React.DOM.div,{"className": "footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "small text-left stuff"})],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small text-right date"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(date),cljs.core.str(" @ "),cljs.core.str(time)].join('')],null))))],null))))],null))))],null))))],null)))),om.core.build.call(null,furthermore.posts.follow_up_view,self__.content)],null))))],null))));
});})(map__16727,map__16727__$1,opts,content))
;

furthermore.posts.t16728.prototype.om$core$IWillMount$ = true;

furthermore.posts.t16728.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__16727,map__16727__$1,opts,content){
return (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,[cljs.core.str("/get/topic/"),cljs.core.str(cljs.core.get_in.call(null,self__.content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"_id","_id",-789960287)], null)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1,map__16727,map__16727__$1,opts,content){
return (function (p1__16717_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic","topic",-1960480691),p1__16717_SHARP_], null));
});})(___$1,map__16727,map__16727__$1,opts,content))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1,map__16727,map__16727__$1,opts,content){
return (function (p1__16718_SHARP_){
return console.error(p1__16718_SHARP_);
});})(___$1,map__16727,map__16727__$1,opts,content))
], null));
});})(map__16727,map__16727__$1,opts,content))
;

furthermore.posts.t16728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16727,map__16727__$1,opts,content){
return (function (_16730){
var self__ = this;
var _16730__$1 = this;
return self__.meta16729;
});})(map__16727,map__16727__$1,opts,content))
;

furthermore.posts.t16728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16727,map__16727__$1,opts,content){
return (function (_16730,meta16729__$1){
var self__ = this;
var _16730__$1 = this;
return (new furthermore.posts.t16728(self__.content,self__.opts,self__.map__16727,self__.p__16719,self__.owner,self__.post,meta16729__$1));
});})(map__16727,map__16727__$1,opts,content))
;

furthermore.posts.t16728.cljs$lang$type = true;

furthermore.posts.t16728.cljs$lang$ctorStr = "furthermore.posts/t16728";

furthermore.posts.t16728.cljs$lang$ctorPrWriter = ((function (map__16727,map__16727__$1,opts,content){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.posts/t16728");
});})(map__16727,map__16727__$1,opts,content))
;

furthermore.posts.__GT_t16728 = ((function (map__16727,map__16727__$1,opts,content){
return (function furthermore$posts$post_$___GT_t16728(content__$1,opts__$1,map__16727__$2,p__16719__$1,owner__$1,post__$2,meta16729){
return (new furthermore.posts.t16728(content__$1,opts__$1,map__16727__$2,p__16719__$1,owner__$1,post__$2,meta16729));
});})(map__16727,map__16727__$1,opts,content))
;

}

return (new furthermore.posts.t16728(content,opts,map__16727__$1,p__16719,owner,post__$1,cljs.core.PersistentArrayMap.EMPTY));
});
furthermore.posts.post_view = (function furthermore$posts$post_view(app,owner,p__16736){
var map__16743 = p__16736;
var map__16743__$1 = ((cljs.core.seq_QMARK_.call(null,map__16743))?cljs.core.apply.call(null,cljs.core.hash_map,map__16743):map__16743);
var opts = map__16743__$1;
var url = cljs.core.get.call(null,map__16743__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(typeof furthermore.posts.t16744 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.posts.t16744 = (function (url,opts,map__16743,p__16736,owner,app,post_view,meta16745){
this.url = url;
this.opts = opts;
this.map__16743 = map__16743;
this.p__16736 = p__16736;
this.owner = owner;
this.app = app;
this.post_view = post_view;
this.meta16745 = meta16745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.posts.t16744.prototype.om$core$IRenderState$ = true;

furthermore.posts.t16744.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16743,map__16743__$1,opts,url){
return (function (_,p__16747){
var self__ = this;
var map__16748 = p__16747;
var map__16748__$1 = ((cljs.core.seq_QMARK_.call(null,map__16748))?cljs.core.apply.call(null,cljs.core.hash_map,map__16748):map__16748);
var opts__$1 = cljs.core.get.call(null,map__16748__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var ___$1 = this;
if((opts__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "id": "post"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,furthermore.posts.post,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__$1], null))],null))))],null))));
}
});})(map__16743,map__16743__$1,opts,url))
;

furthermore.posts.t16744.prototype.om$core$IWillMount$ = true;

furthermore.posts.t16744.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__16743,map__16743__$1,opts,url){
return (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,[cljs.core.str("/get/post/url/"),cljs.core.str(self__.url)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1,map__16743,map__16743__$1,opts,url){
return (function (p1__16734_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),p1__16734_SHARP_], null));
});})(___$1,map__16743,map__16743__$1,opts,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1,map__16743,map__16743__$1,opts,url){
return (function (p1__16735_SHARP_){
return console.error(p1__16735_SHARP_);
});})(___$1,map__16743,map__16743__$1,opts,url))
], null));
});})(map__16743,map__16743__$1,opts,url))
;

furthermore.posts.t16744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16743,map__16743__$1,opts,url){
return (function (_16746){
var self__ = this;
var _16746__$1 = this;
return self__.meta16745;
});})(map__16743,map__16743__$1,opts,url))
;

furthermore.posts.t16744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16743,map__16743__$1,opts,url){
return (function (_16746,meta16745__$1){
var self__ = this;
var _16746__$1 = this;
return (new furthermore.posts.t16744(self__.url,self__.opts,self__.map__16743,self__.p__16736,self__.owner,self__.app,self__.post_view,meta16745__$1));
});})(map__16743,map__16743__$1,opts,url))
;

furthermore.posts.t16744.cljs$lang$type = true;

furthermore.posts.t16744.cljs$lang$ctorStr = "furthermore.posts/t16744";

furthermore.posts.t16744.cljs$lang$ctorPrWriter = ((function (map__16743,map__16743__$1,opts,url){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.posts/t16744");
});})(map__16743,map__16743__$1,opts,url))
;

furthermore.posts.__GT_t16744 = ((function (map__16743,map__16743__$1,opts,url){
return (function furthermore$posts$post_view_$___GT_t16744(url__$1,opts__$1,map__16743__$2,p__16736__$1,owner__$1,app__$1,post_view__$1,meta16745){
return (new furthermore.posts.t16744(url__$1,opts__$1,map__16743__$2,p__16736__$1,owner__$1,app__$1,post_view__$1,meta16745));
});})(map__16743,map__16743__$1,opts,url))
;

}

return (new furthermore.posts.t16744(url,opts,map__16743__$1,p__16736,owner,app,furthermore$posts$post_view,cljs.core.PersistentArrayMap.EMPTY));
});
var action__15886__auto___16751 = (function (params__15887__auto__){
if(cljs.core.map_QMARK_.call(null,params__15887__auto__)){
var map__16749 = params__15887__auto__;
var map__16749__$1 = ((cljs.core.seq_QMARK_.call(null,map__16749))?cljs.core.apply.call(null,cljs.core.hash_map,map__16749):map__16749);
var url = cljs.core.get.call(null,map__16749__$1,new cljs.core.Keyword(null,"url","url",276297046));
return furthermore.routing.change_view.call(null,furthermore.posts.post_view,new cljs.core.Keyword(null,"post-view","post-view",877569445),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15887__auto__)){
var vec__16750 = params__15887__auto__;
var url = cljs.core.nth.call(null,vec__16750,(0),null);
return furthermore.routing.change_view.call(null,furthermore.posts.post_view,new cljs.core.Keyword(null,"post-view","post-view",877569445),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/post/:url",action__15886__auto___16751);

/**
 * @param {...*} var_args
 */
furthermore.posts.post_path = ((function (action__15886__auto___16751){
return (function() { 
var furthermore$posts$post_path__delegate = function (args__15885__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/post/:url",args__15885__auto__);
};
var furthermore$posts$post_path = function (var_args){
var args__15885__auto__ = null;
if (arguments.length > 0) {
var G__16752__i = 0, G__16752__a = new Array(arguments.length -  0);
while (G__16752__i < G__16752__a.length) {G__16752__a[G__16752__i] = arguments[G__16752__i + 0]; ++G__16752__i;}
  args__15885__auto__ = new cljs.core.IndexedSeq(G__16752__a,0);
} 
return furthermore$posts$post_path__delegate.call(this,args__15885__auto__);};
furthermore$posts$post_path.cljs$lang$maxFixedArity = 0;
furthermore$posts$post_path.cljs$lang$applyTo = (function (arglist__16753){
var args__15885__auto__ = cljs.core.seq(arglist__16753);
return furthermore$posts$post_path__delegate(args__15885__auto__);
});
furthermore$posts$post_path.cljs$core$IFn$_invoke$arity$variadic = furthermore$posts$post_path__delegate;
return furthermore$posts$post_path;
})()
;})(action__15886__auto___16751))
;
