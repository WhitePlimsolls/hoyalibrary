---
title: Mitmproxy 服务器配置
---

# Mitmproxy 服务器配置

### 1. 检查安装 pyenv

```sh
# 检查是否安装 pyenv
pyenv --version

# 安装依赖
sudo yum groupinstall -y "Development Tools"

sudo yum install -y openssl-devel bzip2-devel libffi-devel \
zlib-devel readline-devel sqlite-devel wget curl git

# 安装 pyenv
curl https://pyenv.run | bash

# 查询当前shell类型
echo $SHELL
# /bin/bash 表示您正在使用 Bash。
# /bin/zsh 表示您正在使用 Zsh。
# /bin/sh 表示您正在使用 Dash 或其他 POSIX 兼容 shell。
# /bin/fish 表示您正在使用 Fish shell。

# 编辑 ~/.bash_profile（登录式）或 ~/.bashrc（非登录式）文件 添加以下内容
# 将 pyenv 添加到 PATH
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
# 初始化 pyenv
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# 使更改生效
source ~/.bash_profile 
# 或者
source ~/.bashrc

# 检查版本
pyenv --version
```

### 2. 安装 python

```sh
# 在 linux 上有时候直接安装会报错 可以先安装依赖
# Ubuntu/Debian
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev git

# CentOS/RHEL
sudo yum install -y gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite \
sqlite-devel openssl-devel tk-devel libffi-devel git

pyenv install 3.13.0

pyenv global 3.13.0
```

[官方文档](https://docs.mitmproxy.org/stable/overview/installation/)
