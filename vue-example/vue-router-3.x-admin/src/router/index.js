import Vue from 'vue'
import VueRouter from 'vue-router'

/* 路由综合案例 */
import RouterLogin from '@/components/MyLogin.vue'
import RouterHome from '@/components/MyHome.vue'

import RouterUsers from '@/components/menus/MyUsers.vue'
import RouterRights from '@/components/menus/MyRights.vue'
import RouterGoods from '@/components/menus/MyGoods.vue'
import RouterOrders from '@/components/menus/MyOrders.vue'
import RouterSettings from '@/components/menus/MySettings.vue'
import RouterUserDetail from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const routes = [
  // 设置默认重定向
  { path: '/', redirect: '/login' },
  // 登录的路由规则
  { path: '/login', component: RouterLogin },
  // 后台主页的路由规则
  {
    path: '/home',
    component: RouterHome,
    redirect: '/home/users',
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
]

const router = new VueRouter({
  routes,
})

/* 
  为 router 实例对象，声明全局前置导航守卫
  每次发生了路由导航的跳转，必然会触发 beforeEach 指定的 function 回调函数
  每个守卫方法接收三个参数：
    to: Route实例，即将要进入的目标路由对象
    from: Route实例，当前导航正要离开的路由
    next: Function类型，一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
        next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
        next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
        next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
        next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
*/
router.beforeEach((to, from, next) => {
  // 定义需要校验的地址集合
  const checkList = ['/home', '/home/users', '/home/rights']

  // 当前地址在校验范围内，并且localStorage里没有token，则进行拦截
  if (checkList.includes(to.path) && !localStorage.getItem('token')) {
    next('/login')
  }

  // 确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。如果不执行 next 函数，则不会进行任何路由的跳转
  next()
})

export default router
