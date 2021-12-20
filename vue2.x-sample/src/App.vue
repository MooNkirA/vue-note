<template>
  <!-- 在页面中声明 vue 挂载点的 DOM 区域 -->
  <div id="app">
    <el-container>
      <el-header>{{ headerTitle }}</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            unique-opened
          >
            <el-submenu v-for="(c, idx) in contentList" :key="idx" :index="`${idx}`">
              <template slot="title">
                <span>{{ c.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(item, index) in c.sampleList"
                  :key="idx + '-' + index"
                  :index="item.path"
                  @click="clickMenu(idx, item)"
                  >{{ item.text }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 页面内容渲染区域 -->
        <el-main>
          <h1 v-if="path !== ''" class="title-app">{{ title }}</h1>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      path: '',
      // 内容列表
      contentList: [
        {
          title: '内容渲染指令',
          sampleList: [
            { text: 'v-text', path: '/v-text' },
            { text: '文本插值表达式 {{ }}', path: '/mustache' },
            { text: 'v-html', path: '/v-html' },
          ],
        },
        {
          title: '属性绑定指令',
          sampleList: [
            { text: 'v-bind', path: '/v-bind' },
            { text: 'Javascript 表达式', path: '/js-expression' },
            { text: 'v-bind 绑定元素 class 属性', path: '/v-bind-class' },
            { text: 'v-bind 绑定元素 style 内联样式', path: '/v-bind-style' },
          ],
        },
        {
          title: '事件绑定指令',
          sampleList: [
            { text: 'v-on 事件绑定', path: '/v-on' },
            { text: 'v-on 事件绑定函数', path: '/v-on-function' },
            { text: 'v-on 事件修饰符', path: '/v-on-event-modifiers' },
            { text: 'v-on 按键修饰符', path: '/v-on-key-modifiers' },
          ],
        },
        {
          title: '双向绑定指令',
          sampleList: [
            { text: 'v-model 数据双向绑定', path: '/v-model' },
            { text: 'v-model 修饰符', path: '/v-model-modifiers' },
          ],
        },
        {
          title: '条件渲染指令',
          sampleList: [
            { text: 'v-if 条件渲染', path: '/v-if' },
            { text: 'v-show 条件渲染', path: '/v-show' },
          ],
        },
        {
          title: '列表渲染指令',
          sampleList: [
            { text: 'v-for 列表渲染', path: '/v-for' },
            { text: 'v-for 高级使用-过滤与排序', path: '/v-for-filter' },
          ],
        },
        {
          title: 'vue 过滤器',
          sampleList: [
            { text: '自定义过滤器', path: '/vue-filters' },
            { text: '自定义全局过滤器', path: '/vue-global-filters' },
            { text: '过滤器串联调用', path: '/vue-chained-filters' },
            { text: '过滤器传递参数', path: '/vue-arguments-filters' },
          ],
        },
        {
          title: '计算属性与侦听器',
          sampleList: [
            { text: 'computed 计算属性', path: '/vue-computed' },
            { text: 'watch 侦听器', path: '/vue-watch' },
            { text: 'watch 侦听器不同方式定义', path: '/vue-watch-option' },
          ],
        },
        {
          title: '组件',
          sampleList: [
            { text: '局部组件', path: '/components-basic' },
            { text: '全局组件', path: '/components-global' },
            {
              text: '组件 props 类型检查',
              path: '/components-props-check',
            },
            {
              text: '组件 props 传递方式',
              path: '/components-props-passing',
            },
            { text: '组件的生命周期', path: '/components-lifecycle' },
            { text: '父组件传递子组件数据', path: '/parent-pass-child' },
            { text: '子组件传递父组件数据', path: '/child-pass-parent' },
            { text: '兄弟组件数据传递', path: '/component-pass-component' },
            { text: '动态组件', path: '/dynamic-components' },
            {
              text: '动态组件使用 keep-alive',
              path: '/dynamic-components-keep-alive',
            },
          ],
        },
        {
          title: '插槽',
          sampleList: [
            { text: '插槽基础', path: '/slot-basic' },
            { text: '具名插槽', path: '/named-slot' },
            { text: '作用域插槽', path: '/scoped-slot' },
            { text: '动态插槽名', path: '/dynamic-slot-names' },
          ],
        },
        {
          title: '自定义指令',
          sampleList: [
            { text: '自定义指令', path: '/custom-directives-basic' },
            {
              text: '自定义指令函数简写',
              path: '/custom-directives-function-shorthand',
            },
            {
              text: '全局自定义指令使用',
              path: '/custom-directives-global',
            },
          ],
        },
        {
          title: 'ref 访问组件实例或元素',
          sampleList: [
            { text: 'ref 访问元素', path: '/ref-dom' },
            { text: 'ref 访问子组件', path: '/ref-component' },
          ],
        },
        {
          title: '实例方法 | 生命周期相关',
          sampleList: [
            {
              text: '更新 DOM 延迟回调操作 vm.$nextTick(callback)',
              path: '/vue-nexttick',
            },
          ],
        },
        {
          title: '其他',
          sampleList: [
            { text: 'vue 快速入门', path: '/vue-quickstart' },
            { text: 'vue 实例创建', path: '/vue-instance' },
            { text: 'vue 相关文档', path: '/hello' },
          ],
        },
        {
          title: 'Vue Router',
          sampleList: [{ text: 'vue-router基础使用', path: '/vue-router-index' }],
        },
        {
          title: 'vue 应用案例',
          sampleList: [
            {
              text: '品牌列表',
              path: '/vue-basic-command',
            },
            {
              text: '计数器',
              path: '/demo-counter',
            },
            {
              text: '记事本',
              path: '/demo-notepad',
            },
            {
              text: '天气预报',
              path: '/demo-weather',
            },
            {
              text: '轮播图',
              path: '/demo-slideshow',
            },
            {
              text: '音乐播放器',
              path: '/demo-music-player',
            },
          ],
        },
      ],
    }
  },
  created() {
    this.list = this.contentList.reduce((pv, cv) => {
      const { title, sampleList } = cv
      sampleList.forEach(element => {
        element['title'] = title
      })
      return [...pv, ...sampleList]
    }, [])
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    clickMenu(index, menu) {
      // 获取当前路径
      this.path = this.$router.currentRoute.path
      // 滚动在顶部
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
  computed: {
    // 当前点击的菜单
    menu() {
      return this.list.find(i => this.path === i.path) || {}
    },
    headerTitle() {
      return this.menu.title
    },
    title() {
      return this.menu.text
    },
  },
  watch: {},
}
</script>

<style>
h2 {
  text-align: center;
}

.title-app {
  color: violet;
  font-size: 1.8rem;
}

.el-header {
  /* background-color: #b3c0d1; */
  background-color: papayawhip;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-weight: 900;
  font-size: 1.5rem;
}

/* 设置全局的代码块样式 */
.code {
  border: 2px solid pink;
  text-align: left;
  font-family: 'Courier New', Courier, monospace;
}
</style>
