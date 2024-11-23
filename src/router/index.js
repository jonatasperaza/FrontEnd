import { createRouter, createWebHistory } from 'vue-router'
import { toast } from 'vue3-toastify'
import HomeView from '../views/HomeView.vue'
import VehiclesView from '@/views/VehiclesView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import ViaCepView from '@/views/tests/ViaCepView.vue'
import SignInViewClient from '@/views/client/SignInViewClient.vue'
import RegisterEmployeeView from '@/views/admin/RegisterEmployeeView.vue'
import RegisterDriverView from '@/views/admin/RegisterDriverView.vue'
import ProfileClientView from '@/views/client/ProfileClientView.vue'
import DriverProfileView from '@/views/driver/DriverProfileView.vue'
import OrderView from '../views/Order/OrderView.vue'
import OrderStatusView from '@/views/Order/OrderStatusView.vue'
import AdminDashboardView from '@/views/admin/AdminDashboardView.vue'

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
      path: '/admin/employee/signup',
      name: 'employee-signup',
      component: RegisterEmployeeView
    },
    {
      path: '/admin/driver/signin',
      name: 'driver-signin',
      component: RegisterDriverView
    },
    {
      path: '/admin/dashboard/',
      name: 'admin-dashboard',
      component: AdminDashboardView
    },
    {
      path: '/client/profile',
      name: 'client-profile',
      component: ProfileClientView
    },
    {
      path: '/driver/profile',
      name: 'driver-profile',
      component: DriverProfileView
    },
    {
      path: '/make-order',
      name: 'make-order',
      component: OrderView
    },
    {
      path: '/order-status',
      name: 'order-status',
      component: OrderStatusView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const pageKey = `visited_${to.name}` // Identificador único para a página
  const isVisited = localStorage.getItem(pageKey)

  if (!isVisited) {
    toast.info(`Bem-vindo à página ${to.name}! Esperamos que você goste. 😊`)
    localStorage.setItem(pageKey, true) 
  }

  next()
})

export default router
