String.prototype.trim===undefined&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===undefined&&(Array.prototype.reduce=function(a){if(this===void 0||this===null)throw new TypeError;var b=Object(this),c=b.length>>>0,d=0,e;if(typeof a!="function")throw new TypeError;if(c==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)e=arguments[1];else for(;;){if(d in b){e=b[d++];break}if(++d>=c)throw new TypeError}while(d<c)d in b&&(e=a.call(undefined,e,b[d],d,b)),d++;return e});var Zepto=function(){function r(a,b){return b===h?q(a):q(a).filter(b)}function q(a,b){if(a==g)return p();if(b!==h)return q(b).find(a);if(typeof a=="function")return q(g).ready(a);if(a instanceof p)return a;var c;a instanceof Array?c=k(a):a instanceof Element||a===window?c=[a]:e.test(a)?c=o(a):c=d(g,a);return p(c,a)}function p(a,b){a=a||[],a.__proto__=p.prototype,a.selector=b||"";return a}function o(b){f.innerHTML=(""+b).trim();var c=a.call(f.childNodes);f.innerHTML="";return c}function n(a){var b=[];for(var c=0,d=a.length;c<d;c++)b.indexOf(a[c])<0&&b.push(a[c]);return b}function m(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})}function l(a){return a.reduce(function(a,b){return a.concat(b)},[])}function k(a){return a.filter(function(a){return a!==h&&a!==null})}function j(a){return new RegExp("(^|\\s)"+a+"(\\s|$)")}var a=[].slice,b,c,d,e,f,g=window.document,h,i=g.defaultView.getComputedStyle;e=/^\s*<.+>/,f=g.createElement("div"),q.extend=function(a,c){for(b in c)a[b]=c[b];return a},q.qsa=d=function(b,c){return a.call(b.querySelectorAll(c))},q.fn={forEach:[].forEach,map:[].map,reduce:[].reduce,push:[].push,indexOf:[].indexOf,concat:[].concat,ready:function(a){g.addEventListener("DOMContentLoaded",a,!1);return this},get:function(a){return a===h?this:this[a]},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode.removeChild(this)})},each:function(a){this.forEach(function(b,c){a.call(b,c,b)});return this},filter:function(a){return q([].filter.call(this,function(b){return d(b.parentNode,a).indexOf(b)>=0}))},is:function(a){return this.length>0&&q(this[0]).filter(a).length>0},not:function(b){var c=[];if(typeof b=="function"&&b.call!==h)this.each(function(a){b.call(this,a)||c.push(this)});else{var d=a.call(typeof b=="string"?this.filter(b):b instanceof NodeList?b:q(b));a.call(this).forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return q(c)},eq:function(a){return q(this[a])},first:function(){return q(this[0])},last:function(){return q(this[this.length-1])},find:function(a){var b;this.length==1?b=d(this[0],a):b=l(this.map(function(b){return d(b,a)}));return q(b)},closest:function(a,b){var c=this[0],e=d(b!==h?b:g,a);e.length===0&&(c=null);while(c&&c!==g&&e.indexOf(c)<0)c=c.parentNode;return q(c)},parents:function(a){var b=[],c=this;while(c.length>0)c=k(c.map(function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0){b.push(a);return a}}));return r(b,a)},parent:function(a){return r(n(k(this.pluck("parentNode"))),a)},children:function(b){return r(l(this.map(function(b){return a.call(b.children)})),b)},siblings:function(b){return r(l(this.map(function(b){return a.call(b.parentNode.children).filter(function(a){return a!==b})})),b)},pluck:function(a){return this.map(function(b){return b[a]})},show:function(){return this.css("display","block")},hide:function(){return this.css("display","none")},prev:function(){return q(this.pluck("previousElementSibling"))},next:function(){return q(this.pluck("nextElementSibling"))},html:function(a){return a===h?this.length>0?this[0].innerHTML:null:this.each(function(b){this.innerHTML=typeof a=="function"?a.call(this,b,this.innerHTML):a})},text:function(a){return a===h?this.length>0?this[0].innerText:null:this.each(function(){this.innerText=a})},attr:function(a,c){return typeof a=="string"&&c===h?this.length>0&&this[0].nodeName==="INPUT"&&this[0].type==="text"&&a==="value"?this.val():this.length>0?this[0].getAttribute(a)||(a in this[0]?this[0][a]:h):null:this.each(function(d){if(typeof a=="object")for(b in a)this.setAttribute(b,a[b]);else this.setAttribute(a,typeof c=="function"?c.call(this,d,this.getAttribute(a)):c)})},removeAttr:function(a){return this.each(function(){this.removeAttribute(a)})},data:function(a,b){return this.attr("data-"+a,b)},val:function(a){return a===h?this.length>0?this[0].value:null:this.each(function(){this.value=a})},offset:function(){var a=this[0].getBoundingClientRect();return{left:a.left+g.body.scrollLeft,top:a.top+g.body.scrollTop,width:a.width,height:a.height}},css:function(a,d){if(d===h&&typeof a=="string")return this[0].style[m(a)]||i(this[0],"").getPropertyValue(a);c="";for(b in a)c+=b+":"+a[b]+";";typeof a=="string"&&(c=a+":"+d);return this.each(function(){this.style.cssText+=";"+c})},index:function(a){return this.indexOf(q(a)[0])},hasClass:function(a){return j(a).test(this[0].className)},addClass:function(a){return this.each(function(){!q(this).hasClass(a)&&(this.className+=(this.className?" ":"")+a)})},removeClass:function(a){return this.each(function(){this.className=this.className.replace(j(a)," ").trim()})},toggleClass:function(a,b){return this.each(function(){b!==h&&!b||q(this).hasClass(a)?q(this).removeClass(a):q(this).addClass(a)})}},["width","height"].forEach(function(a){q.fn[a]=function(){return this.offset()[a]}});var s={append:"beforeEnd",prepend:"afterBegin",before:"beforeBegin",after:"afterEnd"};for(b in s)q.fn[b]=function(a){return function(b){return this.each(function(c,d){if(b instanceof p){dom=b;if(a=="afterBegin"||a=="afterEnd")for(var e=0;e<dom.length;e++)d.insertAdjacentElement(a,dom[dom.length-e-1]);else for(var e=0;e<dom.length;e++)d.insertAdjacentElement(a,dom[e])}else d["insertAdjacent"+(b instanceof Element?"Element":"HTML")](a,b)})}}(s[b]);p.prototype=q.fn;return q}();"$"in window||(window.$=Zepto),function(a){function l(b){var c=a.extend({originalEvent:b},b);k.forEach(function(a){c[a]=function(){return b[a].apply(b,arguments)}});return c}function j(a,b,d,g){var h=e(a);(b||"").split(/\s/).forEach(function(b){f(a,b,d,g).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.del||b.fn,!1)})})}function i(b,d,f,h,i){var j=e(b),k=c[j]||(c[j]=[]);d.split(/\s/).forEach(function(c){var d=a.extend(g(c),{fn:f,sel:h,del:i,i:k.length});k.push(d),b.addEventListener(d.e,i||f,!1)})}function h(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function g(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function f(a,b,d,f){b=g(b);if(b.ns)var i=h(b.ns);return(c[e(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||i.test(a.ns))&&(!d||a.fn==d)&&(!f||a.sel==f)})}function e(a){return a._zid||(a._zid=d++)}var b=a.qsa,c={},d=1;a.event={add:function(a,b,c){i(a,b,c)},remove:function(a,b,c){j(a,b,c)}},a.fn.bind=function(a,b){return this.each(function(){i(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){j(this,a,b)})},a.fn.one=function(a,b){return this.each(function(){var c=this;i(this,a,function(){b(),j(c,a,arguments.callee)})})};var k=["preventDefault","stopImmediatePropagation","stopPropagation"];a.fn.delegate=function(c,d,e){return this.each(function(f,g){i(g,d,e,c,function(d){var f=d.target,h=b(g,c);while(f&&h.indexOf(f)<0)f=f.parentNode;f&&f!==g&&f!==document&&e.call(f,a.extend(l(d),{currentTarget:f,liveFired:g}))})})},a.fn.undelegate=function(a,b,c){return this.each(function(){j(this,b,c,a)})},a.fn.live=function(b,c){a(document.body).delegate(this.selector,b,c);return this},a.fn.die=function(b,c){a(document.body).undelegate(this.selector,b,c);return this},a.fn.trigger=function(a){return this.each(function(){var b=document.createEvent("Events");this.dispatchEvent(b,b.initEvent(a,!0,!0))})}}(Zepto),function(a){function b(a){var a=a,b={},c=a.match(/(Android)\s+([\d.]+)/),d=a.match(/(iPhone\sOS)\s([\d_]+)/),e=a.match(/(iPad).*OS\s([\d_]+)/),f=a.match(/(webOS)\/([\d.]+)/),g=a.match(/(BlackBerry).*Version\/([\d.]+)/);c&&(b.android=!0,b.version=c[2]),d&&(b.ios=!0,b.version=d[2].replace(/_/g,"."),b.iphone=!0),e&&(b.ios=!0,b.version=e[2].replace(/_/g,"."),b.ipad=!0),f&&(b.webos=!0,b.version=f[2]),g&&(b.blackberry=!0,b.version=g[2]);return b}a.os=b(navigator.userAgent),a.__detect=b;var c=navigator.userAgent.match(/WebKit\/([\d.]+)/);a.browser=c?{webkit:!0,version:c[1]}:{webkit:!1}}(Zepto),function(a){a.fn.anim=function(a,b,c,d){var e=[],f,g;for(g in a)g==="opacity"?f=a[g]:e.push(g+"("+a[g]+")");typeof d=="function"&&this.one("webkitTransitionEnd",d);return this.css({"-webkit-transition":"all "+(b!==undefined?b:.5)+"s "+(c||""),"-webkit-transform":e.join(" "),opacity:f})}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}var b={},c;a(document).ready(function(){a(document.body).bind("touchstart",function(a){var e=Date.now(),f=e-(b.last||e);b.target=d(a.touches[0].target),c&&clearTimeout(c),b.x1=a.touches[0].pageX,f>0&&f<=250&&(b.isDoubleTap=!0),b.last=e}).bind("touchmove",function(a){b.x2=a.touches[0].pageX}).bind("touchend",function(d){b.isDoubleTap?(a(b.target).trigger("doubleTap"),b={}):b.x2>0?(Math.abs(b.x1-b.x2)>30&&a(b.target).trigger("swipe")&&a(b.target).trigger("swipe"+(b.x1-b.x2>0?"Left":"Right")),b.x1=b.x2=b.last=0):"last"in b&&(c=setTimeout(function(){c=null,a(b.target).trigger("tap"),b={}},250))}).bind("touchcancel",function(){b={}})}),["swipe","swipeLeft","swipeRight","doubleTap","tap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto),function(a){function c(){}var b=0;a.ajaxJSONP=function(c){var d="jsonp"+ ++b,e=document.createElement("script");window[d]=function(a){c.success(a),delete window.jsonpString},e.src=c.url.replace(/=\?/,"="+d),a("head").append(e)},a.ajax=function(b){b=b||{};if(b.url&&/=\?/.test(b.url))return a.ajaxJSONP(b);var e=b.data,f=b.success||c,g=b.error||c,h=d[b.dataType],i=b.type||"GET",j=b.contentType||(i==="POST"?"application/x-www-form-urlencoded":""),k=new XMLHttpRequest;k.onreadystatechange=function(){if(k.readyState==4)if(k.status>=200&&k.status<300||k.status==0)if(h=="application/json"){var a,b=!1;try{a=JSON.parse(k.responseText)}catch(c){b=c}b?g(k,"parsererror",b):f(a,"success",k)}else f(k.responseText,"success",k);else g(k,"error")},k.open(i,b.url||window.location,!0),h&&k.setRequestHeader("Accept",h),e instanceof Object&&(e=a.param(e)),j&&k.setRequestHeader("Content-Type",j),k.setRequestHeader("X-Requested-With","XMLHttpRequest"),k.send(e)};var d=a.ajax.mimeTypes={json:"application/json",xml:"application/xml",html:"text/html",text:"text/plain"};a.get=function(b,c){a.ajax({url:b,success:c})},a.post=function(b,c,d,e){c instanceof Function&&(e=e||d,d=c,c=null),a.ajax({type:"POST",url:b,data:c,success:d,dataType:e})},a.getJSON=function(b,c){a.ajax({url:b,success:c,dataType:"json"})},a.fn.load=function(b,c){if(!this.length)return this;var d=this,e=b.split(/\s/),f;e.length>1&&(b=e[0],f=e[1]),a.get(b,function(b){d.html(f?a(document.createElement("div")).html(b).find(f).html():b),c&&c()});return this},a.param=function(b,c){var d=[],e="",f=function(a,b){c?d[d.length]=encodeURIComponent(c+"["+a+"]")+"="+encodeURIComponent(b):d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};for(var g in b)b[g]instanceof Array||b[g]instanceof Object?e+=(d.length+e.length>0?"&":"")+a.param(b[g],c?c+"["+g+"]":g):f(b instanceof Array?"":g,b[g]);return d.join("&").replace(/%20/g,"+")+e}}(Zepto),function(a){var b=[],c;a.fn.remove=function(){return this.each(function(){this.tagName=="IMG"&&(b.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAAAADs=",c&&clearTimeout(c),c=setTimeout(function(){b=[]},6e4)),this.parentNode.removeChild(this)})}}(Zepto),function(){var a=null,b=null,c=[],d={},e=null,f=null,g=0;$.mobile||($.mobile={}),$.mobile.scrollTop=function(a){if(typeof a=="undefined")return document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;document.body.scrollTop=document.documentElement.scrollTop=window.pageYOffset=a;return $.mobile},$.mobile.loading=function(a){var b;$("#loading").remove(),a&&(b=$(document.createElement("div")).attr({id:"loading"}).addClass("ui-loading"),b.append($(document.createElement("div")).addClass("ui-spinner")),$(document.body).append(b),$(window).trigger("resize"));return $.mobile},$.mobile.showPage=function(a,d){var f="#"+a.attr("id");d||(d={}),e&&e.attr("id")!==a.attr("id")&&e.trigger("pagebeforehide").trigger("pagehide"),d.type==="dialog"?(e=b,b&&b.data("mobile:scrollTop",$.mobile.scrollTop()).addClass("collapsed")):(e=null,b&&b.data("mobile:scrollTop",$.mobile.scrollTop()).trigger("pagebeforehide").addClass("collapsed").trigger("pagehide")),c.length&&c.removeClass("highlight"),b=a.trigger("pagebeforeshow").removeClass("collapsed").trigger("pageshow"),b.reflow(),c=b.find('[href="'+f+'"]').addClass("highlight"),d.event&&d.event.stopPropagation(),setTimeout(function(){$.mobile.scrollTop(b.data("mobile:scrollTop")||0),$.mobile.updateLayout()},25),a.get(0).focus();return $.mobile},$.mobile.changePage=function(a){var c=null,e=!1;a||(a={});if(typeof a.target=="string"){var h=$('[data-role="page"]');a.target=a.target.replace(/^#/,"");for(var i=0;i<h.length;i++){var j=$(h.get(i));if(j.attr("id")===a.target){e=!0;if(j.hasClass("collapsed")){c=j,f=a.target;break}}}e||(d[a.target]&&a.method!=="POST"?$.mobile.changePage($.extend(a,{target:d[a.target]})):($.mobile.loading(!0),$.ajax({dataType:"html",data:a.data,type:a.method&&a.method.toUpperCase()||"GET",cache:!1,url:a.target,success:function(b,c,e){var h=$(document.createElement("div")).html(b),i=h.find('[data-role="page"]'),j=a.target,k;i.length||(i=$(document.createElement("div"))),d[j]&&(d[j].remove(),delete d[j]),k=i.attr("id"),k&&$("#"+k).length&&i.attr({id:"page-"+ ++g}),i.page(),i.data("cache")==="true"?d[j]=i:i.bind("pagehide",function(){i.remove()}),$.mobile.initialize(i),$(document.body).append(i),$.mobile.loading(!1),$.mobile.changePage($.extend(a,{target:i})),a.type!=="dialog"&&(f=j,location.hash=f)},error:function(a,b,c){$.mobile.loading(!1),alert("Whoops! We failed to load the requested page from the server. Please make sure you are connected to the internet and try again.\n\n["+a.status+"] "+(c||a.statusText))}})))}else b===a.target||(c=a.target);c?$.mobile.showPage(c,a):a.event&&a.event.preventDefault();return $.mobile},$.mobile.closeDialog=function(){$.mobile.changePage({target:e})},$.mobile.serialize=function(a){var b={};for(var c=0;c<a.elements.length;c++){var d=a.elements[c];d.name&&!d.disabled&&(d.tagName==="SELECT"?b[d.name]=d.options[d.selectedIndex].value:d.tagName==="INPUT"?d.type==="checkbox"||d.type==="radio"?d.checked&&(b[d.name]=d.value||"on"):b[d.name]=(d.value||"").replace(/\r\n|\r|\n/g,"\n"):d.tagName==="TEXTAREA"&&(b[d.name]=(d.value||"").replace(/\r\n|\r|\n/g,"\n")))}return b},$.fn.addTheme=function(a,b,c){b&&(b=this.parent("[data-theme]").data("theme")),c&&(c=this.find("[data-role]:not([data-theme])"));for(var d=0;d<this.length;d++){var e=$(this.get(d));if(!(e.attr("class")||"").match(/\btheme-\w/)){var f=e.data("theme")||b||a;e.addClass("theme-"+f),c&&c.each(function(){$(this).addClass("theme-"+f)})}}return this},$.fn.addIcon=function(a){for(var b=0;b<this.length;b++){var c=$(this.get(b));if(!(c.attr("class")||"").match(/\bicon-\w+/)){var d=c.data("icon")||a;d&&c.addClass("ui-icon ui-icon-"+d)}}return this},$.fn.reflow=function(){this.find('[data-role="content"]').content();return this},$.fn.none=function(){},$.fn.page=function(){if(this.hasClass("ui-page"))return this;this.addClass("ui-page"),this.delegate("a","click",function(a){var b=$(this);if(b.data("ajax")==="false"||b.data("role")==="none"||b.attr("rel")==="external")return!1;if(b.hasClass("ui-disabled")){a.preventDefault(),a.stopPropagation();return!1}this.blur();var c=b.data("rel"),d=b.attr("href");if(d.indexOf("mailto:")===0||d.indexOf("sms:")===0)return!1;c==="back"?(e?$.mobile.closeDialog():history.back(),a.preventDefault()):$.mobile.changePage({event:a,target:b.attr("href"),type:c})}),this.delegate("form","submit",function(a){var b=$(this);if(b.data("ajax")==="false"||b.data("role")==="none")return!1;var c=b.data("rel");$.mobile.changePage({event:a,target:b.attr("action"),method:b.attr("method"),data:$.mobile.serialize(this),type:c})}),a||(a=this),this.addClass("collapsed");return this};var s=[];$.fn.header=function(){this.addClass("ui-header").addTheme("a",!1,!0),this.data("position")==="fixed"&&(this.addClass("ui-fixed"),s.push([this,this.parent('[data-role="page"]'),"top"]));return this},$.fn.navbar=function(){this.addClass("ui-navbar").addTheme("a",!0).find("a").addIcon();var a=this.find("li");a.css({width:100/a.length+"%"});return this},$.fn.content=function(){this.addClass("ui-content").addTheme("c");var a=0,b=0;this.prev('[data-role="header"]').each(function(){var b=$(this);b.css("position")==="absolute"&&(a=a+b.height())}),this.next('[data-role="footer"]').each(function(){var a=$(this);a.css("position")==="absolute"&&(b=b+a.height())}),this.css({"padding-top":a+"px","padding-bottom":b+"px"});return this},$.fn.fieldcontain=function(){this.addClass("ui-field-contain");return this},$.fn.listview=function(){var a=this.find('[data-role="button"]'),b=this.data("split-icon"),c=this.data("icon");this.addClass("ui-list-view").addClass("align-"+(this.data("iconpos")||"right")).addTheme("d",!0,!1),this.data("inset")==="true"&&this.addClass("ui-inset"),a.addTheme("d",!1,!1),b&&a.addIcon(b),this.find("li").each(function(){var a=$(this),b=a.children();a.addIcon(c),b.length&&b[0].tagName==="A"&&($(b[0]).addClass("ui-a-block"),a.addClass("ui-li-block"))});return this},$.fn["list-divider"]=function(){this.addClass("ui-list-divider").addTheme("b",!1);return this},$.fn.controlgroup=function(){var a,b=this.data("type");this.addClass("ui-control-group").addClass("orientation-"+(b||"horizontal")).addTheme("d",!0,!0),b!=="vertical"&&(a=this.children(),a.css({width:100/a.length+"%"})),a=this.find("input");if(a.length){var c=this;this.delegate("input","change",function(){a.each(function(){$(this).closest('[data-role="button"]')[this.checked?"addClass":"removeClass"]("highlight")})}),a.first().trigger("change")}return this},$.fn.button=function(){this.addClass("ui-button").addTheme("b",!0,!1).addIcon().addClass("icon-"+(this.data("iconpos")||"left")),this.data("icon-only")==="true"&&this.addClass("ui-icon-only"),this.data("inline")==="true"&&this.addClass("ui-inline");return this},$.fn.collapsible=function(){this.addClass("ui-collapsible"),this.data("collapsed")==="true"&&this.addClass("closed");var a=this;this.children().first().addClass("ui-toggle").bind("click",function(){a.toggleClass("closed")})},$.fn.footer=function(){this.addClass("ui-footer").addTheme("c",!1,!0),this.data("position")==="fixed"?(this.addClass("ui-fixed").css({top:window.innerHeight-this.height()+"px"}),s.push([this,this.parent('[data-role="page"]'),"bottom"])):s.push([this,this.parent('[data-role="page"]'),"bottom-if-needed"]);return this};var D=!1;$(window).bind("touchmove",function(a){if(!D){D=!0;for(var b=0;b<s.length;b++){var c=s[b];if(c[1].hasClass("collapsed"))continue;c[2]==="top"?c[0].css({top:"0px"}):c[2]==="bottom-if-needed"?document.body.scrollHeight>window.innerHeight&&c[0].css({position:"relative",bottom:"auto"}):c[0].css({top:document.body.scrollHeight-c[0].height()+"px"})}}}),$(window).bind("scroll resize orientationchange",$.mobile.updateLayout=function(){var a=$.mobile.scrollTop(),c=!1;for(var d=0;d<s.length;d++){var e=s[d];if(e[1].hasClass("collapsed"))continue;e[2]==="top"?e[0].css({top:a+"px"}):e[2]==="bottom-if-needed"?(document.body.scrollHeight-5<=window.innerHeight?e[0].css({position:"absolute",bottom:"0px"}):e[0].css({position:"relative",bottom:"auto"}),c=!0):e[0].css({top:a+window.innerHeight-e[0].height()+"px"})}D=!1,c&&b.reflow(),$("#loading").css({width:window.innerWidth+"px",height:document.body.scrollHeight+"px"}).children(".ui-spinner").css({top:$.mobile.scrollTop()+Math.round(window.innerHeight/2)+"px",left:Math.round(window.innerWidth/2)+"px"})}),$(window).bind("touchend",function(){D&&$.mobile.updateLayout()});var H=!1;$.mobile.autoInitialize=!0,$.mobile.initialize=function(b){(b&&b.find("[data-role]")||$("[data-role]")).each(function(){var a=$(this);a[a.data("role")]()});var c='input[type="button"], input[type="submit"], button';(b&&b.find(c)||$(c)).each(function(){$(this).button()});if(!H){H=!0,$(window).bind("hashchange",function(b){var c=location.hash.replace(/^#/,"");f!==c&&(f=c,$.mobile.changePage({event:b,target:f||a}))});if(!("onhashchange"in window)){var d=location.hash;setInterval(function(){location.hash!==d&&(d=location.hash,$(window).trigger("hashchange",[null,d]))},50)}$(window).trigger("hashchange",[null,null]),window.scrollTo(0,0)}},$(document).ready(function(){$.mobile.autoInitialize&&$.mobile.initialize()})}()