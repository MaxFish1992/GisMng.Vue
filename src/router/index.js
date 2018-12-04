import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Product from '@/components/views/Product.vue'
import Forms from '@/components/views/Forms.vue'
import Gis from '@/components/views/Gis.vue'

//懒加载方式，当路由被访问的时候才加载对应组件
// const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: '管理系统',
      component: Home,
      children:[
        {path:'/Product',component:Product,name:'列表管理'},
        {path:'/Forms',component:Forms,name:'表单管理'},
        {path:'/Gis',component:Gis,name:'GIS地图'}
      ]
    },
    {
      path: '/Gis',
      name: 'GIS地图',
      component: Gis
    }
  ]
})

export default router;
