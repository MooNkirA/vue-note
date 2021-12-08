<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <p>count 的值是：{{ count }}</p>
    <!-- 在绑定事件处理函数的时候，可以使用 () 传递参数 -->
    <button @click="add(1)">函数传参，会覆盖原生的事件对象（+1）</button>

    <!-- 原生的 DOM 事件绑定接收事件参数对象 event -->
    <button @click="addEvent">获取原生 DOM 事件对象（+2）</button>
    <!-- vue 提供了内置变量，名字叫做 $event，它就是原生 DOM 的事件对象 event -->
    <button @click="addEvent1($event, 3)">
      获取 vue 内置 $event 事件对象（+3）
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-on-function',
  data() {
    return {
      count: 0,
      code: `
        <p>count 的值是：{{ count }}</p>
        <!-- 在绑定事件处理函数的时候，可以使用 () 传递参数 -->
        <button @click="add(1)">函数传参，会覆盖原生的事件对象（+1）</button>

        <!-- 原生的 DOM 事件绑定接收事件参数对象 event -->
        <button @click="addEvent">获取原生 DOM 事件对象（+2）</button>
        <!-- vue 提供了内置变量，名字叫做 $event，它就是原生 DOM 的事件对象 event -->
        <button @click="addEvent1($event, 3)">
          获取 vue 内置 $event 事件对象（+3）
        </button>

        // methods 属性的作用是定义事件的处理函数
        methods: {
          add(n) {
            // 在 methods 处理函数中，this 就是 new 出来的 vm 实例对象
            console.log(vm === this)
            console.log(vm)
            this.count += n
          },
          addEvent(e) {
            this.count += 2
            console.log(e)

            // 判断 this.count 的值是否为偶数
            if (this.count % 2 === 0) {
              // 偶数
              e.target.style.backgroundColor = 'red'
            } else {
              // 奇数
              e.target.style.backgroundColor = ''
            }
          },
          addEvent1(e, n) {
            this.count += n
            console.log(e)

            // 判断 this.count 的值是否为偶数
            if (this.count % 2 === 0) {
              // 偶数
              e.target.style.backgroundColor = 'pink'
            } else {
              // 奇数
              e.target.style.backgroundColor = ''
            }
          },
        },
      `,
    }
  },
  created() {},
  // methods 属性的作用是定义事件的处理函数
  methods: {
    add(n) {
      // 在 methods 处理函数中，this 就是 new 出来的 vm 实例对象
      // console.log(vm === this)
      // console.log(vm)
      this.count += n
    },
    addEvent(e) {
      this.count += 2
      console.log(e)

      // 判断 this.count 的值是否为偶数
      if (this.count % 2 === 0) {
        // 偶数
        e.target.style.backgroundColor = 'red'
      } else {
        // 奇数
        e.target.style.backgroundColor = ''
      }
    },
    addEvent1(e, n) {
      this.count += n
      console.log(e)

      // 判断 this.count 的值是否为偶数
      if (this.count % 2 === 0) {
        // 偶数
        e.target.style.backgroundColor = 'pink'
      } else {
        // 奇数
        e.target.style.backgroundColor = ''
      }
    },
  },
}
</script>

<style></style>
