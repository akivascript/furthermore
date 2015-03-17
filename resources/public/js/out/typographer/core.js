// Compiled by ClojureScript 0.0-3119 {}
goog.provide('typographer.core');
goog.require('cljs.core');
goog.require('clojure.string');
typographer.core.patterns = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),"--",new cljs.core.Keyword(null,"replace","replace",-786587770),"\u2014"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),"...",new cljs.core.Keyword(null,"replace","replace",-786587770),"\u2026"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/\"/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u201C"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/\"(\s|s\b|$)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u201D$1"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/([^\ \t\r\n\\\[\{\(\-])\"/,new cljs.core.Keyword(null,"replace","replace",-786587770),"$1\u201D"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/(\s|&nbsp;|--|&[mn]dash;|'–|—'|&#x201[34];)\"(?=\w)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"$1\u201C"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/'/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u2018"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/'(\s|s\b|$)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u2019$1"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/([^\ \t\r\n\\\[\{\(\-])'/,new cljs.core.Keyword(null,"replace","replace",-786587770),"$1\u2019"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/(\s|&nbsp;|--|&[mn]dash;|'–|—'|&#x201[34];)'(?=\w)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"$1\u2018"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/'(?=\d\ds)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u2019"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/'\"(?=\w)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u2018\u201C"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/\"'(?=\w)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u201C\u2018"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/^\"(?=[!\"#\$\%\'()*+,\-.\\/:;<=>?\@\[\\\\\]\^_`{|}~]\B)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u201D"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),/^'(?=[!\"#\$\%\'()*+,\-.\\/:;<=>?\@\[\\\\\]\^_`{|}~]\B)/,new cljs.core.Keyword(null,"replace","replace",-786587770),"\u2019"], null));
/**
 * Takes a string and replaces all relevant instances of standard ASCII punctuation with
 * the typographer's fancy versions.
 */
typographer.core.smarten = (function typographer$core$smarten(input){
var patterns = typographer.core.patterns;
var output = input;
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,patterns))){
return output;
} else {
var pattern = cljs.core.first.call(null,patterns);
var G__25820 = cljs.core.rest.call(null,patterns);
var G__25821 = clojure.string.replace.call(null,output,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(pattern),new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(pattern));
patterns = G__25820;
output = G__25821;
continue;
}
break;
}
});
