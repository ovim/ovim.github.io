---
title: jQuery常用方法
sidebar_label: 常用操作
description: jquery 常用操作
---

### [页面加载完立刻执行JS的方法](https://blog.csdn.net/qq_26483671/article/details/79464564)

```javascript
//  网页加载完毕后立刻执行的操作
window.onload=function(){
 ...
});


$(window).load(function(){
 ...
});

// 当 DOM（document object model 文档对象模型）加载完毕且页面完全加载（包括图像）时发生 ready 事件。
$(document).ready(function(){
 ...
});

$(function(){
 ...
});
```

### 获得select被选中option的value和text和....

```javascript
// 获取选中的项
var options = $(“#select option:selected”); 

// 拿到选中项的值
alert(options.val());

// 拿到选中项的文本
alert(options.text());

// 拿到选中项的url值
alert(options.attr('url')); 
```