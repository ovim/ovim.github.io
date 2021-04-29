---
title: 常用命令
sidebar_label: 常用命令
description: Linux command 常用命令
---

[shell脚本定时、后台执行](https://blog.csdn.net/u010189918/article/details/52879828?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase)

###  ***删除命令***
`rm [options] name...`
options:
- -i 删除前逐一询问确认;
- -f 即使原档案属性设为唯读，亦直接删除，无需逐一确认;
- -r 将目录及以下之档案亦逐一删除;

###  ***复制文件/文件夹***
`cp [options] source_file_path target_file_path`
options:
- -r：复制文件夹;

###  ***重命名/移动 文件/文件夹***
`mv [options] source_file source_file_path`移动文件
`mv [options] source_file source_file`重命名文件
`mv [options] source_file_path source_file_path`目标目录已存在，将源目录移动到目标目录；目标目录不存在则重命名
options:
- -i: 若指定目录已有同名文件，则先询问是否覆盖旧文件;
- -f: 在 mv 操作要覆盖某已有的目标文件时不给任何指示;

###  ***查看进程***

`top`与`ps`的区别
- `top`:可以持续的监视进程的信息
- `ps`:可以查看进程的瞬间信息

###  ***查看端口号的占用情况***

###  ***删除执行中的程序或工作***
kill可将指定的信息送至程序。预设的信息为SIGTERM(15)，可将指定程序终止。若仍无法终止该程序，可使用SIGKILL(9)信息尝试强制删除程序。程序或工作的编号可利用ps指令或jobs指令查看。
`kill [-s <信息名称或编号>][程序]`
或 `kill [-l <信息编号>]`
options:
- -i<信息编号> 若不加<信息编号>选项，则-i参数会列出全部的信息名称
- -s <信息名称或编号> 指定要送出的信息
- [程序] [程序]可以是程序的PID或是PGDID，也可以是工作编号

实例:
杀死进程
`kill 123456`
强制杀死进程
`kill -KILL 123456`
彻底杀死进程
`kill -9 123456`
杀死执行用户所有进程
`kill -9 $(ps -ef | grep hnlinux)` //方法一 过滤出hnlinux用户进程
`kill -u hnlinux` //方法二

###  ***查看端口占用情况***
`netstat -anp |grep 8080`
[菜鸟教程](https://www.runoob.com/linux/linux-comm-netstat.html)

###  ***将脚本后台挂起执行***
/root/start.sh 后台执行
`nohup /root/start.sh &`