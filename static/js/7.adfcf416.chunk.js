"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{713:function(r,e,t){t.d(e,{Df:function(){return i},TP:function(){return l},tx:function(){return m},z1:function(){return p},zv:function(){return v}});var n=t(861),c=t(757),a=t.n(c),u=t(243),o="fb80b48b1255806de867923f1e41971b";function i(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(a().mark((function r(){var e,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o),r.next=4,u.Z.get(e);case 4:return t=r.sent,r.abrupt("return",t.data.results);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}function p(r){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(a().mark((function r(e){var t,n,c,i=arguments;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,r.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(e,"&page=").concat(t),r.next=5,u.Z.get(n);case 5:return c=r.sent,r.abrupt("return",c.data.results);case 9:return r.prev=9,r.t0=r.catch(1),console.error("Error searching movies:",r.t0),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[1,9]])}))),h.apply(this,arguments)}function l(r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function r(e){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o),r.next=4,u.Z.get(t);case 4:return n=r.sent,r.abrupt("return",n.data);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.abrupt("return",null);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}function v(r){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function r(e){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o),r.next=4,u.Z.get(t);case 4:return n=r.sent,r.abrupt("return",n.data.cast);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}function m(r){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(a().mark((function r(e){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o),r.next=4,u.Z.get(t);case 4:return n=r.sent,r.abrupt("return",n.data.results);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}},7:function(r,e,t){t.r(e);var n=t(861),c=t(439),a=t(757),u=t.n(a),o=t(791),i=t(87),s=t(689),p=t(713),h=t(184);e.default=function(){var r=(0,o.useState)(""),e=(0,c.Z)(r,2),t=e[0],a=e[1],l=(0,o.useState)([]),f=(0,c.Z)(l,2),v=f[0],d=f[1],m=(0,i.lr)(),b=(0,c.Z)(m,2),x=b[0],g=b[1],k=(0,o.useCallback)(function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.z1)(e);case 3:t=r.sent,d(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),[]);(0,o.useEffect)((function(){var r=x.get("query");r&&(a(r),k(r))}),[x,k]);var y=(0,s.TH)();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Search Movies"}),(0,h.jsx)("input",{type:"text",value:t,onChange:function(r){return a(r.target.value)}}),(0,h.jsx)("button",{onClick:function(){g({query:t})},children:"Search"}),v.length>0?(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Search Results"}),(0,h.jsx)("ul",{children:v.map((function(r){return(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{to:"/movies/".concat(r.id),children:r.title})},r.id)}))})]}):(0,h.jsx)("p",{children:"No movies found for your search."}),(0,h.jsx)("button",{onClick:function(){y.pathname.includes("/movies")?window.history.back():window.location.href="/"},children:"Go Back"})]})}}}]);
//# sourceMappingURL=7.adfcf416.chunk.js.map