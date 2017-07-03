// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27743 = [];
var len__26601__auto___27749 = arguments.length;
var i__26602__auto___27750 = (0);
while(true){
if((i__26602__auto___27750 < len__26601__auto___27749)){
args27743.push((arguments[i__26602__auto___27750]));

var G__27751 = (i__26602__auto___27750 + (1));
i__26602__auto___27750 = G__27751;
continue;
} else {
}
break;
}

var G__27745 = args27743.length;
switch (G__27745) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27743.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27746 = (function (f,blockable,meta27747){
this.f = f;
this.blockable = blockable;
this.meta27747 = meta27747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27748,meta27747__$1){
var self__ = this;
var _27748__$1 = this;
return (new cljs.core.async.t_cljs$core$async27746(self__.f,self__.blockable,meta27747__$1));
});

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27748){
var self__ = this;
var _27748__$1 = this;
return self__.meta27747;
});

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27747","meta27747",1773005358,null)], null);
});

cljs.core.async.t_cljs$core$async27746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27746";

cljs.core.async.t_cljs$core$async27746.cljs$lang$ctorPrWriter = (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async27746");
});

cljs.core.async.__GT_t_cljs$core$async27746 = (function cljs$core$async$__GT_t_cljs$core$async27746(f__$1,blockable__$1,meta27747){
return (new cljs.core.async.t_cljs$core$async27746(f__$1,blockable__$1,meta27747));
});

}

return (new cljs.core.async.t_cljs$core$async27746(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27755 = [];
var len__26601__auto___27758 = arguments.length;
var i__26602__auto___27759 = (0);
while(true){
if((i__26602__auto___27759 < len__26601__auto___27758)){
args27755.push((arguments[i__26602__auto___27759]));

var G__27760 = (i__26602__auto___27759 + (1));
i__26602__auto___27759 = G__27760;
continue;
} else {
}
break;
}

var G__27757 = args27755.length;
switch (G__27757) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27755.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27762 = [];
var len__26601__auto___27765 = arguments.length;
var i__26602__auto___27766 = (0);
while(true){
if((i__26602__auto___27766 < len__26601__auto___27765)){
args27762.push((arguments[i__26602__auto___27766]));

var G__27767 = (i__26602__auto___27766 + (1));
i__26602__auto___27766 = G__27767;
continue;
} else {
}
break;
}

var G__27764 = args27762.length;
switch (G__27764) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27762.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27769 = [];
var len__26601__auto___27772 = arguments.length;
var i__26602__auto___27773 = (0);
while(true){
if((i__26602__auto___27773 < len__26601__auto___27772)){
args27769.push((arguments[i__26602__auto___27773]));

var G__27774 = (i__26602__auto___27773 + (1));
i__26602__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var G__27771 = args27769.length;
switch (G__27771) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27769.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27776 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27776);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27776,ret){
return (function (){
return fn1.call(null,val_27776);
});})(val_27776,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27777 = [];
var len__26601__auto___27780 = arguments.length;
var i__26602__auto___27781 = (0);
while(true){
if((i__26602__auto___27781 < len__26601__auto___27780)){
args27777.push((arguments[i__26602__auto___27781]));

var G__27782 = (i__26602__auto___27781 + (1));
i__26602__auto___27781 = G__27782;
continue;
} else {
}
break;
}

var G__27779 = args27777.length;
switch (G__27779) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27777.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26415__auto___27784 = n;
var x_27785 = (0);
while(true){
if((x_27785 < n__26415__auto___27784)){
(a[x_27785] = (0));

var G__27786 = (x_27785 + (1));
x_27785 = G__27786;
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

var G__27787 = (i + (1));
i = G__27787;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27791 = (function (flag,meta27792){
this.flag = flag;
this.meta27792 = meta27792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27793,meta27792__$1){
var self__ = this;
var _27793__$1 = this;
return (new cljs.core.async.t_cljs$core$async27791(self__.flag,meta27792__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27793){
var self__ = this;
var _27793__$1 = this;
return self__.meta27792;
});})(flag))
;

cljs.core.async.t_cljs$core$async27791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27791.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27792","meta27792",-2048806988,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27791";

cljs.core.async.t_cljs$core$async27791.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async27791");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27791 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27791(flag__$1,meta27792){
return (new cljs.core.async.t_cljs$core$async27791(flag__$1,meta27792));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27791(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27797 = (function (flag,cb,meta27798){
this.flag = flag;
this.cb = cb;
this.meta27798 = meta27798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27799,meta27798__$1){
var self__ = this;
var _27799__$1 = this;
return (new cljs.core.async.t_cljs$core$async27797(self__.flag,self__.cb,meta27798__$1));
});

cljs.core.async.t_cljs$core$async27797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27799){
var self__ = this;
var _27799__$1 = this;
return self__.meta27798;
});

cljs.core.async.t_cljs$core$async27797.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27798","meta27798",-119505924,null)], null);
});

cljs.core.async.t_cljs$core$async27797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27797";

cljs.core.async.t_cljs$core$async27797.cljs$lang$ctorPrWriter = (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async27797");
});

cljs.core.async.__GT_t_cljs$core$async27797 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27797(flag__$1,cb__$1,meta27798){
return (new cljs.core.async.t_cljs$core$async27797(flag__$1,cb__$1,meta27798));
});

}

return (new cljs.core.async.t_cljs$core$async27797(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27800_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27800_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27801_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27801_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25492__auto__ = wport;
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27802 = (i + (1));
i = G__27802;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25492__auto__ = ret;
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25480__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25480__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25480__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26608__auto__ = [];
var len__26601__auto___27808 = arguments.length;
var i__26602__auto___27809 = (0);
while(true){
if((i__26602__auto___27809 < len__26601__auto___27808)){
args__26608__auto__.push((arguments[i__26602__auto___27809]));

var G__27810 = (i__26602__auto___27809 + (1));
i__26602__auto___27809 = G__27810;
continue;
} else {
}
break;
}

var argseq__26609__auto__ = ((((1) < args__26608__auto__.length))?(new cljs.core.IndexedSeq(args__26608__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26609__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27805){
var map__27806 = p__27805;
var map__27806__$1 = ((((!((map__27806 == null)))?((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27806):map__27806);
var opts = map__27806__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27803){
var G__27804 = cljs.core.first.call(null,seq27803);
var seq27803__$1 = cljs.core.next.call(null,seq27803);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27804,seq27803__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27811 = [];
var len__26601__auto___27861 = arguments.length;
var i__26602__auto___27862 = (0);
while(true){
if((i__26602__auto___27862 < len__26601__auto___27861)){
args27811.push((arguments[i__26602__auto___27862]));

var G__27863 = (i__26602__auto___27862 + (1));
i__26602__auto___27862 = G__27863;
continue;
} else {
}
break;
}

var G__27813 = args27811.length;
switch (G__27813) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27811.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27698__auto___27865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___27865){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___27865){
return (function (state_27837){
var state_val_27838 = (state_27837[(1)]);
if((state_val_27838 === (7))){
var inst_27833 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27839_27866 = state_27837__$1;
(statearr_27839_27866[(2)] = inst_27833);

(statearr_27839_27866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (1))){
var state_27837__$1 = state_27837;
var statearr_27840_27867 = state_27837__$1;
(statearr_27840_27867[(2)] = null);

(statearr_27840_27867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (4))){
var inst_27816 = (state_27837[(7)]);
var inst_27816__$1 = (state_27837[(2)]);
var inst_27817 = (inst_27816__$1 == null);
var state_27837__$1 = (function (){var statearr_27841 = state_27837;
(statearr_27841[(7)] = inst_27816__$1);

return statearr_27841;
})();
if(cljs.core.truth_(inst_27817)){
var statearr_27842_27868 = state_27837__$1;
(statearr_27842_27868[(1)] = (5));

} else {
var statearr_27843_27869 = state_27837__$1;
(statearr_27843_27869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (13))){
var state_27837__$1 = state_27837;
var statearr_27844_27870 = state_27837__$1;
(statearr_27844_27870[(2)] = null);

(statearr_27844_27870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (6))){
var inst_27816 = (state_27837[(7)]);
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27837__$1,(11),to,inst_27816);
} else {
if((state_val_27838 === (3))){
var inst_27835 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27837__$1,inst_27835);
} else {
if((state_val_27838 === (12))){
var state_27837__$1 = state_27837;
var statearr_27845_27871 = state_27837__$1;
(statearr_27845_27871[(2)] = null);

(statearr_27845_27871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (2))){
var state_27837__$1 = state_27837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27837__$1,(4),from);
} else {
if((state_val_27838 === (11))){
var inst_27826 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
if(cljs.core.truth_(inst_27826)){
var statearr_27846_27872 = state_27837__$1;
(statearr_27846_27872[(1)] = (12));

} else {
var statearr_27847_27873 = state_27837__$1;
(statearr_27847_27873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (9))){
var state_27837__$1 = state_27837;
var statearr_27848_27874 = state_27837__$1;
(statearr_27848_27874[(2)] = null);

(statearr_27848_27874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (5))){
var state_27837__$1 = state_27837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27849_27875 = state_27837__$1;
(statearr_27849_27875[(1)] = (8));

} else {
var statearr_27850_27876 = state_27837__$1;
(statearr_27850_27876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (14))){
var inst_27831 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27851_27877 = state_27837__$1;
(statearr_27851_27877[(2)] = inst_27831);

(statearr_27851_27877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (10))){
var inst_27823 = (state_27837[(2)]);
var state_27837__$1 = state_27837;
var statearr_27852_27878 = state_27837__$1;
(statearr_27852_27878[(2)] = inst_27823);

(statearr_27852_27878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27838 === (8))){
var inst_27820 = cljs.core.async.close_BANG_.call(null,to);
var state_27837__$1 = state_27837;
var statearr_27853_27879 = state_27837__$1;
(statearr_27853_27879[(2)] = inst_27820);

(statearr_27853_27879[(1)] = (10));


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
});})(c__27698__auto___27865))
;
return ((function (switch__27586__auto__,c__27698__auto___27865){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_27857 = [null,null,null,null,null,null,null,null];
(statearr_27857[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_27857[(1)] = (1));

return statearr_27857;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_27837){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_27837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e27858){if((e27858 instanceof Object)){
var ex__27590__auto__ = e27858;
var statearr_27859_27880 = state_27837;
(statearr_27859_27880[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27881 = state_27837;
state_27837 = G__27881;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_27837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_27837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___27865))
})();
var state__27700__auto__ = (function (){var statearr_27860 = f__27699__auto__.call(null);
(statearr_27860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___27865);

return statearr_27860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___27865))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28069){
var vec__28070 = p__28069;
var v = cljs.core.nth.call(null,vec__28070,(0),null);
var p = cljs.core.nth.call(null,vec__28070,(1),null);
var job = vec__28070;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27698__auto___28256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___28256,res,vec__28070,v,p,job,jobs,results){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___28256,res,vec__28070,v,p,job,jobs,results){
return (function (state_28077){
var state_val_28078 = (state_28077[(1)]);
if((state_val_28078 === (1))){
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28077__$1,(2),res,v);
} else {
if((state_val_28078 === (2))){
var inst_28074 = (state_28077[(2)]);
var inst_28075 = cljs.core.async.close_BANG_.call(null,res);
var state_28077__$1 = (function (){var statearr_28079 = state_28077;
(statearr_28079[(7)] = inst_28074);

return statearr_28079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28077__$1,inst_28075);
} else {
return null;
}
}
});})(c__27698__auto___28256,res,vec__28070,v,p,job,jobs,results))
;
return ((function (switch__27586__auto__,c__27698__auto___28256,res,vec__28070,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0 = (function (){
var statearr_28083 = [null,null,null,null,null,null,null,null];
(statearr_28083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__);

(statearr_28083[(1)] = (1));

return statearr_28083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1 = (function (state_28077){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28084){if((e28084 instanceof Object)){
var ex__27590__auto__ = e28084;
var statearr_28085_28257 = state_28077;
(statearr_28085_28257[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28258 = state_28077;
state_28077 = G__28258;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = function(state_28077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1.call(this,state_28077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___28256,res,vec__28070,v,p,job,jobs,results))
})();
var state__27700__auto__ = (function (){var statearr_28086 = f__27699__auto__.call(null);
(statearr_28086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___28256);

return statearr_28086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___28256,res,vec__28070,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28087){
var vec__28088 = p__28087;
var v = cljs.core.nth.call(null,vec__28088,(0),null);
var p = cljs.core.nth.call(null,vec__28088,(1),null);
var job = vec__28088;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26415__auto___28259 = n;
var __28260 = (0);
while(true){
if((__28260 < n__26415__auto___28259)){
var G__28091_28261 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28091_28261) {
case "compute":
var c__27698__auto___28263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28260,c__27698__auto___28263,G__28091_28261,n__26415__auto___28259,jobs,results,process,async){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (__28260,c__27698__auto___28263,G__28091_28261,n__26415__auto___28259,jobs,results,process,async){
return (function (state_28104){
var state_val_28105 = (state_28104[(1)]);
if((state_val_28105 === (1))){
var state_28104__$1 = state_28104;
var statearr_28106_28264 = state_28104__$1;
(statearr_28106_28264[(2)] = null);

(statearr_28106_28264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (2))){
var state_28104__$1 = state_28104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28104__$1,(4),jobs);
} else {
if((state_val_28105 === (3))){
var inst_28102 = (state_28104[(2)]);
var state_28104__$1 = state_28104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28104__$1,inst_28102);
} else {
if((state_val_28105 === (4))){
var inst_28094 = (state_28104[(2)]);
var inst_28095 = process.call(null,inst_28094);
var state_28104__$1 = state_28104;
if(cljs.core.truth_(inst_28095)){
var statearr_28107_28265 = state_28104__$1;
(statearr_28107_28265[(1)] = (5));

} else {
var statearr_28108_28266 = state_28104__$1;
(statearr_28108_28266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (5))){
var state_28104__$1 = state_28104;
var statearr_28109_28267 = state_28104__$1;
(statearr_28109_28267[(2)] = null);

(statearr_28109_28267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (6))){
var state_28104__$1 = state_28104;
var statearr_28110_28268 = state_28104__$1;
(statearr_28110_28268[(2)] = null);

(statearr_28110_28268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (7))){
var inst_28100 = (state_28104[(2)]);
var state_28104__$1 = state_28104;
var statearr_28111_28269 = state_28104__$1;
(statearr_28111_28269[(2)] = inst_28100);

(statearr_28111_28269[(1)] = (3));


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
});})(__28260,c__27698__auto___28263,G__28091_28261,n__26415__auto___28259,jobs,results,process,async))
;
return ((function (__28260,switch__27586__auto__,c__27698__auto___28263,G__28091_28261,n__26415__auto___28259,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0 = (function (){
var statearr_28115 = [null,null,null,null,null,null,null];
(statearr_28115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__);

(statearr_28115[(1)] = (1));

return statearr_28115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1 = (function (state_28104){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object)){
var ex__27590__auto__ = e28116;
var statearr_28117_28270 = state_28104;
(statearr_28117_28270[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28271 = state_28104;
state_28104 = G__28271;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = function(state_28104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1.call(this,state_28104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__;
})()
;})(__28260,switch__27586__auto__,c__27698__auto___28263,G__28091_28261,n__26415__auto___28259,jobs,results,process,async))
})();
var state__27700__auto__ = (function (){var statearr_28118 = f__27699__auto__.call(null);
(statearr_28118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___28263);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(__28260,c__27698__auto___28263,G__28091_28261,n__26415__auto___28259,jobs,results,process,async))
);


break;
case "async":
var c__27698__auto___28272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28260,c__27698__auto___28272,G__28091_28261,n__26415__auto___28259,jobs,results,process,async){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (__28260,c__27698__auto___28272,G__28091_28261,n__26415__auto___28259,jobs,results,process,async){
return (function (state_28131){
var state_val_28132 = (state_28131[(1)]);
if((state_val_28132 === (1))){
var state_28131__$1 = state_28131;
var statearr_28133_28273 = state_28131__$1;
(statearr_28133_28273[(2)] = null);

(statearr_28133_28273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (2))){
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28131__$1,(4),jobs);
} else {
if((state_val_28132 === (3))){
var inst_28129 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28131__$1,inst_28129);
} else {
if((state_val_28132 === (4))){
var inst_28121 = (state_28131[(2)]);
var inst_28122 = async.call(null,inst_28121);
var state_28131__$1 = state_28131;
if(cljs.core.truth_(inst_28122)){
var statearr_28134_28274 = state_28131__$1;
(statearr_28134_28274[(1)] = (5));

} else {
var statearr_28135_28275 = state_28131__$1;
(statearr_28135_28275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (5))){
var state_28131__$1 = state_28131;
var statearr_28136_28276 = state_28131__$1;
(statearr_28136_28276[(2)] = null);

(statearr_28136_28276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (6))){
var state_28131__$1 = state_28131;
var statearr_28137_28277 = state_28131__$1;
(statearr_28137_28277[(2)] = null);

(statearr_28137_28277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28132 === (7))){
var inst_28127 = (state_28131[(2)]);
var state_28131__$1 = state_28131;
var statearr_28138_28278 = state_28131__$1;
(statearr_28138_28278[(2)] = inst_28127);

(statearr_28138_28278[(1)] = (3));


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
});})(__28260,c__27698__auto___28272,G__28091_28261,n__26415__auto___28259,jobs,results,process,async))
;
return ((function (__28260,switch__27586__auto__,c__27698__auto___28272,G__28091_28261,n__26415__auto___28259,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0 = (function (){
var statearr_28142 = [null,null,null,null,null,null,null];
(statearr_28142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__);

(statearr_28142[(1)] = (1));

return statearr_28142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1 = (function (state_28131){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28143){if((e28143 instanceof Object)){
var ex__27590__auto__ = e28143;
var statearr_28144_28279 = state_28131;
(statearr_28144_28279[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28280 = state_28131;
state_28131 = G__28280;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = function(state_28131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1.call(this,state_28131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__;
})()
;})(__28260,switch__27586__auto__,c__27698__auto___28272,G__28091_28261,n__26415__auto___28259,jobs,results,process,async))
})();
var state__27700__auto__ = (function (){var statearr_28145 = f__27699__auto__.call(null);
(statearr_28145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___28272);

return statearr_28145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(__28260,c__27698__auto___28272,G__28091_28261,n__26415__auto___28259,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__28281 = (__28260 + (1));
__28260 = G__28281;
continue;
} else {
}
break;
}

var c__27698__auto___28282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___28282,jobs,results,process,async){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___28282,jobs,results,process,async){
return (function (state_28167){
var state_val_28168 = (state_28167[(1)]);
if((state_val_28168 === (1))){
var state_28167__$1 = state_28167;
var statearr_28169_28283 = state_28167__$1;
(statearr_28169_28283[(2)] = null);

(statearr_28169_28283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (2))){
var state_28167__$1 = state_28167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28167__$1,(4),from);
} else {
if((state_val_28168 === (3))){
var inst_28165 = (state_28167[(2)]);
var state_28167__$1 = state_28167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28167__$1,inst_28165);
} else {
if((state_val_28168 === (4))){
var inst_28148 = (state_28167[(7)]);
var inst_28148__$1 = (state_28167[(2)]);
var inst_28149 = (inst_28148__$1 == null);
var state_28167__$1 = (function (){var statearr_28170 = state_28167;
(statearr_28170[(7)] = inst_28148__$1);

return statearr_28170;
})();
if(cljs.core.truth_(inst_28149)){
var statearr_28171_28284 = state_28167__$1;
(statearr_28171_28284[(1)] = (5));

} else {
var statearr_28172_28285 = state_28167__$1;
(statearr_28172_28285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (5))){
var inst_28151 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28167__$1 = state_28167;
var statearr_28173_28286 = state_28167__$1;
(statearr_28173_28286[(2)] = inst_28151);

(statearr_28173_28286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (6))){
var inst_28148 = (state_28167[(7)]);
var inst_28153 = (state_28167[(8)]);
var inst_28153__$1 = cljs.core.async.chan.call(null,(1));
var inst_28154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28155 = [inst_28148,inst_28153__$1];
var inst_28156 = (new cljs.core.PersistentVector(null,2,(5),inst_28154,inst_28155,null));
var state_28167__$1 = (function (){var statearr_28174 = state_28167;
(statearr_28174[(8)] = inst_28153__$1);

return statearr_28174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28167__$1,(8),jobs,inst_28156);
} else {
if((state_val_28168 === (7))){
var inst_28163 = (state_28167[(2)]);
var state_28167__$1 = state_28167;
var statearr_28175_28287 = state_28167__$1;
(statearr_28175_28287[(2)] = inst_28163);

(statearr_28175_28287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28168 === (8))){
var inst_28153 = (state_28167[(8)]);
var inst_28158 = (state_28167[(2)]);
var state_28167__$1 = (function (){var statearr_28176 = state_28167;
(statearr_28176[(9)] = inst_28158);

return statearr_28176;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28167__$1,(9),results,inst_28153);
} else {
if((state_val_28168 === (9))){
var inst_28160 = (state_28167[(2)]);
var state_28167__$1 = (function (){var statearr_28177 = state_28167;
(statearr_28177[(10)] = inst_28160);

return statearr_28177;
})();
var statearr_28178_28288 = state_28167__$1;
(statearr_28178_28288[(2)] = null);

(statearr_28178_28288[(1)] = (2));


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
});})(c__27698__auto___28282,jobs,results,process,async))
;
return ((function (switch__27586__auto__,c__27698__auto___28282,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0 = (function (){
var statearr_28182 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__);

(statearr_28182[(1)] = (1));

return statearr_28182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1 = (function (state_28167){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28183){if((e28183 instanceof Object)){
var ex__27590__auto__ = e28183;
var statearr_28184_28289 = state_28167;
(statearr_28184_28289[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28290 = state_28167;
state_28167 = G__28290;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = function(state_28167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1.call(this,state_28167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___28282,jobs,results,process,async))
})();
var state__27700__auto__ = (function (){var statearr_28185 = f__27699__auto__.call(null);
(statearr_28185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___28282);

return statearr_28185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___28282,jobs,results,process,async))
);


var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__,jobs,results,process,async){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__,jobs,results,process,async){
return (function (state_28223){
var state_val_28224 = (state_28223[(1)]);
if((state_val_28224 === (7))){
var inst_28219 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28225_28291 = state_28223__$1;
(statearr_28225_28291[(2)] = inst_28219);

(statearr_28225_28291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (20))){
var state_28223__$1 = state_28223;
var statearr_28226_28292 = state_28223__$1;
(statearr_28226_28292[(2)] = null);

(statearr_28226_28292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (1))){
var state_28223__$1 = state_28223;
var statearr_28227_28293 = state_28223__$1;
(statearr_28227_28293[(2)] = null);

(statearr_28227_28293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (4))){
var inst_28188 = (state_28223[(7)]);
var inst_28188__$1 = (state_28223[(2)]);
var inst_28189 = (inst_28188__$1 == null);
var state_28223__$1 = (function (){var statearr_28228 = state_28223;
(statearr_28228[(7)] = inst_28188__$1);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28189)){
var statearr_28229_28294 = state_28223__$1;
(statearr_28229_28294[(1)] = (5));

} else {
var statearr_28230_28295 = state_28223__$1;
(statearr_28230_28295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (15))){
var inst_28201 = (state_28223[(8)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28223__$1,(18),to,inst_28201);
} else {
if((state_val_28224 === (21))){
var inst_28214 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28231_28296 = state_28223__$1;
(statearr_28231_28296[(2)] = inst_28214);

(statearr_28231_28296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (13))){
var inst_28216 = (state_28223[(2)]);
var state_28223__$1 = (function (){var statearr_28232 = state_28223;
(statearr_28232[(9)] = inst_28216);

return statearr_28232;
})();
var statearr_28233_28297 = state_28223__$1;
(statearr_28233_28297[(2)] = null);

(statearr_28233_28297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (6))){
var inst_28188 = (state_28223[(7)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(11),inst_28188);
} else {
if((state_val_28224 === (17))){
var inst_28209 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28209)){
var statearr_28234_28298 = state_28223__$1;
(statearr_28234_28298[(1)] = (19));

} else {
var statearr_28235_28299 = state_28223__$1;
(statearr_28235_28299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (3))){
var inst_28221 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28223__$1,inst_28221);
} else {
if((state_val_28224 === (12))){
var inst_28198 = (state_28223[(10)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(14),inst_28198);
} else {
if((state_val_28224 === (2))){
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(4),results);
} else {
if((state_val_28224 === (19))){
var state_28223__$1 = state_28223;
var statearr_28236_28300 = state_28223__$1;
(statearr_28236_28300[(2)] = null);

(statearr_28236_28300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (11))){
var inst_28198 = (state_28223[(2)]);
var state_28223__$1 = (function (){var statearr_28237 = state_28223;
(statearr_28237[(10)] = inst_28198);

return statearr_28237;
})();
var statearr_28238_28301 = state_28223__$1;
(statearr_28238_28301[(2)] = null);

(statearr_28238_28301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (9))){
var state_28223__$1 = state_28223;
var statearr_28239_28302 = state_28223__$1;
(statearr_28239_28302[(2)] = null);

(statearr_28239_28302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (5))){
var state_28223__$1 = state_28223;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28240_28303 = state_28223__$1;
(statearr_28240_28303[(1)] = (8));

} else {
var statearr_28241_28304 = state_28223__$1;
(statearr_28241_28304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (14))){
var inst_28203 = (state_28223[(11)]);
var inst_28201 = (state_28223[(8)]);
var inst_28201__$1 = (state_28223[(2)]);
var inst_28202 = (inst_28201__$1 == null);
var inst_28203__$1 = cljs.core.not.call(null,inst_28202);
var state_28223__$1 = (function (){var statearr_28242 = state_28223;
(statearr_28242[(11)] = inst_28203__$1);

(statearr_28242[(8)] = inst_28201__$1);

return statearr_28242;
})();
if(inst_28203__$1){
var statearr_28243_28305 = state_28223__$1;
(statearr_28243_28305[(1)] = (15));

} else {
var statearr_28244_28306 = state_28223__$1;
(statearr_28244_28306[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (16))){
var inst_28203 = (state_28223[(11)]);
var state_28223__$1 = state_28223;
var statearr_28245_28307 = state_28223__$1;
(statearr_28245_28307[(2)] = inst_28203);

(statearr_28245_28307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (10))){
var inst_28195 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28246_28308 = state_28223__$1;
(statearr_28246_28308[(2)] = inst_28195);

(statearr_28246_28308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (18))){
var inst_28206 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28247_28309 = state_28223__$1;
(statearr_28247_28309[(2)] = inst_28206);

(statearr_28247_28309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (8))){
var inst_28192 = cljs.core.async.close_BANG_.call(null,to);
var state_28223__$1 = state_28223;
var statearr_28248_28310 = state_28223__$1;
(statearr_28248_28310[(2)] = inst_28192);

(statearr_28248_28310[(1)] = (10));


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
});})(c__27698__auto__,jobs,results,process,async))
;
return ((function (switch__27586__auto__,c__27698__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0 = (function (){
var statearr_28252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__);

(statearr_28252[(1)] = (1));

return statearr_28252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1 = (function (state_28223){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28253){if((e28253 instanceof Object)){
var ex__27590__auto__ = e28253;
var statearr_28254_28311 = state_28223;
(statearr_28254_28311[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28312 = state_28223;
state_28223 = G__28312;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__ = function(state_28223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1.call(this,state_28223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__,jobs,results,process,async))
})();
var state__27700__auto__ = (function (){var statearr_28255 = f__27699__auto__.call(null);
(statearr_28255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_28255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__,jobs,results,process,async))
);

return c__27698__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28313 = [];
var len__26601__auto___28316 = arguments.length;
var i__26602__auto___28317 = (0);
while(true){
if((i__26602__auto___28317 < len__26601__auto___28316)){
args28313.push((arguments[i__26602__auto___28317]));

var G__28318 = (i__26602__auto___28317 + (1));
i__26602__auto___28317 = G__28318;
continue;
} else {
}
break;
}

var G__28315 = args28313.length;
switch (G__28315) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28313.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28320 = [];
var len__26601__auto___28323 = arguments.length;
var i__26602__auto___28324 = (0);
while(true){
if((i__26602__auto___28324 < len__26601__auto___28323)){
args28320.push((arguments[i__26602__auto___28324]));

var G__28325 = (i__26602__auto___28324 + (1));
i__26602__auto___28324 = G__28325;
continue;
} else {
}
break;
}

var G__28322 = args28320.length;
switch (G__28322) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28320.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28327 = [];
var len__26601__auto___28380 = arguments.length;
var i__26602__auto___28381 = (0);
while(true){
if((i__26602__auto___28381 < len__26601__auto___28380)){
args28327.push((arguments[i__26602__auto___28381]));

var G__28382 = (i__26602__auto___28381 + (1));
i__26602__auto___28381 = G__28382;
continue;
} else {
}
break;
}

var G__28329 = args28327.length;
switch (G__28329) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28327.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27698__auto___28384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___28384,tc,fc){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___28384,tc,fc){
return (function (state_28355){
var state_val_28356 = (state_28355[(1)]);
if((state_val_28356 === (7))){
var inst_28351 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28357_28385 = state_28355__$1;
(statearr_28357_28385[(2)] = inst_28351);

(statearr_28357_28385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (1))){
var state_28355__$1 = state_28355;
var statearr_28358_28386 = state_28355__$1;
(statearr_28358_28386[(2)] = null);

(statearr_28358_28386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (4))){
var inst_28332 = (state_28355[(7)]);
var inst_28332__$1 = (state_28355[(2)]);
var inst_28333 = (inst_28332__$1 == null);
var state_28355__$1 = (function (){var statearr_28359 = state_28355;
(statearr_28359[(7)] = inst_28332__$1);

return statearr_28359;
})();
if(cljs.core.truth_(inst_28333)){
var statearr_28360_28387 = state_28355__$1;
(statearr_28360_28387[(1)] = (5));

} else {
var statearr_28361_28388 = state_28355__$1;
(statearr_28361_28388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (13))){
var state_28355__$1 = state_28355;
var statearr_28362_28389 = state_28355__$1;
(statearr_28362_28389[(2)] = null);

(statearr_28362_28389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (6))){
var inst_28332 = (state_28355[(7)]);
var inst_28338 = p.call(null,inst_28332);
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28338)){
var statearr_28363_28390 = state_28355__$1;
(statearr_28363_28390[(1)] = (9));

} else {
var statearr_28364_28391 = state_28355__$1;
(statearr_28364_28391[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (3))){
var inst_28353 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28355__$1,inst_28353);
} else {
if((state_val_28356 === (12))){
var state_28355__$1 = state_28355;
var statearr_28365_28392 = state_28355__$1;
(statearr_28365_28392[(2)] = null);

(statearr_28365_28392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (2))){
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28355__$1,(4),ch);
} else {
if((state_val_28356 === (11))){
var inst_28332 = (state_28355[(7)]);
var inst_28342 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28355__$1,(8),inst_28342,inst_28332);
} else {
if((state_val_28356 === (9))){
var state_28355__$1 = state_28355;
var statearr_28366_28393 = state_28355__$1;
(statearr_28366_28393[(2)] = tc);

(statearr_28366_28393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (5))){
var inst_28335 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28336 = cljs.core.async.close_BANG_.call(null,fc);
var state_28355__$1 = (function (){var statearr_28367 = state_28355;
(statearr_28367[(8)] = inst_28335);

return statearr_28367;
})();
var statearr_28368_28394 = state_28355__$1;
(statearr_28368_28394[(2)] = inst_28336);

(statearr_28368_28394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (14))){
var inst_28349 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28369_28395 = state_28355__$1;
(statearr_28369_28395[(2)] = inst_28349);

(statearr_28369_28395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (10))){
var state_28355__$1 = state_28355;
var statearr_28370_28396 = state_28355__$1;
(statearr_28370_28396[(2)] = fc);

(statearr_28370_28396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (8))){
var inst_28344 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28344)){
var statearr_28371_28397 = state_28355__$1;
(statearr_28371_28397[(1)] = (12));

} else {
var statearr_28372_28398 = state_28355__$1;
(statearr_28372_28398[(1)] = (13));

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
});})(c__27698__auto___28384,tc,fc))
;
return ((function (switch__27586__auto__,c__27698__auto___28384,tc,fc){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_28376 = [null,null,null,null,null,null,null,null,null];
(statearr_28376[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_28376[(1)] = (1));

return statearr_28376;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_28355){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28377){if((e28377 instanceof Object)){
var ex__27590__auto__ = e28377;
var statearr_28378_28399 = state_28355;
(statearr_28378_28399[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28400 = state_28355;
state_28355 = G__28400;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_28355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_28355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___28384,tc,fc))
})();
var state__27700__auto__ = (function (){var statearr_28379 = f__27699__auto__.call(null);
(statearr_28379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___28384);

return statearr_28379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___28384,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__){
return (function (state_28464){
var state_val_28465 = (state_28464[(1)]);
if((state_val_28465 === (7))){
var inst_28460 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
var statearr_28466_28487 = state_28464__$1;
(statearr_28466_28487[(2)] = inst_28460);

(statearr_28466_28487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (1))){
var inst_28444 = init;
var state_28464__$1 = (function (){var statearr_28467 = state_28464;
(statearr_28467[(7)] = inst_28444);

return statearr_28467;
})();
var statearr_28468_28488 = state_28464__$1;
(statearr_28468_28488[(2)] = null);

(statearr_28468_28488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (4))){
var inst_28447 = (state_28464[(8)]);
var inst_28447__$1 = (state_28464[(2)]);
var inst_28448 = (inst_28447__$1 == null);
var state_28464__$1 = (function (){var statearr_28469 = state_28464;
(statearr_28469[(8)] = inst_28447__$1);

return statearr_28469;
})();
if(cljs.core.truth_(inst_28448)){
var statearr_28470_28489 = state_28464__$1;
(statearr_28470_28489[(1)] = (5));

} else {
var statearr_28471_28490 = state_28464__$1;
(statearr_28471_28490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (6))){
var inst_28451 = (state_28464[(9)]);
var inst_28444 = (state_28464[(7)]);
var inst_28447 = (state_28464[(8)]);
var inst_28451__$1 = f.call(null,inst_28444,inst_28447);
var inst_28452 = cljs.core.reduced_QMARK_.call(null,inst_28451__$1);
var state_28464__$1 = (function (){var statearr_28472 = state_28464;
(statearr_28472[(9)] = inst_28451__$1);

return statearr_28472;
})();
if(inst_28452){
var statearr_28473_28491 = state_28464__$1;
(statearr_28473_28491[(1)] = (8));

} else {
var statearr_28474_28492 = state_28464__$1;
(statearr_28474_28492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (3))){
var inst_28462 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28464__$1,inst_28462);
} else {
if((state_val_28465 === (2))){
var state_28464__$1 = state_28464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28464__$1,(4),ch);
} else {
if((state_val_28465 === (9))){
var inst_28451 = (state_28464[(9)]);
var inst_28444 = inst_28451;
var state_28464__$1 = (function (){var statearr_28475 = state_28464;
(statearr_28475[(7)] = inst_28444);

return statearr_28475;
})();
var statearr_28476_28493 = state_28464__$1;
(statearr_28476_28493[(2)] = null);

(statearr_28476_28493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (5))){
var inst_28444 = (state_28464[(7)]);
var state_28464__$1 = state_28464;
var statearr_28477_28494 = state_28464__$1;
(statearr_28477_28494[(2)] = inst_28444);

(statearr_28477_28494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (10))){
var inst_28458 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
var statearr_28478_28495 = state_28464__$1;
(statearr_28478_28495[(2)] = inst_28458);

(statearr_28478_28495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (8))){
var inst_28451 = (state_28464[(9)]);
var inst_28454 = cljs.core.deref.call(null,inst_28451);
var state_28464__$1 = state_28464;
var statearr_28479_28496 = state_28464__$1;
(statearr_28479_28496[(2)] = inst_28454);

(statearr_28479_28496[(1)] = (10));


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
});})(c__27698__auto__))
;
return ((function (switch__27586__auto__,c__27698__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27587__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27587__auto____0 = (function (){
var statearr_28483 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28483[(0)] = cljs$core$async$reduce_$_state_machine__27587__auto__);

(statearr_28483[(1)] = (1));

return statearr_28483;
});
var cljs$core$async$reduce_$_state_machine__27587__auto____1 = (function (state_28464){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28484){if((e28484 instanceof Object)){
var ex__27590__auto__ = e28484;
var statearr_28485_28497 = state_28464;
(statearr_28485_28497[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28498 = state_28464;
state_28464 = G__28498;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27587__auto__ = function(state_28464){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27587__auto____1.call(this,state_28464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27587__auto____0;
cljs$core$async$reduce_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27587__auto____1;
return cljs$core$async$reduce_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__))
})();
var state__27700__auto__ = (function (){var statearr_28486 = f__27699__auto__.call(null);
(statearr_28486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_28486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__))
);

return c__27698__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__,f__$1){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__,f__$1){
return (function (state_28518){
var state_val_28519 = (state_28518[(1)]);
if((state_val_28519 === (1))){
var inst_28513 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28518__$1,(2),inst_28513);
} else {
if((state_val_28519 === (2))){
var inst_28515 = (state_28518[(2)]);
var inst_28516 = f__$1.call(null,inst_28515);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28518__$1,inst_28516);
} else {
return null;
}
}
});})(c__27698__auto__,f__$1))
;
return ((function (switch__27586__auto__,c__27698__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27587__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27587__auto____0 = (function (){
var statearr_28523 = [null,null,null,null,null,null,null];
(statearr_28523[(0)] = cljs$core$async$transduce_$_state_machine__27587__auto__);

(statearr_28523[(1)] = (1));

return statearr_28523;
});
var cljs$core$async$transduce_$_state_machine__27587__auto____1 = (function (state_28518){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28524){if((e28524 instanceof Object)){
var ex__27590__auto__ = e28524;
var statearr_28525_28527 = state_28518;
(statearr_28525_28527[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28528 = state_28518;
state_28518 = G__28528;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27587__auto__ = function(state_28518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27587__auto____1.call(this,state_28518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27587__auto____0;
cljs$core$async$transduce_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27587__auto____1;
return cljs$core$async$transduce_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__,f__$1))
})();
var state__27700__auto__ = (function (){var statearr_28526 = f__27699__auto__.call(null);
(statearr_28526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_28526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__,f__$1))
);

return c__27698__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28529 = [];
var len__26601__auto___28581 = arguments.length;
var i__26602__auto___28582 = (0);
while(true){
if((i__26602__auto___28582 < len__26601__auto___28581)){
args28529.push((arguments[i__26602__auto___28582]));

var G__28583 = (i__26602__auto___28582 + (1));
i__26602__auto___28582 = G__28583;
continue;
} else {
}
break;
}

var G__28531 = args28529.length;
switch (G__28531) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28529.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__){
return (function (state_28556){
var state_val_28557 = (state_28556[(1)]);
if((state_val_28557 === (7))){
var inst_28538 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
var statearr_28558_28585 = state_28556__$1;
(statearr_28558_28585[(2)] = inst_28538);

(statearr_28558_28585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (1))){
var inst_28532 = cljs.core.seq.call(null,coll);
var inst_28533 = inst_28532;
var state_28556__$1 = (function (){var statearr_28559 = state_28556;
(statearr_28559[(7)] = inst_28533);

return statearr_28559;
})();
var statearr_28560_28586 = state_28556__$1;
(statearr_28560_28586[(2)] = null);

(statearr_28560_28586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (4))){
var inst_28533 = (state_28556[(7)]);
var inst_28536 = cljs.core.first.call(null,inst_28533);
var state_28556__$1 = state_28556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28556__$1,(7),ch,inst_28536);
} else {
if((state_val_28557 === (13))){
var inst_28550 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
var statearr_28561_28587 = state_28556__$1;
(statearr_28561_28587[(2)] = inst_28550);

(statearr_28561_28587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (6))){
var inst_28541 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
if(cljs.core.truth_(inst_28541)){
var statearr_28562_28588 = state_28556__$1;
(statearr_28562_28588[(1)] = (8));

} else {
var statearr_28563_28589 = state_28556__$1;
(statearr_28563_28589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (3))){
var inst_28554 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28556__$1,inst_28554);
} else {
if((state_val_28557 === (12))){
var state_28556__$1 = state_28556;
var statearr_28564_28590 = state_28556__$1;
(statearr_28564_28590[(2)] = null);

(statearr_28564_28590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (2))){
var inst_28533 = (state_28556[(7)]);
var state_28556__$1 = state_28556;
if(cljs.core.truth_(inst_28533)){
var statearr_28565_28591 = state_28556__$1;
(statearr_28565_28591[(1)] = (4));

} else {
var statearr_28566_28592 = state_28556__$1;
(statearr_28566_28592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (11))){
var inst_28547 = cljs.core.async.close_BANG_.call(null,ch);
var state_28556__$1 = state_28556;
var statearr_28567_28593 = state_28556__$1;
(statearr_28567_28593[(2)] = inst_28547);

(statearr_28567_28593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (9))){
var state_28556__$1 = state_28556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28568_28594 = state_28556__$1;
(statearr_28568_28594[(1)] = (11));

} else {
var statearr_28569_28595 = state_28556__$1;
(statearr_28569_28595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (5))){
var inst_28533 = (state_28556[(7)]);
var state_28556__$1 = state_28556;
var statearr_28570_28596 = state_28556__$1;
(statearr_28570_28596[(2)] = inst_28533);

(statearr_28570_28596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (10))){
var inst_28552 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
var statearr_28571_28597 = state_28556__$1;
(statearr_28571_28597[(2)] = inst_28552);

(statearr_28571_28597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (8))){
var inst_28533 = (state_28556[(7)]);
var inst_28543 = cljs.core.next.call(null,inst_28533);
var inst_28533__$1 = inst_28543;
var state_28556__$1 = (function (){var statearr_28572 = state_28556;
(statearr_28572[(7)] = inst_28533__$1);

return statearr_28572;
})();
var statearr_28573_28598 = state_28556__$1;
(statearr_28573_28598[(2)] = null);

(statearr_28573_28598[(1)] = (2));


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
});})(c__27698__auto__))
;
return ((function (switch__27586__auto__,c__27698__auto__){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_28577 = [null,null,null,null,null,null,null,null];
(statearr_28577[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_28577[(1)] = (1));

return statearr_28577;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_28556){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e28578){if((e28578 instanceof Object)){
var ex__27590__auto__ = e28578;
var statearr_28579_28599 = state_28556;
(statearr_28579_28599[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28600 = state_28556;
state_28556 = G__28600;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_28556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_28556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__))
})();
var state__27700__auto__ = (function (){var statearr_28580 = f__27699__auto__.call(null);
(statearr_28580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_28580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__))
);

return c__27698__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26160__auto__ = (((_ == null))?null:_);
var m__26161__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,_);
} else {
var m__26161__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26161__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m,ch);
} else {
var m__26161__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m);
} else {
var m__26161__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28826 = (function (ch,cs,meta28827){
this.ch = ch;
this.cs = cs;
this.meta28827 = meta28827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28828,meta28827__$1){
var self__ = this;
var _28828__$1 = this;
return (new cljs.core.async.t_cljs$core$async28826(self__.ch,self__.cs,meta28827__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28828){
var self__ = this;
var _28828__$1 = this;
return self__.meta28827;
});})(cs))
;

cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28826.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28826.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28827","meta28827",-441577323,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28826";

cljs.core.async.t_cljs$core$async28826.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async28826");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28826 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28826(ch__$1,cs__$1,meta28827){
return (new cljs.core.async.t_cljs$core$async28826(ch__$1,cs__$1,meta28827));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28826(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27698__auto___29051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___29051,cs,m,dchan,dctr,done){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___29051,cs,m,dchan,dctr,done){
return (function (state_28963){
var state_val_28964 = (state_28963[(1)]);
if((state_val_28964 === (7))){
var inst_28959 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_28965_29052 = state_28963__$1;
(statearr_28965_29052[(2)] = inst_28959);

(statearr_28965_29052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (20))){
var inst_28862 = (state_28963[(7)]);
var inst_28874 = cljs.core.first.call(null,inst_28862);
var inst_28875 = cljs.core.nth.call(null,inst_28874,(0),null);
var inst_28876 = cljs.core.nth.call(null,inst_28874,(1),null);
var state_28963__$1 = (function (){var statearr_28966 = state_28963;
(statearr_28966[(8)] = inst_28875);

return statearr_28966;
})();
if(cljs.core.truth_(inst_28876)){
var statearr_28967_29053 = state_28963__$1;
(statearr_28967_29053[(1)] = (22));

} else {
var statearr_28968_29054 = state_28963__$1;
(statearr_28968_29054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (27))){
var inst_28831 = (state_28963[(9)]);
var inst_28911 = (state_28963[(10)]);
var inst_28904 = (state_28963[(11)]);
var inst_28906 = (state_28963[(12)]);
var inst_28911__$1 = cljs.core._nth.call(null,inst_28904,inst_28906);
var inst_28912 = cljs.core.async.put_BANG_.call(null,inst_28911__$1,inst_28831,done);
var state_28963__$1 = (function (){var statearr_28969 = state_28963;
(statearr_28969[(10)] = inst_28911__$1);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28912)){
var statearr_28970_29055 = state_28963__$1;
(statearr_28970_29055[(1)] = (30));

} else {
var statearr_28971_29056 = state_28963__$1;
(statearr_28971_29056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (1))){
var state_28963__$1 = state_28963;
var statearr_28972_29057 = state_28963__$1;
(statearr_28972_29057[(2)] = null);

(statearr_28972_29057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (24))){
var inst_28862 = (state_28963[(7)]);
var inst_28881 = (state_28963[(2)]);
var inst_28882 = cljs.core.next.call(null,inst_28862);
var inst_28840 = inst_28882;
var inst_28841 = null;
var inst_28842 = (0);
var inst_28843 = (0);
var state_28963__$1 = (function (){var statearr_28973 = state_28963;
(statearr_28973[(13)] = inst_28842);

(statearr_28973[(14)] = inst_28881);

(statearr_28973[(15)] = inst_28840);

(statearr_28973[(16)] = inst_28841);

(statearr_28973[(17)] = inst_28843);

return statearr_28973;
})();
var statearr_28974_29058 = state_28963__$1;
(statearr_28974_29058[(2)] = null);

(statearr_28974_29058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (39))){
var state_28963__$1 = state_28963;
var statearr_28978_29059 = state_28963__$1;
(statearr_28978_29059[(2)] = null);

(statearr_28978_29059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (4))){
var inst_28831 = (state_28963[(9)]);
var inst_28831__$1 = (state_28963[(2)]);
var inst_28832 = (inst_28831__$1 == null);
var state_28963__$1 = (function (){var statearr_28979 = state_28963;
(statearr_28979[(9)] = inst_28831__$1);

return statearr_28979;
})();
if(cljs.core.truth_(inst_28832)){
var statearr_28980_29060 = state_28963__$1;
(statearr_28980_29060[(1)] = (5));

} else {
var statearr_28981_29061 = state_28963__$1;
(statearr_28981_29061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (15))){
var inst_28842 = (state_28963[(13)]);
var inst_28840 = (state_28963[(15)]);
var inst_28841 = (state_28963[(16)]);
var inst_28843 = (state_28963[(17)]);
var inst_28858 = (state_28963[(2)]);
var inst_28859 = (inst_28843 + (1));
var tmp28975 = inst_28842;
var tmp28976 = inst_28840;
var tmp28977 = inst_28841;
var inst_28840__$1 = tmp28976;
var inst_28841__$1 = tmp28977;
var inst_28842__$1 = tmp28975;
var inst_28843__$1 = inst_28859;
var state_28963__$1 = (function (){var statearr_28982 = state_28963;
(statearr_28982[(13)] = inst_28842__$1);

(statearr_28982[(15)] = inst_28840__$1);

(statearr_28982[(18)] = inst_28858);

(statearr_28982[(16)] = inst_28841__$1);

(statearr_28982[(17)] = inst_28843__$1);

return statearr_28982;
})();
var statearr_28983_29062 = state_28963__$1;
(statearr_28983_29062[(2)] = null);

(statearr_28983_29062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (21))){
var inst_28885 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_28987_29063 = state_28963__$1;
(statearr_28987_29063[(2)] = inst_28885);

(statearr_28987_29063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (31))){
var inst_28911 = (state_28963[(10)]);
var inst_28915 = done.call(null,null);
var inst_28916 = cljs.core.async.untap_STAR_.call(null,m,inst_28911);
var state_28963__$1 = (function (){var statearr_28988 = state_28963;
(statearr_28988[(19)] = inst_28915);

return statearr_28988;
})();
var statearr_28989_29064 = state_28963__$1;
(statearr_28989_29064[(2)] = inst_28916);

(statearr_28989_29064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (32))){
var inst_28903 = (state_28963[(20)]);
var inst_28904 = (state_28963[(11)]);
var inst_28905 = (state_28963[(21)]);
var inst_28906 = (state_28963[(12)]);
var inst_28918 = (state_28963[(2)]);
var inst_28919 = (inst_28906 + (1));
var tmp28984 = inst_28903;
var tmp28985 = inst_28904;
var tmp28986 = inst_28905;
var inst_28903__$1 = tmp28984;
var inst_28904__$1 = tmp28985;
var inst_28905__$1 = tmp28986;
var inst_28906__$1 = inst_28919;
var state_28963__$1 = (function (){var statearr_28990 = state_28963;
(statearr_28990[(20)] = inst_28903__$1);

(statearr_28990[(11)] = inst_28904__$1);

(statearr_28990[(21)] = inst_28905__$1);

(statearr_28990[(22)] = inst_28918);

(statearr_28990[(12)] = inst_28906__$1);

return statearr_28990;
})();
var statearr_28991_29065 = state_28963__$1;
(statearr_28991_29065[(2)] = null);

(statearr_28991_29065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (40))){
var inst_28931 = (state_28963[(23)]);
var inst_28935 = done.call(null,null);
var inst_28936 = cljs.core.async.untap_STAR_.call(null,m,inst_28931);
var state_28963__$1 = (function (){var statearr_28992 = state_28963;
(statearr_28992[(24)] = inst_28935);

return statearr_28992;
})();
var statearr_28993_29066 = state_28963__$1;
(statearr_28993_29066[(2)] = inst_28936);

(statearr_28993_29066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (33))){
var inst_28922 = (state_28963[(25)]);
var inst_28924 = cljs.core.chunked_seq_QMARK_.call(null,inst_28922);
var state_28963__$1 = state_28963;
if(inst_28924){
var statearr_28994_29067 = state_28963__$1;
(statearr_28994_29067[(1)] = (36));

} else {
var statearr_28995_29068 = state_28963__$1;
(statearr_28995_29068[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (13))){
var inst_28852 = (state_28963[(26)]);
var inst_28855 = cljs.core.async.close_BANG_.call(null,inst_28852);
var state_28963__$1 = state_28963;
var statearr_28996_29069 = state_28963__$1;
(statearr_28996_29069[(2)] = inst_28855);

(statearr_28996_29069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (22))){
var inst_28875 = (state_28963[(8)]);
var inst_28878 = cljs.core.async.close_BANG_.call(null,inst_28875);
var state_28963__$1 = state_28963;
var statearr_28997_29070 = state_28963__$1;
(statearr_28997_29070[(2)] = inst_28878);

(statearr_28997_29070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (36))){
var inst_28922 = (state_28963[(25)]);
var inst_28926 = cljs.core.chunk_first.call(null,inst_28922);
var inst_28927 = cljs.core.chunk_rest.call(null,inst_28922);
var inst_28928 = cljs.core.count.call(null,inst_28926);
var inst_28903 = inst_28927;
var inst_28904 = inst_28926;
var inst_28905 = inst_28928;
var inst_28906 = (0);
var state_28963__$1 = (function (){var statearr_28998 = state_28963;
(statearr_28998[(20)] = inst_28903);

(statearr_28998[(11)] = inst_28904);

(statearr_28998[(21)] = inst_28905);

(statearr_28998[(12)] = inst_28906);

return statearr_28998;
})();
var statearr_28999_29071 = state_28963__$1;
(statearr_28999_29071[(2)] = null);

(statearr_28999_29071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (41))){
var inst_28922 = (state_28963[(25)]);
var inst_28938 = (state_28963[(2)]);
var inst_28939 = cljs.core.next.call(null,inst_28922);
var inst_28903 = inst_28939;
var inst_28904 = null;
var inst_28905 = (0);
var inst_28906 = (0);
var state_28963__$1 = (function (){var statearr_29000 = state_28963;
(statearr_29000[(20)] = inst_28903);

(statearr_29000[(27)] = inst_28938);

(statearr_29000[(11)] = inst_28904);

(statearr_29000[(21)] = inst_28905);

(statearr_29000[(12)] = inst_28906);

return statearr_29000;
})();
var statearr_29001_29072 = state_28963__$1;
(statearr_29001_29072[(2)] = null);

(statearr_29001_29072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (43))){
var state_28963__$1 = state_28963;
var statearr_29002_29073 = state_28963__$1;
(statearr_29002_29073[(2)] = null);

(statearr_29002_29073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (29))){
var inst_28947 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_29003_29074 = state_28963__$1;
(statearr_29003_29074[(2)] = inst_28947);

(statearr_29003_29074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (44))){
var inst_28956 = (state_28963[(2)]);
var state_28963__$1 = (function (){var statearr_29004 = state_28963;
(statearr_29004[(28)] = inst_28956);

return statearr_29004;
})();
var statearr_29005_29075 = state_28963__$1;
(statearr_29005_29075[(2)] = null);

(statearr_29005_29075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (6))){
var inst_28895 = (state_28963[(29)]);
var inst_28894 = cljs.core.deref.call(null,cs);
var inst_28895__$1 = cljs.core.keys.call(null,inst_28894);
var inst_28896 = cljs.core.count.call(null,inst_28895__$1);
var inst_28897 = cljs.core.reset_BANG_.call(null,dctr,inst_28896);
var inst_28902 = cljs.core.seq.call(null,inst_28895__$1);
var inst_28903 = inst_28902;
var inst_28904 = null;
var inst_28905 = (0);
var inst_28906 = (0);
var state_28963__$1 = (function (){var statearr_29006 = state_28963;
(statearr_29006[(30)] = inst_28897);

(statearr_29006[(29)] = inst_28895__$1);

(statearr_29006[(20)] = inst_28903);

(statearr_29006[(11)] = inst_28904);

(statearr_29006[(21)] = inst_28905);

(statearr_29006[(12)] = inst_28906);

return statearr_29006;
})();
var statearr_29007_29076 = state_28963__$1;
(statearr_29007_29076[(2)] = null);

(statearr_29007_29076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (28))){
var inst_28903 = (state_28963[(20)]);
var inst_28922 = (state_28963[(25)]);
var inst_28922__$1 = cljs.core.seq.call(null,inst_28903);
var state_28963__$1 = (function (){var statearr_29008 = state_28963;
(statearr_29008[(25)] = inst_28922__$1);

return statearr_29008;
})();
if(inst_28922__$1){
var statearr_29009_29077 = state_28963__$1;
(statearr_29009_29077[(1)] = (33));

} else {
var statearr_29010_29078 = state_28963__$1;
(statearr_29010_29078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (25))){
var inst_28905 = (state_28963[(21)]);
var inst_28906 = (state_28963[(12)]);
var inst_28908 = (inst_28906 < inst_28905);
var inst_28909 = inst_28908;
var state_28963__$1 = state_28963;
if(cljs.core.truth_(inst_28909)){
var statearr_29011_29079 = state_28963__$1;
(statearr_29011_29079[(1)] = (27));

} else {
var statearr_29012_29080 = state_28963__$1;
(statearr_29012_29080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (34))){
var state_28963__$1 = state_28963;
var statearr_29013_29081 = state_28963__$1;
(statearr_29013_29081[(2)] = null);

(statearr_29013_29081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (17))){
var state_28963__$1 = state_28963;
var statearr_29014_29082 = state_28963__$1;
(statearr_29014_29082[(2)] = null);

(statearr_29014_29082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (3))){
var inst_28961 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28963__$1,inst_28961);
} else {
if((state_val_28964 === (12))){
var inst_28890 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_29015_29083 = state_28963__$1;
(statearr_29015_29083[(2)] = inst_28890);

(statearr_29015_29083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (2))){
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28963__$1,(4),ch);
} else {
if((state_val_28964 === (23))){
var state_28963__$1 = state_28963;
var statearr_29016_29084 = state_28963__$1;
(statearr_29016_29084[(2)] = null);

(statearr_29016_29084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (35))){
var inst_28945 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_29017_29085 = state_28963__$1;
(statearr_29017_29085[(2)] = inst_28945);

(statearr_29017_29085[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (19))){
var inst_28862 = (state_28963[(7)]);
var inst_28866 = cljs.core.chunk_first.call(null,inst_28862);
var inst_28867 = cljs.core.chunk_rest.call(null,inst_28862);
var inst_28868 = cljs.core.count.call(null,inst_28866);
var inst_28840 = inst_28867;
var inst_28841 = inst_28866;
var inst_28842 = inst_28868;
var inst_28843 = (0);
var state_28963__$1 = (function (){var statearr_29018 = state_28963;
(statearr_29018[(13)] = inst_28842);

(statearr_29018[(15)] = inst_28840);

(statearr_29018[(16)] = inst_28841);

(statearr_29018[(17)] = inst_28843);

return statearr_29018;
})();
var statearr_29019_29086 = state_28963__$1;
(statearr_29019_29086[(2)] = null);

(statearr_29019_29086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (11))){
var inst_28862 = (state_28963[(7)]);
var inst_28840 = (state_28963[(15)]);
var inst_28862__$1 = cljs.core.seq.call(null,inst_28840);
var state_28963__$1 = (function (){var statearr_29020 = state_28963;
(statearr_29020[(7)] = inst_28862__$1);

return statearr_29020;
})();
if(inst_28862__$1){
var statearr_29021_29087 = state_28963__$1;
(statearr_29021_29087[(1)] = (16));

} else {
var statearr_29022_29088 = state_28963__$1;
(statearr_29022_29088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (9))){
var inst_28892 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_29023_29089 = state_28963__$1;
(statearr_29023_29089[(2)] = inst_28892);

(statearr_29023_29089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (5))){
var inst_28838 = cljs.core.deref.call(null,cs);
var inst_28839 = cljs.core.seq.call(null,inst_28838);
var inst_28840 = inst_28839;
var inst_28841 = null;
var inst_28842 = (0);
var inst_28843 = (0);
var state_28963__$1 = (function (){var statearr_29024 = state_28963;
(statearr_29024[(13)] = inst_28842);

(statearr_29024[(15)] = inst_28840);

(statearr_29024[(16)] = inst_28841);

(statearr_29024[(17)] = inst_28843);

return statearr_29024;
})();
var statearr_29025_29090 = state_28963__$1;
(statearr_29025_29090[(2)] = null);

(statearr_29025_29090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (14))){
var state_28963__$1 = state_28963;
var statearr_29026_29091 = state_28963__$1;
(statearr_29026_29091[(2)] = null);

(statearr_29026_29091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (45))){
var inst_28953 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_29027_29092 = state_28963__$1;
(statearr_29027_29092[(2)] = inst_28953);

(statearr_29027_29092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (26))){
var inst_28895 = (state_28963[(29)]);
var inst_28949 = (state_28963[(2)]);
var inst_28950 = cljs.core.seq.call(null,inst_28895);
var state_28963__$1 = (function (){var statearr_29028 = state_28963;
(statearr_29028[(31)] = inst_28949);

return statearr_29028;
})();
if(inst_28950){
var statearr_29029_29093 = state_28963__$1;
(statearr_29029_29093[(1)] = (42));

} else {
var statearr_29030_29094 = state_28963__$1;
(statearr_29030_29094[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (16))){
var inst_28862 = (state_28963[(7)]);
var inst_28864 = cljs.core.chunked_seq_QMARK_.call(null,inst_28862);
var state_28963__$1 = state_28963;
if(inst_28864){
var statearr_29031_29095 = state_28963__$1;
(statearr_29031_29095[(1)] = (19));

} else {
var statearr_29032_29096 = state_28963__$1;
(statearr_29032_29096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (38))){
var inst_28942 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_29033_29097 = state_28963__$1;
(statearr_29033_29097[(2)] = inst_28942);

(statearr_29033_29097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (30))){
var state_28963__$1 = state_28963;
var statearr_29034_29098 = state_28963__$1;
(statearr_29034_29098[(2)] = null);

(statearr_29034_29098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (10))){
var inst_28841 = (state_28963[(16)]);
var inst_28843 = (state_28963[(17)]);
var inst_28851 = cljs.core._nth.call(null,inst_28841,inst_28843);
var inst_28852 = cljs.core.nth.call(null,inst_28851,(0),null);
var inst_28853 = cljs.core.nth.call(null,inst_28851,(1),null);
var state_28963__$1 = (function (){var statearr_29035 = state_28963;
(statearr_29035[(26)] = inst_28852);

return statearr_29035;
})();
if(cljs.core.truth_(inst_28853)){
var statearr_29036_29099 = state_28963__$1;
(statearr_29036_29099[(1)] = (13));

} else {
var statearr_29037_29100 = state_28963__$1;
(statearr_29037_29100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (18))){
var inst_28888 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_29038_29101 = state_28963__$1;
(statearr_29038_29101[(2)] = inst_28888);

(statearr_29038_29101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (42))){
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28963__$1,(45),dchan);
} else {
if((state_val_28964 === (37))){
var inst_28831 = (state_28963[(9)]);
var inst_28931 = (state_28963[(23)]);
var inst_28922 = (state_28963[(25)]);
var inst_28931__$1 = cljs.core.first.call(null,inst_28922);
var inst_28932 = cljs.core.async.put_BANG_.call(null,inst_28931__$1,inst_28831,done);
var state_28963__$1 = (function (){var statearr_29039 = state_28963;
(statearr_29039[(23)] = inst_28931__$1);

return statearr_29039;
})();
if(cljs.core.truth_(inst_28932)){
var statearr_29040_29102 = state_28963__$1;
(statearr_29040_29102[(1)] = (39));

} else {
var statearr_29041_29103 = state_28963__$1;
(statearr_29041_29103[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (8))){
var inst_28842 = (state_28963[(13)]);
var inst_28843 = (state_28963[(17)]);
var inst_28845 = (inst_28843 < inst_28842);
var inst_28846 = inst_28845;
var state_28963__$1 = state_28963;
if(cljs.core.truth_(inst_28846)){
var statearr_29042_29104 = state_28963__$1;
(statearr_29042_29104[(1)] = (10));

} else {
var statearr_29043_29105 = state_28963__$1;
(statearr_29043_29105[(1)] = (11));

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
});})(c__27698__auto___29051,cs,m,dchan,dctr,done))
;
return ((function (switch__27586__auto__,c__27698__auto___29051,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27587__auto__ = null;
var cljs$core$async$mult_$_state_machine__27587__auto____0 = (function (){
var statearr_29047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29047[(0)] = cljs$core$async$mult_$_state_machine__27587__auto__);

(statearr_29047[(1)] = (1));

return statearr_29047;
});
var cljs$core$async$mult_$_state_machine__27587__auto____1 = (function (state_28963){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_28963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e29048){if((e29048 instanceof Object)){
var ex__27590__auto__ = e29048;
var statearr_29049_29106 = state_28963;
(statearr_29049_29106[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29107 = state_28963;
state_28963 = G__29107;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27587__auto__ = function(state_28963){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27587__auto____1.call(this,state_28963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27587__auto____0;
cljs$core$async$mult_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27587__auto____1;
return cljs$core$async$mult_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___29051,cs,m,dchan,dctr,done))
})();
var state__27700__auto__ = (function (){var statearr_29050 = f__27699__auto__.call(null);
(statearr_29050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___29051);

return statearr_29050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___29051,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29108 = [];
var len__26601__auto___29111 = arguments.length;
var i__26602__auto___29112 = (0);
while(true){
if((i__26602__auto___29112 < len__26601__auto___29111)){
args29108.push((arguments[i__26602__auto___29112]));

var G__29113 = (i__26602__auto___29112 + (1));
i__26602__auto___29112 = G__29113;
continue;
} else {
}
break;
}

var G__29110 = args29108.length;
switch (G__29110) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29108.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m,ch);
} else {
var m__26161__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m,ch);
} else {
var m__26161__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m);
} else {
var m__26161__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m,state_map);
} else {
var m__26161__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26160__auto__ = (((m == null))?null:m);
var m__26161__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,m,mode);
} else {
var m__26161__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26608__auto__ = [];
var len__26601__auto___29125 = arguments.length;
var i__26602__auto___29126 = (0);
while(true){
if((i__26602__auto___29126 < len__26601__auto___29125)){
args__26608__auto__.push((arguments[i__26602__auto___29126]));

var G__29127 = (i__26602__auto___29126 + (1));
i__26602__auto___29126 = G__29127;
continue;
} else {
}
break;
}

var argseq__26609__auto__ = ((((3) < args__26608__auto__.length))?(new cljs.core.IndexedSeq(args__26608__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26609__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29119){
var map__29120 = p__29119;
var map__29120__$1 = ((((!((map__29120 == null)))?((((map__29120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29120):map__29120);
var opts = map__29120__$1;
var statearr_29122_29128 = state;
(statearr_29122_29128[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29120,map__29120__$1,opts){
return (function (val){
var statearr_29123_29129 = state;
(statearr_29123_29129[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29120,map__29120__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29124_29130 = state;
(statearr_29124_29130[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29115){
var G__29116 = cljs.core.first.call(null,seq29115);
var seq29115__$1 = cljs.core.next.call(null,seq29115);
var G__29117 = cljs.core.first.call(null,seq29115__$1);
var seq29115__$2 = cljs.core.next.call(null,seq29115__$1);
var G__29118 = cljs.core.first.call(null,seq29115__$2);
var seq29115__$3 = cljs.core.next.call(null,seq29115__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29116,G__29117,G__29118,seq29115__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async29298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29298 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29299){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29299 = meta29299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29300,meta29299__$1){
var self__ = this;
var _29300__$1 = this;
return (new cljs.core.async.t_cljs$core$async29298(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29299__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29300){
var self__ = this;
var _29300__$1 = this;
return self__.meta29299;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29299","meta29299",-1669114112,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29298";

cljs.core.async.t_cljs$core$async29298.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async29298");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29298 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29298(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29299){
return (new cljs.core.async.t_cljs$core$async29298(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29299));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29298(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27698__auto___29465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29402){
var state_val_29403 = (state_29402[(1)]);
if((state_val_29403 === (7))){
var inst_29317 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29404_29466 = state_29402__$1;
(statearr_29404_29466[(2)] = inst_29317);

(statearr_29404_29466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (20))){
var inst_29329 = (state_29402[(7)]);
var state_29402__$1 = state_29402;
var statearr_29405_29467 = state_29402__$1;
(statearr_29405_29467[(2)] = inst_29329);

(statearr_29405_29467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (27))){
var state_29402__$1 = state_29402;
var statearr_29406_29468 = state_29402__$1;
(statearr_29406_29468[(2)] = null);

(statearr_29406_29468[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (1))){
var inst_29304 = (state_29402[(8)]);
var inst_29304__$1 = calc_state.call(null);
var inst_29306 = (inst_29304__$1 == null);
var inst_29307 = cljs.core.not.call(null,inst_29306);
var state_29402__$1 = (function (){var statearr_29407 = state_29402;
(statearr_29407[(8)] = inst_29304__$1);

return statearr_29407;
})();
if(inst_29307){
var statearr_29408_29469 = state_29402__$1;
(statearr_29408_29469[(1)] = (2));

} else {
var statearr_29409_29470 = state_29402__$1;
(statearr_29409_29470[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (24))){
var inst_29362 = (state_29402[(9)]);
var inst_29353 = (state_29402[(10)]);
var inst_29376 = (state_29402[(11)]);
var inst_29376__$1 = inst_29353.call(null,inst_29362);
var state_29402__$1 = (function (){var statearr_29410 = state_29402;
(statearr_29410[(11)] = inst_29376__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29376__$1)){
var statearr_29411_29471 = state_29402__$1;
(statearr_29411_29471[(1)] = (29));

} else {
var statearr_29412_29472 = state_29402__$1;
(statearr_29412_29472[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (4))){
var inst_29320 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29320)){
var statearr_29413_29473 = state_29402__$1;
(statearr_29413_29473[(1)] = (8));

} else {
var statearr_29414_29474 = state_29402__$1;
(statearr_29414_29474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (15))){
var inst_29347 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29347)){
var statearr_29415_29475 = state_29402__$1;
(statearr_29415_29475[(1)] = (19));

} else {
var statearr_29416_29476 = state_29402__$1;
(statearr_29416_29476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (21))){
var inst_29352 = (state_29402[(12)]);
var inst_29352__$1 = (state_29402[(2)]);
var inst_29353 = cljs.core.get.call(null,inst_29352__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29354 = cljs.core.get.call(null,inst_29352__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29355 = cljs.core.get.call(null,inst_29352__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29402__$1 = (function (){var statearr_29417 = state_29402;
(statearr_29417[(13)] = inst_29354);

(statearr_29417[(12)] = inst_29352__$1);

(statearr_29417[(10)] = inst_29353);

return statearr_29417;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29402__$1,(22),inst_29355);
} else {
if((state_val_29403 === (31))){
var inst_29384 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29384)){
var statearr_29418_29477 = state_29402__$1;
(statearr_29418_29477[(1)] = (32));

} else {
var statearr_29419_29478 = state_29402__$1;
(statearr_29419_29478[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (32))){
var inst_29361 = (state_29402[(14)]);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29402__$1,(35),out,inst_29361);
} else {
if((state_val_29403 === (33))){
var inst_29352 = (state_29402[(12)]);
var inst_29329 = inst_29352;
var state_29402__$1 = (function (){var statearr_29420 = state_29402;
(statearr_29420[(7)] = inst_29329);

return statearr_29420;
})();
var statearr_29421_29479 = state_29402__$1;
(statearr_29421_29479[(2)] = null);

(statearr_29421_29479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (13))){
var inst_29329 = (state_29402[(7)]);
var inst_29336 = inst_29329.cljs$lang$protocol_mask$partition0$;
var inst_29337 = (inst_29336 & (64));
var inst_29338 = inst_29329.cljs$core$ISeq$;
var inst_29339 = (cljs.core.PROTOCOL_SENTINEL === inst_29338);
var inst_29340 = (inst_29337) || (inst_29339);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29340)){
var statearr_29422_29480 = state_29402__$1;
(statearr_29422_29480[(1)] = (16));

} else {
var statearr_29423_29481 = state_29402__$1;
(statearr_29423_29481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (22))){
var inst_29362 = (state_29402[(9)]);
var inst_29361 = (state_29402[(14)]);
var inst_29360 = (state_29402[(2)]);
var inst_29361__$1 = cljs.core.nth.call(null,inst_29360,(0),null);
var inst_29362__$1 = cljs.core.nth.call(null,inst_29360,(1),null);
var inst_29363 = (inst_29361__$1 == null);
var inst_29364 = cljs.core._EQ_.call(null,inst_29362__$1,change);
var inst_29365 = (inst_29363) || (inst_29364);
var state_29402__$1 = (function (){var statearr_29424 = state_29402;
(statearr_29424[(9)] = inst_29362__$1);

(statearr_29424[(14)] = inst_29361__$1);

return statearr_29424;
})();
if(cljs.core.truth_(inst_29365)){
var statearr_29425_29482 = state_29402__$1;
(statearr_29425_29482[(1)] = (23));

} else {
var statearr_29426_29483 = state_29402__$1;
(statearr_29426_29483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (36))){
var inst_29352 = (state_29402[(12)]);
var inst_29329 = inst_29352;
var state_29402__$1 = (function (){var statearr_29427 = state_29402;
(statearr_29427[(7)] = inst_29329);

return statearr_29427;
})();
var statearr_29428_29484 = state_29402__$1;
(statearr_29428_29484[(2)] = null);

(statearr_29428_29484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (29))){
var inst_29376 = (state_29402[(11)]);
var state_29402__$1 = state_29402;
var statearr_29429_29485 = state_29402__$1;
(statearr_29429_29485[(2)] = inst_29376);

(statearr_29429_29485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (6))){
var state_29402__$1 = state_29402;
var statearr_29430_29486 = state_29402__$1;
(statearr_29430_29486[(2)] = false);

(statearr_29430_29486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (28))){
var inst_29372 = (state_29402[(2)]);
var inst_29373 = calc_state.call(null);
var inst_29329 = inst_29373;
var state_29402__$1 = (function (){var statearr_29431 = state_29402;
(statearr_29431[(15)] = inst_29372);

(statearr_29431[(7)] = inst_29329);

return statearr_29431;
})();
var statearr_29432_29487 = state_29402__$1;
(statearr_29432_29487[(2)] = null);

(statearr_29432_29487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (25))){
var inst_29398 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29433_29488 = state_29402__$1;
(statearr_29433_29488[(2)] = inst_29398);

(statearr_29433_29488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (34))){
var inst_29396 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29434_29489 = state_29402__$1;
(statearr_29434_29489[(2)] = inst_29396);

(statearr_29434_29489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (17))){
var state_29402__$1 = state_29402;
var statearr_29435_29490 = state_29402__$1;
(statearr_29435_29490[(2)] = false);

(statearr_29435_29490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (3))){
var state_29402__$1 = state_29402;
var statearr_29436_29491 = state_29402__$1;
(statearr_29436_29491[(2)] = false);

(statearr_29436_29491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (12))){
var inst_29400 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29402__$1,inst_29400);
} else {
if((state_val_29403 === (2))){
var inst_29304 = (state_29402[(8)]);
var inst_29309 = inst_29304.cljs$lang$protocol_mask$partition0$;
var inst_29310 = (inst_29309 & (64));
var inst_29311 = inst_29304.cljs$core$ISeq$;
var inst_29312 = (cljs.core.PROTOCOL_SENTINEL === inst_29311);
var inst_29313 = (inst_29310) || (inst_29312);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29313)){
var statearr_29437_29492 = state_29402__$1;
(statearr_29437_29492[(1)] = (5));

} else {
var statearr_29438_29493 = state_29402__$1;
(statearr_29438_29493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (23))){
var inst_29361 = (state_29402[(14)]);
var inst_29367 = (inst_29361 == null);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29367)){
var statearr_29439_29494 = state_29402__$1;
(statearr_29439_29494[(1)] = (26));

} else {
var statearr_29440_29495 = state_29402__$1;
(statearr_29440_29495[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (35))){
var inst_29387 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
if(cljs.core.truth_(inst_29387)){
var statearr_29441_29496 = state_29402__$1;
(statearr_29441_29496[(1)] = (36));

} else {
var statearr_29442_29497 = state_29402__$1;
(statearr_29442_29497[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (19))){
var inst_29329 = (state_29402[(7)]);
var inst_29349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29329);
var state_29402__$1 = state_29402;
var statearr_29443_29498 = state_29402__$1;
(statearr_29443_29498[(2)] = inst_29349);

(statearr_29443_29498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (11))){
var inst_29329 = (state_29402[(7)]);
var inst_29333 = (inst_29329 == null);
var inst_29334 = cljs.core.not.call(null,inst_29333);
var state_29402__$1 = state_29402;
if(inst_29334){
var statearr_29444_29499 = state_29402__$1;
(statearr_29444_29499[(1)] = (13));

} else {
var statearr_29445_29500 = state_29402__$1;
(statearr_29445_29500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (9))){
var inst_29304 = (state_29402[(8)]);
var state_29402__$1 = state_29402;
var statearr_29446_29501 = state_29402__$1;
(statearr_29446_29501[(2)] = inst_29304);

(statearr_29446_29501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (5))){
var state_29402__$1 = state_29402;
var statearr_29447_29502 = state_29402__$1;
(statearr_29447_29502[(2)] = true);

(statearr_29447_29502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (14))){
var state_29402__$1 = state_29402;
var statearr_29448_29503 = state_29402__$1;
(statearr_29448_29503[(2)] = false);

(statearr_29448_29503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (26))){
var inst_29362 = (state_29402[(9)]);
var inst_29369 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29362);
var state_29402__$1 = state_29402;
var statearr_29449_29504 = state_29402__$1;
(statearr_29449_29504[(2)] = inst_29369);

(statearr_29449_29504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (16))){
var state_29402__$1 = state_29402;
var statearr_29450_29505 = state_29402__$1;
(statearr_29450_29505[(2)] = true);

(statearr_29450_29505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (38))){
var inst_29392 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29451_29506 = state_29402__$1;
(statearr_29451_29506[(2)] = inst_29392);

(statearr_29451_29506[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (30))){
var inst_29354 = (state_29402[(13)]);
var inst_29362 = (state_29402[(9)]);
var inst_29353 = (state_29402[(10)]);
var inst_29379 = cljs.core.empty_QMARK_.call(null,inst_29353);
var inst_29380 = inst_29354.call(null,inst_29362);
var inst_29381 = cljs.core.not.call(null,inst_29380);
var inst_29382 = (inst_29379) && (inst_29381);
var state_29402__$1 = state_29402;
var statearr_29452_29507 = state_29402__$1;
(statearr_29452_29507[(2)] = inst_29382);

(statearr_29452_29507[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (10))){
var inst_29304 = (state_29402[(8)]);
var inst_29325 = (state_29402[(2)]);
var inst_29326 = cljs.core.get.call(null,inst_29325,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29327 = cljs.core.get.call(null,inst_29325,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29328 = cljs.core.get.call(null,inst_29325,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29329 = inst_29304;
var state_29402__$1 = (function (){var statearr_29453 = state_29402;
(statearr_29453[(16)] = inst_29327);

(statearr_29453[(17)] = inst_29328);

(statearr_29453[(7)] = inst_29329);

(statearr_29453[(18)] = inst_29326);

return statearr_29453;
})();
var statearr_29454_29508 = state_29402__$1;
(statearr_29454_29508[(2)] = null);

(statearr_29454_29508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (18))){
var inst_29344 = (state_29402[(2)]);
var state_29402__$1 = state_29402;
var statearr_29455_29509 = state_29402__$1;
(statearr_29455_29509[(2)] = inst_29344);

(statearr_29455_29509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (37))){
var state_29402__$1 = state_29402;
var statearr_29456_29510 = state_29402__$1;
(statearr_29456_29510[(2)] = null);

(statearr_29456_29510[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29403 === (8))){
var inst_29304 = (state_29402[(8)]);
var inst_29322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29304);
var state_29402__$1 = state_29402;
var statearr_29457_29511 = state_29402__$1;
(statearr_29457_29511[(2)] = inst_29322);

(statearr_29457_29511[(1)] = (10));


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
});})(c__27698__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27586__auto__,c__27698__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27587__auto__ = null;
var cljs$core$async$mix_$_state_machine__27587__auto____0 = (function (){
var statearr_29461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29461[(0)] = cljs$core$async$mix_$_state_machine__27587__auto__);

(statearr_29461[(1)] = (1));

return statearr_29461;
});
var cljs$core$async$mix_$_state_machine__27587__auto____1 = (function (state_29402){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_29402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e29462){if((e29462 instanceof Object)){
var ex__27590__auto__ = e29462;
var statearr_29463_29512 = state_29402;
(statearr_29463_29512[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29513 = state_29402;
state_29402 = G__29513;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27587__auto__ = function(state_29402){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27587__auto____1.call(this,state_29402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27587__auto____0;
cljs$core$async$mix_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27587__auto____1;
return cljs$core$async$mix_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27700__auto__ = (function (){var statearr_29464 = f__27699__auto__.call(null);
(statearr_29464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___29465);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26160__auto__ = (((p == null))?null:p);
var m__26161__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26161__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26160__auto__ = (((p == null))?null:p);
var m__26161__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,p,v,ch);
} else {
var m__26161__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29514 = [];
var len__26601__auto___29517 = arguments.length;
var i__26602__auto___29518 = (0);
while(true){
if((i__26602__auto___29518 < len__26601__auto___29517)){
args29514.push((arguments[i__26602__auto___29518]));

var G__29519 = (i__26602__auto___29518 + (1));
i__26602__auto___29518 = G__29519;
continue;
} else {
}
break;
}

var G__29516 = args29514.length;
switch (G__29516) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29514.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26160__auto__ = (((p == null))?null:p);
var m__26161__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,p);
} else {
var m__26161__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26160__auto__ = (((p == null))?null:p);
var m__26161__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26160__auto__)]);
if(!((m__26161__auto__ == null))){
return m__26161__auto__.call(null,p,v);
} else {
var m__26161__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26161__auto____$1 == null))){
return m__26161__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29522 = [];
var len__26601__auto___29647 = arguments.length;
var i__26602__auto___29648 = (0);
while(true){
if((i__26602__auto___29648 < len__26601__auto___29647)){
args29522.push((arguments[i__26602__auto___29648]));

var G__29649 = (i__26602__auto___29648 + (1));
i__26602__auto___29648 = G__29649;
continue;
} else {
}
break;
}

var G__29524 = args29522.length;
switch (G__29524) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29522.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25492__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25492__auto__,mults){
return (function (p1__29521_SHARP_){
if(cljs.core.truth_(p1__29521_SHARP_.call(null,topic))){
return p1__29521_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29521_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25492__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29525 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29526){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29526 = meta29526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29527,meta29526__$1){
var self__ = this;
var _29527__$1 = this;
return (new cljs.core.async.t_cljs$core$async29525(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29526__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29527){
var self__ = this;
var _29527__$1 = this;
return self__.meta29526;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29526","meta29526",-1613379009,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29525";

cljs.core.async.t_cljs$core$async29525.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async29525");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29525 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29525(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29526){
return (new cljs.core.async.t_cljs$core$async29525(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29526));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29525(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27698__auto___29651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___29651,mults,ensure_mult,p){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___29651,mults,ensure_mult,p){
return (function (state_29599){
var state_val_29600 = (state_29599[(1)]);
if((state_val_29600 === (7))){
var inst_29595 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29601_29652 = state_29599__$1;
(statearr_29601_29652[(2)] = inst_29595);

(statearr_29601_29652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (20))){
var state_29599__$1 = state_29599;
var statearr_29602_29653 = state_29599__$1;
(statearr_29602_29653[(2)] = null);

(statearr_29602_29653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (1))){
var state_29599__$1 = state_29599;
var statearr_29603_29654 = state_29599__$1;
(statearr_29603_29654[(2)] = null);

(statearr_29603_29654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (24))){
var inst_29578 = (state_29599[(7)]);
var inst_29587 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29578);
var state_29599__$1 = state_29599;
var statearr_29604_29655 = state_29599__$1;
(statearr_29604_29655[(2)] = inst_29587);

(statearr_29604_29655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (4))){
var inst_29530 = (state_29599[(8)]);
var inst_29530__$1 = (state_29599[(2)]);
var inst_29531 = (inst_29530__$1 == null);
var state_29599__$1 = (function (){var statearr_29605 = state_29599;
(statearr_29605[(8)] = inst_29530__$1);

return statearr_29605;
})();
if(cljs.core.truth_(inst_29531)){
var statearr_29606_29656 = state_29599__$1;
(statearr_29606_29656[(1)] = (5));

} else {
var statearr_29607_29657 = state_29599__$1;
(statearr_29607_29657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (15))){
var inst_29572 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29608_29658 = state_29599__$1;
(statearr_29608_29658[(2)] = inst_29572);

(statearr_29608_29658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (21))){
var inst_29592 = (state_29599[(2)]);
var state_29599__$1 = (function (){var statearr_29609 = state_29599;
(statearr_29609[(9)] = inst_29592);

return statearr_29609;
})();
var statearr_29610_29659 = state_29599__$1;
(statearr_29610_29659[(2)] = null);

(statearr_29610_29659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (13))){
var inst_29554 = (state_29599[(10)]);
var inst_29556 = cljs.core.chunked_seq_QMARK_.call(null,inst_29554);
var state_29599__$1 = state_29599;
if(inst_29556){
var statearr_29611_29660 = state_29599__$1;
(statearr_29611_29660[(1)] = (16));

} else {
var statearr_29612_29661 = state_29599__$1;
(statearr_29612_29661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (22))){
var inst_29584 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
if(cljs.core.truth_(inst_29584)){
var statearr_29613_29662 = state_29599__$1;
(statearr_29613_29662[(1)] = (23));

} else {
var statearr_29614_29663 = state_29599__$1;
(statearr_29614_29663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (6))){
var inst_29530 = (state_29599[(8)]);
var inst_29578 = (state_29599[(7)]);
var inst_29580 = (state_29599[(11)]);
var inst_29578__$1 = topic_fn.call(null,inst_29530);
var inst_29579 = cljs.core.deref.call(null,mults);
var inst_29580__$1 = cljs.core.get.call(null,inst_29579,inst_29578__$1);
var state_29599__$1 = (function (){var statearr_29615 = state_29599;
(statearr_29615[(7)] = inst_29578__$1);

(statearr_29615[(11)] = inst_29580__$1);

return statearr_29615;
})();
if(cljs.core.truth_(inst_29580__$1)){
var statearr_29616_29664 = state_29599__$1;
(statearr_29616_29664[(1)] = (19));

} else {
var statearr_29617_29665 = state_29599__$1;
(statearr_29617_29665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (25))){
var inst_29589 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29618_29666 = state_29599__$1;
(statearr_29618_29666[(2)] = inst_29589);

(statearr_29618_29666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (17))){
var inst_29554 = (state_29599[(10)]);
var inst_29563 = cljs.core.first.call(null,inst_29554);
var inst_29564 = cljs.core.async.muxch_STAR_.call(null,inst_29563);
var inst_29565 = cljs.core.async.close_BANG_.call(null,inst_29564);
var inst_29566 = cljs.core.next.call(null,inst_29554);
var inst_29540 = inst_29566;
var inst_29541 = null;
var inst_29542 = (0);
var inst_29543 = (0);
var state_29599__$1 = (function (){var statearr_29619 = state_29599;
(statearr_29619[(12)] = inst_29565);

(statearr_29619[(13)] = inst_29542);

(statearr_29619[(14)] = inst_29543);

(statearr_29619[(15)] = inst_29540);

(statearr_29619[(16)] = inst_29541);

return statearr_29619;
})();
var statearr_29620_29667 = state_29599__$1;
(statearr_29620_29667[(2)] = null);

(statearr_29620_29667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (3))){
var inst_29597 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29599__$1,inst_29597);
} else {
if((state_val_29600 === (12))){
var inst_29574 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29621_29668 = state_29599__$1;
(statearr_29621_29668[(2)] = inst_29574);

(statearr_29621_29668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (2))){
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29599__$1,(4),ch);
} else {
if((state_val_29600 === (23))){
var state_29599__$1 = state_29599;
var statearr_29622_29669 = state_29599__$1;
(statearr_29622_29669[(2)] = null);

(statearr_29622_29669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (19))){
var inst_29530 = (state_29599[(8)]);
var inst_29580 = (state_29599[(11)]);
var inst_29582 = cljs.core.async.muxch_STAR_.call(null,inst_29580);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29599__$1,(22),inst_29582,inst_29530);
} else {
if((state_val_29600 === (11))){
var inst_29554 = (state_29599[(10)]);
var inst_29540 = (state_29599[(15)]);
var inst_29554__$1 = cljs.core.seq.call(null,inst_29540);
var state_29599__$1 = (function (){var statearr_29623 = state_29599;
(statearr_29623[(10)] = inst_29554__$1);

return statearr_29623;
})();
if(inst_29554__$1){
var statearr_29624_29670 = state_29599__$1;
(statearr_29624_29670[(1)] = (13));

} else {
var statearr_29625_29671 = state_29599__$1;
(statearr_29625_29671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (9))){
var inst_29576 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29626_29672 = state_29599__$1;
(statearr_29626_29672[(2)] = inst_29576);

(statearr_29626_29672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (5))){
var inst_29537 = cljs.core.deref.call(null,mults);
var inst_29538 = cljs.core.vals.call(null,inst_29537);
var inst_29539 = cljs.core.seq.call(null,inst_29538);
var inst_29540 = inst_29539;
var inst_29541 = null;
var inst_29542 = (0);
var inst_29543 = (0);
var state_29599__$1 = (function (){var statearr_29627 = state_29599;
(statearr_29627[(13)] = inst_29542);

(statearr_29627[(14)] = inst_29543);

(statearr_29627[(15)] = inst_29540);

(statearr_29627[(16)] = inst_29541);

return statearr_29627;
})();
var statearr_29628_29673 = state_29599__$1;
(statearr_29628_29673[(2)] = null);

(statearr_29628_29673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (14))){
var state_29599__$1 = state_29599;
var statearr_29632_29674 = state_29599__$1;
(statearr_29632_29674[(2)] = null);

(statearr_29632_29674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (16))){
var inst_29554 = (state_29599[(10)]);
var inst_29558 = cljs.core.chunk_first.call(null,inst_29554);
var inst_29559 = cljs.core.chunk_rest.call(null,inst_29554);
var inst_29560 = cljs.core.count.call(null,inst_29558);
var inst_29540 = inst_29559;
var inst_29541 = inst_29558;
var inst_29542 = inst_29560;
var inst_29543 = (0);
var state_29599__$1 = (function (){var statearr_29633 = state_29599;
(statearr_29633[(13)] = inst_29542);

(statearr_29633[(14)] = inst_29543);

(statearr_29633[(15)] = inst_29540);

(statearr_29633[(16)] = inst_29541);

return statearr_29633;
})();
var statearr_29634_29675 = state_29599__$1;
(statearr_29634_29675[(2)] = null);

(statearr_29634_29675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (10))){
var inst_29542 = (state_29599[(13)]);
var inst_29543 = (state_29599[(14)]);
var inst_29540 = (state_29599[(15)]);
var inst_29541 = (state_29599[(16)]);
var inst_29548 = cljs.core._nth.call(null,inst_29541,inst_29543);
var inst_29549 = cljs.core.async.muxch_STAR_.call(null,inst_29548);
var inst_29550 = cljs.core.async.close_BANG_.call(null,inst_29549);
var inst_29551 = (inst_29543 + (1));
var tmp29629 = inst_29542;
var tmp29630 = inst_29540;
var tmp29631 = inst_29541;
var inst_29540__$1 = tmp29630;
var inst_29541__$1 = tmp29631;
var inst_29542__$1 = tmp29629;
var inst_29543__$1 = inst_29551;
var state_29599__$1 = (function (){var statearr_29635 = state_29599;
(statearr_29635[(17)] = inst_29550);

(statearr_29635[(13)] = inst_29542__$1);

(statearr_29635[(14)] = inst_29543__$1);

(statearr_29635[(15)] = inst_29540__$1);

(statearr_29635[(16)] = inst_29541__$1);

return statearr_29635;
})();
var statearr_29636_29676 = state_29599__$1;
(statearr_29636_29676[(2)] = null);

(statearr_29636_29676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (18))){
var inst_29569 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29637_29677 = state_29599__$1;
(statearr_29637_29677[(2)] = inst_29569);

(statearr_29637_29677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (8))){
var inst_29542 = (state_29599[(13)]);
var inst_29543 = (state_29599[(14)]);
var inst_29545 = (inst_29543 < inst_29542);
var inst_29546 = inst_29545;
var state_29599__$1 = state_29599;
if(cljs.core.truth_(inst_29546)){
var statearr_29638_29678 = state_29599__$1;
(statearr_29638_29678[(1)] = (10));

} else {
var statearr_29639_29679 = state_29599__$1;
(statearr_29639_29679[(1)] = (11));

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
});})(c__27698__auto___29651,mults,ensure_mult,p))
;
return ((function (switch__27586__auto__,c__27698__auto___29651,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_29643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29643[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_29643[(1)] = (1));

return statearr_29643;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_29599){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_29599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e29644){if((e29644 instanceof Object)){
var ex__27590__auto__ = e29644;
var statearr_29645_29680 = state_29599;
(statearr_29645_29680[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29681 = state_29599;
state_29599 = G__29681;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_29599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_29599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___29651,mults,ensure_mult,p))
})();
var state__27700__auto__ = (function (){var statearr_29646 = f__27699__auto__.call(null);
(statearr_29646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___29651);

return statearr_29646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___29651,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29682 = [];
var len__26601__auto___29685 = arguments.length;
var i__26602__auto___29686 = (0);
while(true){
if((i__26602__auto___29686 < len__26601__auto___29685)){
args29682.push((arguments[i__26602__auto___29686]));

var G__29687 = (i__26602__auto___29686 + (1));
i__26602__auto___29686 = G__29687;
continue;
} else {
}
break;
}

var G__29684 = args29682.length;
switch (G__29684) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29682.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29689 = [];
var len__26601__auto___29692 = arguments.length;
var i__26602__auto___29693 = (0);
while(true){
if((i__26602__auto___29693 < len__26601__auto___29692)){
args29689.push((arguments[i__26602__auto___29693]));

var G__29694 = (i__26602__auto___29693 + (1));
i__26602__auto___29693 = G__29694;
continue;
} else {
}
break;
}

var G__29691 = args29689.length;
switch (G__29691) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29689.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29696 = [];
var len__26601__auto___29767 = arguments.length;
var i__26602__auto___29768 = (0);
while(true){
if((i__26602__auto___29768 < len__26601__auto___29767)){
args29696.push((arguments[i__26602__auto___29768]));

var G__29769 = (i__26602__auto___29768 + (1));
i__26602__auto___29768 = G__29769;
continue;
} else {
}
break;
}

var G__29698 = args29696.length;
switch (G__29698) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29696.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__27698__auto___29771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___29771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___29771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29737){
var state_val_29738 = (state_29737[(1)]);
if((state_val_29738 === (7))){
var state_29737__$1 = state_29737;
var statearr_29739_29772 = state_29737__$1;
(statearr_29739_29772[(2)] = null);

(statearr_29739_29772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (1))){
var state_29737__$1 = state_29737;
var statearr_29740_29773 = state_29737__$1;
(statearr_29740_29773[(2)] = null);

(statearr_29740_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (4))){
var inst_29701 = (state_29737[(7)]);
var inst_29703 = (inst_29701 < cnt);
var state_29737__$1 = state_29737;
if(cljs.core.truth_(inst_29703)){
var statearr_29741_29774 = state_29737__$1;
(statearr_29741_29774[(1)] = (6));

} else {
var statearr_29742_29775 = state_29737__$1;
(statearr_29742_29775[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (15))){
var inst_29733 = (state_29737[(2)]);
var state_29737__$1 = state_29737;
var statearr_29743_29776 = state_29737__$1;
(statearr_29743_29776[(2)] = inst_29733);

(statearr_29743_29776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (13))){
var inst_29726 = cljs.core.async.close_BANG_.call(null,out);
var state_29737__$1 = state_29737;
var statearr_29744_29777 = state_29737__$1;
(statearr_29744_29777[(2)] = inst_29726);

(statearr_29744_29777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (6))){
var state_29737__$1 = state_29737;
var statearr_29745_29778 = state_29737__$1;
(statearr_29745_29778[(2)] = null);

(statearr_29745_29778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (3))){
var inst_29735 = (state_29737[(2)]);
var state_29737__$1 = state_29737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29737__$1,inst_29735);
} else {
if((state_val_29738 === (12))){
var inst_29723 = (state_29737[(8)]);
var inst_29723__$1 = (state_29737[(2)]);
var inst_29724 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29723__$1);
var state_29737__$1 = (function (){var statearr_29746 = state_29737;
(statearr_29746[(8)] = inst_29723__$1);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29724)){
var statearr_29747_29779 = state_29737__$1;
(statearr_29747_29779[(1)] = (13));

} else {
var statearr_29748_29780 = state_29737__$1;
(statearr_29748_29780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (2))){
var inst_29700 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29701 = (0);
var state_29737__$1 = (function (){var statearr_29749 = state_29737;
(statearr_29749[(7)] = inst_29701);

(statearr_29749[(9)] = inst_29700);

return statearr_29749;
})();
var statearr_29750_29781 = state_29737__$1;
(statearr_29750_29781[(2)] = null);

(statearr_29750_29781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (11))){
var inst_29701 = (state_29737[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29737,(10),Object,null,(9));
var inst_29710 = chs__$1.call(null,inst_29701);
var inst_29711 = done.call(null,inst_29701);
var inst_29712 = cljs.core.async.take_BANG_.call(null,inst_29710,inst_29711);
var state_29737__$1 = state_29737;
var statearr_29751_29782 = state_29737__$1;
(statearr_29751_29782[(2)] = inst_29712);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29737__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (9))){
var inst_29701 = (state_29737[(7)]);
var inst_29714 = (state_29737[(2)]);
var inst_29715 = (inst_29701 + (1));
var inst_29701__$1 = inst_29715;
var state_29737__$1 = (function (){var statearr_29752 = state_29737;
(statearr_29752[(10)] = inst_29714);

(statearr_29752[(7)] = inst_29701__$1);

return statearr_29752;
})();
var statearr_29753_29783 = state_29737__$1;
(statearr_29753_29783[(2)] = null);

(statearr_29753_29783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (5))){
var inst_29721 = (state_29737[(2)]);
var state_29737__$1 = (function (){var statearr_29754 = state_29737;
(statearr_29754[(11)] = inst_29721);

return statearr_29754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29737__$1,(12),dchan);
} else {
if((state_val_29738 === (14))){
var inst_29723 = (state_29737[(8)]);
var inst_29728 = cljs.core.apply.call(null,f,inst_29723);
var state_29737__$1 = state_29737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29737__$1,(16),out,inst_29728);
} else {
if((state_val_29738 === (16))){
var inst_29730 = (state_29737[(2)]);
var state_29737__$1 = (function (){var statearr_29755 = state_29737;
(statearr_29755[(12)] = inst_29730);

return statearr_29755;
})();
var statearr_29756_29784 = state_29737__$1;
(statearr_29756_29784[(2)] = null);

(statearr_29756_29784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (10))){
var inst_29705 = (state_29737[(2)]);
var inst_29706 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29737__$1 = (function (){var statearr_29757 = state_29737;
(statearr_29757[(13)] = inst_29705);

return statearr_29757;
})();
var statearr_29758_29785 = state_29737__$1;
(statearr_29758_29785[(2)] = inst_29706);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29737__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29738 === (8))){
var inst_29719 = (state_29737[(2)]);
var state_29737__$1 = state_29737;
var statearr_29759_29786 = state_29737__$1;
(statearr_29759_29786[(2)] = inst_29719);

(statearr_29759_29786[(1)] = (5));


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
});})(c__27698__auto___29771,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27586__auto__,c__27698__auto___29771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_29763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29763[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_29763[(1)] = (1));

return statearr_29763;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_29737){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_29737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e29764){if((e29764 instanceof Object)){
var ex__27590__auto__ = e29764;
var statearr_29765_29787 = state_29737;
(statearr_29765_29787[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29788 = state_29737;
state_29737 = G__29788;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_29737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_29737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___29771,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27700__auto__ = (function (){var statearr_29766 = f__27699__auto__.call(null);
(statearr_29766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___29771);

return statearr_29766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___29771,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29790 = [];
var len__26601__auto___29848 = arguments.length;
var i__26602__auto___29849 = (0);
while(true){
if((i__26602__auto___29849 < len__26601__auto___29848)){
args29790.push((arguments[i__26602__auto___29849]));

var G__29850 = (i__26602__auto___29849 + (1));
i__26602__auto___29849 = G__29850;
continue;
} else {
}
break;
}

var G__29792 = args29790.length;
switch (G__29792) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29790.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27698__auto___29852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___29852,out){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___29852,out){
return (function (state_29824){
var state_val_29825 = (state_29824[(1)]);
if((state_val_29825 === (7))){
var inst_29804 = (state_29824[(7)]);
var inst_29803 = (state_29824[(8)]);
var inst_29803__$1 = (state_29824[(2)]);
var inst_29804__$1 = cljs.core.nth.call(null,inst_29803__$1,(0),null);
var inst_29805 = cljs.core.nth.call(null,inst_29803__$1,(1),null);
var inst_29806 = (inst_29804__$1 == null);
var state_29824__$1 = (function (){var statearr_29826 = state_29824;
(statearr_29826[(9)] = inst_29805);

(statearr_29826[(7)] = inst_29804__$1);

(statearr_29826[(8)] = inst_29803__$1);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29806)){
var statearr_29827_29853 = state_29824__$1;
(statearr_29827_29853[(1)] = (8));

} else {
var statearr_29828_29854 = state_29824__$1;
(statearr_29828_29854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (1))){
var inst_29793 = cljs.core.vec.call(null,chs);
var inst_29794 = inst_29793;
var state_29824__$1 = (function (){var statearr_29829 = state_29824;
(statearr_29829[(10)] = inst_29794);

return statearr_29829;
})();
var statearr_29830_29855 = state_29824__$1;
(statearr_29830_29855[(2)] = null);

(statearr_29830_29855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (4))){
var inst_29794 = (state_29824[(10)]);
var state_29824__$1 = state_29824;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29824__$1,(7),inst_29794);
} else {
if((state_val_29825 === (6))){
var inst_29820 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29831_29856 = state_29824__$1;
(statearr_29831_29856[(2)] = inst_29820);

(statearr_29831_29856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (3))){
var inst_29822 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29824__$1,inst_29822);
} else {
if((state_val_29825 === (2))){
var inst_29794 = (state_29824[(10)]);
var inst_29796 = cljs.core.count.call(null,inst_29794);
var inst_29797 = (inst_29796 > (0));
var state_29824__$1 = state_29824;
if(cljs.core.truth_(inst_29797)){
var statearr_29833_29857 = state_29824__$1;
(statearr_29833_29857[(1)] = (4));

} else {
var statearr_29834_29858 = state_29824__$1;
(statearr_29834_29858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (11))){
var inst_29794 = (state_29824[(10)]);
var inst_29813 = (state_29824[(2)]);
var tmp29832 = inst_29794;
var inst_29794__$1 = tmp29832;
var state_29824__$1 = (function (){var statearr_29835 = state_29824;
(statearr_29835[(11)] = inst_29813);

(statearr_29835[(10)] = inst_29794__$1);

return statearr_29835;
})();
var statearr_29836_29859 = state_29824__$1;
(statearr_29836_29859[(2)] = null);

(statearr_29836_29859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (9))){
var inst_29804 = (state_29824[(7)]);
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29824__$1,(11),out,inst_29804);
} else {
if((state_val_29825 === (5))){
var inst_29818 = cljs.core.async.close_BANG_.call(null,out);
var state_29824__$1 = state_29824;
var statearr_29837_29860 = state_29824__$1;
(statearr_29837_29860[(2)] = inst_29818);

(statearr_29837_29860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (10))){
var inst_29816 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29838_29861 = state_29824__$1;
(statearr_29838_29861[(2)] = inst_29816);

(statearr_29838_29861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (8))){
var inst_29805 = (state_29824[(9)]);
var inst_29804 = (state_29824[(7)]);
var inst_29803 = (state_29824[(8)]);
var inst_29794 = (state_29824[(10)]);
var inst_29808 = (function (){var cs = inst_29794;
var vec__29799 = inst_29803;
var v = inst_29804;
var c = inst_29805;
return ((function (cs,vec__29799,v,c,inst_29805,inst_29804,inst_29803,inst_29794,state_val_29825,c__27698__auto___29852,out){
return (function (p1__29789_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29789_SHARP_);
});
;})(cs,vec__29799,v,c,inst_29805,inst_29804,inst_29803,inst_29794,state_val_29825,c__27698__auto___29852,out))
})();
var inst_29809 = cljs.core.filterv.call(null,inst_29808,inst_29794);
var inst_29794__$1 = inst_29809;
var state_29824__$1 = (function (){var statearr_29839 = state_29824;
(statearr_29839[(10)] = inst_29794__$1);

return statearr_29839;
})();
var statearr_29840_29862 = state_29824__$1;
(statearr_29840_29862[(2)] = null);

(statearr_29840_29862[(1)] = (2));


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
});})(c__27698__auto___29852,out))
;
return ((function (switch__27586__auto__,c__27698__auto___29852,out){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_29844 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29844[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_29844[(1)] = (1));

return statearr_29844;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_29824){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_29824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e29845){if((e29845 instanceof Object)){
var ex__27590__auto__ = e29845;
var statearr_29846_29863 = state_29824;
(statearr_29846_29863[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29864 = state_29824;
state_29824 = G__29864;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_29824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_29824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___29852,out))
})();
var state__27700__auto__ = (function (){var statearr_29847 = f__27699__auto__.call(null);
(statearr_29847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___29852);

return statearr_29847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___29852,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29865 = [];
var len__26601__auto___29914 = arguments.length;
var i__26602__auto___29915 = (0);
while(true){
if((i__26602__auto___29915 < len__26601__auto___29914)){
args29865.push((arguments[i__26602__auto___29915]));

var G__29916 = (i__26602__auto___29915 + (1));
i__26602__auto___29915 = G__29916;
continue;
} else {
}
break;
}

var G__29867 = args29865.length;
switch (G__29867) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29865.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27698__auto___29918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___29918,out){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___29918,out){
return (function (state_29891){
var state_val_29892 = (state_29891[(1)]);
if((state_val_29892 === (7))){
var inst_29873 = (state_29891[(7)]);
var inst_29873__$1 = (state_29891[(2)]);
var inst_29874 = (inst_29873__$1 == null);
var inst_29875 = cljs.core.not.call(null,inst_29874);
var state_29891__$1 = (function (){var statearr_29893 = state_29891;
(statearr_29893[(7)] = inst_29873__$1);

return statearr_29893;
})();
if(inst_29875){
var statearr_29894_29919 = state_29891__$1;
(statearr_29894_29919[(1)] = (8));

} else {
var statearr_29895_29920 = state_29891__$1;
(statearr_29895_29920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (1))){
var inst_29868 = (0);
var state_29891__$1 = (function (){var statearr_29896 = state_29891;
(statearr_29896[(8)] = inst_29868);

return statearr_29896;
})();
var statearr_29897_29921 = state_29891__$1;
(statearr_29897_29921[(2)] = null);

(statearr_29897_29921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (4))){
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29891__$1,(7),ch);
} else {
if((state_val_29892 === (6))){
var inst_29886 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29898_29922 = state_29891__$1;
(statearr_29898_29922[(2)] = inst_29886);

(statearr_29898_29922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (3))){
var inst_29888 = (state_29891[(2)]);
var inst_29889 = cljs.core.async.close_BANG_.call(null,out);
var state_29891__$1 = (function (){var statearr_29899 = state_29891;
(statearr_29899[(9)] = inst_29888);

return statearr_29899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29891__$1,inst_29889);
} else {
if((state_val_29892 === (2))){
var inst_29868 = (state_29891[(8)]);
var inst_29870 = (inst_29868 < n);
var state_29891__$1 = state_29891;
if(cljs.core.truth_(inst_29870)){
var statearr_29900_29923 = state_29891__$1;
(statearr_29900_29923[(1)] = (4));

} else {
var statearr_29901_29924 = state_29891__$1;
(statearr_29901_29924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (11))){
var inst_29868 = (state_29891[(8)]);
var inst_29878 = (state_29891[(2)]);
var inst_29879 = (inst_29868 + (1));
var inst_29868__$1 = inst_29879;
var state_29891__$1 = (function (){var statearr_29902 = state_29891;
(statearr_29902[(10)] = inst_29878);

(statearr_29902[(8)] = inst_29868__$1);

return statearr_29902;
})();
var statearr_29903_29925 = state_29891__$1;
(statearr_29903_29925[(2)] = null);

(statearr_29903_29925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (9))){
var state_29891__$1 = state_29891;
var statearr_29904_29926 = state_29891__$1;
(statearr_29904_29926[(2)] = null);

(statearr_29904_29926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (5))){
var state_29891__$1 = state_29891;
var statearr_29905_29927 = state_29891__$1;
(statearr_29905_29927[(2)] = null);

(statearr_29905_29927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (10))){
var inst_29883 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29906_29928 = state_29891__$1;
(statearr_29906_29928[(2)] = inst_29883);

(statearr_29906_29928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (8))){
var inst_29873 = (state_29891[(7)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29891__$1,(11),out,inst_29873);
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
});})(c__27698__auto___29918,out))
;
return ((function (switch__27586__auto__,c__27698__auto___29918,out){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_29910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29910[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_29910[(1)] = (1));

return statearr_29910;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_29891){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_29891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e29911){if((e29911 instanceof Object)){
var ex__27590__auto__ = e29911;
var statearr_29912_29929 = state_29891;
(statearr_29912_29929[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29930 = state_29891;
state_29891 = G__29930;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_29891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_29891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___29918,out))
})();
var state__27700__auto__ = (function (){var statearr_29913 = f__27699__auto__.call(null);
(statearr_29913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___29918);

return statearr_29913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___29918,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29938 = (function (f,ch,meta29939){
this.f = f;
this.ch = ch;
this.meta29939 = meta29939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29940,meta29939__$1){
var self__ = this;
var _29940__$1 = this;
return (new cljs.core.async.t_cljs$core$async29938(self__.f,self__.ch,meta29939__$1));
});

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29940){
var self__ = this;
var _29940__$1 = this;
return self__.meta29939;
});

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29941 = (function (f,ch,meta29939,_,fn1,meta29942){
this.f = f;
this.ch = ch;
this.meta29939 = meta29939;
this._ = _;
this.fn1 = fn1;
this.meta29942 = meta29942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29943,meta29942__$1){
var self__ = this;
var _29943__$1 = this;
return (new cljs.core.async.t_cljs$core$async29941(self__.f,self__.ch,self__.meta29939,self__._,self__.fn1,meta29942__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29943){
var self__ = this;
var _29943__$1 = this;
return self__.meta29942;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29931_SHARP_){
return f1.call(null,(((p1__29931_SHARP_ == null))?null:self__.f.call(null,p1__29931_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29941.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29939","meta29939",1545236643,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29938","cljs.core.async/t_cljs$core$async29938",96882978,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29942","meta29942",-57588837,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29941";

cljs.core.async.t_cljs$core$async29941.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async29941");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29941 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29941(f__$1,ch__$1,meta29939__$1,___$2,fn1__$1,meta29942){
return (new cljs.core.async.t_cljs$core$async29941(f__$1,ch__$1,meta29939__$1,___$2,fn1__$1,meta29942));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29941(self__.f,self__.ch,self__.meta29939,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25480__auto__ = ret;
if(cljs.core.truth_(and__25480__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25480__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29939","meta29939",1545236643,null)], null);
});

cljs.core.async.t_cljs$core$async29938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29938";

cljs.core.async.t_cljs$core$async29938.cljs$lang$ctorPrWriter = (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async29938");
});

cljs.core.async.__GT_t_cljs$core$async29938 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29938(f__$1,ch__$1,meta29939){
return (new cljs.core.async.t_cljs$core$async29938(f__$1,ch__$1,meta29939));
});

}

return (new cljs.core.async.t_cljs$core$async29938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29947 = (function (f,ch,meta29948){
this.f = f;
this.ch = ch;
this.meta29948 = meta29948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29949,meta29948__$1){
var self__ = this;
var _29949__$1 = this;
return (new cljs.core.async.t_cljs$core$async29947(self__.f,self__.ch,meta29948__$1));
});

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29949){
var self__ = this;
var _29949__$1 = this;
return self__.meta29948;
});

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29948","meta29948",-1250906329,null)], null);
});

cljs.core.async.t_cljs$core$async29947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29947";

cljs.core.async.t_cljs$core$async29947.cljs$lang$ctorPrWriter = (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async29947");
});

cljs.core.async.__GT_t_cljs$core$async29947 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29947(f__$1,ch__$1,meta29948){
return (new cljs.core.async.t_cljs$core$async29947(f__$1,ch__$1,meta29948));
});

}

return (new cljs.core.async.t_cljs$core$async29947(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29953 = (function (p,ch,meta29954){
this.p = p;
this.ch = ch;
this.meta29954 = meta29954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29955,meta29954__$1){
var self__ = this;
var _29955__$1 = this;
return (new cljs.core.async.t_cljs$core$async29953(self__.p,self__.ch,meta29954__$1));
});

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29955){
var self__ = this;
var _29955__$1 = this;
return self__.meta29954;
});

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29953.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29954","meta29954",-580040038,null)], null);
});

cljs.core.async.t_cljs$core$async29953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29953";

cljs.core.async.t_cljs$core$async29953.cljs$lang$ctorPrWriter = (function (this__26103__auto__,writer__26104__auto__,opt__26105__auto__){
return cljs.core._write.call(null,writer__26104__auto__,"cljs.core.async/t_cljs$core$async29953");
});

cljs.core.async.__GT_t_cljs$core$async29953 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29953(p__$1,ch__$1,meta29954){
return (new cljs.core.async.t_cljs$core$async29953(p__$1,ch__$1,meta29954));
});

}

return (new cljs.core.async.t_cljs$core$async29953(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29956 = [];
var len__26601__auto___30000 = arguments.length;
var i__26602__auto___30001 = (0);
while(true){
if((i__26602__auto___30001 < len__26601__auto___30000)){
args29956.push((arguments[i__26602__auto___30001]));

var G__30002 = (i__26602__auto___30001 + (1));
i__26602__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var G__29958 = args29956.length;
switch (G__29958) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29956.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27698__auto___30004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___30004,out){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___30004,out){
return (function (state_29979){
var state_val_29980 = (state_29979[(1)]);
if((state_val_29980 === (7))){
var inst_29975 = (state_29979[(2)]);
var state_29979__$1 = state_29979;
var statearr_29981_30005 = state_29979__$1;
(statearr_29981_30005[(2)] = inst_29975);

(statearr_29981_30005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (1))){
var state_29979__$1 = state_29979;
var statearr_29982_30006 = state_29979__$1;
(statearr_29982_30006[(2)] = null);

(statearr_29982_30006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (4))){
var inst_29961 = (state_29979[(7)]);
var inst_29961__$1 = (state_29979[(2)]);
var inst_29962 = (inst_29961__$1 == null);
var state_29979__$1 = (function (){var statearr_29983 = state_29979;
(statearr_29983[(7)] = inst_29961__$1);

return statearr_29983;
})();
if(cljs.core.truth_(inst_29962)){
var statearr_29984_30007 = state_29979__$1;
(statearr_29984_30007[(1)] = (5));

} else {
var statearr_29985_30008 = state_29979__$1;
(statearr_29985_30008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (6))){
var inst_29961 = (state_29979[(7)]);
var inst_29966 = p.call(null,inst_29961);
var state_29979__$1 = state_29979;
if(cljs.core.truth_(inst_29966)){
var statearr_29986_30009 = state_29979__$1;
(statearr_29986_30009[(1)] = (8));

} else {
var statearr_29987_30010 = state_29979__$1;
(statearr_29987_30010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (3))){
var inst_29977 = (state_29979[(2)]);
var state_29979__$1 = state_29979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29979__$1,inst_29977);
} else {
if((state_val_29980 === (2))){
var state_29979__$1 = state_29979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29979__$1,(4),ch);
} else {
if((state_val_29980 === (11))){
var inst_29969 = (state_29979[(2)]);
var state_29979__$1 = state_29979;
var statearr_29988_30011 = state_29979__$1;
(statearr_29988_30011[(2)] = inst_29969);

(statearr_29988_30011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (9))){
var state_29979__$1 = state_29979;
var statearr_29989_30012 = state_29979__$1;
(statearr_29989_30012[(2)] = null);

(statearr_29989_30012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (5))){
var inst_29964 = cljs.core.async.close_BANG_.call(null,out);
var state_29979__$1 = state_29979;
var statearr_29990_30013 = state_29979__$1;
(statearr_29990_30013[(2)] = inst_29964);

(statearr_29990_30013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (10))){
var inst_29972 = (state_29979[(2)]);
var state_29979__$1 = (function (){var statearr_29991 = state_29979;
(statearr_29991[(8)] = inst_29972);

return statearr_29991;
})();
var statearr_29992_30014 = state_29979__$1;
(statearr_29992_30014[(2)] = null);

(statearr_29992_30014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (8))){
var inst_29961 = (state_29979[(7)]);
var state_29979__$1 = state_29979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29979__$1,(11),out,inst_29961);
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
});})(c__27698__auto___30004,out))
;
return ((function (switch__27586__auto__,c__27698__auto___30004,out){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_29996 = [null,null,null,null,null,null,null,null,null];
(statearr_29996[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_29996[(1)] = (1));

return statearr_29996;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_29979){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_29979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e29997){if((e29997 instanceof Object)){
var ex__27590__auto__ = e29997;
var statearr_29998_30015 = state_29979;
(statearr_29998_30015[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30016 = state_29979;
state_29979 = G__30016;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_29979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_29979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___30004,out))
})();
var state__27700__auto__ = (function (){var statearr_29999 = f__27699__auto__.call(null);
(statearr_29999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___30004);

return statearr_29999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___30004,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30017 = [];
var len__26601__auto___30020 = arguments.length;
var i__26602__auto___30021 = (0);
while(true){
if((i__26602__auto___30021 < len__26601__auto___30020)){
args30017.push((arguments[i__26602__auto___30021]));

var G__30022 = (i__26602__auto___30021 + (1));
i__26602__auto___30021 = G__30022;
continue;
} else {
}
break;
}

var G__30019 = args30017.length;
switch (G__30019) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30017.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__){
return (function (state_30189){
var state_val_30190 = (state_30189[(1)]);
if((state_val_30190 === (7))){
var inst_30185 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30191_30232 = state_30189__$1;
(statearr_30191_30232[(2)] = inst_30185);

(statearr_30191_30232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (20))){
var inst_30155 = (state_30189[(7)]);
var inst_30166 = (state_30189[(2)]);
var inst_30167 = cljs.core.next.call(null,inst_30155);
var inst_30141 = inst_30167;
var inst_30142 = null;
var inst_30143 = (0);
var inst_30144 = (0);
var state_30189__$1 = (function (){var statearr_30192 = state_30189;
(statearr_30192[(8)] = inst_30142);

(statearr_30192[(9)] = inst_30144);

(statearr_30192[(10)] = inst_30141);

(statearr_30192[(11)] = inst_30143);

(statearr_30192[(12)] = inst_30166);

return statearr_30192;
})();
var statearr_30193_30233 = state_30189__$1;
(statearr_30193_30233[(2)] = null);

(statearr_30193_30233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (1))){
var state_30189__$1 = state_30189;
var statearr_30194_30234 = state_30189__$1;
(statearr_30194_30234[(2)] = null);

(statearr_30194_30234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (4))){
var inst_30130 = (state_30189[(13)]);
var inst_30130__$1 = (state_30189[(2)]);
var inst_30131 = (inst_30130__$1 == null);
var state_30189__$1 = (function (){var statearr_30195 = state_30189;
(statearr_30195[(13)] = inst_30130__$1);

return statearr_30195;
})();
if(cljs.core.truth_(inst_30131)){
var statearr_30196_30235 = state_30189__$1;
(statearr_30196_30235[(1)] = (5));

} else {
var statearr_30197_30236 = state_30189__$1;
(statearr_30197_30236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (15))){
var state_30189__$1 = state_30189;
var statearr_30201_30237 = state_30189__$1;
(statearr_30201_30237[(2)] = null);

(statearr_30201_30237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (21))){
var state_30189__$1 = state_30189;
var statearr_30202_30238 = state_30189__$1;
(statearr_30202_30238[(2)] = null);

(statearr_30202_30238[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (13))){
var inst_30142 = (state_30189[(8)]);
var inst_30144 = (state_30189[(9)]);
var inst_30141 = (state_30189[(10)]);
var inst_30143 = (state_30189[(11)]);
var inst_30151 = (state_30189[(2)]);
var inst_30152 = (inst_30144 + (1));
var tmp30198 = inst_30142;
var tmp30199 = inst_30141;
var tmp30200 = inst_30143;
var inst_30141__$1 = tmp30199;
var inst_30142__$1 = tmp30198;
var inst_30143__$1 = tmp30200;
var inst_30144__$1 = inst_30152;
var state_30189__$1 = (function (){var statearr_30203 = state_30189;
(statearr_30203[(8)] = inst_30142__$1);

(statearr_30203[(9)] = inst_30144__$1);

(statearr_30203[(14)] = inst_30151);

(statearr_30203[(10)] = inst_30141__$1);

(statearr_30203[(11)] = inst_30143__$1);

return statearr_30203;
})();
var statearr_30204_30239 = state_30189__$1;
(statearr_30204_30239[(2)] = null);

(statearr_30204_30239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (22))){
var state_30189__$1 = state_30189;
var statearr_30205_30240 = state_30189__$1;
(statearr_30205_30240[(2)] = null);

(statearr_30205_30240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (6))){
var inst_30130 = (state_30189[(13)]);
var inst_30139 = f.call(null,inst_30130);
var inst_30140 = cljs.core.seq.call(null,inst_30139);
var inst_30141 = inst_30140;
var inst_30142 = null;
var inst_30143 = (0);
var inst_30144 = (0);
var state_30189__$1 = (function (){var statearr_30206 = state_30189;
(statearr_30206[(8)] = inst_30142);

(statearr_30206[(9)] = inst_30144);

(statearr_30206[(10)] = inst_30141);

(statearr_30206[(11)] = inst_30143);

return statearr_30206;
})();
var statearr_30207_30241 = state_30189__$1;
(statearr_30207_30241[(2)] = null);

(statearr_30207_30241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (17))){
var inst_30155 = (state_30189[(7)]);
var inst_30159 = cljs.core.chunk_first.call(null,inst_30155);
var inst_30160 = cljs.core.chunk_rest.call(null,inst_30155);
var inst_30161 = cljs.core.count.call(null,inst_30159);
var inst_30141 = inst_30160;
var inst_30142 = inst_30159;
var inst_30143 = inst_30161;
var inst_30144 = (0);
var state_30189__$1 = (function (){var statearr_30208 = state_30189;
(statearr_30208[(8)] = inst_30142);

(statearr_30208[(9)] = inst_30144);

(statearr_30208[(10)] = inst_30141);

(statearr_30208[(11)] = inst_30143);

return statearr_30208;
})();
var statearr_30209_30242 = state_30189__$1;
(statearr_30209_30242[(2)] = null);

(statearr_30209_30242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (3))){
var inst_30187 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30189__$1,inst_30187);
} else {
if((state_val_30190 === (12))){
var inst_30175 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30210_30243 = state_30189__$1;
(statearr_30210_30243[(2)] = inst_30175);

(statearr_30210_30243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (2))){
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30189__$1,(4),in$);
} else {
if((state_val_30190 === (23))){
var inst_30183 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30211_30244 = state_30189__$1;
(statearr_30211_30244[(2)] = inst_30183);

(statearr_30211_30244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (19))){
var inst_30170 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30212_30245 = state_30189__$1;
(statearr_30212_30245[(2)] = inst_30170);

(statearr_30212_30245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (11))){
var inst_30141 = (state_30189[(10)]);
var inst_30155 = (state_30189[(7)]);
var inst_30155__$1 = cljs.core.seq.call(null,inst_30141);
var state_30189__$1 = (function (){var statearr_30213 = state_30189;
(statearr_30213[(7)] = inst_30155__$1);

return statearr_30213;
})();
if(inst_30155__$1){
var statearr_30214_30246 = state_30189__$1;
(statearr_30214_30246[(1)] = (14));

} else {
var statearr_30215_30247 = state_30189__$1;
(statearr_30215_30247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (9))){
var inst_30177 = (state_30189[(2)]);
var inst_30178 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30189__$1 = (function (){var statearr_30216 = state_30189;
(statearr_30216[(15)] = inst_30177);

return statearr_30216;
})();
if(cljs.core.truth_(inst_30178)){
var statearr_30217_30248 = state_30189__$1;
(statearr_30217_30248[(1)] = (21));

} else {
var statearr_30218_30249 = state_30189__$1;
(statearr_30218_30249[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (5))){
var inst_30133 = cljs.core.async.close_BANG_.call(null,out);
var state_30189__$1 = state_30189;
var statearr_30219_30250 = state_30189__$1;
(statearr_30219_30250[(2)] = inst_30133);

(statearr_30219_30250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (14))){
var inst_30155 = (state_30189[(7)]);
var inst_30157 = cljs.core.chunked_seq_QMARK_.call(null,inst_30155);
var state_30189__$1 = state_30189;
if(inst_30157){
var statearr_30220_30251 = state_30189__$1;
(statearr_30220_30251[(1)] = (17));

} else {
var statearr_30221_30252 = state_30189__$1;
(statearr_30221_30252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (16))){
var inst_30173 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30222_30253 = state_30189__$1;
(statearr_30222_30253[(2)] = inst_30173);

(statearr_30222_30253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (10))){
var inst_30142 = (state_30189[(8)]);
var inst_30144 = (state_30189[(9)]);
var inst_30149 = cljs.core._nth.call(null,inst_30142,inst_30144);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30189__$1,(13),out,inst_30149);
} else {
if((state_val_30190 === (18))){
var inst_30155 = (state_30189[(7)]);
var inst_30164 = cljs.core.first.call(null,inst_30155);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30189__$1,(20),out,inst_30164);
} else {
if((state_val_30190 === (8))){
var inst_30144 = (state_30189[(9)]);
var inst_30143 = (state_30189[(11)]);
var inst_30146 = (inst_30144 < inst_30143);
var inst_30147 = inst_30146;
var state_30189__$1 = state_30189;
if(cljs.core.truth_(inst_30147)){
var statearr_30223_30254 = state_30189__$1;
(statearr_30223_30254[(1)] = (10));

} else {
var statearr_30224_30255 = state_30189__$1;
(statearr_30224_30255[(1)] = (11));

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
});})(c__27698__auto__))
;
return ((function (switch__27586__auto__,c__27698__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27587__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27587__auto____0 = (function (){
var statearr_30228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30228[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27587__auto__);

(statearr_30228[(1)] = (1));

return statearr_30228;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27587__auto____1 = (function (state_30189){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_30189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e30229){if((e30229 instanceof Object)){
var ex__27590__auto__ = e30229;
var statearr_30230_30256 = state_30189;
(statearr_30230_30256[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30257 = state_30189;
state_30189 = G__30257;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27587__auto__ = function(state_30189){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27587__auto____1.call(this,state_30189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27587__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27587__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__))
})();
var state__27700__auto__ = (function (){var statearr_30231 = f__27699__auto__.call(null);
(statearr_30231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_30231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__))
);

return c__27698__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30258 = [];
var len__26601__auto___30261 = arguments.length;
var i__26602__auto___30262 = (0);
while(true){
if((i__26602__auto___30262 < len__26601__auto___30261)){
args30258.push((arguments[i__26602__auto___30262]));

var G__30263 = (i__26602__auto___30262 + (1));
i__26602__auto___30262 = G__30263;
continue;
} else {
}
break;
}

var G__30260 = args30258.length;
switch (G__30260) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30258.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30265 = [];
var len__26601__auto___30268 = arguments.length;
var i__26602__auto___30269 = (0);
while(true){
if((i__26602__auto___30269 < len__26601__auto___30268)){
args30265.push((arguments[i__26602__auto___30269]));

var G__30270 = (i__26602__auto___30269 + (1));
i__26602__auto___30269 = G__30270;
continue;
} else {
}
break;
}

var G__30267 = args30265.length;
switch (G__30267) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30265.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30272 = [];
var len__26601__auto___30323 = arguments.length;
var i__26602__auto___30324 = (0);
while(true){
if((i__26602__auto___30324 < len__26601__auto___30323)){
args30272.push((arguments[i__26602__auto___30324]));

var G__30325 = (i__26602__auto___30324 + (1));
i__26602__auto___30324 = G__30325;
continue;
} else {
}
break;
}

var G__30274 = args30272.length;
switch (G__30274) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30272.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27698__auto___30327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___30327,out){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___30327,out){
return (function (state_30298){
var state_val_30299 = (state_30298[(1)]);
if((state_val_30299 === (7))){
var inst_30293 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30300_30328 = state_30298__$1;
(statearr_30300_30328[(2)] = inst_30293);

(statearr_30300_30328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (1))){
var inst_30275 = null;
var state_30298__$1 = (function (){var statearr_30301 = state_30298;
(statearr_30301[(7)] = inst_30275);

return statearr_30301;
})();
var statearr_30302_30329 = state_30298__$1;
(statearr_30302_30329[(2)] = null);

(statearr_30302_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (4))){
var inst_30278 = (state_30298[(8)]);
var inst_30278__$1 = (state_30298[(2)]);
var inst_30279 = (inst_30278__$1 == null);
var inst_30280 = cljs.core.not.call(null,inst_30279);
var state_30298__$1 = (function (){var statearr_30303 = state_30298;
(statearr_30303[(8)] = inst_30278__$1);

return statearr_30303;
})();
if(inst_30280){
var statearr_30304_30330 = state_30298__$1;
(statearr_30304_30330[(1)] = (5));

} else {
var statearr_30305_30331 = state_30298__$1;
(statearr_30305_30331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (6))){
var state_30298__$1 = state_30298;
var statearr_30306_30332 = state_30298__$1;
(statearr_30306_30332[(2)] = null);

(statearr_30306_30332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (3))){
var inst_30295 = (state_30298[(2)]);
var inst_30296 = cljs.core.async.close_BANG_.call(null,out);
var state_30298__$1 = (function (){var statearr_30307 = state_30298;
(statearr_30307[(9)] = inst_30295);

return statearr_30307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30298__$1,inst_30296);
} else {
if((state_val_30299 === (2))){
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30298__$1,(4),ch);
} else {
if((state_val_30299 === (11))){
var inst_30278 = (state_30298[(8)]);
var inst_30287 = (state_30298[(2)]);
var inst_30275 = inst_30278;
var state_30298__$1 = (function (){var statearr_30308 = state_30298;
(statearr_30308[(10)] = inst_30287);

(statearr_30308[(7)] = inst_30275);

return statearr_30308;
})();
var statearr_30309_30333 = state_30298__$1;
(statearr_30309_30333[(2)] = null);

(statearr_30309_30333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (9))){
var inst_30278 = (state_30298[(8)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30298__$1,(11),out,inst_30278);
} else {
if((state_val_30299 === (5))){
var inst_30278 = (state_30298[(8)]);
var inst_30275 = (state_30298[(7)]);
var inst_30282 = cljs.core._EQ_.call(null,inst_30278,inst_30275);
var state_30298__$1 = state_30298;
if(inst_30282){
var statearr_30311_30334 = state_30298__$1;
(statearr_30311_30334[(1)] = (8));

} else {
var statearr_30312_30335 = state_30298__$1;
(statearr_30312_30335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (10))){
var inst_30290 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30313_30336 = state_30298__$1;
(statearr_30313_30336[(2)] = inst_30290);

(statearr_30313_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (8))){
var inst_30275 = (state_30298[(7)]);
var tmp30310 = inst_30275;
var inst_30275__$1 = tmp30310;
var state_30298__$1 = (function (){var statearr_30314 = state_30298;
(statearr_30314[(7)] = inst_30275__$1);

return statearr_30314;
})();
var statearr_30315_30337 = state_30298__$1;
(statearr_30315_30337[(2)] = null);

(statearr_30315_30337[(1)] = (2));


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
});})(c__27698__auto___30327,out))
;
return ((function (switch__27586__auto__,c__27698__auto___30327,out){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_30319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30319[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_30319[(1)] = (1));

return statearr_30319;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_30298){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_30298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e30320){if((e30320 instanceof Object)){
var ex__27590__auto__ = e30320;
var statearr_30321_30338 = state_30298;
(statearr_30321_30338[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30339 = state_30298;
state_30298 = G__30339;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_30298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_30298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___30327,out))
})();
var state__27700__auto__ = (function (){var statearr_30322 = f__27699__auto__.call(null);
(statearr_30322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___30327);

return statearr_30322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___30327,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30340 = [];
var len__26601__auto___30410 = arguments.length;
var i__26602__auto___30411 = (0);
while(true){
if((i__26602__auto___30411 < len__26601__auto___30410)){
args30340.push((arguments[i__26602__auto___30411]));

var G__30412 = (i__26602__auto___30411 + (1));
i__26602__auto___30411 = G__30412;
continue;
} else {
}
break;
}

var G__30342 = args30340.length;
switch (G__30342) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30340.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27698__auto___30414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___30414,out){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___30414,out){
return (function (state_30380){
var state_val_30381 = (state_30380[(1)]);
if((state_val_30381 === (7))){
var inst_30376 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30382_30415 = state_30380__$1;
(statearr_30382_30415[(2)] = inst_30376);

(statearr_30382_30415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (1))){
var inst_30343 = (new Array(n));
var inst_30344 = inst_30343;
var inst_30345 = (0);
var state_30380__$1 = (function (){var statearr_30383 = state_30380;
(statearr_30383[(7)] = inst_30344);

(statearr_30383[(8)] = inst_30345);

return statearr_30383;
})();
var statearr_30384_30416 = state_30380__$1;
(statearr_30384_30416[(2)] = null);

(statearr_30384_30416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (4))){
var inst_30348 = (state_30380[(9)]);
var inst_30348__$1 = (state_30380[(2)]);
var inst_30349 = (inst_30348__$1 == null);
var inst_30350 = cljs.core.not.call(null,inst_30349);
var state_30380__$1 = (function (){var statearr_30385 = state_30380;
(statearr_30385[(9)] = inst_30348__$1);

return statearr_30385;
})();
if(inst_30350){
var statearr_30386_30417 = state_30380__$1;
(statearr_30386_30417[(1)] = (5));

} else {
var statearr_30387_30418 = state_30380__$1;
(statearr_30387_30418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (15))){
var inst_30370 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30388_30419 = state_30380__$1;
(statearr_30388_30419[(2)] = inst_30370);

(statearr_30388_30419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (13))){
var state_30380__$1 = state_30380;
var statearr_30389_30420 = state_30380__$1;
(statearr_30389_30420[(2)] = null);

(statearr_30389_30420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (6))){
var inst_30345 = (state_30380[(8)]);
var inst_30366 = (inst_30345 > (0));
var state_30380__$1 = state_30380;
if(cljs.core.truth_(inst_30366)){
var statearr_30390_30421 = state_30380__$1;
(statearr_30390_30421[(1)] = (12));

} else {
var statearr_30391_30422 = state_30380__$1;
(statearr_30391_30422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (3))){
var inst_30378 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30380__$1,inst_30378);
} else {
if((state_val_30381 === (12))){
var inst_30344 = (state_30380[(7)]);
var inst_30368 = cljs.core.vec.call(null,inst_30344);
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30380__$1,(15),out,inst_30368);
} else {
if((state_val_30381 === (2))){
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30380__$1,(4),ch);
} else {
if((state_val_30381 === (11))){
var inst_30360 = (state_30380[(2)]);
var inst_30361 = (new Array(n));
var inst_30344 = inst_30361;
var inst_30345 = (0);
var state_30380__$1 = (function (){var statearr_30392 = state_30380;
(statearr_30392[(7)] = inst_30344);

(statearr_30392[(8)] = inst_30345);

(statearr_30392[(10)] = inst_30360);

return statearr_30392;
})();
var statearr_30393_30423 = state_30380__$1;
(statearr_30393_30423[(2)] = null);

(statearr_30393_30423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (9))){
var inst_30344 = (state_30380[(7)]);
var inst_30358 = cljs.core.vec.call(null,inst_30344);
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30380__$1,(11),out,inst_30358);
} else {
if((state_val_30381 === (5))){
var inst_30344 = (state_30380[(7)]);
var inst_30348 = (state_30380[(9)]);
var inst_30345 = (state_30380[(8)]);
var inst_30353 = (state_30380[(11)]);
var inst_30352 = (inst_30344[inst_30345] = inst_30348);
var inst_30353__$1 = (inst_30345 + (1));
var inst_30354 = (inst_30353__$1 < n);
var state_30380__$1 = (function (){var statearr_30394 = state_30380;
(statearr_30394[(11)] = inst_30353__$1);

(statearr_30394[(12)] = inst_30352);

return statearr_30394;
})();
if(cljs.core.truth_(inst_30354)){
var statearr_30395_30424 = state_30380__$1;
(statearr_30395_30424[(1)] = (8));

} else {
var statearr_30396_30425 = state_30380__$1;
(statearr_30396_30425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (14))){
var inst_30373 = (state_30380[(2)]);
var inst_30374 = cljs.core.async.close_BANG_.call(null,out);
var state_30380__$1 = (function (){var statearr_30398 = state_30380;
(statearr_30398[(13)] = inst_30373);

return statearr_30398;
})();
var statearr_30399_30426 = state_30380__$1;
(statearr_30399_30426[(2)] = inst_30374);

(statearr_30399_30426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (10))){
var inst_30364 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30400_30427 = state_30380__$1;
(statearr_30400_30427[(2)] = inst_30364);

(statearr_30400_30427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (8))){
var inst_30344 = (state_30380[(7)]);
var inst_30353 = (state_30380[(11)]);
var tmp30397 = inst_30344;
var inst_30344__$1 = tmp30397;
var inst_30345 = inst_30353;
var state_30380__$1 = (function (){var statearr_30401 = state_30380;
(statearr_30401[(7)] = inst_30344__$1);

(statearr_30401[(8)] = inst_30345);

return statearr_30401;
})();
var statearr_30402_30428 = state_30380__$1;
(statearr_30402_30428[(2)] = null);

(statearr_30402_30428[(1)] = (2));


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
});})(c__27698__auto___30414,out))
;
return ((function (switch__27586__auto__,c__27698__auto___30414,out){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_30406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30406[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_30406[(1)] = (1));

return statearr_30406;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_30380){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_30380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e30407){if((e30407 instanceof Object)){
var ex__27590__auto__ = e30407;
var statearr_30408_30429 = state_30380;
(statearr_30408_30429[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30430 = state_30380;
state_30380 = G__30430;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_30380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_30380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___30414,out))
})();
var state__27700__auto__ = (function (){var statearr_30409 = f__27699__auto__.call(null);
(statearr_30409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___30414);

return statearr_30409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___30414,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30431 = [];
var len__26601__auto___30505 = arguments.length;
var i__26602__auto___30506 = (0);
while(true){
if((i__26602__auto___30506 < len__26601__auto___30505)){
args30431.push((arguments[i__26602__auto___30506]));

var G__30507 = (i__26602__auto___30506 + (1));
i__26602__auto___30506 = G__30507;
continue;
} else {
}
break;
}

var G__30433 = args30431.length;
switch (G__30433) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30431.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27698__auto___30509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___30509,out){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___30509,out){
return (function (state_30475){
var state_val_30476 = (state_30475[(1)]);
if((state_val_30476 === (7))){
var inst_30471 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30477_30510 = state_30475__$1;
(statearr_30477_30510[(2)] = inst_30471);

(statearr_30477_30510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (1))){
var inst_30434 = [];
var inst_30435 = inst_30434;
var inst_30436 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30475__$1 = (function (){var statearr_30478 = state_30475;
(statearr_30478[(7)] = inst_30435);

(statearr_30478[(8)] = inst_30436);

return statearr_30478;
})();
var statearr_30479_30511 = state_30475__$1;
(statearr_30479_30511[(2)] = null);

(statearr_30479_30511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (4))){
var inst_30439 = (state_30475[(9)]);
var inst_30439__$1 = (state_30475[(2)]);
var inst_30440 = (inst_30439__$1 == null);
var inst_30441 = cljs.core.not.call(null,inst_30440);
var state_30475__$1 = (function (){var statearr_30480 = state_30475;
(statearr_30480[(9)] = inst_30439__$1);

return statearr_30480;
})();
if(inst_30441){
var statearr_30481_30512 = state_30475__$1;
(statearr_30481_30512[(1)] = (5));

} else {
var statearr_30482_30513 = state_30475__$1;
(statearr_30482_30513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (15))){
var inst_30465 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30483_30514 = state_30475__$1;
(statearr_30483_30514[(2)] = inst_30465);

(statearr_30483_30514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (13))){
var state_30475__$1 = state_30475;
var statearr_30484_30515 = state_30475__$1;
(statearr_30484_30515[(2)] = null);

(statearr_30484_30515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (6))){
var inst_30435 = (state_30475[(7)]);
var inst_30460 = inst_30435.length;
var inst_30461 = (inst_30460 > (0));
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30461)){
var statearr_30485_30516 = state_30475__$1;
(statearr_30485_30516[(1)] = (12));

} else {
var statearr_30486_30517 = state_30475__$1;
(statearr_30486_30517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (3))){
var inst_30473 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30475__$1,inst_30473);
} else {
if((state_val_30476 === (12))){
var inst_30435 = (state_30475[(7)]);
var inst_30463 = cljs.core.vec.call(null,inst_30435);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30475__$1,(15),out,inst_30463);
} else {
if((state_val_30476 === (2))){
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30475__$1,(4),ch);
} else {
if((state_val_30476 === (11))){
var inst_30443 = (state_30475[(10)]);
var inst_30439 = (state_30475[(9)]);
var inst_30453 = (state_30475[(2)]);
var inst_30454 = [];
var inst_30455 = inst_30454.push(inst_30439);
var inst_30435 = inst_30454;
var inst_30436 = inst_30443;
var state_30475__$1 = (function (){var statearr_30487 = state_30475;
(statearr_30487[(7)] = inst_30435);

(statearr_30487[(8)] = inst_30436);

(statearr_30487[(11)] = inst_30453);

(statearr_30487[(12)] = inst_30455);

return statearr_30487;
})();
var statearr_30488_30518 = state_30475__$1;
(statearr_30488_30518[(2)] = null);

(statearr_30488_30518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (9))){
var inst_30435 = (state_30475[(7)]);
var inst_30451 = cljs.core.vec.call(null,inst_30435);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30475__$1,(11),out,inst_30451);
} else {
if((state_val_30476 === (5))){
var inst_30436 = (state_30475[(8)]);
var inst_30443 = (state_30475[(10)]);
var inst_30439 = (state_30475[(9)]);
var inst_30443__$1 = f.call(null,inst_30439);
var inst_30444 = cljs.core._EQ_.call(null,inst_30443__$1,inst_30436);
var inst_30445 = cljs.core.keyword_identical_QMARK_.call(null,inst_30436,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30446 = (inst_30444) || (inst_30445);
var state_30475__$1 = (function (){var statearr_30489 = state_30475;
(statearr_30489[(10)] = inst_30443__$1);

return statearr_30489;
})();
if(cljs.core.truth_(inst_30446)){
var statearr_30490_30519 = state_30475__$1;
(statearr_30490_30519[(1)] = (8));

} else {
var statearr_30491_30520 = state_30475__$1;
(statearr_30491_30520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (14))){
var inst_30468 = (state_30475[(2)]);
var inst_30469 = cljs.core.async.close_BANG_.call(null,out);
var state_30475__$1 = (function (){var statearr_30493 = state_30475;
(statearr_30493[(13)] = inst_30468);

return statearr_30493;
})();
var statearr_30494_30521 = state_30475__$1;
(statearr_30494_30521[(2)] = inst_30469);

(statearr_30494_30521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (10))){
var inst_30458 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30495_30522 = state_30475__$1;
(statearr_30495_30522[(2)] = inst_30458);

(statearr_30495_30522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (8))){
var inst_30435 = (state_30475[(7)]);
var inst_30443 = (state_30475[(10)]);
var inst_30439 = (state_30475[(9)]);
var inst_30448 = inst_30435.push(inst_30439);
var tmp30492 = inst_30435;
var inst_30435__$1 = tmp30492;
var inst_30436 = inst_30443;
var state_30475__$1 = (function (){var statearr_30496 = state_30475;
(statearr_30496[(7)] = inst_30435__$1);

(statearr_30496[(8)] = inst_30436);

(statearr_30496[(14)] = inst_30448);

return statearr_30496;
})();
var statearr_30497_30523 = state_30475__$1;
(statearr_30497_30523[(2)] = null);

(statearr_30497_30523[(1)] = (2));


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
});})(c__27698__auto___30509,out))
;
return ((function (switch__27586__auto__,c__27698__auto___30509,out){
return (function() {
var cljs$core$async$state_machine__27587__auto__ = null;
var cljs$core$async$state_machine__27587__auto____0 = (function (){
var statearr_30501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30501[(0)] = cljs$core$async$state_machine__27587__auto__);

(statearr_30501[(1)] = (1));

return statearr_30501;
});
var cljs$core$async$state_machine__27587__auto____1 = (function (state_30475){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_30475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e30502){if((e30502 instanceof Object)){
var ex__27590__auto__ = e30502;
var statearr_30503_30524 = state_30475;
(statearr_30503_30524[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30525 = state_30475;
state_30475 = G__30525;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
cljs$core$async$state_machine__27587__auto__ = function(state_30475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27587__auto____1.call(this,state_30475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27587__auto____0;
cljs$core$async$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27587__auto____1;
return cljs$core$async$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___30509,out))
})();
var state__27700__auto__ = (function (){var statearr_30504 = f__27699__auto__.call(null);
(statearr_30504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___30509);

return statearr_30504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___30509,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map