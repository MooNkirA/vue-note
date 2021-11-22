<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>
      输入a:
      <input v-model.lazy="a" />
    </p>
    <p>
      输入b:
      <input v-model.lazy="b" />
    </p>
    <p>
      输入c:
      <input v-model.lazy="c" />
    </p>
    <p>
      输入d:
      <input v-model.lazy="d" />
    </p>
    <p>
      输入e.f.g:
      <input v-model.lazy="e.f.g" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'vue-watch-option',
  data() {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: {
        f: {
          g: 5,
        },
      },
      code: `
      `,
    }
  },
  created() {},
  // 所有的侦听器，都应该被定义到 watch 节点下
  watch: {
    /**
     * 侦听器本质上是一个函数，要监视哪个数据的变化，监听的属性名作为函数名
     * 参数1是新值，参数2是旧值
     */
    // 侦听器定义方式1：函数
    a(newVal, oldVal) {
      console.log('新值 ==> ', newVal)
      console.log('旧值 ==> ', oldVal)
    },
    // 侦听器定义方式2：函数名称
    b: '',
  },
}
</script>

<style>
</style>