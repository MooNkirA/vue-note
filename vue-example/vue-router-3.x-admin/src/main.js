import Vue from 'vue'
import RouterApp from './RouterApp.vue'
import router from './router'

// 导入全局样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(RouterApp),
}).$mount('#app')
