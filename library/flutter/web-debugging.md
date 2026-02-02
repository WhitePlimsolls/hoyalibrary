---
title: Flutter 网页端调试
---

# Flutter 网页端调试

1. 运行项目，将项目打开到网页的页面
2. 运行

    ```sh
    # 确保设备已经被识别到
    hdc list targets
    
    # 连接设备
    hdc shell
    
    # 找到相关进程
    cat /proc/net/unix | grep devtools
    # 结果如下 类似
    # 0: 00000002 0 10000 1 1 316523645 @webview_devtools_remote_49685
    
    # 退出hdc模式 
    exit
    
    # 讲刚才设备中的端口转发到开发电脑上
    hdc fport tcp:9222 localabstract:webview_devtools_remote_49685
    ```

3. 打开链接 [chrome://inspect/#devices](chrome://inspect/#devices) 查看 RemoteTarget 就可以进行调试了

[参考链接](https://zhuanlan.zhihu.com/p/2677792213)
