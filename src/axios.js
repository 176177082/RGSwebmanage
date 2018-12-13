import axios from 'axios'

//
axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use

// axios拦截请求
instance.interceptors.request.use(config => {
// 获得本地token
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `JWT ${localStorage.getItem('token')}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
// axios拦截响应
instance.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

let host = 'http://192.168.3.120:8000/v2'
export default {
  // 用户登录
  UserLogin (params) {
    return instance.post(`${host}/login/`, params)
  },
  // 获取用户
  UserMessage () {
    return instance.get(`${host}/usermessage/`)
  }
}
