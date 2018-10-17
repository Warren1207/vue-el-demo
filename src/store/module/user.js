import { loginFn, logoutFn, getUserInfo } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/libs/auth'

const user = {
  state: {
    userName: '',
    id: '',
    token: getToken()
  },
  mutations: {
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    // 登录
    LoginFun ({ commit }, userInfo) {
      const userName = userInfo.name.trim()
      return new Promise((resolve, reject) => {
        loginFn(userName, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          if (!response.data) {
            resolve(response)
            return
          }
          const data = response.data
          commit('SET_USERNAME', data.userName)
          commit('SET_ID', data.id)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOutFun ({ commit }) {
      return new Promise((resolve, reject) => {
        logoutFn().then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default user
