import Vue from 'vue'
// import App from './App.vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Página de contato</p>'}


const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')
