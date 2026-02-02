---
title: Nginx 配置
---

# Nginx 配置

### 配置文件结构

```nginx
# 全局块
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    # events块
    worker_connections  1024;
}

http {
    # http块
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    # tcp_nopush     on;

    keepalive_timeout  65;

    # gzip  on;

    # 包含其他配置文件
    include /etc/nginx/conf.d/*.conf;

    # server块 (可以有多个)
    server {
        # ...
    }
}
```

### 常用配置场景

1. **反向代理**

    ```nginx
    server {
        listen       80;
        server_name  localhost;
    
        location / {
            proxy_pass http://MyServer;
            proxy_connect_timeout 10;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
    ```

    `upstream` 负载均衡配置:

    ```nginx
    upstream MyServer {
        # 轮询 (默认)
        server localhost:8080;
        server localhost:8081;
        
        # 权重策略
        # server localhost:8080 weight=2;
        # server localhost:8081 weight=1;
    }
    ```

2. **动静分离**

    ```nginx
    server {
        listen 80;
        server_name localhost;
        
        # 动态资源加载
        location ~ \.(php|jsp)$ {
            proxy_pass http://php;
            proxy_set_header Host $host:$server_port;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        
        # 静态资源加载
        location ~ .*\.(html|gif|jpg|png|bmp|swf|css|js|txt|mp4)$ {
            proxy_pass http://static;
            proxy_set_header Host $host:$server_port;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

3. **高可用服务器 Keepalived** (需要配合 keepalived 软件使用)

### 参考资料

* [Nginx开发从入门到精通](https://tengine.taobao.org/book/)
* [Nginx 入门指南](https://www.w3cschool.cn/nginx/)
