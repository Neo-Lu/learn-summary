# 【转】patch和put方法的区别

今天看了下项目中使用到patch，于是把patch的相关用法学习了下。找到一篇好文章转载记录下。

原文出处：[查看详情](https://segmentfault.com/q/1010000005685904)

```
PATCH方法是新引入的，是对PUT方法的补充，用来对已知资源进行局部更新
```

**问题：**
什么是局部更新？

比如我在一个restful的编辑页面，进行更新操作，用put和PATCH都能成功，可是不太理解什么叫局部。

**解答：**

`patch`方法用来更新局部资源，这句话我们该如何理解？

假设我们有一个`UserInfo`，里面有`userId`， `userName`， `userGender`等10个字段。可你的编辑功能因为需求，在某个特别的页面里只能修改`userName`，这时候的更新怎么做？

人们通常(为徒省事)把一个包含了修改后`userName`的完整`userInfo`对象传给后端，做完整更新。但仔细想想，这种做法感觉有点二，而且真心浪费带宽(纯技术上讲，你不关心带宽那是你土豪)。

于是`patch`诞生，只传一个`userName`到指定资源去，表示该请求是一个局部更新，后端仅更新接收到的字段。

而`put`虽然也是更新资源，但要求前端提供的一定是一个完整的资源对象，理论上说，如果你用了`put`，但却没有提供完整的`UserInfo`，那么缺了的那些字段应该被清空

补充:

最后再补充一句，`restful`只是标准，标准的意思是如果在大家都依此行事的话，沟通成本会很低，开发效率就高。但并非强制(也没人强制得了)，所以你说在你的程序里把方法名从`put`改成`patch`没有任何影响，那是自然，因为你的后端程序并没有按照标准对两个方法做不同处理，她的表现自然是一样的



**补充：**

补充一下，PATCH 与 PUT 属性上的一个重要区别还在于：PUT 是幂等的，而 PATCH 不是幂等的。幂等是一个数学和计算机学概念，在计算机范畴内表示一个操作执行任意次对系统的影响跟一次是相同。

在HTTP/1.1规范中幂等性的定义是:

> Methods can also have the property of "idempotence" in that (aside from error or expiration issues) the side-effects of N > 0 identical requests is the same as for a single request.

如：POST 方法不是幂等的，若反复执行多次对应的每一次都会创建一个新资源。如果请求超时，则需要回答这一问题：资源是否已经在服务端创建了？能否再重试一次或检查资源列表？而对于幂等方法不存在这一个问题，我们可以放心地多次请求。

参考文献：

1. [理解 HTTP 幂等性](http://www.cnblogs.com/weidagang2046/archive/2011/06/04/idempotence.html)
2. [Restful 手册](http://sofish.github.io/restcookbook/http%20methods/idempotency)