"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416,165,909],{713:function(e,t,r){r.d(t,{Df:function(){return o},TP:function(){return p},tx:function(){return m},z1:function(){return l},zv:function(){return d}});var n=r(861),i=r(757),s=r.n(i),a=r(243),c="fb80b48b1255806de867923f1e41971b";function o(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c),e.next=4,a.Z.get(t);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(s().mark((function e(t){var r,n,i,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t,"&page=").concat(r),e.next=5,a.Z.get(n);case 5:return i=e.sent,e.abrupt("return",i.data.results);case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),h.apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c),e.next=4,a.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c),e.next=4,a.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c),e.next=4,a.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},165:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(439),i=r(791),s=r(713),a="Cast_castContainer__oFsds",c="Cast_heading__eKBfj",o="Cast_error__A5OsQ",u="Cast_castList__GVdlp",l="Cast_actorItem__hK1Ln",h=r(184),p=function(e){var t=e.movieId,r=(0,i.useState)([]),p=(0,n.Z)(r,2),v=p[0],d=p[1],f=(0,i.useState)(null),m=(0,n.Z)(f,2),_=m[0],x=m[1];(0,i.useEffect)((function(){(0,s.zv)(t).then((function(e){d(e)})).catch((function(e){x("Error fetching trending movies: "+e.message)}))}),[t]);return(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)("h1",{className:c,children:"Cast"}),_?(0,h.jsxs)("p",{className:o,children:["Error: ",_]}):(0,h.jsx)("div",{className:u,children:v.map((function(e){return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200/".concat(e.profile_path):"https://cdn-icons-png.flaticon.com/512/4054/4054617.png",alt:e.name,width:200}),(0,h.jsx)("p",{children:e.name})]},e.id)}))})]})}},416:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(439),i=r(791),s=r(689),a=r(87),c=r(713),o=r(165),u=r(909),l="MovieDetails_movieDetails__ktj2Y",h="MovieDetails_goBackButton__XWXYm",p="MovieDetails_backbtn__ptg+A",v="MovieDetails_link__c-Qn4",d=r(184),f=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,n.Z)(t,2),f=r[0],m=r[1],_=(0,i.useState)(null),x=(0,n.Z)(_,2),g=x[0],j=x[1],w=(0,s.s0)(),b=(0,s.TH)();(0,i.useEffect)((function(){(0,c.TP)(e).then((function(e){m(e)})).catch((function(e){j("Error fetching trending movies: "+e.message)}))}),[e]);if(g)return(0,d.jsx)("div",{children:g});if(!f)return(0,d.jsx)("div",{children:"Loading..."});var k=f.vote_average,y=k?k/10*100:null;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:p,children:(0,d.jsx)("button",{type:"button",onClick:function(){b.pathname.includes("/movies")?w(-1):w("/")},className:h,children:"Go back"})}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{src:f.poster_path?"https://image.tmdb.org/t/p/w500/".concat(f.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,d.jsx)("h2",{children:f.title?f.title:f.name}),(0,d.jsxs)("p",{children:["User Score: ",Math.round(y)," %"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:f.genres&&f.genres.map((function(e){return e.name})).join(" ")})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.OL,{className:v,to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.OL,{className:v,to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,d.jsxs)(s.Z5,{children:[(0,d.jsx)(s.AW,{path:"cast",element:(0,d.jsx)(o.default,{movieId:e})}),(0,d.jsx)(s.AW,{path:"reviews",element:(0,d.jsx)(u.default,{movieId:e})})]})]})]})}},909:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(439),i=r(791),s=r(713),a={reviewsContainer:"Reviews_reviewsContainer__P6f0f",reviewList:"Reviews_reviewList__it9Bj",reviewItem:"Reviews_reviewItem__nj+k4",authorName:"Reviews_authorName__04Tj-",reviewContent:"Reviews_reviewContent__q4Lp5"},c=r(184),o=function(e){var t=e.movieId,r=(0,i.useState)([]),o=(0,n.Z)(r,2),u=o[0],l=o[1],h=(0,i.useState)(null),p=(0,n.Z)(h,2),v=p[0],d=p[1];return(0,i.useEffect)((function(){(0,s.tx)(t).then((function(e){l(e)})).catch((function(e){d("Error fetching trending movies: "+e.message)}))}),[t]),(0,c.jsx)("div",{className:a.reviewsContainer,children:u.length>0?(0,c.jsx)("ul",{className:a.reviewList,children:u.map((function(e){return(0,c.jsxs)("li",{className:a.reviewItem,children:[(0,c.jsx)("h3",{className:a.authorName,children:e.author}),(0,c.jsx)("p",{className:a.reviewContent,children:e.content})]},e.id)}))}):(0,c.jsx)("p",{className:a.noReviews,children:v?"Error: ".concat(v):"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=416.bd3abc79.chunk.js.map