(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},s=n(2),u=n(9),o=n(0);function j(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[r].concat(Object(u.a)(e))})),i("")},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){console.log(),i(e.target.value)}})})}var d=n(10),l=n(6),f=n.n(l),b=n(8),p=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=9NASuYGlF9IsguoZrSlRmVUp3RK590Xq&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function m(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})}function h(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(o.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(m,Object(d.a)({},e),e.id)}))})]})}function g(){var e=Object(a.useState)(["one punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertAPP"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(h,{category:e},e)}))})]})}n(17);r.a.render(Object(o.jsx)(g,{}),document.getElementById("root")),i()}},[[18,1,2]]]);
//# sourceMappingURL=main.42802410.chunk.js.map