---
title: Vuex中Actions中获取State的值
date: 2020-06-19 00:29:00
tags: Vue
---

#在使用 VUEX 的进行异步操作的时候有时候需要取到 state 中定义的属性 ##在 actions 中方法中的参数可以添加 rootState 获取到 state 中的属性

```javascript
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    popGoodList: [],
    filterCategory: [],
  },
  mutations: {},
  actions: {
    // 异步请求数据
    AsyncChangePopGoodList({ commit, rootState }, payload) {
      goodsList({
        keyword: payload.keyword,
        categoryId: payload.categoryId,
        order: payload.order,
        sort: payload.sort,
      }).then((res) => {
        rootState.popGoodList = res.data.goodsList;
        rootState.filterCategory = res.data.filterCategory;
      });
    },
  },
  modules: {},
});
```
