(this.webpackJsonpphysiopraxis_marian=this.webpackJsonpphysiopraxis_marian||[]).push([[3],{118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},125:function(e,t,a){"use strict";var n=a(27),r=a(28),i=a(29),o=a(31),s=a(30),l=a(0),c=a.n(l),m=(a(118),a(10)),d=a(6),u=a(42),p=a(7),h=a(2),A=a.n(h);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(f(t)),t.handleErrored=t.handleErrored.bind(f(t)),t.handleChange=t.handleChange.bind(f(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(f(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},r.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var e=this;return new Promise((function(t,a){e.executionResolve=t,e.executionReject=a,e.execute()}))},r.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},r.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},r.handleRecaptchaRef=function(e){this.captcha=e},r.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return c.a.createElement("div",g({},t,{ref:this.handleRecaptchaRef}))},n}(c.a.Component);b.displayName="ReCAPTCHA",b.propTypes={sitekey:A.a.string.isRequired,onChange:A.a.func,grecaptcha:A.a.object,theme:A.a.oneOf(["dark","light"]),type:A.a.oneOf(["image","audio"]),tabindex:A.a.number,onExpired:A.a.func,onErrored:A.a.func,size:A.a.oneOf(["compact","normal","invisible"]),stoken:A.a.string,hl:A.a.string,badge:A.a.oneOf(["bottomright","bottomleft","inline"])},b.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var v=a(26),E=a.n(v);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var N={},w=0;var x="onloadcallback";var O,S,R=(O=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+x+"&render=explicit"},S=(S={callbackName:x,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",a=function(t){var a,n;function r(e,a){var n;return(n=t.call(this,e,a)||this).state={},n.__scriptURL="",n}n=t,(a=r).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var i=r.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+w++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"===typeof O?O():O,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=N[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[S.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),a=this.asyncScriptLoaderGetScriptLoaderID(),n=S,r=n.globalName,i=n.callbackName,o=n.scriptId;if(r&&"undefined"!==typeof window[r]&&(N[t]={loaded:!0,observers:{}}),N[t]){var s=N[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var l={};l[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)},N[t]={loaded:!1,observers:l};var c=document.createElement("script");for(var m in c.src=t,c.async=!0,S.attributes)c.setAttribute(m,S.attributes[m]);o&&(c.id=o);var d=function(e){if(N[t]){var a=N[t].observers;for(var n in a)e(a[n])&&delete a[n]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),c.onload=function(){var e=N[t];e&&(e.loaded=!0,d((function(t){return!i&&(t(e),!0)})))},c.onerror=function(){var e=N[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(c)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===S.removeOnUnmount)for(var t=document.getElementsByTagName("script"),a=0;a<t.length;a+=1)t[a].src.indexOf(e)>-1&&t[a].parentNode&&t[a].parentNode.removeChild(t[a]);var n=N[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===S.removeOnUnmount&&delete N[e])},i.render=function(){var t=S.globalName,a=this.props,n=(a.asyncScriptOnLoad,a.forwardedRef),r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(r[t]="undefined"!==typeof window[t]?window[t]:void 0),r.ref=n,Object(l.createElement)(e,r)},r}(l.Component),n=Object(l.forwardRef)((function(e,t){return Object(l.createElement)(a,y({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:A.a.func},E()(n,e)})(b),C=a(32),T=a(25),k=a(56),L=a(57),B=a(58),P=a.n(B),I=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).sendMessageWithEmailJs=function(){P.a.send("gmail","physiopraxis_template",e.state,"user_b7QIA4bch8ZLSi8wVsjzY").then((function(t){"OK"===t.text&&(e.props.dispatch(Object(p.i)(e.props.bookingMessageStatus)),console.log("SUCCES",t.text))}),(function(e){console.log("FAILED",e.text)}))},e.handleSubmit=function(t){t.preventDefault(),e.sendMessageWithEmailJs(),e.setState({email:"",name:"",date:"",time:"",phone:"",message:""})},e.handleOnChange=function(t){var a=t.target.name;e.setState(Object(n.a)({},a,t.target.value))},e.handleOnChangeReCAptcha=function(e){console.log("Captcha value:",e)},e.checkDateValidity=function(e){return 0===Object(u.c)(e)?"":e},e.state={email:"",name:"",date:"",time:"",phone:"",message:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.sendingMessageStatus,n=e.handleOnChangeReCAptcha,r=t.location.pathname,i=this.state,o=i.email,s=i.name,l=i.date,m=i.time,d=i.phone,p=i.message;return c.a.createElement(C.a,{onSubmit:this.handleSubmit,className:"appointment ".concat("/appointmentPage"===r?"substractMarginBottom":""," ")},c.a.createElement("div",{className:"appointment-text"},c.a.createElement("h1",null,"Termin vereinbaren"),c.a.createElement("h6",null,"Wir freuen uns auf Sie")),c.a.createElement(T.a,{onChange:this.handleOnChange,type:"text",placeholder:"Email","aria-label":"Email",value:o,name:"email",required:!0}),c.a.createElement("div",{className:"appointment-inputs"},c.a.createElement(C.a.Group,{className:"group"},c.a.createElement(T.a,{onChange:this.handleOnChange,type:"text",placeholder:"Name","aria-label":"Name",value:s,name:"name",required:!0}),c.a.createElement(C.a.Label,null,"Datum"),c.a.createElement(T.a,{onChange:this.handleOnChange,type:"date",placeholder:"Datum","aria-label":"Datum",min:Object(u.f)(),value:this.checkDateValidity(l),name:"date",required:!0})),c.a.createElement(C.a.Group,{className:"group"},c.a.createElement(T.a,{onChange:this.handleOnChange,type:"tel",placeholder:"Telefonnummer","aria-label":"Telefonnummer","aria-describedby":"basic-addon1",value:d,name:"phone",required:!0}),c.a.createElement(C.a.Label,null,"Uhrzeit"),c.a.createElement(T.a,{onChange:this.handleOnChange,type:"time",min:"08:00",max:"".concat(6===Object(u.c)(l)?"14:00":"20:00"),placeholder:"Uhrzeit","aria-label":"Uhrzeit","aria-describedby":"basic-addon1",value:m,name:"time",required:!0}))),c.a.createElement(C.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Sonderwunsch...",value:p,name:"message"}),c.a.createElement("div",{className:"buttonAndPopUp-container"},c.a.createElement(k.a,{buttonName:"Vereinbaren"}),c.a.createElement(L.a,{messageStatus:a},"Sent"),c.a.createElement(R,{sitekey:"".concat("6LdypNMZAAAAAIN1Q2Eqzrz4PcXWCK5J-Ad3eT_B"),onChange:n,className:"g-recaptcha"})))}}]),a}(l.Component);t.a=Object(d.h)(Object(m.b)((function(e){return{sendingMessageStatus:e.userReducer.sendingMessageStatus}}))(I))},126:function(e,t,a){"use strict";var n=a(44),r=a(0),i=a.n(r),o=(a(119),a(10)),s=a(6),l=a(27),c=a(28),m=a(29),d=a(31),u=a(30),p=(a(120),a(32)),h=a(25),A=a(56),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleOnChange=function(t){var a=t.target.name;e.setState(Object(l.a)({},a,t.target.value))},e.state={name:"",message:"",selectionAvatar:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.active,n=t.handleSubmitTestimonialOrPost,o=this.state,s=o.name,l=o.message,c=o.selectionAvatar;return i.a.createElement(r.Fragment,null,a?i.a.createElement(p.a,{onSubmit:function(t){n(t,s,l,c),e.setState({name:"",message:"",selectionAvatar:""})},className:"testimonialForm"},i.a.createElement("div",{className:"appointment-text"},i.a.createElement("h1",null,"New Testimonial")),i.a.createElement(p.a.Group,{className:"testimonialForm-group"},i.a.createElement(h.a,{className:"testimonialForm-name",onChange:this.handleOnChange,type:"text",placeholder:" Name","aria-label":"Name",value:s,name:"name",required:!0}),i.a.createElement(p.a.Control,{onChange:this.handleOnChange,as:"select",className:"mr-sm-2 testimonialForm-select",id:"inlineFormCustomSelect",name:"selectionAvatar",custom:!0},i.a.createElement("option",{value:"0"},"Sex"),i.a.createElement("option",{value:"https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/avatars%2Fmale-avatar.png?alt=media&token=e911afab-a358-4c49-8084-60cff06fc0fb"},"m\xe4nnlich"),i.a.createElement("option",{value:"https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/avatars%2Ffemale-avatar.png?alt=media&token=011ad62f-0def-48b9-b38e-d845f8f5c771"},"weiblich"))),i.a.createElement(p.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Text...",value:l,name:"message"}),i.a.createElement(A.a,{buttonName:"Send"})):null)}}]),a}(r.Component),f=Object(s.h)(g),b=(a(121),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleOnChange=function(t){var a=t.target.name;e.setState(Object(l.a)({},a,t.target.value))},e.state={postTitle:"",postText:"",postImageLink:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.active,n=t.handleSubmitTestimonialOrPost,o=this.state,s=o.postTitle,l=o.postText,c=o.postImageLink;return i.a.createElement(r.Fragment,null,a?i.a.createElement(p.a,{onSubmit:function(t){n(t,s,l,c),e.setState({postTitle:"",postText:"",postImageLink:""})},className:"postForm"},i.a.createElement("div",{className:"appointment-text"},i.a.createElement("h1",null,"New Post")),i.a.createElement(p.a.Group,{className:"post-group"},i.a.createElement(h.a,{className:"post-image",onChange:this.handleOnChange,type:"text",placeholder:"Post ImageLink","aria-label":"Post ImageLink",value:c,name:"postImageLink",required:!0}),i.a.createElement(h.a,{className:"post-title-input",onChange:this.handleOnChange,type:"text",placeholder:"Post Title","aria-label":"Post Title",value:s,name:"postTitle",required:!0})),i.a.createElement(p.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Post Text...",value:l,name:"postText"}),i.a.createElement(A.a,{buttonName:"Send"})):null)}}]),a}(r.Component)),v=a(17),E=a(7);t.a=Object(o.b)()((function(e){var t=e.dispatch,a=e.currentUser,o=e.visible,l=Object(r.useState)(!1),c=Object(n.a)(l,2),m=c[0],d=c[1],u=Object(s.g)().pathname,p=function(){d(!m)},h=function(e,a,n,r){e.preventDefault(),"/"===u?(Object(v.b)(a,n,r),t(Object(E.g)())):"/news"===u&&(Object(v.a)(a,n,r),t(Object(E.f)())),d(!m)};return i.a.createElement(r.Fragment,null,m?i.a.createElement("img",{className:"minus-button ".concat("/news"===u?"positionInNewsPage":""),onClick:p,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADGElEQVRo3t2az0vkMBTHv+9lWoJDCy6DiIfBo4ggOLDePe4fsLA3z3NYLHjw5P/hX7D4T3hdXBARRTzKehH0JHRnoLbZw2Skie38bO3UL+Qykyafl6QvLy8lFCApZTuKor0kSXYBbAJYB9BSSi0BABH9A/AM4B7ALTOfO45z1u/3/xbR/6zQK8x8SESXANQshYgumflQSrnyYeCu67aZ+QRAb1bwjNJj5hPXddulgXueJ5n5uGDwLEOOPc+Tk3LRJJUcx9l6fX39pZTayqmSENEfIjojogshxF2z2Xzc3t5+AYCrqys/DMPVOI43lFIdpdSeUuorAM6EIrppNBo/oii6mXvkhRDfAYQ5I/bAzEdSyrVp25VSrjHzEYCHnLZD3fdc8D9zGn9i5q7v++68A+T7vsvMXQBPWX0JIQ5mhT/IapCITqWUrXnBbUkpW0R0WogReurshiIhRDcIAp6qsSkUBAELIboAogwjJltOjuNs4f2a7zUajW9lgdvSfdneLtRs+fI8TxLRtfVg9JHwlhHGTBDR9UgXq/28PXXdj4YfSvdt8GjG99K7oDFtRHRa5pofpyAIOOPF7mXu2Do8MFxlGd5mWmkGw8VqVqPSCqzR1755IaRZjFkwAkBmPrQqPBSxSRUlzWLs2Jp5IDsk1lv8QkkzGaE4gMFhBObox7PENmVLM8VpVillG0KIfcuy31XD5kmzpV38PutjYLrSWdWgIwww2JIk2WUMzrDpShdVg44wwGbbZAwO4G8SQtxVDZqnDLZ1BmBsVs1m83FMO2UdJ4clVxlsLR6mPoba2dl5qXqk89TpdAw2pdRSZXFOYSIiI/ZfXl7+MuaRypaQZku7/JAxyJi9KQzD1XE2l1xylcH2zBik+94Ux/HGPDNapjLY7hnAbfoXpVSnatA8ZbDdMjOfW5X2qgYdYYDBxszn9Q/mgJqH0/rPeh9oan+k1JXqe6gHPkFaBah5Ygv4BKlFoObJ3aFqnV5PGVHfC45xRqAOV0wpIxb6ku/zX7MOtagX3VOrtp8a2FqUjz0megcmMKayz23+A5ASigYFmWLQAAAAAElFTkSuQmCC",alt:"minus icon",role:"button",style:a?{display:"initial"}:{display:"none"}}):i.a.createElement("img",{className:"plus-button ".concat(o?"hidden":""," ").concat("/news"===u?"positionInNewsPage":""),onClick:p,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFWUlEQVRo3t2aX2gURxzHf7/fZJewaW2LZxSxqWIkm9wmnpHE9zwV+yikiBijCAWPlval4h8aLGrRF+tDig9CQbCCtA+++BjoW5OiPc0mriRSCdZaPZUIt4Tbm5k+3N52d3IXcn+SNf3CPuxv/uznNzM7+5uZRWiATCvV5nnegJRyDwB0AcBWAJmQEgwAAERwATALAI8BYBoRxzVNG3PszFy9z8Y6oFs9zxuSUh6QUqZqejhiBhGva5p2zbEzz1fFgY7kzjbP805JKYcAoLnmpotqARGvaZp27uHUvap6ZdkOdO/qa3Zd92shxIkGgi9yhIi+Mwzj4uQfvy80zIEdnd0W5/yGlNKqkEUg4gQAjBHRHSJyDMN4luzqegMAMDU9vc513U1CCFMIsRsABqSU/QBAZaEQbcbY/pkHk3bdDrSb1iDn/EeA4gup6AkRjfpj+Gk1TW1aqc2e5w0JIdIAsKVMFpcxdnjWsW/W7MD2juQXQojLZZKyRDTS0tJy9f7diXw14Kp6evv1XC53VAhxBgASajoRffXo4dT3VTuwvSP5pRDi0qICiDd1XU87diZbD7gq00ol8vn8qJRysBonyo7BdtMaLANfYIyljwwf2t9oeAAAx85kjwwf2s8YSwNAIZwmhLjUblqD5cot6oEdnd1WoVAYh+iYX2CM7Zt17NuNBq/QgHs5579AdLZzm5qa9qgvdqQHunf1NXPObyjwhdWEBwCYdezbjLF9EO0Jg3N+o3tXX2QKZ+Gbd9/74KSU8tNIBsY+n3Xsn1YLvqRX2eczidZNL6WUn4TMrYVCwXv98sWvJUPQAx3JnW3+RyoQIt4cHjp4pRaAbTs6ZfiqpY7hoYNXEDEyjQohTnQkd7YtcsDzvFMQHXNZXdfTp08eFyvc2BV1+uRxoet6GgDCk0azz/qfA6aVavVjm0BENLISs021cuxMlohGwjYp5ZBppVoDBzzPUwOzJy0tLVfjhi/JZ3kSMjX7zEUHpJQHwgWIaLTeL2wjdf/uRJ6IRsO2EjOZVqpNieeFpmnX4oZW5TMF76OUMmVaqTbyPG8gnBERJ6oNzFZDjp156ke8gTzPGyB/GRjWWNywSyjCJqXcQ1BcwwYiojtxU1ZSGbYuAoCtSiYnbtAlHFDZtjaBEoMbhvFsqUpq/aout9yfMw8qhviGYTybn58PmxIkpYystHq6rTeNb7vGSGWTUhpUa2VviwgR3bDh/qS9Lm6oSlLZENFtgmKgFER3rutuAoBXlSpZaoyGpY755ZZbSj5bWFmC4nZfICGEuTLtV7/KsD0mAJhWMu2OG3QJB1S2aULEccU4sNwKY5Aa9oyTpmnq57nftFKb4yZVZVqpzf5uXiBN08bIsTNziJgJ2akUa79N8pmCaR8RM46dmSP/5no4sxAi3dPbr8cNXVJPb7/ub0EGKjETQBBrh3eDt+RyuaNxg5fks4T3TxdKaxYCAHDszHNEjCxihBBnTCuVWP5jVkamlUr4+6aBEDE4EAnGlKZp5yDaC4l8Pj969vyF2MKNs+cvUD6fH4VowLngsxadCRfY3pH8RvWWMZaedewf4nCg3Uwe41xE1sJENPLo4dS3wX040TCMi4gY2XvknF9uN629qw9v7eU8urWPiLZhGBcjNrXgmt7cBQCYeTBpM8YOK+ZmzvmtdjN5bCXfibPnL1Bx2PBbCjwwxg6XO3Ja8wccrFKFr1+++G39ho3zUsqPlaQk5/zI+g0bcx9+tO3eP3//xesB7+nt199Z9/5nhULhZwDoqwYe4P9+yFdS7cesnW8AMN5j1pLW9EF3WGv2VwNVa/ZnjwrOxPa7zb+CGcfJ4ADzigAAAABJRU5ErkJggg==",alt:"plus icon",role:"button",style:a?{display:"initial"}:{display:"none"}}),"/"===u?i.a.createElement(f,{active:m,handleSubmitTestimonialOrPost:h}):i.a.createElement(b,{active:m,handleSubmitTestimonialOrPost:h}))}))},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(128),a(43)),o=(a(129),function(){return r.a.createElement("div",{className:"container-fluid hero-section"},r.a.createElement("div",{className:"hero-img"},r.a.createElement("div",{className:"container hero-img-title-container"},r.a.createElement("div",{className:"full-title",lang:"de"},r.a.createElement("div",{className:"background-for-text"},r.a.createElement("h1",{className:"hero-img-title"},"Praxis",r.a.createElement("span",{className:"hero-img-title-span"}," f\xfcr"))),r.a.createElement("div",{className:"background-for-text"},r.a.createElement("h1",{className:"hero-img-title"},"Physiotherapie")),r.a.createElement("div",{className:"moto"},r.a.createElement("h6",{className:"moto-text"},"QUALIT\xc4T"),r.a.createElement("h6",{className:"moto-text"},"RESPEKT"),r.a.createElement("h6",{className:"moto-text"},"INNOVATION"))))),r.a.createElement("div",{className:" container hero-description"},r.a.createElement("div",{className:"box box1"},r.a.createElement("div",{className:"boxTitle"},r.a.createElement("h4",null,"Professionelle Leistungen")),r.a.createElement("div",{className:"boxTitle-text"},r.a.createElement("p",null,r.a.createElement("strong",null,"PhysioPraxis Marian")," bietet seinen Kunden Flexibilit\xe4t bei Terminen, die M\xf6glichkeit englischsprachiger Sitzungen, Innovation durch Fortbildung und nat\xfcrlich, physiotherapeutische Beratung."))),r.a.createElement("div",{className:"box box2"},r.a.createElement("div",{className:"boxTitle-text"},r.a.createElement("p",null,r.a.createElement("strong",null,"PhysioPraxis Marian")," ist ein vertrauensw\xfcrdiger Partner aller gesetzlichen und privaten Krankenkassen in Deutschland.")),r.a.createElement("div",{className:"boxTitle boxTitle-box2"},r.a.createElement("h4",null,"Krankenkassen Partner"))),r.a.createElement("div",{className:"box box3"},r.a.createElement("div",{className:"boxTitle"},r.a.createElement("h4",null,"Darmstadt Mitte")),r.a.createElement("div",{className:"boxTitle-text"},r.a.createElement("p",null,"Der Standort der Praxis bietet seinen Klienten schnellen und einfachen Zugang zu verschiedenen Transportmitteln wie Auto, Bus, Stra\xdfenbahn. Au\xdferdem stehen vor Ort 2 Parkpl\xe4tze und Abstellm\xf6glichkeiten f\xfcr Fahrr\xe4der zur Verf\xfcgung. Wir sind in Ihrer N\xe4he!")))))}),s=(a(130),a.p+"static/media/semnaturaMarian.6f966c2c.png"),l=function(){return r.a.createElement("div",{className:"container-fluid professionalPreview-container"},r.a.createElement("div",{className:"container professionalPreview-section"},r.a.createElement("div",{className:"professionalPreview-text"},r.a.createElement("h1",null,"Nachricht des Praxisinhabers"),r.a.createElement("hr",null),r.a.createElement("p",null,"Ich bin Marian, Ihr Therapeut und Partner f\xfcr Ihren Gesundungsprozess. Mit einer Erfahrung von \xfcber 12 Jahren in der Physiotherapie, biete ich h\xf6chste Qualit\xe4t in der Behandlung und k\xf6rperlichen Heilung jedes Patienten."),r.a.createElement("p",null,"Durch jeden teilnehmenden Kurs, zusammen mit anderen Aktivit\xe4ten zur pers\xf6nlichen Entwicklung, bringe ich Innovation f\xfcr die Patienten in jeder Therapiesitzung der Behandlung. Das Ziel der PHYSIOPRAXIS MARIAN ist die Lebensqualit\xe4t f\xfcr jeden Patienten zu verbessern und die Faktoren zu beseitigen, die ihm Unbehagen oder Schmerzen verursachen."),r.a.createElement("div",{className:"signature-container"},r.a.createElement("h4",null,"Marian Popescu"),r.a.createElement("img",{src:s,alt:"signature"}))),r.a.createElement("div",{className:"professionalPreview-img"},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/home%2FMarian_change_color.png?alt=media&token=e781efc4-13c1-48fd-81f4-20fe2e6825cf",alt:"the doctor"}))))},c=(a(131),a(10)),m=a(125),d=a(126),u=(a(132),function(e){var t=e.text,a=e.image,n=e.name;return r.a.createElement("div",{className:"testimonial"},r.a.createElement("div",{className:"quote"},r.a.createElement("img",{src:"data:image/png;base64,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",alt:"quote"})),r.a.createElement("div",{className:"quote-text"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"avatar"},r.a.createElement("div",{className:"avatar-face"},r.a.createElement("img",{src:a,alt:"a man"})),r.a.createElement("h6",null,n)))}),p=Object(c.b)((function(e){return{currentUser:e.userReducer.currentUser,testimonials:e.userReducer.testimonials}}))((function(e){var t=e.currentUser,a=e.testimonials;return r.a.createElement("div",{className:"container-fluid appointment-container",id:"scroll-to-appointment"},r.a.createElement("div",{className:"container appointment-section"},r.a.createElement(m.a,null),r.a.createElement("div",{className:"testimonials-subsection"},r.a.createElement("div",{className:"testimonial-title-container"},r.a.createElement("h1",{className:"testimonials-title"},"Testimonials"),r.a.createElement(d.a,{currentUser:t})),r.a.createElement("div",{className:"testimonials-container"},Object.values(a).map((function(e){return r.a.createElement(u,{key:e.id,text:e.message,image:e.selectionAvatar,name:e.name})}))))))})),h=a(44),A=(a(133),a(134),function(){return r.a.createElement("div",null,r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.237654455203!2d8.643381315883717!3d49.875563436500755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd79958346d985%3A0xb09e51725614442!2sPHYSIOPRAXIS%20MARIAN!5e0!3m2!1sen!2sde!4v1600336937251!5m2!1sen!2sde",title:"PhysioPraxis Marian",width:"100%",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0"}))}),g=(a(135),function(e){var t=e.handleDisplay,a=e.display;return r.a.createElement("div",{className:"additionalInfoButton",onClick:t,role:"button"},r.a.createElement("img",{src:a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABFklEQVRo3u2XwQ2DMBAEV3mkhlSRelJMWkopqSQNEMk+8rqPBbbBGO9KWYkPr5sdAwewEjN7hRBuUI2ZzWb2iTE+Rs/SAuCXno0EQM/GAoCWjQyAho0CAL+NhWHfUjbSQadpusYYn2b2lbCRDuj3Qwh3CRtrAAAgYSMH4KG2UQMAENuoBfDQ2dgKAJDZ2APgobDRAgAQ2GgF8AyzcRQAMMjGkQCeU230AABOtNELwNPdRm8AoLONMwA8LTYuPQcbmv8RKkT2IZZ+jcp+yKRXCdllTnqdlv2hGd56CwBF63sAqFrfCkDXei0Abes1ANSt5wAkWs8BSLReAOBvfQMAZ+uVALytFwD4W88AaLS+AKDVegIg0foPpOTlkt+8Rq8AAAAASUVORK5CYII=":"data:image/png;base64,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",alt:"arrow icon"}))}),f=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"container-fluid map"},r.a.createElement(A,null),r.a.createElement(g,{handleDisplay:function(){i(!a)},display:a}),r.a.createElement("div",{className:"additionalInfo",style:a?{display:"flex"}:{display:"none"}},r.a.createElement("div",{className:"weg"},r.a.createElement("ul",null,r.a.createElement("h5",null,"WEGBESCHREIBUNG"),r.a.createElement("h6",null,"Parkm\xf6glichkeiten"),r.a.createElement("li",null,"2 patienten Parkpl\xe4tze stehen zur Verf\xfcgung")),r.a.createElement("ul",null,r.a.createElement("h6",null,"Mit \xf6ffentlichen Verkersmittel"),r.a.createElement("p",null,"Haltestelle:"),r.a.createElement("li",null,"Klinikum(150m)"),r.a.createElement("li",null,"Kasinostr.(150m)"),r.a.createElement("li",null,"Rhein-/Neckarstr. (500m)"),r.a.createElement("li",null,"Willy-Brandt-Platz (350m)")))))};t.default=function(){return r.a.createElement(i.b,null,r.a.createElement(i.a,null,r.a.createElement("meta",{name:"description",content:"Praxis f\xfcr Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibul\xe4re Dysfunktionen Hei\xdf- und Kalttherapie"}),r.a.createElement("title",null,"PhysioPraxis Marian | Home")),r.a.createElement(o,null),r.a.createElement(l,null),r.a.createElement(p,null),r.a.createElement(f,null))}}}]);
//# sourceMappingURL=3.f4ca8d95.chunk.js.map