### Q
记录一个业务开发中的校验问题，初衷是为了封装公用的校验规则。当使用计算属性rules创建校验规则时，在input框输入时，立即校验全部表单必填项。然而当在每个form中独立写校验规则时，则不会出现上述情况。:raising_hand:


### A
由于表单验证规则为计算属性，并且使用了data中的数据作为传参，因此用户在input框中输入后，数据发生变化计算属性也会改变。在form表单中默认`rules` 属性改变后立即触发一次验证，因此就出现了上述场景。
> 解决方案：在form表单中添加该属性validate-on-rule-change为false，阻止属性变化后立即触发校验
```js
computed: {
    rules() {
      return {
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { validator: newPwdValidator, trigger: 'blur' }
        ],
        confirmPwd: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: confirmPwdValidator, params: this.passwordForm.newPwd, trigger: 'blur' }
        ]
      };
    },
 }
```


### Q
记录一个表单输入问题，场景是API接口编辑。el-input输入数据后，点击取消按钮还原该数据。
利用深拷贝在编辑前获取一份备份数据，取消之后直接赋值给form表单。问题是，第一次编辑后取消数据还原了。但是第二次编辑乃至后续的编辑操作都会改变深拷贝后的数据，进而在取消之后仍然改变了form表单的值


### A
> 解决：这是由于引用赋值导致的问题，在点击修改后深拷贝一份备份数据即可。尽量避免引用赋值，因为引用赋值会出现地址公用的情况。参考深浅拷贝知识 :tada: