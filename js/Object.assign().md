# Object.assign()

> Object.assign()方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。具体说明，可以参考[这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

### 语法：

> Object.assign(target, ...sources)

### 参数

- `target`

  目标对象。

- `sources`

  任意多个源对象。

### 返回值

目标对象会被返回。



### 复制一个 object

```javascript
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### 深度拷贝问题

假如需要深度拷贝的话，仍旧需要使用别的而不是本方法。因为 `Object.assign() 拷贝的是在 source 里是`对象的属性的引用而不是对象本身。

```Javascript
function test() {
  let a = { b: {c:4} , d: { e: {f:1}} }
  let g = Object.assign({},a)
  let h = JSON.parse(JSON.stringify(a));
  console.log(g.d) // { e: { f: 1 } }
  g.d.e = 32
  console.log('g.d.e set to 32.') // g.d.e set to 32.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54
  console.log('h.d.e set to 54.') // h.d.e set to 54.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: 54 } }
}
test();
```

### 合并 objects

```javascript
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```

### 拷贝 symbol 类型的属性

```javascript
var o1 = { a: 1 };
var o2 = { [Symbol("foo")]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 }
```

### 继承属性和不可枚举属性是不能拷贝的

```javascript
var obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### 原始类型会被包装为 object

```javascript
var v1 = "abc";
var v2 = true;
var v3 = 10;
var v4 = Symbol("foo")

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### 异常会打断接下来的拷贝任务

```javascript
var target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false
}); // target 的 foo 属性是个只读属性。

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
// TypeError: "foo" is read-only
// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。
```

### 拷贝访问器（accessor）

```javascript
var obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copy = Object.assign({}, obj); 
// { foo: 1, bar: 2 }
// copy.bar的值来自obj.bar的getter函数的返回值 
console.log(copy); 

// 下面这个函数会拷贝所有自有属性的属性描述符
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // Object.assign 默认也会拷贝可枚举的Symbols
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
// { foo:1, get bar() { return 2 } }
console.log(copy);
```

## 浏览器兼容性

- Desktop

| Feature       | Chrome | Firefox (Gecko)                          | Internet Explorer | Opera | Safari | Edge  |
| ------------- | ------ | ---------------------------------------- | ----------------- | ----- | ------ | ----- |
| Basic support | 45     | [34](https://developer.mozilla.org/en-US/Firefox/Releases/34) (34) | 未实现               | 32    | 9      | (Yes) |

- Mobile

| Feature       | Android | Chrome for Android | Firefox Mobile (Gecko) | IE Mobile | Opera Mobile | Safari Mobile |
| ------------- | ------- | ------------------ | ---------------------- | --------- | ------------ | ------------- |
| Basic support | 未实现     | 45                 | 34.0 (34)              | 未实现       | 未实现          | (Yes)         |

