(function(t){function e(e){for(var n,r,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);v&&v(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"956c949f"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"bc874f60"}[t]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===n||l===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],v.parentNode.removeChild(v),a(i)},v.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(v)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(v);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}o[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var v=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"2cf0":function(t,e,a){"use strict";var n=a("4285"),r=a.n(n);r.a},4285:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}}),a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v(" Armaan Lala ")]),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.showNav=!t.showNav}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"}),a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v(" Home ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v(" About ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/resume"}},[t._v(" Resume ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v(" Projects ")])],1)])]),a("router-view"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v(" Made Using Vue.js + Bulma.io ")]),a("p",[t._v(" Armaan Lala ")]),a("p",[t._v(" armaanlala@gmail.com ")])])])}],i={name:"App",data:function(){return{showNav:!1}}},s=i,u=(a("034f"),a("b184"),a("2877")),c=Object(u["a"])(s,r,o,!1,null,null,null),l=c.exports,f=(a("d3b7"),a("8c4f")),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero is-cover is-relative is-fullheight-with-navbar has-background-link"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"typewriter"},[a("h1",{staticClass:"title is-1 something"},[t._v("Armaan Lala")])]),a("h1",{staticClass:"subtitle is-2"},[t._v("Software Developer")]),a("h1",{staticClass:"subtitle is-3"},[t._v("Mathmatics and Computer Science Student at Georgia Institute of Technology")])])])])])}],p={name:"home"},m=p,h=(a("2cf0"),Object(u["a"])(m,v,d,!1,null,"52cce541",null)),b=h.exports;n["a"].use(f["a"]);var g=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/resume",name:"Resume",component:function(){return a.e("about").then(a.bind(null,"1ba2"))}},{path:"/projects",name:"Projects",component:function(){return a.e("about").then(a.bind(null,"acca"))}}],y=new f["a"]({mode:"history",base:"/",routes:g}),_=y;n["a"].config.productionTip=!1,new n["a"]({router:_,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){},b184:function(t,e,a){"use strict";var n=a("fca8"),r=a.n(n);r.a},fca8:function(t,e,a){}});
//# sourceMappingURL=app.51c89166.js.map