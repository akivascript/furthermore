// Compiled by ClojureScript 0.0-3119 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__8459__8460__auto__){
var G__17844 = p1__8459__8460__auto__;
if(G__17844){
var bit__4796__auto__ = null;
if(cljs.core.truth_((function (){var or__4122__auto__ = bit__4796__auto__;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return G__17844.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__17844.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__17844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__17844);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__17845_SHARP_){
return (cljs.core.val.call(null,p1__17845_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__17847 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__17847,(0),null);
var v = cljs.core.nth.call(null,vec__17847,(1),null);
var p = vec__17847;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___17853 = schema.utils.use_fn_validation;
var output_schema17848_17854 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema17849_17855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker17850_17856 = schema.core.checker.call(null,input_schema17849_17855);
var output_checker17851_17857 = schema.core.checker.call(null,output_schema17848_17854);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___17853,output_schema17848_17854,input_schema17849_17855,input_checker17850_17856,output_checker17851_17857){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__17852){
var validate__8429__auto__ = ufv___17853.get_cell();
if(cljs.core.truth_(validate__8429__auto__)){
var args__8430__auto___17858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17852], null);
var temp__4406__auto___17859 = input_checker17850_17856.call(null,args__8430__auto___17858);
if(cljs.core.truth_(temp__4406__auto___17859)){
var error__8431__auto___17860 = temp__4406__auto___17859;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__8431__auto___17860)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17860,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___17858,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17849_17855,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var k = G__17852;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__8429__auto__)){
var temp__4406__auto___17861 = output_checker17851_17857.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___17861)){
var error__8431__auto___17862 = temp__4406__auto___17861;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__8431__auto___17862)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17862,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17848_17854,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___17853,output_schema17848_17854,input_schema17849_17855,input_checker17850_17856,output_checker17851_17857))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema17848_17854,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17849_17855], null)));
var ufv___17868 = schema.utils.use_fn_validation;
var output_schema17863_17869 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema17864_17870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker17865_17871 = schema.core.checker.call(null,input_schema17864_17870);
var output_checker17866_17872 = schema.core.checker.call(null,output_schema17863_17869);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___17868,output_schema17863_17869,input_schema17864_17870,input_checker17865_17871,output_checker17866_17872){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__17867){
var validate__8429__auto__ = ufv___17868.get_cell();
if(cljs.core.truth_(validate__8429__auto__)){
var args__8430__auto___17873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17867], null);
var temp__4406__auto___17874 = input_checker17865_17871.call(null,args__8430__auto___17873);
if(cljs.core.truth_(temp__4406__auto___17874)){
var error__8431__auto___17875 = temp__4406__auto___17874;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__8431__auto___17875)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17875,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___17873,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17864_17870,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var s = G__17867;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__8429__auto__)){
var temp__4406__auto___17876 = output_checker17866_17872.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___17876)){
var error__8431__auto___17877 = temp__4406__auto___17876;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__8431__auto___17877)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17877,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17863_17869,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___17868,output_schema17863_17869,input_schema17864_17870,input_checker17865_17871,output_checker17866_17872))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema17863_17869,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17864_17870], null)));
var ufv___17883 = schema.utils.use_fn_validation;
var output_schema17878_17884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema17879_17885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker17880_17886 = schema.core.checker.call(null,input_schema17879_17885);
var output_checker17881_17887 = schema.core.checker.call(null,output_schema17878_17884);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___17883,output_schema17878_17884,input_schema17879_17885,input_checker17880_17886,output_checker17881_17887){
return (function plumbing$fnk$schema$split_schema_keys(G__17882){
var validate__8429__auto__ = ufv___17883.get_cell();
if(cljs.core.truth_(validate__8429__auto__)){
var args__8430__auto___17888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17882], null);
var temp__4406__auto___17889 = input_checker17880_17886.call(null,args__8430__auto___17888);
if(cljs.core.truth_(temp__4406__auto___17889)){
var error__8431__auto___17890 = temp__4406__auto___17889;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__8431__auto___17890)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17890,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___17888,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17879_17885,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var s = G__17882;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__8429__auto__)){
var temp__4406__auto___17891 = output_checker17881_17887.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___17891)){
var error__8431__auto___17892 = temp__4406__auto___17891;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__8431__auto___17892)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17892,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17878_17884,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___17883,output_schema17878_17884,input_schema17879_17885,input_checker17880_17886,output_checker17881_17887))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema17878_17884,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17879_17885], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 * @param {...*} var_args
 */
plumbing.fnk.schema.merge_on_with = (function() { 
var plumbing$fnk$schema$merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__17896){
var vec__17897 = p__17896;
var k = cljs.core.nth.call(null,vec__17897,(0),null);
var v = cljs.core.nth.call(null,vec__17897,(1),null);
var pk = key_project.call(null,k);
var temp__4404__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__17898 = temp__4404__auto__;
var ok = cljs.core.nth.call(null,vec__17898,(0),null);
var ov = cljs.core.nth.call(null,vec__17898,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var plumbing$fnk$schema$merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__17899__i = 0, G__17899__a = new Array(arguments.length -  3);
while (G__17899__i < G__17899__a.length) {G__17899__a[G__17899__i] = arguments[G__17899__i + 3]; ++G__17899__i;}
  maps = new cljs.core.IndexedSeq(G__17899__a,0);
} 
return plumbing$fnk$schema$merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
plumbing$fnk$schema$merge_on_with.cljs$lang$maxFixedArity = 3;
plumbing$fnk$schema$merge_on_with.cljs$lang$applyTo = (function (arglist__17900){
var key_project = cljs.core.first(arglist__17900);
arglist__17900 = cljs.core.next(arglist__17900);
var key_combine = cljs.core.first(arglist__17900);
arglist__17900 = cljs.core.next(arglist__17900);
var val_combine = cljs.core.first(arglist__17900);
var maps = cljs.core.rest(arglist__17900);
return plumbing$fnk$schema$merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
plumbing$fnk$schema$merge_on_with.cljs$core$IFn$_invoke$arity$variadic = plumbing$fnk$schema$merge_on_with__delegate;
return plumbing$fnk$schema$merge_on_with;
})()
;
var ufv___17908 = schema.utils.use_fn_validation;
var output_schema17902_17909 = plumbing.fnk.schema.InputSchema;
var input_schema17903_17910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker17904_17911 = schema.core.checker.call(null,input_schema17903_17910);
var output_checker17905_17912 = schema.core.checker.call(null,output_schema17902_17909);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912){
return (function plumbing$fnk$schema$union_input_schemata(G__17906,G__17907){
var validate__8429__auto__ = ufv___17908.get_cell();
if(cljs.core.truth_(validate__8429__auto__)){
var args__8430__auto___17913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17906,G__17907], null);
var temp__4406__auto___17914 = input_checker17904_17911.call(null,args__8430__auto___17913);
if(cljs.core.truth_(temp__4406__auto___17914)){
var error__8431__auto___17915 = temp__4406__auto___17914;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__8431__auto___17915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17915,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___17913,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17903_17910,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var i1 = G__17906;
var i2 = G__17907;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__8429__auto__,ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912){
return (function (p1__17901_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__17901_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__17901_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__8429__auto__,ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912))
,((function (validate__8429__auto__,ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__8429__auto__,ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912))
,((function (validate__8429__auto__,ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__8429__auto__,ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__8429__auto__)){
var temp__4406__auto___17916 = output_checker17905_17912.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___17916)){
var error__8431__auto___17917 = temp__4406__auto___17916;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__8431__auto___17917)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17917,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17902_17909,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___17908,output_schema17902_17909,input_schema17903_17910,input_checker17904_17911,output_checker17905_17912))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema17902_17909,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17903_17910], null)));
var ufv___17923 = schema.utils.use_fn_validation;
var output_schema17918_17924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema17919_17925 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker17920_17926 = schema.core.checker.call(null,input_schema17919_17925);
var output_checker17921_17927 = schema.core.checker.call(null,output_schema17918_17924);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___17923,output_schema17918_17924,input_schema17919_17925,input_checker17920_17926,output_checker17921_17927){
return (function plumbing$fnk$schema$required_toplevel_keys(G__17922){
var validate__8429__auto__ = ufv___17923.get_cell();
if(cljs.core.truth_(validate__8429__auto__)){
var args__8430__auto___17928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17922], null);
var temp__4406__auto___17929 = input_checker17920_17926.call(null,args__8430__auto___17928);
if(cljs.core.truth_(temp__4406__auto___17929)){
var error__8431__auto___17930 = temp__4406__auto___17929;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__8431__auto___17930)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17930,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___17928,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17919_17925,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var input_schema = G__17922;
while(true){
return cljs.core.keep.call(null,((function (validate__8429__auto__,ufv___17923,output_schema17918_17924,input_schema17919_17925,input_checker17920_17926,output_checker17921_17927){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__8429__auto__,ufv___17923,output_schema17918_17924,input_schema17919_17925,input_checker17920_17926,output_checker17921_17927))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__8429__auto__)){
var temp__4406__auto___17931 = output_checker17921_17927.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___17931)){
var error__8431__auto___17932 = temp__4406__auto___17931;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__8431__auto___17932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___17932,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17918_17924,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___17923,output_schema17918_17924,input_schema17919_17925,input_checker17920_17926,output_checker17921_17927))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema17918_17924,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17919_17925], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4876__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__17941(s__17942){
return (new cljs.core.LazySeq(null,(function (){
var s__17942__$1 = s__17942;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__17942__$1);
if(temp__4406__auto__){
var s__17942__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17942__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__17942__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__17944 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__17943 = (0);
while(true){
if((i__17943 < size__4875__auto__)){
var vec__17947 = cljs.core._nth.call(null,c__4874__auto__,i__17943);
var k = cljs.core.nth.call(null,vec__17947,(0),null);
var v = cljs.core.nth.call(null,vec__17947,(1),null);
cljs.core.chunk_append.call(null,b__17944,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__17949 = (i__17943 + (1));
i__17943 = G__17949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17944),plumbing$fnk$schema$guess_expr_output_schema_$_iter__17941.call(null,cljs.core.chunk_rest.call(null,s__17942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17944),null);
}
} else {
var vec__17948 = cljs.core.first.call(null,s__17942__$2);
var k = cljs.core.nth.call(null,vec__17948,(0),null);
var v = cljs.core.nth.call(null,vec__17948,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__17941.call(null,cljs.core.rest.call(null,s__17942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4876__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4876__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__17958(s__17959){
return (new cljs.core.LazySeq(null,(function (){
var s__17959__$1 = s__17959;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__17959__$1);
if(temp__4406__auto__){
var s__17959__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17959__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__17959__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__17961 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__17960 = (0);
while(true){
if((i__17960 < size__4875__auto__)){
var vec__17964 = cljs.core._nth.call(null,c__4874__auto__,i__17960);
var k = cljs.core.nth.call(null,vec__17964,(0),null);
var v = cljs.core.nth.call(null,vec__17964,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__17961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__17966 = (i__17960 + (1));
i__17960 = G__17966;
continue;
} else {
var G__17967 = (i__17960 + (1));
i__17960 = G__17967;
continue;
}
} else {
var G__17968 = (i__17960 + (1));
i__17960 = G__17968;
continue;
}
} else {
var G__17969 = (i__17960 + (1));
i__17960 = G__17969;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17961),plumbing$fnk$schema$schema_diff_$_iter__17958.call(null,cljs.core.chunk_rest.call(null,s__17959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17961),null);
}
} else {
var vec__17965 = cljs.core.first.call(null,s__17959__$2);
var k = cljs.core.nth.call(null,vec__17965,(0),null);
var v = cljs.core.nth.call(null,vec__17965,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__17958.call(null,cljs.core.rest.call(null,s__17959__$2)));
} else {
var G__17970 = cljs.core.rest.call(null,s__17959__$2);
s__17959__$1 = G__17970;
continue;
}
} else {
var G__17971 = cljs.core.rest.call(null,s__17959__$2);
s__17959__$1 = G__17971;
continue;
}
} else {
var G__17972 = cljs.core.rest.call(null,s__17959__$2);
s__17959__$1 = G__17972;
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
return iter__4876__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___17995 = schema.utils.use_fn_validation;
var output_schema17973_17996 = schema.core.Any;
var input_schema17974_17997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker17975_17998 = schema.core.checker.call(null,input_schema17974_17997);
var output_checker17976_17999 = schema.core.checker.call(null,output_schema17973_17996);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___17995,output_schema17973_17996,input_schema17974_17997,input_checker17975_17998,output_checker17976_17999){
return (function plumbing$fnk$schema$compose_schemata(G__17977,G__17978){
var validate__8429__auto__ = true;
if(validate__8429__auto__){
var args__8430__auto___18000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17977,G__17978], null);
var temp__4406__auto___18001 = input_checker17975_17998.call(null,args__8430__auto___18000);
if(cljs.core.truth_(temp__4406__auto___18001)){
var error__8431__auto___18002 = temp__4406__auto___18001;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__8431__auto___18002)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___18002,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___18000,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17974_17997,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var G__17989 = G__17977;
var vec__17991 = G__17989;
var i2 = cljs.core.nth.call(null,vec__17991,(0),null);
var o2 = cljs.core.nth.call(null,vec__17991,(1),null);
var G__17990 = G__17978;
var vec__17992 = G__17990;
var i1 = cljs.core.nth.call(null,vec__17992,(0),null);
var o1 = cljs.core.nth.call(null,vec__17992,(1),null);
var G__17989__$1 = G__17989;
var G__17990__$1 = G__17990;
while(true){
var vec__17993 = G__17989__$1;
var i2__$1 = cljs.core.nth.call(null,vec__17993,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__17993,(1),null);
var vec__17994 = G__17990__$1;
var i1__$1 = cljs.core.nth.call(null,vec__17994,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__17994,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__8429__auto__){
var temp__4406__auto___18003 = output_checker17976_17999.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___18003)){
var error__8431__auto___18004 = temp__4406__auto___18003;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__8431__auto___18004)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___18004,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17973_17996,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___17995,output_schema17973_17996,input_schema17974_17997,input_checker17975_17998,output_checker17976_17999))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema17973_17996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17974_17997], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___18083 = schema.utils.use_fn_validation;
var output_schema18005_18084 = schema.core.Any;
var input_schema18006_18085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker18007_18086 = schema.core.checker.call(null,input_schema18006_18085);
var output_checker18008_18087 = schema.core.checker.call(null,output_schema18005_18084);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087){
return (function plumbing$fnk$schema$split_schema(G__18009,G__18010){
var validate__8429__auto__ = ufv___18083.get_cell();
if(cljs.core.truth_(validate__8429__auto__)){
var args__8430__auto___18088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18009,G__18010], null);
var temp__4406__auto___18089 = input_checker18007_18086.call(null,args__8430__auto___18088);
if(cljs.core.truth_(temp__4406__auto___18089)){
var error__8431__auto___18090 = temp__4406__auto___18089;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__8431__auto___18090)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___18090,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___18088,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18006_18085,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var s = G__18009;
var ks = G__18010;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4876__auto__ = ((function (ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087){
return (function plumbing$fnk$schema$split_schema_$_iter__18047(s__18048){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087){
return (function (){
var s__18048__$1 = s__18048;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__18048__$1);
if(temp__4406__auto__){
var s__18048__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18048__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__18048__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__18050 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__18049 = (0);
while(true){
if((i__18049 < size__4875__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4874__auto__,i__18049);
cljs.core.chunk_append.call(null,b__18050,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4876__auto__ = ((function (i__18049,in_QMARK_,c__4874__auto__,size__4875__auto__,b__18050,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087){
return (function plumbing$fnk$schema$split_schema_$_iter__18047_$_iter__18067(s__18068){
return (new cljs.core.LazySeq(null,((function (i__18049,in_QMARK_,c__4874__auto__,size__4875__auto__,b__18050,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087){
return (function (){
var s__18068__$1 = s__18068;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__18068__$1);
if(temp__4406__auto____$1){
var s__18068__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18068__$2)){
var c__4874__auto____$1 = cljs.core.chunk_first.call(null,s__18068__$2);
var size__4875__auto____$1 = cljs.core.count.call(null,c__4874__auto____$1);
var b__18070 = cljs.core.chunk_buffer.call(null,size__4875__auto____$1);
if((function (){var i__18069 = (0);
while(true){
if((i__18069 < size__4875__auto____$1)){
var vec__18073 = cljs.core._nth.call(null,c__4874__auto____$1,i__18069);
var k = cljs.core.nth.call(null,vec__18073,(0),null);
var v = cljs.core.nth.call(null,vec__18073,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__18070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18091 = (i__18069 + (1));
i__18069 = G__18091;
continue;
} else {
var G__18092 = (i__18069 + (1));
i__18069 = G__18092;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18070),plumbing$fnk$schema$split_schema_$_iter__18047_$_iter__18067.call(null,cljs.core.chunk_rest.call(null,s__18068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18070),null);
}
} else {
var vec__18074 = cljs.core.first.call(null,s__18068__$2);
var k = cljs.core.nth.call(null,vec__18074,(0),null);
var v = cljs.core.nth.call(null,vec__18074,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__18047_$_iter__18067.call(null,cljs.core.rest.call(null,s__18068__$2)));
} else {
var G__18093 = cljs.core.rest.call(null,s__18068__$2);
s__18068__$1 = G__18093;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__18049,in_QMARK_,c__4874__auto__,size__4875__auto__,b__18050,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087))
,null,null));
});})(i__18049,in_QMARK_,c__4874__auto__,size__4875__auto__,b__18050,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087))
;
return iter__4876__auto__.call(null,s);
})()));

var G__18094 = (i__18049 + (1));
i__18049 = G__18094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18050),plumbing$fnk$schema$split_schema_$_iter__18047.call(null,cljs.core.chunk_rest.call(null,s__18048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18050),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__18048__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4876__auto__ = ((function (in_QMARK_,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087){
return (function plumbing$fnk$schema$split_schema_$_iter__18047_$_iter__18075(s__18076){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087){
return (function (){
var s__18076__$1 = s__18076;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__18076__$1);
if(temp__4406__auto____$1){
var s__18076__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18076__$2)){
var c__4874__auto__ = cljs.core.chunk_first.call(null,s__18076__$2);
var size__4875__auto__ = cljs.core.count.call(null,c__4874__auto__);
var b__18078 = cljs.core.chunk_buffer.call(null,size__4875__auto__);
if((function (){var i__18077 = (0);
while(true){
if((i__18077 < size__4875__auto__)){
var vec__18081 = cljs.core._nth.call(null,c__4874__auto__,i__18077);
var k = cljs.core.nth.call(null,vec__18081,(0),null);
var v = cljs.core.nth.call(null,vec__18081,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__18078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18095 = (i__18077 + (1));
i__18077 = G__18095;
continue;
} else {
var G__18096 = (i__18077 + (1));
i__18077 = G__18096;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18078),plumbing$fnk$schema$split_schema_$_iter__18047_$_iter__18075.call(null,cljs.core.chunk_rest.call(null,s__18076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18078),null);
}
} else {
var vec__18082 = cljs.core.first.call(null,s__18076__$2);
var k = cljs.core.nth.call(null,vec__18082,(0),null);
var v = cljs.core.nth.call(null,vec__18082,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__18047_$_iter__18075.call(null,cljs.core.rest.call(null,s__18076__$2)));
} else {
var G__18097 = cljs.core.rest.call(null,s__18076__$2);
s__18076__$1 = G__18097;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087))
,null,null));
});})(in_QMARK_,s__18048__$2,temp__4406__auto__,ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087))
;
return iter__4876__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__18047.call(null,cljs.core.rest.call(null,s__18048__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087))
,null,null));
});})(ks__$1,validate__8429__auto__,ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087))
;
return iter__4876__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__8429__auto__)){
var temp__4406__auto___18098 = output_checker18008_18087.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___18098)){
var error__8431__auto___18099 = temp__4406__auto___18098;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__8431__auto___18099)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___18099,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18005_18084,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___18083,output_schema18005_18084,input_schema18006_18085,input_checker18007_18086,output_checker18008_18087))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema18005_18084,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18006_18085], null)));
var ufv___18130 = schema.utils.use_fn_validation;
var output_schema18100_18131 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema18101_18132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker18102_18133 = schema.core.checker.call(null,input_schema18101_18132);
var output_checker18103_18134 = schema.core.checker.call(null,output_schema18100_18131);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___18130,output_schema18100_18131,input_schema18101_18132,input_checker18102_18133,output_checker18103_18134){
return (function plumbing$fnk$schema$sequence_schemata(G__18104,G__18105){
var validate__8429__auto__ = ufv___18130.get_cell();
if(cljs.core.truth_(validate__8429__auto__)){
var args__8430__auto___18135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18104,G__18105], null);
var temp__4406__auto___18136 = input_checker18102_18133.call(null,args__8430__auto___18135);
if(cljs.core.truth_(temp__4406__auto___18136)){
var error__8431__auto___18137 = temp__4406__auto___18136;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__8431__auto___18137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___18137,new cljs.core.Keyword(null,"value","value",305978217),args__8430__auto___18135,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18101_18132,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__8432__auto__ = (function (){var G__18121 = G__18104;
var vec__18123 = G__18121;
var i1 = cljs.core.nth.call(null,vec__18123,(0),null);
var o1 = cljs.core.nth.call(null,vec__18123,(1),null);
var G__18122 = G__18105;
var vec__18124 = G__18122;
var k = cljs.core.nth.call(null,vec__18124,(0),null);
var vec__18125 = cljs.core.nth.call(null,vec__18124,(1),null);
var i2 = cljs.core.nth.call(null,vec__18125,(0),null);
var o2 = cljs.core.nth.call(null,vec__18125,(1),null);
var G__18121__$1 = G__18121;
var G__18122__$1 = G__18122;
while(true){
var vec__18126 = G__18121__$1;
var i1__$1 = cljs.core.nth.call(null,vec__18126,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__18126,(1),null);
var vec__18127 = G__18122__$1;
var k__$1 = cljs.core.nth.call(null,vec__18127,(0),null);
var vec__18128 = cljs.core.nth.call(null,vec__18127,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__18128,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__18128,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__18129 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__18129,(0),null);
var unused = cljs.core.nth.call(null,vec__18129,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__8429__auto__)){
var temp__4406__auto___18138 = output_checker18103_18134.call(null,o__8432__auto__);
if(cljs.core.truth_(temp__4406__auto___18138)){
var error__8431__auto___18139 = temp__4406__auto___18138;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__8431__auto___18139)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__8431__auto___18139,new cljs.core.Keyword(null,"value","value",305978217),o__8432__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18100_18131,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__8432__auto__;
});})(ufv___18130,output_schema18100_18131,input_schema18101_18132,input_checker18102_18133,output_checker18103_18134))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema18100_18131,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18101_18132], null)));
