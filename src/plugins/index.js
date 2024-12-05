import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.fexcompany.me/api/'
})

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('psg_auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
