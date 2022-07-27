---
title: Tips of CSS
date: 2020-09-12 10:57:00
tags: CSS基础
---

## 边框样式

```js
/*
 *在写边框样式时，先确定border-color，再确定border-left-color，样式顺序不可颠倒
 */
let colorObj = {
  "border-color": this.borderColor,
  "border-left-color": this.cardColor,
  "background-color": this.backgroundColor,
};
```
