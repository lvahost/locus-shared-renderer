!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.locussharedrenderer=n():t.locussharedrenderer=n()}(window,function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){"use strict";t.exports=function(){return{run:function(t){this.opts=t;var n=this.testimonial,e=this;jQuery.fn.hkTestimonial=function(){n(this,e)}},testimonial:function(t,n){var e=$(t);if(e.data("hkTestiominal"))return!1;e.attr("testimonialitems")||e.attr("testimonialitems",3);var i=e.width()/(e.attr("testimonialitems")||3),r=e.find(".testimony").length;e.find(".testimony").each(function(t,n){var e=t*i+"px";n.style.left=e,n.style.width=i+"px",n.originalLeft=e}),e.find(".commands").length||n.createControls(e);var o=1;e.find(".leftCtrl").on("click",function(){e.find(".testimony").each(function(t,n){o>1&&($(n).stop().animate({left:"-="+i+"px"}),o--)})}),e.find(".rightCtrl").on("click",function(){o<r&&$(testEl).stop().animate({left:"+="+i+"px"})})},createControls:function(t){var n=$('\n                <div class="commands">\n                    <i class="fa fa-chevron-left leftCtrl"></i>\n                    <i class="fa fa-chevron-right rightCtrl"></i>\n                </div>\n            ');$(t).append(n)},activateControls:function(t){$(t).find(".commands")}}}},function(t,n,e){"use strict";t.exports=function(){return{run:function(t){this.sliders=[];var n=this.loadsliders;jQuery.fn.hkSlider=function(){n(this)}},loadsliders:function(t){t.data("hkSlider")&&clearInterval(t.data("hkSlider"));var n=$(t).find("li").width(),e=[],i=($(t).find("li").each(function(t,i){var r=t*n+"px";i.style.left=r,i.originalleft=r,e.push(i)}),e.length),r=1,o=setInterval(function(){r<i?(e.forEach(function(t){$(t).stop().animate({left:"-="+n+"px"},800)}),r++):(r=1,e.forEach(function(t){$(t).stop().animate({left:t.originalleft},1200)}))},3e3);return t.data("hkSlider",o),!0}}}},function(t,n,e){"use strict";var i=[e(1),e(0)];t.exports=function(t){for(var n=0;n<i.length;n++)i[n]().run(t)}}])});