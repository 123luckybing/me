import Vue from 'vue'
import Router from 'vue-router'
import weather from '@/components/weather/Weather'
import Commonheader from '@/components/common/header'
import Commonfooter from '@/components/common/footer'
import WeatherChange from '@/components/weather/WeatherChange'
import WeatherMain from '@/components/weather/WeatherMain'
import express from '@/components/express/Express'
import expressChoose from '@/components/express/ExpressChoose'
import expressDetail from '@/components/express/ExpressDetail'
import Broadcast from '@/components/broadcast/Broadcast'
import BroadcastSearch from '@/components/broadcast/BroadcastSearch'
import BroadcastDetail from '@/components/broadcast/BroadcastDetail'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    //重定向在外面重新写
    {
      path    : '/',
      redirect: '/weather/WeatherChange'
    },
    {
      path:"/weather",
      name: 'weather',
      component:weather,
      children:[
        {
          path: '/weather/WeatherChange',
          name: 'WeatherChange',
          component: WeatherChange
        },{
          path: '/weather/WeatherMain/:city',
          name: 'WeatherMain',
          component: WeatherMain
        }
      ]
    },{
      path: '/header',
      name: 'Commonheader',
      component:Commonheader
    },{
      path: '/footer',
      name: 'Commonfooter',
      component:Commonfooter
    },{
      path: '/express',
      name: 'express',
      component:express,
      children:[{
        path:"expressChoose",
        name:"expressChoose",
        component:expressChoose
      },{
        path:"expressDetail/:typ/:number_order",
        name:"expressDetail",
        component:expressDetail
      }]
    },{
      path:"/Broadcast",
      name:"Broadcast",
      component:Broadcast,
      children:[
        {
          path:"BroadcastSearch",
          name:"BroadcastSearch",
          component:BroadcastSearch,
        },{
          path:"BroadcastDetail/:start/:end",
          name:"BroadcastDetail",
          component:BroadcastDetail,
        }
      ]
    }
  ]
})
