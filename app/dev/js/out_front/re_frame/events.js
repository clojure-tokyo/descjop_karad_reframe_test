// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__27336_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__27336_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___27337 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___27337)){
var not_i_27338 = temp__4657__auto___27337;
if(cljs.core.fn_QMARK_.call(null,not_i_27338)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_27338);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_27338);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_27353 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_27354 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27271__auto___27367 = re_frame.interop.now.call(null);
var duration__27272__auto___27368 = (end__27271__auto___27367 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__27355_27369 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__27356_27370 = null;
var count__27357_27371 = (0);
var i__27358_27372 = (0);
while(true){
if((i__27358_27372 < count__27357_27371)){
var vec__27359_27373 = cljs.core._nth.call(null,chunk__27356_27370,i__27358_27372);
var k__27273__auto___27374 = cljs.core.nth.call(null,vec__27359_27373,(0),null);
var cb__27274__auto___27375 = cljs.core.nth.call(null,vec__27359_27373,(1),null);
try{cb__27274__auto___27375.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27272__auto___27368,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27362){if((e27362 instanceof java.lang.Exception)){
var e__27275__auto___27376 = e27362;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27273__auto___27374,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27275__auto___27376);
} else {
throw e27362;

}
}
var G__27377 = seq__27355_27369;
var G__27378 = chunk__27356_27370;
var G__27379 = count__27357_27371;
var G__27380 = (i__27358_27372 + (1));
seq__27355_27369 = G__27377;
chunk__27356_27370 = G__27378;
count__27357_27371 = G__27379;
i__27358_27372 = G__27380;
continue;
} else {
var temp__4657__auto___27381 = cljs.core.seq.call(null,seq__27355_27369);
if(temp__4657__auto___27381){
var seq__27355_27382__$1 = temp__4657__auto___27381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27355_27382__$1)){
var c__26608__auto___27383 = cljs.core.chunk_first.call(null,seq__27355_27382__$1);
var G__27384 = cljs.core.chunk_rest.call(null,seq__27355_27382__$1);
var G__27385 = c__26608__auto___27383;
var G__27386 = cljs.core.count.call(null,c__26608__auto___27383);
var G__27387 = (0);
seq__27355_27369 = G__27384;
chunk__27356_27370 = G__27385;
count__27357_27371 = G__27386;
i__27358_27372 = G__27387;
continue;
} else {
var vec__27363_27388 = cljs.core.first.call(null,seq__27355_27382__$1);
var k__27273__auto___27389 = cljs.core.nth.call(null,vec__27363_27388,(0),null);
var cb__27274__auto___27390 = cljs.core.nth.call(null,vec__27363_27388,(1),null);
try{cb__27274__auto___27390.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27272__auto___27368,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27366){if((e27366 instanceof java.lang.Exception)){
var e__27275__auto___27391 = e27366;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27273__auto___27389,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27275__auto___27391);
} else {
throw e27366;

}
}
var G__27392 = cljs.core.next.call(null,seq__27355_27382__$1);
var G__27393 = null;
var G__27394 = (0);
var G__27395 = (0);
seq__27355_27369 = G__27392;
chunk__27356_27370 = G__27393;
count__27357_27371 = G__27394;
i__27358_27372 = G__27395;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27354;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_27353;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map