# 【转】webstorm进行javascript的debug

今天才发现webstorm真是神器！

以前老是喜欢vs code，现在发现webstorm才是真方便啊！！！

原文出处：[查看原文](http://blog.csdn.net/yangyuhan156/article/details/48899439)



目前我们开发中[JavaScript](http://lib.csdn.net/base/javascript)的debug一般都是用chrome和firefox的开发者工具来进行debug，这些工具使用起来一般，操作不是很爽，不能像我们写[Java](http://lib.csdn.net/base/javase)后台一样，打个断点用IDE看那么方便， 其实webstorm支持了我们在代码上打断点，然后就可以在编辑器里debug自己的js代码，废话不说看一下怎么配置。

- 首先要安装插件，要安装的是chrome的插件，这里说一下，目前我就研究了chrome的，其他的浏览器不知道可行不。 
  下面给插件的地址： 
  [https://chrome.google.com/webstore/detail/hmhgeddbohgjknpmjagkdomcpobmllji](https://chrome.google.com/webstore/detail/hmhgeddbohgjknpmjagkdomcpobmllji) 
  如果要下载的话需要上外网才可以。。国内墙太坑了！

  看到下图JB的图标表示你安装成功了。 
  ![看到这个图标，表示你安装成功了](http://img.blog.csdn.net/20151004200204785) 
  然后需要右键点击图标，选择配置，进入配置页面，下面就到关键了。 
  ![这里写图片描述](http://img.blog.csdn.net/20151004200506569)
  注意port的input框，这个端口号是根据你的webstorm来的，这个默认我这边是63343，如果不知道的可以不配置，如果不配置到后面webstorm会提示你的。

- 这样插件就配置完了，下面就是配置webstorm了，直接上图： 
  ![这里写图片描述](http://img.blog.csdn.net/20151004201000321) 
  ![这里写图片描述](http://img.blog.csdn.net/20151004201119059)
  上面是步骤，先点击配置，然后在配置页面点击增加，然后添加javascript debug，下面给两个配置的样例。

  ![这里写图片描述](http://img.blog.csdn.net/20151004201329391)
  ![这里写图片描述](http://img.blog.csdn.net/20151004201421829)

  上面两个，一个是我本地服务的地址，这个就相当于我正常用浏览器打开我的本地服务。还有一个是karma的debug的服务地址。两个区别是Remote URL的配置，我猜测，这个Remote URL 如果不配置是和你的URL是一样的。因为Karma的文件都是加了个base目录，所以这里要加上base。

  简单讲一下我对Remote URL的理解，感觉是给根目录定一个url，里面的文件，加上自己相对于根目录的地址，在浏览器中就可以找到的。

  这些配置好了，就可以直接debug了。 
  ![这里写图片描述](http://img.blog.csdn.net/20151004202129703) 
  确定是你的配置文件，然后点击按钮来debug，如果上一个插件的端口号你没有配置，运行的时候就会报错，并且把端口号告诉你。 
  ![这里写图片描述](http://img.blog.csdn.net/20151004202346596)
  就是图中这样，然后你把这个端口号配置到插件port那里就可以了

- 下面看一下运行结果。 
  ![这里写图片描述](http://img.blog.csdn.net/20151004202930871)
  ![这里写图片描述](http://img.blog.csdn.net/20151004202948665)
  打开网页的时候，看到了正在debugging的提示，断点到了自动跳转到webstorm的debug工具里，感觉棒棒的。有一点这个断点一定要在debug按钮点击之前打好，如果debug在运行了，就打不上了，这是个比较坑的地方。

