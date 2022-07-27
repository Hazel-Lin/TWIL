---
title: VScode 使用
date: 2020-11-09 23:18:00
tags: VScode
---

### 设置 Vue 模板

- 在用户代码片段中找到 vue.json 文件

```js
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
	// same ids are connected.
	// Example:
	 "Print to console": {
		"prefix": "vue",
		"body": [
		 "<template>",
     "  <div></div>",
     "</template>",
     "",
     "<script lang='ts'>",
     "/** @format */",
     "",
     "import { Component, Vue, Watch } from 'vue-property-decorator'",
     "",
     "@Component({name:''})",
     "",
     "export default class extends Vue{}",
     "",
     "</script>",
     "",
     "<style lang='scss' scoped>",
     "/** @format */",
     "",
     "</style>"
		],
		"description": "Log output to console"
	}
}
```

### VScode 快捷键（command => c shift => s option => o）

- c + s + f 格式化文档
- c + b 展开收起侧边栏
- c + s + n 新开一个窗口
- c + p 打开命令行全局搜索
- c + w 关闭当前文件
- c + s + d 打开 debug
- c + r 运行
- c + q 关闭整个窗口
- c + j 显示隐藏终端窗口
- c + , 打开常用设置
- o + 箭头 移动行
- s + o + 箭头 复制当前行
- s + c + k 删除当前行
- c + [ 行增加缩进
- c + o + up/down 多行同时添加内容（光标）
