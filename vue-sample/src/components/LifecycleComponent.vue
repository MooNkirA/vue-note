<template>
  <div class="container">
    <h2>测试生命周期子组件</h2>
    <div>
      <input v-model="text" />
      <p>输入结果：{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lifecycleComponent',
  data() {
    return {
      text: '',
    }
  },
  /* 
    在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
    组件中的 props、data、methods 都未创建，处于不可用状态
  */
  beforeCreate() {
    console.log('子组件 beforeCreate 方法执行了...')
  },
  /* 
    在实例创建完成后被立即同步调用。
    在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。
    即组件中的 props、data、methods 都处于可用状态
    然而，挂载阶段还没开始，且 $el property 目前尚不可用。
  */
  created() {
    console.log('子组件 created 方法执行了...')
  },
  /* 
    在挂载开始之前被调用：相关的 render 函数首次被调用。
    因为此时还挂载到虚拟 DOM 中，所以无法操作(获取) DOM 元素
    该钩子在服务器端渲染期间不被调用。
  */
  beforeMount() {
    console.log('子组件 beforeMount 方法执行了...')
  },
  /* 
    实例被挂载后调用。此 el 被新创建的 vm.$el 替换了。
    如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。

    注意 mounted 不会保证所有的子组件也都被挂载完成。
    如果希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick：

    该钩子在服务器端渲染期间不被调用。
  */
  mounted() {
    // 如果要操作当前组件的 DOM，最早只能在 mounted 阶段执行
    // console.log(this.$el)
    // const dom = document.querySelector('#myh3')
    // console.log(dom)
    console.log('子组件 mounted 方法执行了...')
  },
  /* 
    在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。
    该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务器端进行。
  */
  beforeUpdate() {
    console.log('子组件 beforeUpdate 方法执行了...')
  },
  /* 
    在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
    当这个钩子被调用时，组件 DOM 已经更新，所以现在可以执行依赖于 DOM 的操作。
    然而在大多数情况下，应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

    注意，updated 不会保证所有的子组件也都被重新渲染完毕。如果希望等到整个视图都渲染完毕，可以在 updated 里使用 vm.$nextTick。
    该钩子在服务器端渲染期间不被调用。
  */
  updated() {
    // 当数据变化之后，为了能够操作到最新的 DOM 结构，必须把代码写到 updated 生命周期函数中
    console.log('子组件 updated 方法执行了...')
  },
  /* 
    实例销毁之前调用。在这一步，实例仍然完全可用。
    该钩子在服务器端渲染期间不被调用。
  */
  beforeDestroy() {
    console.log('子组件 beforeDestroy 方法执行了...')
  },
  /* 
    实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
    该钩子在服务器端渲染期间不被调用。
  */
  destroyed() {
    console.log('子组件 destroyed 方法执行了...')
  },
  /* 
    被 keep-alive 缓存的组件激活时调用。
    该钩子在服务器端渲染期间不被调用。
  */
  activated() {},
  /* 
    被 keep-alive 缓存的组件激活时调用。
    该钩子在服务器端渲染期间不被调用。
  */
  deactivated() {},
  methods: {},
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  border: 2px solid skyblue;
}
</style>