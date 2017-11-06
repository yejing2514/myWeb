import axios from 'axios'
import NProgress from 'nprogress'
import storage from '../module/storage.js'

export const instance = axios.create({
  baseURL: 'http://106.14.57.180:8000'
})

export const apiConfig = function () {
  // 生成拦截器让每次请求先加载NP进度条
  instance.interceptors.request.use(
    function (config) {
      NProgress.start()
      config.headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': storage.getToken('Token')
      }
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
}
