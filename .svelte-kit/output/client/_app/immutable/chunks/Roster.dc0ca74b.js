import{S as ve,i as we,s as be,y as w,z as b,A as k,g as p,d as _,B as E,a as H,c as L,b as d,v as G,f as q,h as m,k as C,q as M,l as D,m as A,r as N,n as g,T as I,Y as De,a7 as Se,e as Y,a8 as Me,a2 as W,u as Z,a0 as Ne,p as se,G as ke,Z as J}from"./index.78a9f0bb.js";import{d as Ae}from"./records.35358e58.js";import{R as O,C as U,D as re,H as He,B as Ee}from"./index.2d56c369.js";import{I as x}from"./index.fa858b0e.js";import"./index.svelte_svelte_type_style_lang.1b9663cd.js";function Le(o){let e,l;return{c(){e=C("span"),l=M(o[2]),this.h()},l(t){e=D(t,"SPAN",{class:!0});var r=A(e);l=N(r,o[2]),r.forEach(m),this.h()},h(){g(e,"class","pos "+o[1]+" svelte-2drnee")},m(t,r){d(t,e,r),I(e,l)},p:De,d(t){t&&m(e)}}}function ne(o){let e,l;return e=new U({props:{class:"avatar playerCell",$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r&9&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function ae(o){let e,l;return{c(){e=C("img"),this.h()},l(t){e=D(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){W(e.src,l="https://sleepercdn.com/images/team_logos/nfl/"+o[0].team.toLowerCase()+".png")||g(e,"src",l),g(e,"class","teamLogo svelte-2drnee"),g(e,"alt","team logo")},m(t,r){d(t,e,r)},p(t,r){r&1&&!W(e.src,l="https://sleepercdn.com/images/team_logos/nfl/"+t[0].team.toLowerCase()+".png")&&g(e,"src",l)},d(t){t&&m(e)}}}function Te(o){let e,l,t=o[0].team&&o[0].poss!="DEF"&&ae(o);return{c(){e=C("div"),t&&t.c(),this.h()},l(r){e=D(r,"DIV",{class:!0,style:!0});var s=A(e);t&&t.l(s),s.forEach(m),this.h()},h(){g(e,"class","playerAvatar svelte-2drnee"),g(e,"style",l=o[0].avatar)},m(r,s){d(r,e,s),t&&t.m(e,null)},p(r,s){r[0].team&&r[0].poss!="DEF"?t?t.p(r,s):(t=ae(r),t.c(),t.m(e,null)):t&&(t.d(1),t=null),s&1&&l!==(l=r[0].avatar)&&g(e,"style",l)},d(r){r&&m(e),t&&t.d()}}}function fe(o){let e,l,t=o[0].poss+"",r,s,n=o[0].team&&oe(o);return{c(){e=C("div"),l=C("span"),s=H(),n&&n.c(),this.h()},l(c){e=D(c,"DIV",{class:!0});var a=A(e);l=D(a,"SPAN",{class:!0});var f=A(l);f.forEach(m),s=L(a),n&&n.l(a),a.forEach(m),this.h()},h(){g(l,"class",r="text-"+o[0].poss+" svelte-2drnee"),g(e,"class","additionalInfo svelte-2drnee")},m(c,a){d(c,e,a),I(e,l),l.innerHTML=t,I(e,s),n&&n.m(e,null)},p(c,a){a&1&&t!==(t=c[0].poss+"")&&(l.innerHTML=t),a&1&&r!==(r="text-"+c[0].poss+" svelte-2drnee")&&g(l,"class",r),c[0].team?n?n.p(c,a):(n=oe(c),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(c){c&&m(e),n&&n.d()}}}function oe(o){let e,l=o[0].team+"",t;return{c(){e=M(` - 
                        `),t=M(l)},l(r){e=N(r,` - 
                        `),t=N(r,l)},m(r,s){d(r,e,s),d(r,t,s)},p(r,s){s&1&&l!==(l=r[0].team+"")&&Z(t,l)},d(r){r&&m(e),r&&m(t)}}}function ce(o){let e,l,t=o[0].nickname+"",r;return{c(){e=C("span"),l=M('"'),r=M(t),this.h()},l(s){e=D(s,"SPAN",{class:!0});var n=A(e);l=N(n,'"'),r=N(n,t),n.forEach(m),this.h()},h(){g(e,"class","nickname svelte-2drnee")},m(s,n){d(s,e,n),I(e,l),I(e,r)},p(s,n){n&1&&t!==(t=s[0].nickname+"")&&Z(r,t)},d(s){s&&m(e)}}}function Pe(o){let e,l,t=o[0].name+"",r,s,n,c=o[0].poss!=="DEF"&&fe(o),a=o[0].nickname&&ce(o);return{c(){e=C("div"),l=new Se(!1),r=H(),c&&c.c(),s=H(),a&&a.c(),n=Y(),this.h()},l(f){e=D(f,"DIV",{class:!0});var i=A(e);l=Me(i,!1),r=L(i),c&&c.l(i),i.forEach(m),s=L(f),a&&a.l(f),n=Y(),this.h()},h(){l.a=r,g(e,"class","info")},m(f,i){d(f,e,i),l.m(t,e),I(e,r),c&&c.m(e,null),d(f,s,i),a&&a.m(f,i),d(f,n,i)},p(f,i){i&1&&t!==(t=f[0].name+"")&&l.p(t),f[0].poss!=="DEF"?c?c.p(f,i):(c=fe(f),c.c(),c.m(e,null)):c&&(c.d(1),c=null),f[0].nickname?a?a.p(f,i):(a=ce(f),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},d(f){f&&m(e),c&&c.d(),f&&m(s),a&&a.d(f),f&&m(n)}}}function ze(o){let e,l,t,r,s;e=new U({props:{class:"slot playerCell",$$slots:{default:[Le]},$$scope:{ctx:o}}});let n=o[0].avatar&&ne(o);return r=new U({props:{class:"playerCell nameCell",colspan:o[0].name!="Empty"?1:3,$$slots:{default:[Pe]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment),l=H(),n&&n.c(),t=H(),w(r.$$.fragment)},l(c){b(e.$$.fragment,c),l=L(c),n&&n.l(c),t=L(c),b(r.$$.fragment,c)},m(c,a){k(e,c,a),d(c,l,a),n&&n.m(c,a),d(c,t,a),k(r,c,a),s=!0},p(c,a){const f={};a&8&&(f.$$scope={dirty:a,ctx:c}),e.$set(f),c[0].avatar?n?(n.p(c,a),a&1&&p(n,1)):(n=ne(c),n.c(),p(n,1),n.m(t.parentNode,t)):n&&(G(),_(n,1,1,()=>{n=null}),q());const i={};a&1&&(i.colspan=c[0].name!="Empty"?1:3),a&9&&(i.$$scope={dirty:a,ctx:c}),r.$set(i)},i(c){s||(p(e.$$.fragment,c),p(n),p(r.$$.fragment,c),s=!0)},o(c){_(e.$$.fragment,c),_(n),_(r.$$.fragment,c),s=!1},d(c){E(e,c),c&&m(l),n&&n.d(c),c&&m(t),E(r,c)}}}function Fe(o){let e,l;return e=new O({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,[r]){const s={};r&9&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function Ve(o,e,l){let{player:t}=e;const r=t.slot.replace("/","").replace("SUPER_","S-").replace("REC_","R-"),s=t.slot.replace("SUPER_","S ").replace("REC_","R ");return o.$$set=n=>{"player"in n&&l(0,t=n.player)},[t,r,s]}class ee extends ve{constructor(e){super(),we(this,e,Ve,Fe,be,{player:0})}}function ie(o,e,l){const t=o.slice();return t[22]=e[l],t}function ue(o,e,l){const t=o.slice();return t[25]=e[l],t}function $e(o,e,l){const t=o.slice();return t[28]=e[l],t}function me(o,e,l){const t=o.slice();return t[31]=e[l],t}function pe(o){let e,l;return{c(){e=C("img"),this.h()},l(t){e=D(t,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){g(e,"alt","match result"),g(e,"class","result svelte-pesiwv"),W(e.src,l="/"+o[31]+".png")||g(e,"src",l)},m(t,r){d(t,e,r)},p(t,r){r[0]&256&&!W(e.src,l="/"+t[31]+".png")&&g(e,"src",l)},d(t){t&&m(e)}}}function je(o){var P;let e,l,t,r,s=((P=o[10])!=null&&P.name?o[10].name:"No Manager")+"",n,c,a,f,i,u=o[8],$=[];for(let h=0;h<u.length;h+=1)$[h]=pe(me(o,u,h));return{c(){e=C("h3"),l=C("img"),r=H(),n=M(s),c=H(),a=C("div");for(let h=0;h<$.length;h+=1)$[h].c();this.h()},l(h){e=D(h,"H3",{class:!0});var B=A(e);l=D(B,"IMG",{alt:!0,class:!0,src:!0}),r=L(B),n=N(B,s),B.forEach(m),c=L(h),a=D(h,"DIV",{class:!0});var S=A(a);for(let R=0;R<$.length;R+=1)$[R].l(S);S.forEach(m),this.h()},h(){g(l,"alt","team avatar"),g(l,"class","teamAvatar svelte-pesiwv"),W(l.src,t=o[10]?o[10].avatar:"https://sleepercdn.com/images/v2/icons/player_default.webp")||g(l,"src",t),g(e,"class","svelte-pesiwv"),g(a,"class","record svelte-pesiwv")},m(h,B){d(h,e,B),I(e,l),I(e,r),I(e,n),d(h,c,B),d(h,a,B);for(let S=0;S<$.length;S+=1)$[S]&&$[S].m(a,null);f||(i=ke(e,"click",o[17]),f=!0)},p(h,B){var S;if(B[0]&1024&&!W(l.src,t=h[10]?h[10].avatar:"https://sleepercdn.com/images/v2/icons/player_default.webp")&&g(l,"src",t),B[0]&1024&&s!==(s=((S=h[10])!=null&&S.name?h[10].name:"No Manager")+"")&&Z(n,s),B[0]&256){u=h[8];let R;for(R=0;R<u.length;R+=1){const F=me(h,u,R);$[R]?$[R].p(F,B):($[R]=pe(F),$[R].c(),$[R].m(a,null))}for(;R<$.length;R+=1)$[R].d(1);$.length=u.length}},d(h){h&&m(e),h&&m(c),h&&m(a),J($,h),f=!1,i()}}}function Ue(o){let e,l;return e=new U({props:{colspan:"4",class:"r_"+o[2]+" clickable",$$slots:{default:[je]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&4&&(s.class="r_"+t[2]+" clickable"),r[0]&1283|r[1]&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function We(o){let e,l;return e=new O({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&1287|r[1]&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function _e(o){let e,l;return e=new ee({props:{player:o[28]}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&512&&(s.player=t[28]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function Ge(o){let e;return{c(){e=M("king_bed")},l(l){e=N(l,"king_bed")},m(l,t){d(l,e,t)},d(l){l&&m(e)}}}function qe(o){let e,l,t,r,s,n,c,a;return l=new x({props:{class:"material-icons icon",$$slots:{default:[Ge]},$$scope:{ctx:o}}}),{c(){e=C("h5"),w(l.$$.fragment),t=M(" Bench "),r=C("span"),s=M("("),n=M(o[6]),c=M(")"),this.h()},l(f){e=D(f,"H5",{class:!0});var i=A(e);b(l.$$.fragment,i),t=N(i," Bench "),r=D(i,"SPAN",{class:!0});var u=A(r);s=N(u,"("),n=N(u,o[6]),c=N(u,")"),u.forEach(m),i.forEach(m),this.h()},h(){g(r,"class","italic svelte-pesiwv"),g(e,"class","svelte-pesiwv")},m(f,i){d(f,e,i),k(l,e,null),I(e,t),I(e,r),I(r,s),I(r,n),I(r,c),a=!0},p(f,i){const u={};i[1]&8&&(u.$$scope={dirty:i,ctx:f}),l.$set(u),(!a||i[0]&64)&&Z(n,f[6])},i(f){a||(p(l.$$.fragment,f),a=!0)},o(f){_(l.$$.fragment,f),a=!1},d(f){f&&m(e),E(l)}}}function Oe(o){let e,l;return e=new U({props:{colspan:"4",class:o[2],$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&4&&(s.class=t[2]),r[0]&64|r[1]&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function Qe(o){let e,l,t,r=o[9],s=[];for(let c=0;c<r.length;c+=1)s[c]=_e($e(o,r,c));const n=c=>_(s[c],1,1,()=>{s[c]=null});return l=new O({props:{class:"interactive",$$slots:{default:[Oe]},$$scope:{ctx:o}}}),l.$on("click",o[11]),{c(){for(let c=0;c<s.length;c+=1)s[c].c();e=H(),w(l.$$.fragment)},l(c){for(let a=0;a<s.length;a+=1)s[a].l(c);e=L(c),b(l.$$.fragment,c)},m(c,a){for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(c,a);d(c,e,a),k(l,c,a),t=!0},p(c,a){if(a[0]&512){r=c[9];let i;for(i=0;i<r.length;i+=1){const u=$e(c,r,i);s[i]?(s[i].p(u,a),p(s[i],1)):(s[i]=_e(u),s[i].c(),p(s[i],1),s[i].m(e.parentNode,e))}for(G(),i=r.length;i<s.length;i+=1)n(i);q()}const f={};a[0]&68|a[1]&8&&(f.$$scope={dirty:a,ctx:c}),l.$set(f)},i(c){if(!t){for(let a=0;a<r.length;a+=1)p(s[a]);p(l.$$.fragment,c),t=!0}},o(c){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);_(l.$$.fragment,c),t=!1},d(c){J(s,c),c&&m(e),E(l,c)}}}function Xe(o){let e,l,t,r;return e=new He({props:{$$slots:{default:[We]},$$scope:{ctx:o}}}),t=new Ee({props:{$$slots:{default:[Qe]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment),l=H(),w(t.$$.fragment)},l(s){b(e.$$.fragment,s),l=L(s),b(t.$$.fragment,s)},m(s,n){k(e,s,n),d(s,l,n),k(t,s,n),r=!0},p(s,n){const c={};n[0]&1287|n[1]&8&&(c.$$scope={dirty:n,ctx:s}),e.$set(c);const a={};n[0]&580|n[1]&8&&(a.$$scope={dirty:n,ctx:s}),t.$set(a)},i(s){r||(p(e.$$.fragment,s),p(t.$$.fragment,s),r=!0)},o(s){_(e.$$.fragment,s),_(t.$$.fragment,s),r=!1},d(s){E(e,s),s&&m(l),E(t,s)}}}function he(o){let e,l;return e=new ee({props:{player:o[25]}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&8&&(s.player=t[25]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function ge(o){let e,l,t,r;e=new O({props:{$$slots:{default:[Je]},$$scope:{ctx:o}}});let s=o[4],n=[];for(let a=0;a<s.length;a+=1)n[a]=de(ie(o,s,a));const c=a=>_(n[a],1,1,()=>{n[a]=null});return{c(){w(e.$$.fragment),l=H();for(let a=0;a<n.length;a+=1)n[a].c();t=Y()},l(a){b(e.$$.fragment,a),l=L(a);for(let f=0;f<n.length;f+=1)n[f].l(a);t=Y()},m(a,f){k(e,a,f),d(a,l,f);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(a,f);d(a,t,f),r=!0},p(a,f){const i={};if(f[1]&8&&(i.$$scope={dirty:f,ctx:a}),e.$set(i),f[0]&16){s=a[4];let u;for(u=0;u<s.length;u+=1){const $=ie(a,s,u);n[u]?(n[u].p($,f),p(n[u],1)):(n[u]=de($),n[u].c(),p(n[u],1),n[u].m(t.parentNode,t))}for(G(),u=s.length;u<n.length;u+=1)c(u);q()}},i(a){if(!r){p(e.$$.fragment,a);for(let f=0;f<s.length;f+=1)p(n[f]);r=!0}},o(a){_(e.$$.fragment,a),n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)_(n[f]);r=!1},d(a){E(e,a),a&&m(l),J(n,a),a&&m(t)}}}function Ye(o){let e;return{c(){e=M("healing")},l(l){e=N(l,"healing")},m(l,t){d(l,e,t)},d(l){l&&m(e)}}}function Ze(o){let e,l,t,r;return l=new x({props:{class:"material-icons icon",$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){e=C("h5"),w(l.$$.fragment),t=M(" Injured Reserve"),this.h()},l(s){e=D(s,"H5",{class:!0});var n=A(e);b(l.$$.fragment,n),t=N(n," Injured Reserve"),n.forEach(m),this.h()},h(){g(e,"class","svelte-pesiwv")},m(s,n){d(s,e,n),k(l,e,null),I(e,t),r=!0},p(s,n){const c={};n[1]&8&&(c.$$scope={dirty:n,ctx:s}),l.$set(c)},i(s){r||(p(l.$$.fragment,s),r=!0)},o(s){_(l.$$.fragment,s),r=!1},d(s){s&&m(e),E(l)}}}function Je(o){let e,l;return e=new U({props:{colspan:"4",$$slots:{default:[Ze]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[1]&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function de(o){let e,l;return e=new ee({props:{player:o[22]}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&16&&(s.player=t[22]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function Ke(o){let e;return{c(){e=M("close_fullscreen")},l(l){e=N(l,"close_fullscreen")},m(l,t){d(l,e,t)},d(l){l&&m(e)}}}function ye(o){let e,l,t,r;return l=new x({props:{class:"material-icons icon",$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){e=C("h5"),w(l.$$.fragment),t=M("Close Bench"),this.h()},l(s){e=D(s,"H5",{class:!0});var n=A(e);b(l.$$.fragment,n),t=N(n,"Close Bench"),n.forEach(m),this.h()},h(){g(e,"class","svelte-pesiwv")},m(s,n){d(s,e,n),k(l,e,null),I(e,t),r=!0},p(s,n){const c={};n[1]&8&&(c.$$scope={dirty:n,ctx:s}),l.$set(c)},i(s){r||(p(l.$$.fragment,s),r=!0)},o(s){_(l.$$.fragment,s),r=!1},d(s){s&&m(e),E(l)}}}function xe(o){let e,l;return e=new U({props:{colspan:"4",class:o[2],$$slots:{default:[ye]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&4&&(s.class=t[2]),r[1]&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function et(o){let e,l,t,r,s=o[3],n=[];for(let f=0;f<s.length;f+=1)n[f]=he(ue(o,s,f));const c=f=>_(n[f],1,1,()=>{n[f]=null});let a=o[4]&&ge(o);return t=new O({props:{class:"interactive",$$slots:{default:[xe]},$$scope:{ctx:o}}}),t.$on("click",o[11]),{c(){for(let f=0;f<n.length;f+=1)n[f].c();e=H(),a&&a.c(),l=H(),w(t.$$.fragment)},l(f){for(let i=0;i<n.length;i+=1)n[i].l(f);e=L(f),a&&a.l(f),l=L(f),b(t.$$.fragment,f)},m(f,i){for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(f,i);d(f,e,i),a&&a.m(f,i),d(f,l,i),k(t,f,i),r=!0},p(f,i){if(i[0]&8){s=f[3];let $;for($=0;$<s.length;$+=1){const P=ue(f,s,$);n[$]?(n[$].p(P,i),p(n[$],1)):(n[$]=he(P),n[$].c(),p(n[$],1),n[$].m(e.parentNode,e))}for(G(),$=s.length;$<n.length;$+=1)c($);q()}f[4]?a?(a.p(f,i),i[0]&16&&p(a,1)):(a=ge(f),a.c(),p(a,1),a.m(l.parentNode,l)):a&&(G(),_(a,1,1,()=>{a=null}),q());const u={};i[0]&4|i[1]&8&&(u.$$scope={dirty:i,ctx:f}),t.$set(u)},i(f){if(!r){for(let i=0;i<s.length;i+=1)p(n[i]);p(a),p(t.$$.fragment,f),r=!0}},o(f){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)_(n[i]);_(a),_(t.$$.fragment,f),r=!1},d(f){J(n,f),f&&m(e),a&&a.d(f),f&&m(l),E(t,f)}}}function tt(o){let e,l;return e=new Ee({props:{class:"bench",$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,r){k(e,t,r),l=!0},p(t,r){const s={};r[0]&28|r[1]&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function lt(o){let e,l,t,r,s,n,c,a;return Ne(o[16]),l=new re({props:{class:"teamInner","table$aria-label":"Team Name",style:"width: "+(o[7]*.95>380?380:o[7]*.95)+"px;",$$slots:{default:[Xe]},$$scope:{ctx:o}}}),s=new re({props:{class:"teamInner",style:"width: 380px",$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){e=C("div"),w(l.$$.fragment),t=H(),r=C("div"),w(s.$$.fragment),this.h()},l(f){e=D(f,"DIV",{class:!0});var i=A(e);b(l.$$.fragment,i),t=L(i),r=D(i,"DIV",{class:!0,style:!0});var u=A(r);b(s.$$.fragment,u),u.forEach(m),i.forEach(m),this.h()},h(){g(r,"class","rosterBench svelte-pesiwv"),se(r,"max-height",o[5]),g(e,"class","team svelte-pesiwv")},m(f,i){d(f,e,i),k(l,e,null),I(e,t),I(e,r),k(s,r,null),n=!0,c||(a=ke(window,"resize",o[16]),c=!0)},p(f,i){const u={};i[0]&128&&(u.style="width: "+(f[7]*.95>380?380:f[7]*.95)+"px;"),i[0]&1863|i[1]&8&&(u.$$scope={dirty:i,ctx:f}),l.$set(u);const $={};i[0]&28|i[1]&8&&($.$$scope={dirty:i,ctx:f}),s.$set($),(!n||i[0]&32)&&se(r,"max-height",f[5])},i(f){n||(p(l.$$.fragment,f),p(s.$$.fragment,f),n=!0)},o(f){_(l.$$.fragment,f),_(s.$$.fragment,f),n=!1},d(f){f&&m(e),E(l),E(s),c=!1,a()}}}function st(o,e,l){let t,r,s,{roster:n,leagueTeamManagers:c,startersAndReserve:a,players:f,rosterPositions:i,division:u,expanded:$}=e,P=0;const h=(v,z,V=!1,Ce=!1)=>{let K=[];for(const T of z){if(!V&&!Ce&&a.includes(T))continue;let X={},y="BN";if(V&&(y=i[P]=="WRRB_FLEX"?"WR/RB":i[P]),T=="0"){X={name:"Empty",poss:null,team:null,avatar:null,slot:y},P++,K.push(X);continue}let j=null;switch(v[T].is){case"Questionable":j="Q";break;case"Out":j="OUT";break;case"PUP":j="PUP";break;case"IR":j="IR";break}X={name:`${v[T].fn} ${v[T].ln}${j?`<span class="injury ${j}">${j}</span>`:""}`,nickname:n.metadata&&n.metadata[`p_nick_${T}`]?n.metadata[`p_nick_${T}`]:null,poss:v[T].pos,team:v[T].t,avatar:v[T].pos=="DEF"?`background-image: url(https://sleepercdn.com/images/team_logos/nfl/${T.toLowerCase()}.png)`:`background-image: url(https://sleepercdn.com/content/nfl/players/thumb/${T}.jpg), url(https://sleepercdn.com/images/v2/icons/player_default.webp)`,slot:y},P++,K.push(X)}return P=0,K};let B=[],S=null;n.reserve&&(S=h(f,n.reserve,!1,!0));const R=v=>{const z=[];if(!v.metadata||!v.metadata.record)return z;for(const V of v.metadata.record)switch(V){case"W":z.push("green");break;case"L":z.push("red");break;default:z.push("gray");break}return z};let F="0px",Q="minimized";const Re=()=>{l(5,F=F=="0px"?le()+"px":"0px"),l(6,Q=Q=="minimized"?"expanded":"minimized")};let te;const le=()=>{const z=B.length*52+53;let V=0;return S&&(V=S.length*52+52),z+V};function Ie(){l(7,te=window.innerWidth)}const Be=()=>Ae({leagueTeamManagers:c,rosterID:n.roster_id});return o.$$set=v=>{"roster"in v&&l(0,n=v.roster),"leagueTeamManagers"in v&&l(1,c=v.leagueTeamManagers),"startersAndReserve"in v&&l(12,a=v.startersAndReserve),"players"in v&&l(13,f=v.players),"rosterPositions"in v&&l(14,i=v.rosterPositions),"division"in v&&l(2,u=v.division),"expanded"in v&&l(15,$=v.expanded)},o.$$.update=()=>{o.$$.dirty[0]&3&&l(10,t=c.teamManagersMap[c.currentSeason][n.roster_id].team),o.$$.dirty[0]&8193&&l(9,r=h(f,n.starters,!0)),o.$$.dirty[0]&8193&&n.players&&l(3,B=h(f,n.players)),o.$$.dirty[0]&1&&l(8,s=R(n)),o.$$.dirty[0]&32768&&(l(5,F=$?le()+"px":"0px"),l(6,Q=$?"expanded":"minimized"))},[n,c,u,B,S,F,Q,te,s,r,t,Re,a,f,i,$,Ie,Be]}class ct extends ve{constructor(e){super(),we(this,e,st,lt,be,{roster:0,leagueTeamManagers:1,startersAndReserve:12,players:13,rosterPositions:14,division:2,expanded:15},null,[-1,-1])}}export{ct as R};