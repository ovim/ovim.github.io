"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4943],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1899:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"\u76f8\u5173",sidebar_label:"\u76f8\u5173"},p=void 0,l={unversionedId:"php/about",id:"php/about",title:"\u76f8\u5173",description:"Laradock\u73af\u5883\u4e0b\u7684fastadmin\u4f2a\u9759\u6001\u53c2\u8003",source:"@site/docs/php/about.mdx",sourceDirName:"php",slug:"/php/about",permalink:"/docs/php/about",tags:[],version:"current",frontMatter:{title:"\u76f8\u5173",sidebar_label:"\u76f8\u5173"},sidebar:"PHP",previous:{title:"\u7b80\u4ecb",permalink:"/docs/php/framework/thinkphp/intro"},next:{title:"other",permalink:"/docs/php/manual/other"}},u={},s=[],f={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null," ** Laradock\u73af\u5883\u4e0b\u7684fastadmin\u4f2a\u9759\u6001\u53c2\u8003 **"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n\nlisten 80;\nlisten [::]:80;\n\nserver_name metro.loc;\nroot /var/www/metro.loc/public;\nindex index.php index.html index.htm;\nlocation / {\n     try_files $uri $uri/ /index.php$is_args$args;\n     index index.php index.html index.htm;\n     if (!-e $request_filename) {\n     rewrite ^/(.*)$ /index.php/$1 last;\n     }\n}\n\nlocation ~ ^(.+\\.php)(.*)$ {\n    fastcgi_pass php-upstream;\n    fastcgi_split_path_info ^(.+\\.php)(.*)$;\n    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n    fastcgi_param PATH_INFO $fastcgi_path_info;\n    include fastcgi_params;\n}\n\n    location ~ /\\.ht {\n        deny all;\n    }\n\n    location /.well-known/acme-challenge/ {\n        root /var/www/letsencrypt/;\n        log_not_found off;\n    }\n}\n"))))}m.isMDXComponent=!0}}]);