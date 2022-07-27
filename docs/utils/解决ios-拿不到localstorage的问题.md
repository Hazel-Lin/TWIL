---
title: 解决ios 拿不到localstorage的问题
date: 2020-06-23 11:49:00
tags: 解决方案
---

# 在写一个电商项目中遇到 iphone 无法正常获取 localStorage，经了解后，自从把 iOS 中的 WebView 换成 WKWebView 后，首次加载 h5 页面，h5 页面中的 js 就拿不到 localstorage 了。

- 页面加载完成后取 token

```js
$(document).ready(function () {
  token = localStorage.getItem("token");
});
```

- 使用 token 访问服务器接口

```js
$.ajax({
            headers: {
                Authorization: "Token " + token
            },
            type:"get",
            dataType:"json",
            data:{timestamp:Date.parse(new Date())},
            url:server_host,
            success:function(data){}
}
```

## 解决方案

- 访问服务器的时候先判断一个 token，token 为空则自动刷新一下页面，这样就相当于非首次加载 h5 了，就可以拿到 localstorage 中的 token 了
- JavaScript

```js
function get_gold_num(){
        if (token === null) {
            window.location.reload()
        }

        $.ajax({
            headers: {
                Authorization: "Token " + token
            },
            type:"get",
            dataType:"json",
            data:{timestamp:Date.parse(new Date())},
            url:server_host,
            success:function(data){}
}
```

- React

```js
componentWillMount() {
        if (token === null) {
            token = localStorage.getItem("token")
            if (token === null) {
                window.location.reload()
            }
        }
    }
```

经过研究，Android 也是一样的毛病，问题在于写 localstorage 是在而且必须是在页面加载完成后完成

- Android

```js
webView.setWebViewClient(new WebViewClient() {

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                    webView.evaluateJavascript("window.localStorage.setItem('" + key + "','" + value + "');", null);
                } else {
                    webView.loadUrl("javascript:(function({window.localStorage.setItem('" + key + "','" + value + "')})()");
                    webView.reload();
                }
                //webView.destroy();
            }
        });
```

所以导致页面中的 js 执行完了才写 localstorage，所以页面中的 js 首次加载是拿不到 localstorage 的。用本文的方法可以解决问题。

代码转自[鹅鹅鹅\_](https://www.jianshu.com/p/85b4ab2b3eb2)
