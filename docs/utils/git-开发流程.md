---
title: git 开发流程
date: 2020-09-07 13:34:00
tags: git
---

## git 是开发版本管理工具

## git 工作流程

```js

git clone + 远程仓库地址 拉下代码

git remote -v 查看连接状态

在develop分支上创建一个自己的分支

git checkout -b 自己的分支名

切换到自己的分支进行开发

开发完成后
git add .
git commit -m xxxx
git push 到自己的远程分支 然后再合并到develop中

再第二次开发之前 从develop中拉下最新的代码（因为develop包含了所有人上一个版本开发的代码，如果不拉最新的代码，在改到相同的文件时会产生冲突）

git pull origin develop

拉取完毕后再次进行开发

```

### git 的分区：

工作区、暂存区、本地仓库、远程仓库
工作区：即本地开发时看到的代码
暂存区：git add .会将代码提交到暂存区，隐藏文件.git 为一个版本库，暂存区存在于版本库中
HEAD 指向你最近一次提交后的结果

### 创建版本库并连接远程仓库

```javascript

git init

git remote add origin + 连接的远程仓库

git remote -v 确认已经连接

git fetch origin develop 从远程仓库中下拉代码

git checkout -b xxx origin/develop 创建自己的分支

git pull origin develop 把某个分支上的内容拉取到本地

git branch 查看当前所在分支

git clone -b dev 代码仓库地址 （dev是分支名称） 拉取远端具体分支

```

### 开发过程中需要创建新的分支

```js

git checkout develop //在develop分支的基础上创建一个新的分支就必须将当前分支设为develop，release也一样

git checkout -b <分支名> 创建并切换到新建的分支，即可开始开发

```

### git 分支管理

通常情况下会存在 master、develop、release 分支，开发时会在 develop 分支中创建一个属于自己的分支，从而和 develop 分离开来不影响该分支

```javascript

git checkout <分支名> 本地创建一个分支

git branch <分支名> 切换分支

git branch 查看当前所在分支

git checkout -b <分支名> 创建并切换到该分支，相当于1 2 连贯操作

git branch -d<分支名> 删除掉某一个分支

git branch -D<分支名> 强制删除掉某一个分支

git branch -a 查看所有分支包括本地和远程

git branch -r 查看远程分支

git push origin --delete <branchName> 删除远程分支

```

### 开发功能结束后代码提交

```javascript

git status 查看状态

git add . 提交到暂存区

git commit -m 备注名称 提交暂存区代码 此时代码已经在暂存区

（git pull origin develop 拉取develop中的代码
git checkout develop  切换到develop分支
git merge xxx 在develop分支合并自己的分支
git push 将分支推到develop）

git checkout develop 切换到develop分支

git pull 拉下远程仓库中的develop，因为可能其他人提交了代码在develop中，本地的代码不是最新的，此时develop的代码是最新的
//为了确保更有效的提交代码，可从gitlab中直接merge
git checkout xxx 切换回自己的分支

git merge develop 将最新的develop分支的代码合并到自己的分支，此时会暴露冲突

git push origin xxx:xxx 将自己的分支推到远程仓库自己的分支中

通过gitlab的merge合并到develop分支

测试时，再merge到release分支中

```

### git 回滚

git reset --hard HEAD^ 回到上一个版本

### git 报错

- “Your local changes to the following files would be overwritten by checkout”

  - 存到暂存区
  - git add .
  - git stash
  - git stash pop 取出
  - 直接提交
  - git add .
  - git commit -m

- "ECDSA host key for gitlab.cias.cn has changed and you have requested strict checking.
  Host key verification failed."
  - 由于服务器做出改动，重新访问服务器会出现此类问题
  - 解决办法：

```js
    vi ~/.ssh/known_hosts   //打开该文件
    删除 用户目录/.ssh/known_hosts 中的 gitlab.cias.cn 开头的行 // 删除掉原有缓存的ssh
    命令行输入ssh -T git@gitlab.cias.cn，yes 即可  //重新创建连接
```

- xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

```js
    xcode-select --install
```
### git commit 撤销

