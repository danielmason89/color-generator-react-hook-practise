(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=(a(10),a(1));var u=function(e){var t=e.rgb,a=e.weight,r=e.index,l=e.hexColor,u=Object(n.useState)(!1),s=Object(o.a)(u,2),m=(s[0],s[1],t.join(",")),i="#".concat(l);return c.a.createElement("article",{className:"color ".concat(r>10&&"color-light"),style:{backgroundColor:"rgb(".concat(m,")")}},c.a.createElement("p",{className:"percent-value"},a,"%"),c.a.createElement("p",{className:"color-value"},i))},s=a(4),m=a.n(s);var i=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],b=s[1],p=Object(n.useState)([]),E=Object(o.a)(p,2),h=E[0],d=E[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"container"},c.a.createElement("h3",null,"Color Generator App"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=new m.a(a).all(10);d(t),b(!1)}catch(i){b(!0),console.log(i)}}},c.a.createElement("input",{type:"type",value:a,onChange:function(e){return r(e.target.value)},placeholder:"#f105ad",className:"".concat(i?"error":null)}),c.a.createElement("button",{className:"btn",type:"submit"},"Submit"))),c.a.createElement("section",{className:"colors"},h.map((function(e,t){return c.a.createElement(u,Object.assign({key:t},e,{index:t,hexColor:e.hex}))}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.91829694.chunk.js.map