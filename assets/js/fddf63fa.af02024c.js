"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8165],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(t),k=o,u=c["".concat(l,".").concat(k)]||c[k]||d[k]||p;return t?a.createElement(u,r(r({ref:n},s),{},{components:t})):a.createElement(u,r({ref:n},s))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,r=new Array(p);r[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var m=2;m<p;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3224:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var a=t(7462),o=t(3366),p=(t(7294),t(3905)),r=["components"],i={title:"\u57fa\u672c\u7528\u6cd5",sidebar_label:"\u57fa\u672c\u7528\u6cd5"},l=void 0,m={unversionedId:"composer/usage/basic-usage",id:"composer/usage/basic-usage",title:"\u57fa\u672c\u7528\u6cd5",description:"\u5b89\u88c5",source:"@site/docs/composer/usage/basic-usage.md",sourceDirName:"composer/usage",slug:"/composer/usage/basic-usage",permalink:"/docs/composer/usage/basic-usage",tags:[],version:"current",frontMatter:{title:"\u57fa\u672c\u7528\u6cd5",sidebar_label:"\u57fa\u672c\u7528\u6cd5"},sidebar:"PHP",previous:{title:"\u7b80\u4ecb",permalink:"/docs/composer/usage/intro"},next:{title:"\u5e93(\u8d44\u6e90\u5305)",permalink:"/docs/composer/usage/libraries"}},s={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"composer.json\uff1a\u9879\u76ee\u5b89\u88c5",id:"composerjson\u9879\u76ee\u5b89\u88c5",level:2},{value:"\u5173\u4e8e require Key",id:"\u5173\u4e8e-require-key",level:3},{value:"\u5305\u540d\u79f0",id:"\u5305\u540d\u79f0",level:3},{value:"\u5305\u7248\u672c",id:"\u5305\u7248\u672c",level:3},{value:"\u4e0b\u4e00\u4e2a\u91cd\u8981\u7248\u672c\uff08\u6ce2\u6d6a\u53f7\u8fd0\u7b97\u7b26\uff09",id:"\u4e0b\u4e00\u4e2a\u91cd\u8981\u7248\u672c\u6ce2\u6d6a\u53f7\u8fd0\u7b97\u7b26",level:3},{value:"\u7a33\u5b9a\u6027",id:"\u7a33\u5b9a\u6027",level:3},{value:"\u5b89\u88c5\u4f9d\u8d56\u5305",id:"\u5b89\u88c5\u4f9d\u8d56\u5305",level:2},{value:"composer.lock - \u9501\u6587\u4ef6",id:"composerlock---\u9501\u6587\u4ef6",level:2},{value:"Packagist",id:"packagist",level:2},{value:"\u81ea\u52a8\u52a0\u8f7d",id:"\u81ea\u52a8\u52a0\u8f7d",level:2}],c={toc:d};function k(e){var n=e.components,i=(0,o.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,p.kt)("p",null,"\u5b89\u88c5 Composer\uff0c\u4f60\u53ea\u9700\u8981\u4e0b\u8f7d ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.phar")," \u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sS https://getcomposer.org/installer | php\n")),(0,p.kt)("p",null,"\u8be6\u7ec6\u8bf7\u67e5\u770b ",(0,p.kt)("a",{parentName:"p",href:"https://docs.phpcomposer.com/00-intro.html"},"\u7b80\u4ecb")," \u7ae0\u8282\u3002"),(0,p.kt)("p",null,"\u8981\u68c0\u67e5 Composer \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff0c\u53ea\u9700\u8981\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"php")," \u6765\u6267\u884c PHAR\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"php composer.phar\n")),(0,p.kt)("p",null,"\u8fd9\u5c06\u8fd4\u56de\u7ed9\u4f60\u4e00\u4e2a\u53ef\u6267\u884c\u7684\u547d\u4ee4\u5217\u8868\u3002"),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u4f60\u4e5f\u53ef\u4ee5\u4ec5\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"--check")," \u9009\u9879\u800c\u65e0\u9700\u4e0b\u8f7d Composer\u3002 \u8981\u83b7\u53d6\u66f4\u591a\u7684\u4fe1\u606f\u8bf7\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"--help"),"\u3002"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sS https://getcomposer.org/installer | php -- --help\n")))),(0,p.kt)("h2",{id:"composerjson\u9879\u76ee\u5b89\u88c5"},"composer.json\uff1a\u9879\u76ee\u5b89\u88c5"),(0,p.kt)("p",null,"\u8981\u5f00\u59cb\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 Composer\uff0c\u4f60\u53ea\u9700\u8981\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.json")," \u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5305\u542b\u4e86\u9879\u76ee\u7684\u4f9d\u8d56\u548c\u5176\u5b83\u7684\u4e00\u4e9b\u5143\u6570\u636e\u3002"),(0,p.kt)("p",null,"\u8fd9\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"http://json.org/"},"JSON format")," \u662f\u5f88\u5bb9\u6613\u7f16\u5199\u7684\u3002\u5b83\u5141\u8bb8\u4f60\u5b9a\u4e49\u5d4c\u5957\u7ed3\u6784\u3002"),(0,p.kt)("h3",{id:"\u5173\u4e8e-require-key"},"\u5173\u4e8e require Key"),(0,p.kt)("p",null,"\u7b2c\u4e00\u4ef6\u4e8b\u60c5\uff08\u5e76\u4e14\u5f80\u5f80\u53ea\u9700\u8981\u505a\u8fd9\u4e00\u4ef6\u4e8b\uff09\uff0c\u4f60\u9700\u8981\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.json")," \u6587\u4ef6\u4e2d\u6307\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"require")," key \u7684\u503c\u3002\u4f60\u53ea\u9700\u8981\u7b80\u5355\u7684\u544a\u8bc9 Composer \u4f60\u7684\u9879\u76ee\u9700\u8981\u4f9d\u8d56\u54ea\u4e9b\u5305\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "require": {\n        "monolog/monolog": "1.0.*"\n    }\n}\n')),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u770b\u5230\uff0c ",(0,p.kt)("inlineCode",{parentName:"p"},"require")," \u9700\u8981\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u5305\u540d\u79f0")," \uff08\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"monolog/monolog"),"\uff09 \u6620\u5c04\u5230 ",(0,p.kt)("strong",{parentName:"p"},"\u5305\u7248\u672c")," \uff08\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.*"),"\uff09 \u7684\u5bf9\u8c61\u3002"),(0,p.kt)("h3",{id:"\u5305\u540d\u79f0"},"\u5305\u540d\u79f0"),(0,p.kt)("p",null,"\u5305\u540d\u79f0\u7531\u4f9b\u5e94\u5546\u540d\u79f0\u548c\u5176\u9879\u76ee\u540d\u79f0\u6784\u6210\u3002\u901a\u5e38\u5bb9\u6613\u4ea7\u751f\u76f8\u540c\u7684\u9879\u76ee\u540d\u79f0\uff0c\u800c\u4f9b\u5e94\u5546\u540d\u79f0\u7684\u5b58\u5728\u5219\u5f88\u597d\u7684\u89e3\u51b3\u4e86\u547d\u540d\u51b2\u7a81\u7684\u95ee\u9898\u3002\u5b83\u5141\u8bb8\u4e24\u4e2a\u4e0d\u540c\u7684\u4eba\u521b\u5efa\u540c\u6837\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"json")," \u7684\u5e93\uff0c\u800c\u4e4b\u540e\u5b83\u4eec\u5c06\u88ab\u547d\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"igorw/json")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"seldaek/json"),"\u3002"),(0,p.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u5f15\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"monolog/monolog"),"\uff0c\u4f9b\u5e94\u5546\u540d\u79f0\u4e0e\u9879\u76ee\u7684\u540d\u79f0\u76f8\u540c\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5177\u6709\u552f\u4e00\u540d\u79f0\u7684\u9879\u76ee\uff0c\u6211\u4eec\u63a8\u8350\u8fd9\u4e48\u505a\u3002\u5b83\u8fd8\u5141\u8bb8\u4ee5\u540e\u5728\u540c\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u66f4\u591a\u7684\u76f8\u5173\u9879\u76ee\u3002\u5982\u679c\u4f60\u7ef4\u62a4\u7740\u4e00\u4e2a\u5e93\uff0c\u8fd9\u5c06\u4f7f\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u628a\u5b83\u5206\u79bb\u6210\u66f4\u5c0f\u7684\u90e8\u5206\u3002"),(0,p.kt)("h3",{id:"\u5305\u7248\u672c"},"\u5305\u7248\u672c"),(0,p.kt)("p",null,"\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"monolog")," \u7248\u672c\u6307\u5b9a\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.*"),"\u3002\u8fd9\u8868\u793a\u4efb\u4f55\u4ece ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0")," \u5f00\u59cb\u7684\u5f00\u53d1\u5206\u652f\uff0c\u5b83\u5c06\u4f1a\u5339\u914d ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.0"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.2")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"1.0.20"),"\u3002"),(0,p.kt)("p",null,"\u7248\u672c\u7ea6\u675f\u53ef\u4ee5\u7528\u51e0\u4e2a\u4e0d\u540c\u7684\u65b9\u6cd5\u6765\u6307\u5b9a\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{src:t(3991).Z,width:"1598",height:"722"})),(0,p.kt)("h3",{id:"\u4e0b\u4e00\u4e2a\u91cd\u8981\u7248\u672c\u6ce2\u6d6a\u53f7\u8fd0\u7b97\u7b26"},"\u4e0b\u4e00\u4e2a\u91cd\u8981\u7248\u672c\uff08\u6ce2\u6d6a\u53f7\u8fd0\u7b97\u7b26\uff09"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"~")," \u6700\u597d\u7528\u4f8b\u5b50\u6765\u89e3\u91ca\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"~1.2")," \u76f8\u5f53\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},">=1.2"),",",(0,p.kt)("inlineCode",{parentName:"p"},"<2.0"),"\uff0c\u800c ",(0,p.kt)("inlineCode",{parentName:"p"},"~1.2.3")," \u76f8\u5f53\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},">=1.2.3"),",",(0,p.kt)("inlineCode",{parentName:"p"},"<1.3"),"\u3002\u6b63\u5982\u4f60\u6240\u770b\u5230\u7684\u8fd9\u5bf9\u4e8e\u9075\u5faa ",(0,p.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u8bed\u4e49\u5316\u7248\u672c\u53f7")," \u7684\u9879\u76ee\u6700\u6709\u7528\u3002\u4e00\u4e2a\u5e38\u89c1\u7684\u7528\u6cd5\u662f\u6807\u8bb0\u4f60\u6240\u4f9d\u8d56\u7684\u6700\u4f4e\u7248\u672c\uff0c\u50cf ",(0,p.kt)("inlineCode",{parentName:"p"},"~1.2")," \uff08\u5141\u8bb81.2\u4ee5\u4e0a\u7684\u4efb\u4f55\u7248\u672c\uff0c\u4f46\u4e0d\u5305\u62ec2.0\uff09\u3002\u7531\u4e8e\u7406\u8bba\u4e0a\u76f4\u52302.0\u5e94\u8be5\u90fd\u6ca1\u6709\u5411\u540e\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u6240\u4ee5\u6548\u679c\u5f88\u597d\u3002\u4f60\u8fd8\u4f1a\u770b\u5230\u5b83\u7684\u53e6\u4e00\u79cd\u7528\u6cd5\uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"~")," \u6307\u5b9a\u6700\u4f4e\u7248\u672c\uff0c\u4f46\u5141\u8bb8\u7248\u672c\u53f7\u7684\u6700\u540e\u4e00\u4f4d\u6570\u5b57\u4e0a\u5347\u3002"),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u867d\u7136 ",(0,p.kt)("inlineCode",{parentName:"p"},"2.0-beta.1")," \u4e25\u683c\u5730\u8bf4\u662f\u65e9\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"2.0"),"\uff0c\u4f46\u662f\uff0c\u6839\u636e\u7248\u672c\u7ea6\u675f\u6761\u4ef6\uff0c \u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"~1.2")," \u5374\u4e0d\u4f1a\u5b89\u88c5\u8fd9\u4e2a\u7248\u672c\u3002\u5c31\u50cf\u524d\u9762\u6240\u8bb2\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"~1.2")," \u53ea\u610f\u5473\u7740 ",(0,p.kt)("inlineCode",{parentName:"p"},".2")," \u90e8\u5206\u53ef\u4ee5\u6539\u53d8\uff0c\u4f46\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"1.")," \u90e8\u5206\u662f\u56fa\u5b9a\u7684\u3002"))),(0,p.kt)("h3",{id:"\u7a33\u5b9a\u6027"},"\u7a33\u5b9a\u6027"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u6709\u7a33\u5b9a\u7684\u53d1\u884c\u7248\u624d\u4f1a\u88ab\u8003\u8651\u5728\u5185\u3002\u5982\u679c\u4f60\u4e5f\u60f3\u83b7\u5f97 RC\u3001beta\u3001alpha \u6216 dev \u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.phpcomposer.com/04-schema.html#Package-links"},"\u7a33\u5b9a\u6807\u5fd7"),"\u3002\u4f60\u53ef\u4ee5\u5bf9\u6240\u6709\u7684\u5305\u505a ",(0,p.kt)("a",{parentName:"p",href:"https://docs.phpcomposer.com/04-schema.html#minimum-stability"},"\u6700\u5c0f\u7a33\u5b9a\u6027")," \u8bbe\u7f6e\uff0c\u800c\u4e0d\u662f\u6bcf\u4e2a\u4f9d\u8d56\u9010\u4e00\u8bbe\u7f6e\u3002"),(0,p.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56\u5305"},"\u5b89\u88c5\u4f9d\u8d56\u5305"),(0,p.kt)("p",null,"\u83b7\u53d6\u5b9a\u4e49\u7684\u4f9d\u8d56\u5230\u4f60\u7684\u672c\u5730\u9879\u76ee\uff0c\u53ea\u9700\u8981\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.phar")," \u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"install")," \u547d\u4ee4\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"php composer.phar install\n")),(0,p.kt)("p",null,"\u63a5\u7740\u524d\u9762\u7684\u4f8b\u5b50\uff0c\u8fd9\u5c06\u4f1a\u627e\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"monolog/monolog")," \u7684\u6700\u65b0\u7248\u672c\uff0c\u5e76\u5c06\u5b83\u4e0b\u8f7d\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"vendor")," \u76ee\u5f55\u3002 \u8fd9\u662f\u4e00\u4e2a\u60ef\u4f8b\u628a\u7b2c\u4e09\u65b9\u7684\u4ee3\u7801\u5230\u4e00\u4e2a\u6307\u5b9a\u7684\u76ee\u5f55 ",(0,p.kt)("inlineCode",{parentName:"p"},"vendor"),"\u3002\u5982\u679c\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"monolog")," \u5c06\u4f1a\u521b\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"vendor/monolog/monolog")," \u76ee\u5f55\u3002"),(0,p.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528Git\u6765\u7ba1\u7406\u4f60\u7684\u9879\u76ee\uff0c \u4f60\u53ef\u80fd\u8981\u6dfb\u52a0 vendor \u5230\u4f60\u7684 .gitignore \u6587\u4ef6\u4e2d\u3002 \u4f60\u4e0d\u4f1a\u5e0c\u671b\u5c06\u6240\u6709\u7684\u4ee3\u7801\u90fd\u6dfb\u52a0\u5230\u4f60\u7684\u7248\u672c\u5e93\u4e2d\u3002"))),(0,p.kt)("p",null,"\u53e6\u4e00\u4ef6\u4e8b\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"install")," \u547d\u4ee4\u5c06\u521b\u5efa\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.lock")," \u6587\u4ef6\u5230\u4f60\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u3002"),(0,p.kt)("h2",{id:"composerlock---\u9501\u6587\u4ef6"},"composer.lock - \u9501\u6587\u4ef6"),(0,p.kt)("p",null,"\u5728\u5b89\u88c5\u4f9d\u8d56\u540e\uff0cComposer \u5c06\u628a\u5b89\u88c5\u65f6\u786e\u5207\u7684\u7248\u672c\u53f7\u5217\u8868\u5199\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.lock")," \u6587\u4ef6\u3002\u8fd9\u5c06\u9501\u5b9a\u6539\u9879\u76ee\u7684\u7279\u5b9a\u7248\u672c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"}," \u8bf7\u63d0\u4ea4\u4f60\u5e94\u7528\u7a0b\u5e8f\u7684 ",(0,p.kt)("inlineCode",{parentName:"strong"},"composer.lock")," \uff08\u5305\u62ec ",(0,p.kt)("inlineCode",{parentName:"strong"},"composer.json"),"\uff09\u5230\u4f60\u7684\u7248\u672c\u5e93\u4e2d ")),(0,p.kt)("p",null,"\u8fd9\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"install")," \u547d\u4ee4\u5c06\u4f1a\u68c0\u67e5\u9501\u6587\u4ef6\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5b83\u5c06\u4e0b\u8f7d\u6307\u5b9a\u7684\u7248\u672c\uff08\u5ffd\u7565 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.json")," \u6587\u4ef6\u4e2d\u7684\u5b9a\u4e49\uff09\u3002"),(0,p.kt)("p",null,"\u8fd9\u610f\u5473\u7740\uff0c\u4efb\u4f55\u4eba\u5efa\u7acb\u9879\u76ee\u90fd\u5c06\u4e0b\u8f7d\u4e0e\u6307\u5b9a\u7248\u672c\u5b8c\u5168\u76f8\u540c\u7684\u4f9d\u8d56\u3002\u4f60\u7684\u6301\u7eed\u96c6\u6210\u670d\u52a1\u5668\u3001\u751f\u4ea7\u73af\u5883\u3001\u4f60\u56e2\u961f\u4e2d\u7684\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u3001\u6bcf\u4ef6\u4e8b\u3001\u6bcf\u4e2a\u4eba\u90fd\u4f7f\u7528\u76f8\u540c\u7684\u4f9d\u8d56\uff0c\u4ece\u800c\u51cf\u8f7b\u6f5c\u5728\u7684\u9519\u8bef\u5bf9\u90e8\u7f72\u7684\u5f71\u54cd\u3002\u5373\u4f7f\u4f60\u72ec\u81ea\u5f00\u53d1\u9879\u76ee\uff0c\u5728\u516d\u4e2a\u6708\u5185\u91cd\u65b0\u5b89\u88c5\u9879\u76ee\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u653e\u5fc3\u7684\u7ee7\u7eed\u5de5\u4f5c\uff0c\u5373\u4f7f\u4ece\u90a3\u65f6\u8d77\u4f60\u7684\u4f9d\u8d56\u5df2\u7ecf\u53d1\u5e03\u4e86\u8bb8\u591a\u65b0\u7684\u7248\u672c\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4e0d\u5b58\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.lock")," \u6587\u4ef6\uff0cComposer \u5c06\u8bfb\u53d6 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.json")," \u5e76\u521b\u5efa\u9501\u6587\u4ef6\u3002"),(0,p.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f60\u7684\u4f9d\u8d56\u66f4\u65b0\u4e86\u65b0\u7684\u7248\u672c\uff0c\u4f60\u5c06\u4e0d\u4f1a\u83b7\u5f97\u4efb\u4f55\u66f4\u65b0\u3002\u6b64\u65f6\u8981\u66f4\u65b0\u4f60\u7684\u4f9d\u8d56\u7248\u672c\u8bf7\u4f7f\u7528 update \u547d\u4ee4\u3002\u8fd9\u5c06\u83b7\u53d6\u6700\u65b0\u5339\u914d\u7684\u7248\u672c\uff08\u6839\u636e\u4f60\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.json")," \u6587\u4ef6\uff09\u5e76\u5c06\u65b0\u7248\u672c\u66f4\u65b0\u8fdb\u9501\u6587\u4ef6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"php composer.phar update\n")),(0,p.kt)("p",null,"\u5982\u679c\u53ea\u60f3\u5b89\u88c5\u6216\u66f4\u65b0\u4e00\u4e2a\u4f9d\u8d56\uff0c\u4f60\u53ef\u4ee5\u767d\u540d\u5355\u5b83\u4eec\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"php composer.phar update monolog/monolog [...]\n")),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u5e93\uff0c\u5e76\u4e0d\u4e00\u5b9a\u5efa\u8bae\u63d0\u4ea4\u9501\u6587\u4ef6 "),(0,p.kt)("ul",{parentName:"div"},(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u613f\u610f\uff0c\u53ef\u4ee5\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u63d0\u4ea4 composer.lock \u6587\u4ef6\u3002\u4ed6\u5c06\u5e2e\u52a9\u4f60\u7684\u56e2\u961f\u59cb\u7ec8\u9488\u5bf9\u540c\u4e00\u4e2a\u4f9d\u8d56\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\u3002\u4efb\u4f55\u65f6\u5019\uff0c\u8fd9\u4e2a\u9501\u6587\u4ef6\u90fd\u53ea\u5bf9\u4e8e\u4f60\u7684\u9879\u76ee\u4ea7\u751f\u5f71\u54cd\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u60f3\u63d0\u4ea4\u9501\u6587\u4ef6\uff0c\u5e76\u4e14\u4f60\u6b63\u5728\u4f7f\u7528 Git\uff0c\u90a3\u4e48\u8bf7\u5c06\u5b83\u6dfb\u52a0\u5230 .gitignore \u6587\u4ef6\u4e2d\u3002")))),(0,p.kt)("h2",{id:"packagist"},"Packagist"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://packagist.org/"},"packagist")," \u662f Composer \u7684\u4e3b\u8981\u8d44\u6e90\u5e93\u3002 \u4e00\u4e2a Composer \u7684\u5e93\u57fa\u672c\u4e0a\u662f\u4e00\u4e2a\u5305\u7684\u6e90\uff1a\u8bb0\u5f55\u4e86\u53ef\u4ee5\u5f97\u5230\u5305\u7684\u5730\u65b9\u3002Packagist \u7684\u76ee\u6807\u662f\u6210\u4e3a\u5927\u5bb6\u4f7f\u7528\u5e93\u8d44\u6e90\u7684\u4e2d\u592e\u5b58\u50a8\u5e73\u53f0\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"require")," \u90a3\u91cc\u7684\u4efb\u4f55\u5305\u3002"),(0,p.kt)("p",null,"\u5f53\u4f60\u8bbf\u95ee packagist website (packagist.org)\uff0c\u4f60\u53ef\u4ee5\u6d4f\u89c8\u548c\u641c\u7d22\u8d44\u6e90\u5305\u3002"),(0,p.kt)("p",null,"\u4efb\u4f55\u652f\u6301 Composer \u7684\u5f00\u6e90\u9879\u76ee\u5e94\u8be5\u53d1\u5e03\u81ea\u5df1\u7684\u5305\u5728 packagist \u4e0a\u3002\u867d\u7136\u5e76\u4e0d\u4e00\u5b9a\u8981\u53d1\u5e03\u5728 packagist \u4e0a\u6765\u4f7f\u7528 Composer\uff0c\u4f46\u5b83\u4f7f\u6211\u4eec\u7684\u7f16\u7a0b\u751f\u6d3b\u66f4\u52a0\u8f7b\u677e\u3002"),(0,p.kt)("h2",{id:"\u81ea\u52a8\u52a0\u8f7d"},"\u81ea\u52a8\u52a0\u8f7d"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u5e93\u7684\u81ea\u52a8\u52a0\u8f7d\u4fe1\u606f\uff0cComposer \u751f\u6210\u4e86\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"vendor/autoload.php")," \u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u7b80\u5355\u7684\u5f15\u5165\u8fd9\u4e2a\u6587\u4ef6\uff0c\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a\u514d\u8d39\u7684\u81ea\u52a8\u52a0\u8f7d\u652f\u6301\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"require 'vendor/autoload.php';\n")),(0,p.kt)("p",null,"\u8fd9\u4f7f\u5f97\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u4f7f\u7528\u7b2c\u4e09\u65b9\u4ee3\u7801\u3002\u4f8b\u5982\uff1a\u5982\u679c\u4f60\u7684\u9879\u76ee\u4f9d\u8d56 monolog\uff0c\u4f60\u5c31\u53ef\u4ee5\u50cf\u8fd9\u6837\u5f00\u59cb\u4f7f\u7528\u8fd9\u4e2a\u7c7b\u5e93\uff0c\u5e76\u4e14\u4ed6\u4eec\u5c06\u88ab\u81ea\u52a8\u52a0\u8f7d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"$log = new Monolog\\Logger('name');\n$log->pushHandler(new Monolog\\Handler\\StreamHandler('app.log', Monolog\\Logger::WARNING));\n\n$log->addWarning('Foo');\n")),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"composer.json")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"autoload")," \u5b57\u6bb5\u4e2d\u589e\u52a0\u81ea\u5df1\u7684 autoloader\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "autoload": {\n        "psr-4": {"Acme\\\\": "src/"}\n    }\n}\n')),(0,p.kt)("p",null,"Composer \u5c06\u6ce8\u518c\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"http://www.php-fig.org/psr/psr-4/"},"PSR-4")," autoloader \u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"Acme")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u4ece\u547d\u540d\u7a7a\u95f4\u5230\u76ee\u5f55\u7684\u6620\u5c04\u3002\u6b64\u65f6 ",(0,p.kt)("inlineCode",{parentName:"p"},"src")," \u4f1a\u5728\u4f60\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"vendor")," \u6587\u4ef6\u5939\u540c\u7ea7\u3002\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"src/Foo.php")," \u6587\u4ef6\u5e94\u8be5\u5305\u542b ",(0,p.kt)("inlineCode",{parentName:"p"},"Acme\\Foo")," \u7c7b\u3002"),(0,p.kt)("p",null,"\u6dfb\u52a0 ",(0,p.kt)("inlineCode",{parentName:"p"},"autoload")," \u5b57\u6bb5\u540e\uff0c\u4f60\u5e94\u8be5\u518d\u6b21\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"install")," \u547d\u4ee4\u6765\u751f\u6210 ",(0,p.kt)("inlineCode",{parentName:"p"},"vendor/autoload.php")," \u6587\u4ef6\u3002"),(0,p.kt)("p",null,"\u5f15\u7528\u8fd9\u4e2a\u6587\u4ef6\u4e5f\u5c06\u8fd4\u56de autoloader \u7684\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u5c06\u5305\u542b\u8c03\u7528\u7684\u8fd4\u56de\u503c\u5b58\u50a8\u5728\u53d8\u91cf\u4e2d\uff0c\u5e76\u6dfb\u52a0\u66f4\u591a\u7684\u547d\u540d\u7a7a\u95f4\u3002\u8fd9\u5bf9\u4e8e\u5728\u4e00\u4e2a\u6d4b\u8bd5\u5957\u4ef6\u4e2d\u81ea\u52a8\u52a0\u8f7d\u7c7b\u6587\u4ef6\u662f\u975e\u5e38\u6709\u7528\u7684\uff0c\u4f8b\u5982\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"$loader = require 'vendor/autoload.php';\n$loader->add('Acme\\\\Test\\\\', __DIR__);\n")),(0,p.kt)("p",null,"\u9664\u4e86 PSR-4 \u81ea\u52a8\u52a0\u8f7d\uff0cclassmap \u4e5f\u662f\u652f\u6301\u7684\u3002\u8fd9\u5141\u8bb8\u7c7b\u88ab\u81ea\u52a8\u52a0\u8f7d\uff0c\u5373\u4f7f\u4e0d\u7b26\u5408 PSR-0 \u89c4\u8303\u3002\u8be6\u7ec6\u8bf7\u67e5\u770b ",(0,p.kt)("a",{parentName:"p",href:"https://docs.phpcomposer.com/04-schema.html#autoload"},"\u81ea\u52a8\u52a0\u8f7d-\u53c2\u8003"),"\u3002"),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"Composer \u63d0\u4f9b\u4e86\u81ea\u5df1\u7684 autoloader\u3002\u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528\u5b83\uff0c\u4f60\u53ef\u4ee5\u4ec5\u4ec5\u5f15\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"vendor/composer/autoload_*.php")," \u6587\u4ef6\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u5173\u8054\u6570\u7ec4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u5173\u8054\u6570\u7ec4\u914d\u7f6e\u81ea\u5df1\u7684 autoloader\u3002"))))}k.isMDXComponent=!0},3991:function(e,n,t){n.Z=t.p+"assets/images/1-afc519629948a20deabdb702df8f7f81.png"}}]);