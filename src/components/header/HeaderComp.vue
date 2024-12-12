<script setup>
import DropdownComp from './DropdownComp.vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import Home from 'vue-material-design-icons/Home.vue'
import Logout from 'vue-material-design-icons/Logout.vue'
import Car from 'vue-material-design-icons/Car.vue'
import Login from 'vue-material-design-icons/Login.vue'
import Information from 'vue-material-design-icons/Information.vue'
import Account from 'vue-material-design-icons/Account.vue'
import MonitorDashboard from 'vue-material-design-icons/MonitorDashboard.vue'
import { useAuthStore } from '@/stores'
import { ref } from 'vue'
const store = useAuthStore()

const isOpen = ref(false)
</script>
<template>
  <header>
    <div class="container">
      <div class="logo"><img src="/public/logo.svg" class="imgLogo" alt="" /></div>
      <div class="drop">
        <DropdownComp />
      </div>
      <div class="menu" @click="isOpen = !isOpen">
        <Menu />
      </div>
      <nav v-if="isOpen">
        <router-link to="/">
          <Home />
          Home
        </router-link>
        <router-link to="/about">
          <Information />
          Sobre Nós
        </router-link>
        <router-link to="/vehicles">
          <Car />
          Veiculos
        </router-link>
        <router-link to="/make-order">
          <Home />
          Pedido
        </router-link>
        <router-link
          to="/client/profile"
          v-if="store.state.isLogged && store.state.type == 'client'"
        >
          <Account />
          Perfil
        </router-link>
        <router-link
          to="/employee/profile"
          v-if="store.state.isLogged && store.state.type == 'employee'"
        >
          <Account />
          Perfil
        </router-link>
        <router-link
          to="/driver/profile"
          v-if="store.state.isLogged && store.state.type == 'driver'"
        >
          <Account />
          Perfil
        </router-link>
        <router-link
          to="/admin/dashboard/"
          v-if="store.state.isLogged && store.state.type == 'employee'"
        >
          <MonitorDashboard />
          Dashboard
        </router-link>
        <router-link to="/login" v-if="!store.state.isLogged">
          <Login />
          Login
        </router-link>
        <button v-else @click="store.logout">
          <Logout />
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
@use '../../assets/main';

header {
  display: flex;
  align-items: center;
  background-color: main.$standard-black;
  height: 100px;
  padding: 1rem;
}

.container {
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
}

.imgLogo {
  width: 50%;
}

.navbar {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: main.$standard-black;
  z-index: 2;
  border: 1px solid main.$standard-pink;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
}

nav > a {
  margin: 10px auto 0;
  display: flex;
  justify-content: start;
  align-items: start;
  color: white;
  text-decoration: none;
  width: 100%;
  padding: 1rem;
  font-size: 15pt;
}

.login {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  .imgLogo {
    width: 220%;
  }

  .drop {
    display: none;
  }

  .container {
    display: grid;
    grid-template-columns: 6fr 1fr;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: 1px solid main.$standard-pink;
    padding: 1rem;
    border-radius: 10px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 15pt;
  }
}
</style>
