/* 综合示例项目路由 */
import VueBasicCommand from '@/sample/vue-basic-command'
import CartApp from '@/sample/vue-components-sample-cart/CartApp'

export default [
  {
    path: '/vue-basic-command',
    name: 'vue-basic-command',
    component: VueBasicCommand,
  },
  {
    path: '/vue-components-cart',
    name: 'vue-components-cart',
    component: CartApp,
  },
]
