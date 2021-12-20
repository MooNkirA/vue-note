<template>
  <div class="container">
    <h1 style="text-align: center">我是父组件</h1>
    <hr />

    <div>
      <span>输入向子组件传递基本数据类型的值：</span>
      <input type="text" v-model="message" />
    </div>
    <div>
      <p>
        <span>向子组件传递对象类型的值 name 属性:</span>
        <input type="text" v-model="user.name" />
      </p>
      <p>
        <span>向子组件传递对象类型的值 age 属性:</span>
        <input type="number" v-model.number="user.age" />
      </p>
      <p>
        <span>向子组件传递对象类型的值 sport 属性:</span>
        <input
          type="checkbox"
          id="c1"
          value="basketball"
          v-model="user.sport"
        />
        <label for="c1">篮球</label>
        <input type="checkbox" id="c2" value="tennis" v-model="user.sport" />
        <label for="c2">网球</label>
        <input type="checkbox" id="c3" value="swimming" v-model="user.sport" />
        <label for="c3">游泳</label>
      </p>
    </div>

    <!-- 通过 Prop 向子组件传递数据 -->
    <ReceiveComponent :message="message" :user="user"></ReceiveComponent>
  </div>
</template>

<script>
import ReceiveComponent from '@/components/ReceiveComponent'

export default {
  name: 'Parent-pass-child',
  components: {
    ReceiveComponent,
  },
  data() {
    return {
      message: '',
      user: {
        sport: [],
      },
    }
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
  text-align: center;
}
</style>