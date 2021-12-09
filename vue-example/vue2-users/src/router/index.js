import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入需要的组件
import UserList from '@/views/UserList.vue'
import UserDetail from '@/views/UserDetail.vue'

// 声明路由配置对象
const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: UserList },
  { path: '/users/:id', component: UserDetail, props: true },
]

const router = new VueRouter({
  routes,
})

export default router
