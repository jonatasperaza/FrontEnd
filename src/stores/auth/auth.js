import { computed } from 'vue'
import router from '@/router'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { AuthService } from '@/services'

export const useAuthStore = defineStore('auth', () => {
  const localUser = {
    isLogged: false,
    email: '',
    telephone: '',
    token: '',
    id: '',
    name: ''
  }

  const userStorageLocal = useStorage('user', localUser)

  async function setToken(token) {
    let data
    try {
      data = await AuthService.getUser(token)
    } catch (error) {
      console.log(error)
    } finally {
      userStorageLocal.value = {
        isLogged: true,
        email: data.email,
        token: token,
        id: data.id,
        name: data.name
      }
    }
  }

  const isLogged = computed(() => userStorageLocal.value.isLogged)
  const email = computed(() => userStorageLocal.value.email)
  const token = computed(() => userStorageLocal.value.token)
  const id = computed(() => userStorageLocal.value.id)
  const name = computed(() => userStorageLocal.value.name)

  function setIsLogged(novoDado) {
    isLogged.value = novoDado
  }

  function setEmail(novoDado) {
    email.value = novoDado
  }

  function setTokenPinia(novoDado) {
    token.value = novoDado
  }

  function setId(novoDado) {
    id.value = novoDado
  }

  function setName(novoDado) {
    name.value = novoDado
  }

  function unsetToken() {
    userStorageLocal.value = {
      isLogged: false,
      email: null,
      token: null,
      id: null,
      name: ''
    }
    localStorage.clear()
    router.push('/singin')
  }

  return {
    localUser,
    setToken,
    unsetToken,
    isLogged,
    email,
    token,
    id,
    setIsLogged,
    setEmail,
    setId,
    setTokenPinia,
    name,
    setName
  }
})
