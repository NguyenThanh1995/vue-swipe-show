!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e,i){"use strict";i.r(e);var n,a=i(1),r=i.n(a);for(n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e.default=r.a},function(t,e,i){"use strict";function n(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t){var e=t.type,i=t.clientX,a=t.clientY,r=t.changedTouches;return e.match(/^touch/i)?n(r):e.match(/^mouse/i)?[{clientX:i,clientY:a,identifier:-1}]:void 0}function o(t){return Array.isArray(t)?t:[t]}Object.defineProperty(e,"__esModule",{value:!0});var c,s,h=!1;try{var l=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("testPassive",null,l),window.removeEventListener("testPassive",null,l)}catch(t){}function u(){return c.apply(this,arguments)}function p(){return s.apply(this,arguments)}e.default={listeners:[],props:{tag:{type:String,default:"div"},type:{type:String,default:"left"},areaActive:{type:[Number],default:10},speedActive:{type:Number,default:.15},active:{type:Boolean,default:!1},classActive:{type:[String,Array,Object],default:""},classAnimating:{type:[String,Array,Object],default:""},event:{type:Array,default:function(){return[["touchstart","mousedown"],["touchmove","mousemove"],["touchend","mouseup"]]}},disabledAuto:{type:Boolean,default:!1},noTransition:Boolean,timing:{type:String,default:"ease"},duration:{type:Number,default:.4},preventDefault:{type:Boolean,default:!0},stopPropagation:Boolean,useTransform:Boolean,clickable:Boolean},data:function(){return{top:void 0,left:void 0,activeLocap:(void 0).active,animating:!1}},computed:{width:function(){return this.$el?this.$el.offsetWidth:0},height:function(){return this.$el?this.$el.offsetHeight:0},innerWidth:(s=function(){return innerWidth},p.toString=function(){return s.toString()},p),innerHeight:(c=function(){return innerHeight},u.toString=function(){return c.toString()},u),transition:function(){if(this.animating&&!this.noTransition){if(this.useTransform)return"transform ".concat(this.duration,"s ").concat(this.timing);if(this.type.match(/^left|right$/i))return"left ".concat(this.duration,"s ").concat(this.timing);if(this.type.match(/^top|bottom$/i))return"top ".concat(this.duration,"s ").concat(this.timing)}},transform:function(){return"".concat(void 0!==this.left?"translateX("+this.left+")":""," ").concat(void 0!==this.top?"translateY("+this.top+")":"")}},methods:{setDefaults:function(){switch(this.type.toUpperCase()){case"LEFT":this.top=void 0,this.left="".concat(this.activeLocap?0:-this.width,"px");break;case"RIGHT":this.top=void 0,this.left="".concat(this.activeLocap?this.innerWidth-this.width:this.innerWidth,"px");break;case"TOP":this.left=void 0,this.top="".concat(this.activeLocap?0:-this.height,"px");break;case"BOTTOM":this.left=void 0,this.top="".concat(this.activeLocap?this.innerHeight-this.height:this.innerHeight,"px")}},emitProgress:function(){switch(this.type.toUpperCase()){case"LEFT":this.$emit("update:left-area",parseFloat(this.left)+this.width).$emit("progress",100*(1+parseFloat(this.left)/this.width));break;case"RIGHT":this.$emit("update:right-area",this.innerWidth-parseFloat(this.left)).$emit("progress",(this.innerWidth-parseFloat(this.left))/this.width*100);break;case"TOP":this.$emit("update:top-area",parseFloat(this.top)+this.height),this.$emit("progress",100*(1+parseFloat(this.top)/this.height));break;case"BOTTOM":this.$emit("update:bottom-area",this.innerHeight-parseFloat(this.top)),this.$emit("progress",(this.innerHeight-parseFloat(this.top))/this.height*100)}},offAllEvent:function(){this.$options.listeners.forEach((function(t){return t.el.removeEventListener(t.name,t.listener,h?{passive:!0}:void 0)}))}},watch:{type:"setDefaults",active:function(t){this.activeLocap=t,this.animating=!0,this.setDefaults()},activeLocap:function(t){this.$emit("update:active",t)},top:"emitProgress",left:"emitProgress",animating:function(t){this.$emit("update:animating",t)},event:{handler:function(t){var e=this;function i(t){s=r(t).find((function(t){var i=!1;switch(e.type.toUpperCase()){case"LEFT":i=e.activeLocap?t.clientX<e.width:t.clientX<e.areaActive;break;case"RIGHT":i=e.activeLocap?e.innerWidth-t.clientX<e.width:e.innerWidth-t.clientX<e.areaActive;break;case"TOP":i=e.activeLocap?t.clientY<e.height:t.clientY<e.areaActive;break;case"BOTTOM":i=e.activeLocap?e.innerHeight-t.clientY<e.height:e.innerHeight-t.clientY<e.areaActive}if(i)return l=performance.now(),!0})),e.animating=!1}function n(t){var i=r(t).find((function(t){return!s||t.identifier===s.identifier}));if(!e.activeLocap&&s&&i)switch(e.type.toUpperCase()){case"LEFT":e.left="".concat(Math.min(Math.max(i.clientX-s.clientX-e.width,-e.width),0),"px");break;case"RIGHT":e.left="".concat(Math.max(Math.min(e.innerWidth-(s.clientX-i.clientX),e.innerWidth),e.innerWidth-e.width),"px");break;case"TOP":e.top="".concat(Math.min(Math.max(i.clientY-s.clientY-e.height,-e.height),0),"px");break;case"BOTTOM":e.top="".concat(Math.max(Math.min(e.innerHeight-(s.clientY-i.clientY),e.innerHeight),e.innerHeight-e.height),"px")}if(e.activeLocap&&i)switch(e.type.toUpperCase()){case"LEFT":i.clientX<e.width&&(s=s||i,e.left="".concat(Math.min(Math.max(i.clientX-s.clientX,-e.width),0),"px"));break;case"RIGHT":e.innerWidth-i.clientX<e.width&&(s=s||i,e.left="".concat(Math.max(Math.min(e.innerWidth-(s.clientX-i.clientX)-e.width,e.innerWidth),e.innerWidth-e.width),"px"));break;case"TOP":i.clientY<e.height&&(s=s||i,e.top="".concat(Math.min(Math.max(i.clientY-s.clientY,-e.height),0),"px"));break;case"BOTTOM":e.innerHeight-i.clientY<e.height&&(s=s||i,e.top="".concat(Math.max(Math.min(e.innerHeight-(s.clientX-i.clientX)-e.height,e.innerHeight),e.innerHeight-e.height),"px"))}if(s&&i)try{e.stopPropagation&&e.stopPropagation(),e.preventDefault&&t.preventDefault()}catch(t){}}function a(t){e.animating=!0,setTimeout((function(){if(s){var i=r(t).find((function(t){return t.identifier===s.identifier}));if(i){var n=i.clientX-s.clientX,a=i.clientY-s.clientY,o=performance.now()-l,c=n/o,h=a/o,u=[parseFloat(getComputedStyle(e.$el).top),parseFloat(getComputedStyle(e.$el).left)],p=u[0],f=u[1];switch(e.type.toUpperCase()){case"LEFT":Math.abs(c)>=e.speedActive?(e.activeLocap=0<c,e.left=c<0?"".concat(-e.width,"px"):"0"):(e.activeLocap=-f<=e.width/2,e.left=-f>e.width/2?"".concat(-e.width,"px"):"0");break;case"RIGHT":Math.abs(c)>=e.speedActive?(e.activeLocap=c<0,e.left="".concat(c<0?e.innerWidth-e.width:e.innerWidth,"px")):(e.activeLocap=e.innerWidth-f>e.width/2,e.left=e.innerWidth-f>e.width/2?"".concat(e.innerWidth-e.width,"px"):"".concat(e.innerWidth,"px"));break;case"TOP":Math.abs(h)>=e.speedActive?(e.activeLocap=0<h,e.top=h<0?"".concat(-e.height,"px"):"0"):(e.activeLocap=-p<=e.height/2,e.top=-p>e.height/2?"".concat(-e.height,"px"):"0");break;case"BOTTOM":Math.abs(h)>=e.speedActive?(e.activeLocap=h<0,e.top="".concat(h<0?e.innerHeight-e.height:e.innerHeight,"px")):(e.activeLocap=e.innerHeight-p>e.height/2,e.top=e.innerHeight-p>e.height/2?"".concat(e.innerHeight-e.height,"px"):"".concat(e.innerHeight,"px"))}}}}))}this.offAllEvent();var c,s={},l=null;this.clickable&&(c=function(t){var i=t.clientX,n=t.clientY;switch(e.type.toUpperCase()){case"LEFT":i>e.width&&(e.animating=!0,e.activeLocap=!1,e.setDefaults());break;case"RIGHT":i<e.innerWidth-e.width&&(e.animating=!0,e.activeLocap=!1,e.setDefaults());break;case"TOP":n>e.height&&(e.animating=!0,e.activeLocap=!1,e.setDefaults());break;case"BOTTOM":n<e.innerHeight-e.height&&(e.animating=!0,e.activeLocap=!1,e.setDefaults())}},document.addEventListener("click",c),this.$options.listeners.push({el:document,name:"click",listener:c})),o(t[0]).forEach((function(t){window.addEventListener(t,i),e.$options.listeners.push({name:t,el:window,listener:i},h?{passive:!0}:void 0)})),o(t[1]).forEach((function(t){window.addEventListener(t,n,h?{passive:!0}:void 0),e.$options.listeners.push({name:t,el:window,listener:n})})),o(t[2]).forEach((function(t){window.addEventListener(t,a),e.$options.listeners.push({name:t,el:window,listener:a},h?{passive:!0}:void 0)}))},immediate:!0}},mounted:function(){this.setDefaults()},beforeDestroy:function(){this.offAllEvent()}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"div",class:[t.activeLocap?t.classActive:[],t.animating?t.classAnimating:[]],style:t.disabledAuto?{}:t.useTransform?{transform:t.transform,transition:t.transition}:{top:t.top,left:t.left,transition:t.transition}},[t._t("default")],2)},a=[];n._withStripped=!0},function(t,e,i){"use strict";function n(t,e,i,n,a,r,o,c){var s,h,l,u="function"==typeof t?t.options:t;return e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),o?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=s):a&&(s=c?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),s&&(u.functional?(u._injectStyles=s,h=u.render,u.render=function(t,e){return s.call(e),h(t,e)}):(l=u.beforeCreate,u.beforeCreate=l?[].concat(l,s):[s])),{exports:t,options:u}}i.d(e,"a",(function(){return n}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=(n=i(5))&&n.__esModule?n:{default:n};e.default={component:a.default,install:function(t){t.component("vue-swipe-show",this.component)}}},function(t,e,i){"use strict";i.r(e);var n,a=i(2),r=i(0);for(n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);var o=i(3),c=Object(o.a)(r.default,a.a,a.b,!1,null,null,null);c.options.__file="src/index.vue",e.default=c.exports}]);