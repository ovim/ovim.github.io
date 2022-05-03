"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1815],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=i,d=s["".concat(u,".").concat(k)]||s[k]||m[k]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb"},u=void 0,p={unversionedId:"git/readme",id:"git/readme",title:"\u7b80\u4ecb",description:"Git \u5b98\u7f51",source:"@site/docs/git/readme.md",sourceDirName:"git",slug:"/git/",permalink:"/docs/git/",tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb"},sidebar:"Version control",previous:{title:"\u7248\u672c\u63a7\u5236\u7cfb\u7edf",permalink:"/docs/version-control/"},next:{title:"\u57fa\u7840",permalink:"/docs/git/base"}},c={},m=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u5386\u53f2",id:"\u5386\u53f2",level:3},{value:"\u547d\u540d",id:"\u547d\u540d",level:3},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:2},{value:"\u56db\u8981\u7d20",id:"\u56db\u8981\u7d20",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"GUI \u5ba2\u6237\u7aef",id:"gui-\u5ba2\u6237\u7aef",level:2},{value:"\u5bf9\u6bd4",id:"\u5bf9\u6bd4",level:2}],s={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git \u5b98\u7f51"),"\n~\n",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs"},"\u5b98\u65b9\u6587\u6863"),"\n~\n",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/about"},"\u5b98\u65b9\u5bf9\u6bd4")),(0,a.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Git \u662f\u4e00\u4e2a\u514d\u8d39\u3001\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u7528\u4e8e\u654f\u6377\u9ad8\u6548\u5730\u5904\u7406\u4efb\u4f55\u6216\u5c0f\u6216\u5927\u7684\u9879\u76ee\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"Git \u662f Linus Torvalds \u4e3a\u4e86\u5e2e\u52a9\u7ba1\u7406 Linux \u5185\u6838\u5f00\u53d1\u800c\u5f00\u53d1\u7684\u4e00\u4e2a\u5f00\u653e\u6e90\u7801\u7684\u7248\u672c\u63a7\u5236\u8f6f\u4ef6\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"Git \u4e0e\u5e38\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177 CVS, Subversion \u7b49\u4e0d\u540c\uff0c\u5b83\u91c7\u7528\u4e86\u5206\u5e03\u5f0f\u7248\u672c\u5e93\u7684\u65b9\u5f0f\uff0c\u4e0d\u5fc5\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6\u652f\u6301\u3002")),(0,a.kt)("h3",{id:"\u5386\u53f2"},"\u5386\u53f2"),(0,a.kt)("p",null,"\u81ea2002\u5e74\u5f00\u59cb\uff0c\u6797\u7eb3\u65af\xb7\u6258\u74e6\u5179\u51b3\u5b9a\u4f7f\u7528BitKeeper\u4f5c\u4e3aLinux\u5185\u6838\u4e3b\u8981\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7528\u4ee5\u7ef4\u62a4\u4ee3\u7801\u3002\u56e0\u4e3aBitKeeper\u4e3a\u4e13\u6709\u8f6f\u4ef6\uff0c\u8fd9\u4e2a\u51b3\u5b9a\u5728\u793e\u7fa4\u4e2d\u957f\u671f\u906d\u53d7\u8d28\u7591\u3002\u5728Linux\u793e\u7fa4\u4e2d\uff0c\u7279\u522b\u662f\u7406\u67e5\u5fb7\xb7\u65af\u6258\u66fc\u4e0e\u81ea\u7531\u8f6f\u4ef6\u57fa\u91d1\u4f1a\u7684\u6210\u5458\uff0c\u4e3b\u5f20\u5e94\u8be5\u4f7f\u7528\u5f00\u653e\u6e90\u4ee3\u7801\u7684\u8f6f\u4ef6\u6765\u4f5c\u4e3aLinux\u5185\u6838\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u3002\u6797\u7eb3\u65af\xb7\u6258\u74e6\u5179\u66fe\u8003\u8651\u8fc7\u91c7\u7528\u73b0\u6210\u8f6f\u4ef6\u4f5c\u4e3a\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08\u4f8b\u5982Monotone\uff09\uff0c\u4f46\u8fd9\u4e9b\u8f6f\u4ef6\u90fd\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff0c\u7279\u522b\u662f\u6027\u80fd\u4e0d\u4f73\u3002\u73b0\u6210\u7684\u65b9\u6848\uff0c\u5982CVS\u7684\u67b6\u6784\uff0c\u53d7\u5230\u6797\u7eb3\u65af\xb7\u6258\u74e6\u5179\u7684\u6279\u8bc4","[11]","\u3002"),(0,a.kt)("p",null,"2005\u5e74\uff0c\u5b89\u5fb7\u9c81\xb7\u5782\u9e20\u5199\u4e86\u4e00\u4e2a\u7b80\u5355\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u8fde\u63a5BitKeeper\u7684\u4ed3\u5e93\uff0cBitKeeper\u8457\u4f5c\u6743\u62e5\u6709\u8005\u62c9\u91cc\xb7\u9ea6\u6c83\u4f0a\u8ba4\u4e3a\u5b89\u5fb7\u9c81\xb7\u5782\u9e20\u5bf9BitKeeper\u5185\u90e8\u4f7f\u7528\u7684\u534f\u8bae\u8fdb\u884c\u9006\u5411\u5de5\u7a0b\uff0c\u51b3\u5b9a\u6536\u56de\u65e0\u507f\u4f7f\u7528BitKeeper\u7684\u8bb8\u53ef\u3002Linux\u5185\u6838\u5f00\u53d1\u56e2\u961f\u4e0eBitMover\u516c\u53f8\u8fdb\u884c\u78cb\u5546\uff0c\u4f46\u65e0\u6cd5\u89e3\u51b3\u4ed6\u4eec\u4e4b\u95f4\u7684\u6b67\u89c1\u3002\u6797\u7eb3\u65af\xb7\u6258\u74e6\u5179\u51b3\u5b9a\u81ea\u884c\u5f00\u53d1\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u66ff\u4ee3BitKeeper\uff0c\u4ee5\u5341\u5929\u7684\u65f6\u95f4\u7f16\u5199\u51fagit\u7b2c\u4e00\u4e2a\u7248\u672c","[12][13]","\u3002"),(0,a.kt)("h3",{id:"\u547d\u540d"},"\u547d\u540d"),(0,a.kt)("p",null,"\u6797\u7eb3\u65af\xb7\u6258\u74e6\u5179\u8bbd\u523a\u5730\u5632\u7b11git\u8fd9\u4e2a\u540d\u5b57\uff08\u5728\u82f1\u5f0f\u82f1\u8bed\u4fda\u8bed\u4e2d\u8868\u793a\u201c\u4e0d\u6109\u5feb\u7684\u4eba\u201d\uff09","[14][15]","[16]"),(0,a.kt)("p",null,"\u6e90\u4ee3\u7801\u7684\u81ea\u8ff0\u6587\u4ef6\u8fdb\u4e00\u6b65\u9610\u8ff0\u4e86\uff1a","[17]"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'The name "git" was given by Linus Torvalds when he wrote the very first version. He described the tool as "the stupid content tracker" and the name as (depending on your way):'),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},'random three-letter combination that is pronounceable, and not actually used by any common UNIX command. The fact that it is a mispronunciation of "get" may or may not be relevant.'),(0,a.kt)("li",{parentName:"ul"},'"global information tracker": you\'re in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room.'),(0,a.kt)("li",{parentName:"ul"},"stupid. contemptible and despicable. simple. Take your pick from the dictionary of slang.")),(0,a.kt)("p",{parentName:"blockquote"},"\u6797\u7eb3\u65af\xb7\u6258\u74e6\u5179\u5728\u7f16\u5199\u7b2c\u4e00\u4e2a\u7248\u672c\u65f6\u5c31\u4f7f\u7528\u4e86\u201cgit\u201d\u8fd9\u4e2a\u540d\u79f0\u3002 \u4ed6\u5c06\u5de5\u5177\u63cf\u8ff0\u4e3a\u201c\u611a\u8822\u7684\u5185\u5bb9\u8ddf\u8e2a\u5668\u201d\uff0c\u5e76\u5c06\u5176\u63cf\u8ff0\u4e3a\uff08\u53d6\u51b3\u4e8e\u60a8\u7684\u65b9\u5f0f\uff09\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u53d1\u97f3\u5ff5\u51fa\u7684\u968f\u673a\u4e09\u4e2a\u5b57\u6bcd\u7ec4\u5408\uff0c\u800c\u4e14\u5e76\u672a\u88ab\u5b9e\u9645\u7528\u5728\u4efb\u4f55 UNIX \u6307\u4ee4\u4e0a\u3002\u5b83\u662f\u201cget\u201d\u7684\u9519\u8bef\u53d1\u97f3\uff0c\u8fd9\u70b9\u53ef\u80fd\u76f8\u5173\u4e5f\u53ef\u80fd\u65e0\u5173\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u201c\u5168\u7403\u4fe1\u606f\u8ddf\u8e2a\u5668\u201d\uff1a\u60a8\u7684\u5fc3\u60c5\u4e0d\u9519\uff0c\u5bf9\u4f60\u800c\u8a00\u5b83\u4e5f\u786e\u5b9e\u8bf4\u5f97\u901a\u3002\u5929\u4f7f\u5531\u6b4c\uff0c\u623f\u95f4\u7a81\u7136\u5145\u6ee1\u5149\u660e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u611a\u8822\u7684\u3002\u9119\u89c6\u548c\u5351\u9119\u7684\u3002\u7b80\u5355\u3002\u4ece\u4fda\u8bed\u5b57\u5178\u4e2d\u9009\u62e9\u3002")))),(0,a.kt)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),(0,a.kt)("p",null,"git\u662f\u7528\u4e8eLinux\u5185\u6838\u5f00\u53d1\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177\u3002\u4e0eCVS\u3001Subversion\u4e00\u7c7b\u7684\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177\u4e0d\u540c\uff0c\u5b83\u91c7\u7528\u4e86\u5206\u5e03\u5f0f\u7248\u672c\u5e93\u7684\u4f5c\u6cd5\uff0c\u4e0d\u9700\u8981\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6\uff0c\u5c31\u53ef\u4ee5\u8fd0\u4f5c\u7248\u672c\u63a7\u5236\uff0c\u4f7f\u5f97\u6e90\u4ee3\u7801\u7684\u53d1\u5e03\u548c\u4ea4\u6d41\u6781\u5176\u65b9\u4fbf\u3002git\u7684\u901f\u5ea6\u5f88\u5feb\uff0c\u8fd9\u5bf9\u4e8e\u8bf8\u5982Linux\u5185\u6838\u8fd9\u6837\u7684\u5927\u9879\u76ee\u6765\u8bf4\u81ea\u7136\u5f88\u91cd\u8981\u3002git\u6700\u4e3a\u51fa\u8272\u7684\u662f\u5b83\u7684\u5408\u5e76\u8ffd\u8e2a\uff08merge tracing\uff09\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0aLinux\u5185\u6838\u5f00\u53d1\u56e2\u961f\u51b3\u5b9a\u5f00\u59cb\u5f00\u53d1\u548c\u4f7f\u7528git\u6765\u4f5c\u4e3a\u5185\u6838\u5f00\u53d1\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7684\u65f6\u5019\uff0c\u4e16\u754c\u4e0a\u5f00\u6e90\u793e\u7fa4\u7684\u53cd\u5bf9\u58f0\u97f3\u4e0d\u5c11\uff0c\u6700\u5927\u7684\u7406\u7531\u662fgit\u592a\u8270\u6da9\u96be\u61c2\uff0c\u4ecegit\u7684\u5185\u90e8\u5de5\u4f5c\u673a\u5236\u6765\u8bf4\uff0c\u7684\u786e\u662f\u8fd9\u6837\u3002\u4f46\u662f\u968f\u7740\u5f00\u53d1\u7684\u6df1\u5165\uff0cgit\u7684\u6b63\u5e38\u4f7f\u7528\u90fd\u7531\u4e00\u4e9b\u53cb\u5584\u7684\u547d\u4ee4\u6765\u6267\u884c\uff0c\u4f7fgit\u53d8\u5f97\u975e\u5e38\u597d\u7528\u3002\u73b0\u5728\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u8457\u540d\u9879\u76ee\u91c7\u7528git\u6765\u7ba1\u7406\u9879\u76ee\u5f00\u53d1\uff0c\u4f8b\u5982\uff1awine\u3001U-boot\u7b49","[18]","\u3002"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u5f00\u6e90\u81ea\u7531\u539f\u6559\u65e8\u4e3b\u4e49\u9879\u76ee\uff0cgit\u6ca1\u6709\u5bf9\u7248\u672c\u5e93\u7684\u6d4f\u89c8\u548c\u4fee\u6539\u505a\u4efb\u4f55\u7684\u6743\u9650\u9650\u5236\uff0c\u901a\u8fc7\u5176\u4ed6\u5de5\u5177\u4e5f\u53ef\u4ee5\u8fbe\u5230\u6709\u9650\u7684\u6743\u9650\u63a7\u5236\uff0c\u6bd4\u5982\uff1agitosis\u3001CodeBeamer MR\u3002\u539f\u672cgit\u7684\u4f7f\u7528\u8303\u56f4\u53ea\u9002\u7528\u4e8eLinux/Unix\u5e73\u53f0\uff0c\u4f46\u5728Windows\u5e73\u53f0\u4e0b\u7684\u4f7f\u7528\u4e5f\u65e5\u6e10\u6210\u719f\uff0c\u8fd9\u4e3b\u8981\u5f52\u529f\u4e8eCygwin\u3001msysgit\u73af\u5883\uff0c\u4ee5\u53caTortoiseGit\u8fd9\u6837\u6613\u7528\u7684GUI\u5de5\u5177\u3002git\u7684\u6e90\u4ee3\u7801\u4e2d\u4e5f\u5df2\u7ecf\u52a0\u5165\u4e86\u5bf9Cygwin\u4e0eMinGW\u7f16\u8bd1\u73af\u5883\u7684\u652f\u6301\u4e14\u9010\u6e10\u5b8c\u5584\uff0c\u4e3aWindows\u7528\u6237\u5e26\u6765\u798f\u97f3\u3002"),(0,a.kt)("h2",{id:"\u56db\u8981\u7d20"},"\u56db\u8981\u7d20"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u533a\uff1a\u6539\u52a8\uff08\u589e\u5220\u6587\u4ef6\u548c\u5185\u5bb9\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6682\u5b58\u533a\uff1a\u8f93\u5165\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"git add \u6539\u52a8\u7684\u6587\u4ef6\u540d"),"\uff0c\u6b64\u6b21\u6539\u52a8\u5c31\u653e\u5230\u4e86 \u2018\u6682\u5b58\u533a\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u4ed3\u5e93(\u7b80\u79f0\uff1a\u672c\u5730)\uff1a\u8f93\u5165\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"git commit \u6b64\u6b21\u4fee\u6539\u7684\u63cf\u8ff0"),"\uff0c\u6b64\u6b21\u6539\u52a8\u5c31\u653e\u5230\u4e86 \u2019\u672c\u5730\u4ed3\u5e93\u2019\uff0c\u6bcf\u4e2a commit\uff0c\u6211\u53eb\u5b83\u4e3a\u4e00\u4e2a \u2018\u7248\u672c\u2019\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u4ed3\u5e93(\u7b80\u79f0\uff1a\u8fdc\u7a0b)\uff1a\u8f93\u5165\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"git push \u8fdc\u7a0b\u4ed3\u5e93"),"\uff0c\u6b64\u6b21\u6539\u52a8\u5c31\u653e\u5230\u4e86 \u2018\u8fdc\u7a0b\u4ed3\u5e93\u2019\uff08GitHub \u7b49)"))),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("p",null,"git\u548c\u5176\u4ed6\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08\u5982CVS\uff09\u6709\u4e0d\u5c0f\u7684\u5dee\u522b\uff0cgit\u672c\u8eab\u5173\u5fc3\u6587\u4ef6\u7684\u6574\u4f53\u6027\u662f\u5426\u6709\u6539\u53d8\uff0c\u4f46\u591a\u6570\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u5982CVS\u6216Subversion\u7cfb\u7edf\u5219\u5728\u4e4e\u6587\u4ef6\u5185\u5bb9\u7684\u5dee\u5f02\u3002git\u62d2\u7edd\u4fdd\u6301\u6bcf\u4e2a\u6587\u4ef6\u7684\u7248\u672c\u4fee\u8ba2\u5173\u7cfb\u3002\u56e0\u6b64\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u5386\u53f2\u9700\u8981\u904d\u5386\u5404\u4e2ahistory\u5feb\u7167\uff1bgit\u9690\u5f0f\u5904\u7406\u6587\u4ef6\u66f4\u540d\uff0c\u5373\u540c\u540d\u6587\u4ef6\u9ed8\u8ba4\u4e3a\u5176\u524d\u8eab\uff0c\u5982\u679c\u6ca1\u6709\u540c\u540d\u6587\u4ef6\u5219\u5728\u524d\u4e00\u4e2a\u7248\u672c\u4e2d\u641c\u7d22\u5177\u6709\u7c7b\u4f3c\u5185\u5bb9\u7684\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"git\u66f4\u50cf\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\uff0c\u76f4\u63a5\u5728\u672c\u5730\u4e0a\u83b7\u53d6\u8d44\u6599\uff0c\u4e0d\u5fc5\u8fde\u7ebf\u5230\u4e3b\u673a\u7aef\u83b7\u53d6\u8d44\u6599\u3002 \u6bcf\u4e2a\u5f00\u53d1\u8005\u90fd\u53ef\u6709\u5168\u90e8\u5f00\u53d1\u5386\u53f2\u7684\u672c\u5730\u526f\u672c\uff0cchanges\u4ece\u8fd9\u79cd\u672c\u5730repository\u590d\u5236\u7ed9\u5176\u4ed6\u5f00\u53d1\u8005\u3002\u8fd9\u4e9bchanges\u4f5c\u4e3a\u65b0\u589e\u7684\u5f00\u53d1\u5206\u652f\u88ab\u5bfc\u5165\uff0c\u53ef\u4ee5\u4e0e\u672c\u5730\u5f00\u53d1\u5206\u652f\u5408\u5e76\u3002"),(0,a.kt)("p",null,"\u5206\u652f\u662f\u975e\u5e38\u8f7b\u91cf\u7ea7\u7684\uff0c\u4e00\u4e2a\u5206\u652f\u4ec5\u662f\u5bf9\u4e00\u4e2acommit\u7684\u5f15\u7528\u3002"),(0,a.kt)("p",null,"git\u662f\u7528C\u8bed\u8a00\u5f00\u53d1\u7684\uff0c\u4ee5\u8ffd\u6c42\u6700\u9ad8\u7684\u6027\u80fd\u3002git\u81ea\u52a8\u5b8c\u6210\u5783\u573e\u56de\u6536\uff0c\u4e5f\u53ef\u4ee5\u7528\u547d\u4ee4git gc --prune\u76f4\u63a5\u8c03\u7528\u3002"),(0,a.kt)("p",null,"git\u5b58\u50a8\u6bcf\u4e2a\u65b0\u521b\u5efa\u7684object\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u6587\u4ef6\u3002\u4e3a\u4e86\u538b\u7f29\u5b58\u50a8\u7a7a\u95f4\u5360\u7528\uff0c packs\u64cd\u4f5c\u628a\u5f88\u591a\u6587\u4ef6\uff08\u542f\u53d1\u5f0f\u7c7b\u4f3c\u540d\u5b57\u7684\u6587\u4ef6\u5f80\u5f80\u5177\u6709\u7c7b\u4f3c\u5185\u5bb9\uff09\u4f7f\u7528\u5dee\u5206\u538b\u7f29\u5165\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff08packfile\uff09\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94\u7684\u7d22\u5f15\u6587\u4ef6\uff0c\u6307\u660eobject\u5728packfile\u4e2d\u7684\u504f\u79fb\u503c\u3002\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4ecd\u7136\u4f5c\u4e3a\u5355\u72ec\u6587\u4ef6\u5b58\u5728\u3002repacks\u64cd\u4f5c\u975e\u5e38\u8d39\u65f6\u95f4\uff0cgit\u4f1a\u5728\u7a7a\u95f2\u65f6\u95f4\u81ea\u52a8\u505a\u6b64\u64cd\u4f5c\u3002\u4e5f\u53ef\u7528\u547d\u4ee4git gc\u6765\u76f4\u63a5\u542f\u52a8repack\u3002packfile\u4e0e\u7d22\u5f15\u6587\u4ef6\u90fd\u7528SHA-1\u4f5c\u4e3a\u6821\u9a8c\u548c\u5e76\u4f5c\u4e3a\u6587\u4ef6\u540d\u3002git fsck\u547d\u4ee4\u505a\u6821\u9a8c\u548c\u7684\u5b8c\u6574\u6027\u9a8c\u8bc1\u3002"),(0,a.kt)("p",null,"Git\u670d\u52a1\u5668\u5178\u578b\u7684TCP\u76d1\u542c\u7aef\u53e3\u4e3a9418\u3002"),(0,a.kt)("h2",{id:"gui-\u5ba2\u6237\u7aef"},"GUI \u5ba2\u6237\u7aef"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.sourcetreeapp.com/"},"SourceTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://desktop.github.com/"},"GitHub Desktop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tortoisegit.org/download/"},"TortoiseGit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitforwindows.org/"},"Git for Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.collab.net/downloads/giteye"},"GitEye"))),(0,a.kt)("h2",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5206\u652f\u548c\u5408\u5e76"),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u800c\u5feb"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u6563\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u4fdd\u969c"),(0,a.kt)("li",{parentName:"ul"},"\u6682\u5b58\u533a"),(0,a.kt)("li",{parentName:"ul"},"\u514d\u8d39\u548c\u5f00\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u5546\u6807")))}k.isMDXComponent=!0}}]);