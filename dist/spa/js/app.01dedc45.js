(function(e){function t(t){for(var n,r,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={1:0},a={1:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{2:"89f01699",3:"e34f03ca",4:"42886e78",5:"66850bd8",6:"8ae18d2c",7:"016d4478",8:"5d383c38"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o={2:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{2:"b6ab8590",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),o(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,o[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);o("e6cf"),o("5319"),o("7d6e"),o("e54f"),o("985d"),o("31cd");var n=o("2b0e"),r=o("1f91"),a=o("42d2"),i=o("b05d"),c=o("f508");n["a"].use(i["a"],{config:{loading:{}},lang:r["a"],iconSet:a["a"],plugins:{Loading:c["a"]}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view",{attrs:{location:e.position}})],1)},l=[],u=(o("a79d"),o("bc3a")),d=o.n(u),f={name:"App",created(){this.$q.dark.set(!0)},beforeMount(){this.$root.$on("onPlaceSearch",this.onLocationSearch)},beforeDestroy(){this.$root.$off("onPlaceSearch")},mounted(){this.checkAccessDevicePosition()},data:()=>({position:""}),methods:{checkAccessDevicePosition(){this.position||navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.onAccessAllowed,this.onAccessDenied)},onAccessAllowed(e){console.log(`Location access allowed! Current location:\nLat [${e.coords.latitude}] Lon [${e.coords.longitude}]`),this.getCurrentLocationName(e.coords.latitude,e.coords.longitude)},onAccessDenied(e){console.log("Location access denied, set default location.",e),this.position="Barrafranca"},getCurrentLocationName(e,t){this.$q.loading.show(),this.errored=!1;const o={key:"45129826589045a4a67172834201512",q:`${e},${t}`};d.a.get("https://api.weatherapi.com/v1/current.json",{params:o}).then((e=>{this.position=e.data.location.name})).catch((e=>{console.log("Go to location error page")})).finally((()=>this.$q.loading.hide()))},onLocationSearch(e){e&&(this.position=e)}}},p=f,h=(o("5c0b"),o("2877")),m=Object(h["a"])(p,s,l,!1,null,null,null),g=m.exports,v=o("8c4f");const b=[{path:"/",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"713b")),children:[{name:"Home",path:"/",icon:"home",component:()=>Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"c8e0"))},{name:"About",path:"/about",icon:"help",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"478b"))},{name:"Credits",path:"/credits",icon:"copyright",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"11a6"))},{name:"Astronomy",path:"/api/astronomy",icon:"nights_stay",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"2c88"))},{name:"Sports",path:"/api/events",icon:"event_note",component:()=>Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"5ead"))}]},{path:"*",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"e51e"))}];var y=b;n["a"].use(v["a"]);var w=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},P=async function(){const e="function"===typeof w?await w({Vue:n["a"]}):w,t={router:e,render:e=>e(g),el:"#q-app"};return{app:t,router:e}},A=o("a925"),L={poweredBy:"Offerto da WeatherAPI"},O={poweredBy:"Powered by WeatherAPI"},S={it:L,en:O};n["a"].use(A["a"]);const j=new A["a"]({locale:"en",fallbackLocale:"it",messages:S});var C=({app:e})=>{e.i18n=j};n["a"].prototype.$axios=d.a;const $="";async function _(){const{app:e,router:t}=await P();let o=!1;const r=e=>{o=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},a=window.location.href.replace(window.location.origin,""),i=[C,void 0];for(let s=0;!1===o&&s<i.length;s++)if("function"===typeof i[s])try{await i[s]({app:e,router:t,Vue:n["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:$})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new n["a"](e)}_()},"31cd":function(e,t,o){},"5c0b":function(e,t,o){"use strict";o("ffd0")},ffd0:function(e,t,o){}});