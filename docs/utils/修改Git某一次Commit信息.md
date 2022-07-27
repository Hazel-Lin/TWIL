---
title: 修改Git某一次Commit信息
date: 2020-06-22 21:08:44
tag: git
---

## 查询历史记录

```sh
git log
```

## 指定修改记录

```sh
git rebase -i 某一条的SHA
```

- 如果要修改第一条的记录

```sh
git rebase -i --root
```

![](http:///xiaoyio.com/usr/uploads/img/WeChatbf8d09afd18a51d3f50173bb4aa97607.png)

- 使用`vim`语法 将需要更改的某一条信息的 pick 修改成 edit
- `:wq` 保存并退出

## 提交更改

```sh
git commit --amend
```

![](http:///xiaoyio.com/usr/uploads/img/WeChatf907bc017934fef11155eaaa6f0124b7.png)

- 将上次提交的信息修改成需要更改后的内容 使用`vim`语法修改
- ：wq 保存退出

## 推送远程

```sh
git push origin 远程分支 -f
```

- 推送成功即可
