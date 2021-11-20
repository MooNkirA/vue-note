<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <!-- v-bind 属性绑定 -->
    <input type="text" v-bind:placeholder="tips" />
    <br /><br /><br />
    <!-- vue 规定 v-bind: 指令可以简写为 : -->
    <img :src="photo" alt="" style="width: 150px" />
    <br /><br /><br />
    <!-- 属性绑定结合 JavaScript 表达式
         表达式后结果是 box3 
    -->
    <div :title="'box' + index">这是一个 div</div>
  </div>
</template>

<script>
export default {
  name: 'v-bind',
  data() {
    return {
      tips: '请输入用户名',
      photo: 'https://cn.vuejs.org/images/logo.svg',
      index: 3,
      code: `
        <!-- v-bind 属性绑定 -->
        <input type="text" v-bind:placeholder="tips" />

        <!-- vue 规定 v-bind: 指令可以简写为 : -->
        <img :src="photo" alt="" style="width: 150px" />

        <!-- 属性绑定结合 JavaScript 表达式
            表达式后结果是 box3 
        -->
        <div :title="'box' + index">这是一个 div</div>
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>