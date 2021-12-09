<template>
  <div class="container">
    <h1>自定义指令函数简写基础使用</h1>
    <hr />

    <!-- 自定义指令使用时需要增加前缀 “v-” -->
    <div id="area" v-change-color="backgroundColor"></div>
    <div>
      <button @click="count++">点击 {{ count }} 次数</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-directives-function-shorthand',
  components: {},
  data() {
    return {
      count: 0,
      colorList: ['skyblue', 'red'],
    }
  },
  computed: {
    backgroundColor() {
      return this.colorList[this.count % 2]
    },
  },
  // 注册局部指令，在组件中 directives 的选项中定义：
  directives: {
    // 自定义指令修改背景颜色，bind 与 update 同样的处理逻辑
    /* 'change-color': {
      bind(el, binding, vnode) {
        //
        el.style.backgroundColor = binding.value
      },
      update(el, binding, vnode, oldVnode) {
        el.style.backgroundColor = binding.value
      },
    }, */
    /*
      如果在指令的 `bind` 和 `update` 钩子函数中触发相关的逻辑行为，
      并且而不关心其它的钩子。则对象格式的自定义指令可以简写成函数格式：
    */
    'change-color'(el, binding, vnode, oldVnode) {
      el.style.backgroundColor = binding.value
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

.container > div:last-child {
  margin: 10px 0;
  text-align: center;
}

#area {
  margin: 0 auto;
  width: 50%;
  height: 300px;
  border: 2px solid gold;
  border-radius: 3px;
}
</style>