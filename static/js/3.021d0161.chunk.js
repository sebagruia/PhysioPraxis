(this.webpackJsonpphysiopraxis_marian=this.webpackJsonpphysiopraxis_marian||[]).push([[3],{154:function(e,a,t){"use strict";var n=t(35),l=t(36),s=t(37),i=t(39),r=t(38),o=t(0),c=t.n(o),m=(t(155),t(11)),A=t(6),u=t(61),d=t(7),p=t(40),g=t(31),h=t(73),b=t(74),E=t(75),v=t.n(E),N=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).sendMessageWithEmailJs=function(){v.a.send("gmail","physiopraxis_template",e.state,"user_b7QIA4bch8ZLSi8wVsjzY").then((function(a){"OK"===a.text&&(e.props.dispatch(Object(d.i)(e.props.bookingMessageStatus)),console.log("SUCCES",a.text))}),(function(e){console.log("FAILED",e.text)}))},e.handleSubmit=function(a){a.preventDefault(),e.sendMessageWithEmailJs(),e.setState({email:"",name:"",date:"",time:"",phone:"",message:""})},e.handleOnChange=function(a){var t=a.target.name;e.setState(Object(n.a)({},t,a.target.value))},e.checkDateValidity=function(e){return 0===Object(u.c)(e)?"":e},e.state={email:"",name:"",date:"",time:"",phone:"",message:""},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.history,t=e.sendingMessageStatus,n=a.location.pathname,l=this.state,s=l.email,i=l.name,r=l.date,o=l.time,m=l.phone,A=l.message;return c.a.createElement(p.a,{onSubmit:this.handleSubmit,className:"appointment ".concat("/appointmentPage"===n?"substractMarginBottom":""," ")},c.a.createElement("div",{className:"appointment-text"},c.a.createElement("h1",null,"Book Appointment"),c.a.createElement("h6",null,"We are here for you")),c.a.createElement(g.a,{onChange:this.handleOnChange,type:"text",placeholder:"Email","aria-label":"Email",value:s,name:"email",required:!0}),c.a.createElement("div",{className:"appointment-inputs"},c.a.createElement(p.a.Group,{className:"group"},c.a.createElement(g.a,{onChange:this.handleOnChange,type:"text",placeholder:"Your Full Name","aria-label":"Your Full Name",value:i,name:"name",required:!0}),c.a.createElement(p.a.Label,null,"Date"),c.a.createElement(g.a,{onChange:this.handleOnChange,type:"date",placeholder:"Date","aria-label":"Date",min:Object(u.f)(),value:this.checkDateValidity(r),name:"date",required:!0})),c.a.createElement(p.a.Group,{className:"group"},c.a.createElement(g.a,{onChange:this.handleOnChange,type:"phone",placeholder:"Phone","aria-label":"Phone","aria-describedby":"basic-addon1",value:m,name:"phone",required:!0}),c.a.createElement(p.a.Label,null,"Time"),c.a.createElement(g.a,{onChange:this.handleOnChange,type:"time",min:"08:00",max:"".concat(6===Object(u.c)(r)?"14:00":"20:00"),placeholder:"Time","aria-label":"Time","aria-describedby":"basic-addon1",value:o,name:"time",required:!0}))),c.a.createElement(p.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Special request...",value:A,name:"message"}),c.a.createElement("div",{className:"buttonAndPopUp-container"},c.a.createElement(h.a,{buttonName:"BOOK"}),c.a.createElement(b.a,{messageStatus:t},"Sent"),c.a.createElement("div",{className:"g-recaptcha","data-sitekey":"6LdypNMZAAAAAIN1Q2Eqzrz4PcXWCK5J-Ad3eT_B"})))}}]),t}(o.Component);a.a=Object(A.h)(Object(m.b)((function(e){return{sendingMessageStatus:e.userReducer.sendingMessageStatus}}))(N))},155:function(e,a,t){},156:function(e,a,t){},157:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFWUlEQVRo3t2aX2gURxzHf7/fZJewaW2LZxSxqWIkm9wmnpHE9zwV+yikiBijCAWPlval4h8aLGrRF+tDig9CQbCCtA+++BjoW5OiPc0mriRSCdZaPZUIt4Tbm5k+3N52d3IXcn+SNf3CPuxv/uznNzM7+5uZRWiATCvV5nnegJRyDwB0AcBWAJmQEgwAAERwATALAI8BYBoRxzVNG3PszFy9z8Y6oFs9zxuSUh6QUqZqejhiBhGva5p2zbEzz1fFgY7kzjbP805JKYcAoLnmpotqARGvaZp27uHUvap6ZdkOdO/qa3Zd92shxIkGgi9yhIi+Mwzj4uQfvy80zIEdnd0W5/yGlNKqkEUg4gQAjBHRHSJyDMN4luzqegMAMDU9vc513U1CCFMIsRsABqSU/QBAZaEQbcbY/pkHk3bdDrSb1iDn/EeA4gup6AkRjfpj+Gk1TW1aqc2e5w0JIdIAsKVMFpcxdnjWsW/W7MD2juQXQojLZZKyRDTS0tJy9f7diXw14Kp6evv1XC53VAhxBgASajoRffXo4dT3VTuwvSP5pRDi0qICiDd1XU87diZbD7gq00ol8vn8qJRysBonyo7BdtMaLANfYIyljwwf2t9oeAAAx85kjwwf2s8YSwNAIZwmhLjUblqD5cot6oEdnd1WoVAYh+iYX2CM7Zt17NuNBq/QgHs5579AdLZzm5qa9qgvdqQHunf1NXPObyjwhdWEBwCYdezbjLF9EO0Jg3N+o3tXX2QKZ+Gbd9/74KSU8tNIBsY+n3Xsn1YLvqRX2eczidZNL6WUn4TMrYVCwXv98sWvJUPQAx3JnW3+RyoQIt4cHjp4pRaAbTs6ZfiqpY7hoYNXEDEyjQohTnQkd7YtcsDzvFMQHXNZXdfTp08eFyvc2BV1+uRxoet6GgDCk0azz/qfA6aVavVjm0BENLISs021cuxMlohGwjYp5ZBppVoDBzzPUwOzJy0tLVfjhi/JZ3kSMjX7zEUHpJQHwgWIaLTeL2wjdf/uRJ6IRsO2EjOZVqpNieeFpmnX4oZW5TMF76OUMmVaqTbyPG8gnBERJ6oNzFZDjp156ke8gTzPGyB/GRjWWNywSyjCJqXcQ1BcwwYiojtxU1ZSGbYuAoCtSiYnbtAlHFDZtjaBEoMbhvFsqUpq/aout9yfMw8qhviGYTybn58PmxIkpYystHq6rTeNb7vGSGWTUhpUa2VviwgR3bDh/qS9Lm6oSlLZENFtgmKgFER3rutuAoBXlSpZaoyGpY755ZZbSj5bWFmC4nZfICGEuTLtV7/KsD0mAJhWMu2OG3QJB1S2aULEccU4sNwKY5Aa9oyTpmnq57nftFKb4yZVZVqpzf5uXiBN08bIsTNziJgJ2akUa79N8pmCaR8RM46dmSP/5no4sxAi3dPbr8cNXVJPb7/ub0EGKjETQBBrh3eDt+RyuaNxg5fks4T3TxdKaxYCAHDszHNEjCxihBBnTCuVWP5jVkamlUr4+6aBEDE4EAnGlKZp5yDaC4l8Pj969vyF2MKNs+cvUD6fH4VowLngsxadCRfY3pH8RvWWMZaedewf4nCg3Uwe41xE1sJENPLo4dS3wX040TCMi4gY2XvknF9uN629qw9v7eU8urWPiLZhGBcjNrXgmt7cBQCYeTBpM8YOK+ZmzvmtdjN5bCXfibPnL1Bx2PBbCjwwxg6XO3Ja8wccrFKFr1+++G39ho3zUsqPlaQk5/zI+g0bcx9+tO3eP3//xesB7+nt199Z9/5nhULhZwDoqwYe4P9+yFdS7cesnW8AMN5j1pLW9EF3WGv2VwNVa/ZnjwrOxPa7zb+CGcfJ4ADzigAAAABJRU5ErkJggg=="},158:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADGElEQVRo3t2az0vkMBTHv+9lWoJDCy6DiIfBo4ggOLDePe4fsLA3z3NYLHjw5P/hX7D4T3hdXBARRTzKehH0JHRnoLbZw2Skie38bO3UL+Qykyafl6QvLy8lFCApZTuKor0kSXYBbAJYB9BSSi0BABH9A/AM4B7ALTOfO45z1u/3/xbR/6zQK8x8SESXANQshYgumflQSrnyYeCu67aZ+QRAb1bwjNJj5hPXddulgXueJ5n5uGDwLEOOPc+Tk3LRJJUcx9l6fX39pZTayqmSENEfIjojogshxF2z2Xzc3t5+AYCrqys/DMPVOI43lFIdpdSeUuorAM6EIrppNBo/oii6mXvkhRDfAYQ5I/bAzEdSyrVp25VSrjHzEYCHnLZD3fdc8D9zGn9i5q7v++68A+T7vsvMXQBPWX0JIQ5mhT/IapCITqWUrXnBbUkpW0R0WogReurshiIhRDcIAp6qsSkUBAELIboAogwjJltOjuNs4f2a7zUajW9lgdvSfdneLtRs+fI8TxLRtfVg9JHwlhHGTBDR9UgXq/28PXXdj4YfSvdt8GjG99K7oDFtRHRa5pofpyAIOOPF7mXu2Do8MFxlGd5mWmkGw8VqVqPSCqzR1755IaRZjFkwAkBmPrQqPBSxSRUlzWLs2Jp5IDsk1lv8QkkzGaE4gMFhBObox7PENmVLM8VpVillG0KIfcuy31XD5kmzpV38PutjYLrSWdWgIwww2JIk2WUMzrDpShdVg44wwGbbZAwO4G8SQtxVDZqnDLZ1BmBsVs1m83FMO2UdJ4clVxlsLR6mPoba2dl5qXqk89TpdAw2pdRSZXFOYSIiI/ZfXl7+MuaRypaQZku7/JAxyJi9KQzD1XE2l1xylcH2zBik+94Ux/HGPDNapjLY7hnAbfoXpVSnatA8ZbDdMjOfW5X2qgYdYYDBxszn9Q/mgJqH0/rPeh9oan+k1JXqe6gHPkFaBah5Ygv4BKlFoObJ3aFqnV5PGVHfC45xRqAOV0wpIxb6ku/zX7MOtagX3VOrtp8a2FqUjz0megcmMKayz23+A5ASigYFmWLQAAAAAElFTkSuQmCC"},159:function(e,a,t){},160:function(e,a,t){},169:function(e,a,t){"use strict";var n=t(32),l=t(0),s=t.n(l),i=(t(156),t(11)),r=t(6),o=t(157),c=t.n(o),m=t(158),A=t.n(m),u=t(35),d=t(36),p=t(37),g=t(39),h=t(38),b=(t(159),t(40)),E=t(31),v=t(73),N=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).handleOnChange=function(a){var t=a.target.name;e.setState(Object(u.a)({},t,a.target.value))},e.state={name:"",message:"",selectionAvatar:""},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.active,n=a.handleSubmitTestimonialOrPost,i=this.state,r=i.name,o=i.message,c=i.selectionAvatar;return s.a.createElement(l.Fragment,null,t?s.a.createElement(b.a,{onSubmit:function(a){n(a,r,o,c),e.setState({name:"",message:"",selectionAvatar:""})},className:"testimonialForm"},s.a.createElement("div",{className:"appointment-text"},s.a.createElement("h1",null,"New Testimonial")),s.a.createElement(b.a.Group,{className:"testimonialForm-group"},s.a.createElement(E.a,{className:"testimonialForm-name",onChange:this.handleOnChange,type:"text",placeholder:" Name","aria-label":"Name",value:r,name:"name",required:!0}),s.a.createElement(b.a.Control,{onChange:this.handleOnChange,as:"select",className:"mr-sm-2 testimonialForm-select",id:"inlineFormCustomSelect",name:"selectionAvatar",custom:!0},s.a.createElement("option",{value:"0"},"Sex"),s.a.createElement("option",{value:"https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/avatars%2Fmale-avatar.png?alt=media&token=e911afab-a358-4c49-8084-60cff06fc0fb"},"m\xe4nnlich"),s.a.createElement("option",{value:"https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/avatars%2Ffemale-avatar.png?alt=media&token=011ad62f-0def-48b9-b38e-d845f8f5c771"},"weiblich"))),s.a.createElement(b.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Text...",value:o,name:"message"}),s.a.createElement(v.a,{buttonName:"Send"})):null)}}]),t}(l.Component),f=Object(r.h)(N),w=(t(160),function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).handleOnChange=function(a){var t=a.target.name;e.setState(Object(u.a)({},t,a.target.value))},e.state={postTitle:"",postText:"",postImageLink:""},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.active,n=a.handleSubmitTestimonialOrPost,i=this.state,r=i.postTitle,o=i.postText,c=i.postImageLink;return s.a.createElement(l.Fragment,null,t?s.a.createElement(b.a,{onSubmit:function(a){n(a,r,o,c),e.setState({postTitle:"",postText:"",postImageLink:""})},className:"postForm"},s.a.createElement("div",{className:"appointment-text"},s.a.createElement("h1",null,"New Post")),s.a.createElement(b.a.Group,{className:"post-group"},s.a.createElement(E.a,{className:"post-image",onChange:this.handleOnChange,type:"text",placeholder:"Post ImageLink","aria-label":"Post ImageLink",value:c,name:"postImageLink",required:!0}),s.a.createElement(E.a,{className:"post-title-input",onChange:this.handleOnChange,type:"text",placeholder:"Post Title","aria-label":"Post Title",value:r,name:"postTitle",required:!0})),s.a.createElement(b.a.Control,{onChange:this.handleOnChange,as:"textarea",rows:"4",cols:"50",placeholder:"Post Text...",value:o,name:"postText"}),s.a.createElement(v.a,{buttonName:"Send"})):null)}}]),t}(l.Component)),S=t(18),x=t(7);a.a=Object(i.b)()((function(e){var a=e.dispatch,t=e.currentUser,i=e.visible,o=Object(l.useState)(!1),m=Object(n.a)(o,2),u=m[0],d=m[1],p=Object(r.g)().pathname,g=function(){d(!u)},h=function(e,t,n,l){e.preventDefault(),"/"===p?(Object(S.b)(t,n,l),a(Object(x.g)())):"/news"===p&&(Object(S.a)(t,n,l),a(Object(x.f)())),d(!u)};return s.a.createElement(l.Fragment,null,u?s.a.createElement("img",{className:"minus-button ".concat("/news"===p?"positionInNewsPage":""),onClick:g,src:A.a,alt:"minus icon",role:"button",style:t?{display:"initial"}:{display:"none"}}):s.a.createElement("img",{className:"plus-button ".concat(i?"hidden":""," ").concat("/news"===p?"positionInNewsPage":""),onClick:g,src:c.a,alt:"plus icon",role:"button",style:t?{display:"initial"}:{display:"none"}}),"/"===p?s.a.createElement(f,{active:u,handleSubmitTestimonialOrPost:h}):s.a.createElement(w,{active:u,handleSubmitTestimonialOrPost:h}))}))},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){},173:function(e,a,t){e.exports=t.p+"static/media/semnaturaMarian.beaf2b4e.png"},174:function(e,a,t){},175:function(e,a,t){},176:function(e,a){e.exports="data:image/png;base64,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"},177:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){},180:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABFklEQVRo3u2XwQ2DMBAEV3mkhlSRelJMWkopqSQNEMk+8rqPBbbBGO9KWYkPr5sdAwewEjN7hRBuUI2ZzWb2iTE+Rs/SAuCXno0EQM/GAoCWjQyAho0CAL+NhWHfUjbSQadpusYYn2b2lbCRDuj3Qwh3CRtrAAAgYSMH4KG2UQMAENuoBfDQ2dgKAJDZ2APgobDRAgAQ2GgF8AyzcRQAMMjGkQCeU230AABOtNELwNPdRm8AoLONMwA8LTYuPQcbmv8RKkT2IZZ+jcp+yKRXCdllTnqdlv2hGd56CwBF63sAqFrfCkDXei0Abes1ANSt5wAkWs8BSLReAOBvfQMAZ+uVALytFwD4W88AaLS+AKDVegIg0foPpOTlkt+8Rq8AAAAASUVORK5CYII="},181:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAQBJREFUeNrcmssNQiEQRYkLa7AK67EYW7IUK7EBTGYurkhYPIIiDMMlYfdewjm8z3wIKaVwNL0MEbkAeFTX6RlAVW8AXgDSVgDZOoCU5zYApfWtAI6sbwNQs+4eoGXdNUDD+tMtQMP6W1XvMcazS4CWdRG55mtdAXxrvbzHDcAv1l0B9Fh3A9BrfTnAv9aXAoywvgRgpHVzgNHWzQBmWTcBmGl9KoCF9WkAVtaHA1hbHwqwwnoPwCnsPmgfIYqXmOYzSvEjowklKII5mnCaIqGhSSkpknqasgpFYYumtEhR3KUpr1M0OGhaTBRNPpo2K0Wjm+aoQW03tgQod6O2zs8AYaJ7X4nX37sAAAAASUVORK5CYII="},200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=(t(170),t(171),function(){return l.a.createElement("div",{className:"container-fluid hero-section"},l.a.createElement("div",{className:"hero-img"},l.a.createElement("div",{className:"container hero-img-title-container"},l.a.createElement("div",{className:"full-title",lang:"de"},l.a.createElement("div",{className:"background-for-text"},l.a.createElement("h1",{className:"hero-img-title"},"Praxis",l.a.createElement("span",{className:"hero-img-title-span"}," f\xfcr"))),l.a.createElement("div",{className:"background-for-text"},l.a.createElement("h1",{className:"hero-img-title"},"Physiotherapie")),l.a.createElement("div",{className:"moto"},l.a.createElement("h6",{className:"moto-text"},"QUALIT\xc4T"),l.a.createElement("h6",{className:"moto-text"},"RESPEKT"),l.a.createElement("h6",{className:"moto-text"},"INNOVATION"))))),l.a.createElement("div",{className:" container hero-description"},l.a.createElement("div",{className:"box box1"},l.a.createElement("div",{className:"boxTitle"},l.a.createElement("h4",null,"Professional Physiotherapist")),l.a.createElement("div",{className:"boxTitle-text"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa diam sed est vitae eget dolor et, turpis"))),l.a.createElement("div",{className:"box box2"},l.a.createElement("div",{className:"boxTitle boxTitle-box2"},l.a.createElement("h4",null,"Insurance Partner")),l.a.createElement("div",{className:"boxTitle-text"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa diam sed est vitae eget dolor et, turpis")),l.a.createElement("div",{className:"boxTitle boxTitle-box2"},l.a.createElement("h4",null,"Insurance Partner"))),l.a.createElement("div",{className:"box box3"},l.a.createElement("div",{className:"boxTitle"},l.a.createElement("h4",null,"Affordable Prices")),l.a.createElement("div",{className:"boxTitle-text"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa diam sed est vitae eget dolor et, turpis")))))}),i=(t(172),t(173)),r=t.n(i),o=function(){return l.a.createElement("div",{className:"container-fluid professionalPreview-container"},l.a.createElement("div",{className:"container professionalPreview-section"},l.a.createElement("div",{className:"professionalPreview-text"},l.a.createElement("h1",null,"Physiotherapist Marian"),l.a.createElement("hr",null),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus egestas libero suscipit nec, facilisis nisl. At suspendisse et amet, gravida. Erat tincidunt tempor cras suscipit quam bibendum. Tortor nisl enim orci consequat scelerisque ultrices massa lectus ipsum. Feugiat lacus nisi morbi sed habitant dictum at morbi. Vulputate urna, quis sit accumsan. Velit integer nisi, et consequat egestas feugiat feugiat massa sit. Parturient tortor, habitasse ut odio proin ornare blandit mauris. Lacinia quisque vel auctor cursus aliquet sem placerat consequat."),l.a.createElement("div",{className:"signature-container"},l.a.createElement("h4",null,"Marian Popescu"),l.a.createElement("img",{src:r.a,alt:"signature"}))),l.a.createElement("div",{className:"professionalPreview-img"},l.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/home%2Fdoctor1.png?alt=media&token=0ae9fe55-57e9-42ef-abc7-86bc84a8833d",alt:"the doctor"}))))},c=(t(174),t(11)),m=t(154),A=t(169),u=(t(175),t(176)),d=t.n(u),p=function(e){var a=e.text,t=e.image,n=e.name;return l.a.createElement("div",{className:"testimonial"},l.a.createElement("div",{className:"quote"},l.a.createElement("img",{src:d.a,alt:"quote"})),l.a.createElement("div",{className:"quote-text"},l.a.createElement("p",null,a)),l.a.createElement("div",{className:"avatar"},l.a.createElement("div",{className:"avatar-face"},l.a.createElement("img",{src:t,alt:"a man"})),l.a.createElement("h6",null,n)))},g=Object(c.b)((function(e){return{currentUser:e.userReducer.currentUser,testimonials:e.userReducer.testimonials}}))((function(e){var a=e.currentUser,t=e.testimonials;return l.a.createElement("div",{className:"container-fluid appointment-container",id:"scroll-to-appointment"},l.a.createElement("div",{className:"container appointment-section"},l.a.createElement(m.a,null),l.a.createElement("div",{className:"testimonials-subsection"},l.a.createElement("div",{className:"testimonial-title-container"},l.a.createElement("h1",{className:"testimonials-title"},"Testimonials"),l.a.createElement(A.a,{currentUser:a})),l.a.createElement("div",{className:"testimonials-container"},Object.values(t).map((function(e){return l.a.createElement(p,{key:e.id,text:e.message,image:e.selectionAvatar,name:e.name})}))))))})),h=t(32),b=(t(177),t(178),function(){return l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.237654455203!2d8.643381315883717!3d49.875563436500755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd79958346d985%3A0xb09e51725614442!2sPHYSIOPRAXIS%20MARIAN!5e0!3m2!1sen!2sde!4v1600336937251!5m2!1sen!2sde",title:"PhysioPraxis Marian",width:"100%",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0"}))}),E=(t(179),t(180)),v=t.n(E),N=t(181),f=t.n(N),w=function(e){var a=e.handleDisplay,t=e.display;return l.a.createElement("div",{className:"additionalInfoButton",onClick:a,role:"button"},l.a.createElement("img",{src:t?v.a:f.a,alt:"arrow icon"}))},S=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],s=a[1];return l.a.createElement("div",{className:"container-fluid map"},l.a.createElement(b,null),l.a.createElement(w,{handleDisplay:function(){s(!t)},display:t}),l.a.createElement("div",{className:"additionalInfo",style:t?{display:"flex"}:{display:"none"}},l.a.createElement("div",{className:"weg"},l.a.createElement("ul",null,l.a.createElement("h5",null,"WEGBESCHREIBUNG"),l.a.createElement("h6",null,"Parkm\xf6glichkeiten"),l.a.createElement("li",null,"2 patienten Parkpl\xe4tze stehen zur Verf\xfcgung")),l.a.createElement("ul",null,l.a.createElement("h6",null,"Mit \xf6ffentlichen Verkersmittel"),l.a.createElement("p",null,"Haltestelle:"),l.a.createElement("li",null,"Klinikum(150m)"),l.a.createElement("li",null,"Kasinostr.(150m)"),l.a.createElement("li",null,"Rhein-/Neckarstr. (500m)"),l.a.createElement("li",null,"Willy-Brandt-Platz (350m)")))))};a.default=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(s,null),l.a.createElement(o,null),l.a.createElement(g,null),l.a.createElement(S,null))}}}]);
//# sourceMappingURL=3.021d0161.chunk.js.map