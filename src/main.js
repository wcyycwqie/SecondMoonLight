import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
//使用elementUI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/api'
//全局注册axios
Vue.prototype.$axios = axios

/* 
  productionTip 配置vue框架的日志级别  
  false 为开发环境日志
  true 为生产环境日志
*/
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: createElement => createElement(App),
}).$mount('#app')