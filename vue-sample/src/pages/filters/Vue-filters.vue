<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>原字符串：{{ message }}</p>
    <p>过滤器处理后字符串：{{ message | capitalize }}</p>
  </div>
</template>

<script>
export default {
  name: 'vue-filters',
  data() {
    return {
      message: 'hello, vue.js',
      code: `
        <p>原字符串：{{ message }}</p>
        <p>过滤器处理后字符串：{{ message | capitalize }}</p>

        /**
         * 过滤器函数，必须被定义到 filters 节点之下。过滤器本质上是函数
         */
        filters: {
          // 注意：过滤器函数形参中第1个参数，永远都是“管道符”前面的那个需要被处理的值
          capitalize(value) {
            if (!value) return ''
            value = value.toString()
            // 强调：过滤器中，必须要有一个返回值
            return value.charAt(0).toUpperCase() + value.slice(1)
          },
        },
      `,
    }
  },
  created() {},
  /**
   * 过滤器函数，必须被定义到 filters 节点之下。过滤器本质上是函数
   */
  filters: {
    // 注意：过滤器函数形参中第1个参数，永远都是“管道符”前面的那个需要被处理的值
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      // 强调：过滤器中，必须要有一个返回值
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
}
</script>

<style>
</style>