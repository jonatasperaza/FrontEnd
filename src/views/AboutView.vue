<script setup>
import { onMounted } from 'vue';
import { FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection} from "@/components/about/";

onMounted(() => {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Para de observar após aparecer
        }
      });
    },
    { threshold: 0.1 } // Elemento é visível com 10% de interseção
  );

  elements.forEach((el) => observer.observe(el));
});
</script>

<template>
  <div>
    <FirstSection class="hidden fade-in" />
    <SecondSection class="hidden fade-in" />
    <ThirdSection class="hidden fade-in" />
    <FourthSection class="hidden fade-in" />
    <FifthSection class="hidden fade-in" />
  </div>
</template>

<style scoped>
.hidden {
  opacity: 0;
  transform: translateY(20px); /* Inicialmente deslocado para baixo */
  transition: opacity 0.6s, transform 0.6s; /* Animação suave */
}

.visible {
  opacity: 1;
  transform: translateY(0); /* Retorna para a posição original */
}
</style>
