// Compiled by ClojureScript 0.0-3119 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * @param {...*} var_args
 */
plumbing.core.update = (function() {
var plumbing$core$update = null;
var plumbing$core$update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var plumbing$core$update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var plumbing$core$update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var plumbing$core$update__6 = (function() { 
var G__18443__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__18443 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__18444__i = 0, G__18444__a = new Array(arguments.length -  5);
while (G__18444__i < G__18444__a.length) {G__18444__a[G__18444__i] = arguments[G__18444__i + 5]; ++G__18444__i;}
  xs = new cljs.core.IndexedSeq(G__18444__a,0);
} 
return G__18443__delegate.call(this,m,k,f,x1,x2,xs);};
G__18443.cljs$lang$maxFixedArity = 5;
G__18443.cljs$lang$applyTo = (function (arglist__18445){
var m = cljs.core.first(arglist__18445);
arglist__18445 = cljs.core.next(arglist__18445);
var k = cljs.core.first(arglist__18445);
arglist__18445 = cljs.core.next(arglist__18445);
var f = cljs.core.first(arglist__18445);
arglist__18445 = cljs.core.next(arglist__18445);
var x1 = cljs.core.first(arglist__18445);
arglist__18445 = cljs.core.next(arglist__18445);
var x2 = cljs.core.first(arglist__18445);
var xs = cljs.core.rest(arglist__18445);
return G__18443__delegate(m,k,f,x1,x2,xs);
});
G__18443.cljs$core$IFn$_invoke$arity$variadic = G__18443__delegate;
return G__18443;
})()
;
plumbing$core$update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return plumbing$core$update__3.call(this,m,k,f);
case 4:
return plumbing$core$update__4.call(this,m,k,f,x1);
case 5:
return plumbing$core$update__5.call(this,m,k,f,x1,x2);
default:
var G__18446 = null;
if (arguments.length > 5) {
var G__18447__i = 0, G__18447__a = new Array(arguments.length -  5);
while (G__18447__i < G__18447__a.length) {G__18447__a[G__18447__i] = arguments[G__18447__i + 5]; ++G__18447__i;}
G__18446 = new cljs.core.IndexedSeq(G__18447__a,0);
}
return plumbing$core$update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__18446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$update.cljs$lang$maxFixedArity = 5;
plumbing$core$update.cljs$lang$applyTo = plumbing$core$update__6.cljs$lang$applyTo;
plumbing$core$update.cljs$core$IFn$_invoke$arity$3 = plumbing$core$update__3;
plumbing$core$update.cljs$core$IFn$_invoke$arity$4 = plumbing$core$update__4;
plumbing$core$update.cljs$core$IFn$_invoke$arity$5 = plumbing$core$update__5;
plumbing$core$update.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$update__6.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$update;
})()
;
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10363__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18456_18462 = cljs.core.seq.call(null,m);
var chunk__18457_18463 = null;
var count__18458_18464 = (0);
var i__18459_18465 = (0);
while(true){
if((i__18459_18465 < count__18458_18464)){
var vec__18460_18466 = cljs.core._nth.call(null,chunk__18457_18463,i__18459_18465);
var k_18467 = cljs.core.nth.call(null,vec__18460_18466,(0),null);
var v_18468 = cljs.core.nth.call(null,vec__18460_18466,(1),null);
var m18455_18469 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18455_18469,k_18467,f.call(null,v_18468)));

var G__18470 = seq__18456_18462;
var G__18471 = chunk__18457_18463;
var G__18472 = count__18458_18464;
var G__18473 = (i__18459_18465 + (1));
seq__18456_18462 = G__18470;
chunk__18457_18463 = G__18471;
count__18458_18464 = G__18472;
i__18459_18465 = G__18473;
continue;
} else {
var temp__4406__auto___18474 = cljs.core.seq.call(null,seq__18456_18462);
if(temp__4406__auto___18474){
var seq__18456_18475__$1 = temp__4406__auto___18474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18456_18475__$1)){
var c__4907__auto___18476 = cljs.core.chunk_first.call(null,seq__18456_18475__$1);
var G__18477 = cljs.core.chunk_rest.call(null,seq__18456_18475__$1);
var G__18478 = c__4907__auto___18476;
var G__18479 = cljs.core.count.call(null,c__4907__auto___18476);
var G__18480 = (0);
seq__18456_18462 = G__18477;
chunk__18457_18463 = G__18478;
count__18458_18464 = G__18479;
i__18459_18465 = G__18480;
continue;
} else {
var vec__18461_18481 = cljs.core.first.call(null,seq__18456_18475__$1);
var k_18482 = cljs.core.nth.call(null,vec__18461_18481,(0),null);
var v_18483 = cljs.core.nth.call(null,vec__18461_18481,(1),null);
var m18455_18484 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18455_18484,k_18482,f.call(null,v_18483)));

var G__18485 = cljs.core.next.call(null,seq__18456_18475__$1);
var G__18486 = null;
var G__18487 = (0);
var G__18488 = (0);
seq__18456_18462 = G__18485;
chunk__18457_18463 = G__18486;
count__18458_18464 = G__18487;
i__18459_18465 = G__18488;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10363__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10363__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18497_18503 = cljs.core.seq.call(null,m);
var chunk__18498_18504 = null;
var count__18499_18505 = (0);
var i__18500_18506 = (0);
while(true){
if((i__18500_18506 < count__18499_18505)){
var vec__18501_18507 = cljs.core._nth.call(null,chunk__18498_18504,i__18500_18506);
var k_18508 = cljs.core.nth.call(null,vec__18501_18507,(0),null);
var v_18509 = cljs.core.nth.call(null,vec__18501_18507,(1),null);
var m18496_18510 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18496_18510,f.call(null,k_18508),v_18509));

var G__18511 = seq__18497_18503;
var G__18512 = chunk__18498_18504;
var G__18513 = count__18499_18505;
var G__18514 = (i__18500_18506 + (1));
seq__18497_18503 = G__18511;
chunk__18498_18504 = G__18512;
count__18499_18505 = G__18513;
i__18500_18506 = G__18514;
continue;
} else {
var temp__4406__auto___18515 = cljs.core.seq.call(null,seq__18497_18503);
if(temp__4406__auto___18515){
var seq__18497_18516__$1 = temp__4406__auto___18515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18497_18516__$1)){
var c__4907__auto___18517 = cljs.core.chunk_first.call(null,seq__18497_18516__$1);
var G__18518 = cljs.core.chunk_rest.call(null,seq__18497_18516__$1);
var G__18519 = c__4907__auto___18517;
var G__18520 = cljs.core.count.call(null,c__4907__auto___18517);
var G__18521 = (0);
seq__18497_18503 = G__18518;
chunk__18498_18504 = G__18519;
count__18499_18505 = G__18520;
i__18500_18506 = G__18521;
continue;
} else {
var vec__18502_18522 = cljs.core.first.call(null,seq__18497_18516__$1);
var k_18523 = cljs.core.nth.call(null,vec__18502_18522,(0),null);
var v_18524 = cljs.core.nth.call(null,vec__18502_18522,(1),null);
var m18496_18525 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18496_18525,f.call(null,k_18523),v_18524));

var G__18526 = cljs.core.next.call(null,seq__18497_18516__$1);
var G__18527 = null;
var G__18528 = (0);
var G__18529 = (0);
seq__18497_18503 = G__18526;
chunk__18498_18504 = G__18527;
count__18499_18505 = G__18528;
i__18500_18506 = G__18529;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10363__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__10363__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18536_18540 = cljs.core.seq.call(null,ks);
var chunk__18537_18541 = null;
var count__18538_18542 = (0);
var i__18539_18543 = (0);
while(true){
if((i__18539_18543 < count__18538_18542)){
var k_18544 = cljs.core._nth.call(null,chunk__18537_18541,i__18539_18543);
var m18535_18545 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18535_18545,k_18544,f.call(null,k_18544)));

var G__18546 = seq__18536_18540;
var G__18547 = chunk__18537_18541;
var G__18548 = count__18538_18542;
var G__18549 = (i__18539_18543 + (1));
seq__18536_18540 = G__18546;
chunk__18537_18541 = G__18547;
count__18538_18542 = G__18548;
i__18539_18543 = G__18549;
continue;
} else {
var temp__4406__auto___18550 = cljs.core.seq.call(null,seq__18536_18540);
if(temp__4406__auto___18550){
var seq__18536_18551__$1 = temp__4406__auto___18550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18536_18551__$1)){
var c__4907__auto___18552 = cljs.core.chunk_first.call(null,seq__18536_18551__$1);
var G__18553 = cljs.core.chunk_rest.call(null,seq__18536_18551__$1);
var G__18554 = c__4907__auto___18552;
var G__18555 = cljs.core.count.call(null,c__4907__auto___18552);
var G__18556 = (0);
seq__18536_18540 = G__18553;
chunk__18537_18541 = G__18554;
count__18538_18542 = G__18555;
i__18539_18543 = G__18556;
continue;
} else {
var k_18557 = cljs.core.first.call(null,seq__18536_18551__$1);
var m18535_18558 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18535_18558,k_18557,f.call(null,k_18557)));

var G__18559 = cljs.core.next.call(null,seq__18536_18551__$1);
var G__18560 = null;
var G__18561 = (0);
var G__18562 = (0);
seq__18536_18540 = G__18559;
chunk__18537_18541 = G__18560;
count__18538_18542 = G__18561;
i__18539_18543 = G__18562;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10363__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__10363__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18569_18573 = cljs.core.seq.call(null,vs);
var chunk__18570_18574 = null;
var count__18571_18575 = (0);
var i__18572_18576 = (0);
while(true){
if((i__18572_18576 < count__18571_18575)){
var v_18577 = cljs.core._nth.call(null,chunk__18570_18574,i__18572_18576);
var m18568_18578 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18568_18578,f.call(null,v_18577),v_18577));

var G__18579 = seq__18569_18573;
var G__18580 = chunk__18570_18574;
var G__18581 = count__18571_18575;
var G__18582 = (i__18572_18576 + (1));
seq__18569_18573 = G__18579;
chunk__18570_18574 = G__18580;
count__18571_18575 = G__18581;
i__18572_18576 = G__18582;
continue;
} else {
var temp__4406__auto___18583 = cljs.core.seq.call(null,seq__18569_18573);
if(temp__4406__auto___18583){
var seq__18569_18584__$1 = temp__4406__auto___18583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18569_18584__$1)){
var c__4907__auto___18585 = cljs.core.chunk_first.call(null,seq__18569_18584__$1);
var G__18586 = cljs.core.chunk_rest.call(null,seq__18569_18584__$1);
var G__18587 = c__4907__auto___18585;
var G__18588 = cljs.core.count.call(null,c__4907__auto___18585);
var G__18589 = (0);
seq__18569_18573 = G__18586;
chunk__18570_18574 = G__18587;
count__18571_18575 = G__18588;
i__18572_18576 = G__18589;
continue;
} else {
var v_18590 = cljs.core.first.call(null,seq__18569_18584__$1);
var m18568_18591 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18568_18591,f.call(null,v_18590),v_18590));

var G__18592 = cljs.core.next.call(null,seq__18569_18584__$1);
var G__18593 = null;
var G__18594 = (0);
var G__18595 = (0);
seq__18569_18573 = G__18592;
chunk__18570_18574 = G__18593;
count__18571_18575 = G__18594;
i__18572_18576 = G__18595;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10363__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__18596){
var vec__18598 = p__18596;
var k = cljs.core.nth.call(null,vec__18598,(0),null);
var ks = cljs.core.nthnext.call(null,vec__18598,(1));
if(cljs.core.truth_(m)){
var temp__4404__auto__ = (function (){var and__4110__auto__ = ks;
if(and__4110__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__4110__auto__;
}
})();
if(cljs.core.truth_(temp__4404__auto__)){
var res = temp__4404__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__10363__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18607_18613 = cljs.core.seq.call(null,x);
var chunk__18608_18614 = null;
var count__18609_18615 = (0);
var i__18610_18616 = (0);
while(true){
if((i__18610_18616 < count__18609_18615)){
var vec__18611_18617 = cljs.core._nth.call(null,chunk__18608_18614,i__18610_18616);
var k_18618 = cljs.core.nth.call(null,vec__18611_18617,(0),null);
var v_18619 = cljs.core.nth.call(null,vec__18611_18617,(1),null);
var m18606_18620 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18606_18620,((typeof k_18618 === 'string')?cljs.core.keyword.call(null,k_18618):k_18618),plumbing$core$keywordize_map.call(null,v_18619)));

var G__18621 = seq__18607_18613;
var G__18622 = chunk__18608_18614;
var G__18623 = count__18609_18615;
var G__18624 = (i__18610_18616 + (1));
seq__18607_18613 = G__18621;
chunk__18608_18614 = G__18622;
count__18609_18615 = G__18623;
i__18610_18616 = G__18624;
continue;
} else {
var temp__4406__auto___18625 = cljs.core.seq.call(null,seq__18607_18613);
if(temp__4406__auto___18625){
var seq__18607_18626__$1 = temp__4406__auto___18625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18607_18626__$1)){
var c__4907__auto___18627 = cljs.core.chunk_first.call(null,seq__18607_18626__$1);
var G__18628 = cljs.core.chunk_rest.call(null,seq__18607_18626__$1);
var G__18629 = c__4907__auto___18627;
var G__18630 = cljs.core.count.call(null,c__4907__auto___18627);
var G__18631 = (0);
seq__18607_18613 = G__18628;
chunk__18608_18614 = G__18629;
count__18609_18615 = G__18630;
i__18610_18616 = G__18631;
continue;
} else {
var vec__18612_18632 = cljs.core.first.call(null,seq__18607_18626__$1);
var k_18633 = cljs.core.nth.call(null,vec__18612_18632,(0),null);
var v_18634 = cljs.core.nth.call(null,vec__18612_18632,(1),null);
var m18606_18635 = cljs.core.deref.call(null,m_atom__10363__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10363__auto__,cljs.core.assoc_BANG_.call(null,m18606_18635,((typeof k_18633 === 'string')?cljs.core.keyword.call(null,k_18633):k_18633),plumbing$core$keywordize_map.call(null,v_18634)));

var G__18636 = cljs.core.next.call(null,seq__18607_18626__$1);
var G__18637 = null;
var G__18638 = (0);
var G__18639 = (0);
seq__18607_18613 = G__18636;
chunk__18608_18614 = G__18637;
count__18609_18615 = G__18638;
i__18610_18616 = G__18639;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10363__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4404__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4404__auto__)){
var pair__10432__auto__ = temp__4404__auto__;
return cljs.core.val.call(null,pair__10432__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__18640 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__18641 = cljs.core.next.call(null,ks);
m = G__18640;
ks = G__18641;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 * @param {...*} var_args
 */
plumbing.core.assoc_when = (function() { 
var plumbing$core$assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4122__auto__ = m;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4876__auto__ = (function plumbing$core$assoc_when_$_iter__18650(s__18651){
return (new cljs.core.LazySeq(null,(function (){
var s__18651__$1 = s__18651;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__18651__$1);
if(temp__4406__auto__){
var s__18651__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18651__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__18651__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__18653 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__18652 = (0);
while(true){
if((i__18652 < size__4875__auto__)){
var vec__18656 = cljs.core._nth.call(null,c__4874__auto__,i__18652);
var k = cljs.core.nth.call(null,vec__18656,(0),null);
var v = cljs.core.nth.call(null,vec__18656,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__18653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18658 = (i__18652 + (1));
i__18652 = G__18658;
continue;
} else {
var G__18659 = (i__18652 + (1));
i__18652 = G__18659;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18653),plumbing$core$assoc_when_$_iter__18650.call(null,cljs.core.chunk_rest.call(null,s__18651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18653),null);
}
} else {
var vec__18657 = cljs.core.first.call(null,s__18651__$2);
var k = cljs.core.nth.call(null,vec__18657,(0),null);
var v = cljs.core.nth.call(null,vec__18657,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$assoc_when_$_iter__18650.call(null,cljs.core.rest.call(null,s__18651__$2)));
} else {
var G__18660 = cljs.core.rest.call(null,s__18651__$2);
s__18651__$1 = G__18660;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4876__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var plumbing$core$assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__18661__i = 0, G__18661__a = new Array(arguments.length -  1);
while (G__18661__i < G__18661__a.length) {G__18661__a[G__18661__i] = arguments[G__18661__i + 1]; ++G__18661__i;}
  kvs = new cljs.core.IndexedSeq(G__18661__a,0);
} 
return plumbing$core$assoc_when__delegate.call(this,m,kvs);};
plumbing$core$assoc_when.cljs$lang$maxFixedArity = 1;
plumbing$core$assoc_when.cljs$lang$applyTo = (function (arglist__18662){
var m = cljs.core.first(arglist__18662);
var kvs = cljs.core.rest(arglist__18662);
return plumbing$core$assoc_when__delegate(m,kvs);
});
plumbing$core$assoc_when.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$assoc_when__delegate;
return plumbing$core$assoc_when;
})()
;
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 * @param {...*} var_args
 */
plumbing.core.update_in_when = (function() { 
var plumbing$core$update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var plumbing$core$update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__18663__i = 0, G__18663__a = new Array(arguments.length -  3);
while (G__18663__i < G__18663__a.length) {G__18663__a[G__18663__i] = arguments[G__18663__i + 3]; ++G__18663__i;}
  args = new cljs.core.IndexedSeq(G__18663__a,0);
} 
return plumbing$core$update_in_when__delegate.call(this,m,key_seq,f,args);};
plumbing$core$update_in_when.cljs$lang$maxFixedArity = 3;
plumbing$core$update_in_when.cljs$lang$applyTo = (function (arglist__18664){
var m = cljs.core.first(arglist__18664);
arglist__18664 = cljs.core.next(arglist__18664);
var key_seq = cljs.core.first(arglist__18664);
arglist__18664 = cljs.core.next(arglist__18664);
var f = cljs.core.first(arglist__18664);
var args = cljs.core.rest(arglist__18664);
return plumbing$core$update_in_when__delegate(m,key_seq,f,args);
});
plumbing$core$update_in_when.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$update_in_when__delegate;
return plumbing$core$update_in_when;
})()
;
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4406__auto__ = cljs.core.next.call(null,s);
if(temp__4406__auto__){
var n = temp__4406__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function() {
var plumbing$core$sum = null;
var plumbing$core$sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var plumbing$core$sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
plumbing$core$sum = function(f,xs){
switch(arguments.length){
case 1:
return plumbing$core$sum__1.call(this,f);
case 2:
return plumbing$core$sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$sum.cljs$core$IFn$_invoke$arity$1 = plumbing$core$sum__1;
plumbing$core$sum.cljs$core$IFn$_invoke$arity$2 = plumbing$core$sum__2;
return plumbing$core$sum;
})()
;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4406__auto__ = cljs.core.seq.call(null,xs);
if(temp__4406__auto__){
var xs__$1 = temp__4406__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4876__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__18669(s__18670){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__18670__$1 = s__18670;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__18670__$1);
if(temp__4406__auto__){
var s__18670__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18670__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__18670__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__18672 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__18671 = (0);
while(true){
if((i__18671 < size__4875__auto__)){
var x = cljs.core._nth.call(null,c__4874__auto__,i__18671);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__18672,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__18673 = (i__18671 + (1));
i__18671 = G__18673;
continue;
} else {
var G__18674 = (i__18671 + (1));
i__18671 = G__18674;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18672),plumbing$core$distinct_by_$_iter__18669.call(null,cljs.core.chunk_rest.call(null,s__18670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18672),null);
}
} else {
var x = cljs.core.first.call(null,s__18670__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__18669.call(null,cljs.core.rest.call(null,s__18670__$2)));
} else {
var G__18675 = cljs.core.rest.call(null,s__18670__$2);
s__18670__$1 = G__18675;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4876__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 * @param {...*} var_args
 */
plumbing.core.interleave_all = (function() { 
var plumbing$core$interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$interleave_all_$_helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$interleave_all_$_helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var plumbing$core$interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__18676__i = 0, G__18676__a = new Array(arguments.length -  0);
while (G__18676__i < G__18676__a.length) {G__18676__a[G__18676__i] = arguments[G__18676__i + 0]; ++G__18676__i;}
  colls = new cljs.core.IndexedSeq(G__18676__a,0);
} 
return plumbing$core$interleave_all__delegate.call(this,colls);};
plumbing$core$interleave_all.cljs$lang$maxFixedArity = 0;
plumbing$core$interleave_all.cljs$lang$applyTo = (function (arglist__18677){
var colls = cljs.core.seq(arglist__18677);
return plumbing$core$interleave_all__delegate(colls);
});
plumbing$core$interleave_all.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$interleave_all__delegate;
return plumbing$core$interleave_all;
})()
;
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 * @param {...*} var_args
 */
plumbing.core.conj_when = (function() {
var plumbing$core$conj_when = null;
var plumbing$core$conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var plumbing$core$conj_when__3 = (function() { 
var G__18678__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__18679 = plumbing$core$conj_when.call(null,coll,x);
var G__18680 = cljs.core.first.call(null,xs);
var G__18681 = cljs.core.next.call(null,xs);
coll = G__18679;
x = G__18680;
xs = G__18681;
continue;
} else {
return plumbing$core$conj_when.call(null,coll,x);
}
break;
}
};
var G__18678 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__18682__i = 0, G__18682__a = new Array(arguments.length -  2);
while (G__18682__i < G__18682__a.length) {G__18682__a[G__18682__i] = arguments[G__18682__i + 2]; ++G__18682__i;}
  xs = new cljs.core.IndexedSeq(G__18682__a,0);
} 
return G__18678__delegate.call(this,coll,x,xs);};
G__18678.cljs$lang$maxFixedArity = 2;
G__18678.cljs$lang$applyTo = (function (arglist__18683){
var coll = cljs.core.first(arglist__18683);
arglist__18683 = cljs.core.next(arglist__18683);
var x = cljs.core.first(arglist__18683);
var xs = cljs.core.rest(arglist__18683);
return G__18678__delegate(coll,x,xs);
});
G__18678.cljs$core$IFn$_invoke$arity$variadic = G__18678__delegate;
return G__18678;
})()
;
plumbing$core$conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return plumbing$core$conj_when__2.call(this,coll,x);
default:
var G__18684 = null;
if (arguments.length > 2) {
var G__18685__i = 0, G__18685__a = new Array(arguments.length -  2);
while (G__18685__i < G__18685__a.length) {G__18685__a[G__18685__i] = arguments[G__18685__i + 2]; ++G__18685__i;}
G__18684 = new cljs.core.IndexedSeq(G__18685__a,0);
}
return plumbing$core$conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__18684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$conj_when.cljs$lang$maxFixedArity = 2;
plumbing$core$conj_when.cljs$lang$applyTo = plumbing$core$conj_when__3.cljs$lang$applyTo;
plumbing$core$conj_when.cljs$core$IFn$_invoke$arity$2 = plumbing$core$conj_when__2;
plumbing$core$conj_when.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$conj_when;
})()
;
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 * @param {...*} var_args
 */
plumbing.core.swap_pair_BANG_ = (function() {
var plumbing$core$swap_pair_BANG_ = null;
var plumbing$core$swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var plumbing$core$swap_pair_BANG___3 = (function() { 
var G__18687__delegate = function (a,f,args){
return plumbing$core$swap_pair_BANG_.call(null,a,(function (p1__18686_SHARP_){
return cljs.core.apply.call(null,f,p1__18686_SHARP_,args);
}));
};
var G__18687 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__18688__i = 0, G__18688__a = new Array(arguments.length -  2);
while (G__18688__i < G__18688__a.length) {G__18688__a[G__18688__i] = arguments[G__18688__i + 2]; ++G__18688__i;}
  args = new cljs.core.IndexedSeq(G__18688__a,0);
} 
return G__18687__delegate.call(this,a,f,args);};
G__18687.cljs$lang$maxFixedArity = 2;
G__18687.cljs$lang$applyTo = (function (arglist__18689){
var a = cljs.core.first(arglist__18689);
arglist__18689 = cljs.core.next(arglist__18689);
var f = cljs.core.first(arglist__18689);
var args = cljs.core.rest(arglist__18689);
return G__18687__delegate(a,f,args);
});
G__18687.cljs$core$IFn$_invoke$arity$variadic = G__18687__delegate;
return G__18687;
})()
;
plumbing$core$swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return plumbing$core$swap_pair_BANG___2.call(this,a,f);
default:
var G__18690 = null;
if (arguments.length > 2) {
var G__18691__i = 0, G__18691__a = new Array(arguments.length -  2);
while (G__18691__i < G__18691__a.length) {G__18691__a[G__18691__i] = arguments[G__18691__i + 2]; ++G__18691__i;}
G__18690 = new cljs.core.IndexedSeq(G__18691__a,0);
}
return plumbing$core$swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__18690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
plumbing$core$swap_pair_BANG_.cljs$lang$applyTo = plumbing$core$swap_pair_BANG___3.cljs$lang$applyTo;
plumbing$core$swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = plumbing$core$swap_pair_BANG___2;
plumbing$core$swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$swap_pair_BANG_;
})()
;
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 * @param {...*} var_args
 */
plumbing.core.mapply = (function() {
var plumbing$core$mapply = null;
var plumbing$core$mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var plumbing$core$mapply__3 = (function() { 
var G__18692__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__18692 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__18693__i = 0, G__18693__a = new Array(arguments.length -  2);
while (G__18693__i < G__18693__a.length) {G__18693__a[G__18693__i] = arguments[G__18693__i + 2]; ++G__18693__i;}
  args = new cljs.core.IndexedSeq(G__18693__a,0);
} 
return G__18692__delegate.call(this,f,arg,args);};
G__18692.cljs$lang$maxFixedArity = 2;
G__18692.cljs$lang$applyTo = (function (arglist__18694){
var f = cljs.core.first(arglist__18694);
arglist__18694 = cljs.core.next(arglist__18694);
var arg = cljs.core.first(arglist__18694);
var args = cljs.core.rest(arglist__18694);
return G__18692__delegate(f,arg,args);
});
G__18692.cljs$core$IFn$_invoke$arity$variadic = G__18692__delegate;
return G__18692;
})()
;
plumbing$core$mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return plumbing$core$mapply__2.call(this,f,arg);
default:
var G__18695 = null;
if (arguments.length > 2) {
var G__18696__i = 0, G__18696__a = new Array(arguments.length -  2);
while (G__18696__i < G__18696__a.length) {G__18696__a[G__18696__i] = arguments[G__18696__i + 2]; ++G__18696__i;}
G__18695 = new cljs.core.IndexedSeq(G__18696__a,0);
}
return plumbing$core$mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__18695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plumbing$core$mapply.cljs$lang$maxFixedArity = 2;
plumbing$core$mapply.cljs$lang$applyTo = plumbing$core$mapply__3.cljs$lang$applyTo;
plumbing$core$mapply.cljs$core$IFn$_invoke$arity$2 = plumbing$core$mapply__2;
plumbing$core$mapply.cljs$core$IFn$_invoke$arity$variadic = plumbing$core$mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return plumbing$core$mapply;
})()
;
