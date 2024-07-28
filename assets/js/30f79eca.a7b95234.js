"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,f=m["".concat(i,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"JavaScript\u6280\u5de7\u4e4bconsole",description:"JavaScript\u6280\u5de7\u4e4bconsole",slug:"js-console",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png"}]},c=void 0,l={permalink:"/blog/js-console",editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/blog/2021-12-25-javascript-console.md",source:"@site/blog/2021-12-25-javascript-console.md",title:"JavaScript\u6280\u5de7\u4e4bconsole",description:"JavaScript\u6280\u5de7\u4e4bconsole",date:"2021-12-25T00:00:00.000Z",formattedDate:"December 25, 2021",tags:[],readingTime:3.76,hasTruncateMarker:!0,authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"}],frontMatter:{title:"JavaScript\u6280\u5de7\u4e4bconsole",description:"JavaScript\u6280\u5de7\u4e4bconsole",slug:"js-console",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"}]},prevItem:{title:"JavaScript\u77e5\u8bc6\u4e4b \u6d45\u62f7\u8d1d\u4e0e\u6df1\u62f7\u8d1d",permalink:"/blog/js-copy"},nextItem:{title:"XSS\u653b\u51fb",permalink:"/blog/blog-xss"}},i={authorsImageUrls:[void 0]},p=[{value:"console.log",id:"consolelog",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"consolelog"},"console.log"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5411\u63a7\u5236\u53f0\u8f93\u51fa\u4e00\u6761\u4fe1\u606f\u3002")),(0,o.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u6253\u5370\u4e00\u4e2a\u6216\u591a\u4e2a\u591a\u4e2a\u5bf9\u8c61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let info = {author:'jim', branch: 'main'};\nlet info2 = {author:'jim', branch: 'main'};\nconsole.log(info,info2);\n// console.log('info:',info);\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/07678ae6cc3ab889a1d8e33d4c05784d.png",alt:"log2"})))}u.isMDXComponent=!0}}]);