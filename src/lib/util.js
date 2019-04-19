import Cookie from 'js-cookie'

const EXPIRE_TIME = 1

export const getToken = () => {
  return Cookie.get('token')
}

export const setToken = Token => {
  Cookie.set('token', Token, { expires:  EXPIRE_TIME})
}

export const canTurnTo = (name, access, routes) => {
  console.log(name)
  const routePermissionJudge = list => {
    return list.some(item => {
      console.log(item)
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children)
      } 
      else if (item.name === name) {
        console.log('hasAccess(access, item)', hasAccess(access, item))
        return hasAccess(access, item)
      }
    })
  }
  
  return routePermissionJudge(routes)
}

/**
 * 
 * @param {*} access 用户的权限数组 
 * @param {*} route 路由列表
 * @tip: 判断当前路由列表有没有设置权限, 如果没有则说明是白名单,任何用户都可以访问
 * 否则,需要验证用户路由列表是否存在与当前路由权限中
 */
function hasAccess(access, route) {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
  else return true
}

function hasOneOf(access, routeAccess) {
  console.log('access', access)
  console.log('routeAccess', routeAccess)
  return access.some(_ => routeAccess.indexOf(_) > -1)
}