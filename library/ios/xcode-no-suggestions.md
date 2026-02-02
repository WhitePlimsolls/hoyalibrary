---
title: Xcode 不提示问题
---

# Xcode 不提示问题

### 第一种方法 (清理缓存)

1. 退出 Xcode
2. 重启电脑
3. 找到这个 `DerivedData` 文件夹并删除 (路径: `~/Library/Developer/Xcode/DerivedData`)
4. 删除这个 `com.apple.dt.Xcode` 文件 (路径: `~/Library/Caches/com.apple.dt.Xcode`)
5. 运行 Xcode 就好了

### 第二种方法 (索引设置)

如果之前关闭了代码 Index，则命令行执行以下命令打开 index:

```sh
defaults write com.apple.dt.XCode IDEIndexDisable 0
```

然后重启 xcode，看是否恢复了代码提示。

> PS: 打开代码 Index 会导致每次打开工程时，由于要索引代码，显得有点慢。如果要关闭 Index，则执行以下命令：
>
> ```sh
> defaults write com.apple.dt.XCode IDEIndexDisable 1
> ```

这种正是我的问题所在，使用完就好了，不过别关闭索引，要不还是不能提示的。

### 第三种方法 (清理索引)

如果上面的方法都解决不了问题可以试一下：

1. `cd` 进入 `~/Library/Developer/Xcode/DerivedData`
2. `ls` 一下
3. 找到你的项目所用的目录（一般以你的项目名开头）
4. `cd` 目录名
5. `rm -r Index` 删除掉你的项目所用的索引文件夹
6. 重启 xcode 验证
