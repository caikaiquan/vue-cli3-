import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import '@/assets/css/public.css'
import '@/assets/css/base.scss'
import '@/plugins/element/styles.scss'
import '@/plugins/element/element.js'

Vue.config.productionTip = false
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
