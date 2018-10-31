import Vue from 'vue'
import Router from 'vue-router'
import Agregar from './views/Agregar.vue'
import Editar from './views/Editar.vue'
import Eliminar from './views/Eliminar.vue'
import Filtrar from './views/Filtrar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'agregar',
      component: Agregar
    },
    {
      path: '/editar',
      name: 'editar',
      component: Editar
    },
    {
      path: '/eliminar',
      name: 'eliminar',
      component: Eliminar
    },
    {
      path: '/filtrar',
      name: 'filtrar',
      component: Filtrar
    }
  ]
})
