// Routing from browser address

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cellar from '@/components/Cellar'
import NewItem from '@/components/NewItem'
import EditItem from '@/components/EditItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'Cellar',
      component: Cellar
    },
    {
      path: '/posts/new',
      name: 'NewItem',
      component: NewItem
    },
    {
      path: '/posts/:id',
      name: 'EditItem',
      component: EditItem
    }
  ]
})
