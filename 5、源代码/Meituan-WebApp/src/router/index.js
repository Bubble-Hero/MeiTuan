/**
 * 配置项目的路由规则表
 **/
import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import near from '@/pages/near'
import find from '@/pages/find'
import order from '@/pages/order'
import me from '@/pages/me'
import meAll from '@/components/MeComponents/MeAll'
import meCollect from '@/components/MeComponents/MeCollectComponents/MeCollect'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/near',
      name: 'near',
      component: near //组建名与上面的import 后面的名字相同
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      children: [
        {path:'',redirect:'meAll'},
        //xianyi
        {path:'meAll',name:'MeAll',component:meAll},
        {path:'meCollect',name:'MeCollect',component:meCollect}
      ]
    },

  ]
})
