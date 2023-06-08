import{S as q,i as V,s as R,e as X,b,v as ie,d as k,f as fe,g as p,h as d,C as F,D as de,E as A,F as N,G as Z,H as Y,k as y,a as B,l as E,m as z,c as H,I as U,J as P,K as $,L as J,M as K,N as Q,O as G,q as O,r as I,n as C,u as ue,y as M,z as S,A as j,P as ce,B as D,Q as he,R as _e,T as ee,U as W,V as ge,W as be,X as te,Y as ve,Z as ke}from"../chunks/index.df43dd62.js";import{c as T,F as me,B as pe}from"../chunks/Indicator.svelte_svelte_type_style_lang.2698d2cf.js";import{b as Ce}from"../chunks/paths.ebb84250.js";const ye=!0,_t=Object.freeze(Object.defineProperty({__proto__:null,prerender:ye},Symbol.toStringTag,{value:"Module"}));function Ee(a){const e=a-1;return e*e*e+1}function ze(a){return--a*a*a*a*a+1}function le(a,{delay:e=0,duration:t=400,easing:l=Ee,axis:n="y"}={}){const s=getComputedStyle(a),f=+s.opacity,o=n==="y"?"height":"width",r=parseFloat(s[o]),i=n==="y"?["top","bottom"]:["left","right"],u=i.map(w=>`${w[0].toUpperCase()}${w.slice(1)}`),m=parseFloat(s[`padding${u[0]}`]),c=parseFloat(s[`padding${u[1]}`]),g=parseFloat(s[`margin${u[0]}`]),v=parseFloat(s[`margin${u[1]}`]),h=parseFloat(s[`border${u[0]}Width`]),_=parseFloat(s[`border${u[1]}Width`]);return{delay:e,duration:t,easing:l,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*f};${o}: ${w*r}px;padding-${i[0]}: ${w*m}px;padding-${i[1]}: ${w*c}px;margin-${i[0]}: ${w*g}px;margin-${i[1]}: ${w*v}px;border-${i[0]}-width: ${w*h}px;border-${i[1]}-width: ${w*_}px;`}}const Ae=a=>({svgSize:a&4}),se=a=>({svgSize:a[5][a[2]]}),we=a=>({svgSize:a&4}),ae=a=>({svgSize:a[5][a[2]]});function Le(a){let e,t,l,n,s,f,o=a[0]&&re(a);const r=a[9].default,i=Y(r,a,a[8],se);let u=[{type:"button"},a[6],{class:a[4]},{"aria-label":l=a[1]??a[0]}],m={};for(let c=0;c<u.length;c+=1)m=A(m,u[c]);return{c(){e=y("button"),o&&o.c(),t=B(),i&&i.c(),this.h()},l(c){e=E(c,"BUTTON",{type:!0,class:!0,"aria-label":!0});var g=z(e);o&&o.l(g),t=H(g),i&&i.l(g),g.forEach(d),this.h()},h(){U(e,m)},m(c,g){b(c,e,g),o&&o.m(e,null),P(e,t),i&&i.m(e,null),e.autofocus&&e.focus(),n=!0,s||(f=$(e,"click",a[10]),s=!0)},p(c,g){c[0]?o?o.p(c,g):(o=re(c),o.c(),o.m(e,t)):o&&(o.d(1),o=null),i&&i.p&&(!n||g&260)&&J(i,r,c,c[8],n?Q(r,c[8],g,Ae):K(c[8]),se),U(e,m=G(u,[{type:"button"},g&64&&c[6],(!n||g&16)&&{class:c[4]},(!n||g&3&&l!==(l=c[1]??c[0]))&&{"aria-label":l}]))},i(c){n||(p(i,c),n=!0)},o(c){k(i,c),n=!1},d(c){c&&d(e),o&&o.d(),i&&i.d(c),s=!1,f()}}}function Pe(a){let e,t,l,n,s=a[0]&&ne(a);const f=a[9].default,o=Y(f,a,a[8],ae);let r=[{href:a[3]},a[6],{class:a[4]},{"aria-label":l=a[1]??a[0]}],i={};for(let u=0;u<r.length;u+=1)i=A(i,r[u]);return{c(){e=y("a"),s&&s.c(),t=B(),o&&o.c(),this.h()},l(u){e=E(u,"A",{href:!0,class:!0,"aria-label":!0});var m=z(e);s&&s.l(m),t=H(m),o&&o.l(m),m.forEach(d),this.h()},h(){U(e,i)},m(u,m){b(u,e,m),s&&s.m(e,null),P(e,t),o&&o.m(e,null),n=!0},p(u,m){u[0]?s?s.p(u,m):(s=ne(u),s.c(),s.m(e,t)):s&&(s.d(1),s=null),o&&o.p&&(!n||m&260)&&J(o,f,u,u[8],n?Q(f,u[8],m,we):K(u[8]),ae),U(e,i=G(r,[(!n||m&8)&&{href:u[3]},m&64&&u[6],(!n||m&16)&&{class:u[4]},(!n||m&3&&l!==(l=u[1]??u[0]))&&{"aria-label":l}]))},i(u){n||(p(o,u),n=!0)},o(u){k(o,u),n=!1},d(u){u&&d(e),s&&s.d(),o&&o.d(u)}}}function re(a){let e,t;return{c(){e=y("span"),t=O(a[0]),this.h()},l(l){e=E(l,"SPAN",{class:!0});var n=z(e);t=I(n,a[0]),n.forEach(d),this.h()},h(){C(e,"class","sr-only")},m(l,n){b(l,e,n),P(e,t)},p(l,n){n&1&&ue(t,l[0])},d(l){l&&d(e)}}}function ne(a){let e,t;return{c(){e=y("span"),t=O(a[0]),this.h()},l(l){e=E(l,"SPAN",{class:!0});var n=z(e);t=I(n,a[0]),n.forEach(d),this.h()},h(){C(e,"class","sr-only")},m(l,n){b(l,e,n),P(e,t)},p(l,n){n&1&&ue(t,l[0])},d(l){l&&d(e)}}}function Me(a){let e,t,l,n;const s=[Pe,Le],f=[];function o(r,i){return r[3]?0:1}return e=o(a),t=f[e]=s[e](a),{c(){t.c(),l=X()},l(r){t.l(r),l=X()},m(r,i){f[e].m(r,i),b(r,l,i),n=!0},p(r,[i]){let u=e;e=o(r),e===u?f[e].p(r,i):(ie(),k(f[u],1,1,()=>{f[u]=null}),fe(),t=f[e],t?t.p(r,i):(t=f[e]=s[e](r),t.c()),p(t,1),t.m(l.parentNode,l))},i(r){n||(p(t),n=!0)},o(r){k(t),n=!1},d(r){f[e].d(r),r&&d(l)}}}function Se(a,e,t){const l=["color","name","ariaLabel","size","href"];let n=F(e,l),{$$slots:s={},$$scope:f}=e;const o=de("background");let{color:r="default"}=e,{name:i=void 0}=e,{ariaLabel:u=void 0}=e,{size:m="md"}=e,{href:c=void 0}=e;const g={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700",default:"focus:ring-gray-400 "},v={xs:"m-0.5 rounded focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let h;const _={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};function w(L){Z.call(this,a,L)}return a.$$set=L=>{t(14,e=A(A({},e),N(L))),t(6,n=F(e,l)),"color"in L&&t(7,r=L.color),"name"in L&&t(0,i=L.name),"ariaLabel"in L&&t(1,u=L.ariaLabel),"size"in L&&t(2,m=L.size),"href"in L&&t(3,c=L.href),"$$scope"in L&&t(8,f=L.$$scope)},a.$$.update=()=>{t(4,h=T("focus:outline-none whitespace-normal",v[m],g[r],r==="default"&&(o?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=N(e),[i,u,m,c,h,_,n,r,f,s,w]}class je extends q{constructor(e){super(),V(this,e,Se,Me,R,{color:7,name:0,ariaLabel:1,size:2,href:3})}}const De=a=>({hidden:a&8}),oe=a=>({hidden:a[3],toggle:a[4]});function Fe(a){let e,t,l;const n=a[7].default,s=Y(n,a,a[8],oe);return{c(){e=y("div"),s&&s.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var o=z(e);s&&s.l(o),o.forEach(d),this.h()},h(){C(e,"class",t=T(a[1],a[2]&&"w-full"||"container"))},m(f,o){b(f,e,o),s&&s.m(e,null),l=!0},p(f,o){s&&s.p&&(!l||o&264)&&J(s,n,f,f[8],l?Q(n,f[8],o,De):K(f[8]),oe),(!l||o&6&&t!==(t=T(f[1],f[2]&&"w-full"||"container")))&&C(e,"class",t)},i(f){l||(p(s,f),l=!0)},o(f){k(s,f),l=!1},d(f){f&&d(e),s&&s.d(f)}}}function Ne(a){let e,t;const l=[{tag:"nav"},a[5],{class:T(a[0],a[6].class)}];let n={$$slots:{default:[Fe]},$$scope:{ctx:a}};for(let s=0;s<l.length;s+=1)n=A(n,l[s]);return e=new me({props:n}),{c(){M(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,f){j(e,s,f),t=!0},p(s,[f]){const o=f&97?G(l,[l[0],f&32&&ce(s[5]),f&65&&{class:T(s[0],s[6].class)}]):{};f&270&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function Be(a,e,t){const l=["navClass","navDivClass","fluid"];let n=F(e,l),{$$slots:s={},$$scope:f}=e,{navClass:o="px-2 sm:px-4 py-2.5 w-full"}=e,{navDivClass:r="mx-auto flex flex-wrap justify-between items-center "}=e,{fluid:i=!1}=e,u=!0,m=()=>{t(3,u=!u)};return a.$$set=c=>{t(6,e=A(A({},e),N(c))),t(5,n=F(e,l)),"navClass"in c&&t(0,o=c.navClass),"navDivClass"in c&&t(1,r=c.navDivClass),"fluid"in c&&t(2,i=c.fluid),"$$scope"in c&&t(8,f=c.$$scope)},a.$$.update=()=>{t(5,n.color=n.color??"navbar",n)},e=N(e),[o,r,i,u,m,n,e,s,f]}class He extends q{constructor(e){super(),V(this,e,Be,Ne,R,{navClass:0,navDivClass:1,fluid:2})}}function Te(a){let e,t,l;const n=a[4].default,s=Y(n,a,a[3],null);let f=[{href:a[0]},a[1],{class:t=T("flex items-center",a[2].class)}],o={};for(let r=0;r<f.length;r+=1)o=A(o,f[r]);return{c(){e=y("a"),s&&s.c(),this.h()},l(r){e=E(r,"A",{href:!0,class:!0});var i=z(e);s&&s.l(i),i.forEach(d),this.h()},h(){U(e,o)},m(r,i){b(r,e,i),s&&s.m(e,null),l=!0},p(r,[i]){s&&s.p&&(!l||i&8)&&J(s,n,r,r[3],l?Q(n,r[3],i,null):K(r[3]),null),U(e,o=G(f,[(!l||i&1)&&{href:r[0]},i&2&&r[1],(!l||i&4&&t!==(t=T("flex items-center",r[2].class)))&&{class:t}]))},i(r){l||(p(s,r),l=!0)},o(r){k(s,r),l=!1},d(r){r&&d(e),s&&s.d(r)}}}function Oe(a,e,t){const l=["href"];let n=F(e,l),{$$slots:s={},$$scope:f}=e,{href:o=""}=e;return a.$$set=r=>{t(2,e=A(A({},e),N(r))),t(1,n=F(e,l)),"href"in r&&t(0,o=r.href),"$$scope"in r&&t(3,f=r.$$scope)},e=N(e),[o,n,e,f,s]}class Ie extends q{constructor(e){super(),V(this,e,Oe,Te,R,{href:0})}}function Ue(a){let e,t,l,n,s=[{xmlns:"http://www.w3.org/2000/svg"},{width:a[0]},{height:a[0]},{class:t=a[4].class},a[5],{"aria-label":a[1]},{fill:"none"},{viewBox:a[2]},{"stroke-width":"2"}],f={};for(let o=0;o<s.length;o+=1)f=A(f,s[o]);return{c(){e=he("svg"),this.h()},l(o){e=_e(o,"svg",{xmlns:!0,width:!0,height:!0,class:!0,"aria-label":!0,fill:!0,viewBox:!0,"stroke-width":!0});var r=z(e);r.forEach(d),this.h()},h(){ee(e,f)},m(o,r){b(o,e,r),e.innerHTML=a[3],l||(n=$(e,"click",a[8]),l=!0)},p(o,[r]){r&8&&(e.innerHTML=o[3]),ee(e,f=G(s,[{xmlns:"http://www.w3.org/2000/svg"},r&1&&{width:o[0]},r&1&&{height:o[0]},r&16&&t!==(t=o[4].class)&&{class:t},r&32&&o[5],r&2&&{"aria-label":o[1]},{fill:"none"},r&4&&{viewBox:o[2]},{"stroke-width":"2"}]))},i:W,o:W,d(o){o&&d(e),l=!1,n()}}}function qe(a,e,t){const l=["size","color","variation","ariaLabel"];let n=F(e,l),{size:s="24"}=e,{color:f="currentColor"}=e,{variation:o="outline"}=e,{ariaLabel:r="bars 3"}=e,i,u,m=`<path stroke="${f}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `,c=`<path fill="${f}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;function g(v){Z.call(this,a,v)}return a.$$set=v=>{t(4,e=A(A({},e),N(v))),t(5,n=F(e,l)),"size"in v&&t(0,s=v.size),"color"in v&&t(6,f=v.color),"variation"in v&&t(7,o=v.variation),"ariaLabel"in v&&t(1,r=v.ariaLabel)},a.$$.update=()=>{if(a.$$.dirty&128)switch(o){case"outline":t(3,u=m),t(2,i="0 0 24 24");break;case"solid":t(3,u=c),t(2,i="0 0 24 24");break;default:t(3,u=m),t(2,i="0 0 24 24")}},e=N(e),[s,r,i,u,e,n,f,o,g]}class Ve extends q{constructor(e){super(),V(this,e,qe,Ue,R,{size:0,color:6,variation:7,ariaLabel:1})}}function Re(a){let e,t;return e=new Ve({props:{class:"h-6 w-6 shrink-0"}}),{c(){M(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,n){j(e,l,n),t=!0},p:W,i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){D(e,l)}}}function We(a){let e,t;const l=[{name:"Open main menu"},a[1],{class:T(a[0],a[2].class)}];let n={$$slots:{default:[Re]},$$scope:{ctx:a}};for(let s=0;s<l.length;s+=1)n=A(n,l[s]);return e=new je({props:n}),e.$on("click",a[3]),{c(){M(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,f){j(e,s,f),t=!0},p(s,[f]){const o=f&7?G(l,[l[0],f&2&&ce(s[1]),f&5&&{class:T(s[0],s[2].class)}]):{};f&16&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function Ge(a,e,t){const l=["btnClass"];let n=F(e,l),{btnClass:s="ml-3 md:hidden"}=e;function f(o){Z.call(this,a,o)}return a.$$set=o=>{t(2,e=A(A({},e),N(o))),t(1,n=F(e,l)),"btnClass"in o&&t(0,s=o.btnClass)},e=N(e),[s,n,e,f]}class Ye extends q{constructor(e){super(),V(this,e,Ge,We,R,{btnClass:0})}}function Je(a){let e,t,l;const n=a[9].default,s=Y(n,a,a[11],null);let f=[a[4],{class:a[2]},{hidden:a[0]}],o={};for(let r=0;r<f.length;r+=1)o=A(o,f[r]);return{c(){e=y("div"),t=y("ul"),s&&s.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var i=z(e);t=E(i,"UL",{class:!0});var u=z(t);s&&s.l(u),u.forEach(d),i.forEach(d),this.h()},h(){C(t,"class",a[3]),U(e,o)},m(r,i){b(r,e,i),P(e,t),s&&s.m(t,null),l=!0},p(r,i){s&&s.p&&(!l||i&2048)&&J(s,n,r,r[11],l?Q(n,r[11],i,null):K(r[11]),null),(!l||i&8)&&C(t,"class",r[3]),U(e,o=G(f,[i&16&&r[4],(!l||i&4)&&{class:r[2]},(!l||i&1)&&{hidden:r[0]}]))},i(r){l||(p(s,r),l=!0)},o(r){k(s,r),l=!1},d(r){r&&d(e),s&&s.d(r)}}}function Ke(a){let e,t,l,n,s,f;t=new me({props:{tag:"ul",border:!0,rounded:!0,color:"navbarUl",class:a[3],$$slots:{default:[Qe]},$$scope:{ctx:a}}});let o=[a[4],{class:a[2]}],r={};for(let i=0;i<o.length;i+=1)r=A(r,o[i]);return{c(){e=y("div"),M(t.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var u=z(e);S(t.$$.fragment,u),u.forEach(d),this.h()},h(){U(e,r)},m(i,u){b(i,e,u),j(t,e,null),n=!0,s||(f=$(e,"click",a[10]),s=!0)},p(i,u){a=i;const m={};u&8&&(m.class=a[3]),u&2048&&(m.$$scope={dirty:u,ctx:a}),t.$set(m),U(e,r=G(o,[u&16&&a[4],(!n||u&4)&&{class:a[2]}]))},i(i){n||(p(t.$$.fragment,i),be(()=>{n&&(l||(l=te(e,le,a[1],!0)),l.run(1))}),n=!0)},o(i){k(t.$$.fragment,i),l||(l=te(e,le,a[1],!1)),l.run(0),n=!1},d(i){i&&d(e),D(t),i&&l&&l.end(),s=!1,f()}}}function Qe(a){let e;const t=a[9].default,l=Y(t,a,a[11],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,s){l&&l.m(n,s),e=!0},p(n,s){l&&l.p&&(!e||s&2048)&&J(l,t,n,n[11],e?Q(t,n[11],s,null):K(n[11]),null)},i(n){e||(p(l,n),e=!0)},o(n){k(l,n),e=!1},d(n){l&&l.d(n)}}}function Xe(a){let e,t,l,n;const s=[Ke,Je],f=[];function o(r,i){return r[0]?1:0}return e=o(a),t=f[e]=s[e](a),{c(){t.c(),l=X()},l(r){t.l(r),l=X()},m(r,i){f[e].m(r,i),b(r,l,i),n=!0},p(r,[i]){let u=e;e=o(r),e===u?f[e].p(r,i):(ie(),k(f[u],1,1,()=>{f[u]=null}),fe(),t=f[e],t?t.p(r,i):(t=f[e]=s[e](r),t.c()),p(t,1),t.m(l.parentNode,l))},i(r){n||(p(t),n=!0)},o(r){k(t),n=!1},d(r){f[e].d(r),r&&d(l)}}}function Ze(a,e,t){const l=["divClass","ulClass","hidden","slideParams","activeClass","nonActiveClass"];let n=F(e,l),{$$slots:s={},$$scope:f}=e,{divClass:o="w-full md:block md:w-auto"}=e,{ulClass:r="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}=e,{hidden:i=!0}=e,{slideParams:u={delay:250,duration:500,easing:ze}}=e,{activeClass:m="text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"}=e,{nonActiveClass:c="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}=e;ge("navbar",{activeClass:m,nonActiveClass:c});let g,v;function h(_){Z.call(this,a,_)}return a.$$set=_=>{t(12,e=A(A({},e),N(_))),t(4,n=F(e,l)),"divClass"in _&&t(5,o=_.divClass),"ulClass"in _&&t(6,r=_.ulClass),"hidden"in _&&t(0,i=_.hidden),"slideParams"in _&&t(1,u=_.slideParams),"activeClass"in _&&t(7,m=_.activeClass),"nonActiveClass"in _&&t(8,c=_.nonActiveClass),"$$scope"in _&&t(11,f=_.$$scope)},a.$$.update=()=>{t(2,g=T(o,e.class)),t(3,v=T(r,e.class))},e=N(e),[i,u,g,v,n,o,r,m,c,s,h,f]}class $e extends q{constructor(e){super(),V(this,e,Ze,Xe,R,{divClass:5,ulClass:6,hidden:0,slideParams:1,activeClass:7,nonActiveClass:8})}}function xe(a){let e,t;return{c(){e=y("img"),this.h()},l(l){e=E(l,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){ke(e.src,t="./images/logo/png/Black_logo_no_background.png")||C(e,"src",t),C(e,"class","company_logo"),C(e,"alt","CT web logo")},m(l,n){b(l,e,n)},p:W,d(l){l&&d(e)}}}function et(a){let e;return{c(){e=O("Contact")},l(t){e=I(t,"Contact")},m(t,l){b(t,e,l)},d(t){t&&d(e)}}}function tt(a){let e,t,l,n,s,f,o,r,i,u,m,c,g,v;return g=new pe({props:{href:"#contact",$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){e=y("a"),t=O("Home"),l=B(),n=y("a"),s=O("About"),f=B(),o=y("a"),r=O("Projects"),i=B(),u=y("a"),m=O("Services"),c=B(),M(g.$$.fragment),this.h()},l(h){e=E(h,"A",{href:!0,class:!0,active:!0});var _=z(e);t=I(_,"Home"),_.forEach(d),l=H(h),n=E(h,"A",{href:!0,class:!0});var w=z(n);s=I(w,"About"),w.forEach(d),f=H(h),o=E(h,"A",{href:!0,class:!0});var L=z(o);r=I(L,"Projects"),L.forEach(d),i=H(h),u=E(h,"A",{href:!0,class:!0});var x=z(u);m=I(x,"Services"),x.forEach(d),c=H(h),S(g.$$.fragment,h),this.h()},h(){C(e,"href","#top"),C(e,"class","navLink svelte-dtwxaj"),C(e,"active",!0),C(n,"href","#about"),C(n,"class","navLink svelte-dtwxaj"),C(o,"href","#projects"),C(o,"class","navLink svelte-dtwxaj"),C(u,"href","#services"),C(u,"class","navLink svelte-dtwxaj")},m(h,_){b(h,e,_),P(e,t),b(h,l,_),b(h,n,_),P(n,s),b(h,f,_),b(h,o,_),P(o,r),b(h,i,_),b(h,u,_),P(u,m),b(h,c,_),j(g,h,_),v=!0},p(h,_){const w={};_&4&&(w.$$scope={dirty:_,ctx:h}),g.$set(w)},i(h){v||(p(g.$$.fragment,h),v=!0)},o(h){k(g.$$.fragment,h),v=!1},d(h){h&&d(e),h&&d(l),h&&d(n),h&&d(f),h&&d(o),h&&d(i),h&&d(u),h&&d(c),D(g,h)}}}function lt(a){let e,t,l,n,s,f;return e=new Ie({props:{href:Ce+"/",$$slots:{default:[xe]},$$scope:{ctx:a}}}),l=new Ye({}),l.$on("click",function(){ve(a[1])&&a[1].apply(this,arguments)}),s=new $e({props:{hidden:a[0],$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment),t=B(),M(l.$$.fragment),n=B(),M(s.$$.fragment)},l(o){S(e.$$.fragment,o),t=H(o),S(l.$$.fragment,o),n=H(o),S(s.$$.fragment,o)},m(o,r){j(e,o,r),b(o,t,r),j(l,o,r),b(o,n,r),j(s,o,r),f=!0},p(o,r){a=o;const i={};r&4&&(i.$$scope={dirty:r,ctx:a}),e.$set(i);const u={};r&1&&(u.hidden=a[0]),r&4&&(u.$$scope={dirty:r,ctx:a}),s.$set(u)},i(o){f||(p(e.$$.fragment,o),p(l.$$.fragment,o),p(s.$$.fragment,o),f=!0)},o(o){k(e.$$.fragment,o),k(l.$$.fragment,o),k(s.$$.fragment,o),f=!1},d(o){D(e,o),o&&d(t),D(l,o),o&&d(n),D(s,o)}}}function st(a){let e,t;return e=new He({props:{$$slots:{default:[lt,({hidden:l,toggle:n})=>({0:l,1:n}),({hidden:l,toggle:n})=>(l?1:0)|(n?2:0)]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,n){j(e,l,n),t=!0},p(l,[n]){const s={};n&7&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){D(e,l)}}}class at extends q{constructor(e){super(),V(this,e,null,st,R,{})}}function rt(a){let e,t,l;return t=new at({}),{c(){e=y("header"),M(t.$$.fragment),this.h()},l(n){e=E(n,"HEADER",{id:!0});var s=z(e);S(t.$$.fragment,s),s.forEach(d),this.h()},h(){C(e,"id","top")},m(n,s){b(n,e,s),j(t,e,null),l=!0},p:W,i(n){l||(p(t.$$.fragment,n),l=!0)},o(n){k(t.$$.fragment,n),l=!1},d(n){n&&d(e),D(t)}}}class nt extends q{constructor(e){super(),V(this,e,null,rt,R,{})}}function ot(a){let e,t,l,n,s,f,o,r;return{c(){e=y("footer"),t=y("p"),l=y("i"),n=B(),s=O(a[0]),f=O(" Christopher Tønnesland."),o=y("p"),r=O("All rights reserved."),this.h()},l(i){e=E(i,"FOOTER",{class:!0});var u=z(e);t=E(u,"P",{});var m=z(t);l=E(m,"I",{class:!0}),z(l).forEach(d),n=H(m),s=I(m,a[0]),f=I(m," Christopher Tønnesland."),m.forEach(d),o=E(u,"P",{});var c=z(o);r=I(c,"All rights reserved."),c.forEach(d),u.forEach(d),this.h()},h(){C(l,"class","fa-regular fa-copyright"),C(e,"class","container h-full mx-auto flex justify-center items-center flex-wrap p-5 gap-2")},m(i,u){b(i,e,u),P(e,t),P(t,l),P(t,n),P(t,s),P(t,f),P(e,o),P(o,r)},p:W,i:W,o:W,d(i){i&&d(e)}}}function it(a){return[new Date().getFullYear()]}class ft extends q{constructor(e){super(),V(this,e,it,ot,R,{})}}function ut(a){let e,t,l,n,s,f;e=new nt({});const o=a[2].default,r=Y(o,a,a[1],null);return s=new ft({}),{c(){M(e.$$.fragment),t=B(),l=y("main"),r&&r.c(),n=B(),M(s.$$.fragment)},l(i){S(e.$$.fragment,i),t=H(i),l=E(i,"MAIN",{});var u=z(l);r&&r.l(u),u.forEach(d),n=H(i),S(s.$$.fragment,i)},m(i,u){j(e,i,u),b(i,t,u),b(i,l,u),r&&r.m(l,null),b(i,n,u),j(s,i,u),f=!0},p(i,[u]){r&&r.p&&(!f||u&2)&&J(r,o,i,i[1],f?Q(o,i[1],u,null):K(i[1]),null)},i(i){f||(p(e.$$.fragment,i),p(r,i),p(s.$$.fragment,i),f=!0)},o(i){k(e.$$.fragment,i),k(r,i),k(s.$$.fragment,i),f=!1},d(i){D(e,i),i&&d(t),i&&d(l),r&&r.d(i),i&&d(n),D(s,i)}}}function ct(a,e,t){let{$$slots:l={},$$scope:n}=e;const s=!0;return a.$$set=f=>{"$$scope"in f&&t(1,n=f.$$scope)},[s,n,l]}class gt extends q{constructor(e){super(),V(this,e,ct,ut,R,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{gt as component,_t as universal};
