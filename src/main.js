import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

/*
import API from '@/api'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

const socket = io(API.SOCKET_ENDPOINT)
Vue.use(VueSocketIOExt, socket);
 */

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
