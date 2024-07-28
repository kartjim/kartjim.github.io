"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[7243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=l,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={title:"XSS\u653b\u51fb",slug:"blog-xss",tags:["xss","frontend"],authors:"can-dy-jack"},i=void 0,o={permalink:"/blog/blog-xss",editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/blog/2021-12-16-XSS\u653b\u51fb.md",source:"@site/blog\\2021-12-16-XSS\u653b\u51fb.md",title:"XSS\u653b\u51fb",description:"- \u4eba\u4eec\u7ecf\u5e38\u5c06\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08Cross Site Scripting\uff09\u7f29\u5199\u4e3aCSS\uff0c\u4f46\u8fd9\u4f1a\u4e0e\u5c42\u53e0\u6837\u5f0f\u8868\uff08Cascading Style Sheets\uff0cCSS\uff09\u7684\u7f29\u5199\u6df7\u6dc6\u3002\u56e0\u6b64\uff0c\u6709\u4eba\u5c06\u8de8\u7ad9\u811a\u672c\u653b\u51fb\u7f29\u5199\u4e3aXSS\u3002",date:"2021-12-16T00:00:00.000Z",formattedDate:"December 16, 2021",tags:[{label:"xss",permalink:"/blog/tags/xss"},{label:"frontend",permalink:"/blog/tags/frontend"}],readingTime:4.835,hasTruncateMarker:!0,authors:[{name:"kart jim",title:"front learner",url:"https://localhost:3000",imageURL:"https://github.com/can-dy-jack.png",key:"can-dy-jack"}],frontMatter:{title:"XSS\u653b\u51fb",slug:"blog-xss",tags:["xss","frontend"],authors:"can-dy-jack"},prevItem:{title:"JavaScript\u6280\u5de7\u4e4bconsole",permalink:"/blog/js-console"},nextItem:{title:"promise\u5b66\u4e60\u7b14\u8bb0",permalink:"/blog/blog-js-promise-use"}},p={authorsImageUrls:[void 0]},c=[{value:"XSS\u653b\u51fb\u5927\u81f4\u4e0a\u5206\u4e3a\u4e24\u7c7b",id:"xss\u653b\u51fb\u5927\u81f4\u4e0a\u5206\u4e3a\u4e24\u7c7b",level:2},{value:"\u53cd\u5c04\u578bXSS",id:"\u53cd\u5c04\u578bxss",level:3},{value:"\u50a8\u5b58\u578bXSS",id:"\u50a8\u5b58\u578bxss",level:3},{value:"\u5371\u5bb3",id:"\u5371\u5bb3",level:2},{value:"\u7a83\u53d6\u7f51\u9875\u6d4f\u89c8\u4e2d\u7684cookie\u503c",id:"\u7a83\u53d6\u7f51\u9875\u6d4f\u89c8\u4e2d\u7684cookie\u503c",level:3},{value:"\u52ab\u6301\u6d41\u91cf\u5b9e\u73b0\u6076\u610f\u8df3\u8f6c",id:"\u52ab\u6301\u6d41\u91cf\u5b9e\u73b0\u6076\u610f\u8df3\u8f6c",level:3},{value:"\u907f\u514dXSS\u653b\u51fb",id:"\u907f\u514dxss\u653b\u51fb",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4eba\u4eec\u7ecf\u5e38\u5c06\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08Cross Site Scripting\uff09\u7f29\u5199\u4e3aCSS\uff0c\u4f46\u8fd9\u4f1a\u4e0e\u5c42\u53e0\u6837\u5f0f\u8868\uff08Cascading Style Sheets\uff0cCSS\uff09\u7684\u7f29\u5199\u6df7\u6dc6\u3002\u56e0\u6b64\uff0c\u6709\u4eba\u5c06\u8de8\u7ad9\u811a\u672c\u653b\u51fb\u7f29\u5199\u4e3aXSS\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08XSS\uff09\uff0c\u662f\u6700\u666e\u904d\u7684Web\u5e94\u7528\u5b89\u5168\u6f0f\u6d1e\u3002\u8fd9\u7c7b\u6f0f\u6d1e\u80fd\u591f\u4f7f\u5f97\u653b\u51fb\u8005\u5d4c\u5165\u6076\u610f\u811a\u672c\u4ee3\u7801\u5230\u6b63\u5e38\u7528\u6237\u4f1a\u8bbf\u95ee\u5230\u7684\u9875\u9762\u4e2d\uff0c\u5f53\u6b63\u5e38\u7528\u6237\u8bbf\u95ee\u8be5\u9875\u9762\u65f6\uff0c\u5219\u53ef\u5bfc\u81f4\u5d4c\u5165\u7684\u6076\u610f\u811a\u672c\u4ee3\u7801\u7684\u6267\u884c\uff0c\u4ece\u800c\u8fbe\u5230\u6076\u610f\u653b\u51fb\u7528\u6237\u7684\u76ee\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728Web\u5b89\u5168\u5a01\u80c1\u524d10\u4f4d\u4e2d\uff0cXSS\u6392\u540d\u7b2c2\uff0c\u4ec5\u6b21\u4e8e\u4ee3\u7801\u6ce8\u5165\uff08Injection\uff09\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"HTML\u662f\u4e00\u79cd\u8d85\u6587\u672c\u6807\u8bb0\u8bed\u8a00\uff0c\u901a\u8fc7\u5c06\u4e00\u4e9b\u5b57\u7b26\u7279\u6b8a\u5730\u5bf9\u5f85\u6765\u533a\u522b\u6587\u672c\u548c\u6807\u8bb0\uff0c\n\u4f8b\u5982\uff0c\u5c0f\u4e8e\u7b26\u53f7\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"\uff09\u88ab\u770b\u4f5c\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"HTML"),"\u6807\u7b7e\u7684\u5f00\u59cb\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"<title>")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"</title>")," \u4e4b\u95f4\u7684\u5b57\u7b26\u662f\u9875\u9762\u7684\u6807\u9898\u7b49\u7b49\u3002\u5f53\u52a8\u6001\u9875\u9762\u4e2d\u63d2\u5165\u7684\u5185\u5bb9\u542b\u6709\u8fd9\u4e9b\u7279\u6b8a\u5b57\u7b26\uff08\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"\uff09\u65f6\uff0c\n\u7528\u6237\u6d4f\u89c8\u5668\u4f1a\u5c06\u5176\u8bef\u8ba4\u4e3a\u662f\u63d2\u5165\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"HTML"),"\u6807\u7b7e\uff0c\u5f53\u8fd9\u4e9b",(0,l.kt)("inlineCode",{parentName:"p"},"HTML"),"\u6807\u7b7e\u5f15\u5165\u4e86\u4e00\u6bb5",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u811a\u672c\u65f6\uff0c\u8fd9\u4e9b\u811a\u672c\u7a0b\u5e8f\u5c31\u5c06\u4f1a\u5728\u7528\u6237\u6d4f\u89c8\u5668\u4e2d\u6267\u884c\u3002\n\u6240\u4ee5\uff0c\u5f53\u8fd9\u4e9b\u7279\u6b8a\u5b57\u7b26\u4e0d\u80fd\u88ab\u52a8\u6001\u9875\u9762\u68c0\u67e5\u6216\u68c0\u67e5\u51fa\u73b0\u5931\u8bef\u65f6\uff0c\u5c31\u5c06\u4f1a\u4ea7\u751f",(0,l.kt)("inlineCode",{parentName:"p"},"XSS"),"\u6f0f\u6d1e\u3002")),(0,l.kt)("h2",{id:"xss\u653b\u51fb\u5927\u81f4\u4e0a\u5206\u4e3a\u4e24\u7c7b"},"XSS\u653b\u51fb\u5927\u81f4\u4e0a\u5206\u4e3a\u4e24\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u7c7b\u662f\u53cd\u5c04\u578b",(0,l.kt)("inlineCode",{parentName:"li"},"XSS"),"\uff0c\u53c8\u79f0\u975e\u6301\u4e45\u578b",(0,l.kt)("inlineCode",{parentName:"li"},"XSS"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u7c7b\u662f\u50a8\u5b58\u578b",(0,l.kt)("inlineCode",{parentName:"li"},"XSS"),"\uff0c\u4e5f\u5c31\u662f\u6301\u4e45\u578b",(0,l.kt)("inlineCode",{parentName:"li"},"XSS"),"\u3002")),(0,l.kt)("h3",{id:"\u53cd\u5c04\u578bxss"},"\u53cd\u5c04\u578bXSS"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u653b\u51fb\u76f8\u5bf9\u4e8e\u8bbf\u95ee\u8005\u800c\u8a00\u662f\u4e00\u6b21\u6027\u7684")),(0,l.kt)("h3",{id:"\u50a8\u5b58\u578bxss"},"\u50a8\u5b58\u578bXSS"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u653b\u51fb\u4ee3\u4ef7\u50a8\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u5f53\u6211\u4eec\u518d\u6b21\u8bbf\u95ee\u76f8\u540c\u9875\u9762\u65f6\uff0c\u5c06\u6076\u610f\u811a\u672c\u4ece\u6570\u636e\u5e93\u4e2d\u53d6\u51fa\u5e76\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\u6267\u884c\u3002\u8fd9\u5c31\u610f\u5473\u7740\u53ea\u8981\u8bbf\u95ee\u4e86\u8fd9\u4e2a\u9875\u9762\u7684\u8bbf\u5ba2\uff0c\u90fd\u6709\u53ef\u80fd\u4f1a\u6267\u884c\u8fd9\u6bb5\u6076\u610f\u811a\u672c\uff0c\u56e0\u6b64\u50a8\u5b58\u578bXSS\u7684\u5371\u5bb3\u4f1a\u66f4\u5927\u3002")),(0,l.kt)("h2",{id:"\u5371\u5bb3"},"\u5371\u5bb3"),(0,l.kt)("p",null,"XSS\u7684\u653b\u51fb\u65b9\u5f0f\u5c31\u662f\u60f3\u529e\u6cd5\u901a\u8fc7\u63d2\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"js"),"\u4ee3\u7801\uff0c\u4f7f\u7528\u6237\u7684\u6d4f\u89c8\u5668\u53bb\u6267\u884c\u4e00\u4e9b\u8fd9\u4e2a\u7f51\u9875\u4e2d\u539f\u672c\u4e0d\u5b58\u5728\u7684\u524d\u7aef\u4ee3\u7801\u3002"),(0,l.kt)("h3",{id:"\u7a83\u53d6\u7f51\u9875\u6d4f\u89c8\u4e2d\u7684cookie\u503c"},"\u7a83\u53d6\u7f51\u9875\u6d4f\u89c8\u4e2d\u7684cookie\u503c"),(0,l.kt)("p",null,"\u5728\u7f51\u9875\u6d4f\u89c8\u4e2d\u6211\u4eec\u5e38\u5e38\u6d89\u53ca\u5230\u7528\u6237\u767b\u5f55\uff0c\u767b\u5f55\u5b8c\u6bd5\u4e4b\u540e\u670d\u52a1\u7aef\u4f1a\u8fd4\u56de\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"cookie"),"\u503c\u3002\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"cookie"),"\u503c\u76f8\u5f53\u4e8e\u4e00\u4e2a\u4ee4\u724c\uff0c\u62ff\u7740\u8fd9\u5f20\u4ee4\u724c\u5c31\u7b49\u540c\u4e8e\u8bc1\u660e\u4e86\u4f60\u662f\u67d0\u4e2a\u7528\u6237\u3002\n\u5982\u679c\u4f60\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"cookie"),"\u503c\u88ab\u7a83\u53d6\uff0c\u90a3\u4e48\u653b\u51fb\u8005\u5f88\u53ef\u80fd\u80fd\u591f\u76f4\u63a5\u5229\u7528\u4f60\u7684\u8fd9\u5f20\u4ee4\u724c\u4e0d\u7528\u5bc6\u7801\u5c31\u767b\u5f55\u4f60\u7684\u8d26\u6237\u3002\n\u5982\u679c\u60f3\u8981\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"script"),"\u811a\u672c\u83b7\u5f97\u5f53\u524d\u9875\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"cookie"),"\u503c\uff0c\u901a\u5e38\u4f1a\u7528\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"document.cookie"),"\u3002"),(0,l.kt)("h3",{id:"\u52ab\u6301\u6d41\u91cf\u5b9e\u73b0\u6076\u610f\u8df3\u8f6c"},"\u52ab\u6301\u6d41\u91cf\u5b9e\u73b0\u6076\u610f\u8df3\u8f6c"),(0,l.kt)("p",null,"\u5c31\u662f\u5728\u7f51\u9875\u4e2d\u60f3\u529e\u6cd5\u63d2\u5165\u4e00\u53e5\u50cf\u8fd9\u6837\u7684\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script>window.location.href="http://www.baidu.com";<\/script>\n')),(0,l.kt)("p",null,"\u90a3\u4e48\u6240\u8bbf\u95ee\u7684\u7f51\u7ad9\u5c31\u4f1a\u88ab\u8df3\u8f6c\u5230\u767e\u5ea6\u7684\u9996\u9875\u3002"),(0,l.kt)("h2",{id:"\u907f\u514dxss\u653b\u51fb"},"\u907f\u514dXSS\u653b\u51fb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fc7\u6ee4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709\u7684\u65f6\u5019\uff0c\u670d\u52a1\u5668\u5f80\u5f80\u4f1a\u5bf9\u4ee3\u7801\u4e2d\u7684\u5173\u952e\u5b57\uff08\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"alert"),"\uff09\u8fdb\u884c\u8fc7\u6ee4\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u5c06\u5173\u952e\u5b57\u8fdb\u884c\u7f16\u7801\u540e\u518d\u63d2\u5165\uff0c\u4e0d\u8fc7\u76f4\u63a5\u663e\u793a\u7f16\u7801\u662f\u4e0d\u80fd\u88ab\u6d4f\u89c8\u5668\u6267\u884c\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"eval()"),"\u6765\u5b9e\u73b0, ",(0,l.kt)("inlineCode",{parentName:"li"},"eval()"),"\u4f1a\u5c06\u7f16\u7801\u8fc7\u7684\u8bed\u53e5\u89e3\u7801\u540e\u518d\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8bf8\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"<script>"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"<img>"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"<a>"),"\u7b49\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u7801",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u50cf\u4e00\u4e9b\u5e38\u89c1\u7684\u7b26\u53f7\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"<>"),"\u5728\u8f93\u5165\u7684\u65f6\u5019\u8981\u5bf9\u5176\u8fdb\u884c\u8f6c\u6362\u7f16\u7801\uff0c\u8fd9\u6837\u505a\u6d4f\u89c8\u5668\u662f\u4e0d\u4f1a\u5bf9\u8be5\u6807\u7b7e\u8fdb\u884c\u89e3\u91ca\u6267\u884c\u7684\uff0c\u540c\u65f6\u4e5f\u4e0d\u5f71\u54cd\u663e\u793a\u6548\u679c\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4ee5\u4e0a\u7684\u6848\u4f8b\u6211\u4eec\u4e0d\u96be\u53d1\u73b0xss\u653b\u51fb\u8981\u80fd\u8fbe\u6210\u5f80\u5f80\u9700\u8981\u8f83\u957f\u7684\u5b57\u7b26\u4e32\uff0c\u56e0\u6b64\u5bf9\u4e8e\u4e00\u4e9b\u53ef\u4ee5\u9884\u671f\u7684\u8f93\u5165\u53ef\u4ee5\u901a\u8fc7\u9650\u5236\u957f\u5ea6\u5f3a\u5236\u622a\u65ad\u6765\u8fdb\u884c\u9632\u5fa1\u3002")))),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/26177815"},"\u77e5\u4e4e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/XSS%E6%94%BB%E5%87%BB/954065?fr=aladdin"},"\u767e\u5ea6\u767e\u79d1"))))}s.isMDXComponent=!0}}]);