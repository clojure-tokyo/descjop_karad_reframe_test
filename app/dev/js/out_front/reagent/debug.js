// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__32773__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32774__i = 0, G__32774__a = new Array(arguments.length -  0);
while (G__32774__i < G__32774__a.length) {G__32774__a[G__32774__i] = arguments[G__32774__i + 0]; ++G__32774__i;}
  args = new cljs.core.IndexedSeq(G__32774__a,0);
} 
return G__32773__delegate.call(this,args);};
G__32773.cljs$lang$maxFixedArity = 0;
G__32773.cljs$lang$applyTo = (function (arglist__32775){
var args = cljs.core.seq(arglist__32775);
return G__32773__delegate(args);
});
G__32773.cljs$core$IFn$_invoke$arity$variadic = G__32773__delegate;
return G__32773;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32776__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32777__i = 0, G__32777__a = new Array(arguments.length -  0);
while (G__32777__i < G__32777__a.length) {G__32777__a[G__32777__i] = arguments[G__32777__i + 0]; ++G__32777__i;}
  args = new cljs.core.IndexedSeq(G__32777__a,0);
} 
return G__32776__delegate.call(this,args);};
G__32776.cljs$lang$maxFixedArity = 0;
G__32776.cljs$lang$applyTo = (function (arglist__32778){
var args = cljs.core.seq(arglist__32778);
return G__32776__delegate(args);
});
G__32776.cljs$core$IFn$_invoke$arity$variadic = G__32776__delegate;
return G__32776;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map