---
title: 如何同时拥有github和gitlab权限
date: 2021-09-13 15:14:00
tags: git
---

## 背景

基于 Mac 开发过程中有时候需要了连接公司的 gitlab 库 有时候又需要在自己的 github 库中创建项目提交代码。如果没有配置的情况下，无法 push 到远端的 github 库中 报错提示没有权限。

## 解决

目前 基于本地已经连接了 gitlab 的情况下 只需要生成一个 github 的公密钥即可

```vim

// 进入ssh文件夹
cd .ssh

// 生成 gitHub 的ssh key 同时生成id_rsa_github文件
// 由于id_rsa文件中保存的是与gitlab相关的key 因此文件命名为id_rsa_github
ssh-keygen -t rsa -C  'gitHub邮箱'  -f ~/.ssh/id_rsa_github
/*
提示以下内容 表明生成成功
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/cias/.ssh/id_rsa_github.
Your public key has been saved in /Users/cias/.ssh/id_rsa_github.pub.
*/

// ls 查看文件

// 获取公钥 保存到git SSH keys中
vim id_rsa_github.pub

// 在.ssh 目录下 配置config文件
// IdentityFile中配置的文件路径必须存在
touch config
vim config

Host github.com
HostName github.com
User [gitHub邮箱]
IdentityFile ~/.ssh/id_rsa_github

Host [公司gitlab地址]
HostName [公司gitlab地址]
User [gitLab邮箱]
IdentityFile ~/.ssh/id_rsa

// 检查是否连接成功
ssh -T git@github.com

// 检查报错
ssh -vT git@github.com

```

以上就可实现同时拥有两者的权限了，再也不用担心不能在公司的电脑上连接自己的 github 啦
