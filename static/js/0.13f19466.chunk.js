(this.webpackJsonpphysiopraxis_marian=this.webpackJsonpphysiopraxis_marian||[]).push([[0],{126:function(t,e,n){"use strict";var r=n(1);n(0),n(127);e.a=function(t){var e=t.children,n=t.onClick;return Object(r.jsx)("div",{onClick:n,className:"continue-reading",role:"button",children:Object(r.jsx)("p",{children:e})})}},127:function(t,e,n){},130:function(t,e,n){"use strict";var r=n(1),o=n(0),i=n.n(o),a=(n(148),n(7)),A=n(126),c=n(38),s=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return s(e,t),e}(Error);function u(t,e){if(!t)throw new l(e)}function p(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}var h=n(5),d=n.n(h),w=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function A(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,A)}c((r=r.apply(t,e||[])).next())}))},g=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:A(0),throw:A(1),return:A(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function A(i){return function(A){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(A){i=[6,A],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,A])}}},m=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},v=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},j=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},y=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function k(t,e,n){var r=e.height,o=e.width,i=m(e,["height","width"]),a=b({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),A=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===A||A.closed)&&(window.clearInterval(c),n(A))}catch(t){console.error(t)}}),1e3);return A}var O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,A=void 0===a?"windowCenter":a,c=n.windowWidth,s=void 0===c?550:c;k(t,b({height:i,width:s},"windowCenter"===A?j(s,i):y(s,i)),r)},e.handleClick=function(t){return f(e,void 0,void 0,(function(){var e,n,r,o,i,a,A,c,s,l;return g(this,(function(u){switch(u.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,A=e.openShareDialogOnClick,c=e.opts,s=o(a,c),r?[2]:(t.preventDefault(),n?(l=n(),v(l)?[4,l]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return A&&this.openShareDialog(s),i&&i(t,s),[2]}}))}))},e}return w(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,o=t.disabledStyle,a=t.forwardedRef,A=(t.networkLink,t.networkName),c=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),s=t.style,l=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,m(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=d()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=b(b(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&o);return i.a.createElement("button",b({},l,{"aria-label":l["aria-label"]||A,className:u,onClick:this.handleClick,ref:a,style:p}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(o.Component),V=function(){return(V=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var K=function(t,e,n,r){function a(o,a){var A=n(o),c=V({},o);return Object.keys(A).forEach((function(t){delete c[t]})),i.a.createElement(O,V({},r,c,{forwardedRef:a,networkName:t,networkLink:e,opts:n(o)}))}return a.displayName="ShareButton-"+t,Object(o.forwardRef)(a)};var C=K("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return u(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+p({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400});var x=K("twitter",(function(t,e){var n=e.title,r=e.via,o=e.hashtags,i=void 0===o?[]:o,a=e.related,A=void 0===a?[]:a;return u(t,"twitter.url"),u(Array.isArray(i),"twitter.hashtags is not an array"),u(Array.isArray(A),"twitter.related is not an array"),"https://twitter.com/share"+p({url:t,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:A.length>0?A.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),S=n(43);e.a=function(t){var e=t.id,n=t.date,o=t.image,i=t.title,s=t.text,l=Object(a.f)(),u=l.location.pathname,p=function(){l.push("/news/".concat(Object(S.a)(i)),{id:e,date:n,image:o,title:i,text:s})},h=i&&Object(S.a)(i);return Object(r.jsxs)("div",{className:"post-container",id:e,children:[Object(r.jsx)("img",{src:o,alt:"post",onClick:"/news"===u?p:null}),Object(r.jsxs)("div",{className:"post-date",children:[Object(r.jsxs)("div",{className:"post-date-clock",children:[Object(r.jsx)("img",{src:c.a,alt:"clock"}),Object(r.jsx)("p",{children:n})]}),Object(r.jsx)("hr",{className:"post-date-hr"})]}),Object(r.jsxs)("div",{className:"post-title",role:"button",onClick:"/news"===u?p:null,children:[Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"pin"}),Object(r.jsx)("h1",{children:i})]}),Object(r.jsx)("div",{className:"post-description",style:"/news"===u?{height:"100px"}:{height:"auto"},children:Object(r.jsx)("p",{children:s})}),Object(r.jsx)("hr",{className:"post-end-hr"}),Object(r.jsxs)("div",{className:"post-footer",children:[Object(r.jsx)(A.a,{onClick:"/news"===u?p:function(){l.goBack()},children:"/news"===u?"Weiterlesen":"Zur\xfcck"}),Object(r.jsxs)("div",{className:"post-footer-socials",children:[Object(r.jsx)(C,{url:"".concat("https://meine-physiotherapie-darmstadt.de","/news/").concat(h),quote:"".concat(s&&s.split(0,50)),children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"facebook icon"})}),Object(r.jsx)(x,{url:"".concat("https://meine-physiotherapie-darmstadt.de","/news/").concat(h),children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"twitter icon"})}),Object(r.jsx)("a",{href:"https://www.facebook.com/physiopraxis.marian/",children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"instagram icon"})})]})]})]})}},148:function(t,e,n){}}]);
//# sourceMappingURL=0.13f19466.chunk.js.map