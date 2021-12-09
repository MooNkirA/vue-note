<template>
  <div class="container">
    <h1 style="text-align: center">我是父组件</h1>
    <hr />
    <div>
      <LeftComponent></LeftComponent>
      <RightComponent></RightComponent>
    </div>
  </div>
</template>

<script>
import LeftComponent from '@/components/LeftComponent'
import RightComponent from '@/components/RightComponent'

export default {
  name: 'component-pass-component',
  components: {
    LeftComponent,
    RightComponent,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > div {
  display: flex;
}
</style>