<template>
  <div class="container">
    <h2>我是 2 级子组件</h2>
    <hr />

    <LevelThreeComponent></LevelThreeComponent>
  </div>
</template>

<script>
import LevelThreeComponent from './LevelThreeComponent.vue'

export default {
  name: 'LevelTwoComponent',
  components: {
    LevelThreeComponent,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto 10px;
  padding-bottom: 10px;
  border: 2px solid skyblue;
}
</style>
