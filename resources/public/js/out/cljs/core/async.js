// Compiled by ClojureScript 0.0-3119 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26002 = (function (f,fn_handler,meta26003){
this.f = f;
this.fn_handler = fn_handler;
this.meta26003 = meta26003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26004){
var self__ = this;
var _26004__$1 = this;
return self__.meta26003;
});

cljs.core.async.t26002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26004,meta26003__$1){
var self__ = this;
var _26004__$1 = this;
return (new cljs.core.async.t26002(self__.f,self__.fn_handler,meta26003__$1));
});

cljs.core.async.t26002.cljs$lang$type = true;

cljs.core.async.t26002.cljs$lang$ctorStr = "cljs.core.async/t26002";

cljs.core.async.t26002.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t26002");
});

cljs.core.async.__GT_t26002 = (function cljs$core$async$fn_handler_$___GT_t26002(f__$1,fn_handler__$1,meta26003){
return (new cljs.core.async.t26002(f__$1,fn_handler__$1,meta26003));
});

}

return (new cljs.core.async.t26002(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26006 = buff;
if(G__26006){
var bit__4796__auto__ = null;
if(cljs.core.truth_((function (){var or__4122__auto__ = bit__4796__auto__;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return G__26006.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26006.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26006);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26006);
}
});
/**
 * Creates a channel with an optional buffer. If buf-or-n is a number,
 * will create and use a fixed buffer of that size.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
cljs$core$async$chan = function(buf_or_n){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26007 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26007);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26007,ret){
return (function (){
return fn1.call(null,val_26007);
});})(val_26007,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4404__auto__)){
var ret = temp__4404__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4404__auto__)){
var retb = temp__4404__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4404__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4404__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5007__auto___26008 = n;
var x_26009 = (0);
while(true){
if((x_26009 < n__5007__auto___26008)){
(a[x_26009] = (0));

var G__26010 = (x_26009 + (1));
x_26009 = G__26010;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26011 = (i + (1));
i = G__26011;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26015 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26015 = (function (flag,alt_flag,meta26016){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26016 = meta26016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26015.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26017){
var self__ = this;
var _26017__$1 = this;
return self__.meta26016;
});})(flag))
;

cljs.core.async.t26015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26017,meta26016__$1){
var self__ = this;
var _26017__$1 = this;
return (new cljs.core.async.t26015(self__.flag,self__.alt_flag,meta26016__$1));
});})(flag))
;

cljs.core.async.t26015.cljs$lang$type = true;

cljs.core.async.t26015.cljs$lang$ctorStr = "cljs.core.async/t26015";

cljs.core.async.t26015.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t26015");
});})(flag))
;

cljs.core.async.__GT_t26015 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26015(flag__$1,alt_flag__$1,meta26016){
return (new cljs.core.async.t26015(flag__$1,alt_flag__$1,meta26016));
});})(flag))
;

}

return (new cljs.core.async.t26015(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26021 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26021 = (function (cb,flag,alt_handler,meta26022){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26022 = meta26022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26021.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26023){
var self__ = this;
var _26023__$1 = this;
return self__.meta26022;
});

cljs.core.async.t26021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26023,meta26022__$1){
var self__ = this;
var _26023__$1 = this;
return (new cljs.core.async.t26021(self__.cb,self__.flag,self__.alt_handler,meta26022__$1));
});

cljs.core.async.t26021.cljs$lang$type = true;

cljs.core.async.t26021.cljs$lang$ctorStr = "cljs.core.async/t26021";

cljs.core.async.t26021.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t26021");
});

cljs.core.async.__GT_t26021 = (function cljs$core$async$alt_handler_$___GT_t26021(cb__$1,flag__$1,alt_handler__$1,meta26022){
return (new cljs.core.async.t26021(cb__$1,flag__$1,alt_handler__$1,meta26022));
});

}

return (new cljs.core.async.t26021(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26024_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26024_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26025_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26025_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4122__auto__ = wport;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26026 = (i + (1));
i = G__26026;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4122__auto__ = ret;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4406__auto__ = (function (){var and__4110__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4110__auto__;
}
})();
if(cljs.core.truth_(temp__4406__auto__)){
var got = temp__4406__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__26027){
var map__26029 = p__26027;
var map__26029__$1 = ((cljs.core.seq_QMARK_.call(null,map__26029))?cljs.core.apply.call(null,cljs.core.hash_map,map__26029):map__26029);
var opts = map__26029__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__26027 = null;
if (arguments.length > 1) {
var G__26030__i = 0, G__26030__a = new Array(arguments.length -  1);
while (G__26030__i < G__26030__a.length) {G__26030__a[G__26030__i] = arguments[G__26030__i + 1]; ++G__26030__i;}
  p__26027 = new cljs.core.IndexedSeq(G__26030__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__26027);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__26031){
var ports = cljs.core.first(arglist__26031);
var p__26027 = cljs.core.rest(arglist__26031);
return cljs$core$async$alts_BANG___delegate(ports,p__26027);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values produced by applying f to each value taken from
 * the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26039 = (function (ch,f,map_LT_,meta26040){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26040 = meta26040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26042 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26042 = (function (fn1,_,meta26040,map_LT_,f,ch,meta26043){
this.fn1 = fn1;
this._ = _;
this.meta26040 = meta26040;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26043 = meta26043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26042.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26032_SHARP_){
return f1.call(null,(((p1__26032_SHARP_ == null))?null:self__.f.call(null,p1__26032_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26044){
var self__ = this;
var _26044__$1 = this;
return self__.meta26043;
});})(___$1))
;

cljs.core.async.t26042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26044,meta26043__$1){
var self__ = this;
var _26044__$1 = this;
return (new cljs.core.async.t26042(self__.fn1,self__._,self__.meta26040,self__.map_LT_,self__.f,self__.ch,meta26043__$1));
});})(___$1))
;

cljs.core.async.t26042.cljs$lang$type = true;

cljs.core.async.t26042.cljs$lang$ctorStr = "cljs.core.async/t26042";

cljs.core.async.t26042.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t26042");
});})(___$1))
;

cljs.core.async.__GT_t26042 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26042(fn1__$1,___$2,meta26040__$1,map_LT___$1,f__$1,ch__$1,meta26043){
return (new cljs.core.async.t26042(fn1__$1,___$2,meta26040__$1,map_LT___$1,f__$1,ch__$1,meta26043));
});})(___$1))
;

}

return (new cljs.core.async.t26042(fn1,___$1,self__.meta26040,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4110__auto__ = ret;
if(cljs.core.truth_(and__4110__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4110__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26039.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26041){
var self__ = this;
var _26041__$1 = this;
return self__.meta26040;
});

cljs.core.async.t26039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26041,meta26040__$1){
var self__ = this;
var _26041__$1 = this;
return (new cljs.core.async.t26039(self__.ch,self__.f,self__.map_LT_,meta26040__$1));
});

cljs.core.async.t26039.cljs$lang$type = true;

cljs.core.async.t26039.cljs$lang$ctorStr = "cljs.core.async/t26039";

cljs.core.async.t26039.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t26039");
});

cljs.core.async.__GT_t26039 = (function cljs$core$async$map_LT__$___GT_t26039(ch__$1,f__$1,map_LT___$1,meta26040){
return (new cljs.core.async.t26039(ch__$1,f__$1,map_LT___$1,meta26040));
});

}

return (new cljs.core.async.t26039(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26048 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26048 = (function (ch,f,map_GT_,meta26049){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26049 = meta26049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26050){
var self__ = this;
var _26050__$1 = this;
return self__.meta26049;
});

cljs.core.async.t26048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26050,meta26049__$1){
var self__ = this;
var _26050__$1 = this;
return (new cljs.core.async.t26048(self__.ch,self__.f,self__.map_GT_,meta26049__$1));
});

cljs.core.async.t26048.cljs$lang$type = true;

cljs.core.async.t26048.cljs$lang$ctorStr = "cljs.core.async/t26048";

cljs.core.async.t26048.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t26048");
});

cljs.core.async.__GT_t26048 = (function cljs$core$async$map_GT__$___GT_t26048(ch__$1,f__$1,map_GT___$1,meta26049){
return (new cljs.core.async.t26048(ch__$1,f__$1,map_GT___$1,meta26049));
});

}

return (new cljs.core.async.t26048(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns true to the
 * target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26054 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26054 = (function (ch,p,filter_GT_,meta26055){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26055 = meta26055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26056){
var self__ = this;
var _26056__$1 = this;
return self__.meta26055;
});

cljs.core.async.t26054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26056,meta26055__$1){
var self__ = this;
var _26056__$1 = this;
return (new cljs.core.async.t26054(self__.ch,self__.p,self__.filter_GT_,meta26055__$1));
});

cljs.core.async.t26054.cljs$lang$type = true;

cljs.core.async.t26054.cljs$lang$ctorStr = "cljs.core.async/t26054";

cljs.core.async.t26054.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t26054");
});

cljs.core.async.__GT_t26054 = (function cljs$core$async$filter_GT__$___GT_t26054(ch__$1,p__$1,filter_GT___$1,meta26055){
return (new cljs.core.async.t26054(ch__$1,p__$1,filter_GT___$1,meta26055));
});

}

return (new cljs.core.async.t26054(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns false to the
 * target channel.
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns true. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13496__auto___26139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___26139,out){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___26139,out){
return (function (state_26118){
var state_val_26119 = (state_26118[(1)]);
if((state_val_26119 === (7))){
var inst_26114 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26120_26140 = state_26118__$1;
(statearr_26120_26140[(2)] = inst_26114);

(statearr_26120_26140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (1))){
var state_26118__$1 = state_26118;
var statearr_26121_26141 = state_26118__$1;
(statearr_26121_26141[(2)] = null);

(statearr_26121_26141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (4))){
var inst_26100 = (state_26118[(7)]);
var inst_26100__$1 = (state_26118[(2)]);
var inst_26101 = (inst_26100__$1 == null);
var state_26118__$1 = (function (){var statearr_26122 = state_26118;
(statearr_26122[(7)] = inst_26100__$1);

return statearr_26122;
})();
if(cljs.core.truth_(inst_26101)){
var statearr_26123_26142 = state_26118__$1;
(statearr_26123_26142[(1)] = (5));

} else {
var statearr_26124_26143 = state_26118__$1;
(statearr_26124_26143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (6))){
var inst_26100 = (state_26118[(7)]);
var inst_26105 = p.call(null,inst_26100);
var state_26118__$1 = state_26118;
if(cljs.core.truth_(inst_26105)){
var statearr_26125_26144 = state_26118__$1;
(statearr_26125_26144[(1)] = (8));

} else {
var statearr_26126_26145 = state_26118__$1;
(statearr_26126_26145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (3))){
var inst_26116 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26118__$1,inst_26116);
} else {
if((state_val_26119 === (2))){
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26118__$1,(4),ch);
} else {
if((state_val_26119 === (11))){
var inst_26108 = (state_26118[(2)]);
var state_26118__$1 = state_26118;
var statearr_26127_26146 = state_26118__$1;
(statearr_26127_26146[(2)] = inst_26108);

(statearr_26127_26146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (9))){
var state_26118__$1 = state_26118;
var statearr_26128_26147 = state_26118__$1;
(statearr_26128_26147[(2)] = null);

(statearr_26128_26147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (5))){
var inst_26103 = cljs.core.async.close_BANG_.call(null,out);
var state_26118__$1 = state_26118;
var statearr_26129_26148 = state_26118__$1;
(statearr_26129_26148[(2)] = inst_26103);

(statearr_26129_26148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (10))){
var inst_26111 = (state_26118[(2)]);
var state_26118__$1 = (function (){var statearr_26130 = state_26118;
(statearr_26130[(8)] = inst_26111);

return statearr_26130;
})();
var statearr_26131_26149 = state_26118__$1;
(statearr_26131_26149[(2)] = null);

(statearr_26131_26149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26119 === (8))){
var inst_26100 = (state_26118[(7)]);
var state_26118__$1 = state_26118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26118__$1,(11),out,inst_26100);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___26139,out))
;
return ((function (switch__13431__auto__,c__13496__auto___26139,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__13432__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__13432__auto____0 = (function (){
var statearr_26135 = [null,null,null,null,null,null,null,null,null];
(statearr_26135[(0)] = cljs$core$async$filter_LT__$_state_machine__13432__auto__);

(statearr_26135[(1)] = (1));

return statearr_26135;
});
var cljs$core$async$filter_LT__$_state_machine__13432__auto____1 = (function (state_26118){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_26118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e26136){if((e26136 instanceof Object)){
var ex__13435__auto__ = e26136;
var statearr_26137_26150 = state_26118;
(statearr_26137_26150[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26151 = state_26118;
state_26118 = G__26151;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__13432__auto__ = function(state_26118){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__13432__auto____1.call(this,state_26118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__13432__auto____0;
cljs$core$async$filter_LT__$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__13432__auto____1;
return cljs$core$async$filter_LT__$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___26139,out))
})();
var state__13498__auto__ = (function (){var statearr_26138 = f__13497__auto__.call(null);
(statearr_26138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___26139);

return statearr_26138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___26139,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns false. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto__){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto__){
return (function (state_26317){
var state_val_26318 = (state_26317[(1)]);
if((state_val_26318 === (7))){
var inst_26313 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26319_26360 = state_26317__$1;
(statearr_26319_26360[(2)] = inst_26313);

(statearr_26319_26360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (20))){
var inst_26283 = (state_26317[(7)]);
var inst_26294 = (state_26317[(2)]);
var inst_26295 = cljs.core.next.call(null,inst_26283);
var inst_26269 = inst_26295;
var inst_26270 = null;
var inst_26271 = (0);
var inst_26272 = (0);
var state_26317__$1 = (function (){var statearr_26320 = state_26317;
(statearr_26320[(8)] = inst_26270);

(statearr_26320[(9)] = inst_26294);

(statearr_26320[(10)] = inst_26269);

(statearr_26320[(11)] = inst_26271);

(statearr_26320[(12)] = inst_26272);

return statearr_26320;
})();
var statearr_26321_26361 = state_26317__$1;
(statearr_26321_26361[(2)] = null);

(statearr_26321_26361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (1))){
var state_26317__$1 = state_26317;
var statearr_26322_26362 = state_26317__$1;
(statearr_26322_26362[(2)] = null);

(statearr_26322_26362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (4))){
var inst_26258 = (state_26317[(13)]);
var inst_26258__$1 = (state_26317[(2)]);
var inst_26259 = (inst_26258__$1 == null);
var state_26317__$1 = (function (){var statearr_26323 = state_26317;
(statearr_26323[(13)] = inst_26258__$1);

return statearr_26323;
})();
if(cljs.core.truth_(inst_26259)){
var statearr_26324_26363 = state_26317__$1;
(statearr_26324_26363[(1)] = (5));

} else {
var statearr_26325_26364 = state_26317__$1;
(statearr_26325_26364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (15))){
var state_26317__$1 = state_26317;
var statearr_26329_26365 = state_26317__$1;
(statearr_26329_26365[(2)] = null);

(statearr_26329_26365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (21))){
var state_26317__$1 = state_26317;
var statearr_26330_26366 = state_26317__$1;
(statearr_26330_26366[(2)] = null);

(statearr_26330_26366[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (13))){
var inst_26270 = (state_26317[(8)]);
var inst_26269 = (state_26317[(10)]);
var inst_26271 = (state_26317[(11)]);
var inst_26272 = (state_26317[(12)]);
var inst_26279 = (state_26317[(2)]);
var inst_26280 = (inst_26272 + (1));
var tmp26326 = inst_26270;
var tmp26327 = inst_26269;
var tmp26328 = inst_26271;
var inst_26269__$1 = tmp26327;
var inst_26270__$1 = tmp26326;
var inst_26271__$1 = tmp26328;
var inst_26272__$1 = inst_26280;
var state_26317__$1 = (function (){var statearr_26331 = state_26317;
(statearr_26331[(8)] = inst_26270__$1);

(statearr_26331[(14)] = inst_26279);

(statearr_26331[(10)] = inst_26269__$1);

(statearr_26331[(11)] = inst_26271__$1);

(statearr_26331[(12)] = inst_26272__$1);

return statearr_26331;
})();
var statearr_26332_26367 = state_26317__$1;
(statearr_26332_26367[(2)] = null);

(statearr_26332_26367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (22))){
var state_26317__$1 = state_26317;
var statearr_26333_26368 = state_26317__$1;
(statearr_26333_26368[(2)] = null);

(statearr_26333_26368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (6))){
var inst_26258 = (state_26317[(13)]);
var inst_26267 = f.call(null,inst_26258);
var inst_26268 = cljs.core.seq.call(null,inst_26267);
var inst_26269 = inst_26268;
var inst_26270 = null;
var inst_26271 = (0);
var inst_26272 = (0);
var state_26317__$1 = (function (){var statearr_26334 = state_26317;
(statearr_26334[(8)] = inst_26270);

(statearr_26334[(10)] = inst_26269);

(statearr_26334[(11)] = inst_26271);

(statearr_26334[(12)] = inst_26272);

return statearr_26334;
})();
var statearr_26335_26369 = state_26317__$1;
(statearr_26335_26369[(2)] = null);

(statearr_26335_26369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (17))){
var inst_26283 = (state_26317[(7)]);
var inst_26287 = cljs.core.chunk_first.call(null,inst_26283);
var inst_26288 = cljs.core.chunk_rest.call(null,inst_26283);
var inst_26289 = cljs.core.count.call(null,inst_26287);
var inst_26269 = inst_26288;
var inst_26270 = inst_26287;
var inst_26271 = inst_26289;
var inst_26272 = (0);
var state_26317__$1 = (function (){var statearr_26336 = state_26317;
(statearr_26336[(8)] = inst_26270);

(statearr_26336[(10)] = inst_26269);

(statearr_26336[(11)] = inst_26271);

(statearr_26336[(12)] = inst_26272);

return statearr_26336;
})();
var statearr_26337_26370 = state_26317__$1;
(statearr_26337_26370[(2)] = null);

(statearr_26337_26370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (3))){
var inst_26315 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26317__$1,inst_26315);
} else {
if((state_val_26318 === (12))){
var inst_26303 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26338_26371 = state_26317__$1;
(statearr_26338_26371[(2)] = inst_26303);

(statearr_26338_26371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (2))){
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26317__$1,(4),in$);
} else {
if((state_val_26318 === (23))){
var inst_26311 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26339_26372 = state_26317__$1;
(statearr_26339_26372[(2)] = inst_26311);

(statearr_26339_26372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (19))){
var inst_26298 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26340_26373 = state_26317__$1;
(statearr_26340_26373[(2)] = inst_26298);

(statearr_26340_26373[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (11))){
var inst_26283 = (state_26317[(7)]);
var inst_26269 = (state_26317[(10)]);
var inst_26283__$1 = cljs.core.seq.call(null,inst_26269);
var state_26317__$1 = (function (){var statearr_26341 = state_26317;
(statearr_26341[(7)] = inst_26283__$1);

return statearr_26341;
})();
if(inst_26283__$1){
var statearr_26342_26374 = state_26317__$1;
(statearr_26342_26374[(1)] = (14));

} else {
var statearr_26343_26375 = state_26317__$1;
(statearr_26343_26375[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (9))){
var inst_26305 = (state_26317[(2)]);
var inst_26306 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26317__$1 = (function (){var statearr_26344 = state_26317;
(statearr_26344[(15)] = inst_26305);

return statearr_26344;
})();
if(cljs.core.truth_(inst_26306)){
var statearr_26345_26376 = state_26317__$1;
(statearr_26345_26376[(1)] = (21));

} else {
var statearr_26346_26377 = state_26317__$1;
(statearr_26346_26377[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (5))){
var inst_26261 = cljs.core.async.close_BANG_.call(null,out);
var state_26317__$1 = state_26317;
var statearr_26347_26378 = state_26317__$1;
(statearr_26347_26378[(2)] = inst_26261);

(statearr_26347_26378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (14))){
var inst_26283 = (state_26317[(7)]);
var inst_26285 = cljs.core.chunked_seq_QMARK_.call(null,inst_26283);
var state_26317__$1 = state_26317;
if(inst_26285){
var statearr_26348_26379 = state_26317__$1;
(statearr_26348_26379[(1)] = (17));

} else {
var statearr_26349_26380 = state_26317__$1;
(statearr_26349_26380[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (16))){
var inst_26301 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26350_26381 = state_26317__$1;
(statearr_26350_26381[(2)] = inst_26301);

(statearr_26350_26381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (10))){
var inst_26270 = (state_26317[(8)]);
var inst_26272 = (state_26317[(12)]);
var inst_26277 = cljs.core._nth.call(null,inst_26270,inst_26272);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26317__$1,(13),out,inst_26277);
} else {
if((state_val_26318 === (18))){
var inst_26283 = (state_26317[(7)]);
var inst_26292 = cljs.core.first.call(null,inst_26283);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26317__$1,(20),out,inst_26292);
} else {
if((state_val_26318 === (8))){
var inst_26271 = (state_26317[(11)]);
var inst_26272 = (state_26317[(12)]);
var inst_26274 = (inst_26272 < inst_26271);
var inst_26275 = inst_26274;
var state_26317__$1 = state_26317;
if(cljs.core.truth_(inst_26275)){
var statearr_26351_26382 = state_26317__$1;
(statearr_26351_26382[(1)] = (10));

} else {
var statearr_26352_26383 = state_26317__$1;
(statearr_26352_26383[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto__))
;
return ((function (switch__13431__auto__,c__13496__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13432__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13432__auto____0 = (function (){
var statearr_26356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26356[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13432__auto__);

(statearr_26356[(1)] = (1));

return statearr_26356;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13432__auto____1 = (function (state_26317){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_26317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e26357){if((e26357 instanceof Object)){
var ex__13435__auto__ = e26357;
var statearr_26358_26384 = state_26317;
(statearr_26358_26384[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26385 = state_26317;
state_26317 = G__26385;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13432__auto__ = function(state_26317){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13432__auto____1.call(this,state_26317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13432__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13432__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto__))
})();
var state__13498__auto__ = (function (){var statearr_26359 = f__13497__auto__.call(null);
(statearr_26359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto__);

return statearr_26359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto__))
);

return c__13496__auto__;
});
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values in each collection produced by applying f to
 * each value taken from the source channel. f must return a
 * collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The channel will close when the source channel
 * closes.
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value put, then supplies each element of the result
 * to the target channel. f must return a collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The target channel will be closed when the source
 * channel closes.
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__13496__auto___26480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___26480){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___26480){
return (function (state_26456){
var state_val_26457 = (state_26456[(1)]);
if((state_val_26457 === (7))){
var inst_26452 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26458_26481 = state_26456__$1;
(statearr_26458_26481[(2)] = inst_26452);

(statearr_26458_26481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (1))){
var state_26456__$1 = state_26456;
var statearr_26459_26482 = state_26456__$1;
(statearr_26459_26482[(2)] = null);

(statearr_26459_26482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (4))){
var inst_26435 = (state_26456[(7)]);
var inst_26435__$1 = (state_26456[(2)]);
var inst_26436 = (inst_26435__$1 == null);
var state_26456__$1 = (function (){var statearr_26460 = state_26456;
(statearr_26460[(7)] = inst_26435__$1);

return statearr_26460;
})();
if(cljs.core.truth_(inst_26436)){
var statearr_26461_26483 = state_26456__$1;
(statearr_26461_26483[(1)] = (5));

} else {
var statearr_26462_26484 = state_26456__$1;
(statearr_26462_26484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (13))){
var state_26456__$1 = state_26456;
var statearr_26463_26485 = state_26456__$1;
(statearr_26463_26485[(2)] = null);

(statearr_26463_26485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (6))){
var inst_26435 = (state_26456[(7)]);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26456__$1,(11),to,inst_26435);
} else {
if((state_val_26457 === (3))){
var inst_26454 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26456__$1,inst_26454);
} else {
if((state_val_26457 === (12))){
var state_26456__$1 = state_26456;
var statearr_26464_26486 = state_26456__$1;
(statearr_26464_26486[(2)] = null);

(statearr_26464_26486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (2))){
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26456__$1,(4),from);
} else {
if((state_val_26457 === (11))){
var inst_26445 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
if(cljs.core.truth_(inst_26445)){
var statearr_26465_26487 = state_26456__$1;
(statearr_26465_26487[(1)] = (12));

} else {
var statearr_26466_26488 = state_26456__$1;
(statearr_26466_26488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (9))){
var state_26456__$1 = state_26456;
var statearr_26467_26489 = state_26456__$1;
(statearr_26467_26489[(2)] = null);

(statearr_26467_26489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (5))){
var state_26456__$1 = state_26456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26468_26490 = state_26456__$1;
(statearr_26468_26490[(1)] = (8));

} else {
var statearr_26469_26491 = state_26456__$1;
(statearr_26469_26491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (14))){
var inst_26450 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26470_26492 = state_26456__$1;
(statearr_26470_26492[(2)] = inst_26450);

(statearr_26470_26492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (10))){
var inst_26442 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26471_26493 = state_26456__$1;
(statearr_26471_26493[(2)] = inst_26442);

(statearr_26471_26493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (8))){
var inst_26439 = cljs.core.async.close_BANG_.call(null,to);
var state_26456__$1 = state_26456;
var statearr_26472_26494 = state_26456__$1;
(statearr_26472_26494[(2)] = inst_26439);

(statearr_26472_26494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___26480))
;
return ((function (switch__13431__auto__,c__13496__auto___26480){
return (function() {
var cljs$core$async$pipe_$_state_machine__13432__auto__ = null;
var cljs$core$async$pipe_$_state_machine__13432__auto____0 = (function (){
var statearr_26476 = [null,null,null,null,null,null,null,null];
(statearr_26476[(0)] = cljs$core$async$pipe_$_state_machine__13432__auto__);

(statearr_26476[(1)] = (1));

return statearr_26476;
});
var cljs$core$async$pipe_$_state_machine__13432__auto____1 = (function (state_26456){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_26456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e26477){if((e26477 instanceof Object)){
var ex__13435__auto__ = e26477;
var statearr_26478_26495 = state_26456;
(statearr_26478_26495[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26496 = state_26456;
state_26456 = G__26496;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__13432__auto__ = function(state_26456){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__13432__auto____1.call(this,state_26456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__13432__auto____0;
cljs$core$async$pipe_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__13432__auto____1;
return cljs$core$async$pipe_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___26480))
})();
var state__13498__auto__ = (function (){var statearr_26479 = f__13497__auto__.call(null);
(statearr_26479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___26480);

return statearr_26479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___26480))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13496__auto___26597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___26597,tc,fc){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___26597,tc,fc){
return (function (state_26572){
var state_val_26573 = (state_26572[(1)]);
if((state_val_26573 === (7))){
var inst_26568 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
var statearr_26574_26598 = state_26572__$1;
(statearr_26574_26598[(2)] = inst_26568);

(statearr_26574_26598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (1))){
var state_26572__$1 = state_26572;
var statearr_26575_26599 = state_26572__$1;
(statearr_26575_26599[(2)] = null);

(statearr_26575_26599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (4))){
var inst_26549 = (state_26572[(7)]);
var inst_26549__$1 = (state_26572[(2)]);
var inst_26550 = (inst_26549__$1 == null);
var state_26572__$1 = (function (){var statearr_26576 = state_26572;
(statearr_26576[(7)] = inst_26549__$1);

return statearr_26576;
})();
if(cljs.core.truth_(inst_26550)){
var statearr_26577_26600 = state_26572__$1;
(statearr_26577_26600[(1)] = (5));

} else {
var statearr_26578_26601 = state_26572__$1;
(statearr_26578_26601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (13))){
var state_26572__$1 = state_26572;
var statearr_26579_26602 = state_26572__$1;
(statearr_26579_26602[(2)] = null);

(statearr_26579_26602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (6))){
var inst_26549 = (state_26572[(7)]);
var inst_26555 = p.call(null,inst_26549);
var state_26572__$1 = state_26572;
if(cljs.core.truth_(inst_26555)){
var statearr_26580_26603 = state_26572__$1;
(statearr_26580_26603[(1)] = (9));

} else {
var statearr_26581_26604 = state_26572__$1;
(statearr_26581_26604[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (3))){
var inst_26570 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26572__$1,inst_26570);
} else {
if((state_val_26573 === (12))){
var state_26572__$1 = state_26572;
var statearr_26582_26605 = state_26572__$1;
(statearr_26582_26605[(2)] = null);

(statearr_26582_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (2))){
var state_26572__$1 = state_26572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26572__$1,(4),ch);
} else {
if((state_val_26573 === (11))){
var inst_26549 = (state_26572[(7)]);
var inst_26559 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26572__$1,(8),inst_26559,inst_26549);
} else {
if((state_val_26573 === (9))){
var state_26572__$1 = state_26572;
var statearr_26583_26606 = state_26572__$1;
(statearr_26583_26606[(2)] = tc);

(statearr_26583_26606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (5))){
var inst_26552 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26553 = cljs.core.async.close_BANG_.call(null,fc);
var state_26572__$1 = (function (){var statearr_26584 = state_26572;
(statearr_26584[(8)] = inst_26552);

return statearr_26584;
})();
var statearr_26585_26607 = state_26572__$1;
(statearr_26585_26607[(2)] = inst_26553);

(statearr_26585_26607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (14))){
var inst_26566 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
var statearr_26586_26608 = state_26572__$1;
(statearr_26586_26608[(2)] = inst_26566);

(statearr_26586_26608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (10))){
var state_26572__$1 = state_26572;
var statearr_26587_26609 = state_26572__$1;
(statearr_26587_26609[(2)] = fc);

(statearr_26587_26609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26573 === (8))){
var inst_26561 = (state_26572[(2)]);
var state_26572__$1 = state_26572;
if(cljs.core.truth_(inst_26561)){
var statearr_26588_26610 = state_26572__$1;
(statearr_26588_26610[(1)] = (12));

} else {
var statearr_26589_26611 = state_26572__$1;
(statearr_26589_26611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___26597,tc,fc))
;
return ((function (switch__13431__auto__,c__13496__auto___26597,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__13432__auto__ = null;
var cljs$core$async$split_$_state_machine__13432__auto____0 = (function (){
var statearr_26593 = [null,null,null,null,null,null,null,null,null];
(statearr_26593[(0)] = cljs$core$async$split_$_state_machine__13432__auto__);

(statearr_26593[(1)] = (1));

return statearr_26593;
});
var cljs$core$async$split_$_state_machine__13432__auto____1 = (function (state_26572){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_26572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e26594){if((e26594 instanceof Object)){
var ex__13435__auto__ = e26594;
var statearr_26595_26612 = state_26572;
(statearr_26595_26612[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26613 = state_26572;
state_26572 = G__26613;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__13432__auto__ = function(state_26572){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__13432__auto____1.call(this,state_26572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__13432__auto____0;
cljs$core$async$split_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__13432__auto____1;
return cljs$core$async$split_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___26597,tc,fc))
})();
var state__13498__auto__ = (function (){var statearr_26596 = f__13497__auto__.call(null);
(statearr_26596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___26597);

return statearr_26596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___26597,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto__){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto__){
return (function (state_26660){
var state_val_26661 = (state_26660[(1)]);
if((state_val_26661 === (7))){
var inst_26656 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26662_26678 = state_26660__$1;
(statearr_26662_26678[(2)] = inst_26656);

(statearr_26662_26678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (6))){
var inst_26646 = (state_26660[(7)]);
var inst_26649 = (state_26660[(8)]);
var inst_26653 = f.call(null,inst_26646,inst_26649);
var inst_26646__$1 = inst_26653;
var state_26660__$1 = (function (){var statearr_26663 = state_26660;
(statearr_26663[(7)] = inst_26646__$1);

return statearr_26663;
})();
var statearr_26664_26679 = state_26660__$1;
(statearr_26664_26679[(2)] = null);

(statearr_26664_26679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (5))){
var inst_26646 = (state_26660[(7)]);
var state_26660__$1 = state_26660;
var statearr_26665_26680 = state_26660__$1;
(statearr_26665_26680[(2)] = inst_26646);

(statearr_26665_26680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (4))){
var inst_26649 = (state_26660[(8)]);
var inst_26649__$1 = (state_26660[(2)]);
var inst_26650 = (inst_26649__$1 == null);
var state_26660__$1 = (function (){var statearr_26666 = state_26660;
(statearr_26666[(8)] = inst_26649__$1);

return statearr_26666;
})();
if(cljs.core.truth_(inst_26650)){
var statearr_26667_26681 = state_26660__$1;
(statearr_26667_26681[(1)] = (5));

} else {
var statearr_26668_26682 = state_26660__$1;
(statearr_26668_26682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (3))){
var inst_26658 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26660__$1,inst_26658);
} else {
if((state_val_26661 === (2))){
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26660__$1,(4),ch);
} else {
if((state_val_26661 === (1))){
var inst_26646 = init;
var state_26660__$1 = (function (){var statearr_26669 = state_26660;
(statearr_26669[(7)] = inst_26646);

return statearr_26669;
})();
var statearr_26670_26683 = state_26660__$1;
(statearr_26670_26683[(2)] = null);

(statearr_26670_26683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__13496__auto__))
;
return ((function (switch__13431__auto__,c__13496__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13432__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13432__auto____0 = (function (){
var statearr_26674 = [null,null,null,null,null,null,null,null,null];
(statearr_26674[(0)] = cljs$core$async$reduce_$_state_machine__13432__auto__);

(statearr_26674[(1)] = (1));

return statearr_26674;
});
var cljs$core$async$reduce_$_state_machine__13432__auto____1 = (function (state_26660){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_26660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e26675){if((e26675 instanceof Object)){
var ex__13435__auto__ = e26675;
var statearr_26676_26684 = state_26660;
(statearr_26676_26684[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26685 = state_26660;
state_26660 = G__26685;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13432__auto__ = function(state_26660){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13432__auto____1.call(this,state_26660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13432__auto____0;
cljs$core$async$reduce_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13432__auto____1;
return cljs$core$async$reduce_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto__))
})();
var state__13498__auto__ = (function (){var statearr_26677 = f__13497__auto__.call(null);
(statearr_26677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto__);

return statearr_26677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto__))
);

return c__13496__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__13496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto__){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto__){
return (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (7))){
var inst_26741 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26761_26784 = state_26759__$1;
(statearr_26761_26784[(2)] = inst_26741);

(statearr_26761_26784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (1))){
var inst_26735 = cljs.core.seq.call(null,coll);
var inst_26736 = inst_26735;
var state_26759__$1 = (function (){var statearr_26762 = state_26759;
(statearr_26762[(7)] = inst_26736);

return statearr_26762;
})();
var statearr_26763_26785 = state_26759__$1;
(statearr_26763_26785[(2)] = null);

(statearr_26763_26785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (4))){
var inst_26736 = (state_26759[(7)]);
var inst_26739 = cljs.core.first.call(null,inst_26736);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26759__$1,(7),ch,inst_26739);
} else {
if((state_val_26760 === (13))){
var inst_26753 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26764_26786 = state_26759__$1;
(statearr_26764_26786[(2)] = inst_26753);

(statearr_26764_26786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (6))){
var inst_26744 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26744)){
var statearr_26765_26787 = state_26759__$1;
(statearr_26765_26787[(1)] = (8));

} else {
var statearr_26766_26788 = state_26759__$1;
(statearr_26766_26788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (3))){
var inst_26757 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
if((state_val_26760 === (12))){
var state_26759__$1 = state_26759;
var statearr_26767_26789 = state_26759__$1;
(statearr_26767_26789[(2)] = null);

(statearr_26767_26789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (2))){
var inst_26736 = (state_26759[(7)]);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26736)){
var statearr_26768_26790 = state_26759__$1;
(statearr_26768_26790[(1)] = (4));

} else {
var statearr_26769_26791 = state_26759__$1;
(statearr_26769_26791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (11))){
var inst_26750 = cljs.core.async.close_BANG_.call(null,ch);
var state_26759__$1 = state_26759;
var statearr_26770_26792 = state_26759__$1;
(statearr_26770_26792[(2)] = inst_26750);

(statearr_26770_26792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (9))){
var state_26759__$1 = state_26759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26771_26793 = state_26759__$1;
(statearr_26771_26793[(1)] = (11));

} else {
var statearr_26772_26794 = state_26759__$1;
(statearr_26772_26794[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (5))){
var inst_26736 = (state_26759[(7)]);
var state_26759__$1 = state_26759;
var statearr_26773_26795 = state_26759__$1;
(statearr_26773_26795[(2)] = inst_26736);

(statearr_26773_26795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (10))){
var inst_26755 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26774_26796 = state_26759__$1;
(statearr_26774_26796[(2)] = inst_26755);

(statearr_26774_26796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (8))){
var inst_26736 = (state_26759[(7)]);
var inst_26746 = cljs.core.next.call(null,inst_26736);
var inst_26736__$1 = inst_26746;
var state_26759__$1 = (function (){var statearr_26775 = state_26759;
(statearr_26775[(7)] = inst_26736__$1);

return statearr_26775;
})();
var statearr_26776_26797 = state_26759__$1;
(statearr_26776_26797[(2)] = null);

(statearr_26776_26797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto__))
;
return ((function (switch__13431__auto__,c__13496__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__13432__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__13432__auto____0 = (function (){
var statearr_26780 = [null,null,null,null,null,null,null,null];
(statearr_26780[(0)] = cljs$core$async$onto_chan_$_state_machine__13432__auto__);

(statearr_26780[(1)] = (1));

return statearr_26780;
});
var cljs$core$async$onto_chan_$_state_machine__13432__auto____1 = (function (state_26759){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e26781){if((e26781 instanceof Object)){
var ex__13435__auto__ = e26781;
var statearr_26782_26798 = state_26759;
(statearr_26782_26798[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26799 = state_26759;
state_26759 = G__26799;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__13432__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__13432__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__13432__auto____0;
cljs$core$async$onto_chan_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__13432__auto____1;
return cljs$core$async$onto_chan_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto__))
})();
var state__13498__auto__ = (function (){var statearr_26783 = f__13497__auto__.call(null);
(statearr_26783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto__);

return statearr_26783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto__))
);

return c__13496__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26801 = {};
return obj26801;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4110__auto__ = _;
if(and__4110__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4758__auto__ = (((_ == null))?null:_);
return (function (){var or__4122__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26803 = {};
return obj26803;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27025 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27025 = (function (cs,ch,mult,meta27026){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27026 = meta27026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27025.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27025.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27025.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27025.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27025.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27027){
var self__ = this;
var _27027__$1 = this;
return self__.meta27026;
});})(cs))
;

cljs.core.async.t27025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27027,meta27026__$1){
var self__ = this;
var _27027__$1 = this;
return (new cljs.core.async.t27025(self__.cs,self__.ch,self__.mult,meta27026__$1));
});})(cs))
;

cljs.core.async.t27025.cljs$lang$type = true;

cljs.core.async.t27025.cljs$lang$ctorStr = "cljs.core.async/t27025";

cljs.core.async.t27025.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t27025");
});})(cs))
;

cljs.core.async.__GT_t27025 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27025(cs__$1,ch__$1,mult__$1,meta27026){
return (new cljs.core.async.t27025(cs__$1,ch__$1,mult__$1,meta27026));
});})(cs))
;

}

return (new cljs.core.async.t27025(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13496__auto___27246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___27246,cs,m,dchan,dctr,done){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___27246,cs,m,dchan,dctr,done){
return (function (state_27158){
var state_val_27159 = (state_27158[(1)]);
if((state_val_27159 === (7))){
var inst_27154 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27160_27247 = state_27158__$1;
(statearr_27160_27247[(2)] = inst_27154);

(statearr_27160_27247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (20))){
var inst_27059 = (state_27158[(7)]);
var inst_27069 = cljs.core.first.call(null,inst_27059);
var inst_27070 = cljs.core.nth.call(null,inst_27069,(0),null);
var inst_27071 = cljs.core.nth.call(null,inst_27069,(1),null);
var state_27158__$1 = (function (){var statearr_27161 = state_27158;
(statearr_27161[(8)] = inst_27070);

return statearr_27161;
})();
if(cljs.core.truth_(inst_27071)){
var statearr_27162_27248 = state_27158__$1;
(statearr_27162_27248[(1)] = (22));

} else {
var statearr_27163_27249 = state_27158__$1;
(statearr_27163_27249[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (27))){
var inst_27030 = (state_27158[(9)]);
var inst_27099 = (state_27158[(10)]);
var inst_27106 = (state_27158[(11)]);
var inst_27101 = (state_27158[(12)]);
var inst_27106__$1 = cljs.core._nth.call(null,inst_27099,inst_27101);
var inst_27107 = cljs.core.async.put_BANG_.call(null,inst_27106__$1,inst_27030,done);
var state_27158__$1 = (function (){var statearr_27164 = state_27158;
(statearr_27164[(11)] = inst_27106__$1);

return statearr_27164;
})();
if(cljs.core.truth_(inst_27107)){
var statearr_27165_27250 = state_27158__$1;
(statearr_27165_27250[(1)] = (30));

} else {
var statearr_27166_27251 = state_27158__$1;
(statearr_27166_27251[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (1))){
var state_27158__$1 = state_27158;
var statearr_27167_27252 = state_27158__$1;
(statearr_27167_27252[(2)] = null);

(statearr_27167_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (24))){
var inst_27059 = (state_27158[(7)]);
var inst_27076 = (state_27158[(2)]);
var inst_27077 = cljs.core.next.call(null,inst_27059);
var inst_27039 = inst_27077;
var inst_27040 = null;
var inst_27041 = (0);
var inst_27042 = (0);
var state_27158__$1 = (function (){var statearr_27168 = state_27158;
(statearr_27168[(13)] = inst_27076);

(statearr_27168[(14)] = inst_27042);

(statearr_27168[(15)] = inst_27039);

(statearr_27168[(16)] = inst_27040);

(statearr_27168[(17)] = inst_27041);

return statearr_27168;
})();
var statearr_27169_27253 = state_27158__$1;
(statearr_27169_27253[(2)] = null);

(statearr_27169_27253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (39))){
var state_27158__$1 = state_27158;
var statearr_27173_27254 = state_27158__$1;
(statearr_27173_27254[(2)] = null);

(statearr_27173_27254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (4))){
var inst_27030 = (state_27158[(9)]);
var inst_27030__$1 = (state_27158[(2)]);
var inst_27031 = (inst_27030__$1 == null);
var state_27158__$1 = (function (){var statearr_27174 = state_27158;
(statearr_27174[(9)] = inst_27030__$1);

return statearr_27174;
})();
if(cljs.core.truth_(inst_27031)){
var statearr_27175_27255 = state_27158__$1;
(statearr_27175_27255[(1)] = (5));

} else {
var statearr_27176_27256 = state_27158__$1;
(statearr_27176_27256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (15))){
var inst_27042 = (state_27158[(14)]);
var inst_27039 = (state_27158[(15)]);
var inst_27040 = (state_27158[(16)]);
var inst_27041 = (state_27158[(17)]);
var inst_27055 = (state_27158[(2)]);
var inst_27056 = (inst_27042 + (1));
var tmp27170 = inst_27039;
var tmp27171 = inst_27040;
var tmp27172 = inst_27041;
var inst_27039__$1 = tmp27170;
var inst_27040__$1 = tmp27171;
var inst_27041__$1 = tmp27172;
var inst_27042__$1 = inst_27056;
var state_27158__$1 = (function (){var statearr_27177 = state_27158;
(statearr_27177[(18)] = inst_27055);

(statearr_27177[(14)] = inst_27042__$1);

(statearr_27177[(15)] = inst_27039__$1);

(statearr_27177[(16)] = inst_27040__$1);

(statearr_27177[(17)] = inst_27041__$1);

return statearr_27177;
})();
var statearr_27178_27257 = state_27158__$1;
(statearr_27178_27257[(2)] = null);

(statearr_27178_27257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (21))){
var inst_27080 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27182_27258 = state_27158__$1;
(statearr_27182_27258[(2)] = inst_27080);

(statearr_27182_27258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (31))){
var inst_27106 = (state_27158[(11)]);
var inst_27110 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_27111 = cljs.core.async.untap_STAR_.call(null,m,inst_27106);
var state_27158__$1 = (function (){var statearr_27183 = state_27158;
(statearr_27183[(19)] = inst_27110);

return statearr_27183;
})();
var statearr_27184_27259 = state_27158__$1;
(statearr_27184_27259[(2)] = inst_27111);

(statearr_27184_27259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (32))){
var inst_27099 = (state_27158[(10)]);
var inst_27100 = (state_27158[(20)]);
var inst_27098 = (state_27158[(21)]);
var inst_27101 = (state_27158[(12)]);
var inst_27113 = (state_27158[(2)]);
var inst_27114 = (inst_27101 + (1));
var tmp27179 = inst_27099;
var tmp27180 = inst_27100;
var tmp27181 = inst_27098;
var inst_27098__$1 = tmp27181;
var inst_27099__$1 = tmp27179;
var inst_27100__$1 = tmp27180;
var inst_27101__$1 = inst_27114;
var state_27158__$1 = (function (){var statearr_27185 = state_27158;
(statearr_27185[(22)] = inst_27113);

(statearr_27185[(10)] = inst_27099__$1);

(statearr_27185[(20)] = inst_27100__$1);

(statearr_27185[(21)] = inst_27098__$1);

(statearr_27185[(12)] = inst_27101__$1);

return statearr_27185;
})();
var statearr_27186_27260 = state_27158__$1;
(statearr_27186_27260[(2)] = null);

(statearr_27186_27260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (40))){
var inst_27126 = (state_27158[(23)]);
var inst_27130 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_27131 = cljs.core.async.untap_STAR_.call(null,m,inst_27126);
var state_27158__$1 = (function (){var statearr_27187 = state_27158;
(statearr_27187[(24)] = inst_27130);

return statearr_27187;
})();
var statearr_27188_27261 = state_27158__$1;
(statearr_27188_27261[(2)] = inst_27131);

(statearr_27188_27261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (33))){
var inst_27117 = (state_27158[(25)]);
var inst_27119 = cljs.core.chunked_seq_QMARK_.call(null,inst_27117);
var state_27158__$1 = state_27158;
if(inst_27119){
var statearr_27189_27262 = state_27158__$1;
(statearr_27189_27262[(1)] = (36));

} else {
var statearr_27190_27263 = state_27158__$1;
(statearr_27190_27263[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (13))){
var inst_27049 = (state_27158[(26)]);
var inst_27052 = cljs.core.async.close_BANG_.call(null,inst_27049);
var state_27158__$1 = state_27158;
var statearr_27191_27264 = state_27158__$1;
(statearr_27191_27264[(2)] = inst_27052);

(statearr_27191_27264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (22))){
var inst_27070 = (state_27158[(8)]);
var inst_27073 = cljs.core.async.close_BANG_.call(null,inst_27070);
var state_27158__$1 = state_27158;
var statearr_27192_27265 = state_27158__$1;
(statearr_27192_27265[(2)] = inst_27073);

(statearr_27192_27265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (36))){
var inst_27117 = (state_27158[(25)]);
var inst_27121 = cljs.core.chunk_first.call(null,inst_27117);
var inst_27122 = cljs.core.chunk_rest.call(null,inst_27117);
var inst_27123 = cljs.core.count.call(null,inst_27121);
var inst_27098 = inst_27122;
var inst_27099 = inst_27121;
var inst_27100 = inst_27123;
var inst_27101 = (0);
var state_27158__$1 = (function (){var statearr_27193 = state_27158;
(statearr_27193[(10)] = inst_27099);

(statearr_27193[(20)] = inst_27100);

(statearr_27193[(21)] = inst_27098);

(statearr_27193[(12)] = inst_27101);

return statearr_27193;
})();
var statearr_27194_27266 = state_27158__$1;
(statearr_27194_27266[(2)] = null);

(statearr_27194_27266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (41))){
var inst_27117 = (state_27158[(25)]);
var inst_27133 = (state_27158[(2)]);
var inst_27134 = cljs.core.next.call(null,inst_27117);
var inst_27098 = inst_27134;
var inst_27099 = null;
var inst_27100 = (0);
var inst_27101 = (0);
var state_27158__$1 = (function (){var statearr_27195 = state_27158;
(statearr_27195[(27)] = inst_27133);

(statearr_27195[(10)] = inst_27099);

(statearr_27195[(20)] = inst_27100);

(statearr_27195[(21)] = inst_27098);

(statearr_27195[(12)] = inst_27101);

return statearr_27195;
})();
var statearr_27196_27267 = state_27158__$1;
(statearr_27196_27267[(2)] = null);

(statearr_27196_27267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (43))){
var state_27158__$1 = state_27158;
var statearr_27197_27268 = state_27158__$1;
(statearr_27197_27268[(2)] = null);

(statearr_27197_27268[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (29))){
var inst_27142 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27198_27269 = state_27158__$1;
(statearr_27198_27269[(2)] = inst_27142);

(statearr_27198_27269[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (44))){
var inst_27151 = (state_27158[(2)]);
var state_27158__$1 = (function (){var statearr_27199 = state_27158;
(statearr_27199[(28)] = inst_27151);

return statearr_27199;
})();
var statearr_27200_27270 = state_27158__$1;
(statearr_27200_27270[(2)] = null);

(statearr_27200_27270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (6))){
var inst_27090 = (state_27158[(29)]);
var inst_27089 = cljs.core.deref.call(null,cs);
var inst_27090__$1 = cljs.core.keys.call(null,inst_27089);
var inst_27091 = cljs.core.count.call(null,inst_27090__$1);
var inst_27092 = cljs.core.reset_BANG_.call(null,dctr,inst_27091);
var inst_27097 = cljs.core.seq.call(null,inst_27090__$1);
var inst_27098 = inst_27097;
var inst_27099 = null;
var inst_27100 = (0);
var inst_27101 = (0);
var state_27158__$1 = (function (){var statearr_27201 = state_27158;
(statearr_27201[(30)] = inst_27092);

(statearr_27201[(10)] = inst_27099);

(statearr_27201[(20)] = inst_27100);

(statearr_27201[(21)] = inst_27098);

(statearr_27201[(29)] = inst_27090__$1);

(statearr_27201[(12)] = inst_27101);

return statearr_27201;
})();
var statearr_27202_27271 = state_27158__$1;
(statearr_27202_27271[(2)] = null);

(statearr_27202_27271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (28))){
var inst_27098 = (state_27158[(21)]);
var inst_27117 = (state_27158[(25)]);
var inst_27117__$1 = cljs.core.seq.call(null,inst_27098);
var state_27158__$1 = (function (){var statearr_27203 = state_27158;
(statearr_27203[(25)] = inst_27117__$1);

return statearr_27203;
})();
if(inst_27117__$1){
var statearr_27204_27272 = state_27158__$1;
(statearr_27204_27272[(1)] = (33));

} else {
var statearr_27205_27273 = state_27158__$1;
(statearr_27205_27273[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (25))){
var inst_27100 = (state_27158[(20)]);
var inst_27101 = (state_27158[(12)]);
var inst_27103 = (inst_27101 < inst_27100);
var inst_27104 = inst_27103;
var state_27158__$1 = state_27158;
if(cljs.core.truth_(inst_27104)){
var statearr_27206_27274 = state_27158__$1;
(statearr_27206_27274[(1)] = (27));

} else {
var statearr_27207_27275 = state_27158__$1;
(statearr_27207_27275[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (34))){
var state_27158__$1 = state_27158;
var statearr_27208_27276 = state_27158__$1;
(statearr_27208_27276[(2)] = null);

(statearr_27208_27276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (17))){
var state_27158__$1 = state_27158;
var statearr_27209_27277 = state_27158__$1;
(statearr_27209_27277[(2)] = null);

(statearr_27209_27277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (3))){
var inst_27156 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27158__$1,inst_27156);
} else {
if((state_val_27159 === (12))){
var inst_27085 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27210_27278 = state_27158__$1;
(statearr_27210_27278[(2)] = inst_27085);

(statearr_27210_27278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (2))){
var state_27158__$1 = state_27158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27158__$1,(4),ch);
} else {
if((state_val_27159 === (23))){
var state_27158__$1 = state_27158;
var statearr_27211_27279 = state_27158__$1;
(statearr_27211_27279[(2)] = null);

(statearr_27211_27279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (35))){
var inst_27140 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27212_27280 = state_27158__$1;
(statearr_27212_27280[(2)] = inst_27140);

(statearr_27212_27280[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (19))){
var inst_27059 = (state_27158[(7)]);
var inst_27063 = cljs.core.chunk_first.call(null,inst_27059);
var inst_27064 = cljs.core.chunk_rest.call(null,inst_27059);
var inst_27065 = cljs.core.count.call(null,inst_27063);
var inst_27039 = inst_27064;
var inst_27040 = inst_27063;
var inst_27041 = inst_27065;
var inst_27042 = (0);
var state_27158__$1 = (function (){var statearr_27213 = state_27158;
(statearr_27213[(14)] = inst_27042);

(statearr_27213[(15)] = inst_27039);

(statearr_27213[(16)] = inst_27040);

(statearr_27213[(17)] = inst_27041);

return statearr_27213;
})();
var statearr_27214_27281 = state_27158__$1;
(statearr_27214_27281[(2)] = null);

(statearr_27214_27281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (11))){
var inst_27039 = (state_27158[(15)]);
var inst_27059 = (state_27158[(7)]);
var inst_27059__$1 = cljs.core.seq.call(null,inst_27039);
var state_27158__$1 = (function (){var statearr_27215 = state_27158;
(statearr_27215[(7)] = inst_27059__$1);

return statearr_27215;
})();
if(inst_27059__$1){
var statearr_27216_27282 = state_27158__$1;
(statearr_27216_27282[(1)] = (16));

} else {
var statearr_27217_27283 = state_27158__$1;
(statearr_27217_27283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (9))){
var inst_27087 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27218_27284 = state_27158__$1;
(statearr_27218_27284[(2)] = inst_27087);

(statearr_27218_27284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (5))){
var inst_27037 = cljs.core.deref.call(null,cs);
var inst_27038 = cljs.core.seq.call(null,inst_27037);
var inst_27039 = inst_27038;
var inst_27040 = null;
var inst_27041 = (0);
var inst_27042 = (0);
var state_27158__$1 = (function (){var statearr_27219 = state_27158;
(statearr_27219[(14)] = inst_27042);

(statearr_27219[(15)] = inst_27039);

(statearr_27219[(16)] = inst_27040);

(statearr_27219[(17)] = inst_27041);

return statearr_27219;
})();
var statearr_27220_27285 = state_27158__$1;
(statearr_27220_27285[(2)] = null);

(statearr_27220_27285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (14))){
var state_27158__$1 = state_27158;
var statearr_27221_27286 = state_27158__$1;
(statearr_27221_27286[(2)] = null);

(statearr_27221_27286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (45))){
var inst_27148 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27222_27287 = state_27158__$1;
(statearr_27222_27287[(2)] = inst_27148);

(statearr_27222_27287[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (26))){
var inst_27090 = (state_27158[(29)]);
var inst_27144 = (state_27158[(2)]);
var inst_27145 = cljs.core.seq.call(null,inst_27090);
var state_27158__$1 = (function (){var statearr_27223 = state_27158;
(statearr_27223[(31)] = inst_27144);

return statearr_27223;
})();
if(inst_27145){
var statearr_27224_27288 = state_27158__$1;
(statearr_27224_27288[(1)] = (42));

} else {
var statearr_27225_27289 = state_27158__$1;
(statearr_27225_27289[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (16))){
var inst_27059 = (state_27158[(7)]);
var inst_27061 = cljs.core.chunked_seq_QMARK_.call(null,inst_27059);
var state_27158__$1 = state_27158;
if(inst_27061){
var statearr_27226_27290 = state_27158__$1;
(statearr_27226_27290[(1)] = (19));

} else {
var statearr_27227_27291 = state_27158__$1;
(statearr_27227_27291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (38))){
var inst_27137 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27228_27292 = state_27158__$1;
(statearr_27228_27292[(2)] = inst_27137);

(statearr_27228_27292[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (30))){
var state_27158__$1 = state_27158;
var statearr_27229_27293 = state_27158__$1;
(statearr_27229_27293[(2)] = null);

(statearr_27229_27293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (10))){
var inst_27042 = (state_27158[(14)]);
var inst_27040 = (state_27158[(16)]);
var inst_27048 = cljs.core._nth.call(null,inst_27040,inst_27042);
var inst_27049 = cljs.core.nth.call(null,inst_27048,(0),null);
var inst_27050 = cljs.core.nth.call(null,inst_27048,(1),null);
var state_27158__$1 = (function (){var statearr_27230 = state_27158;
(statearr_27230[(26)] = inst_27049);

return statearr_27230;
})();
if(cljs.core.truth_(inst_27050)){
var statearr_27231_27294 = state_27158__$1;
(statearr_27231_27294[(1)] = (13));

} else {
var statearr_27232_27295 = state_27158__$1;
(statearr_27232_27295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (18))){
var inst_27083 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27233_27296 = state_27158__$1;
(statearr_27233_27296[(2)] = inst_27083);

(statearr_27233_27296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (42))){
var state_27158__$1 = state_27158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27158__$1,(45),dchan);
} else {
if((state_val_27159 === (37))){
var inst_27030 = (state_27158[(9)]);
var inst_27126 = (state_27158[(23)]);
var inst_27117 = (state_27158[(25)]);
var inst_27126__$1 = cljs.core.first.call(null,inst_27117);
var inst_27127 = cljs.core.async.put_BANG_.call(null,inst_27126__$1,inst_27030,done);
var state_27158__$1 = (function (){var statearr_27234 = state_27158;
(statearr_27234[(23)] = inst_27126__$1);

return statearr_27234;
})();
if(cljs.core.truth_(inst_27127)){
var statearr_27235_27297 = state_27158__$1;
(statearr_27235_27297[(1)] = (39));

} else {
var statearr_27236_27298 = state_27158__$1;
(statearr_27236_27298[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (8))){
var inst_27042 = (state_27158[(14)]);
var inst_27041 = (state_27158[(17)]);
var inst_27044 = (inst_27042 < inst_27041);
var inst_27045 = inst_27044;
var state_27158__$1 = state_27158;
if(cljs.core.truth_(inst_27045)){
var statearr_27237_27299 = state_27158__$1;
(statearr_27237_27299[(1)] = (10));

} else {
var statearr_27238_27300 = state_27158__$1;
(statearr_27238_27300[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___27246,cs,m,dchan,dctr,done))
;
return ((function (switch__13431__auto__,c__13496__auto___27246,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13432__auto__ = null;
var cljs$core$async$mult_$_state_machine__13432__auto____0 = (function (){
var statearr_27242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27242[(0)] = cljs$core$async$mult_$_state_machine__13432__auto__);

(statearr_27242[(1)] = (1));

return statearr_27242;
});
var cljs$core$async$mult_$_state_machine__13432__auto____1 = (function (state_27158){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_27158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e27243){if((e27243 instanceof Object)){
var ex__13435__auto__ = e27243;
var statearr_27244_27301 = state_27158;
(statearr_27244_27301[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27302 = state_27158;
state_27158 = G__27302;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13432__auto__ = function(state_27158){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13432__auto____1.call(this,state_27158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13432__auto____0;
cljs$core$async$mult_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13432__auto____1;
return cljs$core$async$mult_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___27246,cs,m,dchan,dctr,done))
})();
var state__13498__auto__ = (function (){var statearr_27245 = f__13497__auto__.call(null);
(statearr_27245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___27246);

return statearr_27245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___27246,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27304 = {};
return obj27304;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4110__auto__ = m;
if(and__4110__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4758__auto__ = (((m == null))?null:m);
return (function (){var or__4122__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27424 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27424 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27425){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27425 = meta27425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27424.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27426){
var self__ = this;
var _27426__$1 = this;
return self__.meta27425;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27426,meta27425__$1){
var self__ = this;
var _27426__$1 = this;
return (new cljs.core.async.t27424(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27425__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27424.cljs$lang$type = true;

cljs.core.async.t27424.cljs$lang$ctorStr = "cljs.core.async/t27424";

cljs.core.async.t27424.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t27424");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27424 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27425){
return (new cljs.core.async.t27424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27425));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27424(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13496__auto___27543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___27543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___27543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27496){
var state_val_27497 = (state_27496[(1)]);
if((state_val_27497 === (7))){
var inst_27440 = (state_27496[(7)]);
var inst_27445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27440);
var state_27496__$1 = state_27496;
var statearr_27498_27544 = state_27496__$1;
(statearr_27498_27544[(2)] = inst_27445);

(statearr_27498_27544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (20))){
var inst_27455 = (state_27496[(8)]);
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27496__$1,(23),out,inst_27455);
} else {
if((state_val_27497 === (1))){
var inst_27430 = (state_27496[(9)]);
var inst_27430__$1 = calc_state.call(null);
var inst_27431 = cljs.core.seq_QMARK_.call(null,inst_27430__$1);
var state_27496__$1 = (function (){var statearr_27499 = state_27496;
(statearr_27499[(9)] = inst_27430__$1);

return statearr_27499;
})();
if(inst_27431){
var statearr_27500_27545 = state_27496__$1;
(statearr_27500_27545[(1)] = (2));

} else {
var statearr_27501_27546 = state_27496__$1;
(statearr_27501_27546[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (24))){
var inst_27448 = (state_27496[(10)]);
var inst_27440 = inst_27448;
var state_27496__$1 = (function (){var statearr_27502 = state_27496;
(statearr_27502[(7)] = inst_27440);

return statearr_27502;
})();
var statearr_27503_27547 = state_27496__$1;
(statearr_27503_27547[(2)] = null);

(statearr_27503_27547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (4))){
var inst_27430 = (state_27496[(9)]);
var inst_27436 = (state_27496[(2)]);
var inst_27437 = cljs.core.get.call(null,inst_27436,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27438 = cljs.core.get.call(null,inst_27436,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27439 = cljs.core.get.call(null,inst_27436,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27440 = inst_27430;
var state_27496__$1 = (function (){var statearr_27504 = state_27496;
(statearr_27504[(7)] = inst_27440);

(statearr_27504[(11)] = inst_27437);

(statearr_27504[(12)] = inst_27438);

(statearr_27504[(13)] = inst_27439);

return statearr_27504;
})();
var statearr_27505_27548 = state_27496__$1;
(statearr_27505_27548[(2)] = null);

(statearr_27505_27548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (15))){
var state_27496__$1 = state_27496;
var statearr_27506_27549 = state_27496__$1;
(statearr_27506_27549[(2)] = null);

(statearr_27506_27549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (21))){
var inst_27448 = (state_27496[(10)]);
var inst_27440 = inst_27448;
var state_27496__$1 = (function (){var statearr_27507 = state_27496;
(statearr_27507[(7)] = inst_27440);

return statearr_27507;
})();
var statearr_27508_27550 = state_27496__$1;
(statearr_27508_27550[(2)] = null);

(statearr_27508_27550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (13))){
var inst_27492 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27509_27551 = state_27496__$1;
(statearr_27509_27551[(2)] = inst_27492);

(statearr_27509_27551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (22))){
var inst_27490 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27510_27552 = state_27496__$1;
(statearr_27510_27552[(2)] = inst_27490);

(statearr_27510_27552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (6))){
var inst_27494 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27496__$1,inst_27494);
} else {
if((state_val_27497 === (25))){
var state_27496__$1 = state_27496;
var statearr_27511_27553 = state_27496__$1;
(statearr_27511_27553[(2)] = null);

(statearr_27511_27553[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (17))){
var inst_27470 = (state_27496[(14)]);
var state_27496__$1 = state_27496;
var statearr_27512_27554 = state_27496__$1;
(statearr_27512_27554[(2)] = inst_27470);

(statearr_27512_27554[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (3))){
var inst_27430 = (state_27496[(9)]);
var state_27496__$1 = state_27496;
var statearr_27513_27555 = state_27496__$1;
(statearr_27513_27555[(2)] = inst_27430);

(statearr_27513_27555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (12))){
var inst_27456 = (state_27496[(15)]);
var inst_27451 = (state_27496[(16)]);
var inst_27470 = (state_27496[(14)]);
var inst_27470__$1 = inst_27451.call(null,inst_27456);
var state_27496__$1 = (function (){var statearr_27514 = state_27496;
(statearr_27514[(14)] = inst_27470__$1);

return statearr_27514;
})();
if(cljs.core.truth_(inst_27470__$1)){
var statearr_27515_27556 = state_27496__$1;
(statearr_27515_27556[(1)] = (17));

} else {
var statearr_27516_27557 = state_27496__$1;
(statearr_27516_27557[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (2))){
var inst_27430 = (state_27496[(9)]);
var inst_27433 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27430);
var state_27496__$1 = state_27496;
var statearr_27517_27558 = state_27496__$1;
(statearr_27517_27558[(2)] = inst_27433);

(statearr_27517_27558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (23))){
var inst_27481 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
if(cljs.core.truth_(inst_27481)){
var statearr_27518_27559 = state_27496__$1;
(statearr_27518_27559[(1)] = (24));

} else {
var statearr_27519_27560 = state_27496__$1;
(statearr_27519_27560[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (19))){
var inst_27478 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
if(cljs.core.truth_(inst_27478)){
var statearr_27520_27561 = state_27496__$1;
(statearr_27520_27561[(1)] = (20));

} else {
var statearr_27521_27562 = state_27496__$1;
(statearr_27521_27562[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (11))){
var inst_27455 = (state_27496[(8)]);
var inst_27461 = (inst_27455 == null);
var state_27496__$1 = state_27496;
if(cljs.core.truth_(inst_27461)){
var statearr_27522_27563 = state_27496__$1;
(statearr_27522_27563[(1)] = (14));

} else {
var statearr_27523_27564 = state_27496__$1;
(statearr_27523_27564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (9))){
var inst_27448 = (state_27496[(10)]);
var inst_27448__$1 = (state_27496[(2)]);
var inst_27449 = cljs.core.get.call(null,inst_27448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27450 = cljs.core.get.call(null,inst_27448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27451 = cljs.core.get.call(null,inst_27448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27496__$1 = (function (){var statearr_27524 = state_27496;
(statearr_27524[(17)] = inst_27450);

(statearr_27524[(16)] = inst_27451);

(statearr_27524[(10)] = inst_27448__$1);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27496__$1,(10),inst_27449);
} else {
if((state_val_27497 === (5))){
var inst_27440 = (state_27496[(7)]);
var inst_27443 = cljs.core.seq_QMARK_.call(null,inst_27440);
var state_27496__$1 = state_27496;
if(inst_27443){
var statearr_27525_27565 = state_27496__$1;
(statearr_27525_27565[(1)] = (7));

} else {
var statearr_27526_27566 = state_27496__$1;
(statearr_27526_27566[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (14))){
var inst_27456 = (state_27496[(15)]);
var inst_27463 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27456);
var state_27496__$1 = state_27496;
var statearr_27527_27567 = state_27496__$1;
(statearr_27527_27567[(2)] = inst_27463);

(statearr_27527_27567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (26))){
var inst_27486 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27528_27568 = state_27496__$1;
(statearr_27528_27568[(2)] = inst_27486);

(statearr_27528_27568[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (16))){
var inst_27466 = (state_27496[(2)]);
var inst_27467 = calc_state.call(null);
var inst_27440 = inst_27467;
var state_27496__$1 = (function (){var statearr_27529 = state_27496;
(statearr_27529[(7)] = inst_27440);

(statearr_27529[(18)] = inst_27466);

return statearr_27529;
})();
var statearr_27530_27569 = state_27496__$1;
(statearr_27530_27569[(2)] = null);

(statearr_27530_27569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (10))){
var inst_27455 = (state_27496[(8)]);
var inst_27456 = (state_27496[(15)]);
var inst_27454 = (state_27496[(2)]);
var inst_27455__$1 = cljs.core.nth.call(null,inst_27454,(0),null);
var inst_27456__$1 = cljs.core.nth.call(null,inst_27454,(1),null);
var inst_27457 = (inst_27455__$1 == null);
var inst_27458 = cljs.core._EQ_.call(null,inst_27456__$1,change);
var inst_27459 = (inst_27457) || (inst_27458);
var state_27496__$1 = (function (){var statearr_27531 = state_27496;
(statearr_27531[(8)] = inst_27455__$1);

(statearr_27531[(15)] = inst_27456__$1);

return statearr_27531;
})();
if(cljs.core.truth_(inst_27459)){
var statearr_27532_27570 = state_27496__$1;
(statearr_27532_27570[(1)] = (11));

} else {
var statearr_27533_27571 = state_27496__$1;
(statearr_27533_27571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (18))){
var inst_27450 = (state_27496[(17)]);
var inst_27456 = (state_27496[(15)]);
var inst_27451 = (state_27496[(16)]);
var inst_27473 = cljs.core.empty_QMARK_.call(null,inst_27451);
var inst_27474 = inst_27450.call(null,inst_27456);
var inst_27475 = cljs.core.not.call(null,inst_27474);
var inst_27476 = (inst_27473) && (inst_27475);
var state_27496__$1 = state_27496;
var statearr_27534_27572 = state_27496__$1;
(statearr_27534_27572[(2)] = inst_27476);

(statearr_27534_27572[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (8))){
var inst_27440 = (state_27496[(7)]);
var state_27496__$1 = state_27496;
var statearr_27535_27573 = state_27496__$1;
(statearr_27535_27573[(2)] = inst_27440);

(statearr_27535_27573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___27543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13431__auto__,c__13496__auto___27543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13432__auto__ = null;
var cljs$core$async$mix_$_state_machine__13432__auto____0 = (function (){
var statearr_27539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27539[(0)] = cljs$core$async$mix_$_state_machine__13432__auto__);

(statearr_27539[(1)] = (1));

return statearr_27539;
});
var cljs$core$async$mix_$_state_machine__13432__auto____1 = (function (state_27496){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_27496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e27540){if((e27540 instanceof Object)){
var ex__13435__auto__ = e27540;
var statearr_27541_27574 = state_27496;
(statearr_27541_27574[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27575 = state_27496;
state_27496 = G__27575;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13432__auto__ = function(state_27496){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13432__auto____1.call(this,state_27496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13432__auto____0;
cljs$core$async$mix_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13432__auto____1;
return cljs$core$async$mix_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___27543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13498__auto__ = (function (){var statearr_27542 = f__13497__auto__.call(null);
(statearr_27542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___27543);

return statearr_27542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___27543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27577 = {};
return obj27577;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4110__auto__ = p;
if(and__4110__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4110__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4758__auto__ = (((p == null))?null:p);
return (function (){var or__4122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4122__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4122__auto__,mults){
return (function (p1__27578_SHARP_){
if(cljs.core.truth_(p1__27578_SHARP_.call(null,topic))){
return p1__27578_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27578_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4122__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27701 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27701 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27702){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27702 = meta27702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27701.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27701.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27701.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4406__auto__)){
var m = temp__4406__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27701.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27703){
var self__ = this;
var _27703__$1 = this;
return self__.meta27702;
});})(mults,ensure_mult))
;

cljs.core.async.t27701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27703,meta27702__$1){
var self__ = this;
var _27703__$1 = this;
return (new cljs.core.async.t27701(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27702__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27701.cljs$lang$type = true;

cljs.core.async.t27701.cljs$lang$ctorStr = "cljs.core.async/t27701";

cljs.core.async.t27701.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"cljs.core.async/t27701");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27701 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t27701(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27702){
return (new cljs.core.async.t27701(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27702));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27701(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13496__auto___27823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___27823,mults,ensure_mult,p){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___27823,mults,ensure_mult,p){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (7))){
var inst_27771 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27777_27824 = state_27775__$1;
(statearr_27777_27824[(2)] = inst_27771);

(statearr_27777_27824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (20))){
var state_27775__$1 = state_27775;
var statearr_27778_27825 = state_27775__$1;
(statearr_27778_27825[(2)] = null);

(statearr_27778_27825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (1))){
var state_27775__$1 = state_27775;
var statearr_27779_27826 = state_27775__$1;
(statearr_27779_27826[(2)] = null);

(statearr_27779_27826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (24))){
var inst_27754 = (state_27775[(7)]);
var inst_27763 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27754);
var state_27775__$1 = state_27775;
var statearr_27780_27827 = state_27775__$1;
(statearr_27780_27827[(2)] = inst_27763);

(statearr_27780_27827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (4))){
var inst_27706 = (state_27775[(8)]);
var inst_27706__$1 = (state_27775[(2)]);
var inst_27707 = (inst_27706__$1 == null);
var state_27775__$1 = (function (){var statearr_27781 = state_27775;
(statearr_27781[(8)] = inst_27706__$1);

return statearr_27781;
})();
if(cljs.core.truth_(inst_27707)){
var statearr_27782_27828 = state_27775__$1;
(statearr_27782_27828[(1)] = (5));

} else {
var statearr_27783_27829 = state_27775__$1;
(statearr_27783_27829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (15))){
var inst_27748 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27784_27830 = state_27775__$1;
(statearr_27784_27830[(2)] = inst_27748);

(statearr_27784_27830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (21))){
var inst_27768 = (state_27775[(2)]);
var state_27775__$1 = (function (){var statearr_27785 = state_27775;
(statearr_27785[(9)] = inst_27768);

return statearr_27785;
})();
var statearr_27786_27831 = state_27775__$1;
(statearr_27786_27831[(2)] = null);

(statearr_27786_27831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (13))){
var inst_27730 = (state_27775[(10)]);
var inst_27732 = cljs.core.chunked_seq_QMARK_.call(null,inst_27730);
var state_27775__$1 = state_27775;
if(inst_27732){
var statearr_27787_27832 = state_27775__$1;
(statearr_27787_27832[(1)] = (16));

} else {
var statearr_27788_27833 = state_27775__$1;
(statearr_27788_27833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (22))){
var inst_27760 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27760)){
var statearr_27789_27834 = state_27775__$1;
(statearr_27789_27834[(1)] = (23));

} else {
var statearr_27790_27835 = state_27775__$1;
(statearr_27790_27835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (6))){
var inst_27756 = (state_27775[(11)]);
var inst_27706 = (state_27775[(8)]);
var inst_27754 = (state_27775[(7)]);
var inst_27754__$1 = topic_fn.call(null,inst_27706);
var inst_27755 = cljs.core.deref.call(null,mults);
var inst_27756__$1 = cljs.core.get.call(null,inst_27755,inst_27754__$1);
var state_27775__$1 = (function (){var statearr_27791 = state_27775;
(statearr_27791[(11)] = inst_27756__$1);

(statearr_27791[(7)] = inst_27754__$1);

return statearr_27791;
})();
if(cljs.core.truth_(inst_27756__$1)){
var statearr_27792_27836 = state_27775__$1;
(statearr_27792_27836[(1)] = (19));

} else {
var statearr_27793_27837 = state_27775__$1;
(statearr_27793_27837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (25))){
var inst_27765 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27794_27838 = state_27775__$1;
(statearr_27794_27838[(2)] = inst_27765);

(statearr_27794_27838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (17))){
var inst_27730 = (state_27775[(10)]);
var inst_27739 = cljs.core.first.call(null,inst_27730);
var inst_27740 = cljs.core.async.muxch_STAR_.call(null,inst_27739);
var inst_27741 = cljs.core.async.close_BANG_.call(null,inst_27740);
var inst_27742 = cljs.core.next.call(null,inst_27730);
var inst_27716 = inst_27742;
var inst_27717 = null;
var inst_27718 = (0);
var inst_27719 = (0);
var state_27775__$1 = (function (){var statearr_27795 = state_27775;
(statearr_27795[(12)] = inst_27741);

(statearr_27795[(13)] = inst_27718);

(statearr_27795[(14)] = inst_27719);

(statearr_27795[(15)] = inst_27716);

(statearr_27795[(16)] = inst_27717);

return statearr_27795;
})();
var statearr_27796_27839 = state_27775__$1;
(statearr_27796_27839[(2)] = null);

(statearr_27796_27839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (3))){
var inst_27773 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27775__$1,inst_27773);
} else {
if((state_val_27776 === (12))){
var inst_27750 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27797_27840 = state_27775__$1;
(statearr_27797_27840[(2)] = inst_27750);

(statearr_27797_27840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (2))){
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(4),ch);
} else {
if((state_val_27776 === (23))){
var state_27775__$1 = state_27775;
var statearr_27798_27841 = state_27775__$1;
(statearr_27798_27841[(2)] = null);

(statearr_27798_27841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (19))){
var inst_27756 = (state_27775[(11)]);
var inst_27706 = (state_27775[(8)]);
var inst_27758 = cljs.core.async.muxch_STAR_.call(null,inst_27756);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27775__$1,(22),inst_27758,inst_27706);
} else {
if((state_val_27776 === (11))){
var inst_27716 = (state_27775[(15)]);
var inst_27730 = (state_27775[(10)]);
var inst_27730__$1 = cljs.core.seq.call(null,inst_27716);
var state_27775__$1 = (function (){var statearr_27799 = state_27775;
(statearr_27799[(10)] = inst_27730__$1);

return statearr_27799;
})();
if(inst_27730__$1){
var statearr_27800_27842 = state_27775__$1;
(statearr_27800_27842[(1)] = (13));

} else {
var statearr_27801_27843 = state_27775__$1;
(statearr_27801_27843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (9))){
var inst_27752 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27802_27844 = state_27775__$1;
(statearr_27802_27844[(2)] = inst_27752);

(statearr_27802_27844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (5))){
var inst_27713 = cljs.core.deref.call(null,mults);
var inst_27714 = cljs.core.vals.call(null,inst_27713);
var inst_27715 = cljs.core.seq.call(null,inst_27714);
var inst_27716 = inst_27715;
var inst_27717 = null;
var inst_27718 = (0);
var inst_27719 = (0);
var state_27775__$1 = (function (){var statearr_27803 = state_27775;
(statearr_27803[(13)] = inst_27718);

(statearr_27803[(14)] = inst_27719);

(statearr_27803[(15)] = inst_27716);

(statearr_27803[(16)] = inst_27717);

return statearr_27803;
})();
var statearr_27804_27845 = state_27775__$1;
(statearr_27804_27845[(2)] = null);

(statearr_27804_27845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (14))){
var state_27775__$1 = state_27775;
var statearr_27808_27846 = state_27775__$1;
(statearr_27808_27846[(2)] = null);

(statearr_27808_27846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (16))){
var inst_27730 = (state_27775[(10)]);
var inst_27734 = cljs.core.chunk_first.call(null,inst_27730);
var inst_27735 = cljs.core.chunk_rest.call(null,inst_27730);
var inst_27736 = cljs.core.count.call(null,inst_27734);
var inst_27716 = inst_27735;
var inst_27717 = inst_27734;
var inst_27718 = inst_27736;
var inst_27719 = (0);
var state_27775__$1 = (function (){var statearr_27809 = state_27775;
(statearr_27809[(13)] = inst_27718);

(statearr_27809[(14)] = inst_27719);

(statearr_27809[(15)] = inst_27716);

(statearr_27809[(16)] = inst_27717);

return statearr_27809;
})();
var statearr_27810_27847 = state_27775__$1;
(statearr_27810_27847[(2)] = null);

(statearr_27810_27847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (10))){
var inst_27718 = (state_27775[(13)]);
var inst_27719 = (state_27775[(14)]);
var inst_27716 = (state_27775[(15)]);
var inst_27717 = (state_27775[(16)]);
var inst_27724 = cljs.core._nth.call(null,inst_27717,inst_27719);
var inst_27725 = cljs.core.async.muxch_STAR_.call(null,inst_27724);
var inst_27726 = cljs.core.async.close_BANG_.call(null,inst_27725);
var inst_27727 = (inst_27719 + (1));
var tmp27805 = inst_27718;
var tmp27806 = inst_27716;
var tmp27807 = inst_27717;
var inst_27716__$1 = tmp27806;
var inst_27717__$1 = tmp27807;
var inst_27718__$1 = tmp27805;
var inst_27719__$1 = inst_27727;
var state_27775__$1 = (function (){var statearr_27811 = state_27775;
(statearr_27811[(13)] = inst_27718__$1);

(statearr_27811[(14)] = inst_27719__$1);

(statearr_27811[(17)] = inst_27726);

(statearr_27811[(15)] = inst_27716__$1);

(statearr_27811[(16)] = inst_27717__$1);

return statearr_27811;
})();
var statearr_27812_27848 = state_27775__$1;
(statearr_27812_27848[(2)] = null);

(statearr_27812_27848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (18))){
var inst_27745 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27813_27849 = state_27775__$1;
(statearr_27813_27849[(2)] = inst_27745);

(statearr_27813_27849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (8))){
var inst_27718 = (state_27775[(13)]);
var inst_27719 = (state_27775[(14)]);
var inst_27721 = (inst_27719 < inst_27718);
var inst_27722 = inst_27721;
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27722)){
var statearr_27814_27850 = state_27775__$1;
(statearr_27814_27850[(1)] = (10));

} else {
var statearr_27815_27851 = state_27775__$1;
(statearr_27815_27851[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___27823,mults,ensure_mult,p))
;
return ((function (switch__13431__auto__,c__13496__auto___27823,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__13432__auto__ = null;
var cljs$core$async$pub_$_state_machine__13432__auto____0 = (function (){
var statearr_27819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27819[(0)] = cljs$core$async$pub_$_state_machine__13432__auto__);

(statearr_27819[(1)] = (1));

return statearr_27819;
});
var cljs$core$async$pub_$_state_machine__13432__auto____1 = (function (state_27775){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_27775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e27820){if((e27820 instanceof Object)){
var ex__13435__auto__ = e27820;
var statearr_27821_27852 = state_27775;
(statearr_27821_27852[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27853 = state_27775;
state_27775 = G__27853;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__13432__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__13432__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__13432__auto____0;
cljs$core$async$pub_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__13432__auto____1;
return cljs$core$async$pub_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___27823,mults,ensure_mult,p))
})();
var state__13498__auto__ = (function (){var statearr_27822 = f__13497__auto__.call(null);
(statearr_27822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___27823);

return statearr_27822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___27823,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__13496__auto___27990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___27990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___27990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27960){
var state_val_27961 = (state_27960[(1)]);
if((state_val_27961 === (7))){
var state_27960__$1 = state_27960;
var statearr_27962_27991 = state_27960__$1;
(statearr_27962_27991[(2)] = null);

(statearr_27962_27991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (1))){
var state_27960__$1 = state_27960;
var statearr_27963_27992 = state_27960__$1;
(statearr_27963_27992[(2)] = null);

(statearr_27963_27992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (4))){
var inst_27924 = (state_27960[(7)]);
var inst_27926 = (inst_27924 < cnt);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27926)){
var statearr_27964_27993 = state_27960__$1;
(statearr_27964_27993[(1)] = (6));

} else {
var statearr_27965_27994 = state_27960__$1;
(statearr_27965_27994[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (15))){
var inst_27956 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27966_27995 = state_27960__$1;
(statearr_27966_27995[(2)] = inst_27956);

(statearr_27966_27995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (13))){
var inst_27949 = cljs.core.async.close_BANG_.call(null,out);
var state_27960__$1 = state_27960;
var statearr_27967_27996 = state_27960__$1;
(statearr_27967_27996[(2)] = inst_27949);

(statearr_27967_27996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (6))){
var state_27960__$1 = state_27960;
var statearr_27968_27997 = state_27960__$1;
(statearr_27968_27997[(2)] = null);

(statearr_27968_27997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (3))){
var inst_27958 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27960__$1,inst_27958);
} else {
if((state_val_27961 === (12))){
var inst_27946 = (state_27960[(8)]);
var inst_27946__$1 = (state_27960[(2)]);
var inst_27947 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27946__$1);
var state_27960__$1 = (function (){var statearr_27969 = state_27960;
(statearr_27969[(8)] = inst_27946__$1);

return statearr_27969;
})();
if(cljs.core.truth_(inst_27947)){
var statearr_27970_27998 = state_27960__$1;
(statearr_27970_27998[(1)] = (13));

} else {
var statearr_27971_27999 = state_27960__$1;
(statearr_27971_27999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (2))){
var inst_27923 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27924 = (0);
var state_27960__$1 = (function (){var statearr_27972 = state_27960;
(statearr_27972[(9)] = inst_27923);

(statearr_27972[(7)] = inst_27924);

return statearr_27972;
})();
var statearr_27973_28000 = state_27960__$1;
(statearr_27973_28000[(2)] = null);

(statearr_27973_28000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (11))){
var inst_27924 = (state_27960[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27960,(10),Object,null,(9));
var inst_27933 = chs__$1.call(null,inst_27924);
var inst_27934 = done.call(null,inst_27924);
var inst_27935 = cljs.core.async.take_BANG_.call(null,inst_27933,inst_27934);
var state_27960__$1 = state_27960;
var statearr_27974_28001 = state_27960__$1;
(statearr_27974_28001[(2)] = inst_27935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (9))){
var inst_27924 = (state_27960[(7)]);
var inst_27937 = (state_27960[(2)]);
var inst_27938 = (inst_27924 + (1));
var inst_27924__$1 = inst_27938;
var state_27960__$1 = (function (){var statearr_27975 = state_27960;
(statearr_27975[(10)] = inst_27937);

(statearr_27975[(7)] = inst_27924__$1);

return statearr_27975;
})();
var statearr_27976_28002 = state_27960__$1;
(statearr_27976_28002[(2)] = null);

(statearr_27976_28002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (5))){
var inst_27944 = (state_27960[(2)]);
var state_27960__$1 = (function (){var statearr_27977 = state_27960;
(statearr_27977[(11)] = inst_27944);

return statearr_27977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(12),dchan);
} else {
if((state_val_27961 === (14))){
var inst_27946 = (state_27960[(8)]);
var inst_27951 = cljs.core.apply.call(null,f,inst_27946);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27960__$1,(16),out,inst_27951);
} else {
if((state_val_27961 === (16))){
var inst_27953 = (state_27960[(2)]);
var state_27960__$1 = (function (){var statearr_27978 = state_27960;
(statearr_27978[(12)] = inst_27953);

return statearr_27978;
})();
var statearr_27979_28003 = state_27960__$1;
(statearr_27979_28003[(2)] = null);

(statearr_27979_28003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (10))){
var inst_27928 = (state_27960[(2)]);
var inst_27929 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27960__$1 = (function (){var statearr_27980 = state_27960;
(statearr_27980[(13)] = inst_27928);

return statearr_27980;
})();
var statearr_27981_28004 = state_27960__$1;
(statearr_27981_28004[(2)] = inst_27929);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (8))){
var inst_27942 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27982_28005 = state_27960__$1;
(statearr_27982_28005[(2)] = inst_27942);

(statearr_27982_28005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___27990,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13431__auto__,c__13496__auto___27990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__13432__auto__ = null;
var cljs$core$async$map_$_state_machine__13432__auto____0 = (function (){
var statearr_27986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27986[(0)] = cljs$core$async$map_$_state_machine__13432__auto__);

(statearr_27986[(1)] = (1));

return statearr_27986;
});
var cljs$core$async$map_$_state_machine__13432__auto____1 = (function (state_27960){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_27960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e27987){if((e27987 instanceof Object)){
var ex__13435__auto__ = e27987;
var statearr_27988_28006 = state_27960;
(statearr_27988_28006[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28007 = state_27960;
state_27960 = G__28007;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__13432__auto__ = function(state_27960){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__13432__auto____1.call(this,state_27960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__13432__auto____0;
cljs$core$async$map_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__13432__auto____1;
return cljs$core$async$map_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___27990,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13498__auto__ = (function (){var statearr_27989 = f__13497__auto__.call(null);
(statearr_27989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___27990);

return statearr_27989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___27990,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13496__auto___28115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___28115,out){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___28115,out){
return (function (state_28091){
var state_val_28092 = (state_28091[(1)]);
if((state_val_28092 === (7))){
var inst_28071 = (state_28091[(7)]);
var inst_28070 = (state_28091[(8)]);
var inst_28070__$1 = (state_28091[(2)]);
var inst_28071__$1 = cljs.core.nth.call(null,inst_28070__$1,(0),null);
var inst_28072 = cljs.core.nth.call(null,inst_28070__$1,(1),null);
var inst_28073 = (inst_28071__$1 == null);
var state_28091__$1 = (function (){var statearr_28093 = state_28091;
(statearr_28093[(7)] = inst_28071__$1);

(statearr_28093[(8)] = inst_28070__$1);

(statearr_28093[(9)] = inst_28072);

return statearr_28093;
})();
if(cljs.core.truth_(inst_28073)){
var statearr_28094_28116 = state_28091__$1;
(statearr_28094_28116[(1)] = (8));

} else {
var statearr_28095_28117 = state_28091__$1;
(statearr_28095_28117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (1))){
var inst_28062 = cljs.core.vec.call(null,chs);
var inst_28063 = inst_28062;
var state_28091__$1 = (function (){var statearr_28096 = state_28091;
(statearr_28096[(10)] = inst_28063);

return statearr_28096;
})();
var statearr_28097_28118 = state_28091__$1;
(statearr_28097_28118[(2)] = null);

(statearr_28097_28118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (4))){
var inst_28063 = (state_28091[(10)]);
var state_28091__$1 = state_28091;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28091__$1,(7),inst_28063);
} else {
if((state_val_28092 === (6))){
var inst_28087 = (state_28091[(2)]);
var state_28091__$1 = state_28091;
var statearr_28098_28119 = state_28091__$1;
(statearr_28098_28119[(2)] = inst_28087);

(statearr_28098_28119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (3))){
var inst_28089 = (state_28091[(2)]);
var state_28091__$1 = state_28091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28091__$1,inst_28089);
} else {
if((state_val_28092 === (2))){
var inst_28063 = (state_28091[(10)]);
var inst_28065 = cljs.core.count.call(null,inst_28063);
var inst_28066 = (inst_28065 > (0));
var state_28091__$1 = state_28091;
if(cljs.core.truth_(inst_28066)){
var statearr_28100_28120 = state_28091__$1;
(statearr_28100_28120[(1)] = (4));

} else {
var statearr_28101_28121 = state_28091__$1;
(statearr_28101_28121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (11))){
var inst_28063 = (state_28091[(10)]);
var inst_28080 = (state_28091[(2)]);
var tmp28099 = inst_28063;
var inst_28063__$1 = tmp28099;
var state_28091__$1 = (function (){var statearr_28102 = state_28091;
(statearr_28102[(11)] = inst_28080);

(statearr_28102[(10)] = inst_28063__$1);

return statearr_28102;
})();
var statearr_28103_28122 = state_28091__$1;
(statearr_28103_28122[(2)] = null);

(statearr_28103_28122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (9))){
var inst_28071 = (state_28091[(7)]);
var state_28091__$1 = state_28091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28091__$1,(11),out,inst_28071);
} else {
if((state_val_28092 === (5))){
var inst_28085 = cljs.core.async.close_BANG_.call(null,out);
var state_28091__$1 = state_28091;
var statearr_28104_28123 = state_28091__$1;
(statearr_28104_28123[(2)] = inst_28085);

(statearr_28104_28123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (10))){
var inst_28083 = (state_28091[(2)]);
var state_28091__$1 = state_28091;
var statearr_28105_28124 = state_28091__$1;
(statearr_28105_28124[(2)] = inst_28083);

(statearr_28105_28124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28092 === (8))){
var inst_28071 = (state_28091[(7)]);
var inst_28070 = (state_28091[(8)]);
var inst_28072 = (state_28091[(9)]);
var inst_28063 = (state_28091[(10)]);
var inst_28075 = (function (){var c = inst_28072;
var v = inst_28071;
var vec__28068 = inst_28070;
var cs = inst_28063;
return ((function (c,v,vec__28068,cs,inst_28071,inst_28070,inst_28072,inst_28063,state_val_28092,c__13496__auto___28115,out){
return (function (p1__28008_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28008_SHARP_);
});
;})(c,v,vec__28068,cs,inst_28071,inst_28070,inst_28072,inst_28063,state_val_28092,c__13496__auto___28115,out))
})();
var inst_28076 = cljs.core.filterv.call(null,inst_28075,inst_28063);
var inst_28063__$1 = inst_28076;
var state_28091__$1 = (function (){var statearr_28106 = state_28091;
(statearr_28106[(10)] = inst_28063__$1);

return statearr_28106;
})();
var statearr_28107_28125 = state_28091__$1;
(statearr_28107_28125[(2)] = null);

(statearr_28107_28125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___28115,out))
;
return ((function (switch__13431__auto__,c__13496__auto___28115,out){
return (function() {
var cljs$core$async$merge_$_state_machine__13432__auto__ = null;
var cljs$core$async$merge_$_state_machine__13432__auto____0 = (function (){
var statearr_28111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28111[(0)] = cljs$core$async$merge_$_state_machine__13432__auto__);

(statearr_28111[(1)] = (1));

return statearr_28111;
});
var cljs$core$async$merge_$_state_machine__13432__auto____1 = (function (state_28091){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_28091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e28112){if((e28112 instanceof Object)){
var ex__13435__auto__ = e28112;
var statearr_28113_28126 = state_28091;
(statearr_28113_28126[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28127 = state_28091;
state_28091 = G__28127;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__13432__auto__ = function(state_28091){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__13432__auto____1.call(this,state_28091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__13432__auto____0;
cljs$core$async$merge_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__13432__auto____1;
return cljs$core$async$merge_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___28115,out))
})();
var state__13498__auto__ = (function (){var statearr_28114 = f__13497__auto__.call(null);
(statearr_28114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___28115);

return statearr_28114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___28115,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13496__auto___28220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___28220,out){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___28220,out){
return (function (state_28197){
var state_val_28198 = (state_28197[(1)]);
if((state_val_28198 === (7))){
var inst_28179 = (state_28197[(7)]);
var inst_28179__$1 = (state_28197[(2)]);
var inst_28180 = (inst_28179__$1 == null);
var inst_28181 = cljs.core.not.call(null,inst_28180);
var state_28197__$1 = (function (){var statearr_28199 = state_28197;
(statearr_28199[(7)] = inst_28179__$1);

return statearr_28199;
})();
if(inst_28181){
var statearr_28200_28221 = state_28197__$1;
(statearr_28200_28221[(1)] = (8));

} else {
var statearr_28201_28222 = state_28197__$1;
(statearr_28201_28222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (1))){
var inst_28174 = (0);
var state_28197__$1 = (function (){var statearr_28202 = state_28197;
(statearr_28202[(8)] = inst_28174);

return statearr_28202;
})();
var statearr_28203_28223 = state_28197__$1;
(statearr_28203_28223[(2)] = null);

(statearr_28203_28223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (4))){
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28197__$1,(7),ch);
} else {
if((state_val_28198 === (6))){
var inst_28192 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28204_28224 = state_28197__$1;
(statearr_28204_28224[(2)] = inst_28192);

(statearr_28204_28224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (3))){
var inst_28194 = (state_28197[(2)]);
var inst_28195 = cljs.core.async.close_BANG_.call(null,out);
var state_28197__$1 = (function (){var statearr_28205 = state_28197;
(statearr_28205[(9)] = inst_28194);

return statearr_28205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28197__$1,inst_28195);
} else {
if((state_val_28198 === (2))){
var inst_28174 = (state_28197[(8)]);
var inst_28176 = (inst_28174 < n);
var state_28197__$1 = state_28197;
if(cljs.core.truth_(inst_28176)){
var statearr_28206_28225 = state_28197__$1;
(statearr_28206_28225[(1)] = (4));

} else {
var statearr_28207_28226 = state_28197__$1;
(statearr_28207_28226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (11))){
var inst_28174 = (state_28197[(8)]);
var inst_28184 = (state_28197[(2)]);
var inst_28185 = (inst_28174 + (1));
var inst_28174__$1 = inst_28185;
var state_28197__$1 = (function (){var statearr_28208 = state_28197;
(statearr_28208[(8)] = inst_28174__$1);

(statearr_28208[(10)] = inst_28184);

return statearr_28208;
})();
var statearr_28209_28227 = state_28197__$1;
(statearr_28209_28227[(2)] = null);

(statearr_28209_28227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (9))){
var state_28197__$1 = state_28197;
var statearr_28210_28228 = state_28197__$1;
(statearr_28210_28228[(2)] = null);

(statearr_28210_28228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (5))){
var state_28197__$1 = state_28197;
var statearr_28211_28229 = state_28197__$1;
(statearr_28211_28229[(2)] = null);

(statearr_28211_28229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (10))){
var inst_28189 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28212_28230 = state_28197__$1;
(statearr_28212_28230[(2)] = inst_28189);

(statearr_28212_28230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (8))){
var inst_28179 = (state_28197[(7)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28197__$1,(11),out,inst_28179);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___28220,out))
;
return ((function (switch__13431__auto__,c__13496__auto___28220,out){
return (function() {
var cljs$core$async$take_$_state_machine__13432__auto__ = null;
var cljs$core$async$take_$_state_machine__13432__auto____0 = (function (){
var statearr_28216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28216[(0)] = cljs$core$async$take_$_state_machine__13432__auto__);

(statearr_28216[(1)] = (1));

return statearr_28216;
});
var cljs$core$async$take_$_state_machine__13432__auto____1 = (function (state_28197){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_28197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e28217){if((e28217 instanceof Object)){
var ex__13435__auto__ = e28217;
var statearr_28218_28231 = state_28197;
(statearr_28218_28231[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28232 = state_28197;
state_28197 = G__28232;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__13432__auto__ = function(state_28197){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__13432__auto____1.call(this,state_28197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__13432__auto____0;
cljs$core$async$take_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__13432__auto____1;
return cljs$core$async$take_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___28220,out))
})();
var state__13498__auto__ = (function (){var statearr_28219 = f__13497__auto__.call(null);
(statearr_28219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___28220);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___28220,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Returns a channel that will contain values from ch. Consecutive duplicate
 * values will be dropped.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13496__auto___28329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___28329,out){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___28329,out){
return (function (state_28304){
var state_val_28305 = (state_28304[(1)]);
if((state_val_28305 === (7))){
var inst_28299 = (state_28304[(2)]);
var state_28304__$1 = state_28304;
var statearr_28306_28330 = state_28304__$1;
(statearr_28306_28330[(2)] = inst_28299);

(statearr_28306_28330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (1))){
var inst_28281 = null;
var state_28304__$1 = (function (){var statearr_28307 = state_28304;
(statearr_28307[(7)] = inst_28281);

return statearr_28307;
})();
var statearr_28308_28331 = state_28304__$1;
(statearr_28308_28331[(2)] = null);

(statearr_28308_28331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (4))){
var inst_28284 = (state_28304[(8)]);
var inst_28284__$1 = (state_28304[(2)]);
var inst_28285 = (inst_28284__$1 == null);
var inst_28286 = cljs.core.not.call(null,inst_28285);
var state_28304__$1 = (function (){var statearr_28309 = state_28304;
(statearr_28309[(8)] = inst_28284__$1);

return statearr_28309;
})();
if(inst_28286){
var statearr_28310_28332 = state_28304__$1;
(statearr_28310_28332[(1)] = (5));

} else {
var statearr_28311_28333 = state_28304__$1;
(statearr_28311_28333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (6))){
var state_28304__$1 = state_28304;
var statearr_28312_28334 = state_28304__$1;
(statearr_28312_28334[(2)] = null);

(statearr_28312_28334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (3))){
var inst_28301 = (state_28304[(2)]);
var inst_28302 = cljs.core.async.close_BANG_.call(null,out);
var state_28304__$1 = (function (){var statearr_28313 = state_28304;
(statearr_28313[(9)] = inst_28301);

return statearr_28313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28304__$1,inst_28302);
} else {
if((state_val_28305 === (2))){
var state_28304__$1 = state_28304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28304__$1,(4),ch);
} else {
if((state_val_28305 === (11))){
var inst_28284 = (state_28304[(8)]);
var inst_28293 = (state_28304[(2)]);
var inst_28281 = inst_28284;
var state_28304__$1 = (function (){var statearr_28314 = state_28304;
(statearr_28314[(10)] = inst_28293);

(statearr_28314[(7)] = inst_28281);

return statearr_28314;
})();
var statearr_28315_28335 = state_28304__$1;
(statearr_28315_28335[(2)] = null);

(statearr_28315_28335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (9))){
var inst_28284 = (state_28304[(8)]);
var state_28304__$1 = state_28304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28304__$1,(11),out,inst_28284);
} else {
if((state_val_28305 === (5))){
var inst_28284 = (state_28304[(8)]);
var inst_28281 = (state_28304[(7)]);
var inst_28288 = cljs.core._EQ_.call(null,inst_28284,inst_28281);
var state_28304__$1 = state_28304;
if(inst_28288){
var statearr_28317_28336 = state_28304__$1;
(statearr_28317_28336[(1)] = (8));

} else {
var statearr_28318_28337 = state_28304__$1;
(statearr_28318_28337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (10))){
var inst_28296 = (state_28304[(2)]);
var state_28304__$1 = state_28304;
var statearr_28319_28338 = state_28304__$1;
(statearr_28319_28338[(2)] = inst_28296);

(statearr_28319_28338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28305 === (8))){
var inst_28281 = (state_28304[(7)]);
var tmp28316 = inst_28281;
var inst_28281__$1 = tmp28316;
var state_28304__$1 = (function (){var statearr_28320 = state_28304;
(statearr_28320[(7)] = inst_28281__$1);

return statearr_28320;
})();
var statearr_28321_28339 = state_28304__$1;
(statearr_28321_28339[(2)] = null);

(statearr_28321_28339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___28329,out))
;
return ((function (switch__13431__auto__,c__13496__auto___28329,out){
return (function() {
var cljs$core$async$unique_$_state_machine__13432__auto__ = null;
var cljs$core$async$unique_$_state_machine__13432__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = cljs$core$async$unique_$_state_machine__13432__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var cljs$core$async$unique_$_state_machine__13432__auto____1 = (function (state_28304){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_28304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__13435__auto__ = e28326;
var statearr_28327_28340 = state_28304;
(statearr_28327_28340[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28341 = state_28304;
state_28304 = G__28341;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__13432__auto__ = function(state_28304){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__13432__auto____1.call(this,state_28304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__13432__auto____0;
cljs$core$async$unique_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__13432__auto____1;
return cljs$core$async$unique_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___28329,out))
})();
var state__13498__auto__ = (function (){var statearr_28328 = f__13497__auto__.call(null);
(statearr_28328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___28329);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___28329,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Returns a channel that will contain vectors of n items taken from ch. The
 * final vector in the return channel may be smaller than n if ch closed before
 * the vector could be completely filled.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13496__auto___28476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___28476,out){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___28476,out){
return (function (state_28446){
var state_val_28447 = (state_28446[(1)]);
if((state_val_28447 === (7))){
var inst_28442 = (state_28446[(2)]);
var state_28446__$1 = state_28446;
var statearr_28448_28477 = state_28446__$1;
(statearr_28448_28477[(2)] = inst_28442);

(statearr_28448_28477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (1))){
var inst_28409 = (new Array(n));
var inst_28410 = inst_28409;
var inst_28411 = (0);
var state_28446__$1 = (function (){var statearr_28449 = state_28446;
(statearr_28449[(7)] = inst_28411);

(statearr_28449[(8)] = inst_28410);

return statearr_28449;
})();
var statearr_28450_28478 = state_28446__$1;
(statearr_28450_28478[(2)] = null);

(statearr_28450_28478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (4))){
var inst_28414 = (state_28446[(9)]);
var inst_28414__$1 = (state_28446[(2)]);
var inst_28415 = (inst_28414__$1 == null);
var inst_28416 = cljs.core.not.call(null,inst_28415);
var state_28446__$1 = (function (){var statearr_28451 = state_28446;
(statearr_28451[(9)] = inst_28414__$1);

return statearr_28451;
})();
if(inst_28416){
var statearr_28452_28479 = state_28446__$1;
(statearr_28452_28479[(1)] = (5));

} else {
var statearr_28453_28480 = state_28446__$1;
(statearr_28453_28480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (15))){
var inst_28436 = (state_28446[(2)]);
var state_28446__$1 = state_28446;
var statearr_28454_28481 = state_28446__$1;
(statearr_28454_28481[(2)] = inst_28436);

(statearr_28454_28481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (13))){
var state_28446__$1 = state_28446;
var statearr_28455_28482 = state_28446__$1;
(statearr_28455_28482[(2)] = null);

(statearr_28455_28482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (6))){
var inst_28411 = (state_28446[(7)]);
var inst_28432 = (inst_28411 > (0));
var state_28446__$1 = state_28446;
if(cljs.core.truth_(inst_28432)){
var statearr_28456_28483 = state_28446__$1;
(statearr_28456_28483[(1)] = (12));

} else {
var statearr_28457_28484 = state_28446__$1;
(statearr_28457_28484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (3))){
var inst_28444 = (state_28446[(2)]);
var state_28446__$1 = state_28446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28446__$1,inst_28444);
} else {
if((state_val_28447 === (12))){
var inst_28410 = (state_28446[(8)]);
var inst_28434 = cljs.core.vec.call(null,inst_28410);
var state_28446__$1 = state_28446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28446__$1,(15),out,inst_28434);
} else {
if((state_val_28447 === (2))){
var state_28446__$1 = state_28446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28446__$1,(4),ch);
} else {
if((state_val_28447 === (11))){
var inst_28426 = (state_28446[(2)]);
var inst_28427 = (new Array(n));
var inst_28410 = inst_28427;
var inst_28411 = (0);
var state_28446__$1 = (function (){var statearr_28458 = state_28446;
(statearr_28458[(10)] = inst_28426);

(statearr_28458[(7)] = inst_28411);

(statearr_28458[(8)] = inst_28410);

return statearr_28458;
})();
var statearr_28459_28485 = state_28446__$1;
(statearr_28459_28485[(2)] = null);

(statearr_28459_28485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (9))){
var inst_28410 = (state_28446[(8)]);
var inst_28424 = cljs.core.vec.call(null,inst_28410);
var state_28446__$1 = state_28446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28446__$1,(11),out,inst_28424);
} else {
if((state_val_28447 === (5))){
var inst_28414 = (state_28446[(9)]);
var inst_28411 = (state_28446[(7)]);
var inst_28419 = (state_28446[(11)]);
var inst_28410 = (state_28446[(8)]);
var inst_28418 = (inst_28410[inst_28411] = inst_28414);
var inst_28419__$1 = (inst_28411 + (1));
var inst_28420 = (inst_28419__$1 < n);
var state_28446__$1 = (function (){var statearr_28460 = state_28446;
(statearr_28460[(12)] = inst_28418);

(statearr_28460[(11)] = inst_28419__$1);

return statearr_28460;
})();
if(cljs.core.truth_(inst_28420)){
var statearr_28461_28486 = state_28446__$1;
(statearr_28461_28486[(1)] = (8));

} else {
var statearr_28462_28487 = state_28446__$1;
(statearr_28462_28487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (14))){
var inst_28439 = (state_28446[(2)]);
var inst_28440 = cljs.core.async.close_BANG_.call(null,out);
var state_28446__$1 = (function (){var statearr_28464 = state_28446;
(statearr_28464[(13)] = inst_28439);

return statearr_28464;
})();
var statearr_28465_28488 = state_28446__$1;
(statearr_28465_28488[(2)] = inst_28440);

(statearr_28465_28488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (10))){
var inst_28430 = (state_28446[(2)]);
var state_28446__$1 = state_28446;
var statearr_28466_28489 = state_28446__$1;
(statearr_28466_28489[(2)] = inst_28430);

(statearr_28466_28489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (8))){
var inst_28419 = (state_28446[(11)]);
var inst_28410 = (state_28446[(8)]);
var tmp28463 = inst_28410;
var inst_28410__$1 = tmp28463;
var inst_28411 = inst_28419;
var state_28446__$1 = (function (){var statearr_28467 = state_28446;
(statearr_28467[(7)] = inst_28411);

(statearr_28467[(8)] = inst_28410__$1);

return statearr_28467;
})();
var statearr_28468_28490 = state_28446__$1;
(statearr_28468_28490[(2)] = null);

(statearr_28468_28490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___28476,out))
;
return ((function (switch__13431__auto__,c__13496__auto___28476,out){
return (function() {
var cljs$core$async$partition_$_state_machine__13432__auto__ = null;
var cljs$core$async$partition_$_state_machine__13432__auto____0 = (function (){
var statearr_28472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = cljs$core$async$partition_$_state_machine__13432__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var cljs$core$async$partition_$_state_machine__13432__auto____1 = (function (state_28446){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_28446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e28473){if((e28473 instanceof Object)){
var ex__13435__auto__ = e28473;
var statearr_28474_28491 = state_28446;
(statearr_28474_28491[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28492 = state_28446;
state_28446 = G__28492;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__13432__auto__ = function(state_28446){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__13432__auto____1.call(this,state_28446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__13432__auto____0;
cljs$core$async$partition_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__13432__auto____1;
return cljs$core$async$partition_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___28476,out))
})();
var state__13498__auto__ = (function (){var statearr_28475 = f__13497__auto__.call(null);
(statearr_28475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___28476);

return statearr_28475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___28476,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Returns a channel that will contain vectors of items taken from ch. New
 * vectors will be created whenever (f itm) returns a value that differs from
 * the previous item's (f itm).
 * 
 * The output channel is unbuffered, unless buf-or-n is given
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13496__auto___28635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13496__auto___28635,out){
return (function (){
var f__13497__auto__ = (function (){var switch__13431__auto__ = ((function (c__13496__auto___28635,out){
return (function (state_28605){
var state_val_28606 = (state_28605[(1)]);
if((state_val_28606 === (7))){
var inst_28601 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28607_28636 = state_28605__$1;
(statearr_28607_28636[(2)] = inst_28601);

(statearr_28607_28636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (1))){
var inst_28564 = [];
var inst_28565 = inst_28564;
var inst_28566 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28605__$1 = (function (){var statearr_28608 = state_28605;
(statearr_28608[(7)] = inst_28565);

(statearr_28608[(8)] = inst_28566);

return statearr_28608;
})();
var statearr_28609_28637 = state_28605__$1;
(statearr_28609_28637[(2)] = null);

(statearr_28609_28637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (4))){
var inst_28569 = (state_28605[(9)]);
var inst_28569__$1 = (state_28605[(2)]);
var inst_28570 = (inst_28569__$1 == null);
var inst_28571 = cljs.core.not.call(null,inst_28570);
var state_28605__$1 = (function (){var statearr_28610 = state_28605;
(statearr_28610[(9)] = inst_28569__$1);

return statearr_28610;
})();
if(inst_28571){
var statearr_28611_28638 = state_28605__$1;
(statearr_28611_28638[(1)] = (5));

} else {
var statearr_28612_28639 = state_28605__$1;
(statearr_28612_28639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (15))){
var inst_28595 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28613_28640 = state_28605__$1;
(statearr_28613_28640[(2)] = inst_28595);

(statearr_28613_28640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (13))){
var state_28605__$1 = state_28605;
var statearr_28614_28641 = state_28605__$1;
(statearr_28614_28641[(2)] = null);

(statearr_28614_28641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (6))){
var inst_28565 = (state_28605[(7)]);
var inst_28590 = inst_28565.length;
var inst_28591 = (inst_28590 > (0));
var state_28605__$1 = state_28605;
if(cljs.core.truth_(inst_28591)){
var statearr_28615_28642 = state_28605__$1;
(statearr_28615_28642[(1)] = (12));

} else {
var statearr_28616_28643 = state_28605__$1;
(statearr_28616_28643[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (3))){
var inst_28603 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28605__$1,inst_28603);
} else {
if((state_val_28606 === (12))){
var inst_28565 = (state_28605[(7)]);
var inst_28593 = cljs.core.vec.call(null,inst_28565);
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28605__$1,(15),out,inst_28593);
} else {
if((state_val_28606 === (2))){
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28605__$1,(4),ch);
} else {
if((state_val_28606 === (11))){
var inst_28569 = (state_28605[(9)]);
var inst_28573 = (state_28605[(10)]);
var inst_28583 = (state_28605[(2)]);
var inst_28584 = [];
var inst_28585 = inst_28584.push(inst_28569);
var inst_28565 = inst_28584;
var inst_28566 = inst_28573;
var state_28605__$1 = (function (){var statearr_28617 = state_28605;
(statearr_28617[(7)] = inst_28565);

(statearr_28617[(11)] = inst_28585);

(statearr_28617[(8)] = inst_28566);

(statearr_28617[(12)] = inst_28583);

return statearr_28617;
})();
var statearr_28618_28644 = state_28605__$1;
(statearr_28618_28644[(2)] = null);

(statearr_28618_28644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (9))){
var inst_28565 = (state_28605[(7)]);
var inst_28581 = cljs.core.vec.call(null,inst_28565);
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28605__$1,(11),out,inst_28581);
} else {
if((state_val_28606 === (5))){
var inst_28569 = (state_28605[(9)]);
var inst_28573 = (state_28605[(10)]);
var inst_28566 = (state_28605[(8)]);
var inst_28573__$1 = f.call(null,inst_28569);
var inst_28574 = cljs.core._EQ_.call(null,inst_28573__$1,inst_28566);
var inst_28575 = cljs.core.keyword_identical_QMARK_.call(null,inst_28566,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28576 = (inst_28574) || (inst_28575);
var state_28605__$1 = (function (){var statearr_28619 = state_28605;
(statearr_28619[(10)] = inst_28573__$1);

return statearr_28619;
})();
if(cljs.core.truth_(inst_28576)){
var statearr_28620_28645 = state_28605__$1;
(statearr_28620_28645[(1)] = (8));

} else {
var statearr_28621_28646 = state_28605__$1;
(statearr_28621_28646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (14))){
var inst_28598 = (state_28605[(2)]);
var inst_28599 = cljs.core.async.close_BANG_.call(null,out);
var state_28605__$1 = (function (){var statearr_28623 = state_28605;
(statearr_28623[(13)] = inst_28598);

return statearr_28623;
})();
var statearr_28624_28647 = state_28605__$1;
(statearr_28624_28647[(2)] = inst_28599);

(statearr_28624_28647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (10))){
var inst_28588 = (state_28605[(2)]);
var state_28605__$1 = state_28605;
var statearr_28625_28648 = state_28605__$1;
(statearr_28625_28648[(2)] = inst_28588);

(statearr_28625_28648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28606 === (8))){
var inst_28569 = (state_28605[(9)]);
var inst_28565 = (state_28605[(7)]);
var inst_28573 = (state_28605[(10)]);
var inst_28578 = inst_28565.push(inst_28569);
var tmp28622 = inst_28565;
var inst_28565__$1 = tmp28622;
var inst_28566 = inst_28573;
var state_28605__$1 = (function (){var statearr_28626 = state_28605;
(statearr_28626[(7)] = inst_28565__$1);

(statearr_28626[(14)] = inst_28578);

(statearr_28626[(8)] = inst_28566);

return statearr_28626;
})();
var statearr_28627_28649 = state_28605__$1;
(statearr_28627_28649[(2)] = null);

(statearr_28627_28649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13496__auto___28635,out))
;
return ((function (switch__13431__auto__,c__13496__auto___28635,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__13432__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__13432__auto____0 = (function (){
var statearr_28631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28631[(0)] = cljs$core$async$partition_by_$_state_machine__13432__auto__);

(statearr_28631[(1)] = (1));

return statearr_28631;
});
var cljs$core$async$partition_by_$_state_machine__13432__auto____1 = (function (state_28605){
while(true){
var ret_value__13433__auto__ = (function (){try{while(true){
var result__13434__auto__ = switch__13431__auto__.call(null,state_28605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13434__auto__;
}
break;
}
}catch (e28632){if((e28632 instanceof Object)){
var ex__13435__auto__ = e28632;
var statearr_28633_28650 = state_28605;
(statearr_28633_28650[(5)] = ex__13435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28651 = state_28605;
state_28605 = G__28651;
continue;
} else {
return ret_value__13433__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__13432__auto__ = function(state_28605){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__13432__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__13432__auto____1.call(this,state_28605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__13432__auto____0;
cljs$core$async$partition_by_$_state_machine__13432__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__13432__auto____1;
return cljs$core$async$partition_by_$_state_machine__13432__auto__;
})()
;})(switch__13431__auto__,c__13496__auto___28635,out))
})();
var state__13498__auto__ = (function (){var statearr_28634 = f__13497__auto__.call(null);
(statearr_28634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13496__auto___28635);

return statearr_28634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13498__auto__);
});})(c__13496__auto___28635,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;
