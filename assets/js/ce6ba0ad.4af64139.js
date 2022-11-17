"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3455],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,c=p["".concat(o,".").concat(m)]||p[m]||k[m]||l;return n?r.createElement(c,s(s({ref:t},d),{},{components:n})):r.createElement(c,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),s=["components"],i={title:"\u57fa\u7840",sidebar_label:"\u57fa\u7840"},o=void 0,u={unversionedId:"redis/base",id:"redis/base",title:"\u57fa\u7840",description:"\u57fa\u7840\u547d\u4ee4",source:"@site/docs/redis/base.md",sourceDirName:"redis",slug:"/redis/base",permalink:"/docs/redis/base",tags:[],version:"current",frontMatter:{title:"\u57fa\u7840",sidebar_label:"\u57fa\u7840"},sidebar:"SQL",previous:{title:"\u7b80\u4ecb",permalink:"/docs/redis/intro"},next:{title:"\u8fdb\u9636",permalink:"/docs/redis/plus"}},d={},k=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"String\uff08\u5b57\u7b26\u4e32\uff09",id:"string\u5b57\u7b26\u4e32",level:3},{value:"Hash\uff08\u54c8\u5e0c\uff09",id:"hash\u54c8\u5e0c",level:3},{value:"List\uff08\u5217\u8868\uff09",id:"list\u5217\u8868",level:3},{value:"Set\uff08\u65e0\u5e8f\u96c6\u5408\uff09",id:"set\u65e0\u5e8f\u96c6\u5408",level:3},{value:"zset(sorted set\uff1a\u6709\u5e8f\u96c6\u5408)",id:"zsetsorted-set\u6709\u5e8f\u96c6\u5408",level:3},{value:"Redis \u547d\u4ee4",id:"redis-\u547d\u4ee4",level:2},{value:'<a href="./base/key" target="_blank">Key</a>',id:"key",level:3},{value:'<a href="./base/string/#\u547d\u4ee4" target="_blank">String</a>',id:"string",level:3},{value:'<a href="./base/hash/#\u547d\u4ee4" target="_blank">Hash</a>',id:"hash",level:3},{value:'<a href="./base/list/#\u547d\u4ee4" target="_blank">List</a>',id:"list",level:3},{value:'<a href="./base/set/#\u547d\u4ee4" target="_blank">Set</a>',id:"set",level:3},{value:'<a href="./base/zset/#\u547d\u4ee4" target="_blank">Zset</a>',id:"zset",level:3}],p={toc:k};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{href:"./base/command",target:"_blank"},"\u57fa\u7840\u547d\u4ee4"),(0,l.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Redis\u652f\u6301\u4e94\u79cd\u6570\u636e\u7c7b\u578b\uff1a",(0,l.kt)("a",{href:"./base/string",target:"_blank"},"string(\u5b57\u7b26\u4e32)"),"\u3001",(0,l.kt)("a",{href:"./base/hash",target:"_blank"},"hash(\u54c8\u5e0c)"),"\u3001",(0,l.kt)("a",{href:"./base/list",target:"_blank"},"list(\u5217\u8868)"),"\u3001",(0,l.kt)("a",{href:"./base/set",target:"_blank"},"set(\u96c6\u5408)"),"\u3001",(0,l.kt)("a",{href:"./base/zset",target:"_blank"},"zset(sorted set\uff1a\u6709\u5e8f\u96c6\u5408)"))),(0,l.kt)("h3",{id:"string\u5b57\u7b26\u4e32"},"String\uff08\u5b57\u7b26\u4e32\uff09"),(0,l.kt)("a",{href:"./base/string",target:"_blank"},"\u8be6\u7ec6\u4ecb\u7ecd"),(0,l.kt)("p",null,"string \u662f redis \u6700\u57fa\u672c\u7684\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u7406\u89e3\u6210\u4e0e Memcached \u4e00\u6a21\u4e00\u6837\u7684\u7c7b\u578b\uff0c\u4e00\u4e2a key \u5bf9\u5e94\u4e00\u4e2a value\u3002"),(0,l.kt)("p",null,"string \u7c7b\u578b\u662f\u4e8c\u8fdb\u5236\u5b89\u5168\u7684\u3002\u610f\u601d\u662f redis \u7684 string \u53ef\u4ee5\u5305\u542b\u4efb\u4f55\u6570\u636e\u3002\u6bd4\u5982jpg\u56fe\u7247\u6216\u8005\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"string \u7c7b\u578b\u662f Redis \u6700\u57fa\u672c\u7684\u6570\u636e\u7c7b\u578b\uff0cstring \u7c7b\u578b\u7684\u503c\u6700\u5927\u80fd\u5b58\u50a8 512MB\u3002"),(0,l.kt)("p",null,"\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set key value [expiration EX seconds|PX milliseconds] [NX|XX]\nget key\n")),(0,l.kt)("p",null,"\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> set name ovimRedis\nOK\n127.0.0.1:6379> get name\n"ovimRedis"\n')),(0,l.kt)("p",null,"\u5728\u4ee5\u4e0a\u5b9e\u4f8b\u4e2d\u6211\u4eec\u4f7f\u7528\u4e86 Redis \u7684 set \u548c get \u547d\u4ee4\u3002\u952e\u4e3a name\uff0c\u5bf9\u5e94\u7684\u503c\u4e3a ovimRedis"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f:"),"\u4e00\u4e2a\u952e\u6700\u5927\u80fd\u5b58\u50a8512MB\u3002"),(0,l.kt)("h3",{id:"hash\u54c8\u5e0c"},"Hash\uff08\u54c8\u5e0c\uff09"),(0,l.kt)("a",{href:"./base/hash",target:"_blank"},"\u8be6\u7ec6\u4ecb\u7ecd"),(0,l.kt)("p",null,"Redis hash \u662f\u4e00\u4e2a\u952e\u503c(key=>value)\u5bf9\u96c6\u5408\u3002"),(0,l.kt)("p",null,"Redis hash \u662f\u4e00\u4e2a string \u7c7b\u578b\u7684 field \u548c value \u7684\u6620\u5c04\u8868\uff0chash \u7279\u522b\u9002\u5408\u7528\u4e8e\u5b58\u50a8\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hmset key field value [field value ...]\nhget key field\nhgetall key\n")),(0,l.kt)("p",null,"\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> hmset ovimHashKey name ovim desc engineer\nOK\n127.0.0.1:6379> hget ovimHashKey name\n"ovim"\n127.0.0.1:6379> hget ovimHashKey desc\n"engineer"\n127.0.0.1:6379> hgetall ovimHashKey\n1) "name"\n2) "ovim"\n3) "desc"\n4) "engineer"\n127.0.0.1:6379> \n')),(0,l.kt)("p",null,"\u5b9e\u4f8b\u4e2d\u6211\u4eec\u4f7f\u7528\u4e86 Redis ",(0,l.kt)("inlineCode",{parentName:"p"},"hmset"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"hget"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"hgetall")," \u547d\u4ee4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"hmset")," \u8bbe\u7f6e\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"field=>value")," \u5bf9"),(0,l.kt)("p",null,"\u6bcf\u4e2a hash \u53ef\u4ee5\u5b58\u50a8 $2^32-1$ \u952e\u503c\u5bf9\uff0840\u591a\u4ebf\u53732\u768432\u6b21\u65b9-1\uff09\u3002"),(0,l.kt)("h3",{id:"list\u5217\u8868"},"List\uff08\u5217\u8868\uff09"),(0,l.kt)("a",{href:"./base/list",target:"_blank"},"\u8be6\u7ec6\u4ecb\u7ecd"),(0,l.kt)("p",null,"Redis \u5217\u8868\u662f\u7b80\u5355\u7684\u5b57\u7b26\u4e32\u5217\u8868\uff0c\u6309\u7167\u63d2\u5165\u987a\u5e8f\u6392\u5e8f\u3002\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\u5230\u5217\u8868\u7684\u5934\u90e8\uff08\u5de6\u8fb9 lpush \uff09\u6216\u8005\u5c3e\u90e8\uff08\u53f3\u8fb9 rpush \uff09\u3002"),(0,l.kt)("p",null,"\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lpush key value [value ...]\nlrange key start stop\n")),(0,l.kt)("p",null,"\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> lpush ovimListKey ovim\n(integer) 1\n127.0.0.1:6379> lpush ovimListKey is\n(integer) 2\n127.0.0.1:6379> lpush ovimListKey engineer\n(integer) 3\n127.0.0.1:6379> lrange ovimListKey 0 5\n1) "engineer"\n2) "is"\n3) "ovim"\n127.0.0.1:6379> \n')),(0,l.kt)("p",null,"\u5217\u8868\u6700\u591a\u53ef\u5b58\u50a8 $2^32-1$ \u5143\u7d20 (4294967295, \u6bcf\u4e2a\u5217\u8868\u53ef\u5b58\u50a840\u591a\u4ebf)\u3002"),(0,l.kt)("h3",{id:"set\u65e0\u5e8f\u96c6\u5408"},"Set\uff08\u65e0\u5e8f\u96c6\u5408\uff09"),(0,l.kt)("a",{href:"./base/set",target:"_blank"},"\u8be6\u7ec6\u4ecb\u7ecd"),(0,l.kt)("p",null,"Redis\u7684Set\u662fstring\u7c7b\u578b\u7684\u65e0\u5e8f\u96c6\u5408\u3002"),(0,l.kt)("p",null,"\u96c6\u5408\u662f\u901a\u8fc7\u54c8\u5e0c\u8868\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u6dfb\u52a0\uff0c\u5220\u9664\uff0c\u67e5\u627e\u7684\u590d\u6742\u5ea6\u90fd\u662fO(1)\u3002"),(0,l.kt)("p",null,"sadd \u547d\u4ee4"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a string \u5143\u7d20\u5230 key \u5bf9\u5e94\u7684 set \u96c6\u5408\u4e2d\uff0c\u6210\u529f\u8fd4\u56de1\uff0c\u5982\u679c\u5143\u7d20\u5df2\u7ecf\u5728\u96c6\u5408\u4e2d\u8fd4\u56de 0\uff0c\u5982\u679c key \u5bf9\u5e94\u7684 set \u4e0d\u5b58\u5728\u5219\u8fd4\u56de\u9519\u8bef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sadd key member\nsmembers key\n")),(0,l.kt)("p",null,"\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> sadd ovimCloud hello\n(integer) 1     \n127.0.0.1:6379> sadd ovimCloud i\n(integer) 1     \n127.0.0.1:6379> sadd ovimCloud am\n(integer) 1     \n127.0.0.1:6379> sadd ovimCloud ovim\n(integer) 1     \n127.0.0.1:6379> sadd ovimCloud ovim\n(integer) 0     \n127.0.0.1:6379> smembers ovimCloud\n1) "ovim"       \n2) "i"\n3) "am"\n4) "hello"      \n127.0.0.1:6379> \n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u4ee5\u4e0a\u5b9e\u4f8b\u4e2d ovim \u6dfb\u52a0\u4e86\u4e24\u6b21\uff0c\u4f46\u6839\u636e\u96c6\u5408\u5185\u5143\u7d20\u7684\u552f\u4e00\u6027\uff0c\u7b2c\u4e8c\u6b21\u63d2\u5165\u7684\u5143\u7d20\u5c06\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("p",null,"\u96c6\u5408\u4e2d\u6700\u5927\u7684\u6210\u5458\u6570\u4e3a $2^32-1$ (4294967295, \u6bcf\u4e2a\u96c6\u5408\u53ef\u5b58\u50a840\u591a\u4ebf\u4e2a\u6210\u5458)\u3002"),(0,l.kt)("h3",{id:"zsetsorted-set\u6709\u5e8f\u96c6\u5408"},"zset(sorted set\uff1a\u6709\u5e8f\u96c6\u5408)"),(0,l.kt)("a",{href:"./base/zset",target:"_blank"},"\u8be6\u7ec6\u4ecb\u7ecd"),(0,l.kt)("p",null,"Redis zset \u548c set \u4e00\u6837\u4e5f\u662fstring\u7c7b\u578b\u5143\u7d20\u7684\u96c6\u5408,\u4e14\u4e0d\u5141\u8bb8\u91cd\u590d\u7684\u6210\u5458\u3002"),(0,l.kt)("p",null,"\u4e0d\u540c\u7684\u662f\u6bcf\u4e2a\u5143\u7d20\u90fd\u4f1a\u5173\u8054\u4e00\u4e2adouble\u7c7b\u578b\u7684\u5206\u6570\u3002redis\u6b63\u662f\u901a\u8fc7\u5206\u6570\u6765\u4e3a\u96c6\u5408\u4e2d\u7684\u6210\u5458\u8fdb\u884c\u4ece\u5c0f\u5230\u5927\u7684\u6392\u5e8f\u3002"),(0,l.kt)("p",null,"zset\u7684\u6210\u5458\u662f\u552f\u4e00\u7684,\u4f46\u5206\u6570(score)\u5374\u53ef\u4ee5\u91cd\u590d\u3002 "),(0,l.kt)("p",null,"\u547d\u4ee4"),(0,l.kt)("p",null,"\u6dfb\u52a0\u5143\u7d20\u5230\u96c6\u5408\uff0c\u5143\u7d20\u5728\u96c6\u5408\u4e2d\u5b58\u5728\u5219\u66f4\u65b0\u5bf9\u5e94score"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"zadd key score member\nzrangebyscore key min max [WITHSCORES] [LIMIT offset count]\n")),(0,l.kt)("p",null,"\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> zadd ovimCloud 0 hello\n(integer) 1     \n127.0.0.1:6379> zadd ovimCloud 0 i\n(integer) 1     \n127.0.0.1:6379> zadd ovimCloud 0 am\n(integer) 1     \n127.0.0.1:6379> zadd ovimCloud 0 ovim\n(integer) 1     \n127.0.0.1:6379> zadd ovimCloud 0 ovim\n(integer) 0     \n127.0.0.1:6379> zrangebyscore ovimCloud 0 10\n1) "am"\n2) "hello"      \n3) "i"\n4) "ovim"       \n127.0.0.1:6379> \n')),(0,l.kt)("h2",{id:"redis-\u547d\u4ee4"},"Redis \u547d\u4ee4"),(0,l.kt)("h3",{id:"key"},(0,l.kt)("a",{href:"./base/key",target:"_blank"},"Key")),(0,l.kt)("h3",{id:"string"},(0,l.kt)("a",{href:"./base/string/#\u547d\u4ee4",target:"_blank"},"String")),(0,l.kt)("h3",{id:"hash"},(0,l.kt)("a",{href:"./base/hash/#\u547d\u4ee4",target:"_blank"},"Hash")),(0,l.kt)("h3",{id:"list"},(0,l.kt)("a",{href:"./base/list/#\u547d\u4ee4",target:"_blank"},"List")),(0,l.kt)("h3",{id:"set"},(0,l.kt)("a",{href:"./base/set/#\u547d\u4ee4",target:"_blank"},"Set")),(0,l.kt)("h3",{id:"zset"},(0,l.kt)("a",{href:"./base/zset/#\u547d\u4ee4",target:"_blank"},"Zset")),(0,l.kt)("a",{href:"./history.base",target:"_blank"},"history"))}m.isMDXComponent=!0}}]);