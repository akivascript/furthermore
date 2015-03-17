// Compiled by ClojureScript 0.0-3119 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = (function (){var obj25433 = {};
return obj25433;
})();

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__4110__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = (function (){var obj25435 = {};
return obj25435;
})();

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__4110__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (ajax.core._abort[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (ajax.core._abort["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 */
ajax.core.DirectlySubmittable = (function (){var obj25437 = {};
return obj25437;
})();


/**
 * An abstraction for an ajax response.
 */
ajax.core.AjaxResponse = (function (){var obj25439 = {};
return obj25439;
})();

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__4110__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (ajax.core._status[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (ajax.core._status["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__4110__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (ajax.core._status_text[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (ajax.core._status_text["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the response body as a string.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__4110__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (ajax.core._body[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (ajax.core._body["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__4110__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (ajax.core._get_response_header[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((function (){var and__4110__auto__ = this$;
if(and__4110__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__4110__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__4758__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4122__auto__ = (ajax.core._was_aborted[goog.typeOf(x__4758__auto__)]);
if(or__4122__auto__){
return or__4122__auto__;
} else {
var or__4122__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__4122__auto____$1){
return or__4122__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__4122__auto__ = (function (){var G__25443 = params;
if(G__25443){
var bit__4796__auto__ = null;
if(cljs.core.truth_((function (){var or__4122__auto__ = bit__4796__auto__;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return G__25443.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__25443.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__25443);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__25443);
}
})();
if(or__4122__auto__){
return or__4122__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__25445){
var map__25446 = p__25445;
var map__25446__$1 = ((cljs.core.seq_QMARK_.call(null,map__25446))?cljs.core.apply.call(null,cljs.core.hash_map,map__25446):map__25446);
var with_credentials = cljs.core.get.call(null,map__25446__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__25446__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var this$__$1 = this;
var G__25447 = this$__$1;
goog.events.listen(G__25447,goog.net.EventType.COMPLETE,((function (G__25447,this$__$1,map__25446,map__25446__$1,with_credentials,timeout){
return (function (p1__25444_SHARP_){
return handler.call(null,p1__25444_SHARP_.target);
});})(G__25447,this$__$1,map__25446,map__25446__$1,with_credentials,timeout))
);

G__25447.setTimeoutInterval(timeout);

G__25447.setWithCredentials(with_credentials);

G__25447.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__25447;
});
XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__25448){
var map__25449 = p__25448;
var map__25449__$1 = ((cljs.core.seq_QMARK_.call(null,map__25449))?cljs.core.apply.call(null,cljs.core.hash_map,map__25449):map__25449);
var with_credentials = cljs.core.get.call(null,map__25449__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__25449__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__25449,map__25449__$1,with_credentials,timeout){
return (function (){
return handler.call(null,this$__$1);
});})(this$__$1,map__25449,map__25449__$1,with_credentials,timeout))
;

var G__25450 = this$__$1;
G__25450.open(method,uri,true);

var t_25457 = G__25450;
var t_25458__$1 = (function (){var seq__25451 = cljs.core.seq.call(null,headers);
var chunk__25452 = null;
var count__25453 = (0);
var i__25454 = (0);
while(true){
if((i__25454 < count__25453)){
var vec__25455 = cljs.core._nth.call(null,chunk__25452,i__25454);
var k = cljs.core.nth.call(null,vec__25455,(0),null);
var v = cljs.core.nth.call(null,vec__25455,(1),null);
t_25457.setRequestHeader(k,v);

var G__25459 = seq__25451;
var G__25460 = chunk__25452;
var G__25461 = count__25453;
var G__25462 = (i__25454 + (1));
seq__25451 = G__25459;
chunk__25452 = G__25460;
count__25453 = G__25461;
i__25454 = G__25462;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__25451);
if(temp__4406__auto__){
var seq__25451__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25451__$1)){
var c__4907__auto__ = cljs.core.chunk_first.call(null,seq__25451__$1);
var G__25463 = cljs.core.chunk_rest.call(null,seq__25451__$1);
var G__25464 = c__4907__auto__;
var G__25465 = cljs.core.count.call(null,c__4907__auto__);
var G__25466 = (0);
seq__25451 = G__25463;
chunk__25452 = G__25464;
count__25453 = G__25465;
i__25454 = G__25466;
continue;
} else {
var vec__25456 = cljs.core.first.call(null,seq__25451__$1);
var k = cljs.core.nth.call(null,vec__25456,(0),null);
var v = cljs.core.nth.call(null,vec__25456,(1),null);
t_25457.setRequestHeader(k,v);

var G__25467 = cljs.core.next.call(null,seq__25451__$1);
var G__25468 = null;
var G__25469 = (0);
var G__25470 = (0);
seq__25451 = G__25467;
chunk__25452 = G__25468;
count__25453 = G__25469;
i__25454 = G__25470;
continue;
}
} else {
return null;
}
}
break;
}
})();

G__25450.send((function (){var or__4122__auto__ = body;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return "";
}
})());

return G__25450;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__25471){
var map__25472 = p__25471;
var map__25472__$1 = ((cljs.core.seq_QMARK_.call(null,map__25472))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);
var max_retries = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var priority = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var timeout = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var id = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,ajax.core._body.call(null,xhrio));
});
ajax.core.edn_response_format = (function() {
var ajax$core$edn_response_format = null;
var ajax$core$edn_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
var ajax$core$edn_response_format__1 = (function (opts){
return ajax$core$edn_response_format.call(null);
});
ajax$core$edn_response_format = function(opts){
switch(arguments.length){
case 0:
return ajax$core$edn_response_format__0.call(this);
case 1:
return ajax$core$edn_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$edn_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$edn_response_format__0;
ajax$core$edn_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$edn_response_format__1;
return ajax$core$edn_response_format;
})()
;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function() {
var ajax$core$transit_write = null;
var ajax$core$transit_write__1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});
var ajax$core$transit_write__2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});
ajax$core$transit_write = function(writer,params){
switch(arguments.length){
case 1:
return ajax$core$transit_write__1.call(this,writer);
case 2:
return ajax$core$transit_write__2.call(this,writer,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_write.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_write__1;
ajax$core$transit_write.cljs$core$IFn$_invoke$arity$2 = ajax$core$transit_write__2;
return ajax$core$transit_write;
})()
;
ajax.core.transit_request_format = (function() {
var ajax$core$transit_request_format = null;
var ajax$core$transit_request_format__0 = (function (){
return ajax$core$transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var ajax$core$transit_request_format__1 = (function (p__25473){
var map__25475 = p__25473;
var map__25475__$1 = ((cljs.core.seq_QMARK_.call(null,map__25475))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);
var opts = map__25475__$1;
var writer = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var type = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer__$1 = (function (){var or__4122__auto__ = writer;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__4122__auto____$1 = type;
if(cljs.core.truth_(or__4122__auto____$1)){
return or__4122__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),ajax.core.transit_content_type], null);
});
ajax$core$transit_request_format = function(p__25473){
switch(arguments.length){
case 0:
return ajax$core$transit_request_format__0.call(this);
case 1:
return ajax$core$transit_request_format__1.call(this,p__25473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_request_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$transit_request_format__0;
ajax$core$transit_request_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_request_format__1;
return ajax$core$transit_request_format;
})()
;
ajax.core.transit_read = (function() {
var ajax$core$transit_read = null;
var ajax$core$transit_read__1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});
var ajax$core$transit_read__2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});
var ajax$core$transit_read__3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
ajax$core$transit_read = function(reader,raw,xhrio){
switch(arguments.length){
case 1:
return ajax$core$transit_read__1.call(this,reader);
case 2:
return ajax$core$transit_read__2.call(this,reader,raw);
case 3:
return ajax$core$transit_read__3.call(this,reader,raw,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_read.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_read__1;
ajax$core$transit_read.cljs$core$IFn$_invoke$arity$2 = ajax$core$transit_read__2;
ajax$core$transit_read.cljs$core$IFn$_invoke$arity$3 = ajax$core$transit_read__3;
return ajax$core$transit_read;
})()
;
ajax.core.transit_response_format = (function() {
var ajax$core$transit_response_format = null;
var ajax$core$transit_response_format__0 = (function (){
return ajax$core$transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var ajax$core$transit_response_format__1 = (function (p__25476){
var map__25478 = p__25476;
var map__25478__$1 = ((cljs.core.seq_QMARK_.call(null,map__25478))?cljs.core.apply.call(null,cljs.core.hash_map,map__25478):map__25478);
var opts = map__25478__$1;
var raw = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var type = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader__$1 = (function (){var or__4122__auto__ = reader;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__4122__auto____$1 = type;
if(cljs.core.truth_(or__4122__auto____$1)){
return or__4122__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});
ajax$core$transit_response_format = function(p__25476){
switch(arguments.length){
case 0:
return ajax$core$transit_response_format__0.call(this);
case 1:
return ajax$core$transit_response_format__1.call(this,p__25476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$transit_response_format__0;
ajax$core$transit_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_response_format__1;
return ajax$core$transit_response_format;
})()
;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function() {
var ajax$core$raw_response_format = null;
var ajax$core$raw_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
});
var ajax$core$raw_response_format__1 = (function (opts){
return ajax$core$raw_response_format.call(null);
});
ajax$core$raw_response_format = function(opts){
switch(arguments.length){
case 0:
return ajax$core$raw_response_format__0.call(this);
case 1:
return ajax$core$raw_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$raw_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$raw_response_format__0;
ajax$core$raw_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$raw_response_format__1;
return ajax$core$raw_response_format;
})()
;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function() {
var ajax$core$json_read = null;
var ajax$core$json_read__1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4110__auto__ = prefix;
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__4110__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var ajax$core$json_read__2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4110__auto__ = prefix;
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__4110__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var ajax$core$json_read__3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4110__auto__ = prefix;
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__4110__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var ajax$core$json_read__4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4110__auto__ = prefix;
if(cljs.core.truth_(and__4110__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__4110__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
ajax$core$json_read = function(prefix,raw,keywords_QMARK_,xhrio){
switch(arguments.length){
case 1:
return ajax$core$json_read__1.call(this,prefix);
case 2:
return ajax$core$json_read__2.call(this,prefix,raw);
case 3:
return ajax$core$json_read__3.call(this,prefix,raw,keywords_QMARK_);
case 4:
return ajax$core$json_read__4.call(this,prefix,raw,keywords_QMARK_,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$json_read.cljs$core$IFn$_invoke$arity$1 = ajax$core$json_read__1;
ajax$core$json_read.cljs$core$IFn$_invoke$arity$2 = ajax$core$json_read__2;
ajax$core$json_read.cljs$core$IFn$_invoke$arity$3 = ajax$core$json_read__3;
ajax$core$json_read.cljs$core$IFn$_invoke$arity$4 = ajax$core$json_read__4;
return ajax$core$json_read;
})()
;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function() {
var ajax$core$json_response_format = null;
var ajax$core$json_response_format__0 = (function (){
return ajax$core$json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var ajax$core$json_response_format__1 = (function (p__25479){
var map__25481 = p__25479;
var map__25481__$1 = ((cljs.core.seq_QMARK_.call(null,map__25481))?cljs.core.apply.call(null,cljs.core.hash_map,map__25481):map__25481);
var raw = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var keywords_QMARK_ = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var prefix = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax$core$json_response_format = function(p__25479){
switch(arguments.length){
case 0:
return ajax$core$json_response_format__0.call(this);
case 1:
return ajax$core$json_response_format__1.call(this,p__25479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$json_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$json_response_format__0;
ajax$core$json_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$json_response_format__1;
return ajax$core$json_response_format;
})()
;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function() {
var ajax$core$get_format = null;
var ajax$core$get_format__1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax$core$get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
});
var ajax$core$get_format__2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax$core$get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
ajax$core$get_format = function(opts,format_entry){
switch(arguments.length){
case 1:
return ajax$core$get_format__1.call(this,opts);
case 2:
return ajax$core$get_format__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$get_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$get_format__1;
ajax$core$get_format.cljs$core$IFn$_invoke$arity$2 = ajax$core$get_format__2;
return ajax$core$get_format;
})()
;
ajax.core.accept_entry = (function() {
var ajax$core$accept_entry = null;
var ajax$core$accept_entry__1 = (function (opts){
return (function (format_entry){
var or__4122__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return "*/*";
}
});
});
var ajax$core$accept_entry__2 = (function (opts,format_entry){
var or__4122__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return "*/*";
}
});
ajax$core$accept_entry = function(opts,format_entry){
switch(arguments.length){
case 1:
return ajax$core$accept_entry__1.call(this,opts);
case 2:
return ajax$core$accept_entry__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$accept_entry.cljs$core$IFn$_invoke$arity$1 = ajax$core$accept_entry__1;
ajax$core$accept_entry.cljs$core$IFn$_invoke$arity$2 = ajax$core$accept_entry__2;
return ajax$core$accept_entry;
})()
;
ajax.core.detect_content_type = (function() {
var ajax$core$detect_content_type = null;
var ajax$core$detect_content_type__1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var ajax$core$detect_content_type__2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var ajax$core$detect_content_type__3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
ajax$core$detect_content_type = function(content_type,opts,format_entry){
switch(arguments.length){
case 1:
return ajax$core$detect_content_type__1.call(this,content_type);
case 2:
return ajax$core$detect_content_type__2.call(this,content_type,opts);
case 3:
return ajax$core$detect_content_type__3.call(this,content_type,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$detect_content_type.cljs$core$IFn$_invoke$arity$1 = ajax$core$detect_content_type__1;
ajax$core$detect_content_type.cljs$core$IFn$_invoke$arity$2 = ajax$core$detect_content_type__2;
ajax$core$detect_content_type.cljs$core$IFn$_invoke$arity$3 = ajax$core$detect_content_type__3;
return ajax$core$detect_content_type;
})()
;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__25482){
var map__25484 = p__25482;
var map__25484__$1 = ((cljs.core.seq_QMARK_.call(null,map__25484))?cljs.core.apply.call(null,cljs.core.hash_map,map__25484):map__25484);
var opts = map__25484__$1;
var response_format = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__4122__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function() {
var ajax$core$detect_response_format_read = null;
var ajax$core$detect_response_format_read__1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});
var ajax$core$detect_response_format_read__2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
ajax$core$detect_response_format_read = function(opts,xhrio){
switch(arguments.length){
case 1:
return ajax$core$detect_response_format_read__1.call(this,opts);
case 2:
return ajax$core$detect_response_format_read__2.call(this,opts,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = ajax$core$detect_response_format_read__1;
ajax$core$detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = ajax$core$detect_response_format_read__2;
return ajax$core$detect_response_format_read;
})()
;
ajax.core.accept_header = (function ajax$core$accept_header(p__25485){
var map__25487 = p__25485;
var map__25487__$1 = ((cljs.core.seq_QMARK_.call(null,map__25487))?cljs.core.apply.call(null,cljs.core.hash_map,map__25487):map__25487);
var opts = map__25487__$1;
var response_format = cljs.core.get.call(null,map__25487__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function() {
var ajax$core$detect_response_format = null;
var ajax$core$detect_response_format__0 = (function (){
return ajax$core$detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});
var ajax$core$detect_response_format__1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null);
});
ajax$core$detect_response_format = function(opts){
switch(arguments.length){
case 0:
return ajax$core$detect_response_format__0.call(this);
case 1:
return ajax$core$detect_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$detect_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$detect_response_format__0;
ajax$core$detect_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$detect_response_format__1;
return ajax$core$detect_response_format;
})()
;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__25488){
var map__25490 = p__25488;
var map__25490__$1 = ((cljs.core.seq_QMARK_.call(null,map__25490))?cljs.core.apply.call(null,cljs.core.hash_map,map__25490):map__25490);
var opts = map__25490__$1;
var response_format = cljs.core.get.call(null,map__25490__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__25491,xhrio){
var map__25493 = p__25491;
var map__25493__$1 = ((cljs.core.seq_QMARK_.call(null,map__25493))?cljs.core.apply.call(null,cljs.core.hash_map,map__25493):map__25493);
var description = cljs.core.get.call(null,map__25493__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
/**
 * @param {...*} var_args
 */
ajax.core.fail = (function() { 
var ajax$core$fail__delegate = function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
};
var ajax$core$fail = function (status,status_text,failure,var_args){
var params = null;
if (arguments.length > 3) {
var G__25494__i = 0, G__25494__a = new Array(arguments.length -  3);
while (G__25494__i < G__25494__a.length) {G__25494__a[G__25494__i] = arguments[G__25494__i + 3]; ++G__25494__i;}
  params = new cljs.core.IndexedSeq(G__25494__a,0);
} 
return ajax$core$fail__delegate.call(this,status,status_text,failure,params);};
ajax$core$fail.cljs$lang$maxFixedArity = 3;
ajax$core$fail.cljs$lang$applyTo = (function (arglist__25495){
var status = cljs.core.first(arglist__25495);
arglist__25495 = cljs.core.next(arglist__25495);
var status_text = cljs.core.first(arglist__25495);
arglist__25495 = cljs.core.next(arglist__25495);
var failure = cljs.core.first(arglist__25495);
var params = cljs.core.rest(arglist__25495);
return ajax$core$fail__delegate(status,status_text,failure,params);
});
ajax$core$fail.cljs$core$IFn$_invoke$arity$variadic = ajax$core$fail__delegate;
return ajax$core$fail;
})()
;
ajax.core.interpret_response = (function ajax$core$interpret_response(p__25496,xhrio){
var map__25500 = p__25496;
var map__25500__$1 = ((cljs.core.seq_QMARK_.call(null,map__25500))?cljs.core.apply.call(null,cljs.core.hash_map,map__25500):map__25500);
var format = map__25500__$1;
var read = cljs.core.get.call(null,map__25500__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
if(cljs.core._EQ_.call(null,(-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}
} else {
try{var response = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e25502){if((e25502 instanceof Object)){
var e = e25502;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e25502;

}
}}
}catch (e25501){if((e25501 instanceof Object)){
var e = e25501;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e25501;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__25503,p__25504){
var map__25508 = p__25503;
var map__25508__$1 = ((cljs.core.seq_QMARK_.call(null,map__25508))?cljs.core.apply.call(null,cljs.core.hash_map,map__25508):map__25508);
var headers = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"params","params",710516235));
var format = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var map__25509 = p__25504;
var map__25509__$1 = ((cljs.core.seq_QMARK_.call(null,map__25509))?cljs.core.apply.call(null,cljs.core.hash_map,map__25509):map__25509);
var content_type = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__4122__auto__ = headers;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__25510 = ajax.core.get_request_format.call(null,format);
var map__25510__$1 = ((cljs.core.seq_QMARK_.call(null,map__25510))?cljs.core.apply.call(null,cljs.core.hash_map,map__25510):map__25510);
var content_type__$1 = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var write = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var body = ((!((write == null)))?write.call(null,params):((ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function() {
var ajax$core$js_handler = null;
var ajax$core$js_handler__1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});
var ajax$core$js_handler__2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});
var ajax$core$js_handler__3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
ajax$core$js_handler = function(response_format,handler,xhrio){
switch(arguments.length){
case 1:
return ajax$core$js_handler__1.call(this,response_format);
case 2:
return ajax$core$js_handler__2.call(this,response_format,handler);
case 3:
return ajax$core$js_handler__3.call(this,response_format,handler,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$js_handler.cljs$core$IFn$_invoke$arity$1 = ajax$core$js_handler__1;
ajax$core$js_handler.cljs$core$IFn$_invoke$arity$2 = ajax$core$js_handler__2;
ajax$core$js_handler.cljs$core$IFn$_invoke$arity$3 = ajax$core$js_handler__3;
return ajax$core$js_handler;
})()
;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__25511){
var map__25513 = p__25511;
var map__25513__$1 = ((cljs.core.seq_QMARK_.call(null,map__25513))?cljs.core.apply.call(null,cljs.core.hash_map,map__25513):map__25513);
var handler = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__25514){
var map__25517 = p__25514;
var map__25517__$1 = ((cljs.core.seq_QMARK_.call(null,map__25517))?cljs.core.apply.call(null,cljs.core.hash_map,map__25517):map__25517);
var opts = map__25517__$1;
var api = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var method = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"method","method",55703592));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__25518 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__25518,(0),null);
var body = cljs.core.nth.call(null,vec__25518,(1),null);
var headers = cljs.core.nth.call(null,vec__25518,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__4122__auto__ = api;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__25520 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__25520) {
case "url":
return ajax.core.url_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_2.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__25523 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__25523) {
case "detect":
return ajax.core.detect_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__25525_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__25525_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function() {
var ajax$core$transform_handler = null;
var ajax$core$transform_handler__1 = (function (p__25528){
var map__25536 = p__25528;
var map__25536__$1 = ((cljs.core.seq_QMARK_.call(null,map__25536))?cljs.core.apply.call(null,cljs.core.hash_map,map__25536):map__25536);
var finally$ = cljs.core.get.call(null,map__25536__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__25536__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__25536__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return ((function (map__25536,map__25536__$1,finally$,error_handler,handler){
return (function (p__25537){
var vec__25538 = p__25537;
var ok = cljs.core.nth.call(null,vec__25538,(0),null);
var result = cljs.core.nth.call(null,vec__25538,(1),null);
var temp__4404__auto___25539 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4404__auto___25539)){
var h_25540 = temp__4404__auto___25539;
h_25540.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__25536,map__25536__$1,finally$,error_handler,handler))
});
var ajax$core$transform_handler__2 = (function (p__25526,p__25527){
var map__25534 = p__25526;
var map__25534__$1 = ((cljs.core.seq_QMARK_.call(null,map__25534))?cljs.core.apply.call(null,cljs.core.hash_map,map__25534):map__25534);
var finally$ = cljs.core.get.call(null,map__25534__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__25534__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__25534__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var vec__25535 = p__25527;
var ok = cljs.core.nth.call(null,vec__25535,(0),null);
var result = cljs.core.nth.call(null,vec__25535,(1),null);
var temp__4404__auto___25541 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4404__auto___25541)){
var h_25542 = temp__4404__auto___25541;
h_25542.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
ajax$core$transform_handler = function(p__25526,p__25527){
switch(arguments.length){
case 1:
return ajax$core$transform_handler__1.call(this,p__25526);
case 2:
return ajax$core$transform_handler__2.call(this,p__25526,p__25527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transform_handler.cljs$core$IFn$_invoke$arity$1 = ajax$core$transform_handler__1;
ajax$core$transform_handler.cljs$core$IFn$_invoke$arity$2 = ajax$core$transform_handler__2;
return ajax$core$transform_handler;
})()
;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__25543){
var map__25545 = p__25543;
var map__25545__$1 = ((cljs.core.seq_QMARK_.call(null,map__25545))?cljs.core.apply.call(null,cljs.core.hash_map,map__25545):map__25545);
var opts = map__25545__$1;
var params = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"params","params",710516235));
var response_format = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var format = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"method","method",55703592));

var needs_format = !((ajax.core.submittable_QMARK_.call(null,params)) || (cljs.core._EQ_.call(null,method,"GET")));
var rf = (cljs.core.truth_((function (){var or__4122__auto__ = format;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.GET = (function() { 
var ajax$core$GET__delegate = function (uri,opts){
var f__12023__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__12023__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12023__auto__));
};
var ajax$core$GET = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__25546__i = 0, G__25546__a = new Array(arguments.length -  1);
while (G__25546__i < G__25546__a.length) {G__25546__a[G__25546__i] = arguments[G__25546__i + 1]; ++G__25546__i;}
  opts = new cljs.core.IndexedSeq(G__25546__a,0);
} 
return ajax$core$GET__delegate.call(this,uri,opts);};
ajax$core$GET.cljs$lang$maxFixedArity = 1;
ajax$core$GET.cljs$lang$applyTo = (function (arglist__25547){
var uri = cljs.core.first(arglist__25547);
var opts = cljs.core.rest(arglist__25547);
return ajax$core$GET__delegate(uri,opts);
});
ajax$core$GET.cljs$core$IFn$_invoke$arity$variadic = ajax$core$GET__delegate;
return ajax$core$GET;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.HEAD = (function() { 
var ajax$core$HEAD__delegate = function (uri,opts){
var f__12023__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__12023__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12023__auto__));
};
var ajax$core$HEAD = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__25548__i = 0, G__25548__a = new Array(arguments.length -  1);
while (G__25548__i < G__25548__a.length) {G__25548__a[G__25548__i] = arguments[G__25548__i + 1]; ++G__25548__i;}
  opts = new cljs.core.IndexedSeq(G__25548__a,0);
} 
return ajax$core$HEAD__delegate.call(this,uri,opts);};
ajax$core$HEAD.cljs$lang$maxFixedArity = 1;
ajax$core$HEAD.cljs$lang$applyTo = (function (arglist__25549){
var uri = cljs.core.first(arglist__25549);
var opts = cljs.core.rest(arglist__25549);
return ajax$core$HEAD__delegate(uri,opts);
});
ajax$core$HEAD.cljs$core$IFn$_invoke$arity$variadic = ajax$core$HEAD__delegate;
return ajax$core$HEAD;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.POST = (function() { 
var ajax$core$POST__delegate = function (uri,opts){
var f__12023__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__12023__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12023__auto__));
};
var ajax$core$POST = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__25550__i = 0, G__25550__a = new Array(arguments.length -  1);
while (G__25550__i < G__25550__a.length) {G__25550__a[G__25550__i] = arguments[G__25550__i + 1]; ++G__25550__i;}
  opts = new cljs.core.IndexedSeq(G__25550__a,0);
} 
return ajax$core$POST__delegate.call(this,uri,opts);};
ajax$core$POST.cljs$lang$maxFixedArity = 1;
ajax$core$POST.cljs$lang$applyTo = (function (arglist__25551){
var uri = cljs.core.first(arglist__25551);
var opts = cljs.core.rest(arglist__25551);
return ajax$core$POST__delegate(uri,opts);
});
ajax$core$POST.cljs$core$IFn$_invoke$arity$variadic = ajax$core$POST__delegate;
return ajax$core$POST;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.PUT = (function() { 
var ajax$core$PUT__delegate = function (uri,opts){
var f__12023__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__12023__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12023__auto__));
};
var ajax$core$PUT = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__25552__i = 0, G__25552__a = new Array(arguments.length -  1);
while (G__25552__i < G__25552__a.length) {G__25552__a[G__25552__i] = arguments[G__25552__i + 1]; ++G__25552__i;}
  opts = new cljs.core.IndexedSeq(G__25552__a,0);
} 
return ajax$core$PUT__delegate.call(this,uri,opts);};
ajax$core$PUT.cljs$lang$maxFixedArity = 1;
ajax$core$PUT.cljs$lang$applyTo = (function (arglist__25553){
var uri = cljs.core.first(arglist__25553);
var opts = cljs.core.rest(arglist__25553);
return ajax$core$PUT__delegate(uri,opts);
});
ajax$core$PUT.cljs$core$IFn$_invoke$arity$variadic = ajax$core$PUT__delegate;
return ajax$core$PUT;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.DELETE = (function() { 
var ajax$core$DELETE__delegate = function (uri,opts){
var f__12023__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__12023__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12023__auto__));
};
var ajax$core$DELETE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__25554__i = 0, G__25554__a = new Array(arguments.length -  1);
while (G__25554__i < G__25554__a.length) {G__25554__a[G__25554__i] = arguments[G__25554__i + 1]; ++G__25554__i;}
  opts = new cljs.core.IndexedSeq(G__25554__a,0);
} 
return ajax$core$DELETE__delegate.call(this,uri,opts);};
ajax$core$DELETE.cljs$lang$maxFixedArity = 1;
ajax$core$DELETE.cljs$lang$applyTo = (function (arglist__25555){
var uri = cljs.core.first(arglist__25555);
var opts = cljs.core.rest(arglist__25555);
return ajax$core$DELETE__delegate(uri,opts);
});
ajax$core$DELETE.cljs$core$IFn$_invoke$arity$variadic = ajax$core$DELETE__delegate;
return ajax$core$DELETE;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.OPTIONS = (function() { 
var ajax$core$OPTIONS__delegate = function (uri,opts){
var f__12023__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__12023__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12023__auto__));
};
var ajax$core$OPTIONS = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__25556__i = 0, G__25556__a = new Array(arguments.length -  1);
while (G__25556__i < G__25556__a.length) {G__25556__a[G__25556__i] = arguments[G__25556__i + 1]; ++G__25556__i;}
  opts = new cljs.core.IndexedSeq(G__25556__a,0);
} 
return ajax$core$OPTIONS__delegate.call(this,uri,opts);};
ajax$core$OPTIONS.cljs$lang$maxFixedArity = 1;
ajax$core$OPTIONS.cljs$lang$applyTo = (function (arglist__25557){
var uri = cljs.core.first(arglist__25557);
var opts = cljs.core.rest(arglist__25557);
return ajax$core$OPTIONS__delegate(uri,opts);
});
ajax$core$OPTIONS.cljs$core$IFn$_invoke$arity$variadic = ajax$core$OPTIONS__delegate;
return ajax$core$OPTIONS;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.TRACE = (function() { 
var ajax$core$TRACE__delegate = function (uri,opts){
var f__12023__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__12023__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__12023__auto__));
};
var ajax$core$TRACE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__25558__i = 0, G__25558__a = new Array(arguments.length -  1);
while (G__25558__i < G__25558__a.length) {G__25558__a[G__25558__i] = arguments[G__25558__i + 1]; ++G__25558__i;}
  opts = new cljs.core.IndexedSeq(G__25558__a,0);
} 
return ajax$core$TRACE__delegate.call(this,uri,opts);};
ajax$core$TRACE.cljs$lang$maxFixedArity = 1;
ajax$core$TRACE.cljs$lang$applyTo = (function (arglist__25559){
var uri = cljs.core.first(arglist__25559);
var opts = cljs.core.rest(arglist__25559);
return ajax$core$TRACE__delegate(uri,opts);
});
ajax$core$TRACE.cljs$core$IFn$_invoke$arity$variadic = ajax$core$TRACE__delegate;
return ajax$core$TRACE;
})()
;
