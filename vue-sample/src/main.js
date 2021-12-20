// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由模块，获取路由实例对象
// 在进行模块化导入的时候，如果给定的是文件夹，则默认导入此文件夹下，名字叫做 index.js 的文件
import router from './router'
// 导入多个过滤器，定义在一个过滤器的js文件中
import * as filters from './plugins/filters'
// 导入 axios 的配置
import './axios'

/* 完整引入 element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// vue 项目的提示信息是否开启配置（没有大用处）
Vue.config.productionTip = false

/* 通过 Vue.filter()  注册单个自定义全局过滤器 */
Vue.filter('capitalize', value => {
  if (!value) return ''
  value = value.toString()
  // 强调：过滤器中，必须要有一个返回值
  return value.charAt(0).toUpperCase() + value.slice(1) + '[全局过滤器]'
})

/* 批量注册自定义全局过滤器 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* 全局组件注册 */
// 1. 导入需要全局注册的注册
import GlobalComponent from './components/GlobalComponent.vue'
// 2. 注册组件
//    参数1：组件的注册名称，字符串类型
//    参数2：需要被全局注册的组件
Vue.component('MyGlobalComponent', GlobalComponent)

/* 全局自定义指令注册 */
/* Vue.directive('color', {
  bind(el, binding) {
    el.style.color = binding.value
  },
  update(el, binding) {
    el.style.color = binding.value
  }
}) */
// 指令的 `bind` 和 `update` 钩子函数相同处理，则对象格式的自定义指令可以简写成函数格式：
Vue.directive('color', function(el, binding) {
  el.style.color = binding.value
})

/* eslint-disable no-new */
// 创建 Vue 的实例对象
new Vue({
  // el 属性提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
  el: '#app',
  router, // 挂载路由实例对象
  components: { App },
  template: '<App/>',
})

// Vue 实例的 $mount() 方法，作用和 el 属性完全一样！
/* new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app') */
