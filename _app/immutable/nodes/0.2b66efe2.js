import{S as q,i as V,s as R,e as X,b as v,v as fe,d as p,f as ue,g as C,h as m,C as M,D as he,E as w,F as S,G as Z,H as Y,k as y,a as D,l as z,m as E,c as F,I as U,J as L,K as $,L as J,M as K,N as Q,O as G,q as O,r as I,n as b,u as ce,y as N,z as H,A as T,P as me,B,Q as _e,R as ge,T as te,U as W,V as ve,W as be,X as le,Y as ke,Z as pe}from"../chunks/index.f7ca0196.js";import{c as j,F as de}from"../chunks/Indicator.svelte_svelte_type_style_lang.c80ec71b.js";import{b as Ce}from"../chunks/paths.c326448b.js";const ye=!0,ht=Object.freeze(Object.defineProperty({__proto__:null,prerender:ye},Symbol.toStringTag,{value:"Module"}));function ze(a){const e=a-1;return e*e*e+1}function Ee(a){return--a*a*a*a*a+1}function se(a,{delay:e=0,duration:t=400,easing:l=ze,axis:n="y"}={}){const s=getComputedStyle(a),f=+s.opacity,o=n==="y"?"height":"width",r=parseFloat(s[o]),i=n==="y"?["top","bottom"]:["left","right"],u=i.map(P=>`${P[0].toUpperCase()}${P.slice(1)}`),d=parseFloat(s[`padding${u[0]}`]),c=parseFloat(s[`padding${u[1]}`]),g=parseFloat(s[`margin${u[0]}`]),k=parseFloat(s[`margin${u[1]}`]),h=parseFloat(s[`border${u[0]}Width`]),_=parseFloat(s[`border${u[1]}Width`]);return{delay:e,duration:t,easing:l,css:P=>`overflow: hidden;opacity: ${Math.min(P*20,1)*f};${o}: ${P*r}px;padding-${i[0]}: ${P*d}px;padding-${i[1]}: ${P*c}px;margin-${i[0]}: ${P*g}px;margin-${i[1]}: ${P*k}px;border-${i[0]}-width: ${P*h}px;border-${i[1]}-width: ${P*_}px;`}}const we=a=>({svgSize:a&4}),ae=a=>({svgSize:a[5][a[2]]}),Ae=a=>({svgSize:a&4}),re=a=>({svgSize:a[5][a[2]]});function Le(a){let e,t,l,n,s,f,o=a[0]&&ne(a);const r=a[9].default,i=Y(r,a,a[8],ae);let u=[{type:"button"},a[6],{class:a[4]},{"aria-label":l=a[1]??a[0]}],d={};for(let c=0;c<u.length;c+=1)d=w(d,u[c]);return{c(){e=y("button"),o&&o.c(),t=D(),i&&i.c(),this.h()},l(c){e=z(c,"BUTTON",{type:!0,class:!0,"aria-label":!0});var g=E(e);o&&o.l(g),t=F(g),i&&i.l(g),g.forEach(m),this.h()},h(){U(e,d)},m(c,g){v(c,e,g),o&&o.m(e,null),L(e,t),i&&i.m(e,null),e.autofocus&&e.focus(),n=!0,s||(f=$(e,"click",a[10]),s=!0)},p(c,g){c[0]?o?o.p(c,g):(o=ne(c),o.c(),o.m(e,t)):o&&(o.d(1),o=null),i&&i.p&&(!n||g&260)&&J(i,r,c,c[8],n?Q(r,c[8],g,we):K(c[8]),ae),U(e,d=G(u,[{type:"button"},g&64&&c[6],(!n||g&16)&&{class:c[4]},(!n||g&3&&l!==(l=c[1]??c[0]))&&{"aria-label":l}]))},i(c){n||(C(i,c),n=!0)},o(c){p(i,c),n=!1},d(c){c&&m(e),o&&o.d(),i&&i.d(c),s=!1,f()}}}function Pe(a){let e,t,l,n,s=a[0]&&oe(a);const f=a[9].default,o=Y(f,a,a[8],re);let r=[{href:a[3]},a[6],{class:a[4]},{"aria-label":l=a[1]??a[0]}],i={};for(let u=0;u<r.length;u+=1)i=w(i,r[u]);return{c(){e=y("a"),s&&s.c(),t=D(),o&&o.c(),this.h()},l(u){e=z(u,"A",{href:!0,class:!0,"aria-label":!0});var d=E(e);s&&s.l(d),t=F(d),o&&o.l(d),d.forEach(m),this.h()},h(){U(e,i)},m(u,d){v(u,e,d),s&&s.m(e,null),L(e,t),o&&o.m(e,null),n=!0},p(u,d){u[0]?s?s.p(u,d):(s=oe(u),s.c(),s.m(e,t)):s&&(s.d(1),s=null),o&&o.p&&(!n||d&260)&&J(o,f,u,u[8],n?Q(f,u[8],d,Ae):K(u[8]),re),U(e,i=G(r,[(!n||d&8)&&{href:u[3]},d&64&&u[6],(!n||d&16)&&{class:u[4]},(!n||d&3&&l!==(l=u[1]??u[0]))&&{"aria-label":l}]))},i(u){n||(C(o,u),n=!0)},o(u){p(o,u),n=!1},d(u){u&&m(e),s&&s.d(),o&&o.d(u)}}}function ne(a){let e,t;return{c(){e=y("span"),t=O(a[0]),this.h()},l(l){e=z(l,"SPAN",{class:!0});var n=E(e);t=I(n,a[0]),n.forEach(m),this.h()},h(){b(e,"class","sr-only")},m(l,n){v(l,e,n),L(e,t)},p(l,n){n&1&&ce(t,l[0])},d(l){l&&m(e)}}}function oe(a){let e,t;return{c(){e=y("span"),t=O(a[0]),this.h()},l(l){e=z(l,"SPAN",{class:!0});var n=E(e);t=I(n,a[0]),n.forEach(m),this.h()},h(){b(e,"class","sr-only")},m(l,n){v(l,e,n),L(e,t)},p(l,n){n&1&&ce(t,l[0])},d(l){l&&m(e)}}}function Me(a){let e,t,l,n;const s=[Pe,Le],f=[];function o(r,i){return r[3]?0:1}return e=o(a),t=f[e]=s[e](a),{c(){t.c(),l=X()},l(r){t.l(r),l=X()},m(r,i){f[e].m(r,i),v(r,l,i),n=!0},p(r,[i]){let u=e;e=o(r),e===u?f[e].p(r,i):(fe(),p(f[u],1,1,()=>{f[u]=null}),ue(),t=f[e],t?t.p(r,i):(t=f[e]=s[e](r),t.c()),C(t,1),t.m(l.parentNode,l))},i(r){n||(C(t),n=!0)},o(r){p(t),n=!1},d(r){f[e].d(r),r&&m(l)}}}function Se(a,e,t){const l=["color","name","ariaLabel","size","href"];let n=M(e,l),{$$slots:s={},$$scope:f}=e;const o=he("background");let{color:r="default"}=e,{name:i=void 0}=e,{ariaLabel:u=void 0}=e,{size:d="md"}=e,{href:c=void 0}=e;const g={dark:"text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",gray:"text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",red:"text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700",yellow:"text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700",green:"text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700",indigo:"text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700",purple:"text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700",pink:"text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700",blue:"text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700",default:"focus:ring-gray-400 "},k={xs:"m-0.5 rounded focus:ring-1 p-0.5",sm:"m-0.5 rounded focus:ring-1 p-0.5",md:"m-0.5 rounded-lg focus:ring-2 p-1.5",lg:"m-0.5 rounded-lg focus:ring-2 p-2.5"};let h;const _={xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-5 h-5"};function P(A){Z.call(this,a,A)}return a.$$set=A=>{t(14,e=w(w({},e),S(A))),t(6,n=M(e,l)),"color"in A&&t(7,r=A.color),"name"in A&&t(0,i=A.name),"ariaLabel"in A&&t(1,u=A.ariaLabel),"size"in A&&t(2,d=A.size),"href"in A&&t(3,c=A.href),"$$scope"in A&&t(8,f=A.$$scope)},a.$$.update=()=>{t(4,h=j("focus:outline-none whitespace-normal",k[d],g[r],r==="default"&&(o?"hover:bg-gray-100 dark:hover:bg-gray-600":"hover:bg-gray-100 dark:hover:bg-gray-700"),e.class))},e=S(e),[i,u,d,c,h,_,n,r,f,s,P]}class De extends q{constructor(e){super(),V(this,e,Se,Me,R,{color:7,name:0,ariaLabel:1,size:2,href:3})}}const Fe=a=>({hidden:a&8}),ie=a=>({hidden:a[3],toggle:a[4]});function Ne(a){let e,t,l;const n=a[7].default,s=Y(n,a,a[8],ie);return{c(){e=y("div"),s&&s.c(),this.h()},l(f){e=z(f,"DIV",{class:!0});var o=E(e);s&&s.l(o),o.forEach(m),this.h()},h(){b(e,"class",t=j(a[1],a[2]&&"w-full"||"container"))},m(f,o){v(f,e,o),s&&s.m(e,null),l=!0},p(f,o){s&&s.p&&(!l||o&264)&&J(s,n,f,f[8],l?Q(n,f[8],o,Fe):K(f[8]),ie),(!l||o&6&&t!==(t=j(f[1],f[2]&&"w-full"||"container")))&&b(e,"class",t)},i(f){l||(C(s,f),l=!0)},o(f){p(s,f),l=!1},d(f){f&&m(e),s&&s.d(f)}}}function He(a){let e,t;const l=[{tag:"nav"},a[5],{class:j(a[0],a[6].class)}];let n={$$slots:{default:[Ne]},$$scope:{ctx:a}};for(let s=0;s<l.length;s+=1)n=w(n,l[s]);return e=new de({props:n}),{c(){N(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,f){T(e,s,f),t=!0},p(s,[f]){const o=f&97?G(l,[l[0],f&32&&me(s[5]),f&65&&{class:j(s[0],s[6].class)}]):{};f&270&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function Te(a,e,t){const l=["navClass","navDivClass","fluid"];let n=M(e,l),{$$slots:s={},$$scope:f}=e,{navClass:o="px-2 sm:px-4 py-2.5 w-full"}=e,{navDivClass:r="mx-auto flex flex-wrap justify-between items-center "}=e,{fluid:i=!1}=e,u=!0,d=()=>{t(3,u=!u)};return a.$$set=c=>{t(6,e=w(w({},e),S(c))),t(5,n=M(e,l)),"navClass"in c&&t(0,o=c.navClass),"navDivClass"in c&&t(1,r=c.navDivClass),"fluid"in c&&t(2,i=c.fluid),"$$scope"in c&&t(8,f=c.$$scope)},a.$$.update=()=>{t(5,n.color=n.color??"navbar",n)},e=S(e),[o,r,i,u,d,n,e,s,f]}class Be extends q{constructor(e){super(),V(this,e,Te,He,R,{navClass:0,navDivClass:1,fluid:2})}}function je(a){let e,t,l;const n=a[4].default,s=Y(n,a,a[3],null);let f=[{href:a[0]},a[1],{class:t=j("flex items-center",a[2].class)}],o={};for(let r=0;r<f.length;r+=1)o=w(o,f[r]);return{c(){e=y("a"),s&&s.c(),this.h()},l(r){e=z(r,"A",{href:!0,class:!0});var i=E(e);s&&s.l(i),i.forEach(m),this.h()},h(){U(e,o)},m(r,i){v(r,e,i),s&&s.m(e,null),l=!0},p(r,[i]){s&&s.p&&(!l||i&8)&&J(s,n,r,r[3],l?Q(n,r[3],i,null):K(r[3]),null),U(e,o=G(f,[(!l||i&1)&&{href:r[0]},i&2&&r[1],(!l||i&4&&t!==(t=j("flex items-center",r[2].class)))&&{class:t}]))},i(r){l||(C(s,r),l=!0)},o(r){p(s,r),l=!1},d(r){r&&m(e),s&&s.d(r)}}}function Oe(a,e,t){const l=["href"];let n=M(e,l),{$$slots:s={},$$scope:f}=e,{href:o=""}=e;return a.$$set=r=>{t(2,e=w(w({},e),S(r))),t(1,n=M(e,l)),"href"in r&&t(0,o=r.href),"$$scope"in r&&t(3,f=r.$$scope)},e=S(e),[o,n,e,f,s]}class Ie extends q{constructor(e){super(),V(this,e,Oe,je,R,{href:0})}}function Ue(a){let e,t,l,n,s=[{xmlns:"http://www.w3.org/2000/svg"},{width:a[0]},{height:a[0]},{class:t=a[4].class},a[5],{"aria-label":a[1]},{fill:"none"},{viewBox:a[2]},{"stroke-width":"2"}],f={};for(let o=0;o<s.length;o+=1)f=w(f,s[o]);return{c(){e=_e("svg"),this.h()},l(o){e=ge(o,"svg",{xmlns:!0,width:!0,height:!0,class:!0,"aria-label":!0,fill:!0,viewBox:!0,"stroke-width":!0});var r=E(e);r.forEach(m),this.h()},h(){te(e,f)},m(o,r){v(o,e,r),e.innerHTML=a[3],l||(n=$(e,"click",a[8]),l=!0)},p(o,[r]){r&8&&(e.innerHTML=o[3]),te(e,f=G(s,[{xmlns:"http://www.w3.org/2000/svg"},r&1&&{width:o[0]},r&1&&{height:o[0]},r&16&&t!==(t=o[4].class)&&{class:t},r&32&&o[5],r&2&&{"aria-label":o[1]},{fill:"none"},r&4&&{viewBox:o[2]},{"stroke-width":"2"}]))},i:W,o:W,d(o){o&&m(e),l=!1,n()}}}function qe(a,e,t){const l=["size","color","variation","ariaLabel"];let n=M(e,l),{size:s="24"}=e,{color:f="currentColor"}=e,{variation:o="outline"}=e,{ariaLabel:r="bars 3"}=e,i,u,d=`<path stroke="${f}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `,c=`<path fill="${f}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;function g(k){Z.call(this,a,k)}return a.$$set=k=>{t(4,e=w(w({},e),S(k))),t(5,n=M(e,l)),"size"in k&&t(0,s=k.size),"color"in k&&t(6,f=k.color),"variation"in k&&t(7,o=k.variation),"ariaLabel"in k&&t(1,r=k.ariaLabel)},a.$$.update=()=>{if(a.$$.dirty&128)switch(o){case"outline":t(3,u=d),t(2,i="0 0 24 24");break;case"solid":t(3,u=c),t(2,i="0 0 24 24");break;default:t(3,u=d),t(2,i="0 0 24 24")}},e=S(e),[s,r,i,u,e,n,f,o,g]}class Ve extends q{constructor(e){super(),V(this,e,qe,Ue,R,{size:0,color:6,variation:7,ariaLabel:1})}}function Re(a){let e,t;return e=new Ve({props:{class:"h-6 w-6 shrink-0"}}),{c(){N(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,n){T(e,l,n),t=!0},p:W,i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){p(e.$$.fragment,l),t=!1},d(l){B(e,l)}}}function We(a){let e,t;const l=[{name:"Open main menu"},a[1],{class:j(a[0],a[2].class)}];let n={$$slots:{default:[Re]},$$scope:{ctx:a}};for(let s=0;s<l.length;s+=1)n=w(n,l[s]);return e=new De({props:n}),e.$on("click",a[3]),{c(){N(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,f){T(e,s,f),t=!0},p(s,[f]){const o=f&7?G(l,[l[0],f&2&&me(s[1]),f&5&&{class:j(s[0],s[2].class)}]):{};f&16&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function Ge(a,e,t){const l=["btnClass"];let n=M(e,l),{btnClass:s="ml-3 md:hidden"}=e;function f(o){Z.call(this,a,o)}return a.$$set=o=>{t(2,e=w(w({},e),S(o))),t(1,n=M(e,l)),"btnClass"in o&&t(0,s=o.btnClass)},e=S(e),[s,n,e,f]}class Ye extends q{constructor(e){super(),V(this,e,Ge,We,R,{btnClass:0})}}function Je(a){let e,t,l;const n=a[9].default,s=Y(n,a,a[11],null);let f=[a[4],{class:a[2]},{hidden:a[0]}],o={};for(let r=0;r<f.length;r+=1)o=w(o,f[r]);return{c(){e=y("div"),t=y("ul"),s&&s.c(),this.h()},l(r){e=z(r,"DIV",{class:!0});var i=E(e);t=z(i,"UL",{class:!0});var u=E(t);s&&s.l(u),u.forEach(m),i.forEach(m),this.h()},h(){b(t,"class",a[3]),U(e,o)},m(r,i){v(r,e,i),L(e,t),s&&s.m(t,null),l=!0},p(r,i){s&&s.p&&(!l||i&2048)&&J(s,n,r,r[11],l?Q(n,r[11],i,null):K(r[11]),null),(!l||i&8)&&b(t,"class",r[3]),U(e,o=G(f,[i&16&&r[4],(!l||i&4)&&{class:r[2]},(!l||i&1)&&{hidden:r[0]}]))},i(r){l||(C(s,r),l=!0)},o(r){p(s,r),l=!1},d(r){r&&m(e),s&&s.d(r)}}}function Ke(a){let e,t,l,n,s,f;t=new de({props:{tag:"ul",border:!0,rounded:!0,color:"navbarUl",class:a[3],$$slots:{default:[Qe]},$$scope:{ctx:a}}});let o=[a[4],{class:a[2]}],r={};for(let i=0;i<o.length;i+=1)r=w(r,o[i]);return{c(){e=y("div"),N(t.$$.fragment),this.h()},l(i){e=z(i,"DIV",{class:!0});var u=E(e);H(t.$$.fragment,u),u.forEach(m),this.h()},h(){U(e,r)},m(i,u){v(i,e,u),T(t,e,null),n=!0,s||(f=$(e,"click",a[10]),s=!0)},p(i,u){a=i;const d={};u&8&&(d.class=a[3]),u&2048&&(d.$$scope={dirty:u,ctx:a}),t.$set(d),U(e,r=G(o,[u&16&&a[4],(!n||u&4)&&{class:a[2]}]))},i(i){n||(C(t.$$.fragment,i),be(()=>{n&&(l||(l=le(e,se,a[1],!0)),l.run(1))}),n=!0)},o(i){p(t.$$.fragment,i),l||(l=le(e,se,a[1],!1)),l.run(0),n=!1},d(i){i&&m(e),B(t),i&&l&&l.end(),s=!1,f()}}}function Qe(a){let e;const t=a[9].default,l=Y(t,a,a[11],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,s){l&&l.m(n,s),e=!0},p(n,s){l&&l.p&&(!e||s&2048)&&J(l,t,n,n[11],e?Q(t,n[11],s,null):K(n[11]),null)},i(n){e||(C(l,n),e=!0)},o(n){p(l,n),e=!1},d(n){l&&l.d(n)}}}function Xe(a){let e,t,l,n;const s=[Ke,Je],f=[];function o(r,i){return r[0]?1:0}return e=o(a),t=f[e]=s[e](a),{c(){t.c(),l=X()},l(r){t.l(r),l=X()},m(r,i){f[e].m(r,i),v(r,l,i),n=!0},p(r,[i]){let u=e;e=o(r),e===u?f[e].p(r,i):(fe(),p(f[u],1,1,()=>{f[u]=null}),ue(),t=f[e],t?t.p(r,i):(t=f[e]=s[e](r),t.c()),C(t,1),t.m(l.parentNode,l))},i(r){n||(C(t),n=!0)},o(r){p(t),n=!1},d(r){f[e].d(r),r&&m(l)}}}function Ze(a,e,t){const l=["divClass","ulClass","hidden","slideParams","activeClass","nonActiveClass"];let n=M(e,l),{$$slots:s={},$$scope:f}=e,{divClass:o="w-full md:block md:w-auto"}=e,{ulClass:r="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}=e,{hidden:i=!0}=e,{slideParams:u={delay:250,duration:500,easing:Ee}}=e,{activeClass:d="text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"}=e,{nonActiveClass:c="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}=e;ve("navbar",{activeClass:d,nonActiveClass:c});let g,k;function h(_){Z.call(this,a,_)}return a.$$set=_=>{t(12,e=w(w({},e),S(_))),t(4,n=M(e,l)),"divClass"in _&&t(5,o=_.divClass),"ulClass"in _&&t(6,r=_.ulClass),"hidden"in _&&t(0,i=_.hidden),"slideParams"in _&&t(1,u=_.slideParams),"activeClass"in _&&t(7,d=_.activeClass),"nonActiveClass"in _&&t(8,c=_.nonActiveClass),"$$scope"in _&&t(11,f=_.$$scope)},a.$$.update=()=>{t(2,g=j(o,e.class)),t(3,k=j(r,e.class))},e=S(e),[i,u,g,k,n,o,r,d,c,s,h,f]}class $e extends q{constructor(e){super(),V(this,e,Ze,Xe,R,{divClass:5,ulClass:6,hidden:0,slideParams:1,activeClass:7,nonActiveClass:8})}}function xe(a){let e,t;return{c(){e=y("img"),this.h()},l(l){e=z(l,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){pe(e.src,t="./images/logo/png/Black_logo_no_background.png")||b(e,"src",t),b(e,"class","company_logo"),b(e,"alt","CT web logo")},m(l,n){v(l,e,n)},p:W,d(l){l&&m(e)}}}function et(a){let e,t,l,n,s,f,o,r,i,u,d,c,g,k;return{c(){e=y("a"),t=O("Home"),l=D(),n=y("a"),s=O("About"),f=D(),o=y("a"),r=O("Projects"),i=D(),u=y("a"),d=O("Services"),c=D(),g=y("a"),k=O("Contact"),this.h()},l(h){e=z(h,"A",{href:!0,class:!0,active:!0});var _=E(e);t=I(_,"Home"),_.forEach(m),l=F(h),n=z(h,"A",{href:!0,class:!0});var P=E(n);s=I(P,"About"),P.forEach(m),f=F(h),o=z(h,"A",{href:!0,class:!0});var A=E(o);r=I(A,"Projects"),A.forEach(m),i=F(h),u=z(h,"A",{href:!0,class:!0});var x=E(u);d=I(x,"Services"),x.forEach(m),c=F(h),g=z(h,"A",{href:!0,class:!0});var ee=E(g);k=I(ee,"Contact"),ee.forEach(m),this.h()},h(){b(e,"href","#top"),b(e,"class","navLink svelte-wwgz4y"),b(e,"active",!0),b(n,"href","#about"),b(n,"class","navLink svelte-wwgz4y"),b(o,"href","#projects"),b(o,"class","navLink svelte-wwgz4y"),b(u,"href","#services"),b(u,"class","navLink svelte-wwgz4y"),b(g,"href","#contact"),b(g,"class","navLink navLinkBtn bg-sky-50 svelte-wwgz4y")},m(h,_){v(h,e,_),L(e,t),v(h,l,_),v(h,n,_),L(n,s),v(h,f,_),v(h,o,_),L(o,r),v(h,i,_),v(h,u,_),L(u,d),v(h,c,_),v(h,g,_),L(g,k)},p:W,d(h){h&&m(e),h&&m(l),h&&m(n),h&&m(f),h&&m(o),h&&m(i),h&&m(u),h&&m(c),h&&m(g)}}}function tt(a){let e,t,l,n,s,f;return e=new Ie({props:{href:Ce+"/",$$slots:{default:[xe]},$$scope:{ctx:a}}}),l=new Ye({}),l.$on("click",function(){ke(a[1])&&a[1].apply(this,arguments)}),s=new $e({props:{hidden:a[0],$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),t=D(),N(l.$$.fragment),n=D(),N(s.$$.fragment)},l(o){H(e.$$.fragment,o),t=F(o),H(l.$$.fragment,o),n=F(o),H(s.$$.fragment,o)},m(o,r){T(e,o,r),v(o,t,r),T(l,o,r),v(o,n,r),T(s,o,r),f=!0},p(o,r){a=o;const i={};r&4&&(i.$$scope={dirty:r,ctx:a}),e.$set(i);const u={};r&1&&(u.hidden=a[0]),r&4&&(u.$$scope={dirty:r,ctx:a}),s.$set(u)},i(o){f||(C(e.$$.fragment,o),C(l.$$.fragment,o),C(s.$$.fragment,o),f=!0)},o(o){p(e.$$.fragment,o),p(l.$$.fragment,o),p(s.$$.fragment,o),f=!1},d(o){B(e,o),o&&m(t),B(l,o),o&&m(n),B(s,o)}}}function lt(a){let e,t;return e=new Be({props:{$$slots:{default:[tt,({hidden:l,toggle:n})=>({0:l,1:n}),({hidden:l,toggle:n})=>(l?1:0)|(n?2:0)]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,n){T(e,l,n),t=!0},p(l,[n]){const s={};n&7&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){p(e.$$.fragment,l),t=!1},d(l){B(e,l)}}}class st extends q{constructor(e){super(),V(this,e,null,lt,R,{})}}function at(a){let e,t,l;return t=new st({}),{c(){e=y("header"),N(t.$$.fragment),this.h()},l(n){e=z(n,"HEADER",{id:!0});var s=E(e);H(t.$$.fragment,s),s.forEach(m),this.h()},h(){b(e,"id","top")},m(n,s){v(n,e,s),T(t,e,null),l=!0},p:W,i(n){l||(C(t.$$.fragment,n),l=!0)},o(n){p(t.$$.fragment,n),l=!1},d(n){n&&m(e),B(t)}}}class rt extends q{constructor(e){super(),V(this,e,null,at,R,{})}}function nt(a){let e,t,l,n,s,f,o,r;return{c(){e=y("footer"),t=y("p"),l=y("i"),n=D(),s=O(a[0]),f=O(" Christopher Tønnesland."),o=y("p"),r=O("All rights reserved."),this.h()},l(i){e=z(i,"FOOTER",{class:!0});var u=E(e);t=z(u,"P",{});var d=E(t);l=z(d,"I",{class:!0}),E(l).forEach(m),n=F(d),s=I(d,a[0]),f=I(d," Christopher Tønnesland."),d.forEach(m),o=z(u,"P",{});var c=E(o);r=I(c,"All rights reserved."),c.forEach(m),u.forEach(m),this.h()},h(){b(l,"class","fa-regular fa-copyright"),b(e,"class","container h-full mx-auto flex justify-center items-center flex-wrap p-5 gap-2")},m(i,u){v(i,e,u),L(e,t),L(t,l),L(t,n),L(t,s),L(t,f),L(e,o),L(o,r)},p:W,i:W,o:W,d(i){i&&m(e)}}}function ot(a){return[new Date().getFullYear()]}class it extends q{constructor(e){super(),V(this,e,ot,nt,R,{})}}function ft(a){let e,t,l,n,s,f;e=new rt({});const o=a[2].default,r=Y(o,a,a[1],null);return s=new it({}),{c(){N(e.$$.fragment),t=D(),l=y("main"),r&&r.c(),n=D(),N(s.$$.fragment)},l(i){H(e.$$.fragment,i),t=F(i),l=z(i,"MAIN",{});var u=E(l);r&&r.l(u),u.forEach(m),n=F(i),H(s.$$.fragment,i)},m(i,u){T(e,i,u),v(i,t,u),v(i,l,u),r&&r.m(l,null),v(i,n,u),T(s,i,u),f=!0},p(i,[u]){r&&r.p&&(!f||u&2)&&J(r,o,i,i[1],f?Q(o,i[1],u,null):K(i[1]),null)},i(i){f||(C(e.$$.fragment,i),C(r,i),C(s.$$.fragment,i),f=!0)},o(i){p(e.$$.fragment,i),p(r,i),p(s.$$.fragment,i),f=!1},d(i){B(e,i),i&&m(t),i&&m(l),r&&r.d(i),i&&m(n),B(s,i)}}}function ut(a,e,t){let{$$slots:l={},$$scope:n}=e;const s=!0;return a.$$set=f=>{"$$scope"in f&&t(1,n=f.$$scope)},[s,n,l]}class _t extends q{constructor(e){super(),V(this,e,ut,ft,R,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{_t as component,ht as universal};
