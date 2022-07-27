---
title: canvas-应用
date: 2021-10-18 14:23:00
tags: canvas
---

## 本篇文章讲述了除了基础的绘图及粒子动画外，canvas 的其他应用

# 鼠标绘制

> ### canvas 较常用的一个功能就是实现以鼠标作为画笔绘图

##### 主要通过 mousedown、mousemove、mouseup 事件，获取鼠标当前位置并绘制即可。小程序端可以采用 touchstart、touchmove、touchend 事件

```javaScript
let canvas = document.getElementById("myCanvas");
if (canvas.getContext) {
  let ctx = canvas.getContext("2d");
  let isSigning = false;

  canvas.addEventListener("mousedown", function (e) {
    let moveX = e.clientX - canvas.offsetLeft;
    let moveY = e.clientY - canvas.offsetTop;
    isSigning = true;
    ctx.beginPath();
    ctx.moveTo(moveX, moveY);
  });
  canvas.addEventListener("mousemove", function (e) {
    if (isSigning) {
      ctx.lineWidth = 5;
      ctx.strokeStyle = "red";
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
    }
  });
  canvas.addEventListener("mouseup", function () {
    isSigning = false;
  });
}
```

# 刮刮卡

> ### 基于以上签名功能的实现，就不难想到常见的刮刮卡的场景。主要思路类似于签名。实现的思路主要是通过 canvas 覆盖一层文字，并通过绘制圆形的方式，实现刮开 canvas 涂层的效果。

![WechatIMG166.png][2]

##### 关于刮刮卡的实现，还涉及到很多细节后续会进行补充

# 图片压缩

# 参考链接

1.https://juejin.cn/post/6844903952157245447 2.https://juejin.cn/user/2260251635103272/posts 3.https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL