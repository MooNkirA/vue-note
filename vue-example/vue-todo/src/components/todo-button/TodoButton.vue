<template>
  <div class="mt-3 btn-container">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        v-for="(item, index) in buttonList"
        :key="index"
        type="button"
        class="btn"
        :class="active === item.activeVal ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnClick(item.activeVal)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoButton',
  // 声明自定义事件
  emits: ['update:active'],
  props: {
    active: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      buttonList: [
        { label: '全部', activeVal: 0 },
        { label: '已完成', activeVal: 1 },
        { label: '未完成', activeVal: 2 },
      ],
    }
  },
  methods: {
    onBtnClick(index) {
      if (index === this.active) return
      // 调用自定义事件
      this.$emit('update:active', index)
    },
  },
}
</script>

<style lang="less" scoped>
.btn-container {
  width: 400px;
  text-align: center;
}
</style>
