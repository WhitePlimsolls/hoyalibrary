---
title: SSH连接手机
---

# SSH连接手机

### 一、OpenSSH 连接手机

1. 手机需要越狱，在 **cydia** 中安装 **OpenSSH** 插件

2. 通过手机 **WiFi** 查看当前手机的 **IP** 地址，需要电脑和手机在同一个局域网中（连接同一个 **WiFi**）

3. 在终端 Terminal 中连接手机

    ```sh
    # 默认密码 alpine
    # ssh root@[手机ip]
    ssh root@192.168.0.69
    ```

### 二、使用公钥登录手机

1. 进入电脑的 `.ssh` 文件夹下，如果没有公钥可以参考 [SSH公钥连接服务器](../Server/1-ssh公钥连接服务器.md)

    ```sh
    cd ~/.ssh
    ```

2. 复制秘钥到手机

    ```sh
    # 默认密码 alpine
    # ssh-copy-id root@[手机ip]
    ssh-copy-id root@192.168.0.69
    ```

### 三、使用 USB 连接

苹果有一个服务叫 usbmuxd 可以使用该服务连接手机

1. 安装 **usbmuxd** 或者 **libimobiledevice**

    ```sh
    brew install usbmuxd 
    # 或者
    brew install libimobiledevice
    ```

2. 开启端口代理

    ```sh
    iproxy 2222 22
    ```

3. 需要重新开一个终端窗口来连接手机

    ```sh
    # ssh -p [端口号] root@[手机ip]
    ssh -p 2222 root@192.168.0.69
    ```

### 四、参考资料

[iOS 越狱--OpenSSH连接(登录)手机 和 SSH公钥登录(免密登录)](https://www.jianshu.com/p/5752e22c93ad)
