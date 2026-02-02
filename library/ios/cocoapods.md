---
title: Cocoapods
---

# Cocoapods

### 1. 安装更新 Cocoapods

```sh
# 安装 
sudo gem install -n /usr/local/bin cocoapods

# 初始化仓库
pod setup

# 更新 repo 本地索引
pod repo update
```

### 2. 卸载

```sh
# 卸载
sudo gem uninstall -n /usr/local/bin cocoapods

# 查看安装过的 cocopods 相关历史 及相关依赖
gem list --local | grep cocoapods

# 逐个删除
sudo gem uninstall -n /usr/local/bin cocoapods cocoapods-core cocoapods-deintegrate cocoapods-downloader cocoapods-plugins cocoapods-search cocoapods-stats cocoapods-trunk cocoapods-try
```
