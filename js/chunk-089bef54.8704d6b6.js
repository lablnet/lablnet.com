(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-089bef54"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},"25bd":function(t,e,r){"use strict";var n=r("7a23");Object(n["w"])("data-v-065a59b2");var o={key:0},a=Object(n["h"])('<div class="flex justify-center items-center" data-v-065a59b2><div class="loader bg-transparent p-5 rounded-full flex space-x-3" data-v-065a59b2><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-065a59b2></div><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-065a59b2></div><div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce" data-v-065a59b2></div></div></div>',1),i=[a];function c(t,e){return t.loading?(Object(n["t"])(),Object(n["f"])("div",o,i)):Object(n["e"])("",!0)}Object(n["u"])();var u={name:"LablnetLoader",props:{loading:Boolean}},s=(r("53ab"),r("d959")),l=r.n(s);const f=l()(u,[["render",c],["__scopeId","data-v-065a59b2"]]);e["a"]=f},"53ab":function(t,e,r){"use strict";r("f9ce")},"619d":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"flex-none py-10 px-5 container bg-gray-200 dark:bg-gray-900 mt-5 mb-5"},a=Object(n["g"])("h3",{class:"subtitle"},"Quotes.",-1),i=Object(n["g"])("p",{class:"dark:text-gray-300"},"These are quotes written by me in different situations.",-1),c={class:"mt-3 mb-3"},u={key:0,class:"grid grid-cols-1 md:grid-cols-2 gap-5"},s={class:"w-full mb-10"},l=Object(n["g"])("div",{class:"text-3xl text-black dark:text-gray-300 text-left leading-tight h-3"}," “ ",-1),f={class:"text-sm text-gray-600 dark:text-gray-300 text-center px-5"},h=Object(n["g"])("div",{class:"text-3xl text-black dark:text-gray-300 text-right leading-tight h-3 -mt-3"}," ” ",-1),d={key:1},p=Object(n["g"])("p",null,"Something went wrong, unable to load.",-1),g=[p];function v(t,e){var r=Object(n["B"])("LablnetLoader");return Object(n["t"])(),Object(n["f"])("section",o,[a,i,Object(n["g"])("span",c,[Object(n["j"])(r,{loading:t.loading},null,8,["loading"])]),t.error?(Object(n["t"])(),Object(n["f"])("div",d,g)):(Object(n["t"])(),Object(n["f"])("div",u,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(t.data,(function(t,e){return Object(n["t"])(),Object(n["f"])("div",{class:"w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 text-gray-800 mt-5 dark:bg-gray-700 dark:text-gray-300",key:e},[Object(n["g"])("div",s,[l,Object(n["g"])("p",f,Object(n["D"])(t["title"]),1),h])])})),128))]))])}var y=r("1da1"),b=(r("d3b7"),r("96cf"),r("25bd")),m={name:"Quotes",components:{LablnetLoader:b["a"]},data:function(){return{data:[],loading:!0,error:!1}},mounted:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadData:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://lablnet.github.io/portfolio-data/data/quotes.json?timestamp=".concat((new Date).getTime())).then((function(t){return t.json()})).then(function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.data=r,t.loading=!1;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){this.error=!0}));case 1:case"end":return e.stop()}}),e)})))()}}},w=r("d959"),x=r.n(w);const j=x()(m,[["render",v]]);e["default"]=j},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=k(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",g={};function v(){}function y(){}function b(){}var m={};u(m,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(G([])));x&&x!==r&&n.call(x,a)&&(m=x);var j=b.prototype=v.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function k(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return N()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=b,u(j,"constructor",b),u(b,"constructor",y),y.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(L.prototype),u(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(j),u(j,c,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},f9ce:function(t,e,r){}}]);
//# sourceMappingURL=chunk-089bef54.8704d6b6.js.map