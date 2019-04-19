import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import { getToken, canTurnTo } from 'lib/util'
import { Message } from 'element-ui'
import store from '../store'

import VueProgressBar from 'vue-progressbar'
import { setToken } from '../lib/util';

const options = {
  color: '#3090F2',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
  autoFinish: false
}

Vue.use(VueProgressBar, options)
const progressBar = Vue.prototype.$Progress

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const LOGIN_PATH_NAME = 'login'

const trunTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next()
  else next({name: '_401', replace: true})
}

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  progressBar.start()

  if (!getToken() && to.name !== LOGIN_PATH_NAME) {
    next('/login')
  } 
  else if (!getToken() && to.name === LOGIN_PATH_NAME) {
    next()
  }
  else if (getToken() && to.name === LOGIN_PATH_NAME) {
    Message({
      message: '你账号已登陆!',
      type: 'warning',
      duration: 2000
    })
    next('/')
  } else {
    // 需要使用 hasGetInfo判断用户是否刷新浏览器, 进行重新鉴权
    if (store.state.user.hasGetInfo) {
      // 路由鉴权
      trunTo(to, store.state.user.access, next)
    } else {
      console.log(1)
      store.dispatch('getUserInfo').then(user => {
        console.log(store.state.user)
        trunTo(to, user.access, next)
      })
      .catch((err) => {
        setToken('')
        Message({
          message: err,
          type: 'error',
          duration: 2000
        })
        next({
          name: 'home'
        })
      })
    }
  }
})

router.afterEach(() => {
  // console.log(to)
  // console.log(from)
  progressBar.finish()
})

export default router

