"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[700],{960:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(439),u=n(791),i=n(861),c=n(757),a=n.n(c),s=n(243),o="fb80b48b1255806de867923f1e41971b";function l(){return(l=(0,i.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o),e.next=4,s.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var f=n(87),h=n(184),d=function(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],c=(0,u.useState)(null),a=(0,r.Z)(c,2),s=a[0],o=a[1];return(0,u.useEffect)((function(){(function(){return l.apply(this,arguments)})().then((function(e){i(e)})).catch((function(e){o("Error fetching trending movies: "+e.message)}))}),[]),(0,h.jsxs)("div",{children:[s&&(0,h.jsx)("div",{children:s}),(0,h.jsx)("h1",{children:"Trending Movies"}),(0,h.jsx)("ul",{children:n.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(f.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},700:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),u=n(791),i=n(184),c=function(e){var t=e.onSubmit,n=(0,u.useState)(""),c=(0,r.Z)(n,2),a=c[0],s=c[1];return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[(0,i.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},a=n(960),s=function(){var e=(0,u.useState)({query:""}),t=(0,r.Z)(e,2),n=t[0],s=t[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Movies Page"}),(0,i.jsx)(c,{onSubmit:function(e){s({query:e.query})}}),(0,i.jsx)(a.Z,{searchParams:n})]})}}}]);
//# sourceMappingURL=700.3e396ad1.chunk.js.map