import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Login from '@/components/user/Login'

import FairyStory from '@/components/fairyStory/FairyStory'

import Minions from '@/components/minions/Minions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children:[
        {
          path:'fairystory',
          name:'fairystory',
          component:FairyStory
            
        },
        {
          path:'minions',
          name:'minions',
          component:Minions
        }
      ]
    }
  ]
})
