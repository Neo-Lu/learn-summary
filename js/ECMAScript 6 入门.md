# ECMAScript 6 入门

## 扩展运算符

扩展运算符（spread）是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

## name 属性

函数的`name`属性，返回该函数的函数名。

```javascript
function foo() {}
foo.name // "foo"
```

如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的`name`属性都返回这个具名函数原本的名字。

```javascript
const bar = function baz() {};

// ES5
bar.name // "baz"

// ES6
bar.name // "baz"
```

`Function`构造函数返回的函数实例，`name`属性的值为`anonymous`。

```javascript
(new Function).name // "anonymous"
```

`bind`返回的函数，`name`属性值会加上`bound`前缀。

```javascript
function foo() {};
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
```

## “函数绑定”（function bind）运算符::



## Null 传导运算符

引入了“Null 传导运算符”（null propagation operator）`?.`，简化上面的写法

```javascript
const firstName = message?.body?.user?.firstName || 'default';
```

上面代码有三个`?.`运算符，只要其中一个返回`null`或`undefined`，就不再往下运算，而是返回`undefined`。