---
title: Laravel 接口
sidebar_label: 接口相关
description: laravel 接口相关
---

## 登录接口添加验证码

> **简述：**
> 
> 生成验证码图片(captcha)之后，将验证码(phrase)与一个唯一值(captchaKey) 进行cache，将 captcha、captchaKey 给到前端
> 
> 前端在登录接口时，将用户输入的验证码、captchaKey传给接口，接口根据captchaKey查找真实的验证码 与 用户输入的验证码做比较，同时删除对应的 cache
> 
> **优势：**
> 
> 验证码纯后端返回，后端校验，保证登录接口安全有效性
> 
> 每个验证码仅可使用一次，防止机器反复识别

代码实现

1、安装验证码相关的 composer 包

```bash
composer require gregwar/captcha
```

2、接口生成验证码并返回相关数据

```php
<?php
/**
 * @Descripttion:
 * @Author: ovim <ovimcloud@gmail.com>
 * @Date: 2021/6/28 2:16 下午
 */

namespace App\Services;


use Carbon\Carbon;
use Gregwar\Captcha\CaptchaBuilder;
use Gregwar\Captcha\PhraseBuilder;
use Cache;

/**
 * Class CaptchaService
 * @package App\Services
 */
class CaptchaService
{
    /**
     * @return array
     */
    public function imgCode()
    {
        $phrase = new PhraseBuilder();
        // 设置验证码位数
        $code = $phrase->build(4);
        // 生成验证码图片的Builder对象，配置相应属性
        $builder = new CaptchaBuilder($code, $phrase);
        // 设置背景颜色34,0,45
        //$builder->setBackgroundColor(34, 0, 45);
        // 设置倾斜角度
        $builder->setMaxAngle(20);
        // 设置验证码后面最大行数
        $builder->setMaxBehindLines(10);
        // 设置验证码前面最大行数
        $builder->setMaxFrontLines(10);
        // 设置验证码颜色
        $builder->setTextColor(30, 144, 255);
        // 可以设置图片宽高及字体
        $builder->build($width = 143, $height = 40, $font = null);
        // 获取验证码的内容
        $phrase = $builder->getPhrase();

        $captchaKey = md5( rand(1,1000).time());
        \Cache::put($captchaKey, $phrase, Carbon::now()->addMinutes(5));

        return $this->success([
            'captcha_key' => $captchaKey,
            'phrase' => $phrase,
            'captcha' => $builder->inline()
        ]);
    }
}

```

3、登录接口校验验证码的有效性

```php
$captcha = \Cache::pull($this->_params['captcha_key']);
if (empty($captcha) || $captcha != $this->_params['captcha']) $this->error('验证码错误');
```