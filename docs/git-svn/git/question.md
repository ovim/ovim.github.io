---
title: Git常见问题
sidebar_label: 常见问题
description: Git常见问题
---

### [忽略提交 .gitignore](https://www.cnblogs.com/yulongcode/p/10810326.html)

```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

### Git解决中文乱码问题

```bash
# git status 乱码
	解决方法：git config --global core.quotepath false
# git commit 乱码
	解决方法：git config --global i18n.commitencoding utf-8
# git status 乱码
	解决方法：git config --global i18n.logoutputencoding utf-8
```

### [解决Linux环境下每次推拉代码都需要输入密码设置](https://www.cnblogs.com/yulongcode/p/10882203.html)

```bash
cd /
git config --global credential.helper store
```

### [Mac配置全局的Git忽略文件](https://www.cnblogs.com/yulongcode/p/12333414.html)

```bash
git config --global core.excludesfile ~/.gitignore_global
# 使用vim编辑的文件即为全局的Git忽略文件，将需要全局忽略的文件输入即可
vim ~/.gitignore_global
# 配置文件参考如下
# for Mac OS X System Files
  .DS_Store
  Thumbs.db
```