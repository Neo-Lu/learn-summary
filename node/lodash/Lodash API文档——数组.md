# Lodash API文档——数组

### chunk

> _.chunk(array,[size=1])
>
> 分割数组为两个数组

例子：

```javascript
_.chunk(['a','b','c','d'],2);
// => [['a','b'],['c','d']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

### compact

> _.compact(array)
>
> 创建一个删除所有无效值得数组。无效值包括：false,null,0,undefined,NaN

例子：

```javascript
_.compact([0,1,false,2,'',3]);
// => [1,2,3]
```

### concat

> _.concat(array,[values])
>
> 创建一个新的数组

```javascript
var array=[1];
var other=_.concat(array,2,[3],[[4]]);

console.log(other);
// => [1,2,3,[4]]

console.log(array);
// => [1]
```

### difference

> _.difference(array,[values])
>
> Creates an array of array values not included in the other given arrays using [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.

```javascript
_.difference([2,1],[2,3])
// => [1]
```

### differenceBy

> _.differenceBy(array, [values], [iteratee=_ _.identity])
>
> This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. 

```javascript
_.differenceBy([2.1,1.2],[2.3,3.4],Math.floor);
// => [1.2]

// The `_.property` iteratee shorthand.
_differenceBy([{'x':2},{'x':1}],[{'x':1}],'x')
// => [{'x':2}]
```

### differenceWith

> .differenceWith(array,[values],[comparator])
>
> This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: *(arrVal, othVal)*.

```javascript
var objects=[{'x':1,'y':2},{'x':2,'y':1}];

_.differenceWith(objects,[{'x':1,'y':2}],_.isEqual);
// => [{'x':2,'y':1}]
```

### drop

> _.drop(array,[n=1])
>
> 从哪里开始删除元素并返回新的数组

```javascript
_.drop([1,2,3]);
// => [2,3]

_.drop([1,2,3],2);
// => [3]

_.drop([1,2,3],0);
// => [1,2,3]
```

### dropRight

> _.dropRight(array,[n=1])
>
> 从右边开始删除元素并返回新的数组

```javascript
_.dropRight([1,2,3]);
// => [1,2]

_.dropRight([1,2,3],2);
// => [1]

_.dropRight([1,2,3],5);
// => []

_.dropRight([1,2,3],0);
// => [1,2,3]
```

### dropRightWhile

> _.dropRightWhile(array,[predicate=_ _.identity])



```javascript
var users=[
	{'user':'barney','active':true},
    {'user':'fred','active':false},
    {'user':'pebbles','active':false}
];

_.dropRightWhile(users,function(o){return !o.active;});
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
_.dropRightWhile(users,{'user':'pebbles','active':false});
// => objects for ['barney','fred']

// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users,['active',false]);
// => objects for ['barney']

// The `_.property` iteratee shorthand.
_.dropRightWhile(users,'active');
// => objects for ['barney','fred','pebbles']

```

### dropWhile

> _.dropWhile(array,[predicate=_ _.identity])
>
> 从左边删除，并返回一个数组对象

```javascript
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

### fill

> _.fill(array,value,[start=0],[end=array.length])
>
> 填充数组

```javascript
var array=[1,2,3];

_.fill(array,'a');
console.log(array);
// => ['a','a','a']

_.fill(Array(3),2);
// => [2,2,2]

_.fill([4,6,8,10],'*',1,3);
// => [4,'*','*',10]
```

### findIndex

> .findIndex(array,[predicate=_.identity],[fromIndex=0])
>
> 查找索引

```javascript
var users=[
  {'user':'barney','active':false,},
  {'user':'fred','active':false},
  {'user':'pebbles','active':true}
];

_.findIndex(users,function(o){return o.user=='barney';});
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users,{'user':'fred','active':false});
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```

### findLastIndex

> _.findLastIndex(array,[predicate= _.identity],[fromIndex=array.length-1])
>
> 查找索引，从后往前查

```javascript
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.findLastIndex(users,function(o){return o.user=='pebbles';});
// => 2

// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
 
// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2
 
// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0
```

### flatten

> _.flatten(array)
>
> 对数组降低维度

```javascript
_.flatten([1,[2,[3,[4]],5]]);
// =>[1,2,[3,[4]],5]
```

### flattenDeep

> _.flattenDeep(array)
>
> 递归降低维度

```javascript
_.flattenDeep([1,[2,[3,[4]],5]]);
// => [1,2,3,4,5]
```

### flattenDepth

> _.flattenDepth(array,[depth=1])
>
> 递归降低维度到指定维度

```javascript
var array=[1,[2,[3,[4]],5]];

_.flattenDepth(array,1);
// => [1,2,[3,[4]],5]

_.flattenDepth(array,2);
// => [1,2,3,[4],5]
```

### fromPairs

> _.fromPairs(pairs)
>
> The inverse of _.toPairs; this method returns an object composed from key-value pairs.

```javascript
_.fromPairs([['a',1],['b',2]]);
// => {'a':1,'b':2}
```

### head

> _.head(array)
>
> 获取数组中的第一个元素

```javascript
_.head([1,2,3]);
// => 1
_.head([]);
// => undefined
```

### indexOf

> _.indexOf(array,value,[fromIndex=0])
>
> 获取数组的索引

```javascript
_.indexOf([1,2,1,2],2);
// => 1

//从`fromIndex`开始搜索
_indexOf([1,2,1,2],2,2);
// => 3
```

### initial

> _.initial(array)
>
> 获取除最后一个元素外的所有元素的数组

```javascript
_.initial([1，2，3])；
// => [1,2]
```

### intersection

> _.intersection([arrays])
>
> Creates an array of unique values that are included in all given arrays using [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.

```javascript
_.intersection([2, 1], [2, 3]);
// => [2]
```

### intersectionBy

> _.intersectionBy([arrays],[iteratee= _.identity])
>
> This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. 

```javascript
_.intersectionBy([2.1,1.2],[2.3,3.4],Math.floor);
// => [2.1]

// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```

### intersectionWith

> _.intersectionWith([arrays],[coparator])
>
> This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: *(arrVal, othVal)*.

```javascript
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```

### join

> _.join(array,[sparator=','])
>
> 把数组的所有元素通过 指定字符拼接成一个字符串

```javascript
_.join(['a','b','c'],'~')
// => 'a~b~c'
```

### last

> _.last(array)
>
> 获取数组的最后的一个元素

```javascript
_.last([1,2,3]);
// => 3
```

### lastIndexOf

> _.lastIndexOf(array,value,[fromIndex=array.length-1])
>
> 从右边开始获取数组的索引

```javascript
_.lastIndexOf([1,2,1,2],2);
// => 3

//从指定索引处搜索
_.lastIndexOf([1,2,1,2],2,2);
//=> 1
```

### nth

> _.nth(array,[n=0])
>
> 获取数组中指定索引的元素

```javascript
var array=['a','b','c','d'];

_.nth(array,1);
// => 'b'

_.nth(array,-2);
// => 'c'
```

### pull

> _.pull(array,[values])
>
> 从数组中删除所有指定的元素，返回一个新的数组

```javascript
var array=['a','b','c','a','b','c'];

_.pull(array,'a','c');
console.log(array);

//=> ['b','b']
```

### pullAll

> _.pullAll(array,values)
>
> 这个方法和_.pull类似

```javascript
var array=['a','b','c','a','b','c'];

_.pullAll(array,['a','c']);
console.log(array);
// => ['b','b']
```

### pullAllBy

> _.pullAllBy(array,values,[iteratee= _.identity])
>
> This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: *(value)*.

```javascript
var array=[{'x':1},{'x':2},{'x':3},{'x':1}];

_.pullAllBy(array,[{'x':1},{'x':3}],'x');
console.log(array);
// => [{'x':2}]
```

### pullAllWith

> _.pullAllWith(array,values,[comparator])
>
> This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: *(arrVal, othVal)*.

```javascript
var array=[{'x':1,'y':2},{'x':3,'y':4},{'x':5,'y':6}];

_.pullAllWith(array,[{'x':3,'y':4}],_.isEqual);
console.log(array);
// => [{'x':1,'y':2},{'x':5,'y':6}]
```

### pullAt

> _.pullAt(array,[indexes])
>
> Removes elements from array corresponding to indexes and returns an array of removed elements.

```javascript
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
 
console.log(array);
// => ['a', 'c']
 
console.log(pulled);
// => ['b', 'd']
```

### remove

> _.remove(array,[predicate= _.identity])
>
> 删除符合条件的所有元素

```javascript
var array=[1,2,3,4];
var evens=_.remove(array,function(n){
  return n%2==0;
});

console.log(array);
// => [1,3]

console.log(evens);
// => [2,4]
```

### reverse

> _.reverse(array)
>
> 反转数组

```javascript
var array=[1,2,3];

_.reverse(array);
// => [3,2,1]

console.log(array);
// => [3,2,1]
```

### slice

> _.slice(array,[start=0],[end=array.length])
>
> 创建索引从哪里到哪里的新数组

### sortedIndex

> _.sortedIndex(array,value)
>
> Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.

```javascript
_.sortedIndex([30,50],40);
// => 1
```

### sortedIndexBy

> _.sortedIndexBy(array,value,[iteratee= _.identity])
>
> This method is like _.sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: *(value)*.

```javascript
var objects=[{'x':4},{'x':5}];

_.sortedIndexBy(objects,{'x':4},function(o){return o.x;});
// => 0

//The `_.property` iteratee shorthand.
_.sortedIndexBy(objects,{'x':4},'x');
// => 0
```

### sortedIndexOf

> _.sortedIndexOf(array,value)
>
> This method is like _.indexOf except that it performs a binary search on a sorted array.

```javascript
_.sortedIndexOf([4,5,5,5,6],5);
// => 1
```

### sortedLastIndex

> _.sortedLastIndex(array,value)
>
> This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.

```javascript
_.sortedLastIndex([4,5,5,5,6],5);
// => 4
```

### sortedLastIndexBy

> _.sortedLastIndexBy(array,value,[iteratee= _.identity])

```

```

