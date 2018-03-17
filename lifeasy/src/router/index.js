import Vue from 'vue'
import Router from 'vue-router'
import weather from '@/components/weather/Weather'
import Commonheader from '@/components/common/header'
import Commonfooter from '@/components/common/footer'
import WeatherChange from '@/components/weather/WeatherChange'
import WeatherMain from '@/components/weather/WeatherMain'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    //重定向在外面重新写
    {
      path    : '/',
      redirect: '/weather/WeatherMain'
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
    }
  ]
})
