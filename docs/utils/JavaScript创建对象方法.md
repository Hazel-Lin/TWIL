---
title: JavaScript创建对象方法
date: 2020-03-12 11:52:00
tag: JS基础
---

#一、字面量创建 #二、内置函数创建 #三、工厂模式创建 #四、自定义构造函数创建 #五、Object.create()（面试题）

## Objecte.create(null) 可以创建一个原型链都没有的对象

```javascript
var obj = Object.create(null);
obj.name = 1;
console.log(obj);
```
