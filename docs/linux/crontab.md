---
title: crontab 定时任务
sidebar_label: crontab
description: Linux command crontab 常用命令
---

[基础知识参考菜鸟教程](https://www.runoob.com/linux/linux-comm-crontab.html)

### ***这是前提条件***

检查是否安装了crontab
`rpm -qa | grep crontab`

如果没有安装好，请执行
`yum -y install vixie-cron`
`yum -y install crontabs`

启动和配置服务
`service crond start`     //启动服务
`service crond stop`      //关闭服务
`service crond restart`  //重启服务
`service crond reload`    //重新载入配置
`service crond status`    //查看crontab服务状态

设置开机自启动
`chkconfig --level 345 crond on`

crontab文件格式

| * | * | * | * | * | command |
| --- | --- | --- | --- | --- | --- |
| 分 | 时 | 日 | 月 | 周(几) | 命令 |

### ***简单使用***

目录`/root/test`
目录下的文件`test.log`,`test.sh`
`test.sh`文件内容
```
#! /bin/bash
nowtime=`date +"%Y-%m-%d %H:%M:%S"`
echo "hello cron "$nowtime
```
`test.log`文件内容
```
-----wait write------
```
命令行执行`crontab -e`后输入定时命令，参考如下
`*/1 * * * * /root/test/test.sh  >> /root/test/test.log`
等待一分钟再次查看 test.log 文件内容就会出现效果
>注意事项：
   sh 文件需要具有可执行权限 `sudo chmod +x /root/test/test.sh`
   log 文件需要具有写入权限

### ***实例（待完善）***

每一分钟执行一次脚本
`*/1 * * * * /root/test/test.sh`