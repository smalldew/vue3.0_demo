import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import(/* webpackChunkName: "find" */ '../views/find.vue')
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import(/* webpackChunkName: "vip" */ '../views/vip.vue')
    },
    {
      path: '/square',
      name: 'square',
      component: () => import(/* webpackChunkName: "square" */ '../views/square.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "my" */ '../views/my.vue')
    }
  ]


const router = createRouter({
    // createWebHistory 第一个参数为以前路由的base
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router