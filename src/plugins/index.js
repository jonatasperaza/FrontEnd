import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.52.58.127:8000/api/'
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
    return Promise.reject(error)
  }
)
