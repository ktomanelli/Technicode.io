(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m})),a.d(t,"query",(function(){return p}));var n=a("Wbzz"),r=a("q1tI"),o=a.n(r),l=a("vOnD"),s=a("e3TN"),i=l.b.div.withConfig({displayName:"pages__HomeStyle",componentId:"ifild7-0"})([".posts{padding:1rem;margin-left:10vw;}p{color:#8694b1;}"]),c=l.b.a.withConfig({displayName:"pages__LinkStyle",componentId:"ifild7-1"})(["a{font-size:1.7em;font-weight:700;}"]);function m(e){var t=e.data.allMarkdownRemark.nodes.sort((function(e,t){return Date.parse(t.frontmatter.date)-Date.parse(e.frontmatter.date)}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(i,null,o.a.createElement("div",{className:"posts"},t.map((function(e){var t=e.frontmatter.title,a="/posts/"+t.replace(/\s+/g,"-").toLowerCase(),r=function(e){var t=new Date(Date.parse(e));return t.setHours(t.getHours()+5),t}(e.frontmatter.date);return o.a.createElement("div",{key:e.id,className:"posts"},o.a.createElement(c,null,o.a.createElement(n.a,{to:a},o.a.createElement("span",{className:"title"},t))),o.a.createElement("p",null,r.toDateString()))}))))))}var p="2135346586"}}]);
//# sourceMappingURL=component---src-pages-index-js-426671a7be08568aa1e5.js.map