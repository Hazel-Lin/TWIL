---
title: vue $refs获取元素高度
date: 2020-09-01 11:39:00
tags: Vue
---

### ref

```js
ref如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件。ref可以直接访问一个子组件，引用信息注册在$refs对象上，$refs 是所有注册过的ref的一个集合
当 ref 和 v-for 一起使用的时候，你得到的 ref 将会是一个包含了对应数据源的这些子组件的数组。

//ref本身是作为渲染结果被创建的，在渲染的时候是不能访问的，因此需要this.$nextTick()
 get getCollapseTabShow() {
        return (navBar: string) => {
            this.$nextTick(() => {
                // @ts-ignore 报没有 refresh 方法
                // refs引用的其他子组件的方法，必须为public
                this.$refs.detailNav.refresh();

            });
            console.log(this.$refs,'refs') //所有注册过ref的集合
            console.log(this.$refs.OrderInfo,1)
            return collapseTabShow[navBar].includes(this.orderDetailStatus.orderStatus);
        };
    }
 public refresh () {
        debounceFn(() => {
            let navList = []
            //获取Class的名称
            let itemList = document.querySelectorAll(".el-collapse-item[data-nav]")
            for (let i=0; i<itemList.length; i++) {
                //获取HTML的DOM节点
                let item = itemList[i] as HTMLElement
                if (this.isVisible(item)) {
                    // console.log(item)
                    let txt = ''
                    let name = ''
                    //dataset为自定义属性的值
                    if(item.dataset.nav){
                        txt = item.dataset.nav.split('|')[0]
                        name = item.dataset.nav.split('|')[1]
                    }
                    navList.push({
                        txt: txt,
                        item: item,
                        name: name
                    })
                }
            }
            // console.log("detail nav list:",navList)
            this.navList = navList
        });
    }

通过注册ref,使用this.$refs获取到DOM元素与组件的属性和方法

```

### vue $refs 获取元素高度

```js
<div ref = 'list'></div>

//js写法
//获取class id 类名下样式的高度值(内容高 + padding + 边框)
this.$refs.list.$el.offsetHeight

//获取内联样式值
this.$refs.list.$el.style.height


//ts写法
(this.$refs['labelList'] as any).$el.offsetHeight

```
