---
title: Docker Compose 部署 VLESS + REALITY
---

# Docker Compose 部署 VLESS + REALITY

## 准备工作

- 确保你的服务器已安装 Docker 和 Docker Compose
- 在服务器防火墙/安全组开放 `2053` 端口 (面板) 和 `443` 端口 (节点)

## 部署

### 1. 创建目录与配置文件

在服务器上执行：

```bash
mkdir -p /root/3x-ui && cd /root/3x-ui
nano docker-compose.yml
```

### 2. 编写 `docker-compose.yml`

```yaml
services:
  x-ui:
    image: ghcr.io/m3hran/3x-ui:latest
    container_name: 3x-ui
    volumes:
      - ./db/:/etc/x-ui/
      - ./cert/:/root/cert/
    network_mode: host # 使用 host 模式性能最好，且方便管理端口
    restart: unless-stopped
    environment:
      XRAY_VMESS_AEAD_FORCED: "false"
```

### 3. 启动服务

```bash
docker compose up -d
```

## 配置 VLESS + REALITY

1. **登录面板**
   浏览器访问 `http://你的服务器IP:2053`。
   默认用户名/密码通常是 `admin`/`admin`（建议进入后立即修改）。

2. **添加节点**
   在"入站列表"中点击"添加"。

   - **备注**： 随便填，例如 `Reality`。
   - **协议**： 选择 `vless`。
   - **端口**： 填 `443`（或者其他你想用的端口）。
   - **Authentication**： 可以为空，生成的客户端数量列表其实已经相当于有了 Authentication。
   - **传输**： 选择 `tcp`。
   - **安全**： 选择 `reality`。

3. **REALITY 核心设置**

   - **uTLS**： 推荐选择 `chrome`。
   - **Dest**： 填写一个你服务器能访问且支持 TLSv1.3 的国外大站，例如 `www.microsoft.com:443` 或 `dl.google.com:443`。
   - **SNI**： 与 Dest 保持一致（如 `www.microsoft.com`）。
   - **PrivateKey (私钥)**： 点击旁边的"生成"按钮即可。
   - **Short IDs**： 如果被封禁可以考虑更换此项。

4. **Sniffing 嗅探配置**

   - 开启 `http`、`tls`、`FakeDNS`。

5. **保存并获取链接**
   点击保存后，在列表点击"二维码"或"复制链接"，即可导入到你的客户端（如 v2rayN, Shadowrocket 或 Clash Verge）。
