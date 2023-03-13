(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a,s=c(9),n=c.n(s),l=c(5),r=c(2),i=c(10),o=c(3),d=c.n(o),j=c(1),u=(c(16),c(17),c(8)),b=c.n(u),h=c(0),O=function(e){var t=e.todos,c=e.showTodo,a=e.selectedTodo;return Object(h.jsxs)("table",{className:" table is-narrow is-fullwidth ",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":a}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:" is-vcentered is-expanded ",children:Object(h.jsx)("p",{className:b()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(h.jsx)("td",{className:" has-text-right is-vcentered ",children:(t=e.id,(null===a||void 0===a?void 0:a.id)===t?Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"far fa-eye-slash"})})}):Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"far fa-eye"})})}))})]},e.id);var t}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var m=function(e){var t=e.query,c=e.onChangeQuery,s=e.filterBy,n=e.setFilterBy;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){var t=e.target;n(t.value)},children:[Object(h.jsx)("option",{value:a.ALL,children:"All"}),Object(h.jsx)("option",{value:a.ACTIVE,children:"Active"}),Object(h.jsx)("option",{value:a.COMPLETED,children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){var t=e.target;c(t.value)}}),t&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Delete",onClick:function(){c("")}})})]})]})},x=(c(19),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var v=function(e){var t=e.hideTodo,c=e.selectedTodo,a=Object(j.useState)(null),s=Object(r.a)(a,2),n=s[0],i=s[1],o=Object(j.useState)(!1),u=Object(r.a)(o,2),b=u[0],O=u[1];return Object(j.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a=(null===c||void 0===c?void 0:c.userId)||0,f("/users/".concat(a));case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O(!0);case 10:case"end":return e.stop()}var a}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),n?Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===c||void 0===c?void 0:c.id)}),Object(h.jsx)("button",{type:"button",className:"delete","aria-label":"Delete","data-cy":"modal-close",onClick:t})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==c&&void 0!==c&&c.completed?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",b?Object(h.jsx)("span",{className:"has-text-danger",children:"The user not found"}):Object(h.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(h.jsx)(x,{})]})},p=function(){var e=Object(j.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(j.useState)(null),o=Object(r.a)(n,2),u=o[0],b=o[1],p=Object(j.useState)(""),N=Object(r.a)(p,2),y=N[0],g=N[1],k=Object(j.useState)(a.ALL),C=Object(r.a)(k,2),T=C[0],w=C[1],E=Object(j.useState)(!0),L=Object(r.a)(E,2),S=L[0],A=L[1],B=Object(j.useState)(!1),D=Object(r.a)(B,2),I=D[0],P=D[1],_=function(e,t,c){var s=Object(i.a)(e);if(t){var n=t.toLowerCase().trim();s=s.filter((function(e){return e.title.toLowerCase().includes(n)}))}switch(c){case a.ACTIVE:return s.filter((function(e){return!e.completed}));case a.COMPLETED:return s.filter((function(e){return e.completed}));default:return s}}(c,y,T);Object(j.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("/todos");case 3:t=e.sent,s(t),A(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),P(!0),A(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var F=Object(j.useCallback)((function(e){b(e)}),[]),M=Object(j.useCallback)((function(){b(null)}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(m,{query:y,onChangeQuery:g,filterBy:T,setFilterBy:w})}),Object(h.jsxs)("div",{className:"block",children:[S&&Object(h.jsx)(x,{}),I?Object(h.jsx)("p",{className:"has-danger-text",children:"Error: Service is Unavailable"}):Object(h.jsx)(O,{todos:_,showTodo:F,selectedTodo:u})]})]})})}),u&&Object(h.jsx)(v,{hideTodo:M,selectedTodo:u})]})};n.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.679d8dae.chunk.js.map