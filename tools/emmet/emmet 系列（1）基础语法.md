# emmet 系列（1）基础语法

> emmet 是一个能显著提升开发html和css开发效率的web开发者工具
>
> emmet基本上目前已知的编辑器都有相应的插件，各个编辑器的emmet插件的下载地址：[点我下载](http://emmet.io/download/)

## 子集元素:>

> nav>ul>li

```html
    <nav>
        <ul>
            <li></li>
        </ul>
    </nav>
```

## 兄弟元素:+

> div+p+bq

```html
    <div></div>
    <p></p>
    <blockquote></blockquote>
```

## 父级元素:^

> div+div>p>span+em^bq

```html
    <div></div>
    <div>
        <p><span></span><em></em></p>
        <blockquote></blockquote>
    </div>
```

## 分组:()

> div>(header>ul>li*2>a)+footer>p

```Html
    <div>
        <header>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </header>
        <footer>
            <p></p>
        </footer>
    </div>
```

> (div>dl>(dt+dd)*3)+footer>p

```html
    <div>
        <dl>
            <dt></dt>
            <dd></dd>
            <dt></dt>
            <dd></dd>
            <dt></dt>
            <dd></dd>
        </dl>
    </div>
    <footer>
        <p></p>
    </footer>
```

## 多个:*

> ul>li*5

```Html
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```

## 项目编号:$

> ul>li.item$*5

```Html
    <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
    </ul>
```

> h$[title=item$]{Header $}*3

```html
    <h1 title="item1">Header 1</h1>
    <h2 title="item2">Header 2</h2>
    <h3 title="item3">Header 3</h3>
```

> ul>li.item$@-*5

```html
    <ul>
        <li class="item5"></li>
        <li class="item4"></li>
        <li class="item3"></li>
        <li class="item2"></li>
        <li class="item1"></li>
    </ul>
```

> ul>li.item$@3*5

```Html
    <ul>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
        <li class="item6"></li>
        <li class="item7"></li>
    </ul>
```

## ID和Class属性# .

> \#header

```Html
	<div id="header"></div>
```

> .title

```html
<div class="title"></div>
```

> Form\#search.wide

```html
    <form action="" id="search" class="wide"></form>
```

> p.class1.class2.class3

```Html
   <p class="class1 class2 class3"></p>
```

## 常用属性:[]

> p[title="hello world"]

```html
   <p title="hello world"></p>
```

> td[rowspan=2 colspan=3 title]

```Html
   <td rowspan="2" colspan="3" title=""></td>
```

> [a='value1' b='value2']

```html
    <div a="value1" b="value2"></div>
```

## 文本：{}

> a{click me}

```Html
<a href="">Click me</a>
```

> p>{Click }+a{here}+{ to continue}

```html
    <p>Click<a href="">here</a> to continue</p>
```

## 默认规则

> 默认规则，当指明父标签时，符合默认规则的子标签可不必写出具体标签名

> .aaa

```Html
<div class="aaa"></div>
```

> em>.classs

```Html
    <em><span class="classs"></span></em>
```

> ul>.classs

```html
    <ul>
        <li class="classs"></li>
    </ul>
```

> table>.row>.col

```html
    <table>
        <tr class="row">
            <td class="col"></td>
        </tr>
    </table>
```





