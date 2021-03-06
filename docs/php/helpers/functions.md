---
title: 常用函数
sidebar_label: 常用函数（封装）
---

### 检测日期格式是否正确

```php
/**
 * 检测日期格式是否正确
 *
 * @param $date
 * @return bool
 */
/*
 * 支持的日期格式：
 *  $date1 = '2019-01-01';
    $date2 = '2019-01-01 23:59';
    $date3 = '2019-01-01 23:59:59';
 */
function checkDateTime($date) {
    $patten = "/^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])(\s+(0?[0-9]|1[0-9]|2[0-3])\:(0?[0-9]|[1-5][0-9])(\:(0?[0-9]|[1-5][0-9]))?)?$/";
    if (preg_match($patten, $date)) return true;

    return false;
}
```

### 中文字符串超过长度截取

```php
/**
 * 截取字符串，超过长度拼接...
 *
 * @param strign $str 被操作的字符串
 * @param int $number 长度
 * @return string
 */
function ovim_mb_substr($str, $number)
{
    $strlen = mb_strlen($str);
    if ($strlen < $number) {
        return $str;
    } else {
        return mb_substr($str, 0, $number) . '…';
    }
}
```