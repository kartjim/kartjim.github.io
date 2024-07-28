"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[2455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>C});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=m(n),C=a,u=d["".concat(p,".").concat(C)]||d[C]||N[C]||l;return n?i.createElement(u,r(r({ref:t},k),{},{components:n})):i.createElement(u,r({ref:t},k))}));function C(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>N,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const l={title:"\u6d4f\u89c8\u5668\u76f8\u5173\u77e5\u8bc6",slug:"base-browser"},r=void 0,o={unversionedId:"frontend-interview/\u6d4f\u89c8\u5668\u76f8\u5173",id:"frontend-interview/\u6d4f\u89c8\u5668\u76f8\u5173",title:"\u6d4f\u89c8\u5668\u76f8\u5173\u77e5\u8bc6",description:"\u6d4f\u89c8\u5668\u89e3\u6790 URL",source:"@site/docs\\frontend-interview\\\u6d4f\u89c8\u5668\u76f8\u5173.md",sourceDirName:"frontend-interview",slug:"/frontend-interview/base-browser",permalink:"/docs/frontend-interview/base-browser",draft:!1,editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/docs/frontend-interview/\u6d4f\u89c8\u5668\u76f8\u5173.md",tags:[],version:"current",frontMatter:{title:"\u6d4f\u89c8\u5668\u76f8\u5173\u77e5\u8bc6",slug:"base-browser"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u8fdb\u9636\u4e4b\u7f51\u7edc\u4f20\u8f93",permalink:"/docs/frontend-interview/advance3"},next:{title:"tips",permalink:"/docs/frontend-interview/tip"}},p={},m=[{value:"\u6d4f\u89c8\u5668\u89e3\u6790 URL",id:"\u6d4f\u89c8\u5668\u89e3\u6790-url",level:2},{value:"DNS \u89e3\u6790",id:"dns-\u89e3\u6790",level:3},{value:"TCP \u4e09\u6b21\u63e1\u624b \u56db\u6b21\u6325\u624b",id:"tcp-\u4e09\u6b21\u63e1\u624b-\u56db\u6b21\u6325\u624b",level:3},{value:"\u6d4f\u89c8\u5668\u89e3\u6790\u6587\u6863\u8d44\u6e90\u5e76\u6e32\u67d3\u9875\u9762",id:"\u6d4f\u89c8\u5668\u89e3\u6790\u6587\u6863\u8d44\u6e90\u5e76\u6e32\u67d3\u9875\u9762",level:3},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:3},{value:"OSI",id:"osi",level:2}],k={toc:m};function N(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6d4f\u89c8\u5668\u89e3\u6790-url"},"\u6d4f\u89c8\u5668\u89e3\u6790 URL"),(0,a.kt)("admonition",{title:"\u95ee",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece\u6d4f\u89c8\u5668\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"URL")," \u5230\u6e32\u67d3\u6210\u529f\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7a76\u7adf\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f")),(0,a.kt)("p",null,"\u7ecf\u5386\u8fc7\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u8f93\u5165 URL \u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9 URL \u5730\u5740\u8fdb\u884c DNS \u57df\u540d\u89e3\u6790"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb TCP \u8fde\u63a5\uff08\u4e09\u6b21\u63e1\u624b\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u53d1\u8d77 HTTP \u8bf7\u6c42\u62a5\u6587"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u8fd4\u56de HTTP \u54cd\u5e94\u62a5\u6587"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed TCP \u8fde\u63a5\uff08\u56db\u6b21\u6325\u624b\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u89e3\u6790\u6587\u6863\u8d44\u6e90\u5e76\u6e32\u67d3\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u7ed8\u4e0e\u56de\u6d41\uff08\u5728\u8fd9\u91cc\u8fdb\u884c\u9632\u6296\u4e0e\u8282\u6d41\uff09")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u90a3\u4e48\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f DNS \u89e3\u6790\uff1f "),(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f TCP \u4e09\u6b21\u63e1\u624b\uff0c\u4ec0\u4e48\u662f TCP \u56db\u6b21\u6325\u624b\uff0c\u5b83\u4eec\u7684\u6d41\u7a0b\u662f\u600e\u6837\u7684\uff1f "),(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u89e3\u6790\u6587\u6863\u8d44\u6e90\u5e76\u6e32\u67d3\u9875\u9762\u662f\u4e2a\u600e\u6837\u7684\u6d41\u7a0b\uff1f")),(0,a.kt)("h3",{id:"dns-\u89e3\u6790"},"DNS \u89e3\u6790"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"DNS"),"\uff08Domain Name System\uff09\u662f \u57df\u540d\u7cfb\u7edf \u7684\u82f1\u6587\u7f29\u5199\uff0c\u63d0\u4f9b\u7684\u670d\u52a1\u662f\u7528\u4e8e\u5c06\u4e3b\u673a\u540d\u548c\u57df\u540d\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"IP \u5730\u5740"),"\u7684\u5de5\u4f5c\uff1a")),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u5f53\u7528\u6237\u5728\u6d4f\u89c8\u5668\u8f93\u5165\u7f51\u5740\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"DNS")," \u7ecf\u5386\u4e86\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u6839\u636e\u5730\u5740\uff0c\u5728\u81ea\u8eab\u7f13\u5b58\u4e2d\u67e5\u627e DNS\uff08\u57df\u540d\u670d\u52a1\u5668\uff09 \u4e2d\u7684\u89e3\u6790\u8bb0\u5f55\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5b58\u5728\uff0c\u5219\u76f4\u63a5\u8fd4\u56de IP \u5730\u5740\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u67e5\u627e ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"em"},"hosts")," \u6587\u4ef6"))," \u662f\u5426\u6709\u8be5\u57df\u540d\u7684 DNS \u89e3\u6790\u8bb0\u5f55\uff0c\u5982\u679c\u6709\u5c31\u8fd4\u56de\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u7f13\u5b58\u6216\u8005\u64cd\u4f5c\u7cfb\u7edf\u7684 hosts \u6587\u4ef6\u4e2d\u90fd\u6ca1\u6709\u8fd9\u4e2a\u57df\u540d\u7684 DNS \u89e3\u6790\u8bb0\u5f55\uff0c\u6216\u8005\u5df2\u7ecf\u8fc7\u671f\uff0c\u5219\u5411 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u57df\u540d\u670d\u52a1\u5668"))," \u53d1\u8d77\u8bf7\u6c42\u89e3\u6790\u8fd9\u4e2a\u57df\u540d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5148\u5411 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u672c\u5730\u57df\u540d\u670d\u52a1\u5668"))," \u4e2d\u8bf7\u6c42\uff0c\u8ba9\u5b83\u89e3\u6790\u8fd9\u4e2a\u57df\u540d\uff0c\u5982\u679c\u89e3\u6790\u4e0d\u4e86\uff0c\u5219\u5411 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u6839\u57df\u540d\u670d\u52a1\u5668"))," \u8bf7\u6c42\u89e3\u6790\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u6839\u670d\u52a1\u5668"))," \u7ed9",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u672c\u5730\u57df\u540d\u670d\u52a1\u5668")),"\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u4e3b\u57df\u540d\u670d\u52a1\u5668"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u672c\u5730\u57df\u540d\u670d\u52a1\u5668"),"\u5411",(0,a.kt)("strong",{parentName:"li"},"\u4e3b\u57df\u540d\u670d\u52a1\u5668"),"\u53d1\u8d77\u89e3\u6790\u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u4e3b\u57df\u540d\u670d\u52a1\u5668"))," \u63a5\u6536\u5230\u89e3\u6790\u8bf7\u6c42\u540e\uff0c\u67e5\u627e\u5e76\u8fd4\u56de\u57df\u540d\u5bf9\u5e94\u7684\u57df\u540d\u670d\u52a1\u5668\u7684\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u57df\u540d\u670d\u52a1\u5668\u4f1a\u67e5\u8be2\u5b58\u50a8\u7684\u57df\u540d\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"IP")," \u7684\u6620\u5c04\u5173\u7cfb\u8868\uff0c\u8fd4\u56de\u76ee\u6807 ",(0,a.kt)("inlineCode",{parentName:"li"},"IP")," \u8bb0\u5f55\u4ee5\u53ca\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"TTL"),"\uff08Time To Live\uff09\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u672c\u5730\u57df\u540d\u670d\u52a1\u5668\u63a5\u6536\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"IP")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"TTL")," \u503c\uff0c\u8fdb\u884c\u7f13\u5b58\uff0c\u7f13\u5b58\u7684\u65f6\u95f4\u7531 ",(0,a.kt)("inlineCode",{parentName:"li"},"TTL")," \u503c\u63a7\u5236\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u89e3\u6790\u7684\u7ed3\u679c\u8fd4\u56de\u7ed9\u7528\u6237\uff0c\u7528\u6237\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"li"},"TTL")," \u503c\u7f13\u5b58\u5728\u672c\u5730\u7cfb\u7edf\u7f13\u5b58\u4e2d\uff0c\u57df\u540d\u89e3\u6790\u8fc7\u7a0b\u7ed3\u675f\u3002")),(0,a.kt)("h3",{id:"tcp-\u4e09\u6b21\u63e1\u624b-\u56db\u6b21\u6325\u624b"},"TCP \u4e09\u6b21\u63e1\u624b \u56db\u6b21\u6325\u624b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"TCP"),"\uff08Transmission Control Protocol \u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff09\u662f\u4e00\u79cd\u9762\u5411\u8fde\u63a5\u7684\u3001\u53ef\u9760\u7684\u3001\u57fa\u4e8e\u5b57\u8282\u6d41\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4f20\u8f93\u5c42\u901a\u4fe1\u534f\u8bae"),"\u3002")),(0,a.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5b83\u7684\u4f5c\u7528\u5c31\u662f\u5c06\u6570\u636e\u6d41\u4ece\u4e00\u53f0\u4e3b\u673a\u53ef\u9760\u5730\u4f20\u8f93\u5230\u53e6\u4e00\u53f0\u4e3b\u673a\u3002"),(0,a.kt)("p",null,"\u4e09\u6b21\u63e1\u624b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u63e1\u624b\uff1a\u8d77\u521d\u4e24\u7aef\u90fd\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"CLOSED")," \u5173\u95ed\u72b6\u6001\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u5c06\u6807\u5fd7\u4f4d ",(0,a.kt)("inlineCode",{parentName:"li"},"SYN")," \u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c\u968f\u673a\u4ea7\u751f\u4e00\u4e2a\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"seq = x"),"\uff0c\u5e76\u5c06\u8be5\u6570\u636e\u5305\u53d1\u9001\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"SYN-SENT")," \u72b6\u6001\uff0c\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u786e\u8ba4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b21\u63e1\u624b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u6536\u5230\u6570\u636e\u5305\u540e\u7531\u6807\u5fd7\u4f4d ",(0,a.kt)("inlineCode",{parentName:"li"},"SYN = 1")," \u5f97\u77e5 ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u8bf7\u6c42\u5efa\u7acb\u8fde\u63a5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u5c06\u6807\u5fd7\u4f4d ",(0,a.kt)("inlineCode",{parentName:"li"},"SYN")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"ACK")," \u90fd\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"ack = x + 1"),"\uff0c\u968f\u673a\u4ea7\u751f\u4e00\u4e2a\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"seq = y"),"\uff0c\u5e76\u5c06\u8be5\u6570\u636e\u5305\u53d1\u9001\u7ed9",(0,a.kt)("inlineCode",{parentName:"li"},"Client"),"\u4ee5\u786e\u8ba4\u8fde\u63a5\u8bf7\u6c42\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"SYN-RCVD")," \u72b6\u6001\uff0c\u6b64\u65f6\u64cd\u4f5c\u7cfb\u7edf\u4e3a\u8be5 ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u8fde\u63a5\u5206\u914d ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u7f13\u5b58\u548c\u53d8\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b21\u63e1\u624b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u6536\u5230\u786e\u8ba4\u540e\uff0c\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"li"},"seq")," \u662f\u5426\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"x + 1"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"ACK")," \u662f\u5426\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c\u5982\u679c\u6b63\u786e\u5219\u5c06\u6807\u5fd7\u4f4d ",(0,a.kt)("inlineCode",{parentName:"li"},"ACK")," \u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"ack = y + 1"),"\uff0c\u5e76\u4e14\u6b64\u65f6\u64cd\u4f5c\u7cfb\u7edf\u4e3a\u8be5 ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u8fde\u63a5\u5206\u914d ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u7f13\u5b58\u548c\u53d8\u91cf\uff0c\u5e76\u5c06\u8be5\u6570\u636e\u5305\u53d1\u9001\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"li"},"ack")," \u662f\u5426\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"y + 1"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"ACK")," \u662f\u5426\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c\u5982\u679c\u6b63\u786e\u5219\u8fde\u63a5\u5efa\u7acb\u6210\u529f\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"established")," \u72b6\u6001\uff0c\u5b8c\u6210\u4e09\u6b21\u63e1\u624b\uff0c\u968f\u540e ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u5c31\u53ef\u4ee5\u5f00\u59cb\u4f20\u8f93\u6570\u636e\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TCP\u4e09\u6b21\u63e1\u624b",src:n(1284).Z,width:"437",height:"474"})),(0,a.kt)("p",null,"\u56db\u6b21\u6325\u624b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u6325\u624b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u7684\u5e94\u7528\u8fdb\u7a0b\u5148\u5411\u5176 ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u53d1\u51fa\u8fde\u63a5\u91ca\u653e\u62a5\u6587\u6bb5\uff08FIN = 1\uff0c\u5e8f\u53f7 seq = u\uff09\uff0c\u5e76\u505c\u6b62\u518d\u53d1\u9001\u6570\u636e\uff0c\u4e3b\u52a8\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u8fde\u63a5\uff0c\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"FIN-WAIT-1"),"\uff08\u7ec8\u6b62\u7b49\u5f851\uff09\u72b6\u6001\uff0c\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u7684\u786e\u8ba4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b21\u6325\u624b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u6536\u5230\u8fde\u63a5\u91ca\u653e\u62a5\u6587\u6bb5\u540e\u5373\u53d1\u51fa\u786e\u8ba4\u62a5\u6587\u6bb5\uff0c\uff08ACK = 1\uff0c\u786e\u8ba4\u53f7 ack = u + 1\uff0c\u5e8f\u53f7 seq = v\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"CLOSE-WAIT"),"\uff08\u5173\u95ed\u7b49\u5f85\uff09\u72b6\u6001\uff0c\u6b64\u65f6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u5904\u4e8e\u534a\u5173\u95ed\u72b6\u6001\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u7684\u8fde\u63a5\u91ca\u653e\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u6536\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u7684\u786e\u8ba4\u540e\uff0c\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"FIN-WAIT-2"),"\uff08\u7ec8\u6b62\u7b49\u5f852\uff09\u72b6\u6001\uff0c\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u53d1\u51fa\u7684\u8fde\u63a5\u91ca\u653e\u62a5\u6587\u6bb5\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b21\u6325\u624b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u5df2\u7ecf\u6ca1\u6709\u8981\u5411 ",(0,a.kt)("inlineCode",{parentName:"li"},"Client "),"\u53d1\u51fa\u7684\u6570\u636e\u4e86\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u53d1\u51fa\u8fde\u63a5\u91ca\u653e\u62a5\u6587\u6bb5\uff08FIN = 1\uff0cACK = 1\uff0c\u5e8f\u53f7 seq = w\uff0c\u786e\u8ba4\u53f7 ack = u + 1\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"LAST-ACK"),"\uff08\u6700\u540e\u786e\u8ba4\uff09\u72b6\u6001\uff0c\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u7684\u786e\u8ba4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u6b21\u6325\u624b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u6536\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"Server")," \u7684\u8fde\u63a5\u91ca\u653e\u62a5\u6587\u6bb5\u540e\uff0c\u5bf9\u6b64\u53d1\u51fa\u786e\u8ba4\u62a5\u6587\u6bb5\uff08ACK = 1\uff0cseq = u + 1\uff0cack = w + 1\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"TIME-WAIT"),"\uff08\u65f6\u95f4\u7b49\u5f85\uff09\u72b6\u6001\u3002\u6b64\u65f6 ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u672a\u91ca\u653e\u6389\uff0c\u9700\u8981\u7ecf\u8fc7\u65f6\u95f4\u7b49\u5f85\u8ba1\u65f6\u5668\u8bbe\u7f6e\u7684\u65f6\u95f4 ",(0,a.kt)("inlineCode",{parentName:"li"},"2MSL")," \u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," \u624d\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"CLOSED")," \u72b6\u6001\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TCP\u4e09\u6b21\u63e1\u624b",src:n(1297).Z,width:"563",height:"705"})),(0,a.kt)("h3",{id:"\u6d4f\u89c8\u5668\u89e3\u6790\u6587\u6863\u8d44\u6e90\u5e76\u6e32\u67d3\u9875\u9762"},"\u6d4f\u89c8\u5668\u89e3\u6790\u6587\u6863\u8d44\u6e90\u5e76\u6e32\u67d3\u9875\u9762"),(0,a.kt)("p",null,"\u89e3\u6790\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"HTMLParser")," \u6839\u636e\u6df1\u5ea6\u904d\u5386\u7684\u539f\u5219\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"HTML")," \u89e3\u6790\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"DOM Tree")),(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"CSSParser")," \u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"CSS")," \u89e3\u6790\u6210",(0,a.kt)("inlineCode",{parentName:"li"}," CSS Rule Tree"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"CSSOM Tree"),"\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"JavaScript")," \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"DOM API")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"CSSOM API")," \u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"JS")," \u4ee3\u7801\u89e3\u6790\u5e76\u5e94\u7528\u5230\u5e03\u5c40\u4e2d\uff0c\u6309\u8981\u6c42\u5448\u73b0\u54cd\u5e94\u7684\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"li"},"DOM")," \u6811\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"CSSOM")," \u6811\u6765\u6784\u9020 ",(0,a.kt)("inlineCode",{parentName:"li"},"render Tree")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"layout"),"\uff1a\u91cd\u6392\uff08\u4e5f\u53ef\u4ee5\u53eb\u56de\u6d41\uff09\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"render tree")," \u4e2d\u4efb\u4e00\u8282\u70b9\u7684\u51e0\u4f55\u5c3a\u5bf8\u53d1\u751f\u6539\u53d8\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"render tree")," \u5c31\u4f1a\u91cd\u65b0\u5e03\u5c40\uff0c\u91cd\u65b0\u6765\u8ba1\u7b97\u6240\u6709\u8282\u70b9\u5728\u5c4f\u5e55\u7684\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"repaint"),"\uff1a\u91cd\u7ed8\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"render tree")," \u4e2d\u4efb\u4e00\u5143\u7d20\u6837\u5f0f\u5c5e\u6027\uff08\u51e0\u4f55\u5c3a\u5bf8\u6ca1\u6539\u53d8\uff09\u53d1\u751f\u6539\u53d8\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"render tree")," \u90fd\u4f1a\u91cd\u65b0\u753b\uff0c\u6bd4\u5982\u5b57\u4f53\u989c\u8272\uff0c\u80cc\u666f\u7b49\u53d8\u5316"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"paint"),"\uff1a\u904d\u5386 ",(0,a.kt)("inlineCode",{parentName:"li"},"render tree"),"\uff0c\u5e76\u8c03\u52a8\u786c\u4ef6\u56fe\u5f62 ",(0,a.kt)("inlineCode",{parentName:"li"},"API")," \u6765\u7ed8\u5236\u6bcf\u4e2a\u8282\u70b9\u3002")),(0,a.kt)("h3",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903795420299278"},"jsliang-JS \u9632\u6296\u4e0e\u8282\u6d41")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://web.dev/howbrowserswork/"},"How browsers work"))),(0,a.kt)("h2",{id:"osi"},"OSI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7269\u7406\u5c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u4f20\u8f93\uff0c\u6bd4\u7279",(0,a.kt)("inlineCode",{parentName:"li"},"bit")))),(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u94fe\u8def\u5c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5e27\uff08\u542bMAC\u5730\u5740\uff0c\u5373\u7269\u7406\u5730\u5740\uff09"))),(0,a.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u5c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5305"),(0,a.kt)("li",{parentName:"ul"},"IP\u5730\u5740"))),(0,a.kt)("li",{parentName:"ol"},"\u4f20\u8f93\u5c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u53f7"))),(0,a.kt)("li",{parentName:"ol"},"\u4f1a\u8bdd\u5c42"),(0,a.kt)("li",{parentName:"ol"},"\u8868\u793a\u5c42"),(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u5c42")))}N.isMDXComponent=!0},1284:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/tcp1-8adb1640021f0cb3e72ba5cb21643177.png"},1297:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/tcp2-c60b3836a659aea99589ab00ee723dc4.png"}}]);