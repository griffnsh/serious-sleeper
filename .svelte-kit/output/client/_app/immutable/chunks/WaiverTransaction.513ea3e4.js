import{S as se,i as le,s as re,k as y,q as w,a as j,l as k,m as E,r as N,c as H,h as u,n as c,a2 as R,b as O,T as o,G as te,u as Y,Y as U,Z as ne}from"./index.78a9f0bb.js";import{b as P,d as ie}from"./records.35358e58.js";import"./index.svelte_svelte_type_style_lang.1b9663cd.js";function X(a,e,l){const s=a.slice();return s[6]=e[l],s}function $(a){let e,l,s=P(a[2],a[3]).name+"",n,i;return{c(){e=y("span"),l=w("("),n=w(s),i=w(")"),this.h()},l(r){e=k(r,"SPAN",{class:!0});var f=E(e);l=N(f,"("),n=N(f,s),i=N(f,")"),f.forEach(u),this.h()},h(){c(e,"class","currentOwner svelte-1ods821")},m(r,f){O(r,e,f),o(e,l),o(e,n),o(e,i)},p(r,f){f&4&&s!==(s=P(r[2],r[3]).name+"")&&Y(n,s)},d(r){r&&u(e)}}}function x(a){let e,l,s=a[0].moves[0][0].bid+"",n,i;return{c(){e=y("span"),l=w("- "),n=w(s),i=w("$"),this.h()},l(r){e=k(r,"SPAN",{class:!0});var f=E(e);l=N(f,"- "),n=N(f,s),i=N(f,"$"),f.forEach(u),this.h()},h(){c(e,"class","bid svelte-1ods821")},m(r,f){O(r,e,f),o(e,l),o(e,n),o(e,i)},p(r,f){f&1&&s!==(s=r[0].moves[0][0].bid+"")&&Y(n,s)},d(r){r&&u(e)}}}function oe(a){let e,l;return{c(){e=y("i"),l=w("do_not_disturb_on"),this.h()},l(s){e=k(s,"I",{class:!0,"aria-hidden":!0});var n=E(e);l=N(n,"do_not_disturb_on"),n.forEach(u),this.h()},h(){c(e,"class","drop indicator material-icons svelte-1ods821"),c(e,"aria-hidden","true")},m(s,n){O(s,e,n),o(e,l)},d(s){s&&u(e)}}}function de(a){let e,l;return{c(){e=y("i"),l=w("add_circle"),this.h()},l(s){e=k(s,"I",{class:!0,"aria-hidden":!0});var n=E(e);l=N(n,"add_circle"),n.forEach(u),this.h()},h(){c(e,"class","add indicator material-icons svelte-1ods821"),c(e,"aria-hidden","true")},m(s,n){O(s,e,n),o(e,l)},d(s){s&&u(e)}}}function ee(a){let e,l,s=a[1][a[6][0].player].t+"",n;return{c(){e=w(`-
                                    `),l=y("span"),n=w(s)},l(i){e=N(i,`-
                                    `),l=k(i,"SPAN",{});var r=E(l);n=N(r,s),r.forEach(u)},m(i,r){O(i,e,r),O(i,l,r),o(l,n)},p(i,r){r&3&&s!==(s=i[1][i[6][0].player].t+"")&&Y(n,s)},d(i){i&&u(e),i&&u(l)}}}function ae(a){let e,l,s,n,i,r,f=`${a[1][a[6][0].player].fn} ${a[1][a[6][0].player].ln}`,T,D,v,V,q=a[1][a[6][0].player].pos+"",L,S,C;function F(d,A){if(d[6][0].type=="Added")return de;if(d[6][0].type=="Dropped")return oe}let G=F(a),h=G&&G(a),p=a[1][a[6][0].player].t&&ee(a);return{c(){e=y("div"),l=y("div"),h&&h.c(),n=j(),i=y("span"),r=y("span"),T=w(f),D=j(),v=y("span"),V=y("span"),L=w(q),S=j(),p&&p.c(),C=j(),this.h()},l(d){e=k(d,"DIV",{class:!0});var A=E(e);l=k(A,"DIV",{class:!0,style:!0});var Z=E(l);h&&h.l(Z),Z.forEach(u),n=H(A),i=k(A,"SPAN",{class:!0});var m=E(i);r=k(m,"SPAN",{class:!0});var b=E(r);T=N(b,f),b.forEach(u),D=H(m),v=k(m,"SPAN",{class:!0});var M=E(v);V=k(M,"SPAN",{});var g=E(V);L=N(g,q),g.forEach(u),S=H(M),p&&p.l(M),M.forEach(u),m.forEach(u),C=H(A),A.forEach(u),this.h()},h(){c(l,"class","playerAvatar svelte-1ods821"),c(l,"style",s="border-color: var(--"+a[1][a[6][0].player].pos+"); background-color: var(--"+(a[6][0].type=="Added"?"waiverAdd":"waiverDrop")+"); "+a[4](a[1][a[6][0].player].pos,a[6][0].player)),c(r,"class","playerName svelte-1ods821"),c(v,"class","playerInfo svelte-1ods821"),c(i,"class","nameHolder svelte-1ods821"),c(e,"class","player svelte-1ods821")},m(d,A){O(d,e,A),o(e,l),h&&h.m(l,null),o(e,n),o(e,i),o(i,r),o(r,T),o(i,D),o(i,v),o(v,V),o(V,L),o(v,S),p&&p.m(v,null),o(e,C)},p(d,A){G!==(G=F(d))&&(h&&h.d(1),h=G&&G(d),h&&(h.c(),h.m(l,null))),A&3&&s!==(s="border-color: var(--"+d[1][d[6][0].player].pos+"); background-color: var(--"+(d[6][0].type=="Added"?"waiverAdd":"waiverDrop")+"); "+d[4](d[1][d[6][0].player].pos,d[6][0].player))&&c(l,"style",s),A&3&&f!==(f=`${d[1][d[6][0].player].fn} ${d[1][d[6][0].player].ln}`)&&Y(T,f),A&3&&q!==(q=d[1][d[6][0].player].pos+"")&&Y(L,q),d[1][d[6][0].player].t?p?p.p(d,A):(p=ee(d),p.c(),p.m(v,null)):p&&(p.d(1),p=null)},d(d){d&&u(e),h&&h.d(),p&&p.d()}}}function fe(a){let e,l,s,n=P(a[2],a[3],a[0].season).name+"",i,r,f=P(a[2],a[3],a[0].season).name!=P(a[2],a[3]).name,T,D,v,V,q,L,S,C,F,G,h,p=a[0].date+"",d,A,Z,m=f&&$(a),b=a[0].moves[0][0].bid&&x(a),M=a[0].moves,g=[];for(let t=0;t<M.length;t+=1)g[t]=ae(X(a,M,t));return{c(){e=y("div"),l=y("div"),s=y("span"),i=w(n),r=j(),m&&m.c(),T=j(),b&&b.c(),D=j(),v=y("img"),L=j(),S=y("div"),C=y("div"),F=y("div");for(let t=0;t<g.length;t+=1)g[t].c();G=j(),h=y("span"),d=w(p),this.h()},l(t){e=k(t,"DIV",{class:!0});var I=E(e);l=k(I,"DIV",{class:!0});var _=E(l);s=k(_,"SPAN",{class:!0});var W=E(s);i=N(W,n),r=H(W),m&&m.l(W),T=H(W),b&&b.l(W),W.forEach(u),D=H(_),v=k(_,"IMG",{class:!0,src:!0,alt:!0}),_.forEach(u),L=H(I),S=k(I,"DIV",{class:!0});var z=E(S);C=k(z,"DIV",{class:!0});var J=E(C);F=k(J,"DIV",{class:!0});var K=E(F);for(let B=0;B<g.length;B+=1)g[B].l(K);K.forEach(u),J.forEach(u),G=H(z),h=k(z,"SPAN",{class:!0});var Q=E(h);d=N(Q,p),Q.forEach(u),z.forEach(u),I.forEach(u),this.h()},h(){c(s,"class","ownerName svelte-1ods821"),c(v,"class","avatar svelte-1ods821"),R(v.src,V=P(a[2],a[3],a[0].season).avatar)||c(v,"src",V),c(v,"alt",q=P(a[2],a[3],a[0].season).name+" avatar"),c(l,"class","name svelte-1ods821"),c(F,"class","details svelte-1ods821"),c(C,"class","avatarAndDetails svelte-1ods821"),c(h,"class","date svelte-1ods821"),c(S,"class","core svelte-1ods821"),c(e,"class","waiverTransaction clickable svelte-1ods821")},m(t,I){O(t,e,I),o(e,l),o(l,s),o(s,i),o(s,r),m&&m.m(s,null),o(s,T),b&&b.m(s,null),o(l,D),o(l,v),o(e,L),o(e,S),o(S,C),o(C,F);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(F,null);o(S,G),o(S,h),o(h,d),A||(Z=te(e,"click",a[5]),A=!0)},p(t,[I]){if(I&5&&n!==(n=P(t[2],t[3],t[0].season).name+"")&&Y(i,n),I&5&&(f=P(t[2],t[3],t[0].season).name!=P(t[2],t[3]).name),f?m?m.p(t,I):(m=$(t),m.c(),m.m(s,T)):m&&(m.d(1),m=null),t[0].moves[0][0].bid?b?b.p(t,I):(b=x(t),b.c(),b.m(s,null)):b&&(b.d(1),b=null),I&5&&!R(v.src,V=P(t[2],t[3],t[0].season).avatar)&&c(v,"src",V),I&5&&q!==(q=P(t[2],t[3],t[0].season).name+" avatar")&&c(v,"alt",q),I&19){M=t[0].moves;let _;for(_=0;_<M.length;_+=1){const W=X(t,M,_);g[_]?g[_].p(W,I):(g[_]=ae(W),g[_].c(),g[_].m(F,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=M.length}I&1&&p!==(p=t[0].date+"")&&Y(d,p)},i:U,o:U,d(t){t&&u(e),m&&m.d(),b&&b.d(),ne(g,t),A=!1,Z()}}}function ue(a,e,l){let{transaction:s,players:n,leagueTeamManagers:i}=e;const r=s.rosters[0],f=(D,v)=>D=="DEF"?`background-image: url(https://sleepercdn.com/images/team_logos/nfl/${v.toLowerCase()}.png)`:`background-image: url(https://sleepercdn.com/content/nfl/players/thumb/${v}.jpg), url(https://sleepercdn.com/images/v2/icons/player_default.webp)`,T=()=>ie({year:s.season,leagueTeamManagers:i,rosterID:r});return a.$$set=D=>{"transaction"in D&&l(0,s=D.transaction),"players"in D&&l(1,n=D.players),"leagueTeamManagers"in D&&l(2,i=D.leagueTeamManagers)},[s,n,i,r,f,T]}class _e extends se{constructor(e){super(),le(this,e,ue,fe,re,{transaction:0,players:1,leagueTeamManagers:2})}}export{_e as W};