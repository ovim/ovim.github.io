"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[219],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1263:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],a={title:"\u57fa\u7840",sidebar_label:"\u57fa\u7840"},u=void 0,c={unversionedId:"linux/base",id:"linux/base",title:"\u57fa\u7840",description:"\u5e38\u7528\u547d\u4ee4",source:"@site/docs/linux/base.md",sourceDirName:"linux",slug:"/linux/base",permalink:"/docs/linux/base",tags:[],version:"current",frontMatter:{title:"\u57fa\u7840",sidebar_label:"\u57fa\u7840"},sidebar:"Linux",previous:{title:"\u7b80\u4ecb",permalink:"/docs/linux/"},next:{title:"\u8fdb\u9636",permalink:"/docs/linux/plus"}},s={},p=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\u8fdb\u9636\u64cd\u4f5c",id:"\u8fdb\u9636\u64cd\u4f5c",level:3}],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,i.kt)("h3",{id:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u6587\u4ef6\ntouch fileName\n\n# \u521b\u5efa\u6587\u4ef6\u5939\nmkdir folderName\n\n# \u5220\u9664\nrm [options] name...\noptions:\n- -i \u5220\u9664\u524d\u9010\u4e00\u8be2\u95ee\u786e\u8ba4;\n- -f \u5373\u4f7f\u539f\u6863\u6848\u5c5e\u6027\u8bbe\u4e3a\u552f\u8bfb\uff0c\u4ea6\u76f4\u63a5\u5220\u9664\uff0c\u65e0\u9700\u9010\u4e00\u786e\u8ba4;\n- -r \u5c06\u76ee\u5f55\u53ca\u4ee5\u4e0b\u4e4b\u6863\u6848\u4ea6\u9010\u4e00\u5220\u9664;\n\n# \u590d\u5236\u6587\u4ef6/\u6587\u4ef6\u5939\ncp [options] source_file_path target_file_path\noptions:\n- -r\uff1a\u590d\u5236\u6587\u4ef6\u5939;\n\n# \u91cd\u547d\u540d/\u79fb\u52a8 \u6587\u4ef6/\u6587\u4ef6\u5939\nmv [options] source_file source_file_path  #\u79fb\u52a8\u6587\u4ef6\nmv [options] source_file source_file # \u91cd\u547d\u540d\u6587\u4ef6\nmv [options] source_file_path source_file_path # \u76ee\u6807\u76ee\u5f55\u5df2\u5b58\u5728\uff0c\u5c06\u6e90\u76ee\u5f55\u79fb\u52a8\u5230\u76ee\u6807\u76ee\u5f55\uff1b\u76ee\u6807\u76ee\u5f55\u4e0d\u5b58\u5728\u5219\u91cd\u547d\u540d\noptions:\n- -i: \u82e5\u6307\u5b9a\u76ee\u5f55\u5df2\u6709\u540c\u540d\u6587\u4ef6\uff0c\u5219\u5148\u8be2\u95ee\u662f\u5426\u8986\u76d6\u65e7\u6587\u4ef6;\n- -f: \u5728 mv \u64cd\u4f5c\u8981\u8986\u76d6\u67d0\u5df2\u6709\u7684\u76ee\u6807\u6587\u4ef6\u65f6\u4e0d\u7ed9\u4efb\u4f55\u6307\u793a;\n")),(0,i.kt)("h3",{id:"\u8fdb\u9636\u64cd\u4f5c"},"\u8fdb\u9636\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u8fdb\u7a0b\ntop \u4e0e ps \u7684\u533a\u522b\n- `top`:\u53ef\u4ee5\u6301\u7eed\u7684\u76d1\u89c6\u8fdb\u7a0b\u7684\u4fe1\u606f\n- `ps`:\u53ef\u4ee5\u67e5\u770b\u8fdb\u7a0b\u7684\u77ac\u95f4\u4fe1\u606f\n\n# \u67e5\u770b\u7aef\u53e3\u53f7\u7684\u5360\u7528\u60c5\u51b5\n\n# \u5220\u9664\u6267\u884c\u4e2d\u7684\u7a0b\u5e8f\u6216\u5de5\u4f5c\nkill\u53ef\u5c06\u6307\u5b9a\u7684\u4fe1\u606f\u9001\u81f3\u7a0b\u5e8f\u3002\u9884\u8bbe\u7684\u4fe1\u606f\u4e3aSIGTERM(15)\uff0c\u53ef\u5c06\u6307\u5b9a\u7a0b\u5e8f\u7ec8\u6b62\u3002\u82e5\u4ecd\u65e0\u6cd5\u7ec8\u6b62\u8be5\u7a0b\u5e8f\uff0c\u53ef\u4f7f\u7528SIGKILL(9)\u4fe1\u606f\u5c1d\u8bd5\u5f3a\u5236\u5220\u9664\u7a0b\u5e8f\u3002\u7a0b\u5e8f\u6216\u5de5\u4f5c\u7684\u7f16\u53f7\u53ef\u5229\u7528ps\u6307\u4ee4\u6216jobs\u6307\u4ee4\u67e5\u770b\u3002\n`kill [-s <\u4fe1\u606f\u540d\u79f0\u6216\u7f16\u53f7>][\u7a0b\u5e8f]`\n\u6216 `kill [-l <\u4fe1\u606f\u7f16\u53f7>]`\noptions:\n- -i<\u4fe1\u606f\u7f16\u53f7> \u82e5\u4e0d\u52a0<\u4fe1\u606f\u7f16\u53f7>\u9009\u9879\uff0c\u5219-i\u53c2\u6570\u4f1a\u5217\u51fa\u5168\u90e8\u7684\u4fe1\u606f\u540d\u79f0\n- -s <\u4fe1\u606f\u540d\u79f0\u6216\u7f16\u53f7> \u6307\u5b9a\u8981\u9001\u51fa\u7684\u4fe1\u606f\n- [\u7a0b\u5e8f] [\u7a0b\u5e8f]\u53ef\u4ee5\u662f\u7a0b\u5e8f\u7684PID\u6216\u662fPGDID\uff0c\u4e5f\u53ef\u4ee5\u662f\u5de5\u4f5c\u7f16\u53f7\n\n# \u5b9e\u4f8b:\n# \u6740\u6b7b\u8fdb\u7a0b\nkill 123456\n# \u5f3a\u5236\u6740\u6b7b\u8fdb\u7a0b\nkill -KILL 123456\n\u5f7b\u5e95\u6740\u6b7b\u8fdb\u7a0b\nkill -9 123456\n# \u6740\u6b7b\u6267\u884c\u7528\u6237\u6240\u6709\u8fdb\u7a0b\nkill -9 $(ps -ef | grep hnlinux)    #\u65b9\u6cd5\u4e00 \u8fc7\u6ee4\u51fahnlinux\u7528\u6237\u8fdb\u7a0b\nkill -u hnlinux     # \u65b9\u6cd5\u4e8c\n\n# \u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5( [\u83dc\u9e1f\u6559\u7a0b](https://www.runoob.com/linux/linux-comm-netstat.html) )\nnetstat -anp |grep 8080\n\n# \u5c06\u811a\u672c\u540e\u53f0\u6302\u8d77\u6267\u884c( /root/start.sh \u540e\u53f0\u6267\u884c)\nnohup /root/start.sh &\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u010189918/article/details/52879828?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase"},"shell\u811a\u672c\u5b9a\u65f6\u3001\u540e\u53f0\u6267\u884c")))}m.isMDXComponent=!0}}]);