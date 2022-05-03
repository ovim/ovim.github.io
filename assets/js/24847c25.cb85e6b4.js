"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9768],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(g,c(c({ref:n},l),{},{components:t})):r.createElement(g,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2812:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"\u5f02\u5e38",sidebar_label:"\u5f02\u5e38"},p=void 0,s={unversionedId:"php/base/langref/exceptions",id:"php/base/langref/exceptions",title:"\u5f02\u5e38",description:"\u81ea\u5b9a\u4e49Exception\u7c7b\u4e0e\u591a\u4e2a\u5f02\u5e38",source:"@site/docs/php/base/langref/exceptions.md",sourceDirName:"php/base/langref",slug:"/php/base/langref/exceptions",permalink:"/docs/php/base/langref/exceptions",tags:[],version:"current",frontMatter:{title:"\u5f02\u5e38",sidebar_label:"\u5f02\u5e38"},sidebar:"PHP",previous:{title:"\u9519\u8bef",permalink:"/docs/php/base/langref/errors"},next:{title:"\u65e5\u671f\u65f6\u95f4\u51fd\u6570",permalink:"/docs/php/base/functions/datetime"}},l={},u=[{value:"\u81ea\u5b9a\u4e49Exception\u7c7b\u4e0e\u591a\u4e2a\u5f02\u5e38",id:"\u81ea\u5b9a\u4e49exception\u7c7b\u4e0e\u591a\u4e2a\u5f02\u5e38",level:2},{value:"\u91cd\u65b0\u8dd1\u51fa\u5f02\u5e38",id:"\u91cd\u65b0\u8dd1\u51fa\u5f02\u5e38",level:2}],m={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"throw new Exception('this is exception info');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"try{\n  \n}catch(Exception $e){\n  \n}\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49exception\u7c7b\u4e0e\u591a\u4e2a\u5f02\u5e38"},"\u81ea\u5b9a\u4e49Exception\u7c7b\u4e0e\u591a\u4e2a\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nclass customException extends Exception\n{\n    public function errorMessage()\n    {\n        // \u9519\u8bef\u4fe1\u606f\n        $errorMsg = '\u9519\u8bef\u884c\u53f7 '.$this->getLine().' in '.$this->getFile()\n        .': <b>'.$this->getMessage().'</b> \u4e0d\u662f\u4e00\u4e2a\u5408\u6cd5\u7684 E-Mail \u5730\u5740';\n        return $errorMsg;\n    }\n}\n \n$email = \"someone@example.com\";\n \ntry\n{\n    // \u68c0\u6d4b\u90ae\u7bb1\n    if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE)\n    {\n        // \u5982\u679c\u662f\u4e2a\u4e0d\u5408\u6cd5\u7684\u90ae\u7bb1\u5730\u5740\uff0c\u629b\u51fa\u5f02\u5e38\n        throw new customException($email);\n    }\n    // \u68c0\u6d4b \"example\" \u662f\u5426\u5728\u90ae\u7bb1\u5730\u5740\u4e2d\n    if(strpos($email, \"example\") !== FALSE)\n    {\n        throw new Exception(\"$email \u662f example \u90ae\u7bb1\");\n    }\n}\ncatch (customException $e)\n{\n    echo $e->errorMessage();\n}\ncatch(Exception $e)\n{\n    echo $e->getMessage();\n}\n?>\n")),(0,a.kt)("h2",{id:"\u91cd\u65b0\u8dd1\u51fa\u5f02\u5e38"},"\u91cd\u65b0\u8dd1\u51fa\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'<?php\nclass customException extends Exception\n{\n    public function errorMessage()\n    {\n        // \u9519\u8bef\u4fe1\u606f\n        $errorMsg = $this->getMessage().\' \u4e0d\u662f\u4e00\u4e2a\u5408\u6cd5\u7684 E-Mail \u5730\u5740\u3002\';\n        return $errorMsg;\n    }\n}\n \n$email = "someone@example.com";\n \ntry\n{\n    try\n    {\n        // \u68c0\u6d4b "example" \u662f\u5426\u5728\u90ae\u7bb1\u5730\u5740\u4e2d\n        if(strpos($email, "example") !== FALSE)\n        {\n            // \u5982\u679c\u662f\u4e2a\u4e0d\u5408\u6cd5\u7684\u90ae\u7bb1\u5730\u5740\uff0c\u629b\u51fa\u5f02\u5e38\n            throw new Exception($email);\n        }\n    }\n    catch(Exception $e)\n    {\n        // \u91cd\u65b0\u629b\u51fa\u5f02\u5e38\n        throw new customException($email);\n    }\n}\ncatch (customException $e)\n{\n    // \u663e\u793a\u81ea\u5b9a\u4e49\u4fe1\u606f\n    echo $e->errorMessage();\n}\n?>\n')))}f.isMDXComponent=!0}}]);