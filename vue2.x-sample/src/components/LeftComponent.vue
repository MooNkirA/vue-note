<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr />

    <p>
      <span>信息：</span>
      <input type="text" v-model="message" />
    </p>
    <p>
      <button @click="send">点击发送到 Right 组件</button>
    </p>
  </div>
</template>

<script>
// 1. 导入 eventBus.js 模块
import bus from '@/utils/eventBus'

export default {
  data() {
    return {
      message: '',
    }
  },
  methods: {
    send() {
      // 2. 通过 eventBus 来发送数据
      bus.$emit('share', this.message)
    },
  },
}
</script>

<style scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
