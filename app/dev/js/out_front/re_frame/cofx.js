// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_frame.cofx');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.cofx.kind = new cljs.core.Keyword(null,"cofx","cofx",2013202907);
re_frame.cofx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.cofx.kind);
/**
 * Returns an interceptor which adds to a `context's` `:coeffects`.
 * 
 *   `coeffects` are the input resources required by an event handler
 * to perform its job. The two most obvious ones are `db` and `event`.
 * But sometimes a handler might need other resources.
 * 
 * Perhaps a handler needs a random number or a GUID or the current datetime.
 * Perhaps it needs access to the connection to a DataScript database.
 * 
 * If the handler directly access these resources, it stops being as
 * pure. It immedaitely becomes harder to test, etc.
 * 
 * So the necessary resources are "injected" into the `coeffect` (map)
 * given the handler.
 * 
 * Given an `id`, and an optional value, lookup the registered coeffect
 * handler (previously registered via `reg-cofx`) and it with two arguments:
 * the current value of `:coeffects` and, optionally, the value. The registered handler
 * is expected to return a modified coeffect.
 * 
 */
re_frame.cofx.inject_cofx = (function re_frame$cofx$inject_cofx(var_args){
var args27560 = [];
var len__26898__auto___27563 = arguments.length;
var i__26899__auto___27564 = (0);
while(true){
if((i__26899__auto___27564 < len__26898__auto___27563)){
args27560.push((arguments[i__26899__auto___27564]));

var G__27565 = (i__26899__auto___27564 + (1));
i__26899__auto___27564 = G__27565;
continue;
} else {
}
break;
}

var G__27562 = args27560.length;
switch (G__27562) {
case 1:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27560.length)].join('')));

}
});

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$cofx$coeffects_before(context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.registrar.get_handler.call(null,re_frame.cofx.kind,id));
}));
});

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$cofx$coeffects_before(context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.registrar.get_handler.call(null,re_frame.cofx.kind,id),value);
}));
});

re_frame.cofx.inject_cofx.cljs$lang$maxFixedArity = 2;

re_frame.cofx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function re_frame$cofx$db_coeffects_handler(coeffects){
return cljs.core.assoc.call(null,coeffects,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref.call(null,re_frame.db.app_db));
}));
re_frame.cofx.inject_db = re_frame.cofx.inject_cofx.call(null,new cljs.core.Keyword(null,"db","db",993250759));

//# sourceMappingURL=cofx.js.map