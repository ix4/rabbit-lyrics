!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});n(1);class r{constructor(e){this.element=e.element,this.element.classList.contains("rabbit-lyrics-enabled")||(this.element.classList.add("rabbit-lyrics"),e.mediaElement?this.mediaElement=e.mediaElement:this.mediaElement=this.findMediaElementBefore(this.element),e.viewMode?this.viewMode=e.viewMode:this.viewMode="default",this.element.classList.add("rabbit-lyrics-"+this.viewMode),"full"!==this.viewMode&&e.height&&(this.element.style.height=e.height+"px"),e.alignment&&(this.element.style.textAlign=e.alignment),this.scrollerIntervalDuration=200,this.scrollerIntervalStep=10,this.lineElements=[],this.synchronize=this.synchronize.bind(this),this.scroll=this.scroll.bind(this),this.parseLyrics(),this.enableLyrics())}findMediaElementBefore(e){if(!e)return null;let t=e.previousElementSibling;for(;t;){if("audio"===t.tagName.toLowerCase()||"video"===t.tagName.toLowerCase())return t;{const e=t.querySelector("audio, video");if(e)return e[e.length-1]}t=t.previousElementSibling}return e.parentElement?this.findMediaElementBefore(e.parentElement):null}parseLyrics(){if(!this.element)return this;let e=this.element.textContent.trim().split("\n");this.element.textContent="";let t=0,n=[];for(let r=0;r<e.length;r++){let i=document.createElement("div");i.className="line",this.element.appendChild(i),this.lineElements.push(i);let o=e[r].trim(),s=o.match(/\[\d+:\d+\.\d+\]/g)||[],l=o.match(/^\[\d+:\d+\.\d+\]/g)||[],a=o.match(/\[\d+:\d+\.\d+\]$/g)||[];s.length&&n.length&&(n.forEach(function(e){e.dataset.end=this.decodeTimeStamp(s[0])},this),n=[]),l.length>0?(i.dataset.start=this.decodeTimeStamp(l[0]),t=this.decodeTimeStamp(l[0])):i.dataset.start=t,a.length>0?(i.dataset.end=this.decodeTimeStamp(a[0]),t=this.decodeTimeStamp(a[0])):(i.dataset.end=1/0,n.push(i)),(o=o.replace(/\[\d+:\d+\.\d+\]/g,""))||(o="&nbsp;"),i.innerHTML=o}return this}enableLyrics(){return this.mediaElement?(this.element.scrollTop=0,this.mediaElement.ontimeupdate=this.synchronize,this.element.classList.add("rabbit-lyrics-enabled"),this):this}synchronize(){let e=this.mediaElement.currentTime,t=!1,n=[];if(this.lineElements.forEach(r=>{e>=r.dataset.start&&e<=r.dataset.end?(r.classList.contains("active")||(t=!0,r.classList.add("active")),n.push(r)):r.classList.contains("active")&&(t=!0,r.classList.remove("active"))}),t&&n.length>0){let e=(n[0].offsetTop+n[n.length-1].offsetTop+n[n.length-1].offsetHeight)/2;this.scrollTop=e-this.element.clientHeight/2,clearInterval(this.scrollerInterval),this.scrollerTimer=this.scrollerIntervalDuration,this.scrollerInterval=setInterval(this.scroll,this.scrollerIntervalStep)}}scroll(){if(this.scrollerTimer<=0)return void clearInterval(this.scrollerInterval);let e=(this.scrollTop-this.element.scrollTop)*this.scrollerIntervalStep/this.scrollerTimer;this.element.scrollTop+=e,this.scrollerTimer-=this.scrollerIntervalStep}decodeTimeStamp(e){if(!e||"string"!=typeof e)return 0;let t;return(t=e.match(/\[(\d+):(\d+):(\d+\.\d+)\]/))&&4===t.length?60*parseInt(t[1])*60+60*parseInt(t[2])+parseFloat(t[3]):(t=e.match(/\[(\d+):(\d+\.\d+)\]/))&&3===t.length?60*parseInt(t[1])+parseFloat(t[2]):0}}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("rabbit-lyrics");for(let t=0;t<e.length;t++){let n=e[t],i=document.querySelector(n.dataset.media),o=i?i[0]:null,{viewMode:s,height:l,alignment:a}=n.dataset;new r({element:n,mediaElement:o,viewMode:s,height:l,alignment:a})}},!1)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"/* Framed view mode (default) */\n\n.rabbit-lyrics {\n  position: relative; /* Must be relative, otherwise cannot calculate offset */\n  height: 16.5em;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.rabbit-lyrics .line {\n  min-height: 1.5em;\n}\n\n.rabbit-lyrics .line.active {\n  color: #41bdff;\n}\n\n/* Mini view mode */\n\n.rabbit-lyrics-mini {\n  height: 1.5em;\n  overflow-y: hidden;\n}\n\n.rabbit-lyrics-mini .line {\n  display: none;\n}\n\n.rabbit-lyrics-mini .line.active {\n  display: inline-block;\n}\n\n/* Full view mode, no scroll bar */\n\n.rabbit-lyrics-full {\n  height: auto;\n  overflow-y: initial;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,l=0,a=[],c=n(5);function u(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(v(i.parts[s],t))}else{var l=[];for(s=0;s<i.parts.length;s++)l.push(v(i.parts[s],t));r[i.id]={id:i.id,refs:1,parts:l}}}}function d(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function f(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),a.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertAt.before,n);n.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=a.indexOf(e);t>=0&&a.splice(t,1)}function p(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var a=l++;n=s||(s=p(t)),r=y.bind(null,n,a,!1),i=y.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=c(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(s),l&&URL.revokeObjectURL(l)}.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return u(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var s=n[o];(l=r[s.id]).refs--,i.push(l)}e&&u(d(e,t),t);for(o=0;o<i.length;o++){var l;if(0===(l=i[o]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete r[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]);