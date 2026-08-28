---
author: Submarine
date: 2026-08-25
title: Easytier 实现内网穿透
icon: network-wired

---
[[toc]]
# 起因
萨达萨达是
# Liunx端操作方法
1.前往easytier官网下载，CLI包
2.把核心文件挂载到系统path
```bash
sudo cp easytier-core easytier-cli /usr/local/bin/
easytier-core --version
```
3.固定ip

[公共节点站](https://upt.qicwken.cn/status/easytier)
```bash
sudo easytier-core -n mynet -k mysecret -i 10.26.0.100 -p (中继节点)
```