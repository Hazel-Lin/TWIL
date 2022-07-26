### js对象 使用变量作为key
variate as key in Object
```js
const postObj = {
  param:'name'
}
const param = this.postObj['param'];
const obj = {
  [param]: '123'
};
```