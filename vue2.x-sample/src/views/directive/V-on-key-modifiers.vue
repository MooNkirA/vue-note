<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <!-- 指定事件按键修饰符 -->
    <input type="text" @keyup.esc="clearInput" @keyup.enter="commitAjax" />
  </div>
</template>

<script>
export default {
  name: 'v-on-key-modifiers',
  data() {
    return {
      count: 0,
      code: `
        <!-- 指定事件按键修饰符 -->
        <input type="text" @keyup.esc="clearInput" @keyup.enter="commitAjax" />


        methods: {
          clearInput(e) {
            console.log('触发了 clearInput 方法')
            e.target.value = ''
          },
          commitAjax(e) {
            console.log('触发了 commitAjax 方法')
            console.log('发送数据：' + e.target.value)
          },
        },
      `,
    }
  },
  created() {},
  // methods 属性的作用是定义事件的处理函数
  methods: {
    clearInput(e) {
      console.log('触发了 clearInput 方法')
      e.target.value = ''
    },
    commitAjax(e) {
      console.log('触发了 commitAjax 方法')
      console.log('发送数据：' + e.target.value)
    },
  },
}
</script>

<style>
</style>