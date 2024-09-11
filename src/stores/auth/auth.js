import router from '@/router'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { AuthService } from '@/services'

export const useAuthStore = defineStore('auth', () => {
  const state = useStorage('user', {
    user: {},
    isLogged: false,
    error: false,
    isLoading: false,
    type: '',
    token: ''
  })

  async function setToken(token) {
    let data
    try {
      state.value.isLoading = true
      data = await AuthService.getUser(token)
    } catch (error) {
      console.log(error)
      error.value = true
    } finally {
      console.log(data)
      state.value.user = data
      state.value.isLogged = true
      state.value.type = data.type
    }
  }

  function unsetToken() {
    state.value = {
      user: {},
      isLogged: false,
      error: false,
      isLoading: false,
      type: '',
      token: ''
    }
    localStorage.clear()
    router.push('/singin')
  }

  return {
    setToken,
    unsetToken,
    state
  }
})
