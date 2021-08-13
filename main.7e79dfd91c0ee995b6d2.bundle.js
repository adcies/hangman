!function(){"use strict";!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=new WeakSet,n=function(){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.add(this),this.initialNumberOfAttempts=null,this.winsInfo=document.querySelector(".statistics__wins-info"),this.lossesInfo=document.querySelector(".statistics__losses-info"),this.averageFailedAttemptsInfo=document.querySelector(".statistics__attempts-info"),this.numberOfWins=0,this.numberOfLosses=0,this.attempts=[]}var a,s;return a=n,(s=[{key:"setInitialNumberOfAttempts",value:function(t){this.initialNumberOfAttempts=t}},{key:"addAverageFailedAttempts",value:function(t){if("number"==typeof this.initialNumberOfAttempts&&isFinite(this.initialNumberOfAttempts)){var n=this.initialNumberOfAttempts-t;console.log(this.initialNumberOfAttempts),this.attempts.push(n);var a=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(this,e,i).call(this,this.attempts);this.averageFailedAttemptsInfo.textContent=+a.toFixed(2)}}},{key:"incrementLosses",value:function(){this.lossesInfo.textContent=++this.numberOfLosses}},{key:"incrementWins",value:function(){this.winsInfo.textContent=++this.numberOfWins}},{key:"renderInitialValues",value:function(){this.winsInfo.textContent=this.numberOfWins,this.lossesInfo.textContent=this.numberOfLosses,this.averageFailedAttemptsInfo.textContent="-"}}])&&t(a.prototype,s),n}();function i(t){var e=0;return t.forEach((function(t){e+=t})),e/t.length}var a=JSON.parse('{"clothes":["blouse","gloves","hoodie","bracelet","sneakers","underwear","cardigan","kerchief","sweatshirt","suspenders"],"food":["brownie","spinach","tomato","cheesecake","lasagna","cupcake","raspberries","mustard","watermelon","crackers"],"sport":["bowling","boxing","triathlon","football pitch","fitness","surfing","referee","basketball","volleyball","handball"],"countries":["tanzania","new zealand","azerbaijan","united arab emirates","indonesia","ethiopia","belarus","lithuania","belgium","scotland"],"brands":["ferrari","nescafe","samsung","amazon","microsoft","heineken","gillette","adidas","starbucks","oracle"]}');function s(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var c=new WeakSet,u=new WeakSet,h=new WeakSet,f=new WeakSet,d=new WeakSet,m=new WeakSet,p=new WeakSet,b=new WeakSet,v=new WeakSet,y=new WeakSet,w=new WeakSet,S=new WeakSet,k=new WeakSet,A=new WeakSet,g=new WeakSet,C=new WeakSet;function O(t){null===this.numberOfAttempts&&this.statistics.setInitialNumberOfAttempts(t),this.numberOfAttempts=t,this.attemptsContainer.textContent=this.numberOfAttempts}function _(t){document.querySelectorAll(".board__letter").forEach((function(e){return e.disabled=t}))}function W(t){var e=document.createElement("div");t.forEach((function(t){e.classList.add(t)})),this.phraseContainer.appendChild(e)}function x(){var t=this,e=s(this.phrase);this.phraseContainer.textContent=null,e.forEach((function(e){var n=" "===e?["phrase__letter","phrase__letter-space"]:["phrase__letter"];l(t,h,W).call(t,n)}))}function E(t){return t[Math.floor(Math.random()*t.length)]}function I(){var t=this.select.value;return a[t]}function q(){var t=l(this,m,I).call(this),e=l(this,d,E).call(this,t);this.phrase=e}function L(t){t.preventDefault(),l(this,p,q).call(this),l(this,f,x).call(this),l(this,u,_).call(this,!1),l(this,c,O).call(this,5)}function N(t,e){var n=document.createElement("button");n.classList.add("board__letter"),n.textContent=t,n.disabled=e,this.alphabetBoard.appendChild(n)}function F(){for(var t=65;t<=90;t++){var e=String.fromCharCode(t);l(this,v,N).call(this,e,!0)}}function j(t){var e=s(this.phrase),n=document.querySelectorAll(".phrase__letter"),i=!1;return e.forEach((function(e,a){t.textContent===e.toUpperCase()&&(n[a].textContent=t.textContent,i||(i=!0))})),i}function T(){var t=s(this.phrase),e=document.querySelectorAll(".phrase__letter");t.forEach((function(t,n){e[n].textContent=t.toUpperCase()}))}function z(){if(0===this.numberOfAttempts)return l(this,u,_).call(this,!0),this.statistics.incrementLosses(),l(this,S,T).call(this),alert("Game is over. You loose!"),!0;for(var t=Array.from(document.querySelectorAll(".phrase__letter")),e=!0,n=0;n<t.length;n++)if(""===t[n].textContent){e=!1;break}return!!e&&(l(this,u,_).call(this,!0),this.statistics.incrementWins(),alert("You win. Congratulations!"),!0)}function M(t){var e=t.target;e.disabled=!0,l(this,w,j).call(this,e)||l(this,c,O).call(this,--this.numberOfAttempts),l(this,k,z).call(this)&&this.statistics.addAverageFailedAttempts(this.numberOfAttempts)}function U(){var t=this;document.querySelectorAll(".board__letter").forEach((function(e){e.addEventListener("click",(function(e){l(t,A,M).call(t,e)}))}))}function B(){var t=this;this.form.addEventListener("submit",(function(e){l(t,b,L).call(t,e)})),l(this,g,U).call(this)}(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),C.add(this),g.add(this),A.add(this),k.add(this),S.add(this),w.add(this),y.add(this),v.add(this),b.add(this),p.add(this),m.add(this),d.add(this),f.add(this),h.add(this),u.add(this),c.add(this),this.statistics=new n,this.form=document.querySelector("form"),this.select=document.querySelector("select"),this.alphabetBoard=document.querySelector(".board"),this.phraseContainer=document.querySelector(".phrase"),this.attemptsContainer=document.querySelector(".game__attempts"),this.numberOfAttempts=null,this.phrase=null}var e,i;return e=t,(i=[{key:"init",value:function(){l(this,y,F).call(this),this.statistics.renderInitialValues(),l(this,C,B).call(this)}}])&&o(e.prototype,i),t}())).init()}()}();