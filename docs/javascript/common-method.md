---
title: js 常用方法
sidebar_label: 常用方法
description: js common method
---

### 获取当前域名

[参考文章](https://www.cnblogs.com/wangdahai/p/6221399.html)

```javascript
var domain = document.domain;
var domain = window.location.host;
```

### 获取当前URL

```javascript
var url = window.location.href;
var url = self.location.href;
var url = document.URL;
var url = document.location;
```

### 获取指定url参数的方法
  
  
### 页面加载完立刻执行JS的方法

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

### [jquery追加元素](https://www.w3school.com.cn/jquery/jquery_dom_add.asp)

```
append() - 在被选元素的结尾插入内容
prepend() - 在被选元素的开头插入内容
after() - 在被选元素之后插入内容
before() - 在被选元素之前插入内容
```


### [子窗口刷新父窗口](https://www.cnblogs.com/Irving/archive/2013/01/13/2858314.html)

```javascript
parent.location.reload();
```

### 获得select被选中option的value和text和....

```javascript
// 1:拿到select对象： 
var myselect=document.getElementById("select");

// 2：拿到选中项的索引：
var index=myselect.selectedIndex ; // selectedIndex代表的是你所选中项的index

// 3:拿到选中项options的value： 
myselect.options[index].value;

// 4:拿到选中项options的text： 
myselect.options[index].text;

// 5:拿到选中项的其他值，比如这里的url： 
myselect.options[index].getAttribute('url');
```

### select option 设置默认值

```javascript
$("#selectTable").val(e.table);
```

##打开网址

```javascript
window.open("http://www.runoob.com");
```
### 判断是否为url

```javascript
var url = $("#url").val();
if(url != '')
{
    //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    //下面的代码中应用了转义字符"\"输出一个字符"/"
    var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(Expression);
    if(objExp.test(url) != true){
        alert("网址格式不正确！请重新输入");
        return false;
    }
}
```

### 自动点击事件

```javascript
document.getElementById('displayMyVote').click();
```
### 实现倒计时（分:秒）

```javascript
// 需要传入的参数为秒数，此方法倒计时结束后会自动刷新页面
function resetTime(timetamp){
    var timer=null;
    var t=timeStamp;
    var m=0;
    var s=0;
    m=Math.floor(t/60%60);
    m<10&&(m='0'+m);
    s=Math.floor(t%60);
    function countDown(){
        s--;
        s<10&&(s='0'+s);
        if(s.length>=3){
            s=59;
            m="0"+(Number(m)-1);
        }
        if(m.length>=3){
            m='00';
            s='00';
            clearInterval(timer);
        }
        $("#Pk10Time").html(m+"分"+s+"秒");
        if(m==0 && s==0){
            location.reload();
        }
    }
    timer=setInterval(countDown,1000);
}
```
### jq获取表单的全部数据，用于`ajax`提交

```javascript
var formData = {};
var t = $('#Form').serializeArray();
$.each(t, function() {
    formData[this.name] = this.value;
});
console.log(JSON.stringify(formData));
```
##### 说明：先获取内容，然后构建理想对象数据，最后是转为`json `字符串，不需要可以不转化

### js动态设置select中option选中

```javascript
/** 
 * 设置select控件选中 
 * @param selectId select的id值 
 * @param checkValue 选中option的值 
 * @author code
*/  
function set_select_checked(selectId, checkValue){  
    var select = document.getElementById(selectId);  
 
    for (var i = 0; i < select.options.length; i++){  
        if (select.options[i].value == checkValue){  
            select.options[i].selected = true;  
            break;  
        }  
    }  
}
```

### 判断数组中是否包含某元素

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
//根据indexOf()的返回值判断,indexOf的返回值为某元素在数组中的下标,若不存在,返回 -1
if(a >= 0){
    console.log('包含');
}else{
    console.log('不包含');
}
```

### 删除数组元素

```javascript
//首先可以给js的数组对象定义一个函数，用于查找指定的元素在数组中的位置，即索引，代码为：
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };
//然后使用通过得到这个元素的索引，使用js数组自己固有的函数去删除这个元素,代码为：
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
//这样就构造了这样一个函数，比如我有有一个数组：
var arr = ['abs','dsf','sdf','fd'];
//假如我们要删除其中的 'fd' ,就可以使用：
arr.remove('fd');
```

### 通过class属性删除节点

```javascript
function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
```

### 查询某元素在数组中的索引值(index)

[参考文章](https://blog.csdn.net/mossbaoo/article/details/83505784)

```javascript
//方法一；

// 创建数组arr
let arr = [1, 2, 3, 4, 5];
 
// 得到1在arr数组中的下标0
arr.indexOf(1); // 0
```

```javascript
//方法二；

// 查询元素在数组中的索引值
Array.prototype.indexValue = function (arr) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == arr) {
      return i;
    }
  }
}

// 创建数组arr
let arr = [1, 2, 3, 4, 5];
 
// 得到1在arr数组中的下标0
arr.indexValue(1); // 0
```


### 获取select option选中值
		获取redio选中值
		
### 计算两个日期相差天数

```javascript
/**
 * 两个日期相隔天数,时间格式：yyyy-MM-dd
 * 第一个参数不传， 表示当前日期
 */
function dateDiff(sDate1, sDate2){
    if(sDate1 == sDate2){
        return 0;
    }
    if(!sDate1){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        sDate1 = year+"-"+month+"-"+day;
    }
        var  aDate,  oDate1,  oDate2,  iDays ; 
        aDate  =  sDate1.split("-") ; 
        oDate1  =  new Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);//转换为Mm-dd-yyyy格式,这种date的构造方式在苹果手机会报错，见解释
        aDate  =  sDate2.split("-");  
        oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);  
        iDays  =  parseInt(Math.abs(oDate1  -  oDate2)/1000/60/60/24);    //把相差的毫秒数转换为天数  
        return  iDays;  
}
```