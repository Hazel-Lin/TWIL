---
title: VScode 单双引号 分号设置
date: 2021-09-10 10:15:00
tags: VScode
---

### 背景

开发过程中 因为格式化的方式不同导致代码提交后出现大量格式冲突 无法准确判断具体冲突位置。

### 解决

尝试过删除 prettier 插件及在 prettierrc.js 文件中配置相同等多个办法，最后在 Vscode 文件夹中的 setting 文件加入以下·代码解决。

```js

    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            // Prettier option here
            "semi": false,
            "singleQuote": true
        }
    },

```
