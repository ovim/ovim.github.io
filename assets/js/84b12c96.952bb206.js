"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2373],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Redis - Hash",sidebar_label:"Redis - Hash"},d=void 0,u={unversionedId:"redis/base/hash",id:"redis/base/hash",title:"Redis - Hash",description:"Redis hash \u662f\u4e00\u4e2astring\u7c7b\u578b\u7684field\u548cvalue\u7684\u6620\u5c04\u8868\uff0chash\u7279\u522b\u9002\u5408\u7528\u4e8e\u5b58\u50a8\u5bf9\u8c61\u3002",source:"@site/docs/redis/base/hash.md",sourceDirName:"redis/base",slug:"/redis/base/hash",permalink:"/docs/redis/base/hash",tags:[],version:"current",frontMatter:{title:"Redis - Hash",sidebar_label:"Redis - Hash"}},p={},s=[{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:3}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Redis hash \u662f\u4e00\u4e2astring\u7c7b\u578b\u7684field\u548cvalue\u7684\u6620\u5c04\u8868\uff0chash\u7279\u522b\u9002\u5408\u7528\u4e8e\u5b58\u50a8\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"Redis \u4e2d\u6bcf\u4e2a hash \u53ef\u4ee5\u5b58\u50a8 232 - 1 \u952e\u503c\u5bf9\uff0840\u591a\u4ebf\uff09\u3002"),(0,l.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'redis 127.0.0.1:6379> HMSET w3ckey name "redis tutorial" description "redis basic commands for caching" likes 20 visitors 23000\nOK\nredis 127.0.0.1:6379> HGETALL w3ckey\n \n1) "name"\n2) "redis tutorial"\n3) "description"\n4) "redis basic commands for caching"\n5) "likes"\n6) "20"\n7) "visitors"\n8) "23000"\n')),(0,l.kt)("p",null,"\u5728\u4ee5\u4e0a\u5b9e\u4f8b\u4e2d\uff0c\u6211\u4eec\u8bbe\u7f6e\u4e86 redis \u7684\u4e00\u4e9b\u63cf\u8ff0\u4fe1\u606f(name, description, likes, visitors) \u5230\u54c8\u5e0c\u8868\u7684 w3ckey \u4e2d\u3002"),(0,l.kt)("h3",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HDEL key field2 ","[field2]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u54c8\u5e0c\u8868\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEXISTS key field"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u54c8\u5e0c\u8868 key \u4e2d\uff0c\u6307\u5b9a\u7684\u5b57\u6bb5\u662f\u5426\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HGET key field"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5b58\u50a8\u5728\u54c8\u5e0c\u8868\u4e2d\u6307\u5b9a\u5b57\u6bb5\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HGETALL key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5728\u54c8\u5e0c\u8868\u4e2d\u6307\u5b9a key \u7684\u6240\u6709\u5b57\u6bb5\u548c\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HINCRBY key field increment"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u54c8\u5e0c\u8868 key \u4e2d\u7684\u6307\u5b9a\u5b57\u6bb5\u7684\u6574\u6570\u503c\u52a0\u4e0a\u589e\u91cf increment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HINCRBYFLOAT key field increment"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u54c8\u5e0c\u8868 key \u4e2d\u7684\u6307\u5b9a\u5b57\u6bb5\u7684\u6d6e\u70b9\u6570\u503c\u52a0\u4e0a\u589e\u91cf increment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HKEYS key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6240\u6709\u54c8\u5e0c\u8868\u4e2d\u7684\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HLEN key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u54c8\u5e0c\u8868\u4e2d\u5b57\u6bb5\u7684\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HMGET key field1 ","[field2]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6240\u6709\u7ed9\u5b9a\u5b57\u6bb5\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HMSET key field1 value1 ","[field2 value2 ]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u65f6\u5c06\u591a\u4e2a field-value (\u57df-\u503c)\u5bf9\u8bbe\u7f6e\u5230\u54c8\u5e0c\u8868 key \u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HSET key field value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u54c8\u5e0c\u8868 key \u4e2d\u7684\u5b57\u6bb5 field \u7684\u503c\u8bbe\u4e3a value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HSETNX key field value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5728\u5b57\u6bb5 field \u4e0d\u5b58\u5728\u65f6\uff0c\u8bbe\u7f6e\u54c8\u5e0c\u8868\u5b57\u6bb5\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HVALS key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u54c8\u5e0c\u8868\u4e2d\u6240\u6709\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HSCAN key cursor ","[MATCH pattern][COUNT count]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fed\u4ee3\u54c8\u5e0c\u8868\u4e2d\u7684\u952e\u503c\u5bf9")))))}m.isMDXComponent=!0}}]);