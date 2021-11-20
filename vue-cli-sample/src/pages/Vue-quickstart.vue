<template>
  <div>
    <h2>原代码：</h2>
    <img src="../assets/code.jpg" />
    <hr />
    <h2>渲染结果如下：</h2>

    <div>{{ username }}</div>
  </div>
</template>

<script>
export default {
  name: 'vue-quickstart',
  data() {
    return {
      username: 'MooNkirA',
    }
  },
  created() {},
}
</script>

<style>
</style>