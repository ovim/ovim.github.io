---
title: Docker 问题汇总
sidebar_label: 问题汇总
description: Docker 问题汇总
---

# 推送推送镜像至阿里云容器
命令行登录阿里云(密码为开通容器时的密码)

`sudo docker login --username=17753821682 registry.cn-hangzhou.aliyuncs.com`

将容器打包成镜像

`docker commit [Container ID] Image_name:[TAG]`

把镜像打上阿里云Tag

`sudo docker tag [ImageId] registry.cn-shanghai.aliyuncs.com/ylcode/php:[Tag]`

将镜像推送到Registry

`sudo docker push registry.cn-shanghai.aliyuncs.com/ylcode/php:[Tag]`


## 安装扩展库的通常命令
```php
docker-php-ext-install 扩展库名
```
## 安装gd库需要特殊照顾，步骤如下
```php
//进入PHP容器
//更新软件源
apt update
//安装各种库
apt install -y libwebp-dev libjpeg-dev libpng-dev libfreetype6-dev
//解压源码
docker-php-source extract
//进入gd源码文件夹
cd /usr/src/php/ext/gd 
//准备编译
docker-php-ext-configure gd --with-webp-dir=/usr/include/webp --with-jpeg-dir=/usr/include --with-png-dir=/usr/include --with-freetype-dir=/usr/include/freetype2 
//编译安装
docker-php-ext-install gd 
//查看是否成功安装gd扩展
php -m | grep gd
//重启容器
```

# ERROR: Failed to Setup IP tables: Unable to enable SKIP DNAT rule
### 解释：执行docker-compose up -d时出现ERROR: Failed to Setup IP tables: Unable to enable SKIP DNAT rule

### 原因：防火墙关闭之后需要重启docker服务。

### 解决办法：重启docker

```bash
service docker restart
```

# Docker镜像无法删除 
## 发现问题

来自守护进程的错误响应：冲突：无法删除050f26b6caca（必须强制） - 映像在多个存储库中被引用
`Error response from daemon: conflict: unable to delete 050f26b6caca (must be forced) - image is referenced in multiple repositories`
![bd680a1d48e3a75b43ee7c73ec059364.png](en-resource://database/642:1)


## 解决问题

### 先根据镜像名称(`REPOSITORY`)删除，再根据镜像ID(`IMAGE ID`)删除

命令参考：

`docker rmi REPOSITORY`

`docker rmi IMAGE ID`

![d23daacb864d047bd893d42733368742.png](en-resource://database/643:1)

# ERROR: Pool overlaps with other one on this address space

## 出现问题

配置了两个不同的`docker-compose.yml`，使用了相同的网段，导致了在运行第二个yml文件时命令行报错`目标网段已存在`，报错如下:
```bash
Creating network "v2_dev" with driver "bridge"
ERROR: Pool overlaps with other one on this address space
```

## 找到原因

因为目标网段已经存在的原因，通常这发生在将要创建的networks手动指定了subnet网段地址的时候(比如用docker-compose.yml编排容器，自定义了网段，并手动指定了各个容器的ip地址)。

## 解决问题

### 方案一：停止当前使用该网段的容器并删除，然后再次使用docker-compose.yml编排。

```bash
# 查看docker网卡
docker network ls

 # 查看docker网卡的相关详细信息  确认是自己创建的ip段 然后在删除相应的网卡
docker network inspect 【NETWORK ID】

 # 删除docker网卡
docker network rm 【NETWORK ID】
```

### 方案二：设置新的自定义subnet网段地址。

# 容器时间与宿主机时间同步
`-v /etc/localtime:/etc/localtime`