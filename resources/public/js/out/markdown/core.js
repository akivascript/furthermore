// Compiled by ClojureScript 0.0-3119 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__28777){
var map__28783 = p__28777;
var map__28783__$1 = ((cljs.core.seq_QMARK_.call(null,map__28783))?cljs.core.apply.call(null,cljs.core.hash_map,map__28783):map__28783);
var custom_transformers = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var replacement_transformers = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
return ((function (map__28783,map__28783__$1,custom_transformers,replacement_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_28784 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__28785 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_28784,map__28783,map__28783__$1,custom_transformers,replacement_transformers){
return (function (p__28786,transformer){
var vec__28787 = p__28786;
var text = cljs.core.nth.call(null,vec__28787,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__28787,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_28784,map__28783,map__28783__$1,custom_transformers,replacement_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4122__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__28785,(0),null);
var new_state = cljs.core.nth.call(null,vec__28785,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_28784;
}});
;})(map__28783,map__28783__$1,custom_transformers,replacement_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 * @param {...*} var_args
 */
markdown.core.format = (function() { 
var markdown$core$format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var markdown$core$format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__28788__i = 0, G__28788__a = new Array(arguments.length -  1);
while (G__28788__i < G__28788__a.length) {G__28788__a[G__28788__i] = arguments[G__28788__i + 1]; ++G__28788__i;}
  args = new cljs.core.IndexedSeq(G__28788__a,0);
} 
return markdown$core$format__delegate.call(this,fmt,args);};
markdown$core$format.cljs$lang$maxFixedArity = 1;
markdown$core$format.cljs$lang$applyTo = (function (arglist__28789){
var fmt = cljs.core.first(arglist__28789);
var args = cljs.core.rest(arglist__28789);
return markdown$core$format__delegate(fmt,args);
});
markdown$core$format.cljs$core$IFn$_invoke$arity$variadic = markdown$core$format__delegate;
return markdown$core$format;
})()
;
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__28794_28798 = cljs.core.seq.call(null,lines);
var chunk__28795_28799 = null;
var count__28796_28800 = (0);
var i__28797_28801 = (0);
while(true){
if((i__28797_28801 < count__28796_28800)){
var line_28802 = cljs.core._nth.call(null,chunk__28795_28799,i__28797_28801);
markdown.transformers.parse_reference_link.call(null,line_28802,references);

var G__28803 = seq__28794_28798;
var G__28804 = chunk__28795_28799;
var G__28805 = count__28796_28800;
var G__28806 = (i__28797_28801 + (1));
seq__28794_28798 = G__28803;
chunk__28795_28799 = G__28804;
count__28796_28800 = G__28805;
i__28797_28801 = G__28806;
continue;
} else {
var temp__4406__auto___28807 = cljs.core.seq.call(null,seq__28794_28798);
if(temp__4406__auto___28807){
var seq__28794_28808__$1 = temp__4406__auto___28807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28794_28808__$1)){
var c__4907__auto___28809 = cljs.core.chunk_first.call(null,seq__28794_28808__$1);
var G__28810 = cljs.core.chunk_rest.call(null,seq__28794_28808__$1);
var G__28811 = c__4907__auto___28809;
var G__28812 = cljs.core.count.call(null,c__4907__auto___28809);
var G__28813 = (0);
seq__28794_28798 = G__28810;
chunk__28795_28799 = G__28811;
count__28796_28800 = G__28812;
i__28797_28801 = G__28813;
continue;
} else {
var line_28814 = cljs.core.first.call(null,seq__28794_28808__$1);
markdown.transformers.parse_reference_link.call(null,line_28814,references);

var G__28815 = cljs.core.next.call(null,seq__28794_28808__$1);
var G__28816 = null;
var G__28817 = (0);
var G__28818 = (0);
seq__28794_28798 = G__28815;
chunk__28795_28799 = G__28816;
count__28796_28800 = G__28817;
i__28797_28801 = G__28818;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 * @param {...*} var_args
 */
markdown.core.md__GT_html = (function() { 
var markdown$core$md__GT_html__delegate = function (text,params){
var _STAR_substring_STAR_28825 = markdown.transformers._STAR_substring_STAR_;
var formatter28826 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_28825,formatter28826){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_28825,formatter28826))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__28828_28831 = lines;
var vec__28829_28832 = G__28828_28831;
var line_28833 = cljs.core.nth.call(null,vec__28829_28832,(0),null);
var more_28834 = cljs.core.nthnext.call(null,vec__28829_28832,(1));
var state_28835 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__28828_28836__$1 = G__28828_28831;
var state_28837__$1 = state_28835;
while(true){
var vec__28830_28838 = G__28828_28836__$1;
var line_28839__$1 = cljs.core.nth.call(null,vec__28830_28838,(0),null);
var more_28840__$1 = cljs.core.nthnext.call(null,vec__28830_28838,(1));
var state_28841__$2 = state_28837__$1;
var state_28842__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_28841__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_28841__$2),cljs.core.first.call(null,more_28840__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_28841__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_28841__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_28840__$1))){
var G__28843 = more_28840__$1;
var G__28844 = cljs.core.assoc.call(null,transformer.call(null,html,line_28839__$1,cljs.core.first.call(null,more_28840__$1),state_28842__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_28839__$1));
G__28828_28836__$1 = G__28843;
state_28837__$1 = G__28844;
continue;
} else {
transformer.call(null,html,line_28839__$1,"",cljs.core.assoc.call(null,state_28842__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter28826;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_28825;
}};
var markdown$core$md__GT_html = function (text,var_args){
var params = null;
if (arguments.length > 1) {
var G__28845__i = 0, G__28845__a = new Array(arguments.length -  1);
while (G__28845__i < G__28845__a.length) {G__28845__a[G__28845__i] = arguments[G__28845__i + 1]; ++G__28845__i;}
  params = new cljs.core.IndexedSeq(G__28845__a,0);
} 
return markdown$core$md__GT_html__delegate.call(this,text,params);};
markdown$core$md__GT_html.cljs$lang$maxFixedArity = 1;
markdown$core$md__GT_html.cljs$lang$applyTo = (function (arglist__28846){
var text = cljs.core.first(arglist__28846);
var params = cljs.core.rest(arglist__28846);
return markdown$core$md__GT_html__delegate(text,params);
});
markdown$core$md__GT_html.cljs$core$IFn$_invoke$arity$variadic = markdown$core$md__GT_html__delegate;
return markdown$core$md__GT_html;
})()
;
/**
 * Js accessible wrapper
 * @param {...*} var_args
 */
markdown.core.mdToHtml = (function() { 
var markdown$core$mdToHtml__delegate = function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
};
var markdown$core$mdToHtml = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__28847__i = 0, G__28847__a = new Array(arguments.length -  0);
while (G__28847__i < G__28847__a.length) {G__28847__a[G__28847__i] = arguments[G__28847__i + 0]; ++G__28847__i;}
  params = new cljs.core.IndexedSeq(G__28847__a,0);
} 
return markdown$core$mdToHtml__delegate.call(this,params);};
markdown$core$mdToHtml.cljs$lang$maxFixedArity = 0;
markdown$core$mdToHtml.cljs$lang$applyTo = (function (arglist__28848){
var params = cljs.core.seq(arglist__28848);
return markdown$core$mdToHtml__delegate(params);
});
markdown$core$mdToHtml.cljs$core$IFn$_invoke$arity$variadic = markdown$core$mdToHtml__delegate;
return markdown$core$mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);
