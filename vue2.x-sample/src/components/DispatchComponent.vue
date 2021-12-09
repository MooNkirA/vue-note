<template>
  <div class="container">
    <h2>子组件</h2>
    <div>
      <p>
        <span>用户姓名:</span>
        <input type="text" v-model="user.name" />
      </p>
      <p>
        <span>用户年龄:</span>
        <input type="number" v-model.number="user.age" />
      </p>
      <p>
        <span>运动爱好:</span>
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
      <p>
        <button @click="submit">点击向父组件传递表单对象</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DispatchComponent',
  // 组件的私有属性
  data() {
    return {
      user: {
        sport: [],
      },
    }
  },
  methods: {
    submit() {
      /* 
        点击按钮，通过 $emit() 方法触发父组件绑定的自定义事件
          参数1: {string} eventName 自定义事件的名称
          参数2: [...args]  自定义事件调用的相关参数（多个）
      */
      this.$emit('getUser', this.user)
    },
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
  margin: 5px auto;
  border: 2px solid skyblue;
}
</style>