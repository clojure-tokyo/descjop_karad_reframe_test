// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25492__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25492__auto__){
return or__25492__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25492__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33215_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33215_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33220 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33221 = null;
var count__33222 = (0);
var i__33223 = (0);
while(true){
if((i__33223 < count__33222)){
var n = cljs.core._nth.call(null,chunk__33221,i__33223);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33224 = seq__33220;
var G__33225 = chunk__33221;
var G__33226 = count__33222;
var G__33227 = (i__33223 + (1));
seq__33220 = G__33224;
chunk__33221 = G__33225;
count__33222 = G__33226;
i__33223 = G__33227;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33220);
if(temp__4657__auto__){
var seq__33220__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33220__$1)){
var c__26311__auto__ = cljs.core.chunk_first.call(null,seq__33220__$1);
var G__33228 = cljs.core.chunk_rest.call(null,seq__33220__$1);
var G__33229 = c__26311__auto__;
var G__33230 = cljs.core.count.call(null,c__26311__auto__);
var G__33231 = (0);
seq__33220 = G__33228;
chunk__33221 = G__33229;
count__33222 = G__33230;
i__33223 = G__33231;
continue;
} else {
var n = cljs.core.first.call(null,seq__33220__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33232 = cljs.core.next.call(null,seq__33220__$1);
var G__33233 = null;
var G__33234 = (0);
var G__33235 = (0);
seq__33220 = G__33232;
chunk__33221 = G__33233;
count__33222 = G__33234;
i__33223 = G__33235;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33286_33297 = cljs.core.seq.call(null,deps);
var chunk__33287_33298 = null;
var count__33288_33299 = (0);
var i__33289_33300 = (0);
while(true){
if((i__33289_33300 < count__33288_33299)){
var dep_33301 = cljs.core._nth.call(null,chunk__33287_33298,i__33289_33300);
topo_sort_helper_STAR_.call(null,dep_33301,(depth + (1)),state);

var G__33302 = seq__33286_33297;
var G__33303 = chunk__33287_33298;
var G__33304 = count__33288_33299;
var G__33305 = (i__33289_33300 + (1));
seq__33286_33297 = G__33302;
chunk__33287_33298 = G__33303;
count__33288_33299 = G__33304;
i__33289_33300 = G__33305;
continue;
} else {
var temp__4657__auto___33306 = cljs.core.seq.call(null,seq__33286_33297);
if(temp__4657__auto___33306){
var seq__33286_33307__$1 = temp__4657__auto___33306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33286_33307__$1)){
var c__26311__auto___33308 = cljs.core.chunk_first.call(null,seq__33286_33307__$1);
var G__33309 = cljs.core.chunk_rest.call(null,seq__33286_33307__$1);
var G__33310 = c__26311__auto___33308;
var G__33311 = cljs.core.count.call(null,c__26311__auto___33308);
var G__33312 = (0);
seq__33286_33297 = G__33309;
chunk__33287_33298 = G__33310;
count__33288_33299 = G__33311;
i__33289_33300 = G__33312;
continue;
} else {
var dep_33313 = cljs.core.first.call(null,seq__33286_33307__$1);
topo_sort_helper_STAR_.call(null,dep_33313,(depth + (1)),state);

var G__33314 = cljs.core.next.call(null,seq__33286_33307__$1);
var G__33315 = null;
var G__33316 = (0);
var G__33317 = (0);
seq__33286_33297 = G__33314;
chunk__33287_33298 = G__33315;
count__33288_33299 = G__33316;
i__33289_33300 = G__33317;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33290){
var vec__33294 = p__33290;
var seq__33295 = cljs.core.seq.call(null,vec__33294);
var first__33296 = cljs.core.first.call(null,seq__33295);
var seq__33295__$1 = cljs.core.next.call(null,seq__33295);
var x = first__33296;
var xs = seq__33295__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33294,seq__33295,first__33296,seq__33295__$1,x,xs,get_deps__$1){
return (function (p1__33236_SHARP_){
return clojure.set.difference.call(null,p1__33236_SHARP_,x);
});})(vec__33294,seq__33295,first__33296,seq__33295__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33330 = cljs.core.seq.call(null,provides);
var chunk__33331 = null;
var count__33332 = (0);
var i__33333 = (0);
while(true){
if((i__33333 < count__33332)){
var prov = cljs.core._nth.call(null,chunk__33331,i__33333);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33334_33342 = cljs.core.seq.call(null,requires);
var chunk__33335_33343 = null;
var count__33336_33344 = (0);
var i__33337_33345 = (0);
while(true){
if((i__33337_33345 < count__33336_33344)){
var req_33346 = cljs.core._nth.call(null,chunk__33335_33343,i__33337_33345);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33346,prov);

var G__33347 = seq__33334_33342;
var G__33348 = chunk__33335_33343;
var G__33349 = count__33336_33344;
var G__33350 = (i__33337_33345 + (1));
seq__33334_33342 = G__33347;
chunk__33335_33343 = G__33348;
count__33336_33344 = G__33349;
i__33337_33345 = G__33350;
continue;
} else {
var temp__4657__auto___33351 = cljs.core.seq.call(null,seq__33334_33342);
if(temp__4657__auto___33351){
var seq__33334_33352__$1 = temp__4657__auto___33351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33334_33352__$1)){
var c__26311__auto___33353 = cljs.core.chunk_first.call(null,seq__33334_33352__$1);
var G__33354 = cljs.core.chunk_rest.call(null,seq__33334_33352__$1);
var G__33355 = c__26311__auto___33353;
var G__33356 = cljs.core.count.call(null,c__26311__auto___33353);
var G__33357 = (0);
seq__33334_33342 = G__33354;
chunk__33335_33343 = G__33355;
count__33336_33344 = G__33356;
i__33337_33345 = G__33357;
continue;
} else {
var req_33358 = cljs.core.first.call(null,seq__33334_33352__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33358,prov);

var G__33359 = cljs.core.next.call(null,seq__33334_33352__$1);
var G__33360 = null;
var G__33361 = (0);
var G__33362 = (0);
seq__33334_33342 = G__33359;
chunk__33335_33343 = G__33360;
count__33336_33344 = G__33361;
i__33337_33345 = G__33362;
continue;
}
} else {
}
}
break;
}

var G__33363 = seq__33330;
var G__33364 = chunk__33331;
var G__33365 = count__33332;
var G__33366 = (i__33333 + (1));
seq__33330 = G__33363;
chunk__33331 = G__33364;
count__33332 = G__33365;
i__33333 = G__33366;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33330);
if(temp__4657__auto__){
var seq__33330__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33330__$1)){
var c__26311__auto__ = cljs.core.chunk_first.call(null,seq__33330__$1);
var G__33367 = cljs.core.chunk_rest.call(null,seq__33330__$1);
var G__33368 = c__26311__auto__;
var G__33369 = cljs.core.count.call(null,c__26311__auto__);
var G__33370 = (0);
seq__33330 = G__33367;
chunk__33331 = G__33368;
count__33332 = G__33369;
i__33333 = G__33370;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33330__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33338_33371 = cljs.core.seq.call(null,requires);
var chunk__33339_33372 = null;
var count__33340_33373 = (0);
var i__33341_33374 = (0);
while(true){
if((i__33341_33374 < count__33340_33373)){
var req_33375 = cljs.core._nth.call(null,chunk__33339_33372,i__33341_33374);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33375,prov);

var G__33376 = seq__33338_33371;
var G__33377 = chunk__33339_33372;
var G__33378 = count__33340_33373;
var G__33379 = (i__33341_33374 + (1));
seq__33338_33371 = G__33376;
chunk__33339_33372 = G__33377;
count__33340_33373 = G__33378;
i__33341_33374 = G__33379;
continue;
} else {
var temp__4657__auto___33380__$1 = cljs.core.seq.call(null,seq__33338_33371);
if(temp__4657__auto___33380__$1){
var seq__33338_33381__$1 = temp__4657__auto___33380__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33338_33381__$1)){
var c__26311__auto___33382 = cljs.core.chunk_first.call(null,seq__33338_33381__$1);
var G__33383 = cljs.core.chunk_rest.call(null,seq__33338_33381__$1);
var G__33384 = c__26311__auto___33382;
var G__33385 = cljs.core.count.call(null,c__26311__auto___33382);
var G__33386 = (0);
seq__33338_33371 = G__33383;
chunk__33339_33372 = G__33384;
count__33340_33373 = G__33385;
i__33341_33374 = G__33386;
continue;
} else {
var req_33387 = cljs.core.first.call(null,seq__33338_33381__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33387,prov);

var G__33388 = cljs.core.next.call(null,seq__33338_33381__$1);
var G__33389 = null;
var G__33390 = (0);
var G__33391 = (0);
seq__33338_33371 = G__33388;
chunk__33339_33372 = G__33389;
count__33340_33373 = G__33390;
i__33341_33374 = G__33391;
continue;
}
} else {
}
}
break;
}

var G__33392 = cljs.core.next.call(null,seq__33330__$1);
var G__33393 = null;
var G__33394 = (0);
var G__33395 = (0);
seq__33330 = G__33392;
chunk__33331 = G__33393;
count__33332 = G__33394;
i__33333 = G__33395;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33400_33404 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33401_33405 = null;
var count__33402_33406 = (0);
var i__33403_33407 = (0);
while(true){
if((i__33403_33407 < count__33402_33406)){
var ns_33408 = cljs.core._nth.call(null,chunk__33401_33405,i__33403_33407);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33408);

var G__33409 = seq__33400_33404;
var G__33410 = chunk__33401_33405;
var G__33411 = count__33402_33406;
var G__33412 = (i__33403_33407 + (1));
seq__33400_33404 = G__33409;
chunk__33401_33405 = G__33410;
count__33402_33406 = G__33411;
i__33403_33407 = G__33412;
continue;
} else {
var temp__4657__auto___33413 = cljs.core.seq.call(null,seq__33400_33404);
if(temp__4657__auto___33413){
var seq__33400_33414__$1 = temp__4657__auto___33413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33400_33414__$1)){
var c__26311__auto___33415 = cljs.core.chunk_first.call(null,seq__33400_33414__$1);
var G__33416 = cljs.core.chunk_rest.call(null,seq__33400_33414__$1);
var G__33417 = c__26311__auto___33415;
var G__33418 = cljs.core.count.call(null,c__26311__auto___33415);
var G__33419 = (0);
seq__33400_33404 = G__33416;
chunk__33401_33405 = G__33417;
count__33402_33406 = G__33418;
i__33403_33407 = G__33419;
continue;
} else {
var ns_33420 = cljs.core.first.call(null,seq__33400_33414__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33420);

var G__33421 = cljs.core.next.call(null,seq__33400_33414__$1);
var G__33422 = null;
var G__33423 = (0);
var G__33424 = (0);
seq__33400_33404 = G__33421;
chunk__33401_33405 = G__33422;
count__33402_33406 = G__33423;
i__33403_33407 = G__33424;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25492__auto__ = goog.require__;
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33425__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33426__i = 0, G__33426__a = new Array(arguments.length -  0);
while (G__33426__i < G__33426__a.length) {G__33426__a[G__33426__i] = arguments[G__33426__i + 0]; ++G__33426__i;}
  args = new cljs.core.IndexedSeq(G__33426__a,0);
} 
return G__33425__delegate.call(this,args);};
G__33425.cljs$lang$maxFixedArity = 0;
G__33425.cljs$lang$applyTo = (function (arglist__33427){
var args = cljs.core.seq(arglist__33427);
return G__33425__delegate(args);
});
G__33425.cljs$core$IFn$_invoke$arity$variadic = G__33425__delegate;
return G__33425;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33428 = cljs.core._EQ_;
var expr__33429 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33428.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33429))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33428,expr__33429){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33428,expr__33429))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33428,expr__33429){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33431){if((e33431 instanceof Error)){
var e = e33431;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33431;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33428,expr__33429))
} else {
if(cljs.core.truth_(pred__33428.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33429))){
return ((function (pred__33428,expr__33429){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33428,expr__33429){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33428,expr__33429))
);

return deferred.addErrback(((function (deferred,pred__33428,expr__33429){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33428,expr__33429))
);
});
;})(pred__33428,expr__33429))
} else {
if(cljs.core.truth_(pred__33428.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33429))){
return ((function (pred__33428,expr__33429){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33432){if((e33432 instanceof Error)){
var e = e33432;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33432;

}
}})());
});
;})(pred__33428,expr__33429))
} else {
return ((function (pred__33428,expr__33429){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33428,expr__33429))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33433,callback){
var map__33436 = p__33433;
var map__33436__$1 = ((((!((map__33436 == null)))?((((map__33436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33436):map__33436);
var file_msg = map__33436__$1;
var request_url = cljs.core.get.call(null,map__33436__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33436,map__33436__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33436,map__33436__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__){
return (function (state_33460){
var state_val_33461 = (state_33460[(1)]);
if((state_val_33461 === (7))){
var inst_33456 = (state_33460[(2)]);
var state_33460__$1 = state_33460;
var statearr_33462_33482 = state_33460__$1;
(statearr_33462_33482[(2)] = inst_33456);

(statearr_33462_33482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (1))){
var state_33460__$1 = state_33460;
var statearr_33463_33483 = state_33460__$1;
(statearr_33463_33483[(2)] = null);

(statearr_33463_33483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (4))){
var inst_33440 = (state_33460[(7)]);
var inst_33440__$1 = (state_33460[(2)]);
var state_33460__$1 = (function (){var statearr_33464 = state_33460;
(statearr_33464[(7)] = inst_33440__$1);

return statearr_33464;
})();
if(cljs.core.truth_(inst_33440__$1)){
var statearr_33465_33484 = state_33460__$1;
(statearr_33465_33484[(1)] = (5));

} else {
var statearr_33466_33485 = state_33460__$1;
(statearr_33466_33485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (6))){
var state_33460__$1 = state_33460;
var statearr_33467_33486 = state_33460__$1;
(statearr_33467_33486[(2)] = null);

(statearr_33467_33486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (3))){
var inst_33458 = (state_33460[(2)]);
var state_33460__$1 = state_33460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33460__$1,inst_33458);
} else {
if((state_val_33461 === (2))){
var state_33460__$1 = state_33460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33460__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33461 === (11))){
var inst_33452 = (state_33460[(2)]);
var state_33460__$1 = (function (){var statearr_33468 = state_33460;
(statearr_33468[(8)] = inst_33452);

return statearr_33468;
})();
var statearr_33469_33487 = state_33460__$1;
(statearr_33469_33487[(2)] = null);

(statearr_33469_33487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (9))){
var inst_33446 = (state_33460[(9)]);
var inst_33444 = (state_33460[(10)]);
var inst_33448 = inst_33446.call(null,inst_33444);
var state_33460__$1 = state_33460;
var statearr_33470_33488 = state_33460__$1;
(statearr_33470_33488[(2)] = inst_33448);

(statearr_33470_33488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (5))){
var inst_33440 = (state_33460[(7)]);
var inst_33442 = figwheel.client.file_reloading.blocking_load.call(null,inst_33440);
var state_33460__$1 = state_33460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33460__$1,(8),inst_33442);
} else {
if((state_val_33461 === (10))){
var inst_33444 = (state_33460[(10)]);
var inst_33450 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33444);
var state_33460__$1 = state_33460;
var statearr_33471_33489 = state_33460__$1;
(statearr_33471_33489[(2)] = inst_33450);

(statearr_33471_33489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33461 === (8))){
var inst_33446 = (state_33460[(9)]);
var inst_33440 = (state_33460[(7)]);
var inst_33444 = (state_33460[(2)]);
var inst_33445 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33446__$1 = cljs.core.get.call(null,inst_33445,inst_33440);
var state_33460__$1 = (function (){var statearr_33472 = state_33460;
(statearr_33472[(9)] = inst_33446__$1);

(statearr_33472[(10)] = inst_33444);

return statearr_33472;
})();
if(cljs.core.truth_(inst_33446__$1)){
var statearr_33473_33490 = state_33460__$1;
(statearr_33473_33490[(1)] = (9));

} else {
var statearr_33474_33491 = state_33460__$1;
(statearr_33474_33491[(1)] = (10));

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
});})(c__27698__auto__))
;
return ((function (switch__27586__auto__,c__27698__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27587__auto__ = null;
var figwheel$client$file_reloading$state_machine__27587__auto____0 = (function (){
var statearr_33478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33478[(0)] = figwheel$client$file_reloading$state_machine__27587__auto__);

(statearr_33478[(1)] = (1));

return statearr_33478;
});
var figwheel$client$file_reloading$state_machine__27587__auto____1 = (function (state_33460){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_33460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e33479){if((e33479 instanceof Object)){
var ex__27590__auto__ = e33479;
var statearr_33480_33492 = state_33460;
(statearr_33480_33492[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33493 = state_33460;
state_33460 = G__33493;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27587__auto__ = function(state_33460){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27587__auto____1.call(this,state_33460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27587__auto____0;
figwheel$client$file_reloading$state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27587__auto____1;
return figwheel$client$file_reloading$state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__))
})();
var state__27700__auto__ = (function (){var statearr_33481 = f__27699__auto__.call(null);
(statearr_33481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_33481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__))
);

return c__27698__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33494,callback){
var map__33497 = p__33494;
var map__33497__$1 = ((((!((map__33497 == null)))?((((map__33497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33497):map__33497);
var file_msg = map__33497__$1;
var namespace = cljs.core.get.call(null,map__33497__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33497,map__33497__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33497,map__33497__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33499){
var map__33502 = p__33499;
var map__33502__$1 = ((((!((map__33502 == null)))?((((map__33502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33502):map__33502);
var file_msg = map__33502__$1;
var namespace = cljs.core.get.call(null,map__33502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33504){
var map__33507 = p__33504;
var map__33507__$1 = ((((!((map__33507 == null)))?((((map__33507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33507):map__33507);
var file_msg = map__33507__$1;
var namespace = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25480__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25480__auto__){
var or__25492__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
var or__25492__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25492__auto____$1)){
return or__25492__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25480__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33509,callback){
var map__33512 = p__33509;
var map__33512__$1 = ((((!((map__33512 == null)))?((((map__33512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33512):map__33512);
var file_msg = map__33512__$1;
var request_url = cljs.core.get.call(null,map__33512__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27698__auto___33616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___33616,out){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___33616,out){
return (function (state_33598){
var state_val_33599 = (state_33598[(1)]);
if((state_val_33599 === (1))){
var inst_33572 = cljs.core.seq.call(null,files);
var inst_33573 = cljs.core.first.call(null,inst_33572);
var inst_33574 = cljs.core.next.call(null,inst_33572);
var inst_33575 = files;
var state_33598__$1 = (function (){var statearr_33600 = state_33598;
(statearr_33600[(7)] = inst_33573);

(statearr_33600[(8)] = inst_33574);

(statearr_33600[(9)] = inst_33575);

return statearr_33600;
})();
var statearr_33601_33617 = state_33598__$1;
(statearr_33601_33617[(2)] = null);

(statearr_33601_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33599 === (2))){
var inst_33581 = (state_33598[(10)]);
var inst_33575 = (state_33598[(9)]);
var inst_33580 = cljs.core.seq.call(null,inst_33575);
var inst_33581__$1 = cljs.core.first.call(null,inst_33580);
var inst_33582 = cljs.core.next.call(null,inst_33580);
var inst_33583 = (inst_33581__$1 == null);
var inst_33584 = cljs.core.not.call(null,inst_33583);
var state_33598__$1 = (function (){var statearr_33602 = state_33598;
(statearr_33602[(11)] = inst_33582);

(statearr_33602[(10)] = inst_33581__$1);

return statearr_33602;
})();
if(inst_33584){
var statearr_33603_33618 = state_33598__$1;
(statearr_33603_33618[(1)] = (4));

} else {
var statearr_33604_33619 = state_33598__$1;
(statearr_33604_33619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33599 === (3))){
var inst_33596 = (state_33598[(2)]);
var state_33598__$1 = state_33598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33598__$1,inst_33596);
} else {
if((state_val_33599 === (4))){
var inst_33581 = (state_33598[(10)]);
var inst_33586 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33581);
var state_33598__$1 = state_33598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33598__$1,(7),inst_33586);
} else {
if((state_val_33599 === (5))){
var inst_33592 = cljs.core.async.close_BANG_.call(null,out);
var state_33598__$1 = state_33598;
var statearr_33605_33620 = state_33598__$1;
(statearr_33605_33620[(2)] = inst_33592);

(statearr_33605_33620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33599 === (6))){
var inst_33594 = (state_33598[(2)]);
var state_33598__$1 = state_33598;
var statearr_33606_33621 = state_33598__$1;
(statearr_33606_33621[(2)] = inst_33594);

(statearr_33606_33621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33599 === (7))){
var inst_33582 = (state_33598[(11)]);
var inst_33588 = (state_33598[(2)]);
var inst_33589 = cljs.core.async.put_BANG_.call(null,out,inst_33588);
var inst_33575 = inst_33582;
var state_33598__$1 = (function (){var statearr_33607 = state_33598;
(statearr_33607[(12)] = inst_33589);

(statearr_33607[(9)] = inst_33575);

return statearr_33607;
})();
var statearr_33608_33622 = state_33598__$1;
(statearr_33608_33622[(2)] = null);

(statearr_33608_33622[(1)] = (2));


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
});})(c__27698__auto___33616,out))
;
return ((function (switch__27586__auto__,c__27698__auto___33616,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto____0 = (function (){
var statearr_33612 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33612[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto__);

(statearr_33612[(1)] = (1));

return statearr_33612;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto____1 = (function (state_33598){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_33598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e33613){if((e33613 instanceof Object)){
var ex__27590__auto__ = e33613;
var statearr_33614_33623 = state_33598;
(statearr_33614_33623[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33624 = state_33598;
state_33598 = G__33624;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto__ = function(state_33598){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto____1.call(this,state_33598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___33616,out))
})();
var state__27700__auto__ = (function (){var statearr_33615 = f__27699__auto__.call(null);
(statearr_33615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___33616);

return statearr_33615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___33616,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33625,opts){
var map__33629 = p__33625;
var map__33629__$1 = ((((!((map__33629 == null)))?((((map__33629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33629):map__33629);
var eval_body = cljs.core.get.call(null,map__33629__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33629__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25480__auto__ = eval_body;
if(cljs.core.truth_(and__25480__auto__)){
return typeof eval_body === 'string';
} else {
return and__25480__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33631){var e = e33631;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33632_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33632_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33641){
var vec__33642 = p__33641;
var k = cljs.core.nth.call(null,vec__33642,(0),null);
var v = cljs.core.nth.call(null,vec__33642,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33645){
var vec__33646 = p__33645;
var k = cljs.core.nth.call(null,vec__33646,(0),null);
var v = cljs.core.nth.call(null,vec__33646,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33652,p__33653){
var map__33901 = p__33652;
var map__33901__$1 = ((((!((map__33901 == null)))?((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901):map__33901);
var opts = map__33901__$1;
var before_jsload = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33902 = p__33653;
var map__33902__$1 = ((((!((map__33902 == null)))?((((map__33902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33902):map__33902);
var msg = map__33902__$1;
var files = cljs.core.get.call(null,map__33902__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33902__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33902__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34056){
var state_val_34057 = (state_34056[(1)]);
if((state_val_34057 === (7))){
var inst_33918 = (state_34056[(7)]);
var inst_33919 = (state_34056[(8)]);
var inst_33917 = (state_34056[(9)]);
var inst_33916 = (state_34056[(10)]);
var inst_33924 = cljs.core._nth.call(null,inst_33917,inst_33919);
var inst_33925 = figwheel.client.file_reloading.eval_body.call(null,inst_33924,opts);
var inst_33926 = (inst_33919 + (1));
var tmp34058 = inst_33918;
var tmp34059 = inst_33917;
var tmp34060 = inst_33916;
var inst_33916__$1 = tmp34060;
var inst_33917__$1 = tmp34059;
var inst_33918__$1 = tmp34058;
var inst_33919__$1 = inst_33926;
var state_34056__$1 = (function (){var statearr_34061 = state_34056;
(statearr_34061[(7)] = inst_33918__$1);

(statearr_34061[(8)] = inst_33919__$1);

(statearr_34061[(9)] = inst_33917__$1);

(statearr_34061[(10)] = inst_33916__$1);

(statearr_34061[(11)] = inst_33925);

return statearr_34061;
})();
var statearr_34062_34148 = state_34056__$1;
(statearr_34062_34148[(2)] = null);

(statearr_34062_34148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (20))){
var inst_33959 = (state_34056[(12)]);
var inst_33967 = figwheel.client.file_reloading.sort_files.call(null,inst_33959);
var state_34056__$1 = state_34056;
var statearr_34063_34149 = state_34056__$1;
(statearr_34063_34149[(2)] = inst_33967);

(statearr_34063_34149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (27))){
var state_34056__$1 = state_34056;
var statearr_34064_34150 = state_34056__$1;
(statearr_34064_34150[(2)] = null);

(statearr_34064_34150[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (1))){
var inst_33908 = (state_34056[(13)]);
var inst_33905 = before_jsload.call(null,files);
var inst_33906 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33907 = (function (){return ((function (inst_33908,inst_33905,inst_33906,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33649_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33649_SHARP_);
});
;})(inst_33908,inst_33905,inst_33906,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33908__$1 = cljs.core.filter.call(null,inst_33907,files);
var inst_33909 = cljs.core.not_empty.call(null,inst_33908__$1);
var state_34056__$1 = (function (){var statearr_34065 = state_34056;
(statearr_34065[(13)] = inst_33908__$1);

(statearr_34065[(14)] = inst_33905);

(statearr_34065[(15)] = inst_33906);

return statearr_34065;
})();
if(cljs.core.truth_(inst_33909)){
var statearr_34066_34151 = state_34056__$1;
(statearr_34066_34151[(1)] = (2));

} else {
var statearr_34067_34152 = state_34056__$1;
(statearr_34067_34152[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (24))){
var state_34056__$1 = state_34056;
var statearr_34068_34153 = state_34056__$1;
(statearr_34068_34153[(2)] = null);

(statearr_34068_34153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (39))){
var inst_34009 = (state_34056[(16)]);
var state_34056__$1 = state_34056;
var statearr_34069_34154 = state_34056__$1;
(statearr_34069_34154[(2)] = inst_34009);

(statearr_34069_34154[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (46))){
var inst_34051 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
var statearr_34070_34155 = state_34056__$1;
(statearr_34070_34155[(2)] = inst_34051);

(statearr_34070_34155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (4))){
var inst_33953 = (state_34056[(2)]);
var inst_33954 = cljs.core.List.EMPTY;
var inst_33955 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33954);
var inst_33956 = (function (){return ((function (inst_33953,inst_33954,inst_33955,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33650_SHARP_){
var and__25480__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33650_SHARP_);
if(cljs.core.truth_(and__25480__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33650_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33650_SHARP_)));
} else {
return and__25480__auto__;
}
});
;})(inst_33953,inst_33954,inst_33955,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33957 = cljs.core.filter.call(null,inst_33956,files);
var inst_33958 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33959 = cljs.core.concat.call(null,inst_33957,inst_33958);
var state_34056__$1 = (function (){var statearr_34071 = state_34056;
(statearr_34071[(17)] = inst_33955);

(statearr_34071[(12)] = inst_33959);

(statearr_34071[(18)] = inst_33953);

return statearr_34071;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34072_34156 = state_34056__$1;
(statearr_34072_34156[(1)] = (16));

} else {
var statearr_34073_34157 = state_34056__$1;
(statearr_34073_34157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (15))){
var inst_33943 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
var statearr_34074_34158 = state_34056__$1;
(statearr_34074_34158[(2)] = inst_33943);

(statearr_34074_34158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (21))){
var inst_33969 = (state_34056[(19)]);
var inst_33969__$1 = (state_34056[(2)]);
var inst_33970 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33969__$1);
var state_34056__$1 = (function (){var statearr_34075 = state_34056;
(statearr_34075[(19)] = inst_33969__$1);

return statearr_34075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34056__$1,(22),inst_33970);
} else {
if((state_val_34057 === (31))){
var inst_34054 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34056__$1,inst_34054);
} else {
if((state_val_34057 === (32))){
var inst_34009 = (state_34056[(16)]);
var inst_34014 = inst_34009.cljs$lang$protocol_mask$partition0$;
var inst_34015 = (inst_34014 & (64));
var inst_34016 = inst_34009.cljs$core$ISeq$;
var inst_34017 = (cljs.core.PROTOCOL_SENTINEL === inst_34016);
var inst_34018 = (inst_34015) || (inst_34017);
var state_34056__$1 = state_34056;
if(cljs.core.truth_(inst_34018)){
var statearr_34076_34159 = state_34056__$1;
(statearr_34076_34159[(1)] = (35));

} else {
var statearr_34077_34160 = state_34056__$1;
(statearr_34077_34160[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (40))){
var inst_34031 = (state_34056[(20)]);
var inst_34030 = (state_34056[(2)]);
var inst_34031__$1 = cljs.core.get.call(null,inst_34030,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34032 = cljs.core.get.call(null,inst_34030,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34033 = cljs.core.not_empty.call(null,inst_34031__$1);
var state_34056__$1 = (function (){var statearr_34078 = state_34056;
(statearr_34078[(21)] = inst_34032);

(statearr_34078[(20)] = inst_34031__$1);

return statearr_34078;
})();
if(cljs.core.truth_(inst_34033)){
var statearr_34079_34161 = state_34056__$1;
(statearr_34079_34161[(1)] = (41));

} else {
var statearr_34080_34162 = state_34056__$1;
(statearr_34080_34162[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (33))){
var state_34056__$1 = state_34056;
var statearr_34081_34163 = state_34056__$1;
(statearr_34081_34163[(2)] = false);

(statearr_34081_34163[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (13))){
var inst_33929 = (state_34056[(22)]);
var inst_33933 = cljs.core.chunk_first.call(null,inst_33929);
var inst_33934 = cljs.core.chunk_rest.call(null,inst_33929);
var inst_33935 = cljs.core.count.call(null,inst_33933);
var inst_33916 = inst_33934;
var inst_33917 = inst_33933;
var inst_33918 = inst_33935;
var inst_33919 = (0);
var state_34056__$1 = (function (){var statearr_34082 = state_34056;
(statearr_34082[(7)] = inst_33918);

(statearr_34082[(8)] = inst_33919);

(statearr_34082[(9)] = inst_33917);

(statearr_34082[(10)] = inst_33916);

return statearr_34082;
})();
var statearr_34083_34164 = state_34056__$1;
(statearr_34083_34164[(2)] = null);

(statearr_34083_34164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (22))){
var inst_33973 = (state_34056[(23)]);
var inst_33972 = (state_34056[(24)]);
var inst_33977 = (state_34056[(25)]);
var inst_33969 = (state_34056[(19)]);
var inst_33972__$1 = (state_34056[(2)]);
var inst_33973__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33972__$1);
var inst_33974 = (function (){var all_files = inst_33969;
var res_SINGLEQUOTE_ = inst_33972__$1;
var res = inst_33973__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33973,inst_33972,inst_33977,inst_33969,inst_33972__$1,inst_33973__$1,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33651_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33651_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33973,inst_33972,inst_33977,inst_33969,inst_33972__$1,inst_33973__$1,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33975 = cljs.core.filter.call(null,inst_33974,inst_33972__$1);
var inst_33976 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33977__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33976);
var inst_33978 = cljs.core.not_empty.call(null,inst_33977__$1);
var state_34056__$1 = (function (){var statearr_34084 = state_34056;
(statearr_34084[(23)] = inst_33973__$1);

(statearr_34084[(26)] = inst_33975);

(statearr_34084[(24)] = inst_33972__$1);

(statearr_34084[(25)] = inst_33977__$1);

return statearr_34084;
})();
if(cljs.core.truth_(inst_33978)){
var statearr_34085_34165 = state_34056__$1;
(statearr_34085_34165[(1)] = (23));

} else {
var statearr_34086_34166 = state_34056__$1;
(statearr_34086_34166[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (36))){
var state_34056__$1 = state_34056;
var statearr_34087_34167 = state_34056__$1;
(statearr_34087_34167[(2)] = false);

(statearr_34087_34167[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (41))){
var inst_34031 = (state_34056[(20)]);
var inst_34035 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34036 = cljs.core.map.call(null,inst_34035,inst_34031);
var inst_34037 = cljs.core.pr_str.call(null,inst_34036);
var inst_34038 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34037)].join('');
var inst_34039 = figwheel.client.utils.log.call(null,inst_34038);
var state_34056__$1 = state_34056;
var statearr_34088_34168 = state_34056__$1;
(statearr_34088_34168[(2)] = inst_34039);

(statearr_34088_34168[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (43))){
var inst_34032 = (state_34056[(21)]);
var inst_34042 = (state_34056[(2)]);
var inst_34043 = cljs.core.not_empty.call(null,inst_34032);
var state_34056__$1 = (function (){var statearr_34089 = state_34056;
(statearr_34089[(27)] = inst_34042);

return statearr_34089;
})();
if(cljs.core.truth_(inst_34043)){
var statearr_34090_34169 = state_34056__$1;
(statearr_34090_34169[(1)] = (44));

} else {
var statearr_34091_34170 = state_34056__$1;
(statearr_34091_34170[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (29))){
var inst_33973 = (state_34056[(23)]);
var inst_33975 = (state_34056[(26)]);
var inst_33972 = (state_34056[(24)]);
var inst_33977 = (state_34056[(25)]);
var inst_33969 = (state_34056[(19)]);
var inst_34009 = (state_34056[(16)]);
var inst_34005 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34008 = (function (){var all_files = inst_33969;
var res_SINGLEQUOTE_ = inst_33972;
var res = inst_33973;
var files_not_loaded = inst_33975;
var dependencies_that_loaded = inst_33977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_34009,inst_34005,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34007){
var map__34092 = p__34007;
var map__34092__$1 = ((((!((map__34092 == null)))?((((map__34092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34092):map__34092);
var namespace = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_34009,inst_34005,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34009__$1 = cljs.core.group_by.call(null,inst_34008,inst_33975);
var inst_34011 = (inst_34009__$1 == null);
var inst_34012 = cljs.core.not.call(null,inst_34011);
var state_34056__$1 = (function (){var statearr_34094 = state_34056;
(statearr_34094[(28)] = inst_34005);

(statearr_34094[(16)] = inst_34009__$1);

return statearr_34094;
})();
if(inst_34012){
var statearr_34095_34171 = state_34056__$1;
(statearr_34095_34171[(1)] = (32));

} else {
var statearr_34096_34172 = state_34056__$1;
(statearr_34096_34172[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (44))){
var inst_34032 = (state_34056[(21)]);
var inst_34045 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34032);
var inst_34046 = cljs.core.pr_str.call(null,inst_34045);
var inst_34047 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34046)].join('');
var inst_34048 = figwheel.client.utils.log.call(null,inst_34047);
var state_34056__$1 = state_34056;
var statearr_34097_34173 = state_34056__$1;
(statearr_34097_34173[(2)] = inst_34048);

(statearr_34097_34173[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (6))){
var inst_33950 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
var statearr_34098_34174 = state_34056__$1;
(statearr_34098_34174[(2)] = inst_33950);

(statearr_34098_34174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (28))){
var inst_33975 = (state_34056[(26)]);
var inst_34002 = (state_34056[(2)]);
var inst_34003 = cljs.core.not_empty.call(null,inst_33975);
var state_34056__$1 = (function (){var statearr_34099 = state_34056;
(statearr_34099[(29)] = inst_34002);

return statearr_34099;
})();
if(cljs.core.truth_(inst_34003)){
var statearr_34100_34175 = state_34056__$1;
(statearr_34100_34175[(1)] = (29));

} else {
var statearr_34101_34176 = state_34056__$1;
(statearr_34101_34176[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (25))){
var inst_33973 = (state_34056[(23)]);
var inst_33989 = (state_34056[(2)]);
var inst_33990 = cljs.core.not_empty.call(null,inst_33973);
var state_34056__$1 = (function (){var statearr_34102 = state_34056;
(statearr_34102[(30)] = inst_33989);

return statearr_34102;
})();
if(cljs.core.truth_(inst_33990)){
var statearr_34103_34177 = state_34056__$1;
(statearr_34103_34177[(1)] = (26));

} else {
var statearr_34104_34178 = state_34056__$1;
(statearr_34104_34178[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (34))){
var inst_34025 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
if(cljs.core.truth_(inst_34025)){
var statearr_34105_34179 = state_34056__$1;
(statearr_34105_34179[(1)] = (38));

} else {
var statearr_34106_34180 = state_34056__$1;
(statearr_34106_34180[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (17))){
var state_34056__$1 = state_34056;
var statearr_34107_34181 = state_34056__$1;
(statearr_34107_34181[(2)] = recompile_dependents);

(statearr_34107_34181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (3))){
var state_34056__$1 = state_34056;
var statearr_34108_34182 = state_34056__$1;
(statearr_34108_34182[(2)] = null);

(statearr_34108_34182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (12))){
var inst_33946 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
var statearr_34109_34183 = state_34056__$1;
(statearr_34109_34183[(2)] = inst_33946);

(statearr_34109_34183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (2))){
var inst_33908 = (state_34056[(13)]);
var inst_33915 = cljs.core.seq.call(null,inst_33908);
var inst_33916 = inst_33915;
var inst_33917 = null;
var inst_33918 = (0);
var inst_33919 = (0);
var state_34056__$1 = (function (){var statearr_34110 = state_34056;
(statearr_34110[(7)] = inst_33918);

(statearr_34110[(8)] = inst_33919);

(statearr_34110[(9)] = inst_33917);

(statearr_34110[(10)] = inst_33916);

return statearr_34110;
})();
var statearr_34111_34184 = state_34056__$1;
(statearr_34111_34184[(2)] = null);

(statearr_34111_34184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (23))){
var inst_33973 = (state_34056[(23)]);
var inst_33975 = (state_34056[(26)]);
var inst_33972 = (state_34056[(24)]);
var inst_33977 = (state_34056[(25)]);
var inst_33969 = (state_34056[(19)]);
var inst_33980 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33982 = (function (){var all_files = inst_33969;
var res_SINGLEQUOTE_ = inst_33972;
var res = inst_33973;
var files_not_loaded = inst_33975;
var dependencies_that_loaded = inst_33977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_33980,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33981){
var map__34112 = p__33981;
var map__34112__$1 = ((((!((map__34112 == null)))?((((map__34112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34112):map__34112);
var request_url = cljs.core.get.call(null,map__34112__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_33980,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33983 = cljs.core.reverse.call(null,inst_33977);
var inst_33984 = cljs.core.map.call(null,inst_33982,inst_33983);
var inst_33985 = cljs.core.pr_str.call(null,inst_33984);
var inst_33986 = figwheel.client.utils.log.call(null,inst_33985);
var state_34056__$1 = (function (){var statearr_34114 = state_34056;
(statearr_34114[(31)] = inst_33980);

return statearr_34114;
})();
var statearr_34115_34185 = state_34056__$1;
(statearr_34115_34185[(2)] = inst_33986);

(statearr_34115_34185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (35))){
var state_34056__$1 = state_34056;
var statearr_34116_34186 = state_34056__$1;
(statearr_34116_34186[(2)] = true);

(statearr_34116_34186[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (19))){
var inst_33959 = (state_34056[(12)]);
var inst_33965 = figwheel.client.file_reloading.expand_files.call(null,inst_33959);
var state_34056__$1 = state_34056;
var statearr_34117_34187 = state_34056__$1;
(statearr_34117_34187[(2)] = inst_33965);

(statearr_34117_34187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (11))){
var state_34056__$1 = state_34056;
var statearr_34118_34188 = state_34056__$1;
(statearr_34118_34188[(2)] = null);

(statearr_34118_34188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (9))){
var inst_33948 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
var statearr_34119_34189 = state_34056__$1;
(statearr_34119_34189[(2)] = inst_33948);

(statearr_34119_34189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (5))){
var inst_33918 = (state_34056[(7)]);
var inst_33919 = (state_34056[(8)]);
var inst_33921 = (inst_33919 < inst_33918);
var inst_33922 = inst_33921;
var state_34056__$1 = state_34056;
if(cljs.core.truth_(inst_33922)){
var statearr_34120_34190 = state_34056__$1;
(statearr_34120_34190[(1)] = (7));

} else {
var statearr_34121_34191 = state_34056__$1;
(statearr_34121_34191[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (14))){
var inst_33929 = (state_34056[(22)]);
var inst_33938 = cljs.core.first.call(null,inst_33929);
var inst_33939 = figwheel.client.file_reloading.eval_body.call(null,inst_33938,opts);
var inst_33940 = cljs.core.next.call(null,inst_33929);
var inst_33916 = inst_33940;
var inst_33917 = null;
var inst_33918 = (0);
var inst_33919 = (0);
var state_34056__$1 = (function (){var statearr_34122 = state_34056;
(statearr_34122[(7)] = inst_33918);

(statearr_34122[(8)] = inst_33919);

(statearr_34122[(9)] = inst_33917);

(statearr_34122[(32)] = inst_33939);

(statearr_34122[(10)] = inst_33916);

return statearr_34122;
})();
var statearr_34123_34192 = state_34056__$1;
(statearr_34123_34192[(2)] = null);

(statearr_34123_34192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (45))){
var state_34056__$1 = state_34056;
var statearr_34124_34193 = state_34056__$1;
(statearr_34124_34193[(2)] = null);

(statearr_34124_34193[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (26))){
var inst_33973 = (state_34056[(23)]);
var inst_33975 = (state_34056[(26)]);
var inst_33972 = (state_34056[(24)]);
var inst_33977 = (state_34056[(25)]);
var inst_33969 = (state_34056[(19)]);
var inst_33992 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33994 = (function (){var all_files = inst_33969;
var res_SINGLEQUOTE_ = inst_33972;
var res = inst_33973;
var files_not_loaded = inst_33975;
var dependencies_that_loaded = inst_33977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_33992,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33993){
var map__34125 = p__33993;
var map__34125__$1 = ((((!((map__34125 == null)))?((((map__34125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34125):map__34125);
var namespace = cljs.core.get.call(null,map__34125__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34125__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_33992,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33995 = cljs.core.map.call(null,inst_33994,inst_33973);
var inst_33996 = cljs.core.pr_str.call(null,inst_33995);
var inst_33997 = figwheel.client.utils.log.call(null,inst_33996);
var inst_33998 = (function (){var all_files = inst_33969;
var res_SINGLEQUOTE_ = inst_33972;
var res = inst_33973;
var files_not_loaded = inst_33975;
var dependencies_that_loaded = inst_33977;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_33992,inst_33994,inst_33995,inst_33996,inst_33997,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33973,inst_33975,inst_33972,inst_33977,inst_33969,inst_33992,inst_33994,inst_33995,inst_33996,inst_33997,state_val_34057,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33999 = setTimeout(inst_33998,(10));
var state_34056__$1 = (function (){var statearr_34127 = state_34056;
(statearr_34127[(33)] = inst_33997);

(statearr_34127[(34)] = inst_33992);

return statearr_34127;
})();
var statearr_34128_34194 = state_34056__$1;
(statearr_34128_34194[(2)] = inst_33999);

(statearr_34128_34194[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (16))){
var state_34056__$1 = state_34056;
var statearr_34129_34195 = state_34056__$1;
(statearr_34129_34195[(2)] = reload_dependents);

(statearr_34129_34195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (38))){
var inst_34009 = (state_34056[(16)]);
var inst_34027 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34009);
var state_34056__$1 = state_34056;
var statearr_34130_34196 = state_34056__$1;
(statearr_34130_34196[(2)] = inst_34027);

(statearr_34130_34196[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (30))){
var state_34056__$1 = state_34056;
var statearr_34131_34197 = state_34056__$1;
(statearr_34131_34197[(2)] = null);

(statearr_34131_34197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (10))){
var inst_33929 = (state_34056[(22)]);
var inst_33931 = cljs.core.chunked_seq_QMARK_.call(null,inst_33929);
var state_34056__$1 = state_34056;
if(inst_33931){
var statearr_34132_34198 = state_34056__$1;
(statearr_34132_34198[(1)] = (13));

} else {
var statearr_34133_34199 = state_34056__$1;
(statearr_34133_34199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (18))){
var inst_33963 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
if(cljs.core.truth_(inst_33963)){
var statearr_34134_34200 = state_34056__$1;
(statearr_34134_34200[(1)] = (19));

} else {
var statearr_34135_34201 = state_34056__$1;
(statearr_34135_34201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (42))){
var state_34056__$1 = state_34056;
var statearr_34136_34202 = state_34056__$1;
(statearr_34136_34202[(2)] = null);

(statearr_34136_34202[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (37))){
var inst_34022 = (state_34056[(2)]);
var state_34056__$1 = state_34056;
var statearr_34137_34203 = state_34056__$1;
(statearr_34137_34203[(2)] = inst_34022);

(statearr_34137_34203[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34057 === (8))){
var inst_33929 = (state_34056[(22)]);
var inst_33916 = (state_34056[(10)]);
var inst_33929__$1 = cljs.core.seq.call(null,inst_33916);
var state_34056__$1 = (function (){var statearr_34138 = state_34056;
(statearr_34138[(22)] = inst_33929__$1);

return statearr_34138;
})();
if(inst_33929__$1){
var statearr_34139_34204 = state_34056__$1;
(statearr_34139_34204[(1)] = (10));

} else {
var statearr_34140_34205 = state_34056__$1;
(statearr_34140_34205[(1)] = (11));

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
}
});})(c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27586__auto__,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto____0 = (function (){
var statearr_34144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34144[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto__);

(statearr_34144[(1)] = (1));

return statearr_34144;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto____1 = (function (state_34056){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_34056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e34145){if((e34145 instanceof Object)){
var ex__27590__auto__ = e34145;
var statearr_34146_34206 = state_34056;
(statearr_34146_34206[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34207 = state_34056;
state_34056 = G__34207;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto__ = function(state_34056){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto____1.call(this,state_34056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27700__auto__ = (function (){var statearr_34147 = f__27699__auto__.call(null);
(statearr_34147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_34147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__,map__33901,map__33901__$1,opts,before_jsload,on_jsload,reload_dependents,map__33902,map__33902__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27698__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34210,link){
var map__34213 = p__34210;
var map__34213__$1 = ((((!((map__34213 == null)))?((((map__34213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34213):map__34213);
var file = cljs.core.get.call(null,map__34213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34213,map__34213__$1,file){
return (function (p1__34208_SHARP_,p2__34209_SHARP_){
if(cljs.core._EQ_.call(null,p1__34208_SHARP_,p2__34209_SHARP_)){
return p1__34208_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34213,map__34213__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34219){
var map__34220 = p__34219;
var map__34220__$1 = ((((!((map__34220 == null)))?((((map__34220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34220):map__34220);
var match_length = cljs.core.get.call(null,map__34220__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34220__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34215_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34215_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34222_SHARP_,p2__34223_SHARP_){
return cljs.core.assoc.call(null,p1__34222_SHARP_,cljs.core.get.call(null,p2__34223_SHARP_,key),p2__34223_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34224 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34224);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34224);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34225,p__34226){
var map__34231 = p__34225;
var map__34231__$1 = ((((!((map__34231 == null)))?((((map__34231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34231):map__34231);
var on_cssload = cljs.core.get.call(null,map__34231__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34232 = p__34226;
var map__34232__$1 = ((((!((map__34232 == null)))?((((map__34232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34232):map__34232);
var files_msg = map__34232__$1;
var files = cljs.core.get.call(null,map__34232__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map