(this.webpackJsonpphysiopraxis_marian=this.webpackJsonpphysiopraxis_marian||[]).push([[8],{154:function(e,a,t){"use strict";var n=t(35),s=t(36),i=t(37),l=t(39),r=t(38),c=t(0),m=t.n(c),o=(t(155),t(11)),p=t(6),h=t(61),u=t(7),d=t(40),g=t(31),E=t(73),b=t(74),N=t(75),f=t.n(N),v=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).sendMessageWithEmailJs=function(){f.a.send("gmail","physiopraxis_template",e.state,"user_b7QIA4bch8ZLSi8wVsjzY").then((function(a){"OK"===a.text&&(e.props.dispatch(Object(u.i)(e.props.bookingMessageStatus)),console.log("SUCCES",a.text))}),(function(e){console.log("FAILED",e.text)}))},e.handleSubmit=function(a){a.preventDefault(),e.sendMessageWithEmailJs(),e.setState({email:"",name:"",date:"",time:"",phone:"",message:""})},e.handleOnChange=function(a){var t=a.target.name;e.setState(Object(n.a)({},t,a.target.value))},e.checkDateValidity=function(e){return 0===Object(h.c)(e)?"":e},e.state={email:"",name:"",date:"",time:"",phone:"",message:""},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.history,t=e.sendingMessageStatus,n=a.location.pathname,s=this.state,i=s.email,l=s.name,r=s.date,c=s.time,o=s.phone,p=s.message;return m.a.createElement(d.a,{onSubmit:this.handleSubmit,className:"appointment ".concat("/appointmentPage"===n?"substractMarginBottom":""," ")},m.a.createElement("div",{className:"appointment-text"},m.a.createElement("h1",null,"Book Appointment"),m.a.createElement("h6",null,"We are here for you")),m.a.createElement(g.a,{onChange:this.handleOnChange,type:"text",placeholder:"Email","aria-label":"Email",value:i,name:"email",required:!0}),m.a.createElement("div",{className:"appointment-inputs"},m.a.createElement(d.a.Group,{className:"group"},m.a.createElement(g.a,{onChange:this.handleOnChange,type:"text",placeholder:"Your Full Name","aria-label":"Your Full Name",value:l,name:"name",required:!0}),m.a.createElement(d.a.Label,null,"Date"),m.a.createElement(g.a,{onChange:this.handleOnChange,type:"date",placeholder:"Date","aria-label":"Date",min:Object(h.f)(),value:this.checkDateValidity(r),name:"date",required:!0})),m.a.createElement(d.a.Group,{className:"group"},m.a.createElement(g.a,{onChange:this.handleOnChange,type:"tel",placeholder:"Phone","aria-label":"Phone","aria-describedby":"basic-addon1",value:o,name:"phone",required:!0}),m.a.createElement(d.a.Label,null,"Time"),m.a.createElement(g.a,{onChange:this.handleOnChange,type:"time",min:"08:00",max:"".concat(6===Object(h.c)(r)?"14:00":"20:00"),placeholder:"Time","aria-label":"Time","aria-describedby":"basic-addon1",value:c,name:"time",required:!0}))),m.a.createElement(d.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Special request...",value:p,name:"message"}),m.a.createElement("div",{className:"buttonAndPopUp-container"},m.a.createElement(E.a,{buttonName:"BOOK"}),m.a.createElement(b.a,{messageStatus:t},"Sent"),m.a.createElement("div",{className:"g-recaptcha","data-sitekey":"6LdypNMZAAAAAIN1Q2Eqzrz4PcXWCK5J-Ad3eT_B"})))}}]),t}(c.Component);a.a=Object(p.h)(Object(o.b)((function(e){return{sendingMessageStatus:e.userReducer.sendingMessageStatus}}))(v))},155:function(e,a,t){},191:function(e,a,t){},198:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=(t(191),t(154));a.default=function(){return s.a.createElement("div",{className:"appointmentPage-container container"},s.a.createElement(i.a,null),s.a.createElement("div",{className:"appointmentPage-contactInfo"},s.a.createElement("div",{className:"appointmentPage-contactInfo-text",lang:"de"},s.a.createElement("h1",null,"Contact"),s.a.createElement("div",{className:"appointmentPage-firstText-container"},s.a.createElement("h6",{className:"appointmentPage-firstText"},"MONTAG - FREITAG"," "),s.a.createElement("h6",{className:"appointmentPage-hours"},"08:00 - 19:00")),s.a.createElement("div",{className:"appointmentPage-firstText-container"},s.a.createElement("h6",{className:"appointmentPage-firstText"},"SAMSTAG"," "),s.a.createElement("h6",{className:"appointmentPage-hours"},"08:00 - 14:00")),s.a.createElement("div",{className:"appointmentPage-firstText-container"},s.a.createElement("h6",{className:"appointmentPage-firstText"},"SONNTAG"," "),s.a.createElement("h6",{className:"appointmentPage-hours"},"GESCHLOSSEN")),s.a.createElement("div",{className:"appointmentPage-firstText-container"},s.a.createElement("h6",{className:"appointmentPage-firstText"},"TEL"," "),s.a.createElement("h6",{className:"appointmentPage-hours"},"0172 3465694")),s.a.createElement("div",{className:"appointmentPage-firstText-container"},s.a.createElement("h6",{className:"appointmentPage-firstText"},"EMAIL"," "),s.a.createElement("h6",{className:"appointmentPage-hours"},"physiopraxis.marian@gmail.com")))))}}}]);
//# sourceMappingURL=8.253c068b.chunk.js.map