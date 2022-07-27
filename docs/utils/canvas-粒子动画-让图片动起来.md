---
title: canvas-粒子动画-让图片动起来
date: 2021-10-15 18:27:00
tag: canvas
---

### 在上一篇文章中，讲述了如何让图片粒子化，紧接着就是让这些粒子 high 起来

# 让粒子飞

> #### 在图片粒子化后，我们需要考虑给粒子添加缓动函数，通过粒子运动实现粒子动画

```js
// 创建粒子实例 传入画圆需要的中心位置及半径
function Dot(centerX, centerY, r) {
  this.x = centerX;
  this.y = centerY;
  this.r = r;
  this.curFrame = 0;
  this.frameCount = Math.ceil(5000 / 16.66);
  this.sx = 1000 * Math.random();
  this.sy = 1000 * Math.random();
  // delay延迟开始运动时间
  this.delay = this.frameCount * Math.random();
  // 当前粒子已经等待了多少帧
  this.delayCount = 0;
}
```

> #### 在粒子实例中添加两个属性 curFrame 和 frameCount。curFrame 表示粒子当前所在帧数，frameCount 表示总帧数。基于 60FPS 来计算，浏览器 1s 绘制 60 帧，则 1000/60=16.66，即每毫秒绘制 16.66 帧。因此此处的 frameCount 表示 5s 内的总帧数

### 添加缓动函数

> #### 给每一个粒子添加缓动函数 根据不同的帧数 展示不同的位置，直接使用 Tween 中的缓动函数即可。

```js
/*
 * 积累一下缓动函数
 * Tween.js
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间）。
 */
function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
}
```

```js
// 绘制粒子
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var cutDotValue = null,
    frameCount = 0,
    curX,
    curY,
    dotTime = 0,
    dotDuration = 0,
    finishCount = 0; // 记录共有几个粒子走到了对应的位置

  for (let i = 0; i < dotList.length; i += 1) {
    // 获取当前粒子
    cutDotValue = dotList[i];
    // 当前粒子所在的帧数
    dotTime = cutDotValue.curFrame;
    frameCount = cutDotValue.frameCount;

    if (cutDotValue.delayCount < cutDotValue.delay) {
      cutDotValue.delayCount += 1;
      continue;
    }
    ctx.save();
    ctx.beginPath();

    if (dotTime < frameCount) {
      curX = easeInOutQuart(
        dotTime,
        cutDotValue.sx,
        cutDotValue.x - cutDotValue.sx,
        cutDotValue.frameCount
      );
      curY = easeInOutQuart(
        dotTime,
        cutDotValue.sy,
        cutDotValue.y - cutDotValue.sy,
        cutDotValue.frameCount
      );
      ctx.arc(curX, curY, cutDotValue.r, 0, 2 * Math.PI);
      cutDotValue.curFrame += 1;
    } else {
      ctx.arc(cutDotValue.x, cutDotValue.y, cutDotValue.r, 0, 2 * Math.PI);
      finishCount += 1;
    }
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.restore();

    // 绘制完最后一个粒子时 取消动画绘制 所有粒子都走到对应位置后取消动画
    if (finishCount >= dotList.length) {
      cancelAnimationFrame(requestId);
      return;
    }
  }
  requestId = requestAnimationFrame(drawParticles);
}
```

> #### 目前粒子动画后续还可以封装粒子类并且也可针对坐标、运动轨迹等参数作出调整

# 参考链接

1.https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame 2.https://www.zhangxinxu.com/wordpress/2016/12/how-use-tween-js-animation-easing/
