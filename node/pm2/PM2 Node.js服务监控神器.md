# PM2 Node.js服务监控神器

pm2 是一个高性能，并带有负载均衡Node应用的进程管理器。

当你要把你的独立代码利用全部的服务器上的所有CPU，并保证进程永远都活着，0秒的重载， PM2是完美的。它非常适合IaaS结构，但不要把它用于PaaS方案（随后将开发Paas的解决方案）。

#### 备注：

SaaS、PaaS和IaaS是云服务模式。
        SaaS 软件即服务，例如Google的 Gmail 邮箱服务.面向应用型用户.
        PaaS 平台即服务.例如Google的GAE,面向开发型用户
        IaaS  基础架构即服务,例如亚马逊的AWS，IaaS对于不知道新推出的应用程序/网站会有多成功的创业公司来说非常有用
      请参考 [云服务模式：SaaS、PaaS和IaaS，哪一种适合你？](http://cloud.51cto.com/art/201107/278903.htm)

### 主要特性：

内建负载均衡（使用Node cluster 集群模块）
后台运行
0秒停机重载，我理解大概意思是维护升级的时候不需要停机.
具有Ubuntu和CentOS 的启动脚本
停止不稳定的进程（避免无限循环）
控制台检测
提供 HTTP API
远程控制和实时的接口API ( Nodejs 模块,允许和PM2进程管理器交互 )

测试过Nodejs v0.11 v0.10 v0.8版本，兼容CoffeeScript,基于Linux 和MacOS.

### 安装

```powershell
npm install -g pm2
```

### 常用命令

| 命令              | 说明                                       |
| --------------- | ---------------------------------------- |
| pm2 list        | 显示所有进程状态                                 |
| pm2 monit       | 监视所有进程                                   |
| pm2 logs        | 显示所有进程日志                                 |
| pm2 stop all    | 停止所有进程                                   |
| pm2 restart all | 重启所有进程                                   |
| pm2 reload all  | 0秒停机重载进程 (用于 NETWORKED 进程)               |
| pm2 stop 0      | 停止指定的进程                                  |
| pm2 restart 0   | 重启指定的进程                                  |
| pm2 startup     | 产生 init 脚本 保持进程活着                        |
| pm2 delete 0    | 杀死指定的进程                                  |
| pm2 delete all  | 杀死全部进程                                   |
| pm2 web         | 运行健壮的 computer API endpoint ([http://localhost:9615](http://localhost:9615/)) |
| pm2 flush       | 刷新日志                                     |



> 延迟配置

```powershell
pm2 start app.js --kill-timeout 3000
```



```powershell
$ pm2 deploy <configuration_file> <environment> <command>

  Commands:
    setup                run remote setup commands
    update               update deploy to the latest release
    revert [n]           revert to [n]th last deployment or 1
    curr[ent]            output current release commit
    prev[ious]           output previous release commit
    exec|run <cmd>       execute the given <cmd>
    list                 list previous deploy commits
    [ref]                deploy to [ref], the "ref" setting, or latest tag
```



后台项目需要操作的命令：

```powershell
pm2 delete all
git pull
pm2 deploy ecosystem.json prod
pm2 restart all
pm2 list
```


