(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),s=t(667),d=t.n(s),c=new URL(t(11),t.b),l=i()(a()),p=d()(c);l.push([n.id,`html, body {margin: 0; height: 100%;}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${p});\n}\n\n/* Hamburger Styling */\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\n:root {\n    --bar-width: 40px;\n    --bar-height: 4px;\n    --hamburger-gap: 8px;\n    --foreground: rgb(59, 59, 59);\n    --background: none;\n    --animation-timing: 200ms ease-in-out;\n    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)\n}\n\n.hamburger-menu {\n    --x-width: calc(var(--hamburger-height) * 1.41421356237);\n\n    display: flex;\n    flex-direction: column;\n    gap: var(--hamburger-gap);\n    width: max-content;\n    cursor: pointer;\n    padding: 15px;\n    background-color: rgb(225, 236, 250);\n    border-radius: 0px 0px 0px 10px;\n}\n\n.hamburger-menu::before,\n.hamburger-menu::after,\n.hamburger-menu input {\n    content: "";\n    width: var(--bar-width);\n    height: var(--bar-height);\n    background-color: var(--foreground);\n    border-radius: 9999px;\n    transform-origin: left center;\n    transition: opacity var(--animation-timing), width\n    var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);\n}\n\n.hamburger-menu input {\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    pointer-events: none;\n}\n\n.hamburger-menu:has(input:checked)::before {\n    width: var(--x-width);\n    rotate: 45deg;\n    translate: 0 calc(var(--bar-height) / -2);\n}\n\n.hamburger-menu:has(input:checked)::after {\n    width: var(--x-width);\n    rotate: -45deg;\n    translate: 0 calc(var(--bar-height) / 2);\n}\n\n.hamburger-menu input:checked {\n    opacity: 0;\n    width: 0;\n}\n\n/* Container Styling */\n\n.container {\n    display: grid;\n    grid-template-rows: 70px 1fr;\n    background-color: aliceblue;\n    width: 80%;\n    min-height: 750px;\n    border-radius: 10px;\n}\n\n@media (width <= 1500px) {\n    .container {\n        height: 100%;\n        width: 100%;\n    }\n}\n\n@media (height <= 750px) {\n    body {\n        align-items: start;\n    }\n}\n\n/* Header Styling */\n\n.header {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(151, 208, 255);\n    border-radius: 10px 10px 0px 0px;\n    border-bottom: 1px solid rgb(152, 197, 240);\n}\n\n.header img {\n    height: 80%;\n    margin-left: 20px;\n}\n\n.header div {\n    color: aliceblue;\n    font-size: 40px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 100;\n}\n\n.main {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n}\n\n/* Styling for sidebar */\n\n.hamburger-menu:has(input:checked) + .sidebar {\n    translate: 0;\n    width: 230px;\n    opacity: 1;\n}\n\n.sidebar {\n    transition: translate var(--animation-timing);\n    translate: -100%;\n    width: 0px;\n    background-color: rgb(225, 236, 250);\n    border-right: 1px solid rgb(152, 197, 240);\n    border-radius: 0px 0px 0px 10px;\n    padding-top: 80px;\n    padding-left: 4px;\n    opacity: 0;\n    overflow-y: auto;\n}\n\nnav button {\n    display: block;\n    border: none;\n    background: none;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    font-size: 25px;\n    margin-bottom: 25px;\n    color: rgb(77, 75, 75);\n    transition: all 0.2s ease-in-out;\n}\n\nnav button:hover {\n    transform: scale(1.2);\n}\n\n.fa-circle-plus {\n    font-size: 25px;\n    margin-left: 5px;\n}\n\n.notes .fa-circle-plus {\n    margin-left: 29px;\n}\n\n/* Styling for right side */\n\n.main-right {\n    flex: 1;\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding-top: 30px;\n}\n\n.add-task /*{ the big task button */ {\n    gap: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    outline: none;\n    background-color:rgb(225, 236, 250);\n    width: 90%;\n    padding: 15px;\n    border-radius: 12px;\n    font-size: 25px;\n    font-weight: 500;\n    font-family: 'Roboto', sans-serif;\n    transition: all 0.3s ease-in-out;\n    margin-bottom: 20px;\n}\n\n.add-task:hover {\n    transform: scale(1.05);\n    color: rgb(45, 141, 219);\n}\n\n.add-task:active {\n    transform: scale(.8);\n}\n\n.fa-beat-fade {\n    font-size: 30px;\n}\n\n/* Styling for Task List and Tasks*/\n.task-list {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border: 1px solid gray;\n    padding: 10px;\n    margin: 10px 60px 10px 60px;\n}\n\n.task-right-side {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\nbutton.details {\n    background-color: transparent;\n    border: 1px solid rgb(21, 150, 255);\n    color: rgb(21, 150, 255);\n    font-size: 12px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 800;\n    border-radius: 3px;\n    padding: 5px;\n    width: 70px;\n    transition: background-color 0.3s ease;\n}\n\nbutton.details:hover {\n    background-color: rgb(21, 150, 255);\n    color: aliceblue;\n}\n\n.task-date {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n}\n\n.fa-pen-to-square, .fa-trash-can {\n    color: rgb(21, 150, 255);\n    font-size: 18px;\n    transition: all 0.2s ease-in-out;\n}\n    \n.edit-task, .delete-task {\n    background-color: transparent;\n    border: none;\n}\n\n.fa-pen-to-square:hover, .fa-trash-can:hover {\n    transform: scale(1.2);\n}\n\n/* Styling for Add Task Form */\n\n.add-task-form, .edit-task-form {\n    background-color: aliceblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 0%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.1);\n    visibility: hidden;\n    transition: transform 0.4s, top 0.4s;\n    z-index: 2;\n}\n\n.open-add-task-form, .open-edit-task-form {\n    visibility: visible;\n    top: 55%;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.add-task-form h1, .edit-task-form h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n    border-radius: 12px 12px 0px 0px;\n    background-color: lightskyblue;\n    color: white;\n    margin: 0;\n    padding: 20px;\n    padding-left: 30px; \n}\n\n.add-task-form fieldset, .edit-task-form fieldset {\n    width: 400px;\n    height: 540px;\n}\n\nfieldset {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    border: none;\n    margin: 0;\n    margin-bottom: 25px;\n    padding: 20px 30px 0px 30px;\n    border-radius: 0px 0px 12px 12px;\n}\n\nlabel {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 600;\n    color: rgb(59, 59, 59);\n}\n\ninput, select, fieldset button{\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    font-size: 15px;\n    padding: 7px;\n    margin-top: 5px;\n    margin-bottom: 40px;\n}\n\ninput[type="date"] {\n    padding: 15px 7px 15px 7px;\n}\n\ninput:focus {\n    outline: none;\n    border: 2px solid rgb(17, 77, 156);\n}\n\ninput:invalid {\n    border: 2px solid red;\n}\n\nlabel span {\n    color: rgb(21, 150, 255);\n    font-family: 'Montserrat', sans-serif;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 390px;\n}\n\nfieldset div {\n    display: flex;\n    justify-content: center;\n    gap: 60px;\n}\n\nfieldset button {\n    margin-top: -15px;\n    width: 150px;\n    padding: 10px;\n    border-radius: 8px;\n    font-size: 20px;\n    transition: background-color 0.3s ease;\n}\n\n.add-task-button, .edit-task-button, .add-project-button {\n    font-weight: 800;\n    background-color: rgb(9, 124, 255);\n    color: white;\n    border: none;\n}\n\n.add-task-button:hover, .edit-task-button:hover, .add-project-button:hover {\n    background-color: rgb(0, 79, 248);\n}\n\n.cancel-task-button, .cancel-edit-task-button, .cancel-project-button {\n    background-color: transparent;\n    border: solid 1px gray;\n}\n\n.cancel-task-button:hover, .cancel-edit-task-button:hover, .cancel-project-button:hover {\n    border: solid 1px rgb(0, 36, 196);\n    color: rgb(0, 36, 196);\n}\n\n.overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n/* Styling for Details Popup */\n\n.details-container {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    width: 600px;\n    height: 400px;\n    background-color: lightskyblue;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    padding: 20px 50px 0px 50px;\n    overflow: hidden;\n}\n\n.x-button {\n    background-color: transparent;\n    border: none;\n    font-size: 30px;\n    align-self: end;\n}\n\n.details-container h1 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 40px;\n    margin-top: 0;\n    color: white;\n    overflow-y:auto;\n    overflow-x: hidden;\n    max-height: 100px;\n}\n\n.details-container > .description-detail {\n    margin-top: 30px;\n    max-height: 75px;\n    overflow-y:auto;\n    overflow-x: hidden;\n}\n\n.details-container > div {\n    font-size: 20px;\n    font-family: 'Roboto', sans-serif;\n    margin-top: 5px;\n    font-weight: 800;\n    color: white;\n}\n\n.space {\n    margin-bottom: 30px;\n}\n\n/* Styling for Projects Form */\n\n.project-form {\n    display: flex;\n    flex-direction: column;\n    width: 500px;\n    height: 200px;\n    border-radius: 12px;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n    background-color: aliceblue;\n    z-index: 2;\n}\n\nlabel[for="project-name"] {\n   margin-top: 20px;\n}\n\n#project-name {\n    margin-bottom: 25px;\n}\n\n#add-project-form fieldset div button {\n    margin: 0;   \n}\n\n/* Checkbox Styling */\n\n.checkbox-wrapper-15 .cbx {\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n  }\n.checkbox-wrapper-15 .cbx span {\ndisplay: inline-block;\nvertical-align: middle;\ntransform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-15 .cbx span:first-child {\nposition: relative;\nwidth: 24px;\nheight: 24px;\nborder-radius: 50%;\ntransform: scale(1);\nvertical-align: middle;\nborder: 1px solid rgb(21, 150, 255);\ntransition: all 0.2s ease;\n}\n.checkbox-wrapper-15 .cbx span:first-child svg {\nposition: absolute;\nz-index: 1;\ntop: 8px;\nleft: 6px;\nfill: none;\nstroke: white;\nstroke-width: 2;\nstroke-linecap: round;\nstroke-linejoin: round;\nstroke-dasharray: 16px;\nstroke-dashoffset: 16px;\ntransition: all 0.3s ease;\ntransition-delay: 0.1s;\ntransform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper-15 .cbx span:first-child:before {\ncontent: "";\nwidth: 100%;\nheight: 100%;\nbackground: rgb(0, 110, 255);\ndisplay: block;\ntransform: scale(0);\nopacity: 1;\nborder-radius: 50%;\ntransition-delay: 0.2s;\n}\n.checkbox-wrapper-15 .cbx span:last-child {\nmargin-left: 8px;\n}\n.checkbox-wrapper-15 .cbx span:last-child:after {\ncontent: "";\nposition: absolute;\ntop: 8px;\nleft: 0;\nheight: 1px;\nwidth: 100%;\nbackground: #B9B8C3;\ntransform-origin: 0 0;\ntransform: scaleX(0);\n}\n.checkbox-wrapper-15 .cbx:hover span:first-child {\nborder-color:rgb(0, 110, 255);\n}\n\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {\nborder-color:rgb(0, 110, 255);\nbackground:rgb(0, 110, 255);\nanimation: check-15 0.6s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {\nstroke-dashoffset: 0;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {\ntransform: scale(2.2);\nopacity: 0;\ntransition: all 0.6s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {\ncolor: #B9B8C3;\ntransition: all 0.3s ease;\n}\n.checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {\ntransform: scaleX(1);\ntransition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n50% {\n    transform: scale(1.2);\n}\n}\n\nbutton:hover {\n    cursor: pointer;\n}`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var d=o(n,a),c=0;c<r.length;c++){var l=t(r[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"173b1cf39774b08b8bb2.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),f=t(28),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const b=[];class g{constructor(n,e,t,o,a){this.taskName=n,this.description=e,this.dueDate=t,this.priority=o,this.checked=!1,this.project=a,b[y(a)].addTask(this)}}class h{constructor(n){this.name=n,this.taskList=[]}addTask(n){this.taskList.push(n)}}function x(n){const e=new h(n);b.push(e)}function y(n){for(let e=0;e<b.length;e++)if(b[e].name==n)return e;return-1}function k(n){n.preventDefault();let e=document.getElementById("add-task-form");const t=document.getElementById("task-name").value,o=document.getElementById("description").value,a=document.getElementById("due-date").value,r=document.getElementById("priority").value,i=document.getElementById("project").value;new g(t,o,a,r,i),e.reset(),T(),v(b[y(i)].taskList)}function v(n){document.querySelector(".task-list").innerHTML="",n.forEach((n=>function(n){const e=document.createElement("div");e.classList.add("task"),e.id=`task-${n.taskName}`,e.innerHTML=`\n        <div class="checkbox-wrapper-15">\n            <input class="inp-cbx" id="${n.taskName}" type="checkbox" style="display: none;"/>\n            <label class="cbx" for="${n.taskName}">\n                <span>\n                    <svg width="12px" height="9px" viewbox="0 0 12 9">\n                        <polyline points="1 5 4 8 11 1"></polyline>\n                    </svg>\n                </span>\n                <span>${n.taskName}</span>\n            </label>\n        </div>\n        <div class="task-right-side">\n            <div class="task-date">${n.dueDate}</div>\n            <button class="details" id="${n.taskName}-details">DETAILS</button>\n            <button class="edit-task" id="${n.taskName}-edit">\n                <i class="fa-regular fa-pen-to-square"></i>\n            </button>\n            <button class="delete-task" id="${n.taskName}-delete">\n                <i class="fa-regular fa-trash-can"></i>\n            </button>\n        </div>\n    `,document.querySelector(".task-list").appendChild(e),"Low"==n.priority?document.getElementById(`task-${n.taskName}`).style.borderColor="green":"Medium"==n.priority?document.getElementById(`task-${n.taskName}`).style.borderColor="orange":"High"==n.priority&&(document.getElementById(`task-${n.taskName}`).style.borderColor="red");document.getElementById(`${n.taskName}-details`).addEventListener("click",(()=>{!function(n){const e=document.querySelector(".main-right");let t=document.getElementById("overlay");t.style.display="block";const o=`\n        <div class="details-container">\n            <button class="x-button">\n                <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>\n            </button>\n            <h1>${n.taskName}</h1>\n            <div class="space description-detail"><span>Description:</span> ${n.description}</div>\n            <div class="space"><span>Due Date:</span> ${n.dueDate}</div>\n            <div class="space"><span>Priority:</span> ${n.priority}</div>\n            <div><span>Project:</span> ${n.project}</div>\n        </div>\n    `;e.insertAdjacentHTML("beforeend",o),e.appendChild(t),document.querySelector(".x-button").addEventListener("click",I)}(n)}));document.getElementById(`${n.taskName}-edit`).addEventListener("click",(()=>{!function(n){const e=document.querySelector(".main-right");let t=document.getElementById("overlay");t.style.display="block";const o=`\n        <form class="edit-task-form open-edit-task-form" id="edit-task-form">\n            <h1>Edit Task</h1>\n            <fieldset>\n                <label for="edit-task-name">Task Name</label>\n                <input value="${n.taskName}" type="text" id="edit-task-name" name="edit-task-name" autocomplete="off" required spellcheck="false">\n\n                <label for="edit-description">Description</label>\n                <input value="${n.description}" type="text" id="edit-description" name="edit-description" autocomplete="off" spellcheck="false">\n\n                <label for="edit-due-date">Due Date</label>\n                <input value="${n.dueDate}" type="date" id="edit-due-date" name="edit-due-date">\n\n                <label for="edit-priority">Priority</label>\n                <select id="edit-priority" name="edit-priority">\n                    <option value="Low">Low</option>\n                    <option value="Medium">Medium</option>\n                    <option value="High">High</option>\n                </select>\n\n                <label for="edit-project">Project</label>\n                <select id="edit-project" name="edit-project">\n\n                </select>\n\n                <div>\n                    <button type="submit" class="edit-task-button">Edit</button>\n                    <button type="button" class="cancel-edit-task-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    `;e.insertAdjacentHTML("beforeend",o),e.appendChild(t),M("edit-project");const a=document.getElementById("edit-priority");for(let e=0;e<a.options.length;e++)if(a.options[e].value==n.priority){a.options[e].selected=!0;break}const r=document.getElementById("edit-project");for(let e=0;e<a.options.length;e++)if(r.options[e].value==n.project){r.options[e].selected=!0;break}document.getElementById("edit-task-form").addEventListener("submit",(e=>{e.preventDefault(),function(n,e){const t=document.getElementById("edit-task-name").value,o=document.getElementById("edit-description").value,a=document.getElementById("edit-due-date").value,r=document.getElementById("edit-priority").value,i=document.getElementById("edit-project").value;for(let s=0;s<e.length;s++)e[s].taskName==n.taskName&&(e[s].taskName=t,e[s].description=o,e[s].dueDate=a,e[s].priority=r,e[s].project=i)}(n,b[y(n.project)].taskList),B(),v(b[y(n.project)].taskList)})),document.querySelector(".cancel-edit-task-button").addEventListener("click",B)}(n),v(b[y(n.project)].taskList)}));document.getElementById(`${n.taskName}-delete`).addEventListener("click",(()=>{!function(n){const e=b[y(n.project)].taskList;for(let t=0;t<e.length;t++)n.taskName==e[t].taskName&&e.splice(t,1)}(n),v(b[y(n.project)].taskList)}))}(n)))}function w(){const n=[];for(const e of b)for(let t=0;t<e.taskList.length;t++)1==j(e.taskList[t].dueDate)&&n.push(e.taskList[t]);n.length>0&&v(n)}function j(n){const e=new Date;e.setHours(0,0,0,0);const t=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()+t),n===e.toISOString().slice(0,10)}function E(){const n=document.querySelector(".project-container"),e=document.createElement("div");e.classList.add("overlay"),e.style.display="block",n.insertAdjacentHTML("beforeend",'\n    <div class="project-form">\n        <form class="add-project-form" id="add-project-form">\n            <fieldset>\n                <label for="project-name">Project Name</label>\n                <input type="text" id="project-name" name="project-name" autocomplete="off" required spellcheck="false">\n                <div>\n                    <button type="submit" class="add-project-button">Add Project</button>\n                    <button type="button" class="cancel-project-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    </div>  \n    '),n.appendChild(e),document.getElementById("add-project-form").addEventListener("submit",(n=>{n.preventDefault(),x(document.getElementById("project-name").value),L()})),document.querySelector(".cancel-project-button").addEventListener("click",L)}function L(){document.querySelector(".project-container").innerHTML=""}function I(){let n=document.querySelector(".details-container"),e=document.getElementById("overlay");n.remove(),e.style.display="none"}function B(){let n=document.getElementById("edit-task-form");document.getElementById("overlay").style.display="none",n.remove()}function S(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay");M("project"),n.classList.add("open-add-task-form"),e.style.display="block"}function T(){let n=document.getElementById("add-task-form"),e=document.getElementById("overlay"),t=document.getElementById("project");n.reset(),t.innerHTML="",n.classList.remove("open-add-task-form"),e.style.display="none"}function M(n){const e=document.getElementById(n);for(const n of b){const t=document.createElement("option");t.value=n.name,t.textContent=n.name,e.appendChild(t)}}document.addEventListener("DOMContentLoaded",(function(){x("General"),function(){const n=document.querySelector(".main-right"),e=document.createElement("div");e.id="overlay",e.className="overlay",n.innerHTML='\n        <button class="add-task">\n            <i class="fa-solid fa-plus fa-beat-fade"></i>\n            Add Task\n        </button>\n        <div class="task-list"></div>\n    ',n.insertAdjacentHTML("beforeend",'\n        <form class="add-task-form" id="add-task-form">\n            <h1>Add Task</h1>\n            <fieldset>\n                <label for="task-name">Task Name</label>\n                <input type="text" id="task-name" name="task-name" autocomplete="off" required spellcheck="false">\n\n                <label for="description">Description</label>\n                <input type="text" id="description" name="description" autocomplete="off" spellcheck="false">\n\n                <label for="due-date">Due Date</label>\n                <input type="date" id="due-date" name="due-date">\n\n                <label for="priority">Priority</label>\n                <select id="priority" name="priority">\n                    <option value="Low">Low</option>\n                    <option value="Medium" selected>Medium</option>\n                    <option value="High">High</option>\n                </select>\n\n                <label for="project">Project</label>\n                <select id="project" name="project">\n\n                </select>\n\n                <div>\n                    <button type="submit" class="add-task-button">Add Task</button>\n                    <button type="button" class="cancel-task-button">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    '),n.appendChild(e)}(),document.querySelector(".add-task").addEventListener("click",S),document.querySelector(".cancel-task-button").addEventListener("click",T),document.getElementById("add-task-form").addEventListener("submit",k),document.querySelector(".projects").addEventListener("click",E),document.querySelector(".today").addEventListener("click",w)}))})()})();