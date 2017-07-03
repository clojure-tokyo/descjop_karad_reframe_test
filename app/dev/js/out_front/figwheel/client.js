// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35733 = [];
var len__26601__auto___35736 = arguments.length;
var i__26602__auto___35737 = (0);
while(true){
if((i__26602__auto___35737 < len__26601__auto___35736)){
args35733.push((arguments[i__26602__auto___35737]));

var G__35738 = (i__26602__auto___35737 + (1));
i__26602__auto___35737 = G__35738;
continue;
} else {
}
break;
}

var G__35735 = args35733.length;
switch (G__35735) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35733.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26608__auto__ = [];
var len__26601__auto___35741 = arguments.length;
var i__26602__auto___35742 = (0);
while(true){
if((i__26602__auto___35742 < len__26601__auto___35741)){
args__26608__auto__.push((arguments[i__26602__auto___35742]));

var G__35743 = (i__26602__auto___35742 + (1));
i__26602__auto___35742 = G__35743;
continue;
} else {
}
break;
}

var argseq__26609__auto__ = ((((0) < args__26608__auto__.length))?(new cljs.core.IndexedSeq(args__26608__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26609__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35740){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35740));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26608__auto__ = [];
var len__26601__auto___35745 = arguments.length;
var i__26602__auto___35746 = (0);
while(true){
if((i__26602__auto___35746 < len__26601__auto___35745)){
args__26608__auto__.push((arguments[i__26602__auto___35746]));

var G__35747 = (i__26602__auto___35746 + (1));
i__26602__auto___35746 = G__35747;
continue;
} else {
}
break;
}

var argseq__26609__auto__ = ((((0) < args__26608__auto__.length))?(new cljs.core.IndexedSeq(args__26608__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26609__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35744){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35744));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35748){
var map__35751 = p__35748;
var map__35751__$1 = ((((!((map__35751 == null)))?((((map__35751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35751):map__35751);
var message = cljs.core.get.call(null,map__35751__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35751__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25492__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25480__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25480__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25480__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27698__auto___35913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___35913,ch){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___35913,ch){
return (function (state_35882){
var state_val_35883 = (state_35882[(1)]);
if((state_val_35883 === (7))){
var inst_35878 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35884_35914 = state_35882__$1;
(statearr_35884_35914[(2)] = inst_35878);

(statearr_35884_35914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (1))){
var state_35882__$1 = state_35882;
var statearr_35885_35915 = state_35882__$1;
(statearr_35885_35915[(2)] = null);

(statearr_35885_35915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (4))){
var inst_35835 = (state_35882[(7)]);
var inst_35835__$1 = (state_35882[(2)]);
var state_35882__$1 = (function (){var statearr_35886 = state_35882;
(statearr_35886[(7)] = inst_35835__$1);

return statearr_35886;
})();
if(cljs.core.truth_(inst_35835__$1)){
var statearr_35887_35916 = state_35882__$1;
(statearr_35887_35916[(1)] = (5));

} else {
var statearr_35888_35917 = state_35882__$1;
(statearr_35888_35917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (15))){
var inst_35842 = (state_35882[(8)]);
var inst_35857 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35842);
var inst_35858 = cljs.core.first.call(null,inst_35857);
var inst_35859 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35858);
var inst_35860 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35859)].join('');
var inst_35861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35860);
var state_35882__$1 = state_35882;
var statearr_35889_35918 = state_35882__$1;
(statearr_35889_35918[(2)] = inst_35861);

(statearr_35889_35918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (13))){
var inst_35866 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35890_35919 = state_35882__$1;
(statearr_35890_35919[(2)] = inst_35866);

(statearr_35890_35919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (6))){
var state_35882__$1 = state_35882;
var statearr_35891_35920 = state_35882__$1;
(statearr_35891_35920[(2)] = null);

(statearr_35891_35920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (17))){
var inst_35864 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35892_35921 = state_35882__$1;
(statearr_35892_35921[(2)] = inst_35864);

(statearr_35892_35921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (3))){
var inst_35880 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35882__$1,inst_35880);
} else {
if((state_val_35883 === (12))){
var inst_35841 = (state_35882[(9)]);
var inst_35855 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35841,opts);
var state_35882__$1 = state_35882;
if(cljs.core.truth_(inst_35855)){
var statearr_35893_35922 = state_35882__$1;
(statearr_35893_35922[(1)] = (15));

} else {
var statearr_35894_35923 = state_35882__$1;
(statearr_35894_35923[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (2))){
var state_35882__$1 = state_35882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35882__$1,(4),ch);
} else {
if((state_val_35883 === (11))){
var inst_35842 = (state_35882[(8)]);
var inst_35847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35848 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35842);
var inst_35849 = cljs.core.async.timeout.call(null,(1000));
var inst_35850 = [inst_35848,inst_35849];
var inst_35851 = (new cljs.core.PersistentVector(null,2,(5),inst_35847,inst_35850,null));
var state_35882__$1 = state_35882;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35882__$1,(14),inst_35851);
} else {
if((state_val_35883 === (9))){
var inst_35842 = (state_35882[(8)]);
var inst_35868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35869 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35842);
var inst_35870 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35869);
var inst_35871 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35870)].join('');
var inst_35872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35871);
var state_35882__$1 = (function (){var statearr_35895 = state_35882;
(statearr_35895[(10)] = inst_35868);

return statearr_35895;
})();
var statearr_35896_35924 = state_35882__$1;
(statearr_35896_35924[(2)] = inst_35872);

(statearr_35896_35924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (5))){
var inst_35835 = (state_35882[(7)]);
var inst_35837 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35838 = (new cljs.core.PersistentArrayMap(null,2,inst_35837,null));
var inst_35839 = (new cljs.core.PersistentHashSet(null,inst_35838,null));
var inst_35840 = figwheel.client.focus_msgs.call(null,inst_35839,inst_35835);
var inst_35841 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35840);
var inst_35842 = cljs.core.first.call(null,inst_35840);
var inst_35843 = figwheel.client.autoload_QMARK_.call(null);
var state_35882__$1 = (function (){var statearr_35897 = state_35882;
(statearr_35897[(8)] = inst_35842);

(statearr_35897[(9)] = inst_35841);

return statearr_35897;
})();
if(cljs.core.truth_(inst_35843)){
var statearr_35898_35925 = state_35882__$1;
(statearr_35898_35925[(1)] = (8));

} else {
var statearr_35899_35926 = state_35882__$1;
(statearr_35899_35926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (14))){
var inst_35853 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35900_35927 = state_35882__$1;
(statearr_35900_35927[(2)] = inst_35853);

(statearr_35900_35927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (16))){
var state_35882__$1 = state_35882;
var statearr_35901_35928 = state_35882__$1;
(statearr_35901_35928[(2)] = null);

(statearr_35901_35928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (10))){
var inst_35874 = (state_35882[(2)]);
var state_35882__$1 = (function (){var statearr_35902 = state_35882;
(statearr_35902[(11)] = inst_35874);

return statearr_35902;
})();
var statearr_35903_35929 = state_35882__$1;
(statearr_35903_35929[(2)] = null);

(statearr_35903_35929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (8))){
var inst_35841 = (state_35882[(9)]);
var inst_35845 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35841,opts);
var state_35882__$1 = state_35882;
if(cljs.core.truth_(inst_35845)){
var statearr_35904_35930 = state_35882__$1;
(statearr_35904_35930[(1)] = (11));

} else {
var statearr_35905_35931 = state_35882__$1;
(statearr_35905_35931[(1)] = (12));

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
});})(c__27698__auto___35913,ch))
;
return ((function (switch__27586__auto__,c__27698__auto___35913,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27587__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27587__auto____0 = (function (){
var statearr_35909 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35909[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27587__auto__);

(statearr_35909[(1)] = (1));

return statearr_35909;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27587__auto____1 = (function (state_35882){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_35882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e35910){if((e35910 instanceof Object)){
var ex__27590__auto__ = e35910;
var statearr_35911_35932 = state_35882;
(statearr_35911_35932[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35933 = state_35882;
state_35882 = G__35933;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27587__auto__ = function(state_35882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27587__auto____1.call(this,state_35882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27587__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27587__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___35913,ch))
})();
var state__27700__auto__ = (function (){var statearr_35912 = f__27699__auto__.call(null);
(statearr_35912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___35913);

return statearr_35912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___35913,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35934_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35934_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35937 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35937){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35936){if((e35936 instanceof Error)){
var e = e35936;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35937], null));
} else {
var e = e35936;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35937))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35938){
var map__35947 = p__35938;
var map__35947__$1 = ((((!((map__35947 == null)))?((((map__35947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35947):map__35947);
var opts = map__35947__$1;
var build_id = cljs.core.get.call(null,map__35947__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35947,map__35947__$1,opts,build_id){
return (function (p__35949){
var vec__35950 = p__35949;
var seq__35951 = cljs.core.seq.call(null,vec__35950);
var first__35952 = cljs.core.first.call(null,seq__35951);
var seq__35951__$1 = cljs.core.next.call(null,seq__35951);
var map__35953 = first__35952;
var map__35953__$1 = ((((!((map__35953 == null)))?((((map__35953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35953):map__35953);
var msg = map__35953__$1;
var msg_name = cljs.core.get.call(null,map__35953__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35951__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35950,seq__35951,first__35952,seq__35951__$1,map__35953,map__35953__$1,msg,msg_name,_,map__35947,map__35947__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35950,seq__35951,first__35952,seq__35951__$1,map__35953,map__35953__$1,msg,msg_name,_,map__35947,map__35947__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35947,map__35947__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35961){
var vec__35962 = p__35961;
var seq__35963 = cljs.core.seq.call(null,vec__35962);
var first__35964 = cljs.core.first.call(null,seq__35963);
var seq__35963__$1 = cljs.core.next.call(null,seq__35963);
var map__35965 = first__35964;
var map__35965__$1 = ((((!((map__35965 == null)))?((((map__35965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35965):map__35965);
var msg = map__35965__$1;
var msg_name = cljs.core.get.call(null,map__35965__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35963__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35967){
var map__35979 = p__35967;
var map__35979__$1 = ((((!((map__35979 == null)))?((((map__35979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35979):map__35979);
var on_compile_warning = cljs.core.get.call(null,map__35979__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35979__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35979,map__35979__$1,on_compile_warning,on_compile_fail){
return (function (p__35981){
var vec__35982 = p__35981;
var seq__35983 = cljs.core.seq.call(null,vec__35982);
var first__35984 = cljs.core.first.call(null,seq__35983);
var seq__35983__$1 = cljs.core.next.call(null,seq__35983);
var map__35985 = first__35984;
var map__35985__$1 = ((((!((map__35985 == null)))?((((map__35985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35985):map__35985);
var msg = map__35985__$1;
var msg_name = cljs.core.get.call(null,map__35985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35983__$1;
var pred__35987 = cljs.core._EQ_;
var expr__35988 = msg_name;
if(cljs.core.truth_(pred__35987.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35988))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35987.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35988))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35979,map__35979__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__,msg_hist,msg_names,msg){
return (function (state_36216){
var state_val_36217 = (state_36216[(1)]);
if((state_val_36217 === (7))){
var inst_36136 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36136)){
var statearr_36218_36268 = state_36216__$1;
(statearr_36218_36268[(1)] = (8));

} else {
var statearr_36219_36269 = state_36216__$1;
(statearr_36219_36269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (20))){
var inst_36210 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36220_36270 = state_36216__$1;
(statearr_36220_36270[(2)] = inst_36210);

(statearr_36220_36270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (27))){
var inst_36206 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36221_36271 = state_36216__$1;
(statearr_36221_36271[(2)] = inst_36206);

(statearr_36221_36271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (1))){
var inst_36129 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36129)){
var statearr_36222_36272 = state_36216__$1;
(statearr_36222_36272[(1)] = (2));

} else {
var statearr_36223_36273 = state_36216__$1;
(statearr_36223_36273[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (24))){
var inst_36208 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36224_36274 = state_36216__$1;
(statearr_36224_36274[(2)] = inst_36208);

(statearr_36224_36274[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (4))){
var inst_36214 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36216__$1,inst_36214);
} else {
if((state_val_36217 === (15))){
var inst_36212 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36225_36275 = state_36216__$1;
(statearr_36225_36275[(2)] = inst_36212);

(statearr_36225_36275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (21))){
var inst_36165 = (state_36216[(2)]);
var inst_36166 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36166);
var state_36216__$1 = (function (){var statearr_36226 = state_36216;
(statearr_36226[(7)] = inst_36165);

return statearr_36226;
})();
var statearr_36227_36276 = state_36216__$1;
(statearr_36227_36276[(2)] = inst_36167);

(statearr_36227_36276[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (31))){
var inst_36195 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36195)){
var statearr_36228_36277 = state_36216__$1;
(statearr_36228_36277[(1)] = (34));

} else {
var statearr_36229_36278 = state_36216__$1;
(statearr_36229_36278[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (32))){
var inst_36204 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36230_36279 = state_36216__$1;
(statearr_36230_36279[(2)] = inst_36204);

(statearr_36230_36279[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (33))){
var inst_36191 = (state_36216[(2)]);
var inst_36192 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36193 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36192);
var state_36216__$1 = (function (){var statearr_36231 = state_36216;
(statearr_36231[(8)] = inst_36191);

return statearr_36231;
})();
var statearr_36232_36280 = state_36216__$1;
(statearr_36232_36280[(2)] = inst_36193);

(statearr_36232_36280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (13))){
var inst_36150 = figwheel.client.heads_up.clear.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(16),inst_36150);
} else {
if((state_val_36217 === (22))){
var inst_36171 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36172 = figwheel.client.heads_up.append_warning_message.call(null,inst_36171);
var state_36216__$1 = state_36216;
var statearr_36233_36281 = state_36216__$1;
(statearr_36233_36281[(2)] = inst_36172);

(statearr_36233_36281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (36))){
var inst_36202 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36234_36282 = state_36216__$1;
(statearr_36234_36282[(2)] = inst_36202);

(statearr_36234_36282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (29))){
var inst_36182 = (state_36216[(2)]);
var inst_36183 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36184 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36183);
var state_36216__$1 = (function (){var statearr_36235 = state_36216;
(statearr_36235[(9)] = inst_36182);

return statearr_36235;
})();
var statearr_36236_36283 = state_36216__$1;
(statearr_36236_36283[(2)] = inst_36184);

(statearr_36236_36283[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (6))){
var inst_36131 = (state_36216[(10)]);
var state_36216__$1 = state_36216;
var statearr_36237_36284 = state_36216__$1;
(statearr_36237_36284[(2)] = inst_36131);

(statearr_36237_36284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (28))){
var inst_36178 = (state_36216[(2)]);
var inst_36179 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36180 = figwheel.client.heads_up.display_warning.call(null,inst_36179);
var state_36216__$1 = (function (){var statearr_36238 = state_36216;
(statearr_36238[(11)] = inst_36178);

return statearr_36238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(29),inst_36180);
} else {
if((state_val_36217 === (25))){
var inst_36176 = figwheel.client.heads_up.clear.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(28),inst_36176);
} else {
if((state_val_36217 === (34))){
var inst_36197 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(37),inst_36197);
} else {
if((state_val_36217 === (17))){
var inst_36156 = (state_36216[(2)]);
var inst_36157 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36158 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36157);
var state_36216__$1 = (function (){var statearr_36239 = state_36216;
(statearr_36239[(12)] = inst_36156);

return statearr_36239;
})();
var statearr_36240_36285 = state_36216__$1;
(statearr_36240_36285[(2)] = inst_36158);

(statearr_36240_36285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (3))){
var inst_36148 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36148)){
var statearr_36241_36286 = state_36216__$1;
(statearr_36241_36286[(1)] = (13));

} else {
var statearr_36242_36287 = state_36216__$1;
(statearr_36242_36287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (12))){
var inst_36144 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36243_36288 = state_36216__$1;
(statearr_36243_36288[(2)] = inst_36144);

(statearr_36243_36288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (2))){
var inst_36131 = (state_36216[(10)]);
var inst_36131__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36216__$1 = (function (){var statearr_36244 = state_36216;
(statearr_36244[(10)] = inst_36131__$1);

return statearr_36244;
})();
if(cljs.core.truth_(inst_36131__$1)){
var statearr_36245_36289 = state_36216__$1;
(statearr_36245_36289[(1)] = (5));

} else {
var statearr_36246_36290 = state_36216__$1;
(statearr_36246_36290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (23))){
var inst_36174 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36174)){
var statearr_36247_36291 = state_36216__$1;
(statearr_36247_36291[(1)] = (25));

} else {
var statearr_36248_36292 = state_36216__$1;
(statearr_36248_36292[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (35))){
var state_36216__$1 = state_36216;
var statearr_36249_36293 = state_36216__$1;
(statearr_36249_36293[(2)] = null);

(statearr_36249_36293[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (19))){
var inst_36169 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36169)){
var statearr_36250_36294 = state_36216__$1;
(statearr_36250_36294[(1)] = (22));

} else {
var statearr_36251_36295 = state_36216__$1;
(statearr_36251_36295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (11))){
var inst_36140 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36252_36296 = state_36216__$1;
(statearr_36252_36296[(2)] = inst_36140);

(statearr_36252_36296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (9))){
var inst_36142 = figwheel.client.heads_up.clear.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(12),inst_36142);
} else {
if((state_val_36217 === (5))){
var inst_36133 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36216__$1 = state_36216;
var statearr_36253_36297 = state_36216__$1;
(statearr_36253_36297[(2)] = inst_36133);

(statearr_36253_36297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (14))){
var inst_36160 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36160)){
var statearr_36254_36298 = state_36216__$1;
(statearr_36254_36298[(1)] = (18));

} else {
var statearr_36255_36299 = state_36216__$1;
(statearr_36255_36299[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (26))){
var inst_36186 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36186)){
var statearr_36256_36300 = state_36216__$1;
(statearr_36256_36300[(1)] = (30));

} else {
var statearr_36257_36301 = state_36216__$1;
(statearr_36257_36301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (16))){
var inst_36152 = (state_36216[(2)]);
var inst_36153 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36154 = figwheel.client.heads_up.display_exception.call(null,inst_36153);
var state_36216__$1 = (function (){var statearr_36258 = state_36216;
(statearr_36258[(13)] = inst_36152);

return statearr_36258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(17),inst_36154);
} else {
if((state_val_36217 === (30))){
var inst_36188 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36189 = figwheel.client.heads_up.display_warning.call(null,inst_36188);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(33),inst_36189);
} else {
if((state_val_36217 === (10))){
var inst_36146 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36259_36302 = state_36216__$1;
(statearr_36259_36302[(2)] = inst_36146);

(statearr_36259_36302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (18))){
var inst_36162 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36163 = figwheel.client.heads_up.display_exception.call(null,inst_36162);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(21),inst_36163);
} else {
if((state_val_36217 === (37))){
var inst_36199 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36260_36303 = state_36216__$1;
(statearr_36260_36303[(2)] = inst_36199);

(statearr_36260_36303[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (8))){
var inst_36138 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36216__$1,(11),inst_36138);
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
});})(c__27698__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27586__auto__,c__27698__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto____0 = (function (){
var statearr_36264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36264[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto__);

(statearr_36264[(1)] = (1));

return statearr_36264;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto____1 = (function (state_36216){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_36216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e36265){if((e36265 instanceof Object)){
var ex__27590__auto__ = e36265;
var statearr_36266_36304 = state_36216;
(statearr_36266_36304[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36305 = state_36216;
state_36216 = G__36305;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto__ = function(state_36216){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto____1.call(this,state_36216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__,msg_hist,msg_names,msg))
})();
var state__27700__auto__ = (function (){var statearr_36267 = f__27699__auto__.call(null);
(statearr_36267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_36267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__,msg_hist,msg_names,msg))
);

return c__27698__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27698__auto___36368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto___36368,ch){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto___36368,ch){
return (function (state_36351){
var state_val_36352 = (state_36351[(1)]);
if((state_val_36352 === (1))){
var state_36351__$1 = state_36351;
var statearr_36353_36369 = state_36351__$1;
(statearr_36353_36369[(2)] = null);

(statearr_36353_36369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36352 === (2))){
var state_36351__$1 = state_36351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36351__$1,(4),ch);
} else {
if((state_val_36352 === (3))){
var inst_36349 = (state_36351[(2)]);
var state_36351__$1 = state_36351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36351__$1,inst_36349);
} else {
if((state_val_36352 === (4))){
var inst_36339 = (state_36351[(7)]);
var inst_36339__$1 = (state_36351[(2)]);
var state_36351__$1 = (function (){var statearr_36354 = state_36351;
(statearr_36354[(7)] = inst_36339__$1);

return statearr_36354;
})();
if(cljs.core.truth_(inst_36339__$1)){
var statearr_36355_36370 = state_36351__$1;
(statearr_36355_36370[(1)] = (5));

} else {
var statearr_36356_36371 = state_36351__$1;
(statearr_36356_36371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36352 === (5))){
var inst_36339 = (state_36351[(7)]);
var inst_36341 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36339);
var state_36351__$1 = state_36351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36351__$1,(8),inst_36341);
} else {
if((state_val_36352 === (6))){
var state_36351__$1 = state_36351;
var statearr_36357_36372 = state_36351__$1;
(statearr_36357_36372[(2)] = null);

(statearr_36357_36372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36352 === (7))){
var inst_36347 = (state_36351[(2)]);
var state_36351__$1 = state_36351;
var statearr_36358_36373 = state_36351__$1;
(statearr_36358_36373[(2)] = inst_36347);

(statearr_36358_36373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36352 === (8))){
var inst_36343 = (state_36351[(2)]);
var state_36351__$1 = (function (){var statearr_36359 = state_36351;
(statearr_36359[(8)] = inst_36343);

return statearr_36359;
})();
var statearr_36360_36374 = state_36351__$1;
(statearr_36360_36374[(2)] = null);

(statearr_36360_36374[(1)] = (2));


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
});})(c__27698__auto___36368,ch))
;
return ((function (switch__27586__auto__,c__27698__auto___36368,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27587__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27587__auto____0 = (function (){
var statearr_36364 = [null,null,null,null,null,null,null,null,null];
(statearr_36364[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27587__auto__);

(statearr_36364[(1)] = (1));

return statearr_36364;
});
var figwheel$client$heads_up_plugin_$_state_machine__27587__auto____1 = (function (state_36351){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_36351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e36365){if((e36365 instanceof Object)){
var ex__27590__auto__ = e36365;
var statearr_36366_36375 = state_36351;
(statearr_36366_36375[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36376 = state_36351;
state_36351 = G__36376;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27587__auto__ = function(state_36351){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27587__auto____1.call(this,state_36351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27587__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27587__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto___36368,ch))
})();
var state__27700__auto__ = (function (){var statearr_36367 = f__27699__auto__.call(null);
(statearr_36367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto___36368);

return statearr_36367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto___36368,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__){
return (function (state_36397){
var state_val_36398 = (state_36397[(1)]);
if((state_val_36398 === (1))){
var inst_36392 = cljs.core.async.timeout.call(null,(3000));
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36397__$1,(2),inst_36392);
} else {
if((state_val_36398 === (2))){
var inst_36394 = (state_36397[(2)]);
var inst_36395 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36397__$1 = (function (){var statearr_36399 = state_36397;
(statearr_36399[(7)] = inst_36394);

return statearr_36399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36397__$1,inst_36395);
} else {
return null;
}
}
});})(c__27698__auto__))
;
return ((function (switch__27586__auto__,c__27698__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27587__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27587__auto____0 = (function (){
var statearr_36403 = [null,null,null,null,null,null,null,null];
(statearr_36403[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27587__auto__);

(statearr_36403[(1)] = (1));

return statearr_36403;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27587__auto____1 = (function (state_36397){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_36397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e36404){if((e36404 instanceof Object)){
var ex__27590__auto__ = e36404;
var statearr_36405_36407 = state_36397;
(statearr_36405_36407[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36408 = state_36397;
state_36397 = G__36408;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27587__auto__ = function(state_36397){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27587__auto____1.call(this,state_36397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27587__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27587__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__))
})();
var state__27700__auto__ = (function (){var statearr_36406 = f__27699__auto__.call(null);
(statearr_36406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_36406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__))
);

return c__27698__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27698__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27698__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27699__auto__ = (function (){var switch__27586__auto__ = ((function (c__27698__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36431){
var state_val_36432 = (state_36431[(1)]);
if((state_val_36432 === (1))){
var inst_36425 = cljs.core.async.timeout.call(null,(2000));
var state_36431__$1 = state_36431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36431__$1,(2),inst_36425);
} else {
if((state_val_36432 === (2))){
var inst_36427 = (state_36431[(2)]);
var inst_36428 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36429 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36428);
var state_36431__$1 = (function (){var statearr_36433 = state_36431;
(statearr_36433[(7)] = inst_36427);

return statearr_36433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36431__$1,inst_36429);
} else {
return null;
}
}
});})(c__27698__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27586__auto__,c__27698__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto____0 = (function (){
var statearr_36437 = [null,null,null,null,null,null,null,null];
(statearr_36437[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto__);

(statearr_36437[(1)] = (1));

return statearr_36437;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto____1 = (function (state_36431){
while(true){
var ret_value__27588__auto__ = (function (){try{while(true){
var result__27589__auto__ = switch__27586__auto__.call(null,state_36431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27589__auto__;
}
break;
}
}catch (e36438){if((e36438 instanceof Object)){
var ex__27590__auto__ = e36438;
var statearr_36439_36441 = state_36431;
(statearr_36439_36441[(5)] = ex__27590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36442 = state_36431;
state_36431 = G__36442;
continue;
} else {
return ret_value__27588__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto__ = function(state_36431){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto____1.call(this,state_36431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27587__auto__;
})()
;})(switch__27586__auto__,c__27698__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27700__auto__ = (function (){var statearr_36440 = f__27699__auto__.call(null);
(statearr_36440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27698__auto__);

return statearr_36440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27700__auto__);
});})(c__27698__auto__,figwheel_version,temp__4657__auto__))
);

return c__27698__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36443){
var map__36447 = p__36443;
var map__36447__$1 = ((((!((map__36447 == null)))?((((map__36447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36447):map__36447);
var file = cljs.core.get.call(null,map__36447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36447__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36447__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36449 = "";
var G__36449__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36449),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36449);
var G__36449__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36449__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36449__$1);
if(cljs.core.truth_((function (){var and__25480__auto__ = line;
if(cljs.core.truth_(and__25480__auto__)){
return column;
} else {
return and__25480__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36449__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36449__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36450){
var map__36457 = p__36450;
var map__36457__$1 = ((((!((map__36457 == null)))?((((map__36457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36457):map__36457);
var ed = map__36457__$1;
var formatted_exception = cljs.core.get.call(null,map__36457__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36457__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36457__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36459_36463 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36460_36464 = null;
var count__36461_36465 = (0);
var i__36462_36466 = (0);
while(true){
if((i__36462_36466 < count__36461_36465)){
var msg_36467 = cljs.core._nth.call(null,chunk__36460_36464,i__36462_36466);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36467);

var G__36468 = seq__36459_36463;
var G__36469 = chunk__36460_36464;
var G__36470 = count__36461_36465;
var G__36471 = (i__36462_36466 + (1));
seq__36459_36463 = G__36468;
chunk__36460_36464 = G__36469;
count__36461_36465 = G__36470;
i__36462_36466 = G__36471;
continue;
} else {
var temp__4657__auto___36472 = cljs.core.seq.call(null,seq__36459_36463);
if(temp__4657__auto___36472){
var seq__36459_36473__$1 = temp__4657__auto___36472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36459_36473__$1)){
var c__26311__auto___36474 = cljs.core.chunk_first.call(null,seq__36459_36473__$1);
var G__36475 = cljs.core.chunk_rest.call(null,seq__36459_36473__$1);
var G__36476 = c__26311__auto___36474;
var G__36477 = cljs.core.count.call(null,c__26311__auto___36474);
var G__36478 = (0);
seq__36459_36463 = G__36475;
chunk__36460_36464 = G__36476;
count__36461_36465 = G__36477;
i__36462_36466 = G__36478;
continue;
} else {
var msg_36479 = cljs.core.first.call(null,seq__36459_36473__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36479);

var G__36480 = cljs.core.next.call(null,seq__36459_36473__$1);
var G__36481 = null;
var G__36482 = (0);
var G__36483 = (0);
seq__36459_36463 = G__36480;
chunk__36460_36464 = G__36481;
count__36461_36465 = G__36482;
i__36462_36466 = G__36483;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36484){
var map__36487 = p__36484;
var map__36487__$1 = ((((!((map__36487 == null)))?((((map__36487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36487):map__36487);
var w = map__36487__$1;
var message = cljs.core.get.call(null,map__36487__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app\\dev\\js\\out_front\\figwheel\\client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app\\dev\\js\\out_front\\figwheel\\client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25480__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25480__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25480__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36499 = cljs.core.seq.call(null,plugins);
var chunk__36500 = null;
var count__36501 = (0);
var i__36502 = (0);
while(true){
if((i__36502 < count__36501)){
var vec__36503 = cljs.core._nth.call(null,chunk__36500,i__36502);
var k = cljs.core.nth.call(null,vec__36503,(0),null);
var plugin = cljs.core.nth.call(null,vec__36503,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36509 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36499,chunk__36500,count__36501,i__36502,pl_36509,vec__36503,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36509.call(null,msg_hist);
});})(seq__36499,chunk__36500,count__36501,i__36502,pl_36509,vec__36503,k,plugin))
);
} else {
}

var G__36510 = seq__36499;
var G__36511 = chunk__36500;
var G__36512 = count__36501;
var G__36513 = (i__36502 + (1));
seq__36499 = G__36510;
chunk__36500 = G__36511;
count__36501 = G__36512;
i__36502 = G__36513;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36499);
if(temp__4657__auto__){
var seq__36499__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36499__$1)){
var c__26311__auto__ = cljs.core.chunk_first.call(null,seq__36499__$1);
var G__36514 = cljs.core.chunk_rest.call(null,seq__36499__$1);
var G__36515 = c__26311__auto__;
var G__36516 = cljs.core.count.call(null,c__26311__auto__);
var G__36517 = (0);
seq__36499 = G__36514;
chunk__36500 = G__36515;
count__36501 = G__36516;
i__36502 = G__36517;
continue;
} else {
var vec__36506 = cljs.core.first.call(null,seq__36499__$1);
var k = cljs.core.nth.call(null,vec__36506,(0),null);
var plugin = cljs.core.nth.call(null,vec__36506,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36518 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36499,chunk__36500,count__36501,i__36502,pl_36518,vec__36506,k,plugin,seq__36499__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36518.call(null,msg_hist);
});})(seq__36499,chunk__36500,count__36501,i__36502,pl_36518,vec__36506,k,plugin,seq__36499__$1,temp__4657__auto__))
);
} else {
}

var G__36519 = cljs.core.next.call(null,seq__36499__$1);
var G__36520 = null;
var G__36521 = (0);
var G__36522 = (0);
seq__36499 = G__36519;
chunk__36500 = G__36520;
count__36501 = G__36521;
i__36502 = G__36522;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36523 = [];
var len__26601__auto___36530 = arguments.length;
var i__26602__auto___36531 = (0);
while(true){
if((i__26602__auto___36531 < len__26601__auto___36530)){
args36523.push((arguments[i__26602__auto___36531]));

var G__36532 = (i__26602__auto___36531 + (1));
i__26602__auto___36531 = G__36532;
continue;
} else {
}
break;
}

var G__36525 = args36523.length;
switch (G__36525) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36523.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36526_36534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36527_36535 = null;
var count__36528_36536 = (0);
var i__36529_36537 = (0);
while(true){
if((i__36529_36537 < count__36528_36536)){
var msg_36538 = cljs.core._nth.call(null,chunk__36527_36535,i__36529_36537);
figwheel.client.socket.handle_incoming_message.call(null,msg_36538);

var G__36539 = seq__36526_36534;
var G__36540 = chunk__36527_36535;
var G__36541 = count__36528_36536;
var G__36542 = (i__36529_36537 + (1));
seq__36526_36534 = G__36539;
chunk__36527_36535 = G__36540;
count__36528_36536 = G__36541;
i__36529_36537 = G__36542;
continue;
} else {
var temp__4657__auto___36543 = cljs.core.seq.call(null,seq__36526_36534);
if(temp__4657__auto___36543){
var seq__36526_36544__$1 = temp__4657__auto___36543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36526_36544__$1)){
var c__26311__auto___36545 = cljs.core.chunk_first.call(null,seq__36526_36544__$1);
var G__36546 = cljs.core.chunk_rest.call(null,seq__36526_36544__$1);
var G__36547 = c__26311__auto___36545;
var G__36548 = cljs.core.count.call(null,c__26311__auto___36545);
var G__36549 = (0);
seq__36526_36534 = G__36546;
chunk__36527_36535 = G__36547;
count__36528_36536 = G__36548;
i__36529_36537 = G__36549;
continue;
} else {
var msg_36550 = cljs.core.first.call(null,seq__36526_36544__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36550);

var G__36551 = cljs.core.next.call(null,seq__36526_36544__$1);
var G__36552 = null;
var G__36553 = (0);
var G__36554 = (0);
seq__36526_36534 = G__36551;
chunk__36527_36535 = G__36552;
count__36528_36536 = G__36553;
i__36529_36537 = G__36554;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26608__auto__ = [];
var len__26601__auto___36559 = arguments.length;
var i__26602__auto___36560 = (0);
while(true){
if((i__26602__auto___36560 < len__26601__auto___36559)){
args__26608__auto__.push((arguments[i__26602__auto___36560]));

var G__36561 = (i__26602__auto___36560 + (1));
i__26602__auto___36560 = G__36561;
continue;
} else {
}
break;
}

var argseq__26609__auto__ = ((((0) < args__26608__auto__.length))?(new cljs.core.IndexedSeq(args__26608__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26609__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36556){
var map__36557 = p__36556;
var map__36557__$1 = ((((!((map__36557 == null)))?((((map__36557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36557):map__36557);
var opts = map__36557__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36555){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36555));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36563){if((e36563 instanceof Error)){
var e = e36563;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36563;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36567){
var map__36568 = p__36567;
var map__36568__$1 = ((((!((map__36568 == null)))?((((map__36568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36568):map__36568);
var msg_name = cljs.core.get.call(null,map__36568__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map