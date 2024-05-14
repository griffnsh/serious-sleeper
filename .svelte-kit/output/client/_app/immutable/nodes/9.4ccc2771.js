import{t as me,x as ke,y as Ie,g as he,a as ve,m as U}from"../chunks/records.35358e58.js";import{g as be}from"../chunks/leagueTeamManagers.c0fc25fc.js";import"../chunks/singletons.6c6633c9.js";import{S as X,i as x,s as ee,k as d,a as V,q,l as g,m as k,c as y,h as o,r as G,n as i,a2 as C,b as M,T as v,G as pe,u as Z,Y as S,a0 as De,g as R,v as Me,f as Ee,d as N,Z as we,y as te,z as ae,A as se,B as le,a5 as Te,a6 as Ve,o as ye,e as de}from"../chunks/index.78a9f0bb.js";import{L as Ce}from"../chunks/LinearProgress.dc184101.js";import"../chunks/index.svelte_svelte_type_style_lang.1b9663cd.js";function $e(r){let e,t,a;return{c(){e=d("div"),t=d("span"),a=q("C"),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=k(e);t=g(l,"SPAN",{});var n=k(t);a=G(n,"C"),n.forEach(o),l.forEach(o),this.h()},h(){i(e,"class","commissionerBadge svelte-1svieuk")},m(s,l){M(s,e,l),v(e,t),v(t,a)},d(s){s&&o(e)}}}function Se(r){let e,t,a;return{c(){e=d("div"),t=d("img"),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=k(e);t=g(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(o),this.h()},h(){i(t,"class","infoImg svelte-1svieuk"),C(t.src,a="/managers/question.jpg")||i(t,"src",a),i(t,"alt","favorite team"),i(e,"class","infoIcon question svelte-1svieuk")},m(s,l){M(s,e,l),v(e,t)},p:S,d(s){s&&o(e)}}}function qe(r){let e,t,a;return{c(){e=d("div"),t=d("img"),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=k(e);t=g(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(o),this.h()},h(){i(t,"class","infoImg svelte-1svieuk"),C(t.src,a="https://sleepercdn.com/images/team_logos/nfl/"+r[0].favoriteTeam+".png")||i(t,"src",a),i(t,"alt","favorite team"),i(e,"class","infoIcon svelte-1svieuk")},m(s,l){M(s,e,l),v(e,t)},p(s,l){l&1&&!C(t.src,a="https://sleepercdn.com/images/team_logos/nfl/"+s[0].favoriteTeam+".png")&&i(t,"src",a)},d(s){s&&o(e)}}}function Ge(r){let e,t,a;return{c(){e=d("div"),t=d("img"),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=k(e);t=g(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(o),this.h()},h(){i(t,"class","infoImg svelte-1svieuk"),C(t.src,a="/managers/question.jpg")||i(t,"src",a),i(t,"alt","favorite team"),i(e,"class","infoIcon question svelte-1svieuk")},m(s,l){M(s,e,l),v(e,t)},p:S,d(s){s&&o(e)}}}function Ae(r){let e,t,a,s,l,n,m=r[0].preferredContact+"",c;return{c(){e=d("div"),t=d("img"),l=V(),n=d("div"),c=q(m),this.h()},l(u){e=g(u,"DIV",{class:!0});var h=k(e);t=g(h,"IMG",{class:!0,src:!0,alt:!0}),h.forEach(o),l=y(u),n=g(u,"DIV",{class:!0});var f=k(n);c=G(f,m),f.forEach(o),this.h()},h(){i(t,"class","infoImg svelte-1svieuk"),C(t.src,a="/"+r[0].preferredContact+".png")||i(t,"src",a),i(t,"alt",s=r[0].preferredContact),i(e,"class","infoIcon svelte-1svieuk"),i(n,"class","infoAnswer svelte-1svieuk")},m(u,h){M(u,e,h),v(e,t),M(u,l,h),M(u,n,h),v(n,c)},p(u,h){h&1&&!C(t.src,a="/"+u[0].preferredContact+".png")&&i(t,"src",a),h&1&&s!==(s=u[0].preferredContact)&&i(t,"alt",s),h&1&&m!==(m=u[0].preferredContact+"")&&Z(c,m)},d(u){u&&o(e),u&&o(l),u&&o(n)}}}function Pe(r){let e;function t(l,n){return l[0].mode?Re:je}let a=t(r),s=a(r);return{c(){e=d("div"),s.c(),this.h()},l(l){e=g(l,"DIV",{class:!0});var n=k(e);s.l(n),n.forEach(o),this.h()},h(){i(e,"class","infoSlot infoRebuild svelte-1svieuk")},m(l,n){M(l,e,n),s.m(e,null)},p(l,n){a===(a=t(l))&&s?s.p(l,n):(s.d(1),s=a(l),s&&(s.c(),s.m(e,null)))},d(l){l&&o(e),s.d()}}}function je(r){let e,t,a;return{c(){e=d("div"),t=d("img"),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=k(e);t=g(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(o),this.h()},h(){i(t,"class","infoImg svelte-1svieuk"),C(t.src,a="/managers/question.jpg")||i(t,"src",a),i(t,"alt","favorite team"),i(e,"class","infoIcon question svelte-1svieuk")},m(s,l){M(s,e,l),v(e,t)},p:S,d(s){s&&o(e)}}}function Re(r){let e,t,a,s,l,n=r[0].mode+"",m;return{c(){e=d("div"),t=d("img"),s=V(),l=d("div"),m=q(n),this.h()},l(c){e=g(c,"DIV",{class:!0});var u=k(e);t=g(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(o),s=y(c),l=g(c,"DIV",{class:!0});var h=k(l);m=G(h,n),h.forEach(o),this.h()},h(){i(t,"class","infoImg svelte-1svieuk"),C(t.src,a="/"+r[0].mode.replace(" ","%20")+".png")||i(t,"src",a),i(t,"alt","win now or rebuild"),i(e,"class","infoIcon svelte-1svieuk"),i(l,"class","infoAnswer svelte-1svieuk")},m(c,u){M(c,e,u),v(e,t),M(c,s,u),M(c,l,u),v(l,m)},p(c,u){u&1&&!C(t.src,a="/"+c[0].mode.replace(" ","%20")+".png")&&i(t,"src",a),u&1&&n!==(n=c[0].mode+"")&&Z(m,n)},d(c){c&&o(e),c&&o(s),c&&o(l)}}}function ze(r){let e,t,a,s,l,n,m,c,u=r[0].name+"",h,f,P,_=me(r[1],r[4],r[5])+"",D,p,E,z,$,B,J,L,K,H,Q,re,j=r[6]&&$e();function ne(I,b){return I[0].favoriteTeam?qe:Se}let O=ne(r),w=O(r);function ie(I,b){return I[0].preferredContact?Ae:Ge}let W=ie(r),T=W(r),A=Pe(r);return{c(){e=d("div"),t=d("div"),a=d("img"),n=V(),j&&j.c(),m=V(),c=d("div"),h=q(u),f=V(),P=d("div"),D=q(_),p=V(),E=d("div"),z=V(),$=d("div"),B=d("div"),w.c(),J=V(),L=d("div"),T.c(),K=V(),A&&A.c(),this.h()},l(I){e=g(I,"DIV",{class:!0,style:!0});var b=k(e);t=g(b,"DIV",{class:!0});var Y=k(t);a=g(Y,"IMG",{class:!0,src:!0,alt:!0}),n=y(Y),j&&j.l(Y),Y.forEach(o),m=y(b),c=g(b,"DIV",{class:!0});var oe=k(c);h=G(oe,u),oe.forEach(o),f=y(b),P=g(b,"DIV",{class:!0});var ce=k(P);D=G(ce,_),ce.forEach(o),p=y(b),E=g(b,"DIV",{class:!0}),k(E).forEach(o),z=y(b),$=g(b,"DIV",{class:!0});var F=k($);B=g(F,"DIV",{class:!0});var ue=k(B);w.l(ue),ue.forEach(o),J=y(F),L=g(F,"DIV",{class:!0});var fe=k(L);T.l(fe),fe.forEach(o),K=y(F),A&&A.l(F),F.forEach(o),b.forEach(o),this.h()},h(){i(a,"class","photo svelte-1svieuk"),C(a.src,s=r[0].photo)||i(a,"src",s),i(a,"alt",l=r[0].name),i(t,"class","avatarHolder svelte-1svieuk"),i(c,"class","name svelte-1svieuk"),i(P,"class","team svelte-1svieuk"),i(E,"class","spacer svelte-1svieuk"),i(B,"class","infoSlot infoTeam svelte-1svieuk"),i(L,"class","infoSlot svelte-1svieuk"),i($,"class","info svelte-1svieuk"),i(e,"class","manager svelte-1svieuk"),i(e,"style",H=r[3]?"background-image: url(/retired.png); background-color: var(--ddd)":"")},m(I,b){M(I,e,b),v(e,t),v(t,a),v(t,n),j&&j.m(t,null),v(e,m),v(e,c),v(c,h),v(e,f),v(e,P),v(P,D),v(e,p),v(e,E),v(e,z),v(e,$),v($,B),w.m(B,null),v($,J),v($,L),T.m(L,null),v($,K),A&&A.m($,null),Q||(re=pe(e,"click",r[7]),Q=!0)},p(I,[b]){b&1&&!C(a.src,s=I[0].photo)&&i(a,"src",s),b&1&&l!==(l=I[0].name)&&i(a,"alt",l),b&1&&u!==(u=I[0].name+"")&&Z(h,u),b&50&&_!==(_=me(I[1],I[4],I[5])+"")&&Z(D,_),O===(O=ne(I))&&w?w.p(I,b):(w.d(1),w=O(I),w&&(w.c(),w.m(B,null))),W===(W=ie(I))&&T?T.p(I,b):(T.d(1),T=W(I),T&&(T.c(),T.m(L,null))),A.p(I,b),b&8&&H!==(H=I[3]?"background-image: url(/retired.png); background-color: var(--ddd)":"")&&i(e,"style",H)},i:S,o:S,d(I){I&&o(e),j&&j.d(),w.d(),T.d(),A&&A.d(),Q=!1,re()}}}function Be(r,e,t){let{manager:a,leagueTeamManagers:s,key:l}=e,n=!1,m=a.roster,c=null;a.managerID&&(ke(s,a.managerID).end&&(n=!0),{rosterID:m,year:c}=Ie(s,a.managerID)||{rosterID:m,year:c});const u=a.managerID?s.users[a.managerID].is_owner:!1,h=()=>he(`/manager?manager=${l}`);return r.$$set=f=>{"manager"in f&&t(0,a=f.manager),"leagueTeamManagers"in f&&t(1,s=f.leagueTeamManagers),"key"in f&&t(2,l=f.key)},[a,s,l,n,m,c,u,h]}class Le extends X{constructor(e){super(),x(this,e,Be,ze,ee,{manager:0,leagueTeamManagers:1,key:2})}}function ge(r,e,t){const a=r.slice();return a[4]=e[t],a[6]=t,a}function _e(r){let e,t;return e=new Le({props:{manager:r[4],leagueTeamManagers:r[1],key:r[6]}}),{c(){te(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,s){se(e,a,s),t=!0},p(a,s){const l={};s&1&&(l.manager=a[4]),s&2&&(l.leagueTeamManagers=a[1]),e.$set(l)},i(a){t||(R(e.$$.fragment,a),t=!0)},o(a){N(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function Ne(r){let e,t,a,s,l,n,m,c,u;De(r[3]);let h=r[0],f=[];for(let _=0;_<h.length;_+=1)f[_]=_e(ge(r,h,_));const P=_=>N(f[_],1,1,()=>{f[_]=null});return{c(){e=d("div"),t=d("h2"),a=q(ve),s=q(" Managers"),l=V(),n=d("div");for(let _=0;_<f.length;_+=1)f[_].c();this.h()},l(_){e=g(_,"DIV",{class:!0});var D=k(e);t=g(D,"H2",{class:!0});var p=k(t);a=G(p,ve),s=G(p," Managers"),p.forEach(o),l=y(D),n=g(D,"DIV",{class:!0});var E=k(n);for(let z=0;z<f.length;z+=1)f[z].l(E);E.forEach(o),D.forEach(o),this.h()},h(){i(t,"class","svelte-168w153"),i(n,"class","managerConstrained svelte-168w153"),i(e,"class","managerContainer svelte-168w153")},m(_,D){M(_,e,D),v(e,t),v(t,a),v(t,s),v(e,l),v(e,n);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(n,null);m=!0,c||(u=pe(window,"resize",r[3]),c=!0)},p(_,[D]){if(D&3){h=_[0];let p;for(p=0;p<h.length;p+=1){const E=ge(_,h,p);f[p]?(f[p].p(E,D),R(f[p],1)):(f[p]=_e(E),f[p].c(),R(f[p],1),f[p].m(n,null))}for(Me(),p=h.length;p<f.length;p+=1)P(p);Ee()}},i(_){if(!m){for(let D=0;D<h.length;D+=1)R(f[D]);m=!0}},o(_){f=f.filter(Boolean);for(let D=0;D<f.length;D+=1)N(f[D]);m=!1},d(_){_&&o(e),we(f,_),c=!1,u()}}}function Fe(r,e,t){let{managers:a,leagueTeamManagers:s}=e,l;function n(){t(2,l=window.innerWidth)}return r.$$set=m=>{"managers"in m&&t(0,a=m.managers),"leagueTeamManagers"in m&&t(1,s=m.leagueTeamManagers)},[a,s,l,n]}class He extends X{constructor(e){super(),x(this,e,Fe,Ne,ee,{managers:0,leagueTeamManagers:1})}}async function Oe(){if(!U.length)return{managers:U};const r=be();return{managers:U,leagueTeamManagersData:r}}const st=Object.freeze(Object.defineProperty({__proto__:null,load:Oe},Symbol.toStringTag,{value:"Module"}));function We(r){let e,t,a=r[4].message+"",s;return{c(){e=d("p"),t=q("Something went wrong: "),s=q(a)},l(l){e=g(l,"P",{});var n=k(e);t=G(n,"Something went wrong: "),s=G(n,a),n.forEach(o)},m(l,n){M(l,e,n),v(e,t),v(e,s)},p:S,i:S,o:S,d(l){l&&o(e)}}}function Ye(r){let e,t,a=r[0].length&&Ze(r);return{c(){a&&a.c(),e=de()},l(s){a&&a.l(s),e=de()},m(s,l){a&&a.m(s,l),M(s,e,l),t=!0},p(s,l){s[0].length&&a.p(s,l)},i(s){t||(R(a),t=!0)},o(s){N(a),t=!1},d(s){a&&a.d(s),s&&o(e)}}}function Ze(r){let e,t;return e=new He({props:{managers:r[0],leagueTeamManagers:r[3]}}),{c(){te(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,s){se(e,a,s),t=!0},p:S,i(a){t||(R(e.$$.fragment,a),t=!0)},o(a){N(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function Je(r){let e,t,a,s,l,n;return l=new Ce({props:{indeterminate:!0}}),{c(){e=d("div"),t=d("p"),a=q("Retrieving managers..."),s=V(),te(l.$$.fragment),this.h()},l(m){e=g(m,"DIV",{class:!0});var c=k(e);t=g(c,"P",{});var u=k(t);a=G(u,"Retrieving managers..."),u.forEach(o),s=y(c),ae(l.$$.fragment,c),c.forEach(o),this.h()},h(){i(e,"class","loading svelte-70pmkv")},m(m,c){M(m,e,c),v(e,t),v(t,a),v(e,s),se(l,e,null),n=!0},p:S,i(m){n||(R(l.$$.fragment,m),n=!0)},o(m){N(l.$$.fragment,m),n=!1},d(m){m&&o(e),le(l)}}}function Ke(r){let e,t,a={ctx:r,current:null,token:null,hasCatch:!0,pending:Je,then:Ye,catch:We,value:3,error:4,blocks:[,,,]};return Te(r[1],a),{c(){e=d("div"),a.block.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=k(e);a.block.l(l),l.forEach(o),this.h()},h(){i(e,"class","main svelte-70pmkv")},m(s,l){M(s,e,l),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=null,t=!0},p(s,[l]){r=s,Ve(a,r,l)},i(s){t||(R(a.block),t=!0)},o(s){for(let l=0;l<3;l+=1){const n=a.blocks[l];N(n)}t=!1},d(s){s&&o(e),a.block.d(),a.token=null,a=null}}}function Qe(r,e,t){let{data:a}=e;const{managers:s,leagueTeamManagersData:l}=a;return ye(()=>{s.length||he("/")}),r.$$set=n=>{"data"in n&&t(2,a=n.data)},[s,l,a]}class lt extends X{constructor(e){super(),x(this,e,Qe,Ke,ee,{data:2})}}export{lt as component,st as universal};
