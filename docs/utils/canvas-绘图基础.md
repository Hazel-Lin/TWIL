---
title: canvas-绘图基础
date: 2021-10-15 16:03:00
tags: canvas
---

# 背景

** 由于多个项目中，都应用到了 canvas，并且一直十分好奇其强大的功能。因此对 canvas 展开学习，话不多说，直接上代码。**

# canvas 绘图基础

```html
<!-- 
在模板中创建一个canvas标签
创建一个画布成功后 可以通过css样式来和在标签中设置width 和 height值调整宽高。但只有在标签中设置的宽高值才能通过canvas.width canvas.height获取
每当画布的高度或宽度被重设时，画布内容就会被清空  -->
<canvas
  id="canvas"
  width="800"
  height="800"
  style="border: 1px solid gray;"
></canvas>

<script>
  // 创建一个画布
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    //创建上下文对象
    let ctx = canvas.getContext("2d");
    // 开始绘图
  }
</script>
```

### 绘制矩形

#### 绘制矩形的方法：fillRect、strokeRect、clearRect 和 rect

参数（矩形 X 坐标，矩形 Y 坐标，width，height）
以上绘制矩形的方法中，前三者可直接绘制矩形，而后者 rect 绘制矩形时，需要调用 fill()或者 stroke()方法才可绘制矩形。因为使用 rect()绘制矩形时，是绘制了一个矩形路径必须通过填充或者描边才能够展示出来。
在所有绘制矩形过程中，如果需要绘制颜色都需要先确定颜色再调用绘制方法，默认为黑色

```js
<script>
  let canvas = document.getElementById('canvas')
  if(canvas.getContext){

  	let ctx = canvas.getContext('2d')

        // 填充矩形
        ctx.fillStyle = "rgba(0,0,230,0.4)"
        ctx.fillRect(20, 150, 50, 50)
        ctx.fillStyle = "rgba(0,0,230,0.4)"
        ctx.fillRect(50, 180, 50, 50)

        // 描边矩形
        ctx.strokeStyle = "rgba(0,0,230,0.4)"
        ctx.strokeRect(50, 180, 50, 50)

        // 用rect绘制矩形
        ctx.rect(120, 180, 100, 100)
        ctx.strokeStyle = "rgba(0,0,200,0.4)"
        ctx.stroke()

        // 当用rect同时绘制两个矩形时 需要用beginPath() 和 closePath() 重新绘制新的路径
        ctx.beginPath()
        ctx.fillStyle = "rgba(0,0,200,0.4)"
        ctx.rect(20, 10, 100, 100)
        ctx.fill()
        ctx.closePath()
  }
</script>
```

![WechatIMG157.png][1]

### 绘制圆形

```js
/* closePath 使图形形成一个闭环
context.arc(x,y,r,sAngle,eAngle,counterclockwise); 
x y 中心坐标 r 半径 开始角 结束角 顺时针/逆时针
注意区别顺逆时针的不同 */
ctx.beginPath();
ctx.arc(100, 70, 50, 0, (270 * Math.PI) / 180, false);
ctx.closePath();
ctx.stroke();
```

### 绘制渐变图形

```js
// createLinearGradient 创建线性渐变
参数（渐变开始X，渐变开始Y，渐变结束X，渐变结束Y）
var grid = ctx.createLinearGradient(0, 0, 0, 170);
grid.addColorStop(0, "black");
grid.addColorStop(0.5, "red");
grid.addColorStop(1, "white");
ctx.fillStyle = grid;
ctx.fillRect(20,20,190,180)
ctx.stroke()
```

![gradient.png][2]

### 参考链接

HTML Canvas 参考手册: https://www.w3school.com.cn/tags/html_ref_canvas.asp

[1]: http://hz.xiaoyio.com/usr/uploads/2021/10/2032825651.png
[2]: http://hz.xiaoyio.com/usr/uploads/2021/10/1848803213.png
