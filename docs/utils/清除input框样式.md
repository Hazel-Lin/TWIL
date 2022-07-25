### 背景
    在实现获取验证码功能时，样式的为svg + el-input，通过在外层包裹线框的方式实现svg prefix的效果 
### 实现
```css
::v-deep .el-form-item__content{
    border: 1px solid #C5D0DB;
    border-radius: 6px;
    height: 40px;
    line-height: 40px;
}
```
element-input 边框样式清除
```css
::v-deep .el-input__inner{
    border: none;
}
```