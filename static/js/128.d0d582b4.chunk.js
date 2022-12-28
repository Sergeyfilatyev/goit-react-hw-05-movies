"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[128],{128:function(n,r,e){e.r(r),e.d(r,{default:function(){return g}});var t,a,u,i,s,c=e(439),p=e(168),o=e(444),f=o.ZP.ul(t||(t=(0,p.Z)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),d=o.ZP.li(a||(a=(0,p.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),l=o.ZP.h3(u||(u=(0,p.Z)(["\n  margin-bottom: 10px;\n  text-align: center;\n"]))),x=o.ZP.p(i||(i=(0,p.Z)(["\n  border-radius: 5px;\n  background-color: #f7f8e0;\n"]))),h=e(184),v=function(n){var r=n.reviews;return(0,h.jsx)(f,{children:r.map((function(n){var r=n.id,e=n.author,t=n.content;return(0,h.jsxs)(d,{children:[(0,h.jsx)(l,{children:e}),(0,h.jsx)(x,{children:t})]},r)}))})},m=o.ZP.p(s||(s=(0,p.Z)(["\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  color: #fe642e;\n  font-weight: 700;\n  text-align: center;\n  padding: 20px;\n"]))),Z=function(){return(0,h.jsx)(m,{children:"We don't have reviews for this movie."})},b=e(791),w=e(689),y=e(171),g=function(){var n=(0,w.UO)().movieId,r=(0,b.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1];return(0,b.useEffect)((function(){(0,y.sv)(n).then(a)}),[n]),(0,h.jsx)(h.Fragment,{children:t.length>0?(0,h.jsx)(v,{reviews:t}):(0,h.jsx)(Z,{})})}},171:function(n,r,e){e.d(r,{BG:function(){return d},Pv:function(){return o},kK:function(){return x},sv:function(){return v},vw:function(){return c}});var t=e(861),a=e(757),u=e.n(a),i=e(388),s="e7bdbd1d27e36c8088a4364bac7f860e";function c(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("trending/movie/day",{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n,r){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(u().mark((function n(r,e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("search/movie",{params:{api_key:s,query:r,page:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(r),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(r,"/credits"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=128.d0d582b4.chunk.js.map