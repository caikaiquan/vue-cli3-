import Vue from 'vue'
import VueRouter from 'vue-router'
// vue-router ≥3.0版本回调形式以及改成promise api的形式了，返回的是一个promise，如果没有捕获到错误，控制台始终会出现如图的警告，针对于路由跳转相同的地址，
// 目前的解决方案: this.$router.push('/location').catch(err => { console.log(err) })
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component: () => import('@/pages/wyf/views/Activation.vue')
    },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
