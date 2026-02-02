---
title: MySQL 安装及配置
---

# MySQL 安装及配置

1. 下载 MySQL Yum Repository 包

    ```sh
    # CenterOS 8
    wget https://dev.mysql.com/get/mysql80-community-release-el8-3.noarch.rpm

    # CenterOS 9
    wget https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm
    ```

2. 安装 MySQL Yum Repository 包

    ```sh
    # 根据上一步下载的包安装
    sudo rpm -Uvh mysql80-community-release-el9-1.noarch.rpm
    ```

3. 更新 Yum 包索引，并安装 MySQL 服务器

    ```sh
    # 更新yum
    sudo yum update
    # 安装MySQL
    sudo yum install mysql-server
    ```

4. 启动 MySQL 服务，并设置开机自启动

    ```sh
    # 启动服务
    sudo systemctl start mysqld
    # 设置为开机自启动
    sudo systemctl enable mysqld
    ```

5. 运行安全安装脚本，并登录 MySQL

    ```sh
    # 执行会让你设置密码
    sudo mysql_secure_installation
    
    # 使用 root 用户登录 MySQL 密码为上一步的密码
    mysql -u root -p
    ```

6. 配置远程可以登录 mysql

    ```sql
    -- 登录 mysql
    -- mysql -u root -p
    
    -- 切换 db
    use mysql;
    
    -- 查询当前所有用户 
    select Host, User from user;
    
    -- 创建一个普通权限的账号，%表示不限制登录ip
    CREATE USER 'youruser'@'%' IDENTIFIED BY 'yourpassword';
    
    -- 初始的权限是USAGE（用户连接到MySQL服务器） 给当前用户赋予ALL PRIVILEGES权限（最高权限） 
    GRANT ALL PRIVILEGES ON *.* TO 'youruser'@'%' WITH GRANT OPTION;
                
    -- 刷新权限 使更改生效
    FLUSH PRIVILEGES;
    ```

### 可能遇到的问题

**一、在完成 `sudo mysql_secure_installation` 的配置后，如果你希望从远程机器登录 MySQL 服务器，你需要进行以下配置步骤**

* 修改 MySQL 配置文件，通常是 `/etc/my.cnf` 或 `/etc/mysql/mysql.conf.d/mysqld.cnf`。你需要检查并确保 `bind-address` 设置为 `0.0.0.0`，这表示 MySQL 将监听所有网络接口

    ```ini
    [mysqld]
    bind-address = 0.0.0.0
    ```

* 配置防火墙端口 3306

    ```sh
    sudo firewall-cmd --permanent --zone=public --add-port=3306/tcp
    sudo firewall-cmd --reload
    ```

* 重启 MySQL 服务器

    ```sh
    sudo systemctl restart mysqld
    ```

**二、忘记 root 密码或者因为某些原因无法使用 root 账号正常登录（密码复杂度等可能导致的无法登录问题）需要重置密码的情况**

* 停止 MySQL 服务

    ```sh
    sudo systemctl stop mysqld
    ```

* 启动 MySQL 到安全模式，安全模式就可以使用 root 无需密码登录 MySQL

    ```sh
    sudo mysqld_safe --skip-grant-tables &
    ```

* 如果上一步报错无法使用 `mysqld_safe` 命令可以换一种进入安全模式的方式，修改 MySQL 配置文件，通常是 `/etc/my.cnf` 或 `/etc/mysql/mysql.conf.d/mysqld.cnf`，添加 `skip-grant-tables`。重置完记得删除该配置

    ```ini
    [mysqld]
    skip-grant-tables
    ```

* 重启 MySQL 之后就可以不需要密码登录，然后重置密码，重置完还需要重启一下 MySQL 服务器

    ```sh
    # 启动 MySQL
    sudo systemctl start mysqld
    
    # 登录
    # mysql -u root
    ```

    在 mysql shell 中执行：

    ```sql
    FLUSH PRIVILEGES;
    ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';
    ```

    ```sh
    # 重启
    sudo systemctl restart mysqld
    ```
