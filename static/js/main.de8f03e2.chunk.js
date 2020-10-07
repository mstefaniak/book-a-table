(this["webpackJsonpbook-a-table"]=this["webpackJsonpbook-a-table"]||[]).push([[0],{124:function(e,a,t){e.exports=t(145)},129:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(15),i=t.n(o),c=(t(129),t(43)),l=t(177),m=t(77),u=t.n(m),s=t(93),d=t(108),b=t(78),p=t(95),E=t(96),h=t(94),f=t(178),v=t(179),_=t(97),O=t(53),g=t(190),j=t(35),w=t(107),x=t(180),k=t(181),S=t(59),y=t(185),T=t(191),N=t(182),C=t(189),B=t(184),D=t(187),I=t(186),P=t(19),R=t(183),W=t(193),A=Object(r.createContext)({firebase:null}),K=function(e){return n.a.createElement(I.a,Object.assign({elevation:6,variant:"filled"},e))},L=Object(b.a)(new Date,1),U={date:L,time:Object(p.a)(Object(E.a)(L,0),18),area:"anywhere"},H=function(e,a){var t=Object(h.a)(a),r=Object(f.a)(a);return Object(v.a)(Object(E.a)(Object(p.a)(e,t),r))},V=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return function(e){return a.reduce((function(a,t){return a||t(e)}),void 0)}},q=function(){var e=Object(g.a)().t,a=Object(r.useContext)(A).firebase,t=Object(r.useState)(!1),o=Object(d.a)(t,2),i=o[0],c=o[1],l=function(a){return a?void 0:e("required")},m=function(a){return a&&(null===a||void 0===a?void 0:a.indexOf("@"))>-1?void 0:e("invalid_email")},b=function(a){return isNaN(Number(a))?e("invalid_number"):void 0},v=function(e){var a=Object(h.a)(e),t=Object(f.a)(e);if(a<16||a>20||20===a&&t>0)return"error"},I=function(e){var a=Object(p.a)(Object(E.a)(e,0),16),t=Object(p.a)(Object(E.a)(Object(_.a)(L,0),59),15);if(Object(O.a)(a,t))return"error"},q=function(){var e=Object(s.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return r={name:t.name,email:t.email,area:t.area,people:t.people,comment:t.comment,date:H(t.date,t.time),status:0},e.next=4,a.firestore().collection("bookings").add(r);case 4:e.sent&&c(!0);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return i?n.a.createElement(x.a,{container:!0,spacing:2},n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(K,{severity:"success"},e("success_message"))),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(k.a,{type:"button",variant:"contained",onClick:function(){c(!1)}},e("add_new_booking")))):n.a.createElement(j.b,{onSubmit:q,initialValues:U,render:function(a){var t,r,o=a.handleSubmit,i=a.submitting,c=a.pristine;return n.a.createElement("form",{onSubmit:o},n.a.createElement(x.a,{container:!0,spacing:2},n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(S.a,{variant:"h4",gutterBottom:!0},e("book_a_table")),n.a.createElement(S.a,{variant:"h6",gutterBottom:!0},"The Office - Craft Beer Pub")),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(j.a,{name:"email",validate:V(l,m)},(function(a){var t=a.input,r=a.meta;return n.a.createElement(y.a,Object.assign({},t,{label:r.touched&&r.error?e("error"):e("email"),error:r.touched&&!!r.error,helperText:r.touched&&r.error?r.error:e("email_hint")}))}))),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(j.a,{name:"name",validate:l},(function(a){var t=a.input,r=a.meta;return n.a.createElement(y.a,Object.assign({},t,{label:r.touched&&r.error?e("error"):e("name"),error:r.touched&&!!r.error,helperText:r.touched&&r.error?r.error:e("name_hint")}))}))),n.a.createElement(P.a,{utils:w.a},n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(j.a,{name:"date",validate:I},(function(a){var t=a.input,r=a.meta;return n.a.createElement(R.a,Object.assign({},t,{margin:"normal",format:"dd-MM-yyyy",label:r.touched&&r.error?e("error"):e("date"),error:r.touched&&!!r.error,helperText:e("date_hint")}))}))),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(j.a,{name:"time",validate:v},(function(a){var t=a.input,r=a.meta;return n.a.createElement(W.a,Object.assign({},t,{ampm:!1,minutesStep:15,margin:"normal",label:r.touched&&r.error?e("error"):e("time"),error:r.touched&&!!r.error,helperText:e("time_hint")}))})))),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(j.a,{name:"people",validate:V(b,(t=1,r=12,function(a){return Number(a)<t||Number(a)>r?e("not_between",{min:1,max:12}):void 0}))},(function(a){var t=a.input,r=a.meta;return n.a.createElement(y.a,Object.assign({},t,{label:r.touched&&r.error?e("error"):e("people"),error:r.touched&&!!r.error,helperText:r.touched&&r.error?r.error:e("people_hint")}))}))),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(j.a,{name:"area",type:"radio"},(function(a){var t=a.input;return n.a.createElement(T.a,{component:"fieldset"},n.a.createElement(N.a,{component:"legend"},e("place")),n.a.createElement(C.a,Object.assign({},t,{defaultValue:U.area}),n.a.createElement(B.a,{value:"anywhere",control:n.a.createElement(D.a,null),label:e("place_anywhere")}),n.a.createElement(B.a,{value:"upstairs",control:n.a.createElement(D.a,null),label:e("place_upstairs")}),n.a.createElement(B.a,{value:"downstairs",control:n.a.createElement(D.a,null),label:e("place_downstairs")})))}))),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(j.a,{name:"comment"},(function(a){var t=a.input;return n.a.createElement(y.a,Object.assign({},t,{label:e("other"),helperText:e("other_hint")}))}))),n.a.createElement(x.a,{item:!0,xs:12},n.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",disabled:i||c},e("book")))))}})},J=t(79),M=t(58),z=t(105),F={en:{translation:{add_new_booking:"Book another table",book:"Book",book_a_table:"Book a table",date:"Date",date_hint:"Not allowed to book for earier then tomorrow",email:"Email address",email_hint:"We'll never share your email.",email_invalid:"Invalid email",error:"Error",invalid_number:"Not a number",name:"Name",name_hint:"Name or nickname",not_between:"Should be between {{min}} and {{max}}",other:"Other requirements",other_hint:"Let us know what else we can do for you",people:"People",people_hint:"How many people?",place:"Place",place_anywhere:"Anywhere",place_upstairs:"Upstairs (street level)",place_downstairs:"Downstairs (basement)",required:"Required",success_message:"Booking successful. We cannot wait to see you.",time:"Time",time_hint:"In the range from 16:00 till 20:00"}},pl:{translation:{book_a_table:"Zarezerwuj stolik",email:"Email"}}};J.a.use(z.a).use(M.e).init({resources:F,fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});J.a;var G=Object(c.a)((function(e){return{root:{position:"absolute",flexGrow:1,padding:40,backgroundColor:e.palette.grey[100],top:0,bottom:0,right:0,left:0},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500}}}));var Y=function(){var e=G();return n.a.createElement("div",{className:e.root},n.a.createElement(l.a,{className:e.paper},n.a.createElement(q,null)))},Z=t(106),Q=t.n(Z),X=(t(139),t(143),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FIREBASE_PROJECT_ID),$={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FIREBASE_API_KEY,authDomain:"".concat(X,".firebaseapp.com"),databaseURL:"https://".concat(X,".firebaseio.com"),projectId:X,storageBucket:"".concat(X,".appspot.com"),messagingSenderId:"173934858452",appId:"1:173934858452:web:50fdcc7645b3d229572b41"},ee=Q.a.initializeApp($);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A.Provider,{value:{firebase:ee}},n.a.createElement(Y,null))),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.de8f03e2.chunk.js.map