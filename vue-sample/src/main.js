// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入多个过滤器，定义在一个过滤器的js文件中
import * as filters from './plugins/filters'

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

/* eslint-disable no-new */
// 创建 Vue 的实例对象
new Vue({
  // el 属性提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Vue 实例的 $mount() 方法，作用和 el 属性完全一样！
/* new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app') */
