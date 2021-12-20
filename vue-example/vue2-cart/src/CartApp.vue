<template>
  <div class="app-container">
    <!-- Header 头部区域组件 -->
    <Header title="购物车案例"></Header>
    <!-- 循环渲染每一个商品的信息 -->
    <!-- :count="item.goods_count" -->
    <Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :pic="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      @state-change="getNewState"
    >
      <!-- 在 Goods 组件中定义的默认插槽 -->
      <Counter :num="item.goods_count" @num-change="getNewNum(item, $event)"></Counter>
    </Goods>

    <!-- Footer 区域 -->
    <Footer :isfull="fullState" :amount="amt" :all="total" @full-change="getFullState"></Footer>
  </div>
</template>

<script>
// 导入 axios 请求库
import axios from 'axios'

import Header from './components/Header/Header'
import Goods from './components/Goods/Goods'
import Footer from './components/Footer/Footer'
// 导入 Counter 组件
import Counter from './components/Counter/Counter'

export default {
  name: 'CartApp',
  components: {
    Header,
    Goods,
    Footer,
    Counter,
  },
  data() {
    return {
      // 用来存储购物车的列表数据，默认为空数组
      list: [],
    }
  },
  // 计算属性
  computed: {
    // 动态计算出全选的状态是 true 还是 false
    fullState() {
      return this.list.every(item => item.goods_state)
    },
    // 已勾选商品的总价格
    amt() {
      // 使用 reduce 累加 goods_state 状态为 true 的商品
      return this.list.reduce((total, item) => {
        const { goods_state, goods_price, goods_count } = item
        if (goods_state) {
          total += goods_price * goods_count
        }
        return total
      }, 0)
    },
    // 已勾选商品的总数量
    total() {
      return this.list.reduce((t, item) => {
        if (item.goods_state) {
          t += item.goods_count
        }
        return t
      }, 0)
    },
  },
  created() {
    // 调用请求数据的方法
    this.initCartList()

    bus.$on('share', val => {
      this.list.some(item => {
        if (item.id === val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  },
  methods: {
    // 封装请求列表数据的方法
    async initCartList() {
      // 调用 axios 的 get 方法，请求列表数据
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status === 200) {
        this.list = res.list
      }
    },
    // 接收子组件传递过来的数据
    // e 的格式为 { id, value }
    getNewState(e) {
      this.list.some(item => {
        if (item.id === e.id) {
          item.goods_state = e.value
          // 终止后续的循环
          return true
        }
      })
    },
    // 接收 Footer 子组件传递过来的全选按钮的状态
    getFullState(val) {
      this.list.forEach(item => (item.goods_state = val))
    },
    // 获取 Counter 组件发过来的最新的数量值
    getNewNum(item, e) {
      console.log(item, e)
      item.goods_count = e
    },
  },
}
</script>

<style lang="less" scoped>
.app-container {
  width: 100%;
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
