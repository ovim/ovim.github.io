---
title: Docker 常用命令
sidebar_label: 常用命令
description: Docker 常用命令
---

win10 Docker Desktop修改镜像源(自已的阿里镜像加速器) 
	`https://blog.csdn.net/wto882dim/article/details/100518088`

Mac Docker 修改镜像源
`[Preferences->Docker Engine]`
` "registry-mirrors": [
    "https://hkym20lm.mirror.aliyuncs.com"
  ]`
![bcdb49f8b4e0f610b2a31515e9bb38ab.png](en-resource://database/581:1)

---

查看下载的镜像
`docker images`

删除镜像
`docker rmi [image IMAGE ID] `
`docker images rm [image] `

列出当前所有正在运行的container
`docker ps `

列出所有的container
`docker ps -a`

显示所有容器的docker ID
`docker ps -a -q`

查看指定容器IP
`docker inspect 容器ID | grep IPAddress`

删除指定容器
`docker rm [CONTAINER ID]`

删除所有已经停止的容器
```
docker rm `docker  ps  -a  |grep Exited   |awk   '{print $1}'`
```

启动与停止容器
`docker start 【name/CONTAINER ID】`
`docker stop 【name/CONTAINER ID】`

杀死与重启容器
`docker kill【name/CONTAINER ID】`
`docker restart 【name/CONTAINER ID】`

进入正在运行的容器
`docker exec -it 【CONTAINER ID】 /bin/bash`
`docker attach 【CONTAINER ID】`

停止所有容器
`docker stop $(docker ps -q) `

删除所有容器
`docker rm $(docker ps -aq) `

删除所有镜像
`docker rmi $(docker images -q) `

查看容器配置信息
`docker inspect [name/CONTAINER ID] `

 

================================================MySQL====================================================================
创建并运行MySQL容器：
```
docker run 
--name mysql 
-e MYSQL_ROOT_PASSWORD=root 
-p 33267:3306 
--privileged=true 
-v ~/Web/mysql/data:/var/lib/mysql 
-v ~/Web/mysql/conf:/etc/mysql/conf.d 
-v ~/Web/mysql/mysql_sock:/var/run/mysqld 
--restart=always 
-d 
mysql:5.7

命令解释：
–name mysql 指定容器名称为 mysql
-e MYSQL_ROOT_PASSWORD=123456 初始化 root 用户的密码为 123456
-p 33267:3306 将容器的 3306 端口映射到主机的 33267 端口
--privileged=true 给容器加上特定权限,否则有可能出现常见容器失败的情况
-v ~/web/mysql/data:/var/lib/mysql 将主机 ~/web/mysql/data 目录挂载到容器的 /var/lib/mysql
-v ~/web/mysql/conf:/etc/mysql/conf.d 将主机 ~/web/mysql/conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf
-v ~/web/mysql/mysql_sock:/var/run/mysqld 将主机 ~/web/mysql/mysql_sock 目录挂载到容器的 /var/run/mysqld （为防止 php 容器无权限读取 mysql 容器的 sock 文件）
-d 后台运行
```
```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 33267:3306 --privileged=true -v ~/Web/mysql/data:/var/lib/mysql -v ~/Web/mysql/conf:/etc/mysql/conf.d -v ~/Web/mysql/mysql_sock:/var/run/mysqld --restart=always -d mysql:5.7
```
`--restart=on-failure:5  最多重启五次`

===============================================PHP========================================================================
创建并运行PHP容器：
```
docker run 
--name php 
-p 9000:9000 
--privileged=true 
-v ~/Web/www/:/var/www/html 
-v ~/Web/mysql/mysql_sock/:/var/run/mysqld --link mysql:mysql 
--restart=always 
-d 
php:7.2-fpm

命令解释：
–name php5.4 指定容器的名称为 php5.4
-p 9000:9000 将容器的 9000 端口映射到主机的 9000 端口
-v ~/web/www:/var/www/html 将主机的 ~/web/www 目录挂载到容器的 /var/www/html 目录
-v ~/web/mysql/mysql_sock:/var/run/mysqld 将主机
~/web/mysql/mysql_sock 目录挂载到容器的 /var/run/mysqld （为防止 php 容器无权限读取
mysql 容器的 sock 文件）
–link mysql:mysql 将 mysql 容器的网络并入 php7.2 容器，实现容器间的通信
-d 保持后台运行
```
 
查看PHP的扩展
`cd /usr/src/php/ext/`

安装扩展
`docker-php-ext-install [扩展名称]`
```
docker run --name php -p 9000:9000 --privileged=true -v ~/Web/www/:/var/www/html -v ~/Web/mysql/mysql_sock/:/var/run/mysqld --link mysql:mysql --restart=always -d php:7.2-fpm
```
```
docker run -it --name php -v ~/Web/www/:/app crunchgeek/php-fpm:7.2 php script.php
```
===================================================nginx=======================================================================
创建并运行Nginx容器：
```
docker run 
--name nginx 
-p 80:80  
--privileged=true 
-v ~/Web/www:/usr/share/nginx/html 
-v ~/Web/nginx/conf.d:/etc/nginx/conf.d 
--link php:php 
--restart=always 
-d 
nginx
```
```
docker run --name nginx -p 80:80  --privileged=true -v ~/Web/www:/usr/share/nginx/html -v ~/Web/nginx/conf.d:/etc/nginx/conf.d --link php:php --restart=always -d nginx
```
nginx配置文件
```
server {
    listen       80;
    server_name  www.test.loc;

    location / {
        root   /usr/share/nginx/html/wwwroot/jianyan74rf/web/;
        index index.php index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html/wwwroot/jianyan74rf/web/;
    }

    location ~ \.php$ {
        fastcgi_pass   php:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /var/www/html$fastcgi_script_name;
        include        fastcgi_params;
    }
}

```

