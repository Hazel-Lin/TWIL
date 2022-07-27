---
title: 封装cookie方法
date: 2020-06-23 11:41:00
tag: JS基础
---

##在项目中遇到使用无痕模式后无法获取到 localStorage 存储的值，因此改用 cookie

````js
/*
    设置cookie
    name: cookie名称 String
    value: cookie值 String
    day: 过期时间几天 Number
*/
export const setCookie = (name, value, day) => {
    if (day !== 0) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    } else {
        document.cookie = name + "=" + escape(value);
    }
}

/*
    获取Cookie
    name: cookie名称  String
*/
export const getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

/*
    删除Cookie
    name: cookie名称  String
*/
export const delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
```js
````
