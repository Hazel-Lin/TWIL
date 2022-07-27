---
title: VuePress 初体验
date: 2020-06-21 16:25:00
tags: VuePress
--- 

# 前言

第一次看到文档，被样式的简介和文档的 Markdown 支持吸引，于是了解了一下 VuePress，VuePress 基于 vue，上手比较容易，而且还支持在 Markdown 里面写 Vue 语法,支持 YAML front matter。

## 开始

```sh
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 创建项目目录
mkdir vuepress-starter && cd vuepress-starter

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

新建一个 `package.json` 里加一些脚本:

```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

# 启动

```sh
yarn docs:dev
```

# 部署打包

```sh
yarn docs:build
```

# 目录结构

![](http://doc.s1mple.cn/assets/img/mulu.png)

- 每一个目录代表一个栏目里面必须要有一个 `.md` 文件 否则会报错

## 下方目录结构复制于官方文档

- `docs/.vuepress:` 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components:` 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme:` 用于存放本地主题。
- `docs/.vuepress/styles:` 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl:` 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl:` 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public:` 静态资源目录。
- `docs/.vuepress/templates:` 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html:` 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html:` 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js:` 配置文件的入口文件，也可以是 YML 或 toml。
- `docs/.vuepress/enhanceApp.js:` 客户端应用的增强。

# 首页主题配置

在 docs 目录下新建一个 `.md` 文件

```md
---
home: true //是否开启主页
heroImage: https://wx3.sinaimg.cn/mw690/72e05ae2ly1gau2xf26trj22yo1o01ky.jpg //主页图片
actionText: 面试文档 // 主页标题
actionLink: /h5/ //主页按钮点击链接
features: // 下方3个介绍
- title: 文档介绍
  details: 包含H5、CSS、JavaScript、ES6、JQuery、Webpack、Gulp、Vue、React、小程序、NodeJS 经典前段面试题
- title: 文档出处
  details: WolfCode`s Teacher
- title: 交换友链
  details: 格式：[url]--网站名称，发送邮箱 Soya@xiaoyio.com
footer: MIT Licensed | Copyright © 2020 Soya
---
```

# 整体配置

新建 `.vuepress` 目录 在该目录下新建一个 `config.js`文件 用于配置 VuePress

```js
module.exports = {
  //页面顶部title
  title: "前段面试题总结",
  //页面描述
  description: "Write By Wolfcode Teacher",
  themeConfig: {
    sidebarDepth: 2, // 侧栏显示深度，即目录打开的层次
    logo: "./assets/logo.png", // logo
    sidebar: [
      // 侧栏目录，
      {
        title: "H5+CSS3", // 标题
        children: [
          "/h5/", //对应的目录(下方必须有一个 .md 文件)
        ],
      },
      {
        title: "Node.js",
        children: ["/node/"],
      },
    ],
    // 右上方导航
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "http://xiaoyio.com" },
      { text: "Writer", link: "https://Wolfcode.cn" },
    ],
  },
};
```

# 总结

VuePress 是一个写文档的一个不错的选择，总体相当简洁，还可以用来写博客放在[GitHub](https://github.com)，自己也部署了一个[Demo](https://doc.s1mple.cn)，可以点击浏览下
