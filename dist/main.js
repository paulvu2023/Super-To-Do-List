(()=>{"use strict";var n,e,t,r,a,o,i,c,s,u,d,l,p,f,h={28:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),u=new URL(t(11),t.b),d=i()(a()),l=s()(u);d.push([n.id,`html, body {margin: 0; height: 100%; overflow: hidden}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${l});\n}\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --bar-width: 40px;\n    --bar-height: 4px;\n    --hamburger-gap: 8px;\n    --foreground: black;\n    --background: none;\n    --animation-timing: 200ms ease-in-out;\n    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)\n}\n\n.hamburger-menu {\n    --x-width: calc(var(--hamburger-height) * 1.41421356237);\n\n    display: flex;\n    flex-direction: column;\n    gap: var(--hamburger-gap);\n    width: max-content;\n    cursor: pointer;\n    padding: 15px;\n    background-color: rgb(225, 236, 250);\n}\n\n.hamburger-menu::before,\n.hamburger-menu::after,\n.hamburger-menu input {\n    content: "";\n    width: var(--bar-width);\n    height: var(--bar-height);\n    background-color: var(--foreground);\n    border-radius: 9999px;\n    transform-origin: left center;\n    transition: opacity var(--animation-timing), width\n    var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);\n}\n\n.hamburger-menu input {\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    pointer-events: none;\n}\n\n.hamburger-menu:has(input:checked)::before {\n    width: var(--x-width);\n    rotate: 45deg;\n    translate: 0 calc(var(--bar-height) / -2);\n}\n\n.hamburger-menu:has(input:checked)::after {\n    width: var(--x-width);\n    rotate: -45deg;\n    translate: 0 calc(var(--bar-height) / 2);\n}\n\n.hamburger-menu input:checked {\n    opacity: 0;\n    width: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: 70px 1fr;\n    background-color: aliceblue;\n    width: 80%;\n    min-height: 750px;\n    border-radius: 10px;\n}\n\n@media (width <= 1500px) {\n    .container {\n        height: 100%;\n        width: 100%;\n    }\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(94, 94, 143);\n    border-radius: 10px 10px 0px 0px;\n    border-bottom: 1px solid rgb(152, 197, 240);\n}\n\n.header img {\n    height: 80%;\n    margin-left: 20px;\n}\n\n.header div {\n    color: aliceblue;\n    font-size: 40px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 100;\n}\n\n.main {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n}\n\n/* Styling for the bottom left side (sidebar) */\n\n.hamburger-menu:has(input:checked) + .sidebar {\n    translate: 0;\n    width: 230px;\n    opacity: 1;\n}\n\n.sidebar {\n    transition: translate var(--animation-timing);\n    translate: -100%;\n    width: 0px;\n    background-color: rgb(225, 236, 250);\n    border-right: 1px solid rgb(152, 197, 240);\n    border-radius: 0px 0px 0px 10px;\n    padding-top: 80px;\n    opacity: 0;\n}\n\nnav button {\n    display: block;\n    border: none;\n    background: none;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    font-size: 25px;\n    margin-bottom: 25px;\n    color: rgb(77, 75, 75);\n    transition: all 0.2s ease-in-out;\n}\n\nnav button:hover {\n    transform: scale(1.2);\n}\n\n.fa-circle-plus {\n    font-size: 25px;\n    margin-left: 5px;\n}\n\n.notes .fa-circle-plus {\n    margin-left: 29px;\n}\n\n/* Styling for the bottom right side */\n\n.main-right {\n    flex: 1;\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding-top: 30px;\n}\n\n.add-task {\n    gap: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    outline: none;\n    background-color:rgb(225, 236, 250);\n    width: 90%;\n    padding: 15px;\n    border-radius: 12px;\n    font-size: 25px;\n    font-family: 'Abel', sans-serif;\n    transition: all 0.3s ease-in-out;\n}\n\n.add-task:hover {\n    transform: scale(1.05);\n    color: rgb(45, 141, 219);\n}\n\n.fa-beat-fade {\n    font-size: 30px;\n}\n\n`,""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),u=0;u<o.length;u++){var d=t(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"173b1cf39774b08b8bb2.png"}},g={};function m(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return h[n](t,t.exports,m),t.exports}m.m=h,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),a=m(569),o=m.n(a),i=m(565),c=m.n(i),s=m(216),u=m.n(s),d=m(589),l=m.n(d),p=m(28),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();