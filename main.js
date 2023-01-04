(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();function g(){}const Ot=e=>e;function jt(e){return e()}function at(){return Object.create(null)}function W(e){e.forEach(jt)}function ot(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Tt(e){return Object.keys(e).length===0}const Mt=typeof window<"u";let Rt=Mt?()=>window.performance.now():()=>Date.now(),rt=Mt?e=>requestAnimationFrame(e):g;const J=new Set;function Pt(e){J.forEach(t=>{t.c(e)||(J.delete(t),t.f())}),J.size!==0&&rt(Pt)}function zt(e){let t;return J.size===0&&rt(Pt),{promise:new Promise(o=>{J.add(t={c:e,f:o})}),abort(){J.delete(t)}}}function _(e,t){e.appendChild(t)}function Lt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Bt(e){const t=m("style");return Dt(Lt(e),t),t.sheet}function Dt(e,t){return _(e.head||e,t),t.sheet}function c(e,t,o){e.insertBefore(t,o||null)}function r(e){e.parentNode&&e.parentNode.removeChild(e)}function F(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function m(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function x(){return y(" ")}function S(){return y("")}function B(e,t,o,i){return e.addEventListener(t,o,i),()=>e.removeEventListener(t,o,i)}function b(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Jt(e){return Array.from(e.childNodes)}function _t(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Wt(e,t,o,i){o===null?e.style.removeProperty(t):e.style.setProperty(t,o,i?"important":"")}function Ht(e,t,{bubbles:o=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o,i,t),n}const lt=new Map;let nt=0;function It(e){let t=5381,o=e.length;for(;o--;)t=(t<<5)-t^e.charCodeAt(o);return t>>>0}function Kt(e,t){const o={stylesheet:Bt(t),rules:{}};return lt.set(e,o),o}function Vt(e,t,o,i,n,l,s,f=0){const v=16.666/i;let p=`{
`;for(let E=0;E<=1;E+=v){const O=t+(o-t)*l(E);p+=E*100+`%{${s(O,1-O)}}
`}const $=p+`100% {${s(o,1-o)}}
}`,a=`__svelte_${It($)}_${f}`,u=Lt(e),{stylesheet:h,rules:k}=lt.get(u)||Kt(u,e);k[a]||(k[a]=!0,h.insertRule(`@keyframes ${a} ${$}`,h.cssRules.length));const w=e.style.animation||"";return e.style.animation=`${w?`${w}, `:""}${a} ${i}ms linear ${n}ms 1 both`,nt+=1,a}function mt(e,t){const o=(e.style.animation||"").split(", "),i=o.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),n=o.length-i.length;n&&(e.style.animation=i.join(", "),nt-=n,nt||qt())}function qt(){rt(()=>{nt||(lt.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&r(t)}),lt.clear())})}let ct;function q(e){ct=e}const I=[],ht=[],tt=[],dt=[],Gt=Promise.resolve();let st=!1;function Yt(){st||(st=!0,Gt.then(Ft))}function z(e){tt.push(e)}const it=new Set;let Q=0;function Ft(){const e=ct;do{for(;Q<I.length;){const t=I[Q];Q++,q(t),Ut(t.$$)}for(q(null),I.length=0,Q=0;ht.length;)ht.pop()();for(let t=0;t<tt.length;t+=1){const o=tt[t];it.has(o)||(it.add(o),o())}tt.length=0}while(I.length);for(;dt.length;)dt.pop()();st=!1,it.clear(),q(e)}function Ut(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}let H;function Zt(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function pt(e,t,o){e.dispatchEvent(Ht(`${t?"intro":"outro"}${o}`))}const et=new Set;let R;function Qt(){R={r:0,c:[],p:R}}function Xt(){R.r||W(R.c),R=R.p}function P(e,t){e&&e.i&&(et.delete(e),e.i(t))}function D(e,t,o,i){if(e&&e.o){if(et.has(e))return;et.add(e),R.c.push(()=>{et.delete(e),i&&(o&&e.d(1),i())}),e.o(t)}else i&&i()}const te={duration:0};function ft(e,t,o){const i={direction:"in"};let n=t(e,o,i),l=!1,s,f,v=0;function p(){s&&mt(e,s)}function $(){const{delay:u=0,duration:h=300,easing:k=Ot,tick:w=g,css:E}=n||te;E&&(s=Vt(e,0,1,h,u,k,E,v++)),w(0,1);const O=Rt()+u,L=O+h;f&&f.abort(),l=!0,z(()=>pt(e,!0,"start")),f=zt(M=>{if(l){if(M>=L)return w(1,0),pt(e,!0,"end"),p(),l=!1;if(M>=O){const A=k((M-O)/h);w(A,1-A)}}return l})}let a=!1;return{start(){a||(a=!0,mt(e),ot(n)?(n=n(i),Zt().then($)):$())},invalidate(){a=!1},end(){l&&(p(),l=!1)}}}function X(e){e&&e.c()}function K(e,t,o,i){const{fragment:n,after_update:l}=e.$$;n&&n.m(t,o),i||z(()=>{const s=e.$$.on_mount.map(jt).filter(ot);e.$$.on_destroy?e.$$.on_destroy.push(...s):W(s),e.$$.on_mount=[]}),l.forEach(z)}function V(e,t){const o=e.$$;o.fragment!==null&&(W(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(I.push(e),Yt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,o,i,n,l,s,f=[-1]){const v=ct;q(e);const p=e.$$={fragment:null,ctx:[],props:l,update:g,not_equal:n,bound:at(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(v?v.$$.context:[])),callbacks:at(),dirty:f,skip_bound:!1,root:t.target||v.$$.root};s&&s(p.root);let $=!1;if(p.ctx=o?o(e,t.props||{},(a,u,...h)=>{const k=h.length?h[0]:u;return p.ctx&&n(p.ctx[a],p.ctx[a]=k)&&(!p.skip_bound&&p.bound[a]&&p.bound[a](k),$&&ee(e,a)),u}):[],p.update(),$=!0,W(p.before_update),p.fragment=i?i(p.ctx):!1,t.target){if(t.hydrate){const a=Jt(t.target);p.fragment&&p.fragment.l(a),a.forEach(r)}else p.fragment&&p.fragment.c();t.intro&&P(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),Ft()}q(v)}class U{$destroy(){V(this,1),this.$destroy=g}$on(t,o){if(!ot(o))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!Tt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ut(e,{delay:t=0,duration:o=400,easing:i=Ot}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:o,easing:i,css:l=>`opacity: ${l*n}`}}function le(e){let t,o,i;return{c(){t=m("link"),o=x(),i=m("main"),i.innerHTML=`<div class="w3-row"><a href="https://github.com/guyotJs" class="svelte-g1enn1"><i class="fa fa-github"></i></a>  
		<a href="https://classicmc-studios.github.io" class="svelte-g1enn1"><i class="fa fa-cube"></i></a>  
		<a href="mailto: classicmclive+guyot@gmail.com" class="svelte-g1enn1"><i class="fa fa-envelope"></i></a></div>`,b(t,"rel","stylesheet"),b(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")},m(n,l){c(n,t,l),c(n,o,l),c(n,i,l)},p:g,i:g,o:g,d(n){n&&r(t),n&&r(o),n&&r(i)}}}class ne extends U{constructor(t){super(),Y(this,t,null,le,G,{})}}function bt(e,t,o){const i=e.slice();return i[1]=t[o],i[3]=o,i}function ie(e){let t,o=e[1].text+"",i,n;return{c(){t=m("a"),i=y(o),n=m("br"),b(t,"href",e[1].link),b(t,"class","svelte-1apaavy")},m(l,s){c(l,t,s),_(t,i),c(l,n,s)},p:g,d(l){l&&r(t),l&&r(n)}}}function se(e){let t,o=e[1].text+"",i,n;return{c(){t=m("a"),i=y(o),n=y(" / "),b(t,"href",e[1].link),b(t,"class","svelte-1apaavy")},m(l,s){c(l,t,s),_(t,i),c(l,n,s)},p:g,d(l){l&&r(t),l&&r(n)}}}function gt(e){let t;function o(l,s){return l[3]==0||re(l[3])==0?se:ie}let n=o(e)(e);return{c(){n.c(),t=S()},m(l,s){n.m(l,s),c(l,t,s)},p(l,s){n.p(l,s)},d(l){n.d(l),l&&r(t)}}}function oe(e){let t,o,i,n,l,s,f,v,p,$,a=e[0],u=[];for(let h=0;h<a.length;h+=1)u[h]=gt(bt(e,a,h));return{c(){t=m("main"),o=m("br"),i=x(),n=m("div"),l=m("i"),l.textContent=" ",s=y("Apps"),f=m("br"),v=x();for(let h=0;h<u.length;h+=1)u[h].c();p=x(),$=m("div"),$.innerHTML=" Requirements- Knowledge of Html, Css, and Js. We would be willing to teach these skills as well. <br/>",b(l,"class","fa fa-desktop"),b(n,"class","bc-border blur svelte-1apaavy"),Wt($,"opacity","0.00000001")},m(h,k){c(h,t,k),_(t,o),_(t,i),_(t,n),_(n,l),_(n,s),_(n,f),_(n,v);for(let w=0;w<u.length;w+=1)u[w].m(n,null);_(t,p),_(t,$)},p(h,[k]){if(k&1){a=h[0];let w;for(w=0;w<a.length;w+=1){const E=bt(h,a,w);u[w]?u[w].p(E,k):(u[w]=gt(E),u[w].c(),u[w].m(n,null))}for(;w<u.length;w+=1)u[w].d(1);u.length=a.length}},i:g,o:g,d(h){h&&r(t),F(u,h)}}}function re(e){return e%2}function ce(e){return[[{text:"One Operation Calc",link:"https://guyotjs.github.io/calc/"},{text:"Tsoc",link:"https://guyotjs.github.io/tsoc/"},{text:"Pythagorean Theorem Calculator",link:"https://classicmc-studios.github.io/pyt/"},{text:"Tusky Time in Svelte",link:"https://guyotjs.github.io/tts/"},{text:"MossJs Source",link:"https://classicmc-studios.github.io/js/moss.js"},{text:"cJs Source",link:"https://github.com/ClassicMC-Studios/c.js-V3/blob/main/cjsV3.js"},{text:"Bc.css",link:"https://classicmc-studios.github.io/bc.css"},{text:"Emulator Creation",link:"https://github.com/guyotJs/Emulator-creation/blob/main/README.md"}]]}class fe extends U{constructor(t){super(),Y(this,t,ce,oe,G,{})}}function kt(e,t,o){const i=e.slice();return i[10]=t[o],i[12]=o,i}function yt(e,t,o){const i=e.slice();return i[10]=t[o],i[12]=o,i}function vt(e,t,o){const i=e.slice();return i[10]=t[o],i[12]=o,i}function $t(e,t,o){const i=e.slice();return i[10]=t[o],i[12]=o,i}function wt(e,t,o){const i=e.slice();return i[10]=t[o],i[12]=o,i}function ue(e){let t,o,i;return{c(){t=y("Select a "),o=m("b"),o.textContent="section",i=y(" and start browsing!")},m(n,l){c(n,t,l),c(n,o,l),c(n,i,l)},p:g,d(n){n&&r(t),n&&r(o),n&&r(i)}}}function ae(e){let t,o=e[5],i=[];for(let n=0;n<o.length;n+=1)i[n]=xt(kt(e,o,n));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();t=S()},m(n,l){for(let s=0;s<i.length;s+=1)i[s].m(n,l);c(n,t,l)},p(n,l){if(l&32){o=n[5];let s;for(s=0;s<o.length;s+=1){const f=kt(n,o,s);i[s]?i[s].p(f,l):(i[s]=xt(f),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},d(n){F(i,n),n&&r(t)}}}function _e(e){let t,o=e[4],i=[];for(let n=0;n<o.length;n+=1)i[n]=Ct(yt(e,o,n));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();t=S()},m(n,l){for(let s=0;s<i.length;s+=1)i[s].m(n,l);c(n,t,l)},p(n,l){if(l&16){o=n[4];let s;for(s=0;s<o.length;s+=1){const f=yt(n,o,s);i[s]?i[s].p(f,l):(i[s]=Ct(f),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},d(n){F(i,n),n&&r(t)}}}function me(e){let t,o=e[3],i=[];for(let n=0;n<o.length;n+=1)i[n]=Et(vt(e,o,n));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();t=S()},m(n,l){for(let s=0;s<i.length;s+=1)i[s].m(n,l);c(n,t,l)},p(n,l){if(l&8){o=n[3];let s;for(s=0;s<o.length;s+=1){const f=vt(n,o,s);i[s]?i[s].p(f,l):(i[s]=Et(f),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},d(n){F(i,n),n&&r(t)}}}function he(e){let t,o=e[1],i=[];for(let n=0;n<o.length;n+=1)i[n]=St($t(e,o,n));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();t=S()},m(n,l){for(let s=0;s<i.length;s+=1)i[s].m(n,l);c(n,t,l)},p(n,l){if(l&2){o=n[1];let s;for(s=0;s<o.length;s+=1){const f=$t(n,o,s);i[s]?i[s].p(f,l):(i[s]=St(f),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},d(n){F(i,n),n&&r(t)}}}function de(e){let t,o=e[2],i=[];for(let n=0;n<o.length;n+=1)i[n]=At(wt(e,o,n));return{c(){for(let n=0;n<i.length;n+=1)i[n].c();t=S()},m(n,l){for(let s=0;s<i.length;s+=1)i[s].m(n,l);c(n,t,l)},p(n,l){if(l&4){o=n[2];let s;for(s=0;s<o.length;s+=1){const f=wt(n,o,s);i[s]?i[s].p(f,l):(i[s]=At(f),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},d(n){F(i,n),n&&r(t)}}}function pe(e){let t,o=e[10].text+"",i,n;return{c(){t=m("a"),i=y(o),n=m("br"),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(l,s){c(l,t,s),_(t,i),c(l,n,s)},p:g,d(l){l&&r(t),l&&r(n)}}}function be(e){let t,o=e[10].text+"",i,n,l=e[12]<e[5].length-1&&ge();return{c(){t=m("a"),i=y(o),l&&l.c(),n=S(),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(s,f){c(s,t,f),_(t,i),l&&l.m(s,f),c(s,n,f)},p:g,d(s){s&&r(t),l&&l.d(s),s&&r(n)}}}function ge(e){let t;return{c(){t=y(" / ")},m(o,i){c(o,t,i)},d(o){o&&r(t)}}}function xt(e){let t;function o(l,s){return l[12]==0||Z(l[12]+1)!=0?be:pe}let n=o(e)(e);return{c(){n.c(),t=S()},m(l,s){n.m(l,s),c(l,t,s)},p(l,s){n.p(l,s)},d(l){n.d(l),l&&r(t)}}}function ke(e){let t,o=e[10].text+"",i,n;return{c(){t=m("a"),i=y(o),n=m("br"),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(l,s){c(l,t,s),_(t,i),c(l,n,s)},p:g,d(l){l&&r(t),l&&r(n)}}}function ye(e){let t,o=e[10].text+"",i,n,l=e[12]<e[4].length-1&&ve();return{c(){t=m("a"),i=y(o),l&&l.c(),n=S(),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(s,f){c(s,t,f),_(t,i),l&&l.m(s,f),c(s,n,f)},p:g,d(s){s&&r(t),l&&l.d(s),s&&r(n)}}}function ve(e){let t;return{c(){t=y(" / ")},m(o,i){c(o,t,i)},d(o){o&&r(t)}}}function Ct(e){let t;function o(l,s){return l[12]==0||Z(l[12]+1)!=0?ye:ke}let n=o(e)(e);return{c(){n.c(),t=S()},m(l,s){n.m(l,s),c(l,t,s)},p(l,s){n.p(l,s)},d(l){n.d(l),l&&r(t)}}}function $e(e){let t,o=e[10].text+"",i,n;return{c(){t=m("a"),i=y(o),n=m("br"),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(l,s){c(l,t,s),_(t,i),c(l,n,s)},p:g,d(l){l&&r(t),l&&r(n)}}}function we(e){let t,o=e[10].text+"",i,n,l=e[12]<e[3].length-1&&xe();return{c(){t=m("a"),i=y(o),l&&l.c(),n=S(),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(s,f){c(s,t,f),_(t,i),l&&l.m(s,f),c(s,n,f)},p:g,d(s){s&&r(t),l&&l.d(s),s&&r(n)}}}function xe(e){let t;return{c(){t=y(" / ")},m(o,i){c(o,t,i)},d(o){o&&r(t)}}}function Et(e){let t;function o(l,s){return l[12]==0||Z(l[12]+1)!=0?we:$e}let n=o(e)(e);return{c(){n.c(),t=S()},m(l,s){n.m(l,s),c(l,t,s)},p(l,s){n.p(l,s)},d(l){n.d(l),l&&r(t)}}}function Ce(e){let t,o=e[10].text+"",i,n;return{c(){t=m("a"),i=y(o),n=m("br"),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(l,s){c(l,t,s),_(t,i),c(l,n,s)},p:g,d(l){l&&r(t),l&&r(n)}}}function Ee(e){let t,o=e[10].text+"",i,n,l=e[12]<e[1].length-1&&Se();return{c(){t=m("a"),i=y(o),l&&l.c(),n=S(),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(s,f){c(s,t,f),_(t,i),l&&l.m(s,f),c(s,n,f)},p:g,d(s){s&&r(t),l&&l.d(s),s&&r(n)}}}function Se(e){let t;return{c(){t=y(" / ")},m(o,i){c(o,t,i)},d(o){o&&r(t)}}}function St(e){let t;function o(l,s){return l[12]==0||Z(l[12]+1)!=0?Ee:Ce}let n=o(e)(e);return{c(){n.c(),t=S()},m(l,s){n.m(l,s),c(l,t,s)},p(l,s){n.p(l,s)},d(l){n.d(l),l&&r(t)}}}function Ae(e){let t,o=e[10].text+"",i,n;return{c(){t=m("a"),i=y(o),n=m("br"),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(l,s){c(l,t,s),_(t,i),c(l,n,s)},p:g,d(l){l&&r(t),l&&r(n)}}}function Ne(e){let t,o=e[10].text+"",i,n,l=e[12]<e[2].length-1&&Oe();return{c(){t=m("a"),i=y(o),l&&l.c(),n=S(),b(t,"href",e[10].link),b(t,"class","svelte-12e6go")},m(s,f){c(s,t,f),_(t,i),l&&l.m(s,f),c(s,n,f)},p:g,d(s){s&&r(t),l&&l.d(s),s&&r(n)}}}function Oe(e){let t;return{c(){t=y(" / ")},m(o,i){c(o,t,i)},d(o){o&&r(t)}}}function At(e){let t;function o(l,s){return l[12]==0||Z(l[12]+1)!=0?Ne:Ae}let n=o(e)(e);return{c(){n.c(),t=S()},m(l,s){n.m(l,s),c(l,t,s)},p(l,s){n.p(l,s)},d(l){n.d(l),l&&r(t)}}}function je(e){let t,o,i,n,l,s,f,v,p,$,a,u,h,k,w,E,O,L;function M(C,d){return C[0]=="n64"?de:C[0]=="gba"?he:C[0]=="snes"?me:C[0]=="gb"?_e:C[0]=="nes"?ae:ue}let A=M(e),j=A(e);return{c(){t=m("div"),o=m("i"),i=y(" Fronds"),n=m("br"),l=x(),s=m("button"),s.textContent="GBA",f=x(),v=m("button"),v.textContent="N64",p=x(),$=m("button"),$.textContent="NES",a=x(),u=m("button"),u.textContent="SNES",h=x(),k=m("button"),k.textContent="GB",w=m("br"),E=x(),j.c(),b(o,"class","fa fa-gamepad"),b(t,"class","bc-border blur svelte-12e6go")},m(C,d){c(C,t,d),_(t,o),_(t,i),_(t,n),_(t,l),_(t,s),_(t,f),_(t,v),_(t,p),_(t,$),_(t,a),_(t,u),_(t,h),_(t,k),_(t,w),_(t,E),j.m(t,null),O||(L=[B(s,"click",e[10]),B(v,"click",e[6]),B($,"click",e[9]),B(u,"click",e[7]),B(k,"click",e[8])],O=!0)},p(C,[d]){A===(A=M(C))&&j?j.p(C,d):(j.d(1),j=A(C),j&&(j.c(),j.m(t,null)))},i:g,o:g,d(C){C&&r(t),j.d(),O=!1,W(L)}}}function Z(e){return e%3}function Me(e,t,o){let i,n=[{text:"Pokemon Emerald",link:"https://classicmc-studios.github.io/guyot/games/emerald.html"},{text:"Pokemon Leafgreen",link:"https://classicmc-studios.github.io/guyot/games/leafgreen.html"},{text:"Final Fantasy 1 & 2 (DawnOfSouls)",link:"https://classicmc-studios.github.io/guyot/games/ff12.html"},{text:"Doom",link:"https://classicmc-studios.github.io/guyot/games/doom.html"},{text:"Mario Kart Super Circut",link:"https://classicmc-studios.github.io/guyot/games/mksc.html"},{text:"Minish Cap",link:"https://classicmc-studios.github.io/guyot/games/mc.html"},{text:"Spyro Season of Flame",link:"https://classicmc-studios.github.io/guyot/games/spyro.html"},{text:"Final Fantasy V",link:"https://classicmc-studios.github.io/guyot/games/ffv.html"},{text:"Final Fantasy VI",link:"https://classicmc-studios.github.io/guyot/games/ffvien.html"}],l=[{text:"Mario Kart 64",link:"https://classicmc-studios.github.io/guyot/games/mk64.html"},{text:"Super Smash Bros 64",link:"https://classicmc-studios.github.io/guyot/games/ssb.html"},{text:"Pokemon Snap",link:"https://classicmc-studios.github.io/guyot/games/pkmns.html"},{text:"Paper Mario",link:"https://classicmc-studios.github.io/guyot/games/pm.html"},{text:"Super Mario 64",link:"https://classicmc-studios.github.io/guyot/games/sm64.html"}],s=[{text:"A link to the Past",link:"https://classicmc-studios.github.io/guyot/games/lttp.html"},{text:"Super Mario Kart",link:"https://classicmc-studios.github.io/guyot/games/smk.html"},{text:"Yoshi's Island",link:"https://classicmc-studios.github.io/guyot/games/yo.html"},{text:"Yoshi's Island ROM hack",link:"https://classicmc-studios.github.io/guyot/games/yoshi.html"},{text:"Super Mario World",link:"https://classicmc-studios.github.io/guyot/games/smw.html"}],f=[{text:"Pokemon Red",link:"https://classicmc-studios.github.io/guyot/games/red.html"},{text:"Tom and Jerry",link:"https://classicmc-studios.github.io/guyot/games/taj.html"},{text:"Final Fantasy Adventure",link:"https://classicmc-studios.github.io/guyot/games/ffa.html"},{text:"The legend of Zelda Links Awakening",link:"https://classicmc-studios.github.io/guyot/games/tlozLA.html"}],v=[{text:"The legend of Zelda",link:"https://classicmc-studios.github.io/guyot/games/tloz.html"}];function p(){o(0,i="n64")}function $(){o(0,i="gba")}function a(){o(0,i="snes")}function u(){o(0,i="gb")}function h(){o(0,i="nes")}return[i,n,l,s,f,v,p,a,u,h,$]}class Pe extends U{constructor(t){super(),Y(this,t,Me,je,G,{})}}function Le(e){let t,o,i,n,l,s,f,v,p,$,a,u;return{c(){t=m("main"),o=m("b"),o.textContent="Word of the Week",i=m("br"),n=x(),l=m("em"),s=y(e[0]),f=m("br"),v=x(),p=y(e[1]),$=m("br"),a=y(`
	View Original website `),u=m("a"),u.innerHTML='<button><b style="font-weight:600!important;">Here</b></button>',b(u,"href","https://guyotjs.github.io/original/"),b(u,"class","svelte-167us23")},m(h,k){c(h,t,k),_(t,o),_(t,i),_(t,n),_(t,l),_(l,s),_(t,f),_(t,v),_(t,p),_(t,$),_(t,a),_(t,u)},p(h,[k]){k&1&&_t(s,h[0]),k&2&&_t(p,h[1])},i:g,o:g,d(h){h&&r(t)}}}function Fe(e,t,o){let{word:i,text:n}=t;return e.$$set=l=>{"word"in l&&o(0,i=l.word),"text"in l&&o(1,n=l.text)},[i,n]}class Te extends U{constructor(t){super(),Y(this,t,Fe,Le,G,{word:0,text:1})}}function Re(e,t,o){const i=e.slice();return i[2]=t[o],i[4]=o,i}function ze(e,t,o){const i=e.slice();return i[2]=t[o],i[4]=o,i}function Nt(e){let t,o,i,n,l,s,f,v,p,$,a,u,h,k,w,E,O,L,M="GUYOT",A=[];for(let d=0;d<M.length;d+=1)A[d]=Be(ze(e,M,d));let j="BETA",C=[];for(let d=0;d<j.length;d+=1)C[d]=De(Re(e,j,d));return p=new ne({}),a=new Te({props:{word:"Persimmon",text:"An edible fruit of trees in the genus Diospyros."}}),k=new Pe({}),E=new fe({}),{c(){for(let d=0;d<A.length;d+=1)A[d].c();t=m("br"),o=x();for(let d=0;d<C.length;d+=1)C[d].c();i=m("br"),n=x(),l=m("rest"),s=y("Reinvigorating Chromebooks "),f=m("em"),f.textContent="Everywhere",v=x(),X(p.$$.fragment),$=x(),X(a.$$.fragment),u=m("br"),h=x(),X(k.$$.fragment),w=x(),X(E.$$.fragment)},m(d,N){for(let T=0;T<A.length;T+=1)A[T].m(d,N);c(d,t,N),c(d,o,N);for(let T=0;T<C.length;T+=1)C[T].m(d,N);c(d,i,N),c(d,n,N),c(d,l,N),_(l,s),_(l,f),_(l,v),K(p,l,null),_(l,$),K(a,l,null),_(l,u),_(l,h),K(k,l,null),_(l,w),K(E,l,null),L=!0},i(d){if(!L){for(let N=0;N<M.length;N+=1)P(A[N]);for(let N=0;N<j.length;N+=1)P(C[N]);P(p.$$.fragment,d),P(a.$$.fragment,d),P(k.$$.fragment,d),P(E.$$.fragment,d),O||z(()=>{O=ft(l,ut,{delay:2e3+5*150,duration:800}),O.start()}),L=!0}},o(d){D(p.$$.fragment,d),D(a.$$.fragment,d),D(k.$$.fragment,d),D(E.$$.fragment,d),L=!1},d(d){F(A,d),d&&r(t),d&&r(o),F(C,d),d&&r(i),d&&r(n),d&&r(l),V(p),V(a),V(k),V(E)}}}function Be(e){let t,o,i,n;return{c(){t=m("span"),o=y(e[2]),n=x(),b(t,"class","lg svelte-rokbwz")},m(l,s){c(l,t,s),_(t,o),c(l,n,s)},p:g,i(l){i||z(()=>{i=ft(t,ut,{delay:1e3+e[4]*150,duration:800}),i.start()})},o:g,d(l){l&&r(t),l&&r(n)}}}function De(e){let t,o,i,n;return{c(){t=m("span"),o=y(e[2]),n=x(),b(t,"class","lg svelte-rokbwz")},m(l,s){c(l,t,s),_(t,o),c(l,n,s)},p:g,i(l){i||z(()=>{i=ft(t,ut,{delay:2e3+e[4]*150,duration:800}),i.start()})},o:g,d(l){l&&r(t),l&&r(n)}}}function Je(e){let t,o,i,n,l,s,f,v,p,$,a=e[0]&&Nt(e);return{c(){t=m("link"),o=x(),i=m("link"),n=x(),l=m("link"),s=x(),f=m("main"),a&&a.c(),b(t,"href","https://fonts.googleapis.com/css?family=Overpass:100,400"),b(t,"rel","stylesheet"),b(i,"href","https://www.w3schools.com/w3css/4/w3.css"),b(i,"rel","stylesheet"),b(l,"href","https://classicmc-studios.github.io/bc.css"),b(l,"rel","stylesheet"),b(f,"class","svelte-rokbwz")},m(u,h){c(u,t,h),c(u,o,h),c(u,i,h),c(u,n,h),c(u,l,h),c(u,s,h),c(u,f,h),a&&a.m(f,null),v=!0,p||($=B(window,"load",e[1]()),p=!0)},p(u,[h]){u[0]?a?h&1&&P(a,1):(a=Nt(u),a.c(),P(a,1),a.m(f,null)):a&&(Qt(),D(a,1,1,()=>{a=null}),Xt())},i(u){v||(P(a),v=!0)},o(u){D(a),v=!1},d(u){u&&r(t),u&&r(o),u&&r(i),u&&r(n),u&&r(l),u&&r(s),u&&r(f),a&&a.d(),p=!1,$()}}}function We(e,t,o){let i=!1;function n(){o(0,i=!0)}return[i,n]}class He extends U{constructor(t){super(),Y(this,t,We,Je,G,{})}}new He({target:document.getElementById("app")});
