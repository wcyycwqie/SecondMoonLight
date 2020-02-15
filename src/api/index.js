import axios from 'axios'
import auth from '@/auth'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 统一设置请求头
// axios.defaults.headers.Authorization = `Bearer ${auth.getUser().token}`

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 获取本地的token
  const userInfo = auth.getUser()
  if (userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`
  } else {
    console.log('不存在token')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

export default axios