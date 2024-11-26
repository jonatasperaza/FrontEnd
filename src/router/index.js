import { createRouter, createWebHistory } from 'vue-router'
import { toast } from 'vue3-toastify'
import {
  AboutView,
  AdminDashboardView,
  DriverProfileView,
  HomeView,
  LoginView,
  OrderStatusView,
  OrderView,
  ProfileClientView,
  RegisterDriverView,
  RegisterEmployeeView,
  SignInViewClient,
  VehiclesView,
  ViaCepView
} from '@/views/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/vehicles',
      name: 'Veiculos',
      component: VehiclesView
    },
    {
      path: '/about',
      name: 'Sobre',
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
      name: 'Login Do Cliente',
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
      name: 'Perfil Do Cliente',
      component: ProfileClientView
    },
    {
      path: '/driver/profile',
      name: 'Perfil Do Motorista',
      component: DriverProfileView
    },
    {
      path: '/make-order',
      name: 'Criar Pedido',
      component: OrderView
    },
    {
      path: '/order-status',
      name: 'Status Do Pedido',
      component: OrderStatusView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const pageKey = `visited_${to.name}` // Identificador único para a página
  const isVisited = localStorage.getItem(pageKey)

  if (!isVisited) {
    toast.info(`Bem-vindo à página ${to.name}! Esperamos que você goste. 😊`, {
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      position: 'top-left'
    })
    localStorage.setItem(pageKey, true)
  }

  next()
})

export default router
