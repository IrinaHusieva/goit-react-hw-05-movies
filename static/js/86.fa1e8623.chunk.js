"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{713:function(e,r,t){t.d(r,{Df:function(){return o},TP:function(){return v},tx:function(){return d},z1:function(){return p},zv:function(){return f}});var n=t(861),a=t(757),i=t.n(a),c=t(243),s="fb80b48b1255806de867923f1e41971b";function o(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(s),e.next=4,c.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return l=(0,n.Z)(i().mark((function e(r){var t,n,a,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(r,"&page=").concat(t),e.next=5,c.Z.get(n);case 5:return a=e.sent,e.abrupt("return",a.data.results);case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),l.apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(s),e.next=4,c.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(s),e.next=4,c.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(s),e.next=4,c.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},86:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(791),a=t(439),i=t(713),c=t(87),s={error:"MoviesList_error__jaEDn",heading:"MoviesList_heading__eGJ05",movieList:"MoviesList_movieList__8BnEE",movieItem:"MoviesList_movieItem__p4FQU",movieLink:"MoviesList_movieLink__QlD4H"},o=t(184),u=function(){var e=(0,n.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],p=(0,n.useState)(null),l=(0,a.Z)(p,2),v=l[0],h=l[1];return(0,n.useEffect)((function(){(0,i.Df)().then((function(e){u(e)})).catch((function(e){h("Error fetching trending movies: "+e.message)}))}),[]),(0,o.jsxs)("div",{className:s.moviesListContainer,children:[v&&(0,o.jsx)("div",{className:s.error,children:v}),(0,o.jsx)("h1",{className:s.heading,children:"Trending Movies"}),(0,o.jsx)("ul",{className:s.movieList,children:t.map((function(e){return(0,o.jsx)("li",{className:s.movieItem,children:(0,o.jsx)(c.OL,{to:"/movies/".concat(e.id),className:s.movieLink,children:e.title?e.title:e.name})},e.id)}))})]})},p="Home_homeContainer__YgZSr",l="Home_loading__F+xIo",v=function(){return(0,o.jsx)("div",{className:p,children:(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)("div",{className:l,children:"Loading..."}),children:(0,o.jsx)(u,{searchParams:{query:""}})})})}}}]);
//# sourceMappingURL=86.fa1e8623.chunk.js.map