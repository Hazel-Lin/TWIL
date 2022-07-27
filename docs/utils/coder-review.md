---
title: coder-review
date: 2021-12-28 15:42:42
tags: code
---

if 判断只有一句时，可以直接写在后面

- if 判断不等于 null

```js
if (!!a) console.log(1); // 此时a不能等于null  !null => true !!null => false undefined和''也遵循该判断
```

- vue 绑定 class 可以使用对象和数组的形式 :class={"key":value}，value 的 true 或 false 可以控制 class 的类名

通常我们在添加一个新的类名时，会这样写

:class = "isTrue?'active':''"

以上写法可以写成

:class = "{'active':isTrue }"
