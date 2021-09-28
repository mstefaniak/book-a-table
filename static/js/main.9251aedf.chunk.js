(this["webpackJsonpbook-a-table"]=this["webpackJsonpbook-a-table"]||[]).push([[0],{136:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(16),c=a.n(o),i=(a(136),a(45)),s=a(188),b=a(55),u=a.n(b),l=a(69),j=a(87),d=a(24),m=a(85),p=a(103),h=a(104),O=a(102),x=a(183),f=a(105),w=a(58),_=a(199),g=a(44),v=a(116),y=a(189),k=a(190),z=a(64),N=a(194),C=a(200),S=a(191),B=a(198),D=a(193),I=a(196),T=a(195),M=a(20),q=a(192),W=a(202),Z=Object(r.createContext)({firebase:null}),A=a(184),P=a(56),V=a(86),E=function(e){return e.docs.map((function(e){return Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id})}))},F=function(e,t){var a=Object(O.a)(t),r=Object(x.a)(t);return Object(A.a)(Object(h.a)(Object(p.a)(e,a),r))},J=a(8),L=function(e){return Object(J.jsx)(T.a,Object(d.a)({elevation:6,variant:"filled"},e))},U=Object(m.a)(new Date,1),G={date:U,time:Object(p.a)(Object(h.a)(U,0),18),area:"anywhere"},K=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce((function(t,a){return t||a(e)}),void 0)}},R=function(){var e=Object(_.a)().t,t=Object(r.useContext)(Z).firebase,a=function(){var e=Object(r.useContext)(Z).firebase,t=Object(r.useCallback)(function(){var t=Object(l.a)(u.a.mark((function t(a){var r,n,o,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",0);case 2:return r=e.firestore().collection("bookings"),t.next=5,r.where("date",">",Object(A.a)(Object(P.a)(a))).where("date","<",Object(A.a)(Object(V.a)(a))).get();case 5:if(!(n=t.sent).empty){t.next=9;break}return console.warn("No matching documents"),t.abrupt("return",0);case 9:return o=E(n),c=o.reduce((function(e,t){return e+Number(t.people)}),0),t.abrupt("return",c);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.useMemo)((function(){return{getCount:t}}),[t])}(),n=a.getCount,o=Object(r.useState)(!1),c=Object(j.a)(o,2),i=c[0],s=c[1],b=Object(r.useState)(),m=Object(j.a)(b,2),T=m[0],R=m[1],H=function(t){return t?void 0:e("required")},Q=function(t){return isNaN(Number(t))?e("invalid_number"):void 0},X=function(e){var t=Object(O.a)(e),a=Object(x.a)(e);if(t<16||t>20||20===t&&a>0)return"error"},Y=function(e){var t=Object(p.a)(Object(h.a)(e,0),16),a=Object(p.a)(Object(h.a)(Object(f.a)(U,0),59),15);if(Object(w.a)(t,a))return"error"},$=function(){var e=Object(l.a)(u.a.mark((function e(a){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=F(a.date,a.time),e.next=5,n(r);case 5:if(!(e.sent>=20)){e.next=8;break}return e.abrupt("return",R("too_many_bookings"));case 8:return o={name:a.name,area:a.area,people:a.people,comment:a.comment||"",date:r,status:0},e.next=11,t.firestore().collection("bookings").add(o);case 11:e.sent?s(!0):R("generic_error");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return T?Object(J.jsxs)(y.a,{container:!0,spacing:2,children:[Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(L,{severity:"error",children:e(T)})}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(k.a,{type:"button",variant:"contained",onClick:function(){R(void 0)},children:e("try_again")})})]}):i?Object(J.jsxs)(y.a,{container:!0,spacing:2,children:[Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(L,{severity:"success",children:e("success_message")})}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(k.a,{type:"button",variant:"contained",onClick:function(){s(!1)},children:e("add_new_booking")})})]}):Object(J.jsx)(g.b,{onSubmit:$,initialValues:G,render:function(t){var a,r,n=t.handleSubmit,o=t.submitting,c=t.pristine;return Object(J.jsx)("form",{onSubmit:n,children:Object(J.jsxs)(y.a,{container:!0,spacing:2,children:[Object(J.jsxs)(y.a,{item:!0,xs:12,children:[Object(J.jsx)(z.a,{variant:"h4",gutterBottom:!0,children:e("book_a_table")}),Object(J.jsx)(z.a,{variant:"h6",gutterBottom:!0,children:"The Office - Craft Beer Pub"})]}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(g.a,{name:"name",validate:H,children:function(t){var a=t.input,r=t.meta;return Object(J.jsx)(N.a,Object(d.a)(Object(d.a)({},a),{},{label:r.touched&&r.error?e("error"):e("name"),error:r.touched&&!!r.error,helperText:r.touched&&r.error?r.error:e("name_hint")}))}})}),Object(J.jsxs)(M.a,{utils:v.a,children:[Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(g.a,{name:"date",validate:Y,children:function(t){var a=t.input,r=t.meta;return Object(J.jsx)(q.a,Object(d.a)(Object(d.a)({},a),{},{margin:"normal",format:"dd-MM-yyyy",label:r.touched&&r.error?e("error"):e("date"),error:r.touched&&!!r.error,helperText:e("date_hint")}))}})}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(g.a,{name:"time",validate:X,children:function(t){var a=t.input,r=t.meta;return Object(J.jsx)(W.a,Object(d.a)(Object(d.a)({},a),{},{ampm:!1,minutesStep:15,margin:"normal",label:r.touched&&r.error?e("error"):e("time"),error:r.touched&&!!r.error,helperText:e("time_hint")}))}})})]}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(g.a,{name:"people",validate:K(Q,(a=1,r=12,function(t){return Number(t)<a||Number(t)>r?e("not_between",{min:1,max:12}):void 0})),children:function(t){var a=t.input,r=t.meta;return Object(J.jsx)(N.a,Object(d.a)(Object(d.a)({},a),{},{label:r.touched&&r.error?e("error"):e("people_hint"),error:r.touched&&!!r.error,helperText:r.touched&&r.error?r.error:null}))}})}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(g.a,{name:"area",type:"radio",children:function(t){var a=t.input;return Object(J.jsxs)(C.a,{component:"fieldset",children:[Object(J.jsx)(S.a,{component:"legend",children:e("place")}),Object(J.jsxs)(B.a,Object(d.a)(Object(d.a)({},a),{},{defaultValue:G.area,children:[Object(J.jsx)(D.a,{value:"anywhere",control:Object(J.jsx)(I.a,{}),label:e("place_anywhere")}),Object(J.jsx)(D.a,{value:"upstairs",control:Object(J.jsx)(I.a,{}),label:e("place_upstairs")}),Object(J.jsx)(D.a,{value:"downstairs",control:Object(J.jsx)(I.a,{}),label:e("place_downstairs")})]}))]})}})}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(g.a,{name:"comment",children:function(t){var a=t.input;return Object(J.jsx)(N.a,Object(d.a)(Object(d.a)({},a),{},{label:e("other"),helperText:e("other_hint")}))}})}),Object(J.jsx)(y.a,{item:!0,xs:12,children:Object(J.jsx)(k.a,{type:"submit",variant:"contained",color:"primary",disabled:o||c,children:e("book")})})]})})}})},H=a(88),Q=a(63),X=a(114),Y={en:{translation:{add_new_booking:"Book another table",book:"Book",book_a_table:"Book a table",date:"Date",date_hint:"Not allowed to book earlier then tomorrow",error:"Error",generic_error:"Crap! Something get wrong :(",invalid_number:"Not a number",name:"First Name",name_hint:"First name or nickname",not_between:"Should be between {{min}} and {{max}}",other:"Other requirements",other_hint:"Let us know what else we can do for you",people_hint:"How many people?",place:"Place",place_anywhere:"Anywhere",place_upstairs:"Upstairs (street level)",place_downstairs:"Downstairs (basement)",required:"Required",success_message:"Booking successful. We cannot wait to see you.",time:"Time",time_hint:"In the range from 16:00 till 20:00",too_many_bookings:"Too many bookings for chosen day :(",try_again:"Try again"}},pl:{translation:{add_new_booking:"Zarezerwuj kolejny stolik",book:"Zarezerwuj",book_a_table:"Zarezerwuj stolik",date:"Data",date_hint:"Mo\u017cemy zarezerwowa\u0107 najwcze\u015bniej na jutro",error:"B\u0142\u0105d",genering_error:"Motyla noga! Co\u015b posz\u0142o nie tak :(",invalid_number:"Nieprawid\u0142owy numer",name:"Imi\u0119",name_hint:"Imi\u0119 lub pseudonim",not_between:"Dopuszczamy od {{min}} do {{max}}",other:"Inne wymagania",other_hint:"Napisz co jeszcze mo\u017cemy dla ciebie zrobi\u0107",people_hint:"Dla ilu os\xf3b?",place:"Miejsce",place_anywhere:"Dowolne",place_upstairs:"U g\xf3ry (poziom ulicy)",place_downstairs:"Na dole (piwnica)",required:"Wymagane",success_message:"Stolik zarezerwowany. Do zobaczenia!",time:"Godzina",time_hint:"W zakresie od 16:00 do 20:00",too_many_bookings:"Brak odpowiedniej ilo\u015bci miejsc na wybrany dzie\u0144 :(",try_again:"Spr\xf3buj ponownie"}}};H.a.use(X.a).use(Q.e).init({resources:Y,fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});H.a;var $=Object(i.a)((function(e){return{root:{position:"absolute",flexGrow:1,padding:40,backgroundColor:e.palette.grey[100],top:0,bottom:0,right:0,left:0},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500}}}));var ee=function(){var e=$();return Object(J.jsx)("div",{className:e.root,children:Object(J.jsx)(s.a,{className:e.paper,children:Object(J.jsx)(R,{})})})},te=a(115),ae=a.n(te),re=(a(149),a(153),"book-a-table-prod"),ne={apiKey:"AIzaSyCE6mjxw8cnpm0Z5qW1PesKNCFZxJV0bkw",authDomain:"".concat(re,".firebaseapp.com"),databaseURL:"https://".concat(re,".firebaseio.com"),projectId:re,storageBucket:"".concat(re,".appspot.com"),messagingSenderId:"173934858452",appId:"1:173934858452:web:50fdcc7645b3d229572b41"},oe=ae.a.initializeApp(ne);c.a.render(Object(J.jsx)(n.a.StrictMode,{children:Object(J.jsx)(Z.Provider,{value:{firebase:oe},children:Object(J.jsx)(ee,{})})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.9251aedf.chunk.js.map