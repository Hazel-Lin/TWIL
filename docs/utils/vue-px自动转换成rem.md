---
title: vue px自动转换成rem
date: 2020-04-25 18:17:00
tags: Vue
---

```javascript
const px2rem = require("postcss-px2rem");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 75,
          }),
        ],
      },
    },
  },
};
```

**本项目会自动把 px 自动转换成 rem，不需要考虑移动端单位兼容性问题，单位直接用 px 即可，浏览器上会自动变成是 rem;若不想把 px 转换成 rem，那么直接在对应的 css 属性后面增加一个/_no_/**

**写在 vue.config.js 中即可**
