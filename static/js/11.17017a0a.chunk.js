/*! For license information please see 11.17017a0a.chunk.js.LICENSE.txt */
(this.webpackJsonpphysiopraxis_marian=this.webpackJsonpphysiopraxis_marian||[]).push([[11],{165:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(3),c=n.n(i);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(a(t)),t.handleErrored=t.handleErrored.bind(a(t)),t.handleChange=t.handleChange.bind(a(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(a(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.a.createElement("div",u({},t,{ref:this.handleRecaptchaRef}))},r}(o.a.Component);f.displayName="ReCAPTCHA",f.propTypes={sitekey:c.a.string.isRequired,onChange:c.a.func,grecaptcha:c.a.object,theme:c.a.oneOf(["dark","light"]),type:c.a.oneOf(["image","audio"]),tabindex:c.a.number,onExpired:c.a.func,onErrored:c.a.func,size:c.a.oneOf(["compact","normal","invisible"]),stoken:c.a.string,hl:c.a.string,badge:c.a.oneOf(["bottomright","bottomleft","inline"])},f.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var s=n(34),l=n.n(s);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d={},h=0;var y="onloadcallback";var v,E,g=(v=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+y+"&render=explicit"},E=(E={callbackName:y,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,o;function i(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}o=t,(n=i).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var c=i.prototype;return c.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+h++),this.__scriptLoaderID},c.setupScriptURL=function(){return this.__scriptURL="function"===typeof v?v():v,this.__scriptURL},c.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},c.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=d[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[E.callbackName]},c.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=E,o=r.globalName,i=r.callbackName,c=r.scriptId;if(o&&"undefined"!==typeof window[o]&&(d[t]={loaded:!0,observers:{}}),d[t]){var u=d[t];return u&&(u.loaded||u.errored)?void this.asyncScriptLoaderHandleLoad(u):void(u.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var a={};a[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},d[t]={loaded:!1,observers:a};var f=document.createElement("script");for(var s in f.src=t,f.async=!0,E.attributes)f.setAttribute(s,E.attributes[s]);c&&(f.id=c);var l=function(e){if(d[t]){var n=d[t].observers;for(var r in n)e(n[r])&&delete n[r]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),f.onload=function(){var e=d[t];e&&(e.loaded=!0,l((function(t){return!i&&(t(e),!0)})))},f.onerror=function(){var e=d[t];e&&(e.errored=!0,l((function(t){return t(e),!0})))},document.body.appendChild(f)},c.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===E.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=d[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===E.removeOnUnmount&&delete d[e])},c.render=function(){var t=E.globalName,n=this.props,o=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=o,Object(r.createElement)(e,i)},i}(r.Component),o=Object(r.forwardRef)((function(e,t){return Object(r.createElement)(n,p({},e,{forwardedRef:t}))}));return o.displayName="AsyncScriptLoader("+t+")",o.propTypes={asyncScriptOnLoad:c.a.func},l()(o,e)})(f);t.a=g},167:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=/["'&<>]/,o=function(e){var t,n=""+e,o=r.exec(n);if(!o)return n;var i="",c=0,u=0;for(c=o.index;c<n.length;c++){switch(n.charCodeAt(c)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}u!==c&&(i+=n.substring(u,c)),u=c+1,i+=t}return u!==c?i+n.substring(u,c):i};var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};var c,u=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof i?i:"undefined"!==typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},c=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||Function("return this")(),u=function(e){try{return!!e()}catch(t){return!0}},a=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&&!f.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:f},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,h="".split,y=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,v=function(e){return y(function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}(e))},E=function(e){return"object"===typeof e?null!==e:"function"===typeof e},g=function(e,t){if(!E(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!E(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!E(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!E(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,m=function(e,t){return b.call(e,t)},O=c.document,S=E(O)&&E(O.createElement),_=function(e){return S?O.createElement(e):{}},T=!a&&!u((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,w={f:a?I:function(e,t){if(e=v(e),t=g(t,!0),T)try{return I(e,t)}catch(n){}if(m(e,t))return p(!l.f.call(e,t),e[t])}},L=function(e){if(!E(e))throw TypeError(String(e)+" is not an object");return e},D=Object.defineProperty,R={f:a?D:function(e,t,n){if(L(e),t=g(t,!0),L(n),T)try{return D(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},N=a?function(e,t,n){return R.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},A=function(e,t){try{N(c,e,t)}catch(n){c[e]=t}return t},j="__core-js_shared__",P=c[j]||A(j,{}),x=Function.toString;"function"!=typeof P.inspectSource&&(P.inspectSource=function(e){return x.call(e)});var C,M,k,H=P.inspectSource,G=c.WeakMap,U="function"===typeof G&&/native code/.test(H(G)),B=r((function(e){(e.exports=function(e,t){return P[e]||(P[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})})),Y=0,K=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Y+K).toString(36)},z=B("keys"),q=function(e){return z[e]||(z[e]=F(e))},W={},V=c.WeakMap;if(U){var Q=new V,J=Q.get,X=Q.has,Z=Q.set;C=function(e,t){return Z.call(Q,e,t),t},M=function(e){return J.call(Q,e)||{}},k=function(e){return X.call(Q,e)}}else{var $=q("state");W[$]=!0,C=function(e,t){return N(e,$,t),t},M=function(e){return m(e,$)?e[$]:{}},k=function(e){return m(e,$)}}var ee={set:C,get:M,has:k,enforce:function(e){return k(e)?M(e):C(e,{})},getterFor:function(e){return function(t){var n;if(!E(t)||(n=M(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},te=r((function(e){var t=ee.get,n=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var u=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||m(o,"name")||N(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==c?(u?!f&&e[t]&&(a=!0):delete e[t],a?e[t]=o:N(e,t,o)):a?e[t]=o:A(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||H(this)}))})),ne=c,re=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?re(ne[e])||re(c[e]):ne[e]&&ne[e][t]||c[e]&&c[e][t]},ie=Math.ceil,ce=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?ce:ie)(e)},ae=Math.min,fe=Math.max,se=Math.min,le=function(e){return function(t,n,r){var o,i,c=v(t),u=(o=c.length)>0?ae(ue(o),9007199254740991):0,a=function(e,t){var n=ue(e);return n<0?fe(n+t,0):se(n,t)}(r,u);if(e&&n!=n){for(;u>a;)if((i=c[a++])!=i)return!0}else for(;u>a;a++)if((e||a in c)&&c[a]===n)return e||a||0;return!e&&-1}},pe={includes:le(!0),indexOf:le(!1)},de=pe.indexOf,he=function(e,t){var n,r=v(e),o=0,i=[];for(n in r)!m(W,n)&&m(r,n)&&i.push(n);for(;t.length>o;)m(r,n=t[o++])&&(~de(i,n)||i.push(n));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=ye.concat("length","prototype"),Ee={f:Object.getOwnPropertyNames||function(e){return he(e,ve)}},ge={f:Object.getOwnPropertySymbols},be=oe("Reflect","ownKeys")||function(e){var t=Ee.f(L(e)),n=ge.f;return n?t.concat(n(e)):t},me=function(e,t){for(var n=be(t),r=R.f,o=w.f,i=0;i<n.length;i++){var c=n[i];m(e,c)||r(e,c,o(t,c))}},Oe=/#|\.prototype\./,Se=function(e,t){var n=Te[_e(e)];return n==we||n!=Ie&&("function"==typeof t?u(t):!!t)},_e=Se.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},Te=Se.data={},Ie=Se.NATIVE="N",we=Se.POLYFILL="P",Le=Se,De=w.f,Re=function(e,t){var n,r,o,i,u,a=e.target,f=e.global,s=e.stat;if(n=f?c:s?c[a]||A(a,{}):(c[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=De(n,r))&&u.value:n[r],!Le(f?r:a+(s?".":"#")+r,e.forced)&&void 0!==o){if(typeof i===typeof o)continue;me(i,o)}(e.sham||o&&o.sham)&&N(i,"sham",!0),te(n,r,i,e)}},Ne=Object.keys||function(e){return he(e,ye)},Ae=l.f,je=function(e){return function(t){for(var n,r=v(t),o=Ne(r),i=o.length,c=0,u=[];i>c;)n=o[c++],a&&!Ae.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}},Pe={entries:je(!0),values:je(!1)}.values;Re({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ne.Object.values;var xe,Ce=!!Object.getOwnPropertySymbols&&!u((function(){return!String(Symbol())})),Me=Ce&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ke=B("wks"),He=c.Symbol,Ge=Me?He:He&&He.withoutSetter||F,Ue=a?Object.defineProperties:function(e,t){L(e);for(var n,r=Ne(t),o=r.length,i=0;o>i;)R.f(e,n=r[i++],t[n]);return e},Be=oe("document","documentElement"),Ye=q("IE_PROTO"),Ke=function(){},Fe=function(e){return"<script>"+e+"</"+"script>"},ze=function(){try{xe=document.domain&&new ActiveXObject("htmlfile")}catch(t){}ze=xe?function(e){e.write(Fe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(xe):function(){var e,t=_("iframe");return t.style.display="none",Be.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Fe("document.F=Object")),e.close(),e.F}();for(var e=ye.length;e--;)delete ze.prototype[ye[e]];return ze()};W[Ye]=!0;var qe,We=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=L(e),n=new Ke,Ke.prototype=null,n[Ye]=e):n=ze(),void 0===t?n:Ue(n,t)},Ve=(m(ke,qe="unscopables")||(Ce&&m(He,qe)?ke[qe]=He[qe]:ke[qe]=Ge("Symbol."+qe)),ke[qe]),Qe=Array.prototype;void 0==Qe[Ve]&&R.f(Qe,Ve,{configurable:!0,value:We(null)});var Je,Xe=Object.defineProperty,Ze={},$e=function(e){throw e},et=pe.includes;Re({target:"Array",proto:!0,forced:!function(e,t){if(m(Ze,e))return Ze[e];t||(t={});var n=[][e],r=!!m(t,"ACCESSORS")&&t.ACCESSORS,o=m(t,0)?t[0]:$e,i=m(t,1)?t[1]:void 0;return Ze[e]=!!n&&!u((function(){if(r&&!a)return!0;var e={length:-1};r?Xe(e,1,{enumerable:!0,get:$e}):e[1]=1,n.call(e,o,i)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return et(this,e,arguments.length>1?arguments[1]:void 0)}}),Je="includes",Qe[Ve][Je]=!0;var tt,nt,rt,ot=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},it=Function.call;tt="includes",ot(it,c["Array"].prototype[tt],nt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(rt||(rt={}));var ct,ut=rt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ct||(ct={}));var at,ft=ct,st=[ut.PARAGRAPH,ut.HEADING_1,ut.HEADING_2,ut.HEADING_3,ut.HEADING_4,ut.HEADING_5,ut.HEADING_6,ut.OL_LIST,ut.UL_LIST,ut.HR,ut.QUOTE,ut.EMBEDDED_ENTRY,ut.EMBEDDED_ASSET],lt=[ut.HR,ut.EMBEDDED_ENTRY,ut.EMBEDDED_ASSET],pt=((at={})[ut.OL_LIST]=[ut.LIST_ITEM],at[ut.UL_LIST]=[ut.LIST_ITEM],at[ut.LIST_ITEM]=st.slice(),at[ut.QUOTE]=[ut.PARAGRAPH],at),dt={nodeType:ut.DOCUMENT,data:{},content:[{nodeType:ut.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var ht=Object.freeze({isInline:function(e){return Object.values(ft).includes(e.nodeType)},isBlock:function(e){return Object.values(ut).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=ut,t.CONTAINERS=pt,t.EMPTY_DOCUMENT=dt,t.INLINES=ft,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=st,t.VOID_BLOCKS=lt,t.helpers=ht}));(c=u)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var a,f,s=u.BLOCKS,l=(u.CONTAINERS,u.EMPTY_DOCUMENT,u.INLINES),p=u.MARKS,d=(u.TOP_LEVEL_BLOCKS,u.VOID_BLOCKS,u.helpers),h=((a={})[s.PARAGRAPH]=function(e,t){return"<p>"+t(e.content)+"</p>"},a[s.HEADING_1]=function(e,t){return"<h1>"+t(e.content)+"</h1>"},a[s.HEADING_2]=function(e,t){return"<h2>"+t(e.content)+"</h2>"},a[s.HEADING_3]=function(e,t){return"<h3>"+t(e.content)+"</h3>"},a[s.HEADING_4]=function(e,t){return"<h4>"+t(e.content)+"</h4>"},a[s.HEADING_5]=function(e,t){return"<h5>"+t(e.content)+"</h5>"},a[s.HEADING_6]=function(e,t){return"<h6>"+t(e.content)+"</h6>"},a[s.EMBEDDED_ENTRY]=function(e,t){return"<div>"+t(e.content)+"</div>"},a[s.UL_LIST]=function(e,t){return"<ul>"+t(e.content)+"</ul>"},a[s.OL_LIST]=function(e,t){return"<ol>"+t(e.content)+"</ol>"},a[s.LIST_ITEM]=function(e,t){return"<li>"+t(e.content)+"</li>"},a[s.QUOTE]=function(e,t){return"<blockquote>"+t(e.content)+"</blockquote>"},a[s.HR]=function(){return"<hr/>"},a[l.ASSET_HYPERLINK]=function(e){return v(l.ASSET_HYPERLINK,e)},a[l.ENTRY_HYPERLINK]=function(e){return v(l.ENTRY_HYPERLINK,e)},a[l.EMBEDDED_ENTRY]=function(e){return v(l.EMBEDDED_ENTRY,e)},a[l.HYPERLINK]=function(e,t){return'<a href="'+e.data.uri+'">'+t(e.content)+"</a>"},a),y=((f={})[p.BOLD]=function(e){return"<b>"+e+"</b>"},f[p.ITALIC]=function(e){return"<i>"+e+"</i>"},f[p.UNDERLINE]=function(e){return"<u>"+e+"</u>"},f[p.CODE]=function(e){return"<code>"+e+"</code>"},f),v=function(e,t){return"<span>type: "+e+" id: "+t.data.target.sys.id+"</span>"};function E(e,t){var n=t.renderNode,r=t.renderMark;return e.map((function(e){return function(e,t){var n=t.renderNode,r=t.renderMark;if(d.isText(e)){var i=o(e.value);return e.marks.length>0?e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),i):i}var c=function(e){return E(e,{renderMark:r,renderNode:n})};return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,c):""}(e,{renderNode:n,renderMark:r})})).join("")}t.documentToHtmlString=function(e,t){return void 0===t&&(t={}),e&&e.content?E(e.content,{renderNode:n({},h,t.renderNode),renderMark:n({},y,t.renderMark)}):""}}).call(this,n(23))},168:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},u=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!a.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:a},l=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,d="".split,h=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return p.call(e).slice(8,-1)}(e)?d.call(e,""):Object(e)}:Object,y=function(e){return h(function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}(e))},v=function(e){return"object"===typeof e?null!==e:"function"===typeof e},E=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},g={}.hasOwnProperty,b=function(e,t){return g.call(e,t)},m=i.document,O=v(m)&&v(m.createElement),S=function(e){return O?m.createElement(e):{}},_=!u&&!c((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),T=Object.getOwnPropertyDescriptor,I={f:u?T:function(e,t){if(e=y(e),t=E(t,!0),_)try{return T(e,t)}catch(n){}if(b(e,t))return l(!s.f.call(e,t),e[t])}},w=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},L=Object.defineProperty,D={f:u?L:function(e,t,n){if(w(e),t=E(t,!0),w(n),_)try{return L(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=u?function(e,t,n){return D.f(e,t,l(1,n))}:function(e,t,n){return e[t]=n,e},N=function(e,t){try{R(i,e,t)}catch(n){i[e]=t}return t},A="__core-js_shared__",j=i[A]||N(A,{}),P=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return P.call(e)});var x,C,M,k=j.inspectSource,H=i.WeakMap,G="function"===typeof H&&/native code/.test(k(H)),U=r((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,Y=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+Y).toString(36)},F=U("keys"),z=function(e){return F[e]||(F[e]=K(e))},q={},W=i.WeakMap;if(G){var V=new W,Q=V.get,J=V.has,X=V.set;x=function(e,t){return X.call(V,e,t),t},C=function(e){return Q.call(V,e)||{}},M=function(e){return J.call(V,e)}}else{var Z=z("state");q[Z]=!0,x=function(e,t){return R(e,Z,t),t},C=function(e){return b(e,Z)?e[Z]:{}},M=function(e){return b(e,Z)}}var $={set:x,get:C,has:M,enforce:function(e){return M(e)?C(e):x(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=C(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=r((function(e){var t=$.get,n=$.enforce,r=String(String).split("String");(e.exports=function(e,t,o,c){var u=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof o&&("string"!=typeof t||b(o,"name")||R(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==i?(u?!f&&e[t]&&(a=!0):delete e[t],a?e[t]=o:R(e,t,o)):a?e[t]=o:N(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||k(this)}))})),te=i,ne=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?ne(te[e])||ne(i[e]):te[e]&&te[e][t]||i[e]&&i[e][t]},oe=Math.ceil,ie=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?ie:oe)(e)},ue=Math.min,ae=Math.max,fe=Math.min,se=function(e){return function(t,n,r){var o,i,c=y(t),u=(o=c.length)>0?ue(ce(o),9007199254740991):0,a=function(e,t){var n=ce(e);return n<0?ae(n+t,0):fe(n,t)}(r,u);if(e&&n!=n){for(;u>a;)if((i=c[a++])!=i)return!0}else for(;u>a;a++)if((e||a in c)&&c[a]===n)return e||a||0;return!e&&-1}},le={includes:se(!0),indexOf:se(!1)},pe=le.indexOf,de=function(e,t){var n,r=y(e),o=0,i=[];for(n in r)!b(q,n)&&b(r,n)&&i.push(n);for(;t.length>o;)b(r,n=t[o++])&&(~pe(i,n)||i.push(n));return i},he=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=he.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return de(e,ye)}},Ee={f:Object.getOwnPropertySymbols},ge=re("Reflect","ownKeys")||function(e){var t=ve.f(w(e)),n=Ee.f;return n?t.concat(n(e)):t},be=function(e,t){for(var n=ge(t),r=D.f,o=I.f,i=0;i<n.length;i++){var c=n[i];b(e,c)||r(e,c,o(t,c))}},me=/#|\.prototype\./,Oe=function(e,t){var n=_e[Se(e)];return n==Ie||n!=Te&&("function"==typeof t?c(t):!!t)},Se=Oe.normalize=function(e){return String(e).replace(me,".").toLowerCase()},_e=Oe.data={},Te=Oe.NATIVE="N",Ie=Oe.POLYFILL="P",we=Oe,Le=I.f,De=function(e,t){var n,r,o,c,u,a=e.target,f=e.global,s=e.stat;if(n=f?i:s?i[a]||N(a,{}):(i[a]||{}).prototype)for(r in t){if(c=t[r],o=e.noTargetGet?(u=Le(n,r))&&u.value:n[r],!we(f?r:a+(s?".":"#")+r,e.forced)&&void 0!==o){if(typeof c===typeof o)continue;be(c,o)}(e.sham||o&&o.sham)&&R(c,"sham",!0),ee(n,r,c,e)}},Re=Object.keys||function(e){return de(e,he)},Ne=s.f,Ae=function(e){return function(t){for(var n,r=y(t),o=Re(r),i=o.length,c=0,a=[];i>c;)n=o[c++],u&&!Ne.call(r,n)||a.push(e?[n,r[n]]:r[n]);return a}},je={entries:Ae(!0),values:Ae(!1)}.values;De({target:"Object",stat:!0},{values:function(e){return je(e)}});te.Object.values;var Pe,xe=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Ce=xe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Me=U("wks"),ke=i.Symbol,He=Ce?ke:ke&&ke.withoutSetter||K,Ge=u?Object.defineProperties:function(e,t){w(e);for(var n,r=Re(t),o=r.length,i=0;o>i;)D.f(e,n=r[i++],t[n]);return e},Ue=re("document","documentElement"),Be=z("IE_PROTO"),Ye=function(){},Ke=function(e){return"<script>"+e+"</"+"script>"},Fe=function(){try{Pe=document.domain&&new ActiveXObject("htmlfile")}catch(t){}Fe=Pe?function(e){e.write(Ke("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Pe):function(){var e,t=S("iframe");return t.style.display="none",Ue.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ke("document.F=Object")),e.close(),e.F}();for(var e=he.length;e--;)delete Fe.prototype[he[e]];return Fe()};q[Be]=!0;var ze,qe=Object.create||function(e,t){var n;return null!==e?(Ye.prototype=w(e),n=new Ye,Ye.prototype=null,n[Be]=e):n=Fe(),void 0===t?n:Ge(n,t)},We=(b(Me,ze="unscopables")||(xe&&b(ke,ze)?Me[ze]=ke[ze]:Me[ze]=He("Symbol."+ze)),Me[ze]),Ve=Array.prototype;void 0==Ve[We]&&D.f(Ve,We,{configurable:!0,value:qe(null)});var Qe,Je=Object.defineProperty,Xe={},Ze=function(e){throw e},$e=le.includes;De({target:"Array",proto:!0,forced:!function(e,t){if(b(Xe,e))return Xe[e];t||(t={});var n=[][e],r=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:Ze,i=b(t,1)?t[1]:void 0;return Xe[e]=!!n&&!c((function(){if(r&&!u)return!0;var e={length:-1};r?Je(e,1,{enumerable:!0,get:Ze}):e[1]=1,n.call(e,o,i)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return $e(this,e,arguments.length>1?arguments[1]:void 0)}}),Qe="includes",Ve[We][Qe]=!0;var et,tt,nt,rt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},ot=Function.call;et="includes",rt(ot,i["Array"].prototype[et],tt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(nt||(nt={}));var it,ct=nt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(it||(it={}));var ut,at=it,ft=[ct.PARAGRAPH,ct.HEADING_1,ct.HEADING_2,ct.HEADING_3,ct.HEADING_4,ct.HEADING_5,ct.HEADING_6,ct.OL_LIST,ct.UL_LIST,ct.HR,ct.QUOTE,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],st=[ct.HR,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],lt=((ut={})[ct.OL_LIST]=[ct.LIST_ITEM],ut[ct.UL_LIST]=[ct.LIST_ITEM],ut[ct.LIST_ITEM]=ft.slice(),ut[ct.QUOTE]=[ct.PARAGRAPH],ut),pt={nodeType:ct.DOCUMENT,data:{},content:[{nodeType:ct.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var dt=Object.freeze({isInline:function(e){return Object.values(at).includes(e.nodeType)},isBlock:function(e){return Object.values(ct).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=ct,t.CONTAINERS=lt,t.EMPTY_DOCUMENT=pt,t.INLINES=at,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=ft,t.VOID_BLOCKS=st,t.helpers=dt}).call(this,n(23))}}]);
//# sourceMappingURL=11.17017a0a.chunk.js.map