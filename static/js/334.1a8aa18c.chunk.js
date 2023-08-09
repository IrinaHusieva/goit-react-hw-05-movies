"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[334,357,831],{713:function(e,t,r){r.d(t,{Df:function(){return o},TP:function(){return l},tx:function(){return m},z1:function(){return p},zv:function(){return f}});var n=r(861),i=r(757),c=r.n(i),s=r(243),a="fb80b48b1255806de867923f1e41971b";function o(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a),e.next=4,s.Z.get(t);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(c().mark((function e(t){var r,n,i,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(t,"&page=").concat(r),e.next=5,s.Z.get(n);case 5:return i=e.sent,e.abrupt("return",i.data.results);case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),h.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a),e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a),e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a),e.next=4,s.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},357:function(e,t,r){r.r(t);var n=r(439),i=r(791),c=r(713),s=r(184);t.default=function(e){var t=e.movieId,r=(0,i.useState)([]),a=(0,n.Z)(r,2),o=a[0],u=a[1],p=(0,i.useState)(null),h=(0,n.Z)(p,2),l=h[0],d=h[1];(0,i.useEffect)((function(){(0,c.zv)(t).then((function(e){u(e)})).catch((function(e){d("Error fetching trending movies: "+e.message)}))}),[t]);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Cast"}),l?(0,s.jsxs)("p",{children:["Error: ",l]}):o.map((function(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200/".concat(e.profile_path):"https://cdn-icons-png.flaticon.com/512/4054/4054617.png",alt:e.name,width:200}),(0,s.jsx)("p",{children:e.name})]},e.id)}))]})}},334:function(e,t,r){r.r(t);var n=r(439),i=r(791),c=r(689),s=r(87),a=r(713),o=r(357),u=r(831),p=r(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,i.useState)([]),r=(0,n.Z)(t,2),h=r[0],l=r[1],d=(0,i.useState)(null),f=(0,n.Z)(d,2),v=f[0],m=f[1],x=(0,c.s0)(),g=(0,c.TH)();(0,i.useEffect)((function(){(0,a.TP)(e).then((function(e){l(e)})).catch((function(e){m("Error fetching trending movies: "+e.message)}))}),[e]);if(v)return(0,p.jsx)("div",{children:v});if(!h)return(0,p.jsx)("div",{children:"Loading..."});var j=h.vote_average,b=j?j/10*100:null;return(0,p.jsxs)("div",{children:[(0,p.jsx)("button",{type:"button",onClick:function(){g.pathname.includes("/movies")?x(-1):x("/")},children:"Go back"}),(0,p.jsx)("img",{src:h.poster_path?"https://image.tmdb.org/t/p/w500/".concat(h.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,p.jsx)("h2",{children:h.title?h.title:h.name}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(b)," %"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:h.overview})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("p",{children:h.genres&&h.genres.map((function(e){return e.name})).join(" ")})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.OL,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.OL,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,p.jsxs)(c.Z5,{children:[(0,p.jsx)(c.AW,{path:"cast",element:(0,p.jsx)(o.default,{movieId:e})}),(0,p.jsx)(c.AW,{path:"reviews",element:(0,p.jsx)(u.default,{movieId:e})})]})]})}},831:function(e,t,r){r.r(t);var n=r(439),i=r(791),c=r(713),s=r(184);t.default=function(e){var t=e.movieId,r=(0,i.useState)([]),a=(0,n.Z)(r,2),o=a[0],u=a[1],p=(0,i.useState)(null),h=(0,n.Z)(p,2),l=h[0],d=h[1];return(0,i.useEffect)((function(){(0,c.tx)(t).then((function(e){u(e)})).catch((function(e){d("Error fetching trending movies: "+e.message)}))}),[t]),(0,s.jsx)("div",{children:o.length>0?(0,s.jsx)("ul",{children:o.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}):(0,s.jsx)("p",{children:l?"Error: ".concat(l):"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=334.1a8aa18c.chunk.js.map