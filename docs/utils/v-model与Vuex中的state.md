---
title: v-model与Vuex中的state
date: 2020-06-19 00:30:00
tags: Vue
---

##理论上，修改 state 的值，唯一的途径是通过 mutations。所以 v-model 直接使用 state 的值会出现问题，因此，我们可以借助 computed 属性来解决这个场面

```javascript
* store中：
const store = new Vuex.Store({
	state: {
		val: "你好，世界"
	},
    mutations: {
        changeVal(state, payload){
            state.val = payload;
        }
    }
})

* 组件中：
<input v-model="value" />
<script>
export default {
    computed: {
        value: {
            get(){
                return this.$store.state.val;
            },
            set(val){
                this.$store.commit("changeVal", val);
            }
        }
    }
}
</script>
```
