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

import second from '@/components/NearComponents/NearChild/second'
import NearChild from '@/components/NearComponents/NearChild/NearChild'


//添加me两个子页面
import meAll from '@/components/MeComponents/MeAll'
import meCollect from '@/components/MeComponents/MeCollectComponents/MeCollect'

//添加order两个子页面
import orderChildren from '@/components/OrderComponents/orderSecondPages/OrderSecondPage'
import orderFinal from "@/components/OrderComponents/OrderFinal"

import findFather from "@/components/FindComponents/FindFather"
import findChild from "@/components/FindComponents/FindChild/FindChild"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children:[
        {path: '', redirect: "",meta:{navShow:true}}
        ]
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {path: '', redirect: "",meta:{navShow:true}},
       // {path: 'meishi', name: "meishi",component:meishi,meta:{navShow:false}},
      ]
    },
    {
      path: '/near',
      name: 'near',
      component: near, //组建名与上面的import 后面的名字相同
      children:[
        {path: '', redirect: "second"},
        {path: 'second', name: "second",component:second,meta:{navShow:true}},
        {path: 'nearchild', name: "NearChild",component:NearChild,meta:{navShow:false}},
      ]
    },
    {
      path: '/find',
      name: 'find',
      component: find,
      children:[
        {path: '', redirect: "findFather"},
        {path: 'findFather', name: "FindFather",component:findFather,meta:{navShow:true}},
        {path: 'fxindChild', name: "FindChild",component:findChild}
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children:[
        {path: '', redirect: "orderFinal"},
        {
          //order默认子页面
          path: 'orderFinal', name: 'OrderFinal', component: orderFinal,
          //order默认子页面底部显示
          meta:{navShow:true}
          },
        {
          path: 'order2', name: 'OrderSecondPage', component: orderChildren,
          //order点击跳转子页面底部隐藏
          meta:{navShow:false}
        }
      ]
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      children: [
        {path:'',redirect:'meAll'},
        //xianyi
        {path:'meAll',name:'MeAll',component:meAll,meta:{navShow:true}},
        {path:'meCollect',name:'MeCollect',component:meCollect,meta:{navShow:false}}
      ]
    },

  ]
})
