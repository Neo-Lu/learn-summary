# emmet 系列（2）HTML

> 创建html5页面：!

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

> a

```Html
    <a href=""></a>
```

> a:link

```html
    <a href="http://"></a>
```

> a:mail

```html
    <a href="mailto:"></a>
```

> abbr
>
> abbr:缩写标签

```html
    <abbr title=""></abbr>
```

> acr
>
> acronym:标记一个首字母缩写(HTML5已经不支持)

```html
    <acronym title="World Wide Web">WWW</acronym>
```

> base
>
> base 标签为页面上所有链接规定默认地址或默认目标

```html
<base href="" target="">
```

> basefont
>
> Basefont:规定页面上的默认字体颜色和字号（除了IE支持，其他都不支持。。。）

```Html
<basefont />
```

> br

```Html
    <br>
```

> frame

```Html
<iframe src=""></iframe>
```

> hr
>
> 被水平线分割的标题和段落（水平线，不赞成使用了）

```Html
    <hr>
```

> bdo
>
> 覆盖默认的文本方向（文字从左到右，或者从右到左）

```html
<bdo dir=""></bdo>
```

> bdo:r
>
> 从右到左排列文本

```Html
    <bdo dir="rtl"></bdo>
```

> bdo:l
>
> 从左往右排列文本

```Html
    <bdo dir="ltr"></bdo>
```

> col
>
> 为一个或多个列定义对齐方式

```html
    <col>
```

> link

```html
    <link rel="" type="" href="">
```

> link:css

```html
    <link rel="stylesheet" href="style.css">
```

> link:print

```html
    <link rel="stylesheet" href="print.css" media="print">
```

> link:favicon

```html
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

>link:touch

```html
<link rel="apple-touch-icon" href="favicon.png">
```

关于apple-touch-icon，有篇比较详尽的说明：[点击查看](http://blog.csdn.net/freshlover/article/details/9310437)

> link:rss

```html
    <link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml">
```

> Link:atom

```html
    <link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml">
```

> link:im

```html
    <link rel="import" href="component.html">
```

> meta

````html
    <meta>
````

> meta:utf

```html
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```

> meta:win

```html
    <meta http-equiv="Content-Type" content="text/html;charset=windows-1251">
```

> meta:vp

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

> meta:compat

```html
<meta http-equiv="X-UA-Compatible" content="IE=7">
```

> style

```html
<style></style>
```

> script

```html
<script></script>
```

> script:src

```html
<script src=""></script>
```

> img

```html
    <img src="" alt="">
```

> img:srcset 或者img:s

```html
<img srcset="" src="" alt="">
```

> picture

```html
<picture></picture>
```

> source或者src

```html
    <source>
```

> source:src

```html
<source src="" type="">
```

> source:srcset或src:s

```html
<source srcset="">
```

> Source:media或src:m

```
<source media="(min-width: )" srcset="">
```

>source:type或src:t

```html
<source srcset="" type="image/">
```

> source:sizes或src:z

```html
<source sizes="" srcset="">
```

> source:media:type,src:mt

```html
<source media="(min-width: )" srcset="" type="image/">
```

> source:media:sizes,src:mz

```html
<source media="(min-width: )" sizes="" srcset="">
```

> source:sizes:type,src:zt

```html
<source sizes="" srcset="" type="image/">
```

> iframe

```html
    <iframe src="" frameborder="0"></iframe>
```

> embed

```html
<embed src="">
```

> object

```html
<object width="" height="" data=""></object>
```

> param

```html
<param name="" value="">
```

> map

```html
    <map name=""></map>
```

> area	

```html
    <area shape="" coords="" href="" alt="">
```

> area:d

```html
<area shape="default" href="" alt="">
```

> area:c

```html
<area shape="circle" coords="" href="" alt="">
```

> area:r

```html
<area shape="rect" coords="" href="" alt="">
```

> area:p

```html
<area shape="poly" coords="" href="" alt="">
```

> form

```html
<form action=""></form>
```

> form:get

```html
<form action="" method="get"></form>
```

> form:post

```html
<form action="" method="post"></form>
```

> label

```html
<label for=""></label>
```

### input

> input

```html
<input type="" name="" value="">
```

> inp

```html
<input type="text">
```

> input:hidden或input:h

```html
<input type="hidden" name="">
```

> Input:text或input:t

```html
<input type="text" name="" id="">
```

> input:search

```html
<input type="search" name="" id="">
```

> input:email

```html
<input type="email" name="" id="">
```

> input:url

```html
<input type="url" name="" id="">
```

> input:password或input:p

```html
<input type="password" name="" id="">
```

> input:datetime

```html
    <input type="datetime" name="" id="">
```

> input:date

```html
<input type="date" name="" id="">
```

> input:datetime-local

```html
<input type="datetime-local" name="" id="">
```

> input:month

```html
<input type="month" name="" id="">
```

> input:week

```html
<input type="week" name="" id="">
```

> input:time

```html
<input type="time" name="" id="">
```

> input:tel

```html
<input type="tel" name="" id="">
```

> input:number

```html
<input type="number" name="" id="">
```

> input:color

```html
<input type="color" name="" id="">
```

> input:checkbox或input:c

```html
<input type="checkbox" name="" id="">
```

> input:radio或input:r

```html
<input type="radio" name="" id="">
```

> input:range

```html
<input type="range" name="" id="">
```

> input:file或input:f

```html
<input type="file" name="" id="">
```

> input:submit或input:s

```html
<input type="submit" value="">
```

> input:image或input:i

```html
<input type="image" src="" alt="">
```

> input:button或input:b

```html
<input type="button" value="">
```

> isindex

```html
<isindex>
```

> input:reset

```html
<input type="reset" value="">
```

> select

```html
<select name="" id=""></select>
```

> select:disabled,select:d

````html
<select name="" id="" disabled></select>
````

> option,opt

````Html
<option value=""></option>
````

> textarea

```Html
<textarea rows="" cols=""></textarea>
```

> marquee
>
> 走马灯效果，已经被弃用，仅部分浏览器支持，具体说明参考文档：[查看](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee)

```html
<marquee behavior="" direction=""></marquee>
```

> menu:context,menu:c

```Html
<menu type="context"></menu>
```

> menu:toolbar,menu:t

```html
<menu type="toolbar"></menu>
```

> video

```html
<video src=""></video>
```

> audio

```html
<audio src=""></audio>
```

> html:xml

```html
<html xmlns="http://www.w3.org/1999/xhtml"></html>
```

> keygen
>
> 用于表单的密钥对生成器字段。
>
> 当提交表单时，私钥存储在本地，公钥发送到服务器。
>
> html5新特性，IE和老版本safari不支持。详情查看[这里](http://www.w3school.com.cn/tags/tag_keygen.asp)

```html
<keygen name="">
```

