import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

Vue.config.productionTip = false
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    let $ = parent.$;
    if ($) {
      // 改变壳子菜单的显示名称
      let salesFlow_title = $('#addres').find('[menukey=xslsh5]').find('.title_text');
      if(salesFlow_title[0]){
        salesFlow_title.text(to.meta.title);
      }
    }
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
