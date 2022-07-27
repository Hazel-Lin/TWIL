---
title: 2020 京东 618 叠蛋糕活动 JS脚本，PC脚本非Auto.js，一键完成所有任务
date: 2020-05-30 10:47:00
tags: 小demo
---

# 2020 京东 618 叠蛋糕活动

##使用步骤

###1. 建议使用 Chrome 最新版。

###2. 浏览器的 User-Agent 必须包含 jdapp，如果是 Chrome 浏览器，可以按 F12 在开发者工具中的 Network Conditions 中进行修改。

  <img width="640" src="https://s1.ax1x.com/2020/05/28/tZEGb8.png" alt="打开 Network Conditions">

  <img width="480" src="https://s1.ax1x.com/2020/05/28/tZE8Df.png" alt="修改 UA">

###3. 之后点击 Sources 选项卡，并点击下方左边的 Snippets 选项卡（如果没有，请点击两个向右的箭头）。然后再点击 New snippet 创建一个脚本，之后把 main.js 里的内容统统粘贴进去即可。

  <img width="640" src="https://s1.ax1x.com/2020/05/27/tEozUH.png" alt="运行步骤 1">

###4. 访问 [京东移动端网页](https://m.jd.com/)，点击底部导航栏的【我的】，登录京东账号。

###5. 登录完成后，再右键点击脚本运行。如果任务全部完成，Console 会提示，所以请耐心等待。

  <img width="640" src="https://s1.ax1x.com/2020/05/27/tEoxVe.png" alt="运行步骤 2">

###6. 任务执行完成后，就可以到京东 APP 见证奇迹的时刻。

  <img width="320" src="https://s1.ax1x.com/2020/05/27/tEojbD.png" alt="运行结果">

## 注意事项

###1. 有网友提示每次调用后任务可能会不一样，建议脚本多跑一两次，一般三次就能跑完全部任务。
###2. 项目转自 Github [项目地址](https://github.com/zarkin404/sweater/blob/master/jingdong/2020_cake_baker/)

#附上代码

```javascript
var MAX_CYCLES = 3;
var currentCycle = 0;

// 主程序
var main = (executeNextCycle) => {
  var secretp = "";
  var taskList = [];

  // 恢复被覆盖的 alert 函数
  (() => {
    var frame = document.createElement("iframe");
    frame.style.display = "none";
    document.body.appendChild(frame);
    window.alert = frame.contentWindow.alert;
  })();

  // 请求函数
  var request = (functionId, body = {}) =>
    fetch("https://api.m.jd.com/client.action", {
      body: `functionId=${functionId}&body=${JSON.stringify(
        body
      )}&client=wh5&clientVersion=1.0.0`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      credentials: "include",
    });

  // 模拟任务完成请求
  var collector = (task, actionType) => {
    console.log(actionType ? "@领取任务：" : "@执行任务：", task);

    request("cakebaker_ckCollectScore", {
      taskId: task.taskId,
      itemId: task.itemId,
      actionType: actionType ? 1 : undefined,
      safeStr: JSON.stringify({ secretp }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("调用结果：", res.data);

        // 如果是执行任务，即任务已经完成，则进行下一个任务
        if (!actionType) {
          start();
        }
      });
  };

  // 甄选优品任务处理
  var superiorTask = (() => {
    // 是否有请求正在执行
    var isBusy = false;

    return (rawTaskCollection) => {
      var getFeedDetail = (copiedTaskCollection) => {
        request("cakebaker_getFeedDetail", {
          taskIds: copiedTaskCollection["productInfoVos"]
            .map((item) => item.itemId)
            .toString(),
        })
          .then((res) => res.json())
          .then((res) => {
            var result = res.data.result;

            // 确认任务集合所在键名
            var taskCollectionContentKeyName = Object.keys(result).find(
              (keyName) =>
                /Vos?$/.test(keyName) && !["taskVos"].includes(keyName)
            );

            result[taskCollectionContentKeyName].forEach((taskCollection) => {
              Array(taskCollection.maxTimes - taskCollection.times)
                .fill(true)
                .forEach((_, index) => {
                  taskList.unshift({
                    taskName: taskCollection.taskName,
                    taskId: taskCollection.taskId,
                    taskType: taskCollection.taskType,
                    waitDuration: taskCollection.waitDuration,
                    itemId: taskCollection.productInfoVos[index].itemId,
                  });
                });
            });

            // 解除请求锁定
            isBusy = false;
          });
      };

      if (!isBusy) {
        isBusy = true;
        getFeedDetail(JSON.parse(JSON.stringify(rawTaskCollection)));
      } else {
        // 一秒后重试
        setTimeout(
          getFeedDetail,
          1000,
          JSON.parse(JSON.stringify(rawTaskCollection))
        );
      }
    };
  })();

  // 开始任务
  var start = () => {
    var task = taskList.pop();

    if (task) {
      // 除了小精灵和连签外的任务要先领取
      if (!["小精灵", "连签得金币"].includes(task.taskName)) {
        setTimeout(collector, 0, task, true);
      }
      // 至少等 2 秒再执行任务
      setTimeout(collector, (2 + task.waitDuration) * 1000, task);
    } else {
      // 执行下一轮任务
      executeNextCycle();
    }
  };

  (() => {
    // 获取基础信息
    Promise.all([
      request("cakebaker_getHomeData"),
      // 请求稍微慢点，避免提示【点太快啦！等下再来吧】
      new Promise((resolve) => {
        setTimeout(() => {
          request("cakebaker_getTaskDetail").then(resolve);
        }, 1000);
      }),
    ])
      .then(([homeData, taskData]) =>
        Promise.all([homeData.json(), taskData.json()])
      )
      .then(([homeData, taskData]) => {
        // 如果无法获取任务详情
        if (taskData.data.bizCode !== 0) {
          if (
            taskData.data.bizCode === -7 &&
            !~navigator.userAgent.indexOf("jdapp")
          ) {
            console.log("当前浏览器 UA：" + navigator.userAgent);
            throw "任务详情获取失败，请确保已设置正确的浏览器 User-Agent。";
          } else {
            throw `【错误信息：${JSON.stringify(taskData.data)}】`;
          }
        }

        // 获取签名 token
        secretp = homeData.data.result.cakeBakerInfo.secretp;

        // 生成任务队列
        taskData.data.result.taskVos.forEach(async (taskCollection) => {
          // 跳过部分邀请任务
          if (/助力|站队/.test(taskCollection.taskName)) return;

          // 针对甄选优品任务的处理
          if (taskCollection["productInfoVos"]) {
            superiorTask(taskCollection);
          }

          // 确认任务集合所在键名
          var taskCollectionContentKeyName = Object.keys(taskCollection).find(
            (keyName) =>
              /Vos?$/.test(keyName) &&
              !["productInfoVos", "scoreRuleVos"].includes(keyName)
          );

          // 某类任务下的任务集合内容
          taskCollectionContent = taskCollection[taskCollectionContentKeyName];

          if (!taskCollectionContent) return;

          Array(taskCollection.maxTimes - taskCollection.times)
            .fill(true)
            .forEach((_, index) => {
              taskList.push({
                taskName: taskCollection.taskName,
                taskId: taskCollection.taskId,
                taskType: taskCollection.taskType,
                waitDuration: taskCollection.waitDuration,
                itemId:
                  taskCollectionContent instanceof Array
                    ? taskCollectionContent[index].itemId
                    : taskCollectionContent.itemId,
              });
            });
        });

        console.log(taskList);

        // 开始任务
        start();
      });
  })();
};

// 循环执行主程序
var excuteMain = () => {
  console.log(
    `正在执行第 ${currentCycle + 1} 轮任务，还有 ${
      MAX_CYCLES - (currentCycle + 1)
    } 轮未执行。`
  );

  new Promise(main).then(() => {
    currentCycle++;

    if (currentCycle < MAX_CYCLES) {
      excuteMain();
    } else {
      console.log("@任务已完成！");
      alert("任务完成！");
    }
  });
};

excuteMain();
```
