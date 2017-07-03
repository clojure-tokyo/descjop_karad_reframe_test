// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
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
var or__6814__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
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
var _STAR_always_update_STAR_12880 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_12880){
return (function (){
var _STAR_always_update_STAR_12881 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12881;
}});})(_STAR_always_update_STAR_12880))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12880;
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
var args12882 = [];
var len__7923__auto___12885 = arguments.length;
var i__7924__auto___12886 = (0);
while(true){
if((i__7924__auto___12886 < len__7923__auto___12885)){
args12882.push((arguments[i__7924__auto___12886]));

var G__12887 = (i__7924__auto___12886 + (1));
i__7924__auto___12886 = G__12887;
continue;
} else {
}
break;
}

var G__12884 = args12882.length;
switch (G__12884) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12882.length)].join('')));

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

var seq__12893_12897 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__12894_12898 = null;
var count__12895_12899 = (0);
var i__12896_12900 = (0);
while(true){
if((i__12896_12900 < count__12895_12899)){
var v_12901 = cljs.core._nth.call(null,chunk__12894_12898,i__12896_12900);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12901);

var G__12902 = seq__12893_12897;
var G__12903 = chunk__12894_12898;
var G__12904 = count__12895_12899;
var G__12905 = (i__12896_12900 + (1));
seq__12893_12897 = G__12902;
chunk__12894_12898 = G__12903;
count__12895_12899 = G__12904;
i__12896_12900 = G__12905;
continue;
} else {
var temp__4657__auto___12906 = cljs.core.seq.call(null,seq__12893_12897);
if(temp__4657__auto___12906){
var seq__12893_12907__$1 = temp__4657__auto___12906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12893_12907__$1)){
var c__7633__auto___12908 = cljs.core.chunk_first.call(null,seq__12893_12907__$1);
var G__12909 = cljs.core.chunk_rest.call(null,seq__12893_12907__$1);
var G__12910 = c__7633__auto___12908;
var G__12911 = cljs.core.count.call(null,c__7633__auto___12908);
var G__12912 = (0);
seq__12893_12897 = G__12909;
chunk__12894_12898 = G__12910;
count__12895_12899 = G__12911;
i__12896_12900 = G__12912;
continue;
} else {
var v_12913 = cljs.core.first.call(null,seq__12893_12907__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12913);

var G__12914 = cljs.core.next.call(null,seq__12893_12907__$1);
var G__12915 = null;
var G__12916 = (0);
var G__12917 = (0);
seq__12893_12897 = G__12914;
chunk__12894_12898 = G__12915;
count__12895_12899 = G__12916;
i__12896_12900 = G__12917;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
