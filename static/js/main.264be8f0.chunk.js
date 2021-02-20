(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{29:function(t,n,e){},37:function(t,n,e){"use strict";e.r(n);var c,o,i,r,a,s,j,l,u,b,d,h=e(0),f=e.n(h),O=e(20),x=e.n(O),p=e(12),g=(e(29),e(24)),m=e(19),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(h.useRef)(t)},w={duration:1,withLog:!0},y=e(4),S=e(5),k=5,z=2,C=Object(S.c)(c||(c=Object(y.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),H=S.b.i(o||(o=Object(y.a)(["\n\tdisplay: flex;\n\tanimation: "," ","s infinite linear;\n\t--size: ","rem;\n\tfont-size: var(--size);\n\twidth: var(--size);\n\theight: var(--size);\n\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-style: initial;\n"])),C,z,(function(t){return t.size||k})),R=e(1),F=function(t){var n=t.counter,e=void 0!==n&&n;return Object(R.jsx)("div",{children:Object(R.jsxs)("p",{children:["HeavyComponent",e&&"counter = ".concat(e)]})})},L=Object(h.lazy)((function(){return new Promise((function(t){setTimeout((function(){return t({default:F})}),5e3)}))})),T=function(){return Object(R.jsx)(h.Suspense,{fallback:Object(R.jsx)(H,{children:"\u267d"}),children:Object(R.jsx)(L,{})})},D=function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=Object(m.a)(Object(m.a)({},w),t),e=n.duration,c=n.withLog,o=Object(h.useState)(!1),i=Object(h.useState)(Date.now()+1e3*e)[0],r=v(),a=0<=Date.now()-i;return Object(h.useEffect)((function(){a||(c&&console.log("useHeavyEvaluations : ",++r.current),setTimeout((function(){return o[1](!o[0])})))}),[o,a,r,c]),function(){return a}}({duration:3}),n=v(0);return function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var c=n.every((function(t){return"boolean"===typeof t?t:t()})),o=Object(h.useState)(c),i=Object(g.a)(o,2),r=i[0],a=i[1];return!r&&c&&a(!0),r}(t)&&Object(R.jsx)(F,{counter:++n.current})},E=e(2),P=S.b.section(i||(i=Object(y.a)(["\n\tbackground-color: #282c34;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: white;\n\tpadding: 0 5vw 0;\n"]))),B=Object(S.a)(r||(r=Object(y.a)(["\n\tborder: 1px solid white;\n"]))),I=S.b.header(a||(a=Object(y.a)(["\n\tmin-height: 10vh;\n\ttext-align: center;\n\t","\n"])),B),J=S.b.main(s||(s=Object(y.a)(["\n\tflex-grow: 1;\n\tdisplay: flex;\n\t","\n"])),B),A=S.b.aside(j||(j=Object(y.a)(["\n\tmax-width: 30vw;\n\tpadding: 1vh;\n\t","\n"])),B),M=S.b.header(l||(l=Object(y.a)(["\n\tpadding-left: 10vw;\n\tflex-grow: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-content: flex-start;\n\t","\n"])),B),q=S.b.header(u||(u=Object(y.a)(["\n\tmin-height: 10vh;\n\t","\n"])),B),G=function(){return Object(R.jsxs)(P,{children:[Object(R.jsx)(I,{children:Object(R.jsx)("p",{children:"React Hooks"})}),Object(R.jsxs)(J,{children:[Object(R.jsx)(A,{children:Object(R.jsx)(Q,{})}),Object(R.jsx)(M,{children:Object(R.jsxs)(E.c,{children:[Object(R.jsx)(E.a,{path:"/useShouldRender",component:D}),Object(R.jsx)(E.a,{path:"/heavyComponentSuspense",component:T}),Object(R.jsx)(E.a,{path:"/"})]})})]}),Object(R.jsx)(q,{})]})},K=Object(S.b)(p.b)(b||(b=Object(y.a)(["\n\ttext-decoration: none;\n\tcolor: wheat;\n\n\t&:hover {\n\t\tcolor: red;\n\t}\n"]))),N=S.b.section(d||(d=Object(y.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-content: flex-start;\n\n\t& > * {\n\t\tpadding-bottom: 1rem;\n\t}\n\t& > :last-child {\n\t\tpadding-bottom: initial;\n\t}\n"]))),Q=function(){return Object(R.jsxs)(N,{children:[Object(R.jsx)(K,{to:"/",children:"Home \ud83c\udfe1"}),Object(R.jsx)(K,{to:"/useShouldRender",children:"useShouldRender"}),Object(R.jsx)(K,{to:"/heavyComponentSuspense",children:"HeavyComponent with Suspence"})]})},U=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,38)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),c(t),o(t),i(t),r(t)}))};x.a.render(Object(R.jsx)(f.a.StrictMode,{children:Object(R.jsx)(p.a,{basename:"/react-hooks",children:Object(R.jsx)(G,{})})}),document.getElementById("root")),U()}},[[37,1,2]]]);
//# sourceMappingURL=main.264be8f0.chunk.js.map