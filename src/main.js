import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Vue3Toastify, { Bounce } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import '@/assets/toast.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000,
  ...Bounce
})

app.mount('#app')
