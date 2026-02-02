---
title: Flutter 环境配置
---

# 1. Flutter 环境配置

1. [下载 Flutter SDK](https://docs.flutter.dev/release/archive)
2. 解压到指定目录
3. 配置环境变量

### 环境变量配置

```sh
# flutter 
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
        
# export PATH="$PATH:/Users/hoya/developerment/flutter/bin"
export PATH="$PATH:/Users/hoya/fvm/default/bin"
# export PATH=/Users/hoya/fvm/versions/custom_flutter_ohos/bin:$PATH
        
# flutter ohos
export FLUTTER_GIT_URL=https://gitee.com/openharmony-sig/flutter_flutter.git
# mac环境
export TOOL_HOME=/Applications/DevEco-Studio.app/Contents
# command-line-tools/sdk
export DEVECO_SDK_HOME=$TOOL_HOME/sdk
# command-line-tools/ohpm/bin
export PATH=$TOOL_HOME/tools/ohpm/bin:$PATH
# command-line-tools/hvigor/bin
export PATH=$TOOL_HOME/tools/hvigor/bin:$PATH
# command-line-tools/tool/node/bin
export PATH=$TOOL_HOME/tools/node/bin:$PATH
        
# JAVA JDK
export JAVA_HOME=/usr/local/opt/openjdk@17
export PATH="$JAVA_HOME/bin:$PATH"
# export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
# export PATH=$JAVA_HOME/bin:$PATH
        
# Android Studio
export ANDROID_HOME="/Users/hoya/Library/Android/sdk"
export PATH="$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH"
```

### 验证 flutter 配置

```sh
flutter --version
flutter doctor -v
```

### 问题及解决方案

1. 就算配置了 `JAVA_HOME`，`flutter doctor -v` 依然报错无法找到 JAVA version，需要右键单击 Android Studio 并单击显示包内容进入 `Contents`，复制 `jbr` 文件夹创建副本，改名为 `jre`。[参考链接](https://juejin.cn/post/7343138955499487266)
