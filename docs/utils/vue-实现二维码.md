---
title: vue 实现二维码
date: 2021-09-17 14:18:06
tags: Vue
---

## 背景

项目中需要使用到二维码扫码跳转 app

## 实现

```js
npm install vue-qr --save

import VueQr from 'vue-qr'

new Vue({
    components: {VueQr}
})
// text 内容是要跳转的路径
  <vue-qr
    :correctLevel="3"
    :autoColor="false"
    :text="codeUrl"
    :size="95"
    :margin="0"
    :logoMargin="3" />
```
