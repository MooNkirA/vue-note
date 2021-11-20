// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建 Vue 的实例对象
new Vue({
  // el 属性提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
