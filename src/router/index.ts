import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import FormLogin from '../views/FormLogin.vue'
import FormCadastro from '../views/FormCadastro.vue'
import FormPlanos from '../views/FormPlanos.vue'
import FormHistorico from '../views/FormHistorico.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: FormLogin
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: FormCadastro
  },
  {
    path: '/planos',
    name: 'planos',
    component: FormPlanos
  },
  {
    path: '/historico',
    name: 'historico',
    component: FormHistorico
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
