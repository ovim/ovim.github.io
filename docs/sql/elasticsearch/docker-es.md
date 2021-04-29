---
title: Docker + ElasticSearch
sidebar_label: docker + es 
description: docker + es
---

[Dockerfile和docker-compose.yml的编写参考ovim的github](https://github.com/ovim/dockerfiles/tree/master/services/elasticsearch)

---

## 搭建常见问题

### 1、错误输出：jvm内存不够

```
# There is insufficient memory for the Java Runtime Environment to continue.
# Native memory allocation (mmap) failed to map 986513408 bytes for committing reserved memory.
```

原因：jvm内存不够
解决：
`-e ES_JAVA_OPTS="-Xms=256m -Xms=256m" `// 给es分配256M内存

### 2、错误输出：log没有写入权限

```
[0.001s][error][logging] Error opening log file 'logs/gc.log': Permission denied
[0.001s][error][logging] Initialization of output 'file=logs/gc.log' using options 'filecount=32,filesize=64m' failed.
```
原因：log没有写入权限
解决：更改文件及文件夹权限（`chmod -R 777 /yourPath/`）
