<template>
  <div class="container">
    <h1 style="text-align: center">我是父组件</h1>
    <hr />

    <div>获取从子组件传递过来的数据：{{ JSON.stringify(userFromChild) }}</div>

    <!-- 在子组件标签中绑定自定义事件 -->
    <DispatchComponent @getUser="getUser"></DispatchComponent>
  </div>
</template>

<script>
import DispatchComponent from '@/components/DispatchComponent'

export default {
  name: 'Child-pass-parent',
  components: {
    DispatchComponent,
  },
  data() {
    return {
      // 定义接受从子组件传递的数据
      userFromChild: {},
    }
  },
  methods: {
    // 绑定自定义事件相应方法
    getUser(user) {
      // 因为对象引用的关系，如果直接赋值给userFromChild，
      // 下次修改子组件里的内容，这边也会同时修改
      this.userFromChild = { ...user }
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
  text-align: center;
}
</style>