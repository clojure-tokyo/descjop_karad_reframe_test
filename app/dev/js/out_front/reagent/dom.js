// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25492__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_36574 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_36574){
return (function (){
var _STAR_always_update_STAR_36575 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36575;
}});})(_STAR_always_update_STAR_36574))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36574;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args36576 = [];
var len__26601__auto___36579 = arguments.length;
var i__26602__auto___36580 = (0);
while(true){
if((i__26602__auto___36580 < len__26601__auto___36579)){
args36576.push((arguments[i__26602__auto___36580]));

var G__36581 = (i__26602__auto___36580 + (1));
i__26602__auto___36580 = G__36581;
continue;
} else {
}
break;
}

var G__36578 = args36576.length;
switch (G__36578) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36576.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__36587_36591 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__36588_36592 = null;
var count__36589_36593 = (0);
var i__36590_36594 = (0);
while(true){
if((i__36590_36594 < count__36589_36593)){
var v_36595 = cljs.core._nth.call(null,chunk__36588_36592,i__36590_36594);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36595);

var G__36596 = seq__36587_36591;
var G__36597 = chunk__36588_36592;
var G__36598 = count__36589_36593;
var G__36599 = (i__36590_36594 + (1));
seq__36587_36591 = G__36596;
chunk__36588_36592 = G__36597;
count__36589_36593 = G__36598;
i__36590_36594 = G__36599;
continue;
} else {
var temp__4657__auto___36600 = cljs.core.seq.call(null,seq__36587_36591);
if(temp__4657__auto___36600){
var seq__36587_36601__$1 = temp__4657__auto___36600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36587_36601__$1)){
var c__26311__auto___36602 = cljs.core.chunk_first.call(null,seq__36587_36601__$1);
var G__36603 = cljs.core.chunk_rest.call(null,seq__36587_36601__$1);
var G__36604 = c__26311__auto___36602;
var G__36605 = cljs.core.count.call(null,c__26311__auto___36602);
var G__36606 = (0);
seq__36587_36591 = G__36603;
chunk__36588_36592 = G__36604;
count__36589_36593 = G__36605;
i__36590_36594 = G__36606;
continue;
} else {
var v_36607 = cljs.core.first.call(null,seq__36587_36601__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36607);

var G__36608 = cljs.core.next.call(null,seq__36587_36601__$1);
var G__36609 = null;
var G__36610 = (0);
var G__36611 = (0);
seq__36587_36591 = G__36608;
chunk__36588_36592 = G__36609;
count__36589_36593 = G__36610;
i__36590_36594 = G__36611;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map