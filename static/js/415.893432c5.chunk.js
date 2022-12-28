"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{368:function(n,t,r){r.d(t,{O:function(){return i}});var e=r(603),a=r(184),i=function(n){var t=n.movies,r=n.location;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.Ul,{children:t.map((function(n){var t=n.id,i=n.title,s=n.poster_path;return(0,a.jsx)(e.Li,{children:(0,a.jsxs)(e.jJ,{to:"/movies/".concat(t),state:{from:r},children:[(0,a.jsx)(e.Ei,{src:s?"".concat("https://image.tmdb.org/t/p/w500/").concat(s):"https://e7.pngegg.com/pngimages/84/530/png-clipart-film-clapperboard-computer-icons-cinema-shows-miscellaneous-angle.png",alt:i}),(0,a.jsx)(e.Dr,{children:i})]})},t)}))})})}},603:function(n,t,r){r.d(t,{Dr:function(){return v},Dx:function(){return l},Ei:function(){return m},Li:function(){return d},Ul:function(){return x},jJ:function(){return h}});var e,a,i,s,c,u,o=r(168),p=r(444),f=r(87),l=p.ZP.h2(e||(e=(0,o.Z)(["\n  text-align: center;\n  padding: 10px 0;\n"]))),x=p.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  list-style: none;\n  padding: 10px 3px;\n"]))),d=p.ZP.li(i||(i=(0,o.Z)(["\n  width: 220px;\n  border-radius: 5px;\n  padding-bottom: 3px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  &:hover {\n    transform: scale(1.03);\n  }\n  transition: transform 250ms linear;\n"]))),h=(0,p.ZP)(f.rU)(s||(s=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 7px;\n  text-decoration: none;\n  color: #212121;\n  font-size: 18px;\n  font-weight: 700;\n"]))),m=p.ZP.img(c||(c=(0,o.Z)(["\n  width: 220px;\n"]))),v=p.ZP.span(u||(u=(0,o.Z)([""])))},415:function(n,t,r){r.r(t);var e=r(439),a=r(791),i=r(689),s=r(171),c=r(368),u=r(603),o=r(184);t.default=function(){var n=(0,i.TH)(),t=(0,a.useState)([]),r=(0,e.Z)(t,2),p=r[0],f=r[1];return(0,a.useEffect)((function(){(0,s.vw)().then(f)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Dx,{children:"Trending movies"}),(0,o.jsx)(c.O,{movies:p,location:n})]})}},171:function(n,t,r){r.d(t,{BG:function(){return l},Pv:function(){return p},kK:function(){return d},sv:function(){return m},vw:function(){return u}});var e=r(861),a=r(757),i=r.n(a),s=r(388),c="e7bdbd1d27e36c8088a4364bac7f860e";function u(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("trending/movie/day",{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("search/movie",{params:{api_key:c,query:t,page:r}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=415.893432c5.chunk.js.map