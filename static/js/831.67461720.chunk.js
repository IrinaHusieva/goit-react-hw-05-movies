"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[831],{713:function(r,t,e){e.d(t,{Df:function(){return i},TP:function(){return f},tx:function(){return m},z1:function(){return p},zv:function(){return v}});var n=e(861),c=e(757),a=e.n(c),u=e(243),o="fb80b48b1255806de867923f1e41971b";function i(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(a().mark((function r(){var t,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o),r.next=4,u.Z.get(t);case 4:return e=r.sent,r.abrupt("return",e.data.results);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}function p(r){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(a().mark((function r(t){var e,n,c,i=arguments;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,r.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(e),r.next=5,u.Z.get(n);case 5:return c=r.sent,r.abrupt("return",c.data.results);case 9:return r.prev=9,r.t0=r.catch(1),console.error("Error searching movies:",r.t0),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[1,9]])}))),h.apply(this,arguments)}function f(r){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function r(t){var e,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o),r.next=4,u.Z.get(e);case 4:return n=r.sent,r.abrupt("return",n.data);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.abrupt("return",null);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}function v(r){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function r(t){var e,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o),r.next=4,u.Z.get(e);case 4:return n=r.sent,r.abrupt("return",n.data.cast);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}function m(r){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(a().mark((function r(t){var e,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o),r.next=4,u.Z.get(e);case 4:return n=r.sent,r.abrupt("return",n.data.results);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}},831:function(r,t,e){e.r(t);var n=e(439),c=e(791),a=e(713),u=e(184);t.default=function(r){var t=r.movieId,e=(0,c.useState)([]),o=(0,n.Z)(e,2),i=o[0],s=o[1],p=(0,c.useState)(null),h=(0,n.Z)(p,2),f=h[0],l=h[1];return(0,c.useEffect)((function(){(0,a.tx)(t).then((function(r){s(r)})).catch((function(r){l("Error fetching trending movies: "+r.message)}))}),[t]),(0,u.jsx)("div",{children:i.length>0?(0,u.jsx)("ul",{children:i.map((function(r){return(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:r.author}),(0,u.jsx)("p",{children:r.content})]},r.id)}))}):(0,u.jsx)("p",{children:f?"Error: ".concat(f):"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=831.67461720.chunk.js.map