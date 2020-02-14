import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'

//引入组件
import Login from '@/views/login/login'
import NotFound from '@/views/404'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Article from '@/views/article'

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
      component: Home,
      children: [{
          path: '/',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/article',
          name: 'article',
          component: Article
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

// 前置导航守卫
router.beforeEach((to, from, next) => {
  // console.log('**************')
  // console.log(to)
  // console.log(from);
  // console.log('**************')
  if (to.path !== '/login' && !auth.getUser().token) return next('/login')
  next()
})

export default router