<template>
  <div class="container">
    <h1 style="text-align: center">使用 ref 操作子组件示例</h1>
    <hr />

    <div>
      <!-- 在子组件定义 ref 属性，vue 将此属性值做为key，注册到组件实例中的 $refs 属性对象中 -->
      <ButtonCounter ref="counter"></ButtonCounter>
    </div>
    <div><button @click="reset">点击重置子组件的总点击数</button></div>
  </div>
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter'

export default {
  name: 'ref-component',
  components: {
    ButtonCounter,
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    reset() {
      // 通过 $refs 获取子组件的实例，然后可以访问子组件中的数据(data)与方法(methods)，并进行操作与调用
      this.$refs.counter.count = 0
    },
  },
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > div {
  margin-bottom: 10px;
  text-align: center;
}
</style>