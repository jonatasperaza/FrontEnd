import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiclesView from '@/views/VehiclesView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import ViaCepView from '@/views/tests/ViaCepView.vue'
import SignInViewClient from '@/views/client/SignInViewClient.vue'
import RegisterEmployeeView from '@/views/admin/RegisterEmployeeView.vue'
import RegisterDriverView from '@/views/admin/RegisterDriverView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehiclesView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView 
    },
    {
      path: '/test',
      name: 'test',
      component: ViaCepView
    },
    {
      path: '/client/signin',
      name: 'client-signin',
      component: SignInViewClient
    },
    {
      path:'/admin/employee/signup',
      name: 'employee-signup',
      component: RegisterEmployeeView
     },
    {
      path: '/admin/driver/signin',
      name: 'driver-signin',
      component: RegisterDriverView
    }
   }
  ]
})

export default router
