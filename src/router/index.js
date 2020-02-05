import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import Login from '@/views/login/login'
import NotFound from '@/views/404'

Vue.use(Router)

//配置路由
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'root',
    component: Login
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

})

export default router