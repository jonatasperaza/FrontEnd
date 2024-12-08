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
      name: 'Cadatrar Do Cliente',
      component: SignInViewClient
    },
    {
      path: '/admin/employee/signup',
      name: 'Cadastrar funcionario',
      component: RegisterEmployeeView
    },
    {
      path: '/admin/driver/signin',
      name: 'Cadastrar Motorista',
      component: RegisterDriverView
    },
    {
      path: '/admin/dashboard/',
      name: 'Painel do Admin',
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
      path: '/order-status/:id',
      name: 'Status Do Pedido',
      component: OrderStatusView
    },
    {
      path: '/make-order-test',
      name: 'Teste de Pedido',
      component: MakeOrderTest
    }
  ]
})

router.beforeEach((to, from, next) => {
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
