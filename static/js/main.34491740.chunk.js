(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(17),a=n.n(r),s=n(10),i=(n(24),n(1)),u=n(19),l=n(15),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(c.useRef)(e)},d={duration:1,withLog:!0},h=n(2),b=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=Object(l.a)(Object(l.a)({},d),e),n=t.duration,o=t.withLog,r=Object(c.useState)(!1),a=Object(c.useState)(Date.now()+1e3*n)[0],s=j(),i=0<=Date.now()-a;return Object(c.useEffect)((function(){i||(o&&console.log("useHeavyEvaluations : ",++s.current),setTimeout((function(){return r[1](!r[0])})))}),[r,i,s,o]),function(){return i}}({duration:3}),t=j(0),n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.every((function(e){return"boolean"===typeof e?e:e()})),r=Object(c.useState)(o),a=Object(u.a)(r,2),s=a[0],i=a[1];return!s&&o&&(console.log("!shouldRender && isDepsResolved"),i(!0)),s}(e);return n&&console.log("shouldRender: ".concat(n.toString(),", counter.current: ").concat(t.current)),n&&Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["HeavyComponent counter = ",++t.current]})})},p=n(7),O=n.n(p),f=function(){return Object(h.jsxs)("div",{className:O.a.app,children:[Object(h.jsx)("header",{className:O.a.header,children:Object(h.jsx)("p",{children:"React Hooks"})}),Object(h.jsxs)("main",{className:O.a.main,children:[Object(h.jsx)("aside",{className:O.a.menu,children:Object(h.jsx)(s.b,{to:"/useShouldRender",className:O.a.link,children:"useShouldRender"})}),Object(h.jsx)("section",{className:O.a.content,children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/useShouldRender",component:b}),Object(h.jsx)(i.a,{path:"/"})]})})]}),Object(h.jsx)("footer",{className:O.a.footer})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(s.a,{basename:"",children:Object(h.jsx)(f,{})})}),document.getElementById("root")),x()},7:function(e,t,n){e.exports={app:"App_app__1kX79",link:"App_link__TB6Cl"}}},[[31,1,2]]]);
//# sourceMappingURL=main.34491740.chunk.js.map