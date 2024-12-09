import axios from 'axios'
import { useAuthStore } from '@/stores'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('psg_auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const authStore = useAuthStore()
    if (error.response.status === 401) {
      authStore.logout()
      location.reload()
    } else {
      console.error(error)
    }
    return Promise.reject(error)
  }
)
