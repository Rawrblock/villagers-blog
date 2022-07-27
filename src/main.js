import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入状态管理Vuex
import store from './store'
// 富文本框
import Vue2Editor from 'vue2-editor'

Vue.use(Vue2Editor)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
