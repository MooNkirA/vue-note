<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>
      输入注册的用户名:
      <input v-model.lazy="username" />
    </p>
    <p>用户名：{{ username }}；是否重复：{{ checkList.includes(username) }}</p>
  </div>
</template>

<script>
export default {
  name: 'vue-watch',
  data() {
    return {
      checkList: ['admin'],
      username: 'admin',
      code: `
        <p>
          输入注册的用户名:
          <input v-model.lazy="username" />
        </p>
        <p>用户名：{{ username }}；是否重复：{{ checkList.includes(username) }}</p>

        data() {
          return {
            checkList: ['admin'],
            username: 'admin',
          }
        }

        // 所有的侦听器，都应该被定义到 watch 节点下
        watch: {
          /**
           * 侦听器本质上是一个函数，要监视哪个数据的变化，监听的属性名作为函数名
           * 参数1是新值，参数2是旧值
           */
          username(newVal, oldVal) {
            console.log('新值 ==> ', newVal)
            console.log('旧值 ==> ', oldVal)

            if (oldVal === '') return

            // 判断是否存在，不存在则保存
            !this.checkList.includes(oldVal) && this.checkList.push(oldVal)
          },
        },
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
    username(newVal, oldVal) {
      console.log('新值 ==> ', newVal)
      console.log('旧值 ==> ', oldVal)

      if (oldVal === '') return

      // 判断是否存在，不存在则保存
      !this.checkList.includes(oldVal) && this.checkList.push(oldVal)
    },
  },
}
</script>

<style>
</style>