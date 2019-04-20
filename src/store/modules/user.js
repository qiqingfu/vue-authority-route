import { getToken, setToken } from 'lib/util'
import { login, getUserInfo } from '@/api/user'

export default {
  state: {
    token: getToken(),
    userName: '',
    userId: '',
    access: '',
    hasGetInfo: false, // 是否登陆
    avatarImgPath: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    SET_ACCESS(state, access) {
      state.access = access
    },
    SET_AVATAR(state, avatar) {
      state.avatarImgPath = avatar
    },
    SET_NAME(state, username) {
      state.userName = username
    },
    SET_USERID(state, id) {
      state.userId = id
    },
    SET_GETINFO(state, login_state) {
      state.hasGetInfo = login_state
    },
  },
  actions: {
    Login({ commit }, { username, password }) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        const data = {
          username,
          password
        }
        login(data).then(result => {
          let { token } = result
          commit('SET_TOKEN', token)
          resolve() 
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getUserInfo({ state: { token }, commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo(token).then(res => {
          commit('SET_ACCESS', res.access)
          commit('SET_AVATAR', res.avatar)
          commit('SET_NAME', res.name)
          commit('SET_USERID', res.id)
          commit('SET_GETINFO', true)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    LoginOut({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('SET_TOKEN', '')
          commit('SET_GETINFO', false)
          resolve()
        }, 500)
      })
    }
  }
}