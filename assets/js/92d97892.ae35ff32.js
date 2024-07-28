"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[7538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),w=o,f=u["".concat(p,".").concat(w)]||u[w]||s[w]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"webAPI",slug:"web-api"},a=void 0,l={unversionedId:"frontend-interview/web-api",id:"frontend-interview/web-api",title:"webAPI",description:"window.open",source:"@site/docs/frontend-interview/web-api.md",sourceDirName:"frontend-interview",slug:"/frontend-interview/web-api",permalink:"/docs/frontend-interview/web-api",draft:!1,editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/docs/frontend-interview/web-api.md",tags:[],version:"current",frontMatter:{title:"webAPI",slug:"web-api"},sidebar:"tutorialSidebar",previous:{title:"Node\u76f8\u5173",permalink:"/docs/frontend-interview/node"},next:{title:"\u524d\u7aef\u77e5\u8bc6\u4e4bHTML\u548cJavaScript",permalink:"/docs/frontend-interview/base"}},p={},c=[{value:"<code>window.open</code>",id:"windowopen",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"windowopen"},(0,o.kt)("inlineCode",{parentName:"h2"},"window.open")),(0,o.kt)("p",null,"\u6253\u5f00\u65b0\u7a97\u53e3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5f39\u51fa\u7a97\u53e3",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'window.open("another.html");\n'))),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u8bbe\u7f6e\u5c5e\u6027",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'window.open(\n    "another.html", // \u65b0\u7a97\u53e3\u5730\u5740 + \u6587\u4ef6\u540d\n    \'newwindow\', // \u5f39\u51fa\u7684\u7a97\u53e3\u7684\u540d\u5b57\n    "height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, sttatus = no"\n)\n'))),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5c01\u88c5\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u4e14\u53ef\u4ee5\u540c\u65f6\u8c03\u7528\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"window.open()")," \u6765\u6253\u5f00\u591a\u4e2a\u7a97\u53e3\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"window.close()")," \u6765\u5173\u95ed")))}s.isMDXComponent=!0}}]);