<template>
  <div class="container">
    <h1>自定义指令基础使用</h1>
    <hr />

    <div>
      <!-- 自定义指令使用时需要增加前缀 “v-” -->
      <p><input v-focus="'指令绑定的值'" type="text" v-model="textVal" /></p>
      <p>
        <button @click="count++">点击 {{ count }} 次数</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-directives-basic',
  components: {},
  data() {
    return {
      count: 0,
      textVal: '',
      colorList: ['skyblue', 'red'],
    }
  },
  // 注册局部指令，在组件中 directives 的选项中定义：
  directives: {
    // 定义名为 focus 的指令，指向一个配置对象。vue会自动给指令增加前缀 “v-”
    focus: {
      /* 
        只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
          参数 el：指令所绑定的元素，可以用来直接操作 DOM
          参数 binding：一个对象，包括以下 property
              name：指令名，不包括 v- 前缀。
              value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
              oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
              expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
              arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
              modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
          参数 vnode：Vue 编译生成的虚拟节点。
          参数 oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用

        注意：除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。
      */
      bind(el, binding, vnode) {
        console.log(
          `指令定义对象 bind 的钩子函数。
el 参数：%o
binding 参数：%o
vnode 参数：%o
          `,
          el,
          binding,
          vnode
        )
      },
      /* 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中) */
      inserted(el, binding, vnode) {
        console.log(
          `指令定义对象 inserted 的钩子函数。
el 参数：%o
binding 参数：%o
vnode 参数：%o
          `,
          el,
          binding,
          vnode
        )
        // 逻辑处理
        el.focus()
      },
      /* 
        所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
        指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
      */
      update(el, binding, vnode, oldVnode) {
        console.log(
          `指令定义对象 update 的钩子函数。
el 参数：%o
binding 参数：%o
vnode 参数：%o
oldVnode 参数：%o
          `,
          el,
          binding,
          vnode,
          oldVnode
        )
        // 页面更新后的处理逻辑
        el.value = `${binding.value}|${oldVnode.context.count}`
      },
      /* 指令所在组件的 VNode 及其子 VNode 全部更新后调用 */
      componentUpdated(el, binding, vnode, oldVnode) {
        console.log(
          `指令定义对象 componentUpdated 的钩子函数。
el 参数：%o
binding 参数：%o
vnode 参数：%o
oldVnode 参数：%o
          `,
          el,
          binding,
          vnode,
          oldVnode
        )
        // 页面更新后的处理逻辑
        const { count, colorList } = vnode.context
        el.style.color = colorList[count % 2]
      },
      /* 只调用一次，指令与元素解绑时调用 */
      unbind(el, binding, vnode) {
        console.log(
          `指令定义对象 unbind 的钩子函数。
el 参数：%o
binding 参数：%o
vnode 参数：%o
          `,
          el,
          binding,
          vnode
        )
      },
    },
  },
}
</script>

<style scoped>
.container {
  background-color: pink;
  border: 2px solid red;
}
.container > h1 {
  text-align: center;
}
</style>