---
title: js实现上传前图片压缩功能
date: 2020-08-20 11:26:00
tags: JS
---

# 项目需求，需要压缩图片，网上看到一篇类似需求，压缩效果很不错, 直接上代码

```javascript
    // 更小的压缩图片
    lessCompress(img, Orientation) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      //瓦片canvas
      let tCanvas = document.createElement("canvas");
      let tctx = tCanvas.getContext("2d");
      let initSize = img.src.length;
      let width = img.width;
      let height = img.height;
      //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio;
      if ((ratio = (width * height) / 4000000) > 1) {
        console.log("大于400万像素");
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      canvas.width = width;
      canvas.height = height;
      // 		铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //如果图片像素大于100万则使用瓦片绘制
      let count;
      if ((count = (width * height) / 1000000) > 1) {
        console.log("超过100W像素");
        count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
        //            计算每块瓦片的宽和高
        let nw = ~~(width / count);
        let nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(
              img,
              i * nw * ratio,
              j * nh * ratio,
              nw * ratio,
              nh * ratio,
              0,
              0,
              nw,
              nh
            );
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      //修复ios上传图片的时候 被旋转的问题
      if (Orientation != "" && Orientation != 1) {
        switch (Orientation) {
          case 6: //需要顺时针（向左）90度旋转
            this.rotateImg(img, "left", canvas);
            break;
          case 8: //需要逆时针（向右）90度旋转
            this.rotateImg(img, "right", canvas);
            break;
          case 3: //需要180度旋转
            this.rotateImg(img, "right", canvas); //转两次
            this.rotateImg(img, "right", canvas);
            break;
        }
      }
      // 进行最小压缩
      // 第二个参数0.1-1 0.1是最小很影响图片清晰度
      let ndata = canvas.toDataURL("image/jpeg", 0.5);

      console.log("压缩前：" + initSize);
      console.log("压缩后：" + ndata.length);
      console.log("ndata:" + ndata);

      console.log(
        "压缩率：" + ~~((100 * (initSize - ndata.length)) / initSize) + "%"
      );
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

      return ndata;
    },
```

# 使用方法:

```js
    fimgclick(e) {
      //获取文件
      let self = this;
      let resultFile = e.target.files[0];
      if (resultFile) {
        let reader = new FileReader();
        let data = "";
        reader.readAsDataURL(resultFile);
        // 读取成功后的回调
        reader.onloadend = function () {
          let urlData = this.result;
          let img = new Image();
          img.src = urlData;
          img.onload = function () {
            //  此处调用 lessCompress 方法 传入 img 对象
            self.imgData = self.lessCompress(img);
            data = self
              .lessCompress(img)
              .replace("data:image/jpeg;base64,", "");
            let form_data = new FormData();
            form_data.append("file", data);
            // 请求服务器上传图片逻辑
                ...
          }
        }
      }
    }
```

文章转自 [瓜小胖的一生][1]

[1]: https://blog.csdn.net/KingCherry/article/details/93069039
