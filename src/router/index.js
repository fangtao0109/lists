import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list'
import employee_admin from '@/components/employee_admin/employee_admin'
import user_admin from '@/components/employee_admin/user_admin'
import user_admin1 from '@/components/employee_admin/user_admin1'
import user_admin2 from '@/components/employee_admin/user_admin2'
import user_admin3 from '@/components/employee_admin/user_admin3'
import user_admin4 from '@/components/employee_admin/user_admin4'
import data from '@/components/employee_admin/data'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      children:[
        {
          name:'employee_admin',
          path:'employee_admin',
          component:employee_admin
        },
        {
          name:'user_admin',
          path:'user_admin',
          component:user_admin
        },
        {
          name:'user_admin1',
          path:'user_admin1',
          component:user_admin1
        },
        {
          name:'user_admin2',
          path:'user_admin2',
          component:user_admin2
        },
        {
          name:'user_admin3',
          path:'user_admin3',
          component:user_admin3
        },
        {
          name:'user_admin4',
          path:'user_admin4',
          component:user_admin4
        },
        {
          name:'data',
          path:'data',
          component:data
        }
      ]
    },
  ]
})
