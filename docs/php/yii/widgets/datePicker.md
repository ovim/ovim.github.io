---
title: DatePicker
sidebar_label: DatePicker
description: yii2 widgets DatePicker
---

> bootstrap-Date Time Picker 详细配置请参考http://www.bootcss.com/p/bootstrap-datetimepicker/

```php
use kartik\widgets\DatePicker;//使用这个组件（需安装），bootstrap的datepicker一样配置（yii2自带）。
```

```php
$years = $form->field($model, 'years')->widget(DatePicker::classname(), [
        'options' => ['value' => $currentYear],
        'removeButton' => false,
        'pluginOptions' => [
            'autoclose'=>true,
            'format' => 'yyyy',//yyyy选择到年，yyyy-mm到月，yyyy-mm-dd到天
            'startView'=>2,    //其实范围（0：日  1：天 2：年）
            'maxViewMode'=>2,  //最大选择范围（年）
            'minViewMode'=>2,  //最小选择范围（年）
            'todayHighlight' => true, // 今日高亮
             'autoclose' => true, // 选择后自动关闭
             'todayBtn' => true, // 今日按钮显示
        ]
    ]);
```