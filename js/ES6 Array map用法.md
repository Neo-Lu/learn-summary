## ES6 Array map用法

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```javascript
// 使用三个参数

const numbers = [1, 2, 3, 4, 5];

let arr = numbers.map((currentValue, index, array) => {
    console.log(`currentValue = `, currentValue);
    console.log(`index = `, index);
    console.log(`array= `, array);
    return currentValue * 2;
}, numbers);

console.log(`arr `, arr);



let numbers = [1, 5, 10, 15];
let doubles = numbers.map((x) => {
   return x * 2;
});

// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]


let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);

// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

### 语法

> ```javascript
> let array = arr.map(function callback(currentValue, index, array) { 
>     // Return element for new_array 
> }[, thisArg])
> ```

### 参数

`callback`

- `currentValue`

  `callback` 的第一个参数，数组中正在处理的当前元素。

- `index`

  `callback` 的第二个参数，数组中正在处理的当前元素的索引。

- `array`

  `callback` 的第三个参数，`map` 方法被调用的数组。

`thisArg`

可选的。执行 `callback` 函数时 使用的`this` 值。

### 返回值

一个新数组，每个元素都是回调函数的结果。

