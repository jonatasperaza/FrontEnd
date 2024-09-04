import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import ViaCepView from '@/views/tests/ViaCepView.vue'
import SignInViewClient from '@/views/client/SignInViewClient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
    }
  ]
})

export default router
