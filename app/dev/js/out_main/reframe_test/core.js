// Compiled by ClojureScript 1.9.473 {:elide-asserts true, :target :nodejs}
goog.provide('reframe_test.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
reframe_test.core.path = cljs.nodejs.require.call(null,"path");
reframe_test.core.Electron = cljs.nodejs.require.call(null,"electron");
reframe_test.core.BrowserWindow = reframe_test.core.Electron.BrowserWindow;
reframe_test.core.crash_reporter = reframe_test.core.Electron.crashReporter;
reframe_test.core.Os = cljs.nodejs.require.call(null,"os");
reframe_test.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
reframe_test.core.app = reframe_test.core.Electron.app;
reframe_test.core.is_mac = cljs.core._EQ_.call(null,cljs.nodejs.process.platform,"darwin");
reframe_test.core.Menu = reframe_test.core.Electron.Menu;
reframe_test.core.Shell = reframe_test.core.Electron.shell;
reframe_test.core.app_name = reframe_test.core.app.getName();
/**
 * メニュー構成
 */
reframe_test.core.menu_template = ((reframe_test.core.is_mac)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),reframe_test.core.app_name,new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Quit.",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"Command+Q",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return reframe_test.core.app.quit();
})], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Help",new cljs.core.Keyword(null,"role","role",-736691072),"help",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"About this mac app",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"Command+H",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return reframe_test.core.Shell.openExternal("http://descjop.org/");
})], null)], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Help",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"About this windows/linux app",new cljs.core.Keyword(null,"accelerator","accelerator",1975205785),"Control+H",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return reframe_test.core.Shell.openExternal("http://descjop.org/");
})], null)], null)], null)], null));
reframe_test.core._main = (function reframe_test$core$_main(){
reframe_test.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"Your Company Name",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"http://example.com/"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

reframe_test.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return reframe_test.core.app.quit();
} else {
return null;
}
}));

return reframe_test.core.app.on("ready",(function (){
cljs.core.reset_BANG_.call(null,reframe_test.core._STAR_win_STAR_,(new reframe_test.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

reframe_test.core.Menu.setApplicationMenu(reframe_test.core.Menu.buildFromTemplate(cljs.core.clj__GT_js.call(null,reframe_test.core.menu_template)));

cljs.core.deref.call(null,reframe_test.core._STAR_win_STAR_).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reframe_test.core.path.resolve(__dirname,"../index.html"))].join(''));

return cljs.core.deref.call(null,reframe_test.core._STAR_win_STAR_).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,reframe_test.core._STAR_win_STAR_,null);
}));
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Start descjop application on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reframe_test.core.Os.type()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = reframe_test.core._main;
