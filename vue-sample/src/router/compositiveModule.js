/* 综合示例项目路由 */
import VueBasicCommand from '@/sample/vue-basic-command'
import CartApp from '@/sample/vue-components-sample-cart/CartApp'
import RouterApp from '@/sample/vue-router-admin/RouterApp'

/* 路由综合案例 */
import RouterLogin from '@/sample/vue-router-admin/components/MyLogin.vue'
import RouterHome from '@/sample/vue-router-admin/components/MyHome.vue'

import RouterUsers from '@/sample/vue-router-admin/components/menus/MyUsers.vue'
import RouterRights from '@/sample/vue-router-admin/components/menus/MyRights.vue'
import RouterGoods from '@/sample/vue-router-admin/components/menus/MyGoods.vue'
import RouterOrders from '@/sample/vue-router-admin/components/menus/MyOrders.vue'
import RouterSettings from '@/sample/vue-router-admin/components/menus/MySettings.vue'
import RouterUserDetail from '@/sample/vue-router-admin/components/user/MyUserDetail.vue'

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
  {
    path: '/vue-router-admin',
    component: RouterApp,
    children: [
      // 设置默认重定向
      { path: '', redirect: 'login' },
      // 登录的路由规则
      { path: 'login', component: RouterLogin },
      // 后台主页的路由规则
      {
        path: 'home',
        component: RouterHome,
        redirect: 'home/users',
        children: [
          { path: 'users', component: RouterUsers },
          { path: 'rights', component: RouterRights },
          { path: 'goods', component: RouterGoods },
          { path: 'orders', component: RouterOrders },
          { path: 'settings', component: RouterSettings },
          // 用户详情页的路由规则
          { path: 'userinfo/:id', component: RouterUserDetail, props: true },
        ],
      },
    ],
  },
]
