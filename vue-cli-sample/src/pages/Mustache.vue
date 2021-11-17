<template>
  <div>
    <div>Message: {{ msg }}</div>
    <div v-once>只加载一次的 Message: {{ msg }}</div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Mustache',
  data() {
    return {
      msg: '我是一个初始值，定义在data中',
    };
  },
  created() {
    setTimeout(() => (this.msg = '5秒后，值改变了！'), 5000);
  },
};
</script>

<style>
</style>