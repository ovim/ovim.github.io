---
title: Layui
sidebar_label: Layui使用心得
description: Layui使用心得
---

### ***layui select 动态赋值***

[参考文章](https://www.cnblogs.com/youmingkuang/p/12092832.html)

```
$("#select").val(值); //直接赋值

//layui重新渲染
layui.use('form', function(){
   var form = layui.form;//高版本建议把括号去掉，有的低版本，需要加()
   form.render('select');
   //form.render();
});

form.render('select’);// 重新渲染select
form.render(‘checkbox’);// 重新渲染checkbox
form.render(‘radio’);// 重新渲染radio
form.render();// 重新渲染整个form表单
```

### layui select 默认选中
关于layui form的操作记得重新渲染

```
$("#selectTable").val(e.table);
form.render('select');
```
