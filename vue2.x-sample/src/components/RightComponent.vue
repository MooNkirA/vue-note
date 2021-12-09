<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr />
    <p>Left 组件传递的信息：{{ messageFromLeft }}</p>
  </div>
</template>

<script>
// 1. 导入 eventBus.js 模块
import bus from '@/utils/eventBus'

export default {
  data() {
    return {
      // 子组件自己的数据，将来希望把 count 值传给父组件
      messageFromLeft: '',
    }
  },
  created() {
    // 2. 为 bus 绑定自定义事件
    bus.$on('share', (val) => {
      console.log('在 Right 组件中定义的 share 被触发了！', val)
      this.messageFromLeft = val
    })
  },
  methods: {},
}
</script>

<style scoped>
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
