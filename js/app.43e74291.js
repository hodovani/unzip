!function(){"use strict";var e={3211:function(e,n,t){t(9554),t(8309),t(7941),t(1539),t(8674),t(4747),t(5666);var r=t(3828),o=t(4586);function i(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}r.X.init({workerUrl:"public/worker-bundle.js"});var a=document.getElementById("fileOutput"),c=document.getElementById("fileInput"),u=document.getElementById("treeView");function l(e){var n=e.node,t=e.liId,r=e.name,i=document.getElementById(t);if(n instanceof File){var c=document.createElement("li");c.addEventListener("click",(function(e){e.stopPropagation()})),c.innerText=n.name,c.addEventListener("click",(function(){var e=new FileReader;e.onload=function(e){a.textContent=e.target.result},e.readAsText(n)})),i.appendChild(c)}else{var u=(0,o.Z)(),s=document.createElement("ul");s.classList.add("nested"),s.id=u;var d=document.createElement("li");i.appendChild(d),d.classList.add("folder"),d.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),d.childNodes.forEach((function(e){console.log(e),e.classList.contains("nested")&&e.classList.toggle("active")}))}));var f=document.createElement("span");f.innerText=r,d.appendChild(f),d.appendChild(s);var p=Object.keys(n);if(p.length>0)p.forEach((function(e){l({node:n[e],liId:u,name:e})}));else{var v=document.createElement("span");v.innerHTML="<i>Empty folder</i>",i.appendChild(v)}}}c.addEventListener("change",function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.currentTarget.files[0],e.next=3,r.X.open(t);case 3:return o=e.sent,e.next=6,o.extractFiles();case 6:i=e.sent,u.innerHTML="",l({node:i,liId:"treeView",name:t.name});case 9:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}())}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={143:0},n=[[3211,210]],r=function(){};function o(){for(var r,o=0;o<n.length;o++){for(var i=n[o],a=!0,c=1;c<i.length;c++){var u=i[c];0!==e[u]&&(a=!1)}a&&(n.splice(o--,1),r=t(t.s=i[0]))}return 0===n.length&&(t.x(),t.x=function(){}),r}t.x=function(){t.x=function(){},a=a.slice();for(var e=0;e<a.length;e++)i(a[e]);return(r=o)()};var i=function(o){for(var i,a,u=o[0],l=o[1],s=o[2],d=o[3],f=0,p=[];f<u.length;f++)a=u[f],t.o(e,a)&&e[a]&&p.push(e[a][0]),e[a]=0;for(i in l)t.o(l,i)&&(t.m[i]=l[i]);for(s&&s(t),c(o);p.length;)p.shift()();return d&&n.push.apply(n,d),r()},a=self.webpackChunkwebpack_starter=self.webpackChunkwebpack_starter||[],c=a.push.bind(a);a.push=i}(),t.x()}();
//# sourceMappingURL=app.43e74291.js.map