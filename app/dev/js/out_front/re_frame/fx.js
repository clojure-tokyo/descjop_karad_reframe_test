// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__27480 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27481 = null;
var count__27482 = (0);
var i__27483 = (0);
while(true){
if((i__27483 < count__27482)){
var vec__27484 = cljs.core._nth.call(null,chunk__27481,i__27483);
var effect_k = cljs.core.nth.call(null,vec__27484,(0),null);
var value = cljs.core.nth.call(null,vec__27484,(1),null);
var temp__4655__auto___27490 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27490)){
var effect_fn_27491 = temp__4655__auto___27490;
effect_fn_27491.call(null,value);
} else {
}

var G__27492 = seq__27480;
var G__27493 = chunk__27481;
var G__27494 = count__27482;
var G__27495 = (i__27483 + (1));
seq__27480 = G__27492;
chunk__27481 = G__27493;
count__27482 = G__27494;
i__27483 = G__27495;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27480);
if(temp__4657__auto__){
var seq__27480__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27480__$1)){
var c__26608__auto__ = cljs.core.chunk_first.call(null,seq__27480__$1);
var G__27496 = cljs.core.chunk_rest.call(null,seq__27480__$1);
var G__27497 = c__26608__auto__;
var G__27498 = cljs.core.count.call(null,c__26608__auto__);
var G__27499 = (0);
seq__27480 = G__27496;
chunk__27481 = G__27497;
count__27482 = G__27498;
i__27483 = G__27499;
continue;
} else {
var vec__27487 = cljs.core.first.call(null,seq__27480__$1);
var effect_k = cljs.core.nth.call(null,vec__27487,(0),null);
var value = cljs.core.nth.call(null,vec__27487,(1),null);
var temp__4655__auto___27500 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27500)){
var effect_fn_27501 = temp__4655__auto___27500;
effect_fn_27501.call(null,value);
} else {
}

var G__27502 = cljs.core.next.call(null,seq__27480__$1);
var G__27503 = null;
var G__27504 = (0);
var G__27505 = (0);
seq__27480 = G__27502;
chunk__27481 = G__27503;
count__27482 = G__27504;
i__27483 = G__27505;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27506 = cljs.core.seq.call(null,value);
var chunk__27507 = null;
var count__27508 = (0);
var i__27509 = (0);
while(true){
if((i__27509 < count__27508)){
var map__27510 = cljs.core._nth.call(null,chunk__27507,i__27509);
var map__27510__$1 = ((((!((map__27510 == null)))?((((map__27510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27510):map__27510);
var effect = map__27510__$1;
var ms = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27506,chunk__27507,count__27508,i__27509,map__27510,map__27510__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27506,chunk__27507,count__27508,i__27509,map__27510,map__27510__$1,effect,ms,dispatch))
,ms);
}

var G__27514 = seq__27506;
var G__27515 = chunk__27507;
var G__27516 = count__27508;
var G__27517 = (i__27509 + (1));
seq__27506 = G__27514;
chunk__27507 = G__27515;
count__27508 = G__27516;
i__27509 = G__27517;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27506);
if(temp__4657__auto__){
var seq__27506__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27506__$1)){
var c__26608__auto__ = cljs.core.chunk_first.call(null,seq__27506__$1);
var G__27518 = cljs.core.chunk_rest.call(null,seq__27506__$1);
var G__27519 = c__26608__auto__;
var G__27520 = cljs.core.count.call(null,c__26608__auto__);
var G__27521 = (0);
seq__27506 = G__27518;
chunk__27507 = G__27519;
count__27508 = G__27520;
i__27509 = G__27521;
continue;
} else {
var map__27512 = cljs.core.first.call(null,seq__27506__$1);
var map__27512__$1 = ((((!((map__27512 == null)))?((((map__27512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27512):map__27512);
var effect = map__27512__$1;
var ms = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27506,chunk__27507,count__27508,i__27509,map__27512,map__27512__$1,effect,ms,dispatch,seq__27506__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27506,chunk__27507,count__27508,i__27509,map__27512,map__27512__$1,effect,ms,dispatch,seq__27506__$1,temp__4657__auto__))
,ms);
}

var G__27522 = cljs.core.next.call(null,seq__27506__$1);
var G__27523 = null;
var G__27524 = (0);
var G__27525 = (0);
seq__27506 = G__27522;
chunk__27507 = G__27523;
count__27508 = G__27524;
i__27509 = G__27525;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__27526 = cljs.core.seq.call(null,value);
var chunk__27527 = null;
var count__27528 = (0);
var i__27529 = (0);
while(true){
if((i__27529 < count__27528)){
var event = cljs.core._nth.call(null,chunk__27527,i__27529);
re_frame.router.dispatch.call(null,event);

var G__27530 = seq__27526;
var G__27531 = chunk__27527;
var G__27532 = count__27528;
var G__27533 = (i__27529 + (1));
seq__27526 = G__27530;
chunk__27527 = G__27531;
count__27528 = G__27532;
i__27529 = G__27533;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27526);
if(temp__4657__auto__){
var seq__27526__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27526__$1)){
var c__26608__auto__ = cljs.core.chunk_first.call(null,seq__27526__$1);
var G__27534 = cljs.core.chunk_rest.call(null,seq__27526__$1);
var G__27535 = c__26608__auto__;
var G__27536 = cljs.core.count.call(null,c__26608__auto__);
var G__27537 = (0);
seq__27526 = G__27534;
chunk__27527 = G__27535;
count__27528 = G__27536;
i__27529 = G__27537;
continue;
} else {
var event = cljs.core.first.call(null,seq__27526__$1);
re_frame.router.dispatch.call(null,event);

var G__27538 = cljs.core.next.call(null,seq__27526__$1);
var G__27539 = null;
var G__27540 = (0);
var G__27541 = (0);
seq__27526 = G__27538;
chunk__27527 = G__27539;
count__27528 = G__27540;
i__27529 = G__27541;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__27542 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__27543 = null;
var count__27544 = (0);
var i__27545 = (0);
while(true){
if((i__27545 < count__27544)){
var event = cljs.core._nth.call(null,chunk__27543,i__27545);
clear_event.call(null,event);

var G__27546 = seq__27542;
var G__27547 = chunk__27543;
var G__27548 = count__27544;
var G__27549 = (i__27545 + (1));
seq__27542 = G__27546;
chunk__27543 = G__27547;
count__27544 = G__27548;
i__27545 = G__27549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27542);
if(temp__4657__auto__){
var seq__27542__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27542__$1)){
var c__26608__auto__ = cljs.core.chunk_first.call(null,seq__27542__$1);
var G__27550 = cljs.core.chunk_rest.call(null,seq__27542__$1);
var G__27551 = c__26608__auto__;
var G__27552 = cljs.core.count.call(null,c__26608__auto__);
var G__27553 = (0);
seq__27542 = G__27550;
chunk__27543 = G__27551;
count__27544 = G__27552;
i__27545 = G__27553;
continue;
} else {
var event = cljs.core.first.call(null,seq__27542__$1);
clear_event.call(null,event);

var G__27554 = cljs.core.next.call(null,seq__27542__$1);
var G__27555 = null;
var G__27556 = (0);
var G__27557 = (0);
seq__27542 = G__27554;
chunk__27543 = G__27555;
count__27544 = G__27556;
i__27545 = G__27557;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map