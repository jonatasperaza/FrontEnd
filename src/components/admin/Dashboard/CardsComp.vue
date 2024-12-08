<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  option: Object
})

function scrollToSection() {
  const section = document.getElementById(props.option.id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }) // Rolagem suave
  }
  window.scrollTo(0, 1700)
}
</script>

<template>
  <article @click="scrollToSection()">
    <div class="title">
      <h3>{{ props.option.title }}</h3>
    </div>
    <div class="info">
      <div class="number">
        <h2>{{ props.option.number }}</h2>
      </div>
      <div class="icon">
        <component :is="props.option.icon" :style="{ color: props.option.color }" :size="75" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/main';

a {
  text-decoration: none;
  color: white;
}

article {
  width: 100%;
  background-color: #070707;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

article:hover {
  background-color: #333;
  scale: 1.03;
}

.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  color: main.$standard-white;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  color: main.$standard-white;
}
</style>
