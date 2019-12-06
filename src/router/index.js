import Vue from 'vue'
import VueRouter from 'vue-router'
import Background from '../components/Background.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Background
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Background.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
