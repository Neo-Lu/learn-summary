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

