<template>
  <div class="container">
    <h1>全局自定义指令基础使用</h1>
    <hr />

    <!-- 自定义指令使用时需要增加前缀 “v-” -->
    <div id="area" v-color="backgroundColor">
      我是被全局自定义指令 v-color 改变颜色的文字
    </div>
    <div>
      <button @click="count++">点击 {{ count }} 次数</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-directives-global',
  components: {},
  data() {
    return {
      count: 0,
      colorList: ['blue', 'red'],
    }
  },
  computed: {
    backgroundColor() {
      return this.colorList[this.count % 2]
    },
  },
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > h1,
.container > div {
  text-align: center;
}

.container > div:first-of-type {
  margin: 0 auto;
  width: 50%;
  height: 50px;
  border: 2px solid purple;
  background-color: #fff;
  border-radius: 3px;
  line-height: 50px;
}
.container > div:last-of-type {
  margin: 10px 0;
}
</style>