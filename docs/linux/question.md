---
title: 常见错误与解决方案
sidebar_label: 常见错误
description: Linux 常见错误与解决方案
---

### ***Linux本地时间和网络时间同步***

--ubuntu

1、安装ntpdate工具

`sudo apt-get install ntpdate`

2、设置系统时间与网络时间同步

`sudo ntpdate cn.pool.ntp.org`

3、将系统时间写入硬件时间

`sudo hwclock --systohc`
--centos

[参考文章](https://www.cnblogs.com/whymoney1000/p/11059803.html)

查看是否安装ntpdate，如果没有安装，运行

`yum install -t ntpdate`

同步网络时间

`ntpdate time.nist.gov`

如果上面time.nist.gov服务器同步不了，可以换下面几个时间服务器试试：

time.nist.gov
time.nuri.net
0.asia.pool.ntp.org
1.asia.pool.ntp.org
2.asia.pool.ntp.org
3.asia.pool.ntp.org

同步时间成功后调整硬件时间

`hwclock -w`