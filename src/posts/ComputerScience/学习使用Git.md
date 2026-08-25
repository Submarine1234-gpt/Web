---
author: Submarine
date : 2026-08-26
title: 学习使用Git
icon: arcticons:adb-over-wifi

---
# 前言
同步代码太麻烦了
每次切换设备都会忘记怎么操作，于是想到自己还有博客，随手记录一下自己常用的。

# 安装
第一关比较简单，直接去<herf=https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git >上找到适合自身系统的软件包就好。一路无脑下一步。
我还是最喜欢Liunx的安装方法
```bash
sudo apt install git-all
```
简单又优雅。
# 添加用户名和邮箱
Git使用的第二关
我经常用VSCode敲代码，随手一点就想上传，随后就报错，
```bash
git config --list
```
当然要先看一眼配置文件里面有啥
```bash
git config --list
git config user.name
git config user.email
```
新下载的肯定啥也没有啊
```bash
git config --globle user.name  "5700x"
git config --globle user.email "1014071041@qq.com"
```
随便写写得了，反正就我一个人。

# 使用代理
总所周知，在国内使用互联网是很麻烦的。
```bash
git config --global http.proxy http://127.0.0.1:7879
git config --global https.proxy http://127.0.0.1:7879

git config --global --unset http.proxy
git config --global --unset https.proxy
```