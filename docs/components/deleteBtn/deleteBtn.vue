<template>
  <el-button
    class="deleteBtn"
    :type="type"
    :size="size"
    :plain="isPlain"
    @click="handleDelete($event)"
  >{{ getBtnName }}</el-button>
</template>

<script>

export default {
  name: 'DeleteBtn',
  props: {
    id: {
      type: [String, Number, Array],
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    post: {
      type: Object,
      default: () => null
    },
    size: {
      type: String,
      default: 'mini'
    },
    type: {
      type: String,
      default: 'text'
    },
    isBatch: {
      type: Boolean,
      default: false
    },
    isPlain: {
      type: Boolean,
      default: false
    },
    batchTextObj: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {};
  },
  computed: {
    getBtnName() {
      return this.isBatch ? '批量删除' : '删除';
    }
  },
  methods: {
    // 判断是否有勾选
    hasChooseData() {
      if (Array.isArray(this.id)) {
        return this.id.length === 0;
      }
    },
    blurHandle(evt) {
      let target = evt.target;
      if (target.nodeName === 'SPAN') {
        target = evt.target.parentNode;
      }
      target.blur();
    },
    handleDelete(event) {
      // 是否是批量删除
      this.blurHandle(event);
      this.isBatch ? this.doBefore() : this.createDialog(this.content);
    },
    doBefore() {
      if (this.hasChooseData()) {
        return this.$message.error(this.batchTextObj.errorText);
      }
      this.createDialog(this.batchTextObj.batchText);
    },
    // 弹窗
    createDialog(content) {
      this.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        closeOnPressEscape: false
      })
        .then(() => {
          // 确定逻辑
          this.doSuccess();
        })
        .catch(() => {
          // 取消逻辑
          this.doCancel();
        });
    },
    async doSuccess() {
      const post = this.post['param'];
      const param = {
        [post]: this.id
      };
      console.log(param, 'param');
      const res = await this.post.deleteFn(param);
      if (res.isSuccess()) {
        this.$message.success('删除成功');
        // 删除成功后 do something
        this.$emit('onSuccess');
      }
    },
    doCancel() {}
  }
};
</script>

<style lang="scss" scoped>
.deleteBtn {
    color: #f56c6c;
    font-size: 14px;
}
</style>
