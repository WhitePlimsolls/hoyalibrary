---
title: Mitmproxy 安装指南
---

# Mitmproxy 安装指南

## 1. macOS

```sh
brew install --cask mitmproxy
```

## 2. Ubuntu/Debian

```sh
sudo apt update
sudo apt install python3-pip python3-dev libffi-dev libssl-dev
pip3 install --user mitmproxy

# 将 pip 安装路径添加到 PATH（如果需要的话）
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

**依赖包说明：**

- `libffi-dev`: Foreign Function Interface 库，用于 Python 调用 C 库
- `libssl-dev`: OpenSSL 开发文件，处理 HTTPS 加密通信
- `python3-dev`: Python 开发头文件，编译 C 扩展时需要

**`--user` 参数说明：**

- 安装到用户目录 `~/.local/` 而非系统目录
- 无需 sudo 权限，避免污染系统环境

## 3. 其他平台

请参考 [官方文档](https://docs.mitmproxy.org/stable/overview/installation/)
