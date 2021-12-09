<template>
  <div>
    <h2>原代码：</h2>
    <img src="../assets/code1.jpg" />
    <hr />
    <h2>渲染结果如下：</h2>

    <pre class="code">{{ result }}</pre>
  </div>
</template>

<script>
export default {
  name: 'vue-instance',
  data() {
    return {
      result: `
        页面输入结果：
        a = 10

        控制台输入结果：
        vm.a == data.a =>  true
        vm.a = 2, data.a =>  2
        data.a = 3, vm.a =>  3
        vm.$data === data =>  true
        vm.$el === document.getElementById("app")  =>  true
        a newValue is 10, a oldValue is 3
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>