(this.webpackJsonpcloud=this.webpackJsonpcloud||[]).push([[0],{57:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),r=n.n(a),s=n(10),i=n.n(s),l=(n(57),n(30)),o=n(18),j=(n(62),n(40)),d=n(106),u=n(103),b=n(99),O=Object(b.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function h(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=(n[0],n[1]),s=Object(a.useState)(null),i=Object(l.a)(s,2),b=i[0],h=i[1],m=Object(o.b)(),x=Object(o.c)((function(e){return e})),f=O();return Object(a.useEffect)((function(){fetch("https://reqres.in/api/users?delay=3").then((function(e){return e.json()})).then((function(e){r(e.data),console.log(e.data),m({type:"UPDATE",state:e.data}),h(" ")}))}),[]),Object(c.jsxs)(c.Fragment,{children:[b||Object(c.jsx)(d.a,{className:f.backdrop,open:!0,children:Object(c.jsx)(u.a,{color:"inherit"})}),Object(c.jsx)("section",{id:"team",class:"pb-5",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h5",{className:"section-title h1",children:"OUR TEAM"}),Object(c.jsx)("div",{className:"row",children:x.map((function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"frontside",children:Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body text-center",children:Object(c.jsxs)(j.b,{to:{pathname:"/userInfo",userId:e.id},children:[Object(c.jsx)("p",{children:Object(c.jsx)("img",{className:" img-fluid",src:e.avatar})}),Object(c.jsx)("h4",{className:"card-title",children:e.email}),Object(c.jsxs)("p",{className:"card-text",children:[e.first_name,"  ",e.last_name]})]})})})})})})},e.id)})}))})]})})]})}var m=n(9);function x(e){var t=Object(o.c)((function(e){return e})),n=Object(a.useState)([{id:"",email:"",first_name:"",last_name:"",avatar:""}]),r=Object(l.a)(n,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){i(t.filter((function(t){return t.id==e.location.userId})))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{style:{display:"flex",justifyContent:"center",marginTop:"10%"},children:Object(c.jsx)("img",{src:s[0].avatar,alt:"Emma"})}),Object(c.jsxs)("div",{style:{textAlign:"center",marginTop:"50px",backgroundColor:"grey"},children:[Object(c.jsxs)("h3",{children:["User ID : ",s[0].id]}),Object(c.jsxs)("h3",{children:["First Name : ",s[0].first_name]}),Object(c.jsxs)("h3",{children:["Last Name : ",s[0].last_name]}),Object(c.jsxs)("h3",{children:["Email Address : ",s[0].email]})]})]})}var f=n(108),p=n(107),v=n(104),g=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function T(){var e=Object(o.b)(),t=g(),n=r.a.useState({}),a=Object(l.a)(n,2),s=a[0];a[1];return Object(c.jsx)("div",{children:Object(c.jsxs)(p.a,{className:t.formControl,children:[Object(c.jsx)(f.a,{htmlFor:"age-native-simple",children:"Sort By"}),Object(c.jsxs)(v.a,{native:!0,value:s.age,onChange:function(t){console.log("event"+t.currentTarget.value),20==t.currentTarget.value&&e({type:"SORTBYFIST",state:null}),30==t.currentTarget.value&&e({type:"SORTBYLAST",state:null})},children:[Object(c.jsx)("option",{"aria-label":"None",value:""}),Object(c.jsx)("option",{value:10,children:"None"}),Object(c.jsx)("option",{value:20,children:"First Name"}),Object(c.jsx)("option",{value:30,children:"Last Name"})]})]})})}var N=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsxs)(j.a,{children:[Object(c.jsx)(m.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(m.a,{path:"/userInfo",component:x})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"UPDATE"===t.type?t.state:"SORTBYFIST"===t.type?(console.log("entered"+e),e.slice().sort((function(e,t){var n=e.first_name.toLowerCase(),c=t.first_name.toLowerCase();return n<c?-1:n>c?1:0}))):"SORTBYLAST"===t.type?(console.log("entered"+e),e.slice().sort((function(e,t){var n=e.last_name.toLowerCase(),c=t.last_name.toLowerCase();return n<c?-1:n>c?1:0}))):e},F=n(37),C=Object(F.b)(S);i.a.render(Object(c.jsx)(o.a,{store:C,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),y();t.default=C}},[[64,1,2]]]);
//# sourceMappingURL=main.a2726b05.chunk.js.map