parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"fx15":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e=function(e){return t({},e.location,{state:e.history.state,key:e.history.state&&e.history.state.key||"initial"})},n=function(n,r){var o=[],i=e(n),a=!1,s=function(){};return{get location(){return i},get transitioning(){return a},_onTransitionComplete:function(){a=!1,s()},listen:function(t){o.push(t);var r=function(){i=e(n),t({location:i,action:"POP"})};return n.addEventListener("popstate",r),function(){n.removeEventListener("popstate",r),o=o.filter(function(e){return e!==t})}},navigate:function(r){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=u.state,l=u.replace,p=void 0!==l&&l;c=t({},c,{key:Date.now()+""});try{a||p?n.history.replaceState(c,null,r):n.history.pushState(c,null,r)}catch(f){n.location[p?"replace":"assign"](r)}i=e(n),a=!0;var v=new Promise(function(t){return s=t});return o.forEach(function(t){return t({location:i,action:"PUSH"})}),v}}},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=0,n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener:function(t,e){},removeEventListener:function(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState:function(t,o,i){var a=i.split("?"),s=a[0],u=a[1],c=void 0===u?"":u;e++,n.push({pathname:s,search:c}),r.push(t)},replaceState:function(t,o,i){var a=i.split("?"),s=a[0],u=a[1],c=void 0===u?"":u;n[e]={pathname:s,search:c},r[e]=t}}}},o=!("undefined"==typeof window||!window.document||!window.document.createElement),i=function(){return o?window:r()},a=n(i()),s=a.navigate;exports.globalHistory=a,exports.navigate=s,exports.createHistory=n,exports.createMemorySource=r;
},{}],"a8+i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(t){function n(){var e,t,o;r(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return u(t,(o=t=u(this,(e=c(n)).call.apply(e,[this].concat(i))),t.state={photos:[],active:0},t.handleIndexClick=function(e){t.setState({active:+e.target.dataset.index})},o))}return l(n,e.default.Component),a(n,[{key:"render",value:function(){var t=this,n=this.state,r=n.photos,o=n.active;return e.default.createElement("div",{className:"carousel"},e.default.createElement("img",{src:r[o].value,alt:"primary animal"}),e.default.createElement("div",{className:"carousel-smaller"},r.map(function(n,r){return e.default.createElement("img",{onClick:t.handleIndexClick,key:n.value,"data-index":r,src:n.value,className:r===o?"active":"",alt:"animal thumbnail"})})))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.media,n=[];return t&&t.photos&&t.photos.photo&&(n=t.photos.photo.filter(function(e){return"pn"===e["@size"]})),{photos:n}}}]),n}(),p=s;exports.default=p;
},{"react":"1n8/"}],"+Dtd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=require("react-dom");function o(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,o){return t&&u(e.prototype,t),o&&u(e,o),e}function c(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(o){function n(e){return r(this,n),c(this,f(n).call(this,e))}return a(n,e.default.Component),i(n,[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),this.modalRoot=document.getElementById("modal"),modalRoot.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.modalRoot.removeChild(this.el)}},{key:"render",value:function(){return(0,t.createPortal)(this.props.children,this.el)}}]),n}(),y=s;exports.default=y;
},{"react":"1n8/","react-dom":"NKHc"}],"XGSj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),t=l(require("petfinder-client")),n=l(require("react-loadable")),r=require("@reach/router/lib/history"),o=l(require("./Carousel")),a=l(require("./Modal"));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=(0,t.default)({key:"e83a921f25913b55e6476026f418f6c0",secret:"57963c87ebd39234abf06a800e304a82"}),h=function(){return e.default.createElement("h1",null,"loading content ...")},g=(0,n.default)({loader:function(){return require("_bundle_loader")(require.resolve("./AdoptModalContent"))},loading:h}),v=function(t){function n(){var e,t,r;i(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return d(t,(r=t=d(this,(e=p(n)).call.apply(e,[this].concat(a))),t.state={loading:!0,showModal:!1},t.toggleModal=function(){return t.setState({showModal:!t.state.showModal})},r))}return b(n,e.default.Component),f(n,[{key:"componentDidMount",value:function(){var e=this;m.pet.get({output:"full",id:this.props.id}).then(function(t){var n,r=t.petfinder.pet;n=Array.isArray(r.breeds.breed)?r.breeds.breed.join(", "):r.breeds.breed,e.setState({name:r.name,animal:r.animal,location:"".concat(r.contact.city,",").concat(r.contact.state),description:r.description,media:r.media,breed:n,loading:!1})}).catch(function(e){(0,r.navigate)("/")})}},{key:"render",value:function(){if(this.state.loading)return e.default.createElement("h1",null,"loading ...");var t=this.state,n=t.name,r=t.animal,l=t.breed,u=t.description,i=t.location,c=t.media,f=t.showModal;return e.default.createElement("div",{className:"details"},e.default.createElement(o.default,{media:c}),e.default.createElement("div",null,e.default.createElement("h1",null,n),e.default.createElement("h2",null,r," - ",l," - ",i),e.default.createElement("button",{onClick:this.toggleModal},"Adopt ",n),e.default.createElement("p",null,u),f?e.default.createElement(a.default,null,e.default.createElement(g,{toggleModal:this.toggleModal,name:n})):null))}}]),n}(),E=v;exports.default=E;
},{"react":"1n8/","petfinder-client":"9HC7","react-loadable":"NEjq","@reach/router/lib/history":"fx15","./Carousel":"a8+i","./Modal":"+Dtd","_bundle_loader":"21/1","./AdoptModalContent":[["AdoptModalContent.17d9576a.js","TNhG"],"AdoptModalContent.17d9576a.map","TNhG"]}],"3Fhe":[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],"21/1":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"3Fhe"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("21/1");b.register("js",require("Yi9z"));b.load([]).then(function(){require("XGSj");});
},{}]},{},[0], null)
//# sourceMappingURL=dist/Details.f304a5e8.map