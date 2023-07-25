(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();function k(){}function A(e){return e()}function W(){return Object.create(null)}function _(e){e.forEach(A)}function N(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function O(e){return Object.keys(e).length===0}function d(e,t,s){e.insertBefore(t,s||null)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function w(){return C(" ")}function I(){return C("")}function f(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function z(e){return Array.from(e.childNodes)}let T;function v(e){T=e}const g=[],q=[];let m=[];const G=[],P=Promise.resolve();let M=!1;function B(){M||(M=!0,P.then(H))}function E(e){m.push(e)}const x=new Set;let y=0;function H(){if(y!==0)return;const e=T;do{try{for(;y<g.length;){const t=g[y];y++,v(t),F(t.$$)}}catch(t){throw g.length=0,y=0,t}for(v(null),g.length=0,y=0;q.length;)q.pop()();for(let t=0;t<m.length;t+=1){const s=m[t];x.has(s)||(x.add(s),s())}m.length=0}while(g.length);for(;G.length;)G.pop()();M=!1,x.clear(),v(e)}function F(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}function U(e){const t=[],s=[];m.forEach(n=>e.indexOf(n)===-1?t.push(n):s.push(n)),s.forEach(n=>n()),m=t}const V=new Set;function D(e,t){e&&e.i&&(V.delete(e),e.i(t))}function K(e,t,s,n){const{fragment:o,after_update:a}=e.$$;o&&o.m(t,s),n||E(()=>{const r=e.$$.on_mount.map(A).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...r):_(r),e.$$.on_mount=[]}),a.forEach(E)}function J(e,t){const s=e.$$;s.fragment!==null&&(U(s.after_update),_(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(g.push(e),B(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,s,n,o,a,r,l=[-1]){const c=T;v(e);const i=e.$$={fragment:null,ctx:[],props:a,update:k,not_equal:o,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:W(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};r&&r(i.root);let u=!1;if(i.ctx=s?s(e,t.props||{},(b,$,...S)=>{const L=S.length?S[0]:$;return i.ctx&&o(i.ctx[b],i.ctx[b]=L)&&(!i.skip_bound&&i.bound[b]&&i.bound[b](L),u&&Q(e,b)),$}):[],i.update(),u=!0,_(i.before_update),i.fragment=n?n(i.ctx):!1,t.target){if(t.hydrate){const b=z(t.target);i.fragment&&i.fragment.l(b),b.forEach(h)}else i.fragment&&i.fragment.c();t.intro&&D(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),H()}v(c)}class X{$destroy(){J(this,1),this.$destroy=k}$on(t,s){if(!N(s))return k;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(s),()=>{const o=n.indexOf(s);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!O(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){let t,s,n,o,a,r;return{c(){t=p("p"),t.innerHTML=`<top class="svelte-grh9yd"><em>TheWestonFiles</em></top><br/> 
    <topSub class="svelte-grh9yd">The <b>Wikipedia</b> for <em>Nerds</em></topSub>`,s=w(),n=p("p"),n.innerHTML="<em>This article has very<br/> little <b>Information</b>  </em>",o=p("br"),a=w(),r=p("div"),r.innerHTML=`<h1 class="svelte-grh9yd">Websites banned due to Weston</h1> 
    <mobileBox class="svelte-grh9yd"><p style="margin-top:10px;" align="center" class="bc-text-align svelte-grh9yd"><b>Extra</b><br/>Information</p> 
      <p class="svelte-grh9yd"><a class="svelte-grh9yd">MyEmulator:</a><span>Games</span></p> 
      <p class="svelte-grh9yd"><a class="svelte-grh9yd">Gitpod:</a><span>Coding</span></p> 
      <p class="svelte-grh9yd"><a class="svelte-grh9yd">LocalHost:</a><span>Coding</span></p></mobileBox> 
    <p class="svelte-grh9yd">Multiple websites have been banned prodominantly due to use by Weston. These websites are not closely related however and the reason for the banning of these webistes is still unclear. Wesbites that have been banned include, MyEmulator, Gitpod, and <a href="https://en.wikipedia.org/wiki/Localhost" class="svelte-grh9yd">Localhost</a>. Localhost was the most recent ban happening at 12:00 am EST on May 25, 2023. <a href="https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/" class="svelte-grh9yd">[1]</a></p> 
    <h1 class=" svelte-grh9yd">MyEmulator</h1> 
    <p class="svelte-grh9yd">MyEmulator, being banned on November 6, 2022, was a emulation website contaning <a href="https://en.wikipedia.org/wiki/Atari" class="svelte-grh9yd">atari</a>, <a href="https://en.wikipedia.org/wiki/Nintendo" class="svelte-grh9yd">nintendo</a>, and <a href="https://en.wikipedia.org/wiki/PlayStation_(console)" class="svelte-grh9yd">ps1</a> games. The current ban message is &quot;mature.games&quot;. <a href="https://myemulator.online" class="svelte-grh9yd">[2]</a> MyEmulator known to be used regularly by, 3 members of the secondary school. MyEmulator was banned on the morning of November 6, 2022 after being heavily used by a group of people during a marching band overnight. MyEmulator was the first major ban affecting or caused by Weston.</p> 
    <h1 class="svelte-grh9yd">Gitpod</h1> 
    <p class="svelte-grh9yd">Banned shortly after MyEmulator, Gitpod was banned on the 10th of November, 2022. Gitpod is a online coding website which uses the base <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code" class="svelte-grh9yd">vscode</a> system but including access to a basic terminal, localhost capabilitys, and full extension support. Gitpod was banned in the early morning and first noticed by Weston in the start of the first block. <a href="#" class="svelte-grh9yd">[3]</a> At the time of the ban Gitpod is believed to be only known by Weston as no other person in the secondary school knew about or used it. Weston got in contact with the school support system early in the morning of November 10th at 10:42 AM EST. The filtered email is shown below only removing place and people&#39;s names.
      <br/><br/>
      Hello [.......] support center,<br/>
      I am today inquiring on the reason for blocking the website gitpod.io. This website is a great tool to learn how to code and is safe in terms of viruses and inappropriate imagery. It would benefit me and many other students if the website gitpod.io would be available for coding. Some uses of gitpod.io include, a GCC compiler for running C and C++ code, access to a base level terminal with no root computer access, a basic localhost ability for loading react and svelte projects, committing projects to github using the Git commit function, and running python projects in a virtual terminal. To conclude, the continued access to the coding website gitpod.io would be beneficial to myself and other students.
      <br/>Sincerely, [.......] of [........] Secondary School
      <br/><br/>
      After discussing with the schools support center and eventually with the state Weston was able to get Gitpod unblocked. Until the writing of this article, gitpod is still live and accessable from all school <a href="https://en.wikipedia.org/wiki/Chromebook" class="svelte-grh9yd">chromebooks</a>.</p> 
    <h1 class="svelte-grh9yd">Localhost</h1> 
    <p class="svelte-grh9yd">Localhost was banned at 12:00 AM EST on May 25, 2023. Localhost, only accessable from gitpod and github codespaces, was most likely only used by Weston although there is a possibility that 1 more student in the secondary school knows and uses it regularly. The reason for Localhost&#39;s ban is currently unknown and its ban message is &quot;unknown&quot; as stated from the ban website. A posibility for the ban may be that it could be possible to say or show inappropriate images or text through a localhost although this would be very unlikely due to the fact that localhost is only used by people who know how to code and <a href="https://en.wikipedia.org/wiki/HTML_element" class="svelte-grh9yd">iframe</a> can not interact with banned websites. Happening on May 30th an exploit to the localhost block has been found. The way to bypass the restriction is to click the &quot;make public&quot; button when calling &quot;npm run dev&quot;.</p> 
    <h1 class="svelte-grh9yd"><src class="svelte-grh9yd">Sources</src></h1>
    1.<a href="https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/" class="svelte-grh9yd">^</a> Snow, Weston (2023). <a href="https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/" class="svelte-grh9yd">https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/</a>  Gitpod<br/>
    2.<a href="https://myemulator.online" class="svelte-grh9yd">^</a> (2022). <a href="https://myemulator.online" class="svelte-grh9yd">myemulator.online</a>  MyEmulator<br/>
    3.<a href="#" class="svelte-grh9yd">^</a> Snow, Weston (2022). gmail sent at 10:42AM  Gmail
    <br/> 
    <br/>`,f(t,"align","center"),f(t,"class","svelte-grh9yd"),f(n,"align","center"),f(n,"class","svelte-grh9yd"),f(r,"class","mobile svelte-grh9yd")},m(l,c){d(l,t,c),d(l,s,c),d(l,n,c),d(l,o,c),d(l,a,c),d(l,r,c)},d(l){l&&h(t),l&&h(s),l&&h(n),l&&h(o),l&&h(a),l&&h(r)}}}function Z(e){let t,s,n,o,a,r,l,c;return{c(){t=p("articleExtra"),t.innerHTML='<p align="center" class="svelte-grh9yd">This article may be biased <br/> Discretion is advised</p>',s=w(),n=p("top"),n.innerHTML=`<em>TheWestonFiles</em> 
    `,o=p("br"),a=w(),r=p("topSub"),r.innerHTML="The <b>Wikipedia</b> for <em>Nerds</em>",l=w(),c=p("main"),c.innerHTML=`<h1 class="svelte-grh9yd">Websites banned due to Weston</h1> 
    <box class="svelte-grh9yd"><p style="margin-top:10px;" class="bc-text-align svelte-grh9yd"></p><div align="center"><b>Extra</b><br/>
          Information</div> 
      <p class="svelte-grh9yd"><a class="svelte-grh9yd"> MyEmulator</a><span>   Emulator</span></p> 
      <p class="svelte-grh9yd"> <a class="svelte-grh9yd">Gitpod</a><span>      Coding</span></p> 
      <p class="svelte-grh9yd"> <a class="svelte-grh9yd">Localhost</a><span>       Coding</span></p></box> 
    <p class="svelte-grh9yd">Multiple websites have been banned prodominantly due to use by Weston. These websites are not closely related however and the reason for the banning of these webistes is still unclear. Wesbites that have been banned include, MyEmulator, Gitpod, and <a href="https://en.wikipedia.org/wiki/Localhost" class="svelte-grh9yd">Localhost</a>. Localhost was the most recent ban happening at 12:00 am EST on May 25, 2023. <a href="https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/" class="svelte-grh9yd">[1]</a></p> 
    <h1 class="fix svelte-grh9yd">MyEmulator</h1> 
    <p class="svelte-grh9yd">MyEmulator, being banned on November 6, 2022, was a emulation website contaning <a href="https://en.wikipedia.org/wiki/Atari" class="svelte-grh9yd">atari</a>, <a href="https://en.wikipedia.org/wiki/Nintendo" class="svelte-grh9yd">nintendo</a>, and <a href="https://en.wikipedia.org/wiki/PlayStation_(console)" class="svelte-grh9yd">ps1</a> games. The current ban message is &quot;mature.games&quot;. <a href="https://myemulator.online" class="svelte-grh9yd">[2]</a> MyEmulator known to be used regularly by, 3 members of the secondary school. MyEmulator was banned on the morning of November 6, 2022 after being heavily used by a group of people during a marching band overnight. MyEmulator was the first major ban affecting or caused by Weston.</p> 
    <h1 class="svelte-grh9yd">Gitpod</h1> 
    <p class="svelte-grh9yd">Banned shortly after MyEmulator, Gitpod was banned on the 10th of November, 2022. Gitpod is a online coding website which uses the base <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code" class="svelte-grh9yd">vscode</a> system but including access to a basic terminal, localhost capabilitys, and full extension support. Gitpod was banned in the early morning and first noticed by Weston in the start of the first block. <a href="#" class="svelte-grh9yd">[3]</a> At the time of the ban Gitpod is believed to be only known by Weston as no other person in the secondary school knew about or used it. Weston got in contact with the school support system early in the morning of November 10th at 10:42 AM EST. The filtered email is shown below only removing place and people&#39;s names.
      <br/><br/>
      Hello [.......] support center,<br/>
      I am today inquiring on the reason for blocking the website gitpod.io. This website is a great tool to learn how to code and is safe in terms of viruses and inappropriate imagery. It would benefit me and many other students if the website gitpod.io would be available for coding. Some uses of gitpod.io include, a GCC compiler for running C and C++ code, access to a base level terminal with no root computer access, a basic localhost ability for loading react and svelte projects, committing projects to github using the Git commit function, and running python projects in a virtual terminal. To conclude, the continued access to the coding website gitpod.io would be beneficial to myself and other students.
      <br/>Sincerely, [.......] of [........] Secondary School
      <br/><br/>
      After discussing with the schools support center and eventually with the state Weston was able to get Gitpod unblocked. Until the writing of this article, gitpod is still live and accessable from all school <a href="https://en.wikipedia.org/wiki/Chromebook" class="svelte-grh9yd">chromebooks</a>.</p> 
    <h1 class="svelte-grh9yd">Localhost</h1> 
    <p class="svelte-grh9yd">Localhost was banned at 12:00 AM EST on May 25, 2023. Localhost, only accessable from gitpod and github codespaces, was most likely only used by Weston although there is a possibility that 1 more student in the secondary school knows and uses it regularly. The reason for Localhost&#39;s ban is currently unknown and its ban message is &quot;unknown&quot; as stated from the ban website. A posibility for the ban may be that it could be possible to say or show inappropriate images or text through a localhost although this would be very unlikely due to the fact that localhost is only used by people who know how to code and <a href="https://en.wikipedia.org/wiki/HTML_element" class="svelte-grh9yd">iframe</a> can not interact with banned websites. Happening on May 30th an exploit to the localhost block has been found. The way to bypass the restriction is to click the &quot;make public&quot; button when calling &quot;npm run dev&quot;.</p> 
    <h1 class="svelte-grh9yd"><src class="svelte-grh9yd">Sources</src></h1>
    1.<a href="https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/" class="svelte-grh9yd">^</a> Snow, Weston (2023). <a href="https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/" class="svelte-grh9yd">https://5173-classicmcst-thewordofwe-z75coxv8eqs.ws-us98.gitpod.io/</a>  Gitpod<br/>
    2.<a href="https://myemulator.online" class="svelte-grh9yd">^</a> (2022). <a href="https://myemulator.online" class="svelte-grh9yd">myemulator.online</a>  MyEmulator<br/>
    3.<a href="#" class="svelte-grh9yd">^</a> Snow, Weston (2022). gmail sent at 10:42AM  Gmail
    <br/> 
    <br/>`,f(t,"class","svelte-grh9yd"),f(n,"class","svelte-grh9yd"),f(r,"class","svelte-grh9yd"),f(c,"class","svelte-grh9yd")},m(i,u){d(i,t,u),d(i,s,u),d(i,n,u),d(i,o,u),d(i,a,u),d(i,r,u),d(i,l,u),d(i,c,u)},d(i){i&&h(t),i&&h(s),i&&h(n),i&&h(o),i&&h(a),i&&h(r),i&&h(l),i&&h(c)}}}function ee(e){let t;function s(a,r){return a[0]?Y:Z}let n=s(e),o=n(e);return{c(){o.c(),t=I()},m(a,r){o.m(a,r),d(a,t,r)},p(a,[r]){n!==(n=s(a))&&(o.d(1),o=n(a),o&&(o.c(),o.m(t.parentNode,t)))},i:k,o:k,d(a){o.d(a),a&&h(t)}}}function te(e,t,s){let n=!1;return window.innerWidth<window.innerHeight&&(n=!0),[n]}class se extends X{constructor(t){super(),R(this,t,te,ee,j,{})}}new se({target:document.getElementById("app")});