---
# 1. 布局模式：必须保留，这告诉 VitePress 这是一个“首页”
layout: home

# 2. Hero 区域 (最显眼的大标题部分)
hero:
  name: "Hoya's Library"
  text: "积累技术，沉淀价值"
  tagline: "iOS 原生 / Flutter 跨平台 / 后端服务"
  # image:
  #   src: /logo.png # 如果你有logo，放在 public 文件夹下，这里写文件名
  #   alt: Logo
  actions:
    - theme: brand
      text: "快速开始"
      link: /library/ios/swift/basic
    - theme: alt
      text: "访问 GitHub"
      link: https://github.com/yourname

# 3. Features 区域 (核心分类入口)
features:
  - title: 🍎 iOS 开发
    details: Swift 语法精讲、Runtime 深入解析、UIKit 与 SwiftUI 实战笔记。
    link: /library/ios/index # 点击跳转到 iOS 目录
    icon: 📱 # 支持 emoji 或 SVG 图标

  - title: 💙 Flutter
    details: Dart 语言基础、Widget 组件库、状态管理与跨平台架构。
    link: /library/flutter/index
    icon: 🦋

  - title: 🖥️ 后端 & 运维
    details: Docker 容器化部署、Nginx 配置、Node.js 服务端开发。
    link: /library/server/index
    icon: 🛠️

  - title: 🌐 网络服务
    details: 网络服务及协议相关
    link: /library/networking/index
    icon: 🌐
---

## 其他说明

> 本站公告

- 记录一些个人技术知识
- 保持初心，坚持
