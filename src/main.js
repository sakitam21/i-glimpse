// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mock from './mock'

import axios from 'axios'
axios.defaults.baseURL = 'http://mockjs.com/api'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
