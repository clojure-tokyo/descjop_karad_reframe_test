// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35613){
var map__35638 = p__35613;
var map__35638__$1 = ((((!((map__35638 == null)))?((((map__35638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35638):map__35638);
var m = map__35638__$1;
var n = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35640_35662 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35641_35663 = null;
var count__35642_35664 = (0);
var i__35643_35665 = (0);
while(true){
if((i__35643_35665 < count__35642_35664)){
var f_35666 = cljs.core._nth.call(null,chunk__35641_35663,i__35643_35665);
cljs.core.println.call(null,"  ",f_35666);

var G__35667 = seq__35640_35662;
var G__35668 = chunk__35641_35663;
var G__35669 = count__35642_35664;
var G__35670 = (i__35643_35665 + (1));
seq__35640_35662 = G__35667;
chunk__35641_35663 = G__35668;
count__35642_35664 = G__35669;
i__35643_35665 = G__35670;
continue;
} else {
var temp__4657__auto___35671 = cljs.core.seq.call(null,seq__35640_35662);
if(temp__4657__auto___35671){
var seq__35640_35672__$1 = temp__4657__auto___35671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35640_35672__$1)){
var c__26311__auto___35673 = cljs.core.chunk_first.call(null,seq__35640_35672__$1);
var G__35674 = cljs.core.chunk_rest.call(null,seq__35640_35672__$1);
var G__35675 = c__26311__auto___35673;
var G__35676 = cljs.core.count.call(null,c__26311__auto___35673);
var G__35677 = (0);
seq__35640_35662 = G__35674;
chunk__35641_35663 = G__35675;
count__35642_35664 = G__35676;
i__35643_35665 = G__35677;
continue;
} else {
var f_35678 = cljs.core.first.call(null,seq__35640_35672__$1);
cljs.core.println.call(null,"  ",f_35678);

var G__35679 = cljs.core.next.call(null,seq__35640_35672__$1);
var G__35680 = null;
var G__35681 = (0);
var G__35682 = (0);
seq__35640_35662 = G__35679;
chunk__35641_35663 = G__35680;
count__35642_35664 = G__35681;
i__35643_35665 = G__35682;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35683 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25492__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25492__auto__)){
return or__25492__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35683);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35683)))?cljs.core.second.call(null,arglists_35683):arglists_35683));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35644_35684 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35645_35685 = null;
var count__35646_35686 = (0);
var i__35647_35687 = (0);
while(true){
if((i__35647_35687 < count__35646_35686)){
var vec__35648_35688 = cljs.core._nth.call(null,chunk__35645_35685,i__35647_35687);
var name_35689 = cljs.core.nth.call(null,vec__35648_35688,(0),null);
var map__35651_35690 = cljs.core.nth.call(null,vec__35648_35688,(1),null);
var map__35651_35691__$1 = ((((!((map__35651_35690 == null)))?((((map__35651_35690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35651_35690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35651_35690):map__35651_35690);
var doc_35692 = cljs.core.get.call(null,map__35651_35691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35693 = cljs.core.get.call(null,map__35651_35691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35689);

cljs.core.println.call(null," ",arglists_35693);

if(cljs.core.truth_(doc_35692)){
cljs.core.println.call(null," ",doc_35692);
} else {
}

var G__35694 = seq__35644_35684;
var G__35695 = chunk__35645_35685;
var G__35696 = count__35646_35686;
var G__35697 = (i__35647_35687 + (1));
seq__35644_35684 = G__35694;
chunk__35645_35685 = G__35695;
count__35646_35686 = G__35696;
i__35647_35687 = G__35697;
continue;
} else {
var temp__4657__auto___35698 = cljs.core.seq.call(null,seq__35644_35684);
if(temp__4657__auto___35698){
var seq__35644_35699__$1 = temp__4657__auto___35698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35644_35699__$1)){
var c__26311__auto___35700 = cljs.core.chunk_first.call(null,seq__35644_35699__$1);
var G__35701 = cljs.core.chunk_rest.call(null,seq__35644_35699__$1);
var G__35702 = c__26311__auto___35700;
var G__35703 = cljs.core.count.call(null,c__26311__auto___35700);
var G__35704 = (0);
seq__35644_35684 = G__35701;
chunk__35645_35685 = G__35702;
count__35646_35686 = G__35703;
i__35647_35687 = G__35704;
continue;
} else {
var vec__35653_35705 = cljs.core.first.call(null,seq__35644_35699__$1);
var name_35706 = cljs.core.nth.call(null,vec__35653_35705,(0),null);
var map__35656_35707 = cljs.core.nth.call(null,vec__35653_35705,(1),null);
var map__35656_35708__$1 = ((((!((map__35656_35707 == null)))?((((map__35656_35707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35656_35707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35656_35707):map__35656_35707);
var doc_35709 = cljs.core.get.call(null,map__35656_35708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35710 = cljs.core.get.call(null,map__35656_35708__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35706);

cljs.core.println.call(null," ",arglists_35710);

if(cljs.core.truth_(doc_35709)){
cljs.core.println.call(null," ",doc_35709);
} else {
}

var G__35711 = cljs.core.next.call(null,seq__35644_35699__$1);
var G__35712 = null;
var G__35713 = (0);
var G__35714 = (0);
seq__35644_35684 = G__35711;
chunk__35645_35685 = G__35712;
count__35646_35686 = G__35713;
i__35647_35687 = G__35714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35658 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35659 = null;
var count__35660 = (0);
var i__35661 = (0);
while(true){
if((i__35661 < count__35660)){
var role = cljs.core._nth.call(null,chunk__35659,i__35661);
var temp__4657__auto___35715__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35715__$1)){
var spec_35716 = temp__4657__auto___35715__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_35716));
} else {
}

var G__35717 = seq__35658;
var G__35718 = chunk__35659;
var G__35719 = count__35660;
var G__35720 = (i__35661 + (1));
seq__35658 = G__35717;
chunk__35659 = G__35718;
count__35660 = G__35719;
i__35661 = G__35720;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35658);
if(temp__4657__auto____$1){
var seq__35658__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35658__$1)){
var c__26311__auto__ = cljs.core.chunk_first.call(null,seq__35658__$1);
var G__35721 = cljs.core.chunk_rest.call(null,seq__35658__$1);
var G__35722 = c__26311__auto__;
var G__35723 = cljs.core.count.call(null,c__26311__auto__);
var G__35724 = (0);
seq__35658 = G__35721;
chunk__35659 = G__35722;
count__35660 = G__35723;
i__35661 = G__35724;
continue;
} else {
var role = cljs.core.first.call(null,seq__35658__$1);
var temp__4657__auto___35725__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35725__$2)){
var spec_35726 = temp__4657__auto___35725__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_35726));
} else {
}

var G__35727 = cljs.core.next.call(null,seq__35658__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35658 = G__35727;
chunk__35659 = G__35728;
count__35660 = G__35729;
i__35661 = G__35730;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map