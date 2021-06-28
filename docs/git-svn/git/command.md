---
title: Git常用命令
sidebar_label: Git常用命令
description: Git常用命令
---
## 常用命令

```bash
#对Git进行基础配置
git config --global user.name "your name"
git config --global user.email "email@example.com"
# 设置文件大小写敏感
git config core.ignorecase false
set LESSCHARSET=utf-8

git init
git clone 【远端仓库地址】
git status
git commit -m '提交注释'
git pull
git push 【-f】
	-f：强制推送
git branch 【-a】
	-a：查看所有分支
git log
git whatchanged
git diff 【文件名称】

# 新建/切换/删除分支
git checkout 【-b|-d】【分支名称】
	-b：新建分支并切换到新建的分支
	-d：删除分支
	
# 丢弃文件的更改
git checkout 【文件名称】

# merge
git merge 【分支名称】 #将分支合并到当前分支

# 刷新远端分支
git fetch 【分支名称】

# 查看冲突文件
git ls-files -u  | cut -f 2 | sort -u

# 版本回退
git reset --hard 【commit-id】
git revert --hard 【commit-id】
	revert保留所有提交历史！！！

# 删除本地最后一条记录，如果需要删除最后提交的N条记录，将“1”替换为一个具体的数字“N”即可。
git reset --hard HEAD~1

# 查看远端地址
git remote -v

# 更换远端地址
git remote set-url origin 【远端地址】

```

## 常用操作

### Git 免 账号、密码 操作

命令： `vim your-project-path/.git/config` ，在文件中添加下面内容

```bash
[credential]
  helper = store
```





