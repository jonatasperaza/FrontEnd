<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Eye from 'vue-material-design-icons/Eye.vue'
import { toast } from 'vue3-toastify'
const router = useRouter()

const routes = router.getRoutes()
const showDev = ref(false)
</script>

<template>
  <span @click="showDev = !showDev" class="eye"><Eye /></span>
  <p class="data" v-if="showDev">
    <button @click="toast.success('teste')">SUCESS</button>
    <button @click="toast.error('teste')">ERROR</button>
    <button @click="toast.warn('teste')">WARN</button>
    <button @click="toast.info('teste')">INFO</button>
    <RouterLink v-for="link in routes" :key="link.path" :to="link.path">{{ link.name }}</RouterLink>
  </p>
</template>
<style scoped>
p.data {
  position: absolute;
  color: white;
  background-color: #760038;
  padding: 10px;
  border-radius: 10px;
  top: 35px;
  left: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;
}

a {
  color: white;
  text-decoration: none;
  border: 2px solid white;
  padding: 7px;
  /* font-size: 1.5rem;;;;;;/ */
}

a:hover {
  background-color: #fc1d87;
  color: black;
}

.eye {
  cursor: pointer;
  position: absolute;
  color: white;
  top: 10px;
  left: 10px;
}
</style>
