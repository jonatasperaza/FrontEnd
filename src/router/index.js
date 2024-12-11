import { createRouter, createWebHistory } from 'vue-router'
import { toast } from 'vue3-toastify'
import { useAuthStore } from '@/stores/'

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
  ViaCepView,
  MakeOrderTest
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
      name: 'Login',
      component: LoginView
    },
    {
      path: '/test',
      name: 'test',
      component: ViaCepView
    },
    {
      path: '/client/signin',
      name: 'Cadastrar Cliente',
      component: SignInViewClient
    },
    {
      path: '/admin/employee/signup',
      name: 'Cadastrar Funcionario',
      component: RegisterEmployeeView,
      meta: { requiresAuth: true, role: 'employee' }
    },
    {
      path: '/admin/driver/signin',
      name: 'Cadastrar Motorista',
      component: RegisterDriverView,
      meta: { requiresAuth: true, role: 'employee' }
    },
    {
      path: '/admin/dashboard/',
      name: 'Painel do Admin',
      component: AdminDashboardView
      // meta: { requiresAuth: true, role: 'employee' }
    },
    {
      path: '/client/profile',
      name: 'Perfil do Cliente',
      component: ProfileClientView,
      meta: { requiresAuth: true, role: 'client' }
    },
    {
      path: '/driver/profile',
      name: 'Perfil do Motorista',
      component: DriverProfileView,
      meta: { requiresAuth: true, role: 'driver' }
    },
    {
      path: '/make-order-test',
      name: 'Criar Pedido',
      component: OrderView,
      meta: { requiresAuth: true, role: 'client' }
    },
    {
      path: '/order-status/:id',
      name: 'Status do Pedido',
      component: OrderStatusView,
      meta: { requiresAuth: true }
    },
    {
      path: '/make-order',
      name: 'Teste de Pedido',
      component: MakeOrderTest,
      meta: { requiresAuth: true, role: 'client' }
    },
    {
      path: '/testelocal',
      name: 'Teste Local',
      component: () => import('@/views/tests/Location.vue')
    },
    {
      path: '/my-driver-order',
      name: 'MyDriverOrder',
      component: () => import('@/views/driver/MyDriverOrder.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth) {
    if (!authStore.state.isLogged) {
      toast.error('Você precisa estar logado para acessar esta página!', {
        timeout: 5000
      })
      return next({ name: 'Login' })
    }

    if (to.meta.role && authStore.state.type !== to.meta.role) {
      toast.error('Você não tem permissão para acessar esta página!', {
        timeout: 5000
      })
      return next({ name: 'Home' })
    }
  }

  const pageKey = `visited_${to.name}`
  const isVisited = sessionStorage.getItem(pageKey)

  if (!isVisited) {
    sessionStorage.setItem(pageKey, true)
    toast.info(`Bem-vindo à página ${to.name}! Esperamos que você goste. 😊`, {
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      position: 'top-left'
    })
  }

  next()
})

export default router
