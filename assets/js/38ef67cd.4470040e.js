"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8013],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return k}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),p=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=p(n.components);return a.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),m=p(t),k=r,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||o;return t?a.createElement(d,l(l({ref:e},s),{},{components:t})):a.createElement(d,l({ref:e},s))}));function k(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1945:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"\u5e38\u91cf",sidebar_label:"\u5e38\u91cf"},c=void 0,p={unversionedId:"go/base/constants",id:"go/base/constants",title:"\u5e38\u91cf",description:"\u5e38\u91cf\u662f\u4e00\u4e2a\u7b80\u5355\u503c\u7684\u6807\u8bc6\u7b26\uff0c\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\uff0c\u4e0d\u4f1a\u88ab\u4fee\u6539\u7684\u91cf\u3002",source:"@site/docs/go/base/constants.md",sourceDirName:"go/base",slug:"/go/base/constants",permalink:"/docs/go/base/constants",tags:[],version:"current",frontMatter:{title:"\u5e38\u91cf",sidebar_label:"\u5e38\u91cf"},sidebar:"Go",previous:{title:"\u53d8\u91cf",permalink:"/docs/go/base/variables"},next:{title:"\u8fd0\u7b97\u7b26",permalink:"/docs/go/base/operators"}},s={},u=[{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:2},{value:"iota",id:"iota",level:2},{value:"iota \u7528\u6cd5",id:"iota-\u7528\u6cd5",level:3}],m={toc:u};function k(n){var e=n.components,t=(0,r.Z)(n,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e38\u91cf\u662f\u4e00\u4e2a\u7b80\u5355\u503c\u7684\u6807\u8bc6\u7b26\uff0c\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\uff0c\u4e0d\u4f1a\u88ab\u4fee\u6539\u7684\u91cf\u3002"),(0,o.kt)("p",null,"\u5e38\u91cf\u4e2d\u7684\u6570\u636e\u7c7b\u578b\u53ea\u53ef\u4ee5\u662f\u5e03\u5c14\u578b\u3001\u6570\u5b57\u578b\uff08\u6574\u6570\u578b\u3001\u6d6e\u70b9\u578b\u548c\u590d\u6570\uff09\u548c\u5b57\u7b26\u4e32\u578b\u3002"),(0,o.kt)("h2",{id:"\u5e38\u91cf"},"\u5e38\u91cf"),(0,o.kt)("p",null,"\u5e38\u91cf\u7684\u5b9a\u4e49\u683c\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"const identifier [type] = value\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7701\u7565\u7c7b\u578b\u8bf4\u660e\u7b26 ","[type]","\uff0c\u56e0\u4e3a\u7f16\u8bd1\u5668\u53ef\u4ee5\u6839\u636e\u53d8\u91cf\u7684\u503c\u6765\u63a8\u65ad\u5176\u7c7b\u578b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u663e\u793a\u7c7b\u578b\u5b9a\u4e49\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},'const b string = "abc"')),(0,o.kt)("li",{parentName:"ul"},"\u9690\u5f0f\u7c7b\u578b\u5b9a\u4e49\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},'const b = "abc"'))),(0,o.kt)("p",null,"\u591a\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u58f0\u660e\u53ef\u4ee5\u7b80\u5199\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"const c_name1, c_name2 = value1, value2\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u6f14\u793a\u4e86\u5e38\u91cf\u7684\u5e94\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="\u5b9e\u4f8b"',title:'"\u5b9e\u4f8b"'},'package main\n\nimport "fmt"\n\nfunc main() {\n    const LENGTH int = 10\n    const WIDTH int = 5\n    var area int\n    const a, d, c = 1, false, "str" // \u591a\u91cd\u8d4b\u503c\n\n    area = LENGTH * WIDTH\n    fmt.Printf("\u9762\u79ef\u4e3a\uff1a%d", area)\n    fmt.Println()\n    println(a, b, c)\n}\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u4f8b\u8fd0\u884c\u7ed3\u679c\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u9762\u79ef\u4e3a : 50\n1 false str\n")),(0,o.kt)("p",null,"\u5e38\u91cf\u8fd8\u53ef\u4ee5\u7528\u4f5c\u679a\u4e3e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    Unknown = 0\n    Female = 1\n    Male = 2\n)\n")),(0,o.kt)("p",null,"\u6570\u5b57 0\u30011 \u548c 2 \u5206\u522b\u4ee3\u8868\u672a\u77e5\u6027\u522b\u3001\u5973\u6027\u548c\u7537\u6027\u3002"),(0,o.kt)("p",null,"\u5e38\u91cf\u53ef\u4ee5\u7528len(), cap(), unsafe.Sizeof()\u51fd\u6570\u8ba1\u7b97\u8868\u8fbe\u5f0f\u7684\u503c\u3002\u5e38\u91cf\u8868\u8fbe\u5f0f\u4e2d\uff0c\u51fd\u6570\u5fc5\u987b\u662f\u5185\u7f6e\u51fd\u6570\uff0c\u5426\u5219\u7f16\u8bd1\u4e0d\u8fc7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "unsafe"\nconst (\n    a = "abc"\n    b = len(a)\n    c = unsafe.Sizeof(a)\n)\n\nfunc main(){\n    println(a, b, c)\n}\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u4f8b\u8fd0\u884c\u7ed3\u679c\u4e3a\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"abc 3 16")),(0,o.kt)("h2",{id:"iota"},"iota"),(0,o.kt)("p",null,"iota\uff0c\u7279\u6b8a\u5e38\u91cf\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e00\u4e2a\u53ef\u4ee5\u88ab\u7f16\u8bd1\u5668\u4fee\u6539\u7684\u5e38\u91cf\u3002"),(0,o.kt)("p",null,"iota \u5728 const\u5173\u952e\u5b57\u51fa\u73b0\u65f6\u5c06\u88ab\u91cd\u7f6e\u4e3a 0(const \u5185\u90e8\u7684\u7b2c\u4e00\u884c\u4e4b\u524d)\uff0cconst \u4e2d\u6bcf\u65b0\u589e\u4e00\u884c\u5e38\u91cf\u58f0\u660e\u5c06\u4f7f iota \u8ba1\u6570\u4e00\u6b21(iota \u53ef\u7406\u89e3\u4e3a const \u8bed\u53e5\u5757\u4e2d\u7684\u884c\u7d22\u5f15)\u3002"),(0,o.kt)("p",null,"iota \u53ef\u4ee5\u88ab\u7528\u4f5c\u679a\u4e3e\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    a = iota\n    b = iota\n    c = iota\n)\n")),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a iota \u7b49\u4e8e 0\uff0c\u6bcf\u5f53 iota \u5728\u65b0\u7684\u4e00\u884c\u88ab\u4f7f\u7528\u65f6\uff0c\u5b83\u7684\u503c\u90fd\u4f1a\u81ea\u52a8\u52a0 1\uff1b\u6240\u4ee5 a=0, b=1, c=2 \u53ef\u4ee5\u7b80\u5199\u4e3a\u5982\u4e0b\u5f62\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    a = iota\n    b\n    c\n)\n")),(0,o.kt)("h3",{id:"iota-\u7528\u6cd5"},"iota \u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    const (\n            a = iota   //0\n            b          //1\n            c          //2\n            d = "ha"   //\u72ec\u7acb\u503c\uff0ciota += 1\n            e          //"ha"   iota += 1\n            f = 100    //iota +=1\n            g          //100  iota +=1\n            h = iota   //7,\u6062\u590d\u8ba1\u6570\n            i          //8\n    )\n    fmt.Println(a,b,c,d,e,f,g,h,i)\n}\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u4f8b\u8fd0\u884c\u7ed3\u679c\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"0 1 2 ha ha 100 100 7 8")),(0,o.kt)("p",null,"\u518d\u770b\u4e2a\u6709\u8da3\u7684\u7684 iota \u5b9e\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\nconst (\n    i=1<<iota\n    j=3<<iota\n    k\n    l\n)\n\nfunc main() {\n    fmt.Println("i=",i)\n    fmt.Println("j=",j)\n    fmt.Println("k=",k)\n    fmt.Println("l=",l)\n}\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u4f8b\u8fd0\u884c\u7ed3\u679c\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"i= 1\nj= 6\nk= 12\nl= 24\n")),(0,o.kt)("p",null,"iota \u8868\u793a\u4ece 0 \u5f00\u59cb\u81ea\u52a8\u52a0 1\uff0c\u6240\u4ee5 i=1<<0, j=3<<1\uff08<< \u8868\u793a\u5de6\u79fb\u7684\u610f\u601d\uff09\uff0c\u5373\uff1ai=1, j=6\uff0c\u8fd9\u6ca1\u95ee\u9898\uff0c\u5173\u952e\u5728 k \u548c l\uff0c\u4ece\u8f93\u51fa\u7ed3\u679c\u770b k=3<<2\uff0cl=3<<3\u3002"),(0,o.kt)("p",null,"\u7b80\u5355\u8868\u8ff0:"),(0,o.kt)("p",null,"i=1\uff1a\u5de6\u79fb 0 \u4f4d\uff0c\u4e0d\u53d8\u4ecd\u4e3a 1\u3002\nj=3\uff1a\u5de6\u79fb 1 \u4f4d\uff0c\u53d8\u4e3a\u4e8c\u8fdb\u5236 110\uff0c\u5373 6\u3002\nk=3\uff1a\u5de6\u79fb 2 \u4f4d\uff0c\u53d8\u4e3a\u4e8c\u8fdb\u5236 1100\uff0c\u5373 12\u3002\nl=3\uff1a\u5de6\u79fb 3 \u4f4d\uff0c\u53d8\u4e3a\u4e8c\u8fdb\u5236 11000\uff0c\u5373 24\u3002"),(0,o.kt)("p",null,"\u6ce8\uff1a",(0,o.kt)("strong",{parentName:"p"}," <<n == *(2^n) ")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"1\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"<<")," \u5728 go \u4e2d\u662f \u5de6\u79fb\u8fd0\u7b97\u7b26"),(0,o.kt)("p",{parentName:"div"},"2\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"a^n"),"\uff08a\u7684n\u6b21\u65b9\uff09\uff0c\u8868\u793an\u4e2aa\u8fde\u4e58\u6240\u5f97\u4e4b\u7ed3\u679c\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"2^8\n=2^4\xd72^4\n=2^2\xd72^2\xd72^2\xd72^2\n=4\xd74\xd74\xd74\n=256\n")))))}k.isMDXComponent=!0}}]);