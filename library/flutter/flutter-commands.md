---
title: Flutter 命令
---

# 1. 项目创建和管理

```sh
# 创建新的 Flutter 项目
flutter create <project_name> 

 # 创建指定包名的项目
flutter create --org com.example

 # 获取项目依赖
flutter pub get 

# 更新项目依赖到最新版本
flutter pub upgrade  

# 清理项目构建文件
flutter clean  
```

# 2. 运行和调试

```sh
# 运行项目
flutter run  

# 在指定设备上运行
flutter run -d <device-id>  

# 以发布模式运行
flutter run --release  

 # 连接到正在运行的应用程序
flutter attach 

# 以调试模式运行
flutter debug  
```

# 3. 构建相关

```sh
# 构建 Android APK
flutter build apk  

# 构建 iOS 应用
flutter build ios  

# 构建 Web 应用
flutter build web  

# 构建 Windows 应用
flutter build windows  

# 构建 macOS 应用
flutter build macos 

# 构建 Linux 应用
flutter build linux 
```

# 4. 开发工具和诊断

```sh
# 检查 Flutter 开发环境
flutter doctor  

 # 列出所有连接的设备
flutter devices 

# 列出可用的模拟器
flutter emulators  

# 启动指定模拟器
flutter emulators --launch <emulator-id>  

# 分析项目代码
flutter analyze  

# 运行单元测试
flutter test  
```

# 5. 配置管理

```sh
# 启用 Web 支持
flutter config --enable-web  

# 启用 Windows 支持
flutter config --enable-windows-desktop  

# 启用 macOS 支持
flutter config --enable-macos-desktop  

# 启用 Linux 支持
flutter config --enable-linux-desktop  
```

# 6. 版本管理

```sh
# 显示 Flutter 版本
flutter --version  

# 更新 Flutter SDK
flutter upgrade  

# 降级 Flutter SDK
flutter downgrade  

# 显示可用的 Flutter 渠道
flutter channel  

# 切换 Flutter 渠道
flutter channel <channel-name>  
```

# 7. 项目维护

```sh
# 格式化代码
flutter format  

# 显示应用日志
flutter logs  

# 截取应用截图
flutter screenshot  

# 符号化崩溃报告
flutter symbolize  
```

# 8. 包管理

```sh
# 添加依赖包
flutter pub add <package_name>  

# 移除依赖包
flutter pub remove <package_name>  

# 检查过时的依赖
flutter pub outdated  

# 显示依赖关系图
flutter pub deps  
```

# 9. IDE 相关

```sh
# 配置 IDE
flutter ide-config  

# 预下载开发工具
flutter precache  
```

# 10. 其他实用命令

```sh
# 显示帮助信息
flutter help  

# 显示特定命令的帮助信息
flutter --help <command> 

# 生成本地化文件 
flutter gen-l10n  

# 创建插件项目
flutter create --template=plugin  

# 创建包项目
flutter create --template=package  
```

[命令行官方文档](https://docs.flutter.cn/reference/flutter-cli)

---

# QA

1. **Q: 关于 ohos 提交审核被拒原因 crash，无法启动问题。**

    A: 该问题是因为直接使用 Dececo Studio build app 导致，希望可以在 vs code 中使用命令行导出包 `flutter build app --release`；

    如果使用 FVM 设置 global 为官方 flutter 版本，而项目用鸿蒙版本的话。其他命令参考 `fvm flutter build app --flavor=default --release --obfuscate --split-debug-info=symbols/ios --target-platform=ohos-arm64`

2. **Q: 下一个问题**
