---
title: JS 获取 URL参数
date: 2020-06-03 09:31:00
tags: JS基础
---

##利用正则获取

```javascript
//获取路径？后字段
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return "";
}

//url/index.html?token=a6c66654a2a7ca8d0aa9a06c34138ae1

http: var token = GetQueryString("token");

console.log(token);
```

token = a6c66654a2a7ca8d0aa9a06c34138ae1
