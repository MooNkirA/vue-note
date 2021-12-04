import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入并安装 Vant 组件库
import Vant from 'vant'
// 切记：为了能够覆盖默认的 less 变量，这里一定要把后缀名改为 .less
import 'vant/lib/index.less'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import zh from 'dayjs/locale/zh-cn.js'

dayjs.extend(relativeTime)
dayjs.locale(zh)

// 注册全局过滤器
Vue.filter('dateFormat', dt => dayjs().to(dt))

// 将 Vant 注册成 vue 的插件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
