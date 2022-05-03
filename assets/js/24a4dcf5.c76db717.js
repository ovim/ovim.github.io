"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3263],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=l,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3311:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),o=["components"],i={title:"FireWall \u9632\u706b\u5899",sidebar_label:"FireWall"},s=void 0,c={unversionedId:"linux/firewall",id:"linux/firewall",title:"FireWall \u9632\u706b\u5899",description:"\u73af\u5883",source:"@site/docs/linux/firewall.md",sourceDirName:"linux",slug:"/linux/firewall",permalink:"/docs/linux/firewall",tags:[],version:"current",frontMatter:{title:"FireWall \u9632\u706b\u5899",sidebar_label:"FireWall"}},u={},p=[{value:"<strong>\u5e38\u7528</strong>",id:"\u5e38\u7528",level:2},{value:"<strong>\u67e5\u770bfirewalld\u72b6\u6001</strong>",id:"\u67e5\u770bfirewalld\u72b6\u6001",level:3},{value:"<strong>\u5f00\u542f\u9632\u706b\u5899</strong>",id:"\u5f00\u542f\u9632\u706b\u5899",level:3},{value:"<strong>\u67e5\u770b\u5df2\u5f00\u653e\u7aef\u53e3</strong>",id:"\u67e5\u770b\u5df2\u5f00\u653e\u7aef\u53e3",level:3},{value:"<strong>\u5f00\u653e\u7aef\u53e3\uff08\u7aef\u53e3\u5f00\u653e\u5b8c\u6210\u4e4b\u540e\u9700\u8981\u91cd\u542ffirewall\uff09</strong>",id:"\u5f00\u653e\u7aef\u53e3\u7aef\u53e3\u5f00\u653e\u5b8c\u6210\u4e4b\u540e\u9700\u8981\u91cd\u542ffirewall",level:3},{value:"<strong>\u91cd\u542ffirewall</strong>",id:"\u91cd\u542ffirewall",level:3},{value:"<strong>\u505c\u6b62firewall</strong>",id:"\u505c\u6b62firewall",level:3},{value:"<strong>\u7981\u6b62firewall\u5f00\u673a\u542f\u52a8</strong>",id:"\u7981\u6b62firewall\u5f00\u673a\u542f\u52a8",level:3},{value:"<strong>\u5173\u95ed\u9632\u706b\u5899</strong>",id:"\u5173\u95ed\u9632\u706b\u5899",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u73af\u5883")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"CentOS\u9632\u706b\u5899\u6839\u636e\u7248\u672c\u4e0d\u540c\u800c\u4e0d\u540c\uff0ccentos7\u4e4b\u524d\u4f7f\u7528iptables\uff0c7\u53ca\u5176\u4ee5\u540e\u4f7f\u7528firewall")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u7cfb\u7edf\uff1aCentOS 7\n")),(0,a.kt)("h2",{id:"\u5e38\u7528"},(0,a.kt)("strong",{parentName:"h2"},"\u5e38\u7528")),(0,a.kt)("h3",{id:"\u67e5\u770bfirewalld\u72b6\u6001"},(0,a.kt)("strong",{parentName:"h3"},"\u67e5\u770bfirewalld\u72b6\u6001")),(0,a.kt)("p",null,"\u5982\u679c\u662fdead\u72b6\u6001\uff0c\u5373\u9632\u706b\u5899\u672a\u5f00\u542f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status firewalld\n")),(0,a.kt)("h3",{id:"\u5f00\u542f\u9632\u706b\u5899"},(0,a.kt)("strong",{parentName:"h3"},"\u5f00\u542f\u9632\u706b\u5899")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start firewalld\n")),(0,a.kt)("h3",{id:"\u67e5\u770b\u5df2\u5f00\u653e\u7aef\u53e3"},(0,a.kt)("strong",{parentName:"h3"},"\u67e5\u770b\u5df2\u5f00\u653e\u7aef\u53e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --list-ports\n")),(0,a.kt)("h3",{id:"\u5f00\u653e\u7aef\u53e3\u7aef\u53e3\u5f00\u653e\u5b8c\u6210\u4e4b\u540e\u9700\u8981\u91cd\u542ffirewall"},(0,a.kt)("strong",{parentName:"h3"},"\u5f00\u653e\u7aef\u53e3\uff08\u7aef\u53e3\u5f00\u653e\u5b8c\u6210\u4e4b\u540e\u9700\u8981\u91cd\u542ffirewall\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --zone=public --add-port=80/tcp --permanent\n\u547d\u4ee4\u89e3\u91ca\uff1a\n\u2013zone #\u4f5c\u7528\u57df\n\u2013add-port=80/tcp #\u6dfb\u52a0\u7aef\u53e3\uff0c\u683c\u5f0f\u4e3a\uff1a\u7aef\u53e3/\u901a\u8baf\u534f\u8bae\n\u2013permanent #\u6c38\u4e45\u751f\u6548\uff0c\u6ca1\u6709\u6b64\u53c2\u6570\u91cd\u542f\u540e\u5931\u6548\n")),(0,a.kt)("h3",{id:"\u91cd\u542ffirewall"},(0,a.kt)("strong",{parentName:"h3"},"\u91cd\u542ffirewall")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --reload\n")),(0,a.kt)("h3",{id:"\u505c\u6b62firewall"},(0,a.kt)("strong",{parentName:"h3"},"\u505c\u6b62firewall")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop firewalld.service\n")),(0,a.kt)("h3",{id:"\u7981\u6b62firewall\u5f00\u673a\u542f\u52a8"},(0,a.kt)("strong",{parentName:"h3"},"\u7981\u6b62firewall\u5f00\u673a\u542f\u52a8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"firewall systemctl disable firewalld.service\n")),(0,a.kt)("h3",{id:"\u5173\u95ed\u9632\u706b\u5899"},(0,a.kt)("strong",{parentName:"h3"},"\u5173\u95ed\u9632\u706b\u5899")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop firewalld\n")))}d.isMDXComponent=!0}}]);