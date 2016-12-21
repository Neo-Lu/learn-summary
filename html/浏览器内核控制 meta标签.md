# 浏览器内核控制 meta标签

国内的浏览器普遍是用的双核浏览器。但是页面一般在IE下呈现效果较弱，国内的360出了一个解决方案。具体[查看详情](http://se.360.cn/v6/help/meta.html)



### 代码示例

在head标签中添加一行代码：

```html
<html>
  <head>
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
  </head>
  <body>
  </body>
</html>
```

content的取值为webkit,ie-comp,ie-stand之一，区分大小写，分别代表用webkit内核，IE兼容内核，IE标准内核。 
若页面需默认用极速核，增加标签：<meta name="renderer" content="webkit"> 
若页面需默认用ie兼容内核，增加标签：<meta name="renderer" content="ie-comp"> 
若页面需默认用ie标准内核，增加标签：<meta name="renderer" content="ie-stand">

### 各渲染内核的技术细节

| 内核          | Webkit    | IE兼容  | IE标准                    |
| ----------- | --------- | ----- | ----------------------- |
| 文档模式        | Chrome 21 | IE6/7 | IE9/IE10/IE11(取决于用户的IE) |
| HTML5支持     | YES       | NO    | YES                     |
| ActiveX控件支持 | NO        | YES   | YES                     |