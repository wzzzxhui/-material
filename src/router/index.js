import Vue from 'vue'
import Router from 'vue-router'
import landing_page from '@/pages/landing_page'
import material from '@/pages/material'
import material_details from '@/pages/material_details'
import landing_details from '@/pages/landing_details'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    //{
    //  path: '/index',
    //  name: 'index',
    //  component: index,
    //  //children:[
    //  //  {path: '/landing_page',name: 'landing_page',component: landing_page},
    //  //  {path: '/material',name: 'material',component: material},
    //  //  {path: '/material_details',name: 'material_details',component: material_details},
    //  //  {path: '/landing_details',name: 'landing_details',component: landing_details},
    //  //]
    //},
    {
      path: '/',
      name: 'landing_page',
      component: landing_page,
    },
    {
      path: '/material',
      name: 'material',
      component: material,
    },
    {
      path: '/material_details',
      name: 'material_details',
      component: material_details,
    },
    {
      path: '/landing_details',
      name: 'landing_details',
      component: landing_details,
    }
  ]
})
