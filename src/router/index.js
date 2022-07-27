import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

// 创建路由
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
