<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>原字符串：{{ message }}</p>
    <p>
      串联过滤器处理后字符串：{{
        message | filterA('参数1', arg) | filterB | filterC
      }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'vue-chained-filters',
  data() {
    return {
      message: 'Moon',
      arg: 'data的定义的参数2',
      code: `
        <p>原字符串：{{ message }}</p>
        <p>
          串联过滤器处理后字符串：{{
            message | filterA('参数1', arg) | filterB | filterC
          }}
        </p>

        data() {
          return {
            message: 'Moon',
            arg: 'data的定义的参数2',
          }
        }
      `,
    }
  },
  created() {},
}
</script>

<style>
</style>