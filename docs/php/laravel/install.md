---
title: 安装laravel
sidebar_label: Install
description: 安装laravel
---

> 服务器安装laravel，创建数据库，更新`.env`文件，生成秘钥；
> 
> 更新`.gitignore(去掉vendor)`，git初始化，添加git仓库，`push`
> 
> 本地`pull`，配置ftp，将线上`.env`文件内容与本地`.env`内容同步

## 服务器配置

### 安装laravel

```
$ composer create-project --prefer-dist laravel/laravel laravel

$ php artisan key:generate

$ chmod -R 777 storage/

$ chmod -R 777 bootstrap/
```

### 配置站点至laravel下的public目录

伪静态参考

```
server {
    listen 80;
    server_name laravel.loc;
    root /wwwroot/laravel.loc/public/;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass php74:9000;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}

```

### 数据库

创建站点对应数据库，创建.env文件，更新其数据库配置信息

```
$ cp .env.example .env
```

## 本地配置

1、git拉取代码
2、PhpStorm配置ftp（Deployment），连接服务器

## 安装laravel-admin扩展

```shell
# composer安装laravel-admin扩展
$ composer require encore/laravel-admin

# 发布资源
$ php artisan vendor:publish --provider="Encore\Admin\AdminServiceProvider"

# 安装数据表、完成安装
$ php artisan admin:install

# 启动服务后，在浏览器打开 http://localhost/admin/ ,使用用户名 admin 和密码 admin登录.
```


## 参考命令
```
# git 添加远端仓库地址
git remote add origin [远端仓库地址]
```
