---
title: 在学习Vue中使用axios发送数据
date: 2020-04-06 15:20:20
tag: Vue
---

```JavaScript
import axios from "axios";
  const requests = {
            username: 123,
            password: 123456
          };
  axios.post("/tokens", requests).then(res => {
            if (res.data.success) {
              alert("登录成功");
              this.$router.push("/");
            } else {
              alert("账号或密码错误");
            }
          });
```

##传输数据时，Content-Type:application/json ##后台接口数据需要为 application/x-www-form-urlencoded ##可以使用 qs 库，

```javascript
import axios from "axios";
import qs from "qs";
const requests = {
  username: this.ruleForm2.username,
  password: this.ruleForm2.password,
};
axios.post("/tokens", qs.stringify(requests)).then((res) => {
  if (res.data.success) {
    console.log(res.data);

    localStorage.setItem("token", res.data.data);
    localStorage.setItem("username", this.ruleForm2.username);
    alert("登录成功");
    this.$router.push("/");
  } else {
    this.$message.error("错了哦，这是一条错误消息");
  }
});
```

##qs.stringify()，可以将 JSON 格式转换成字符串格式，
