<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <!-- 文本插值 {{  }}。双大括号会将数据解释为普通文本，而非 HTML 代码。 -->
    <div>Message: {{ msg }}</div>
    <!-- 通过使用 v-once 指令，能执行一次性地插值，当数据改变时，插值处的内容不会更新。
         但请留心这会影响到该节点上的其它数据绑定：
      -->
    <div v-once>只加载一次的 Message: {{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'mustache',
  data() {
    return {
      msg: '我是一个初始值，定义在data中',
      code: `
        <!-- 文本插值 {{  }}。双大括号会将数据解释为普通文本，而非 HTML 代码。 -->
        <div>Message: {{ msg }}</div>
        <!-- 通过使用 v-once 指令，能执行一次性地插值，当数据改变时，插值处的内容不会更新。
            但请留心这会影响到该节点上的其它数据绑定：
          -->
        <div v-once>只加载一次的 Message: {{ msg }}</div>

        created() {
          setTimeout(() => {
            this.msg = '5秒后，值改变了！'
          }, 5000)
        }
      `,
    }
  },
  created() {
    setTimeout(() => {
      this.msg = '5秒后，值改变了！'
    }, 5000)
  },
}
</script>

<style>
</style>