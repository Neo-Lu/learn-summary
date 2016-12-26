# 【转】JavaScript代码优化指南

这是一篇转载自博客园的文章，文章原始出处：[查看原始链接](http://www.cnblogs.com/HCJJ/p/6218385.html)

### 1.将脚本放在页面的底部

```html
...
        <script src="./jquery.min.js"></script>
        <script src="./index.js"></script>
    </body>
</html>

```

变量声明合并

### 2.变量声明合并

> 将多条var语句合并为一条语句，建议将未赋值的变量放在最后面。
>
> 并且为了代码的美观，可以将等号对齐。

```javascript
//糟糕
var oBtn = document.getElementById('button');
var name = '';
var index;
var oLis = document.getElementsByTagName('li');
var result = [1,2,3,4];
var i;

//建议
var oLis   = document.getElementsByTagName('li'),
    oBtn   = document.getElementById('button'),
    result = [1,2,3,4],
    name   = '',
    index,
    j;
```

### 3.减少全局变量

> 减少全局变量，并不是说不定义全局变量，而是我们可以定义一个对象，来保存我们定义的全局变量。
>
> 我称这个对象为变量空间。

```javascript
//不推荐
var global = 'This is global Variant',
   config = {},
   data = [];
 
// 建议：
var varSpace = {
   global:'This is global Variant',
   config:{},
   data:[]
 };
```

### 4.字面量方式

> 声明枚举类型的变量，应该采用字面量方式。

```javascript
//糟糕的
  var object = new Object(),
      array = new Array(),
      pattrn = new RegExp();
//建议：
  var object = {},
      array = [],
      pattrn = //;
```

##### 5.缓存DOM

> DOM遍历是非常昂贵的，所以要尽量将会重用的DOM保存起来。

```javascript
// 糟糕
var height = document.getElementById('box').offsetHeight;
document.getElementById('box').style.background="#f00";
 
// 建议
var oBox = document.getElementById('box'),
    height = oBox.offsetHeight;
oBox.style.background="#f00";
```

### 6.使用缓存的父元素来查询子元素

> 正如前面我们所说的DOM的操作与获取是非常昂贵的，所以对于获取一个DOM元素，首先我们应该检查它有没有已经被缓存了的父元素。如果存在的话，可以直接在父元素的基础上向内去查找。

```javascript
// 糟糕的
    var oBox = document.getElementById('box'),
        oLis = document.getElementsByTagName('li');
 
// 建议
    var oBox = document.getElementById('box'),
        oLis = oBox.getElementsByTagName('li');
```

### 7.条件分支优化

#### 	7.1 选择接近

> ​ 将条件分支，按可能性的顺序从高到低排列，可以减少JavaScript解释器对条件语句的探测次数。

​	例如预计一个数在0~99的范围概率是50%，预计100-199的范围时15%在200-300的范围时30%，最后小于0的概率是5%。

​	使用分支语句则可以这样组织代码：

```javascript
if(num>=0 && num<100){
    //...
}else if(num >=200 && num <= 300){
    //...
}else if(num >=100 && num < 200){
    //...
}else{
    // 小于0
}
```

​	实际上，还可以进一步优化：

```javascript
if(num >=0){
    if(num < 100){
        //...
    }else if(num >= 200 && num <=300){
        //...
    }else if(num >=100 && num < 200){
        //...
    }
}else{
    // 小于0
}
```

#### 	7.2缩短检测条件

> 对检测的条件进行优化

```javascript
//字符串为空或非空

//不推荐：
    if (name === '') {
        // ......
    }
    if (name !== '') {
        // ......
    }
    
//推荐：
    if (!name) {
        // ......
    }
    if (name) {
        // ......
    }

//数组非空

//不推荐：
    if (collection.length > 0) {
        // ......
    }
//推荐：
    if (collection.length) {
        // ......
    }

//布尔不成立

//不推荐：
    if (notTrue === false) {
        // ......
    }
//推荐：
    if (!notTrue) {
        // ......
    }

//null 或 undefined

//不推荐：
    if (noValue === null || typeof noValue === 'undefined') {
      // ......
    }
//推荐：
    if (noValue == null) {
      // ......
    }
```

#### 7.3 三目运算符

> 使用三目运算符可以代替简单的双分支结构。

例如：

```javascript
if(a > b){
    num = a
}else{
    num = b
}
```

用三目运算符：  `num = a > b ? a : b; `

这里我推荐简单的条件判断，也就是在条件的语句组中，语句并不多，例如下面这种情况，我就不建议使用三目运算符。

```javascript
if(a > b){
    num = a;
    array.push(num);
    string = array.join('');
    ...
}
```

#### 7.4 当分支数量大于等于3时，采用switch语句

> 测试表明，当分支数量大于3时，switch的分支执行效率要高与if分支。在IE中尤为明显，其性能可以提升50%左右。

```javascript
// 糟糕 ...
if(num == a){
 
}else if(num == b){
 
}else if(num == c){
 
}else{
     
}
 
// 推荐：
switch(num){
        case a:
            ...
            break;
        case b:
            ...
            break;
        case c:
            ...
            break;
        default:
            ....
 }
```

### 8.循环优化

#### 8.1 不在循环中声明变量。

> 在循环中去声明变量或者是定义函数，会严重的消耗性能。

```javascript
//糟糕：
    for(var i=0,l=data.length;i<l;i++){
        if(data[i] > 10){
            var value = data[i]
        }
    }
 
//建议：
    var value ;
    for(var i=0,i<data.length;i++){
        if(data[i] > 10){
            value = data[i]
        }
    }
```

#### 8.2 优化循环终止条件

> 由于每次循环过程都会去计算终止条件，所以可以用一个变量来保存这个终止条件，减少重复性的计算，提高执行速度。

```javascript
//糟糕的：
    for(var i=0;i<data.length;i++){//...}
 
//建议：
    for(var i=0,l=data.length;i<l;i++){//...}
```

#### 8.3 优化循环体

> 循环体是执行最多的，所以要确保其最大程度的优化。

#### 8.4 for in 循环的优势

> for in 循环对比于普通的循环，它更加适合遍历对象，这是因为for in 循环不仅可以返回对象的value值，还可以返回对象之前的key.

实例：

```javascript
for( key in Object){
    if(Object.hasOwnProperty(key)){
        //...
    }
}
// 注： 参考《JavaScript 语言精粹》
```

### 9.巧用 || 和&& 布尔运算符

* 短路求值

```javascript
//糟糕的：
    if(!fn){
        callback = function(){}
    }else{
        callback = fn;
    }
//建议：
    callback = fn || function(){};
```

* 短路检测执行

```javascript
//糟糕的：
    if(name){
        welcome();
    }
//建议：
    name && welcome();
```

### 10.字符串优化

* 定界符

> 统一使用单引号（'），不适用双引号（“）。这在创建HTML字符串非常有好处：

实例：

```javascript
var msg = 'This is some HTML <div class="makes-sense"></div>';
```

* 字符串拼接

> 对于大量的字符串拼接的情况下，不建议使用+=进行拼接，而是建议先定义一个数组，然后不断的push,最后再使用join('')进行字符串的拼接

* 换一种角度来看待字符拼接

> 当你遍历一个数组或对象时，不要总想着使用for语句，要有创造性，总能找到最好的办法，例如向下面这样。

```javascript
var arry = ['item1','item2','item3','item4'],
    string = '<ul><li>'+ arry.join('</li><li>')+'</li></ul>';
```

* String的隐式转换

> 当有调用String对象的方法或属性时，JavaScript会进行一个隐式装箱操作，将字符串先转换成一个String对象。再去调用对应的方法。

例如：

`'hellow'.length`  实际上进行了  `new String('hellow')`  ->  `newString('hellow').length` 
所以，对于会用到String对象的方法或属性的字符串，我推荐通过 `new String()` 的方式来声明定义。

### 11.数组相关

* 获取数组最后一个元素

  ```javascript
  var array = [1,2,3],
  lastValue = array[array.length-1];
  lastValue = array.slice(-1);
  ```

* 数组截断

  ```javascript
  var array = [1,2,3];
  array.length = 0;
  ```

* 数组赛值

  > 对于按顺序增加数组元素，可以在循环中通过push依次添加。

  实例：

  ```javascript
  var array = [];
  for(var i=0,l=data.length;i<l;i++){
      // 糟糕
      array[i] = i;
      // 推荐
      array.push(i);
  }
  ```

### 12.函数相关

​	**12.1 作用域提升**

> 在JavaScrpit中变量和方法定义会自动提升到执行之前。JavaScript只有function级的定义域，而无其他许多编程语言中的块定义域，所以使得你在某一个function内的某语句和循环体中定义了一个变量，此变量可作用于整个function内，而不仅仅是在此语句或循环体中，因为他们的声明被JavaScript自动提升了。

原function

```javascript
myname = "global";
function sample() {
   alert(myname);   // "undefined"
   var myname = "local";
   alert(myname);   // "local"
}
sample()
```

被js提升后

```javascript
myname = "global";
function sample() {
   var myname;        //没有赋值
   alert(myname);    // "undefined"
   myname = "local";//此处赋值
   alert(myname); // "local"
}
sample();
```

　　　　***** 需要注意的是，虽然作用域内的变量被自动提升到最前进行声明，但是变量赋值的依然是代码中的位置。
　　 　　 正如你所看到的这段令人充满困惑与误解的代码导致了出人意料的结果。只有良好的声明习惯，也就是下一章节我们要提到的声明规则，才能尽可能的避免这类错误风险。

　　　　  声明提前
　　　　  为避免上述的变量和方法定义被自动提升造成误解，把风险降到最低，我们应该手动地显示地去声明变量与方法。也就是说，所有的变量以及方法，应当定义在 function 内的首行。

```javascript
// 不推荐
function sample() {
   var first = 0;
   var last = 1;
   if(last > first){
        var sum = first + last;
   }
   var count = sum;
}
 
// 推荐
function sample() {
   var first = 0,
       last = 1,
       sum = 0,
       count = 0;
 
   if(last > first){
        sum = first + last;
   }
    count = sum;
}
```

​	**12.2 函数的声明**

　　　　JS会自动将函数的声明上调到函数的执行之前。
　　　　切勿在语句块内声明函数，在 ECMAScript 5 的严格模式下，这是不合法的。函数声明应该在定义域的顶层。但在语句块内可将函数申明转化为函数表达式赋值给变量。

```javascript
//不推荐：
    if (x) {
      function foo() {}
    }
//推荐：
    if (x) {
      var foo = function() {};
    }
```

​	**12.3 参数设计**

函数的参数，建议控制在6个以内，应为过多的参数便会导致维护成本的提升。
对于需要多个参数的函数，建议将所有参数封装成一个对象options进行传输。

```javascript
//不推荐：
    function getData(params1,params2,params3,params4...){//...}
//建议：
    function getData(options){//...}
    getData({'prams1':'','params2':,....});
```

​	**12.4 闭包与立执行函数**

　　　　 **·** 全局命名空间污染与 IIFE　　　

总是将代码包裹成一个 IIFE(Immediately-Invoked Function Expression)，用以创建独立隔绝的定义域。这一举措可防止全局命名空间被污染。
IIFE 还可确保你的代码不会轻易被其它全局命名空间里的代码所修改（i.e. 第三方库，window 引用，被覆盖的未定义的关键字等等）。

```javascript
//不推荐
    var x = 10,
        y = 100;
    console.log(window.x + ' ' + window.y);
//推荐：
    (function(w){
      'use strict';
      var x = 10,
          y = 100;
        w.console.log((w.x === undefined) + ' ' + (w.y === undefined));
    }(window));
```

**·** IIFE（立即执行的函数表达式）

　　　　　　无论何时，想要创建一个新的封闭的定义域，那就用 IIFE。它不仅避免了干扰，也使得内存在执行完后立即释放。
　　　　　　所有脚本文件建议都从 IIFE 开始。
　　　　　　立即执行的函数表达式的执行括号应该写在外包括号内。虽然写在内还是写在外都是有效的，但写在内使得整个表达式看起来更像一个整体，因此推荐这么做。

```javascript
//不推荐
    (function(){})();
//推荐：
    (function(){}());
```

用下列写法来格式化你的 IIFE 代码：

```javascript
(function($, w, d){
    'use strict';
    $(function() {
        w.alert(d.querySelectorAll('div').length);
    });
}(jQuery, window, document));
```



　　　　**·** 严格模式　　　　　　

　　　　　　ECMAScript 5 严格模式可在整个脚本或独个方法内被激活。它对应不同的 javascript 语境会做更加严格的错误检查。严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。
　　　　　　严格模式会阻止使用在未来很可能被引入的预留关键字。
　　　　　　你应该在你的脚本中启用严格模式，最好是在独立的 IIFE 中应用它。避免在你的脚本第一行使用它而导致你的所有脚本都启动了严格模式，这有可能会引发一些第三方类库的问题。

```javascript
//不推荐：
    'use strict';
    (function(){
        // some code
    }());
//推荐：
    (function(){
        'use strict';
        // some code
    }());
```



### 13. 数据类型

　　**13.1 类型检测　**

　　　　javaScript中数据类型，可以分为 值类型、枚举类型、null、undefined。
　　　　值类型可以通过typeof进行判断
　　　　枚举类型则可以通过 instanceof
　　　　而null、undefined则可以直接通过null进行判断。
　　　　示例：
　　　　　　值类型通过typeof直接进行检测

```javascript
// string
typeof variable -->'string'
 
// number
typeof variable --> 'number'
 
// boolean
typeof variable --> 'boolean'
 
// Function
typeof variable --> 'function'
```

​	枚举类型，通过以下方法是无法进行判断的

```javascript
//null
typeof variable --> 'object'
// object
typeof variable --> 'object'
// Date
typeof variable --> 'object'
```

　　　　　　对于枚举类型就要采用instanceof进行判断

```javascript
// RegExp
variable instanceof RegExp --> true
 
// Array
variable instanceof Array  --> true
```

而 undefined 或 null 则统一采用 undefined进行判断。

```javascript
// null or undefined
 variable == null  --> true
```

　　　　更具体的关于JavaScript数据类型判断方法，可以参见我的另一篇博客：[[浅玩JavaScript的数据类型判断](http://www.cnblogs.com/HCJJ/p/6032236.html)]

　**13.2 类型判断**

　　　　总是使用 === 精确的比较操作符，避免在判断的过程中，由 JavaScript 的强制类型转换所造成的困扰。
　　　　如果你使用 === 操作符，那比较的双方必须是同一类型为前提的条件下才会有效。
　　　　在只使用 == 的情况下，JavaScript 所带来的强制类型转换使得判断结果跟踪变得复杂，下面的例子可以看出这样的结果有多怪了：

```javascript
(function(){
  'use strict';
   
  console.log('0' == 0); // true
  console.log('' == false); // true
  console.log('1' == true); // true
  console.log(null == undefined); // true
   
  var x = {
    valueOf: function() {
      return 'X';
    }
  };
   
  console.log(x == 'X');
   
}());
```

**13.3 类型转换**

　　　　**· 字符转数值**　　　　

　　　　　　PS:这里针对的是字符串类型的数值。

```javascript
//不推荐：
     Number(str);
//推荐：
    variable*1;
    varIable-1;
    +variable;
//当字符串结尾包含非数字并期望忽略时，使用parseInt
    parseInt(variable)
//示例：
    var width = '200px';
    parseInt(width, 10);
```

　　　　**· 小数转整数**

```javascript
//不推荐：
      parseInt(variable)
//推荐：
      ~~variable
//备选:
    Math.ceil();
    Math.floor();
```

　　　　**· 转换为布尔型**　　

```javascript
//不推荐：
    Boolean(variable);
//推荐：
    !variable
    !!variable
```

　　　　**· 转换为字符串**

```javascript
//不推荐：
    String(variable);
    variable.toString();
//推荐：
    num + '';
```

### 14. DOM插入的优化

+ **不在循环中插入DOM**

　　　　更改页面的DOM结构基本上都会造成浏览器对页面的重新渲染，这所造成的代价是非常庞大的，如果还在循环中去操作DOM，这就更加不能容忍。

```javascript
//糟糕的：
 for(var i=0,l=arr.length;i<l;i++){
     var oDiv = document.createElement('div');
     document.body.appendChild(oDiv);
 }
//建议：
 var doc = document.createDocumentFragment();
 for(var i=0,l=arr.length;i<l;i++){
     var oDiv = document.createElement('div');
      doc.appendChild(oDiv);
 }
 document.appendChild(doc);
```

+ **innerHTML**

　　　　利用文档碎片节点适合更改基本的DOM块，但是对于大范围的DOM更改，使用innerHTML不仅更加简便，而且相比于标准的DOM操作方法，更加的高效。

```javascript
var htmlStr = '';
for(var i=0;i<50;i++){
     htmlStr += '<div>'+i+'</div>';
}
document.body.innerHTML = htmlStr;
```

### 15. 事件代理

　　事件代理是利用了事件的冒泡特性。我们可以为一个统一的父节点绑定事件，然后去进行目标子节点的事件处理。
　　事件代理可以减少相同事件类型的绑定次数，另外可以解决在JS生成DOM时，必须在生成之后才能绑定事件的问题。最后事件代理还可以解决事件处理程序与所触发事件的DOM对象之间的循环引用问题。
　　事件代理的实现很简单：　

　　　　HTML 结构：

```html
<div id="box"><div id="son"></div>
```

​		JavaScript:

```javascript
document.getElementById('box').onclick=function(e){
    var ev = e || window.event,
        oSrc = ev.target || ev.srcElement;
 
    if(oSrc.id.indexOf('son')){
        alert('此时进行#son元素的事件处理');
    }
 
}
```

### 16. 注意NodeList

　　NodeList 是一组节点列表，它在形态上很接近数组，但并不是数组，通常我们称之为伪数组。
　　NodeList 的获取主要是通过以下的方法与属性。
　　　　· document.getElementsByTagName('')
　　　　· 访问了HTML-DOM的快捷集合属性

　　　　　　· document.images
　　　　　　· document.forms
　　　　　　· document.links

　　　　· 获取了DOM的 childNodes 属性
　　　　· 获取了DOM的 attributes 属性
　　了解了NodeList,我们还需要知道的是该怎么最小化去访问NodeList次数以便于改进脚本的执行性能：
　　这里可以参考循环的优化方式，比如循环的终止条件：

````javascript
for(var i=0,l=document.forms.length;i<l;i++){
           //....
 }
````

### 17. 检查对象是否具有指定的属性与方法

　　当你需要检测一些属性是否存在，避免运行未定义的函数或属性时，这个小技巧就显得很有用。
　　如果打算定制一些跨兼容的浏览器代码，你也可能会用到这个小技巧。
　　例如，你想使用document.querySelector() 来选择一个id，并且让它能兼容IE6浏览器，但是在IE6浏览器中这个函数是不存在的，那么使用这个操作符来检测这个函数是否存在就显得非常有用，如下面的示例：

```javascript
if('querySelector' in document){
    document.querySelector('#id');
}else{
    document.getElementById("id");
}
```

### 18. 松散耦合

　　我们强烈推荐前端的三层分离，结构层（HTML）、表现层（CSS）、行为层（JavaScript），但有时在工作中，我们又不能避免在我们的脚本中还附加了一些HTML或CSS代码。既然这个问题目前解决不了，那么我们就要想到以目前的方法，怎么进行最大的优化。

+ **HTML && JavaScript**

　　　　当脚本中含有HTML代码时，以下方法可以根据自己的使用场合进行择优选择：　

　　　　  · createElement ： 适合数量最少的DOM创建
　　　　  · 文档碎片          ： 适合成块的DOM更改。
　　　　  · innerHTML      ： 适合批量的DOM插入。

+ **CSS && JavaScript**

　　　　 当脚本中含有CSS代码时，以下方法可以根据自己的使用场合进行择优选择：  

　　　　　· style : 适合为DOM添加样式不多的情况下。
　　　　   · cssText ：适合为少量的DOM插入批量的样式。
　　　　   · className ：通过为DOM添加类名，而类名对应的具体样式内容，则存在一个CSS文件中，这是我更加推荐的。
　　　　　· <style> ： 如果你需要插入为很多的DOM插入批量的样式内容，那么通过JavaScript 创建一个 <style>标签，也不失是一个解决方案。

 

### 19. 异常处理

```javascript
try{
        // 尝试运行
 
}catch(msg){
 
    throw "Error name:" + msg.name; // throw会在控制台抛出异常信息，注意：throw会阻塞程序执行。建议使用console.log
    throw "Error message:" + msg.message 
 
    /*  Error.Name 的常见错误信息：
 
        1. EvalError：eval_r()的使用与定义不一致
        2. RangeError：数值越界
        3. ReferenceError：非法或不能识别的引用数值
        4. SyntaxError：发生语法解析错误
        5. TypeError：操作数类型错误
        6. URIError：URI处理函数使用不当
 
    */
 
}finally{
    // finally 最终不论是运行成功还是没有运行成功都会执行。
}
```







