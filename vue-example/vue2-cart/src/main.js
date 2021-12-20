import Vue from 'vue'
import CartApp from './CartApp.vue'

// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(CartApp),
}).$mount('#app')
