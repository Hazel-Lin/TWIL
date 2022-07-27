# 如何用CSS实现一个三角形

```html
<div class="triangle"></div>
<style>
  .triangle {
    width: 0;
    height: 0;
    background-color: #fff;
    border-right: 100px solid transparent;
    border-left: 100px solid transparent;
    border-top: 100px solid transparent;
    border-bottom: 100px solid blue;
    border-width: 0 100px 100px;
  }
</style>
```