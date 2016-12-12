# 【转】SwaggerUI教程API文档神器 搭配Node使用

本文是一篇转载文章，方便自己学习汇总。原文出处：[点击这里](http://www.jianshu.com/p/d6626e6bd72c)

> 在团队开发中，一个好的 API 文档可以减少很多**交流成本**，也可以使一个新人快速上手业务。

### 前言

- [swagger ui](https://github.com/swagger-api/swagger-ui)是一个API在线文档生成和测试的利器，目前发现最好用的。
- 为什么好用？[Demo 传送门](http://petstore.swagger.io/)支持API自动生成同步的在线文档这些文档可用于项目内部API审核方便测试人员了解API这些文档可作为客户产品文档的一部分进行发布支持API规范生成代码，生成的客户端和服务器端骨架代码可以加速开发和测试速度

> 总结一句话就是好用，逼格高。下面我将总结一下如何快速在本地搭建一个基于Node和Swagger UI的 API 的文档工具

### 环境搭建

- 下载Swagger UI（也可以直接下载 zip 文件）

```
git clone https://github.com/swagger-api/swagger-ui.git
```

- 安装 express
- 创建一个空文件夹**node_app**

```
mkdir node_app
```

- 初始化 node ，创建package.json文件（）

```
➜  ~ ✗ >cd node_ap
➜  ~/node_app ✗ >npm init
// 下面的看你心情填写
name: (node_app) node_app
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

- 安装 express

```
➜ ~/node_app git:(master) ✗ >npm install express --save
```

- 创建 index.js

```
➜  ~/node_app git:(master) ✗ >vim index.js
```

- 把下面代码贴如 index.js 中

```
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

- 在 node_app 中创建空目录 public

```
➜  ~/node_app git:(master) ✗ >mkdir public
➜  ~/node_app git:(master) ✗ >cd public
```

- 修改路由

  ```
  ➜  ~/node_app/public git:(master) ✗ >vim ../index.js
  //在文件第三行插入下面这句话
  app.use('/static', express.static('public'));
  ```

- 把下载好的Swagger UI 文件中dist 目录下的文件全部复制到 public 文件夹下。

  ​

  ​

  ​

  目录结构

- 开启 node

  ```
  ➜  ~/node_app git:(master) ✗ >node index.js
  ```

- 打开浏览器，输入[http://localhost:3000/static/index.html](http://localhost:3000/static/index.html)

> 到此为止，你已经把官方的 demo 在本地配置好了。当然你也可以吧这个搭建在服务器上

### 编写文档并发布

- 使用[Swagger Editor](http://editor.swagger.io/#/)编写 API 文档Swagger Editor 上的是基于 yaml 的语法，但是不用害怕，看着官方的 demo 看个10分钟就会了。

- 导出 test.json 文档

  ​

  ​

  ​

  导出方式

- 把 test.json 放到 node_app/public 目录下。

- 利用编辑器修改 `url = "http://petstore.swagger.io/v2/swagger.json";`为`url = "/static/test.json";`

- 重启 node 服务，浏览器中打开`http://localhost:3000/static/index.html`就是你自己写的 api 文档了

### 效果图



![自己写的API接口](http://upload-images.jianshu.io/upload_images/437742-92baa4445c830155.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



自己写的 API 接口

![PUT请求](http://upload-images.jianshu.io/upload_images/437742-53b4db379370461a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

PUT请求

![GET请求](http://upload-images.jianshu.io/upload_images/437742-bb4e7ae6e6a563fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

GET请求

![POST请求](http://upload-images.jianshu.io/upload_images/437742-f08de28bb61398e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

POST 请求

![DELETE请求](http://upload-images.jianshu.io/upload_images/437742-7a921345c183f095.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

DELETE 请求

文／Damonwong（简书作者）
原文链接：http://www.jianshu.com/p/d6626e6bd72c
著作权归作者所有，转载请联系作者获得授权，并标注“简书作者”。

