// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reframe_test_front.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
if(typeof reframe_test_front.core.state !== 'undefined'){
} else {
reframe_test_front.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello Reagent world"], null));
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,p__29681){
var vec__29682 = p__29681;
var _ = cljs.core.nth.call(null,vec__29682,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29682,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"message","message",-406056002),"Re-frame");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"click-button","click-button",-28005705),(function (db,p__29685){
var vec__29686 = p__29685;
var _ = cljs.core.nth.call(null,vec__29686,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29686,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"message","message",-406056002),"Re-frame Clicked!");
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"message","message",-406056002),(function (db,_){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(db);
}));
reframe_test_front.core.root_component = (function reframe_test_front$core$root_component(){
var message = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.window","div.window",1382543512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.toolbar.toolbar-header","header.toolbar.toolbar-header",797517306),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"test"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.window-content","div.window-content",1908600444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane-group","div.pane-group",1738824197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane-sm.sidebar","div.pane-sm.sidebar",908082288)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane","div.pane",24297878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"with figwheel!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"logo.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (message){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-button","click-button",-28005705)], null));
});})(message))
], null),"BUTTON"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar.toolbar-footer","div.toolbar.toolbar-footer",406543927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"Footer"], null)], null)], null);
});
reframe_test_front.core.mount_root = (function reframe_test_front$core$mount_root(setting){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_test_front.core.root_component], null),document.getElementById("app"));
});
reframe_test_front.core.init_BANG_ = (function reframe_test_front$core$init_BANG_(setting){
return reframe_test_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map