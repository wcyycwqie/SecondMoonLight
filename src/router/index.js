import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import Login from '@/views/login/login'
import NotFound from '@/views/404'
import Home from '@/views/home'
import Welcome from '@/views/welcome'

Vue.use(Router)

//配置路由
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'root',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'welcome',
        component: Welcome
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

})

export default router