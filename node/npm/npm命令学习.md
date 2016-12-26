# npm命令学习

## npm install

> 安装包命令

### 用法

```powershell
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

alias: npm i
common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]
```

### 简单用法：

```powershell
npm i xxx -S
npm i xxx -D
npm i xxx -O
```

### 说明：

```powershell
-S, --save: Package will appear in your dependencies.

-D, --save-dev: Package will appear in your devDependencies.

-O, --save-optional: Package will appear in your optionalDependencies.

-E, --save-exact: Saved dependencies will be configured with an exact version rather than using npm's default semver range operator.
```

详细说明：[查看这里](https://docs.npmjs.com/cli/install)

### 升级所有全局的本地包

> npm update -g

### 查看有那些包更新

> npm -g outdated

```shell
Package    Current  Wanted  Latest  Location
appium       1.5.2   1.5.3   1.5.3
bower        1.7.0   1.7.9   1.7.9
cordova      5.4.1   6.2.0   6.2.0
eslint      2.13.0   3.0.0   3.0.0
fsevents     1.0.8  1.0.12  1.0.12
grommet      0.4.1   0.6.9   0.6.9
requirejs   2.1.22   2.2.0   2.2.0
```



## npm-check

[npm-check](https://www.npmjs.com/package/npm-check)是用来检查npm依赖包是否有更新，错误以及不在使用的，我们也可以使用npm-check进行包的更新。
安装npm-check：

```shell
npm install -g npm-check
```

检查npm包的状态:

```shell
npm-check -u -g
```

通过上下键可以移动光标，使用空格键可以选择需要处理的包，回车直接进行处理。



参考网站

https://segmentfault.com/a/1190000005857342

