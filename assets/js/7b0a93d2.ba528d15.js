"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(a),g=r,k=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(k,i(i({ref:t},l),{},{components:a})):n.createElement(k,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3918:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={title:"\u53d1\u5e03\u81ea\u5df1\u7684 Composer \u5305",sidebar_label:"\u53d1\u5e03\u5305"},p=void 0,s={unversionedId:"composer/usage/push-package",id:"composer/usage/push-package",title:"\u53d1\u5e03\u81ea\u5df1\u7684 Composer \u5305",description:"\u53d1\u5e03 package",source:"@site/docs/composer/usage/push-package.md",sourceDirName:"composer/usage",slug:"/composer/usage/push-package",permalink:"/docs/composer/usage/push-package",tags:[],version:"current",frontMatter:{title:"\u53d1\u5e03\u81ea\u5df1\u7684 Composer \u5305",sidebar_label:"\u53d1\u5e03\u5305"},sidebar:"PHP",previous:{title:"\u57fa\u672c\u7528\u6cd5",permalink:"/docs/composer/usage/basic-usage"}},l={},u=[{value:"\u53d1\u5e03 <code>package</code>",id:"\u53d1\u5e03-package",level:2},{value:"1\u3001\u521b\u5efa\u6e90\u7801\u5305\u4ed3\u5e93",id:"1\u521b\u5efa\u6e90\u7801\u5305\u4ed3\u5e93",level:3},{value:"2\u3001\u514b\u9686\u4ed3\u5e93",id:"2\u514b\u9686\u4ed3\u5e93",level:3},{value:"3\u3001\u521d\u59cb\u5316 <code>composer.json</code>",id:"3\u521d\u59cb\u5316-composerjson",level:3},{value:"4\u3001\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",id:"4\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",level:3},{value:"5\u3001\u8fd0\u884c\u6d4b\u8bd5",id:"5\u8fd0\u884c\u6d4b\u8bd5",level:3},{value:"6\u3001\u63a8\u9001\u4ee3\u7801",id:"6\u63a8\u9001\u4ee3\u7801",level:3},{value:"7\u3001packagist.org \u540c\u6b65\u4ee3\u7801",id:"7packagistorg-\u540c\u6b65\u4ee3\u7801",level:3},{value:"\u4f7f\u7528 <code>package</code>",id:"\u4f7f\u7528-package",level:2},{value:"require package",id:"require-package",level:3},{value:"\u5df2\u6709 <code>composer.json</code>",id:"\u5df2\u6709-composerjson",level:4},{value:"\u7a7a\u9879\u76ee\uff0c\u6ca1\u6709 <code>composer.json</code>",id:"\u7a7a\u9879\u76ee\u6ca1\u6709-composerjson",level:4},{value:"run",id:"run",level:3},{value:"\u7f16\u5199\u8c03\u7528\u4ee3\u7801",id:"\u7f16\u5199\u8c03\u7528\u4ee3\u7801",level:4},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:4}],d={toc:u};function g(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u53d1\u5e03-package"},"\u53d1\u5e03 ",(0,o.kt)("inlineCode",{parentName:"h2"},"package")),(0,o.kt)("h3",{id:"1\u521b\u5efa\u6e90\u7801\u5305\u4ed3\u5e93"},"1\u3001\u521b\u5efa\u6e90\u7801\u5305\u4ed3\u5e93"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6884).Z,width:"2794",height:"1750"})),(0,o.kt)("h3",{id:"2\u514b\u9686\u4ed3\u5e93"},"2\u3001\u514b\u9686\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ovim/TestUtils.git test.composer.loc\n")),(0,o.kt)("h3",{id:"3\u521d\u59cb\u5316-composerjson"},"3\u3001\u521d\u59cb\u5316 ",(0,o.kt)("inlineCode",{parentName:"h3"},"composer.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd test.composer.loc\ncomposer init\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6672).Z,width:"1323",height:"715"})),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u4e4b\u540e\u751f\u6210\u5982\u4e0b\u6587\u4ef6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2632).Z,width:"2880",height:"1800"})),(0,o.kt)("h3",{id:"4\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801"},"4\u3001\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"package \u6e90\u7801\u4f4d\u7f6e\u4e00\u5b9a\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," \u6587\u4ef6\u5939\u91cc\u9762"),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u547d\u540d\u7a7a\u95f4")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5905).Z,width:"2880",height:"1800"})),(0,o.kt)("h3",{id:"5\u8fd0\u884c\u6d4b\u8bd5"},"5\u3001\u8fd0\u884c\u6d4b\u8bd5"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3832).Z,width:"1296",height:"290"})),(0,o.kt)("h3",{id:"6\u63a8\u9001\u4ee3\u7801"},"6\u3001\u63a8\u9001\u4ee3\u7801"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2546).Z,width:"1754",height:"810"})),(0,o.kt)("h3",{id:"7packagistorg-\u540c\u6b65\u4ee3\u7801"},"7\u3001packagist.org \u540c\u6b65\u4ee3\u7801"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(823).Z,width:"2796",height:"1750"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5466).Z,width:"2796",height:"1750"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://packagist.org/about#how-to-update-packages"},"\u70b9\u51fb\u67e5\u770b\u5982\u4f55\u8bbe\u7f6e package \u81ea\u52a8\u66f4\u65b0")),(0,o.kt)("h2",{id:"\u4f7f\u7528-package"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h2"},"package")),(0,o.kt)("h3",{id:"require-package"},"require package"),(0,o.kt)("h4",{id:"\u5df2\u6709-composerjson"},"\u5df2\u6709 ",(0,o.kt)("inlineCode",{parentName:"h4"},"composer.json")),(0,o.kt)("p",null,"\u76f4\u63a5\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"composer require ovim/test-utils")," \u8fdb\u884c\u5b89\u88c5"),(0,o.kt)("h4",{id:"\u7a7a\u9879\u76ee\u6ca1\u6709-composerjson"},"\u7a7a\u9879\u76ee\uff0c\u6ca1\u6709 ",(0,o.kt)("inlineCode",{parentName:"h4"},"composer.json")),(0,o.kt)("p",null,"1\u3001\u65b0\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json"),"\uff0c\u5e76\u586b\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"package")," \u4fe1\u606f"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4736).Z,width:"2880",height:"1800"})),(0,o.kt)("p",null,"2\u3001\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"composer install")," \u8fdb\u884c\u5b89\u88c5"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2007).Z,width:"2648",height:"1456"})),(0,o.kt)("h3",{id:"run"},"run"),(0,o.kt)("h4",{id:"\u7f16\u5199\u8c03\u7528\u4ee3\u7801"},"\u7f16\u5199\u8c03\u7528\u4ee3\u7801"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3743).Z,width:"2880",height:"1800"})),(0,o.kt)("h4",{id:"\u8fd0\u884c\u6d4b\u8bd5"},"\u8fd0\u884c\u6d4b\u8bd5"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8354).Z,width:"1224",height:"382"})))}g.isMDXComponent=!0},6884:function(e,t,a){t.Z=a.p+"assets/images/package-1-a2d4dfdc74a9763da7806ff1df05569b.png"},2007:function(e,t,a){t.Z=a.p+"assets/images/package-10-fe7acebf32f99b8b6266a4c1b72e010a.png"},3743:function(e,t,a){t.Z=a.p+"assets/images/package-11-2bdd7a531361ea69cc4d45bb6260d9a4.png"},8354:function(e,t,a){t.Z=a.p+"assets/images/package-12-67a22b01edd671454d25c95a08d148f0.png"},6672:function(e,t,a){t.Z=a.p+"assets/images/package-2-9aea3f9f83e4ff62f0584697c7c5afb8.gif"},2632:function(e,t,a){t.Z=a.p+"assets/images/package-3-0a3b4ae2ca4544c7bce27f4b3fadf176.png"},5905:function(e,t,a){t.Z=a.p+"assets/images/package-4-1b3d5e4725314fb488e923121bdaa633.png"},3832:function(e,t,a){t.Z=a.p+"assets/images/package-5-188e4810c992ccc75fcae1d36016938b.png"},2546:function(e,t,a){t.Z=a.p+"assets/images/package-6-4935b19254c42c5449befdd4d3ee47df.png"},823:function(e,t,a){t.Z=a.p+"assets/images/package-7-3b4dd91ba803a179ff7cd700fbd5b321.png"},5466:function(e,t,a){t.Z=a.p+"assets/images/package-8-cea7ddd6f3baf6d2b38c4970197441b9.png"},4736:function(e,t,a){t.Z=a.p+"assets/images/package-9-780df47902513b53bc1199618688f712.png"}}]);