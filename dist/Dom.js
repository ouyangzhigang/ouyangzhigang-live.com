!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("core-js/modules/es6.regexp.replace")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es6.regexp.replace"],t):t((e=e||self).Dom={})}(this,function(e){"use strict";e.$$=function(e){return document.querySelector(e)},e.elementContains=function(e,t){return e!==t&&e.contains(t)},e.escapeHTML=function(e){e.replace(/[&<>'"]/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e})},e.getStyle=function(e,t){return getComputedStyle(e)[t]},e.hideTag=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return[].concat(t).forEach(function(e){return e.style.display="none"})},Object.defineProperty(e,"__esModule",{value:!0})});