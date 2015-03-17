// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.home');
goog.require('cljs.core');
goog.require('typographer.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('furthermore.posts');
goog.require('om_tools.dom');
goog.require('furthermore.routing');
goog.require('om.core');
goog.require('furthermore.utils');
cljs.core.enable_console_print_BANG_.call(null);
marked.setOptions(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"smartypants","smartypants",-1478496076),true], null)));
furthermore.home.post_view = (function furthermore$home$post_view(post,owner){
if(typeof furthermore.home.t16656 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.home.t16656 = (function (owner,post,post_view,meta16657){
this.owner = owner;
this.post = post;
this.post_view = post_view;
this.meta16657 = meta16657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.home.t16656.prototype.om$core$IRender$ = true;

furthermore.home.t16656.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__16659 = furthermore.utils.format_timestamp.call(null,new cljs.core.Keyword(null,"created-on","created-on",-1211780919).cljs$core$IFn$_invoke$arity$1(self__.post));
var map__16659__$1 = ((cljs.core.seq_QMARK_.call(null,map__16659))?cljs.core.apply.call(null,cljs.core.hash_map,map__16659):map__16659);
var time = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var body = marked(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.post));
var topic_title = (function (){var temp__4406__auto__ = cljs.core.get_in.call(null,self__.post,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__4406__auto__)){
var t = temp__4406__auto__;
return typographer.core.smarten.call(null,t);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.DOM.div,{"className": "post"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,furthermore.posts.post_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.post)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[typographer.core.smarten.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.post))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "subtitle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[typographer.core.smarten.call(null,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363).cljs$core$IFn$_invoke$arity$1(self__.post))],null)))),null,React.DOM.div({"dangerouslySetInnerHTML": {"__html": om_tools.dom.format_opts.call(null,body)}, "className": "body"}),cljs.core.apply.call(null,React.DOM.div,{"className": "footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "small text-left stuff"})],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small text-right date"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,["Filed under ",cljs.core.apply.call(null,React.DOM.span,{"href": om_tools.dom.format_opts.call(null,furthermore.posts.post_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.post)], null))), "className": "topic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[topic_title],null)))),React.DOM.br(null),[cljs.core.str(date),cljs.core.str(" @ "),cljs.core.str(time)].join('')],null))))],null))))],null))))],null))))],null))));
});

furthermore.home.t16656.prototype.om$core$IWillMount$ = true;

furthermore.home.t16656.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,[cljs.core.str("/get/topic/"),cljs.core.str(cljs.core.get_in.call(null,self__.post,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"_id","_id",-789960287)], null)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (p1__16650_SHARP_){
return om.core.transact_BANG_.call(null,self__.post,new cljs.core.Keyword(null,"topic","topic",-1960480691),((function (___$1){
return (function (___$2){
return p1__16650_SHARP_;
});})(___$1))
);
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (p1__16651_SHARP_){
return console.error(p1__16651_SHARP_);
});})(___$1))
], null));
});

furthermore.home.t16656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16658){
var self__ = this;
var _16658__$1 = this;
return self__.meta16657;
});

furthermore.home.t16656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16658,meta16657__$1){
var self__ = this;
var _16658__$1 = this;
return (new furthermore.home.t16656(self__.owner,self__.post,self__.post_view,meta16657__$1));
});

furthermore.home.t16656.cljs$lang$type = true;

furthermore.home.t16656.cljs$lang$ctorStr = "furthermore.home/t16656";

furthermore.home.t16656.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.home/t16656");
});

furthermore.home.__GT_t16656 = (function furthermore$home$post_view_$___GT_t16656(owner__$1,post__$1,post_view__$1,meta16657){
return (new furthermore.home.t16656(owner__$1,post__$1,post_view__$1,meta16657));
});

}

return (new furthermore.home.t16656(owner,post,furthermore$home$post_view,cljs.core.PersistentArrayMap.EMPTY));
});
furthermore.home.follow_up_view = (function furthermore$home$follow_up_view(post,owner){
if(typeof furthermore.home.t16666 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.home.t16666 = (function (owner,post,follow_up_view,meta16667){
this.owner = owner;
this.post = post;
this.follow_up_view = follow_up_view;
this.meta16667 = meta16667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.home.t16666.prototype.om$core$IRender$ = true;

furthermore.home.t16666.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__16669 = furthermore.utils.format_timestamp.call(null,new cljs.core.Keyword(null,"created-on","created-on",-1211780919).cljs$core$IFn$_invoke$arity$1(self__.post));
var map__16669__$1 = ((cljs.core.seq_QMARK_.call(null,map__16669))?cljs.core.apply.call(null,cljs.core.hash_map,map__16669):map__16669);
var time = cljs.core.get.call(null,map__16669__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.call(null,map__16669__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var body = marked(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.post));
var parent_title = (function (){var temp__4406__auto__ = cljs.core.get_in.call(null,self__.post,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__4406__auto__)){
var t = temp__4406__auto__;
return typographer.core.smarten.call(null,t);
} else {
return null;
}
})();
var parent_url = cljs.core.get_in.call(null,self__.post,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"url","url",276297046)], null));
return cljs.core.apply.call(null,React.DOM.div,{"className": "follow-up"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[null,React.DOM.div({"dangerouslySetInnerHTML": {"__html": om_tools.dom.format_opts.call(null,body)}, "className": "body"}),cljs.core.apply.call(null,React.DOM.div,{"className": "footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "small text-left stuff"})],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-6"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small text-right date"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,["A follow-up to ",cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,furthermore.posts.post_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),parent_url], null))), "className": "parent"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[parent_title],null)))),React.DOM.br(null),[cljs.core.str(date),cljs.core.str(" @ "),cljs.core.str(time)].join('')],null))))],null))))],null))))],null))))],null))));
});

furthermore.home.t16666.prototype.om$core$IWillMount$ = true;

furthermore.home.t16666.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,[cljs.core.str("/get/post/id/"),cljs.core.str(cljs.core.get_in.call(null,self__.post,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"_id","_id",-789960287)], null)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (p1__16660_SHARP_){
return om.core.transact_BANG_.call(null,self__.post,new cljs.core.Keyword(null,"parent","parent",-878878779),((function (___$1){
return (function (___$2){
return p1__16660_SHARP_;
});})(___$1))
);
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (p1__16661_SHARP_){
return console.error(p1__16661_SHARP_);
});})(___$1))
], null));
});

furthermore.home.t16666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16668){
var self__ = this;
var _16668__$1 = this;
return self__.meta16667;
});

furthermore.home.t16666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16668,meta16667__$1){
var self__ = this;
var _16668__$1 = this;
return (new furthermore.home.t16666(self__.owner,self__.post,self__.follow_up_view,meta16667__$1));
});

furthermore.home.t16666.cljs$lang$type = true;

furthermore.home.t16666.cljs$lang$ctorStr = "furthermore.home/t16666";

furthermore.home.t16666.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.home/t16666");
});

furthermore.home.__GT_t16666 = (function furthermore$home$follow_up_view_$___GT_t16666(owner__$1,post__$1,follow_up_view__$1,meta16667){
return (new furthermore.home.t16666(owner__$1,post__$1,follow_up_view__$1,meta16667));
});

}

return (new furthermore.home.t16666(owner,post,furthermore$home$follow_up_view,cljs.core.PersistentArrayMap.EMPTY));
});
furthermore.home.post_dispatch = (function furthermore$home$post_dispatch(post,owner){
var G__16671 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(post) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(post).fqn:null);
switch (G__16671) {
case "follow-up":
return furthermore.home.follow_up_view.call(null,post,owner);

break;
case "post":
return furthermore.home.post_view.call(null,post,owner);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(post))].join('')));

}
});
furthermore.home.home_view = (function furthermore$home$home_view(app,owner){
if(typeof furthermore.home.t16678 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.home.t16678 = (function (owner,app,home_view,meta16679){
this.owner = owner;
this.app = app;
this.home_view = home_view;
this.meta16679 = meta16679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.home.t16678.prototype.om$core$IRender$ = true;

furthermore.home.t16678.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "id": "index"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 col-sm-3 col-sm-offset-1 banner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "page-header", "id": "banner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"alt": "Notes", "className": "img-responsive", "src": "img/notes-narrow.png"})],null))))],null)))),cljs.core.apply.call(null,om_tools.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-sm-7"], null),om.core.build_all.call(null,furthermore.home.post_dispatch,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)))],null))))],null))));
});

furthermore.home.t16678.prototype.om$core$IWillMount$ = true;

furthermore.home.t16678.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,"/get/posts",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (p1__16673_SHARP_){
return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),((function (___$1){
return (function (___$2){
return p1__16673_SHARP_;
});})(___$1))
);
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (p1__16674_SHARP_){
return console.error(p1__16674_SHARP_);
});})(___$1))
], null));
});

furthermore.home.t16678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16680){
var self__ = this;
var _16680__$1 = this;
return self__.meta16679;
});

furthermore.home.t16678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16680,meta16679__$1){
var self__ = this;
var _16680__$1 = this;
return (new furthermore.home.t16678(self__.owner,self__.app,self__.home_view,meta16679__$1));
});

furthermore.home.t16678.cljs$lang$type = true;

furthermore.home.t16678.cljs$lang$ctorStr = "furthermore.home/t16678";

furthermore.home.t16678.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.home/t16678");
});

furthermore.home.__GT_t16678 = (function furthermore$home$home_view_$___GT_t16678(owner__$1,app__$1,home_view__$1,meta16679){
return (new furthermore.home.t16678(owner__$1,app__$1,home_view__$1,meta16679));
});

}

return (new furthermore.home.t16678(owner,app,furthermore$home$home_view,cljs.core.PersistentArrayMap.EMPTY));
});
var action__15886__auto___16683 = (function (params__15887__auto__){
if(cljs.core.map_QMARK_.call(null,params__15887__auto__)){
var map__16681 = params__15887__auto__;
var map__16681__$1 = ((cljs.core.seq_QMARK_.call(null,map__16681))?cljs.core.apply.call(null,cljs.core.hash_map,map__16681):map__16681);
return furthermore.routing.change_view.call(null,furthermore.home.home_view,new cljs.core.Keyword(null,"home-view","home-view",-1930382825));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15887__auto__)){
var vec__16682 = params__15887__auto__;
return furthermore.routing.change_view.call(null,furthermore.home.home_view,new cljs.core.Keyword(null,"home-view","home-view",-1930382825));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__15886__auto___16683);

/**
 * @param {...*} var_args
 */
furthermore.home.home_path = ((function (action__15886__auto___16683){
return (function() { 
var furthermore$home$home_path__delegate = function (args__15885__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__15885__auto__);
};
var furthermore$home$home_path = function (var_args){
var args__15885__auto__ = null;
if (arguments.length > 0) {
var G__16684__i = 0, G__16684__a = new Array(arguments.length -  0);
while (G__16684__i < G__16684__a.length) {G__16684__a[G__16684__i] = arguments[G__16684__i + 0]; ++G__16684__i;}
  args__15885__auto__ = new cljs.core.IndexedSeq(G__16684__a,0);
} 
return furthermore$home$home_path__delegate.call(this,args__15885__auto__);};
furthermore$home$home_path.cljs$lang$maxFixedArity = 0;
furthermore$home$home_path.cljs$lang$applyTo = (function (arglist__16685){
var args__15885__auto__ = cljs.core.seq(arglist__16685);
return furthermore$home$home_path__delegate(args__15885__auto__);
});
furthermore$home$home_path.cljs$core$IFn$_invoke$arity$variadic = furthermore$home$home_path__delegate;
return furthermore$home$home_path;
})()
;})(action__15886__auto___16683))
;
