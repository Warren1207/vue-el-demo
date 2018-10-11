import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/libs/auth'
import config from '@/config'

const BASE_API = process.env.NODE_ENV === 'development' ? config.BASE_API.dev : config.BASE_API.prod
/**
 * 创建 Axios 实例
 */
const service = axios.create({
  baseURL: BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

/**
 * 请求拦截
 * 让请求带上token
 */
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

/**
 * 数据返回拦截
 * 主要处理token过期
 */
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
