!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("core-js/modules/es6.regexp.replace"),require("core-js/modules/es6.regexp.split"),require("core-js/modules/es6.regexp.search"),require("core-js/modules/es6.regexp.match"),require("core-js/modules/es6.regexp.constructor")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es6.regexp.replace","core-js/modules/es6.regexp.split","core-js/modules/es6.regexp.search","core-js/modules/es6.regexp.match","core-js/modules/es6.regexp.constructor"],t):t((e=e||self).Bower={})}(this,function(exports){"use strict";var currentURL=function(){return window.location.href};function getUrlParam(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,o=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=null;return null!=(n=null==t?window.location.search.substr(1).match(o):t.substr(1).match(o))?decodeURIComponent(n[2]):null}function getUrlParams(e){for(var t=location.href.split("?")[1].split("&"),o={},n=0;n<t.length;n++){var r=t[n].split("="),l=r[0],c=r[1];o[l]=c}return o[e]}function funcUrlDel(e){var t=location,o=t.origin+t.pathname+"?",n=t.search.substr(1);if(-1<n.indexOf(e)){for(var r={},l=n.split("&"),c=0;c<l.length;c++)l[c]=l[c].split("="),r[l[c][0]]=l[c][1];return delete r[e],o+JSON.stringify(r).replace(/["{}]/g,"").replace(/:/g,"").replace(/,/g,"&")}}function getClientHeight(){return document.body.clientHeight&&document.documentElement.clientHeight?document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight}function getPageViewWidth(){var e=document;return("BackCompat"==e.compatMode?e.body:e.documentElement).clientWidth}function getPageWidth(){var e=document,t=e.body,o=e.documentElement,n="BackCompat"==e.compatMode?t:e.documentElement;return Math.max(o.scrollWidth,t.scrollWidth,n.clientWidth)}function getViewportOffset(){return window.innerWidth?{w:window.innerWidth,h:window.innerHeight}:"BackCompat"===document.compatMode?{w:document.body.clientWidth,h:document.body.clientHeight}:{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}function getPageScrollTop(){var e=document;return e.documentElement.scrollTop||e.body.scrollTop}function getPageScrollLeft(){var e=document;return e.documentElement.scrollLeft||e.body.scrollLeft}function launchFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullScreen()}var scrollToTop=function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;0<t&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))};function openWindow(url,windowName,width,height){var x=parseInt(screen.width/2)-width/2,y=parseInt(screen.height/2)-height/2,isMSIE="Microsoft Internet Explorer"==navigator.appName;if(isMSIE){var p="resizable=1,location=no,scrollbars=no,width=";p+=width,p+=",height=",p+=height,p+=",left=",p+=x,p+=",top=",p+=y,window.open(url,windowName,p)}else{var win=window.open(url,"ZyiisPopup","top="+y+",left="+x+",scrollbars="+scrollbars+",dialog=yes,modal=yes,width="+width+",height="+height+",resizable=no");eval("try { win.resizeTo(width, height); } catch(e) { }"),win.focus()}}var smoothScroll=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})},getScrollPosition=function(e){var t=0<arguments.length&&void 0!==e?e:window;return{x:void 0!==t.pageXOffset?t.pageXOffset:t.scrollLeft,y:void 0!==t.pageYOffset?t.pageYOffset:t.scrollTop}};function exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.href,n=o.substring(o.lastIndexOf("?")+1).match(t);return null!=n?unescape(n[2]):null}function AutoResponse(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:750,t=document.documentElement;600<=t.clientWidth?t.style.fontSize="80px":t.style.fontSize=t.clientWidth/e*100+"px"}exports.AutoResponse=AutoResponse,exports.currentURL=currentURL,exports.exitFullscreen=exitFullscreen,exports.funcUrlDel=funcUrlDel,exports.getClientHeight=getClientHeight,exports.getPageScrollLeft=getPageScrollLeft,exports.getPageScrollTop=getPageScrollTop,exports.getPageViewWidth=getPageViewWidth,exports.getPageWidth=getPageWidth,exports.getQueryString=getQueryString,exports.getScrollPosition=getScrollPosition,exports.getUrlParam=getUrlParam,exports.getUrlParams=getUrlParams,exports.getViewportOffset=getViewportOffset,exports.launchFullscreen=launchFullscreen,exports.openWindow=openWindow,exports.scrollToTop=scrollToTop,exports.smoothScroll=smoothScroll,Object.defineProperty(exports,"__esModule",{value:!0})});
