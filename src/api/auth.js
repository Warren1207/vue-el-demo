import request from '@/libs/request'

export function loginFn (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}

export function logoutFn () {
  return request({
    url: '/api/auth/logout',
    method: 'post'
  })
}

export function getUserInfo () {
  return request({
    url: '/api/auth/info',
    method: 'get'
  })
}
