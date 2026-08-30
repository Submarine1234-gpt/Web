---
author: Submarine
date: 2026-08-30
title: Linux下安装非安装包软件
icon: network-wired

---
# 起因
Linux发行版太多，我主要使用Debian系的Linux mint，不少软件偷懒根本不传.deb安装包，每次安装都很痛苦，找AI问教程太多次了，遂写下方案，一劳永逸。

# 动手
## .tar.gz文件
以Antigravity为例，这软件只有压缩包，只要解压下来，双击可执行文件就能运行了。但是每次都把他晾在Download文件夹有点不优雅，打开他需要进好几个文件夹。
先在download文件夹中解压
```bash
tar -zxvf Antigravity\ IDE.tar.gz
z 通过gzip解压
x 解压
v 显示过程
f 指定文件名
```
接着把他们移动到/opt文件夹
```bash
sudo mv Antigravity\ IDE /opt
```
然后创建任务菜单的配置文件
```bash
sudo cat > /usr/share/applications/antigravity.desktop << 'EOF'
[Desktop Entry]
Type=Application
Name=Antigravity
Comment=Antigravity IDE
Exec="/opt/Antigravity IDE/antigravity-ide"
Terminal=true
Categories=Utility;
StartupNotify=true
EOF
```
修改运行权限还有更新菜单
```bash
sudo chmod +x /usr/share/applications/antigravity.desktop
sudo update-desktop-database /usr/share/applications/
```
接着在菜单右键软件图标，在桌面上生成快捷方式就可以了。