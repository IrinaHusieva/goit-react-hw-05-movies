"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[810],{713:function(e,t,r){r.d(t,{Df:function(){return o},TP:function(){return h},tx:function(){return m},z1:function(){return p},zv:function(){return f}});var n=r(861),a=r(757),c=r.n(a),s=r(243),u="fb80b48b1255806de867923f1e41971b";function o(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u),e.next=4,s.Z.get(t);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return l=(0,n.Z)(c().mark((function e(t){var r,n,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t,"&page=").concat(r),e.next=5,s.Z.get(n);case 5:return a=e.sent,e.abrupt("return",a.data.results);case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),l.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u),e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u),e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u),e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},810:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(87),i=r(689),p=r(713),l="Movies_moviesContainer__-GVpN",h="Movies_searchInput__Pbx5C",v="Movies_searchButton__xzJkf",f="Movies_resultsContainer__XdaZC",d="Movies_resultsList__Z7uiy",m="Movies_resultsListItem__AnYmG",_="Movies_movieLink__wBd2v",x="Movies_goBackButton__atJX9",b=r(184),g=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],g=(0,u.useState)([]),k=(0,a.Z)(g,2),y=k[0],w=k[1],Z=(0,u.useState)(!1),j=(0,a.Z)(Z,2),C=j[0],N=j[1],M=(0,o.lr)(),E=(0,a.Z)(M,2),S=E[0],B=E[1],z=(0,u.useCallback)(function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.z1)(t);case 3:r=e.sent,w(r),N(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,u.useEffect)((function(){var e=S.get("query");e&&(c(e),z(e))}),[S,z]);var q=(0,i.TH)();return(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)("h1",{children:"Search Movies"}),(0,b.jsx)("input",{className:h,type:"text",value:r,onChange:function(e){return c(e.target.value)}}),(0,b.jsx)("button",{className:v,onClick:function(){B({query:r})},children:"Search"}),C&&y.length>0?(0,b.jsxs)("div",{className:f,children:[(0,b.jsx)("h2",{children:"Search Results"}),(0,b.jsx)("button",{className:x,onClick:function(){q.pathname.includes("/movies")?window.history.back():window.location.href="/"},children:"Go Back"}),(0,b.jsx)("ul",{className:d,children:y.map((function(e){return(0,b.jsx)("li",{className:m,children:(0,b.jsx)(o.rU,{className:_,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]}):C&&0===y.length?(0,b.jsx)("p",{children:"No movies found for your search."}):null]})}}}]);
//# sourceMappingURL=810.d020af81.chunk.js.map