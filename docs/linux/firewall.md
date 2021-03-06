---
title: FireWall 防火墙
sidebar_label: FireWall
description: LFireWall 防火墙
---

**环境**

> CentOS防火墙根据版本不同而不同，centos7之前使用iptables，7及其以后使用firewall

```bash
系统：CentOS 7
```

## **常用**

### **查看firewalld状态**

如果是dead状态，即防火墙未开启。

```bash
systemctl status firewalld
```

### **开启防火墙**

```bash
systemctl start firewalld
```

### **查看已开放端口**

```bash
firewall-cmd --list-ports
```

### **开放端口（端口开放完成之后需要重启firewall）**

```bash
firewall-cmd --zone=public --add-port=80/tcp --permanent
命令解释：
–zone #作用域
–add-port=80/tcp #添加端口，格式为：端口/通讯协议
–permanent #永久生效，没有此参数重启后失效
```

### **重启firewall**

```bash
firewall-cmd --reload
```

### **停止firewall**

```bash
systemctl stop firewalld.service
```

### **禁止firewall开机启动**

```bash
firewall systemctl disable firewalld.service
```

### **关闭防火墙**

```bash
systemctl stop firewalld
```


