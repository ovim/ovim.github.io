"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9026],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=i(n),k=o,f=s["".concat(l,".").concat(k)]||s[k]||m[k]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],u={title:"Workerman/MQTT",sidebar_label:"Workerman/MQTT"},l=void 0,i={unversionedId:"emq/workerman-mqtt",id:"emq/workerman-mqtt",title:"Workerman/MQTT",description:"\u53bb\u5b98\u65b9 Github \u770b\u770b",source:"@site/docs/emq/workerman-mqtt.md",sourceDirName:"emq",slug:"/emq/workerman-mqtt",permalink:"/docs/emq/workerman-mqtt",tags:[],version:"current",frontMatter:{title:"Workerman/MQTT",sidebar_label:"Workerman/MQTT"},sidebar:"Extends",previous:{title:"EMQ",permalink:"/docs/emq/intro"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/docs/emq/question"}},c={},m=[],s={toc:m};function k(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/walkor/mqtt"},"\u53bb\u5b98\u65b9 Github \u770b\u770b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://doc.workerman.net/components/workemran-mqtt.html"},"\u8fd8\u662f\u76f4\u63a5\u770b\u5b98\u65b9\u6587\u6863\u5427")),(0,a.kt)("p",null,"Subscribe DEMO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PHP"},"<?php\nrequire 'vendor/autoload.php';\nuse Workerman\\Worker;\n$worker = new Worker();\n$worker->onWorkerStart = function(){\n    $mqtt = new Workerman\\Mqtt\\Client('mqtt://test.mosquitto.org:1883');\n    $mqtt->onConnect = function($mqtt) {\n        $mqtt->subscribe('test');\n    };\n    $mqtt->onMessage = function($topic, $content){\n        var_dump($topic, $content);\n    };\n    $mqtt->connect();\n};\nWorker::runAll();\n\n")),(0,a.kt)("p",null,"Publish DEMO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-PHP"},"<?php\nrequire 'vendor/autoload.php';\nuse Workerman\\Worker;\n$worker = new Worker();\n$worker->onWorkerStart = function(){\n    $mqtt = new Workerman\\Mqtt\\Client('mqtt://test.mosquitto.org:1883');\n    $mqtt->onConnect = function($mqtt) {\n       $mqtt->publish('test', 'hello workerman mqtt');\n    };\n    $mqtt->connect();\n};\nWorker::runAll();\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"PHP\u5fc5\u987b\u5b89\u88c5\u7684\u6269\u5c55\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"pcntl")),(0,a.kt)("p",null,"\u6267\u884c\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"php sub.php start")),(0,a.kt)("p",null,"\u540e\u53f0\u5f00\u59cb\u6267\u884c\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"php sub.php start -d")),(0,a.kt)("p",null,"\u505c\u6b62\u8ba2\u9605"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"php sub.php stop")),(0,a.kt)("p",null,"\u67e5\u770b\u8fdb\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ps aux")))}k.isMDXComponent=!0}}]);