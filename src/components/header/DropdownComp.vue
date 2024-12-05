<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Dropdown from 'v-dropdown'
import Logout from 'vue-material-design-icons/Logout.vue'
import Home from 'vue-material-design-icons/Home.vue'
import Car from 'vue-material-design-icons/Car.vue'
import Login from 'vue-material-design-icons/Login.vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import Information from 'vue-material-design-icons/Information.vue'
import { useAuthStore } from '@/stores/auth/auth'

const authStore = useAuthStore()
const width = ref(window.innerWidth)

const onBrowserResize = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', onBrowserResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onBrowserResize)
})
</script>

<template>
  <Dropdown trigger="hover">
    <template #trigger>
      <span class="menu">
        <Menu />
        <p v-if="width > 1024">Menu</p>
      </span>
    </template>
    <div class="dropLinks">
      <router-link to="/" class="drop">
        <Home />
        Home
      </router-link>
      <router-link to="/about" class="drop">
        <Information />
        Sobre Nós
      </router-link>
      <router-link to="/vehicles" class="drop">
        <Car />
        Veiculos
      </router-link>
      <router-link to="/make-order" class="drop">
        <Home />
        Pedido
      </router-link>
      <router-link to="/login" class="drop" v-if="!authStore.state.isLogged">
        <Login />
        Login
      </router-link>
      <div v-else>
        <button @click="authStore.logout" class="logout">
          <Logout />
          Logout
        </button>
      </div>
    </div>
  </Dropdown>
</template>

<style scoped lang="scss">
@use '../../assets/main';

span {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 50%;
  background-color: #161617;
  border-radius: 27px;
  padding: 0.5rem;
}

a.header {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  padding: 1rem;
}

.dropLinks {
  width: 150px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  background-color: #000000;
}

a.drop {
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 1rem;
  transition: 0.3s ease-in-out;
  display: flex;
  gap: 0.5rem;
}

a.login {
  color: blue;
  text-decoration: none;
  padding: 1rem 1rem;
  transition: 0.3s ease-in-out;
  display: flex;
  gap: 0.5rem;
}

button.logout {
  color: red;
  text-decoration: none;
  padding: 1rem 1rem;
  transition: 0.3s ease-in-out;
  display: flex;
  gap: 0.5rem;
  background-color: transparent;
  border: 0;
  width: 100%;
  cursor: pointer;
}

a.drop:hover,
button.logout:hover,
a.login:hover {
  background-color: #1c1c1f;
}

.menu {
  display: flex;
  gap: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  border: 1px solid main.$standard-pink;
  padding: 1rem;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}

.menu:hover {
  background-color: main.$standard-pink;
}
</style>
