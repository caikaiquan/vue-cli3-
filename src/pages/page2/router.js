import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: () => import('@/components/page2.vue')
    },
    {
        path:"/login",
        component:() => import('@/components/Page2Login.vue')
    }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
