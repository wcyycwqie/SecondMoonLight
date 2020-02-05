import Vue from 'vue'
import App from './App.vue'
import router from './router'


/* 
  productionTip 配置vue框架的日志级别  
  false 为开发环境日志
  true 为生产环境日志
*/
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

