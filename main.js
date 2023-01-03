(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function v(){}const bt=e=>e;function $t(e){return e()}function ut(){return Object.create(null)}function W(e){e.forEach($t)}function nt(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Et(e){return Object.keys(e).length===0}const kt=typeof window<"u";let Ct=kt?()=>window.performance.now():()=>Date.now(),lt=kt?e=>requestAnimationFrame(e):v;const R=new Set;function vt(e){R.forEach(t=>{t.c(e)||(R.delete(t),t.f())}),R.size!==0&&lt(vt)}function Ot(e){let t;return R.size===0&&lt(vt),{promise:new Promise(n=>{R.add(t={c:e,f:n})}),abort(){R.delete(t)}}}function $(e,t){e.appendChild(t)}function wt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function jt(e){const t=y("style");return St(wt(e),t),t.sheet}function St(e,t){return $(e.head||e,t),t.sheet}function g(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function Z(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function x(){return C(" ")}function it(){return C("")}function Pt(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function At(e){return Array.from(e.childNodes)}function Ft(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Mt(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,i,t),l}const Q=new Map;let X=0;function Lt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Tt(e,t){const n={stylesheet:jt(t),rules:{}};return Q.set(e,n),n}function Nt(e,t,n,i,l,s,o,u=0){const _=16.666/i;let a=`{
`;for(let w=0;w<=1;w+=_){const O=t+(n-t)*s(w);a+=w*100+`%{${o(O,1-O)}}
`}const d=a+`100% {${o(n,1-n)}}
}`,m=`__svelte_${Lt(d)}_${u}`,b=wt(e),{stylesheet:r,rules:f}=Q.get(b)||Tt(b,e);f[m]||(f[m]=!0,r.insertRule(`@keyframes ${m} ${d}`,r.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${m} ${i}ms linear ${l}ms 1 both`,X+=1,m}function ft(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),l=n.length-i.length;l&&(e.style.animation=i.join(", "),X-=l,X||Rt())}function Rt(){lt(()=>{X||(Q.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&p(t)}),Q.clear())})}let ot;function V(e){ot=e}const D=[],at=[],U=[],mt=[],qt=Promise.resolve();let st=!1;function Dt(){st||(st=!0,qt.then(xt))}function L(e){U.push(e)}const et=new Set;let z=0;function xt(){const e=ot;do{for(;z<D.length;){const t=D[z];z++,V(t),It(t.$$)}for(V(null),D.length=0,z=0;at.length;)at.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];et.has(n)||(et.add(n),n())}U.length=0}while(D.length);for(;mt.length;)mt.pop()();st=!1,et.clear(),V(e)}function It(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}let q;function Jt(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function dt(e,t,n){e.dispatchEvent(Mt(`${t?"intro":"outro"}${n}`))}const G=new Set;let M;function Vt(){M={r:0,c:[],p:M}}function Wt(){M.r||W(M.c),M=M.p}function S(e,t){e&&e.i&&(G.delete(e),e.i(t))}function N(e,t,n,i){if(e&&e.o){if(G.has(e))return;G.add(e),M.c.push(()=>{G.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Ht={duration:0};function rt(e,t,n){const i={direction:"in"};let l=t(e,n,i),s=!1,o,u,_=0;function a(){o&&ft(e,o)}function d(){const{delay:b=0,duration:r=300,easing:f=bt,tick:h=v,css:w}=l||Ht;w&&(o=Nt(e,0,1,r,b,f,w,_++)),h(0,1);const O=Ct()+b,T=O+r;u&&u.abort(),s=!0,L(()=>dt(e,!0,"start")),u=Ot(P=>{if(s){if(P>=T)return h(1,0),dt(e,!0,"end"),a(),s=!1;if(P>=O){const j=f((P-O)/r);h(j,1-j)}}return s})}let m=!1;return{start(){m||(m=!0,ft(e),nt(l)?(l=l(i),Jt().then(d)):d())},invalidate(){m=!1},end(){s&&(a(),s=!1)}}}function Y(e){e&&e.c()}function I(e,t,n,i){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),i||L(()=>{const o=e.$$.on_mount.map($t).filter(nt);e.$$.on_destroy?e.$$.on_destroy.push(...o):W(o),e.$$.on_mount=[]}),s.forEach(L)}function J(e,t){const n=e.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(e,t){e.$$.dirty[0]===-1&&(D.push(e),Dt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,n,i,l,s,o,u=[-1]){const _=ot;V(e);const a=e.$$={fragment:null,ctx:[],props:s,update:v,not_equal:l,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:ut(),dirty:u,skip_bound:!1,root:t.target||_.$$.root};o&&o(a.root);let d=!1;if(a.ctx=n?n(e,t.props||{},(m,b,...r)=>{const f=r.length?r[0]:b;return a.ctx&&l(a.ctx[m],a.ctx[m]=f)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](f),d&&Bt(e,m)),b}):[],a.update(),d=!0,W(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){const m=At(t.target);a.fragment&&a.fragment.l(m),m.forEach(p)}else a.fragment&&a.fragment.c();t.intro&&S(e.$$.fragment),I(e,t.target,t.anchor,t.customElement),xt()}V(_)}class K{$destroy(){J(this,1),this.$destroy=v}$on(t,n){if(!nt(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!Et(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ct(e,{delay:t=0,duration:n=400,easing:i=bt}={}){const l=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:s=>`opacity: ${s*l}`}}function Kt(e){let t,n,i;return{c(){t=y("link"),n=x(),i=y("main"),i.innerHTML=`<div class="w3-row"><a href="https://github.com/guyotJs" class="svelte-f2wc0e"><i class="fa fa-github"></i></a>  
		<a href="https://classicmc-studios.github.io" class="svelte-f2wc0e"><i class="fa fa-cube"></i></a>  
		<a href="mailto: classicmclive+guyot@gmail.com" class="svelte-f2wc0e"><i class="fa fa-envelope"></i></a></div>`,k(t,"rel","stylesheet"),k(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")},m(l,s){g(l,t,s),g(l,n,s),g(l,i,s)},p:v,i:v,o:v,d(l){l&&p(t),l&&p(n),l&&p(i)}}}class zt extends K{constructor(t){super(),B(this,t,null,Kt,H,{})}}function ht(e,t,n){const i=e.slice();return i[1]=t[n],i[3]=n,i}function Yt(e){let t,n=e[1].text+"",i,l;return{c(){t=y("a"),i=C(n),l=y("br"),k(t,"href",e[1].link),k(t,"class","svelte-y6nv6e")},m(s,o){g(s,t,o),$(t,i),g(s,l,o)},p:v,d(s){s&&p(t),s&&p(l)}}}function Ut(e){let t,n=e[1].text+"",i,l;return{c(){t=y("a"),i=C(n),l=C(" / "),k(t,"href",e[1].link),k(t,"class","svelte-y6nv6e")},m(s,o){g(s,t,o),$(t,i),g(s,l,o)},p:v,d(s){s&&p(t),s&&p(l)}}}function _t(e){let t;function n(s,o){return s[3]==0||Zt(s[3])==0?Ut:Yt}let l=n(e)(e);return{c(){l.c(),t=it()},m(s,o){l.m(s,o),g(s,t,o)},p(s,o){l.p(s,o)},d(s){l.d(s),s&&p(t)}}}function Gt(e){let t,n,i,l,s,o,u,_,a,d,m=e[0],b=[];for(let r=0;r<m.length;r+=1)b[r]=_t(ht(e,m,r));return{c(){t=y("main"),n=y("br"),i=x(),l=y("div"),s=y("i"),s.textContent=" ",o=C("Apps"),u=y("br"),_=x();for(let r=0;r<b.length;r+=1)b[r].c();a=x(),d=y("div"),d.innerHTML=" Requirements- Knowledge of Html, Css, and Js. We would be willing to teach these skills as well. <br/>",k(s,"class","fa fa-desktop"),k(l,"class","bc-border"),Ft(d,"opacity","0.00000001")},m(r,f){g(r,t,f),$(t,n),$(t,i),$(t,l),$(l,s),$(l,o),$(l,u),$(l,_);for(let h=0;h<b.length;h+=1)b[h].m(l,null);$(t,a),$(t,d)},p(r,[f]){if(f&1){m=r[0];let h;for(h=0;h<m.length;h+=1){const w=ht(r,m,h);b[h]?b[h].p(w,f):(b[h]=_t(w),b[h].c(),b[h].m(l,null))}for(;h<b.length;h+=1)b[h].d(1);b.length=m.length}},i:v,o:v,d(r){r&&p(t),Z(b,r)}}}function Zt(e){return e%2}function Qt(e){return[[{text:"One Operation Calc",link:"https://guyotjs.github.io/calc/"},{text:"Tsoc",link:"https://guyotjs.github.io/tsoc/"},{text:"Pythagorean Theorem Calculator",link:"https://classicmc-studios.github.io/pyt/"},{text:"Tusky Time in Svelte",link:"https://guyotjs.github.io/tts/"},{text:"MossJs Source",link:"https://classicmc-studios.github.io/js/moss.js"},{text:"cJs Source",link:"https://github.com/ClassicMC-Studios/c.js-V3/blob/main/cjsV3.js"},{text:"Bc.css",link:"https://classicmc-studios.github.io/bc.css"},{text:"Emulator Creation",link:"https://github.com/guyotJs/Emulator-creation/blob/main/README.md"}]]}class Xt extends K{constructor(t){super(),B(this,t,Qt,Gt,H,{})}}function pt(e,t,n){const i=e.slice();return i[1]=t[n],i[3]=n,i}function te(e){let t,n=e[1].text+"",i,l;return{c(){t=y("a"),i=C(n),l=y("br"),k(t,"href",e[1].link),k(t,"class","svelte-299k88")},m(s,o){g(s,t,o),$(t,i),g(s,l,o)},p:v,d(s){s&&p(t),s&&p(l)}}}function ee(e){let t,n=e[1].text+"",i,l,s=e[3]<e[0].length-1&&se();return{c(){t=y("a"),i=C(n),s&&s.c(),l=it(),k(t,"href",e[1].link),k(t,"class","svelte-299k88")},m(o,u){g(o,t,u),$(t,i),s&&s.m(o,u),g(o,l,u)},p:v,d(o){o&&p(t),s&&s.d(o),o&&p(l)}}}function se(e){let t;return{c(){t=C(" / ")},m(n,i){g(n,t,i)},d(n){n&&p(t)}}}function gt(e){let t;function n(s,o){return s[3]==0||le(s[3]+1)!=0?ee:te}let l=n(e)(e);return{c(){l.c(),t=it()},m(s,o){l.m(s,o),g(s,t,o)},p(s,o){l.p(s,o)},d(s){l.d(s),s&&p(t)}}}function ne(e){let t,n,i,l,s,o=e[0],u=[];for(let _=0;_<o.length;_+=1)u[_]=gt(pt(e,o,_));return{c(){t=y("main"),n=y("i"),i=C(" Fronds"),l=y("br"),s=x();for(let _=0;_<u.length;_+=1)u[_].c();k(n,"class","fa fa-gamepad"),k(t,"class","bc-border")},m(_,a){g(_,t,a),$(t,n),$(t,i),$(t,l),$(t,s);for(let d=0;d<u.length;d+=1)u[d].m(t,null)},p(_,[a]){if(a&1){o=_[0];let d;for(d=0;d<o.length;d+=1){const m=pt(_,o,d);u[d]?u[d].p(m,a):(u[d]=gt(m),u[d].c(),u[d].m(t,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=o.length}},i:v,o:v,d(_){_&&p(t),Z(u,_)}}}function le(e){return e%3}function ie(e){return[[{text:"Pokemon Emerald",link:"https://classicmc-studios.github.io/guyot/games/emerald.html"},{text:"Pokemon Leafgreen",link:"https://classicmc-studios.github.io/guyot/games/leafgreen.html"},{text:"Pokemon Red",link:"https://classicmc-studios.github.io/guyot/games/red.html"},{text:"Final Fantasy V",link:"https://classicmc-studios.github.io/guyot/games/ffv.html"},{text:"Final Fantasy VI",link:"https://classicmc-studios.github.io/guyot/games/ffvien.html"},{text:"Final Fantasy VI Jpn",link:"https://classicmc-studios.github.io/guyot/games/ffvi.html"},{text:"Yoshi's Island",link:"https://classicmc-studios.github.io/guyot/games/yo.html"},{text:"Yoshi's Island ROM hack",link:"https://classicmc-studios.github.io/guyot/games/yoshi.html"},{text:"Spyro Season of Flame",link:"https://classicmc-studios.github.io/guyot/games/spyro.html"},{text:"Super Mario World",link:"https://classicmc-studios.github.io/guyot/games/smw.html"},{text:"Minish Cap",link:"https://classicmc-studios.github.io/guyot/games/mc.html"},{text:"The legend of Zelda",link:"https://classicmc-studios.github.io/guyot/games/tloz.html"},{text:"A link to the Past",link:"https://classicmc-studios.github.io/guyot/games/lttp.html"},{text:"Super Mario Kart",link:"https://classicmc-studios.github.io/guyot/games/smk.html"},{text:"Final Fantasy 1 & 2 (DawnOfSouls)",link:"https://classicmc-studios.github.io/guyot/games/ff12.html"},{text:"Doom",link:"https://classicmc-studios.github.io/guyot/games/doom.html"},{text:"Mario Kart Super Circut",link:"https://classicmc-studios.github.io/guyot/games/mksc.html"}]]}class oe extends K{constructor(t){super(),B(this,t,ie,ne,H,{})}}function re(e){let t;return{c(){t=y("main"),t.innerHTML=`<b>Word of the Week</b><br/> 
	<em>Persimmon</em><br/>
	An edible fruit of trees in the genus Diospyros.<br/>
	View Original website <a href="https://guyotjs.github.io/original/" class="svelte-1s8iu4h"><b>Here</b></a>`},m(n,i){g(n,t,i)},p:v,i:v,o:v,d(n){n&&p(t)}}}class ce extends K{constructor(t){super(),B(this,t,null,re,H,{})}}function ue(e,t,n){const i=e.slice();return i[2]=t[n],i[4]=n,i}function fe(e,t,n){const i=e.slice();return i[2]=t[n],i[4]=n,i}function yt(e){let t,n,i,l,s,o,u,_,a,d,m,b,r,f,h,w,O,T,P="GUYOT",j=[];for(let c=0;c<P.length;c+=1)j[c]=ae(fe(e,P,c));let tt="BETA",A=[];for(let c=0;c<tt.length;c+=1)A[c]=me(ue(e,tt,c));return a=new zt({}),m=new ce({}),f=new oe({}),w=new Xt({}),{c(){for(let c=0;c<j.length;c+=1)j[c].c();t=y("br"),n=x();for(let c=0;c<A.length;c+=1)A[c].c();i=y("br"),l=x(),s=y("rest"),o=C("Reinvigorating Chromebooks "),u=y("em"),u.textContent="Everywhere",_=x(),Y(a.$$.fragment),d=x(),Y(m.$$.fragment),b=y("br"),r=x(),Y(f.$$.fragment),h=x(),Y(w.$$.fragment)},m(c,E){for(let F=0;F<j.length;F+=1)j[F].m(c,E);g(c,t,E),g(c,n,E);for(let F=0;F<A.length;F+=1)A[F].m(c,E);g(c,i,E),g(c,l,E),g(c,s,E),$(s,o),$(s,u),$(s,_),I(a,s,null),$(s,d),I(m,s,null),$(s,b),$(s,r),I(f,s,null),$(s,h),I(w,s,null),T=!0},i(c){if(!T){for(let E=0;E<P.length;E+=1)S(j[E]);for(let E=0;E<tt.length;E+=1)S(A[E]);S(a.$$.fragment,c),S(m.$$.fragment,c),S(f.$$.fragment,c),S(w.$$.fragment,c),O||L(()=>{O=rt(s,ct,{delay:2e3+5*150,duration:800}),O.start()}),T=!0}},o(c){N(a.$$.fragment,c),N(m.$$.fragment,c),N(f.$$.fragment,c),N(w.$$.fragment,c),T=!1},d(c){Z(j,c),c&&p(t),c&&p(n),Z(A,c),c&&p(i),c&&p(l),c&&p(s),J(a),J(m),J(f),J(w)}}}function ae(e){let t,n,i,l;return{c(){t=y("span"),n=C(e[2]),l=x(),k(t,"class","lg svelte-5qgsui")},m(s,o){g(s,t,o),$(t,n),g(s,l,o)},p:v,i(s){i||L(()=>{i=rt(t,ct,{delay:1e3+e[4]*150,duration:800}),i.start()})},o:v,d(s){s&&p(t),s&&p(l)}}}function me(e){let t,n,i,l;return{c(){t=y("span"),n=C(e[2]),l=x(),k(t,"class","lg svelte-5qgsui")},m(s,o){g(s,t,o),$(t,n),g(s,l,o)},p:v,i(s){i||L(()=>{i=rt(t,ct,{delay:2e3+e[4]*150,duration:800}),i.start()})},o:v,d(s){s&&p(t),s&&p(l)}}}function de(e){let t,n,i,l,s,o,u,_,a,d,m,b,r=e[0]&&yt(e);return{c(){t=y("link"),n=x(),i=y("link"),l=x(),s=y("link"),o=x(),u=y("main"),_=y("unusedCss"),a=x(),r&&r.c(),k(t,"href","https://fonts.googleapis.com/css?family=Overpass:100,400"),k(t,"rel","stylesheet"),k(i,"href","https://www.w3schools.com/w3css/4/w3.css"),k(i,"rel","stylesheet"),k(s,"href","https://classicmc-studios.github.io/bc.css"),k(s,"rel","stylesheet"),k(_,"class","md sm svelte-5qgsui"),k(u,"class","svelte-5qgsui")},m(f,h){g(f,t,h),g(f,n,h),g(f,i,h),g(f,l,h),g(f,s,h),g(f,o,h),g(f,u,h),$(u,_),$(u,a),r&&r.m(u,null),d=!0,m||(b=Pt(window,"load",e[1]()),m=!0)},p(f,[h]){f[0]?r?h&1&&S(r,1):(r=yt(f),r.c(),S(r,1),r.m(u,null)):r&&(Vt(),N(r,1,1,()=>{r=null}),Wt())},i(f){d||(S(r),d=!0)},o(f){N(r),d=!1},d(f){f&&p(t),f&&p(n),f&&p(i),f&&p(l),f&&p(s),f&&p(o),f&&p(u),r&&r.d(),m=!1,b()}}}function he(e,t,n){let i=!1;function l(){n(0,i=!0)}return[i,l]}class _e extends K{constructor(t){super(),B(this,t,he,de,H,{})}}new _e({target:document.getElementById("app")});
