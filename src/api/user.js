import {login as mockLogin, getUserInfo as getUserInfoMock} from '../mock/user'

export const login = ({ username, password }) => {
  username = username.trim()
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockLogin({username, password}))
    }, 1500)
  })
}

export const getUserInfo = token => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = getUserInfoMock(token)
      resolve(result)
    },2000)
  })
}