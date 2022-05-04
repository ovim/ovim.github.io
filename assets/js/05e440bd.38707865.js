"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8386],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3190:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={title:"\u5e38\u7528\u63d2\u4ef6",sidebar_label:"\u5e38\u7528\u63d2\u4ef6"},l=void 0,c={unversionedId:"docusaurus/plugins",id:"docusaurus/plugins",title:"\u5e38\u7528\u63d2\u4ef6",description:"image zoom",source:"@site/docs/docusaurus/plugins.md",sourceDirName:"docusaurus",slug:"/docusaurus/plugins",permalink:"/docs/docusaurus/plugins",tags:[],version:"current",frontMatter:{title:"\u5e38\u7528\u63d2\u4ef6",sidebar_label:"\u5e38\u7528\u63d2\u4ef6"},sidebar:"Extends",previous:{title:"\u7b80\u4ecb",permalink:"/docs/docusaurus/intro"}},s={},p=[{value:"image zoom",id:"image-zoom",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Options",id:"options",level:3},{value:"Algolia DocSearch",id:"algolia-docsearch",level:2},{value:"Baidu analytics",id:"baidu-analytics",level:2},{value:"Baidu push",id:"baidu-push",level:2},{value:"Google Adsense",id:"google-adsense",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"image-zoom"},"image zoom"),(0,a.kt)("p",null,"Click the picture to achieve the zoom effect"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gabrielcsapo/docusaurus-plugin-image-zoom"},"source")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install docusaurus-plugin-image-zoom --save\n")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:'language-title="docusaurus.config.js"'},'{\n  plugins: [require.resolve("docusaurus-plugin-image-zoom")];\n}\n')),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("p",null,"Set the zoomSelector (optional, defaults to '.markdown img') in docusaurus.config.js, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  themeConfig: {\n    zoom: {\n      selector: '.markdown :not(em) > img',\n      config: {\n        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage\n        background: {\n          light: 'rgb(255, 255, 255)',\n          dark: 'rgb(50, 50, 50)'\n        }\n      }\n    }\n  },\n")),(0,a.kt)("h2",{id:"algolia-docsearch"},"Algolia DocSearch"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.algolia.com/"},"Instant search platform")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.docusaurus.cn/docs/search"},"docusaurus doc")),(0,a.kt)("h2",{id:"baidu-analytics"},"Baidu analytics"),(0,a.kt)("h2",{id:"baidu-push"},"Baidu push"),(0,a.kt)("h2",{id:"google-adsense"},"Google Adsense"))}m.isMDXComponent=!0}}]);