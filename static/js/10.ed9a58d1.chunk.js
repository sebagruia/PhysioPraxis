(this.webpackJsonpphysiopraxis_marian=this.webpackJsonpphysiopraxis_marian||[]).push([[10],{147:function(e,t,n){"use strict";var r=n(1),a=n(3),o=n(0),i=n.n(o);var u=function(e){var t=Object(o.useRef)(e);return Object(o.useEffect)((function(){t.current=e}),[e]),t};function c(e){var t=u(e);return Object(o.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var s=function(e,t){var n=Object(o.useRef)(!0);Object(o.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function l(e){var t=function(e){var t=Object(o.useRef)(e);return t.current=e,t}(e);Object(o.useEffect)((function(){return function(){return t.current()}}),[])}var f=Math.pow(2,31)-1;function p(e,t,n){var r=n-Date.now();e.current=r<=f?setTimeout(t,r):setTimeout((function(){return p(e,t,n)}),f)}function d(){var e=function(){var e=Object(o.useRef)(!0),t=Object(o.useRef)((function(){return e.current}));return Object(o.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(o.useRef)();return l((function(){return clearTimeout(t.current)})),Object(o.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=f?t.current=setTimeout(r,a):p(t,r,Date.now()+a))},clear:n}}),[])}var v=n(4),h=n.n(v);function m(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var b=/([A-Z])/g;var E=/^ms-/;function x(e){return function(e){return e.replace(b,"-$1").toLowerCase()}(e).replace(E,"-ms-")}var O=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var y=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(x(t))||function(e,t){return m(e).getComputedStyle(e,t)}(e).getPropertyValue(x(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!O.test(e))}(a)?n+=x(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(x(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},S=!("undefined"===typeof window||!window.document||!window.document.createElement),g=!1,j=!1;try{var C={get passive(){return g=!0},get once(){return j=g=!0}};S&&(window.addEventListener("test",C,C),window.removeEventListener("test",C,!0))}catch(fe){}var k=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!j){var a=r.once,o=r.capture,i=n;!j&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,g?r:o)}e.addEventListener(t,n,r)};var w=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var N=function(e,t,n,r){return k(e,t,n,r),function(){w(e,t,n,r)}};function T(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=N(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function D(e,t,n,r){null==n&&(n=function(e){var t=y(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=T(e,n,r),o=N(e,"transitionend",t);return function(){a(),o()}}var I=n(12),R=n(2),L=n.n(R),M=n(23),_=n.n(M),P=!1,A=i.a.createContext(null),F="unmounted",K="exited",U="entering",X="entered",V="exiting",W=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=K,r.appearStatus=U):a=X:a=t.unmountOnExit||t.mountOnEnter?F:K,r.state={status:a},r.nextCallback=null,r}Object(I.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===F?{status:K}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==U&&n!==X&&(t=U):n!==U&&n!==X||(t=V)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===U?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===K&&this.setState({status:F})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[_.a.findDOMNode(this),r],o=a[0],i=a[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||P?this.safeSetState({status:X},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:U},(function(){t.props.onEntering(o,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:X},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:_.a.findDOMNode(this);t&&!P?(this.props.onExit(r),this.safeSetState({status:V},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:K},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:K},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:_.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===F)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(A.Provider,{value:null},"function"===typeof n?n(e,r):i.a.cloneElement(i.a.Children.only(n),r))},t}(i.a.Component);function H(){}W.contextType=A,W.propTypes={},W.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:H,onEntering:H,onEntered:H,onExit:H,onExiting:H,onExited:H},W.UNMOUNTED=F,W.EXITED=K,W.ENTERING=U,W.ENTERED=X,W.EXITING=V;var G=W;n(47);function J(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Y(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function Z(e,t){return Object.keys(t).reduce((function(n,i){var u,c=n,s=c[J(i)],l=c[i],f=Object(a.a)(c,[J(i),i].map(Y)),p=t[i],d=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],u=a[1],c=void 0!==e,s=r.current;return r.current=c,!c&&s&&i!==t&&u(t),[c?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(l,s,e[p]),v=d[0],h=d[1];return Object(r.a)({},f,((u={})[i]=v,u[p]=h,u))}),e)}function $(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function B(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function q(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}$.__suppressDeprecationWarning=!0,B.__suppressDeprecationWarning=!0,q.__suppressDeprecationWarning=!0;var z=n(65),Q=Object(z.a)("carousel-caption"),ee=n(5),te=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,u=e.bsPrefix,c=e.children,s=e.className,l=Object(a.a)(e,["as","bsPrefix","children","className"]),f=h()(s,Object(ee.a)(u,"carousel-item"));return i.a.createElement(o,Object(r.a)({ref:t},l,{className:f}),c)}));te.displayName="CarouselItem";var ne=te;function re(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}var ae=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function oe(e){return!e||"#"===e.trim()}var ie=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,u=e.disabled,c=e.onKeyDown,s=Object(a.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=s.href,n=s.onClick;(u||oe(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return oe(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),u&&(s.tabIndex=-1,s["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},s,{onClick:l,onKeyDown:ae((function(e){" "===e.key&&(e.preventDefault(),l(e))}),c)}))}));ie.displayName="SafeAnchor";var ue=ie;var ce={bsPrefix:L.a.string,as:L.a.elementType,slide:L.a.bool,fade:L.a.bool,controls:L.a.bool,indicators:L.a.bool,activeIndex:L.a.number,onSelect:L.a.func,onSlide:L.a.func,onSlid:L.a.func,interval:L.a.number,keyboard:L.a.bool,pause:L.a.oneOf(["hover",!1]),wrap:L.a.bool,touch:L.a.bool,prevIcon:L.a.node,prevLabel:L.a.string,nextIcon:L.a.node,nextLabel:L.a.string},se={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var le=i.a.forwardRef((function(e,t){var n=Z(e,{activeIndex:"onSelect"}),l=n.as,f=void 0===l?"div":l,p=n.bsPrefix,v=n.slide,m=n.fade,b=n.controls,E=n.indicators,x=n.activeIndex,O=n.onSelect,y=n.onSlide,S=n.onSlid,g=n.interval,j=n.keyboard,C=n.onKeyDown,k=n.pause,w=n.onMouseOver,N=n.onMouseOut,T=n.wrap,I=n.touch,R=n.onTouchStart,L=n.onTouchMove,M=n.onTouchEnd,_=n.prevIcon,P=n.prevLabel,A=n.nextIcon,F=n.nextLabel,K=n.className,U=n.children,X=Object(a.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),V=Object(ee.a)(p,"carousel"),W=Object(o.useRef)(null),H=Object(o.useState)("next"),J=H[0],Y=H[1],$=Object(o.useState)(!1),B=$[0],q=$[1],z=Object(o.useState)(x||0),Q=z[0],te=z[1];B||x===Q||(W.current?Y(W.current):Y((x||0)>Q?"next":"prev"),v&&q(!0),te(x||0)),Object(o.useEffect)((function(){W.current&&(W.current=null)}));var ne,ae=0;!function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(U,(function(e,t){++ae,t===x&&(ne=e.props.interval)}));var oe=u(ne),ie=Object(o.useCallback)((function(e){if(!B){var t=Q-1;if(t<0){if(!T)return;t=ae-1}W.current="prev",O&&O(t,e)}}),[B,Q,O,T,ae]),ce=c((function(e){if(!B){var t=Q+1;if(t>=ae){if(!T)return;t=0}W.current="next",O&&O(t,e)}})),se=Object(o.useRef)();Object(o.useImperativeHandle)(t,(function(){return{element:se.current,prev:ie,next:ce}}));var le=c((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(se.current)&&ce()})),fe="next"===J?"left":"right";s((function(){v||(y&&y(Q,fe),S&&S(Q,fe))}),[Q]);var pe=V+"-item-"+J,de=V+"-item-"+fe,ve=Object(o.useCallback)((function(e){!function(e){e.offsetHeight}(e),y&&y(Q,fe)}),[y,Q,fe]),he=Object(o.useCallback)((function(){q(!1),S&&S(Q,fe)}),[S,Q,fe]),me=Object(o.useCallback)((function(e){if(j&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ie(e);case"ArrowRight":return e.preventDefault(),void ce(e)}C&&C(e)}),[j,C,ie,ce]),be=Object(o.useState)(!1),Ee=be[0],xe=be[1],Oe=Object(o.useCallback)((function(e){"hover"===k&&xe(!0),w&&w(e)}),[k,w]),ye=Object(o.useCallback)((function(e){xe(!1),N&&N(e)}),[N]),Se=Object(o.useRef)(0),ge=Object(o.useRef)(0),je=Object(o.useState)(!1),Ce=je[0],ke=je[1],we=d(),Ne=Object(o.useCallback)((function(e){Se.current=e.touches[0].clientX,ge.current=0,I&&ke(!0),R&&R(e)}),[I,R]),Te=Object(o.useCallback)((function(e){e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-Se.current,L&&L(e)}),[L]),De=Object(o.useCallback)((function(e){if(I){var t=ge.current;if(Math.abs(t)<=40)return;t>0?ie(e):ce(e)}we.set((function(){ke(!1)}),g||void 0),M&&M(e)}),[I,ie,ce,we,g,M]),Ie=null!=g&&!Ee&&!Ce&&!B,Re=Object(o.useRef)();Object(o.useEffect)((function(){var e,t;if(Ie)return Re.current=window.setInterval(document.visibilityState?le:ce,null!=(e=null!=(t=oe.current)?t:g)?e:void 0),function(){null!==Re.current&&clearInterval(Re.current)}}),[Ie,ce,oe,g,le]);var Le=Object(o.useMemo)((function(){return E&&Array.from({length:ae},(function(e,t){return function(e){O&&O(t,e)}}))}),[E,ae,O]);return i.a.createElement(f,Object(r.a)({ref:se},X,{onKeyDown:me,onMouseOver:Oe,onMouseOut:ye,onTouchStart:Ne,onTouchMove:Te,onTouchEnd:De,className:h()(K,V,v&&"slide",m&&V+"-fade")}),E&&i.a.createElement("ol",{className:V+"-indicators"},re(U,(function(e,t){return i.a.createElement("li",{key:t,className:t===Q?"active":void 0,onClick:Le?Le[t]:void 0})}))),i.a.createElement("div",{className:V+"-inner"},re(U,(function(e,t){var n=t===Q;return v?i.a.createElement(G,{in:n,onEnter:n?ve:void 0,onEntered:n?he:void 0,addEndListener:D},(function(t){return i.a.cloneElement(e,{className:h()(e.props.className,n&&"entered"!==t&&pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&de)})})):i.a.cloneElement(e,{className:h()(e.props.className,n&&"active")})}))),b&&i.a.createElement(i.a.Fragment,null,(T||0!==x)&&i.a.createElement(ue,{className:V+"-control-prev",onClick:ie},_,P&&i.a.createElement("span",{className:"sr-only"},P)),(T||x!==ae-1)&&i.a.createElement(ue,{className:V+"-control-next",onClick:ce},A,F&&i.a.createElement("span",{className:"sr-only"},F))))}));le.displayName="Carousel",le.propTypes=ce,le.defaultProps=se,le.Caption=Q,le.Item=ne;t.a=le}}]);
//# sourceMappingURL=10.ed9a58d1.chunk.js.map