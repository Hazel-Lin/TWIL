# css文字超出处理

## 背景
业务处理中，使用el-tree实现树状数据处理，文字过长时的多种处理方案

## 实现
```html
<el-tree
  node-key="id"
  :current-node-key="currentKey"
  :highlight-current="true"
  :data="asideList"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree"
  class="filter-tree"
  @node-click="handleNodeClick"
>
  <span slot-scope="{data}">
    <span
      class="tree-node-span"
    >
      {{ data.apiName }}
    </span>
  </span>
</el-tree>
```
#### 1. 超出换行
```css
.tree-node-span{
  // 换行操作
  white-space: normal;
}
::v-deep .el-tree-node__content{

  // 调整高度避免容器装不下所有字体
  height: 100%; 

  // 调整箭头在盒子的上方，避免换行时箭头在容器中间
  align-items: flex-start;
}
```

#### 2. 省略号...展示
```css
.tree-node-span{
  display: block;
  // 设置一定的宽度 超出宽度省略号展示
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
#### 3. 加个横向滚动条吧
```css
.filter-tree {
  display: inline-block;
}
```

#### 坑 🕳
如果直接将该样式的 overflow-hidden修改成auto则会给每个超出宽的的tree节点单独添加滚动条
```css
::v-deep .el-tree-node > .el-tree-node__children {
  overflow: hidden;
}
```