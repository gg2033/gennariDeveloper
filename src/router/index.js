import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/components/HelloPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloGus',
      component: HelloPage
    }
  ]
})
