import"../chunks/singletons.6c6633c9.js";import{C as ue,D as Q}from"../chunks/records.35358e58.js";import{S as H,i as M,s as q,C as _e,D as Y,k as w,l as E,m as z,h as m,E as x,b as p,F as ee,H as pe,I as $e,J as de,K as ge,L as he,g as d,d as v,M as ve,N as te,O as be,R as ye,w as J,y as T,z as N,A as O,B as P,a as F,c as D,e as V,n as y,a2 as le,q as R,r as S,T as b,u as G,W as ke,v as fe,f as ce,X as we,Z as me,o as Ee,Y as L,a5 as Fe,a6 as De}from"../chunks/index.78a9f0bb.js";import{L as Te}from"../chunks/LinearProgress.dc184101.js";import{c as ae,u as Ne,f as Oe,i as Pe,j as ze,b as K}from"../chunks/index.svelte_svelte_type_style_lang.1b9663cd.js";import{P as Re}from"../chunks/Pagination.500383e7.js";import{L as Se,I as W,S as X,G as Z}from"../chunks/index.0ed6abb3.js";function Ae(i){let e,l,t,a,r,n;const o=i[12].default,s=_e(o,i,i[11],null);let c=[{class:l=ae({[i[1]]:!0,"smui-paper":!0,"smui-paper--raised":i[2]==="raised","smui-paper--unelevated":i[2]==="unelevated","smui-paper--outlined":i[2]==="outlined",["smui-paper--elevation-z"+i[5]]:i[5]!==0&&i[2]==="raised","smui-paper--rounded":!i[3],["smui-paper--color-"+i[4]]:i[4]!=="default","smui-paper-transition":i[6]})},i[9]],$={};for(let f=0;f<c.length;f+=1)$=Y($,c[f]);return{c(){e=w("div"),s&&s.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var u=z(e);s&&s.l(u),u.forEach(m),this.h()},h(){x(e,$)},m(f,u){p(f,e,u),s&&s.m(e,null),i[13](e),a=!0,r||(n=[ee(t=Ne.call(null,e,i[0])),ee(i[8].call(null,e))],r=!0)},p(f,[u]){s&&s.p&&(!a||u&2048)&&pe(s,o,f,f[11],a?de(o,f[11],u,null):$e(f[11]),null),x(e,$=ge(c,[(!a||u&126&&l!==(l=ae({[f[1]]:!0,"smui-paper":!0,"smui-paper--raised":f[2]==="raised","smui-paper--unelevated":f[2]==="unelevated","smui-paper--outlined":f[2]==="outlined",["smui-paper--elevation-z"+f[5]]:f[5]!==0&&f[2]==="raised","smui-paper--rounded":!f[3],["smui-paper--color-"+f[4]]:f[4]!=="default","smui-paper-transition":f[6]})))&&{class:l},u&512&&f[9]])),t&&he(t.update)&&u&1&&t.update.call(null,f[0])},i(f){a||(d(s,f),a=!0)},o(f){v(s,f),a=!1},d(f){f&&m(e),s&&s.d(f),i[13](null),r=!1,ve(n)}}}function Ce(i,e,l){const t=["use","class","variant","square","color","elevation","transition","getElement"];let a=te(e,t),{$$slots:r={},$$scope:n}=e;const o=Oe(be());let{use:s=[]}=e,{class:c=""}=e,{variant:$="raised"}=e,{square:f=!1}=e,{color:u="default"}=e,{elevation:g=1}=e,{transition:I=!1}=e,C;function _(){return C}function k(h){J[h?"unshift":"push"](()=>{C=h,l(7,C)})}return i.$$set=h=>{e=Y(Y({},e),ye(h)),l(9,a=te(e,t)),"use"in h&&l(0,s=h.use),"class"in h&&l(1,c=h.class),"variant"in h&&l(2,$=h.variant),"square"in h&&l(3,f=h.square),"color"in h&&l(4,u=h.color),"elevation"in h&&l(5,g=h.elevation),"transition"in h&&l(6,I=h.transition),"$$scope"in h&&l(11,n=h.$$scope)},[s,c,$,f,u,g,I,C,o,a,_,n,r,k]}class Ie extends H{constructor(e){super(),M(this,e,Ce,Ae,q,{use:0,class:1,variant:2,square:3,color:4,elevation:5,transition:6,getElement:10})}get getElement(){return this.$$.ctx[10]}}function Le(i){let e=i[0].title+"",l;return{c(){l=R(e)},l(t){l=S(t,e)},m(t,a){p(t,l,a)},p(t,a){a&1&&e!==(e=t[0].title+"")&&G(l,e)},d(t){t&&m(l)}}}function Ve(i){let e,l=i[0].title+"",t,a;return{c(){e=w("a"),t=R(l),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0});var n=z(e);t=S(n,l),n.forEach(m),this.h()},h(){y(e,"href",a=i[0].link),y(e,"target","_blank"),y(e,"class","title-link svelte-z26sd2")},m(r,n){p(r,e,n),b(e,t)},p(r,n){n&1&&l!==(l=r[0].title+"")&&G(t,l),n&1&&a!==(a=r[0].link)&&y(e,"href",a)},d(r){r&&m(e)}}}function Be(i){let e,l,t,a;function r(s,c){return s[0].link?Ve:Le}let n=r(i),o=n(i);return{c(){e=w("img"),t=F(),o.c(),a=V(),this.h()},l(s){e=E(s,"IMG",{class:!0,src:!0,alt:!0}),t=D(s),o.l(s),a=V(),this.h()},h(){y(e,"class","icon svelte-z26sd2"),le(e.src,l=i[0].icon)||y(e,"src",l),y(e,"alt","article thumbnial")},m(s,c){p(s,e,c),p(s,t,c),o.m(s,c),p(s,a,c)},p(s,c){c&1&&!le(e.src,l=s[0].icon)&&y(e,"src",l),n===(n=r(s))&&o?o.p(s,c):(o.d(1),o=n(s),o&&(o.c(),o.m(a.parentNode,a)))},d(s){s&&m(e),s&&m(t),o.d(s),s&&m(a)}}}function re(i){let e,l=i[0].author+"",t;return{c(){e=w("span"),t=R(l),this.h()},l(a){e=E(a,"SPAN",{class:!0});var r=z(e);t=S(r,l),r.forEach(m),this.h()},h(){y(e,"class","author")},m(a,r){p(a,e,r),b(e,t)},p(a,r){r&1&&l!==(l=a[0].author+"")&&G(t,l)},d(a){a&&m(e)}}}function He(i){let e,l,t=i[0].article+"",a,r,n,o,s,c=i[0].date+"",$,f=i[0].author&&re(i);return{c(){e=w("div"),l=w("div"),a=F(),r=w("hr"),n=F(),f&&f.c(),o=F(),s=w("span"),$=R(c),this.h()},l(u){e=E(u,"DIV",{class:!0});var g=z(e);l=E(g,"DIV",{class:!0});var I=z(l);I.forEach(m),g.forEach(m),a=D(u),r=E(u,"HR",{}),n=D(u),f&&f.l(u),o=D(u),s=E(u,"SPAN",{class:!0});var C=z(s);$=S(C,c),C.forEach(m),this.h()},h(){y(l,"class","body-text svelte-z26sd2"),y(e,"class","body svelte-z26sd2"),y(s,"class","date svelte-z26sd2")},m(u,g){p(u,e,g),b(e,l),l.innerHTML=t,p(u,a,g),p(u,r,g),p(u,n,g),f&&f.m(u,g),p(u,o,g),p(u,s,g),b(s,$)},p(u,g){g&1&&t!==(t=u[0].article+"")&&(l.innerHTML=t),u[0].author?f?f.p(u,g):(f=re(u),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null),g&1&&c!==(c=u[0].date+"")&&G($,c)},d(u){u&&m(e),u&&m(a),u&&m(r),u&&m(n),f&&f.d(u),u&&m(o),u&&m(s)}}}function Me(i){let e,l,t,a;return e=new Pe({props:{class:"article-title",$$slots:{default:[Be]},$$scope:{ctx:i}}}),t=new ze({props:{$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment),l=F(),T(t.$$.fragment)},l(r){N(e.$$.fragment,r),l=D(r),N(t.$$.fragment,r)},m(r,n){O(e,r,n),p(r,l,n),O(t,r,n),a=!0},p(r,n){const o={};n&3&&(o.$$scope={dirty:n,ctx:r}),e.$set(o);const s={};n&3&&(s.$$scope={dirty:n,ctx:r}),t.$set(s)},i(r){a||(d(e.$$.fragment,r),d(t.$$.fragment,r),a=!0)},o(r){v(e.$$.fragment,r),v(t.$$.fragment,r),a=!1},d(r){P(e,r),r&&m(l),P(t,r)}}}function qe(i){let e,l;return e=new Ie({props:{class:"article",elevation:"3",$$slots:{default:[Me]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p(t,[a]){const r={};a&3&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function Ge(i,e,l){let{article:t}=e;return i.$$set=a=>{"article"in a&&l(0,t=a.article)},[t]}class je extends H{constructor(e){super(),M(this,e,Ge,qe,q,{article:0})}}function se(i,e,l){const t=i.slice();return t[13]=e[l],t}function ne(i){let e,l;return e=new je({props:{article:i[13]}}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p(t,a){const r={};a&8&&(r.article=t[13]),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function Ye(i){let e,l,t,a,r,n,o,s,c,$,f=i[3],u=[];for(let _=0;_<f.length;_+=1)u[_]=ne(se(i,f,_));const g=_=>v(u[_],1,1,()=>{u[_]=null});function I(_){i[8](_)}let C={perPage:U,total:i[2],target:i[4]};return i[0]!==void 0&&(C.page=i[0]),s=new Re({props:C}),J.push(()=>ke(s,"page",I)),{c(){e=w("div"),l=w("div"),t=w("h4"),a=R("Fantasy Football News and Updates"),r=F(),n=w("div");for(let _=0;_<u.length;_+=1)u[_].c();o=F(),T(s.$$.fragment),this.h()},l(_){e=E(_,"DIV",{class:!0});var k=z(e);l=E(k,"DIV",{class:!0});var h=z(l);t=E(h,"H4",{class:!0});var A=z(t);a=S(A,"Fantasy Football News and Updates"),A.forEach(m),h.forEach(m),r=D(k),n=E(k,"DIV",{class:!0});var B=z(n);for(let j=0;j<u.length;j+=1)u[j].l(B);o=D(B),N(s.$$.fragment,B),B.forEach(m),k.forEach(m),this.h()},h(){y(t,"class","svelte-csdux7"),y(l,"class","banner"),y(n,"class","articles svelte-csdux7"),y(e,"class","pageBody svelte-csdux7")},m(_,k){p(_,e,k),b(e,l),b(l,t),b(t,a),i[7](l),b(e,r),b(e,n);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(n,null);b(n,o),O(s,n,null),$=!0},p(_,[k]){if(k&8){f=_[3];let A;for(A=0;A<f.length;A+=1){const B=se(_,f,A);u[A]?(u[A].p(B,k),d(u[A],1)):(u[A]=ne(B),u[A].c(),d(u[A],1),u[A].m(n,o))}for(fe(),A=f.length;A<u.length;A+=1)g(A);ce()}const h={};k&4&&(h.total=_[2]),k&16&&(h.target=_[4]),!c&&k&1&&(c=!0,h.page=_[0],we(()=>c=!1)),s.$set(h)},i(_){if(!$){for(let k=0;k<f.length;k+=1)d(u[k]);d(s.$$.fragment,_),$=!0}},o(_){u=u.filter(Boolean);for(let k=0;k<u.length;k+=1)v(u[k]);v(s.$$.fragment,_),$=!1},d(_){_&&m(e),i[7](null),me(u,_),P(s)}}}const U=10;function Ue(i,e,l){let t,{news:a}=e,{articles:r,fresh:n}=a;Ee(async()=>{n||o()});const o=async()=>{const _=await ue(null,!0);l(6,r=_.articles)};let s=0,c=0,$=[];const f=_=>{l(2,s=_.length)},u=_=>{const k=_*U,h=(_+1)*U;l(3,$=r.slice(k,h)),l(0,c=_)};let g;function I(_){J[_?"unshift":"push"](()=>{g=_,l(1,g)})}function C(_){c=_,l(0,c)}return i.$$set=_=>{"news"in _&&l(5,a=_.news)},i.$$.update=()=>{i.$$.dirty&64&&f(r),i.$$.dirty&1&&u(c),i.$$.dirty&2&&l(4,t=g!=null&&g.getBoundingClientRect()?g==null?void 0:g.getBoundingClientRect().top:0)},[c,g,s,$,t,a,r,I,C]}class Je extends H{constructor(e){super(),M(this,e,Ue,Ye,q,{news:5})}}function ie(i,e,l){const t=i.slice();return t[2]=e[l],t}function Ke(i){let e,l,t,a,r;l=new W({props:{$$slots:{default:[et]},$$scope:{ctx:i}}});let n=i[2].separator&&tt();return{c(){e=w("a"),T(l.$$.fragment),t=F(),n&&n.c(),a=F(),this.h()},l(o){e=E(o,"A",{target:!0,href:!0,class:!0});var s=z(e);N(l.$$.fragment,s),t=D(s),n&&n.l(s),a=D(s),s.forEach(m),this.h()},h(){y(e,"target","_blank"),y(e,"href",i[2].url),y(e,"class","svelte-11v79lo")},m(o,s){p(o,e,s),O(l,e,null),b(e,t),n&&n.m(e,null),b(e,a),r=!0},p(o,s){const c={};s&32&&(c.$$scope={dirty:s,ctx:o}),l.$set(c)},i(o){r||(d(l.$$.fragment,o),d(n),r=!0)},o(o){v(l.$$.fragment,o),v(n),r=!1},d(o){o&&m(e),P(l),n&&n.d()}}}function We(i){let e,l,t,a,r;l=new W({props:{$$slots:{default:[st]},$$scope:{ctx:i}}});let n=i[2].separator&&nt();return{c(){e=w("a"),T(l.$$.fragment),t=F(),n&&n.c(),a=F(),this.h()},l(o){e=E(o,"A",{target:!0,href:!0,class:!0});var s=z(e);N(l.$$.fragment,s),t=D(s),n&&n.l(s),a=D(s),s.forEach(m),this.h()},h(){y(e,"target","_blank"),y(e,"href",i[2].url),y(e,"class","svelte-11v79lo")},m(o,s){p(o,e,s),O(l,e,null),b(e,t),n&&n.m(e,null),b(e,a),r=!0},p(o,s){const c={};s&32&&(c.$$scope={dirty:s,ctx:o}),l.$set(c)},i(o){r||(d(l.$$.fragment,o),d(n),r=!0)},o(o){v(l.$$.fragment,o),v(n),r=!1},d(o){o&&m(e),P(l),n&&n.d()}}}function Xe(i){let e,l,t,a,r;l=new W({props:{$$slots:{default:[ft]},$$scope:{ctx:i}}});let n=i[2].separator&&ct();return{c(){e=w("a"),T(l.$$.fragment),t=F(),n&&n.c(),a=F(),this.h()},l(o){e=E(o,"A",{target:!0,href:!0,class:!0});var s=z(e);N(l.$$.fragment,s),t=D(s),n&&n.l(s),a=D(s),s.forEach(m),this.h()},h(){y(e,"target","_blank"),y(e,"href",i[2].url),y(e,"class","svelte-11v79lo")},m(o,s){p(o,e,s),O(l,e,null),b(e,t),n&&n.m(e,null),b(e,a),r=!0},p(o,s){const c={};s&32&&(c.$$scope={dirty:s,ctx:o}),l.$set(c)},i(o){r||(d(l.$$.fragment,o),d(n),r=!0)},o(o){v(l.$$.fragment,o),v(n),r=!1},d(o){o&&m(e),P(l),n&&n.d()}}}function Ze(i){let e,l;return e=new Z({props:{class:"material-icons",$$slots:{default:[Qe]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p(t,a){const r={};a&32&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function Qe(i){let e=i[2].icon+"",l;return{c(){l=R(e)},l(t){l=S(t,e)},m(t,a){p(t,l,a)},p:L,d(t){t&&m(l)}}}function xe(i){let e=i[2].name+"",l,t=i[2].premium?"*":"",a;return{c(){l=R(e),a=R(t)},l(r){l=S(r,e),a=S(r,t)},m(r,n){p(r,l,n),p(r,a,n)},p:L,d(r){r&&m(l),r&&m(a)}}}function et(i){let e,l,t,a=i[2].icon&&Ze(i);return l=new K({props:{class:"linkText",$$slots:{default:[xe]},$$scope:{ctx:i}}}),{c(){a&&a.c(),e=F(),T(l.$$.fragment)},l(r){a&&a.l(r),e=D(r),N(l.$$.fragment,r)},m(r,n){a&&a.m(r,n),p(r,e,n),O(l,r,n),t=!0},p(r,n){r[2].icon&&a.p(r,n);const o={};n&32&&(o.$$scope={dirty:n,ctx:r}),l.$set(o)},i(r){t||(d(a),d(l.$$.fragment,r),t=!0)},o(r){v(a),v(l.$$.fragment,r),t=!1},d(r){a&&a.d(r),r&&m(e),P(l,r)}}}function tt(i){let e,l;return e=new X({}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function lt(i){let e,l;return e=new Z({props:{class:"material-icons",$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p(t,a){const r={};a&32&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function at(i){let e=i[2].icon+"",l;return{c(){l=R(e)},l(t){l=S(t,e)},m(t,a){p(t,l,a)},p:L,d(t){t&&m(l)}}}function rt(i){let e=i[2].name+"",l,t=i[2].premium?"*":"",a;return{c(){l=R(e),a=R(t)},l(r){l=S(r,e),a=S(r,t)},m(r,n){p(r,l,n),p(r,a,n)},p:L,d(r){r&&m(l),r&&m(a)}}}function st(i){let e,l,t,a=i[2].icon&&lt(i);return l=new K({props:{class:"linkText",$$slots:{default:[rt]},$$scope:{ctx:i}}}),{c(){a&&a.c(),e=F(),T(l.$$.fragment)},l(r){a&&a.l(r),e=D(r),N(l.$$.fragment,r)},m(r,n){a&&a.m(r,n),p(r,e,n),O(l,r,n),t=!0},p(r,n){r[2].icon&&a.p(r,n);const o={};n&32&&(o.$$scope={dirty:n,ctx:r}),l.$set(o)},i(r){t||(d(a),d(l.$$.fragment,r),t=!0)},o(r){v(a),v(l.$$.fragment,r),t=!1},d(r){a&&a.d(r),r&&m(e),P(l,r)}}}function nt(i){let e,l;return e=new X({}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function it(i){let e,l;return e=new Z({props:{class:"material-icons",$$slots:{default:[ot]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p(t,a){const r={};a&32&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function ot(i){let e=i[2].icon+"",l;return{c(){l=R(e)},l(t){l=S(t,e)},m(t,a){p(t,l,a)},p:L,d(t){t&&m(l)}}}function ut(i){let e=i[2].name+"",l,t=i[2].premium?"*":"",a;return{c(){l=R(e),a=R(t)},l(r){l=S(r,e),a=S(r,t)},m(r,n){p(r,l,n),p(r,a,n)},p:L,d(r){r&&m(l),r&&m(a)}}}function ft(i){let e,l,t,a=i[2].icon&&it(i);return l=new K({props:{class:"linkText",$$slots:{default:[ut]},$$scope:{ctx:i}}}),{c(){a&&a.c(),e=F(),T(l.$$.fragment)},l(r){a&&a.l(r),e=D(r),N(l.$$.fragment,r)},m(r,n){a&&a.m(r,n),p(r,e,n),O(l,r,n),t=!0},p(r,n){r[2].icon&&a.p(r,n);const o={};n&32&&(o.$$scope={dirty:n,ctx:r}),l.$set(o)},i(r){t||(d(a),d(l.$$.fragment,r),t=!0)},o(r){v(a),v(l.$$.fragment,r),t=!1},d(r){a&&a.d(r),r&&m(e),P(l,r)}}}function ct(i){let e,l;return e=new X({}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function oe(i){let e,l,t,a;const r=[Xe,We,Ke],n=[];function o(s,c){return s[2].dynastyOnly&&Q?0:s[2].redraftOnly&&!Q?1:!s[2].redraftOnly&&!s[2].dynastyOnly?2:-1}return~(e=o(i))&&(l=n[e]=r[e](i)),{c(){l&&l.c(),t=V()},l(s){l&&l.l(s),t=V()},m(s,c){~e&&n[e].m(s,c),p(s,t,c),a=!0},p(s,c){l&&l.p(s,c)},i(s){a||(d(l),a=!0)},o(s){v(l),a=!1},d(s){~e&&n[e].d(s),s&&m(t)}}}function mt(i){let e,l,t=i[0],a=[];for(let n=0;n<t.length;n+=1)a[n]=oe(ie(i,t,n));const r=n=>v(a[n],1,1,()=>{a[n]=null});return{c(){for(let n=0;n<a.length;n+=1)a[n].c();e=V()},l(n){for(let o=0;o<a.length;o+=1)a[o].l(n);e=V()},m(n,o){for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(n,o);p(n,e,o),l=!0},p(n,o){if(o&1){t=n[0];let s;for(s=0;s<t.length;s+=1){const c=ie(n,t,s);a[s]?(a[s].p(c,o),d(a[s],1)):(a[s]=oe(c),a[s].c(),d(a[s],1),a[s].m(e.parentNode,e))}for(fe(),s=t.length;s<a.length;s+=1)r(s);ce()}},i(n){if(!l){for(let o=0;o<t.length;o+=1)d(a[o]);l=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)v(a[o]);l=!1},d(n){me(a,n),n&&m(e)}}}function _t(i){let e,l,t,a,r,n,o,s,c,$;return n=new Se({props:{class:"list",dense:!0,$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){e=w("div"),l=w("div"),t=w("h4"),a=R("Helpful Dynasty Resources"),r=F(),T(n.$$.fragment),o=F(),s=w("p"),c=R("*Some or all content is behind a paywall"),this.h()},l(f){e=E(f,"DIV",{class:!0});var u=z(e);l=E(u,"DIV",{class:!0});var g=z(l);t=E(g,"H4",{class:!0});var I=z(t);a=S(I,"Helpful Dynasty Resources"),I.forEach(m),g.forEach(m),r=D(u),N(n.$$.fragment,u),o=D(u),s=E(u,"P",{class:!0});var C=z(s);c=S(C,"*Some or all content is behind a paywall"),C.forEach(m),u.forEach(m),this.h()},h(){y(t,"class","svelte-11v79lo"),y(l,"class","banner"),y(s,"class","disclaimer svelte-11v79lo"),y(e,"class","pageBody svelte-11v79lo")},m(f,u){p(f,e,u),b(e,l),b(l,t),b(t,a),b(e,r),O(n,e,null),b(e,o),b(e,s),b(s,c),$=!0},p(f,[u]){const g={};u&32&&(g.$$scope={dirty:u,ctx:f}),n.$set(g)},i(f){$||(d(n.$$.fragment,f),$=!0)},o(f){v(n.$$.fragment,f),$=!1},d(f){f&&m(e),P(n)}}}function pt(i){const e=new Date;return[[{name:"FTN Fantasy",url:"https://www.ftnfantasy.com/nfl",icon:"insights",premium:!0,separator:!0},{name:"The Fantasy Footballers",url:"https://www.thefantasyfootballers.com/",icon:"podcasts",premium:!0,separator:!0},{name:"FantasyPros Dynasty Trade Value Chart",url:`https://www.fantasypros.com/${e.getFullYear()}/${e.getMonth()+1}/fantasy-football-rankings-dynasty-trade-value-chart-${e.toLocaleString("default",{month:"long"}).toLowerCase()}-${e.getFullYear()}-update/`,icon:"assessment",premium:!1,separator:!0,dynastyOnly:!0},{name:"DynastyProcess Trade Calculator",url:"https://apps.dynastyprocess.com/calculator/",icon:"calculate",premium:!1,separator:!0,dynastyOnly:!0},{name:"Dynasty League Football",url:"https://dynastyleaguefootball.com/",icon:"insights",premium:!0,separator:!0,dynastyOnly:!0},{name:"Reddit Dynasty Fantasy Football",url:"https://www.reddit.com/r/DynastyFF/",icon:"article",premium:!1,separator:!0,dynastyOnly:!0},{name:"Reddit Fantasy Football",url:"https://www.reddit.com/r/fantasyfootball/",icon:"article",premium:!1,separator:!0,redraftOnly:!0},{name:"Dynasty 101 Trade Calculator",url:"https://dynasty101.com/trade-calculator/",icon:"calculate",premium:!1,separator:!0,dynastyOnly:!0},{name:"Dynasty Nerds GM",url:"https://gm.dynastynerds.com/",icon:"insights",premium:!0,separator:!0,dynastyOnly:!0},{name:"Fantasy Football Trade Analyzer",url:"https://fantasyfootballcalculator.com/trade-analyzer",icon:"calculate",premium:!1,separator:!0,redraftOnly:!0},{name:"Reddit FF Trade Analyzer",url:"https://www.reddit.com/r/TradeAnalyzerFF/",icon:"assessment",premium:!1,separator:!0},{name:"FantasyCalc Trade Calculator",url:"https://www.fantasycalc.com/trade-calculator",icon:"calculate",premium:!1,separator:!1,dynastyOnly:!1}]]}class $t extends H{constructor(e){super(),M(this,e,pt,_t,q,{})}}async function dt({fetch:i}){return{articlesData:ue(i)}}const Ot=Object.freeze(Object.defineProperty({__proto__:null,load:dt},Symbol.toStringTag,{value:"Module"}));function gt(i){let e,l,t=i[3].message+"",a;return{c(){e=w("p"),l=R("Something went wrong: "),a=R(t)},l(r){e=E(r,"P",{});var n=z(e);l=S(n,"Something went wrong: "),a=S(n,t),n.forEach(m)},m(r,n){p(r,e,n),b(e,l),b(e,a)},p:L,i:L,o:L,d(r){r&&m(e)}}}function ht(i){let e,l;return e=new Je({props:{news:i[2]}}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p:L,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function vt(i){let e,l,t,a,r,n,o,s;return o=new Te({props:{indeterminate:!0}}),{c(){e=w("div"),l=w("p"),t=R("Retrieving fantasy news..."),a=F(),r=w("br"),n=F(),T(o.$$.fragment),this.h()},l(c){e=E(c,"DIV",{class:!0});var $=z(e);l=E($,"P",{});var f=z(l);t=S(f,"Retrieving fantasy news..."),f.forEach(m),a=D($),r=E($,"BR",{}),n=D($),N(o.$$.fragment,$),$.forEach(m),this.h()},h(){y(e,"class","loading svelte-6mz26e")},m(c,$){p(c,e,$),b(e,l),b(l,t),b(e,a),b(e,r),b(e,n),O(o,e,null),s=!0},p:L,i(c){s||(d(o.$$.fragment,c),s=!0)},o(c){v(o.$$.fragment,c),s=!1},d(c){c&&m(e),P(o)}}}function bt(i){let e,l,t,a,r,n;e=new $t({});let o={ctx:i,current:null,token:null,hasCatch:!0,pending:vt,then:ht,catch:gt,value:2,error:3,blocks:[,,,]};return Fe(i[0],o),{c(){T(e.$$.fragment),l=F(),t=w("hr"),a=F(),r=V(),o.block.c()},l(s){N(e.$$.fragment,s),l=D(s),t=E(s,"HR",{}),a=D(s),r=V(),o.block.l(s)},m(s,c){O(e,s,c),p(s,l,c),p(s,t,c),p(s,a,c),p(s,r,c),o.block.m(s,o.anchor=c),o.mount=()=>r.parentNode,o.anchor=r,n=!0},p(s,[c]){i=s,De(o,i,c)},i(s){n||(d(e.$$.fragment,s),d(o.block),n=!0)},o(s){v(e.$$.fragment,s);for(let c=0;c<3;c+=1){const $=o.blocks[c];v($)}n=!1},d(s){P(e,s),s&&m(l),s&&m(t),s&&m(a),s&&m(r),o.block.d(s),o.token=null,o=null}}}function yt(i,e,l){let{data:t}=e;const a=t.articlesData;return i.$$set=r=>{"data"in r&&l(1,t=r.data)},[a,t]}class Pt extends H{constructor(e){super(),M(this,e,yt,bt,q,{data:1})}}export{Pt as component,Ot as universal};
