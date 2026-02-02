---
title: 移动端适配
---

# 移动端适配

1. 在 Flutter 运行 Android 的时候，报错有可能是 java 版本太高的问题。解决方案为在 `~/.config/flutter/` 路径下 `settings` 中添加一下内容，目的是指定 jdk 为低版本。

    ```json
    "jdk-dir": "/usr/local/opt/openjdk@17"
    ```

    或者也可以在 `.vscode` 文件夹创建 `setting.json`，添加以下内容指定（好像不起作用）

    ```json
    {
      "java.home": "/usr/local/opt/openjdk@17",
      "dart.flutterSdkPath": "/Users/hoya/fvm/versions/custom_tcp_3.22"
    }
    ```

2. 如果某一端运行失败，可以考虑删除此端的代码，然后使用如下命令重新创建

    ```sh
    flutter create --platforms android .
    ```

3. 在 Android 中，底部会有一个条，想要去除可以在 `main.dart` 中添加

    ```dart
    // 全屏设置 android底部的线问题
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    SystemChrome.setSystemUIOverlayStyle(
        const SystemUiOverlayStyle(
            statusBarColor: Colors.transparent,
            systemNavigationBarColor: Colors.transparent,
        ),
    );
    ```

4. Android 打包内容修改 [参考资料](https://juejin.cn/post/7207078219215929402)
