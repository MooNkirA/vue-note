<template>
  <div class="home-container">
    <h3>Home 组件</h3>

    <hr />

    <button @click="gotoLk">通过 push 跳转到“当幸福敲门来”页面</button>
    <button @click="gotoLk2">通过 replace 跳转到“当幸福敲门来”页面</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoLk() {
      // 通过编程式导航 API，导航跳转到指定的页面
      this.$router.push('/vue-router-index/movie/1')
    },
    gotoLk2() {
      // 跟 `router.push` 用法一致，唯一的不同就是，它不会向 `history` 添加新记录，而是替换掉当前的 `history` 记录。
      this.$router.replace('/vue-router-index/movie/1')
    },
  },
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
