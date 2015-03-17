// Compiled by ClojureScript 0.0-3119 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__29144_SHARP_){
return (max === p1__29144_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 * @param {...*} var_args
 */
clojure.set.union = (function() {
var clojure$set$union = null;
var clojure$set$union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var clojure$set$union__1 = (function (s1){
return s1;
});
var clojure$set$union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var clojure$set$union__3 = (function() { 
var G__29145__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__29145 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__29146__i = 0, G__29146__a = new Array(arguments.length -  2);
while (G__29146__i < G__29146__a.length) {G__29146__a[G__29146__i] = arguments[G__29146__i + 2]; ++G__29146__i;}
  sets = new cljs.core.IndexedSeq(G__29146__a,0);
} 
return G__29145__delegate.call(this,s1,s2,sets);};
G__29145.cljs$lang$maxFixedArity = 2;
G__29145.cljs$lang$applyTo = (function (arglist__29147){
var s1 = cljs.core.first(arglist__29147);
arglist__29147 = cljs.core.next(arglist__29147);
var s2 = cljs.core.first(arglist__29147);
var sets = cljs.core.rest(arglist__29147);
return G__29145__delegate(s1,s2,sets);
});
G__29145.cljs$core$IFn$_invoke$arity$variadic = G__29145__delegate;
return G__29145;
})()
;
clojure$set$union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return clojure$set$union__0.call(this);
case 1:
return clojure$set$union__1.call(this,s1);
case 2:
return clojure$set$union__2.call(this,s1,s2);
default:
var G__29148 = null;
if (arguments.length > 2) {
var G__29149__i = 0, G__29149__a = new Array(arguments.length -  2);
while (G__29149__i < G__29149__a.length) {G__29149__a[G__29149__i] = arguments[G__29149__i + 2]; ++G__29149__i;}
G__29148 = new cljs.core.IndexedSeq(G__29149__a,0);
}
return clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__29148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$union.cljs$lang$maxFixedArity = 2;
clojure$set$union.cljs$lang$applyTo = clojure$set$union__3.cljs$lang$applyTo;
clojure$set$union.cljs$core$IFn$_invoke$arity$0 = clojure$set$union__0;
clojure$set$union.cljs$core$IFn$_invoke$arity$1 = clojure$set$union__1;
clojure$set$union.cljs$core$IFn$_invoke$arity$2 = clojure$set$union__2;
clojure$set$union.cljs$core$IFn$_invoke$arity$variadic = clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$union;
})()
;
/**
 * Return a set that is the intersection of the input sets
 * @param {...*} var_args
 */
clojure.set.intersection = (function() {
var clojure$set$intersection = null;
var clojure$set$intersection__1 = (function (s1){
return s1;
});
var clojure$set$intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__29151 = s2;
var G__29152 = s1;
s1 = G__29151;
s2 = G__29152;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var clojure$set$intersection__3 = (function() { 
var G__29153__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__29150_SHARP_){
return (- cljs.core.count.call(null,p1__29150_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure$set$intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__29153 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__29154__i = 0, G__29154__a = new Array(arguments.length -  2);
while (G__29154__i < G__29154__a.length) {G__29154__a[G__29154__i] = arguments[G__29154__i + 2]; ++G__29154__i;}
  sets = new cljs.core.IndexedSeq(G__29154__a,0);
} 
return G__29153__delegate.call(this,s1,s2,sets);};
G__29153.cljs$lang$maxFixedArity = 2;
G__29153.cljs$lang$applyTo = (function (arglist__29155){
var s1 = cljs.core.first(arglist__29155);
arglist__29155 = cljs.core.next(arglist__29155);
var s2 = cljs.core.first(arglist__29155);
var sets = cljs.core.rest(arglist__29155);
return G__29153__delegate(s1,s2,sets);
});
G__29153.cljs$core$IFn$_invoke$arity$variadic = G__29153__delegate;
return G__29153;
})()
;
clojure$set$intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$intersection__1.call(this,s1);
case 2:
return clojure$set$intersection__2.call(this,s1,s2);
default:
var G__29156 = null;
if (arguments.length > 2) {
var G__29157__i = 0, G__29157__a = new Array(arguments.length -  2);
while (G__29157__i < G__29157__a.length) {G__29157__a[G__29157__i] = arguments[G__29157__i + 2]; ++G__29157__i;}
G__29156 = new cljs.core.IndexedSeq(G__29157__a,0);
}
return clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__29156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$intersection.cljs$lang$maxFixedArity = 2;
clojure$set$intersection.cljs$lang$applyTo = clojure$set$intersection__3.cljs$lang$applyTo;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$1 = clojure$set$intersection__1;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$2 = clojure$set$intersection__2;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$variadic = clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$intersection;
})()
;
/**
 * Return a set that is the first set without elements of the remaining sets
 * @param {...*} var_args
 */
clojure.set.difference = (function() {
var clojure$set$difference = null;
var clojure$set$difference__1 = (function (s1){
return s1;
});
var clojure$set$difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var clojure$set$difference__3 = (function() { 
var G__29158__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure$set$difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__29158 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__29159__i = 0, G__29159__a = new Array(arguments.length -  2);
while (G__29159__i < G__29159__a.length) {G__29159__a[G__29159__i] = arguments[G__29159__i + 2]; ++G__29159__i;}
  sets = new cljs.core.IndexedSeq(G__29159__a,0);
} 
return G__29158__delegate.call(this,s1,s2,sets);};
G__29158.cljs$lang$maxFixedArity = 2;
G__29158.cljs$lang$applyTo = (function (arglist__29160){
var s1 = cljs.core.first(arglist__29160);
arglist__29160 = cljs.core.next(arglist__29160);
var s2 = cljs.core.first(arglist__29160);
var sets = cljs.core.rest(arglist__29160);
return G__29158__delegate(s1,s2,sets);
});
G__29158.cljs$core$IFn$_invoke$arity$variadic = G__29158__delegate;
return G__29158;
})()
;
clojure$set$difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$difference__1.call(this,s1);
case 2:
return clojure$set$difference__2.call(this,s1,s2);
default:
var G__29161 = null;
if (arguments.length > 2) {
var G__29162__i = 0, G__29162__a = new Array(arguments.length -  2);
while (G__29162__i < G__29162__a.length) {G__29162__a[G__29162__i] = arguments[G__29162__i + 2]; ++G__29162__i;}
G__29161 = new cljs.core.IndexedSeq(G__29162__a,0);
}
return clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__29161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$difference.cljs$lang$maxFixedArity = 2;
clojure$set$difference.cljs$lang$applyTo = clojure$set$difference__3.cljs$lang$applyTo;
clojure$set$difference.cljs$core$IFn$_invoke$arity$1 = clojure$set$difference__1;
clojure$set$difference.cljs$core$IFn$_invoke$arity$2 = clojure$set$difference__2;
clojure$set$difference.cljs$core$IFn$_invoke$arity$variadic = clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$difference;
})()
;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__29163_SHARP_){
return cljs.core.select_keys.call(null,p1__29163_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__29166){
var vec__29167 = p__29166;
var old = cljs.core.nth.call(null,vec__29167,(0),null);
var new$ = cljs.core.nth.call(null,vec__29167,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__29168_SHARP_){
return clojure.set.rename_keys.call(null,p1__29168_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__29171){
var vec__29172 = p__29171;
var k = cljs.core.nth.call(null,vec__29172,(0),null);
var v = cljs.core.nth.call(null,vec__29172,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function() {
var clojure$set$join = null;
var clojure$set$join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__29179 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__29179,(0),null);
var s = cljs.core.nth.call(null,vec__29179,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__29179,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__29179,r,s,idx){
return (function (p1__29173_SHARP_,p2__29174_SHARP_){
return cljs.core.conj.call(null,p1__29173_SHARP_,cljs.core.merge.call(null,p2__29174_SHARP_,x));
});})(found,ks,vec__29179,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__29179,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var clojure$set$join__3 = (function (xrel,yrel,km){
var vec__29180 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__29180,(0),null);
var s = cljs.core.nth.call(null,vec__29180,(1),null);
var k = cljs.core.nth.call(null,vec__29180,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__29180,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__29180,r,s,k,idx){
return (function (p1__29175_SHARP_,p2__29176_SHARP_){
return cljs.core.conj.call(null,p1__29175_SHARP_,cljs.core.merge.call(null,p2__29176_SHARP_,x));
});})(found,vec__29180,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__29180,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
clojure$set$join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return clojure$set$join__2.call(this,xrel,yrel);
case 3:
return clojure$set$join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$join.cljs$core$IFn$_invoke$arity$2 = clojure$set$join__2;
clojure$set$join.cljs$core$IFn$_invoke$arity$3 = clojure$set$join__3;
return clojure$set$join;
})()
;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__29181_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__29181_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__29182_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__29182_SHARP_);
}),set2));
});
