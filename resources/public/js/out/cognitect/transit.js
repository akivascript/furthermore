// Compiled by ClojureScript 0.0-3119 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__25680_25684 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25681_25685 = null;
var count__25682_25686 = (0);
var i__25683_25687 = (0);
while(true){
if((i__25683_25687 < count__25682_25686)){
var k_25688 = cljs.core._nth.call(null,chunk__25681_25685,i__25683_25687);
var v_25689 = (b[k_25688]);
(a[k_25688] = v_25689);

var G__25690 = seq__25680_25684;
var G__25691 = chunk__25681_25685;
var G__25692 = count__25682_25686;
var G__25693 = (i__25683_25687 + (1));
seq__25680_25684 = G__25690;
chunk__25681_25685 = G__25691;
count__25682_25686 = G__25692;
i__25683_25687 = G__25693;
continue;
} else {
var temp__4406__auto___25694 = cljs.core.seq.call(null,seq__25680_25684);
if(temp__4406__auto___25694){
var seq__25680_25695__$1 = temp__4406__auto___25694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25680_25695__$1)){
var c__4907__auto___25696 = cljs.core.chunk_first.call(null,seq__25680_25695__$1);
var G__25697 = cljs.core.chunk_rest.call(null,seq__25680_25695__$1);
var G__25698 = c__4907__auto___25696;
var G__25699 = cljs.core.count.call(null,c__4907__auto___25696);
var G__25700 = (0);
seq__25680_25684 = G__25697;
chunk__25681_25685 = G__25698;
count__25682_25686 = G__25699;
i__25683_25687 = G__25700;
continue;
} else {
var k_25701 = cljs.core.first.call(null,seq__25680_25695__$1);
var v_25702 = (b[k_25701]);
(a[k_25701] = v_25702);

var G__25703 = cljs.core.next.call(null,seq__25680_25695__$1);
var G__25704 = null;
var G__25705 = (0);
var G__25706 = (0);
seq__25680_25684 = G__25703;
chunk__25681_25685 = G__25704;
count__25682_25686 = G__25705;
i__25683_25687 = G__25706;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function() {
var cognitect$transit$reader = null;
var cognitect$transit$reader__1 = (function (type){
return cognitect$transit$reader.call(null,type,null);
});
var cognitect$transit$reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__25707 = (i + (2));
var G__25708 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25707;
ret = G__25708;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$reader = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$reader__1.call(this,type);
case 2:
return cognitect$transit$reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$reader__1;
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$reader__2;
return cognitect$transit$reader;
})()
;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25709_25713 = cljs.core.seq.call(null,v);
var chunk__25710_25714 = null;
var count__25711_25715 = (0);
var i__25712_25716 = (0);
while(true){
if((i__25712_25716 < count__25711_25715)){
var x_25717 = cljs.core._nth.call(null,chunk__25710_25714,i__25712_25716);
ret.push(x_25717);

var G__25718 = seq__25709_25713;
var G__25719 = chunk__25710_25714;
var G__25720 = count__25711_25715;
var G__25721 = (i__25712_25716 + (1));
seq__25709_25713 = G__25718;
chunk__25710_25714 = G__25719;
count__25711_25715 = G__25720;
i__25712_25716 = G__25721;
continue;
} else {
var temp__4406__auto___25722 = cljs.core.seq.call(null,seq__25709_25713);
if(temp__4406__auto___25722){
var seq__25709_25723__$1 = temp__4406__auto___25722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25709_25723__$1)){
var c__4907__auto___25724 = cljs.core.chunk_first.call(null,seq__25709_25723__$1);
var G__25725 = cljs.core.chunk_rest.call(null,seq__25709_25723__$1);
var G__25726 = c__4907__auto___25724;
var G__25727 = cljs.core.count.call(null,c__4907__auto___25724);
var G__25728 = (0);
seq__25709_25713 = G__25725;
chunk__25710_25714 = G__25726;
count__25711_25715 = G__25727;
i__25712_25716 = G__25728;
continue;
} else {
var x_25729 = cljs.core.first.call(null,seq__25709_25723__$1);
ret.push(x_25729);

var G__25730 = cljs.core.next.call(null,seq__25709_25723__$1);
var G__25731 = null;
var G__25732 = (0);
var G__25733 = (0);
seq__25709_25713 = G__25730;
chunk__25710_25714 = G__25731;
count__25711_25715 = G__25732;
i__25712_25716 = G__25733;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25734_25738 = cljs.core.seq.call(null,v);
var chunk__25735_25739 = null;
var count__25736_25740 = (0);
var i__25737_25741 = (0);
while(true){
if((i__25737_25741 < count__25736_25740)){
var x_25742 = cljs.core._nth.call(null,chunk__25735_25739,i__25737_25741);
ret.push(x_25742);

var G__25743 = seq__25734_25738;
var G__25744 = chunk__25735_25739;
var G__25745 = count__25736_25740;
var G__25746 = (i__25737_25741 + (1));
seq__25734_25738 = G__25743;
chunk__25735_25739 = G__25744;
count__25736_25740 = G__25745;
i__25737_25741 = G__25746;
continue;
} else {
var temp__4406__auto___25747 = cljs.core.seq.call(null,seq__25734_25738);
if(temp__4406__auto___25747){
var seq__25734_25748__$1 = temp__4406__auto___25747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25734_25748__$1)){
var c__4907__auto___25749 = cljs.core.chunk_first.call(null,seq__25734_25748__$1);
var G__25750 = cljs.core.chunk_rest.call(null,seq__25734_25748__$1);
var G__25751 = c__4907__auto___25749;
var G__25752 = cljs.core.count.call(null,c__4907__auto___25749);
var G__25753 = (0);
seq__25734_25738 = G__25750;
chunk__25735_25739 = G__25751;
count__25736_25740 = G__25752;
i__25737_25741 = G__25753;
continue;
} else {
var x_25754 = cljs.core.first.call(null,seq__25734_25748__$1);
ret.push(x_25754);

var G__25755 = cljs.core.next.call(null,seq__25734_25748__$1);
var G__25756 = null;
var G__25757 = (0);
var G__25758 = (0);
seq__25734_25738 = G__25755;
chunk__25735_25739 = G__25756;
count__25736_25740 = G__25757;
i__25737_25741 = G__25758;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25759_25763 = cljs.core.seq.call(null,v);
var chunk__25760_25764 = null;
var count__25761_25765 = (0);
var i__25762_25766 = (0);
while(true){
if((i__25762_25766 < count__25761_25765)){
var x_25767 = cljs.core._nth.call(null,chunk__25760_25764,i__25762_25766);
ret.push(x_25767);

var G__25768 = seq__25759_25763;
var G__25769 = chunk__25760_25764;
var G__25770 = count__25761_25765;
var G__25771 = (i__25762_25766 + (1));
seq__25759_25763 = G__25768;
chunk__25760_25764 = G__25769;
count__25761_25765 = G__25770;
i__25762_25766 = G__25771;
continue;
} else {
var temp__4406__auto___25772 = cljs.core.seq.call(null,seq__25759_25763);
if(temp__4406__auto___25772){
var seq__25759_25773__$1 = temp__4406__auto___25772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25759_25773__$1)){
var c__4907__auto___25774 = cljs.core.chunk_first.call(null,seq__25759_25773__$1);
var G__25775 = cljs.core.chunk_rest.call(null,seq__25759_25773__$1);
var G__25776 = c__4907__auto___25774;
var G__25777 = cljs.core.count.call(null,c__4907__auto___25774);
var G__25778 = (0);
seq__25759_25763 = G__25775;
chunk__25760_25764 = G__25776;
count__25761_25765 = G__25777;
i__25762_25766 = G__25778;
continue;
} else {
var x_25779 = cljs.core.first.call(null,seq__25759_25773__$1);
ret.push(x_25779);

var G__25780 = cljs.core.next.call(null,seq__25759_25773__$1);
var G__25781 = null;
var G__25782 = (0);
var G__25783 = (0);
seq__25759_25763 = G__25780;
chunk__25760_25764 = G__25781;
count__25761_25765 = G__25782;
i__25762_25766 = G__25783;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function() {
var cognitect$transit$writer = null;
var cognitect$transit$writer__1 = (function (type){
return cognitect$transit$writer.call(null,type,null);
});
var cognitect$transit$writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25793 = cljs.core.clone.call(null,handlers);
x25793.forEach = ((function (x25793,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25794 = cljs.core.seq.call(null,coll);
var chunk__25795 = null;
var count__25796 = (0);
var i__25797 = (0);
while(true){
if((i__25797 < count__25796)){
var vec__25798 = cljs.core._nth.call(null,chunk__25795,i__25797);
var k = cljs.core.nth.call(null,vec__25798,(0),null);
var v = cljs.core.nth.call(null,vec__25798,(1),null);
f.call(null,v,k);

var G__25800 = seq__25794;
var G__25801 = chunk__25795;
var G__25802 = count__25796;
var G__25803 = (i__25797 + (1));
seq__25794 = G__25800;
chunk__25795 = G__25801;
count__25796 = G__25802;
i__25797 = G__25803;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__25794);
if(temp__4406__auto__){
var seq__25794__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25794__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__25794__$1);
var G__25804 = cljs.core.chunk_rest.call(null,seq__25794__$1);
var G__25805 = c__4907__auto__;
var G__25806 = cljs.core.count.call(null,c__4907__auto__);
var G__25807 = (0);
seq__25794 = G__25804;
chunk__25795 = G__25805;
count__25796 = G__25806;
i__25797 = G__25807;
continue;
} else {
var vec__25799 = cljs.core.first.call(null,seq__25794__$1);
var k = cljs.core.nth.call(null,vec__25799,(0),null);
var v = cljs.core.nth.call(null,vec__25799,(1),null);
f.call(null,v,k);

var G__25808 = cljs.core.next.call(null,seq__25794__$1);
var G__25809 = null;
var G__25810 = (0);
var G__25811 = (0);
seq__25794 = G__25808;
chunk__25795 = G__25809;
count__25796 = G__25810;
i__25797 = G__25811;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25793,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25793;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__25792 = obj;
G__25792.push(kfn.call(null,k),vfn.call(null,v));

return G__25792;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$writer = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$writer__1.call(this,type);
case 2:
return cognitect$transit$writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$writer__1;
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$writer__2;
return cognitect$transit$writer;
})()
;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function() {
var cognitect$transit$write_handler = null;
var cognitect$transit$write_handler__2 = (function (tag_fn,rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,null,null);
});
var cognitect$transit$write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var cognitect$transit$write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t25815 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t25815 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta25816){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta25816 = meta25816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t25815.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t25815.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t25815.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t25815.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t25815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25817){
var self__ = this;
var _25817__$1 = this;
return self__.meta25816;
});

cognitect.transit.t25815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25817,meta25816__$1){
var self__ = this;
var _25817__$1 = this;
return (new cognitect.transit.t25815(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta25816__$1));
});

cognitect.transit.t25815.cljs$lang$type = true;

cognitect.transit.t25815.cljs$lang$ctorStr = "cognitect.transit/t25815";

cognitect.transit.t25815.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cognitect.transit/t25815");
});

cognitect.transit.__GT_t25815 = (function cognitect$transit$write_handler_$___GT_t25815(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta25816){
return (new cognitect.transit.t25815(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta25816));
});

}

return (new cognitect.transit.t25815(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cognitect$transit$write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cognitect$transit$write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return cognitect$transit$write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return cognitect$transit$write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return cognitect$transit$write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$write_handler__2;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$3 = cognitect$transit$write_handler__3;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$4 = cognitect$transit$write_handler__4;
return cognitect$transit$write_handler;
})()
;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
