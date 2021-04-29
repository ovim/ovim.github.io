---
title: MySQL 基本语法
sidebar_label: 基本语法
description: MySQL基本语法
---

> 下面的MySQL语法基于 MySQL5.7.26

## 连接数据库

```sql
# 连接
mysql -h 主机地址 -u 用户名 -p 用户密码
# 退出
exit
```

刚安装好的MySQL，超级用户root是没有密码的，直接回车即可进入到MySQL中

## 修改用户密码（mysqladmin）

```sql
mysql> mysqladmin
```

## 新增用户（grant on）

```sql
mysql> grant on
```

## 创建数据库（create）

```sql
mysql> create database <Database name>;
```

## 显示数据库（show databases）

```sql
show databases;
```

## 使用数据库（use）

```sql
mysql> use <Database name>;
```

## 删除数据库（drop database）

```sql
mysql> drop database <Database name>;
```

## 显示当前连接的数据库（select）

```sql
# 显示当前连接的数据库
mysql> select database();

# 显示MySQL的版本
mysql> select version();

# 显示当前时间
mysql> select now();

# 显示年月日
mysql> select DAYOFMONTH(CURRENT_DATE);
mysql> select MONTH(CURRENT_DATE);
mysql> select YEAR(CURRENT_DATE);

# 显示字符串
mysql> select "welecome to ovim's code world";

# 当计算器用
mysql> select 1+1;

# 串接字符串（关键函数 concat() ）
select CONCAT() ***;

```

## 创建数据表（create table）

```sql
CREATE TABLE <表名> (
字段名 1，数据类型 [列级别约束条件] [默认值],
字段名 2，数据类型 [列级别约束条件] [默认值],
„„
[表级别约束条件]
);
```

## 获取表结构（describe）

```sql
# 查看表结构信息
# DESCRIBE/DESC 语句可以查看表的字段信息，其中包括：字段名、字段数据类型、是否为主键、是否有默认值等
mysql> DESCRIBE <Table name>;
# 或者简写为
mysql> DESC <Table name>;

# 查看创建表的 CREATE TABLE 语句
# 使用 SHOW CREATE TABLE 语句，不仅可以查看表创建时候的详细语句，而且还可以查看存储引擎和字符编码。
# 如果不加’\G’参数，显示的结果可能非常混乱，加上参数’\G’之后，可使显示结果更加直观，易于查看。
mysql> SHOW CREATE TABLE <Table name\G>;

```

## 删除数据表（drop table）

使用 DROP TABLE 可以一次删除一个或多个没有被其他表关联的数据表

```sql
mysql> DROP TABLE [IF EXISTS]表 1, 表 2, . . . 表 n;
```

## 向表中插入数据（create）

```sql
mysql> INSERT INTO 表名称 VALUES (值 1, 值 2,....);

# 指定所要插入的数据列
mysql> INSERT INTO table_name (列 1, 列 2,...) VALUES (值 1, 值 2,....);
```

## 查询表中数据（READ）

```sql
SELECT 
 {* | <字段列表>} 
 [ 
 FROM <表 1>,<表 2>... 
 [WHERE <表达式> 
 [GROUP BY <group by definition>] 
 [HAVING <expression> [{<operator> <expression>}...]] 
 [ORDER BY <order by definition>] 
 [LIMIT [<offset>,] <row count>] 
 ]

SELECT [字段 1,字段 2,…,字段 n]
FROM [表或视图]
WHERE [查询条件];
```

> 各条子句的含义如下
```
{* | <字段列表>}包含星号通配符选字段列表，表示查询的字段，其中字段列至少包含一个字段名称，如果要查询多个字段，多个字段之间用逗号隔开，最后一个字段后不要加逗号。
FROM <表 1>,<表 2>...，表 1 和表 2 表示查询数据的来源，可以是单个或者多个。
WHERE 子句是可选项，如果选择该项，将限定查询行必须满足的查询条件。
GROUP BY <字段>，该子句告诉 MySQL 如何显示查询出来的数据，并按照指定的字段分组。
[ORDER BY <字段 >]，该子句告诉 MySQL 按什么样的顺序显示查询出来的数据，可以进行的排序有：升序(ASC)、降序（DESC）。
[LIMIT [<offset>,] <row count>]，该子句告诉 MySQL 每次显示查询出来的数据条数。
```

## 删除记录（delete）

从数据表中删除数据使用 DELETE 语句，DELETE 语句允许 WHERE 子句指定删除条件。
DELETE 语句基本语法格式如下：

```sql
mysql> DELETE FROM table_name [WHERE <condition>];
# table_name 指定要执行删除操作的表；“[WHERE <condition>]”为可选参数，指定删除条件，如果没有 WHERE 子句，DELETE 语句将删除表中的所有记录。
```

## 修改表中数据（update）

使用 UPDATE 语句更新表中的记录，可以更新特定的行或者同时更新所有的行。

**语法结构：**
```sql
UPDATE table_name 
SET column_name1 = value1,column_name2=value2,……,column_namen=valuen
WHERE (condition);
```
**语法结构解释：** column_name1,column_name2,……,column_namen 为 指 定 更 新 的 字 段 的 名 称 ； value1, value2,……valuen 为相对应的指定字段的更新值；condition 指定更新的记录需要满足的条件。更新多个列时，每个“列-值”对之间用逗号隔开，最后一列之后不需要逗号。

## 增加字段（alter add）

**语法结构：** 
```sql
ALTER TABLE <表名> ADD <新字段名> <数据类型> 
[约束条件] [FIRST | AFTER 已存在字段名];
```
**语法结构解析：**新字段名为需要添加的字段的名称；“FIRST”为可选参数，其作用是将新添加的字段设置为表的第一个字段；“AFTER”为可选参数，其作用是将新添加的字段添加到指定的“已存在字段名”的后面。

## 修改表名（rename）

通过 ALTER TABLE 语句来实现表名的修改

**语法结构：**
```sql
ALTER TABLE <旧表名> RENAME [TO] <新表名>;
# 其中 TO 为可选参数，使用与否均不影响结果。
```

## 备份数据库（mysqldump）

**语法结构：**
```sql
mysqldump –u user –h host –ppassword dbname[tbname, [tbname...]]> filename.sql
```

**语法结构解释：**user 表示用户名称；host 表示登录用户的主机名称；password 为登录密码；dbname 为需要备份的数据库名称；tbname 为 dbname 数据库中需要备份的数据表，可以指定多个需要备份的表；右箭头符号“>”告诉 mysqldump 将备份数据表的定义和数据写入备份文件；filename.sql 为备份文件的名称。

```sql
# 导出数据和表结构（常用）
mysql> mysqldump -u 用户名 -p 密码 数据库名 > filename.sql

# 只导出表结构
mysql> mysqldump -u 用户名 -p 密码 -d 数据库名 > filename.sql
```

## 还原数据库（source）

```sql
# 选择数据库
mysql> use databaseName;
# 设置数据库编码
mysql> set names utf8;
# 导入数据，执行SQL（注意sql文件的路径）
mysql> source path/**.sql
```

## 快速恢复数据库（mysqlhotcopy）

mysqlhotcopy 备份后的文件也可以用来恢复数据库，在 MySQL 服务器停止运行时，将备份的数据库文件复制到 MySQL 存放数据的位置（MySQL 的 data 文件夹），重新启动 MySQL 服务即可。如果以根用户执行该操作，必须指定数据库文件的所有者，输入语句如下：
```bash
$ chown -R mysql.mysql /var/lib/mysql/dbname
```
【例】从 mysqlhotcopy 复制的备份恢复数据库，输入语句如下: 
```bash
$ cp -R /usr/backup/test usr/local/mysql/data
```
执行完该语句，重启服务器，MySQL 将恢复到备份状态.
