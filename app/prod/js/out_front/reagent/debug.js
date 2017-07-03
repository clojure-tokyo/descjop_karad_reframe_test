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
var G__12421__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12422__i = 0, G__12422__a = new Array(arguments.length -  0);
while (G__12422__i < G__12422__a.length) {G__12422__a[G__12422__i] = arguments[G__12422__i + 0]; ++G__12422__i;}
  args = new cljs.core.IndexedSeq(G__12422__a,0);
} 
return G__12421__delegate.call(this,args);};
G__12421.cljs$lang$maxFixedArity = 0;
G__12421.cljs$lang$applyTo = (function (arglist__12423){
var args = cljs.core.seq(arglist__12423);
return G__12421__delegate(args);
});
G__12421.cljs$core$IFn$_invoke$arity$variadic = G__12421__delegate;
return G__12421;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12424__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12425__i = 0, G__12425__a = new Array(arguments.length -  0);
while (G__12425__i < G__12425__a.length) {G__12425__a[G__12425__i] = arguments[G__12425__i + 0]; ++G__12425__i;}
  args = new cljs.core.IndexedSeq(G__12425__a,0);
} 
return G__12424__delegate.call(this,args);};
G__12424.cljs$lang$maxFixedArity = 0;
G__12424.cljs$lang$applyTo = (function (arglist__12426){
var args = cljs.core.seq(arglist__12426);
return G__12424__delegate(args);
});
G__12424.cljs$core$IFn$_invoke$arity$variadic = G__12424__delegate;
return G__12424;
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
