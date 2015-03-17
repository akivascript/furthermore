// Compiled by ClojureScript 0.0-3119 {}
goog.provide('furthermore.routing');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('om.core');
goog.require('cljs.core.async');
furthermore.routing.pub_chan = cljs.core.async.chan.call(null);
furthermore.routing.sub_chan = cljs.core.async.pub.call(null,furthermore.routing.pub_chan,new cljs.core.Keyword(null,"topic","topic",-1960480691));
furthermore.routing.consume_events = (function furthermore$routing$consume_events(owner,topic,fn){
var sub_chan = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"sub-chan","sub-chan",-2012438215));
var event_chan = cljs.core.async.sub.call(null,sub_chan,topic,cljs.core.async.chan.call(null));
var c__13496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto__,event_chan,sub_chan){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto__,event_chan,sub_chan){
return (function (state_16792){
var state_val_16793 = (state_16792[(1)]);
if((state_val_16793 === (5))){
var inst_16787 = (state_16792[(2)]);
var inst_16783 = inst_16787;
var state_16792__$1 = (function (){var statearr_16794 = state_16792;
(statearr_16794[(7)] = inst_16783);

return statearr_16794;
})();
var statearr_16795_16806 = state_16792__$1;
(statearr_16795_16806[(2)] = null);

(statearr_16795_16806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16793 === (4))){
var inst_16790 = (state_16792[(2)]);
var state_16792__$1 = state_16792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16792__$1,inst_16790);
} else {
if((state_val_16793 === (3))){
var inst_16783 = (state_16792[(7)]);
var inst_16785 = fn.call(null,inst_16783);
var state_16792__$1 = (function (){var statearr_16796 = state_16792;
(statearr_16796[(8)] = inst_16785);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16792__$1,(5),event_chan);
} else {
if((state_val_16793 === (2))){
var inst_16782 = (state_16792[(2)]);
var inst_16783 = inst_16782;
var state_16792__$1 = (function (){var statearr_16797 = state_16792;
(statearr_16797[(7)] = inst_16783);

return statearr_16797;
})();
var statearr_16798_16807 = state_16792__$1;
(statearr_16798_16807[(2)] = null);

(statearr_16798_16807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16793 === (1))){
var state_16792__$1 = state_16792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16792__$1,(2),event_chan);
} else {
return null;
}
}
}
}
}
});})(c__13496__auto__,event_chan,sub_chan))
;
return ((function (switch__13431__auto__,c__13496__auto__,event_chan,sub_chan){
return (function() {
var furthermore$routing$consume_events_$_state_machine__13432__auto__ = null;
var furthermore$routing$consume_events_$_state_machine__13432__auto____0 = (function (){
var statearr_16802 = [null,null,null,null,null,null,null,null,null];
(statearr_16802[(0)] = furthermore$routing$consume_events_$_state_machine__13432__auto__);

(statearr_16802[(1)] = (1));

return statearr_16802;
});
var furthermore$routing$consume_events_$_state_machine__13432__auto____1 = (function (state_16792){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_16792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e16803){if((e16803 instanceof Object)){
var ex__13435__auto__ = e16803;
var statearr_16804_16808 = state_16792;
(statearr_16804_16808[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16809 = state_16792;
state_16792 = G__16809;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
furthermore$routing$consume_events_$_state_machine__13432__auto__ = function(state_16792){
switch(arguments.length){
case 0:
return furthermore$routing$consume_events_$_state_machine__13432__auto____0.call(this);
case 1:
return furthermore$routing$consume_events_$_state_machine__13432__auto____1.call(this,state_16792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
furthermore$routing$consume_events_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = furthermore$routing$consume_events_$_state_machine__13432__auto____0;
furthermore$routing$consume_events_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = furthermore$routing$consume_events_$_state_machine__13432__auto____1;
return furthermore$routing$consume_events_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto__,event_chan,sub_chan))
})();
var state__13498__auto__ = (function (){var statearr_16805 = f__13497__auto__.call(null);
(statearr_16805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto__);

return statearr_16805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto__,event_chan,sub_chan))
);

return c__13496__auto__;
});
/**
 * @param {...*} var_args
 */
furthermore.routing.change_view = (function() { 
var furthermore$routing$change_view__delegate = function (view,view_name,p__16810){
var map__16812 = p__16810;
var map__16812__$1 = ((cljs.core.seq_QMARK_.call(null,map__16812))?cljs.core.apply.call(null,cljs.core.hash_map,map__16812):map__16812);
var data = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var init_state = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var view_map = (function (){var view_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"view-name","view-name",719214930),view_name], null);
var view_map__$1 = (cljs.core.truth_(init_state)?cljs.core.assoc.call(null,view_map,new cljs.core.Keyword(null,"view-init-state","view-init-state",-1113096971),init_state):view_map);
var view_map__$2 = (cljs.core.truth_(data)?cljs.core.assoc.call(null,view_map__$1,new cljs.core.Keyword(null,"data","data",-232669377),data):view_map__$1);
return view_map__$2;
})();
return cljs.core.async.put_BANG_.call(null,furthermore.routing.pub_chan,view_map);
};
var furthermore$routing$change_view = function (view,view_name,var_args){
var p__16810 = null;
if (arguments.length > 2) {
var G__16813__i = 0, G__16813__a = new Array(arguments.length -  2);
while (G__16813__i < G__16813__a.length) {G__16813__a[G__16813__i] = arguments[G__16813__i + 2]; ++G__16813__i;}
  p__16810 = new cljs.core.IndexedSeq(G__16813__a,0);
} 
return furthermore$routing$change_view__delegate.call(this,view,view_name,p__16810);};
furthermore$routing$change_view.cljs$lang$maxFixedArity = 2;
furthermore$routing$change_view.cljs$lang$applyTo = (function (arglist__16814){
var view = cljs.core.first(arglist__16814);
arglist__16814 = cljs.core.next(arglist__16814);
var view_name = cljs.core.first(arglist__16814);
var p__16810 = cljs.core.rest(arglist__16814);
return furthermore$routing$change_view__delegate(view,view_name,p__16810);
});
furthermore$routing$change_view.cljs$core$IFn$_invoke$arity$variadic = furthermore$routing$change_view__delegate;
return furthermore$routing$change_view;
})()
;
