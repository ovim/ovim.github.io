"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3876],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8629:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],a={title:"\u5e38\u7528\u73af\u5883\u914d\u7f6e",sidebar_label:"\u5e38\u7528\u73af\u5883\u914d\u7f6e"},u=void 0,c={unversionedId:"linux/centos/base",id:"linux/centos/base",title:"\u5e38\u7528\u73af\u5883\u914d\u7f6e",description:"\u5b89\u88c5 node",source:"@site/docs/linux/centos/base.md",sourceDirName:"linux/centos",slug:"/linux/centos/base",permalink:"/docs/linux/centos/base",tags:[],version:"current",frontMatter:{title:"\u5e38\u7528\u73af\u5883\u914d\u7f6e",sidebar_label:"\u5e38\u7528\u73af\u5883\u914d\u7f6e"},sidebar:"Linux",previous:{title:"Centos",permalink:"/docs/linux/centos/intro"}},p={},s=[{value:"\u5b89\u88c5 node",id:"\u5b89\u88c5-node",level:2},{value:"php \u5b89\u88c5 sodium",id:"php-\u5b89\u88c5-sodium",level:2},{value:"\u7f16\u8bd1\u5b89\u88c5libsodium",id:"\u7f16\u8bd1\u5b89\u88c5libsodium",level:3},{value:"\u7f16\u8bd1\u5b89\u88c5sodium",id:"\u7f16\u8bd1\u5b89\u88c5sodium",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5b89\u88c5-node"},"\u5b89\u88c5 node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /usr/local\nwget https://nodejs.org/dist/v14.15.1/node-v14.15.1-linux-x64.tar.xz\ntar xvf node-v14.15.1-linux-x64.tar.xz\nmv node-v14.15.1-linux-x64 node\nln -s /usr/local/node/bin/node /usr/local/bin/node\nln -s /usr/local/node/bin/npm /usr/local/bin/npm\nnode -v\nnpm -v\n")),(0,i.kt)("h2",{id:"php-\u5b89\u88c5-sodium"},"php \u5b89\u88c5 sodium"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/l-zl/p/15988843.html"},"https://www.cnblogs.com/l-zl/p/15988843.html")),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u5b89\u88c5libsodium"},"\u7f16\u8bd1\u5b89\u88c5libsodium"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget https://download.libsodium.org/libsodium/releases/libsodium-1.0.18-stable.tar.gz --no-check-certificate\ntar -zxf libsodium-1.0.18-stable.tar.gz\ncd libsodium-stable/\n./configure --prefix=/usr/local/libsodium\nmake && make check\nmake install\n")),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u5b89\u88c5sodium"},"\u7f16\u8bd1\u5b89\u88c5sodium"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/local/lib/pkgconfig\nexport PKG_CONFIG_PATH=/usr/local/lib/pkgconfig\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php -v\nwget https://www.php.net/distributions/php-8.0.16.tar.gz\ntar -zxf php-8.0.16.tar.gz\ncd  php-8.0.16/ext/sodium/\nphpize\n./configure --with-php-config=/usr/local/php8.0/bin/php-config\nmake\nmake install\n")))}m.isMDXComponent=!0}}]);