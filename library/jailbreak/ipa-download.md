---
title: iPA 下载
---

# iPA 下载

1. 最新版 ipa 下载 [ipatool](https://github.com/majd/ipatool)

    * 安装 `ipatool`

        ```sh
        brew tap majd/repo
        brew install ipatool
        ```

    * 登录

        ```sh
        ipatool auth login [--email <email>] [--password <password>]
        ```

    * 查询

        ```sh
        ipatool search --limit 1 TestFlight
        ```

    * 下载

        ```sh
        ipatool download -b <bundle-identifier> 
        ipatool download --bundle-identifier <bundle-identifier> [--email <email>] [--password <password>] [--log-level <log-level>]
        ```

2. 下载历史版本

    [使用 Brook 下载任意 iOS App 的旧版本](https://www.txthinking.com/talks/articles/ios-old-version-app.article)

    [下载历史版本](https://github.com/NyaMisty/ipatool-py#download-old-version)
