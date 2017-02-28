# 公司react项目开发流程

### 1.服务接口封装

在目录services里，按照功能目录，在相应目录下创建相应的js,并写下相应的方法

代码如下：

```javascript
import { request } from '../../utils'
/**
 * 所有
 * @returns {Promise.<*>}
 */
export async function list () {
  return request('role/list', {
    method: 'get'
  });
}
```

### 2.调用服务接口数据封装

在models目录里，按照功能目录，在相应目录下创建相应的js，并写下相应的js代码。

代码如下：

```javascript
import { request } from '../../utils'
/**
 * 所有
 * @returns {Promise.<*>}
 */
export async function list () {
  return request('role/list', {
    method: 'get'
  });
}
```





