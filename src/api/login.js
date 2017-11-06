import axios from 'axios'
import NProgress from 'nprogress'

// 创建登录的axios请求
var instance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  baseURL: 'http://106.14.57.180:8000'

})
// 生成拦截器让每次请求先加载NP进度条

instance.interceptors.request.use(
  function (config) {
    NProgress.start()
    return config
  },
  function (error) {
    NProgress.start()
    return Promise.reject(error)
  })

instance.interceptors.response.use(
  function (config) {
    NProgress.done()
    return config
  },
  function (error) {
    NProgress.done()
    return Promise.reject(error)
  }
)

// 登录用户
// 请求参数: userName: ,password:
export const normalLogin = params => {
  return instance.post('/worker/login/', params)
}

