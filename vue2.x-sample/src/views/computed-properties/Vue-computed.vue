<template>
  <div>
    <h2>原代码：</h2>
    <pre class="code">
      {{ code }}
    </pre>

    <hr />
    <h2>渲染结果如下：</h2>

    <div>
      <span>R：</span>
      <input type="text" v-model.number="r" />
    </div>
    <div>
      <span>G：</span>
      <input type="text" v-model.number="g" />
    </div>
    <div>
      <span>B：</span>
      <input type="text" v-model.number="b" />
    </div>

    <!-- 在属性身上，: 代表  v-bind: 属性绑定 -->
    <!-- :style 代表动态绑定一个样式对象，它的值是一个 {  } 样式对象 -->
    <!-- 当前的样式对象中，只包含 backgroundColor 背景颜色 -->
    <div class="box" :style="{ backgroundColor: rgb }">
      {{ rgb }}
    </div>

    <hr />
    <label for="num_ipt">输出数字进行计算（观察控制台执行次数的输入）：</label>
    <input type="text" id="num_ipt" v-model.number="num" />
    <p>computed 计算属性渲染的 {{ num }} 乘以 2 的值为：{{ double }}</p>
    <p>computed 计算属性渲染的 {{ num }} 乘以 2 的值为：{{ double }}</p>
    <p>computed 计算属性渲染的 {{ num }} 乘以 2 的值为：{{ double }}</p>

    <p>method 方式渲染的 {{ num }} 乘以 3 的值为：{{ triple() }}</p>
    <p>method 方式渲染的 {{ num }} 乘以 3 的值为：{{ triple() }}</p>
    <p>method 方式渲染的 {{ num }} 乘以 3 的值为：{{ triple() }}</p>
  </div>
</template>

<script>
export default {
  name: 'vue-computed',
  data() {
    return {
      // 红色
      r: 255,
      // 绿色
      g: 255,
      // 蓝色
      b: 255,
      num: 0,
      code: `
      `,
    }
  },
  created() {},
  // 所有的计算属性，都要定义到 computed 节点之下。计算属性需要成定义成“方法格式”
  computed: {
    // rgb 作为一个计算属性，被定义成了方法格式，最终，在这个方法中，要返回一个生成好的 rgb(x,x,x) 的字符串
    rgb() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`
    },
    double() {
      console.log('计算属性被执行了')
      return this.num * 2
    },
  },
  methods: {
    triple() {
      console.log('方法计算被执行了')
      return this.num * 3
    },
  },
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 200px;
  margin-top: 15px;
}
</style>
