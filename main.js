(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(11),t.b),l=i()(r()),u=c()(d);l.push([n.id,`html, body {\n    margin: 0;\n    height: 100%;\n    overflow: hidden;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${u});\n}\n\n/* Hamburger Styling */\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --bar-width: 40px;\n    --bar-height: 4px;\n    --hamburger-gap: 8px;\n    --foreground: rgb(59, 59, 59);\n    --animation-timing: 200ms ease-in-out;\n}\n\n.hamburger-menu {\n    --x-width: calc((var(--bar-height) * 3 + var(--hamburger-gap) * 2) * 1.41421356237);\n\n    display: flex;\n    flex-direction: column;\n    gap: var(--hamburger-gap);\n    width: max-content;\n    cursor: pointer;\n    padding: 15px;\n    background-color: rgb(225, 236, 250);\n    border-radius: 0 0 0 10px;\n}\n\n.hamburger-menu::before,\n.hamburger-menu::after,\n.hamburger-menu input {\n    content: "";\n    width: var(--bar-width);\n    height: var(--bar-height);\n    background-color: var(--foreground);\n    border-radius: 9999px;\n    transform-origin: left center;\n    transition: opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);\n}\n\n.hamburger-menu input {\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    pointer-events: none;\n}\n\n.hamburger-menu:has(input:checked)::before {\n    width: var(--x-width);\n    rotate: 45deg;\n    translate: 0 calc(var(--bar-height) / -2);\n}\n\n.hamburger-menu:has(input:checked)::after {\n    width: var(--x-width);\n    rotate: -45deg;\n    translate: 0 calc(var(--bar-height) / 2);\n}\n\n.hamburger-menu input:checked {\n    opacity: 0;\n    width: 0;\n}\n\n/* Container Styling */\n.container {\n    max-height: 100%;\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: 70px 1fr;\n    background-color: aliceblue;\n    width: 80%;\n    min-height: 750px;\n    border-radius: 10px;\n}\n\n@media (max-width: 1500px) {\n    .container {\n        height: 100%;\n        width: 100%;\n    }\n\n    .main-right .task-list {\n        max-height: 100%;\n        height: 85%;\n    }\n}\n\n@media (max-width: 750px) {\n    body {\n        align-items: start;\n    }\n\n    .main-right .task-list {\n        max-height: 100%;\n        height: 85%;\n    }\n}\n\n/* Header Styling */\n.header {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(151, 208, 255);\n    border-radius: 10px 10px 0 0;\n    border-bottom: 1px solid rgb(152, 197, 240);\n}\n\n.header img {\n    height: 80%;\n    margin-left: 20px;\n}\n\n.header div {\n    color: aliceblue;\n    font-size: 40px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 100;\n}\n\n.main {\n    max-height: 100%;\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n}\n\n/* Styling for sidebar */\n.active {\n    font-weight: 800;\n    transform: scale(1.1);\n}\n\n.hamburger-menu:has(input:checked) + .sidebar {\n    transform: translateX(0);\n    width: 230px;\n    opacity: 1;\n    transition: transform var(--animation-timing);\n}\n\n.sidebar {\n    max-height: 100%;\n    height: 100%;\n    transform: translateX(-100%);\n    width: 0;\n    background-color: rgb(225, 236, 250);\n    border-right: 1px solid rgb(152, 197, 240);\n    border-radius: 0 0 0 10px;\n    padding-top: 60px;\n    padding-left: 4px;\n    opacity: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    transition: transform var(--animation-timing);\n}\n\nnav {\n    max-height: 100%;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    \n}\n\nnav button {\n    margin-left: 5px;\n    display: block;\n    border: none;\n    background: none;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    font-size: 25px;\n    margin-bottom: 25px;\n    color: rgb(77, 75, 75);\n    transition: transform 0.2s ease-in-out;\n}\n\nbutton.projects {\n    margin-bottom: 0px;\n}\n\nnav button:hover {\n    transform: scale(1.2);\n}\n\n.fa-circle-plus {\n    font-size: 25px;\n    margin-left: 5px;\n}\n\n.fa-pencil {\n    margin-left: 7px;\n}\n\n.projects-menu {\n    padding-top: 20px;\n    max-height: 297px;\n    padding-left: 8px;\n    overflow-y: auto;\n    padding-bottom: 5px;\n}\n\n.projects-menu .sidebar-project, .sidebar-note {\n    margin-left: 10px;\n    font-size: 22px;\n}\n\n/* Styling for right side */\n.main-right {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 30px;\n    max-height: 100%;\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n}\n\n.add-task,\n.add-notes /* the big task button */ {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    border: none;\n    outline: none;\n    background-color: rgb(225, 236, 250);\n    width: 90%;\n    padding: 15px;\n    border-radius: 12px;\n    font-size: 25px;\n    font-weight: 500;\n    font-family: 'Roboto', sans-serif;\n    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;\n    margin-bottom: 20px;\n}\n\n.add-task:hover,\n.add-notes:hover {\n    transform: scale(1.05);\n    color: rgb(45, 141, 219);\n}\n\n.add-task:active,\n.add-notes:active {\n    transform: scale(0.8);\n}\n\n.fa-beat-fade {\n    font-size: 30px;\n}\n\n/* Styling for Task List and Tasks */\n.task-list {\n    height: 600px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border: 1px solid gray;\n    padding: 10px;\n    margin: 10px 60px 10px 60px;\n}\n\n.task-right-side {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\nbutton.details {\n    background-color: transparent;\n    border: 1px solid rgb(21, 150, 255);\n    color: rgb(21, 150, 255);\n    font-size: 12px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 800;\n    border-radius: 3px;\n    padding: 5px;\n    width: 70px;\n    transition: background-color 0.3s ease, color 0.3s ease;\n}\n\nbutton.details:hover {\n    background-color: rgb(21, 150, 255);\n    color: aliceblue;\n}\n\n.task-date {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n}\n\n.fa-pen-to-square,\n.fa-trash-can {\n    color: rgb(21, 150, 255);\n    font-size: 18px;\n    transition: transform 0.2s ease-in-out;\n}\n\n.edit-task,\n.delete-task {\n    background-color: transparent;\n    border: none;\n}\n\n.fa-pen-to-square:hover,\n.fa-trash-can:hover {\n    transform: scale(1.2);\n}\n\n/* Styling for Notes */\n.notes-container {\n    width: 100%;\n    height: 100%;\n}\n\n.add-notes {\n    margin: 0 auto;\n}\n\n.note-mini-container {\n    margin: 20px;\n    position: relative;\n    width: 100%;\n    max-width: 500px;\n    min-height: 150px;\n}\n\n.input-box {\n    width: 100%;\n    height: 100%;\n    min-height: 150px;\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    font-weight: 100;\n    background-color: white;\n    color: rgb(21, 150, 255);\n    padding: 20px;\n    margin: 20px 0;\n    outline: none;\n    border-radius: 5px;\n}\n\n.note-mini-container .delete-note {\n    border: none;\n    background-color: transparent;\n    position: absolute;\n    bottom: 15px;\n    right: 15px;\n    cursor: pointer;\n}\n\n/* Styling for Add Task Form and Edit Task Form */\n\n.add-task-form,\n.edit-task-form {\n    background-color: aliceblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 0%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.1);\n    visibility: hidden;\n    transition: transform 0.4s, top 0.4s;\n    z-index: 2;\n}\n\n.open-add-task-form,\n.open-edit-task-form {\n    visibility: visible;\n    top: 55%;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.add-task-form h1,\n.edit-task-form h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n    border-radius: 12px 12px 0px 0px;\n    background-color: lightskyblue;\n    color: white;\n    margin: 0;\n    padding: 20px;\n    padding-left: 30px;\n}\n\n.add-task-form fieldset,\n.edit-task-form fieldset {\n    width: 400px;\n    height: 540px;\n}\n\nfieldset {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    border: none;\n    margin: 0;\n    margin-bottom: 25px;\n    padding: 20px 30px 0px 30px;\n    border-radius: 0px 0px 12px 12px;\n}\n\nlabel {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 600;\n    color: rgb(59, 59, 59);\n}\n\ninput,\nselect,\nfieldset button {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 15px;\n    padding: 7px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n}\n\ninput[type="date"] {\n    padding: 15px 7px 15px 7px;\n}\n\ninput:focus {\n    outline: none;\n    border: 2px solid rgb(17, 77, 156);\n}\n\ninput:invalid {\n    border: 2px solid red;\n}\n\nlabel span {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 390px;\n}\n\nfieldset div {\n    display: flex;\n    justify-content: center;\n    gap: 60px;\n}\n\nfieldset button {\n    margin-top: -15px;\n    width: 150px;\n    padding: 10px;\n    border-radius: 8px;\n    font-size: 20px;\n    transition: background-color 0.3s ease;\n}\n\n.add-task-button,\n.edit-task-button,\n.add-project-button {\n    font-weight: 800;\n    background-color: rgb(9, 124, 255);\n    color: white;\n    border: none;\n}\n\n.add-task-button:hover,\n.edit-task-button:hover,\n.add-project-button:hover {\n    background-color: rgb(0, 79, 248);\n}\n\n.cancel-task-button,\n.cancel-edit-task-button,\n.cancel-project-button {\n    background-color: transparent;\n    border: solid 1px gray;\n}\n\n.cancel-task-button:hover,\n.cancel-edit-task-button:hover,\n.cancel-project-button:hover {\n    border: solid 1px rgb(0, 36, 196);\n    color: rgb(0, 36, 196);\n}\n\n.overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n/* Styling for Details Popup */\n\n.details-container {\n    display: flex;\n    flex-direction: column;\n    width: 600px;\n    height: 400px;\n    background-color: lightskyblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    padding: 20px 50px 0px 50px;\n    overflow: hidden;\n}\n\n.x-button {\n    background-color: transparent;\n    border: none;\n    font-size: 30px;\n    align-self: flex-end;\n}\n\n.details-container h1 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 40px;\n    margin-top: 0;\n    color: white;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 100px;\n}\n\n.details-container > .description-detail {\n    margin-top: 30px;\n    max-height: 75px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.details-container > div {\n    font-size: 20px;\n    font-family: 'Roboto', sans-serif;\n    margin-top: 5px;\n    font-weight: 800;\n    color: white;\n}\n\n.space {\n    margin-bottom: 30px;\n}\n\n/* Styling for Projects Form */\n.project-form {\n    display: flex;\n    flex-direction: column;\n    width: 500px;\n    height: 200px;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: aliceblue;\n    z-index: 2;\n}\n\nlabel[for="project-name"] {\n   margin-top: 20px;\n}\n\n#project-name {\n    margin-bottom: 25px;\n}\n\n#add-project-form fieldset div button {\n    margin: 0;   \n}\n\n/* Checkbox Styling */\n.checkbox-wrapper-15 .cbx {\n    user-select: none;\n    tap-highlight-color: transparent;\n    cursor: pointer;\n}\n\n.checkbox-wrapper-15 .cbx span {\n    display: inline-block;\n    vertical-align: middle;\n    transform: translate3d(0, 0, 0);\n}\n\n.checkbox-wrapper-15 .cbx span:first-child {\n    position: relative;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    transform: scale(1);\n    vertical-align: middle;\n    border: 1px solid rgb(21, 150, 255);\n    transition: all 0.2s ease;\n}\n\n.checkbox-wrapper-15 .cbx span:first-child svg {\n    position: absolute;\n    z-index: 1;\n    top: 8px;\n    left: 6px;\n    fill: none;\n    stroke: white;\n    stroke-width: 2;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-dasharray: 16px;\n    stroke-dashoffset: 16px;\n    transition: all 0.3s ease;\n    transition-delay: 0.1s;\n    transform: translate3d(0, 0, 0);\n}\n\n.checkbox-wrapper-15 .cbx span:first-child:before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    background: rgb(0, 110, 255);\n    display: block;\n    transform: scale(0);\n    opacity: 1;\n    border-radius: 50%;\n    transition-delay: 0.2s;\n}\n\n.checkbox-wrapper-15 .cbx span:last-child {\n    margin-left: 8px;\n}\n\n.checkbox-wrapper-15 .cbx span:last-child:after {\n    content: "";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background: #B9B8C3;\n    transform-origin: 0 0;\n    transform: scaleX(0);\n}\n\n.checkbox-wrapper-15 .cbx:hover span:first-child {\n    border-color: rgb(0, 110, 255);\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {\n    border-color: rgb(0, 110, 255);\n    background: rgb(0, 110, 255);\n    animation: check-15 0.6s ease;\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {\n    stroke-dashoffset: 0;\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {\n    transform: scale(2.2);\n    opacity: 0;\n    transition: all 0.6s ease;\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {\n    color: #B9B8C3;\n    transition: all 0.3s ease;\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {\n    transform: scaleX(1);\n    transition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n    50% {\n        transform: scale(1.2);\n    }\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n\n/* Styling for Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    border-radius: 10px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgba(132, 220, 255, 0.75);\n    border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: rgb(73, 203, 255);\n}`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"173b1cf39774b08b8bb2.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(28),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let g=[];class b{constructor(n,e,t,o,r){this.taskName=n,this.description=e,this.dueDate=t,this.priority=o,this.checked=!1,this.project=r,g[v(r)].taskList.push(this)}}class h{constructor(n){this.name=n,this.taskList=[]}}function x(n){const e=new h(n);g.push(e),localStorage.setItem("projects",JSON.stringify(g))}function v(n){for(let e=0;e<g.length;e++)if(g[e].name==n)return e;return-1}function y(n){n.preventDefault();let e=document.getElementById("add-task-form");const t=document.getElementById("task-name").value,o=document.getElementById("description").value,r=document.getElementById("due-date").value,a=document.getElementById("priority").value,i=document.getElementById("project").value;new b(t,o,r,a,i),e.reset(),an(),R(),_(g[v(i)].taskList),localStorage.setItem("projects",JSON.stringify(g))}function k(n){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k(n)}function w(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function S(n){w(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===k(n)&&"[object Date]"===e?new Date(n.getTime()):"number"==typeof n||"[object Number]"===e?new Date(n):("string"!=typeof n&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function E(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var j={};function L(){return j}function N(n,e){var t,o,r,a,i,s,c,d;w(1,arguments);var l=L(),u=E(null!==(t=null!==(o=null!==(r=null!==(a=null==e?void 0:e.weekStartsOn)&&void 0!==a?a:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==r?r:l.weekStartsOn)&&void 0!==o?o:null===(c=l.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==t?t:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=S(n),m=p.getDay(),f=(m<u?7:0)+m-u;return p.setDate(p.getDate()-f),p.setHours(0,0,0,0),p}function T(n,e){return w(1,arguments),function(n,e,t){w(2,arguments);var o=N(n,t),r=N(e,t);return o.getTime()===r.getTime()}(n,Date.now(),e)}Math.pow(10,8);var D=6e4,I=36e5;function C(n,e){var t;w(1,arguments);var o=E(null!==(t=null==e?void 0:e.additionalDigits)&&void 0!==t?t:2);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof n&&"[object String]"!==Object.prototype.toString.call(n))return new Date(NaN);var r,a=function(n){var e,t={},o=n.split(q.dateTimeDelimiter);if(o.length>2)return t;if(/:/.test(o[0])?e=o[0]:(t.date=o[0],e=o[1],q.timeZoneDelimiter.test(t.date)&&(t.date=n.split(q.timeZoneDelimiter)[0],e=n.substr(t.date.length,n.length))),e){var r=q.timezone.exec(e);r?(t.time=e.replace(r[1],""),t.timezone=r[1]):t.time=e}return t}(n);if(a.date){var i=function(n,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),o=n.match(t);if(!o)return{year:NaN,restDateString:""};var r=o[1]?parseInt(o[1]):null,a=o[2]?parseInt(o[2]):null;return{year:null===a?r:100*a,restDateString:n.slice((o[1]||o[2]).length)}}(a.date,o);r=function(n,e){if(null===e)return new Date(NaN);var t=n.match(M);if(!t)return new Date(NaN);var o=!!t[4],r=$(t[1]),a=$(t[2])-1,i=$(t[3]),s=$(t[4]),c=$(t[5])-1;if(o)return function(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}(0,s,c)?function(n,e,t){var o=new Date(0);o.setUTCFullYear(n,0,4);var r=7*(e-1)+t+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+r),o}(e,s,c):new Date(NaN);var d=new Date(0);return function(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(P[e]||(O(n)?29:28))}(e,a,i)&&function(n,e){return e>=1&&e<=(O(n)?366:365)}(e,r)?(d.setUTCFullYear(e,a,Math.max(r,i)),d):new Date(NaN)}(i.restDateString,i.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var s,c=r.getTime(),d=0;if(a.time&&(d=function(n){var e=n.match(B);if(!e)return NaN;var t=z(e[1]),o=z(e[2]),r=z(e[3]);return function(n,e,t){return 24===n?0===e&&0===t:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}(t,o,r)?t*I+o*D+1e3*r:NaN}(a.time),isNaN(d)))return new Date(NaN);if(!a.timezone){var l=new Date(c+d),u=new Date(0);return u.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),u.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),u}return s=function(n){if("Z"===n)return 0;var e=n.match(H);if(!e)return 0;var t="+"===e[1]?-1:1,o=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return function(n,e){return e>=0&&e<=59}(0,r)?t*(o*I+r*D):NaN}(a.timezone),isNaN(s)?new Date(NaN):new Date(c+d+s)}var q={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},M=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,B=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,H=/^([+-])(\d{2})(?::?(\d{2}))?$/;function $(n){return n?parseInt(n):1}function z(n){return n&&parseFloat(n.replace(",","."))||0}var P=[31,null,31,30,31,30,31,31,30,31,30,31];function O(n){return n%400==0||n%4==0&&n%100!=0}function A(n){w(1,arguments);var e=S(n);return e.setHours(0,0,0,0),e}function U(n){return w(1,arguments),function(n,e){w(2,arguments);var t=A(n),o=A(e);return t.getTime()===o.getTime()}(n,Date.now())}function R(){document.querySelector(".task-list").innerHTML=""}function F(){localStorage.setItem("notes",document.querySelector(".notes-container").innerHTML)}function Z(){R();const n=document.querySelector(".task-list"),e=document.createElement("div");e.classList.add("notes-container"),document.querySelector(".add-task").style.display="none";const t=document.createElement("button");t.innerHTML='<i class="fa-solid fa-plus fa-beat-fade"></i>Add Notes',t.classList.toggle("add-notes"),n.append(t),n.append(e),document.querySelector(".notes-container").innerHTML=localStorage.getItem("notes"),X(),t.addEventListener("click",J)}function J(){const n=document.querySelector(".notes-container"),e=document.createElement("div");e.classList.add("note-mini-container"),e.innerHTML='\n    <p contenteditable="true" class="input-box" spellcheck="false"></p>\n    <button class="delete-note"><i class="fa-regular fa-trash-can"></i></button>\n    ',n.append(e),X()}function X(){document.querySelector(".notes-container").addEventListener("click",(function(n){"I"===n.target.tagName&&n.target.classList.contains("fa-trash-can")?(n.target.parentElement.parentElement.remove(),F()):"P"===n.target.tagName&&document.querySelectorAll(".input-box").forEach((n=>{n.onkeyup=function(){F()}}))}))}function Y(){R(),g.forEach((n=>_(n.taskList)))}function _(n){n.forEach((n=>function(n){const e=document.createElement("div");e.classList.add("task"),e.id=`task-${n.taskName}`,e.innerHTML=`\n        <div class="checkbox-wrapper-15">\n            <input class="inp-cbx" id="${n.taskName}" type="checkbox" style="display: none;"/>\n            <label class="cbx" for="${n.taskName}">\n                <span>\n                    <svg width="12px" height="9px" viewbox="0 0 12 9">\n                        <polyline points="1 5 4 8 11 1"></polyline>\n                    </svg>\n                </span>\n                <span>${n.taskName}</span>\n            </label>\n        </div>\n        <div class="task-right-side">\n            <div class="task-date">${n.dueDate}</div>\n            <button class="details" id="${n.taskName}-details">DETAILS</button>\n            <button class="edit-task" id="${n.taskName}-edit">\n                <i class="fa-regular fa-pen-to-square"></i>\n            </button>\n            <button class="delete-task" id="${n.taskName}-delete">\n                <i class="fa-regular fa-trash-can"></i>\n            </button>\n        </div>\n    `;document.querySelector(".task-list").appendChild(e);const t={Low:"green",Medium:"orange",High:"red"}[n.priority];t&&(e.style.borderColor=t);const o=document.getElementById(n.taskName);1==n.checked?o.checked=!0:o.checked=!1,o.addEventListener("click",(()=>{o.checked?(n.checked=!0,localStorage.setItem("projects",JSON.stringify(g))):(n.checked=!1,localStorage.setItem("projects",JSON.stringify(g)))}));document.getElementById(`${n.taskName}-details`).addEventListener("click",(()=>{!function(n){const e=document.querySelector(".main-right");document.getElementById("overlay").style.display="block";const t=`\n        <div class="details-container">\n            <button class="x-button">\n                <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>\n            </button>\n            <h1>${n.taskName}</h1>\n            <div class="space description-detail"><span>Description:</span> ${n.description}</div>\n            <div class="space"><span>Due Date:</span> ${n.dueDate}</div>\n            <div class="space"><span>Priority:</span> ${n.priority}</div>\n            <div><span>Project:</span> ${n.project}</div>\n        </div>\n    `;e.insertAdjacentHTML("beforeend",t),document.querySelector(".x-button").addEventListener("click",en)}(n)}));document.getElementById(`${n.taskName}-edit`).addEventListener("click",(()=>{!function(n){const e=document.querySelector(".main-right"),t=document.getElementById("overlay");t.style.display="block";const o=`\n        <form class="edit-task-form open-edit-task-form" id="edit-task-form">\n            <h1>Edit Task</h1>\n            <fieldset>\n                <label for="edit-task-name">Task Name</label>\n                <input value="${n.taskName}" type="text" id="edit-task-name" name="edit-task-name" autocomplete="off" required spellcheck="false">\n\n                <label for="edit-description">Description</label>\n                <input value="${n.description}" type="text" id="edit-description" name="edit-description" autocomplete="off" spellcheck="false">\n\n                <label for="edit-due-date">Due Date</label>\n                <input value="${n.dueDate}" type="date" id="edit-due-date" name="edit-due-date">\n\n                <label for="edit-priority">Priority</label>\n                <select id="edit-priority" name="edit-priority">\n                    <option value="Low">Low</option>\n                    <option value="Medium">Medium</option>\n                    <option value="High">High</option>\n                </select>\n\n                <label for="edit-project">Project</label>\n                <select id="edit-project" name="edit-project">\n                </select>\n\n                <div>\n                    <button type="submit" class="edit-task-button">Edit</button>\n                    <button type="button" class="cancel-edit-task-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    `;e.insertAdjacentHTML("beforeend",o),e.appendChild(t),sn("edit-project"),tn("edit-priority",n.priority),tn("edit-project",n.project),document.getElementById("edit-task-form").addEventListener("submit",(e=>{e.preventDefault(),function(n,e){const t=document.getElementById("edit-task-name").value,o=document.getElementById("edit-description").value,r=document.getElementById("edit-due-date").value,a=document.getElementById("edit-priority").value,i=document.getElementById("edit-project").value;for(let s=0;s<e.length;s++)e[s].taskName==n.taskName&&(e[s].taskName=t,e[s].description=o,e[s].dueDate=r,e[s].priority=a,e[s].project=i,g[v(i)].taskList.push(e[s]));for(let n=0;n<e.length;n++)if(e[n].taskName===t){e.splice(n,1);break}localStorage.setItem("projects",JSON.stringify(g))}(n,g[v(n.project)].taskList),on(),R(),_(g[v(n.project)].taskList)})),document.querySelector(".cancel-edit-task-button").addEventListener("click",on)}(n)}));document.getElementById(`${n.taskName}-delete`).addEventListener("click",(()=>{!function(n){const e=g[v(n.project)].taskList;for(let t=0;t<e.length;t++)n.taskName==e[t].taskName&&e.splice(t,1);localStorage.setItem("projects",JSON.stringify(g)),function(){const n=document.querySelector(".active").classList;n.contains("all")?Y():n.contains("today")?W():n.contains("week")?Q():n.contains("important")&&G()}()}(n)}))}(n)))}function G(){const n=[];for(const e of g)for(let t=0;t<e.taskList.length;t++)"High"==e.taskList[t].priority&&n.push(e.taskList[t]);R(),n.length>0&&_(n)}function Q(){const n=[];for(const e of g)for(let t=0;t<e.taskList.length;t++)1==T(C(e.taskList[t].dueDate))&&n.push(e.taskList[t]);R(),n.length>0&&_(n)}function W(){const n=[];for(const e of g)for(let t=0;t<e.taskList.length;t++)1==U(C(e.taskList[t].dueDate))&&n.push(e.taskList[t]);R(),n.length>0&&_(n)}function K(){document.querySelector(".projects-menu").innerHTML="",g.forEach((n=>{!function(n){const e=document.querySelector(".projects-menu"),t=document.createElement("button");t.classList.add(`project-${n.replace(/ /g,"-")}-button`),t.classList.add("sidebar-project"),t.textContent=n,e.append(t),document.querySelector(`.project-${n.replace(/ /g,"-")}-button`).addEventListener("click",(()=>{if(g[v(n)].taskList.length>0)!function(n){R(),_(g[v(n)].taskList)}(n);else{R();const e=document.querySelector(".task-list"),t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("button");t.classList.add("deleteProjectContainer"),o.classList.add("deleteProjectHeader"),r.classList.add("deleteProjectSubheader"),a.classList.add("deleteProjectButton"),o.textContent="Empty Project!",r.textContent="Create a new Task or delete Project.",a.textContent="DELETE PROJECT",t.appendChild(o),t.appendChild(r),t.appendChild(a),e.appendChild(t),a.addEventListener("click",(()=>{!function(n){g.splice(v(n),1),localStorage.setItem("projects",JSON.stringify(g))}(n),Y(),K()}))}}))}(n.name)}))}function V(){const n=document.querySelector(".project-container"),e=document.createElement("div");e.classList.add("overlay"),n.insertAdjacentHTML("beforeend",'\n        <div class="project-form">\n            <form class="add-project-form" id="add-project-form">\n                <fieldset>\n                    <label for="project-name">Project Name</label>\n                    <input type="text" id="project-name" name="project-name" autocomplete="off" maxlength="15" required spellcheck="false">\n                    <div>\n                        <button type="submit" class="add-project-button">Add Project</button>\n                        <button type="button" class="cancel-project-button">Cancel</button>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    '),n.appendChild(e),document.getElementById("add-project-form").addEventListener("submit",(n=>{n.preventDefault(),x(document.getElementById("project-name").value),nn(),K()})),document.querySelector(".cancel-project-button").addEventListener("click",nn)}function nn(){document.querySelector(".project-container").innerHTML=""}function en(){let n=document.querySelector(".details-container"),e=document.getElementById("overlay");n.remove(),e.style.display="none"}function tn(n,e){const t=document.getElementById(n);for(let n=0;n<t.options.length;n++)if(t.options[n].value===e){t.options[n].selected=!0;break}}function on(){let n=document.getElementById("edit-task-form");document.getElementById("overlay").style.display="none",n.remove()}function rn(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay");sn("project"),n.classList.add("open-add-task-form"),e.style.display="block"}function an(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay"),t=document.getElementById("project");n.reset(),t.innerHTML="",n.classList.remove("open-add-task-form"),e.style.display="none"}function sn(n){const e=document.getElementById(n);for(const n of g){const t=document.createElement("option");t.value=n.name,t.textContent=n.name,e.appendChild(t)}}document.addEventListener("DOMContentLoaded",(function(){!function(){const n=localStorage.getItem("projects");n?g=JSON.parse(n):x("General")}(),function(){const n=document.querySelector(".main-right"),e=document.createElement("div");e.id="overlay",e.className="overlay",n.innerHTML='\n        <button class="add-task">\n            <i class="fa-solid fa-plus fa-beat-fade"></i>\n            Add Task\n        </button>\n        <div class="task-list"></div>\n    ',n.insertAdjacentHTML("beforeend",'\n        <form class="add-task-form" id="add-task-form">\n            <h1>Add Task</h1>\n            <fieldset>\n                <label for="task-name">Task Name</label>\n                <input type="text" id="task-name" name="task-name" autocomplete="off" required spellcheck="false">\n\n                <label for="description">Description</label>\n                <input type="text" id="description" name="description" autocomplete="off" spellcheck="false">\n\n                <label for="due-date">Due Date</label>\n                <input type="date" id="due-date" name="due-date">\n\n                <label for="priority">Priority</label>\n                <select id="priority" name="priority">\n                    <option value="Low">Low</option>\n                    <option value="Medium" selected>Medium</option>\n                    <option value="High">High</option>\n                </select>\n\n                <label for="project">Project</label>\n                <select id="project" name="project">\n\n                </select>\n\n                <div>\n                    <button type="submit" class="add-task-button">Add Task</button>\n                    <button type="button" class="cancel-task-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    '),n.appendChild(e)}(),document.querySelectorAll("nav > *").forEach((n=>{n.addEventListener("click",(()=>{document.querySelector(".active")?.classList.remove("active"),n.classList.add("active"),n.classList.contains("notes")||(document.querySelector(".add-task").style.display="flex",document.querySelector(".add-notes")&&document.querySelector(".add-notes").remove())}))})),document.querySelector(".add-task").addEventListener("click",rn),document.querySelector(".cancel-task-button").addEventListener("click",an),document.getElementById("add-task-form").addEventListener("submit",y),document.querySelector(".projects").addEventListener("click",V),document.querySelector(".all").addEventListener("click",Y),document.querySelector(".today").addEventListener("click",W),document.querySelector(".week").addEventListener("click",Q),document.querySelector(".important").addEventListener("click",G),document.querySelector(".notes").addEventListener("click",Z),Y(),K()}))})()})();