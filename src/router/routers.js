/**
 * meta: {
 *    title: xxx
 *    access: [xx, xx]
 *    icon: xx
 *    hideInMenu: xx
 * }
 */

 import layout from '@/views/layout/layout'

 export default [
   {
     path: '/login',
     name: 'login',
     meta: {
       title: 'Login -登陆',
       hideInMenu: true  // 不展示在侧边栏
     },
     component: () => import('@/views/login/login')
   },
   {
     path: '/',
     name: '_home',
     redirect: '/home',
     component: layout,
     meta: {
       hideInMenu: true
     },
     children: [
       {
         path: '/home',
         name: 'home',
         meta: {
           hideInMenu: true,
           title: '首页'
         },
         component: () => import('@/views/single-page/home')
       }
     ]
   },
   {
     path: '/join',
     name: 'join',
     component: layout,
     meta: {
       hideInMenu: true
     },
     children: [
       {
         path: 'join_page',
         name: 'join_page',
         meta: {
           title: 'QQ群'
         },
         component: () => import('@/views/join-page/index')
       }
     ]
   },
   {
      path: '/message',
      name: 'message',
      component: layout,
      meta: {
        title: '消息'
      },
      children: [
        {
          path: 'list',
          name: 'list',
          meta: {
            title: '消息列表',
            access: ['super_admin']   // 只有超级管理员可看
          },
          component: () => import('@/views/list/list')
        }
      ]
   },
   {
     path: '/401',
     name: '_401',
     meta: {
       hideInMenu: true,
       title: '没有权限访问'
     },
     component: () => import('@/views/401/401')
   }
 ]