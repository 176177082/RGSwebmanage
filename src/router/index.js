import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from '@/components/Container'
import LogIn from '@/components/LogIn'
// import Parent from '../components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/Parent'
    // },
    // {
    //   path: '/Parent',
    //   name: 'Parent',
    //   component: Parent
    // },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/container',
      name: 'Container',
      component: Container
    }
  ]
})
