import{S as z,i as F,s as X,e as f,k as L,t as b,c as h,a as m,d as c,m as D,h as E,L as Z,b as d,f as ge,g as T,J as r,M as be,N as Ee,l as ue,O as we,K as J,P as Ie,w as de,x as ve,y as fe,Q as ee,q as he,o as me,B as _e,R as $e}from"../chunks/vendor-21c2ed5f.js";var ye=[{id:1,icon:"../../images/icon-work.svg",title:"Work",color:"--Light-red-work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{id:2,icon:"../../images/icon-play.svg",title:"Play",color:"--Soft-blue",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{id:3,icon:"../../images/icon-study.svg",title:"Study",color:"--Light-red-study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{id:4,icon:"../../images/icon-exercise.svg",title:"Exercise",color:"--Lime-green",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{id:5,icon:"../../images/icon-social.svg",title:"Social",color:"--Violet",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{id:6,icon:"../../images/icon-self-care.svg",title:"Self Care",color:"--Soft-orange",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}];function pe(_,e,a){const s=_.slice();return s[1]=e[a],s}function xe(_){let e,a=_[1].timeframes.monthly.current+"",s,i,n,t,l,v=_[1].timeframes.monthly.previous+"",p;return{c(){e=f("h3"),s=b(a),i=b("hrs"),n=L(),t=f("p"),l=b("Last month - "),p=b(v),this.h()},l(o){e=h(o,"H3",{class:!0});var u=m(e);s=E(u,a),i=E(u,"hrs"),u.forEach(c),n=D(o),t=h(o,"P",{class:!0});var k=m(t);l=E(k,"Last month - "),p=E(k,v),k.forEach(c),this.h()},h(){d(e,"class","svelte-1ykpd30"),d(t,"class","svelte-1ykpd30")},m(o,u){T(o,e,u),r(e,s),r(e,i),T(o,n,u),T(o,t,u),r(t,l),r(t,p)},p:J,d(o){o&&c(e),o&&c(n),o&&c(t)}}}function Le(_){let e,a=_[1].timeframes.weekly.current+"",s,i,n,t,l,v=_[1].timeframes.weekly.previous+"",p;return{c(){e=f("h3"),s=b(a),i=b("hrs"),n=L(),t=f("p"),l=b("Last week - "),p=b(v),this.h()},l(o){e=h(o,"H3",{class:!0});var u=m(e);s=E(u,a),i=E(u,"hrs"),u.forEach(c),n=D(o),t=h(o,"P",{class:!0});var k=m(t);l=E(k,"Last week - "),p=E(k,v),k.forEach(c),this.h()},h(){d(e,"class","svelte-1ykpd30"),d(t,"class","svelte-1ykpd30")},m(o,u){T(o,e,u),r(e,s),r(e,i),T(o,n,u),T(o,t,u),r(t,l),r(t,p)},p:J,d(o){o&&c(e),o&&c(n),o&&c(t)}}}function De(_){let e,a=_[1].timeframes.daily.current+"",s,i,n,t,l,v=_[1].timeframes.daily.previous+"",p;return{c(){e=f("h3"),s=b(a),i=b("hrs"),n=L(),t=f("p"),l=b("Yesterday - "),p=b(v),this.h()},l(o){e=h(o,"H3",{class:!0});var u=m(e);s=E(u,a),i=E(u,"hrs"),u.forEach(c),n=D(o),t=h(o,"P",{class:!0});var k=m(t);l=E(k,"Yesterday - "),p=E(k,v),k.forEach(c),this.h()},h(){d(e,"class","svelte-1ykpd30"),d(t,"class","svelte-1ykpd30")},m(o,u){T(o,e,u),r(e,s),r(e,i),T(o,n,u),T(o,t,u),r(t,l),r(t,p)},p:J,d(o){o&&c(e),o&&c(n),o&&c(t)}}}function ke(_,e){let a,s,i,n,t,l,v,p,o=e[1].title+"",u,k,N,w,$,S,R,H,Y,V,B;function W(g,I){if(g[0]==="daily")return De;if(g[0]==="weekly")return Le;if(g[0]==="monthy")return xe}let O=W(e),y=O&&O(e);return{key:_,first:null,c(){a=f("section"),s=f("div"),i=f("img"),t=L(),l=f("div"),v=f("div"),p=f("h2"),u=b(o),k=L(),N=f("button"),w=f("img"),S=L(),y&&y.c(),H=L(),this.h()},l(g){a=h(g,"SECTION",{class:!0});var I=m(a);s=h(I,"DIV",{class:!0,style:!0});var j=m(s);i=h(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(c),t=D(I),l=h(I,"DIV",{class:!0});var x=m(l);v=h(x,"DIV",{class:!0});var P=m(v);p=h(P,"H2",{});var q=m(p);u=E(q,o),q.forEach(c),k=D(P),N=h(P,"BUTTON",{class:!0});var A=m(N);w=h(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(c),P.forEach(c),S=D(x),y&&y.l(x),x.forEach(c),H=D(I),I.forEach(c),this.h()},h(){Z(i.src,n=e[1].icon)||d(i,"src",n),d(i,"alt",`${e[1].title} ${e[1].id}`),d(i,"class","svelte-1ykpd30"),d(s,"class","head-"+e[1].title+" head svelte-1ykpd30"),ge(s,"background","var("+e[1].color+")"),Z(w.src,$="../../images/icon-ellipsis.svg")||d(w,"src",$),d(w,"alt","ellipsis"),d(w,"class","svelte-1ykpd30"),d(N,"class","svelte-1ykpd30"),d(v,"class","body-title svelte-1ykpd30"),d(l,"class",R="body-"+e[1].title+" body svelte-1ykpd30"),d(a,"class","box svelte-1ykpd30"),this.first=a},m(g,I){T(g,a,I),r(a,s),r(s,i),r(a,t),r(a,l),r(l,v),r(v,p),r(p,u),r(v,k),r(v,N),r(N,w),r(l,S),y&&y.m(l,null),r(a,H),V||(B=be(Y=Ee.call(null,a,{grid:[1,3]})),V=!0)},p(g,I){e=g,O===(O=W(e))&&y?y.p(e,I):(y&&y.d(1),y=O&&O(e),y&&(y.c(),y.m(l,null)))},d(g){g&&c(a),y&&y.d(),V=!1,B()}}}function Te(_){let e=[],a=new Map,s,i=ye;const n=t=>t[1].id;for(let t=0;t<i.length;t+=1){let l=pe(_,i,t),v=n(l);a.set(v,e[t]=ke(v,l))}return{c(){for(let t=0;t<e.length;t+=1)e[t].c();s=ue()},l(t){for(let l=0;l<e.length;l+=1)e[l].l(t);s=ue()},m(t,l){for(let v=0;v<e.length;v+=1)e[v].m(t,l);T(t,s,l)},p(t,[l]){l&1&&(i=ye,e=we(e,l,n,1,t,i,a,s.parentNode,Ie,ke,s,pe))},i:J,o:J,d(t){for(let l=0;l<e.length;l+=1)e[l].d(t);t&&c(s)}}}function Me(_,e,a){let{mode:s="daily"}=e;return _.$$set=i=>{"mode"in i&&a(0,s=i.mode)},[s]}class Ne extends z{constructor(e){super();F(this,e,Me,Te,X,{mode:0})}}function Se(_){let e,a,s,i,n,t,l,v,p,o,u,k,N,w,$,S,R,H,Y,V,B,W,O,y,g,I,j,x,P,q,A;return x=new Ne({props:{mode:_[0]}}),{c(){e=f("section"),a=f("div"),s=f("div"),i=f("img"),t=L(),l=f("div"),v=f("p"),p=b("Report for"),o=L(),u=f("h1"),k=b("Jeremy Robson"),N=L(),w=f("div"),$=f("ol"),S=f("li"),R=f("button"),H=b("Daily"),Y=L(),V=f("li"),B=f("button"),W=b("Weekly"),O=L(),y=f("li"),g=f("button"),I=b("Monthly"),j=L(),de(x.$$.fragment),this.h()},l(M){e=h(M,"SECTION",{class:!0});var U=m(e);a=h(U,"DIV",{class:!0});var C=m(a);s=h(C,"DIV",{class:!0});var K=m(s);i=h(K,"IMG",{src:!0,alt:!0,class:!0}),t=D(K),l=h(K,"DIV",{class:!0});var Q=m(l);v=h(Q,"P",{class:!0});var te=m(v);p=E(te,"Report for"),te.forEach(c),o=D(Q),u=h(Q,"H1",{class:!0});var se=m(u);k=E(se,"Jeremy Robson"),se.forEach(c),Q.forEach(c),K.forEach(c),N=D(C),w=h(C,"DIV",{class:!0});var le=m(w);$=h(le,"OL",{class:!0});var G=m($);S=h(G,"LI",{class:!0});var re=m(S);R=h(re,"BUTTON",{});var ae=m(R);H=E(ae,"Daily"),ae.forEach(c),re.forEach(c),Y=D(G),V=h(G,"LI",{class:!0});var ie=m(V);B=h(ie,"BUTTON",{});var oe=m(B);W=E(oe,"Weekly"),oe.forEach(c),ie.forEach(c),O=D(G),y=h(G,"LI",{class:!0});var ce=m(y);g=h(ce,"BUTTON",{});var ne=m(g);I=E(ne,"Monthly"),ne.forEach(c),ce.forEach(c),G.forEach(c),le.forEach(c),C.forEach(c),j=D(U),ve(x.$$.fragment,U),U.forEach(c),this.h()},h(){Z(i.src,n="../../images/image-jeremy.png")||d(i,"src",n),d(i,"alt",""),d(i,"class","svelte-4xduw0"),d(v,"class","svelte-4xduw0"),d(u,"class","svelte-4xduw0"),d(l,"class","user-name svelte-4xduw0"),d(s,"class","user-head svelte-4xduw0"),d(S,"class","svelte-4xduw0"),d(V,"class","svelte-4xduw0"),d(y,"class","svelte-4xduw0"),d($,"class","svelte-4xduw0"),d(w,"class","user-body svelte-4xduw0"),d(a,"class","user-box svelte-4xduw0"),d(e,"class","container svelte-4xduw0")},m(M,U){T(M,e,U),r(e,a),r(a,s),r(s,i),r(s,t),r(s,l),r(l,v),r(v,p),r(l,o),r(l,u),r(u,k),r(a,N),r(a,w),r(w,$),r($,S),r(S,R),r(R,H),r($,Y),r($,V),r(V,B),r(B,W),r($,O),r($,y),r(y,g),r(g,I),r(e,j),fe(x,e,null),P=!0,q||(A=[ee(R,"click",_[1]),ee(B,"click",_[2]),ee(g,"click",_[3])],q=!0)},p(M,[U]){const C={};U&1&&(C.mode=M[0]),x.$set(C)},i(M){P||(he(x.$$.fragment,M),P=!0)},o(M){me(x.$$.fragment,M),P=!1},d(M){M&&c(e),_e(x),q=!1,$e(A)}}}function Ve(_,e,a){let{mode:s="daily"}=e;const i=()=>{a(0,s="daily")},n=()=>{a(0,s="weekly")},t=()=>{a(0,s="monthy")};return _.$$set=l=>{"mode"in l&&a(0,s=l.mode)},[s,i,n,t]}class Oe extends z{constructor(e){super();F(this,e,Ve,Se,X,{mode:0})}}function Be(_){let e,a,s,i;return s=new Oe({}),{c(){e=f("main"),a=f("div"),de(s.$$.fragment),this.h()},l(n){e=h(n,"MAIN",{class:!0});var t=m(e);a=h(t,"DIV",{class:!0});var l=m(a);ve(s.$$.fragment,l),l.forEach(c),t.forEach(c),this.h()},h(){d(a,"class","user"),d(e,"class","main svelte-3ej48y")},m(n,t){T(n,e,t),r(e,a),fe(s,a,null),i=!0},p:J,i(n){i||(he(s.$$.fragment,n),i=!0)},o(n){me(s.$$.fragment,n),i=!1},d(n){n&&c(e),_e(s)}}}class Re extends z{constructor(e){super();F(this,e,null,Be,X,{})}}export{Re as default};
