// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.topics');
goog.require('cljs.core');
goog.require('typographer.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('om_tools.dom');
goog.require('furthermore.routing');
goog.require('om.core');
goog.require('furthermore.utils');
goog.require('furthermore.posts');
cljs.core.enable_console_print_BANG_.call(null);
furthermore.topics.make_outline_selector = (function furthermore$topics$make_outline_selector(item){
var refcount = cljs.core.count.call(null,new cljs.core.Keyword(null,"references","references",882562509).cljs$core$IFn$_invoke$arity$1(item));
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"opened","opened",-1451743091).cljs$core$IFn$_invoke$arity$1(item))?"glyphicon glyphicon-triangle-bottom small outline-widget":"glyphicon glyphicon-triangle-right small outline-widget");
if((refcount > (0))){
return React.DOM.span({"onClick": om_tools.dom.format_opts.call(null,((function (refcount,class$){
return (function (){
return om.core.transact_BANG_.call(null,item,new cljs.core.Keyword(null,"opened","opened",-1451743091),cljs.core.not);
});})(refcount,class$))
), "ariaHidden": "true", "className": om_tools.dom.format_opts.call(null,class$)});
} else {
return React.DOM.span({"ariaHidden": "true", "style": {"visibility": "hidden"}, "className": om_tools.dom.format_opts.call(null,class$)});
}
});
furthermore.topics.get_reference = (function furthermore$topics$get_reference(ref){
return ajax.core.GET.call(null,[cljs.core.str("/get/post/id/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(ref))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__16839_SHARP_){
return om.core.update_BANG_.call(null,ref,p1__16839_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__16840_SHARP_){
return console.error(p1__16840_SHARP_);
})], null));
});
furthermore.topics.posts = (function furthermore$topics$posts(post,owner){
if(typeof furthermore.topics.t16849 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.topics.t16849 = (function (owner,post,posts,meta16850){
this.owner = owner;
this.post = post;
this.posts = posts;
this.meta16850 = meta16850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.topics.t16849.prototype.om$core$IRender$ = true;

furthermore.topics.t16849.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var url = [cljs.core.str("/post/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.post))].join('');
var map__16852 = furthermore.utils.format_timestamp.call(null,new cljs.core.Keyword(null,"created-on","created-on",-1211780919).cljs$core$IFn$_invoke$arity$1(self__.post));
var map__16852__$1 = ((cljs.core.seq_QMARK_.call(null,map__16852))?cljs.core.apply.call(null,cljs.core.hash_map,map__16852):map__16852);
var time = cljs.core.get.call(null,map__16852__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var date = cljs.core.get.call(null,map__16852__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12 post"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.post)))?om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.div,{"id": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(self__.post)), "className": "title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[furthermore.topics.make_outline_selector.call(null,self__.post),cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,furthermore.posts.post_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.post)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.post)],null))))],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small date"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[date],null))))],null))):om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.div,{"id": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(self__.post)), "className": "follow-up-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[furthermore.topics.make_outline_selector.call(null,self__.post),furthermore.utils.get_text_excerpt.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.post),(50))],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "small date"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(date),cljs.core.str(" @ "),cljs.core.str(time)].join('')],null))))],null)))),(cljs.core.truth_(new cljs.core.Keyword(null,"opened","opened",-1451743091).cljs$core$IFn$_invoke$arity$1(self__.post))?(function (){
var seq__16853_16857 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"references","references",882562509).cljs$core$IFn$_invoke$arity$1(self__.post));
var chunk__16854_16858 = null;
var count__16855_16859 = (0);
var i__16856_16860 = (0);
while(true){
if((i__16856_16860 < count__16855_16859)){
var ref_16861 = cljs.core._nth.call(null,chunk__16854_16858,i__16856_16860);
furthermore.topics.get_reference.call(null,ref_16861);

var G__16862 = seq__16853_16857;
var G__16863 = chunk__16854_16858;
var G__16864 = count__16855_16859;
var G__16865 = (i__16856_16860 + (1));
seq__16853_16857 = G__16862;
chunk__16854_16858 = G__16863;
count__16855_16859 = G__16864;
i__16856_16860 = G__16865;
continue;
} else {
var temp__4406__auto___16866 = cljs.core.seq.call(null,seq__16853_16857);
if(temp__4406__auto___16866){
var seq__16853_16867__$1 = temp__4406__auto___16866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16853_16867__$1)){
var c__4907__auto___16868 = cljs.core.chunk_first.call(null,seq__16853_16867__$1);
var G__16869 = cljs.core.chunk_rest.call(null,seq__16853_16867__$1);
var G__16870 = c__4907__auto___16868;
var G__16871 = cljs.core.count.call(null,c__4907__auto___16868);
var G__16872 = (0);
seq__16853_16857 = G__16869;
chunk__16854_16858 = G__16870;
count__16855_16859 = G__16871;
i__16856_16860 = G__16872;
continue;
} else {
var ref_16873 = cljs.core.first.call(null,seq__16853_16867__$1);
furthermore.topics.get_reference.call(null,ref_16873);

var G__16874 = cljs.core.next.call(null,seq__16853_16867__$1);
var G__16875 = null;
var G__16876 = (0);
var G__16877 = (0);
seq__16853_16857 = G__16874;
chunk__16854_16858 = G__16875;
count__16855_16859 = G__16876;
i__16856_16860 = G__16877;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,om_tools.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(15)], null)], null),om.core.build_all.call(null,self__.posts,new cljs.core.Keyword(null,"references","references",882562509).cljs$core$IFn$_invoke$arity$1(self__.post)));
})()
:null)],null))));
});

furthermore.topics.t16849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16851){
var self__ = this;
var _16851__$1 = this;
return self__.meta16850;
});

furthermore.topics.t16849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16851,meta16850__$1){
var self__ = this;
var _16851__$1 = this;
return (new furthermore.topics.t16849(self__.owner,self__.post,self__.posts,meta16850__$1));
});

furthermore.topics.t16849.cljs$lang$type = true;

furthermore.topics.t16849.cljs$lang$ctorStr = "furthermore.topics/t16849";

furthermore.topics.t16849.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.topics/t16849");
});

furthermore.topics.__GT_t16849 = (function furthermore$topics$posts_$___GT_t16849(owner__$1,post__$1,posts__$1,meta16850){
return (new furthermore.topics.t16849(owner__$1,post__$1,posts__$1,meta16850));
});

}

return (new furthermore.topics.t16849(owner,post,furthermore$topics$posts,cljs.core.PersistentArrayMap.EMPTY));
});
furthermore.topics.topics = (function furthermore$topics$topics(topic,owner){
if(typeof furthermore.topics.t16885 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.topics.t16885 = (function (owner,topic,topics,meta16886){
this.owner = owner;
this.topic = topic;
this.topics = topics;
this.meta16886 = meta16886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.topics.t16885.prototype.om$core$IRender$ = true;

furthermore.topics.t16885.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "col-xs-12"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"className": "topic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.topic)],null)))),cljs.core.apply.call(null,om_tools.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),om.core.build_all.call(null,furthermore.topics.posts,new cljs.core.Keyword(null,"references","references",882562509).cljs$core$IFn$_invoke$arity$1(self__.topic)))],null))));
});

furthermore.topics.t16885.prototype.om$core$IWillMount$ = true;

furthermore.topics.t16885.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__16888 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"references","references",882562509).cljs$core$IFn$_invoke$arity$1(self__.topic));
var chunk__16889 = null;
var count__16890 = (0);
var i__16891 = (0);
while(true){
if((i__16891 < count__16890)){
var ref = cljs.core._nth.call(null,chunk__16889,i__16891);
furthermore.topics.get_reference.call(null,ref);

var G__16892 = seq__16888;
var G__16893 = chunk__16889;
var G__16894 = count__16890;
var G__16895 = (i__16891 + (1));
seq__16888 = G__16892;
chunk__16889 = G__16893;
count__16890 = G__16894;
i__16891 = G__16895;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__16888);
if(temp__4406__auto__){
var seq__16888__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16888__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__16888__$1);
var G__16896 = cljs.core.chunk_rest.call(null,seq__16888__$1);
var G__16897 = c__4907__auto__;
var G__16898 = cljs.core.count.call(null,c__4907__auto__);
var G__16899 = (0);
seq__16888 = G__16896;
chunk__16889 = G__16897;
count__16890 = G__16898;
i__16891 = G__16899;
continue;
} else {
var ref = cljs.core.first.call(null,seq__16888__$1);
furthermore.topics.get_reference.call(null,ref);

var G__16900 = cljs.core.next.call(null,seq__16888__$1);
var G__16901 = null;
var G__16902 = (0);
var G__16903 = (0);
seq__16888 = G__16900;
chunk__16889 = G__16901;
count__16890 = G__16902;
i__16891 = G__16903;
continue;
}
} else {
return null;
}
}
break;
}
});

furthermore.topics.t16885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16887){
var self__ = this;
var _16887__$1 = this;
return self__.meta16886;
});

furthermore.topics.t16885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16887,meta16886__$1){
var self__ = this;
var _16887__$1 = this;
return (new furthermore.topics.t16885(self__.owner,self__.topic,self__.topics,meta16886__$1));
});

furthermore.topics.t16885.cljs$lang$type = true;

furthermore.topics.t16885.cljs$lang$ctorStr = "furthermore.topics/t16885";

furthermore.topics.t16885.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.topics/t16885");
});

furthermore.topics.__GT_t16885 = (function furthermore$topics$topics_$___GT_t16885(owner__$1,topic__$1,topics__$1,meta16886){
return (new furthermore.topics.t16885(owner__$1,topic__$1,topics__$1,meta16886));
});

}

return (new furthermore.topics.t16885(owner,topic,furthermore$topics$topics,cljs.core.PersistentArrayMap.EMPTY));
});
furthermore.topics.contents_view = (function furthermore$topics$contents_view(app,owner){
if(typeof furthermore.topics.t16909 !== 'undefined'){
} else {

/**
* @constructor
*/
furthermore.topics.t16909 = (function (owner,app,contents_view,meta16910){
this.owner = owner;
this.app = app;
this.contents_view = contents_view;
this.meta16910 = meta16910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
furthermore.topics.t16909.prototype.om$core$IRender$ = true;

furthermore.topics.t16909.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "id": "topics"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,om_tools.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),om.core.build_all.call(null,furthermore.topics.topics,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(self__.app)))],null))));
});

furthermore.topics.t16909.prototype.om$core$IWillMount$ = true;

furthermore.topics.t16909.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ajax.core.GET.call(null,"/get/topics",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (p1__16904_SHARP_){
return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contents","contents",-1567174023),((function (___$1){
return (function (___$2){
return p1__16904_SHARP_;
});})(___$1))
);
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (p1__16905_SHARP_){
return console.error(p1__16905_SHARP_);
});})(___$1))
], null));
});

furthermore.topics.t16909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16911){
var self__ = this;
var _16911__$1 = this;
return self__.meta16910;
});

furthermore.topics.t16909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16911,meta16910__$1){
var self__ = this;
var _16911__$1 = this;
return (new furthermore.topics.t16909(self__.owner,self__.app,self__.contents_view,meta16910__$1));
});

furthermore.topics.t16909.cljs$lang$type = true;

furthermore.topics.t16909.cljs$lang$ctorStr = "furthermore.topics/t16909";

furthermore.topics.t16909.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"furthermore.topics/t16909");
});

furthermore.topics.__GT_t16909 = (function furthermore$topics$contents_view_$___GT_t16909(owner__$1,app__$1,contents_view__$1,meta16910){
return (new furthermore.topics.t16909(owner__$1,app__$1,contents_view__$1,meta16910));
});

}

return (new furthermore.topics.t16909(owner,app,furthermore$topics$contents_view,cljs.core.PersistentArrayMap.EMPTY));
});
var action__15886__auto___16914 = (function (params__15887__auto__){
if(cljs.core.map_QMARK_.call(null,params__15887__auto__)){
var map__16912 = params__15887__auto__;
var map__16912__$1 = ((cljs.core.seq_QMARK_.call(null,map__16912))?cljs.core.apply.call(null,cljs.core.hash_map,map__16912):map__16912);
return furthermore.routing.change_view.call(null,furthermore.topics.contents_view,new cljs.core.Keyword(null,"contents-view","contents-view",-1212071486));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15887__auto__)){
var vec__16913 = params__15887__auto__;
return furthermore.routing.change_view.call(null,furthermore.topics.contents_view,new cljs.core.Keyword(null,"contents-view","contents-view",-1212071486));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/contents",action__15886__auto___16914);

/**
 * @param {...*} var_args
 */
furthermore.topics.contents_path = ((function (action__15886__auto___16914){
return (function() { 
var furthermore$topics$contents_path__delegate = function (args__15885__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/contents",args__15885__auto__);
};
var furthermore$topics$contents_path = function (var_args){
var args__15885__auto__ = null;
if (arguments.length > 0) {
var G__16915__i = 0, G__16915__a = new Array(arguments.length -  0);
while (G__16915__i < G__16915__a.length) {G__16915__a[G__16915__i] = arguments[G__16915__i + 0]; ++G__16915__i;}
  args__15885__auto__ = new cljs.core.IndexedSeq(G__16915__a,0);
} 
return furthermore$topics$contents_path__delegate.call(this,args__15885__auto__);};
furthermore$topics$contents_path.cljs$lang$maxFixedArity = 0;
furthermore$topics$contents_path.cljs$lang$applyTo = (function (arglist__16916){
var args__15885__auto__ = cljs.core.seq(arglist__16916);
return furthermore$topics$contents_path__delegate(args__15885__auto__);
});
furthermore$topics$contents_path.cljs$core$IFn$_invoke$arity$variadic = furthermore$topics$contents_path__delegate;
return furthermore$topics$contents_path;
})()
;})(action__15886__auto___16914))
;
