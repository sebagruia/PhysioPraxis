(this.webpackJsonpphysiopraxis_marian=this.webpackJsonpphysiopraxis_marian||[]).push([[8],{103:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return o}));var a=function(e){var t=new Date(e);return new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})},r=function(){var e=Date.now();return new Date(e).toISOString().slice(0,10)},i=function(e){return new Date(e).getDay()},s=function(e){return e.match(/\S/g).join("")},o=function(e){return e.filter((function(e,t){return t<5}))}},111:function(e,t,n){},112:function(e,t,n){},118:function(e,t,n){"use strict";var a=n(1),r=n(27),i=n(19),s=n(20),o=n(22),c=n(21),d=n(0),p=n.n(d),h=(n(111),n(11)),l=n(7),u=n(103),m=n(8),f=n(3),b=n.n(f);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(j(t)),t.handleErrored=t.handleErrored.bind(j(t)),t.handleChange=t.handleChange.bind(j(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(j(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},r.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},r.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},r.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},r.handleRecaptchaRef=function(e){this.captcha=e},r.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return p.a.createElement("div",g({},t,{ref:this.handleRecaptchaRef}))},a}(p.a.Component);v.displayName="ReCAPTCHA",v.propTypes={sitekey:b.a.string.isRequired,onChange:b.a.func,grecaptcha:b.a.object,theme:b.a.oneOf(["dark","light"]),type:b.a.oneOf(["image","audio"]),tabindex:b.a.number,onExpired:b.a.func,onErrored:b.a.func,size:b.a.oneOf(["compact","normal","invisible"]),stoken:b.a.string,hl:b.a.string,badge:b.a.oneOf(["bottomright","bottomleft","inline"])},v.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var x=n(25),O=n.n(x);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w={},C=0;var S="onloadcallback";var R,N,_=(R=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+S+"&render=explicit"},N=(N={callbackName:S,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,a;function r(e,n){var a;return(a=t.call(this,e,n)||this).state={},a.__scriptURL="",a}a=t,(n=r).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var i=r.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+C++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"===typeof R?R():R,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=w[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[N.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),a=N,r=a.globalName,i=a.callbackName,s=a.scriptId;if(r&&"undefined"!==typeof window[r]&&(w[t]={loaded:!0,observers:{}}),w[t]){var o=w[t];return o&&(o.loaded||o.errored)?void this.asyncScriptLoaderHandleLoad(o):void(o.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},w[t]={loaded:!1,observers:c};var d=document.createElement("script");for(var p in d.src=t,d.async=!0,N.attributes)d.setAttribute(p,N.attributes[p]);s&&(d.id=s);var h=function(e){if(w[t]){var n=w[t].observers;for(var a in n)e(n[a])&&delete n[a]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=w[t];e&&(e.loaded=!0,h((function(t){return!i&&(t(e),!0)})))},d.onerror=function(){var e=w[t];e&&(e.errored=!0,h((function(t){return t(e),!0})))},document.body.appendChild(d)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===N.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var a=w[e];a&&(delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===N.removeOnUnmount&&delete w[e])},i.render=function(){var t=N.globalName,n=this.props,a=(n.asyncScriptOnLoad,n.forwardedRef),r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(r[t]="undefined"!==typeof window[t]?window[t]:void 0),r.ref=a,Object(d.createElement)(e,r)},r}(d.Component),a=Object(d.forwardRef)((function(e,t){return Object(d.createElement)(n,y({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:b.a.func},O()(a,e)})(v),L=n(38),E=n(26),P=n(53),k=(n(112),Object(h.b)()((function(e){var t=e.dispatch,n=e.children,r=e.messageStatus;return r&&setTimeout((function(){return t(Object(m.n)(!1))}),2e3),Object(a.jsx)("div",{className:"popup-container",role:"button",style:r?{visibility:"visible"}:{visibility:"hidden"},children:Object(a.jsx)("p",{children:n})})}))),T=n(54),I=n.n(T),D=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).sendMessageWithEmailJs=function(){I.a.send("gmail","physiopraxis_template",e.state,"user_F1bqxybKUk71PHOFljEA3").then((function(t){"OK"===t.text&&(e.props.dispatch(Object(m.n)(!e.props.sendingMessageStatus)),console.log("SUCCES",t.text))}),(function(e){console.log("FAILED",e.text)}))},e.handleSubmit=function(t){t.preventDefault(),e.sendMessageWithEmailJs(),e.recaptchaRef.current.reset(),e.setState({email:"",name:"",date:"",time:"",phone:"",message:""})},e.handleOnChange=function(t){var n=t.target.name;e.setState(Object(r.a)({},n,t.target.value))},e.handleOnChangeReCAptcha=function(t){console.log("g-recaptcha-response: Generated"),e.setState({"g-recaptcha-response":t})},e.checkDateValidity=function(e){return 0===Object(u.b)(e)?"":e},e.recaptchaRef=p.a.createRef(),e.state={email:"",name:"",date:"",time:"",phone:"",message:"","g-recaptcha-response":""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.history,n=e.sendingMessageStatus,r=t.location.pathname,i=this.state,s=i.email,o=i.name,c=i.date,d=i.time,p=i.phone,h=i.message;return Object(a.jsxs)(L.a,{onSubmit:this.handleSubmit,className:"appointment ".concat("/appointmentPage"===r?"substractMarginBottom":""," "),children:[Object(a.jsxs)("div",{className:"appointment-text",children:[Object(a.jsx)("h1",{children:"Termin vereinbaren"}),Object(a.jsx)("h6",{children:"Wir freuen uns auf Sie"})]}),Object(a.jsx)(E.a,{onChange:this.handleOnChange,type:"text",placeholder:"Email","aria-label":"Email",value:s,name:"email",required:!0}),Object(a.jsxs)("div",{className:"appointment-inputs",children:[Object(a.jsxs)(L.a.Group,{className:"group",children:[Object(a.jsx)(E.a,{onChange:this.handleOnChange,type:"text",placeholder:"Name","aria-label":"Name",value:o,name:"name",required:!0}),Object(a.jsx)(L.a.Label,{children:"Datum"}),Object(a.jsx)(E.a,{onChange:this.handleOnChange,type:"date",placeholder:"Datum","aria-label":"Datum",min:Object(u.e)(),value:this.checkDateValidity(c),name:"date",required:!0})]}),Object(a.jsxs)(L.a.Group,{className:"group",children:[Object(a.jsx)(E.a,{onChange:this.handleOnChange,type:"tel",placeholder:"Telefonnummer","aria-label":"Telefonnummer","aria-describedby":"basic-addon1",value:p,name:"phone",required:!0}),Object(a.jsx)(L.a.Label,{children:"Uhrzeit"}),Object(a.jsx)(E.a,{onChange:this.handleOnChange,type:"time",min:"08:00",max:"".concat(6===Object(u.b)(c)?"14:00":"20:00"),placeholder:"Uhrzeit","aria-label":"Uhrzeit","aria-describedby":"basic-addon1",value:d,name:"time",required:!0})]})]}),Object(a.jsx)(L.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Sonderwunsch...",value:h,name:"message"}),Object(a.jsxs)("div",{className:"buttonAndPopUp-container",children:[Object(a.jsx)(P.a,{buttonName:"Vereinbaren"}),Object(a.jsx)(k,{messageStatus:n,children:"Sent"}),Object(a.jsx)(_,{ref:this.recaptchaRef,sitekey:"".concat("6LdypNMZAAAAAIN1Q2Eqzrz4PcXWCK5J-Ad3eT_B"),onChange:this.handleOnChangeReCAptcha,className:"g-recaptcha"})]})]})}}]),n}(d.Component);t.a=Object(l.h)(Object(h.b)((function(e){return{sendingMessageStatus:e.userReducer.sendingMessageStatus}}))(D))},135:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(135),n(39)),i=n(118);t.default=function(){return Object(a.jsxs)(r.b,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)("meta",{name:"description",content:"Praxis f\xfcr Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibul\xe4re Dysfunktionen Hei\xdf- und Kalttherapie"}),Object(a.jsx)("title",{children:"PhysioPraxis Marian | Termin vereinbaren"})]}),Object(a.jsxs)("div",{className:"appointmentPage-container container",children:[Object(a.jsx)(i.a,{}),Object(a.jsx)("div",{className:"appointmentPage-contactInfo",children:Object(a.jsxs)("div",{className:"appointmentPage-contactInfo-text",lang:"de",children:[Object(a.jsx)("h1",{children:"Kontakt"}),Object(a.jsxs)("div",{className:"appointmentPage-firstText-container",children:[Object(a.jsx)("h6",{className:"appointmentPage-firstText",children:"MONTAG - FREITAG "}),Object(a.jsx)("h6",{className:"appointmentPage-hours",children:"08:00 - 19:00"})]}),Object(a.jsxs)("div",{className:"appointmentPage-firstText-container",children:[Object(a.jsx)("h6",{className:"appointmentPage-firstText",children:"SAMSTAG "}),Object(a.jsx)("h6",{className:"appointmentPage-hours",children:"08:00 - 14:00"})]}),Object(a.jsxs)("div",{className:"appointmentPage-firstText-container",children:[Object(a.jsx)("h6",{className:"appointmentPage-firstText",children:"SONNTAG "}),Object(a.jsx)("h6",{className:"appointmentPage-hours",children:"GESCHLOSSEN"})]}),Object(a.jsxs)("div",{className:"appointmentPage-firstText-container",children:[Object(a.jsx)("h6",{className:"appointmentPage-firstText",children:"TEL. / WHATSAPP"}),Object(a.jsx)("h6",{className:"appointmentPage-hours",children:"0172 3465694"})]}),Object(a.jsxs)("div",{className:"appointmentPage-firstText-container",children:[Object(a.jsx)("h6",{className:"appointmentPage-firstText",children:"EMAIL "}),Object(a.jsx)("h6",{className:"appointmentPage-hours",children:"physiopraxis.marian@gmail.com"})]})]})})]})]})}}}]);
//# sourceMappingURL=8.a2f7058d.chunk.js.map