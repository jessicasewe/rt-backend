/* @license MIT https://raw.githubusercontent.com/jquery/jquery/4.0.0-beta.2/LICENSE.txt */
/*! jQuery v4.0.0-beta.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,!0):t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";if(!e.document)throw Error("jQuery requires a window with a document");var n=[],r=Object.getPrototypeOf,i=n.slice,o=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f=c.toString,p=f.call(Object),d={};function h(e){return null==e?e+"":"object"==typeof e?u[l.call(e)]||"object":typeof e}function g(e){return null!=e&&e===e.window}function v(e){var t=!!e&&e.length,n=h(e);return!("function"==typeof e||g(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var y=e.document,m={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var r,i=(n=n||y).createElement("script");for(r in i.text=e,m)t&&t[r]&&(i[r]=t[r]);n.head.appendChild(i).parentNode&&i.parentNode.removeChild(i)}var b="4.0.0-beta.2",w=/HTML$/i,T=function(e,t){return new T.fn.init(e,t)};function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}T.fn=T.prototype={jquery:b,constructor:T,length:0,toArray:function(){return i.call(this)},get:function(e){return null==e?i.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()}},T.extend=T.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"!=typeof a&&"function"!=typeof a&&(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(T.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||T.isPlainObject(n)?n:{},i=!1,a[t]=T.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},T.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!!e&&"[object Object]"===l.call(e)&&(!(t=r(e))||"function"==typeof(n=c.call(t,"constructor")&&t.constructor)&&f.call(n)===p)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(v(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=T.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?T.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!w.test(t||n&&n.nodeName||"HTML")},contains:function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(v(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o(s)},guid:1,support:d}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var j=n.pop,E="[\\x20\\t\\r\\n\\f]",k=y.documentMode;try{y.querySelector(":has(*,:jqfake)"),d.cssHas=!1}catch(e){d.cssHas=!0}var S=[];k&&S.push(":enabled",":disabled","\\["+E+"*name"+E+"*="+E+"*(?:''|\"\")"),d.cssHas||S.push(":has"),S=S.length&&new RegExp(S.join("|"));var D=RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),A="(?:\\\\[\\da-fA-F]{1,6}"+E+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",q=RegExp("^"+E+"*([>+~]|"+E+")"+E+"*"),N=RegExp(E+"|>"),O=/[+~]/,H=y.documentElement,L=H.matches||H.msMatchesSelector;function P(){var e=[];return function t(n,r){return e.push(n+" ")>T.expr.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function R(e){return e&&void 0!==e.getElementsByTagName&&e}var M="\\["+E+"*("+A+")(?:"+E+"*([*^$|!~]?=)"+E+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+A+"))|)"+E+"*\\]",W=":("+A+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",$={ID:RegExp("^#("+A+")"),CLASS:RegExp("^\\.("+A+")"),TAG:RegExp("^("+A+"|[*])"),ATTR:RegExp("^"+M),PSEUDO:RegExp("^"+W),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i")},I=new RegExp(W),F=RegExp("\\\\[\\da-fA-F]{1,6}"+E+"?|\\\\([^\\r\\n\\f])","g"),B=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))};function _(e){return e.replace(F,B)}function U(e){T.error("Syntax error, unrecognized expression: "+e)}var X=RegExp("^"+E+"*,"+E+"*"),z=P();function V(e,t){var n,r,i,o,a,s,u,l=z[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=T.expr.preFilter;while(a){for(o in(!n||(r=X.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=q.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(D," ")}),a=a.slice(n.length)),$)(r=T.expr.match[o].exec(a))&&(!u[o]||(r=u[o](r)))&&(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?U(e):z(e,s).slice(0)}function Y(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function G(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===h(n))for(s in i=!0,n)G(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,"function"!=typeof r&&(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(T(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o}var Q=/[^\x20\t\r\n\f]+/g;T.fn.extend({attr:function(e,t){return G(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e)})}}),T.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o){if(void 0===e.getAttribute)return T.prop(e,t,n);if(1===o&&T.isXMLDoc(e)||(i=T.attrHooks[t.toLowerCase()]),void 0!==n){if(null===n||!1===n&&0!==t.toLowerCase().indexOf("aria-")){T.removeAttr(e,t);return}return i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n),n)}return i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=e.getAttribute(t))?void 0:r}},attrHooks:{},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Q);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),k&&(T.attrHooks.type={set:function(e,t){if("radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}});var J=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function K(e,t){return t?"\0"===e?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}T.escapeSelector=function(e){return(e+"").replace(J,K)};var Z=n.sort,ee=n.splice;function et(e,t){if(e===t)return en=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)?e==y||e.ownerDocument==y&&T.contains(y,e)?-1:t==y||t.ownerDocument==y&&T.contains(y,t)?1:0:4&n?-1:1)}T.uniqueSort=function(e){var t,n=[],r=0,i=0;if(en=!1,Z.call(e,et),en){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)ee.call(e,n[r],1)}return e},T.fn.uniqueSort=function(){return this.pushStack(T.uniqueSort(i.apply(this)))};var en,er,ei,eo,ea,es,eu=0,el=0,ec=P(),ef=P(),ep=P(),ed=RegExp(E+"+","g"),eh=RegExp("^"+A+"$"),eg=T.extend({needsContext:RegExp("^"+E+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)","i")},$),ev=/^(?:input|select|textarea|button)$/i,ey=/^h\d$/i,em=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ex=function(){eE()},eb=eS(function(e){return!0===e.disabled&&C(e,"fieldset")},{dir:"parentNode",next:"legend"});function ew(e,t,n,r){var i,o,s,u,l,c,f,p=t&&t.ownerDocument,d=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==d&&9!==d&&11!==d)return n;if(!r&&(eE(t),t=t||eo,es)){if(11!==d&&(l=em.exec(e))){if(i=l[1]){if(9===d)return(s=t.getElementById(i))&&a.call(n,s),n;if(p&&(s=p.getElementById(i))&&T.contains(t,s))return a.call(n,s),n}else if(l[2])return a.apply(n,t.getElementsByTagName(e)),n;else if((i=l[3])&&t.getElementsByClassName)return a.apply(n,t.getElementsByClassName(i)),n}if(!ep[e+" "]&&(!S||!S.test(e))){if(f=e,p=t,1===d&&(N.test(e)||q.test(e))){((p=O.test(e)&&R(t.parentNode)||t)!=t||k)&&((u=t.getAttribute("id"))?u=T.escapeSelector(u):t.setAttribute("id",u=T.expando)),o=(c=V(e)).length;while(o--)c[o]=(u?"#"+u:":scope")+" "+Y(c[o]);f=c.join(",")}try{return a.apply(n,p.querySelectorAll(f)),n}catch(t){ep(e,!0)}finally{u===T.expando&&t.removeAttribute("id")}}}return eN(e.replace(D,"$1"),t,n,r)}function eT(e){return e[T.expando]=!0,e}function eC(e){return function(t){if("form"in t)return t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||!e!==t.isDisabled&&eb(t)===e:t.disabled===e;return"label"in t&&t.disabled===e}}function ej(e){return eT(function(t){return t=+t,eT(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function eE(e){var t,n=e?e.ownerDocument||e:y;n!=eo&&9===n.nodeType&&(ea=(eo=n).documentElement,es=!T.isXMLDoc(eo),k&&y!=eo&&(t=eo.defaultView)&&t.top!==t&&t.addEventListener("unload",ex))}for(er in ew.matches=function(e,t){return ew(e,null,null,t)},ew.matchesSelector=function(e,t){if(eE(e),es&&!ep[t+" "]&&(!S||!S.test(t)))try{return L.call(e,t)}catch(e){ep(t,!0)}return ew(t,eo,null,[e]).length>0},T.expr={cacheLength:50,createPseudo:eT,match:eg,find:{ID:function(e,t){if(void 0!==t.getElementById&&es){var n=t.getElementById(e);return n?[n]:[]}},TAG:function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},CLASS:function(e,t){if(void 0!==t.getElementsByClassName&&es)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=_(e[1]),e[3]=_(e[3]||e[4]||e[5]||""),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||U(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&U(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return $.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&I.test(n)&&(t=V(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{ID:function(e){var t=_(e);return function(e){return e.getAttribute("id")===t}},TAG:function(e){var t=_(e).toLowerCase();return"*"===e?function(){return!0}:function(e){return C(e,t)}},CLASS:function(e){var t=ec[e+" "];return t||(t=RegExp("(^|"+E+")"+e+"("+E+"|$)"),ec(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=T.attr(r,e);return null==i?"!="===t:!t||((i+="","="===t)?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(ed," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,m=!1;if(g){if(o){while(h){f=t;while(f=f[h])if(s?C(f,v):1===f.nodeType)return!1;d=h="only"===e&&!d&&"nextSibling"}return!0}if(d=[a?g.firstChild:g.lastChild],a&&y){m=(p=(l=(c=g[T.expando]||(g[T.expando]={}))[e]||[])[0]===eu&&l[1])&&l[2],f=p&&g.childNodes[p];while(f=++p&&f&&f[h]||(m=p=0)||d.pop())if(1===f.nodeType&&++m&&f===t){c[e]=[eu,p,m];break}}else if(y&&(m=p=(l=(c=t[T.expando]||(t[T.expando]={}))[e]||[])[0]===eu&&l[1]),!1===m){while(f=++p&&f&&f[h]||(m=p=0)||d.pop())if((s?C(f,v):1===f.nodeType)&&++m&&(y&&((c=f[T.expando]||(f[T.expando]={}))[e]=[eu,m]),f===t))break}return(m-=i)===r||m%r==0&&m/r>=0}}},PSEUDO:function(e,t){var n=T.expr.pseudos[e]||T.expr.setFilters[e.toLowerCase()]||U("unsupported pseudo: "+e);return n[T.expando]?n(t):n}},pseudos:{not:eT(function(e){var t=[],n=[],r=eq(e.replace(D,"$1"));return r[T.expando]?eT(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:eT(function(e){return function(t){return ew(e,t).length>0}}),contains:eT(function(e){return e=_(e),function(t){return(t.textContent||T.text(t)).indexOf(e)>-1}}),lang:eT(function(e){return eh.test(e||"")||U("unsupported lang: "+e),e=_(e).toLowerCase(),function(t){var n;do if(n=es?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===ea},focus:function(e){return e===eo.activeElement&&eo.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:eC(!1),disabled:eC(!0),checked:function(e){return C(e,"input")&&!!e.checked||C(e,"option")&&!!e.selected},selected:function(e){return k&&e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.expr.pseudos.empty(e)},header:function(e){return ey.test(e.nodeName)},input:function(e){return ev.test(e.nodeName)},button:function(e){return C(e,"input")&&"button"===e.type||C(e,"button")},text:function(e){return C(e,"input")&&"text"===e.type},first:ej(function(){return[0]}),last:ej(function(e,t){return[t-1]}),eq:ej(function(e,t,n){return[n<0?n+t:n]}),even:ej(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ej(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ej(function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:ej(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.expr.pseudos.nth=T.expr.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.expr.pseudos[er]=function(e){return function(t){return C(t,"input")&&t.type===e}}(er);for(er in{submit:!0,reset:!0})T.expr.pseudos[er]=function(e){return function(t){return(C(t,"input")||C(t,"button"))&&t.type===e}}(er);function ek(){}function eS(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=el++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f=[eu,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a){if(c=t[T.expando]||(t[T.expando]={}),i&&C(t,i))t=t[r]||t;else if((l=c[o])&&l[0]===eu&&l[1]===s)return f[2]=l[2];else if(c[o]=f,f[2]=e(t,n,u))return!0}return!1}}function eD(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function eA(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function eq(e,t){var n,r,i,o,u=[],l=[],c=ef[e+" "];if(!c){t||(t=V(e)),o=t.length;while(o--)(c=function e(t){for(var n,r,i,o=t.length,u=T.expr.relative[t[0].type],l=u||T.expr.relative[" "],c=u?1:0,f=eS(function(e){return e===n},l,!0),p=eS(function(e){return s.call(n,e)>-1},l,!0),d=[function(e,t,r){var i=!u&&(r||t!=ei)||((n=t).nodeType?f(e,t,r):p(e,t,r));return n=null,i}];c<o;c++)if(r=T.expr.relative[t[c].type])d=[eS(eD(d),r)];else{if((r=T.expr.filter[t[c].type].apply(null,t[c].matches))[T.expando]){for(i=++c;i<o&&!T.expr.relative[t[i].type];i++);return function e(t,n,r,i,o,u){return i&&!i[T.expando]&&(i=e(i)),o&&!o[T.expando]&&(o=e(o,u)),eT(function(e,u,l,c){var f,p,d,h,g=[],v=[],y=u.length,m=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ew(e,t[r],n);return n}(n||"*",l.nodeType?[l]:l,[]),x=t&&(e||!n)?eA(m,g,t,l,c):m;if(r?r(x,h=o||(e?t:y||i)?[]:u,l,c):h=x,i){f=eA(h,v),i(f,[],l,c),p=f.length;while(p--)(d=f[p])&&(h[v[p]]=!(x[v[p]]=d))}if(e){if(o||t){if(o){f=[],p=h.length;while(p--)(d=h[p])&&f.push(x[p]=d);o(null,h=[],f,c)}p=h.length;while(p--)(d=h[p])&&(f=o?s.call(e,d):g[p])>-1&&(e[f]=!(u[f]=d))}}else h=eA(h===u?h.splice(y,h.length):h),o?o(null,u,h,c):a.apply(u,h)})}(c>1&&eD(d),c>1&&Y(t.slice(0,c-1).concat({value:" "===t[c-2].type?"*":""})).replace(D,"$1"),r,c<i&&e(t.slice(c,i)),i<o&&e(t=t.slice(i)),i<o&&Y(t))}d.push(r)}return eD(d)}(t[o]))[T.expando]?u.push(c):l.push(c);(c=ef(e,(n=u.length>0,r=l.length>0,i=function(e,t,i,o,s){var c,f,p,d=0,h="0",g=e&&[],v=[],y=ei,m=e||r&&T.expr.find.TAG("*",s),x=eu+=null==y?1:Math.random()||.1;for(s&&(ei=t==eo||t||s);null!=(c=m[h]);h++){if(r&&c){f=0,t||c.ownerDocument==eo||(eE(c),i=!es);while(p=l[f++])if(p(c,t||eo,i)){a.call(o,c);break}s&&(eu=x)}n&&((c=!p&&c)&&d--,e&&g.push(c))}if(d+=h,n&&h!==d){f=0;while(p=u[f++])p(g,v,t,i);if(e){if(d>0)while(h--)g[h]||v[h]||(v[h]=j.call(o));v=eA(v)}a.apply(o,v),s&&!e&&v.length>0&&d+u.length>1&&T.uniqueSort(o)}return s&&(eu=x,ei=y),g},n?eT(i):i))).selector=e}return c}function eN(e,t,n,r){var i,o,s,u,l,c="function"==typeof e&&e,f=!r&&V(e=c.selector||e);if(n=n||[],1===f.length){if((o=f[0]=f[0].slice(0)).length>2&&"ID"===(s=o[0]).type&&9===t.nodeType&&es&&T.expr.relative[o[1].type]){if(!(t=(T.expr.find.ID(_(s.matches[0]),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=eg.needsContext.test(e)?0:o.length;while(i--){if(s=o[i],T.expr.relative[u=s.type])break;if((l=T.expr.find[u])&&(r=l(_(s.matches[0]),O.test(o[0].type)&&R(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Y(o)))return a.apply(n,r),n;break}}}return(c||eq(e,f))(r,t,!es,n,!t||O.test(e)&&R(t.parentNode)||t),n}function eO(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&T(e).is(n))break;r.push(e)}return r}function eH(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}ek.prototype=T.expr.filters=T.expr.pseudos,T.expr.setFilters=new ek,eE(),T.find=ew,ew.compile=eq,ew.select=eN,ew.setDocument=eE,ew.tokenize=V;var eL=T.expr.match.needsContext,eP=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function eR(e){return"<"===e[0]&&">"===e[e.length-1]&&e.length>=3}function eM(e,t,n){return"function"==typeof t?T.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?T.grep(e,function(e){return e===t!==n}):"string"!=typeof t?T.grep(e,function(e){return s.call(t,e)>-1!==n}):T.filter(t,e,n)}T.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?T.find.matchesSelector(r,e)?[r]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<r;t++)if(T.contains(i[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)T.find(e,i[t],n);return r>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(eM(this,e||[],!1))},not:function(e){return this.pushStack(eM(this,e||[],!0))},is:function(e){return!!eM(this,"string"==typeof e&&eL.test(e)?T(e):e||[],!1).length}});var eW,e$=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t){var n,r;if(!e)return this;if(e.nodeType)return this[0]=e,this.length=1,this;if("function"==typeof e)return void 0!==eW.ready?eW.ready(e):e(T);if(eR(n=e+""))n=[null,e,null];else{if("string"!=typeof e)return T.makeArray(e,this);n=e$.exec(e)}if(n&&(n[1]||!t)){if(!n[1])return(r=y.getElementById(n[2]))&&(this[0]=r,this.length=1),this;if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),eP.test(n[1])&&T.isPlainObject(t))for(n in t)"function"==typeof this[n]?this[n](t[n]):this.attr(n,t[n]);return this}return!t||t.jquery?(t||eW).find(e):this.constructor(t).find(e)}).prototype=T.fn,eW=T(y);var eI=/^(?:parents|prev(?:Until|All))/,eF={children:!0,contents:!0,next:!0,prev:!0};function eB(e,t){while((e=e[t])&&1!==e.nodeType);return e}function e_(e){return e}function eU(e){throw e}function eX(e,t,n,r){var i;try{e&&"function"==typeof(i=e.promise)?i.call(e).done(t).fail(n):e&&"function"==typeof(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n(e)}}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&T(e);if(!eL.test(e)){for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?T.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?s.call(T(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return eO(e,"parentNode")},parentsUntil:function(e,t,n){return eO(e,"parentNode",n)},next:function(e){return eB(e,"nextSibling")},prev:function(e){return eB(e,"previousSibling")},nextAll:function(e){return eO(e,"nextSibling")},prevAll:function(e){return eO(e,"previousSibling")},nextUntil:function(e,t,n){return eO(e,"nextSibling",n)},prevUntil:function(e,t,n){return eO(e,"previousSibling",n)},siblings:function(e){return eH((e.parentNode||{}).firstChild,e)},children:function(e){return eH(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(C(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(e,t){T.fn[e]=function(n,r){var i=T.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=T.filter(r,i)),this.length>1&&(eF[e]||T.uniqueSort(i),eI.test(e)&&i.reverse()),this.pushStack(i)}}),T.Callbacks=function(e){e="string"==typeof e?(t=e,n={},T.each(t.match(Q)||[],function(e,t){n[t]=!0}),n):T.extend({},e);var t,n,r,i,o,a,s=[],u=[],l=-1,c=function(){for(a=a||e.once,o=r=!0;u.length;l=-1){i=u.shift();while(++l<s.length)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(l=s.length,i=!1)}e.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){T.each(n,function(n,r){"function"==typeof r?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==h(r)&&t(r)})}(arguments),i&&!r&&c()),this},remove:function(){return T.each(arguments,function(e,t){var n;while((n=T.inArray(t,s,n))>-1)s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?T.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},T.extend({Deferred:function(t){var n=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return T.Deferred(function(t){T.each(n,function(n,r){var i="function"==typeof e[r[4]]&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw TypeError("Thenable self-resolution");"function"==typeof(l=e&&("object"==typeof e||"function"==typeof e)&&e.then)?i?l.call(e,a(o,n,e_,i),a(o,n,eU,i)):(o++,l.call(e,a(o,n,e_,i),a(o,n,eU,i),a(o,n,e_,n.notifyWith))):(r!==e_&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(e,c.error),t+1>=o&&(r!==eU&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(T.Deferred.getErrorHook&&(c.error=T.Deferred.getErrorHook()),e.setTimeout(c))}}return T.Deferred(function(e){n[0][3].add(a(0,e,"function"==typeof i?i:e_,e.notifyWith)),n[1][3].add(a(0,e,"function"==typeof t?t:e_)),n[2][3].add(a(0,e,"function"==typeof r?r:eU))}).promise()},promise:function(e){return null!=e?T.extend(e,i):i}},o={};return T.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),o=i.call(arguments),a=T.Deferred(),s=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?i.call(arguments):n,--t||a.resolveWith(r,o)}};if(t<=1&&(eX(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||"function"==typeof(o[n]&&o[n].then)))return a.then();while(n--)eX(o[n],s(n),a.reject);return a.promise()}});var ez=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(t,n){t&&ez.test(t.name)&&e.console.warn("jQuery.Deferred exception",t,n)},T.readyException=function(t){e.setTimeout(function(){throw t})};var eV=T.Deferred();function eY(){y.removeEventListener("DOMContentLoaded",eY),e.removeEventListener("load",eY),T.ready()}T.fn.ready=function(e){return eV.then(e).catch(function(e){T.readyException(e)}),this},T.extend({isReady:!1,readyWait:1,ready:function(e){!(!0===e?--T.readyWait:T.isReady)&&(T.isReady=!0,!0!==e&&--T.readyWait>0||eV.resolveWith(y,[T]))}}),T.ready.then=eV.then,"loading"!==y.readyState?e.setTimeout(T.ready):(y.addEventListener("DOMContentLoaded",eY),e.addEventListener("load",eY));var eG=/-([a-z])/g;function eQ(e,t){return t.toUpperCase()}function eJ(e){return e.replace(eG,eQ)}function eK(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function eZ(){this.expando=T.expando+eZ.uid++}eZ.uid=1,eZ.prototype={cache:function(e){var t=e[this.expando];return!t&&(t=Object.create(null),eK(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[eJ(t)]=n;else for(r in t)i[eJ(r)]=t[r];return n},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][eJ(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(eJ):(t=eJ(t))in r?[t]:t.match(Q)||[]).length;while(n--)delete r[t[n]]}(void 0===t||T.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var e0=new eZ,e1=new eZ,e2=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,e3=/[A-Z]/g;function e4(e,t,n){var r,i;if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(e3,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{i=n,n="true"===i||"false"!==i&&("null"===i?null:i===+i+""?+i:e2.test(i)?JSON.parse(i):i)}catch(e){}e1.set(e,t,n)}else n=void 0}return n}T.extend({hasData:function(e){return e1.hasData(e)||e0.hasData(e)},data:function(e,t,n){return e1.access(e,t,n)},removeData:function(e,t){e1.remove(e,t)},_data:function(e,t,n){return e0.access(e,t,n)},_removeData:function(e,t){e0.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=e1.get(o),1===o.nodeType&&!e0.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&e4(o,r=eJ(r.slice(5)),i[r]);e0.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){e1.set(this,e)}):G(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=e1.get(o,e))||void 0!==(n=e4(o,e))?n:void 0;this.each(function(){e1.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){e1.remove(this,e)})}}),T.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=e0.get(e,t),n&&(!r||Array.isArray(n)?r=e0.set(e,t,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),r=n.length,i=n.shift(),o=T._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){T.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return e0.get(e,n)||e0.set(e,n,{empty:T.Callbacks("once memory").add(function(){e0.remove(e,[t+"queue",n])})})}}),T.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?T.queue(this[0],e):void 0===t?this:this.each(function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)})},dequeue:function(e){return this.each(function(){T.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=T.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=e0.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var e5=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,e9=RegExp("^(?:([+-])=|)("+e5+")([a-z%]*)$","i"),e6=["Top","Right","Bottom","Left"];function e8(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&"none"===T.css(e,"display")}var e7=/^[a-z]/,te=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function tt(e){return e7.test(e)&&te.test(e[0].toUpperCase()+e.slice(1))}function tn(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return T.css(e,t,"")},u=s(),l=n&&n[3]||(tt(t)?"px":""),c=e.nodeType&&(!tt(t)||"px"!==l&&+u)&&e9.exec(T.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)T.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,T.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var tr=/^-ms-/;function ti(e){return eJ(e.replace(tr,"ms-"))}var to={};function ta(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"!==n||(i[o]=e0.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&e8(r)&&(i[o]=function(e){var t,n=e.ownerDocument,r=e.nodeName,i=to[r];return i||(t=n.body.appendChild(n.createElement(r)),i=T.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),to[r]=i),i}(r))):"none"!==n&&(i[o]="none",e0.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}T.fn.extend({show:function(){return ta(this,!0)},hide:function(){return ta(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){e8(this)?T(this).show():T(this).hide()})}});var ts=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(tu)===e.ownerDocument},tu={composed:!0};H.getRootNode||(ts=function(e){return T.contains(e.ownerDocument,e)});var tl=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tc={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};function tf(e,t){var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t))?T.merge([e],n):n}tc.tbody=tc.tfoot=tc.colgroup=tc.caption=tc.thead,tc.th=tc.td;var tp=/^$|^module$|\/(?:java|ecma)script/i;function td(e,t){for(var n=0,r=e.length;n<r;n++)e0.set(e[n],"globalEval",!t||e0.get(t[n],"globalEval"))}var th=/<|&#?\w+;/;function tg(e,t,r,i,o){for(var a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,g=e.length;d<g;d++)if((a=e[d])||0===a){if("object"===h(a)&&(a.nodeType||v(a)))T.merge(p,a.nodeType?[a]:a);else if(th.test(a)){s=s||f.appendChild(t.createElement("div")),c=(u=tc[(tl.exec(a)||["",""])[1].toLowerCase()]||n).length;while(--c>-1)s=s.appendChild(t.createElement(u[c]));s.innerHTML=T.htmlPrefilter(a),T.merge(p,s.childNodes),(s=f.firstChild).textContent=""}else p.push(t.createTextNode(a))}f.textContent="",d=0;while(a=p[d++]){if(i&&T.inArray(a,i)>-1){o&&o.push(a);continue}if(l=ts(a),s=tf(f.appendChild(a),"script"),l&&td(s),r){c=0;while(a=s[c++])tp.test(a.type||"")&&r.push(a)}}return f}function tv(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ty(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function tm(e,t,n,r){t=o(t);var i,a,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0];if("function"==typeof h)return e.each(function(i){var o=e.eq(i);t[0]=h.call(this,i,o.html()),tm(o,t,n,r)});if(p&&(a=(i=tg(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=a),a||r)){for(u=(s=T.map(tf(i,"script"),tv)).length;f<p;f++)l=i,f!==d&&(l=T.clone(l,!0,!0),u&&T.merge(s,tf(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,T.map(s,ty),f=0;f<u;f++)l=s[f],tp.test(l.type||"")&&!e0.get(l,"globalEval")&&T.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce,crossOrigin:l.crossOrigin},c):x(l.textContent,l,c))}return e}var tx=/^(?:checkbox|radio)$/i,tb=/^([^.]*)(?:\.(.+)|)/;function tw(){return!0}function tT(){return!1}function tC(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)tC(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=tT;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return T().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=T.guid++)),e.each(function(){T.event.add(this,t,i,r,n)})}function tj(e,t,n){if(!n){void 0===e0.get(e,t)&&T.event.add(e,t,tw);return}e0.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var n,r=e0.get(this,t);if(1&e.isTrigger&&this[t]){if(r.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=i.call(arguments),e0.set(this,t,r),this[t](),n=e0.get(this,t),e0.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(e0.set(this,t,{value:T.event.trigger(r[0],r.slice(1),this)}),e.stopPropagation(),e.isImmediatePropagationStopped=tw)}})}T.event={add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=e0.get(e);if(eK(e)){n.handler&&(n=(o=n).handler,i=o.selector),i&&T.find.matchesSelector(H,i),n.guid||(n.guid=T.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(t){return T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(Q)||[""]).length;while(l--){if(d=g=(s=tb.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d)continue;f=T.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=T.event.special[d]||{},c=T.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&T.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c)}}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=e0.hasData(e)&&e0.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(Q)||[""]).length;while(l--){if(d=g=(s=tb.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d){for(d in u)T.event.remove(e,d+t[l],n,r,!0);continue}f=T.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],(i||g===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||T.removeEvent(e,d,v.handle),delete u[d])}T.isEmptyObject(u)&&e0.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=Array(arguments.length),u=T.event.fix(e),l=(e0.get(this,"events")||Object.create(null))[u.type]||[],c=T.event.special[u.type]||{};for(t=1,s[0]=u;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=T.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())(!u.rnamespace||!1===o.namespace||u.rnamespace.test(o.namespace))&&(u.handleObj=o,u.data=o.data,void 0!==(r=((T.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&!("click"===e.type&&e.button>=1)){for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&!("click"===e.type&&!0===l.disabled)){for(n=0,o=[],a={};n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?T(i,this).index(l)>-1:T.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:"function"==typeof t?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:T.extend(Object.create(null),{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return tx.test(t.type)&&t.click&&C(t,"input")&&tj(t,"click",!0),!1},trigger:function(e){var t=this||e;return tx.test(t.type)&&t.click&&C(t,"input")&&tj(t,"click"),!0},_default:function(e){var t=e.target;return tx.test(t.type)&&t.click&&C(t,"input")&&e0.get(t,"click")||C(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}})},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented?tw:tT,this.target=e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:tT,isPropagationStopped:tT,isImmediatePropagationStopped:tT,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=tw,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=tw,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=tw,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){var t=T.event.fix(e);t.type="focusin"===e.type?"focus":"blur",t.isSimulated=!0,t.target===t.currentTarget&&e0.get(this,"handle")(t)}T.event.special[e]={setup:function(){if(tj(this,e,!0),!k)return!1;this.addEventListener(t,n)},trigger:function(){return tj(this,e),!0},teardown:function(){if(!k)return!1;this.removeEventListener(t,n)},_default:function(t){return e0.get(t.target,e)},delegateType:t}}),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||T.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),T.fn.extend({on:function(e,t,n,r){return tC(this,e,t,n,r)},one:function(e,t,n,r){return tC(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,T(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=tT),this.each(function(){T.event.remove(this,e,n,t)})}});var tE=/<script|<style|<link/i;function tk(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function tS(e,t){var n,r,i,o=e0.get(e,"events");if(1===t.nodeType){if(o)for(n in e0.remove(t,"handle events"),o)for(r=0,i=o[n].length;r<i;r++)T.event.add(t,n,o[n][r]);e1.hasData(e)&&e1.set(t,T.extend({},e1.get(e)))}}function tD(e,t,n){for(var r,i=t?T.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||T.cleanData(tf(r)),r.parentNode&&(n&&ts(r)&&td(tf(r,"script")),r.parentNode.removeChild(r));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=ts(e);if(k&&(1===e.nodeType||11===e.nodeType)&&!T.isXMLDoc(e))for(r=0,a=tf(s),i=(o=tf(e)).length;r<i;r++)C(a[r],"textarea")&&(a[r].defaultValue=o[r].defaultValue);if(t){if(n)for(r=0,o=o||tf(e),a=a||tf(s),i=o.length;r<i;r++)tS(o[r],a[r]);else tS(e,s)}return(a=tf(s,"script")).length>0&&td(a,!u&&tf(e,"script")),s},cleanData:function(e){for(var t,n,r,i=T.event.special,o=0;void 0!==(n=e[o]);o++)if(eK(n)){if(t=n[e0.expando]){if(t.events)for(r in t.events)i[r]?T.event.remove(n,r):T.removeEvent(n,r,t.handle);n[e0.expando]=void 0}n[e1.expando]&&(n[e1.expando]=void 0)}}}),T.fn.extend({detach:function(e){return tD(this,e,!0)},remove:function(e){return tD(this,e)},text:function(e){return G(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return tm(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&tk(this,e).appendChild(e)})},prepend:function(){return tm(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=tk(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return tm(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return tm(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(tf(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return G(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!tE.test(e)&&!tc[(tl.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(T.cleanData(tf(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return tm(this,arguments,function(t){var n=this.parentNode;0>T.inArray(this,e)&&(T.cleanData(tf(this)),n&&n.replaceChild(t,this))},e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){T.fn[e]=function(e){for(var n,r=[],i=T(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),T(i[s])[t](n),a.apply(r,n);return this.pushStack(r)}});var tA=RegExp("^("+e5+")(?!px)[a-z%]+$","i"),tq=/^--/;function tN(t){var n=t.ownerDocument.defaultView;return n||(n=e),n.getComputedStyle(t)}function tO(e,t,n){var r,i=tq.test(t);return(n=n||tN(e))&&(r=n.getPropertyValue(t)||n[t],i&&r&&(r=r.replace(D,"$1")||void 0),""!==r||ts(e)||(r=T.style(e,t))),void 0!==r?r+"":r}var tH=["Webkit","Moz","ms"],tL=y.createElement("div").style,tP={};function tR(e){return tP[e]||(e in tL?e:tP[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=tH.length;while(n--)if((e=tH[n]+t)in tL)return e}(e)||e)}(tX=y.createElement("div")).style&&(d.reliableTrDimensions=function(){var t,n,r;if(null==tU){if(t=y.createElement("table"),n=y.createElement("tr"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",n.style.height="1px",tX.style.height="9px",tX.style.display="block",H.appendChild(t).appendChild(n).appendChild(tX),0===t.offsetWidth){H.removeChild(t);return}tU=Math.round(parseFloat((r=e.getComputedStyle(n)).height))+Math.round(parseFloat(r.borderTopWidth))+Math.round(parseFloat(r.borderBottomWidth))===n.offsetHeight,H.removeChild(t)}return tU});var tM=/^(none|table(?!-c[ea]).+)/,tW={position:"absolute",visibility:"hidden",display:"block"},t$={letterSpacing:"0",fontWeight:"400"};function tI(e,t,n){var r=e9.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function tF(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=T.css(e,n+e6[a],!0,i)),r?("content"===n&&(u-=T.css(e,"padding"+e6[a],!0,i)),"margin"!==n&&(u-=T.css(e,"border"+e6[a]+"Width",!0,i))):(u+=T.css(e,"padding"+e6[a],!0,i),"padding"!==n?u+=T.css(e,"border"+e6[a]+"Width",!0,i):s+=T.css(e,"border"+e6[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function tB(e,t,n){var r=tN(e),i=(k||n)&&"border-box"===T.css(e,"boxSizing",!1,r),o=i,a=tO(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(tA.test(a)){if(!n)return a;a="auto"}return("auto"===a||k&&i||!d.reliableTrDimensions()&&C(e,"tr"))&&e.getClientRects().length&&(i="border-box"===T.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+tF(e,t,n||(i?"border":"content"),o,r,a)+"px"}function t_(e,t,n,r,i){return new t_.prototype.init(e,t,n,r,i)}T.extend({cssHooks:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=ti(t),u=tq.test(t),l=e.style;if(u||(t=tR(s)),a=T.cssHooks[t]||T.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=e9.exec(n))&&i[1]&&(n=tn(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(tt(s)?"px":"")),k&&""===n&&0===t.indexOf("background")&&(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=ti(t);return(tq.test(t)||(t=tR(s)),(a=T.cssHooks[t]||T.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=tO(e,t,r)),"normal"===i&&t in t$&&(i=t$[t]),""===n||n)?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),T.each(["height","width"],function(e,t){T.cssHooks[t]={get:function(e,n,r){if(n)return!tM.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tB(e,t,r):function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r}(e,tW,function(){return tB(e,t,r)})},set:function(e,n,r){var i,o=tN(e),a=r&&"border-box"===T.css(e,"boxSizing",!1,o),s=r?tF(e,t,r,a,o):0;return s&&(i=e9.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),tI(e,n,s)}}}),T.each({margin:"",padding:"",border:"Width"},function(e,t){T.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+e6[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(T.cssHooks[e+t].set=tI)}),T.fn.extend({css:function(e,t){return G(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=tN(e),i=t.length;a<i;a++)o[t[a]]=T.css(e,t[a],!1,r);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)},e,t,arguments.length>1)}}),T.Tween=t_,t_.prototype={constructor:t_,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(tt(n)?"px":"")},cur:function(){var e=t_.propHooks[this.prop];return e&&e.get?e.get(this):t_.propHooks._default.get(this)},run:function(e){var t,n=t_.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):t_.propHooks._default.set(this),this}},t_.prototype.init.prototype=t_.prototype,t_.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1===e.elem.nodeType&&(T.cssHooks[e.prop]||null!=e.elem.style[tR(e.prop)])?T.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},T.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=t_.prototype.init,T.fx.step={};var tU,tX,tz,tV,tY=/^(?:toggle|show|hide)$/,tG=/queueHooks$/;function tQ(){return e.setTimeout(function(){tz=void 0}),tz=Date.now()}function tJ(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=e6[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function tK(e,t,n){for(var r,i=(tZ.tweeners[t]||[]).concat(tZ.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function tZ(e,t,n){var r,i,o=0,a=tZ.prefilters.length,s=T.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=tz||tQ(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return(s.notifyWith(e,[l,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:tz||tQ(),duration:n.duration,tweens:[],createTween:function(t,n){var r=T.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=ti(n)],Array.isArray(o=e[n])&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=T.cssHooks[r])&&("expand"in a))for(n in o=a.expand(o),delete e[r],o)(n in e)||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=tZ.prefilters[o].call(l,e,c,l.opts))return"function"==typeof r.stop&&(T._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return T.map(c,tK,l),"function"==typeof l.opts.start&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),T.fx.timer(T.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}T.Animation=T.extend(tZ,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return tn(n.elem,e,e9.exec(t),n),n}]},tweener:function(e,t){"function"==typeof e?(t=e,e=["*"]):e=e.match(Q);for(var n,r=0,i=e.length;r<i;r++)n=e[r],tZ.tweeners[n]=tZ.tweeners[n]||[],tZ.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&e8(e),v=e0.get(e,"fxshow");for(r in n.queue||(null==(a=T._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,T.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],tY.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||T.style(e,r)}if(!(!(u=!T.isEmptyObject(t))&&T.isEmptyObject(d)))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=e0.get(e,"display")),"none"===(c=T.css(e,"display"))&&(l?c=l:(ta([e],!0),l=e.style.display||l,c=T.css(e,"display"),ta([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===T.css(e,"float")&&(u||(p.done(function(){h.display=l}),null!=l||(l="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=e0.set(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&ta([e],!0),p.done(function(){for(r in g||ta([e]),e0.remove(e,"fxshow"),d)T.style(e,r,d[r])})),u=tK(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?tZ.prefilters.unshift(e):tZ.prefilters.push(e)}}),T.speed=function(e,t,n){var r=e&&"object"==typeof e?T.extend({},e):{complete:n||t||"function"==typeof e&&e,duration:e,easing:n&&t||t&&"function"!=typeof t&&t};return T.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in T.fx.speeds?r.duration=T.fx.speeds[r.duration]:r.duration=T.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){"function"==typeof r.old&&r.old.call(this),r.queue&&T.dequeue(this,r.queue)},r},T.fn.extend({fadeTo:function(e,t,n,r){return this.filter(e8).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=T.isEmptyObject(e),o=T.speed(t,n,r),a=function(){var t=tZ(this,T.extend({},e),o);(i||e0.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=T.timers,a=e0.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&tG.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem===this&&(null==e||o[i].queue===e)&&(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&T.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=e0.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=T.timers,a=r?r.length:0;for(n.finish=!0,T.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),T.each(["toggle","show","hide"],function(e,t){var n=T.fn[t];T.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tJ(t,!0),e,r,i)}}),T.each({slideDown:tJ("show"),slideUp:tJ("hide"),slideToggle:tJ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){T.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(tz=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),tz=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.start=function(){tV||(tV=!0,function t(){tV&&(!1===y.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,13),T.fx.tick())}())},T.fx.stop=function(){tV=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(t,n){return t=T.fx&&T.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})};var t0=/^(?:input|select|textarea|button)$/i,t1=/^(?:a|area)$/i;function t2(e){return(e.match(Q)||[]).join(" ")}function t3(e){return e.getAttribute&&e.getAttribute("class")||""}function t4(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Q)||[]}T.fn.extend({prop:function(e,t){return G(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e]})}}),T.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return(1===o&&T.isXMLDoc(e)||(t=T.propFix[t]||t,i=T.propHooks[t]),void 0!==n)?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=e.getAttribute("tabindex");return t?parseInt(t,10):t0.test(e.nodeName)||t1.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),k&&(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,n,r,i,o,a;return"function"==typeof e?this.each(function(t){T(this).addClass(e.call(this,t,t3(this)))}):(t=t4(e)).length?this.each(function(){if(r=t3(this),n=1===this.nodeType&&" "+t2(r)+" "){for(o=0;o<t.length;o++)i=t[o],0>n.indexOf(" "+i+" ")&&(n+=i+" ");r!==(a=t2(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,r,i,o,a;return"function"==typeof e?this.each(function(t){T(this).removeClass(e.call(this,t,t3(this)))}):arguments.length?(t=t4(e)).length?this.each(function(){if(r=t3(this),n=1===this.nodeType&&" "+t2(r)+" "){for(o=0;o<t.length;o++){i=t[o];while(n.indexOf(" "+i+" ")>-1)n=n.replace(" "+i+" "," ")}r!==(a=t2(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o;return"function"==typeof e?this.each(function(n){T(this).toggleClass(e.call(this,n,t3(this),t),t)}):"boolean"==typeof t?t?this.addClass(e):this.removeClass(e):(n=t4(e)).length?this.each(function(){for(i=0,o=T(this);i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r)}):this},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+t2(t3(n))+" ").indexOf(t)>-1)return!0;return!1}}),T.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r="function"==typeof e,this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,T(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=T.map(i,function(e){return null==e?"":e+""})),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=T.valHooks[i.type]||T.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:null==(n=i.value)?"":n:void 0}}),T.extend({valHooks:{select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if((n=i[r]).selected&&!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){if(t=T(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=T.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=T.inArray(T(r).val(),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k&&(T.valHooks.option={get:function(e){var t=e.getAttribute("value");return null!=t?t:t2(T.text(e))}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}}});var t5=/^(?:focusinfocus|focusoutblur)$/,t9=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(t,n,r,i){var o,a,s,u,l,f,p,d,h=[r||y],v=c.call(t,"type")?t.type:t,m=c.call(t,"namespace")?t.namespace.split("."):[];if(a=d=s=r=r||y,!(3===r.nodeType||8===r.nodeType||t5.test(v+T.event.triggered))&&(v.indexOf(".")>-1&&(v=(m=v.split(".")).shift(),m.sort()),l=0>v.indexOf(":")&&"on"+v,(t=t[T.expando]?t:new T.Event(v,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:T.makeArray(n,[t]),p=T.event.special[v]||{},i||!p.trigger||!1!==p.trigger.apply(r,n))){if(!i&&!p.noBubble&&!g(r)){for(u=p.delegateType||v,t5.test(u+v)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||y)&&h.push(s.defaultView||s.parentWindow||e)}o=0;while((a=h[o++])&&!t.isPropagationStopped())d=a,t.type=o>1?u:p.bindType||v,(f=(e0.get(a,"events")||Object.create(null))[t.type]&&e0.get(a,"handle"))&&f.apply(a,n),(f=l&&a[l])&&f.apply&&eK(a)&&(t.result=f.apply(a,n),!1===t.result&&t.preventDefault());return t.type=v,!i&&!t.isDefaultPrevented()&&(!p._default||!1===p._default.apply(h.pop(),n))&&eK(r)&&l&&"function"==typeof r[v]&&!g(r)&&((s=r[l])&&(r[l]=null),T.event.triggered=v,t.isPropagationStopped()&&d.addEventListener(v,t9),r[v](),t.isPropagationStopped()&&d.removeEventListener(v,t9),T.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(r,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each(function(){T.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}});var t6=e.location,t8={guid:Date.now()},t7=/\?/;T.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],(!n||r)&&T.error("Invalid XML: "+(r?T.map(r.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var ne=/\[\]$/,nt=/\r?\n/g,nn=/^(?:submit|button|image|reset|file)$/i,nr=/^(?:input|select|textarea|keygen)/i;T.param=function(e,t){var n,r=[],i=function(e,t){var n="function"==typeof t?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){i(this.name,this.value)});else for(n in e)!function e(t,n,r,i){var o;if(Array.isArray(n))T.each(n,function(n,o){r||ne.test(t)?i(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,r,i)});else if(r||"object"!==h(n))i(t,n);else for(o in n)e(t+"["+o+"]",n[o],r,i)}(n,e[n],t,i);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&nr.test(this.nodeName)&&!nn.test(e)&&(this.checked||!tx.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return{name:t.name,value:e.replace(nt,"\r\n")}}):{name:t.name,value:n.replace(nt,"\r\n")}}).get()}});var ni=/%20/g,no=/#.*$/,na=/([?&])_=[^&]*/,ns=/^(.*?):[ \t]*([^\r\n]*)$/mg,nu=/^(?:GET|HEAD)$/,nl=/^\/\//,nc={},nf={},np="*/".concat("*"),nd=y.createElement("a");function nh(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Q)||[];if("function"==typeof n)while(r=o[i++])"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}function ng(e,t,n,r){var i={},o=e===nf;function a(s){var u;return i[s]=!0,T.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function nv(e,t){var n,r,i=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&T.extend(!0,e,r),e}nd.href=t6.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:t6.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(t6.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":np,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?nv(nv(e,T.ajaxSettings),t):nv(T.ajaxSettings,e)},ajaxPrefilter:nh(nc),ajaxTransport:nh(nf),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f,p,d=T.ajaxSetup({},n),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?T(h):T.event,v=T.Deferred(),m=T.Callbacks("once memory"),x=d.statusCode||{},b={},w={},C="canceled",j={readyState:0,getResponseHeader:function(e){var t;if(l){if(!a){a={};while(t=ns.exec(o))a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(b[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},statusCode:function(e){var t;if(e){if(l)j.always(e[j.status]);else for(t in e)x[t]=[x[t],e[t]]}return this},abort:function(e){var t=e||C;return r&&r.abort(t),E(0,t),this}};if(v.promise(j),d.url=((t||d.url||t6.href)+"").replace(nl,t6.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(Q)||[""],null==d.crossDomain){u=y.createElement("a");try{u.href=d.url,u.href=u.href,d.crossDomain=nd.protocol+"//"+nd.host!=u.protocol+"//"+u.host}catch(e){d.crossDomain=!0}}if(ng(nc,d,n,j),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=T.param(d.data,d.traditional)),l)return j;for(f in(c=T.event&&d.global)&&0==T.active++&&T.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!nu.test(d.type),i=d.url.replace(no,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(ni,"+")):(p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(t7.test(i)?"&":"?")+d.data,delete d.data),!1===d.cache&&(i=i.replace(na,"$1"),p=(t7.test(i)?"&":"?")+"_="+t8.guid+++p),d.url=i+p),d.ifModified&&(T.lastModified[i]&&j.setRequestHeader("If-Modified-Since",T.lastModified[i]),T.etag[i]&&j.setRequestHeader("If-None-Match",T.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&j.setRequestHeader("Content-Type",d.contentType),j.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+np+"; q=0.01":""):d.accepts["*"]),d.headers)j.setRequestHeader(f,d.headers[f]);if(d.beforeSend&&(!1===d.beforeSend.call(h,j,d)||l))return j.abort();if(C="abort",m.add(d.complete),j.done(d.success),j.fail(d.error),r=ng(nf,d,n,j)){if(j.readyState=1,c&&g.trigger("ajaxSend",[j,d]),l)return j;d.async&&d.timeout>0&&(s=e.setTimeout(function(){j.abort("timeout")},d.timeout));try{l=!1,r.send(b,E)}catch(e){if(l)throw e;E(-1,e)}}else E(-1,"No Transport");function E(t,n,a,u){var f,p,y,b,w,C=n;!l&&(l=!0,s&&e.clearTimeout(s),r=void 0,o=u||"",j.readyState=t>0?4:0,f=t>=200&&t<300||304===t,a&&(b=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r){for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,j,a)),!f&&T.inArray("script",d.dataTypes)>-1&&0>T.inArray("json",d.dataTypes)&&(d.converters["text script"]=function(){}),b=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift()){if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o])){for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}}if(!0!==a){if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}}}return{state:"success",data:t}}(d,b,j,f),f?(d.ifModified&&((w=j.getResponseHeader("Last-Modified"))&&(T.lastModified[i]=w),(w=j.getResponseHeader("etag"))&&(T.etag[i]=w)),204===t||"HEAD"===d.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,f=!(y=b.error))):(y=C,(t||!C)&&(C="error",t<0&&(t=0))),j.status=t,j.statusText=(n||C)+"",f?v.resolveWith(h,[p,C,j]):v.rejectWith(h,[j,C,y]),j.statusCode(x),x=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[j,d,f?p:y]),m.fireWith(h,[j,C]),!c||(g.trigger("ajaxComplete",[j,d]),--T.active||T.event.trigger("ajaxStop")))}return j},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,t){T[t]=function(e,n,r,i){return("function"==typeof n||null===n)&&(i=i||r,r=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:i,data:n,success:r},T.isPlainObject(e)&&e))}}),T.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),T._evalUrl=function(e,t,n){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,scriptAttrs:t.crossOrigin?{crossOrigin:t.crossOrigin}:void 0,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&("function"==typeof e&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return"function"==typeof e?this.each(function(t){T(this).wrapInner(e.call(this,t))}):this.each(function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t="function"==typeof e;return this.each(function(n){T(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){return new e.XMLHttpRequest};var ny={0:200};function nm(e){return e.scriptAttrs||!e.headers&&(e.crossDomain||e.async&&0>T.inArray("json",e.dataTypes))}T.ajaxTransport(function(e){var t;return{send:function(n,r){var i,o=e.xhr();if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];for(i in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(t=o.onload=o.onerror=o.onabort=o.ontimeout=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(ny[o.status]||o.status,o.statusText,"text"===(o.responseType||"text")?{text:o.responseText}:{binary:o.response},o.getAllResponseHeaders()))}},o.onload=t(),o.onabort=o.onerror=o.ontimeout=t("error"),t=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),nm(e)&&(e.type="GET")}),T.ajaxTransport("script",function(e){if(nm(e)){var t,n;return{send:function(r,i){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var nx=[],nb=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=nx.pop()||T.expando+"_"+t8.guid++;return this[e]=!0,e}}),T.ajaxPrefilter("jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(nb.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&nb.test(t.data)&&"data");return i=t.jsonpCallback="function"==typeof t.jsonpCallback?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(nb,"$1"+i):!1!==t.jsonp&&(t.url+=(t7.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||T.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?T(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,nx.push(i)),a&&"function"==typeof o&&o(a[0]),a=o=void 0}),"script"}),T.ajaxPrefilter(function(t,n){"string"==typeof t.data||T.isPlainObject(t.data)||Array.isArray(t.data)||"processData"in n||(t.processData=!1),t.data instanceof e.FormData&&(t.contentType=!1)}),T.parseHTML=function(e,t,n){var r,i,o;return"string"==typeof e||eR(e+"")?("boolean"==typeof t&&(n=t,t=!1),t||((r=(t=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,t.head.appendChild(r)),i=eP.exec(e),o=!n&&[],i)?[t.createElement(i[1])]:(i=tg([e],t,o),o&&o.length&&T(o).remove(),T.merge([],i.childNodes)):[]},T.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=t2(e.slice(s)),e=e.slice(0,s)),"function"==typeof t?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&T.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?T("<div>").append(T.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=T.css(e,"position"),c=T(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=T.css(e,"top"),u=T.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),"function"==typeof t&&(t=t.call(e,n,T.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===T.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&e!==n.documentElement&&"static"===T.css(e,"position"))e=e.offsetParent||n.documentElement;e&&e!==r&&1===e.nodeType&&"static"!==T.css(e,"position")&&(i=T(e).offset(),i.top+=T.css(e,"borderTopWidth",!0),i.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-T.css(r,"marginTop",!0),left:t.left-i.left-T.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===T.css(e,"position"))e=e.offsetParent;return e||H})}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;T.fn[e]=function(r){return G(this,function(e,r,i){var o;if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),T.each({Height:"height",Width:"width"},function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){T.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return G(this,function(t,n,i){var o;return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?T.css(t,n,s):T.style(t,n,i,s)},t,a?i:void 0,a)}})}),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){T.fn[t]=function(e){return this.on(t,e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),T.proxy=function(e,t){var n,r,o;if("string"==typeof t&&(n=e[t],t=e,e=n),"function"==typeof e)return r=i.call(arguments,2),(o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}).guid=e.guid=e.guid||T.guid++,o},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},"function"==typeof define&&define.amd&&define("jquery",[],function(){return T});var nw=e.jQuery,nT=e.$;return T.noConflict=function(t){return e.$===T&&(e.$=nT),t&&e.jQuery===T&&(e.jQuery=nw),T},void 0===t&&(e.jQuery=e.$=T),T});;
/* @license MIT https://raw.githubusercontent.com/jashkenas/underscore/1.13.7/LICENSE */
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.7
//     https://underscorejs.org
//     (c) 2009-2024 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.7",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,i=t.push,o=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function w(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function _(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),V=l&&(!/\[native code\]/.test(String(DataView))||R(new DataView(new ArrayBuffer(8)))),F="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=V?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,i=D(u)&&u.prototype||e,o="constructor";for(W(n,o)&&!r.contains(o)&&r.push(o);t--;)(o=b[t])in n&&n[o]!==i[o]&&!r.contains(o)&&r.push(o)}function nn(n){if(!w(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var i=typeof n;return("function"===i||"object"===i||"object"==typeof r)&&function n(r,t,e,i){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var o=a.call(r);if(o!==a.call(t))return!1;if(V&&"[object Object]"==o&&q(r)){if(!q(t))return!1;o=un}switch(o){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,i)}var f="[object Array]"===o;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}i=i||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return i[s]===t;if(e.push(r),i.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,i))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,i))return!1}return e.pop(),i.pop(),!0}(n,r,t,e)}function an(n){if(!w(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=F?fn(vn):x("Map"),gn=F?fn(hn):x("WeakMap"),bn=F?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function wn(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function _n(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,f=0;f<a;f++){var c=o[f];r&&void 0!==t[c]||(t[c]=i[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!w(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return _(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}}return function(){return n.apply(r,arguments)}}function Vn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):w(n)&&!U(n)?kn(n):Dn(n)}function Fn(n,r){return Vn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Fn?tn.iteratee(n,r):Vn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Fn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(wn(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=Mn(n.prototype),o=n.apply(i,u);return w(o)?o:i}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,i=r.length,o=Array(i),a=0;a<i;a++)o[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)o.push(arguments[u++]);return Zn(n,e,this,this,o)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,i=0,o=Y(n);i<o;i++){var a=n[i];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var ir=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),or=nr(ir,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),i=0,o=Y(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i}function yr(n,r,t){return function(e,u,i){var a=0,f=Y(e);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+f,a):f=i>=0?Math.min(i+1,f):i+f+1;else if(t&&i&&f)return e[i=t(e,u)]===u?i:-1;if(u!=u)return(i=r(o.call(e,a,f),$))>=0?i+a:-1;for(i=n>0?a:f-1;i>=0&&i<f;i+=n)if(e[i]===u)return i;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=nn(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i}function wr(n){var r=function(r,t,e,u){var i=!tr(r)&&nn(r),o=(i||r).length,a=n>0?0:o-1;for(u||(e=r[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var f=i?i[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var i=arguments.length>=3;return r(n,Rn(t,u,4),e,i)}}var _r=wr(1),Ar=wr(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var i=u;if(!i){if(e&&e.length&&(n=Nn(n,e)),null==n)return;i=n[r]}return null==i?i:i.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,i=-1/0,o=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>i&&(i=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?o.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=Un(o,i),f=e[o];e[o]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var o=e(r,u,t);n(i,r,o)})),i}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Vr=Dr((function(n,r,t){n[t]=r})),Fr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return o.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return o.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],i=[],o=0,a=Y(n);o<a;o++){var f=n[o],c=t?t(f,o,n):f;r&&!t?(o&&i===c||u.push(f),i=c):t?Mr(i,c)||(i.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(_n(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return i.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:w,isNull:function(n){return null===n},isUndefined:_,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:wn,functions:_n,methods:_n,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return w(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,(function(r,t,e,o,a){return i+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),r})),i+="';\n";var o,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else i="with(obj||{}){\n"+i+"}\n",a="obj";i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{o=new Function(a,"_",i)}catch(n){throw n.source=i,n}var f=function(n){return o.call(this,n,tn)};return f.source="function("+a+"){\n"+i+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=D(i)?i.call(n):i}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Fn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return W(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},delay:ir,defer:or,throttle:function(n,r,t){var e,u,i,o,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,o=n.apply(u,i),e||(u=i=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,i=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,o=n.apply(u,i),e||(u=i=null)):e||!1===t.trailing||(e=setTimeout(f,l)),o};return c.cancel=function(){clearTimeout(e),a=0,e=u=i=null},c},debounce:function(n,r,t){var e,u,i,o,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(o=n.apply(a,i)),e||(i=a=null))},c=j((function(c){return a=this,i=c,u=Wn(),e||(e=setTimeout(f,r),t&&(o=n.apply(a,i))),o}));return c.cancel=function(){clearTimeout(e),e=i=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:_r,foldl:_r,inject:_r,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,i=1/0,o=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<i&&(i=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)}));return i},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Vr,countBy:Fr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var i=n[e];if(!Mr(r,i)){var o;for(o=1;o<t&&Mr(arguments[o],i);o++);o===t&&r.push(i)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(o.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/* @license GPL-2.0-or-later https://git.drupalcode.org/project/once/-/raw/v1.0.1/LICENSE.md */
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/* @license MIT https://raw.githubusercontent.com/jashkenas/backbone/1.6.0/LICENSE */
(function(r){var n=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(t,e,i){n.Backbone=r(n,i,t,e)})}else if(typeof exports!=="undefined"){var t=require("underscore"),e;try{e=require("jquery")}catch(t){}r(n,exports,t,e)}else{n.Backbone=r(n,{},n._,n.jQuery||n.Zepto||n.ender||n.$)}})(function(t,h,x,e){var i=t.Backbone;var a=Array.prototype.slice;h.VERSION="1.6.0";h.$=e;h.noConflict=function(){t.Backbone=i;return this};h.emulateHTTP=false;h.emulateJSON=false;var r=h.Events={};var o=/\s+/;var l;var u=function(t,e,i,r,n){var s=0,a;if(i&&typeof i==="object"){if(r!==void 0&&"context"in n&&n.context===void 0)n.context=r;for(a=x.keys(i);s<a.length;s++){e=u(t,e,a[s],i[a[s]],n)}}else if(i&&o.test(i)){for(a=i.split(o);s<a.length;s++){e=t(e,a[s],r,n)}}else{e=t(e,i,r,n)}return e};r.on=function(t,e,i){this._events=u(n,this._events||{},t,e,{context:i,ctx:this,listening:l});if(l){var r=this._listeners||(this._listeners={});r[l.id]=l;l.interop=false}return this};r.listenTo=function(t,e,i){if(!t)return this;var r=t._listenId||(t._listenId=x.uniqueId("l"));var n=this._listeningTo||(this._listeningTo={});var s=l=n[r];if(!s){this._listenId||(this._listenId=x.uniqueId("l"));s=l=n[r]=new p(this,t)}var a=c(t,e,i,this);l=void 0;if(a)throw a;if(s.interop)s.on(e,i);return this};var n=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,r){try{t.on(e,i,r)}catch(t){return t}};r.off=function(t,e,i){if(!this._events)return this;this._events=u(s,this._events,t,e,{context:i,listeners:this._listeners});return this};r.stopListening=function(t,e,i){var r=this._listeningTo;if(!r)return this;var n=t?[t._listenId]:x.keys(r);for(var s=0;s<n.length;s++){var a=r[n[s]];if(!a)break;a.obj.off(e,i,this);if(a.interop)a.off(e,i)}if(x.isEmpty(r))this._listeningTo=void 0;return this};var s=function(t,e,i,r){if(!t)return;var n=r.context,s=r.listeners;var a=0,o;if(!e&&!n&&!i){for(o=x.keys(s);a<o.length;a++){s[o[a]].cleanup()}return}o=e?[e]:x.keys(t);for(;a<o.length;a++){e=o[a];var h=t[e];if(!h)break;var l=[];for(var u=0;u<h.length;u++){var c=h[u];if(i&&i!==c.callback&&i!==c.callback._callback||n&&n!==c.context){l.push(c)}else{var f=c.listening;if(f)f.off(e,i)}}if(l.length){t[e]=l}else{delete t[e]}}return t};r.once=function(t,e,i){var r=u(f,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(r,e,i)};r.listenToOnce=function(t,e,i){var r=u(f,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,r)};var f=function(t,e,i,r){if(i){var n=t[e]=x.once(function(){r(e,n);i.apply(this,arguments)});n._callback=i}return t};r.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];u(d,this._events,t,void 0,i);return this};var d=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)v(n,r);if(s)v(s,[e].concat(r))}return t};var v=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};var p=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};p.prototype.on=r.on;p.prototype.off=function(t,e){var i;if(this.interop){this._events=u(s,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};p.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};r.bind=r.on;r.unbind=r.off;x.extend(h,r);var g=h.Model=function(t,e){var i=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=x.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};var r=x.result(this,"defaults");i=x.defaults(x.extend({},r,i),r);this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};x.extend(g.prototype,r,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return x.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return x.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!x.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(t==null)return this;var r;if(typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i||(i={});if(!this._validate(r,i))return false;var n=i.unset;var s=i.silent;var a=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=x.clone(this.attributes);this.changed={}}var h=this.attributes;var l=this.changed;var u=this._previousAttributes;for(var c in r){e=r[c];if(!x.isEqual(h[c],e))a.push(c);if(!x.isEqual(u[c],e)){l[c]=e}else{delete l[c]}n?delete h[c]:h[c]=e}if(this.idAttribute in r){var f=this.id;this.id=this.get(this.idAttribute);this.trigger("changeId",this,f,i)}if(!s){if(a.length)this._pending=i;for(var d=0;d<a.length;d++){this.trigger("change:"+a[d],this,h[a[d]],i)}}if(o)return this;if(!s){while(this._pending){i=this._pending;this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,x.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,x.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!x.isEmpty(this.changed);return x.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?x.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var i={};var r;for(var n in t){var s=t[n];if(x.isEqual(e[n],s))continue;i[n]=s;r=true}return r?i:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return x.clone(this._previousAttributes)},fetch:function(i){i=x.extend({parse:true},i);var r=this;var n=i.success;i.success=function(t){var e=i.parse?r.parse(t,i):t;if(!r.set(e,i))return false;if(n)n.call(i.context,r,t,i);r.trigger("sync",r,t,i)};G(this,i);return this.sync("read",this,i)},save:function(t,e,i){var r;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=x.extend({validate:true,parse:true},i);var n=i.wait;if(r&&!n){if(!this.set(r,i))return false}else if(!this._validate(r,i)){return false}var s=this;var a=i.success;var o=this.attributes;i.success=function(t){s.attributes=o;var e=i.parse?s.parse(t,i):t;if(n)e=x.extend({},r,e);if(e&&!s.set(e,i))return false;if(a)a.call(i.context,s,t,i);s.trigger("sync",s,t,i)};G(this,i);if(r&&n)this.attributes=x.extend({},o,r);var h=this.isNew()?"create":i.patch?"patch":"update";if(h==="patch"&&!i.attrs)i.attrs=r;var l=this.sync(h,this,i);this.attributes=o;return l},destroy:function(e){e=e?x.clone(e):{};var i=this;var r=e.success;var n=e.wait;var s=function(){i.stopListening();i.trigger("destroy",i,i.collection,e)};e.success=function(t){if(n)s();if(r)r.call(e.context,i,t,e);if(!i.isNew())i.trigger("sync",i,t,e)};var t=false;if(this.isNew()){x.defer(e.success)}else{G(this,e);t=this.sync("delete",this,e)}if(!n)s();return t},url:function(){var t=x.result(this,"urlRoot")||x.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},x.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=x.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,x.extend(e,{validationError:i}));return false}});var m=h.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,x.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var _={add:true,remove:false};var E=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};x.extend(m.prototype,r,{model:g,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,x.extend({merge:false},e,_))},remove:function(t,e){e=x.extend({},e);var i=!x.isArray(t);t=i?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return i?r[0]:r},set:function(t,e){if(t==null)return;e=x.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var i=!x.isArray(t);t=i?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var n=[];var s=[];var a=[];var o=[];var h={};var l=e.add;var u=e.merge;var c=e.remove;var f=false;var d=this.comparator&&r==null&&e.sort!==false;var v=x.isString(this.comparator)?this.comparator:null;var p,g;for(g=0;g<t.length;g++){p=t[g];var m=this.get(p);if(m){if(u&&p!==m){var _=this._isModel(p)?p.attributes:p;if(e.parse)_=m.parse(_,e);m.set(_,e);a.push(m);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;n.push(m)}t[g]=m}else if(l){p=t[g]=this._prepareModel(p,e);if(p){s.push(p);this._addReference(p,e);h[p.cid]=true;n.push(p)}}}if(c){for(g=0;g<this.length;g++){p=this.models[g];if(!h[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&l&&c;if(n.length&&b){y=this.length!==n.length||x.some(this.models,function(t,e){return t!==n[e]});this.models.length=0;E(this.models,n,0);this.length=this.models.length}else if(s.length){if(d)f=true;E(this.models,s,r==null?this.length:r);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(g=0;g<s.length;g++){if(r!=null)e.index=r+g;p=s[g];p.trigger("add",p,this,e)}if(f||y)this.trigger("sort",this,e);if(s.length||o.length||a.length){e.changes={added:s,removed:o,merged:a};this.trigger("update",this,e)}}return i?t[0]:t},reset:function(t,e){e=e?x.clone(e):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],e)}e.previousModels=this.models;this._reset();t=this.add(t,x.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,x.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,x.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return a.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t,t.idAttribute)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var i=e.length;if(x.isFunction(e))e=e.bind(this);if(i===1||x.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(i){i=x.extend({parse:true},i);var r=i.success;var n=this;i.success=function(t){var e=i.reset?"reset":"set";n[e](t,i);if(r)r.call(i.context,n,t,i);n.trigger("sync",n,t,i)};G(this,i);return this.sync("read",this,i)},create:function(t,e){e=e?x.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r){t.off("error",n._forwardPristineError,n);n.add(t,i)}if(s)s.call(i.context,t,e,i)};if(r){t.once("error",this._forwardPristineError,this)}t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t,e){return t[e||this.model.prototype.idAttribute||"id"]},values:function(){return new b(this,S)},keys:function(){return new b(this,I)},entries:function(){return new b(this,k)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?x.clone(e):{};e.collection=this;var i;if(this.model.prototype){i=new this.model(t,e)}else{i=this.model(t,e)}if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes,n.idAttribute);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}if(t.length>0&&!e.silent)delete e.index;return i},_isModel:function(t){return t instanceof g},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="changeId"){var n=this.modelId(e.previousAttributes(),e.idAttribute);var s=this.modelId(e.attributes,e.idAttribute);if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)},_forwardPristineError:function(t,e,i){if(this.has(t))return;this._onModelEvent("error",t,e,i)}});var y=typeof Symbol==="function"&&Symbol.iterator;if(y){m.prototype[y]=m.prototype.values}var b=function(t,e){this._collection=t;this._kind=e;this._index=0};var S=1;var I=2;var k=3;if(y){b.prototype[y]=function(){return this}}b.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===S){e=t}else{var i=this._collection.modelId(t.attributes,t.idAttribute);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var A=h.View=function(t){this.cid=x.uniqueId("view");this.preinitialize.apply(this,arguments);x.extend(this,x.pick(t,T));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var T=["model","collection","el","id","attributes","className","tagName","events"];x.extend(A.prototype,r,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=x.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!x.isFunction(i))i=this[i];if(!i)continue;var r=e.match(P);this.delegate(r[1],r[2],i.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=x.extend({},x.result(this,"attributes"));if(this.id)t.id=x.result(this,"id");if(this.className)t["class"]=x.result(this,"className");this.setElement(this._createElement(x.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(x.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var H=function(r,t,n,s){switch(t){case 1:return function(){return r[n](this[s])};case 2:return function(t){return r[n](this[s],t)};case 3:return function(t,e){return r[n](this[s],C(t,this),e)};case 4:return function(t,e,i){return r[n](this[s],C(t,this),e,i)};default:return function(){var t=a.call(arguments);t.unshift(this[s]);return r[n].apply(r,t)}}};var $=function(i,r,t,n){x.each(t,function(t,e){if(r[e])i.prototype[e]=H(r,t,e,n)})};var C=function(e,t){if(x.isFunction(e))return e;if(x.isObject(e)&&!t._isModel(e))return R(e);if(x.isString(e))return function(t){return t.get(e)};return e};var R=function(t){var e=x.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};x.each([[m,M,"models"],[g,N,"attributes"]],function(t){var i=t[0],e=t[1],r=t[2];i.mixin=function(t){var e=x.reduce(x.functions(t),function(t,e){t[e]=0;return t},{});$(i,t,e,r)};$(i,x,e,r)});h.sync=function(t,e,r){var i=j[t];x.defaults(r||(r={}),{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON});var n={type:i,dataType:"json"};if(!r.url){n.url=x.result(e,"url")||V()}if(r.data==null&&e&&(t==="create"||t==="update"||t==="patch")){n.contentType="application/json";n.data=JSON.stringify(r.attrs||e.toJSON(r))}if(r.emulateJSON){n.contentType="application/x-www-form-urlencoded";n.data=n.data?{model:n.data}:{}}if(r.emulateHTTP&&(i==="PUT"||i==="DELETE"||i==="PATCH")){n.type="POST";if(r.emulateJSON)n.data._method=i;var s=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",i);if(s)return s.apply(this,arguments)}}if(n.type!=="GET"&&!r.emulateJSON){n.processData=false}var a=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(a)a.call(r.context,t,e,i)};var o=r.xhr=h.ajax(x.extend(n,r));e.trigger("request",e,o,r);return o};var j={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};h.ajax=function(){return h.$.ajax.apply(h.$,arguments)};var O=h.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;x.extend(O.prototype,r,{preinitialize:function(){},initialize:function(){},route:function(i,r,n){if(!x.isRegExp(i))i=this._routeToRegExp(i);if(x.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;h.history.route(i,function(t){var e=s._extractParameters(i,t);if(s.execute(n,e,r)!==false){s.trigger.apply(s,["route:"+r].concat(e));s.trigger("route",r,e);h.history.trigger("route",s,r,e)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,e){h.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=x.result(this,"routes");var t,e=x.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return x.map(i,function(t,e){if(e===i.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=h.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;x.extend(B.prototype,r,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=x.extend({root:"/"},this.options,t);this.root=this.options.root;this._trailingSlash=this.options.trailingSlash;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var i=document.body;var r=i.insertBefore(this.iframe,i.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var n=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){n("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){n("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment){if(!this.matchRoot())return this.notfound();return false}if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(e){if(!this.matchRoot())return this.notfound();e=this.fragment=this.getFragment(e);return x.some(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}})||this.notfound()},notfound:function(){this.trigger("notfound");return false},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(!this._trailingSlash&&(t===""||t.charAt(0)==="?")){i=i.slice(0,-1)||"/"}var r=i+t;t=t.replace(W,"");var n=this.decodeFragment(t);if(this.fragment===n)return;this.fragment=n;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});h.history=new B;var D=function(t,e){var i=this;var r;if(t&&x.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}x.extend(r,i,e);r.prototype=x.create(i.prototype,t);r.prototype.constructor=r;r.__super__=i.prototype;return r};g.extend=m.extend=O.extend=A.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(e,i){var r=i.error;i.error=function(t){if(r)r.call(i.context,e,t,i);e.trigger("error",e,t,i)}};h._debug=function(){return{root:t,_:x}};return h});

/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
window.Drupal={behaviors:{},locale:{}};(function(Drupal,drupalSettings,drupalTranslations,console,Proxy,Reflect){Drupal.throwError=function(error){setTimeout(()=>{throw error;},0);};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||drupalSettings;const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].attach==='function')try{behaviors[i].attach(context,settings);}catch(e){Drupal.throwError(e);}});};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||drupalSettings;trigger=trigger||'unload';const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].detach==='function')try{behaviors[i].detach(context,settings,trigger);}catch(e){Drupal.throwError(e);}});};Drupal.checkPlain=function(str){str=str.toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');return str;};Drupal.formatString=function(str,args){const processedArgs={};Object.keys(args||{}).forEach((key)=>{switch(key.charAt(0)){case '@':processedArgs[key]=Drupal.checkPlain(args[key]);break;case '!':processedArgs[key]=args[key];break;default:processedArgs[key]=Drupal.theme('placeholder',args[key]);break;}});return Drupal.stringReplace(str,processedArgs,null);};Drupal.stringReplace=function(str,args,keys){if(str.length===0)return str;if(!Array.isArray(keys)){keys=Object.keys(args||{});keys.sort((a,b)=>a.length-b.length);}if(keys.length===0)return str;const key=keys.pop();const fragments=str.split(key);if(keys.length){for(let i=0;i<fragments.length;i++)fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));}return fragments.join(args[key]);};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(drupalTranslations?.strings?.[options.context]?.[str])str=drupalTranslations.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str;};Drupal.url=function(path){return drupalSettings.path.baseUrl+drupalSettings.path.pathPrefix+path;};Drupal.url.toAbsolute=function(url){const urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url);}catch(e){}urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href;};Drupal.url.isLocal=function(url){let absoluteUrl=Drupal.url.toAbsolute(url);let {protocol}=window.location;if(protocol==='http:'&&absoluteUrl.startsWith('https:'))protocol='https:';let baseUrl=`${protocol}//${window.location.host}${drupalSettings.path.baseUrl.slice(0,-1)}`;try{absoluteUrl=decodeURIComponent(absoluteUrl);}catch(e){}try{baseUrl=decodeURIComponent(baseUrl);}catch(e){}return absoluteUrl===baseUrl||absoluteUrl.startsWith(`${baseUrl}/`);};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;const pluralDelimiter=drupalSettings.pluralDelimiter;const translations=Drupal.t(singular+pluralDelimiter+plural,args,options).split(pluralDelimiter);let index=0;if(drupalTranslations?.pluralFormula)index=count in drupalTranslations.pluralFormula?drupalTranslations.pluralFormula[count]:drupalTranslations.pluralFormula.default;else{if(args['@count']!==1)index=1;}return translations[index];};Drupal.encodePath=function(item){return window.encodeURIComponent(item).replace(/%2F/g,'/');};Drupal.deprecationError=({message})=>{if(drupalSettings.suppressDeprecationErrors===false&&console?.warn)console.warn(`[Deprecation] ${message}`);};Drupal.deprecatedProperty=({target,deprecatedProperty,message})=>{if(!Proxy||!Reflect)return target;return new Proxy(target,{get:(target,key,...rest)=>{if(key===deprecatedProperty)Drupal.deprecationError({message});return Reflect.get(target,key,...rest);}});};Drupal.theme=function(func,...args){if(func in Drupal.theme)return Drupal.theme[func](...args);};Drupal.theme.placeholder=function(str){return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;};Drupal.elementIsVisible=function(elem){return !!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};Drupal.elementIsHidden=function(elem){return !Drupal.elementIsVisible(elem);};})(Drupal,window.drupalSettings,window.drupalTranslations,window.console,window.Proxy,window.Reflect);;
if(window.jQuery)jQuery.noConflict();document.documentElement.className+=' js';(function(Drupal,drupalSettings){const domReady=(callback)=>{const listener=()=>{callback();document.removeEventListener('DOMContentLoaded',listener);};if(document.readyState!=='loading')setTimeout(callback,0);else document.addEventListener('DOMContentLoaded',listener);};domReady(()=>{Drupal.attachBehaviors(document,drupalSettings);});})(Drupal,window.drupalSettings);;
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){"use strict";return e.ui=e.ui||{},e.ui.version="1.14.1"}));

/*!
 * jQuery UI :data 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.extend(e.expr.pseudos,{data:e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}}))})}));

/*!
 * jQuery UI Disable Selection 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));

/*!
 * jQuery UI Legacy jQuery Core patches 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";e.escapeSelector||(e.escapeSelector=function(e){return CSS.escape(e+"")}),e.fn.even&&e.fn.odd||e.fn.extend({even:function(){return this.filter((function(e){return e%2==0}))},odd:function(){return this.filter((function(e){return e%2==1}))}})}));

/*!
 * jQuery UI Scroll Parent 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.scrollParent=function(e){var s=this.css("position"),n="absolute"===s,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==s&&i.length?i:t(this[0].ownerDocument||document)}}));

/*!
 * jQuery UI Unique ID 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){"use strict";return i.fn.extend({uniqueId:(e=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++e)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var e}));

/*!
 * jQuery UI Focusable 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.focusable=function(t,i){var s,n,u,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=(s=t.parentNode).name,!(!t.href||!n||"map"!==s.nodeName.toLowerCase())&&((u=e("img[usemap='#"+n+"']")).length>0&&u.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(r)?(a=!t.disabled)&&(o=e(t).closest("fieldset")[0])&&(a=!o.disabled):a="a"===r&&t.href||i,a&&e(t).is(":visible")&&"visible"===e(t).css("visibility"))},e.extend(e.expr.pseudos,{focusable:function(t){return e.ui.focusable(t,null!=e.attr(t,"tabindex"))}}),e.ui.focusable}));

/*!
 * jQuery UI Keycode 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.plugin={add:function(n,i,t){var u,o=e.ui[n].prototype;for(u in t)o.plugins[u]=o.plugins[u]||[],o.plugins[u].push([i,t[u]])},call:function(e,n,i,t){var u,o=e.plugins[n];if(o&&(t||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(u=0;u<o.length;u++)e.options[o[u][0]]&&o[u][1].apply(e.element,i)}}}));

/*!
 * jQuery UI Widget 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";var e,i=0,s=Array.prototype.hasOwnProperty,n=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove");e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];if("__proto__"===(e=e.split(".")[1])||"constructor"===e)return t.error("Invalid widget name: "+e);var u=l+"-"+e;return s||(s=i,i=t.Widget),Array.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr.pseudos[u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(t,e){r[t]="function"==typeof e?function(){function s(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,o=this._superApply;return this._super=s,this._superApply=n,t=e.apply(this,arguments),this._super=i,this._superApply=o,t}}():e})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,o,a=n.call(arguments,1),r=0,l=a.length;r<l;r++)for(i in a[r])o=a[r][i],s.call(a[r],i)&&void 0!==o&&(t.isPlainObject(o)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):e[i]=o);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=n.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?"function"!=typeof n[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for "+e+" widget instance"):(i=n[o].apply(n,r))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(){var i=[];e.element.each((function(e,n){t.map(s.classesElementLookup,(function(t){return t})).some((function(t){return t.is(n)}))||i.push(n)})),s._on(t(i),{remove:"_untrackClassesElement"})}function o(o,a){var r,l;for(l=0;l<o.length;l++)r=s.classesElementLookup[o[l]]||t(),e.add?(n(),r=t(t.uniqueSort(r.get().concat(e.element.get())))):r=t(r.not(e.element).get()),s.classesElementLookup[o[l]]=r,i.push(o[l]),a&&e.classes[o[l]]&&i.push(e.classes[o[l]])}return(e=t.extend({element:this.element,classes:this.options.classes||{}},e)).keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})),this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!("function"==typeof a&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})?n={duration:n}:!0===n&&(n={}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));

/*!
 * jQuery UI Labels 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.labels=function(){var t,s,e,i,n;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(i=this.eq(0).parents("label"),(e=this.attr("id"))&&(n=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),s="label[for='"+CSS.escape(e)+"']",i=i.add(n.find(s).addBack(s))),this.pushStack(i)):this.pushStack([])}}));

/*!
 * jQuery UI Controlgroup 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","../widget"],t):t(jQuery)}((function(t){"use strict";var e=/ui-corner-([a-z]){2,6}/g;return t.widget("ui.controlgroup",{version:"1.14.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,(function(n,o){var s,l={};if(o)return"controlgroupLabel"===n?((s=e.element.find(o)).each((function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")})),e._addClass(s,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(s.get()))):void(t.fn[n]&&(l=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(o).each((function(){var o=t(this),s=o[n]("instance"),r=t.widget.extend({},l);if("button"!==n||!o.parent(".ui-spinner").length){s||(s=o[n]()[n]("instance")),s&&(r.classes=e._resolveClassesValues(r.classes,s)),o[n](r);var u=o[n]("widget");t.data(u[0],"ui-controlgroup-data",s||o[n]("instance")),i.push(u[0])}}))))})),this.childWidgets=t(t.uniqueSort(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each((function(){var i=t(this).data("ui-controlgroup-data");i&&i[e]&&i[e]()}))},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,n){var o={};return t.each(i,(function(t){var s=n.options.classes[t]||"";s=String.prototype.trim.call(s.replace(e,"")),o[t]=(s+" "+i[t]).replace(/\s+/g," ")})),o},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"!==t?this.refresh():this._callChildMethod(e?"disable":"enable")},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],(function(t,n){var o=e[n]().data("ui-controlgroup-data");if(o&&i["_"+o.widgetName+"Options"]){var s=i["_"+o.widgetName+"Options"](1===e.length?"only":n);s.classes=i._resolveClassesValues(s.classes,o),o.element[o.widgetName](s)}else i._updateCornerClass(e[n](),n)})),this._callChildMethod("refresh"))}})}));

/*!
 * jQuery UI Form Reset Mixin 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.formResetMixin={_formResetHandler:function(){var t=e(this);setTimeout((function(){var r=t.data("ui-form-reset-instances");e.each(r,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=e(this.element.prop("form")),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(e.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}}));

/*!
 * jQuery UI Mouse 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../widget"],e):e(jQuery)}((function(e){"use strict";var t=!1;return e(document).on("mouseup",(function(){t=!1})),e.widget("ui.mouse",{version:"1.14.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,(function(e){return t._mouseDown(e)})).on("click."+this.widgetName,(function(s){if(!0===e.data(s.target,t.widgetName+".preventClickEvent"))return e.removeData(s.target,t.widgetName+".preventClickEvent"),s.stopImmediatePropagation(),!1})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(s){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(s),this._mouseDownEvent=s;var i=this,o=1===s.which,n="string"==typeof this.options.cancel&&e(s.target).closest(this.options.cancel).length;return!(o&&!n&&this._mouseCapture(s))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){i.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(s)&&this._mouseDelayMet(s)&&(this._mouseStarted=!1!==this._mouseStart(s),!this._mouseStarted)?(s.preventDefault(),!0):(!0===e.data(s.target,this.widgetName+".preventClickEvent")&&e.removeData(s.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),s.preventDefault(),t=!0,!0))}},_mouseMove:function(e){if(this._mouseMoved&&!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e);return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(s){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,s.target===this._mouseDownEvent.target&&e.data(s.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(s)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,t=!1,s.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}));

/*!
 * jQuery UI Checkboxradio 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../form-reset-mixin","../labels","../widget"],e):e(jQuery)}((function(e){"use strict";return e.widget("ui.checkboxradio",[e.ui.formResetMixin,{version:"1.14.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var i,t,s,n=this._super()||{};return this._readType(),t=this.element.labels(),this.label=e(t[t.length-1]),this.label.length||e.error("No label found for checkboxradio widget"),this.originalLabel="",(s=this.label.contents().not(this.element[0])).length&&(this.originalLabel+=s.clone().wrapAll("<div></div>").parent().html()),this.originalLabel&&(n.label=this.originalLabel),null!=(i=this.element[0].disabled)&&(n.disabled=i),n},_create:function(){var e=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),e&&this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var i=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===i&&/radio|checkbox/.test(this.type)||e.error("Can't create checkboxradio on element.nodeName="+i+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var i=this.element[0].name,t="input[name='"+CSS.escape(i)+"']";return i?(this.form.length?e(this.form[0].elements).filter(t):e(t).filter((function(){return 0===e(e(this).prop("form")).length}))).not(this.element):e([])},_toggleClasses:function(){var i=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",i),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",i)._toggleClass(this.icon,null,"ui-icon-blank",!i),"radio"===this.type&&this._getRadioGroup().each((function(){var i=e(this).checkboxradio("instance");i&&i._removeClass(i.label,"ui-checkboxradio-checked","ui-state-active")}))},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(e,i){if("label"!==e||i){if(this._super(e,i),"disabled"===e)return this._toggleClass(this.label,null,"ui-state-disabled",i),void(this.element[0].disabled=i);this.refresh()}},_updateIcon:function(i){var t="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=e("<span>"),this.iconSpace=e("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(t+=i?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,i?"ui-icon-blank":"ui-icon-check")):t+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",t),i||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var e=this.label.contents().not(this.element[0]);this.icon&&(e=e.not(this.icon[0])),this.iconSpace&&(e=e.not(this.iconSpace[0])),e.remove(),this.label.append(this.options.label)},refresh:function(){var e=this.element[0].checked,i=this.element[0].disabled;this._updateIcon(e),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),null!==this.options.label&&this._updateLabel(),i!==this.options.disabled&&this._setOptions({disabled:i})}}]),e.ui.checkboxradio}));

/*!
 * jQuery UI Draggable 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../scroll-parent","../version","../widget"],t):t(jQuery)}((function(t){"use strict";return t.widget("ui.draggable",t.ui.mouse,{version:"1.14.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(e){var s=this.options;return!(this.helper||s.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===s.iframeFix?"iframe":s.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map((function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var s=this.document[0].activeElement;t(e.target).closest(s).length||t(s).trigger("blur")},_mouseStart:function(e){var s=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter((function(){return"fixed"===t(this).css("position")})).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,s){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!s){var i=this._uiHash();if(!1===this._trigger("drag",e,i))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var s=this,i=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(i=t.ui.ddmanager.drop(this,e)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||"function"==typeof this.options.revert&&this.options.revert.call(this.element,i)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),(function(){!1!==s._trigger("stop",e)&&s._clear()})):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var s=this.options,i="function"==typeof s.helper,o=i?t(s.helper.apply(this.element[0],[e])):"clone"===s.helper?this.element.clone().removeAttr("id"):this.element;return o.parents("body").length||o.appendTo("parent"===s.appendTo?this.element[0].parentNode:s.appendTo),i&&o[0]===this.element[0]&&this._setPositionRelative(),o[0]===this.element[0]||/(fixed|absolute)/.test(o.css("position"))||o.css("position","absolute"),o},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),Array.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),s=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==s&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,s,i,o=this.options,n=this.document[0];this.relativeContainer=null,o.containment?"window"!==o.containment?"document"!==o.containment?o.containment.constructor!==Array?("parent"===o.containment&&(o.containment=this.helper[0].parentNode),(i=(s=t(o.containment))[0])&&(e=/(scroll|auto)/.test(s.css("overflow")),this.containment=[(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("paddingLeft"),10)||0),(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("paddingTop"),10)||0),(e?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(s.css("borderRightWidth"),10)||0)-(parseInt(s.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(s.css("borderBottomWidth"),10)||0)-(parseInt(s.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=s)):this.containment=o.containment:this.containment=[0,0,t(n).width()-this.helperProportions.width-this.margins.left,(t(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var s="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i,o,n,r=this.options,l=this._isRootNode(this.scrollParent[0]),a=t.pageX,h=t.pageY;return l&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(i=this.relativeContainer.offset(),s=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):s=this.containment,t.pageX-this.offset.click.left<s[0]&&(a=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(h=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(a=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3]&&(h=s[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=s?o-this.offset.click.top>=s[1]||o-this.offset.click.top>s[3]?o:o-this.offset.click.top>=s[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,a=s?n-this.offset.click.left>=s[0]||n-this.offset.click.left>s[2]?n:n-this.offset.click.left>=s[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(a=this.originalPageX),"x"===r.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:l?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,s,i){return i=i||this._uiHash(),t.ui.plugin.call(this,e,[s,i,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,s,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,s,i){var o=t.extend({},s,{item:i.element});i.sortables=[],t(i.options.connectToSortable).each((function(){var s=t(this).sortable("instance");s&&!s.options.disabled&&(i.sortables.push(s),s.refreshPositions(),s._trigger("activate",e,o))}))},stop:function(e,s,i){var o=t.extend({},s,{item:i.element});i.cancelHelperRemoval=!1,t.each(i.sortables,(function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,o))}))},drag:function(e,s,i){t.each(i.sortables,(function(){var o=!1,n=this;n.positionAbs=i.positionAbs,n.helperProportions=i.helperProportions,n.offset.click=i.offset.click,n._intersectsWith(n.containerCache)&&(o=!0,t.each(i.sortables,(function(){return this.positionAbs=i.positionAbs,this.helperProportions=i.helperProportions,this.offset.click=i.offset.click,this!==n&&this._intersectsWith(this.containerCache)&&t.contains(n.element[0],this.element[0])&&(o=!1),o}))),o?(n.isOver||(n.isOver=1,i._parent=s.helper.parent(),n.currentItem=s.helper.appendTo(n.element).data("ui-sortable-item",!0),n.options._helper=n.options.helper,n.options.helper=function(){return s.helper[0]},e.target=n.currentItem[0],n._mouseCapture(e,!0),n._mouseStart(e,!0,!0),n.offset.click.top=i.offset.click.top,n.offset.click.left=i.offset.click.left,n.offset.parent.left-=i.offset.parent.left-n.offset.parent.left,n.offset.parent.top-=i.offset.parent.top-n.offset.parent.top,i._trigger("toSortable",e),i.dropped=n.element,t.each(i.sortables,(function(){this.refreshPositions()})),i.currentItem=i.element,n.fromOutside=i),n.currentItem&&(n._mouseDrag(e),s.position=n.position)):n.isOver&&(n.isOver=0,n.cancelHelperRemoval=!0,n.options._revert=n.options.revert,n.options.revert=!1,n._trigger("out",e,n._uiHash(n)),n._mouseStop(e,!0),n.options.revert=n.options._revert,n.options.helper=n.options._helper,n.placeholder&&n.placeholder.remove(),s.helper.appendTo(i._parent),i._refreshOffsets(e),s.position=i._generatePosition(e,!0),i._trigger("fromSortable",e),i.dropped=!1,t.each(i.sortables,(function(){this.refreshPositions()})))}))}}),t.ui.plugin.add("draggable","cursor",{start:function(e,s,i){var o=t("body"),n=i.options;o.css("cursor")&&(n._cursor=o.css("cursor")),o.css("cursor",n.cursor)},stop:function(e,s,i){var o=i.options;o._cursor&&t("body").css("cursor",o._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("opacity")&&(n._opacity=o.css("opacity")),o.css("opacity",n.opacity)},stop:function(e,s,i){var o=i.options;o._opacity&&t(s.helper).css("opacity",o._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(e,s,i){var o=i.options,n=!1,r=i.scrollParentNotHidden[0],l=i.document[0];r!==l&&"HTML"!==r.tagName?(o.axis&&"x"===o.axis||(i.overflowOffset.top+r.offsetHeight-e.pageY<o.scrollSensitivity?r.scrollTop=n=r.scrollTop+o.scrollSpeed:e.pageY-i.overflowOffset.top<o.scrollSensitivity&&(r.scrollTop=n=r.scrollTop-o.scrollSpeed)),o.axis&&"y"===o.axis||(i.overflowOffset.left+r.offsetWidth-e.pageX<o.scrollSensitivity?r.scrollLeft=n=r.scrollLeft+o.scrollSpeed:e.pageX-i.overflowOffset.left<o.scrollSensitivity&&(r.scrollLeft=n=r.scrollLeft-o.scrollSpeed))):(o.axis&&"x"===o.axis||(e.pageY-t(l).scrollTop()<o.scrollSensitivity?n=t(l).scrollTop(t(l).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(l).scrollTop())<o.scrollSensitivity&&(n=t(l).scrollTop(t(l).scrollTop()+o.scrollSpeed))),o.axis&&"y"===o.axis||(e.pageX-t(l).scrollLeft()<o.scrollSensitivity?n=t(l).scrollLeft(t(l).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(l).scrollLeft())<o.scrollSensitivity&&(n=t(l).scrollLeft(t(l).scrollLeft()+o.scrollSpeed)))),!1!==n&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,s,i){var o=i.options;i.snapElements=[],t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each((function(){var e=t(this),s=e.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:s.top,left:s.left})}))},drag:function(e,s,i){var o,n,r,l,a,h,p,c,f,d,g=i.options,u=g.snapTolerance,m=s.offset.left,v=m+i.helperProportions.width,_=s.offset.top,P=_+i.helperProportions.height;for(f=i.snapElements.length-1;f>=0;f--)h=(a=i.snapElements[f].left-i.margins.left)+i.snapElements[f].width,c=(p=i.snapElements[f].top-i.margins.top)+i.snapElements[f].height,v<a-u||m>h+u||P<p-u||_>c+u||!t.contains(i.snapElements[f].item.ownerDocument,i.snapElements[f].item)?(i.snapElements[f].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=!1):("inner"!==g.snapMode&&(o=Math.abs(p-P)<=u,n=Math.abs(c-_)<=u,r=Math.abs(a-v)<=u,l=Math.abs(h-m)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a-i.helperProportions.width}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h}).left)),d=o||n||r||l,"outer"!==g.snapMode&&(o=Math.abs(p-_)<=u,n=Math.abs(c-P)<=u,r=Math.abs(a-m)<=u,l=Math.abs(h-v)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h-i.helperProportions.width}).left)),!i.snapElements[f].snapping&&(o||n||r||l||d)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=o||n||r||l||d)}}),t.ui.plugin.add("draggable","stack",{start:function(e,s,i){var o,n=i.options,r=t.makeArray(t(n.stack)).sort((function(e,s){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(s).css("zIndex"),10)||0)}));r.length&&(o=parseInt(t(r[0]).css("zIndex"),10)||0,t(r).each((function(e){t(this).css("zIndex",o+e)})),this.css("zIndex",o+r.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("zIndex")&&(n._zIndex=o.css("zIndex")),o.css("zIndex",n.zIndex)},stop:function(e,s,i){var o=i.options;o._zIndex&&t(s.helper).css("zIndex",o._zIndex)}}),t.ui.draggable}));

/*!
 * jQuery UI Resizable 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],t):t(jQuery)}((function(t){"use strict";return t.widget("ui.resizable",t.ui.mouse,{version:"1.14.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){var s,h=!1,n=t(e).css("overflow");if("hidden"===n)return!1;if("scroll"===n)return!0;if(e[s=i&&"left"===i?"scrollLeft":"scrollTop"]>0)return!0;try{e[s]=1,h=e[s]>0,e[s]=0}catch(t){}return h},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper'></div>").css({overflow:"hidden",position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",(function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())})).on("mouseleave",(function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy(),this._addedHandles.remove();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable")};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;case"aspectRatio":this._aspectRatio=!!e}},_setupHandles:function(){var e,i,s,h,n,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this._addedHandles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;i<s.length;i++)h="ui-resizable-"+(e=String.prototype.trim.call(s[i])),n=t("<div>"),this._addClass(n,"ui-resizable-handle "+h),n.css({zIndex:o.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.children(this.handles[e]).length||(this.element.append(n),this._addedHandles=this._addedHandles.add(n));this._renderAxis=function(e){var i,s,h,n;for(i in e=e||this.element,this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),n=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),h=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(h,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")})),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._addedHandles.remove()},_mouseCapture:function(e){var i,s,h=!1;for(i in this.handles)((s=t(this.handles[i])[0])===e.target||t.contains(s,e.target))&&(h=!0);return!this.options.disabled&&h},_mouseStart:function(e){var i,s,h,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this._helper||(n=this._calculateAdjustedElementDimensions(a)),this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:n.width,height:n.height},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:n.width,height:n.height},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,h=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===h?this.axis+"-resize":h),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,h=this.originalMousePosition,n=this.axis,o=e.pageX-h.left||0,a=e.pageY-h.top||0,l=this._change[n];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,o,a]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,s,h,n,o,a,l,r=this.options,p=this;return this._helper&&(h=(s=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:p.sizeDiff.height,n=s?0:p.sizeDiff.width,o={width:p.helper.width()-n,height:p.helper.height()-h},a=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,l=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null,r.animate||this.element.css(t.extend(o,{top:l,left:a})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!r.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.helper.css(t),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px",this.helper.width(t.width)),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px",this.helper.height(t.height)),t},_updateVirtualBoundaries:function(t){var e,i,s,h,n,o=this.options;n={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(e=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,i=n.maxHeight*this.aspectRatio,h=n.maxWidth/this.aspectRatio,e>n.minWidth&&(n.minWidth=e),s>n.minHeight&&(n.minHeight=s),i<n.maxWidth&&(n.maxWidth=i),h<n.maxHeight&&(n.maxHeight=h)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,h=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,n=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,o=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,r=/sw|nw|w/.test(i),p=/nw|ne|n/.test(i);return n&&(t.width=e.minWidth),o&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),h&&(t.height=e.maxHeight),n&&r&&(t.left=a-e.minWidth),s&&r&&(t.left=a-e.maxWidth),o&&p&&(t.top=l-e.minHeight),h&&p&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],h=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(h[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_calculateAdjustedElementDimensions:function(t){var e,i,s,h=t.get(0);return"content-box"!==t.css("box-sizing")||!this._hasScroll(h)&&!this._hasScroll(h,"left")?{height:parseFloat(t.css("height")),width:parseFloat(t.css("width"))}:(e=parseFloat(h.style.width),i=parseFloat(h.style.height),s=this._getPaddingPlusBorderDimensions(t),e=isNaN(e)?this._getElementTheoreticalSize(t,s,"width"):e,{height:i=isNaN(i)?this._getElementTheoreticalSize(t,s,"height"):i,width:e})},_getElementTheoreticalSize:function(t,e,i){return Math.max(0,Math.ceil(t.get(0)["offset"+i[0].toUpperCase()+i.slice(1)]-e[i]-.5))||0},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div></div>").css({overflow:"hidden"}),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,h=i._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&i._hasScroll(h[0],"left")?0:i.sizeDiff.height,a=n?0:i.sizeDiff.width,l={width:i.size.width-a,height:i.size.height-o},r=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,p=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};h&&h.length&&t(h[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,h,n,o,a,l=t(this).resizable("instance"),r=l.options,p=l.element,d=r.containment,g=d instanceof t?d.get(0):/parent/.test(d)?p.parent().get(0):d;g&&(l.containerElement=t(g),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(g),i=[],t(["Top","Right","Left","Bottom"]).each((function(t,s){i[t]=l._num(e.css("padding"+s))})),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,h=l.containerSize.height,n=l.containerSize.width,o=l._hasScroll(g,"left")?g.scrollWidth:n,a=l._hasScroll(g)?g.scrollHeight:h,l.parentData={element:g,left:s.left,top:s.top,width:o,height:a}))},resize:function(e){var i,s,h,n,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||e.shiftKey,d={top:0,left:0},g=o.containerElement,u=!0;g[0]!==document&&/static/.test(g.css("position"))&&(d=l),r.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-d.left),p&&(o.size.height=o.size.width/o.aspectRatio,u=!1),o.position.left=a.helper?l.left:0),r.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),p&&(o.size.width=o.size.height*o.aspectRatio,u=!1),o.position.top=o._helper?l.top:0),h=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),h&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-l.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-l.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,p&&(o.size.height=o.size.width/o.aspectRatio,u=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,p&&(o.size.width=o.size.height*o.aspectRatio,u=!1)),u||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,h=e.containerPosition,n=e.containerElement,o=t(e.helper),a=o.offset(),l=o.outerWidth()-e.sizeDiff.width,r=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r}),e._helper&&!i.animate&&/static/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each((function(){var i=t(this),s=e._calculateAdjustedElementDimensions(i);i.data("ui-resizable-alsoresize",{width:s.width,height:s.height,left:parseFloat(i.css("left")),top:parseFloat(i.css("top"))})}))},resize:function(e,i){var s=t(this).resizable("instance"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};t(h.alsoResize).each((function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),h={},n=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(n,(function(t,e){var i=(s[e]||0)+(a[e]||0);i&&i>=0&&(h[e]=i||null)})),e.css(h)}))},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),!0===t.uiBackCompat&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,h=i.size,n=i.originalSize,o=i.originalPosition,a=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,r=l[0]||1,p=l[1]||1,d=Math.round((h.width-n.width)/r)*r,g=Math.round((h.height-n.height)/p)*p,u=n.width+d,c=n.height+g,f=s.maxWidth&&s.maxWidth<u,m=s.maxHeight&&s.maxHeight<c,z=s.minWidth&&s.minWidth>u,_=s.minHeight&&s.minHeight>c;s.grid=l,z&&(u+=r),_&&(c+=p),f&&(u-=r),m&&(c-=p),/^(se|s|e)$/.test(a)?(i.size.width=u,i.size.height=c):/^(ne)$/.test(a)?(i.size.width=u,i.size.height=c,i.position.top=o.top-g):/^(sw)$/.test(a)?(i.size.width=u,i.size.height=c,i.position.left=o.left-d):((c-p<=0||u-r<=0)&&(e=i._getPaddingPlusBorderDimensions(this)),c-p>0?(i.size.height=c,i.position.top=o.top-g):(c=p-e.height,i.size.height=c,i.position.top=o.top+n.height-c),u-r>0?(i.size.width=u,i.position.left=o.left-d):(u=r-e.width,i.size.width=u,i.position.left=o.left+n.width-u))}}),t.ui.resizable}));

/*!
 * jQuery UI Button 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],t):t(jQuery)}((function(t){"use strict";var i;return t.widget("ui.button",{version:"1.14.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,i=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(i.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(i.label=this.originalLabel),i},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(i){i.keyCode===t.ui.keyCode.SPACE&&(i.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(i,o){var s="iconPosition"!==i,n=s?this.options.iconPosition:o,e="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,o),this._attachIcon(n),e?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var i=void 0===t.showLabel?this.options.showLabel:t.showLabel,o=void 0===t.icon?this.options.icon:t.icon;i||o||(t.showLabel=!0),this._super(t)},_setOption:function(t,i){"icon"===t&&(i?this._updateIcon(t,i):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,i),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!i),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(i):(this.element.html(i),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,i),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",i),this.element[0].disabled=i,i&&this.element.trigger("blur"))},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!0===t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,i){"text"!==t?("showLabel"===t&&(this.options.text=i),"icon"===t&&(this.options.icons.primary=i),"icons"===t&&(i.primary?(this._super("icon",i.primary),this._super("iconPosition","beginning")):i.secondary&&(this._super("icon",i.secondary),this._super("iconPosition","end"))),this._superApply(arguments)):this._super("showLabel",i)}}),t.fn.button=(i=t.fn.button,function(o){var s="string"==typeof o,n=Array.prototype.slice.call(arguments,1),e=this;return s?this.length||"instance"!==o?this.each((function(){var i,s=t(this).attr("type"),h="checkbox"!==s&&"radio"!==s?"button":"checkboxradio",a=t.data(this,"ui-"+h);return"instance"===o?(e=a,!1):a?"function"!=typeof a[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for button widget instance"):(i=a[o].apply(a,n))!==a&&void 0!==i?(e=i&&i.jquery?e.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on button prior to initialization; attempted to call method '"+o+"'")})):e=void 0:(n.length&&(o=t.widget.extend.apply(null,[o].concat(n))),this.each((function(){var s=t(this).attr("type"),n="checkbox"!==s&&"radio"!==s?"button":"checkboxradio",e=t.data(this,"ui-"+n);if(e)e.option(o||{}),e._init&&e._init();else{if("button"===n)return void i.call(t(this),o);t(this).checkboxradio(t.extend({icon:!1},o))}}))),e}),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button}));

/*!
 * jQuery UI Dialog 1.14.1
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../tabbable","../unique-id","../version","../widget"],i):i(jQuery)}((function(i){"use strict";return i.widget("ui.dialog",{version:"1.14.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=i(this).css(t).offset().top;e<0&&i(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,uiDialogTitleHeadingLevel:0,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&i.fn.draggable&&this._makeDraggable(),this.options.resizable&&i.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?i(t):this.document.find(t||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(i=t.parent.children().eq(t.index)).length&&i[0]!==this.element[0]?i.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:i.noop,enable:i.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||i(this.document[0].activeElement).trigger("blur"),this._hide(this.uiDialog,this.options.hide,(function(){e._trigger("close",t)})))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var o=!1,s=this.uiDialog.siblings(".ui-front:visible").map((function(){return+i(this).css("z-index")})).get(),n=Math.max.apply(null,s);return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),o=!0),o&&!e&&this._trigger("focus",t),o},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=i(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,(function(){t._focusTabbable(),t._trigger("focus")})),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var i=this._focusedElement;i||(i=this.element.find("[autofocus]")),i.length||(i=this.element.find(":tabbable")),i.length||(i=this.uiDialogButtonPane.find(":tabbable")),i.length||(i=this.uiDialogTitlebarClose.filter(":tabbable")),i.length||(i=this.uiDialog),i.eq(0).trigger("focus")},_restoreTabbableFocus:function(){var t=this.document[0].activeElement;this.uiDialog[0]===t||i.contains(this.uiDialog[0],t)||this._focusTabbable()},_keepFocus:function(i){i.preventDefault(),this._restoreTabbableFocus()},_createWrapper:function(){this.uiDialog=i("<div>").hide().attr({tabIndex:-1,role:"dialog","aria-modal":this.options.modal?"true":null}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===i.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===i.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),o=e.first(),s=e.last();t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==o[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay((function(){s.trigger("focus")})),t.preventDefault()):(this._delay((function(){o.trigger("focus")})),t.preventDefault())}},mousedown:function(i){this._moveToTop(i)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=i("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){i(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=i("<button type='button'></button>").button({label:i("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault(),this.close(i)}});var e=Number.isInteger(this.options.uiDialogTitleHeadingLevel)&&this.options.uiDialogTitleHeadingLevel>0&&this.options.uiDialogTitleHeadingLevel<=6?"h"+this.options.uiDialogTitleHeadingLevel:"span";t=i("<"+e+">").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(i){this.options.title?i.text(this.options.title):i.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=i("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=i("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),i.isEmptyObject(e)||Array.isArray(e)&&!e.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(i.each(e,(function(e,o){var s,n;o="function"==typeof o?{click:o,text:e}:o,o=i.extend({type:"button"},o),s=o.click,n={icon:o.icon,iconPosition:o.iconPosition,showLabel:o.showLabel,icons:o.icons,text:o.text},delete o.click,delete o.icon,delete o.iconPosition,delete o.showLabel,delete o.icons,"boolean"==typeof o.text&&delete o.text,i("<button></button>",o).button(n).appendTo(t.uiButtonSet).on("click",(function(){s.apply(t.element[0],arguments)}))})),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var t=this,e=this.options;function o(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,s){t._addClass(i(this),"ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",e,o(s))},drag:function(i,e){t._trigger("drag",i,o(e))},stop:function(s,n){var a=n.offset.left-t.document.scrollLeft(),l=n.offset.top-t.document.scrollTop();e.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:t.window},t._removeClass(i(this),"ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",s,o(n))}})},_makeResizable:function(){var t=this,e=this.options,o=e.resizable,s=this.uiDialog.css("position"),n="string"==typeof o?o:"n,e,s,w,se,sw,ne,nw";function a(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:n,start:function(e,o){t._addClass(i(this),"ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",e,a(o))},resize:function(i,e){t._trigger("resize",i,a(e))},stop:function(o,s){var n=t.uiDialog.offset(),l=n.left-t.document.scrollLeft(),h=n.top-t.document.scrollTop();e.height=t.uiDialog.height(),e.width=t.uiDialog.width(),e.position={my:"left top",at:"left"+(l>=0?"+":"")+l+" top"+(h>=0?"+":"")+h,of:t.window},t._removeClass(i(this),"ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",o,a(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=i(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=i.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(t){var e=this,o=!1,s={};i.each(t,(function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)})),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var o,s,n=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:i("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((o=n.is(":data(ui-draggable)"))&&!e&&n.draggable("destroy"),!o&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((s=n.is(":data(ui-resizable)"))&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")),"modal"===t&&n.attr("aria-modal",e?"true":null))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var t=i(this);return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!i(t.target).closest(".ui-dialog").length||!!i(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay((function(){t=!1})),this.document.data("ui-dialog-overlays")||this.document.on("focusin.ui-dialog",function(i){if(!t){var e=this._trackingInstances()[0];e._allowInteraction(i)||(i.preventDefault(),e._focusTabbable())}}.bind(this)),this.overlay=i("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):(this.document.off("focusin.ui-dialog"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!0===i.uiBackCompat&&i.widget("ui.dialog",i.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(i,t){"dialogClass"===i&&this.uiDialog.removeClass(this.options.dialogClass).addClass(t),this._superApply(arguments)}}),i.ui.dialog}));

(function($,Drupal,drupalSettings,_,Backbone,JSON,storage){const options=$.extend(drupalSettings.contextual,{strings:{open:Drupal.t('Open'),close:Drupal.t('Close')}});const cachedPermissionsHash=storage.getItem('Drupal.contextual.permissionsHash');const permissionsHash=drupalSettings.user.permissionsHash;if(cachedPermissionsHash!==permissionsHash){if(typeof permissionsHash==='string')_.chain(storage).keys().each((key)=>{if(key.startsWith('Drupal.contextual.'))storage.removeItem(key);});storage.setItem('Drupal.contextual.permissionsHash',permissionsHash);}function adjustIfNestedAndOverlapping($contextual){const $contextuals=$contextual.parents('.contextual-region').eq(-1).find('.contextual');if($contextuals.length<=1)return;const firstTop=$contextuals.eq(0).offset().top;const secondTop=$contextuals.eq(1).offset().top;if(firstTop===secondTop){const $nestedContextual=$contextuals.eq(1);let height=0;const $trigger=$nestedContextual.find('.trigger');$trigger.removeClass('visually-hidden');height=$nestedContextual.height();$trigger.addClass('visually-hidden');$nestedContextual[0].style.top=$nestedContextual.position().top+height;}}function initContextual($contextual,html){const $region=$contextual.closest('.contextual-region');const contextual=Drupal.contextual;$contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));const destination=`destination=${Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath+window.location.search))}`;$contextual.find('.contextual-links a').each(function(){const url=this.getAttribute('href');const glue=url.includes('?')?'&':'?';this.setAttribute('href',url+glue+destination);});let title='';const $regionHeading=$region.find('h2');if($regionHeading.length)title=$regionHeading[0].textContent.trim();const model=new contextual.StateModel({title});const viewOptions=$.extend({el:$contextual,model},options);contextual.views.push({visual:new contextual.VisualView(viewOptions),aural:new contextual.AuralView(viewOptions),keyboard:new contextual.KeyboardView(viewOptions)});contextual.regionViews.push(new contextual.RegionView($.extend({el:$region,model},options)));contextual.collection.add(model);$(document).trigger('drupalContextualLinkAdded',Drupal.deprecatedProperty({target:{$el:$contextual,$region,model},deprecatedProperty:'model',message:'The model property is deprecated in drupal:9.4.0 and is removed from drupal:12.0.0. There is no replacement.'}));adjustIfNestedAndOverlapping($contextual);}Drupal.behaviors.contextual={attach(context){const $context=$(context);let $placeholders=$(once('contextual-render','[data-contextual-id]',context));if($placeholders.length===0)return;const ids=[];$placeholders.each(function(){ids.push({id:$(this).attr('data-contextual-id'),token:$(this).attr('data-contextual-token')});});const uncachedIDs=[];const uncachedTokens=[];ids.forEach((contextualID)=>{const html=storage.getItem(`Drupal.contextual.${contextualID.id}`);if(html&&html.length){window.setTimeout(()=>{initContextual($context.find(`[data-contextual-id="${contextualID.id}"]:empty`).eq(0),html);});return;}uncachedIDs.push(contextualID.id);uncachedTokens.push(contextualID.token);});if(uncachedIDs.length>0)$.ajax({url:Drupal.url('contextual/render'),type:'POST',data:{'ids[]':uncachedIDs,'tokens[]':uncachedTokens},dataType:'json',success(results){_.each(results,(html,contextualID)=>{storage.setItem(`Drupal.contextual.${contextualID}`,html);if(html.length>0){$placeholders=$context.find(`[data-contextual-id="${contextualID}"]`);for(let i=0;i<$placeholders.length;i++)initContextual($placeholders.eq(i),html);}});}});}};Drupal.contextual={views:[],regionViews:[]};Drupal.contextual.collection=new Backbone.Collection([],{model:Drupal.contextual.StateModel});Drupal.theme.contextualTrigger=function(){return '<button class="trigger visually-hidden focusable" type="button"></button>';};$(document).on('drupalContextualLinkAdded',(event,data)=>{Drupal.ajax.bindAjaxLinks(data.$el[0]);});})(jQuery,Drupal,drupalSettings,_,Backbone,window.JSON,window.sessionStorage);;
(function(Drupal,Backbone){Drupal.contextual.StateModel=Backbone.Model.extend({defaults:{title:'',regionIsHovered:false,hasFocus:false,isOpen:false,isLocked:false},toggleOpen(){const newIsOpen=!this.get('isOpen');this.set('isOpen',newIsOpen);if(newIsOpen)this.focus();return this;},close(){this.set('isOpen',false);return this;},focus(){this.set('hasFocus',true);const cid=this.cid;this.collection.each((model)=>{if(model.cid!==cid)model.close().blur();});return this;},blur(){if(!this.get('isOpen'))this.set('hasFocus',false);return this;}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.AuralView=Backbone.View.extend({initialize(options){this.options=options;this.listenTo(this.model,'change',this.render);this.render();},render(){const isOpen=this.model.get('isOpen');this.$el.find('.contextual-links').prop('hidden',!isOpen);const $trigger=this.$el.find('.trigger');$trigger.each((index,element)=>{element.textContent=Drupal.t('@action @title configuration options',{'@action':!isOpen?this.options.strings.open:this.options.strings.close,'@title':this.model.get('title')});}).attr('aria-pressed',isOpen);}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.KeyboardView=Backbone.View.extend({events:{'focus .trigger':'focus','focus .contextual-links a':'focus','blur .trigger':function(){this.model.blur();},'blur .contextual-links a':function(){const that=this;this.timer=window.setTimeout(()=>{that.model.close().blur();},150);}},initialize(){this.timer=NaN;},focus(){window.clearTimeout(this.timer);this.model.focus();}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.RegionView=Backbone.View.extend({events(){let touchStart=false;return {touchstart(){touchStart=true;},mouseenter(){if(!touchStart)this.model.set('regionIsHovered',true);},mouseleave(){if(!touchStart)this.model.close().blur().set('regionIsHovered',false);},mousemove(){touchStart=false;}};},initialize(){this.listenTo(this.model,'change:hasFocus',this.render);},render(){this.$el.toggleClass('focus',this.model.get('hasFocus'));return this;}});})(Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextual.VisualView=Backbone.View.extend({events(){const touchEndToClick=function(event){event.preventDefault();event.target.click();};let touchStart=false;return {touchstart(){touchStart=true;},mouseenter(){if(!touchStart)this.model.focus();},mousemove(){touchStart=false;},'click .trigger':function(){this.model.toggleOpen();},'touchend .trigger':touchEndToClick,'click .contextual-links a':function(){this.model.close().blur();},'touchend .contextual-links a':touchEndToClick};},initialize(){this.listenTo(this.model,'change',this.render);},render(){const isOpen=this.model.get('isOpen');const isVisible=this.model.get('isLocked')||this.model.get('regionIsHovered')||isOpen;this.$el.toggleClass('open',isOpen).find('.trigger').toggleClass('visually-hidden',!isVisible);if('isOpen' in this.model.changed)this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);return this;}});})(Drupal,Backbone);;
/* @license MIT https://raw.githubusercontent.com/focus-trap/tabbable/v6.2.0/LICENSE */
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):(t="undefined"!=typeof globalThis?globalThis:t||self,function(){var n=t.tabbable,o=t.tabbable={};e(o),o.noConflict=function(){return t.tabbable=n,o}}())}(this,(function(t){"use strict";var e=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],n=e.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!o&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return null==t?void 0:t.ownerDocument},a=function t(e,n){var o;void 0===n&&(n=!0);var r=null==e||null===(o=e.getAttribute)||void 0===o?void 0:o.call(e,"inert");return""===r||"true"===r||n&&e&&t(e.parentNode)},l=function(t,e,o){if(a(t))return[];var i=Array.prototype.slice.apply(t.querySelectorAll(n));return e&&r.call(t,n)&&i.unshift(t),i=i.filter(o)},u=function t(e,o,i){for(var l=[],u=Array.from(e);u.length;){var d=u.shift();if(!a(d,!1))if("SLOT"===d.tagName){var c=d.assignedElements(),f=t(c.length?c:d.children,!0,i);i.flatten?l.push.apply(l,f):l.push({scopeParent:d,candidates:f})}else{r.call(d,n)&&i.filter(d)&&(o||!e.includes(d))&&l.push(d);var s=d.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(d),p=!a(s,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(d));if(s&&p){var h=t(!0===s?d.children:s.children,!0,i);i.flatten?l.push.apply(l,h):l.push({scopeParent:d,candidates:h})}else u.unshift.apply(u,d.children)}}return l},d=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},c=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&!d(t)?0:t.tabIndex},f=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},s=function(t){return"INPUT"===t.tagName},p=function(t){return function(t){return s(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||i(t),o=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=o(window.CSS.escape(t.name));else try{e=o(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var r=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!r||r===t}(t)},h=function(t){var e=t.getBoundingClientRect(),n=e.width,o=e.height;return 0===n&&0===o},v=function(t,e){var n=e.displayCheck,o=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var a=r.call(t,"details>summary:first-of-type")?t.parentElement:t;if(r.call(a,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return h(t)}else{if("function"==typeof o){for(var l=t;t;){var u=t.parentElement,d=i(t);if(u&&!u.shadowRoot&&!0===o(u))return h(t);t=t.assignedSlot?t.assignedSlot:u||d===t.ownerDocument?u:d.host}t=l}if(function(t){var e,n,o,r,a=t&&i(t),l=null===(e=a)||void 0===e?void 0:e.host,u=!1;if(a&&a!==t)for(u=!!(null!==(n=l)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(l)||null!=t&&null!==(r=t.ownerDocument)&&void 0!==r&&r.contains(t));!u&&l;){var d,c,f;u=!(null===(c=l=null===(d=a=i(l))||void 0===d?void 0:d.host)||void 0===c||null===(f=c.ownerDocument)||void 0===f||!f.contains(l))}return u}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1},b=function(t,e){return!(e.disabled||a(e)||function(t){return s(t)&&"hidden"===t.type}(e)||v(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var o=e.children.item(n);if("LEGEND"===o.tagName)return!!r.call(e,"fieldset[disabled] *")||!o.contains(t)}return!0}e=e.parentElement}return!1}(e))},m=function(t,e){return!(p(e)||c(e)<0||!b(t,e))},g=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},y=function t(e){var n=[],o=[];return e.forEach((function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,l=function(t,e){var n=c(t);return n<0&&e&&!d(t)?0:n}(a,i),u=i?t(e.candidates):a;0===l?i?n.push.apply(n,u):n.push(a):o.push({documentOrder:r,tabIndex:l,item:e,isScope:i,content:u})})),o.sort(f).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},w=e.concat("iframe").join(",");t.focusable=function(t,e){return(e=e||{}).getShadowRoot?u([t],e.includeContainer,{filter:b.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):l(t,e.includeContainer,b.bind(null,e))},t.getTabIndex=c,t.isFocusable=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==r.call(t,w)&&b(e,t)},t.isTabbable=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==r.call(t,n)&&m(e,t)},t.tabbable=function(t,e){var n;return n=(e=e||{}).getShadowRoot?u([t],e.includeContainer,{filter:m.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:g}):l(t,e.includeContainer,m.bind(null,e)),y(n)},Object.defineProperty(t,"__esModule",{value:!0})}));

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
/**
 * tua-body-scroll-lock v1.5.3
 * (c) 2024 Evinma, BuptStEve
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).bodyScrollLock={})}(this,(function(e){"use strict";var t=function(){return"undefined"==typeof window},n=function(e){e=e||navigator.userAgent;var t=/(iPad).*OS\s([\d_]+)/.test(e);return{ios:!t&&/(iPhone\sOS)\s([\d_]+)/.test(e)||t,android:/(Android);?[\s/]+([\d.]+)?/.test(e)}};function o(e){if(t())return!1;if(!e)throw new Error("options must be provided");var n=!1,o={get passive(){n=!0}},i=function(){},l="__TUA_BSL_TEST_PASSIVE__";window.addEventListener(l,i,o),window.removeEventListener(l,i,o);var c=e.capture;return n?e:void 0!==c&&c}function i(){return"__BSL_PREVENT_DEFAULT__"in window||(window.__BSL_PREVENT_DEFAULT__=function(e){e.cancelable&&e.preventDefault()}),window.__BSL_PREVENT_DEFAULT__}function l(e){return e?Array.isArray(e)?e:[e]:[]}var c={lockedNum:0,lockedElements:[],unLockCallback:null,documentListenerAdded:!1,initialClientPos:{clientX:0,clientY:0}};function r(e){if(t())return c;if(!(null==e?void 0:e.useGlobalLockState))return r.lockState;var n="__BSL_LOCK_STATE__"in window?Object.assign(Object.assign({},c),window.__BSL_LOCK_STATE__):c;return window.__BSL_LOCK_STATE__=n,n}function d(e){return!n().ios&&("function"==typeof e.unLockCallback&&(e.unLockCallback(),!0))}function s(e){e.documentListenerAdded&&(document.removeEventListener("touchmove",i(),o({passive:!1})),e.documentListenerAdded=!1)}r.lockState=c,e.clearBodyLocks=function(e){if(!t()){var n=r(e);if(n.lockedNum=0,!d(n)){if(n.lockedElements.length)for(var o=n.lockedElements.pop();o;)o.ontouchmove=null,o.ontouchstart=null,o=n.lockedElements.pop();s(n)}}},e.getLockState=r,e.lock=function(e,c){if(!t()){var d,s,u,a,f=n(),h=r(c);f.ios?(l(e).filter((function(e){return e&&-1===h.lockedElements.indexOf(e)})).forEach((function(e){e.ontouchstart=function(e){var t=e.targetTouches[0],n=t.clientX,o=t.clientY;h.initialClientPos={clientX:n,clientY:o}},e.ontouchmove=function(t){!function(e,t,n){if(t){var o=t.scrollTop,l=t.scrollLeft,c=t.scrollWidth,r=t.scrollHeight,d=t.clientWidth,s=t.clientHeight,u=e.targetTouches[0].clientX-n.clientX,a=e.targetTouches[0].clientY-n.clientY,f=Math.abs(a)>Math.abs(u);if(f&&(a>0&&0===o||a<0&&o+s+1>=r)||!f&&(u>0&&0===l||u<0&&l+d+1>=c))return i()(e)}e.stopPropagation()}(t,e,h.initialClientPos)},h.lockedElements.push(e)})),function(e){if(!n().ios)return;if(e.documentListenerAdded)return;document.addEventListener("touchmove",i(),o({passive:!1})),e.documentListenerAdded=!0}(h)):h.lockedNum<=0&&(h.unLockCallback=f.android?function(e){var t=document.documentElement,n=document.body,o=t.scrollTop||n.scrollTop,i=Object.assign({},t.style),l=Object.assign({},n.style);return t.style.height="100%",t.style.overflow="hidden",n.style.top="-".concat(o,"px"),n.style.width="100%",n.style.height="auto",n.style.position="fixed",n.style.overflow=(null==e?void 0:e.overflowType)||"hidden",function(){t.style.height=i.height||"",t.style.overflow=i.overflow||"",["top","width","height","overflow","position"].forEach((function(e){n.style[e]=l[e]||""})),"scrollBehavior"in document.documentElement.style?window.scrollTo({top:o,behavior:"instant"}):window.scrollTo(0,o)}}(c):(d=document.documentElement,s=Object.assign({},d.style),u=window.innerWidth-d.clientWidth,a=parseInt(window.getComputedStyle(d).paddingRight,10),d.style.overflow="hidden",d.style.boxSizing="border-box",d.style.paddingRight="".concat(u+a,"px"),function(){["overflow","boxSizing","paddingRight"].forEach((function(e){d.style[e]=s[e]||""}))})),h.lockedNum+=1}},e.unlock=function(e,n){if(!t()){var o=r(n);o.lockedNum-=1,o.lockedNum>0||d(o)||(l(e).forEach((function(e){var t=o.lockedElements.indexOf(e);e&&-1!==t&&(e.ontouchmove=null,e.ontouchstart=null,o.lockedElements.splice(t,1))})),s(o))}}}));
;
(function($,Drupal){Drupal.theme.progressBar=function(id){const escapedId=Drupal.checkPlain(id);return (`<div id="${escapedId}" class="progress" aria-live="polite">`+'<div class="progress__label">&nbsp;</div>'+'<div class="progress__track"><div class="progress__bar"></div></div>'+'<div class="progress__percentage"></div>'+'<div class="progress__description">&nbsp;</div>'+'</div>');};Drupal.ProgressBar=function(id,updateCallback,method,errorCallback){this.id=id;this.method=method||'GET';this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$(Drupal.theme('progressBar',id));};$.extend(Drupal.ProgressBar.prototype,{setProgress(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('div.progress__bar').each(function(){this.style.width=`${percentage}%`;});$(this.element).find('div.progress__percentage').html(`${percentage}%`);}$('div.progress__description',this.element).html(message);$('div.progress__label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this);},startMonitoring(uri,delay){this.delay=delay;this.uri=uri;this.sendPing();},stopMonitoring(){clearTimeout(this.timer);this.uri=null;},sendPing(){if(this.timer)clearTimeout(this.timer);if(this.uri){const pb=this;let uri=this.uri;if(!uri.includes('?'))uri+='?';else uri+='&';uri+='_format=json';$.ajax({type:this.method,url:uri,data:'',dataType:'json',success(progress){if(progress.status===0){pb.displayError(progress.data);return;}pb.setProgress(progress.percentage,progress.message,progress.label);pb.timer=setTimeout(()=>{pb.sendPing();},pb.delay);},error(xmlhttp){const e=new Drupal.AjaxError(xmlhttp,pb.uri);pb.displayError(`<pre>${e.message}</pre>`);}});}},displayError(string){const error=$('<div class="messages messages--error"></div>').html(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this);}});})(jQuery,Drupal);;
/* @license MIT https://raw.githubusercontent.com/muicss/loadjs/4.3.0/LICENSE.txt */
loadjs=function(){var h=function(){},o={},c={},f={};function u(e,n){if(e){var t=f[e];if(c[e]=n,t)for(;t.length;)t[0](e,n),t.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function p(t,r,i,s){var o,e,u,n=document,c=i.async,f=(i.numRetries||0)+1,l=i.before||h,a=t.replace(/[\?|#].*$/,""),d=t.replace(/^(css|img|module|nomodule)!/,"");if(s=s||0,/(^css!|\.css$)/.test(a))(u=n.createElement("link")).rel="stylesheet",u.href=d,(o="hideFocus"in u)&&u.relList&&(o=0,u.rel="preload",u.as="style");else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(a))(u=n.createElement("img")).src=d;else if((u=n.createElement("script")).src=d,u.async=void 0===c||c,e="noModule"in u,/^module!/.test(a)){if(!e)return r(t,"l");u.type="module"}else if(/^nomodule!/.test(a)&&e)return r(t,"l");!(u.onload=u.onerror=u.onbeforeload=function(e){var n=e.type[0];if(o)try{u.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((s+=1)<f)return p(t,r,i,s)}else if("preload"==u.rel&&"style"==u.as)return u.rel="stylesheet";r(t,n,e.defaultPrevented)})!==l(t,u)&&n.head.appendChild(u)}function t(e,n,t){var r,i;if(n&&n.trim&&(r=n),i=(r?t:n)||{},r){if(r in o)throw"LoadJS";o[r]=!0}function s(n,t){!function(e,r,n){var t,i,s=(e=e.push?e:[e]).length,o=s,u=[];for(t=function(e,n,t){if("e"==n&&u.push(e),"b"==n){if(!t)return;u.push(e)}--s||r(u)},i=0;i<o;i++)p(e[i],t,n)}(e,function(e){l(i,e),n&&l({success:n,error:t},e),u(r,e)},i)}if(i.returnPromise)return new Promise(s);s()}return t.ready=function(e,n){return function(e,t){e=e.push?e:[e];var n,r,i,s=[],o=e.length,u=o;for(n=function(e,n){n.length&&s.push(e),--u||t(s)};o--;)r=e[o],(i=c[r])?n(r,i):(f[r]=f[r]||[]).push(n)}(e,function(e){l(n,e)}),t},t.done=function(e){u(e,[])},t.reset=function(){o={},c={},f={}},t.isDefined=function(e){return e in o},t}();;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
Drupal.debounce=function(func,wait,immediate){let timeout;let result;return function(...args){const context=this;const later=function(){timeout=null;if(!immediate)result=func.apply(context,args);};const callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)result=func.apply(context,args);return result;};};;
(function(Drupal,debounce){let liveElement;const announcements=[];Drupal.behaviors.drupalAnnounce={attach(context){if(!liveElement){liveElement=document.createElement('div');liveElement.id='drupal-live-announce';liveElement.className='visually-hidden';liveElement.setAttribute('aria-live','polite');liveElement.setAttribute('aria-busy','false');document.body.appendChild(liveElement);}}};function announce(){const text=[];let priority='polite';let announcement;const il=announcements.length;for(let i=0;i<il;i++){announcement=announcements.pop();text.unshift(announcement.text);if(announcement.priority==='assertive')priority='assertive';}if(text.length){liveElement.innerHTML='';liveElement.setAttribute('aria-busy','true');liveElement.setAttribute('aria-live',priority);liveElement.innerHTML=text.join('\n');liveElement.setAttribute('aria-busy','false');}}Drupal.announce=function(text,priority){announcements.push({text,priority});return debounce(announce,200)();};})(Drupal,Drupal.debounce);;
((Drupal)=>{Drupal.Message=class{constructor(messageWrapper=null){if(!messageWrapper)this.messageWrapper=Drupal.Message.defaultWrapper();else this.messageWrapper=messageWrapper;}static defaultWrapper(){let wrapper=document.querySelector('[data-drupal-messages]')||document.querySelector('[data-drupal-messages-fallback]');if(!wrapper){wrapper=document.createElement('div');document.body.appendChild(wrapper);}if(wrapper.hasAttribute('data-drupal-messages-fallback')){wrapper.removeAttribute('data-drupal-messages-fallback');wrapper.classList.remove('hidden');}wrapper.setAttribute('data-drupal-messages','');return wrapper.innerHTML===''?Drupal.Message.messageInternalWrapper(wrapper):wrapper.firstElementChild;}static getMessageTypeLabels(){return {status:Drupal.t('Status message'),error:Drupal.t('Error message'),warning:Drupal.t('Warning message')};}add(message,options={}){if(!options.hasOwnProperty('type'))options.type='status';if(typeof message!=='string')throw new Error('Message must be a string.');Drupal.Message.announce(message,options);options.id=options.id?String(options.id):`${options.type}-${Math.random().toFixed(15).replace('0.','')}`;if(!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)){const {type}=options;throw new Error(`The message type, ${type}, is not present in Drupal.Message.getMessageTypeLabels().`);}this.messageWrapper.appendChild(Drupal.theme('message',{text:message},options));return options.id;}select(id){return this.messageWrapper.querySelector(`[data-drupal-message-id^="${id}"]`);}remove(id){return this.messageWrapper.removeChild(this.select(id));}clear(){Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'),(message)=>{this.messageWrapper.removeChild(message);});}static announce(message,options){if(!options.priority&&(options.type==='warning'||options.type==='error'))options.priority='assertive';if(options.announce!=='')Drupal.announce(options.announce||message,options.priority);}static messageInternalWrapper(messageWrapper){const innerWrapper=document.createElement('div');innerWrapper.setAttribute('class','messages__wrapper');messageWrapper.insertAdjacentElement('afterbegin',innerWrapper);return innerWrapper;}};Drupal.theme.message=({text},{type,id})=>{const messagesTypes=Drupal.Message.getMessageTypeLabels();const messageWrapper=document.createElement('div');messageWrapper.setAttribute('class',`messages messages--${type}`);messageWrapper.setAttribute('role',type==='error'||type==='warning'?'alert':'status');messageWrapper.setAttribute('data-drupal-message-id',id);messageWrapper.setAttribute('data-drupal-message-type',type);messageWrapper.setAttribute('aria-label',messagesTypes[type]);messageWrapper.innerHTML=`${text}`;return messageWrapper;};})(Drupal);;
((Drupal)=>{Drupal.theme.message=({text},{type,id})=>{const messagesTypes=Drupal.Message.getMessageTypeLabels();const messageWrapper=document.createElement('div');messageWrapper.setAttribute('class',`messages messages--${type} messages-list__item`);messageWrapper.setAttribute('role',type==='error'||type==='warning'?'alert':'status');messageWrapper.setAttribute('aria-labelledby',`${id}-title`);messageWrapper.setAttribute('data-drupal-message-id',id);messageWrapper.setAttribute('data-drupal-message-type',type);messageWrapper.innerHTML=`
    <div class="messages__header">
      <h2 id="${id}-title" class="messages__title">
        ${messagesTypes[type]}
      </h2>
    </div>
    <div class="messages__content">
      ${text}
    </div>
  `;return messageWrapper;};})(Drupal);;
((Drupal,once)=>{Drupal.theme.message=(_ref,_ref2)=>{let {text}=_ref,{type,id}=_ref2;const messagesTypes=Drupal.Message.getMessageTypeLabels(),messageWrapper=document.createElement("div");return messageWrapper.setAttribute("class",`messages-list__item messages messages--${type}`),messageWrapper.setAttribute("role","error"===type||"warning"===type?"alert":"status"),messageWrapper.setAttribute("data-drupal-message-id",id),messageWrapper.setAttribute("data-drupal-message-type",type),messageWrapper.setAttribute("aria-label",messagesTypes[type]),messageWrapper.innerHTML=`\n    <div class="messages__header">\n      <h2 id="${id}-title" class="messages__title">\n        ${messagesTypes[type]}\n      </h2>\n    </div>\n    <div class="messages__content">\n      ${text}\n    </div>\n    <button type="button" class="button button--dismiss js-message-button-hide" title="${Drupal.t("Hide")}">\n      <span class="icon-close"></span>\n      ${Drupal.t("Hide")}\n    </button>\n  `,Drupal.ginMessages.dismissMessages(messageWrapper),messageWrapper;},Drupal.behaviors.ginMessages={attach:(context)=>{Drupal.ginMessages.dismissMessages(context);}},Drupal.ginMessages={dismissMessages:function(){let context=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;once("gin-messages-dismiss",".js-message-button-hide",context).forEach(((dismissButton)=>{dismissButton.addEventListener("click",((e)=>{e.preventDefault();const message=dismissButton.parentNode;message.classList.contains("messages-list__item")&&(message.style.opacity=0,message.classList.add("visually-hidden"));}));}));}};})(Drupal,once);;
(function($,window,Drupal,drupalSettings,loadjs,{isFocusable,tabbable}){Drupal.behaviors.AJAX={attach(context,settings){function loadAjaxBehavior(base){const elementSettings=settings.ajax[base];if(typeof elementSettings.selector==='undefined')elementSettings.selector=`#${base}`;once('drupal-ajax',$(elementSettings.selector)).forEach((el)=>{elementSettings.element=el;elementSettings.base=base;Drupal.ajax(elementSettings);});}Object.keys(settings.ajax||{}).forEach(loadAjaxBehavior);Drupal.ajax.bindAjaxLinks(document.body);once('ajax','.use-ajax-submit').forEach((el)=>{const elementSettings={};elementSettings.url=$(el.form).attr('action');elementSettings.setClick=true;elementSettings.event='click';elementSettings.progress={type:'throbber'};elementSettings.base=el.id;elementSettings.element=el;Drupal.ajax(elementSettings);});},detach(context,settings,trigger){if(trigger==='unload')Drupal.ajax.expired().forEach((instance)=>{Drupal.ajax.instances[instance.instanceIndex]=null;});}};Drupal.AjaxError=function(xmlhttp,uri,customMessage){let statusCode;let statusText;let responseText;if(xmlhttp.status)statusCode=`\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t('HTTP Result Code: !status',{'!status':xmlhttp.status})}`;else statusCode=`\n${Drupal.t('An AJAX HTTP request terminated abnormally.')}`;statusCode+=`\n${Drupal.t('Debugging information follows.')}`;const pathText=`\n${Drupal.t('Path: !uri',{'!uri':uri})}`;statusText='';try{statusText=`\n${Drupal.t('StatusText: !statusText',{'!statusText':xmlhttp.statusText.trim()})}`;}catch(e){}responseText='';try{responseText=`\n${Drupal.t('ResponseText: !responseText',{'!responseText':xmlhttp.responseText.trim()})}`;}catch(e){}responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');responseText=responseText.replace(/[\n]+\s+/g,'\n');const readyStateText=xmlhttp.status===0?`\n${Drupal.t('ReadyState: !readyState',{'!readyState':xmlhttp.readyState})}`:'';customMessage=customMessage?`\n${Drupal.t('CustomMessage: !customMessage',{'!customMessage':customMessage})}`:'';this.message=statusCode+pathText+statusText+customMessage+responseText+readyStateText;this.name='AjaxError';if(!Drupal.AjaxError.messages)Drupal.AjaxError.messages=new Drupal.Message();Drupal.AjaxError.messages.add(Drupal.t("Oops, something went wrong. Check your browser's developer console for more details."),{type:'error'});};Drupal.AjaxError.prototype=new Error();Drupal.AjaxError.prototype.constructor=Drupal.AjaxError;Drupal.ajax=function(settings){if(arguments.length!==1)throw new Error('Drupal.ajax() function must be called with one configuration object only');const base=settings.base||false;const element=settings.element||false;delete settings.base;delete settings.element;if(!settings.progress&&!element)settings.progress=false;const ajax=new Drupal.Ajax(base,element,settings);ajax.instanceIndex=Drupal.ajax.instances.length;Drupal.ajax.instances.push(ajax);return ajax;};Drupal.ajax.instances=[];Drupal.ajax.expired=function(){return Drupal.ajax.instances.filter((instance)=>instance&&instance.element!==false&&!document.body.contains(instance.element));};Drupal.ajax.bindAjaxLinks=(element)=>{once('ajax','.use-ajax',element).forEach((ajaxLink)=>{const $linkElement=$(ajaxLink);const elementSettings={progress:{type:'throbber'},dialogType:$linkElement.data('dialog-type'),dialog:$linkElement.data('dialog-options'),dialogRenderer:$linkElement.data('dialog-renderer'),base:$linkElement.attr('id'),element:ajaxLink};const href=$linkElement.attr('href');if(href){elementSettings.url=href;elementSettings.event='click';}const httpMethod=$linkElement.data('ajax-http-method');if(httpMethod)elementSettings.httpMethod=httpMethod;Drupal.ajax(elementSettings);});};Drupal.Ajax=function(base,element,elementSettings){const defaults={httpMethod:'POST',event:element?'mousedown':null,keypress:true,selector:base?`#${base}`:null,effect:'none',speed:'none',method:'replaceWith',progress:{type:'throbber',message:Drupal.t('Processing...')},submit:{js:true}};$.extend(this,defaults,elementSettings);this.commands=new Drupal.AjaxCommands();this.instanceIndex=false;if(this.wrapper)this.wrapper=`#${this.wrapper}`;this.element=element;this.preCommandsFocusedElementSelector=null;this.elementSettings=elementSettings;if(this.element&&this.element.form)this.$form=$(this.element.form);if(!this.url){const $element=$(this.element);if(this.element.tagName==='A')this.url=$element.attr('href');else{if(this.element&&element.form)this.url=this.$form.attr('action');}}const originalUrl=this.url;this.url=this.url.replace(/\/nojs(\/|$|\?|#)/,'/ajax$1');if(drupalSettings.ajaxTrustedUrl[originalUrl])drupalSettings.ajaxTrustedUrl[this.url]=true;const ajax=this;ajax.options={url:ajax.url,data:ajax.submit,isInProgress(){return ajax.ajaxing;},beforeSerialize(elementSettings,options){return ajax.beforeSerialize(elementSettings,options);},beforeSubmit(formValues,elementSettings,options){ajax.ajaxing=true;ajax.preCommandsFocusedElementSelector=null;return ajax.beforeSubmit(formValues,elementSettings,options);},beforeSend(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,options);},success(response,status,xmlhttprequest){ajax.preCommandsFocusedElementSelector=document.activeElement.getAttribute('data-drupal-selector');if(typeof response==='string')response=JSON.parse(response);if(response!==null&&!drupalSettings.ajaxTrustedUrl[ajax.url])if(xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token')!=='1'){const customMessage=Drupal.t('The response failed verification so will not be processed.');return ajax.error(xmlhttprequest,ajax.url,customMessage);}return (Promise.resolve(ajax.success(response,status)).then(()=>{ajax.ajaxing=false;$(document).trigger('ajaxSuccess',[xmlhttprequest,this]);$(document).trigger('ajaxComplete',[xmlhttprequest,this]);if(--$.active===0)$(document).trigger('ajaxStop');}));},error(xmlhttprequest,status,error){ajax.ajaxing=false;},complete(xmlhttprequest,status){if(status==='error'||status==='parsererror')return ajax.error(xmlhttprequest,ajax.url);},dataType:'json',jsonp:false,method:ajax.httpMethod};if(elementSettings.dialog)ajax.options.data.dialogOptions=elementSettings.dialog;if(!ajax.options.url.includes('?'))ajax.options.url+='?';else ajax.options.url+='&';let wrapper=`drupal_${elementSettings.dialogType||'ajax'}`;if(elementSettings.dialogRenderer)wrapper+=`.${elementSettings.dialogRenderer}`;ajax.options.url+=`${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;$(ajax.element).on(elementSettings.event,function(event){if(!drupalSettings.ajaxTrustedUrl[ajax.url]&&!Drupal.url.isLocal(ajax.url))throw new Error(Drupal.t('The callback URL is not local and not trusted: !url',{'!url':ajax.url}));return ajax.eventResponse(this,event);});if(elementSettings.keypress)$(ajax.element).on('keypress',function(event){return ajax.keypressResponse(this,event);});if(elementSettings.prevent)$(ajax.element).on(elementSettings.prevent,false);};Drupal.ajax.WRAPPER_FORMAT='_wrapper_format';Drupal.Ajax.AJAX_REQUEST_PARAMETER='_drupal_ajax';Drupal.Ajax.prototype.execute=function(){if(this.ajaxing)return;try{this.beforeSerialize(this.element,this.options);return $.ajax(this.options);}catch(e){this.ajaxing=false;window.alert(`An error occurred while attempting to process ${this.options.url}: ${e.message}`);return $.Deferred().reject();}};Drupal.Ajax.prototype.keypressResponse=function(element,event){const ajax=this;if(event.which===13||(event.which===32&&element.type!=='text'&&element.type!=='textarea'&&element.type!=='tel'&&element.type!=='number')){event.preventDefault();event.stopPropagation();$(element).trigger(ajax.elementSettings.event);}};Drupal.Ajax.prototype.eventResponse=function(element,event){event.preventDefault();event.stopPropagation();const ajax=this;if(ajax.ajaxing)return;try{if(ajax.$form){if(ajax.setClick)element.form.clk=element;ajax.$form.ajaxSubmit(ajax.options);}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options);}}catch(e){ajax.ajaxing=false;window.alert(`An error occurred while attempting to process ${ajax.options.url}: ${e.message}`);}};Drupal.Ajax.prototype.beforeSerialize=function(element,options){if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.detachBehaviors(this.$form.get(0),settings,'serialize');}options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER]=1;const pageState=drupalSettings.ajaxPageState;options.data['ajax_page_state[theme]']=pageState.theme;options.data['ajax_page_state[theme_token]']=pageState.theme_token;options.data['ajax_page_state[libraries]']=pageState.libraries;};Drupal.Ajax.prototype.beforeSubmit=function(formValues,element,options){};Drupal.Ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.$form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload='1';const v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=v;}$(this.element).prop('disabled',true);if(!this.progress||!this.progress.type)return;const progressIndicatorMethod=`setProgressIndicator${this.progress.type.slice(0,1).toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;if(progressIndicatorMethod in this&&typeof this[progressIndicatorMethod]==='function')this[progressIndicatorMethod].call(this);};Drupal.theme.ajaxProgressThrobber=(message)=>{const messageMarkup=typeof message==='string'?Drupal.theme('ajaxProgressMessage',message):'';const throbber='<div class="throbber">&nbsp;</div>';return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;};Drupal.theme.ajaxProgressIndicatorFullscreen=()=>'<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';Drupal.theme.ajaxProgressMessage=(message)=>`<div class="message">${message}</div>`;Drupal.theme.ajaxProgressBar=($element)=>$('<div class="ajax-progress ajax-progress-bar"></div>').append($element);Drupal.Ajax.prototype.setProgressIndicatorBar=function(){const progressBar=new Drupal.ProgressBar(`ajax-progress-${this.element.id}`,$.noop,this.progress.method,$.noop);if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(Drupal.theme('ajaxProgressBar',progressBar.element));this.progress.object=progressBar;$(this.element).after(this.progress.element);};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){this.progress.element=$(Drupal.theme('ajaxProgressThrobber',this.progress.message));if($(this.element).closest('[data-drupal-ajax-container]').length)$(this.element).closest('[data-drupal-ajax-container]').after(this.progress.element);else $(this.element).after(this.progress.element);};Drupal.Ajax.prototype.setProgressIndicatorFullscreen=function(){this.progress.element=$(Drupal.theme('ajaxProgressIndicatorFullscreen'));$('body').append(this.progress.element);};Drupal.Ajax.prototype.commandExecutionQueue=function(response,status){const ajaxCommands=this.commands;return Object.keys(response||{}).reduce((executionQueue,key)=>executionQueue.then(()=>{const {command}=response[key];if(command&&ajaxCommands[command])return ajaxCommands[command](this,response[key],status);}),Promise.resolve());};Drupal.Ajax.prototype.success=function(response,status){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).prop('disabled',false);const elementParents=$(this.element).parents('[data-drupal-selector]').addBack().toArray();const focusChanged=Object.keys(response||{}).some((key)=>{const {command,method}=response[key];return (command==='focusFirst'||command==='openDialog'||(command==='invoke'&&method==='focus'));});return (this.commandExecutionQueue(response,status).then(()=>{if(!focusChanged){let target=false;if(this.element){if($(this.element).data('refocus-blur')&&this.preCommandsFocusedElementSelector)target=document.querySelector(`[data-drupal-selector="${this.preCommandsFocusedElementSelector}"]`);if(!target&&!$(this.element).data('disable-refocus')){for(let n=elementParents.length-1;!target&&n>=0;n--)target=document.querySelector(`[data-drupal-selector="${elementParents[n].getAttribute('data-drupal-selector')}"]`);}}if(target)$(target).trigger('focus');}if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings);}this.settings=null;}).catch((error)=>console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error',{'!error':error}))));};Drupal.Ajax.prototype.getEffect=function(response){const type=response.effect||this.effect;const speed=response.speed||this.speed;const effect={};if(type==='none'){effect.showEffect='show';effect.hideEffect='hide';effect.showSpeed='';}else if(type==='fade'){effect.showEffect='fadeIn';effect.hideEffect='fadeOut';effect.showSpeed=speed;}else{effect.showEffect=`${type}Toggle`;effect.hideEffect=`${type}Toggle`;effect.showSpeed=speed;}return effect;};Drupal.Ajax.prototype.error=function(xmlhttprequest,uri,customMessage){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.wrapper).show();$(this.element).prop('disabled',false);if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings);}throw new Drupal.AjaxError(xmlhttprequest,uri,customMessage);};Drupal.theme.ajaxWrapperNewContent=($newContent,ajax,response)=>(response.effect||ajax.effect)!=='none'&&$newContent.filter((i)=>!(($newContent[i].nodeName==='#comment'||($newContent[i].nodeName==='#text'&&/^(\s|\n|\r)*$/.test($newContent[i].textContent))))).length>1?Drupal.theme('ajaxWrapperMultipleRootElements',$newContent):$newContent;Drupal.theme.ajaxWrapperMultipleRootElements=($elements)=>$('<div></div>').append($elements);Drupal.AjaxCommands=function(){};Drupal.AjaxCommands.prototype={insert(ajax,response){const $wrapper=response.selector?$(response.selector):$(ajax.wrapper);const method=response.method||ajax.method;const effect=ajax.getEffect(response);const settings=response.settings||ajax.settings||drupalSettings;const parseHTML=(htmlString)=>{const fragment=document.createDocumentFragment();const tempDiv=fragment.appendChild(document.createElement('div'));tempDiv.innerHTML=htmlString;return tempDiv.childNodes;};let $newContent=$(parseHTML(response.data));$newContent=Drupal.theme('ajaxWrapperNewContent',$newContent,ajax,response);switch(method){case 'html':case 'replaceWith':case 'replaceAll':case 'empty':case 'remove':Drupal.detachBehaviors($wrapper.get(0),settings);break;default:break;}$wrapper[method]($newContent);if(effect.showEffect!=='show')$newContent.hide();const $ajaxNewContent=$newContent.find('.ajax-new-content');if($ajaxNewContent.length){$ajaxNewContent.hide();$newContent.show();$ajaxNewContent[effect.showEffect](effect.showSpeed);}else{if(effect.showEffect!=='show')$newContent[effect.showEffect](effect.showSpeed);}$newContent.each((index,element)=>{if(element.nodeType===Node.ELEMENT_NODE&&document.documentElement.contains(element))Drupal.attachBehaviors(element,settings);});},remove(ajax,response,status){const settings=response.settings||ajax.settings||drupalSettings;$(response.selector).each(function(){Drupal.detachBehaviors(this,settings);}).remove();},changed(ajax,response,status){const $element=$(response.selector);if(!$element.hasClass('ajax-changed')){$element.addClass('ajax-changed');if(response.asterisk)$element.find(response.asterisk).append(` <abbr class="ajax-changed" title="${Drupal.t('Changed')}">*</abbr> `);}},alert(ajax,response,status){window.alert(response.text);},announce(ajax,response){if(response.priority)Drupal.announce(response.text,response.priority);else Drupal.announce(response.text);},redirect(ajax,response,status){window.location=response.url;},css(ajax,response,status){$(response.selector).css(response.argument);},settings(ajax,response,status){const ajaxSettings=drupalSettings.ajax;if(ajaxSettings)Drupal.ajax.expired().forEach((instance)=>{if(instance.selector){const selector=instance.selector.replace('#','');if(selector in ajaxSettings)delete ajaxSettings[selector];}});if(response.merge)$.extend(true,drupalSettings,response.settings);else ajax.settings=response.settings;},data(ajax,response,status){$(response.selector).data(response.name,response.value);},focusFirst(ajax,response,status){let focusChanged=false;const container=document.querySelector(response.selector);if(container){const tabbableElements=tabbable(container);if(tabbableElements.length){tabbableElements[0].focus();focusChanged=true;}else{if(isFocusable(container)){container.focus();focusChanged=true;}}}if(ajax.hasOwnProperty('element')&&!focusChanged)ajax.element.focus();},invoke(ajax,response,status){const $element=$(response.selector);$element[response.method](...response.args);},restripe(ajax,response,status){$(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');},update_build_id(ajax,response,status){document.querySelectorAll(`input[name="form_build_id"][value="${response.old}"]`).forEach((item)=>{item.value=response.new;});},add_css(ajax,response,status){const allUniqueBundleIds=response.data.map(function(style){const uniqueBundleId=style.href;if(!loadjs.isDefined(uniqueBundleId))loadjs(`css!${style.href}`,uniqueBundleId,{before(path,styleEl){Object.keys(style).forEach((attributeKey)=>{styleEl.setAttribute(attributeKey,style[attributeKey]);});}});return uniqueBundleId;});return new Promise((resolve,reject)=>{loadjs.ready(allUniqueBundleIds,{success(){resolve();},error(depsNotFound){const message=Drupal.t(`The following files could not be loaded: @dependencies`,{'@dependencies':depsNotFound.join(', ')});reject(message);}});});},message(ajax,response){const messages=new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));if(response.clearPrevious)messages.clear();messages.add(response.message,response.messageOptions);},add_js(ajax,response,status){const parentEl=document.querySelector(response.selector||'body');const settings=ajax.settings||drupalSettings;const allUniqueBundleIds=response.data.map((script)=>{const uniqueBundleId=script.src;if(!loadjs.isDefined(uniqueBundleId))loadjs(script.src,uniqueBundleId,{async:false,before(path,scriptEl){Object.keys(script).forEach((attributeKey)=>{scriptEl.setAttribute(attributeKey,script[attributeKey]);});parentEl.appendChild(scriptEl);return false;}});return uniqueBundleId;});return new Promise((resolve,reject)=>{loadjs.ready(allUniqueBundleIds,{success(){Drupal.attachBehaviors(parentEl,settings);resolve();},error(depsNotFound){const message=Drupal.t(`The following files could not be loaded: @dependencies`,{'@dependencies':depsNotFound.join(', ')});reject(message);}});});},scrollTop(ajax,response){const offset=$(response.selector).offset();let scrollTarget=response.selector;while($(scrollTarget).scrollTop()===0&&$(scrollTarget).parent())scrollTarget=$(scrollTarget).parent();if(offset.top-10<$(scrollTarget).scrollTop())scrollTarget.get(0).scrollTo({top:offset.top-10,behavior:'smooth'});}};const stopEvent=(xhr,settings)=>{return (xhr.getResponseHeader('X-Drupal-Ajax-Token')==='1'&&settings.isInProgress&&settings.isInProgress());};$.extend(true,$.event.special,{ajaxSuccess:{trigger(event,xhr,settings){if(stopEvent(xhr,settings))return false;}},ajaxComplete:{trigger(event,xhr,settings){if(stopEvent(xhr,settings)){$.active++;return false;}}}});})(jQuery,window,Drupal,drupalSettings,loadjs,window.tabbable);;
((Drupal)=>{Drupal.theme.ajaxProgressIndicatorFullscreen=()=>'<div class="ajax-progress ajax-progress--fullscreen"><div class="ajax-progress__throbber ajax-progress__throbber--fullscreen">&nbsp;</div></div>';Drupal.theme.ajaxProgressThrobber=(message)=>{const messageMarkup=typeof message==='string'?Drupal.theme('ajaxProgressMessage',message):'';const throbber='<div class="ajax-progress__throbber">&nbsp;</div>';return `<div class="ajax-progress ajax-progress--throbber">${throbber}${messageMarkup}</div>`;};Drupal.theme.ajaxProgressMessage=(message)=>`<div class="ajax-progress__message">${message}</div>`;})(Drupal);;
((Drupal,drupalSettings)=>{const replacementsSelector=`script[data-big-pipe-replacement-for-placeholder-with-id]`;const ajaxObject=Drupal.ajax({url:'',base:false,element:false,progress:false});function mapTextContentToAjaxResponse(content){if(content==='')return false;try{return JSON.parse(content);}catch(e){return false;}}function processReplacement(replacement){const id=replacement.dataset.bigPipeReplacementForPlaceholderWithId;const content=replacement.textContent.trim();if(typeof drupalSettings.bigPipePlaceholderIds[id]==='undefined')return;const response=mapTextContentToAjaxResponse(content);if(response===false)return;delete drupalSettings.bigPipePlaceholderIds[id];ajaxObject.success(response,'success');}function checkMutation(node){return Boolean(node.nodeType===Node.ELEMENT_NODE&&node.nodeName==='SCRIPT'&&node.dataset&&node.dataset.bigPipeReplacementForPlaceholderWithId&&typeof drupalSettings.bigPipePlaceholderIds[node.dataset.bigPipeReplacementForPlaceholderWithId]!=='undefined');}function checkMutationAndProcess(node){if(checkMutation(node))processReplacement(node);else{if(node.parentNode!==null&&checkMutation(node.parentNode))processReplacement(node.parentNode);}}function processMutations(mutations){mutations.forEach(({addedNodes,type,target})=>{addedNodes.forEach(checkMutationAndProcess);if(type==='characterData'&&checkMutation(target.parentNode)&&drupalSettings.bigPipePlaceholderIds[target.parentNode.dataset.bigPipeReplacementForPlaceholderWithId]===true)processReplacement(target.parentNode);});}const observer=new MutationObserver(processMutations);Drupal.attachBehaviors(document);document.querySelectorAll(replacementsSelector).forEach(processReplacement);observer.observe(document.body,{childList:true,subtree:true,characterData:true});window.addEventListener('DOMContentLoaded',()=>{const mutations=observer.takeRecords();observer.disconnect();if(mutations.length)processMutations(mutations);Drupal.ajax.instances[ajaxObject.instanceIndex]=null;});})(Drupal,drupalSettings);;
(function($,Drupal,{tabbable,isTabbable}){function TabbingManager(){this.stack=[];}function TabbingContext(options){$.extend(this,{level:null,$tabbableElements:$(),$disabledElements:$(),released:false,active:false,trapFocus:false},options);}$.extend(TabbingManager.prototype,{constrain(elements,{trapFocus=false}={}){const il=this.stack.length;for(let i=0;i<il;i++)this.stack[i].deactivate();let tabbableElements=[];$(elements).each((index,rootElement)=>{tabbableElements=[...tabbableElements,...tabbable(rootElement)];if(isTabbable(rootElement))tabbableElements=[...tabbableElements,rootElement];});const tabbingContext=new TabbingContext({level:this.stack.length,$tabbableElements:$(tabbableElements),trapFocus});this.stack.push(tabbingContext);tabbingContext.activate();$(document).trigger('drupalTabbingConstrained',tabbingContext);return tabbingContext;},release(){let toActivate=this.stack.length-1;while(toActivate>=0&&this.stack[toActivate].released)toActivate--;this.stack.splice(toActivate+1);if(toActivate>=0)this.stack[toActivate].activate();},activate(tabbingContext){const $set=tabbingContext.$tabbableElements;const level=tabbingContext.level;const $disabledSet=$(tabbable(document.body)).not($set);tabbingContext.$disabledElements=$disabledSet;const il=$disabledSet.length;for(let i=0;i<il;i++)this.recordTabindex($disabledSet.eq(i),level);$disabledSet.prop('tabindex',-1).prop('autofocus',false);let $hasFocus=$set.filter('[autofocus]').eq(-1);if($hasFocus.length===0)$hasFocus=$set.eq(0);$hasFocus.trigger('focus');if($set.length&&tabbingContext.trapFocus){$set.last().on('keydown.focus-trap',(event)=>{if(event.key==='Tab'&&!event.shiftKey){event.preventDefault();$set.first().focus();}});$set.first().on('keydown.focus-trap',(event)=>{if(event.key==='Tab'&&event.shiftKey){event.preventDefault();$set.last().focus();}});}},deactivate(tabbingContext){const $set=tabbingContext.$disabledElements;const level=tabbingContext.level;const il=$set.length;tabbingContext.$tabbableElements.first().off('keydown.focus-trap');tabbingContext.$tabbableElements.last().off('keydown.focus-trap');for(let i=0;i<il;i++)this.restoreTabindex($set.eq(i),level);},recordTabindex($el,level){const tabInfo=$el.data('drupalOriginalTabIndices')||{};tabInfo[level]={tabindex:$el[0].getAttribute('tabindex'),autofocus:$el[0].hasAttribute('autofocus')};$el.data('drupalOriginalTabIndices',tabInfo);},restoreTabindex($el,level){const tabInfo=$el.data('drupalOriginalTabIndices');if(tabInfo&&tabInfo[level]){const data=tabInfo[level];if(data.tabindex)$el[0].setAttribute('tabindex',data.tabindex);else $el[0].removeAttribute('tabindex');if(data.autofocus)$el[0].setAttribute('autofocus','autofocus');if(level===0)$el.removeData('drupalOriginalTabIndices');else{let levelToDelete=level;while(tabInfo.hasOwnProperty(levelToDelete)){delete tabInfo[levelToDelete];levelToDelete++;}$el.data('drupalOriginalTabIndices',tabInfo);}}}});$.extend(TabbingContext.prototype,{release(){if(!this.released){this.deactivate();this.released=true;Drupal.tabbingManager.release(this);$(document).trigger('drupalTabbingContextReleased',this);}},activate(){if(!this.active&&!this.released){this.active=true;Drupal.tabbingManager.activate(this);$(document).trigger('drupalTabbingContextActivated',this);}},deactivate(){if(this.active){this.active=false;Drupal.tabbingManager.deactivate(this);$(document).trigger('drupalTabbingContextDeactivated',this);}}});if(Drupal.tabbingManager)return;Drupal.tabbingManager=new TabbingManager();})(jQuery,Drupal,window.tabbable);;
(function($,Drupal,Backbone){const strings={tabbingReleased:Drupal.t('Tabbing is no longer constrained by the Contextual module.'),tabbingConstrained:Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),pressEsc:Drupal.t('Press the esc key to exit.')};function initContextualToolbar(context){if(!Drupal.contextual||!Drupal.contextual.collection)return;const contextualToolbar=Drupal.contextualToolbar;contextualToolbar.model=new contextualToolbar.StateModel({isViewing:document.querySelector('body .contextual-region')===null||localStorage.getItem('Drupal.contextualToolbar.isViewing')!=='false'},{contextualCollection:Drupal.contextual.collection});const viewOptions={el:$('.toolbar .toolbar-bar .contextual-toolbar-tab'),model:contextualToolbar.model,strings};new contextualToolbar.VisualView(viewOptions);new contextualToolbar.AuralView(viewOptions);}Drupal.behaviors.contextualToolbar={attach(context){if(once('contextualToolbar-init','body').length)initContextualToolbar(context);}};Drupal.contextualToolbar={model:null};})(jQuery,Drupal,Backbone);;
(function(Drupal,Backbone){Drupal.contextualToolbar.StateModel=Backbone.Model.extend({defaults:{isViewing:true,isVisible:false,contextualCount:0,tabbingContext:null},initialize(attrs,options){this.listenTo(options.contextualCollection,'reset remove add',this.countContextualLinks);this.listenTo(options.contextualCollection,'add',this.lockNewContextualLinks);this.listenTo(this,'change:contextualCount',this.updateVisibility);this.listenTo(this,'change:isViewing',(model,isViewing)=>{options.contextualCollection.each((contextualModel)=>{contextualModel.set('isLocked',!isViewing);});});},countContextualLinks(contextualModel,contextualCollection){this.set('contextualCount',contextualCollection.length);},lockNewContextualLinks(contextualModel,contextualCollection){if(!this.get('isViewing'))contextualModel.set('isLocked',true);},updateVisibility(){this.set('isVisible',this.get('contextualCount')>0);}});})(Drupal,Backbone);;
(function($,Drupal,Backbone,_){Drupal.contextualToolbar.AuralView=Backbone.View.extend({announcedOnce:false,initialize(options){this.options=options;this.listenTo(this.model,'change',this.render);this.listenTo(this.model,'change:isViewing',this.manageTabbing);$(document).on('keyup',_.bind(this.onKeypress,this));this.manageTabbing();},render(){this.$el.find('button').attr('aria-pressed',!this.model.get('isViewing'));return this;},manageTabbing(){let tabbingContext=this.model.get('tabbingContext');if(tabbingContext){if(tabbingContext.active)Drupal.announce(this.options.strings.tabbingReleased);tabbingContext.release();}if(!this.model.get('isViewing')){tabbingContext=Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));this.model.set('tabbingContext',tabbingContext);this.announceTabbingConstraint();this.announcedOnce=true;}},announceTabbingConstraint(){const strings=this.options.strings;Drupal.announce(Drupal.formatString(strings.tabbingConstrained,{'@contextualsCount':Drupal.formatPlural(Drupal.contextual.collection.length,'@count contextual link','@count contextual links')}));Drupal.announce(strings.pressEsc);},onKeypress(event){if(!this.announcedOnce&&event.keyCode===9&&!this.model.get('isViewing')){this.announceTabbingConstraint();this.announcedOnce=true;}if(event.keyCode===27)this.model.set('isViewing',true);}});})(jQuery,Drupal,Backbone,_);;
(function(Drupal,Backbone){Drupal.contextualToolbar.VisualView=Backbone.View.extend({events(){const touchEndToClick=function(event){event.preventDefault();event.target.click();};return {click(){this.model.set('isViewing',!this.model.get('isViewing'));},touchend:touchEndToClick};},initialize(){this.listenTo(this.model,'change',this.render);this.listenTo(this.model,'change:isViewing',this.persist);},render(){this.$el.toggleClass('hidden',!this.model.get('isVisible'));this.$el.find('button').toggleClass('is-active',!this.model.get('isViewing'));return this;},persist(model,isViewing){if(!isViewing)localStorage.setItem('Drupal.contextualToolbar.isViewing','false');else localStorage.removeItem('Drupal.contextualToolbar.isViewing');}});})(Drupal,Backbone);;
(function(Drupal,drupalSettings){Drupal.behaviors.activeLinks={attach(context){const path=drupalSettings.path;const queryString=JSON.stringify(path.currentQuery);const querySelector=queryString?`[data-drupal-link-query="${CSS.escape(queryString)}"]`:':not([data-drupal-link-query])';const originalSelectors=[`[data-drupal-link-system-path="${CSS.escape(path.currentPath)}"]`];let selectors;if(path.isFront)originalSelectors.push('[data-drupal-link-system-path="<front>"]');selectors=[].concat(originalSelectors.map((selector)=>`${selector}:not([hreflang])`),originalSelectors.map((selector)=>`${selector}[hreflang="${path.currentLanguage}"]`));selectors=selectors.map((current)=>current+querySelector);const activeLinks=context.querySelectorAll(selectors.join(','));const il=activeLinks.length;for(let i=0;i<il;i++){activeLinks[i].classList.add('is-active');activeLinks[i].setAttribute('aria-current','page');}},detach(context,settings,trigger){if(trigger==='unload'){const activeLinks=context.querySelectorAll('[data-drupal-link-system-path].is-active');const il=activeLinks.length;for(let i=0;i<il;i++){activeLinks[i].classList.remove('is-active');activeLinks[i].removeAttribute('aria-current');}}}};})(Drupal,drupalSettings);;
(function($,Drupal,debounce){const cache={right:0,left:0,bottom:0,top:0};const cssVarPrefix='--drupal-displace-offset';const documentStyle=document.documentElement.style;const offsetKeys=Object.keys(cache);const offsetProps={};offsetKeys.forEach((edge)=>{offsetProps[edge]={enumerable:true,get(){return cache[edge];},set(value){if(value!==cache[edge])documentStyle.setProperty(`${cssVarPrefix}-${edge}`,`${value}px`);cache[edge]=value;}};});const offsets=Object.seal(Object.defineProperties({},offsetProps));function getRawOffset(el,edge){const $el=$(el);const documentElement=document.documentElement;let displacement=0;const horizontal=edge==='left'||edge==='right';let placement=$el.offset()[horizontal?'left':'top'];placement-=window[`scroll${horizontal?'X':'Y'}`]||document.documentElement[`scroll${horizontal?'Left':'Top'}`]||0;switch(edge){case 'top':displacement=placement+$el.outerHeight();break;case 'left':displacement=placement+$el.outerWidth();break;case 'bottom':displacement=documentElement.clientHeight-placement;break;case 'right':displacement=documentElement.clientWidth-placement;break;default:displacement=0;}return displacement;}function calculateOffset(edge){let edgeOffset=0;const displacingElements=document.querySelectorAll(`[data-offset-${edge}]`);const n=displacingElements.length;for(let i=0;i<n;i++){const el=displacingElements[i];if(el.style.display==='none')continue;let displacement=parseInt(el.getAttribute(`data-offset-${edge}`),10);if(isNaN(displacement))displacement=getRawOffset(el,edge);edgeOffset=Math.max(edgeOffset,displacement);}return edgeOffset;}function displace(broadcast=true){const newOffsets={};offsetKeys.forEach((edge)=>{newOffsets[edge]=calculateOffset(edge);});offsetKeys.forEach((edge)=>{offsets[edge]=newOffsets[edge];});if(broadcast)$(document).trigger('drupalViewportOffsetChange',offsets);return offsets;}Drupal.behaviors.drupalDisplace={attach(){if(this.displaceProcessed)return;this.displaceProcessed=true;$(window).on('resize.drupalDisplace',debounce(displace,200));}};Drupal.displace=displace;Object.defineProperty(Drupal.displace,'offsets',{value:offsets,writable:false});Drupal.displace.calculateOffset=calculateOffset;})(jQuery,Drupal,Drupal.debounce);;
(($)=>{let cachedScrollbarWidth=null;const {max,abs}=Math;const regexHorizontal=/left|center|right/;const regexVertical=/top|center|bottom/;const regexOffset=/[+-]\d+(\.[\d]+)?%?/;const regexPosition=/^\w+/;const _position=$.fn.position;function getOffsets(offsets,width,height){return [parseFloat(offsets[0])*(typeof offsets[0]==='string'&&offsets[0].endsWith('%')?width/100:1),parseFloat(offsets[1])*(typeof offsets[1]==='string'&&offsets[1].endsWith('%')?height/100:1)];}function parseCss(element,property){return parseInt(window.getComputedStyle(element)[property],10)||0;}function getDimensions(elem){const raw=elem[0];if(raw.nodeType===9)return {width:elem.width(),height:elem.height(),offset:{top:0,left:0}};if(!!raw&&raw===raw.window)return {width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};if(raw.preventDefault)return {width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};return {width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}const collisions={fit:{left(position,data){const {within}=data;const withinOffset=within.isWindow?within.scrollLeft:within.offset.left;const outerWidth=within.width;const collisionPosLeft=position.left-data.collisionPosition.marginLeft;const overLeft=withinOffset-collisionPosLeft;const overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset;let newOverRight;if(data.collisionWidth>outerWidth)if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0)position.left=withinOffset;else if(overLeft>overRight)position.left=withinOffset+outerWidth-data.collisionWidth;else position.left=withinOffset;else if(overLeft>0)position.left+=overLeft;else if(overRight>0)position.left-=overRight;else position.left=max(position.left-collisionPosLeft,position.left);},top(position,data){const {within}=data;const withinOffset=within.isWindow?within.scrollTop:within.offset.top;const outerHeight=data.within.height;const collisionPosTop=position.top-data.collisionPosition.marginTop;const overTop=withinOffset-collisionPosTop;const overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset;let newOverBottom;if(data.collisionHeight>outerHeight)if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0)position.top=withinOffset;else if(overTop>overBottom)position.top=withinOffset+outerHeight-data.collisionHeight;else position.top=withinOffset;else if(overTop>0)position.top+=overTop;else if(overBottom>0)position.top-=overBottom;else position.top=max(position.top-collisionPosTop,position.top);}},flip:{left(position,data){const {within}=data;const withinOffset=within.offset.left+within.scrollLeft;const outerWidth=within.width;const offsetLeft=within.isWindow?within.scrollLeft:within.offset.left;const collisionPosLeft=position.left-data.collisionPosition.marginLeft;const overLeft=collisionPosLeft-offsetLeft;const overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft;const myOffset=data.my[0]==='left'?-data.elemWidth:data.my[0]==='right'?data.elemWidth:0;const atOffset=data.at[0]==='left'?data.targetWidth:data.at[0]==='right'?-data.targetWidth:0;const offset=-2*data.offset[0];let newOverRight;let newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft))position.left+=myOffset+atOffset+offset;}else{if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight)position.left+=myOffset+atOffset+offset;}}},top(position,data){const {within}=data;const withinOffset=within.offset.top+within.scrollTop;const outerHeight=within.height;const offsetTop=within.isWindow?within.scrollTop:within.offset.top;const collisionPosTop=position.top-data.collisionPosition.marginTop;const overTop=collisionPosTop-offsetTop;const overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop;const top=data.my[1]==='top';const myOffset=top?-data.elemHeight:data.my[1]==='bottom'?data.elemHeight:0;const atOffset=data.at[1]==='top'?data.targetHeight:data.at[1]==='bottom'?-data.targetHeight:0;const offset=-2*data.offset[1];let newOverTop;let newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop))position.top+=myOffset+atOffset+offset;}else{if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom)position.top+=myOffset+atOffset+offset;}}}},flipfit:{left(...args){collisions.flip.left.apply(this,args);collisions.fit.left.apply(this,args);},top(...args){collisions.flip.top.apply(this,args);collisions.fit.top.apply(this,args);}}};$.position={scrollbarWidth(){if(cachedScrollbarWidth!==undefined)return cachedScrollbarWidth;const div=$('<div '+"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+"<div style='height:100px;width:auto;'></div></div>");const innerDiv=div.children()[0];$('body').append(div);const w1=innerDiv.offsetWidth;div[0].style.overflow='scroll';let w2=innerDiv.offsetWidth;if(w1===w2)w2=div[0].clientWidth;div.remove();cachedScrollbarWidth=w1-w2;return cachedScrollbarWidth;},getScrollInfo(within){const overflowX=within.isWindow||within.isDocument?'':window.getComputedStyle(within.element[0])['overflow-x'];const overflowY=within.isWindow||within.isDocument?'':window.getComputedStyle(within.element[0])['overflow-y'];const hasOverflowX=overflowX==='scroll'||(overflowX==='auto'&&within.width<within.element[0].scrollWidth);const hasOverflowY=overflowY==='scroll'||(overflowY==='auto'&&within.height<within.element[0].scrollHeight);return {width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo(element){const withinElement=$(element||window);const isWindow=!!withinElement[0]&&withinElement[0]===withinElement[0].window;const isDocument=!!withinElement[0]&&withinElement[0].nodeType===9;const hasOffset=!isWindow&&!isDocument;return {element:withinElement,isWindow,isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of)return _position.apply(this,arguments);options=$.extend({},options);const within=$.position.getWithinInfo(options.within);const scrollInfo=$.position.getScrollInfo(within);const collision=(options.collision||'flip').split(' ');const offsets={};const target=typeof options.of==='string'?$(document).find(options.of):$(options.of);const dimensions=getDimensions(target);const targetWidth=dimensions.width;const targetHeight=dimensions.height;const targetOffset=dimensions.offset;if(target[0].preventDefault)options.at='left top';const basePosition=$.extend({},targetOffset);$.each(['my','at'],function(){let pos=(options[this]||'').split(' ');if(pos.length===1)pos=regexHorizontal.test(pos[0])?pos.concat(['center']):regexVertical.test(pos[0])?['center'].concat(pos):['center','center'];pos[0]=regexHorizontal.test(pos[0])?pos[0]:'center';pos[1]=regexVertical.test(pos[1])?pos[1]:'center';const horizontalOffset=regexOffset.exec(pos[0]);const verticalOffset=regexOffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[regexPosition.exec(pos[0])[0],regexPosition.exec(pos[1])[0]];});if(collision.length===1)collision[1]=collision[0];if(options.at[0]==='right')basePosition.left+=targetWidth;else{if(options.at[0]==='center')basePosition.left+=targetWidth/2;}if(options.at[1]==='bottom')basePosition.top+=targetHeight;else{if(options.at[1]==='center')basePosition.top+=targetHeight/2;}const atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){let using;const elem=$(this);const elemWidth=elem.outerWidth();const elemHeight=elem.outerHeight();const marginLeft=parseCss(this,'marginLeft');const marginTop=parseCss(this,'marginTop');const collisionWidth=elemWidth+marginLeft+parseCss(this,'marginRight')+scrollInfo.width;const collisionHeight=elemHeight+marginTop+parseCss(this,'marginBottom')+scrollInfo.height;const position=$.extend({},basePosition);const myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==='right')position.left-=elemWidth;else{if(options.my[0]==='center')position.left-=elemWidth/2;}if(options.my[1]==='bottom')position.top-=elemHeight;else{if(options.my[1]==='center')position.top-=elemHeight/2;}position.left+=myOffset[0];position.top+=myOffset[1];const collisionPosition={marginLeft,marginTop};$.each(['left','top'],function(i,dir){if(collisions[collision[i]])collisions[collision[i]][dir](position,{targetWidth,targetHeight,elemWidth,elemHeight,collisionPosition,collisionWidth,collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within,elem});});if(options.using)using=function(props){const left=targetOffset.left-position.left;const right=left+targetWidth-elemWidth;const top=targetOffset.top-position.top;const bottom=top+targetHeight-elemHeight;const feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?'left':left>0?'right':'center',vertical:bottom<0?'top':top>0?'bottom':'middle'};if(targetWidth<elemWidth&&abs(left+right)<targetWidth)feedback.horizontal='center';if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight)feedback.vertical='middle';if(max(abs(left),abs(right))>max(abs(top),abs(bottom)))feedback.important='horizontal';else feedback.important='vertical';options.using.call(this,props,feedback);};elem.offset($.extend(position,{using}));});};if(!$.hasOwnProperty('ui'))$.ui={};$.ui.position=collisions;})(jQuery);;
(function($,Drupal,once){if(once('drupal-dialog-deprecation-listener','html').length){const eventSpecial={handle($event){const $element=$($event.target);const event=$event.originalEvent;const dialog=event.dialog;const dialogArguments=[$event,dialog,$element,event?.settings];$event.handleObj.handler.apply(this,dialogArguments);}};$.event.special['dialog:beforecreate']=eventSpecial;$.event.special['dialog:aftercreate']=eventSpecial;$.event.special['dialog:beforeclose']=eventSpecial;$.event.special['dialog:afterclose']=eventSpecial;const listenDialogEvent=(event)=>{const windowEvents=$._data(window,'events');const isWindowHasDialogListener=windowEvents[event.type];if(isWindowHasDialogListener)Drupal.deprecationError({message:`jQuery event ${event.type} is deprecated in 10.3.0 and is removed from Drupal:12.0.0. See https://www.drupal.org/node/3422670`});};['dialog:beforecreate','dialog:aftercreate','dialog:beforeclose','dialog:afterclose'].forEach((e)=>window.addEventListener(e,listenDialogEvent));}})(jQuery,Drupal,once);;
class DrupalDialogEvent extends Event{constructor(type,dialog,settings=null){super(`dialog:${type}`,{bubbles:true});this.dialog=dialog;this.settings=settings;}}(function($,Drupal,drupalSettings,bodyScrollLock){drupalSettings.dialog={autoOpen:true,buttonClass:'button',buttonPrimaryClass:'button--primary',close(event){Drupal.dialog(event.target).close();Drupal.detachBehaviors(event.target,null,'unload');}};Drupal.dialog=function(element,options){let undef;const $element=$(element);const domElement=$element.get(0);const dialog={open:false,returnValue:undef};function openDialog(settings){settings=$.extend({},drupalSettings.dialog,options,settings);if(settings.dialogClass)Drupal.deprecationError({message:'dialogClass is deprecated in drupal:10.4.x and will be removed from drupal:12.0.0.'});const event=new DrupalDialogEvent('beforecreate',dialog,settings);domElement.dispatchEvent(event);$element.dialog(event.settings);dialog.open=true;if(event.settings.modal)bodyScrollLock.lock(domElement);domElement.dispatchEvent(new DrupalDialogEvent('aftercreate',dialog,event.settings));}function closeDialog(value){domElement.dispatchEvent(new DrupalDialogEvent('beforeclose',dialog));bodyScrollLock.clearBodyLocks();$element.dialog('close');dialog.returnValue=value;dialog.open=false;domElement.dispatchEvent(new DrupalDialogEvent('afterclose',dialog));}dialog.show=()=>{openDialog({modal:false});};dialog.showModal=()=>{openDialog({modal:true});};dialog.close=closeDialog;return dialog;};})(jQuery,Drupal,drupalSettings,bodyScrollLock);;
(function($,Drupal,drupalSettings,debounce,displace){drupalSettings.dialog=$.extend({autoResize:true,maxHeight:'95%'},drupalSettings.dialog);function resetPosition(options){const offsets=displace.offsets;const left=offsets.left-offsets.right;const top=offsets.top-offsets.bottom;const leftString=`${(left>0?'+':'-')+Math.abs(Math.round(left/2))}px`;const topString=`${(top>0?'+':'-')+Math.abs(Math.round(top/2))}px`;options.position={my:`center${left!==0?leftString:''} center${top!==0?topString:''}`,of:window};return options;}function resetSize(event){const positionOptions=['width','height','minWidth','minHeight','maxHeight','maxWidth','position'];let adjustedOptions={};let windowHeight=$(window).height();let option;let optionValue;let adjustedValue;for(let n=0;n<positionOptions.length;n++){option=positionOptions[n];optionValue=event.data.settings[option];if(optionValue)if(typeof optionValue==='string'&&optionValue.endsWith('%')&&/height/i.test(option)){windowHeight-=displace.offsets.top+displace.offsets.bottom;adjustedValue=parseInt(0.01*parseInt(optionValue,10)*windowHeight,10);if(option==='height'&&Math.round(event.data.$element.parent().outerHeight())<adjustedValue)adjustedValue='auto';adjustedOptions[option]=adjustedValue;}}if(!event.data.settings.modal)adjustedOptions=resetPosition(adjustedOptions);event.data.$element.dialog('option',adjustedOptions);event.data.$element?.get(0)?.dispatchEvent(new CustomEvent('dialogContentResize',{bubbles:true}));}window.addEventListener('dialog:aftercreate',(e)=>{const autoResize=debounce(resetSize,20);const $element=$(e.target);const {settings}=e;const eventData={settings,$element};if(settings.autoResize===true||settings.autoResize==='true'){const uiDialog=$element.dialog('option',{resizable:false,draggable:false}).dialog('widget');uiDialog[0].style.position='fixed';$(window).on('resize.dialogResize scroll.dialogResize',eventData,autoResize).trigger('resize.dialogResize');$(document).on('drupalViewportOffsetChange.dialogResize',eventData,autoResize);}});window.addEventListener('dialog:beforeclose',()=>{$(window).off('.dialogResize');$(document).off('.dialogResize');});})(jQuery,Drupal,drupalSettings,Drupal.debounce,Drupal.displace);;
(function($,{tabbable,isTabbable}){$.widget('ui.dialog',$.ui.dialog,{options:{buttonClass:'button',buttonPrimaryClass:'button--primary'},_createButtons(){const opts=this.options;let primaryIndex;let index;const il=opts.buttons.length;for(index=0;index<il;index++)if(opts.buttons[index].primary&&opts.buttons[index].primary===true){primaryIndex=index;delete opts.buttons[index].primary;break;}this._super();const $buttons=this.uiButtonSet.children().addClass(opts.buttonClass);if(typeof primaryIndex!=='undefined')$buttons.eq(index).addClass(opts.buttonPrimaryClass);},_createWrapper(){this.uiDialog=$('<div>').hide().attr({tabIndex:-1,role:'dialog','aria-modal':this.options.modal?'true':null}).appendTo(this._appendTo());this._addClass(this.uiDialog,'ui-dialog','ui-widget ui-widget-content ui-front');this._on(this.uiDialog,{keydown(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return;}if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented())return;const tabbableElements=tabbable(this.uiDialog[0]);if(tabbableElements.length){const first=tabbableElements[0];const last=tabbableElements[tabbableElements.length-1];if((event.target===last||event.target===this.uiDialog[0])&&!event.shiftKey){this._delay(function(){$(first).trigger('focus');});event.preventDefault();}else{if((event.target===first||event.target===this.uiDialog[0])&&event.shiftKey){this._delay(function(){$(last).trigger('focus');});event.preventDefault();}}}},mousedown(event){if(this._moveToTop(event))this._focusTabbable();}});if(!this.element.find('[aria-describedby]').length)this.uiDialog.attr({'aria-describedby':this.element.uniqueId().attr('id')});},_focusTabbable(){let hasFocus=this._focusedElement?this._focusedElement.get(0):null;if(!hasFocus)hasFocus=this.element.find('[autofocus]').get(0);if(!hasFocus){const $elements=[this.element,this.uiDialogButtonPane];for(let i=0;i<$elements.length;i++){const element=$elements[i].get(0);if(element){const elementTabbable=tabbable(element);hasFocus=elementTabbable.length?elementTabbable[0]:null;}if(hasFocus)break;}}if(!hasFocus){const closeBtn=this.uiDialogTitlebarClose.get(0);hasFocus=closeBtn&&isTabbable(closeBtn)?closeBtn:null;}if(!hasFocus)hasFocus=this.uiDialog.get(0);$(hasFocus).eq(0).trigger('focus');}});})(jQuery,window.tabbable);;
(($)=>{$.widget('ui.dialog',$.ui.dialog,{_allowInteraction(event){if(event.target.classList===undefined)return this._super(event);return event.target.classList.contains('ck')||this._super(event);}});})(jQuery);;
(function($,Drupal,{focusable}){Drupal.behaviors.dialog={attach(context,settings){const $context=$(context);if(!$('#drupal-modal').length)$('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');const $dialog=$context.closest('.ui-dialog-content');if($dialog.length){if($dialog.dialog('option','drupalAutoButtons'))$dialog.trigger('dialogButtonsChange');setTimeout(function(){if(!$dialog[0].contains(document.activeElement)){$dialog.dialog('instance')._focusedElement=null;$dialog.dialog('instance')._focusTabbable();}},0);}const originalClose=settings.dialog.close;settings.dialog.close=function(event,...args){originalClose.apply(settings.dialog,[event,...args]);const $element=$(event.target);const ajaxContainer=$element.data('uiDialog')?$element.data('uiDialog').opener.closest('[data-drupal-ajax-container]'):[];if(ajaxContainer.length&&(document.activeElement===document.body||$(document.activeElement).not(':visible'))){const focusableChildren=focusable(ajaxContainer[0]);if(focusableChildren.length>0)setTimeout(()=>{focusableChildren[0].focus();},0);}$(event.target).remove();};},prepareDialogButtons($dialog){const buttons=[];const $buttons=$dialog.find('.form-actions input[type=submit], .form-actions a.button, .form-actions a.action-link');$buttons.each(function(){const $originalButton=$(this);this.style.display='none';buttons.push({text:$originalButton.html()||$originalButton.attr('value'),class:$originalButton.attr('class'),'data-once':$originalButton.data('once'),click(e){if($originalButton[0].tagName==='A')$originalButton[0].click();else $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');e.preventDefault();}});});return buttons;}};Drupal.AjaxCommands.prototype.openDialog=function(ajax,response,status){if(!response.selector)return false;let $dialog=$(response.selector);if(!$dialog.length)$dialog=$(`<div id="${response.selector.replace(/^#/,'')}" class="ui-front"></div>`).appendTo('body');if(!ajax.wrapper)ajax.wrapper=$dialog.attr('id');response.command='insert';response.method='html';ajax.commands.insert(ajax,response,status);response.dialogOptions=response.dialogOptions||{};if(typeof response.dialogOptions.drupalAutoButtons==='undefined')response.dialogOptions.drupalAutoButtons=true;else if(response.dialogOptions.drupalAutoButtons==='false')response.dialogOptions.drupalAutoButtons=false;else response.dialogOptions.drupalAutoButtons=!!response.dialogOptions.drupalAutoButtons;if(!response.dialogOptions.buttons&&response.dialogOptions.drupalAutoButtons)response.dialogOptions.buttons=Drupal.behaviors.dialog.prepareDialogButtons($dialog);$dialog.on('dialogButtonsChange',()=>{const buttons=Drupal.behaviors.dialog.prepareDialogButtons($dialog);$dialog.dialog('option','buttons',buttons);});response.dialogOptions=response.dialogOptions||{};const dialog=Drupal.dialog($dialog.get(0),response.dialogOptions);if(response.dialogOptions.modal)dialog.showModal();else dialog.show();$dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');};Drupal.AjaxCommands.prototype.closeDialog=function(ajax,response,status){const $dialog=$(response.selector);if($dialog.length){Drupal.dialog($dialog.get(0)).close();if(!response.persist)$dialog.remove();}$dialog.off('dialogButtonsChange');};Drupal.AjaxCommands.prototype.setDialogOption=function(ajax,response,status){const $dialog=$(response.selector);if($dialog.length)$dialog.dialog('option',response.optionName,response.optionValue);};window.addEventListener('dialog:aftercreate',(event)=>{const $element=$(event.target);const dialog=event.dialog;$element.on('click.dialog','.dialog-cancel',(e)=>{dialog.close('cancel');e.preventDefault();e.stopPropagation();});});window.addEventListener('dialog:beforeclose',(e)=>{const $element=$(e.target);$element.off('.dialog');});Drupal.AjaxCommands.prototype.openModalDialogWithUrl=function(ajax,response){const dialogOptions=response.dialogOptions||{};const elementSettings={progress:{type:'throbber'},dialogType:'modal',dialog:dialogOptions,url:response.url,httpMethod:'GET'};Drupal.ajax(elementSettings).execute();};})(jQuery,Drupal,window.tabbable);;
(function($,Drupal){function DropButton(dropbutton,settings){const options=$.extend({title:Drupal.t('List additional actions')},settings);const $dropbutton=$(dropbutton);this.$dropbutton=$dropbutton;this.$list=$dropbutton.find('.dropbutton');this.$actions=this.$list.find('li').addClass('dropbutton-action');if(this.$actions.length>1){const $primary=this.$actions.slice(0,1);const $secondary=this.$actions.slice(1);$secondary.addClass('secondary-action');$primary.after(Drupal.theme('dropbuttonToggle',options));this.$dropbutton.addClass('dropbutton-multiple').on({'mouseleave.dropbutton':this.hoverOut.bind(this),'mouseenter.dropbutton':this.hoverIn.bind(this),'focusout.dropbutton':this.focusOut.bind(this),'focusin.dropbutton':this.focusIn.bind(this)});}else this.$dropbutton.addClass('dropbutton-single');}function dropbuttonClickHandler(e){e.preventDefault();$(e.target).closest('.dropbutton-wrapper').toggleClass('open');}Drupal.behaviors.dropButton={attach(context,settings){const dropbuttons=once('dropbutton','.dropbutton-wrapper',context);if(dropbuttons.length){const body=once('dropbutton-click','body');if(body.length)$(body).on('click','.dropbutton-toggle',dropbuttonClickHandler);dropbuttons.forEach((dropbutton)=>{DropButton.dropbuttons.push(new DropButton(dropbutton,settings.dropbutton));});}}};$.extend(DropButton,{dropbuttons:[]});$.extend(DropButton.prototype,{toggle(show){const isBool=typeof show==='boolean';show=isBool?show:!this.$dropbutton.hasClass('open');this.$dropbutton.toggleClass('open',show);},hoverIn(){if(this.timerID)window.clearTimeout(this.timerID);},hoverOut(){this.timerID=window.setTimeout(this.close.bind(this),500);},open(){this.toggle(true);},close(){this.toggle(false);},focusOut(e){this.hoverOut.call(this,e);},focusIn(e){this.hoverIn.call(this,e);}});$.extend(Drupal.theme,{dropbuttonToggle(options){return `<li class="dropbutton-toggle"><button type="button"><span class="dropbutton-arrow"><span class="visually-hidden">${options.title}</span></span></button></li>`;}});Drupal.DropButton=DropButton;})(jQuery,Drupal);;
((Drupal)=>{Drupal.theme.dropbuttonToggle=(options)=>`<li class="dropbutton-toggle"><button type="button" class="dropbutton__toggle"><span class="visually-hidden">${options.title}</span></button></li>`;})(Drupal);;
((Drupal,once)=>{Drupal.behaviors.ginDropbutton={attach:function(context){once("ginDropbutton",".dropbutton-multiple:has(.dropbutton--gin)",context).forEach(((el)=>{el.querySelector(".dropbutton__toggle").addEventListener("click",(()=>{this.updatePosition(el),window.addEventListener("scroll",(()=>Drupal.debounce(this.updatePositionIfOpen(el),100))),window.addEventListener("resize",(()=>Drupal.debounce(this.updatePositionIfOpen(el),100)));}));}));},updatePosition:function(el){const preferredDir=document.documentElement.dir??"ltr",secondaryAction=el.querySelector(".secondary-action"),dropMenu=el.querySelector(".dropbutton__items"),toggleHeight=el.offsetHeight,dropMenuWidth=dropMenu.offsetWidth,dropMenuHeight=dropMenu.offsetHeight,boundingRect=secondaryAction.getBoundingClientRect(),spaceBelow=window.innerHeight-boundingRect.bottom,spaceLeft=boundingRect.left,spaceRight=window.innerWidth-boundingRect.right;dropMenu.style.position="fixed";const leftAlignStyles={left:`${boundingRect.left}px`,right:"auto"},rightAlignStyles={left:"auto",right:window.innerWidth-boundingRect.right+"px"};"ltr"===preferredDir?spaceRight>=dropMenuWidth?Object.assign(dropMenu.style,leftAlignStyles):Object.assign(dropMenu.style,rightAlignStyles):spaceLeft>=dropMenuWidth?Object.assign(dropMenu.style,rightAlignStyles):Object.assign(dropMenu.style,leftAlignStyles),dropMenu.style.top=spaceBelow>=dropMenuHeight?`${boundingRect.bottom}px`:boundingRect.top-toggleHeight-dropMenuHeight+"px";},updatePositionIfOpen:function(el){el.classList.contains("open")&&this.updatePosition(el);}};})(Drupal,once);;
(function($,Drupal,window){function TableResponsive(table){this.table=table;this.$table=$(table);this.showText=Drupal.t('Show all columns');this.hideText=Drupal.t('Hide lower priority columns');this.$headers=this.$table.find('th');this.$link=$('<button type="button" class="link tableresponsive-toggle"></button>').attr('title',Drupal.t('Show table cells that were hidden to make the table fit within a small screen.')).on('click',this.eventhandlerToggleColumns.bind(this));this.$table.before($('<div class="tableresponsive-toggle-columns"></div>').append(this.$link));$(window).on('resize.tableresponsive',this.eventhandlerEvaluateColumnVisibility.bind(this)).trigger('resize.tableresponsive');}Drupal.behaviors.tableResponsive={attach(context,settings){once('tableresponsive','table.responsive-enabled',context).forEach((table)=>{TableResponsive.tables.push(new TableResponsive(table));});}};$.extend(TableResponsive,{tables:[]});$.extend(TableResponsive.prototype,{eventhandlerEvaluateColumnVisibility(e){const pegged=parseInt(this.$link.data('pegged'),10);const hiddenLength=this.$headers.filter('.priority-medium:hidden, .priority-low:hidden').length;if(hiddenLength>0){this.$link.show();this.$link[0].textContent=this.showText;}if(!pegged&&hiddenLength===0){this.$link.hide();this.$link[0].textContent=this.hideText;}},eventhandlerToggleColumns(e){e.preventDefault();const self=this;const $hiddenHeaders=this.$headers.filter('.priority-medium:hidden, .priority-low:hidden');this.$revealedCells=this.$revealedCells||$();if($hiddenHeaders.length>0){$hiddenHeaders.each(function(index,element){const $header=$(this);const position=$header.prevAll('th').length;self.$table.find('tbody tr').each(function(){const $cells=$(this).find('td').eq(position);$cells.show();self.$revealedCells=$().add(self.$revealedCells).add($cells);});$header.show();self.$revealedCells=$().add(self.$revealedCells).add($header);});this.$link[0].textContent=this.hideText;this.$link.data('pegged',1);}else{this.$revealedCells.hide();this.$revealedCells.each(function(index,element){const $cell=$(this);const properties=$cell.attr('style').split(';');const newProps=[];const match=/^display\s*:\s*none$/;for(let i=0;i<properties.length;i++){const prop=properties[i];prop.trim();const isDisplayNone=match.exec(prop);if(isDisplayNone)continue;newProps.push(prop);}$cell.attr('style',newProps.join(';'));});this.$link[0].textContent=this.showText;this.$link.data('pegged',0);$(window).trigger('resize.tableresponsive');}}});Drupal.TableResponsive=TableResponsive;})(jQuery,Drupal,window);;
((Drupal,drupalSettings,once)=>{Drupal.behaviors.ginAccent={attach:function(context){once("ginAccent","body",context).forEach((()=>{Drupal.ginAccent.checkDarkmode(),Drupal.ginAccent.setAccentColor(),Drupal.ginAccent.setFocusColor();}));}},Drupal.ginAccent={setAccentColor:function(){let preset=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,color=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const accentColorPreset=null!=preset?preset:drupalSettings.gin.preset_accent_color;document.body.setAttribute("data-gin-accent",accentColorPreset),"custom"===accentColorPreset&&this.setCustomAccentColor(color);},setCustomAccentColor:function(){let color=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,element=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;const accentColor=null!=color?color:drupalSettings.gin.accent_color;if(accentColor){this.clearAccentColor(element);const strippedAccentColor=accentColor.replace("#",""),darkAccentColor=this.mixColor("ffffff",strippedAccentColor,65).replace("#",""),style=document.createElement("style");style.className="gin-custom-colors",style.innerHTML=`\n          [data-gin-accent="custom"] {\n            --gin-color-primary-rgb: ${this.hexToRgb(accentColor)};\n            --gin-color-primary-hover: ${this.shadeColor(accentColor,-10)};\n            --gin-color-primary-active: ${this.shadeColor(accentColor,-15)};\n            --gin-bg-app-rgb: ${this.hexToRgb(this.mixColor("ffffff",strippedAccentColor,97))};\n            --gin-bg-header: ${this.mixColor("ffffff",strippedAccentColor,85)};\n            --gin-color-sticky-rgb: ${this.hexToRgb(this.mixColor("ffffff",strippedAccentColor,92))};\n          }\n          .gin--dark-mode[data-gin-accent="custom"],\n          .gin--dark-mode [data-gin-accent="custom"] {\n            --gin-color-primary-rgb: ${this.hexToRgb(darkAccentColor)};\n            --gin-color-primary-hover: ${this.mixColor("ffffff",strippedAccentColor,55)};\n            --gin-color-primary-active: ${this.mixColor("ffffff",strippedAccentColor,50)};\n            --gin-bg-header: ${this.mixColor("2A2A2D",darkAccentColor,88)};\n          }\n        `,element.append(style);}},clearAccentColor:function(){let element=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;if(element.querySelectorAll(".gin-custom-colors").length>0){const removeElement=element.querySelector(".gin-custom-colors");removeElement.parentNode.removeChild(removeElement);}},setFocusColor:function(){let preset=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,color=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const focusColorPreset=null!=preset?preset:drupalSettings.gin.preset_focus_color;document.body.setAttribute("data-gin-focus",focusColorPreset),"custom"===focusColorPreset&&this.setCustomFocusColor(color);},setCustomFocusColor:function(){let color=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,element=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;const accentColor=null!=color?color:drupalSettings.gin.focus_color;if(accentColor){this.clearFocusColor(element);const strippedAccentColor=accentColor.replace("#",""),darkAccentColor=this.mixColor("ffffff",strippedAccentColor,65),style=document.createElement("style");style.className="gin-custom-focus",style.innerHTML=`\n          [data-gin-focus="custom"] {\n            --gin-color-focus: ${accentColor};\n          }\n          .gin--dark-mode[data-gin-focus="custom"],\n          .gin--dark-mode [data-gin-focus="custom"] {\n            --gin-color-focus: ${darkAccentColor};\n          }`,element.append(style);}},clearFocusColor:function(){let element=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;if(element.querySelectorAll(".gin-custom-focus").length>0){const removeElement=element.querySelector(".gin-custom-focus");removeElement.parentNode.removeChild(removeElement);}},checkDarkmode:()=>{const darkmodeClass=drupalSettings.gin.darkmode_class;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",((e)=>{e.matches&&"auto"===window.ginDarkmode&&document.querySelector("html").classList.add(darkmodeClass);})),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",((e)=>{e.matches&&"auto"===window.ginDarkmode&&document.querySelector("html").classList.remove(darkmodeClass);}));},hexToRgb:(hex)=>{hex=hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(m,r,g,b){return r+r+g+g+b+b;}));var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?`${parseInt(result[1],16)}, ${parseInt(result[2],16)}, ${parseInt(result[3],16)}`:null;},mixColor:(color_1,color_2,weight)=>{function h2d(h){return parseInt(h,16);}weight=void 0!==weight?weight:50;for(var color="#",i=0;i<=5;i+=2){for(var v1=h2d(color_1.substr(i,2)),v2=h2d(color_2.substr(i,2)),val=Math.floor(v2+weight/100*(v1-v2)).toString(16);val.length<2;)val="0"+val;color+=val;}return color;},shadeColor:(color,percent)=>{const num=parseInt(color.replace("#",""),16),amt=Math.round(2.55*percent),R=(num>>16)+amt,B=(num>>8&255)+amt,G=(255&num)+amt;return `#${(16777216+65536*(R<255?R<1?0:R:255)+256*(B<255?B<1?0:B:255)+(G<255?G<1?0:G:255)).toString(16).slice(1)}`;}};})(Drupal,drupalSettings,once);;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FloatingUICore = {}));
})(this, (function (exports) { 'use strict';

  function getAlignment(placement) {
    return placement.split('-')[1];
  }

  function getLengthFromAxis(axis) {
    return axis === 'y' ? 'height' : 'width';
  }

  function getSide(placement) {
    return placement.split('-')[0];
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
  }

  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const mainAxis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(mainAxis);
    const commonAlign = reference[length] / 2 - floating[length] / 2;
    const side = getSide(placement);
    const isVertical = mainAxis === 'x';
    let coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a reference element when it is given a certain positioning strategy.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  const computePosition = async (reference, floating, config) => {
    const {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };

  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }

  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }

  function getSideObjectFromPadding(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }

  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getSideObjectFromPadding(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
      element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === 'floating' ? {
      ...rects.floating,
      x,
      y
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }

  const min = Math.min;
  const max = Math.max;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow = options => ({
    name: 'arrow',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform,
        elements
      } = state;
      // Since `element` is required, we don't Partial<> the type.
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getSideObjectFromPadding(padding);
      const coords = {
        x,
        y
      };
      const axis = getMainAxisFromPlacement(placement);
      const length = getLengthFromAxis(axis);
      const arrowDimensions = await platform.getDimensions(element);
      const isYAxis = axis === 'y';
      const minProp = isYAxis ? 'top' : 'left';
      const maxProp = isYAxis ? 'bottom' : 'right';
      const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

      // DOM platform can return `window` as the `offsetParent`.
      if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;

      // If the padding is large enough that it causes the arrow to no longer be
      // centered, modify the padding so that it is centered.
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds.
      const min$1 = minPadding;
      const max = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = within(min$1, center, max);

      // If the reference is small enough that the arrow's padding causes it to
      // to point to nothing for an aligned placement, adjust the offset of the
      // floating element itself. This stops `shift()` from taking action, but can
      // be worked around by calling it again after the `arrow()` if desired.
      const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max - center : 0;
      return {
        [axis]: coords[axis] - alignmentOffset,
        data: {
          [axis]: offset,
          centerOffset: center - offset + alignmentOffset
        }
      };
    }
  });

  const sides = ['top', 'right', 'bottom', 'left'];
  const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

  const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
  }

  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const mainAxis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(mainAxis);
    let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return {
      main: mainAlignmentSide,
      cross: getOppositePlacement(mainAlignmentSide)
    };
  }

  const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
  }

  function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter(placement => {
      if (alignment) {
        return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
      }
      return true;
    });
  }
  /**
   * Optimizes the visibility of the floating element by choosing the placement
   * that has the most space available automatically, without needing to specify a
   * preferred placement. Alternative to `flip`.
   * @see https://floating-ui.com/docs/autoPlacement
   */
  const autoPlacement = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'autoPlacement',
      options,
      async fn(state) {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
        const {
          rects,
          middlewareData,
          placement,
          platform,
          elements
        } = state;
        const {
          crossAxis = false,
          alignment,
          allowedPlacements = allPlacements,
          autoAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        const placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
        const currentPlacement = placements[currentIndex];
        if (currentPlacement == null) {
          return {};
        }
        const {
          main,
          cross
        } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

        // Make `computeCoords` start from the right place.
        if (placement !== currentPlacement) {
          return {
            reset: {
              placement: placements[0]
            }
          };
        }
        const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
        const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
          placement: currentPlacement,
          overflows: currentOverflows
        }];
        const nextPlacement = placements[currentIndex + 1];

        // There are more placements to check.
        if (nextPlacement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        const placementsSortedByMostSpace = allOverflows.map(d => {
          const alignment = getAlignment(d.placement);
          return [d.placement, alignment && crossAxis ?
            // Check along the mainAxis and main crossAxis side.
            d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
            // Check only the mainAxis.
            d.overflows[0], d.overflows];
        }).sort((a, b) => a[1] - b[1]);
        const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
        const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
        if (resetPlacement !== placement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: resetPlacement
            }
          };
        }
        return {};
      }
    };
  };

  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }

  function getSideList(side, isStart, rtl) {
    const lr = ['left', 'right'];
    const rl = ['right', 'left'];
    const tb = ['top', 'bottom'];
    const bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(side => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options,
      async fn(state) {
        var _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const {
            main,
            cross
          } = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[main], overflow[cross]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };

  function getSideOffsets(overflow, rect) {
    return {
      top: overflow.top - rect.height,
      right: overflow.right - rect.width,
      bottom: overflow.bottom - rect.height,
      left: overflow.left - rect.width
    };
  }
  function isAnySideFullyClipped(overflow) {
    return sides.some(side => overflow[side] >= 0);
  }
  /**
   * Provides data to hide the floating element in applicable situations, such as
   * when it is not in the same clipping context as the reference element.
   * @see https://floating-ui.com/docs/hide
   */
  const hide = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'hide',
      options,
      async fn(state) {
        const {
          rects
        } = state;
        const {
          strategy = 'referenceHidden',
          ...detectOverflowOptions
        } = evaluate(options, state);
        switch (strategy) {
          case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
          case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
          default:
          {
            return {};
          }
        }
      }
    };
  };

  function getBoundingRect(rects) {
    const minX = min(...rects.map(rect => rect.left));
    const minY = min(...rects.map(rect => rect.top));
    const maxX = max(...rects.map(rect => rect.right));
    const maxY = max(...rects.map(rect => rect.bottom));
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
    const groups = [];
    let prevRect = null;
    for (let i = 0; i < sortedRects.length; i++) {
      const rect = sortedRects[i];
      if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
        groups.push([rect]);
      } else {
        groups[groups.length - 1].push(rect);
      }
      prevRect = rect;
    }
    return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
  }
  /**
   * Provides improved positioning for inline reference elements that can span
   * over multiple lines, such as hyperlinks or range selections.
   * @see https://floating-ui.com/docs/inline
   */
  const inline = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'inline',
      options,
      async fn(state) {
        const {
          placement,
          elements,
          rects,
          platform,
          strategy
        } = state;
        // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
        // ClientRect's bounds, despite the event listener being triggered. A
        // padding of 2 seems to handle this issue.
        const {
          padding = 2,
          x,
          y
        } = evaluate(options, state);
        const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        const paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect() {
          // There are two rects and they are disjoined.
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            // Find the first rect in which the point is fully inside.
            return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
          }

          // There are 2 or more connected rects.
          if (clientRects.length >= 2) {
            if (getMainAxisFromPlacement(placement) === 'x') {
              const firstRect = clientRects[0];
              const lastRect = clientRects[clientRects.length - 1];
              const isTop = getSide(placement) === 'top';
              const top = firstRect.top;
              const bottom = lastRect.bottom;
              const left = isTop ? firstRect.left : lastRect.left;
              const right = isTop ? firstRect.right : lastRect.right;
              const width = right - left;
              const height = bottom - top;
              return {
                top,
                bottom,
                left,
                right,
                width,
                height,
                x: left,
                y: top
              };
            }
            const isLeftSide = getSide(placement) === 'left';
            const maxRight = max(...clientRects.map(rect => rect.right));
            const minLeft = min(...clientRects.map(rect => rect.left));
            const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
            const top = measureRects[0].top;
            const bottom = measureRects[measureRects.length - 1].bottom;
            const left = minLeft;
            const right = maxRight;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        const resetRects = await platform.getElementRects({
          reference: {
            getBoundingClientRect
          },
          floating: elements.floating,
          strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      }
    };
  };

  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getMainAxisFromPlacement(placement) === 'x';
    const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === 'number' ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset = function (options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options,
      async fn(state) {
        const {
          x,
          y
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      }
    };
  };

  function getCrossAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let {
                x,
                y
              } = _ref;
              return {
                x,
                y
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const mainAxis = getMainAxisFromPlacement(getSide(placement));
        const crossAxis = getCrossAxis(mainAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = within(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = within(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };
  /**
   * Built-in `limiter` that will stop `shift()` at a certain point.
   */
  const limitShift = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      options,
      fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          middlewareData
        } = state;
        const {
          offset = 0,
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const mainAxis = getMainAxisFromPlacement(placement);
        const crossAxis = getCrossAxis(mainAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        const rawOffset = evaluate(offset, state);
        const computedOffset = typeof rawOffset === 'number' ? {
          mainAxis: rawOffset,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...rawOffset
        };
        if (checkMainAxis) {
          const len = mainAxis === 'y' ? 'height' : 'width';
          const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
          const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
          if (mainAxisCoord < limitMin) {
            mainAxisCoord = limitMin;
          } else if (mainAxisCoord > limitMax) {
            mainAxisCoord = limitMax;
          }
        }
        if (checkCrossAxis) {
          var _middlewareData$offse, _middlewareData$offse2;
          const len = mainAxis === 'y' ? 'width' : 'height';
          const isOriginSide = ['top', 'left'].includes(getSide(placement));
          const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
          const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
          if (crossAxisCoord < limitMin) {
            crossAxisCoord = limitMin;
          } else if (crossAxisCoord > limitMax) {
            crossAxisCoord = limitMax;
          }
        }
        return {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        };
      }
    };
  };

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'size',
      options,
      async fn(state) {
        const {
          placement,
          rects,
          platform,
          elements
        } = state;
        const {
          apply = () => {},
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const axis = getMainAxisFromPlacement(placement);
        const isXAxis = axis === 'x';
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isXAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isXAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  exports.arrow = arrow;
  exports.autoPlacement = autoPlacement;
  exports.computePosition = computePosition;
  exports.detectOverflow = detectOverflow;
  exports.flip = flip;
  exports.hide = hide;
  exports.inline = inline;
  exports.limitShift = limitShift;
  exports.offset = offset;
  exports.rectToClientRect = rectToClientRect;
  exports.shift = shift;
  exports.size = size;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@floating-ui/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@floating-ui/core'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FloatingUIDOM = {}, global.FloatingUICore));
})(this, (function (exports, core) { 'use strict';

  function getWindow(node) {
    var _node$ownerDocument;
    return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isNode(value) {
    return value instanceof getWindow(value).Node;
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }

  function isHTMLElement(value) {
    return value instanceof getWindow(value).HTMLElement;
  }
  function isElement(value) {
    return value instanceof getWindow(value).Element;
  }
  function isShadowRoot(node) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const safari = isSafari();
    const css = getComputedStyle$1(element);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
  }
  function isSafari() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createEmptyCoords = v => ({
    x: v,
    y: v
  });

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }

  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }

  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createEmptyCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }

  const noOffsets = /*#__PURE__*/createEmptyCoords(0);
  function getVisualOffsets(element, isFixed, floatingOffsetParent) {
    var _win$visualViewport, _win$visualViewport2;
    if (isFixed === void 0) {
      isFixed = true;
    }
    if (!isSafari()) {
      return noOffsets;
    }
    const win = element ? getWindow(element) : window;
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
      return noOffsets;
    }
    return {
      x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
      y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
    };
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createEmptyCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return core.rectToClientRect({
      width,
      height,
      x,
      y
    });
  }

  function getDocumentElement(node) {
    return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
  }

  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }

  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createEmptyCoords(1);
    const offsets = createEmptyCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot ||
      // DOM Element detected.
      node.parentNode ||
      // ShadowRoot detected.
      isShadowRoot(node) && node.host ||
      // Fallback.
      getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }

  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }

  function getOverflowAncestors(node, list) {
    var _node$ownerDocument;
    if (list === void 0) {
      list = [];
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
  }

  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isSafari();
      if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createEmptyCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return core.rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(ancestor => ancestor !== currentNode);
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }

  function getDimensions(element) {
    return getCssDimensions(element);
  }

  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    const window = getWindow(element);
    if (!isHTMLElement(element)) {
      return window;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createEmptyCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  const platform = {
    getClippingRect,
    convertOffsetParentRelativeRectToViewportRelativeRect,
    isElement,
    getDimensions,
    getOffsetParent,
    getDocumentElement,
    getScale,
    async getElementRects(_ref) {
      let {
        reference,
        floating,
        strategy
      } = _ref;
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      return {
        reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
        floating: {
          x: 0,
          y: 0,
          ...(await getDimensionsFn(floating))
        }
      };
    },
    getClientRects: element => Array.from(element.getClientRects()),
    isRTL: element => getComputedStyle$1(element).direction === 'rtl'
  };

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      let isFirstUpdate = true;
      io = new IntersectionObserver(entries => {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (ratio === 0) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }, {
        rootMargin,
        threshold
      });
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = true,
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(update);
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a reference element when it is given a certain CSS positioning
   * strategy.
   */
  const computePosition = (reference, floating, options) => {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return core.computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  Object.defineProperty(exports, 'arrow', {
    enumerable: true,
    get: function () { return core.arrow; }
  });
  Object.defineProperty(exports, 'autoPlacement', {
    enumerable: true,
    get: function () { return core.autoPlacement; }
  });
  Object.defineProperty(exports, 'detectOverflow', {
    enumerable: true,
    get: function () { return core.detectOverflow; }
  });
  Object.defineProperty(exports, 'flip', {
    enumerable: true,
    get: function () { return core.flip; }
  });
  Object.defineProperty(exports, 'hide', {
    enumerable: true,
    get: function () { return core.hide; }
  });
  Object.defineProperty(exports, 'inline', {
    enumerable: true,
    get: function () { return core.inline; }
  });
  Object.defineProperty(exports, 'limitShift', {
    enumerable: true,
    get: function () { return core.limitShift; }
  });
  Object.defineProperty(exports, 'offset', {
    enumerable: true,
    get: function () { return core.offset; }
  });
  Object.defineProperty(exports, 'shift', {
    enumerable: true,
    get: function () { return core.shift; }
  });
  Object.defineProperty(exports, 'size', {
    enumerable: true,
    get: function () { return core.size; }
  });
  exports.autoUpdate = autoUpdate;
  exports.computePosition = computePosition;
  exports.getOverflowAncestors = getOverflowAncestors;
  exports.platform = platform;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
;
((Drupal,drupalSettings,once)=>{Drupal.behaviors.ginEscapeAdmin={attach:(context)=>{once("ginEscapeAdmin","[data-gin-toolbar-escape-admin]",context).forEach(((el)=>{const escapeAdminPath=sessionStorage.getItem("escapeAdminPath");drupalSettings.path.currentPathIsAdmin&&null!==escapeAdminPath&&el.setAttribute("href",escapeAdminPath);}));}};})(Drupal,drupalSettings,once);;
((Drupal,once,{computePosition,offset,arrow,shift,flip})=>{let sidebar;const breakpointLarge=1280;let firstFocusableEl;const firstLevelToolbarItems=Array.from(document.querySelectorAll('.navigation__logo, .toolbar-menu > .toolbar-menu__item--level-1 > .toolbar-link'));const keys={tab:9,esc:27,space:32};let currentIndex,subIndex;function isNavExpanded(){return document.documentElement.classList.contains('admin-toolbar-expanded');}function autoExpandToActiveMenuItem(){const activeItems=sidebar.querySelectorAll('.is-active');closeAllSubmenus();activeItems.forEach((activeItem)=>{activeItem?.closest('.toolbar-menu__item.toolbar-menu__item--level-2')?.classList.add('toolbar-menu__item--expanded');activeItem?.closest('.toolbar-menu__item.toolbar-menu__item--level-2')?.classList.add('active-path');activeItem?.closest('.toolbar-menu__item.toolbar-menu__item--level-1')?.classList.add('active-path');});const expandedTray=sidebar.querySelector('.toolbar-menu__item.toolbar-menu__item--expanded');expandedTray?.scrollIntoView({behavior:'smooth'});}function markCurrentPageInMenu(){const sidebarLinks=sidebar.querySelectorAll('a.toolbar-link:not(.menu--shortcuts *):not(.toolbar-link--create)');sidebarLinks.forEach((link)=>{if(link.href===document.URL)link.parentElement.classList.add('current','is-active');});const sidebarTitles=sidebar.querySelectorAll('.toolbar-menu__item--level-1[data-url]');sidebarTitles.forEach((title)=>{if(title.getAttribute('data-url')===window.location.pathname)title.querySelector('a.toolbar-link')?.classList.add('current','is-active');});}function expandCollapseSidebar(toState){const expandCollapseButton=sidebar.querySelector('[aria-controls="admin-toolbar"]');if(toState)closeTooltip();document.documentElement.classList.toggle('admin-toolbar-expanded',toState);Drupal.displace(true);sidebar.querySelector('#sidebar-state').textContent=toState?Drupal.t('Collapse sidebar'):Drupal.t('Expand sidebar');expandCollapseButton.setAttribute('aria-expanded',toState);localStorage.setItem('Drupal.navigation.sidebarExpanded',toState);autoExpandToActiveMenuItem();if(toState)flyoutTooltipDetach();else flyoutTooltipInit();if(toState===true&&window.innerWidth<breakpointLarge)Drupal.ginSidebar?.collapseSidebar();}function positionFlyout(hoveredEl){const anchorEl=hoveredEl.querySelector('.toolbar-link');const flyoutEl=document.getElementById(anchorEl.getAttribute('aria-controls'));const arrowEl=flyoutEl?.querySelector('.toolbar-menu__arrow-ref');computePosition(anchorEl,flyoutEl,{placement:'right',middleware:[offset(6),flip({padding:16}),shift({padding:16}),arrow({element:arrowEl})]}).then(({x,y,placement,middlewareData})=>{Object.assign(flyoutEl.style,{left:`${x}px`,top:`${y}px`});const {x:arrowX,y:arrowY}=middlewareData.arrow;const staticSide={top:'bottom',right:'left',bottom:'top',left:'right'}[placement.split('-')[0]];Object.assign(arrowEl.style,{left:arrowX!=null?`${arrowX}px`:'',top:arrowY!=null?`${arrowY}px`:'',right:'',bottom:'',[staticSide]:'-4px'});});}function positionTooltip(hoveredEl){const anchorEl=hoveredEl.querySelector('.toolbar-link');const tooltipEl=document.querySelector('.gin-tooltip-navigation');computePosition(anchorEl,tooltipEl,{placement:'right',middleware:[offset(6),flip({padding:16}),shift({padding:16})]}).then(({x,y})=>{Object.assign(tooltipEl.style,{left:`${x}px`,top:`${y}px`});});}function closeFlyoutOnClickOutside(e){if(isNavExpanded())return;if(!e.target.closest('.cloned-flyout'))closeFlyout();}function openFlyout(e){const hoveredEl=e.target?e.target:e.parentElement;const buttonEl=hoveredEl.querySelector('.toolbar-link');const clonedFlyout=hoveredEl.querySelector('.toolbar-menu__submenu').cloneNode(true);const clonedFlyoutId=`${hoveredEl.id}--flyout-clone`;closeFlyout();closeTooltip();buttonEl.setAttribute('aria-controls',clonedFlyoutId);buttonEl.setAttribute('aria-expanded',true);clonedFlyout.setAttribute('id',clonedFlyoutId);clonedFlyout.classList.add('cloned-flyout');document.querySelector('body').append(clonedFlyout);clonedFlyout.querySelectorAll('.toolbar-menu__item--has-dropdown > button').forEach((el)=>el.addEventListener('click',(e)=>{const dataUrl=el.getAttribute('data-url');if((e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)&&dataUrl)window.open(dataUrl,'_blank');else openCloseSubmenu(e.currentTarget.parentElement);}));const flyoutEls=document.querySelectorAll('.cloned-flyout .toolbar-menu__item--level-2 > .toolbar-link, .cloned-flyout .toolbar-menu__item--level-3 > .toolbar-link');flyoutEls?.forEach((el)=>{el.addEventListener('keydown',handleKeydownFlyout,false);});positionFlyout(hoveredEl);hoveredEl.classList.add('toolbar-menu__item--expanded');clonedFlyout.addEventListener('mouseleave',delayedFlyoutClose,false);document.addEventListener('click',closeFlyoutOnClickOutside,false);autoExpandToActiveMenuItem();}function openTooltip(e){closeFlyout();closeTooltip();const hoveredEl=e.target;const clonedTooltip=hoveredEl.querySelector('.toolbar-link > span').cloneNode(true);clonedTooltip.classList.add('gin-tooltip-navigation');document.querySelector('body').append(clonedTooltip);if(!hoveredEl.classList.contains('toolbar-menu__item--expanded'))positionTooltip(hoveredEl);}function closeFlyout(){if(!isNavExpanded()){const flyoutEls=document.querySelectorAll('.cloned-flyout .toolbar-menu__item--level-2, .cloned-flyout .toolbar-menu__item--level-3');flyoutEls?.forEach((el)=>{el.removeEventListener('keydown',handleKeydownFlyout);});const clonedFlyout=document.querySelector('.cloned-flyout');const clonedFlyoutControl=document.querySelector(`[aria-controls=${clonedFlyout?.id}]`);clonedFlyoutControl?.removeAttribute('aria-controls');clonedFlyoutControl?.setAttribute('aria-expanded',false);closeAllSubmenus();clonedFlyout?.removeEventListener('mouseleave',delayedFlyoutClose);clonedFlyout?.remove();document.removeEventListener('click',closeFlyoutOnClickOutside);}}function closeTooltip(){if(!isNavExpanded()){const clonedTooltip=document.querySelector('.gin-tooltip-navigation');clonedTooltip?.remove();}}function delayedFlyoutClose(e){const parentListItem=e.currentTarget;const currentFlyout=document.querySelector('.cloned-flyout');if(currentFlyout.contains(document.activeElement))return;timer=setTimeout(()=>{closeFlyout();parentListItem.removeEventListener('mouseover',()=>clearTimeout(timer),{once:true});},400);parentListItem.addEventListener('mouseover',()=>clearTimeout(timer),{once:true});}function handleKeydownTopLevel(event){currentIndex=firstLevelToolbarItems.indexOf(event.target);switch(event.keyCode){case keys.tab:if(event.shiftKey){currentIndex--;firstLevelToolbarItems[currentIndex]?.focus();}else{currentIndex++;if(firstLevelToolbarItems[currentIndex])firstLevelToolbarItems[currentIndex].focus();else firstFocusableEl.focus();}event.preventDefault();break;case keys.space:if(this.parentElement.classList.contains('toolbar-menu__item--has-dropdown')){openFlyout(this);window.setTimeout(()=>document.querySelector('.cloned-flyout .toolbar-menu__item--level-2 .toolbar-link').focus(),0);}event.preventDefault();break;case keys.esc:firstFocusableEl.focus();event.preventDefault();break;}}function handleKeydownFlyout(event){let flyoutEls=Array.from(document.querySelectorAll('.cloned-flyout .toolbar-menu__item--level-2 > .toolbar-link, .cloned-flyout .toolbar-menu__item--expanded .toolbar-menu__item--level-3 .toolbar-link'));;subIndex=flyoutEls.indexOf(event.target);switch(event.keyCode){case keys.tab:if(event.shiftKey)if(document.activeElement==event.target.parentElement.querySelector('li:nth-child(2) .toolbar-link')&&document.activeElement.parentElement.classList.contains('toolbar-menu__item--level-2')){currentIndex--;window.setTimeout(()=>firstLevelToolbarItems[currentIndex].focus(),0);closeFlyout();subIndex=1;}else{subIndex--;window.setTimeout(()=>flyoutEls[subIndex].focus(),0);}else if(document.activeElement==event.target.parentElement.querySelector('li:last-of-type .toolbar-link')&&document.activeElement.parentElement.classList.contains('toolbar-menu__item--level-2')){currentIndex++;window.setTimeout(()=>firstLevelToolbarItems[currentIndex].focus(),0);closeFlyout();subIndex=1;}else{subIndex++;window.setTimeout(()=>flyoutEls[subIndex].focus(),0);}event.preventDefault();break;case keys.space:{const thirdLevel=event.target.parentElement.querySelectorAll('.toolbar-menu__item--level-3 .toolbar-link');let indexToAdd=flyoutEls.indexOf(event.target)+1;thirdLevel.forEach((item)=>{flyoutEls.splice(indexToAdd,0,item);indexToAdd++;});subIndex++;window.setTimeout(()=>flyoutEls[subIndex].focus(),0);break;}case keys.esc:if(document.querySelector('.cloned-flyout')){currentIndex++;firstLevelToolbarItems[currentIndex].focus();closeFlyout();subIndex=1;}event.preventDefault();break;}}function flyoutTooltipInit(){sidebar.querySelectorAll('.toolbar-menu__item--level-1 > .toolbar-menu__submenu')?.forEach((flyoutEl)=>{const parentListItem=flyoutEl.parentElement;parentListItem.addEventListener('mouseenter',openFlyout,false);});sidebar.querySelectorAll('.toolbar-menu__item--level-1:not(.toolbar-menu__item--has-dropdown) > .toolbar-link')?.forEach((tooltipEl)=>{const parentListItem=tooltipEl.parentElement;parentListItem.addEventListener('mouseenter',openTooltip,false);parentListItem.addEventListener('mouseleave',closeTooltip,false);});currentIndex=0;subIndex=1;firstFocusableEl=getFirstFocusableEl();firstLevelToolbarItems?.forEach((firstLevelEl)=>{firstLevelEl.addEventListener('keydown',handleKeydownTopLevel,false);});}function flyoutTooltipDetach(){sidebar.querySelectorAll('.toolbar-menu__item--level-1 > .toolbar-menu__submenu')?.forEach((flyoutEl)=>{const parentListItem=flyoutEl.parentElement;parentListItem.removeEventListener('mouseenter',openFlyout);});sidebar.querySelectorAll('.toolbar-menu__item--level-1:not(.toolbar-menu__item--has-dropdown) > .toolbar-link')?.forEach((tooltipEl)=>{const parentListItem=tooltipEl.parentElement;parentListItem.removeEventListener('mouseenter',openTooltip);parentListItem.removeEventListener('mouseleave',closeTooltip);});firstLevelToolbarItems?.forEach((firstLevelEl)=>{firstLevelEl.removeEventListener('keydown',handleKeydownTopLevel);});}function closeAllSubmenus(Element){const submenuParentElement=Element??sidebar;const selectorsToIgnore='.sidebar-toggle';let itemsToClose=submenuParentElement.querySelectorAll('.toolbar-menu__item--expanded');if(!isNavExpanded())itemsToClose=submenuParentElement.querySelectorAll('.toolbar-menu__item--expanded:not(.active-path)');itemsToClose.forEach((el)=>el.classList.remove('toolbar-menu__item--expanded'));submenuParentElement.querySelectorAll(`.toolbar-link[aria-expanded="true"]:not(:is(${selectorsToIgnore}))`).forEach((el)=>{el.setAttribute('aria-expanded',false);el.querySelector('.toolbar-link__action').textContent=Drupal.t('Extend');});}function openCloseSubmenu(parentListItem,state){toState=state??parentListItem.classList.contains('toolbar-menu__item--expanded');const buttonEl=parentListItem.querySelector('button.toolbar-link');if(buttonEl.matches('.toolbar-menu__item.toolbar-menu__item--level-1 > *'))closeAllSubmenus();else closeAllSubmenus(parentListItem.parentElement);parentListItem.classList.toggle('toolbar-menu__item--expanded',!toState);buttonEl.setAttribute('aria-expanded',toState);buttonEl.querySelector('.toolbar-link__action').textContent=toState?Drupal.t('Extend'):Drupal.t('Collapse');}function initDisplace(){const displaceElement=sidebar.querySelector('.admin-toolbar__displace-placeholder');const edge=document.documentElement.dir==='rtl'?'right':'left';displaceElement.setAttribute(`data-offset-${edge}`,'');Drupal.displace(true);}function getFirstFocusableEl(){const nextEl=sidebar.nextElementSibling.tagName=='SCRIPT'?sidebar.nextElementSibling.nextElementSibling:sidebar.nextElementSibling;const focusableEls=nextEl.querySelectorAll('input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [href], button, [tabindex="-1"]');return focusableEls[0];}function init(el){sidebar=el;firstFocusableEl=getFirstFocusableEl();const expandCollapseButton=sidebar.querySelector('[aria-controls="admin-toolbar"]');markCurrentPageInMenu();expandCollapseSidebar(localStorage.getItem('Drupal.navigation.sidebarExpanded')!=='false');initDisplace();expandCollapseButton.addEventListener('click',()=>expandCollapseSidebar(!isNavExpanded()));sidebar.addEventListener('click',(e)=>{if(e.target.matches('button, button *'))e.target.closest('button').focus();});sidebar.querySelectorAll('.toolbar-menu__item--has-dropdown > button').forEach((el)=>el.addEventListener('click',(e)=>{openCloseSubmenu(e.currentTarget.parentElement);}));document.addEventListener('keydown',(e)=>{if(e.altKey===true&&e.code==='KeyT')expandCollapseSidebar(!isNavExpanded());});}Drupal.behaviors.ginNavigation={attach(context){once('navigation','.admin-toolbar',context).forEach(init);},collapseSidebar(){expandCollapseSidebar(false);}};})(Drupal,once,FloatingUIDOM);;
((Drupal,once,_ref)=>{let {computePosition,offset,shift,flip}=_ref;Drupal.theme.ginTooltipWrapper=(dataset,title)=>`<div class="gin-tooltip ${dataset.drupalTooltipClass||""}">\n      ${dataset.drupalTooltip||title}\n    </div>`,Drupal.behaviors.ginTooltip={attach:(context)=>{Drupal.ginTooltip.init(context);}},Drupal.ginTooltip={init:function(context){once("ginTooltipInit","[data-gin-tooltip]",context).forEach(((trigger)=>{const title=trigger.title;title&&(trigger.title=""),trigger.insertAdjacentHTML("afterend",Drupal.theme.ginTooltipWrapper(trigger.dataset,title));const tooltip=trigger.nextElementSibling,updatePosition=()=>{this.computePosition(trigger,tooltip);};new ResizeObserver(updatePosition).observe(trigger),new MutationObserver(updatePosition).observe(trigger,{attributes:!0,childList:!0,subtree:!0}),trigger.addEventListener("mouseover",updatePosition),trigger.addEventListener("focus",updatePosition);}));},computePosition:function(trigger,tooltip){let placement=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"bottom-end";computePosition(trigger,tooltip,{strategy:"absolute",placement:trigger.dataset.drupalTooltipPosition||placement,middleware:[flip({padding:16}),offset(6),shift({padding:16})]}).then(((_ref2)=>{let {x,y}=_ref2;Object.assign(tooltip.style,{"inset-inline-start":`${x}px`,"inset-block-start":`${y}px`});}));}};})(Drupal,once,FloatingUIDOM);;
((Drupal)=>{Drupal.behaviors.ginSticky={attach:()=>{once("ginSticky",".region-sticky-watcher").forEach((()=>{const observer=new IntersectionObserver(((_ref)=>{let [e]=_ref;const regionSticky=document.querySelector(".region-sticky");regionSticky.classList.toggle("region-sticky--is-sticky",e.intersectionRatio<1),regionSticky.toggleAttribute("data-offset-top",e.intersectionRatio<1),Drupal.displace(!0);}),{threshold:[1]}),element=document.querySelector(".region-sticky-watcher");element&&observer.observe(element);}));}};})(Drupal);;
(function($,Drupal,drupalSettings){let activeItem=Drupal.url(drupalSettings.path.currentPath);$.fn.drupalToolbarMenuHorizontal=function(){let currentPath=drupalSettings.path.currentPath;const menu=once('toolbar-menu-horizontal',this);if(menu.length){const $menu=$(menu);if(activeItem){const count=currentPath.split('/').length;for(let i=0;i<count;i++){const $menuItem=$menu.find(`a[data-drupal-link-system-path="${currentPath}"]`);if($menuItem.length!==0){$menuItem.closest('a').addClass('is-active');break;}const lastIndex=currentPath.lastIndexOf('/');currentPath=currentPath.slice(0,lastIndex);}}}};$.fn.drupalToolbarMenu=function(){const ui={handleOpen:Drupal.t('Extend'),handleClose:Drupal.t('Collapse')};function toggleList($item,switcher){const $toggle=$item.children('.toolbar-box').children('.toolbar-handle');switcher=typeof switcher!=='undefined'?switcher:!$item.hasClass('open');$item.toggleClass('open',switcher);$toggle.toggleClass('open',switcher);$toggle.find('.action').each((index,element)=>{element.textContent=switcher?ui.handleClose:ui.handleOpen;});}function toggleClickHandler(event){const $toggle=$(event.target);const $item=$toggle.closest('li');toggleList($item);const $openItems=$item.siblings().filter('.open');toggleList($openItems,false);}function linkClickHandler(event){if(!Drupal.toolbar.models.toolbarModel.get('isFixed'))Drupal.toolbar.models.toolbarModel.set('activeTab',null);event.stopPropagation();}function initItems($menu){const options={class:'toolbar-icon toolbar-handle',action:ui.handleOpen,text:''};$menu.find('li > a').wrap('<div class="toolbar-box">');$menu.find('li').each((index,element)=>{const $item=$(element);if($item.children('ul.toolbar-menu').length){const $box=$item.children('.toolbar-box');const $link=$box.find('a');options.text=Drupal.t('@label',{'@label':$link.length?$link[0].textContent:''});$item.children('.toolbar-box').append($(Drupal.theme('toolbarMenuItemToggle',options)).hide().fadeIn(150));}});}function markListLevels($lists,level){level=!level?1:level;const $lis=$lists.children('li').addClass(`level-${level}`);$lists=$lis.children('ul');if($lists.length)markListLevels($lists,level+1);}function openActiveItem($menu){let currentPath=drupalSettings.path.currentPath;const pathItem=$menu.find(`a[href="${window.location.pathname}"]`);if(pathItem.length&&!activeItem)activeItem=window.location.pathname;if(activeItem){const $activeItem=$menu.find(`a[href="${activeItem}"]`).addClass('menu-item--active');if(pathItem.length===0&&activeItem){const count=currentPath.split('/').length;for(let i=0;i<count;i++){const $menuItem=$menu.find(`a[data-drupal-link-system-path="${currentPath}"]`);if($menuItem.length!==0){const $activeTrail=$menuItem.parentsUntil('.root','li').addClass('menu-item--active-trail');toggleList($activeTrail,true);break;}const lastIndex=currentPath.lastIndexOf('/');currentPath=currentPath.slice(0,lastIndex);}}else{const $activeTrail=$activeItem.parentsUntil('.root','li').addClass('menu-item--active-trail');toggleList($activeTrail,true);}}}return this.each(function(selector){const menu=once('toolbar-menu-vertical',this);if(menu.length){const $menu=$(menu);$menu.on('click.toolbar','.toolbar-box',toggleClickHandler).on('click.toolbar','.toolbar-box a',linkClickHandler);$menu.addClass('root');initItems($menu);markListLevels($menu);openActiveItem($menu);}});};Drupal.theme.toolbarMenuItemToggle=function(options){return `<button class="${options.class}"><span class="action">${options.action}</span> <span class="label">${options.text}</span></button>`;};})(jQuery,Drupal,drupalSettings);;
(function($,Drupal,drupalSettings){(()=>{if(!sessionStorage.getItem('Drupal.toolbar.toolbarState'))return;const toolbarState=JSON.parse(sessionStorage.getItem('Drupal.toolbar.toolbarState'));const {activeTray,orientation,isOriented}=toolbarState;const activeTrayElement=document.querySelector(`.toolbar-tray[data-toolbar-tray="${activeTray}"]`);const activeTrayToggle=document.querySelector(`.toolbar-item[data-toolbar-tray="${activeTray}"]`);if(activeTrayElement){activeTrayElement.classList.add(`toolbar-tray-${orientation}`,'is-active');activeTrayToggle.classList.add('is-active');}if(isOriented)document.querySelector('#toolbar-administration').classList.add('toolbar-oriented');})();const options=$.extend({breakpoints:{'toolbar.narrow':'','toolbar.standard':'','toolbar.wide':''}},drupalSettings.toolbar,{strings:{horizontal:Drupal.t('Horizontal orientation'),vertical:Drupal.t('Vertical orientation')}});Drupal.behaviors.toolbar={attach(context){if(!window.matchMedia('only screen').matches)return;once('toolbar','#toolbar-administration',context).forEach((toolbar)=>{const model=new Drupal.toolbar.ToolbarModel({locked:JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),activeTab:document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),height:$('#toolbar-administration').outerHeight()});Drupal.toolbar.models.toolbarModel=model;Object.keys(options.breakpoints).forEach((label)=>{const mq=options.breakpoints[label];const mql=window.matchMedia(mq);Drupal.toolbar.mql[label]=mql;mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null,model,label));Drupal.toolbar.mediaQueryChangeHandler.call(null,model,label,mql);});Drupal.toolbar.views.toolbarVisualView=new Drupal.toolbar.ToolbarVisualView({el:toolbar,model,strings:options.strings});Drupal.toolbar.views.toolbarAuralView=new Drupal.toolbar.ToolbarAuralView({el:toolbar,model,strings:options.strings});Drupal.toolbar.views.bodyVisualView=new Drupal.toolbar.BodyVisualView({el:toolbar,model});model.trigger('change:isFixed',model,model.get('isFixed'));model.trigger('change:activeTray',model,model.get('activeTray'));const menuModel=new Drupal.toolbar.MenuModel();Drupal.toolbar.models.menuModel=menuModel;Drupal.toolbar.views.menuVisualView=new Drupal.toolbar.MenuVisualView({el:$(toolbar).find('.toolbar-menu-administration').get(0),model:menuModel,strings:options.strings});Drupal.toolbar.setSubtrees.done((subtrees)=>{menuModel.set('subtrees',subtrees);const theme=drupalSettings.ajaxPageState.theme;localStorage.setItem(`Drupal.toolbar.subtrees.${theme}`,JSON.stringify(subtrees));model.set('areSubtreesLoaded',true);});Drupal.toolbar.views.toolbarVisualView.loadSubtrees();$(document).on('drupalViewportOffsetChange.toolbar',(event,offsets)=>{model.set('offsets',offsets);});model.on('change:orientation',(model,orientation)=>{$(document).trigger('drupalToolbarOrientationChange',orientation);}).on('change:activeTab',(model,tab)=>{$(document).trigger('drupalToolbarTabChange',tab);}).on('change:activeTray',(model,tray)=>{$(document).trigger('drupalToolbarTrayChange',tray);});const toolbarState=sessionStorage.getItem('Drupal.toolbar.toolbarState')?JSON.parse(sessionStorage.getItem('Drupal.toolbar.toolbarState')):{};if(Drupal.toolbar.models.toolbarModel.get('orientation')==='horizontal'&&Drupal.toolbar.models.toolbarModel.get('activeTab')===null&&!toolbarState.orientation)Drupal.toolbar.models.toolbarModel.set({activeTab:$('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)});window.addEventListener('dialog:aftercreate',(e)=>{const $element=$(e.target);const {settings}=e;const toolbarBar=document.getElementById('toolbar-bar');if(toolbarBar){toolbarBar.style.marginTop='0';if(settings.drupalOffCanvasPosition==='top'){const height=Drupal.offCanvas.getContainer($element).outerHeight();toolbarBar.style.marginTop=`${height}px`;$element.on('dialogContentResize.off-canvas',()=>{const newHeight=Drupal.offCanvas.getContainer($element).outerHeight();toolbarBar.style.marginTop=`${newHeight}px`;});}}});window.addEventListener('dialog:beforeclose',()=>{const toolbarBar=document.getElementById('toolbar-bar');if(toolbarBar)toolbarBar.style.marginTop='0';});});if(once('toolbarAntiFlicker','#toolbar-administration',context).length)Drupal.toolbar.models.toolbarModel.on('change:activeTab change:orientation change:isOriented change:isTrayToggleVisible change:offsets',function(){const userButton=document.querySelector('#toolbar-item-user');const hasActiveTab=!!$(this.get('activeTab')).length>0;const previousToolbarState=sessionStorage.getItem('Drupal.toolbar.toolbarState')?JSON.parse(sessionStorage.getItem('Drupal.toolbar.toolbarState')):{};const toolbarState={...previousToolbarState,orientation:Drupal.toolbar.models.toolbarModel.get('orientation'),hasActiveTab,activeTabId:hasActiveTab?this.get('activeTab').id:null,activeTray:$(this.get('activeTab')).attr('data-toolbar-tray'),isOriented:this.get('isOriented'),isFixed:this.get('isFixed'),userButtonMinWidth:userButton?userButton.clientWidth:0};sessionStorage.setItem('Drupal.toolbar.toolbarState',JSON.stringify(toolbarState));});}};Drupal.toolbar={views:{},models:{},mql:{},setSubtrees:new $.Deferred(),mediaQueryChangeHandler(model,label,mql){switch(label){case 'toolbar.narrow':model.set({isOriented:mql.matches,isTrayToggleVisible:false});if(!mql.matches||!model.get('orientation'))model.set({orientation:'vertical'},{validate:true});break;case 'toolbar.standard':model.set({isFixed:mql.matches});break;case 'toolbar.wide':model.set({orientation:mql.matches&&!model.get('locked')?'horizontal':'vertical'},{validate:true});model.set({isTrayToggleVisible:mql.matches});break;default:break;}}};Drupal.theme.toolbarOrientationToggle=function(){return ('<div class="toolbar-toggle-orientation"><div class="toolbar-lining">'+'<button class="toolbar-icon" type="button"></button>'+'</div></div>');};Drupal.AjaxCommands.prototype.setToolbarSubtrees=function(ajax,response,status){Drupal.toolbar.setSubtrees.resolve(response.subtrees);};})(jQuery,Drupal,drupalSettings);;
(function(Backbone,Drupal){Drupal.toolbar.MenuModel=Backbone.Model.extend({defaults:{subtrees:null}});})(Backbone,Drupal);;
(function(Backbone,Drupal){Drupal.toolbar.ToolbarModel=Backbone.Model.extend({defaults:{activeTab:null,activeTray:null,isOriented:false,isFixed:false,areSubtreesLoaded:false,isViewportOverflowConstrained:false,orientation:'horizontal',locked:false,isTrayToggleVisible:true,height:null,offsets:{top:0,right:0,bottom:0,left:0}},validate(attributes,options){if(attributes.orientation==='horizontal'&&this.get('locked')&&!options.override)return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');}});})(Backbone,Drupal);;
(function($,Drupal,Backbone){Drupal.toolbar.BodyVisualView=Backbone.View.extend({initialize(){this.listenTo(this.model,'change:activeTray ',this.render);this.listenTo(this.model,'change:isFixed change:isViewportOverflowConstrained',this.isToolbarFixed);},isToolbarFixed(){const isViewportOverflowConstrained=this.model.get('isViewportOverflowConstrained');$('body').toggleClass('toolbar-fixed',isViewportOverflowConstrained||this.model.get('isFixed'));},render(){$('body').toggleClass('toolbar-tray-open',!!this.model.get('activeTray'));}});})(jQuery,Drupal,Backbone);;
(function($,Backbone,Drupal){Drupal.toolbar.MenuVisualView=Backbone.View.extend({initialize(){this.listenTo(this.model,'change:subtrees',this.render);this.render();},render(){this.renderVertical();this.renderHorizontal();},renderHorizontal(){if('drupalToolbarMenu' in $.fn)this.$el.children('.toolbar-menu').drupalToolbarMenuHorizontal();},renderVertical(){const subtrees=this.model.get('subtrees');if(!this.model.get('subtrees'))return;Object.keys(subtrees||{}).forEach((id)=>{$(once('toolbar-subtrees',this.$el.find(`#toolbar-link-${id}`))).after(subtrees[id]);});if('drupalToolbarMenu' in $.fn)this.$el.children('.toolbar-menu').drupalToolbarMenu();}});})(jQuery,Backbone,Drupal);;
(function(Backbone,Drupal){Drupal.toolbar.ToolbarAuralView=Backbone.View.extend({initialize(options){this.strings=options.strings;this.listenTo(this.model,'change:orientation',this.onOrientationChange);this.listenTo(this.model,'change:activeTray',this.onActiveTrayChange);},onOrientationChange(model,orientation){Drupal.announce(Drupal.t('Tray orientation changed to @orientation.',{'@orientation':orientation}));},onActiveTrayChange(model,tray){const relevantTray=tray===null?model.previous('activeTray'):tray;if(!relevantTray)return;const action=tray===null?Drupal.t('closed'):Drupal.t('opened');const trayNameElement=relevantTray.querySelector('.toolbar-tray-name');let text;if(trayNameElement!==null)text=Drupal.t('Tray "@tray" @action.',{'@tray':trayNameElement.textContent,'@action':action});else text=Drupal.t('Tray @action.',{'@action':action});Drupal.announce(text);}});})(Backbone,Drupal);;
(function($,Drupal,drupalSettings,Backbone){Drupal.toolbar.ToolbarVisualView=Backbone.View.extend({events(){const touchEndToClick=function(event){event.preventDefault();event.target.click();};return {'click .toolbar-bar .toolbar-tab .trigger':'onTabClick','click .toolbar-toggle-orientation button':'onOrientationToggleClick','touchend .toolbar-bar .toolbar-tab .trigger':touchEndToClick,'touchend .toolbar-toggle-orientation button':touchEndToClick};},initialize(options){this.strings=options.strings;this.listenTo(this.model,'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible',this.render);this.listenTo(this.model,'change:mqMatches',this.onMediaQueryChange);this.listenTo(this.model,'change:offsets',this.adjustPlacement);this.listenTo(this.model,'change:activeTab change:orientation change:isOriented',this.updateToolbarHeight);this.$el.find('.toolbar-tray .toolbar-lining').has('.toolbar-menu').append(Drupal.theme('toolbarOrientationToggle'));this.model.trigger('change:activeTab');},updateToolbarHeight(){const toolbarTabOuterHeight=$('#toolbar-bar').find('.toolbar-tab').outerHeight()||0;const toolbarTrayHorizontalOuterHeight=$('.is-active.toolbar-tray-horizontal').outerHeight()||0;this.model.set('height',toolbarTabOuterHeight+toolbarTrayHorizontalOuterHeight);$('body')[0].style.paddingTop=`${this.model.get('height')}px`;$('html')[0].style.scrollPaddingTop=`${this.model.get('height')}px`;this.triggerDisplace();},triggerDisplace(){_.defer(()=>{Drupal.displace(true);});},render(){this.updateTabs();this.updateTrayOrientation();this.updateBarAttributes();$('[data-toolbar-anti-flicker-loading]').remove();$('html').removeClass(['toolbar-loading','toolbar-horizontal','toolbar-vertical','toolbar-tray-open','toolbar-fixed','toolbar-oriented','toolbar-anti-flicker']);$('body').removeClass('toolbar-loading');if(this.model.changed.orientation==='vertical'||this.model.changed.activeTab)this.loadSubtrees();return this;},onTabClick(event){if(event.currentTarget.hasAttribute('data-toolbar-tray')){const activeTab=this.model.get('activeTab');const clickedTab=event.currentTarget;this.model.set('activeTab',!activeTab||clickedTab!==activeTab?clickedTab:null);event.preventDefault();event.stopPropagation();}},onOrientationToggleClick(event){const orientation=this.model.get('orientation');const antiOrientation=orientation==='vertical'?'horizontal':'vertical';const locked=antiOrientation==='vertical';if(locked)localStorage.setItem('Drupal.toolbar.trayVerticalLocked','true');else localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');this.model.set({locked,orientation:antiOrientation},{validate:true,override:true});event.preventDefault();event.stopPropagation();},updateTabs(){const $tab=$(this.model.get('activeTab'));$(this.model.previous('activeTab')).removeClass('is-active').attr('aria-pressed',false);$(this.model.previous('activeTray')).removeClass('is-active');localStorage.removeItem('Drupal.toolbar.activeTabID');if($tab.length>0){$tab.addClass('is-active').attr('aria-pressed',true);const name=$tab.attr('data-toolbar-tray');const id=$tab.get(0).id;if(id)localStorage.setItem('Drupal.toolbar.activeTabID',JSON.stringify(id));const $tray=this.$el.find(`[data-toolbar-tray="${name}"].toolbar-tray`);if($tray.length){$tray.addClass('is-active');this.model.set('activeTray',$tray.get(0));}else this.model.set('activeTray',null);}else{this.model.set('activeTray',null);localStorage.removeItem('Drupal.toolbar.activeTabID');}},updateBarAttributes(){const isOriented=this.model.get('isOriented');if(isOriented)this.$el.find('.toolbar-bar').attr('data-offset-top','');else this.$el.find('.toolbar-bar').removeAttr('data-offset-top');this.$el.toggleClass('toolbar-oriented',isOriented);},updateTrayOrientation(){const orientation=this.model.get('orientation');const antiOrientation=orientation==='vertical'?'horizontal':'vertical';$('body').toggleClass('toolbar-vertical',orientation==='vertical').toggleClass('toolbar-horizontal',orientation==='horizontal');const removeClass=antiOrientation==='horizontal'?'toolbar-tray-horizontal':'toolbar-tray-vertical';const $trays=this.$el.find('.toolbar-tray').removeClass(removeClass).addClass(`toolbar-tray-${orientation}`);const iconClass=`toolbar-icon-toggle-${orientation}`;const iconAntiClass=`toolbar-icon-toggle-${antiOrientation}`;const $orientationToggle=this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));const $orientationToggleButton=$orientationToggle.find('button');$orientationToggleButton[0].value=antiOrientation;$orientationToggleButton.attr('title',this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);$orientationToggleButton[0].textContent=this.strings[antiOrientation];const dir=document.documentElement.dir;const edge=dir==='rtl'?'right':'left';$trays.removeAttr('data-offset-left data-offset-right data-offset-top');$trays.filter('.toolbar-tray-vertical.is-active').attr(`data-offset-${edge}`,'');$trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top','');},adjustPlacement(){const $trays=this.$el.find('.toolbar-tray');if(!this.model.get('isOriented'))$trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');},loadSubtrees(){const $activeTab=$(this.model.get('activeTab'));const orientation=this.model.get('orientation');if(!this.model.get('areSubtreesLoaded')&&typeof $activeTab.data('drupal-subtrees')!=='undefined'&&orientation==='vertical'){const subtreesHash=drupalSettings.toolbar.subtreesHash;const theme=drupalSettings.ajaxPageState.theme;const endpoint=Drupal.url(`toolbar/subtrees/${subtreesHash}`);const cachedSubtreesHash=localStorage.getItem(`Drupal.toolbar.subtreesHash.${theme}`);const cachedSubtrees=JSON.parse(localStorage.getItem(`Drupal.toolbar.subtrees.${theme}`));const isVertical=this.model.get('orientation')==='vertical';if(isVertical&&subtreesHash===cachedSubtreesHash&&cachedSubtrees)Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);else{if(isVertical){localStorage.removeItem(`Drupal.toolbar.subtreesHash.${theme}`);localStorage.removeItem(`Drupal.toolbar.subtrees.${theme}`);Drupal.ajax({url:endpoint}).execute();localStorage.setItem(`Drupal.toolbar.subtreesHash.${theme}`,subtreesHash);}}}}});})(jQuery,Drupal,drupalSettings,Backbone);;
(function($,Drupal,drupalSettings){const pathInfo=drupalSettings.path;const escapeAdminPath=sessionStorage.getItem('escapeAdminPath');const windowLocation=window.location;if(!pathInfo.currentPathIsAdmin&&!/destination=/.test(windowLocation.search))sessionStorage.setItem('escapeAdminPath',windowLocation);Drupal.behaviors.escapeAdmin={attach(){const toolbarEscape=once('escapeAdmin','[data-toolbar-escape-admin]');if(toolbarEscape.length&&pathInfo.currentPathIsAdmin&&escapeAdminPath!==null)$(toolbarEscape).attr('href',escapeAdminPath);}};})(jQuery,Drupal,drupalSettings);;
